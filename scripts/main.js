document.addEventListener("DOMContentLoaded", function() {
    const sectionConteudo = document.querySelector(".apresentacao__conteudo");
    
    // Remove a classe 'aparecer' para reiniciar a animação no carregamento
    sectionConteudo.classList.remove("aparecer");

    // Força a reativação da animação usando um pequeno atraso
    setTimeout(() => {
        sectionConteudo.classList.add("aparecer");
    }, 20); // Atraso de 20ms para garantir que a classe seja reativada
});
