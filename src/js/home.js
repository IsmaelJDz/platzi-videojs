console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUser = new Promise(function(resolve, reject) {
    setTimeout(function () {
      reject();
    }, 3000)
});

getUser
  .then(function () {
    console.log('hola todo esta ok')
  })
  .catch(function () {
    console.log('todo fallo :( ');
  })

  Promise.all([
    getUser,
    getUser,
  ])
    .then(function () {
      console.log('todo esta ok')
    })
    .catch(function () {
      console.log('fallo promise all');
    })
