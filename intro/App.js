//1. Imports: Zona de importaciones
import ContadorScreen from "./screens/ContadorScreen"

//2.Main: Zona de componentes 
export default function App() {
  const[contador, setContador]=useState(0);

  return (
    <ContadorScreen> </ContadorScreen>
  );
}