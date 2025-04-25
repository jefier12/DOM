export const esValido = (e) => {
  e.preventDefault();
  //todos los requeridos
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute('required')
  });
  //recorreremos los elementos
  campos.forEach(campo => {
    switch (campo.tagName) {
      case 'INPUT':
        console.log(campo.type);
        break;

      case 'SELECT':
        console.log(campo.type);
        break;

      default:
        break;
    }
    console.log(campo);
    if (campo.value === "") {
      campo.classlist.add("error");
    }
    // console.log(campo.selectedIndex);
  });
}

