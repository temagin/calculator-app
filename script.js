const MIN_RAZLIKA = 3;
const MAX_RAZLIKA = 4.2;

function calculate() {
    const gorenRaw = document.getElementById('goren').value;
    const dolenRaw = document.getElementById('dolen').value;
    const resultEl = document.getElementById('result');
    const statusEl = document.getElementById('status');

    const goren = parseFloat(gorenRaw);
    const dolen = parseFloat(dolenRaw);

    if (gorenRaw === '' || dolenRaw === '' || isNaN(goren) || isNaN(dolen)) {
        resultEl.textContent = 'Ресурс: —';
        statusEl.textContent = 'Моля, въведете валидни числа.';
        statusEl.className = 'невалидно';
        return;
    }

    const razlika = Math.abs(goren - dolen);
    const raw = ((razlika - MIN_RAZLIKA) / (MAX_RAZLIKA - MIN_RAZLIKA)) * 100;
    const resource = Math.max(0, Math.min(100, raw));

    resultEl.textContent = `Ресурс: ${resource.toFixed(2)}%`;

    if (resource >= 50) {
        statusEl.textContent = 'Годно';
        statusEl.className = 'годно';
    } else {
        statusEl.textContent = 'Негодно';
        statusEl.className = 'негодно';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ['goren', 'dolen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('keydown', e => {
                if (e.key === 'Enter') calculate();
            });
        }
    });
});
