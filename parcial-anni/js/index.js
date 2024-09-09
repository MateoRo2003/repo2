// FUNCIONALIDADES PÁGINA INDEX
// Confirmación y redireccionamiento
if (location.href.includes("index.html")) {
    let respuesta = confirm("¿Querés ingresar a la página?");
    if (respuesta) {
      let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
      if (nombreUsuario) {
        document.getElementById("mensajeBienvenida").textContent = `¡Bienvenido, ${nombreUsuario}!`;
      }
    } else {
      alert("Hasta luego :(");
      location.assign("https://multimedia.una.edu.ar/");
    }
  }
  
  // Mostrar y ocultar imágenes
  let imagenesFrutas = document.querySelectorAll(".img"); // Selecciono todas las imágenes de frutas
  let imagenesOjo = document.querySelectorAll(".imgOjo"); // Selecciono todas las imágenes de ojos
  
  // Iteraro para cada imagen de frutas para agregar el evento //INDEX Y PAGINA 2
  for (let i = 0; i < imagenesFrutas.length; i++) {
    imagenesFrutas[i].addEventListener("click", function () {
      this.style.display = "none"; // si hago click sobre img de fruta, la oculta
      imagenesOjo[i].style.display = "block"; // y muestra la  imagen del ojo
    });
  
    imagenesOjo[i].addEventListener("click", function () {
      this.style.display = "none"; // si hago click sobre la imagen del ojo la oculta
      imagenesFrutas[i].style.display = "block"; // y vuelve a mostrar la fruta
    });
  }