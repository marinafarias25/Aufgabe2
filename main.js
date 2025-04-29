const inputs = document.querySelectorAll('.number-inputs input');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

function checkID() {
    let enteredID = '';
    inputs.forEach(input => enteredID += input.value);

    const correctID = "46108"; // Hier deine korrekte ID

    if (enteredID === correctID) {
        document.getElementById('instruction').classList.remove('hidden');
    } else {
        alert("❌ Falsche ID! Bitte nochmal prüfen.");
    }
}