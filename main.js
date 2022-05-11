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
    res1.style.display = 'block'

    res1.innerHTML = 'A média do aluno é ' + r

    if (s >= 7) {
        navprincipal.style.display = 'none'
        res.style.display = 'block'
        res.innerHTML = 'O aluno foi <strong>APROVADO</strong>!'
    }
    else {
        navprincipal.style.display = 'none'
        res.style.display = 'block'
        res.innerHTML = 'O aluno foi <strong>REPROVADO</strong>!'
    }
}
