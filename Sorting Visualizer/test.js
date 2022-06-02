const DUMMY_DATA = [
    { id: 'd1', value: 10},
    { id: 'd2', value: 11},
    { id: 'd3', value: 12},
    { id: 'd4', value: 6},
    { id: 'd5', value: 7},
    { id: 'd6', value: 13},
    { id: 'd7', value: 4},
    { id: 'd8', value: 2},
    { id: 'd9', value: 14},
    { id: 'd10', value: 3},
    { id: 'd11', value: 7},
    { id: 'd12', value: 6},
    { id: 'd13', value: 7},
    { id: 'd14', value: 9},
    { id: 'd15', value: 9},
    { id: 'd16', value: 2},
    { id: 'd17', value: 1},
    { id: 'd18', value: 15},
    { id: 'd19', value: 12},
    { id: 'd20', value: 7},
    { id: 'd21', value: 7},
    { id: 'd22', value: 8},
    { id: 'd23', value: 5},
    { id: 'd24', value: 5},
    { id: 'd25', value: 11}
];

const steps = [];

console.log(DUMMY_DATA)

var xScale = d3
.scaleBand() //Gives all bars/items the same width
.domain(DUMMY_DATA.map((dataPoint) => dataPoint.id)) //Tells scaleBand() how many data points there are based on the number of ids
.rangeRound([0, 1000]) //Sets the range of the area the bars are generated in, i.e. the width of the container
.padding(0.1); //Puts padding between the bars
const yScale = d3
.scaleLinear() //Gives y coordinates function to position the heights of the bars
.domain([0, 15]) //Specifies the min and max range of height values of the bars
.range([600, 0]); //Sets range of the height of the container that the bars will sit in

const container = d3.select('svg')
    .classed('container', true);

// Draw function to graph the data after any changes
function draw(arr, j, color) {
    // Removes any existing bars (rects) before each redraw
    container.selectAll('rect').remove()

    // Adds the new bars in
    container
    .selectAll('.bar')
    .data(arr)
    .enter().append("rect")
    // .transition()
    // .duration(600)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    // .attr("fill", 'green');

    // This code turns the bar currently being swapped green //
    d3.selectAll('rect')
    .each(function(d, i) {
    var target = i === j;

    d3.select(this)
      .style('fill', target ? 'green' : '#720570')
    });


    for (i = 0; i < arr.length-1; i++) { 
        if (arr[i].value < arr[i + 1].value) {
            console.log('true');
            d3.selectAll('rect')
            .style('fill', 'green')
            
        }
        else {
            console.log('false');
            d3.selectAll('rect')
            .style('fill', 'purple')
        }
    }

     // This code turns the bar currently being swapped green //
     d3.selectAll('rect')
     .each(function(d, i) {
     var target = i === j;
 
     d3.select(this)
       .style('fill', target ? 'green' : '#720570')
     });
};

//Find index of specific object using findIndex method. 
objIndex = DUMMY_DATA.findIndex((obj => obj.id));

//Update object's value properties with random values.
DUMMY_DATA.forEach(obj => {
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        DUMMY_DATA[i].value = Math.floor(Math.random() * 16);
    }
});

// // Calls the draw function to draw the initial unsorted graph
draw(DUMMY_DATA);

var vals = []; //initializes array for slider array values
var ids = []; //initializes array for slider array ids
var bubblearr = []; //empty final array
var button = document.getElementById("bubble-sort");

//Adds the values from the DUMMY_DATA array to the empty 'vals' array
for (var i = 0; i < DUMMY_DATA.length; i++) {
    vals.push(DUMMY_DATA[i].value);
}

//Adds the ids from the SLIDER_DATA array to the empty 'ids' array
for (var i = 0; i < DUMMY_DATA.length; i++) {
    ids.push(DUMMY_DATA[i].id);
}

/////////////////////////////////////////////   Bubble sort function    ///////////////////////////////////////////////////////
function bubbleSort() {

    //Bubble sort function (copied from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/)
    for(var i = 0; i < vals.length; i++){
        // bubblearr[i] = {id: ids[i], value: vals[i]}
     
        // Last i elements are already in place  
        for(var j = 0; j < (vals.length - i -1 ); j++){
            
            // Checking if the item at present iteration is greater than the next iteration
            if(vals[j] > vals[j + 1]){    //Was vals[j] and vals[j+1] or DUMMY_DATA[j].value = DUMMY_DATA[j + 1].value
                
                ///////////////// Bubblearr version  ///////////////////////
                // If the condition is true then swap them
                var temp = vals[j]
                vals[j] = vals[j + 1]
                vals[j+1] = temp

                // Needs to go here to get the final array with the last swapped value 
                // This loop populates 
                for (var i = 0; i < ids.length; i++) {
                    bubblearr[i] = {id: ids[i], value: vals[i]}
                }

                console.log(vals);
                draw(bubblearr, j); //draws the new array after each pass
                // console.log(j);
                // console.log(bubblearr); //console logs the new array after each pass
                // bubblearr = []; //resets the array of values each pass ready for new set
            } 
        }
    }
}

//This function calls the first bubblesort at the set interval (1s)
function bubbleSort_wrap() {
    setInterval(bubbleSort, 100); 
}

// for (i = 0; i < bubblearr.length; i++) { 
//     if (bubblearr[i].value <= bubblearr[i + 1].value) {
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }

// Steps //
//1. create bubblearr (temporary array of each step of sorting)
//2. draw the graph with this new array (delayed with setInterval)
//3. empty the array so that the next one that is made is the right size

// New Steps //
//1. Store the index of the value currently being swapped
//2. Send this value to the draw function
//3. Color the bar at said index green
//4. Color entire bar green at end when fully sorted