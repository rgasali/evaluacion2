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

btnCargaVector.addEventListener("click", () => {
  arreglo.length = Number(prompt("ingrese el tamaño del vector"));
});

btnCargaValores.addEventListener("click", () => {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = Number(prompt("ingrese un valor al vector"));
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
