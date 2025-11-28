import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, SafeAreaView } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioControllers';

// Instanciamos el controlador
const controller = new UsuarioController();

export default function InsertUsuarioScreen() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);
    const [guardando, setGuardando] = useState(false);
    const [editandoId, setEditandoId] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');

    // SELECT: Función para cargar usuarios
    const cargarUsuarios = useCallback(async () => {
        try {
            setLoading(true);
            const data = await controller.obtenerUsuarios();
            setUsuarios(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Efecto inicial: Inicializa BD y carga datos
    useEffect(() => {
        const init = async () => {
            // Esperamos un poco para asegurar que la BD esté lista (opcional, pero seguro)
            await new Promise(resolve => setTimeout(resolve, 100)); 
            await cargarUsuarios();
        };
        init();

        // Suscribirse a cambios (Observer Pattern)
        controller.addListener(cargarUsuarios);

        return () => {
            controller.removeListener(cargarUsuarios);
        };
    }, [cargarUsuarios]);

    // INSERT: Agregar nuevo usuario
    const handleAgregar = async () => {
        if (guardando) return;
        
        try {
            setGuardando(true);
            const usuarioCreado = await controller.crearUsuario(nombre);
            Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
            setNombre('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    };

    // Componente para renderizar cada ítem de la lista
    const renderUsuario = ({ item, index }) => (
        <View style={styles.userItem}>
            <View style={styles.userNumber}>
                <Text style={styles.userNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.nombre}</Text>
                <Text style={styles.userId}>ID: {item.id}</Text>
                <Text style={styles.userDate}>
                    {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </Text>
            </View>
            
            <TouchableOpacity
            onPress={()=> {
                setEditandoId(item.id);
                setNuevoNombre(item.nombre);
            } }
            >
                <Text style={{ color: 'blue', marginRight: 10 }}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={( ) =>
                Alert.alert( "Eliminar Usuario", "¿Estás seguro de eliminar este usuario?", [
                    { text: "Cancelar"},
                    { text: "Eliminar",  onPress: async () => await controller.eliminarUsuario(item.id) }
                ])
            }
            >
                <Text style={{ color: 'red' }}>Eliminar</Text>
            </TouchableOpacity>

        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerTitle}>INSERT & SELECT</Text>
                <Text style={styles.subHeader}> iOS (SQLite)</Text>

                {/* Formulario Insertar */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Insertar Usuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe el nombre del usuario"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <TouchableOpacity 
                        style={[styles.button, guardando && styles.buttonDisabled]} 
                        onPress={handleAgregar}
                        disabled={guardando}
                    >
                        {guardando ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Agregar Usuario</Text>
                        )}
                    </TouchableOpacity>
                </View>

                {editandoId && (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Editar Usuario</Text>

                        <TextInput
                            style={styles.input}
                            value={nuevoNombre}
                            onChangeText={setNuevoNombre}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={async () => {
                                await controller.actualizarUsuario(editandoId, nuevoNombre);
                                setEditandoId(null);
                                setNuevoNombre("");
                            }}
                        >
                            <Text style={styles.buttonText}>Guardar Cambios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                setEditandoId(null);
                                setNuevoNombre("");
                            }}
                        >
                            <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Lista Select */}
                <View style={[styles.card, styles.listCard]}>
                    <View style={styles.listHeader}>
                        <Text style={styles.cardTitle}>Lista de Usuarios</Text>
                        <TouchableOpacity onPress={cargarUsuarios}>
                            <Text style={styles.reloadText}>Recargar</Text>
                        </TouchableOpacity>
                    </View>

                    {loading ? (
                        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
                    ) : (
                        <FlatList
                            data={usuarios}
                            keyExtractor={item => item.id.toString()}
                            renderItem={renderUsuario}
                            ListEmptyComponent={
                                <Text style={styles.emptyText}>No hay usuarios registrados</Text>
                            }
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1a1a1a',
        marginTop: 10,
    },
    subHeader: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    listCard: {
        flex: 1, // Para que la lista ocupe el resto del espacio
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#333',
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#b3d7ff',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    reloadText: {
        color: '#007bff',
        fontSize: 14,
    },
    userItem: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'center',
    },
    userNumber: {
        width: 30,
        height: 30,
        backgroundColor: '#007bff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    userNumberText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    userId: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    userDate: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
    },
    emptyText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 20,
        fontStyle: 'italic',
    },
});