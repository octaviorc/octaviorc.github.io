//obtener los elementos de la clase .clase//

let links = document.querySelectorAll(".close");

//recorrerlos

links.forEach(function(link) {

    //Agregar un evento click a cada uno de ellos - case semsivite
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeIn");
        content.classList.remove("animate__animated");

        //quitarles las clases de animacion q ya tiene
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function() {
            window.history.go(-1);
        }, 600);

        return false;

    });
});
