// Print the EVEN numbers from 10 to -20

// ```
// input: 10 and -20;
// output: 10,8,6,4,2,0,-2,-4,-6,-8..
// ```
let a=10;
let b=-20;
for (let i=a;i>=b;i--){
    if (i%2==0){
        console.log(i);
    }
}