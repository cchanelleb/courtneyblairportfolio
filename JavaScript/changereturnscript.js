document.getElementById('calulateBtn').addEventListener('click', () => {
    const cost = parseFloat(document.getElementById('cost').value);
    const moneyGiven = parseFloat(document.getElementById('moneyGiven').value);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (isNaN(cost) || isNaN(moneyGiven) || cost <= 0 || moneyGiven <= 0) {
        resultDiv.innerHTML = '<p>Please enter valid amounts for both cost and money given.</p>';
        return;
    }

    if (moneyGiven < cost) {
        resultDiv.innerHTML = '<p>Money given is less than the total cost. No change can be provided.</p>';
        return;
    }

    const change = moneyGiven - cost;
    let remainingChange = Math.round(change * 100); // Convert to cents to avoid floating-point errors

    const denominations = [
        { name: 'Quarter(s)', value: 25 },
        { name: 'Dime(s)', value: 10 },
        { name: 'Nickel(s)', value: 5 },
        { name: 'Penny(ies)', value: 1 },
    ];

    let changeDetails = `<p>Total Change: $${(change).toFixed(2)}</p><ul>`;

    for (const { name, value } of denominations) {
        const count = Math.floor(remainingChange / value);
        if (count > 0) {
            changeDetails += `<li>${count} ${name}</li>`;
            remainingChange %= value;
        }
    }

    changeDetails += '</ul>';
    resultDiv.innerHTML = changeDetails;
});
