const clbt = document.querySelectorAll(".cl-bt")
const result = document.querySelector(".result")


for (let i = 0; i < clbt.length; i++) {
    clbt[i].addEventListener ("click", () => {
          
       if (clbt[i].textContent === "=")  {
        result.textContent = (eval(result.textContent)) ;
        return; 
       }
       result.textContent += clbt[i].textContent ; 
       if (clbt[i].textContent === "C")  {
         result.textContent = null
       }
    })
     

      
    
}


 