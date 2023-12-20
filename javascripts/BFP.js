var BFP = (function () {
  

  var checkNodeNumber = 5;
  var symbolNodeNumber = 10; 
  var maxIterations= 4; 
  
  
  var tannerGraph;
  var hook;

  
  var calculateValues = function () {
    // create an initial parity check matrix whose all elements are 0
    // Given rows
    const rows = [
      "1111011000",
      "0011111100",
      "0101010111",
      "1010100111",
      "1100101011",
    ];

   

    // Create a 5 by 10 matrix with initial values
    var parityCheckMatrix = Array(checkNodeNumber)
      .fill(null)
      .map((_) => Array(symbolNodeNumber).fill(0));

    // Populate the matrix with the given rows
    rows.forEach((row, rowIndex) => {
      row.split("").forEach((value, colIndex) => {
        parityCheckMatrix[rowIndex][colIndex] = parseInt(value, 10);
      });
    });
     
    
    
     // Assuming there is a SymbolNode class with a method setValue(value)
     
     

     for (let iteration = 0; iteration < maxIterations; iteration++) {
      const updatedSymbolValues = [...symbolNodeValues];
      updatecheckNodeValues=[];
      
      // Iterate over each check node
      for (let checkNode = 0; checkNode < checkNodeNumber; checkNode++) {
          // Find symbol nodes connected to the current check node
          const connectedSymbolNodes = [];
          for (let symbolNode = 0; symbolNode < symbolNodeNumber; symbolNode++) {
              if (parityCheckMatrix[checkNode][symbolNode] === 1) {
                  connectedSymbolNodes.push(symbolNode);
              }
          }
          
          

          // if(checkNode===0){
          //   tannerGraph = new TannerGraph(parityCheckMatrix);
          //   hook && hook(tannerGraph);
          // }
          
          console.log(connectedSymbolNodes);
          console.log(updatedSymbolValues[checkNode], checkNode);

          // Calculate the sum (mod 2) of the adjacent symbol node values
          const sumMod2 = connectedSymbolNodes.reduce(
              (sum, symbolNode) => (sum + symbolNodeValues[symbolNode]) % 2,
              0
          );


          updatecheckNodeValues.push(sumMod2);
          
         
      }
      
      for (let symbolNode = 0; symbolNode < symbolNodeNumber; symbolNode++) {
        const connectedCheckNodes = [];
        for (let checkNode = 0; checkNode < checkNodeNumber; checkNode++) {
          if (parityCheckMatrix[checkNode][symbolNode] === 1) {
            connectedCheckNodes.push(checkNode);
          }
      }
      console.log(connectedCheckNodes);
      const sumMod3=areValuesEqualAtIndexes(updatecheckNodeValues,connectedCheckNodes);
      
      if(sumMod3===true){
        symbolNodeValues[symbolNode]=updatedSymbolValues[connectedCheckNodes[0]]

                
      }
      
      }
      

      
      
      
      tannerGraph = new TannerGraph(parityCheckMatrix);
      hook && hook(tannerGraph);
     
      checkNodeValue=updatecheckNodeValues;
      var stopiteration=allZeros(checkNodeValue);
      if(stopiteration===true){
        maxIterations=iteration+2;
        
      } 
      
      console.log(`Iteratio:`);
    console.log("Check Node Values:", checkNodeValue);
    console.log("Symbol Node Values:", symbolNodeValues);
    console.log("-----------------------------");
    }
    
    
    
  };

  return {
    // creates the tanner-graph for the given parameters
    create: function (options) {
      
      symbolNodeValues  = options.symbolNodeValues;
      checkNodeValue= options.checkNodeValue;
      

      calculateValues();

      return tannerGraph;
    },

    // this function registers a callback to be called

    hook: function (callback) {
      hook = callback;
    },
  };
})();

function areValuesEqualAtIndexes(array, indexes) {
  const valuesToCheck = indexes.map(index => array[index]);
  return valuesToCheck.every((value, index, arr) => value === arr[0]);
}
function allZeros(array) {
  // Using the every() method to check if all elements are zero
  return array.every(function(element) {
      return element === 0;
  });
}
