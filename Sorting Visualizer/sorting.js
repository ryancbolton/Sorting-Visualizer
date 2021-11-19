
const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 11, region: 'India'},
    { id: 'd3', value: 12, region: 'China'},
    { id: 'd4', value: 6, region: 'Germany'},
];
// const DUMMY_DATA = JSON.parse(values)

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

// Display the default slider value and print to console
output.innerHTML = slider.value;
console.log(slider.value)

update=()=>{

    //Output currrently updated slider value and print to console
    output.innerHTML = slider.value; 
    console.log(slider.value)
}   
//Event listener to detect when slider is being used and invoke update
slider.addEventListener('input', update);

// Grabs the "Generate Array" button
var newarr = document.getElementById("generate-array");
newarr.onclick = function() {
    //Find index of specific object using findIndex method. 
    objIndex = DUMMY_DATA.findIndex((obj => obj.id == 'd1'));

    //Log object to Console.
    console.log("Before update: ", DUMMY_DATA[objIndex])

    //Update object's value properties.
    DUMMY_DATA.forEach(obj => {
        for (var i = 0; i < DUMMY_DATA.length; i++) {
            // console.log(`${key}: ${obj[key]}`);
            DUMMY_DATA[i].value = Math.floor(Math.random() * 11);
        }
    });

    //Updates the bars with newly generated values
    container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .transition()
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

    //Log object to console again.
    console.log("After update: ", DUMMY_DATA[objIndex])

    container.exit()
        .remove()
};