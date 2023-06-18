const key = '784f6f7e'
const frmPesquisa = document.querySelector('form')

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

const pesquisa = ev.target.pesquisa.value;

if(pesquisa == ""){
    alert('Por favora, preencha o campo.');
    return;
}

fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${key}&lang=pt_br`)
.then(result => result.json()) 
.then(json => carregaLista(json));
}
const carregaLista = (json) => {
    const lista = document.querySelector('.lista')
    lista.innerHTML = ""

    if(json.Response == 'False'){
        alert('Filme não Encontrado')
        return
    }

    json.Search.forEach(element => {
        let item = document.createElement("div")
        item.classList.add("item")

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`

        lista.appendChild(item)
    });
}
