let butSalvar = document.getElementById("salvar")
let butLimpar = document.getElementById("limpar")
let butEdit = document.getElementById("edit")
let bDados = document.getElementById('destino')

function limpar(){
    dados = document.getElementsByClassName("formulario")
    console.log(dados)
    for(i=0; i<dados.length-1; i++){
        dados[i].value = " "
    }
}

butSalvar.onclick = function submit(){
    let data = document.getElementsByClassName("formulario")
    let destino = document.getElementById("destino")
    let newRow = document.createElement("tr")
    let lastId = geraId()
    newRow.id = `row${lastId}`
        
    destino.appendChild(newRow)

    let newData = document.createElement("td")
    newData.id = lastId
    newData.innerHTML = lastId

    newRow.addEventListener("click", selectRow)
    newRow.appendChild(newData)

    for(i=0; i<data.length; i++){
        if(data[i].value === ""){data.value = " "}
        let nextColumn = document.createElement("td")
        nextColumn.innerHTML = data[i].value
        newRow.appendChild(nextColumn)
    }
        
    newRow.children[3].innerHTML = brDate()
    limpar()
}

function geraId(){
    let rows = document.querySelectorAll("tr")
    let id = rows.length
    return id
}

function brDate(){
    let date = document.getElementsByClassName("formulario")[2].value
    let year = date.slice(0, 4)
    let month = date.slice(5, 7)
    let day = date.slice(8, 10)
    let brazilianDate = `${day}/${month}/${year}`
    if(brazilianDate==="//"){brazilianDate = " "}
        
    return brazilianDate
}

function invertDate(){
    let row = document.getElementsByClassName("selected")[0].childNodes
    let tdDate = row[3].textContent
    let day = tdDate.slice(0, 2)
    let month = tdDate.slice(3, 5)
    let year = tdDate.slice(6, 10)
    let newDate = `${year}-${month}-${day}`
    return newDate
}


function selectRow(e){
    let classCheck = document.getElementsByClassName("selected")
    
    if(classCheck.length != 0){
        classCheck[0].classList.remove("selected")
    } else{
        if(this.classList == "selected"){
            this.classList.remove("selected")
        } else{
            this.className = "selected"
        }
    }
}

butEdit.onclick = function edit(){
    let row = document.getElementsByClassName("selected")[0].childNodes
    let data = document.getElementsByClassName("formulario")
    let newDate = invertDate()

    for(let i=0; i<data.length; i++){
        if(i==2){ data[i].value = newDate} else {
        data[i].value = row[i+1].textContent}
    }
    console.log(row[1].textContent)
    document.getElementsByClassName("selected")[0].remove()
}