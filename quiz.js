const form = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-button');
const results = document.getElementById('results');
const scoreDisplay = document.getElementById('score');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedValue = formData.get(`q${i}`);
        if (selectedValue === 'a') {
            score++;
        }
    }

    scoreDisplay.textContent = score;
    results.classList.remove('hidden');
});

submitButton.addEventListener('click', () => {
    form.submit();
});