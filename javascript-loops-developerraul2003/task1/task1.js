let sum=0;
let sum2=0;
let total;
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];  // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
for (let i=0;i<arr_1.length;i++){
    sum+=arr_1[i];
    
}
for (let i=0;i<arr_2.length;i++){
    sum2+=arr_2[i];
    
}
total=sum+sum2;
console.log (total);