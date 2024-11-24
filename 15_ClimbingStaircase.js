function climbingStaircase(n) { let noOfWays = [1, 2]; // Number of ways to climb 1 step and 2 steps respectively 
    for (let i = 2; i <= n; i++) {

         noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]; // Dynamic programming formula 
         
        } 
        return noOfWays[n - 1]; // Return the result for n steps
         }
          console.log(climbingStaircase(1)); // Expected output:1
          console.log(climbingStaircase(2)); // Expected output: 2 
          console.log(climbingStaircase(3)); // Expected output: 3 
          console.log(climbingStaircase(4)); // Expected output: 5
           console.log(climbingStaircase(5)); // Expected output: 8

//Big-O = O(n)
