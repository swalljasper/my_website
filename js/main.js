
function initialize(){ //calls the function when page loads
	debugAjax(); //only calls the debugAjax because debugCallback must be called within the debugAjax function
	addEvents();
}

var response; //declares response as a global variable



function debugCallback(response){ //sets up debugCallback function taking response (or the data) as a parameter

	console.log("ran debugCallback") //test to see if the function is running
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(response)); //adds text to the div then uses the stringify method to convert the data into text and put it in the div 
}; //Note: not called yet

function debugAjax(){ //sets up debugAjax function
	

	$.ajax("../data/MegaCities.geojson", { //calls the JQueryAjax method that requests the geojson data
		dataType: "json", //formats the data that is called from the server
		success: function(response){ //a JQueryAjax method that calls a function if the data return is successful. This is so nothing is trying to load before we have data
			
			debugCallback(response); //NOW we call the debugCallback function, while were within the JQueryAjax method
			console.log(response) //prints the data to the console 
		}
	});

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(response)); //attempts to fill the div with the data outside the JQueryAjax method, resulting in "Undefined"
	
	console.log(response) //attempts to print the data to the console outside the JQueryAjax method, again undefined
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(response)); //again tries to geoJSON data out of method, leaving undefined data


function addEvents(){ //establishes addEvents function

	

	$('mydiv').mouseover (function(i) { //uses jquery mouseover function on the table and establishes a function of i
		
		var color = "rgb("; //establishes color variable with setting up the rgb(x,x,x) format

		for (var i=0; i<3; i++){ //for loop with varible i that runs 3x

			var random = Math.round(Math.random() * 255); //establishes a variable that will generate a random between 0 and 255

			color += random; //adds veriables together 

			if (i<2){ //if its the first or second rgb value have a comma afetr it to stick with proper format
				color += ",";
			
			} else {
				color += ")"; //if its the last one, put a ) afetr it to stick with format
			};
		};

		$(this).css('color', color); //appends css with the random created rgb colors
	});

	function clickme(){ //establishes click function

		alert('Hey, you clicked me!'); //alert message
	};

	$('mydiv').on('click', clickme); //establishes that this will be done on the table through jquery on method
};

 $(document).ready(initialize); //initializes functions when page is loaded


 
