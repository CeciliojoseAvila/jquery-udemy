(function(){

	var $cajaRoja = $(".cajaRoja");

	function mover( dir ){

		$cajaRoja.clearQueue();


		switch( dir ){

			case "arri":
				$cajaRoja.animate({
					top: "-=50px"
				},200);

			break;

			case "aba":
				$cajaRoja.animate({
					top: "+=50px"
				},200);
			break;

			case "der":
				$cajaRoja.animate({
					left: "+=50px"
				},200);
			break;

			case "izq":
				$cajaRoja.animate({
					left: "-=50px"
				},200);
			break;

			default:
				$cajaRoja.animate({
					top: "0px",
					left: "0px"
				},1000);

		}
}

	$(document).on("keypress",function(e){

		var keyCode = e.keyCode;

		switch( keyCode ){
			case 119:
				mover("arri");
			break;

			case 115:
				mover("aba");
			break;

			case 100:
				mover("der");
			break;			

			case 97:
				mover("izq");
			break;

			default:
				mover("reset");
		}


	});




	$("button").on("click",function(){

		var dir = $(this).data("dir");

		mover( dir );

	});


})();

/* (function(){

	var $cajaRoja = $(".cajaRoja");

		$("#botTamano").on("click", function () {
			$cajaRoja.animate({
        width: "+=100px",
        height: "+=100px",
      }),
        function () {
          console.log("Terminó la animacion del tamaño");
        }.animate({
            width:"-=100px",
            height:"-=100px",
          }).animate({
            opacity: 0.1
          },1500);
	})(); */