// Mudar o Título quando fora da página

let docTitle = document.title
// let docFaviIcon = document.querySelector("link[rel*='icon']");

window.addEventListener("blur", () => {
    document.title = "Volte a Aprender!";
    // docFaviIcon.href = '/image/dowload_1'

});

window.addEventListener("focus", () => {
    document.title = docTitle
    // docFaviIcon.href = docFaviIcon;
})

// Colocar o conteúdo das seções
const 
