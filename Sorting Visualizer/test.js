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

console.log("original data", DUMMY_DATA)

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

// Removes any existing bars (rects) before each redraw
container.selectAll('rect').remove()

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

    // This code checks if the array is sorted, and pushed true or false to arr2
    var arr2 = [];
    for (i = 0; i < arr.length-1; i++) { 
        if (arr[i].value > arr[i + 1].value) {
            // console.log('false');
            arr2.push(false);
            // console.log(arr2)  
        }
        else {
            // console.log('true');
            arr2.push(true);
            // console.log(arr2)
        }
    }
    
    // This code checks to see if every value in arr2 is true (i.e. the entire graph is sorted), and turns the graph green accordingly
    let checker = arr => arr.every(v => v === true);
    console.log(arr)
    console.log(arr2)
    // console.log("is array sorted?", checker(arr2))
    
    if (checker(arr2) == true) {
        d3.selectAll('rect')
        .style('fill', 'green')

        // Clears the setInterval of bubblesort_wrap() function to end the continuous calling of it
        clearInterval(handle);
    }
};

// /////////////////////////////////////////////   Swap function    ///////////////////////////////////////////////////////
// function swap(arr, j) {
//     // Checking if the item at present iteration is greater than the next iteration
//     if(arr[j] > arr[j + 1]){

//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp

//         return arr;
//     }

// }

/////////////////////////////////////////////   Generate button functions    ///////////////////////////////////////////////////////
// Grabs the "Generate Array" button
// var newarr = document.getElementById("generate-array");
function GenerateArr(){
    //Find index of specific object using findIndex method. 
    objIndex = DUMMY_DATA.findIndex((obj => obj.id));

    //Update object's value properties.
    DUMMY_DATA.forEach(obj => {
        for (var i = 0; i < DUMMY_DATA.length; i++) {
            DUMMY_DATA[i].value = Math.floor(Math.random() * 16);
        }
    });

    draw(DUMMY_DATA); //Draws each newly generated array

    // Clears the setInterval of bubblesort_wrap() function to end the continuous calling of it
    clearInterval(handle);
    
};

GenerateArr();
// console.log("Before bubble sort", DUMMY_DATA)


// /////////////////////////////////////////////   Sorting functions start    ///////////////////////////////////////////////////////

// /////////////////////////////////////////////   Bubble sort function    ///////////////////////////////////////////////////////
async function bubbleSort(ids, vals) {
    bubblearr = [];
    for (let i = 0; i < vals.length; i++) {
        for (let j = 0; j < vals.length; j++) {
            if (vals[j] > vals[j + 1]) {
                let tmp = vals[j];
                vals[j] = vals[j + 1];
                vals[j + 1] = tmp;
            }
            for (var z = 0; z < ids.length; z++) {
                bubblearr[z] = {id: ids[z], value: vals[z]}
            }
            await new Promise(resolve => setTimeout(resolve, 10));
            draw(bubblearr, z);
        }
    }
};

/////////////////////////////////////////////   Selection Sort function    ///////////////////////////////////////////////////////
async function selectionSort(ids, vals) {
    bubblearr = [];
    console.log("Selectionsort function", DUMMY_DATA)
        
    for(var i = 0; i < vals.length; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(var j = i+1; j < vals.length; j++){
            if(vals[j] < vals[min]) {
                min=j; 
            }
            // draw(bubblearr, min); //draws the new array after each pass
         }

        if (min != i) {
            // Swapping the elements
            let tmp = vals[i]; 
            vals[i] = vals[min];
            vals[min] = tmp;      

            // vals = swap(vals);
        }
        // Needs to go here to get the final array with the last swapped value 
        // This loop populates 
        for (var z = 0; z < ids.length; z++) {
            bubblearr[z] = {id: ids[z], value: vals[z]}
            // await new Promise(resolve => setTimeout(resolve, 25));
            // draw(bubblearr, z);
        }
        await new Promise(resolve => setTimeout(resolve, 100));
        draw(bubblearr, z);
    }
}

/////////////////////////////////////////////   Insertion Sort function    ///////////////////////////////////////////////////////
async function insertionSort(ids, vals) {
    bubblearr = [];
    // console.log("Insertionsort function", DUMMY_DATA)
        for (let i = 1; i < vals.length; i++) {
            // Choosing the first element in our unsorted subarray
            let current = vals[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < vals[j])) {
                vals[j+1] = vals[j];
                j--;
            }
            vals[j+1] = current;

            // Needs to go here to get the final array with the last swapped value 
            // This loop populates 
            for (var z = 0; z < ids.length; z++) {
                bubblearr[z] = {id: ids[z], value: vals[z]}
                // await new Promise(resolve => setTimeout(resolve, 25));
                // draw(bubblearr, z);
            }
            await new Promise(resolve => setTimeout(resolve, 100));
            draw(bubblearr, z);
        }
}

/////////////////////////////////////////////   Wrapper functions    ///////////////////////////////////////////////////////

function bubbleSort_wrap() {
    bubbleids = [];
    bubblevals = []; 
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        bubblevals.push(DUMMY_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        bubbleids.push(DUMMY_DATA[i].id);
    }

    bubbleSort(bubbleids, bubblevals) 
}

function selectionSort_wrap() {
    selectionids = [];
    selectionvals = []; 
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        selectionvals.push(DUMMY_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        selectionids.push(DUMMY_DATA[i].id);
    }

    selectionSort(selectionids, selectionvals);
}

function insertionSort_wrap() {
    insertionids = [];
    insertionvals = []; 
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        insertionvals.push(DUMMY_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < DUMMY_DATA.length; i++) {
        insertionids.push(DUMMY_DATA[i].id);
    }

    insertionSort(insertionids, insertionvals) 
}

// To do:
// 1. Get rid of all global variables
// 2. Create a swap function (may not be doable/usable for all sorting algs)
// 3. Combine all the wrapper functions into one (alot of repeated code there, might also not be doable realistically)
// 4. Add the slider back in
// 5. Try to add at least 1 more complex sorting alg (quicksort, mergesort, heapsort, etc.)
// 6. Add a rate slider to change how fast the algs sort
