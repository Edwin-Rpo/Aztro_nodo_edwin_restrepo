document.getElementById('form-datos-circulo').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputRadio = document.getElementById('radio-circulo');
  const inputPerimetro = document.getElementById('perimetro-circulo');
  const inputArea = document.getElementById('area-circulo');

  let radio = parseFloat(inputRadio.value);
  let area = Math.PI * Math.pow(radio, 2);
  inputArea.value = `${area.toFixed(2)} m²`;

  let perimetro = 2 * Math.PI * radio;
  inputPerimetro.value = `${perimetro.toFixed(2)} m²`;
});

document.getElementById('formulario-rectangulo').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputBase = document.getElementById('base-rectangulo');
  const inputAltura = document.getElementById('altura-rectangulo');
  const inputArea = document.getElementById('area-rectangulo');
  const inputPerimetro = document.getElementById('perimetro-rectangulo');
  const inputDiagonal = document.getElementById('diagonal-rectangulo');

  let base = parseFloat(inputBase.value);
  let altura = parseFloat(inputAltura.value);

  let area = base * altura;
  inputArea.value = `${area.toFixed(2)} m²`;

  let perimetro = base * 2 + altura * 2;
  inputPerimetro.value = `${perimetro.toFixed(2)} m²`;

  let diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
  inputDiagonal.value = `${diagonal.toFixed(2)} m²`;
});