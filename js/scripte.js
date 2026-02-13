const links = document.querySelectorAll(".nav-link");
const content = document.getElementById("content");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");

        const page = this.dataset.page;

        if(page === "accueil"){
            content.innerHTML = "<h2>Bienvenue à Kabada</h2>";
        }

        if(page === "histoire"){
            content.innerHTML = "<h2>Histoire de Kabada</h2>";
        }

        if(page === "culture"){
            content.innerHTML = "<h2>Culture et Traditions</h2>";
        }
    });
});
