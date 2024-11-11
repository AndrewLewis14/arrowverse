document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  // Redirecionar para a página de resultados de pesquisa ao clicar no botão
  searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== "") {
          const searchURL = "https://seusite.com/pesquisa?termo=" + encodeURIComponent(searchTerm);
          window.location.href = searchURL;
      }
  });
});