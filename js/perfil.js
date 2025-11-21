perfil_img = document.getElementById("perfil-img");
perfil_img.src = perfiles[0].imagen;

perfil = document.getElementById("perfil");

perfil_nombre = document.createElement("h1");
perfil_nombre.textContent = perfil_.nombre;

descripcion = document.createElement("p");
descripcion.textContent = perfil_.descripcion;

color = document.createElement("p");
libro = document.createElement("p");
juego = document.createElement("p");
musica = document.createElement("p");
lenguajes = document.createElement("p");
lenguajes = document.createElement("p");

color.textContent = "Color favorito: " + perfil_.color;
libro.textContent = "Libro favorito: " + perfil_.libro;
juego.textContent = "Juego favorito: " + perfil_.juego;
musica.textContent = "Musica favorito: " + perfil_.musica;
lenguajes.textContent = config.lenguajes+": " + perfil_.lenguajes;

perfil.append(perfil_nombre);
perfil.append(descripcion);
perfil.append(color);
perfil.append(libro);
perfil.append(juego);
perfil.append(musica);
perfil.append(lenguajes);
