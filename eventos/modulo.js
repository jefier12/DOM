export const esValido = (e) => {
  e.preventDefault();
  const obj = {};
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute('required')
  });

  const radios = [...campos].filter((elemento) => {
    return elemento.type === "radio";
  });

  const checkbox = [...campos].filter((elemento) => elemento.type === "checkbox");

  const campo_radio = radios.find((radio) => radio.checked) || [];
  if (campo_radio.length === 0) {
    obj[radios[0].name] = "";
  }
  else {

  }


  campos.forEach(campo => {

    switch (campo.tagName) {

      case 'INPUT':
        console.log(campo.type);


        if (campo.value == 0) {
          campo.classlist.add("error");
          obbjeto(cont) = campo.type;
          cont++;
        }

        break;

      case 'SELECT':
        console.log(campo.type);

        if (campo.value = 0) {
          campo.classlist.add("error");
          obbjeto(cont) = campo.type;
          cont++;
        }


        break;

      default:
        break;
    }

    console.log(campo);

    if (campo.value === "") {
      campo.classlist.add("error");
    }

    console.log(campo.SelectedIndex);
  });


}

