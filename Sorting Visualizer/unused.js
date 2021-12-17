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
