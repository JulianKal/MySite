
var width = $(window).width();
var height = 700;
var svgRoot;
var background;
var mouseX;
var mouseY;

window.onload = function(){
	loadEnvironment();
	dotsAnimate();
}

function loadEnvironment(){
	background = document.getElementById("bgenvironment");
	console.log(background);
	for(var i=0; i<500; i++){
		var cx = (Math.random()*width);
		var cy = (Math.random()*height);
		var r = (Math.random()*7) + 7;
		var fill = "black";
		background.innerHTML+="<circle id="+'circle'+i+" class=dot"+" cx="+cx+" cy="+cy+" r="+r+" fill="+fill+">";
		background.innerHTML+="<circle id="+'circle'+i+'2'+" class=dot2"+" cx="+cx+" cy="+cy+" r="+(parseInt(r)+2)+" fill=transparent>";
		var currentCircle = document.getElementById("circle" + i);
	}
}

function showCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var coor = "X coords: " + mouseX + ", Y coords: " + mouseY;
    //console.log(coor);	
}

function dotsAnimate(){
	$(".dot2").on({
		mouseover: function(){
			console.log($("#"+$(this).attr("id").substring(0,$(this).attr("id").length-1)));
			$("#"+$(this).attr("id").substring(0,$(this).attr("id").length-1)).trigger("mouseover");
		},
		mouseleave: function(){
			$("#"+$(this).attr("id").substring(0,$(this).attr("id").length-1)).trigger("mouseleave");
		}
	});
	$(".dot").on({
	    mouseover: function(){
	        $(this).css("fill", "lime");
	        if($(this).attr("r") < 33){
		        $(this).attr("r", parseInt(($(this).attr("r"))) + 5);
	        }
	    }, 
	    mouseleave: function(){
	        var dist = Math.sqrt( (mouseX-$(this).attr("cx"))*(mouseX-$(this).attr("cx")) + (mouseY-$(this).attr("cy"))*(mouseY-$(this).attr("cy")));
			console.log("==" + $(this).attr("cx") + ", " + $(this).attr("cy"));
	        $(this).css("fill", "darkgreen");
	        $(this).attr("r", parseInt(($(this).attr("r"))) - 3);
	    }
	});

}