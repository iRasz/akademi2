// Toggle hamburger menu
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

// Hitung Winrate
function calculateWR() {
  const winCount = parseInt(document.getElementById('winCount').value);
  const totalGames = parseInt(document.getElementById('totalGames').value);
  const resultDiv = document.getElementById('resultWr');

  if (isNaN(winCount) || isNaN(totalGames) || totalGames <= 0 || winCount < 0) {
    resultDiv.textContent = 'Mohon masukan angka valid dan total permainan lebih dari 0.';
    return;
  }
  if (winCount > totalGames) {
    resultDiv.textContent = 'Jumlah kemenangan tidak boleh lebih dari total permainan.';
    return;
  }

  const wr = (winCount / totalGames) * 100;
  resultDiv.textContent = `Winrate kamu adalah ${wr.toFixed(2)}%.`;
}
