 function calculateY(a,b, c) {
  if (b==0) {  
   return "Error b cannot be 0 " ;
  }
const y = (a* c) / b + c;
return y;

  }







  
function fillArray() {
    const arr = [];
    for (let i = 15; i <= 75; i++) {
    if (i % 3 === 0) {
    arr.push(i)
    }
    }
return arr;
}