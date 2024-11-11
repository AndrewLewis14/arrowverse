const estoque = [
    { nome: "BRAHMA", quantidade: 100,Image:"https://logos-download.com/wp-content/uploads/2020/07/Brahma_Chopp_Logo.png"},
  { nome: "AMSTEL", quantidade: 315 },
    { nome: "HEINEKEN", quantidade: 20 },
    { nome: "BUDWEISER", quantidade: 10 },
    { nome: "SKOL PM", quantidade: 20 },
    { nome: "ITAIPAVA", quantidade: 100 },
    { nome: "SCHIN", quantidade: 150 },
    { nome: "PURO MALTE", quantidade: 100 },
    { nome: "SPARTEN", quantidade: 25 },
    { nome: "BRAHMA DM", quantidade: 15 },
    { nome: "STELLA ", quantidade: 10 },
    { nome: "IMPERIO", quantidade: 25},
    
];


// Função para exibir a lista de produtos
function exibirProdutos() {
    const listaProdutos = document.getElementById("listaProdutos");
    listaProdutos.innerHTML = "";

    estoque.forEach((produto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${produto.nome} - Quantidade: ${produto.quantidade}</span>
            <button onclick="removerProduto(${index})">Remover</button>
        `;
        listaProdutos.appendChild(li);
    });
}

// Função para remover um produto do estoque
function removerProduto(index) {
    estoque.splice(index, 1);
    exibirProdutos();
}

// Chama a função para exibir os produtos quando a página carrega
exibirProdutos();


document.addEventListener('DOMContentLoaded', function() {
    const emailList = document.getElementById('email-list');
    const emailContent = document.querySelector('.email-content');

    // Dummy email data
    const emails = [        { subject: 'Olá', content: 'entre em contanto pel E-mail.' },

        { subject: 'Quem nós somos', content: 'andargg7@gamil.com' },
        { subject: 'Novidades', content: 'Novidades em breves.' },
    ];

    // Function to display email content when an email is clicked
    function displayEmail(index) {
        const email = emails[index];
        emailContent.querySelector('h2').textContent = email.subject;
        emailContent.querySelector('p').textContent = email.content;
    }

    // Populate the email list
    emails.forEach((email, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = email.subject;
        listItem.addEventListener('click', () => {
            displayEmail(index);
        });
        emailList.appendChild(listItem);
    });

    // Display the first email by default
    displayEmail(0);
});