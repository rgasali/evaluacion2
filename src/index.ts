let btnCargaVector = <HTMLButtonElement>(
  document.getElementById("btnCargaVector")
);
let btnCargaValores = <HTMLButtonElement>(
  document.getElementById("btnCargaValores")
);
let divMenor = <HTMLDivElement>document.getElementById("divMenor");
let divMayor = <HTMLDivElement>document.getElementById("divMayor");
let divMedia = <HTMLDivElement>document.getElementById("divMedia");
let arreglo: number[] = new Array();
let valorMedio = 0;
let testearNumero = new RegExp("^[0-9]*$");
let largoVector: number;
let valorIngresado: number;

btnCargaVector.addEventListener("click", () => {
  largoVector = Number(prompt("ingrese el tamaño del vector"));
  while (!testearNumero.test(largoVector)) {
    largoVector = Number(prompt("el valor ingresado debe ser un numero"));
  }
  arreglo.length = largoVector;
});

btnCargaValores.addEventListener("click", () => {
  for (let i = 0; i < arreglo.length; i++) {
    valorIngresado = Number(prompt("ingrese un valor al vector"));
    while (!testearNumero.test(valorIngresado)) {
      valorIngresado = Number(prompt("el valor ingresado debe ser un numero"));
    }
    arreglo[i] = valorIngresado;

    valorMedio = valorMedio + Number(arreglo[i]);
  }

  valorMedio = valorMedio / arreglo.length;

  divMayor.innerHTML = `el valor mayor del vector es ${Number(
    Math.max(...arreglo)
  )}`;
  divMenor.innerHTML = `el valor menor del vector es ${Number(
    Math.min(...arreglo)
  )}`;
  divMedia.innerHTML = `el valor medio del vector es ${valorMedio}`;
});
