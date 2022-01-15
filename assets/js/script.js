const listaVideos = [
    {
        id: 0,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./assets/img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./assets/img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./assets/img/thumb1.webp"
    },
    {
        id: 3,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./assets/img/thumb2.webp"
    }
];

const containerVideosDestaque = document.querySelector('.secaoVideosDestaque__lista');
const containerVideosFila = document.querySelector('.secaoAdicionarAFila__lista');
const containerTodosVideos = document.querySelector('.secaoTodosVideos__lista');

function montarLayout(container) {
    listaVideos.forEach(function(video) {
        construirLayout(video, container)
    });
}
montarLayout(containerVideosDestaque);

montarLayout(containerTodosVideos);

function construirLayout(video, container) {
    const li = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const button = document.createElement('button');

    img.src = video.thumbnail;
    img.alt = video.titulo;

    h3.innerText = video.titulo;
    span.innerText = `${video.visualizacoes} visualizações`;
    p.innerText = video.descricao;

    button.innerText = 'Adicionar a fila';
    button.classList.add('buttonAdicionarAFila');
    button.addEventListener('click', adicionarAFila)

    figure.appendChild(img);

    div.appendChild(h3);
    div.appendChild(span);
    div.appendChild(p);
    div.appendChild(button);

    li.dataset.id = video.id;
    li.appendChild(figure);
    li.appendChild(div);
    
    container.appendChild(li);
}

function adicionarAFila(event) {
    const videoClicado = event.target.closest('li');
    const cloneVideoClicado = videoClicado.cloneNode(true);

    containerVideosFila.appendChild(cloneVideoClicado);
}

containerVideosFila.addEventListener('click', removerDaFila);

function removerDaFila(event) {
    const elementoClicado = event.target;

    if(elementoClicado.tagName !== 'LI'){
        const videoClicado = elementoClicado.closest('li');
        videoClicado.remove();
    } else {
        elementoClicado.remove();
    }
}