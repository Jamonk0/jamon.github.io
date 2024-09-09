const attackButton = document.getElementById('attack-button');
const battleResult = document.getElementById('battle-result');

attackButton.addEventListener('click', () => {
    const randomOutcome = Math.random();
    if (randomOutcome > 0.5) {
        battleResult.textContent = "¡Has golpeado a Sans!";
    } else {
        battleResult.textContent = "Sans ha esquivado tu ataque...";
    }
});
