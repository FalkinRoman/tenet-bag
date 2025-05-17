// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена');
});

// Функция для установки фиксированных размеров
function setFixedSizes() {
    const vh = window.innerHeight;
    const firstScreen = document.querySelector('.first-screen');
    const contentWrapper = document.querySelector('.content-wrapper');
    const imageContainer = document.querySelector('.image-container');
    
    // Устанавливаем фиксированные размеры
    firstScreen.style.height = `${vh}px`;
    contentWrapper.style.height = `${vh * 0.45}px`;
    imageContainer.style.height = `${vh * 0.55}px`;
}

// Устанавливаем размеры при загрузке
document.addEventListener('DOMContentLoaded', setFixedSizes);

// Устанавливаем размеры при изменении размера окна
window.addEventListener('resize', setFixedSizes);

// Предотвращаем изменение размеров при скролле
window.addEventListener('scroll', () => {
    const firstScreen = document.querySelector('.first-screen');
    if (firstScreen) {
        firstScreen.style.height = `${window.innerHeight}px`;
    }
}); 