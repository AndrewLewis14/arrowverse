function submitPoll() {
    const form = document.getElementById("pollForm");
    const resultElement = document.getElementById("pollResult");
  
    const selectedSport = form.querySelector('input[name="sport"]:checked');
}
    if (selectedSport) {
      const sportValue = selectedSport.value;
  
      // Simulando o armazenamento dos votos (substitua por sua lógica de servidor se necessário)
      const votes = JSON.parse(localStorage.getItem("votes")) || {};
      votes[sportValue] = (votes[sportValue] || 0) + 1;
      localStorage.setItem("votes", JSON.stringify(votes));
  
      // Calculando a porcentagem de votos para cada opção
      const totalVotes = Object.values(votes).reduce((total, count) => total + count, 0);
      const percentages = Object.entries(votes).map(([sport, count]) => {
        return `${sport}: ${(count / totalVotes * 100).toFixed(2)}%`;
      });
    }
