(function () {

	$("#frmData").on("submit", function (e) {
		e.preventDefault();

		var formulario = $(this);
		var dataSerializada = formulario.serialize();

		console.log(dataSerializada);
		 
		$.ajax({
		  type: "POST",
		  url: "/alumnos/php/servicios/post.alumnos.php",
		  dataType: "json",
		  data: dataSerializada,
		})
			.done(function (data) {
			  
			console.log("correcto!");
			console.log(data);
		  })
		  .fail(function () {
			console.log("Fallo!");
		  });
	});
	
})();
