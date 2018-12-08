

var form = document.marioForm;
var output = document.getElementById('result');
//var coinContainer = document.getElementById('coinContainer');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var goombaInput = form.goombaInput.value;
    var bobInput = form.bomInput.value;
    var cheepInput = form.cheepInput.value;
    var result = (parseInt(goombaInput*5)) + (parseInt(bobInput*7)) + (parseInt(cheepInput*11));
    output.innerHTML = result;
    showImage();
});

function showImage() {
    document.getElementById('coinGifs1').style.visibility = 'visible'
    document.getElementById('coinGifs2').style.visibility = 'visible'
    document.getElementById('coinGifs3').style.visibility = 'visible'
    document.getElementById('coinGifs4').style.visibility = 'visible'
    document.getElementById('coinGifs5').style.visibility = 'visible'
    document.getElementById('coinGifs6').style.visibility = 'visible'
    document.getElementById('coinGifs7').style.visibility = 'visible'
    document.getElementById('coinGifs8').style.visibility = 'visible'
    document.getElementById('coinGifs9').style.visibility = 'visible'
    document.getElementById('coinGifs10').style.visibility = 'visible'
    document.getElementById('coinGifs11').style.visibility = 'visible'
    document.getElementById('coinGifs12').style.visibility = 'visible'
    document.getElementById('coinGifs13').style.visibility = 'visible'
}
