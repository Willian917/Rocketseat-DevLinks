function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')){
  //html.classList.remove('light')
  //}else{
  //html.classList.add('light')
  //}
  html.classList.toggle("light")

  /*const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/will-light.png")
  } else {
    img.setAttribute("src", "./assets/will.png")
  }


  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto com fundo claro")
  } else {
    img.setAttribute("alt", "Foto com fundo escuro")
  }*/
}