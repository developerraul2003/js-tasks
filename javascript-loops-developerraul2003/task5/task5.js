// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// ```
// let str2 = "don’t know why";
// // Example output: 
// // “yes” 
let str2 = "don't know why";
for (let i=0; i<str2.length;i++){
    
    if (str2[i]=="y"){
        console.log("yes");
         break;
    }
    else {
        console.log("no");
       
    }
    
}