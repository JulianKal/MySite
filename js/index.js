
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
		if(i<200){
			while(!initials(cx, cy)){
				cx = (Math.random()*width);
				cy = (Math.random()*height);
			}
		}
		var r = (Math.random()*7) + 7;
		var fill = "black";
		background.innerHTML+="<circle id="+'circle'+i+" class=dot"+" cx="+cx+" cy="+cy+" r="+r+" fill="+fill+">";
		background.innerHTML+="<circle id="+'circle'+i+'B'+" class=dot2"+" cx="+cx+" cy="+cy+" r="+(parseInt(r)+5)+" fill=transparent>";
		var currentCircle = document.getElementById("circle" + i);
	}
	background.innerHTML+="<circle id=circle500 class=reducer cx=95% cy=90% r=60 fill=purple>";
}

function showCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var coor = "X coords: " + mouseX + ", Y coords: " + mouseY;
    //console.log(coor);	
}

function initials(x, y){
	var ret = false;
	if(x>100 && x<350 && y>400 && y<600){
		ret = true;
	}
	if(x>350 && x<500 && y>200 && y<600){
		ret = true;
	}
	if(x>100 && x<700 && y>0 && y<200){
		ret = true;
	}
	if(x>775 && x<1000 && y>0 && y<600){
		ret = true;
	}
	if(x>800 && x<1400 && y>0 && y<600 && y>(-.9)*(x-1300) && y<(-.9)*(x-1500)){
		ret = true;
	}
	if(x>800 && x<1400 && y>0 && y<600 && y>(.9)*(x-700) && y<(.9)*(x-500)){
		ret = true;
	}
	return ret;
}

function dotsAnimate(){
	$(".reducer").on({
		mouseover: function(){
	        $(this).css("fill", "lime");
		    $(this).attr("r", parseInt(($(this).attr("r"))) + 5);
		    for(var i=0; i<500; i++){
	    		while($("#circle"+i).attr("r") > 15){ 
	    			$("#circle"+i).attr("r", parseInt(($("#circle"+i).attr("r"))) - 7);
	    		}
    			$("#circle"+i).css("fill","black");
	    	}
	    }, 
	    mouseleave: function(){
	    	console.log("==" + $(this).attr("cx") + ", " + $(this).attr("cy"));
	        $(this).css("fill", "purple");
	        $(this).attr("r", parseInt(($(this).attr("r"))) - 5);

	    },
	    click: function(){
	    	for(var i=0; i<500; i++){
	    		if(initials(parseInt($("#circle"+i).attr("cx")) + parseInt($("#circle"+i).attr("r")),parseInt($("#circle"+i).attr("cy"))+parseInt($("#circle"+i).attr("r")) )) { 
	    			$("#circle"+i).attr("r", parseInt(($("#circle"+i).attr("r"))) + 3);
	    			$("#circle"+i).css("fill","lime");
	    		}
	    	}
	    }
	});
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
	        if($(this).attr("r") < 42){
		        $(this).attr("r", parseInt(($(this).attr("r"))) + 7);
	        }
	    }, 
	    mouseleave: function(){
	    	console.log("==" + $(this).attr("cx") + ", " + $(this).attr("cy"));
	        $(this).css("fill", "darkgreen");
	        $(this).attr("r", parseInt(($(this).attr("r"))) - 3);
	    }
	});

}