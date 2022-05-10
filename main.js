function calcularmedia() {
    var m1 = window.document.getElementById('m1')
    var m2 = window.document.getElementById('m2')
    var m3 = window.document.getElementById('m3')

    var n1 = Number(m1.value)
    var n2 = Number(m2.value)
    var n3 = Number(m3.value)

    var s = (n1 + n2 + n3) / 3

    var r = s .toFixed (1)

    navprincipal.style.display = 'none'
    res.style.display = 'block'
    res.innerHTML = 'A média do aluno é ' + r
}


