document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".objeto").forEach(plato =>{
  
            plato.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?plato.classList.remove("filtro")
              :plato.classList.add("filtro")
        })
  
    }
  
  
  })