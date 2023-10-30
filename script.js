//for (let i = 0; i < 10; i++) {
 //   if( i % 2== 0 ){
  //      console.log(i)
    //    content;
 //   };
 //   console.log(i)
 // }
  
  // Qu 1

  for (let i = 0; i <= 25; i++) {
   if(i % 2 == 0){
    console.log(i)
   }
    
  }

  //QU 2
  for (let i = 0; i <=10; i++) {
  
     let sq= i*i;
     console.log(sq)
   }

// QU 3
for (let i = 0; i <=20; i++){
    if(i % 2 ==0){
        

    }else{
        console.log(i) 
    }
  
}
console.log("qu 2");

let first = 0;
let second = 1;
let sum = first + second;

console.log(first);
console.log(second);

for (let i = 1; i <= 11; i++) {
  let k = first + second;
  sum += k; 
  console.log(k);
  first = second;
  second = k;
}

// QU 4

for (let i = 0; i <=10; i++) {
  
    let sq= i*i;
    console.log(sq)
  }

  //QU 5

  for (let i = 1; i <=3; i++) {
  for(let j = 1; j <=10; i++){
    let x= i * j ;
    console.log(i + " x " + j + " = " +x);
  }
  }
  