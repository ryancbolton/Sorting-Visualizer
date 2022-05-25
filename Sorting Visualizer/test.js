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
    { id: 'd25', value: 11},
    { id: 'd26', value: 11},
    { id: 'd27', value: 12},
    { id: 'd28', value: 10},
    { id: 'd29', value: 6},
    { id: 'd30', value: 13},
    { id: 'd31', value: 14},
    { id: 'd32', value: 2},
    { id: 'd33', value: 12},
    { id: 'd34', value: 11},
    { id: 'd35', value: 10},
    { id: 'd36', value: 5},
    { id: 'd37', value: 6},
    { id: 'd38', value: 7},
    { id: 'd39', value: 14},
    { id: 'd40', value: 14},
    { id: 'd41', value: 1},
    { id: 'd42', value: 0},
    { id: 'd43', value: 11},
    { id: 'd44', value: 15},
    { id: 'd45', value: 7},
    { id: 'd46', value: 13},
    { id: 'd47', value: 4},
    { id: 'd48', value: 4},
    { id: 'd49', value: 4},
    { id: 'd50', value: 11},
    { id: 'd51', value: 10},
    { id: 'd52', value: 5},
    { id: 'd53', value: 1},
    { id: 'd54', value: 6},
    { id: 'd55', value: 7},
    { id: 'd56', value: 0},
    { id: 'd57', value: 0},
    { id: 'd58', value: 2},
    { id: 'd59', value: 10},
    { id: 'd60', value: 11},
    { id: 'd61', value: 3},
    { id: 'd62', value: 13},
    { id: 'd63', value: 7},
    { id: 'd64', value: 13},
    { id: 'd65', value: 2},
    { id: 'd66', value: 2},
    { id: 'd67', value: 1},
    { id: 'd68', value: 2},
    { id: 'd69', value: 3},
    { id: 'd70', value: 7},
    { id: 'd71', value: 6},
    { id: 'd72', value: 10},
    { id: 'd73', value: 12},
    { id: 'd74', value: 2},
    { id: 'd75', value: 10},
    { id: 'd76', value: 11},
    { id: 'd77', value: 12},
    { id: 'd78', value: 2},
    { id: 'd79', value: 3},
    { id: 'd80', value: 13},
    { id: 'd81', value: 14},
    { id: 'd82', value: 12},
    { id: 'd83', value: 0},
    { id: 'd84', value: 11},
    { id: 'd85', value: 2},
    { id: 'd86', value: 5},
    { id: 'd87', value: 7},
    { id: 'd88', value: 3},
    { id: 'd89', value: 14},
    { id: 'd90', value: 12},
    { id: 'd91', value: 10},
    { id: 'd92', value: 10},
    { id: 'd93', value: 10},
    { id: 'd94', value: 6},
    { id: 'd95', value: 7},
    { id: 'd96', value: 13},
    { id: 'd97', value: 0},
    { id: 'd98', value: 2},
    { id: 'd99', value: 1},
    { id: 'd100', value: 11},
];

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

container
.selectAll('.bar')
.data(DUMMY_DATA)
.transition()
.duration(800)
.attr('width', xScale.bandwidth())
.attr('height', (data) => 600 - yScale(data.value))
.attr('x', data => xScale(data.id))
.attr('y', data => yScale(data.value))
.attr("fill", "green");

container
.selectAll('.bar')
.data(arr)
.exit()
.remove()

/////////////////////////////////////////////   Bubble sort function    ///////////////////////////////////////////////////////
// Grabs the "Bubble sort" button
// var bubblesort = document.getElementById("bubble-sort");

function bubbleSort() {

    var vals = []; //initializes array for slider array values
    var ids = []; //initializes array for slider array ids
    var bubblearr = []; //empty final array

    //Adds the values from the SLIDER_DATA array to the empty 'vals' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        vals.push(SLIDER_DATA[i].value);
    }

    //Adds the ids from the SLIDER_DATA array to the empty 'ids' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        ids.push(SLIDER_DATA[i].id);
    }

    console.log(SLIDER_DATA);
    console.log(vals); //these are all unsorted (plain values from the SLIDER_DATA array)

    var startChunk = function(l) {
    //Bubble sort function (copied from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/)
    for(var i = 0; i < vals.length; i++){
        // bubblearr[i] = {id: ids[i], value: vals[i]}
     
        // Last i elements are already in place  
        for(var j = 0; j < (vals.length - i -1 ); j++){
            
            // Checking if the item at present iteration is greater than the next iteration
            if(SLIDER_DATA[j].value > SLIDER_DATA[j+1].value){    //Was vals[j] and vals[j+1]

                ///////////////// Bubblearr version  ///////////////////////
                // If the condition is true then swap them
                // var temp = vals[j]
                // vals[j] = vals[j + 1]
                // vals[j+1] = temp

                ///////////////////////// Slider Data Array Version  /////////////////////////
                // If the condition is true then swap them
                var temp = SLIDER_DATA[j].value
                SLIDER_DATA[j].value = SLIDER_DATA[j + 1].value
                SLIDER_DATA[j+1].value = temp

                draw(SLIDER_DATA);
            }

                // //Updates the bars with newly generated values
                // container
                // .selectAll('.bar')
                // .data(SLIDER_DATA)
                // .transition()
                // .duration(800)
                // .attr('width', xScale.bandwidth())
                // .attr('height', (data) => 600 - yScale(data.value))
                // .attr('x', data => xScale(data.id))
                // .attr('y', data => yScale(data.value))
                // .attr("fill", "green");

                // container
                // .selectAll('.bar')
                // .data(SLIDER_DATA)
                // .exit()
                // .remove()

                /////////////////////// Need to add code here to update the graph everytime the vals array is sorted ///////////////////

                /////////////////////////////// Removal and replacement method ////////////////////////////////////////////////////////
                // container.selectAll(".bar").remove()

                // container.selectAll(".bar")
                // .data(bubblearr)
                // .enter()
                // .append("rect")
                // .attr('width', xScale.bandwidth())
                // .attr('height', (data) => 600 - yScale(data.value))
                // .attr('x', data => xScale(data.id))
                // .attr('y', data => yScale(data.value))
                // .attr("fill", "green");

                ///////////////////////////// Traditional way of updating the values ///////////////////////////////////////////////////
                // var circleUpdate = container.selectAll(".bar")
                // .data(bubblearr)

                // circleUpdate.enter().append("rect")
                // .attr('width', xScale.bandwidth())
                // .attr('height', (data) => 600 - yScale(data.value))
                // .attr('x', data => xScale(data.id))
                // .attr('y', data => yScale(data.value))
                // .attr("fill", "green");

                // circleUpdate.exit().remove()

                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // setTimeout(function() {
                //     startChunk(l - 1);
                //   }, 1000);
            }
        }
        setTimeout(function() {
            startChunk(l - 1);
          }, 1000);
    }

    console.log(vals); //these are sorted
    console.log(SLIDER_DATA);
    
    ///////////////////////////// Original code that updates the final graph and displays them sorted and green /////////////////////
    //Pairs each integer in the 'vals' array with an id in the 'ids' array and adds these objects to the 'bubblearr' array
    // for (var i = 0; i < ids.length; i++)
    //     bubblearr[i] = {id: ids[i], value: vals[i]}

    // //Updates the bars with newly generated values
    // container
    // .selectAll('.bar')
    // .data(bubblearr)
    // .transition()
    // .duration(800)
    // .attr('width', xScale.bandwidth())
    // .attr('height', (data) => 600 - yScale(data.value))
    // .attr('x', data => xScale(data.id))
    // .attr('y', data => yScale(data.value))
    // .attr("fill", "green");

    // container
    // .selectAll('.bar')
    // .data(bubblearr)
    // .exit()
    // .remove()


    // Schedule the first chunk
    startChunk(vals.length);
}

function draw(arr) {
    //Updates the bars with newly generated values
    container
    .selectAll('.bar')
    .data(arr)
    .transition()
    .duration(800)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    .attr("fill", "green");

    container
    .selectAll('.bar')
    .data(arr)
    .exit()
    .remove()
}