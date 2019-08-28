var forca = []
var agilidade = []
var inteligencia = []
//obs: o valor dos operadores for são delimitados de acordo com a quantidade maxima de herois por classe
function heroisIcones() {
    for (i = 0; i < 20; i++) {
        document.getElementById('heroisColum1-1').innerHTML += (forca[i] = `<div class="ml-3" ><img class="border border-danger" src='_imagens/dota2/forca/1-1/f${i}.jpg'</div>`)
        document.getElementById('heroisColum2-1').innerHTML += (agilidade[i] = `<div class="ml-3"><img class="border border-success" src="_imagens/dota2/agilidade/2-1/f${i}.jpg"></div>`)

        document.getElementById('heroisColum3-1').innerHTML += (inteligencia[i] = `<div class="ml-3"><img class="border border-primary" src="_imagens/dota2/inteligencia/3-1/f${i}.jpg"></div>`)
        document.getElementById('heroisColum3-2').innerHTML += (inteligencia[i] = `<div class="ml-3"><img class="border border-primary" src="_imagens/dota2/inteligencia/3-2/f${i}.jpg"></div>`) // a segunda linha da casa inteligencia também tem 20 herois

    }
    for (i = 0; i < 15; i++) {
        document.getElementById('heroisColum1-2').innerHTML += (forca[i] = `<div class="ml-3" ><img class="border border-danger" src='_imagens/dota2/forca/1-2/f${i}.jpg'</div>`)   // for para quantidade de herois na segunda linha da casa força 
    }

    for (i = 0; i < 14; i++) {
        document.getElementById('heroisColum2-2').innerHTML += (agilidade[i] = `<div class="ml-3"><img class="border border-success" src="_imagens/dota2/agilidade/2-2/f${i}.jpg"></div>`)     // for para quantidade de herois na segunda linha da casa agilidade
    }
}