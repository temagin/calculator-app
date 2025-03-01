function calculate() {
    // Вземане на стойностите от полетата
    const goren = parseFloat(document.getElementById('goren').value);
    const dolen = parseFloat(document.getElementById('dolen').value);

    // Изчисляване на разликата (винаги положителна)
    const razlika = Math.abs(goren - dolen);

    // Изчисляване на ресурса
    const resource = ((razlika - 3) / (4.2 - 3)) * 100;

    // Показване на резултата
    document.getElementById('result').innerText = `Ресурс: ${resource.toFixed(2)}%`;

    // Проверка за статус
    const statusElement = document.getElementById('status');
    if (resource >= 50) {
        statusElement.innerText = "Годно";
        statusElement.className = "годно";
    } else {
        statusElement.innerText = "Негодно";
        statusElement.className = "негодно";
    }
}