// Toggle hamburger menu
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

// Dummy data for MLBB X Naruto questions (example, bisa kamu ganti sendiri)
const questions = [
  { soal: "Siapa karakter utama Naruto?", jawaban: "Naruto Uzumaki" },
  { soal: "Hero MLBB yang kuat di early game?", jawaban: "Gusion" },
  { soal: "Kombinasi skill terbaik Naruto?", jawaban: "Rasengan dan Shadow Clone" },
  { soal: "Apa winrate tertinggi hero marksman?", jawaban: "50-60%" },
  { soal: "Level maksimal karakter Naruto?", jawaban: "Level 50" },
  // Tambah soal/jawaban lain di sini
];

const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  if (query.length === 0) {
    resultsDiv.textContent = 'Mulai ketik di atas untuk cari soal';
    return;
  }
  const filtered = questions.filter(q =>
    q.soal.toLowerCase().includes(query) ||
    q.jawaban.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsDiv.textContent = 'Maaf, tidak ada hasil yang cocok.';
    return;
  }

  const formatted = filtered.map(q => `• ${q.soal}\n  Jawaban: ${q.jawaban}`).join('\n\n');
  resultsDiv.textContent = formatted;
});
