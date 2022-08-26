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

mergeids = [];

console.log("original data", DUMMY_DATA)

gen_button = document.getElementById("generate-array");
my_slider = document.getElementById("myRange");

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

    //Change xscale to be based off arr (orignally in update function for slider)
    xScale = d3
        .scaleBand() //Gives all bars/items the same width
        .domain(arr.map((dataPoint) => dataPoint.id)) //Tells scaleBand() how many data points there are based on the number of ids
        .rangeRound([0, 1000]) //Sets the range of the area the bars are generated in, i.e. the width of the container
        .padding(0.1); //Puts padding between the bars

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


/////////////////////////////////////////////   Slider functions    ///////////////////////////////////////////////////////

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

//Event listener to detect when slider is being used and invoke update
slider.addEventListener('input', GenerateArr);

/////////////////////////////////////////////   Generate button functions    ///////////////////////////////////////////////////////
// Grabs the "Generate Array" button
// var newarr = document.getElementById("generate-array");
function GenerateArr(){
    //Output currently updated slider value and print to console
    output.innerHTML = slider.value; 

    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)

    //Update object's value properties.
    SLIDER_DATA.forEach(obj => {
        for (var i = 0; i < SLIDER_DATA.length; i++) {
            SLIDER_DATA[i].value = Math.floor(Math.random() * 16);
        }
    });

    draw(SLIDER_DATA); //Draws each newly generated array
    
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

            // Disables generate array button and slider until sorting is finished
            gen_button.disabled = true;
            my_slider.disabled = true;
        }
    }
    // Re-enables generate array button and slider after sorting is finished
    gen_button.disabled = false;
    my_slider.disabled = false;
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

        // Disables generate array button and slider until sorting is finished
        gen_button.disabled = true;
        my_slider.disabled = true;
    }
    // Re-enables generate array button and slider after sorting is finished
    gen_button.disabled = false;
    my_slider.disabled = false;
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

            // Disables generate array button and slider until sorting is finished
            gen_button.disabled = true;
            my_slider.disabled = true;
        }
        // Re-enables generate array button and slider after sorting is finished
        gen_button.disabled = false;
        my_slider.disabled = false;
}

/////////////////////////////////////////////   Merge Sort function    ///////////////////////////////////////////////////////
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(vals) {
    // bubblearr = [];

    // console.log(vals)
    // console.log(vals.length)
    const half = vals.length / 2
    
    // Base case or terminating case
    if(vals.length < 2){
      return vals 
    //   console.log(vals)
    }
    

    // // Needs to go here to get the final array with the last swapped value 
    // // This loop populates 
    // for (var z = 0; z < mergeids.length; z++) {
    //     bubblearr[z] = {id: mergeids[z], value: vals[z]}
    //     // await new Promise(resolve => setTimeout(resolve, 25));
    //     // draw(bubblearr, z);
    // }
    // // await new Promise(resolve => setTimeout(resolve, 100));
    // draw(bubblearr, z);

    const left = vals.splice(0, half)
    return merge(mergeSort(left), mergeSort(vals))
    // console.log(merge(mergeSort(left), mergeSort(vals)))
}

/////////////////////////////////////////////   Quick Sort function    ///////////////////////////////////////////////////////
function quickSort(array) {
    bubblearr = [];
    
    if (array.length <= 1) {
        return array;
      }
    
      var pivot = array[0];
      
      var left = []; 
      var right = [];
    
      for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
      }


    //   for (var z = 0; z < ids.length; z++) {
    //     bubblearr[z] = {id: ids[z], value: vals[z]}
    //     // await new Promise(resolve => setTimeout(resolve, 25));
    //     // draw(bubblearr, z);
    //     }
    //     await new Promise(resolve => setTimeout(resolve, 100));
    //     draw(bubblearr, z);
    
      return quickSort(left).concat(pivot, quickSort(right)); //returning array of ints (vals array)

}

/////////////////////////////////////////////   Wrapper functions    ///////////////////////////////////////////////////////

function bubbleSort_wrap() {
    bubbleids = [];
    bubblevals = []; 
    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        bubblevals.push(SLIDER_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        bubbleids.push(SLIDER_DATA[i].id);
    }

    bubbleSort(bubbleids, bubblevals) 
}

function selectionSort_wrap() {
    selectionids = [];
    selectionvals = []; 
    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        selectionvals.push(SLIDER_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        selectionids.push(SLIDER_DATA[i].id);
    }

    selectionSort(selectionids, selectionvals);
}

function insertionSort_wrap() {
    insertionids = [];
    insertionvals = []; 
    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        insertionvals.push(SLIDER_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        insertionids.push(SLIDER_DATA[i].id);
    }

    insertionSort(insertionids, insertionvals) 
}

function mergeSort_wrap() {
    // mergeids = [];
    mergevals = []; 
    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        mergevals.push(SLIDER_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        mergeids.push(SLIDER_DATA[i].id);
    }

    // mergeSort(mergevals);
    console.log('Mergesort sorted array', mergeSort(mergevals));
}

function quickSort_wrap() {
    quickids = [];
    quickvals = []; 
    SLIDER_DATA = DUMMY_DATA.slice(0, slider.value)
    //Adds the values from the DUMMY_DATA array to the empty 'vals' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        quickvals.push(SLIDER_DATA[i].value);
    }

    //Adds the ids from the DUMMY_DATA array to the empty 'ids' array
    for (var i = 0; i < SLIDER_DATA.length; i++) {
        quickids.push(SLIDER_DATA[i].id);
    }

    console.log('Quicksort sorted array', quickSort(quickvals));
}

// To do:
// 1. Get rid of all global variables
// 2. Create a swap function (may not be doable/usable for all sorting algs)
// 3. Combine all the wrapper functions into one (alot of repeated code there, might also not be doable realistically)
// 4. Add the slider back in
// 5. Try to add at least 1 more complex sorting alg (quicksort, mergesort, heapsort, etc.)
// 6. Add a rate slider to change how fast the algs sort