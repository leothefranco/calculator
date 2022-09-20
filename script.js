function calcular(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let res = document.getElementById('res')
    let ope = document.getElementById('operador').value
    
    if (ope == '+') {
        res.innerHTML = `Resultado: ${n1 + n2}`
    } else if (ope == '-') {
        res.innerHTML = `Resultado: ${n1 - n2}`
    } else if (ope == '*') {
        res.innerHTML = `Resultado: ${n1 * n2}`
    } else {
        res.innerHTML = `Resultado: ${n1 / n2}`
    }
}

