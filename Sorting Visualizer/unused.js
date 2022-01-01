// const DUMMY_DATA = JSON.parse(values)

// //selects main div
// d3.select('div')
//     //selects all paragraphs in that div
//     .selectAll('p')
//     //binds data to the paragraphs
//     .data(DUMMY_DATA)
//     //tells which paragraphs are missing
//     .enter()
//     //append a new paragraph for every missing paragraph
//     .append('p')
//     //sets text inside every created paragraph
//     .text(dta => dta.region);

// // If less group in the new dataset, I delete the ones not in use anymore
// u
// .exit()
//  .transition() // and apply changes to all of them
//  .duration(1000)
//  .style("opacity", 0)
// .remove()

// DUMMY_DATA.splice(0, 0, ...SLIDER_DATA);




 // bubblegraph(bubblearr, SLIDER_DATA);

 // function bubblegraph(barr, sarr) {
//     var bubblearr = barr;
//     var SLIDER_ARRAY = sarr;

//     var u = container.selectAll('.bar')
//     .data(SLIDER_ARRAY)

//     var v = container.selectAll('.bar')
//     .data(bubblearr)

//     u.enter().append('rect'); //<-- ENTER - when data enters the join append a rect element to dom
//     v.enter().append('rect'); //<-- ENTER - when data enters the join append a rect element to dom

//     container
//     .enter().append('rect')

//     //Updates the bars with newly generated values
//     container
//     .selectAll('.bar')
//     .data(SLIDER_ARRAY)
//     .transition()
//     .duration(800)
//     .attr('width', xScale.bandwidth())
//     .attr('height', (data) => 600 - yScale(data.value))
//     .attr('x', data => xScale(data.id))
//     .attr('y', data => yScale(data.value))
//     .attr("fill", "green");

//     container
//     .selectAll('.bar')
//     .data(SLIDER_ARRAY)
//     .exit()
//     .remove()

//     u.exit().remove(); //<-- EXIT - when data leaves the join, remove the rect
//     v.exit().remove(); //<-- EXIT - when data leaves the join, remove the rect

//     //Take the new array and go through each array, comparing the values and swapping them




//     // //Updates the bars with newly generated values
//     // container
//     // .select('rect')
//     // .data(bubblearr)
//     // // .transition()
//     // // .duration(800)
//     // .attr('width', xScale.bandwidth())
//     // .attr('height', (data) => 600 - yScale(data.value))
//     // .attr('x', data => xScale(data.id))
//     // .attr('y', data => yScale(data.value))
//     // .attr("fill", "red");


//     // bubblearr[i] = {id: ids[i], value: vals[i]}


//     // //Updates the bars with newly generated values
//     // container
//     // .selectAll('rect')
//     // .data(bubblearr)
//     // .transition()
//     // .duration(500)
//     // .attr('width', xScale.bandwidth())
//     // .attr('height', (data) => 600 - yScale(data.value))
//     // .attr('x', data => xScale(data.id))
//     // .attr('y', data => yScale(data.value))
//     // .attr("fill", "green");

// }


/////////////////////////////////////////// 12/29/21 Progress Point /////////////////////////////////////////////////////////////
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

var count = 1 + 50,
    durationTime = 2000/count,
    array = d3.shuffle(d3.range(1,count)),
    unsortedArray = [...array],
    sortedArray = [],
    stop = false,
    steps = 0,
    bogoShuffles = 0;
    
var margin = {top: 40, right: 0, bottom: 180, left: 0},
    width = 960 - margin.left - margin.right,
    height = 5000 - margin.top - margin.bottom;

var barWidth = width/count;

var x = d3.scaleLinear()
    .domain([0,count])
    .range([0, width]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
var rects = svg.append("g")
    .attr("transform", "translate(" + barWidth + ",2)")
    .selectAll("rect")
    .data(unsortedArray)
    .enter().append("rect")

var labels = svg.selectAll("text")
    .data(unsortedArray)
    .enter().append("text")
    
labels.attr("id", function(d) {return "text" + d})
    .attr("transform", function(d, i) {return "translate(" + x(i) + ",0)"})
    .html(function(d) {return d;})

rects.attr("id", function(d) {return "rect" + d})
    .attr("transform", function(d, i) {return "translate(" + (x(i) - barWidth) + ",0)"})
    .attr("width", barWidth *.9)
    .attr("height", function(d) {return d*barWidth/3})

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
    .attr('y', data => yScale(data.value))


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
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");

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
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");

    //Adds any new bars if slider is moved up
    u
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");

    //Removes any old bars if slider is moved down
    u
    .exit()
    .remove()

    return SLIDER_DATA

}   
//Event listener to detect when slider is being used and invoke update
slider.addEventListener('input', update);

//Creates global slider data array for use in the sorting functions (was previously inside the sorting function itself below vals array initiation)
var SLIDER_DATA = update()

/////////////////////////////////////////////   Bubble sort function    ///////////////////////////////////////////////////////
// Grabs the "Bubble sort" button
// var bubblesort = document.getElementById("bubble-sort");

function bubbleSort() {

        function sortPass(i) {
            if (!unsortedArray.length || stop) return stop = false

            if (i<=unsortedArray.length) {
                if (unsortedArray[i] < unsortedArray[i-1]) {

                    d3.select("#rect" + unsortedArray[i]).attr("class", "testing")
                    d3.select("#rect" + unsortedArray[i-1]).attr("class", "testing")
                    
                    d3.timeout(function() {
                        d3.select("#rect" + unsortedArray[i]).attr("class", "")
                        d3.select("#rect" + unsortedArray[i-1]).attr("class", "")                                            
                    }, durationTime);

                    var temp = unsortedArray[i-1];
                    unsortedArray[i-1] = unsortedArray[i];
                    unsortedArray[i] = temp;

                    slide(unsortedArray[i], i + sortedArray);
                    slide(unsortedArray[i-1], i-1 + sortedArray);

                    d3.select("#counter").html(++steps);

                    d3.timeout(function() {return sortPass(++i)}, durationTime);

                } else if (i == unsortedArray.length) {

                    for (n = i; n == unsortedArray[n-1]; n--) {
                        d3.select("#text" + n).attr("class", "sorted")
                        unsortedArray.pop();
                    }              

                    sortPass(++i);
                } else {               
                    sortPass(++i);
                }

            } else {
                bubbleSort();
            }
        }
        sortPass(1);



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
    console.log(vals);
    //Bubble sort function (copied from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/)
    for(var i = 0; i < vals.length; i++){
        bubblearr[i] = {id: ids[i], value: vals[i]}
     
        // Last i elements are already in place  
        for(var j = 0; j < (vals.length - i -1 ); j++){
            
            // Checking if the item at present iteration is greater than the next iteration
            if(vals[j] > vals[j+1]){

                // If the condition is true then swap them
                var temp = vals[j]
                vals[j] = vals[j + 1]
                vals[j+1] = temp
            }
        }

        console.log(vals);

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
    }

    //Pairs each integer in the 'vals' array with an id in the 'ids' array and adds these objects to the 'bubblearr' array
    for (var i = 0; i < ids.length; i++)
        bubblearr[i] = {id: ids[i], value: vals[i]}

//     d3.selectAll('rect')
//   .each(function(d, i) {
//     var odd = i % 2 === 1;

//     d3.select(this)
//       .style('fill', odd ? 'orange' : '#ddd')
//     });


    //Updates the bars with newly generated values
    container
    .selectAll('.bar')
    .data(bubblearr)
    .transition()
    .duration(800)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    .attr("fill", "green");

    container
    .selectAll('.bar')
    .data(SLIDER_DATA)
    .exit()
    .remove()

    // d3.selectAll('.bar')
    //     .data(bubblearr, function(d) {
    //         return d;
    //     })
    //     .each(function(d) {

    //     d3.select(this)
    //     .transition()
    //     .duration(800)
    //     .attr('width', xScale.bandwidth())
    //     .attr('height', (data) => 600 - yScale(data.value))
    //     .attr('x', data => xScale(data.id))
    //     .attr('y', data => yScale(data.value))
    //     .attr("fill", "green")
    // });

    // console.log(bubblearr)

    // // Print the sorted array
    // console.log(vals)
}

function slide(d, i) {
    d3.select("#text" + d)
        .transition().duration(durationTime)
        .attr("transform", function(d) {return "translate(" + (x(i)) + ", 0)"})

    d3.select("#rect" + d)
        .transition().duration(durationTime)
        .attr("transform", function(d) {return "translate(" + (x(i-1)) + ", 0)"})                
}

/////////////////////////////////// 1/1/2022 Progress Point ////////////////////////////////////////////////////////
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

var count = 1 + 50,
    durationTime = 2000/count,
    array = d3.shuffle(d3.range(1,count)),
    unsortedArray = [...array],
    sortedArray = [],
    stop = false,
    steps = 0,
    bogoShuffles = 0;
    
var margin = {top: 40, right: 0, bottom: 180, left: 0},
    width = 960 - margin.left - margin.right,
    height = 5000 - margin.top - margin.bottom;

var barWidth = width/count;

var x = d3.scaleLinear()
    .domain([0,count])
    .range([0, width]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
var rects = svg.append("g")
    .attr("transform", "translate(" + barWidth + ",2)")
    .selectAll("rect")
    .data(unsortedArray)
    .enter().append("rect")

var labels = svg.selectAll("text")
    .data(unsortedArray)
    .enter().append("text")
    
labels.attr("id", function(d) {return "text" + d})
    .attr("transform", function(d, i) {return "translate(" + x(i) + ",0)"})
    .html(function(d) {return d;})

rects.attr("id", function(d) {return "rect" + d})
    .attr("transform", function(d, i) {return "translate(" + (x(i) - barWidth) + ",0)"})
    .attr("width", barWidth *.9)
    .attr("height", function(d) {return d*barWidth/3})

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
    .attr('y', data => yScale(data.value))


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
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");

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
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");

    //Adds any new bars if slider is moved up
    u
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    .attr("fill", "#720570");

    //Removes any old bars if slider is moved down
    u
    .exit()
    .remove()

    return SLIDER_DATA

}   
//Event listener to detect when slider is being used and invoke update
slider.addEventListener('input', update);

//Creates global slider data array for use in the sorting functions (was previously inside the sorting function itself below vals array initiation)
var SLIDER_DATA = update()

/////////////////////////////////////////////   Bubble sort function    ///////////////////////////////////////////////////////
// Grabs the "Bubble sort" button
// var bubblesort = document.getElementById("bubble-sort");

function bubbleSort() {

        function sortPass(i) {
            if (!unsortedArray.length || stop) return stop = false

            if (i<=unsortedArray.length) {
                if (unsortedArray[i] < unsortedArray[i-1]) {

                    d3.select("#rect" + unsortedArray[i]).attr("class", "testing")
                    d3.select("#rect" + unsortedArray[i-1]).attr("class", "testing")
                    
                    d3.timeout(function() {
                        d3.select("#rect" + unsortedArray[i]).attr("class", "")
                        d3.select("#rect" + unsortedArray[i-1]).attr("class", "")                                            
                    }, durationTime);

                    var temp = unsortedArray[i-1];
                    unsortedArray[i-1] = unsortedArray[i];
                    unsortedArray[i] = temp;

                    slide(unsortedArray[i], i + sortedArray);
                    slide(unsortedArray[i-1], i-1 + sortedArray);

                    d3.select("#counter").html(++steps);

                    d3.timeout(function() {return sortPass(++i)}, durationTime);

                } else if (i == unsortedArray.length) {

                    for (n = i; n == unsortedArray[n-1]; n--) {
                        d3.select("#text" + n).attr("class", "sorted")
                        unsortedArray.pop();
                    }              

                    sortPass(++i);
                } else {               
                    sortPass(++i);
                }

            } else {
                bubbleSort();
            }
        }
        sortPass(1);



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
    console.log(vals);

    function sortPass(i) {
        if (!unsortedArray.length || stop) return stop = false

        if (i<=unsortedArray.length) {
            if (unsortedArray[i] < unsortedArray[i-1]) {

                d3.select("#rect" + unsortedArray[i]).attr("class", "testing")
                d3.select("#rect" + unsortedArray[i-1]).attr("class", "testing")
                
                d3.timeout(function() {
                    d3.select("#rect" + unsortedArray[i]).attr("class", "")
                    d3.select("#rect" + unsortedArray[i-1]).attr("class", "")                                            
                }, durationTime);

                var temp = unsortedArray[i-1];
                unsortedArray[i-1] = unsortedArray[i];
                unsortedArray[i] = temp;

                slide(unsortedArray[i], i + sortedArray);
                slide(unsortedArray[i-1], i-1 + sortedArray);

                d3.select("#counter").html(++steps);

                d3.timeout(function() {return sortPass(++i)}, durationTime);

            } else if (i == unsortedArray.length) {

                for (n = i; n == unsortedArray[n-1]; n--) {
                    d3.select("#text" + n).attr("class", "sorted")
                    unsortedArray.pop();
                }              

                sortPass(++i);
            } 
            else {               
                sortPass(++i);
            }

        } 
        else {
            bubbleSort();
        }
    }
    sortPass(1);

    function sortpass(i) {

    //Bubble sort function (copied from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/)
    for(var i = 0; i < vals.length; i++){
        bubblearr[i] = {id: ids[i], value: vals[i]}
     
        // Last i elements are already in place  
        for(var j = 0; j < (vals.length - i -1 ); j++){
            
            // Checking if the item at present iteration is greater than the next iteration
            if(vals[j] > vals[j+1]){

                // If the condition is true then swap them
                var temp = vals[j]
                vals[j] = vals[j + 1]
                vals[j+1] = temp
            } else if (i == vals.length) {

                for (n = i; n == vals[n-1]; n--) {
                    d3.select("#text" + n).attr("class", "sorted")
                    vals.pop();
                }              

                sortPass(++i);
            } 
            else {               
                sortPass(++i);
            }
        }

        // console.log(vals);
    }
    bubbleSort();
}
sortpass(1);

    //Pairs each integer in the 'vals' array with an id in the 'ids' array and adds these objects to the 'bubblearr' array
    for (var i = 0; i < ids.length; i++)
        bubblearr[i] = {id: ids[i], value: vals[i]}

    //Updates the bars with newly generated values
    container
    .selectAll('.bar')
    .data(bubblearr)
    .transition()
    .duration(800)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 600 - yScale(data.value))
    .attr('x', data => xScale(data.id))
    .attr('y', data => yScale(data.value))
    .attr("fill", "green");

    container
    .selectAll('.bar')
    .data(SLIDER_DATA)
    .exit()
    .remove()
}

function slide(d, i) {
    d3.select("#text" + d)
        .transition().duration(durationTime)
        .attr("transform", function(d) {return "translate(" + (x(i)) + ", 0)"})

    d3.select("#rect" + d)
        .transition().duration(durationTime)
        .attr("transform", function(d) {return "translate(" + (x(i-1)) + ", 0)"})                
}