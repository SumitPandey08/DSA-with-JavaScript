function extractElements(arrays) {
    let extractedElements = [];

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 1) {
            extractedElements.push(arrays[i][1]);
        }
    }

     let frequencyMap = {};
     let minFrequency = Infinity; 
     let leastFrequent = null;
      let frequencyValues = new Set(); 
   
     for (let i = 0; i < extractedElements.length; i++) { let element = extractedElements[i]; if (frequencyMap[element] === undefined) { frequencyMap[element] = 1; } else { frequencyMap[element]++; } } 

      for (let key in frequencyMap) 
        { let frequency = frequencyMap[key];
             frequencyValues.add(frequency);
              if (frequency < minFrequency) { 
                minFrequency = frequency; leastFrequent = key; 
            } }
     
     let minFreqCount = 0;
      for (let value of frequencyValues) { 
        if (value === minFrequency) { minFreqCount++; 

        } }
   
    return minFreqCount > 1 ? -1 : leastFrequent; }

    console.log(extractElements([[1 , 2 ] , [2 , 3] , [ 3 , 4] , [4 , 2] [ 3 , 4] , [5 , 4]]))
