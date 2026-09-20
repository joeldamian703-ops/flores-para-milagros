/* ============================================
   ELEMENTOS
============================================ */

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


const animaciones =
    document.getElementById(
        "animaciones"
    );



/* ============================================
   CONFIGURACIÓN YOUTUBE
============================================ */

let player = null;

let youtubeListo = false;

let musicaActiva = false;


/*
    Esta es la PRIMERA canción
    que estábamos usando.
*/

const VIDEO_ID =
    "XNIAdya3zBA";



/* ============================================
   CUANDO CARGA YOUTUBE
============================================ */

function onYouTubeIframeAPIReady() {

    player = new YT.Player(
        "youtubePlayer",
        {

            width: "200",

            height: "113",

            videoId:
                VIDEO_ID,


            playerVars: {

                autoplay: 0,

                controls: 0,

                disablekb: 1,

                fs: 0,

                playsinline: 1,

                rel: 0,

                loop: 1,

                playlist:
                    VIDEO_ID

            },


            events: {

                onReady:
                    function () {

                        youtubeListo = true;

                        botonMusica.classList.remove(
                            "cargando"
                        );

                        botonMusica.textContent =
                            "🎵";

                        console.log(
                            "YouTube listo 💛"
                        );

                    },


                onStateChange:
                    function (event) {

                        /*
                            1 = reproduciendo
                            2 = pausado
                            0 = terminado
                        */

                        if (
                            event.data ===
                            YT.PlayerState.PLAYING
                        ) {

                            musicaActiva = true;

                            botonMusica.textContent =
                                "🎵";

                        }


                        if (
                            event.data ===
                            YT.PlayerState.PAUSED
                        ) {

                            musicaActiva = false;

                            botonMusica.textContent =
                                "🔇";

                        }


                        /*
                           Por seguridad, si termina,
                           vuelve a comenzar.
                        */

                        if (
                            event.data ===
                            YT.PlayerState.ENDED
                        ) {

                            player.seekTo(
                                0
                            );

                            player.playVideo();

                        }

                    },


                onError:
                    function (event) {

                        console.log(
                            "Error de YouTube:",
                            event.data
                        );

                        botonMusica.textContent =
                            "▶️";

                    }

            }

        }
    );

}



/* ============================================
   REPRODUCIR
============================================ */

function iniciarMusica() {

    if (
        !youtubeListo ||
        !player
    ) {

        /*
           Si YouTube todavía no cargó,
           mostramos el botón para que
           pueda tocarlo nuevamente.
        */

        botonMusica.textContent =
            "▶️";

        return;
    }


    try {

        /*
           Volumen normal.
           Puedes bajar 50 a 30 si quieres.
        */

        player.setVolume(
            65
        );


        player.unMute();


        player.playVideo();


        musicaActiva =
            true;


        botonMusica.textContent =
            "🎵";


    } catch (error) {

        console.log(
            "No se pudo iniciar la música:",
            error
        );


        botonMusica.textContent =
            "▶️";

    }

}



/* ============================================
   PAUSAR
============================================ */

function pausarMusica() {

    if (
        !youtubeListo ||
        !player
    ) {

        return;
    }


    player.pauseVideo();


    musicaActiva =
        false;


    botonMusica.textContent =
        "🔇";

}



/* ============================================
   BOTÓN FLOTANTE DE MÚSICA
============================================ */

botonMusica.addEventListener(
    "click",
    function () {

        /*
            Este toque directo del usuario
            permite reproducir audio en
            Chrome / Safari móvil.
        */

        if (
            !youtubeListo ||
            !player
        ) {

            botonMusica.textContent =
                "⏳";

            return;
        }


        if (musicaActiva) {

            pausarMusica();

        } else {

            iniciarMusica();

        }

    }
);



/* ============================================
   ABRIR REGALO
============================================ */

botonRegalo.addEventListener(
    "click",
    function () {

        /*
            MUY IMPORTANTE:
            iniciarMusica() se ejecuta
            directamente dentro del CLICK.
        */

        iniciarMusica();


        inicio.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";


        inicio.style.opacity =
            "0";


        inicio.style.transform =
            "scale(0.96)";


        setTimeout(
            function () {

                inicio.style.display =
                    "none";


                regalo.classList.remove(
                    "oculto"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /*
                    Flores y confeti al abrir.
                */

                crearLluviaSuave();

            },
            500
        );

    }
);



/* ============================================
   PRESIONA AQUÍ
============================================ */

botonSorpresa.addEventListener(
    "click",
    function () {

        /*
            Explosión de flores
        */

        crearCelebracion();


        regalo.style.transition =
            "opacity 0.65s ease, transform 0.65s ease";


        regalo.style.opacity =
            "0";


        regalo.style.transform =
            "scale(0.97)";


        setTimeout(
            function () {

                regalo.style.display =
                    "none";


                sorpresaFinal.classList.remove(
                    "oculto"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /*
                    Segunda lluvia
                    alrededor del ramo.
                */

                setTimeout(
                    function () {

                        crearCelebracion();

                    },
                    700
                );


                setTimeout(
                    function () {

                        crearLluviaSuave();

                    },
                    2000
                );

            },
            650
        );

    }
);



/* ============================================
   CREAR PARTÍCULA
============================================ */

function crearParticula(
    modoFiesta = false
) {

    const particula =
        document.createElement(
            "span"
        );


    /*
       Flores amarillas + corazones +
       pequeños brillos.
    */

    const elementos = [

        "🌻",
        "🌻",
        "🌻",

        "💛",
        "💛",

        "🌼",

        "✨",

        "🌻"

    ];


    const indice =
        Math.floor(
            Math.random() *
            elementos.length
        );


    particula.textContent =
        elementos[indice];


    particula.classList.add(
        "particula"
    );


    /*
        Posición horizontal.
    */

    particula.style.left =
        Math.random() *
        100 +
        "vw";


    /*
        Tamaño.
    */

    let tamano;


    if (modoFiesta) {

        tamano =
            21 +
            Math.random() *
            27;

    } else {

        tamano =
            16 +
            Math.random() *
            18;

    }


    particula.style.fontSize =
        tamano +
        "px";


    /*
        Velocidad.
    */

    let duracion;


    if (modoFiesta) {

        duracion =
            3 +
            Math.random() *
            2.2;

    } else {

        duracion =
            5 +
            Math.random() *
            3;

    }


    particula.style.animationDuration =
        duracion +
        "s";


    particula.style.animationDelay =
        Math.random() *
        0.4 +
        "s";


    /*
        Añadir.
    */

    animaciones.appendChild(
        particula
    );


    /*
        Eliminar cuando termina.
    */

    setTimeout(
        function () {

            particula.remove();

        },
        (
            duracion +
            1
        ) *
        1000
    );

}



/* ============================================
   LLUVIA SUAVE
============================================ */

function crearLluviaSuave() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            function () {

                crearParticula(
                    false
                );

            },
            i *
            100
        );

    }

}



/* ============================================
   EXPLOSIÓN
============================================ */

function crearCelebracion() {

    for (
        let i = 0;
        i < 65;
        i++
    ) {

        setTimeout(
            function () {

                crearParticula(
                    true
                );

            },
            i *
            40
        );

    }

}



/* ============================================
   FLORES DE AMBIENTE
============================================ */

setInterval(
    function () {

        /*
            No aparecen en la portada.
            Empiezan cuando ya abrió
            el regalo.
        */

        const regaloVisible =
            regalo.style.display
            !== "none"
            &&
            !regalo.classList.contains(
                "oculto"
            );


        const finalVisible =
            !sorpresaFinal.classList.contains(
                "oculto"
            );


        if (
            regaloVisible ||
            finalVisible
        ) {

            crearParticula(
                false
            );

        }

    },
    1500
);



/* ============================================
   CUANDO CAMBIA DE PESTAÑA
============================================ */

document.addEventListener(
    "visibilitychange",
    function () {

        /*
           No hacemos nada especial.
           Si el navegador pausa YouTube
           automáticamente, el usuario
           puede tocar 🎵.
        */

        if (
            document.visibilityState
            === "visible"
        ) {

            if (
                youtubeListo &&
                player &&
                musicaActiva
            ) {

                try {

                    player.playVideo();

                } catch (error) {

                    console.log(
                        error
                    );

                }

            }

        }

    }
);
