// Header
const nav_ul = document.getElementById("nav_ul");
const sub_text = document.createElement("sub")
sub_text.textContent = config.sitio[1];
nav_ul.children[0].append( config.sitio[0],sub_text,config.sitio[2]);
nav_ul.children[1].textContent = "Hola, " + config.nombre;

document.getElementsByName("name")[1].textContent = config.buscar; // Texto del boton de buscar

// Body