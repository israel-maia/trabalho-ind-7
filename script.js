function inverter() {
var nome = document.getElementById('name').value;
var nomeInvertido = '';
for (var i = nome.length - 1; i >= 0; i--) {
    nomeInvertido += nome [i];
}
document.getElementById('resultado').innerHTML = nomeInvertido;

}