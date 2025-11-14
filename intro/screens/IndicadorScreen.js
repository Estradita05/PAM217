import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Share,
} from 'react-native';

/*
  Asegúrate de poner las imágenes en ./assets con los nombres indicados (ver nota arriba).
  Si tu estructura es diferente, ajusta las rutas de require(...) abajo.
*/
const IMAGES = {
  deportes1: require('./assets/deportes1.jpg'),
  deportes2: require('./assets/deportes2.jpg'),
  nacional1: require('./assets/nacional1.jpg'),
  nacional2: require('./assets/nacional2.jpg'),
  entretenimiento1: require('./assets/entretenimiento1.jpg'),
  entretenimiento2: require('./assets/entretenimiento2.jpg'),
  tecnologia1: require('./assets/tecnologia1.jpg'),
  tecnologia2: require('./assets/tecnologia2.jpg'),
};

// Datos de ejemplo: 4 secciones x 2 artículos
const PORTAL_NAME = 'La Voz Digital';

const SECTIONS = [
  {
    key: 'deportes',
    title: 'Deportes',
    articles: [
      {
        id: 'd1',
        title: 'Triunfo histórico en la final',
        date: '2025-11-05',
        summary:
          'El equipo logró una remontada épica en el último cuarto, asegurando el campeonato tras años de espera.',
        image: IMAGES.deportes1,
      },
      {
        id: 'd2',
        title: 'El joven promesa debuta en la liga',
        date: '2025-10-28',
        summary:
          'Con tan solo 18 años, el nuevo jugador mostró destellos que ilusionan a la afición y a los expertos.',
        image: IMAGES.deportes2,
      },
    ],
  },
  {
    key: 'nacional',
    title: 'Nacional',
    articles: [
      {
        id: 'n1',
        title: 'Nuevo plan de infraestructura anunciado',
        date: '2025-11-01',
        summary:
          'El gobierno presentó un paquete de inversión que promete mejorar carreteras y servicios en varias regiones.',
        image: IMAGES.nacional1,
      },
      {
        id: 'n2',
        title: 'Debate sobre políticas públicas en marcha',
        date: '2025-10-20',
        summary:
          'Especialistas discuten el impacto a largo plazo de las propuestas recientes en materia social y económica.',
        image: IMAGES.nacional2,
      },
    ],
  },
  {
    key: 'entretenimiento',
    title: 'Entretenimiento',
    articles: [
      {
        id: 'e1',
        title: 'Estreno que rompe récords de taquilla',
        date: '2025-10-30',
        summary:
          'La nueva película se posiciona como la más vista del fin de semana, con críticas positivas por su guion.',
        image: IMAGES.entretenimiento1,
      },
      {
        id: 'e2',
        title: 'Festival cultural atrae a miles',
        date: '2025-09-12',
        summary:
          'Música, arte y gastronomía se encuentran en un evento que celebra la diversidad regional.',
        image: IMAGES.entretenimiento2,
      },
    ],
  },
  {
    key: 'tecnologia',
    title: 'Tecnología',
    articles: [
      {
        id: 't1',
        title: 'Avances en IA abren nuevas oportunidades',
        date: '2025-11-03',
        summary:
          'Empresas y universidades colaboran en proyectos que podrían cambiar sectores como salud y educación.',
        image: IMAGES.tecnologia1,
      },
      {
        id: 't2',
        title: 'Lanzamiento de gadget con características innovadoras',
        date: '2025-10-18',
        summary:
          'El nuevo dispositivo promete mayor duración de batería y características pensadas para la productividad.',
        image: IMAGES.tecnologia2,
      },
    ],
  },
];

export default function IndicadorScreen() {
  const [saved, setSaved] = useState({}); // objeto { articleId: true }

  const handleLeerMas = (article) => {
    Alert.alert(
      article.title,
      `¿Qué deseas hacer con el artículo?`,
      [
        {
          text: 'Compartir',
          onPress: async () => {
            try {
              await Share.share({
                message: `${article.title}\n\n${article.summary}\n\nLeído en ${PORTAL_NAME}`,
              });
            } catch (error) {
              Alert.alert('Error', 'No se pudo compartir el artículo.');
            }
          },
        },
        {
          text: saved[article.id] ? 'Quitar guardado' : 'Guardar',
          onPress: () => {
            setSaved((prev) => {
              const newState = { ...prev };
              if (newState[article.id]) {
                delete newState[article.id];
                Alert.alert('Guardado', 'Artículo eliminado de favoritos.');
              } else {
                newState[article.id] = true;
                Alert.alert('Guardado', 'Artículo guardado en favoritos.');
              }
              return newState;
            });
          },
        },
        {
          text: 'Cerrar',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Encabezado fijo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{PORTAL_NAME}</Text>
      </View>

      {/* Scroll principal con secciones */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {SECTIONS.map((section) => (
          <View key={section.key} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.articles.map((article) => (
              <View key={article.id} style={styles.card}>
                <Image source={article.image} style={styles.cardImage} resizeMode="cover" />
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{article.title}</Text>
                  <Text style={styles.cardDate}>{article.date}</Text>
                  <Text style={styles.cardSummary} numberOfLines={3}>
                    {article.summary}
                  </Text>

                  <View style={styles.cardActions}>
                    <Button title="Leer más" onPress={() => handleLeerMas(article)} />
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Espacio final */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#c91994ff', // siguiendo tu paleta rosa del ejemplo
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#4b2a4a',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
    // sombra (iOS y Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#2f1b2f',
  },
  cardDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  cardSummary: {
    fontSize: 14,
    lineHeight: 18,
    color: '#333',
    marginBottom: 10,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
