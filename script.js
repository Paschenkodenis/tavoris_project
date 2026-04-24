function calculate() {
    // 1. Беремо дані з полів
    let s = parseFloat(document.getElementById('sum').value);
    let m = parseInt(document.getElementById('months').value);
    let r = parseFloat(document.getElementById('rate').value) / 100 / 12; // ставка на місяць

    // 2. Перевіряємо чи ввів користувач числа
    if (isNaN(s) || isNaN(m) || isNaN(r)) {
        alert("Будь ласка, заповніть всі поля");
        return;
    }

    // 3. Формула розрахунку
    let monthly = s * (r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1);
    let total = monthly * m;
    let overpayment = total - s;

    // 4. Показуємо результат на екрані
    document.getElementById('out-monthly').innerText = monthly.toFixed(2);
    document.getElementById('out-over').innerText = overpayment.toFixed(2);
    document.getElementById('result').style.display = 'block';
}