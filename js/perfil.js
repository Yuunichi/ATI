let perfil_img = document.getElementById("perfil-img");
perfil_img.src = perfiles[0].imagen;
let perfilElement = document.getElementById("perfil");

let perfil_nombre = document.createElement("h1");
perfil_nombre.textContent = perfil.nombre;

let descripcion = document.createElement("p");
let descripcion_italic = document.createElement("i");
descripcion.append(descripcion_italic);
descripcion_italic.textContent = perfil.descripcion;

let color = document.createElement("p");
let libro = document.createElement("p");
let juego = document.createElement("p");
let musica = document.createElement("p");
let lenguajes = document.createElement("p");
let bold = document.createElement("b");
let p_email = document.createElement("p");
let email = document.createElement("a");

color.textContent = "Color favorito: " + perfil.color;
libro.textContent = "Libro favorito: " + perfil.libro;
juego.textContent = "Juego favorito: " + perfil.video_juego;
musica.textContent = "Musica favorito: " + perfil.musica;
bold.textContent = config.lenguajes + ": " + perfil.lenguajes;
p_email.textContent = config.email;
email.textContent = perfil.email;
email.href = "mailto:" + perfil.email;
email.id = "email";

perfilElement.append(perfil_nombre);
perfilElement.append(descripcion);
perfilElement.append(color);
perfilElement.append(libro);
perfilElement.append(juego);
perfilElement.append(musica);
perfilElement.append(lenguajes);
lenguajes.append(bold);
p_email.append(email);
perfilElement.append(p_email);
