// keyup: tipo pulsar tecla
document.addEventListener("keyup", _search=>{
// id del buscador
// matches comprueba si el target sería seleccionable por el CSS especificado en la cadena; en caso contrario, retorna false.
  if (_search.target.matches("#buscador")){

      if (_search.key ==="Escape")_search.target.value = ""
// querySelectorAll("ubicacion de donde va a buscar")
      document.querySelectorAll(".articulo").forEach(result =>{

        result.textContent.toLowerCase().includes(_search.target.value.toLowerCase())
        // en caso de que no se encuentre
            ?result.classList.remove("filtro")
        // en caso de que se encuentre
            :result.classList.add("filtro")
      })
  }
})