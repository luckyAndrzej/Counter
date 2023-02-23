const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter => {
        const input = counter.querySelector('input');
        const key = input.id; // используем id поля ввода как ключ в localStorage
        let value = localStorage.getItem(key) || 0; // получаем сохраненное значение или используем 0
        input.value = value;

        counter.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.counter__button')) {
                if (target.classList.contains('counter__button_plus')) {
                    value++;
                } else {
                    value--;
                }

                localStorage.setItem(key, value); // сохраняем новое значение в localStorage
                input.value = value;
            }
        });
    });
}