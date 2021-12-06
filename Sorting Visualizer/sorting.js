
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

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth()) //Takes available width and divides by the number of data points (ids) to give equal widths
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value));


/////////////////////////////////////////////   Generate button functions    ///////////////////////////////////////////////////////
// Grabs the "Generate Array" button
var newarr = document.getElementById("generate-array");
newarr.onclick = function() {
    //Find index of specific object using findIndex method. 
    objIndex = DUMMY_DATA.findIndex((obj => obj.id));

    //Log object to Console.
    for (objIndex in DUMMY_DATA) {
        console.log("Before update: ", DUMMY_DATA[objIndex])
    }

    //Update object's value properties.
    DUMMY_DATA.forEach(obj => {
        for (var i = 0; i < DUMMY_DATA.length; i++) {
            DUMMY_DATA[i].value = Math.floor(Math.random() * 16);
        }
    });

    //Updates the bars with newly generated values
    container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .transition()
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value));

    //Log object to console again.
    for (objIndex in DUMMY_DATA) {
        console.log("After update: ", DUMMY_DATA[objIndex])
    }

    container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .exit()
    .remove()
};

/////////////////////////////////////////////   Slider functions    ///////////////////////////////////////////////////////
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Display the default slider value and print to console
output.innerHTML = slider.value;
console.log(slider.value)

// //Take portion of original dataset
// SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)

update=()=>{

    //Output currently updated slider value and print to console
    output.innerHTML = slider.value; 
    console.log(slider.value)

    //Take portion of original dataset
    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)

    //Change xscale to be based off new SLIDER array instead of original DUMMY array
    xScale = d3
        .scaleBand() //Gives all bars/items the same width
        .domain(SLIDER_DATA.map((dataPoint) => dataPoint.id)) //Tells scaleBand() how many data points there are based on the number of ids
        .rangeRound([0, 1000]) //Sets the range of the area the bars are generated in, i.e. the width of the container
        .padding(0.1); //Puts padding between the bars

    // Create the u variable
    var u = container.selectAll(".bar")
    .data(SLIDER_DATA)

    //Update object's value properties.
    SLIDER_DATA.forEach(obj => {
        for (var i = 0; i < SLIDER_DATA.length; i++) {
            SLIDER_DATA[i].value = Math.floor(Math.random() * 16);
        }
    });

    //Makes the existing values change once new ones are added or removed
    container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value));

    //Adds any new bars if slider is moved up
    u
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))

     //Removes any old bars if slider is moved down
    u
    .exit()
    .remove()

    return SLIDER_DATA

}   
//Event listener to detect when slider is being used and invoke update
slider.addEventListener('input', update);

/////////////////////////////////////////////   Bubble sort functions    ///////////////////////////////////////////////////////
// Grabs the "Generate Array" button
var bubblesort = document.getElementById("bubble-sort");
bubblesort.onclick = function() {

    bubblearr = [];
    var SLIDER_DATA = update()

    for (var i = 0; i < SLIDER_DATA.length; i++) {
        bubblearr.push(SLIDER_DATA[i].value);
    }

    for(var i = 0; i < bubblearr.length; i++){
     
        // Last i elements are already in place  
        for(var j = 0; j < (bubblearr.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(bubblearr[j] > bubblearr[j+1]){
              
            // If the condition is true then swap them
            var temp = bubblearr[j]
            bubblearr[j] = bubblearr[j + 1]
            bubblearr[j+1] = temp
          }
        }
    }

    //Adds the ids from the SLIDER_DATA array to the empty 'a' array
    var a = [];
    var res = {}; //empty res object
    var e = [];
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        a.push(SLIDER_DATA[i].id);
    }

    //Pairs each integer in the 'bubblearr' array with an id in the 'a' array and adds these objects to the 'res' array
    for (var i = 0; i < a.length; i++)
        res[a[i]] = bubblearr[i];
        e.push(res)

    //Updates the bars with newly generated values
    container
    .selectAll('.bar')
    .data(e)
    .transition()
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value));

    // container
    // .selectAll('.bar')
    // .data(res)
    // .transition()
    // .duration(1000)

    container
    .selectAll('.bar')
    .data(e)
    .exit()
    .remove()

    console.log(res)
    console.log(e)

    // Print the sorted array
    console.log(bubblearr)
}