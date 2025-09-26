function VerificarUsuario(usuario) {
  return new Promise((resolve, reject) => 
    {
    if (usuario && usuario.length > 0) 
        {
      resolve(`Hola, ${usuario}!`);
    } else {
      reject("Error, el nombre no puede estar vacío");
    }
  });
}


VerificarUsuario("Montse")
.then(res => console.log(res))  
.catch(err => console.error(err));   


VerificarUsuario("Estrada")
  .then(res => console.log(res))
  .catch(err => console.error(err));


