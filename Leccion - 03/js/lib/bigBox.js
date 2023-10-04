(function () {
  $.bigBox = function (opciones, callback) {
    opciones = $.extend(
      {
        fa: "fa-thumbs-up",
        titulo: undefined,
        contenido: undefined,
        boton: "Aceptar",
      },
      opciones
    );

    if (opciones.titulo === undefined) {
      alert("El titulo es necesario.");
      return;
    }

    if (opciones.contenido === undefined) {
      alert("El contenido es necesario.");
      return;
    }

    var contenido = "";
    contenido = '<div class="bigBox_fondo"> </div>';

    contenido += '<div class="bigBox_contenedor" align="center">';
    contenido +=
      '<div class="bigBox_cerrar"> <i class="fa fa-times"></i></div>';
    contenido +=
      '<div class="bigBox_circulo"><i class="fa-regular ' +
      opciones.fa +
      ' fa-3x"> </i></div>';
    contenido += '<div class="bigBox_contenido">';
    contenido +=
      '<span class="bigBox_titulo">  ' + opciones.titulo + "  </span>";
    contenido +=
      '<span class="bigBox_texto"> ' + opciones.contenido + "</span></div>";
    contenido +=
      '<button class="bigBox_Boton">  ' + opciones.boton + " </button>";
    contenido += "</div > ";

    $("body").append(contenido);

    animar_entrada();

    //Funcion del boton cerrar
    $(".bigBox_cerrar").on("click", function () {
      animar_salida();

      if (typeof callback == "function") {
        callback("boton-cerrar");
      }
    });

    //Funcion del boton principal
    $(".bigBox_Boton").on("click", function () {
      animar_salida();

      if (typeof callback == "function") {
        callback("boton-principal");
      }
    });

    // Animar la entrada
    function animar_entrada() {
      var $fondo = $(".bigBox_fondo");
      var $bigBox = $(".bigBox_contenedor");

      var anchoP = $(window).width();
      var altoP = $(window).height();

      var anchoB = $bigBox.width();
        var altoB = $bigBox.height();
        
        $bigBox.css({
          top: altoP / 2 - altoB / 2,
          left: (anchoP / 2) - (anchoB / 2)
        });

      $fondo.show();
      $bigBox.show();

      var tl = new TimelineMax();
      tl.to($fondo, 0.5, { opacity: 0.3 })
        .to($bigBox, 0.5, { opacity: 1 }, "-=0.5")
        .from($bigBox, 0.8, { y: "-=20", ease: Bounce.easeOut }, "-=0.5");
    }

    function animar_salida() {
      var $fondo = $(".bigBox_fondo");
      var $bigBox = $(".bigBox_contenedor");

      /*     $fondo.show();
        $bigBox.show(); */

      var tl = new TimelineMax();
      tl.to($fondo, 0.3, { opacity: 0 }).to(
        $bigBox,
        0.3,
        { opacity: 0, onComplete: remover_bigBox },
        "-=0.3"
      );
    }

    function remover_bigBox() {
      var $fondo = $(".bigBox_fondo");
      var $bigBox = $(".bigBox_contenedor");

      $fondo.remove();
      $bigBox.remove();
    }
  };
})();
