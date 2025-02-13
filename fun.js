//function add(a,...b){
///console.log(a,b)
//}
//add(9,2,5,6,7,3,6,2,54,9,18)


//var b=22
//{
//var a=2  
//console.log(a)
//}
//console.log(a)

//loops

// for(let i=0;i<9;i++){
//     console.log(i)
// }

// let j=0
// while(j<8){
//     console.log(j)
//     j++
// }




// for (let i = 1; i <= 5; i++) {
//     let row = ''; 
//     for (let j = 1; j <= 5; j++) {
//       row += '*'; 
//     }
//     console.log(row); 
//   }
  

// for (let i = 1; i <= 5; i++) {
//     let row = ''; 
//     for (let j = 1; j <= i; j++) {
//       row += '*'; 
//     }
//     console.log(row); 
//   }


let rows = 5;
for (let i =1; i<=rows; i++){

    let row=' ';

    for(let j = 1; j <=rows -i; j++){
        row +=' ';

    }
    for(let j = 1;j <= (2 * i -1); j++){
        row += '*';
    }
    console.log(row);
}
  



// let rows = 5; // Number of rows for the triangle

// for (let i = 1; i <= rows; i++) {
//   let row = '';

//   // Add leading spaces for centering the stars
//   for (let j = 1; j <= rows - i; j++) {
//     row += ' '; // Add spaces
//   }

//   // Add stars for the current row
//   for (let j = 1; j <= (2 * i - 1); j++) {
//     row += '*'; // Add stars
//   }

//   console.log(row); // Print the row after it's built
// }


  