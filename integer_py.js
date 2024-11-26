let submit = document.getElementById('sobmit'); 

submit.addEventListener('click', async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    // Очищаем сообщения об ошибках
    document.getElementById('error').innerText = '';

    // Получаем значения полей формы
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    // Валидация формы
    if (username.length < 5) {
        document.getElementById('error').innerText = 'Ошибка в имени (не менее 5 символов)';
        return;
    }

    if (password.length < 5) {
        document.getElementById('error').innerText = 'Ошибка в пароле (не менее 5 символов)';
        return;
    }

    // Отправка данных на сервер
    try {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message); // Если вход успешен
            // Переход на основную страницу
            document.getElementById('form').style.display = 'none';
            document.getElementById('main_car').style.display = 'flex';
        } else {
            document.getElementById('error').innerText = result.error; // Показать ошибку
        }
    } catch (error) {
        console.error('Ошибка подключения:', error);
    }
});
