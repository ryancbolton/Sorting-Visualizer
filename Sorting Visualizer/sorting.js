

const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 11, region: 'India'},
    { id: 'd3', value: 12, region: 'China'},
    { id: 'd4', value: 6, region: 'Germany'},
];

const xScale = d3
.scaleBand()
.domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
.rangeRound([0, 250])
.padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

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

const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Grabs the "Generate Array" button
var newarr = document.getElementById("generate-array");
newarr.onclick = function() {
    //Find index of specific object using findIndex method.
    bars.enter()    
    objIndex = DUMMY_DATA.findIndex((obj => obj.id == 'd1'));

    //Log object to Console.
    console.log("Before update: ", DUMMY_DATA[objIndex])

    //Update object's name property.
    bars.transition()
    DUMMY_DATA[objIndex].value = Math.floor(Math.random() * 11);

    //Log object to console again.
    console.log("After update: ", DUMMY_DATA[objIndex])

    bars.exit()
        .remove()
};
