(function(){

    $.ajax({
      type: "GET",
      url: "/Ajax-01/js/lib/generated.json",
      dataType: "json",
    })
      .done(function (data) {
          console.log("Hecho correctamente!");
          var person = data;
          console.log(data);

          $("#foto").attr("src", data.picture);
          $("#textNombre").val( data.name);
          $("#textDireccion").val( data.address);
          $("#textTelefono").val( data.phone);
          $("#textGenero").val( data.gender);

      })
      .fail(function () {
        console.log("Falló!");
      })
      .always(function () {
        console.log("Completo!");
      });



})();