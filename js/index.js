
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
		var cx = "" + (Math.random()*100)+"%";
		var cy = "" + (Math.random()*100)+"%";
		if(i<200){
			while(!initials(cx, cy)){
				cx = "" + (Math.random()*100)+"%";
				cy = "" + (Math.random()*100)+"%";
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

function initials(a, b){
	var x = parseInt(a.substring(0, a.length-1));
	var y = parseInt(b.substring(0, b.length-1));
	var ret = false;
	if(x>7.53 && x<26.37 && y>57.14 && y<85.71){
		ret = true;
	}
	if(x>26.37 && x<37.67 && y>28.57 && y<85.71){
		ret = true;
	}
	if(x>7.53 && x<52.75 && y>0 && y<28.57){
		ret = true;
	}

	if(x>58.40 && x<66.35 && y>0 && y<85.71){
		ret = true;
	}
	if(x>60.28 && x<100 && y>0 && y<85.71 && y>(-.9)*(x-117.96) && y<(-.9)*(x-133.03)){
		ret = true;
	}
	if(x>60.28 && x<100 && y>0 && y<85.71 && y>(.9)*(x-12.75) && y<(.9)*(x+2.33)){
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
	    		var x = parseInt($("#circle"+i).attr("cx").substring(0,$("#circle"+i).attr("cx").length-1));
	    		var y = parseInt($("#circle"+i).attr("cy").substring(0,$("#circle"+i).attr("cy").length-1));
	    		var r = parseInt($("#circle"+i).attr("r"));
	    		if(initials(x+r/width*100 + "%", y+r/height*100 + "%")) { 
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
	    	//console.log("==" + $(this).attr("cx") + ", " + $(this).attr("cy"));
	        $(this).css("fill", "darkgreen");
	        $(this).attr("r", parseInt(($(this).attr("r"))) - 3);
	    }
	});

}