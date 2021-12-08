
const list = [5, 4, 3, 2, 1];


function looper (list, idx) {
  if(list.length - idx <= 1) {
    return;
    
  }
  
  console.log(list [idx]);
  looper (list, idx+1);
  
}

looper (list,0);  





