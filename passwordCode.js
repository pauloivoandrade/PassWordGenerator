function gerarSenha() {
    const campoTexto = document.getElementById("campoTexto");
    const senhaGerada = document.getElementById("senhaGerada");

const size = parseInt(campoTexto.value);
const letras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H","h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];    
let senha = [];

    for (let index = 0; index < size; index += 1){
    const numBase = Math.floor(Math.random() * letras.length) 
    senha.push(letras[numBase]);
    }
     
senhaGerada.textContent = senha.join(' ');
}