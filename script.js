//ARRAY COM OS CONTEÚDOS
let musicas = [
    {titulo:'Born A Rockstar', artista:'NEFFEX', src:'audio/Born a Rockstar.mp3',
    img:'capas/NEEFEX.jpg'},
    {titulo:'A Fever', artista:'Devon Church', src:'audio/A Fever.mp3',
    img:'capas/devonChurch.webp'},
    {titulo:'Sink Whole Dream', artista:'The 129ers', src:'audio/Sunk Whole Dream.mp3',
    img:'capas/the 129ers.webp'}
]
//NOMEANDO AS VARIÁVEIS
let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica= document.querySelector('.fim')
let imagem = document.querySelector('.capa')
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

//DESENCADEANDO EVENTOS
renderizarMusica(indexMusica)
window.onload = duration;
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if(indexMusica<0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click', () =>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0
    }
    renderizarMusica(indexMusica);
});

//FUNÇÕES
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = 
    segundoParaMinutos(Math.floor(musica.duration));
    });
}
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%' ;
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent =  segundoParaMinutos(Math.floor(musica.currentTime))
}
function segundoParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' +campoSegundos;
}
function duration(){
    duracaoMusica.textContent = 
    segundoParaMinutos(Math.floor(musica.duration));
}

