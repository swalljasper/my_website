

function initialize(){ //calls the functions when the page initializes
	cities();
	addColumns(cityPop);
	addEvents();
};

var cityPop;

function cities(){ //function that creates cities

	cityPop = [ //array that contains cities data (2 demensional)
		{
			city: "Tokyo",
			population: 33200000
		},
		{
			city: "New York",
			population: 17800000
		},
		{
			city: "Sao Paulo",
			population: 17700000
		},
		{
			city: "Seoul",
			population: 17500000
		}
	];

	$("#mydiv").append("<table>"); //creates table within div (created in index.html)

	$("table").append("<tr>"); //creates table rows within table

	$("tr").append("<th>City</th><th>Population</th>"); //creates table header in tr

	for (var i = 0;i < cityPop.length; i++){ //for loop inputs the array cityPop into the tds
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		$("table").append(rowHtml);
	};
};


function addColumns(cityPop){ //function that adds columns 
	console.log("ran addColumns");
    
    $('tr').each(function(i){ //establihes were appending the trs, with the jquery each method: runing through each one until its through all

    	if (i == 0){ //basic if else statement

    		$(this).append('<th>City Size</th>'); //if its the first row make it say City Size
    	} else {

    		var citySize; //declares city size variable locally
    		
    		if (cityPop[i-1].population < 17750000){ //if its not the first row and its under X assign value
    			citySize = 'Large';

    		} else if (cityPop[i-1].population < 20000000){ //if its not the first row and its under X assign value
    			citySize = 'Very Large';

    		} else {
    			citySize = 'Very Very Large'; //if its not the first row and its under X assign value
    		};

    		$(this).append('<td>' + citySize + '</td>'); //append the tds with the values that were assigned
    	};
    });
};

function addEvents(){ //establishes addEvents function

	

	$('table').mouseover (function(i) { //uses jquery mouseover function on the table and establishes a function of i
		
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

	$('table').on('click', clickme); //establishes that this will be done on the table through jquery on method
};

$(document).ready(initialize); //initializes functions when page is loaded


 
