// Handle the investment calculation
document.getElementById('calculateBtn').addEventListener('click', function () {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('investmentDuration').value);

    if (isNaN(investmentAmount) || isNaN(interestRate) || isNaN(years)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Simple compound interest calculation: A = P(1 + r/n)^(nt)
    const finalAmount = investmentAmount * Math.pow((1 + interestRate), years);
    document.getElementById('finalAmount').textContent = finalAmount.toFixed(2);
    document.getElementById('result').style.display = 'block';
});

// Handle Logout
document.getElementById('logoutBtn').addEventListener('click', function () {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
});
