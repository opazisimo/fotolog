/*

Ejercicio guiado Flog: La idea es poder escribir nuestro nombre y comentario
para dejarlo en el fotolog.

Para esto seguiremos la siguiente estructura/instrucciones en los pasos:

-Crear el elemento
-Crear el nodo de texto
-Añadir el nodo de texto al elemento
-Agregar atributos al elemento
-Agregar el elemento al documento


*/

function agregaPosteo() {

  var containerPosteos = document.getElementById("contenedor-posteos");
  // Es la caja que contendrá nuestros posteos

  var nuevoPost = document.createElement("div");
  // Es el elemento que creamos. Es donde irá nuestro post


  var nombreFF = document.getElementById("nombre").value;
  // Acá rescatamos el nombre que puso el usuario


  var contenidoFF = document.getElementById("cajaposteos").value;
  // Acá rescatamos el contenido del posteo



  // Ahora veamos donde metemos esos valores
  var contenedorNombre = document.createElement("strong");
  var contenedorPost = document.createElement("p");
  var separacíon = document.createElement("hr");


  // Ahora hay que transformar el nombre a nodo de texto
  var nodoNombre = document.createTextNode(nombreFF + " escribió:");
  var nodoPosteo = document.createTextNode(contenidoFF);


  // Ahora metemos esos nodos de texto a los elementos que ya creamos
  contenedorNombre.appendChild(nodoNombre);
  contenedorPost.appendChild(nodoPosteo);


  // Ahora agregamos el nombre y el contenido del posteo al post
  nuevoPost.appendChild(contenedorNombre);
  nuevoPost.appendChild(contenedorPost);
  nuevoPost.appendChild(separacíon);

  // Finalmente, le damos atributos a nuestro post y lo metemos en el contenedor de posteos
  nuevoPost.setAttribute("class", "posteo");
  containerPosteos.appendChild(nuevoPost);


}