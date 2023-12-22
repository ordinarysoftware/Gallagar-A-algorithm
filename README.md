# Gallagar A algorithm

## Overview






## Visualization Software

- Utilizes vis.js for dynamic graph representation.
- Real-time updates of Tanner graph during decoding process.

## Implementation Steps
The integration of the Gallager A into the existing framework of Low-Density Parity-Check (LDPC) code makes it easy to visualize and understand the hard decision bit flipping. For the visualization same method and tools of bit-flipping visualization were applied.

The implementation is composed of four files main.js, GallagerA.js, scale.js, and tanner-graph.js The main.js contains input values, and the function calls on the button click to submit and view the graph. The tanner-graph.js contains the Tanner Graph class and it only acts as an abstraction for the algorithms implemented on GallagerA.js also vis.js visualization functions renderer and prototypes. A Tanner graph is represented by the pre-defined parity check matrix. A Tanner graph can create intermediate graphs from itself for the given node, which is a clone of the original Tanner graph. 

GallagerA.js contains the actual Gallager A and other supporting functions such as sum ( mod 2 ) calculation, check node, and variable node update functions. Its GLA.create method should be called with the symbol node values array. The return value is a Tanner Graph object representing the final graph after the successful execution of an algorithm. There is also the GLA.hook method which registers a callback function to be hooked into the edge addition step to see values change oversteps. 

GallagerA.js also allows hooking into the edge creation step to inspect intermediate states while the algorithm is running. You can pass a callback function to the GLA.hook which will be called each time an edge has just been added. The main.js with hook callback on GLA.js will clone the current tanner graph object and push it to the tanner graph object array to view intermediate steps later on.






## Usage
Once you run an application on the browser and index.html file that computes and renders the Tanner graph created by GLA for parameters with a predefined parity check matrix with ten variable nodes and five check nodes and filled 0110101011 variable values.


## References

