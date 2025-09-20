const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

// use .filter para obtener productos con precio mayor a 1000
const filtrados = productos.filter(p => p.precio > 1000);

// use .map para obtener solo los nombres
const nombres = filtrados.map(p => p.nombre);

console.log(nombres); 
