$("h3.ClassX").text("Combinando Seletores!");

$(document).ready(function(){
	$("#Elemento").text("Texto Alterado pelo jQuery");
});


var click = 1;

$(document).ready(function(){
	$("#btnHide").click(function(){
		if (click == 1) {
			$("#div1").hide();
			click = 0;
		}else{
			$("#div1").show();
			click = 1;
		}
	});
});



$(document).ready(function(){
	$("#b1").click(function(){
		$("[type=text]").val("Inserindo um valor novo");
		$("[type=text]").before(" - Antes - ");
		$("[type=text]").after(" - Depois - ");
		$("#d1").prepend("Aprendendo ");
		$("#d1").append(" jQuery ");
		$("#d2").html("Programação Web ");
	});
});

var typeTexto = 1;

$(document).ready(function(){
	$("#btn1").click(function(){
		if (typeTexto == 1) {
			$("#texto").css("background","lightblue");
			$("#texto").css("color","black");
			typeTexto = 0;
		}else{
			$("#texto").css("background","white");
			$("#texto").css("color","red");
			typeTexto = 1;
		}
		
	});
});