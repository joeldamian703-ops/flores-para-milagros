/* ============================================
   ELEMENTOS
============================================ */

const botonRegalo =
    document.getElementById(
        "botonRegalo"
    );


const botonSorpresa =
    document.getElementById(
        "botonSorpresa"
    );


const botonMusica =
    document.getElementById(
        "botonMusica"
    );


const inicio =
    document.getElementById(
        "inicio"
    );


const regalo =
    document.getElementById(
        "regalo"
    );


const sorpresaFinal =
    document.getElementById(
        "sorpresaFinal"
    );


const animaciones =
    document.getElementById(
        "animaciones"
    );



/* ============================================
   VARIABLES DE YOUTUBE
============================================ */

let player;

let youtubeListo = false;

let musicaActiva = false;



/* ============================================
   CREAR REPRODUCTOR YOUTUBE
============================================ */

function onYouTubeIframeAPIReady() {

    player = new YT.Player(
        "youtubePlayer",
        {

            height: "1",

            width: "1",

            videoId:
                "XNIAdya3zBA",

            playerVars: {

                autoplay: 0,

                controls: 0,

                disablekb: 1,

                fs: 0,

                modestbranding: 1,

                playsinline: 1,

                loop: 1,

                playlist:
                    "XNIAdya3zBA",

                rel: 0

            },

            events: {

                onReady:
                    function () {

                        youtubeListo = true;

                        console.log(
                            "La música está lista 💛"
                        );

                    }

            }

        }
    );

}



/* ============================================
   FUNCIÓN REPRODUCIR MÚSICA
============================================ */

function reproducirMusica() {

    if (!youtubeListo || !player) {
        return;
    }

    player.playVideo();

    musicaActiva = true;

    botonMusica.textContent =
        "🎵";

}



/* ============================================
   BOTÓN DE MÚSICA
============================================ */

botonMusica.addEventListener(
    "click",
    () => {

        if (!youtubeListo || !player) {
            return;
        }


        if (musicaActiva) {

            player.pauseVideo();

            musicaActiva = false;

            botonMusica.textContent =
                "🔇";

        } else {

            player.playVideo();

            musicaActiva = true;

            botonMusica.textContent =
                "🎵";

        }

    }
);



/* ============================================
   ABRIR REGALO
============================================ */

botonRegalo.addEventListener(
    "click",
    () => {

        /* Inicia la música gracias al toque
           del usuario */

        reproducirMusica();


        inicio.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";


        inicio.style.opacity =
            "0";


        inicio.style.transform =
            "scale(0.95)";


        setTimeout(
            () => {

                inicio.style.display =
                    "none";


                regalo.classList.remove(
                    "oculto"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /* FLORES Y CORAZONES */

                for (
                    let i = 0;
                    i < 20;
                    i++
                ) {

                    setTimeout(
                        () => {

                            crearElementoFlotante();

                        },
                        i * 130
                    );

                }

            },
            500
        );

    }
);



/* ============================================
   ABRIR SORPRESA FINAL
============================================ */

botonSorpresa.addEventListener(
    "click",
    () => {

        regalo.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";


        regalo.style.opacity =
            "0";


        regalo.style.transform =
            "translateY(-20px)";


        setTimeout(
            () => {

                regalo.style.display =
                    "none";


                sorpresaFinal.classList.remove(
                    "oculto"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /* PRIMERA LLUVIA */

                for (
                    let i = 0;
                    i < 16;
                    i++
                ) {

                    setTimeout(
                        () => {

                            crearElementoFlotante(
                                true
                            );

                        },
                        i * 130
                    );

                }


                /* SEGUNDA EXPLOSIÓN */

                setTimeout(
                    () => {

                        for (
                            let i = 0;
                            i < 25;
                            i++
                        ) {

                            setTimeout(
                                () => {

                                    crearElementoFlotante(
                                        true
                                    );

                                },
                                i * 80
                            );

                        }

                    },
                    1400
                );


                /* DESTELLOS */

                setTimeout(
                    () => {

                        crearExplosionDestellos();

                    },
                    1000
                );

            },
            500
        );

    }
);



/* ============================================
   FLORES Y CORAZONES
============================================ */

function crearElementoFlotante(
    modoFiesta = false
) {

    const elemento =
        document.createElement(
            "span"
        );


    const emojis = [
        "🌻",
        "🌻",
        "🌻",
        "💛",
        "💛",
        "✨"
    ];


    const emoji =
        emojis[
            Math.floor(
                Math.random()
                * emojis.length
            )
        ];


    elemento.textContent =
        emoji;


    if (emoji === "💛") {

        elemento.classList.add(
            "corazon-flotante"
        );

    } else {

        elemento.classList.add(
            "flor-flotante"
        );

    }


    elemento.style.left =
        Math.random()
        * 100
        + "vw";


    let tamaño;


    if (modoFiesta) {

        tamaño =
            Math.random()
            * 27
            + 23;

    } else {

        tamaño =
            Math.random()
            * 20
            + 18;

    }


    elemento.style.fontSize =
        tamaño
        + "px";


    const duracion =
        Math.random()
        * 4
        + 5;


    elemento.style.animationDuration =
        duracion
        + "s";


    animaciones.appendChild(
        elemento
    );


    setTimeout(
        () => {

            elemento.remove();

        },
        duracion
        * 1000
    );

}



/* ============================================
   DESTELLOS
============================================ */

function crearExplosionDestellos() {

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const brillo =
            document.createElement(
                "span"
            );


        brillo.textContent =
            "✨";


        brillo.style.position =
            "fixed";


        brillo.style.left =
            (
                20
                +
                Math.random()
                * 60
            )
            + "vw";


        brillo.style.top =
            (
                20
                +
                Math.random()
                * 55
            )
            + "vh";


        brillo.style.fontSize =
            (
                Math.random()
                * 18
                + 15
            )
            + "px";


        brillo.style.pointerEvents =
            "none";


        brillo.style.zIndex =
            "50";


        brillo.style.animation =
            "destello 1.3s ease forwards";


        document.body.appendChild(
            brillo
        );


        setTimeout(
            () => {

                brillo.remove();

            },
            1300
        );

    }

}



/* ============================================
   ANIMACIÓN DE DESTELLO
============================================ */

const estilosExtra =
    document.createElement(
        "style"
    );


estilosExtra.textContent = `

@keyframes destello {

    0% {

        opacity: 0;

        transform:
            scale(0)
            rotate(0deg);

    }

    50% {

        opacity: 1;

        transform:
            scale(1.4)
            rotate(180deg);

    }

    100% {

        opacity: 0;

        transform:
            scale(0.5)
            rotate(360deg);

    }

}

`;


document.head.appendChild(
    estilosExtra
);



/* ============================================
   FLORES AMBIENTALES
============================================ */

setInterval(
    () => {

        crearElementoFlotante();

    },
    1800
);