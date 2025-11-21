// Header
const nav_ul = document.getElementById("nav_ul");
const sub_text = document.createElement("sub")
sub_text.textContent = config.sitio[1];
nav_ul.children[0].append( config.sitio[0],sub_text,config.sitio[2]);
nav_ul.children[1].textContent = "Hola, " + config.nombre;

document.getElementsByName("name")[1].textContent = config.buscar; // Texto del boton de buscar

// Section

directorio = document.getElementById("directorio");
let i=0;
perfiles.forEach( perfil => {
    // div contenedores
    entrada = document.createElement("div");
    entrada.className = "entrada_directorio";
    entrada.classList.add("index-" + i);
    i++;
    // foto
    foto_perfil = document.createElement("img");
    foto_perfil.src = perfil.imagen;    
    // nombre
    nombre = document.createElement("p");
    nombre.textContent = perfil.nombre;
    // cedula
    cedula = document.createElement("p");
    cedula.textContent = perfil.ci;
    // Se añaden como hijos del div correspondientes    
    entrada.append(foto_perfil,nombre,cedula);
    directorio.append(entrada);
});

// Footer

copy = document.createElement("p");
copy.textContent = config.copyRight;
footer = document.getElementsByTagName("footer")[0];
footer.append(copy);