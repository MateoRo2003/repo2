//FUNCIONALIDADES PÁGINA 2
//datos curiosos
if (location.href.includes("receta.html")) {
    let datoCurioso = document.querySelector(".pDatoCurioso");
    let btnDatoCurioso = document.querySelector("#btnDatoCurioso");
    let datosCuriosos = [
      "Son una excelente fuente de proteínas, fibra, hierro y ácido fólico, lo que los convierte en un alimento esencial en muchas dietas vegetarianas.",
      "Los garbanzos, también conocidos como chícharos o chicharos, son una de las legumbres más antiguas, cultivadas desde hace más de 7500 años en el Medio Oriente.",
      "Los garbanzos son el ingrediente principal del hummus, un popular dip mediterráneo, y de los falafel, una comida callejera tradicional del Medio Oriente.",
      "Existen dos variedades principales de garbanzos: desi, que es pequeño y oscuro, y kabuli, que es más grande y claro.",
      "Los garbanzos pueden ayudar a controlar el azúcar en sangre debido a su bajo índice glucémico, lo que los hace beneficiosos para las personas con diabetes.",
      "Los garbanzos pueden ayudar a controlar el azúcar en sangre debido a su bajo índice glucémico, lo que los hace beneficiosos para las personas con diabetes.",
      "Son un cultivo resistente a la sequía, lo que los hace especialmente valiosos en regiones con poca disponibilidad de agua.",
      "Los garbanzos contienen antioxidantes, que ayudan a combatir el daño celular y pueden contribuir a la prevención de enfermedades crónicas.",
      "En algunas culturas, se cree que comer garbanzos trae buena suerte, especialmente en celebraciones de Año Nuevo",
      "Los garbanzos, una vez cocidos, se pueden congelar y conservar durante meses, lo que facilita su uso en diversas preparaciones culinarias.",
    ];
  
    btnDatoCurioso.addEventListener("click", function () {
      // Hago un numero aleatorio de los 10 datos
      let indiceAlAzar = Math.floor(Math.random() * datosCuriosos.length);
      // Mostrar el dato curioso correspondiente
      datoCurioso.textContent = datosCuriosos[indiceAlAzar];
    });
  }