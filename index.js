function calcular() {
    var n1 = document.getElementById("nota1").value
    var n2 = document.getElementById("nota2").value
    var n3 = document.getElementById("nota3").value

    var media = (Number(n1) + Number(n2) + Number(n3)) / 3

    alert(`A media dos valores é: ${media}`)

    console.log(`A media dos valores é: ${media}`)
}