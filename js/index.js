
var width = $(window).width();
var height = 3000;
var svgRoot;


window.onload = function(){
	loadEnvironment();
}

function loadEnvironment(){
	var background = document.getElementById("bgenvironment");
	console.log(background);
	for(var i=0; i<1000; i++){
		var cx = (Math.random()*height);
		var cy = (Math.random()*width);
		var r = (Math.random()*5) + 12;
		var fill = "black";
		background.innerHTML+="<circle id="+'circle'+i+" class=dot"+" cx="+cx+" cy="+cy+" r="+r+" fill="+fill+">";
		var currentCircle = document.getElementById("circle" + i);
	}
}

$(document).ready(function(){
	$("p").click(function(){
	    $(this).hide();
	});
});


$(document).ready(function(){
	$(".dot", svgRoot).mouseenter(function(){
		console.log($(this));
		$(this).fill = "green";
	});
});
$(document).ready(function(){
	$(".dot", svgRoot).mouseleave(function(){
		$(this).fill = "black";
	});
});