// Получаем все ссылки навигации
    const navLinks = document.querySelectorAll('.nav-link');

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Проверяем, находится ли текущая позиция прокрутки в пределах секции
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Удаляем класс active у всех нав ссылок
                navLinks.forEach(nav => nav.classList.remove('active'));
                // Добавляем класс active к текущей ссылке
                link.classList.add('active');
            }
        });
    });