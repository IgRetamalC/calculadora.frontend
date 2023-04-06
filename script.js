const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    //Cuando se presiona C la pantalla vuelve a Cero y se aplica return para terminar la función
    //Si no se agrega el return se aplicarian los if que muestra en pantalla lo presionado
    //Mostrando C en pantalla
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }
    if (boton.id === "borrar") {
      //En caso de que tratemos de borrar un solo dígito de la pantalla, volverá a cero
      //sin esta condición borrariamos todo el campo de texto de la calculadora
      if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
        pantalla.textContent = "0";
      } else {
        //Se corta desde la posicion 0 hasta el último número
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }
    if (boton.id === "igual"){
        try {
          //la función eval permite interpretar string a operaciones matemáticas
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Error!"
        }
        return;
    }
    //Muestra en pantalla el botón presionado
    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
}); 