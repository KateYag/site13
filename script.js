window.onload = () => {
    const firstLoader = document.querySelector('.first-loader');
    const secondLoader = document.querySelector('.second-loader');
    const content = document.querySelector('.content'); // Контейнер с основным контентом

    // Показ первого прелоадера
    firstLoader.style.display = 'flex';

    // После задержки показываем второй прелоадер
    setTimeout(() => {
        firstLoader.style.display = 'none';
        secondLoader.style.display = 'flex';
    }, 3000); // Показывать 3 секунды первый

    // После задержки скрываем оба прелоадера и показываем контент
    setTimeout(() => {
        secondLoader.style.display = 'none';
        content.classList.add('visible'); // Показываем контент
    }, 6000); // Показывать второй 3 секунды
};





document.querySelector(".wedding-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Останавливаем стандартную отправку формы

    // 🔹 ЗАМЕНИТЬ НА СВОИ ДАННЫЕ!
    const TOKEN = "7598391331:AAEhteo0bVsAe5-8XVbvQxk7AX-inJNdDxw";
    const CHAT_ID = "636373910";
    const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const fieldNames = {
        attendance: "Присутствие",
        fullname: "Имя и фамилия",
        drink: "Предпочтение по напиткам",
        wishes: "Пожелания",
    };
    // Собираем данные из формы
    const formData = new FormData(this);
    let message = "<b>Новая заявка на свадьбу 🎉</b>\n\n";
    let drinks = [];

    for (let [key, value] of formData.entries()) {
        if (key === "drink") {
            drinks.push(value); // Добавляем в массив, не отправляем сразу
        } else {
            let fieldName = fieldNames[key] || key;
            message += `<b>${fieldName}:</b> ${value}\n`;
        }
    }
    if (drinks.length > 0) {
        message += `<b>Предпочтение по напиткам:</b> ${drinks.join(", ")}\n`;
    }
    // Отправляем запрос в Telegram
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        }),
    });

    if (response.ok) {
        alert("Форма успешно отправлена!");
        this.reset(); // Очистка формы
    } else {
        alert("Ошибка при отправке. Попробуйте еще раз.");
    }
});

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Событие началось!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Устанавливаем дату окончания
const targetDate = new Date("April 25, 2025 12:00:00").getTime();
startCountdown(targetDate);



document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hid");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector(".parallax-bg");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        parallax.style.transform = `scale(1.1) translateY(${scrollPosition * 0.2}px)`;
    });
});





