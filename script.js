document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ottieni i valori dai campi di input
    const i1 = parseFloat(document.getElementById('i1').value);
    const i2 = parseFloat(document.getElementById('i2').value);
    const i3 = parseFloat(document.getElementById('i3').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    // Verifica che tutti i valori siano numerici
    if (isNaN(i1) || isNaN(i2) || isNaN(i3) || isNaN(v1) || isNaN(v2)) {
        document.getElementById('result').textContent = "Per favore, inserisci tutti i valori correttamente.";
        return;
    }

    // Calcola le leggi di Kirchhoff
    const currentLaw = i1 + i2 + i3;  // Legge delle correnti
    const voltageLaw = v1 - v2;       // Legge delle tensioni

    // Mostra i risultati con un testo comprensibile
    const resultText = `La somma delle correnti (Legge delle Correnti) è: ${currentLaw.toFixed(2)} A\n`;
    const voltageText = `La differenza delle tensioni (Legge delle Tensioni) è: ${voltageLaw.toFixed(2)} V`;

    

    document.getElementById('result').textContent = resultText + voltageText;
});

// Aggiungi l'evento al titolo Kirchhoff per visualizzare la spiegazione
document.getElementById('kirchhoffTitle').addEventListener('click', function() {
    document.getElementById('kirchhoffExplanation').style.display = 'block';
});

// Funzione per chiudere la casella di testo
function closePopup() {
    document.getElementById('kirchhoffExplanation').style.display = 'none';
}
