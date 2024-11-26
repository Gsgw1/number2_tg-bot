const form = document.querySelector('.registration-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Останавливаем стандартное поведение формы

    const data = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    const response = await fetch('https://gsgw1.github.io/form.tg-bot/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
    } else {
        alert(result.error);
    }
