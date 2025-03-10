// Fungsi untuk menampilkan halaman
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active"); // Sembunyikan semua halaman
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active"); // Tampilkan halaman target
  } else {
    console.error(`Page with ID ${pageId} not found`);
  }
}

// Fungsi untuk menampilkan halaman tertentu
function showHomePage() {
  showPage("homePage");
}

function showMateriPage() {
  showPage("materiPage");
}

function showAljabar() {
  showPage("aljabarPage");
}

function showEksponensial() {
  showPage("eksponensialPage");
}

function showTrigonometri() {
  showPage("trigonometriPage");
}

function showFungsiPangkat() {
  showPage("fungsiPangkatPage");
}

function showLogaritma() {
  showPage("logaritmaPage");
}

// Timer functions
let timer;
let timeRemaining;
let correctAnswers = 0;

function startTimer() {
  clearInterval(timer); // Clear any existing timer
  timeRemaining = 60 * 5; // Set to 5 minutes
  document.getElementById("timer").innerText = "Waktu: " + formatTime(timeRemaining);
  timer = setInterval(function () {
    timeRemaining--;
    document.getElementById("timer").innerText =
      "Waktu: " + formatTime(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(timer);
      alert("Waktu habis!");
      submitQuiz();
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

// Kuis Aljabar
function startAljabarQuiz() {
  showPage("aljabarQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = 5x^3 \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( 15x^2 \) <br>
            <input type="radio" name="soal1" value="B"> b) \( 5x^2 \) <br>
            <input type="radio" name="soal1" value="C"> c) \( 3x^2 \) <br>
            <input type="radio" name="soal1" value="D"> d) \( 5x^2 + 1 \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = 4x^2 + 2x + 1 \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( 8x + 2 \) <br>
            <input type="radio" name="soal2" value="B"> b) \( 4x + 2 \) <br>
            <input type="radio" name="soal2" value="C"> c) \( 8x + 1 \) <br>
            <input type="radio" name="soal2" value="D"> d) \( 6x + 2 \) <br>
        </div>
    `;
  startTimer(); // Mulai timer setiap kali kuis dimulai
}

// Kuis Eksponensial
function startEksponensialQuiz() {
  showPage("eksponensialQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = e^x \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( e^x \) <br>
            <input type="radio" name="soal1" value="B"> b) \( xe^{x-1} \) <br>
            <input type="radio" name="soal1" value="C"> c) \( \ln(e) \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = a^x \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( a^x \ln(a) \) <br>
            <input type="radio" name="soal2" value="B"> b) \( x^a \ln(x) \) <br>
            <input type="radio" name="soal2" value="C"> c) \( a^x \ln(x) \) <br>
        </div>
    `;
  startTimer(); // Mulai timer setiap kali kuis dimulai
}

// Kuis Trigonometri
function startTrigonometriQuiz() {
  showPage("trigonometriQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Berapa turunan dari \( f(x) = \sin(x) \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( \cos(x) \) <br>
            <input type="radio" name="soal1" value="B"> b) \( -\cos(x) \) <br>
            <input type="radio" name="soal1" value="C"> c) \( \sin(x) \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Berapa turunan dari \( f(x) = \sec(x) \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( \sec(x) \tan(x) \) <br>
            <input type="radio" name="soal2" value="B"> b) \( \sec(x) \) <br>
            <input type="radio" name="soal2" value="C"> c) \( -\tan(x) \sec(x) \) <br>
        </div>
    `;
  startTimer(); // Mulai timer setiap kali kuis dimulai
}

// Kuis Logaritma
function startLogaritmaQuiz() {
  showPage("logaritmaQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = \ln(x) \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( \frac{1}{x} \) <br>
            <input type="radio" name="soal1" value="B"> b) \( x \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = \log_b(x) \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( \frac{1}{x \ln(b)} \) <br>
        </div>
    `;
  startTimer(); // Mulai timer setiap kali kuis dimulai
}

// Kuis Fungsi Pangkat
function startFungsiPangkatQuiz() {
  showPage("fungsiPangkatQuisPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = x^n \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( nx^{n-1} \) <br>
            <input type="radio" name="soal1" value="B"> b) \( x^n \) <br>
        </div>
    `;
  startTimer(); // Mulai timer setiap kali kuis dimulai
}

// Fungsi submit quiz
function submitQuiz(quizName) {
  alert(`Quiz ${quizName} selesai`);
  goBackToMateri();
}

function goBackToMateri() {
  showPage("materiPage");
}
