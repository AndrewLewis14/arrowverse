// Este é um exemplo simples de JavaScript para adicionar interatividade.

// Obtém todos os cards de destaque, séries e filmes
const destaqueCards = document.querySelectorAll('.destaque-card');
const serieCards = document.querySelectorAll('.serie-card');
const filmeCards = document.querySelectorAll('.filme-card');

// Adiciona um evento de clique a cada card
function adicionarEventoDeClique(cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`Você clicou em "${card.querySelector('h3').textContent}".`);
        });
    });
}

// Adicione eventos de clique aos diferentes tipos de cards
adicionarEventoDeClique(destaqueCards);
adicionarEventoDeClique(serieCards);
adicionarEventoDeClique(filmeCards);