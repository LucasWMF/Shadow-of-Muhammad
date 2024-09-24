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

// function toggleNavbar() {
//     const navbarList = document.querySelector('.navbar-list');
//     navbarList.classList.toggle('show');
// }

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.getElementsByClassName('navbar-toggler');

    if (toggleButtons.length > 0) {
        // Adiciona o evento apenas se o botão existir
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].addEventListener('click', function () {
                this.classList.toggle('active');

                if (this.classList.contains('active')) {
                    this.innerHTML = '<i class="fa-solid fa-times"></i>';
                    console.log('B')
                } else {
                    this.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    console.log('A')
                }
            });
        }
    } else {
        console.error("Nenhum elemento encontrado com a classe 'navbarToggle'");
    }
});

document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function() {
        const dropdown = this.parentNode; 
        dropdown.classList.toggle('show'); 
    });
});