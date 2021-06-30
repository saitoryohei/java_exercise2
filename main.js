document.addEventListener('click',function(e){
 
  if (event.target.matches('.ac')) {
    document.getElementById('display2').innerHTML ='';
    return;
  }
 
 
  if (event.target.matches('.eq')) {
    let calcResult = eval(document.getElementById('display2').innerHTML);
    
    document.getElementById('display2').innerHTML=Math.round(calcResult*100)/100;
    return;
  }
  
  if (!event.target.matches('.number')) return;
  let clickNum = event.target.innerHTML;
  let beforeClickNum = document.getElementById('display2').innerHTML;
  document.getElementById('display2').innerHTML= beforeClickNum+clickNum;
  
 
})