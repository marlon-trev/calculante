let res = document.querySelector('#result')
function insert(num){
    let numero = res.innerHTML
    res.innerHTML = (`${numero}${num}`)
    r = (`${numero}${num}`)
    console.log(r)
}


function resultado(r){
    let rest = document.getElementById('result').innerHTML
    r = rest
    res.innerHTML = eval(r)
}

function limpar(){
    res.innerHTML=''
}


function apagar(){
    let rest = document.getElementById('result').innerHTML
    res.innerHTML = rest.substring(0, rest.length -1)
}

/*
function toLimit(){
    resultado()
    (res = "")
    string.value = string.value.substring(0,19);
}
*/