const claro = document.querySelector("#claro")
const escuro = document.querySelector("#escuro")
const corpo = document.querySelector(".tema1")


claro.addEventListener("click", () =>{
    if(!claro.hasAttribute("esconde")){
        claro.classList.add("esconde")
        escuro.classList.remove("esconde")
        corpo.classList.replace("tema1", "tema2")
    }
})

escuro.addEventListener("click", () =>{
    escuro.classList.add("esconde")
    claro.classList.remove("esconde")
    corpo.classList.replace("tema2", "tema1")
})
