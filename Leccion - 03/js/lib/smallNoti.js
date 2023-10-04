(function () {

  $.smallBox = function (opciones) {
    opciones = $.extend(
      {
        titulo: undefined,
        subtitulo: undefined,
        fa: "fa-envelope",
        contenido: undefined,
        img: undefined,
        tamiout: 3000,
      },
      opciones
    );

     var html = "";
    
    html +=  '<div class="smallBox_contenedor">';
    html +=  ' <div class="smallBox_foto">';
    html +=  '  <img src="'+ opciones.img +'" alt="img" >';
    html +=  '    </div>';
    html +=  '  <div class="smallBox_contenido" aling="center">';
    html +=  '  <div class="smallBox_textoContenedor">';
    html += '  <span class="smallBox_titulo">' + opciones.titulo + "</span>";
    html += '   <span class="smallBox_subtitulo">' + opciones.subtitulo + "</span>";
    html +=  '   </div>';
    html +=  '    <div class="smallBox_pico"></div>';
    html +=  '    <div class="smallBox_cajaColor">';
    html += '     <div class="smallBox_colorTexto">';
    html += opciones.contenido;
    html +=  '      </div>';
    html +=  '      <div class="smallBox_colorIcon">';
    html += '     <i class="fa-regular ' + opciones.fa + ' fa-2x"></i>';
    html +=  '    </div>';
    html +=  '  </div>';
    html +=  '  <div class="smallBox_sombra">';
    html +=  '  </div>';
    html +=  ' </div>';
    html += '</div>';
    
    $("body").append(html);
    
    animar_entrada();

    setTimeout(function () {
      animar_salida();

    }, opciones.tamiout);
 
  };

     // Animar la salida
  function animar_salida() {

    var $smallBox = $(".smallBox_contenedor");    
    var tl = new TimelineMax();
        tl.to($smallBox, 1, { x: "+= 100px"})
          .to($smallBox, 1, { opacity: 0, onComplete: remover_smallbox }, "-=1");
  }

  function remover_smallbox() { 
    $(".smallBox_contenedor").remove();
  }

    // Animar la entrada
  function animar_entrada() {
      
    var $smallBox = $(".smallBox_contenedor");
    var tl = new TimelineMax();
    tl.from($smallBox, 1.3, { x: "+= 100px", ease: Bounce.easeOut })
      .from($smallBox, 1, { opacity:0 }, "-=1.3");
  }
    
})();
