


/* hacemos el evento del btn de tres rayas donde nos oculta y muestra el menu
del nav


1 Escribimos document.querySelector que recive como argumento la clase que tiene
el boton o icono que queremos ejecutar (".menu-btn" )

2. instanciamos el metodo .addEventListener con el argumento "click" que va a tener una
funcion que retorna lo que hay en el (".nav-menu")

3. Añadimos una clase llamada .classList con el metodo .toggle que me permite
que en cada click quite o agregue la clase ("show") del nav-menu
*/ 

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".imagen-principal");
ScrollReveal().reveal(".Modalidades");
ScrollReveal().reveal(".news-cards",{ delay: 500});
ScrollReveal().reveal(".cards-banner-one",{ delay: 500});
ScrollReveal().reveal(".cards-banner-two",{ delay: 500});
ScrollReveal().reveal(".social",{ delay: 500});
ScrollReveal().reveal(".footer-links",{ delay: 500});





