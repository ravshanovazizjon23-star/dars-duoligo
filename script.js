
const languages = [
  {
    id: "en",
    name: "Ingliz tili",
    native: "English",
    flag: "🇬🇧",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Ingliz tilida salomlashish va tanishishni o‘rganamiz.",
        words: [
          ["Hello", "Salom"],
          ["Good morning", "Xayrli tong"],
          ["Goodbye", "Xayr"],
          ["Thank you", "Rahmat"]
        ],
        question: "Hello so‘zining tarjimasi nima?",
        options: ["Xayr", "Salom", "Rahmat"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Har kuni ishlatiladigan inglizcha so‘zlar.",
        words: [
          ["Book", "Kitob"],
          ["Water", "Suv"],
          ["School", "Maktab"],
          ["Friend", "Do‘st"]
        ],
        question: "Book so‘zi nimani anglatadi?",
        options: ["Kitob", "Suv", "Maktab"],
        correct: 0
      },
      {
        title: "3-dars: Oila",
        intro: "Oila a'zolarining nomlarini o‘rganamiz.",
        words: [
          ["Mother", "Ona"],
          ["Father", "Ota"],
          ["Brother", "Aka yoki uka"],
          ["Sister", "Opa yoki singil"]
        ],
        question: "Mother so‘zining ma'nosi nima?",
        options: ["Ota", "Ona", "Singil"],
        correct: 1
      }
    ]
  },

  {
    id: "de",
    name: "Nemis tili",
    native: "Deutsch",
    flag: "🇩🇪",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Nemis tilida salomlashishni o‘rganamiz.",
        words: [
          ["Hallo", "Salom"],
          ["Guten Morgen", "Xayrli tong"],
          ["Danke", "Rahmat"],
          ["Tschüss", "Xayr"]
        ],
        question: "Danke so‘zi nimani anglatadi?",
        options: ["Salom", "Rahmat", "Xayr"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Nemis tilidagi oddiy so‘zlar.",
        words: [
          ["Buch", "Kitob"],
          ["Wasser", "Suv"],
          ["Schule", "Maktab"],
          ["Freund", "Do‘st"]
        ],
        question: "Wasser nima?",
        options: ["Kitob", "Do‘st", "Suv"],
        correct: 2
      }
    ]
  },

  {
    id: "fr",
    name: "Fransuz tili",
    native: "Français",
    flag: "🇫🇷",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Fransuz tilida salomlashish so‘zlari.",
        words: [
          ["Bonjour", "Salom / Xayrli kun"],
          ["Merci", "Rahmat"],
          ["Au revoir", "Xayr"],
          ["Bonsoir", "Xayrli kech"]
        ],
        question: "Merci so‘zining tarjimasi?",
        options: ["Rahmat", "Salom", "Xayr"],
        correct: 0
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Fransuzcha kundalik so‘zlarni o‘rganamiz.",
        words: [
          ["Livre", "Kitob"],
          ["Eau", "Suv"],
          ["Maison", "Uy"],
          ["Ami", "Do‘st"]
        ],
        question: "Livre nima?",
        options: ["Uy", "Kitob", "Suv"],
        correct: 1
      }
    ]
  },

  {
    id: "ru",
    name: "Rus tili",
    native: "Русский",
    flag: "🇷🇺",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Rus tilida salomlashish va xayrlashish.",
        words: [
          ["Привет", "Salom"],
          ["Здравствуйте", "Assalomu alaykum"],
          ["Спасибо", "Rahmat"],
          ["До свидания", "Xayr"]
        ],
        question: "Спасибо so‘zining tarjimasi?",
        options: ["Salom", "Rahmat", "Xayr"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Rus tilidagi kundalik so‘zlar.",
        words: [
          ["Книга", "Kitob"],
          ["Вода", "Suv"],
          ["Школа", "Maktab"],
          ["Друг", "Do‘st"]
        ],
        question: "Книга nima?",
        options: ["Kitob", "Suv", "Do‘st"],
        correct: 0
      }
    ]
  },

  {
    id: "es",
    name: "Ispan tili",
    native: "Español",
    flag: "🇪🇸",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Ispan tilida salomlashish.",
        words: [
          ["Hola", "Salom"],
          ["Gracias", "Rahmat"],
          ["Adiós", "Xayr"],
          ["Buenos días", "Xayrli tong"]
        ],
        question: "Gracias nima?",
        options: ["Xayr", "Rahmat", "Salom"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Ispancha yangi so‘zlar.",
        words: [
          ["Libro", "Kitob"],
          ["Agua", "Suv"],
          ["Casa", "Uy"],
          ["Amigo", "Do‘st"]
        ],
        question: "Agua nimani bildiradi?",
        options: ["Suv", "Kitob", "Uy"],
        correct: 0
      }
    ]
  },

  {
    id: "ar",
    name: "Arab tili",
    native: "العربية",
    flag: "🇸🇦",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Arab tilida salomlashishni o‘rganamiz.",
        words: [
          ["مرحبا", "Salom"],
          ["شكرا", "Rahmat"],
          ["مع السلامة", "Xayr"],
          ["صباح الخير", "Xayrli tong"]
        ],
        question: "شكرا nimani anglatadi?",
        options: ["Salom", "Rahmat", "Xayr"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Arabcha kundalik so‘zlar.",
        words: [
          ["كتاب", "Kitob"],
          ["ماء", "Suv"],
          ["بيت", "Uy"],
          ["صديق", "Do‘st"]
        ],
        question: "كتاب nima?",
        options: ["Kitob", "Suv", "Uy"],
        correct: 0
      }
    ]
  },

  {
    id: "ko",
    name: "Koreys tili",
    native: "한국어",
    flag: "🇰🇷",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Koreys tilida salomlashish.",
        words: [
          ["안녕하세요", "Salom"],
          ["감사합니다", "Rahmat"],
          ["안녕히 가세요", "Xayr"],
          ["네", "Ha"]
        ],
        question: "감사합니다 nimani anglatadi?",
        options: ["Salom", "Rahmat", "Ha"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Koreys tilidagi oddiy so‘zlar.",
        words: [
          ["책", "Kitob"],
          ["물", "Suv"],
          ["학교", "Maktab"],
          ["친구", "Do‘st"]
        ],
        question: "물 nima?",
        options: ["Kitob", "Maktab", "Suv"],
        correct: 2
      }
    ]
  },

  {
    id: "ja",
    name: "Yapon tili",
    native: "日本語",
    flag: "🇯🇵",
    lessons: [
      {
        title: "1-dars: Salomlashish",
        intro: "Yapon tilida salomlashish.",
        words: [
          ["こんにちは", "Salom"],
          ["ありがとう", "Rahmat"],
          ["さようなら", "Xayr"],
          ["おはよう", "Xayrli tong"]
        ],
        question: "ありがとう nimani anglatadi?",
        options: ["Salom", "Rahmat", "Xayr"],
        correct: 1
      },
      {
        title: "2-dars: Kundalik so‘zlar",
        intro: "Yaponcha oddiy so‘zlar.",
        words: [
          ["本", "Kitob"],
          ["水", "Suv"],
          ["学校", "Maktab"],
          ["友達", "Do‘st"]
        ],
        question: "水 nimani anglatadi?",
        options: ["Kitob", "Suv", "Do‘st"],
        correct: 1
      }
    ]
  }
];

// O‘zlashtirilgan darslarni saqlash
let completed = {};

try {
  completed = JSON.parse(
    localStorage.getItem("bilimdonProgress") || "{}"
  );
} catch {
  completed = {};
}

let selectedLanguage = null;
let selectedLesson = null;
let answered = false;

// Tillarni ekranga chiqarish
function renderLanguages() {
  const grid = document.getElementById("languageGrid");

  grid.innerHTML = languages.map(lang => `
    <div class="language-card"
         data-id="${lang.id}"
         onclick="selectLanguage('${lang.id}')">

      <div class="language-flag">${lang.flag}</div>
      <h3>${lang.name}</h3>
      <p>${lang.native}</p>
      <button>O‘rganish →</button>
    </div>
  `).join("");
}

// Tilni tanlash
function selectLanguage(id) {
  selectedLanguage = languages.find(lang => lang.id === id);
  selectedLesson = null;

  document.querySelectorAll(".language-card").forEach(card => {
    card.classList.toggle(
      "active",
      card.dataset.id === id
    );
  });

  document.getElementById("selectedLanguage").textContent =
    selectedLanguage.flag + " " + selectedLanguage.name;

  renderLessonList();
  updateProgress();

  document.getElementById("lessonContent").innerHTML = `
    <div class="welcome-icon">${selectedLanguage.flag}</div>
    <h2>${selectedLanguage.name}</h2>
    <p>Til tanlandi! Endi darslardan birini tanlang.</p>
  `;

  document.getElementById("lessons").scrollIntoView({
    behavior: "smooth"
  });
}

// Darslar ro‘yxati
function renderLessonList() {
  const list = document.getElementById("lessonList");

  list.innerHTML = selectedLanguage.lessons.map((lesson, index) => {
    const done = (completed[selectedLanguage.id] || []).includes(index);

    return `
      <button class="lesson-link"
        onclick="openLesson(${index})">
        ${done ? "✅" : "📖"} ${lesson.title}
      </button>
    `;
  }).join("");
}

// Darsni ochish
function openLesson(index) {
  selectedLesson = index;
  answered = false;

  const lesson = selectedLanguage.lessons[index];

  document.querySelectorAll(".lesson-link").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  const words = lesson.words.map(word => `
    <div class="word">
      <strong>${word[0]}</strong>
      <span>${word[1]}</span>
    </div>
  `).join("");

  document.getElementById("lessonContent").innerHTML = `
    <span class="small-title">DARS ${index + 1}</span>
    <h2>${lesson.title}</h2>
    <p>${lesson.intro}</p>

    <h3>🗣️ Yangi so‘zlar</h3>

    <div class="word-list">${words}</div>

    <div class="quiz">
      <h3>📝 Dars testi</h3>
      <p>${lesson.question}</p>

      <div id="quizOptions">
        ${lesson.options.map((option, i) => `
          <button class="quiz-option"
            onclick="checkAnswer(${i})">
            ${option}
          </button>
        `).join("")}
      </div>

      <p id="quizResult" class="quiz-result"></p>

      <button class="action-btn" id="nextLessonBtn"
        onclick="nextLesson()" style="display:none">
        Keyingi dars →
      </button>
    </div>
  `;
}

// Javobni tekshirish
function checkAnswer(index) {
  if (answered) return;

  const lesson = selectedLanguage.lessons[selectedLesson];
  const buttons = document.querySelectorAll(".quiz-option");
  const result = document.getElementById("quizResult");

  answered = true;

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === lesson.correct) {
      button.classList.add("correct");
    } else if (i === index) {
      button.classList.add("wrong");
    }
  });

  if (index === lesson.correct) {
    result.textContent = "🎉 Barakalla! To‘g‘ri javob!";
    result.style.color = "#55e69a";

    if (!completed[selectedLanguage.id]) {
      completed[selectedLanguage.id] = [];
    }

    if (!completed[selectedLanguage.id].includes(selectedLesson)) {
      completed[selectedLanguage.id].push(selectedLesson);
    }

    try {
      localStorage.setItem(
        "bilimdonProgress",
        JSON.stringify(completed)
      );
    } catch (error) {
      console.log("Natijani saqlash imkoni bo‘lmadi.");
    }

    updateProgress();
    renderLessonList();

    document.getElementById("nextLessonBtn").style.display =
      "inline-block";

  } else {
    result.textContent = "❌ Noto‘g‘ri javob. Yana o‘rganib ko‘ring!";
    result.style.color = "#ff8181";
  }
}

// Keyingi dars
function nextLesson() {
  if (!selectedLanguage) return;

  if (selectedLesson < selectedLanguage.lessons.length - 1) {
    openLesson(selectedLesson + 1);
  } else {
    document.getElementById("lessonContent").innerHTML = `
      <div class="welcome-icon">🏆</div>
      <h2>Tabriklaymiz!</h2>
      <p>${selectedLanguage.name} bo‘yicha barcha mavjud darslarni tugatdingiz!</p>
      <button class="action-btn" onclick="selectLanguage('${selectedLanguage.id}')">
        Darslarni ko‘rish
      </button>
    `;
  }
}

// O‘zlashtirish foizi
function updateProgress() {
  if (!selectedLanguage) return;

  const done = completed[selectedLanguage.id] || [];
  const total = selectedLanguage.lessons.length;
  const percent = Math.round(done.length / total * 100);

  document.getElementById("progressText").textContent =
    percent + "%";

  document.getElementById("progressFill").style.width =
    percent + "%";
}

// Mobil menyu
document.getElementById("menuBtn").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("show");
  });
});

// Sayt ishga tushishi
renderLanguages();

// SAVOL-JAVOB ISHLASHI

document.querySelectorAll(".faq-question").forEach(button => {

  button.addEventListener("click", () => {

    const item = button.parentElement;
    const isOpen = item.classList.contains("active");

    // Boshqa ochilgan savollarni yopish
    document.querySelectorAll(".faq-item").forEach(faq => {
      faq.classList.remove("active");
      faq.querySelector("span").textContent = "＋";
    });

    // Tanlangan savolni ochish
    if (!isOpen) {
      item.classList.add("active");
      button.querySelector("span").textContent = "－";
    }

  });

});
