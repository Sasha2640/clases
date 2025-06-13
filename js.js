document.addEventListener("DOMContentLoaded", function () {
  // Получаем все input элементы внутри таблицы
  const inputs = document.querySelectorAll('input[type="text"]');

  // Восстанавливаем значения из localStorage
  inputs.forEach((input, index) => {
    const key = `table_input_${index}`; // Уникальный ключ для каждого input

    // Если в localStorage есть сохранённое значение, устанавливаем его
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      input.value = savedValue;
    }

    // Сохраняем изменения в localStorage при вводе
    input.addEventListener("input", function () {
      localStorage.setItem(key, this.value);
      console.log(`Saved: ${key} = ${this.value}`); // Для отладки
    });
  });
});
