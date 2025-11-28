import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
        // Inicializar el controlador con el Service
        this.initialize();
    }

    async initialize() {
        await DatabaseService.initialize();
    }

    // Obtener usuarios (SELECT)
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            // Convertir datos crudos a instancias del modelo Usuario
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

        // Crear usuario (INSERT)
    async crearUsuario(nombre) {
        try {
            // 1. Validar datos usando el Modelo
            Usuario.validar(nombre);

            // 2. Insertar en BD usando el Servicio
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores (actualizar la vista)
            this.notifyListeners();

            // 4. Retornar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }
 
      async actualizarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            await DatabaseService.update(id, nombre);
            this.notifyListeners();
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            throw error;
        }
    }

    async eliminarUsuario(id) {
        try {
            await DatabaseService.delete(id);
            this.notifyListeners();
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            throw error;
        }
    }


    // --- Sistema de Observadores ---
    // Esto permite que la pantalla se actualice sola cuando guardamos un dato
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}