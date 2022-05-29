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

// var l = 24; //Scaling

// Draw function to graph the data after any changes
function draw(arr) {
    // Removes any existing bars (rects) before each redraw
    container.selectAll('rect').remove()

    container
    .selectAll('.bar')
    .data(arr)
    .enter().append("rect")
    .transition()
    .duration(800)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");
};

//Find index of specific object using findIndex method. 
objIndex = DUMMY_DATA.findIndex((obj => obj.id));

//Update object's value properties with random values.
DUMMY_DATA.forEach(obj => {
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        DUMMY_DATA[i].value = Math.floor(Math.random() * 16);
    }
});

// Calls the draw function to draw the initial unsorted graph
draw(DUMMY_DATA);

/////////////////////////////////////////////   Bubble sort function    ///////////////////////////////////////////////////////
function bubbleSort() {
    var vals = []; //initializes array for slider array values
    var ids = []; //initializes array for slider array ids
    var bubblearr = []; //empty final array

    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        vals.push(DUMMY_DATA[i].value);
    }

    //Adds the ids from the SLIDER_DATA array to the empty 'ids' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        ids.push(DUMMY_DATA[i].id);
    }

    //Bubble sort function (copied from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/)
    for(var i = 0; i < vals.length; i++){
        // bubblearr[i] = {id: ids[i], value: vals[i]}
        // console.log("First for loop ", DUMMY_DATA);
     
        // Last i elements are already in place  
        for(var j = 0; j < (vals.length - i -1 ); j++){
            // console.log("Second for loop ", DUMMY_DATA);
            
            // Checking if the item at present iteration is greater than the next iteration
            if(DUMMY_DATA[j].value > DUMMY_DATA[j+1].value){    //Was vals[j] and vals[j+1]
                // console.log("If statement ", DUMMY_DATA);


                ///////////////// Bubblearr version  ///////////////////////
                // If the condition is true then swap them
                var temp = vals[j]
                vals[j] = vals[j + 1]
                vals[j+1] = temp

                // ///////////////// Static array version  ///////////////////////
                // // If the condition is true then swap them
                var temp2 = DUMMY_DATA[j].value
                DUMMY_DATA[j].value = DUMMY_DATA[j + 1].value
                DUMMY_DATA[j+1].value = temp2

                // Calls the draw function to draw the sorted graph of data
                // console.log(DUMMY_DATA);
                // draw(DUMMY_DATA);
                console.log(vals);
                steps.push(DUMMY_DATA);
            }
        }
        // console.log(DUMMY_DATA);
        // draw(DUMMY_DATA);
    }
}

for (var i = 0; i < steps.length; i++) {
    setInterval(draw(steps[i]), 1000);
}