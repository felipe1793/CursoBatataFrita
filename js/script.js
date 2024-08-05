// Questão verdadeiro ou falso
const verdadeiro = document.querySelector("#verdadeiro")
const falso = document.querySelector("#falso")

// alternativasEscolhaUnica1
const exercicioEscolhaUnica1 = document.querySelector("#alternativasEscolhaUnica")
const alternativaA1 = document.querySelector("#ExercicioEscolhaUnica1")
const alternativaB1 = document.querySelector("#ExercicioEscolhaUnica2")
const alternativaC1 = document.querySelector("#ExercicioEscolhaUnica3")
const alternativaD1 = document.querySelector("#ExercicioEscolhaUnica4")
const resposta1 = document.querySelector("#reposta1")

// alternativasEscolhaUnica2
const exercicioEscolhaUnica2 = document.querySelector("#alternativasEscolhaUnica2")
const alternativaA2 = document.querySelector("#ExercicioEscolhaUnica2-1")
const alternativaB2 = document.querySelector("#ExercicioEscolhaUnica2-2")
const alternativaC2 = document.querySelector("#ExercicioEscolhaUnica2-3")
const alternativaD2 = document.querySelector("#ExercicioEscolhaUnica2-4")
const resposta2 = document.querySelector("#reposta2")

verdadeiro.addEventListener("click", () => {
    const questao = document.querySelector("#questao1")
    
    questao.innerHTML += `
    <div class="mt-20">
    <div class="card mt-20 shadow border-warning">
    <div class="card-header border-warning">
    <div class="card-title d-inline-flex align-baseline">
    <span class="ms-1">Parabéns!
    Resposta
    correta.</span>
    </div>
    </div>
    <div class="card-body   p-3">
    <p>
    Ainda se questiona a verdadeira origem da batata frita. A discussão principal está entre Bélgica, França e Espanha.
    </p>
    </div>
    </div>
    </div>
    `   
    document.querySelector("#falso").disabled = true
    document.querySelector("#verdadeiro").disabled = true
})

falso.addEventListener("click", () => {
    const questao = document.querySelector("#questao1")
    
    questao.innerHTML += `
    <div class="mt-20">
                            <div class="card mt-20 shadow border-warning">
                                <div class="card-header border-warning">
                                    <div class="card-title d-inline-flex align-baseline">
                                        <span class="ms-1">Resposta
                                            incorreta.</span>
                                    </div>
                                </div>
                                <div class="card-body p-3">
                                    <p>
                                        A afirmação é verdadeira. Ainda se questiona a verdadeira origem da batata frita. A discussão principal está entre Bélgica, França e Espanha.
                                    </p>
                                </div>
                            </div>
                        </div>
    `   
    document.querySelector("#falso").disabled = true
    document.querySelector("#verdadeiro").disabled = true
})

// Exercio de escolha unica 1

alternativaA1.addEventListener("click", () => {
    if(exercicioEscolhaUnica1.getAttribute("tentativa") === "1"){
        alternativaA1.disabled = true
        alternativaB1.disabled = true
        alternativaC1.disabled = true
        alternativaD1.disabled = true
        resposta1.innerHTML = `
        <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Resposta
                                                incorreta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            A alternativa correta é A) Sal a gosto.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    } else {
        exercicioEscolhaUnica1.setAttribute("tentativa", "1")
        alternativaA1.disabled = true
        resposta1.innerHTML = `
        <div >
                                <div class="card border border-warning  shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Tente outra vez! </span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3 text-black-75">
                                        <p>
                                            Lembre-se de que a batata fica mais gostosa quando é feita do seu jeito.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
})

alternativaB1.addEventListener("click", () => {
    if(exercicioEscolhaUnica1.getAttribute("tentativa") === "1"){
        alternativaA1.disabled = true
        alternativaB1.disabled = true
        alternativaC1.disabled = true
        alternativaD1.disabled = true
        resposta1.innerHTML = `
        <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Resposta
                                                incorreta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            A alternativa correta é A) Sal a gosto.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    } else {
        exercicioEscolhaUnica1.setAttribute("tentativa", "1")
        alternativaA1.disabled = true
        resposta1.innerHTML = `
        <div >
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Tente outra vez! </span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3 text-black-75">
                                        <p>
                                            Lembre-se de que a batata fica mais gostosa quando é feita do seu jeito.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
})

alternativaC1.addEventListener("click", () => {
    if(exercicioEscolhaUnica1.getAttribute("tentativa") === "1"){
        alternativaA1.disabled = true
        alternativaB1.disabled = true
        alternativaC1.disabled = true
        alternativaD1.disabled = true
        resposta1.innerHTML = `
        <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Resposta
                                                incorreta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            A alternativa correta é A) Sal a gosto.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    } else {
        exercicioEscolhaUnica1.setAttribute("tentativa", "1")
        alternativaA1.disabled = true
        resposta1.innerHTML = `
        <div >
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Tente outra vez! </span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3 text-black-75">
                                        <p>
                                            Lembre-se de que a batata fica mais gostosa quando é feita do seu jeito.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
})

alternativaD1.addEventListener("click", () => {
    alternativaA1.disabled = true
    alternativaB1.disabled = true
    alternativaC1.disabled = true
    alternativaD1.disabled = true
    resposta1.innerHTML = `
    <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline"><span class="ms-1">Parabéns!
                                                Resposta
                                                correta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            Trata-se do gosto pessoal.
                                        </p>
                                    </div>
                                </div>
                            </div>
    `

})

// Exercio de escolha unica 2

alternativaA2.addEventListener("click", () => { 
    if(exercicioEscolhaUnica2.getAttribute("tentativa") === "1"){
        alternativaA2.disabled = true
        alternativaB2.disabled = true
        alternativaC2.disabled = true
        alternativaD2.disabled = true
        resposta2.innerHTML = `
        <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Resposta
                                                incorreta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            A alternativa correta é C) 30 minutos.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    } else {
        exercicioEscolhaUnica2.setAttribute("tentativa", "1")
        alternativaA2.disabled = true
        resposta2.innerHTML = `
        <div >
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Tente outra vez! </span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3 text-black-75">
                                        <p>
                                            Lembre-se de ter um pouco mais de paciência.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
})

alternativaB2.addEventListener("click", () => { 
    if(exercicioEscolhaUnica2.getAttribute("tentativa") === "1"){
        alternativaA2.disabled = true
        alternativaB2.disabled = true
        alternativaC2.disabled = true
        alternativaD2.disabled = true
        resposta2.innerHTML = `
        <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Resposta
                                                incorreta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            A alternativa correta é C) 30 minutos.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    } else {
        exercicioEscolhaUnica2.setAttribute("tentativa", "1")
        alternativaA2.disabled = true
        resposta2.innerHTML = `
        <div >
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Tente outra vez! </span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3 text-black-75">
                                        <p>
                                            Lembre-se de ter um pouco mais de paciência.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
})

alternativaC2.addEventListener("click", () => {
    alternativaA2.disabled = true
    alternativaB2.disabled = true
    alternativaC2.disabled = true
    alternativaD2.disabled = true
    resposta2.innerHTML = `
    <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline"><span class="ms-1">Parabéns!
                                                Resposta
                                                correta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            São apenas 30 minutos !
                                        </p>
                                    </div>
                                </div>
                            </div>
    `

})

alternativaD2.addEventListener("click", () => { 
    if(exercicioEscolhaUnica2.getAttribute("tentativa") === "1"){
        alternativaA2.disabled = true
        alternativaB2.disabled = true
        alternativaC2.disabled = true
        alternativaD2.disabled = true
        resposta2.innerHTML = `
        <div>
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Resposta
                                                incorreta.</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">
                                        <p>
                                            A alternativa correta é C) 30 minutos.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    } else {
        exercicioEscolhaUnica2.setAttribute("tentativa", "1")
        alternativaA2.disabled = true
        resposta2.innerHTML = `
        <div >
                                <div class="card border border-warning shadow">
                                    <div class="card-header border-warning">
                                        <div class="card-title d-inline-flex align-baseline">
                                            <span class="ms-1">Tente outra vez! </span>
                                        </div>
                                    </div>
                                    <div class="card-body p-3 text-black-75">
                                        <p>
                                            Lembre-se de ter um pouco mais de paciência.
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
    }
})