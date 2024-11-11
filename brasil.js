const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const predefinedResponses = {
  'Como está o tempo hoje?': 'Desculpe, não tenho acesso a informações de tempo.',
  'Qual é o seu nome?': 'Eu sou um chatbot GPT-3.',
  'O que você pode fazer?': 'Posso responder a perguntas e conversar com você.'
};

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() !== '') {
    addMessage('user', userMessage);
    userInput.value = '';

    const intention = getIntent(userMessage);

    if (predefinedResponses.hasOwnProperty(userMessage)) {
      const botMessage = predefinedResponses[userMessage];
      addMessage('bot', botMessage);
    } else {
      switch (intention) {
        case 'clima':
          fetchWeather(userMessage);
          break;
        case 'cumprimento':
          const greetings = ['Olá!', 'Oi!', 'Olá, como posso ajudar?'];
          const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
          addMessage('bot', randomGreeting);
          break;
        default:
          fetchGptResponse(userMessage);
          break;
      }
    }
  }
}

function addMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = message;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getIntent(message) {
  // Use a biblioteca compromise para identificar a intenção da pergunta
  // (certifique-se de configurar a biblioteca corretamente no ambiente)
  const nlp = compromise(message);
  const intention = nlp.intentions().out('array')[0] || '';
  return intention.toLowerCase();
}

function fetchWeather(location) {
  // Implemente uma lógica para buscar informações meteorológicas com base na localização
  // e forneça a resposta ao usuário
  const response = `Desculpe, não tenho acesso a informações climáticas para ${location}.`;
  addMessage('bot', response);
}

function fetchGptResponse(userMessage) {
  fetch('/api/gpt3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userMessage }),
  })
    .then((response) => response.json())
    .then((data) => {
      const botMessage = data.message;
      addMessage('bot', botMessage);
    })
    .catch((error) => {
      console.error(error);
      addMessage('bot', 'Desculpe, ocorreu um erro.');
    });
}