# Sorting-Visualizer
A simple script using html, css, and d3.js, to interactively visualize different sorting methods on random data.

## Project Status

This project is currently in development. Users can generate a new random array by refreshing the page, and bubble sort works and shows each sorting step. Future plans are to combine the current iteration with the previous one to bring back the slider to change the array size. Final plans include adding the other sorting algorithms, such as quick sort, merge sort, etc. 

## Project Screen Shots

#### Before sorting on a set of 25 values:   
![BeforeSort](https://user-images.githubusercontent.com/54788917/171754914-27e23d50-2cd3-4d84-a367-da91299b4c3f.PNG)

#### After sorting: 
![AfterSort](https://user-images.githubusercontent.com/54788917/171754856-d4a7cbc3-e9aa-4e45-ae7d-038e76f55a2e.PNG)

## Installation and Setup Instructions
To run this program, you will need to install the d3.js library with `npm install d3`, 

or add the following lines of code to the header of your html:
`<script src="https://d3js.org/d3.v7.min.js" charset="utf-8"></script>`
and
`<script src="https://d3js.org/d3-scale.v3.min.js"></script>`
for scaling 

## Reflection 

So far I have been working on this project since Nov./Dec. of 2021, but have not worked on it soley due to business in my personal life and focus on other projects. 
I originally got the idea for this from Clement Mihailescu's YouTube video where he made a similar program using React seen here: https://www.youtube.com/watch?v=pFXYym4Wbkc&ab_channel=Cl%C3%A9mentMihailescu

However, I was new to HTML, CSS, and Javascript, and I wanted to strengthen my abilities with them as well as my knowledge of data structures and algorithms, hence why I decided to build it from scratch instead of relying on a framework and trying to run before I could walk so to speak. This is also my first "real" project I have worked on and essentially finished.

Some challenges I ran into early on were getting used to d3.js enter(), update(), and exit() methods. Implementing the generate random array button was relatively easy, while the slider took longer. 
The biggest challenge I ran into was getting the bar chart to update each step as the algorithm sorted the array. At first I was only able to get the final sorted graph to display, so I created a draw() function and used setInterval to control how quickly each graph was drawn compared to how quickly it was being sorted with the nested for loops in the bubblesort() function. 
Currently I am working on adding other sorting algorithms and combining the code as it is now with my first iteration, which included the random generate button and slider, but could not sort the data.
I hope to continue adding more and more sorting algorithms and eventually giving the user the choice to display multiple graphs at once and compare each sorting algorithm on them at the same time. 
