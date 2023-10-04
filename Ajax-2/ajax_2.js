(function(){

	$.ajax({
		type: 'GET',
		url : '/Ajax-2/person.json',
		dataType: 'json'
	})
	.done(function( data ){

		var personas = data;

		for (var i = 0; i < personas.length; i++) {
			
			var persona = personas[i];

			var tags = "";
			for (var j = 0; j < persona.tags.length; j++) {

			tags += '<span class="label label-primary">'+ persona.tags[j] + " </span>";
				
      		}

			var html = "";

			html += '<tr>';
			html += '	<td>'+persona.name+'</td>';
			html += "	<td>" + persona.age + "</td>";
			html += '	<td>'+tags+'</td>';
			html +=	'</tr>';

			$(".table").append(html)
			
		}

	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});

})();