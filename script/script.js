const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
});

// Animações on Scroll
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

animateElements.forEach((el) => observer.observe(el));

// Carousel
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = Array.from(carouselTrack.children);
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let currentIndex = 0;

const moveToSlide = (index) => {
  const slideWidth = carouselSlides[0].getBoundingClientRect().width;
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
};

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  moveToSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
  moveToSlide(currentIndex);
});

// Chatbot
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const closeChatbot = document.getElementById("close-chatbot");
const userInput = document.getElementById("user-input");
const sendMessage = document.getElementById("send-message");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotToggle.addEventListener("click", () => {
  chatbotWindow.classList.toggle("active");
});

closeChatbot.addEventListener("click", () => {
  chatbotWindow.classList.remove("active");
});

const addMessage = (text, className) => {
  const message = document.createElement("div");
  message.classList.add("message", className);
  message.textContent = text;
  chatbotMessages.appendChild(message);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

sendMessage.addEventListener("click", () => {
  const input = userInput.value.trim();
  if (input) {
    addMessage(input, "user-message");
    userInput.value = "";
    let response =
      'Desculpe, não entendi. Tente "Quem somos", "Serviços" ou "Contato".';
    if (input.toLowerCase().includes("quem somos")) {
      response =
        "Somos especialistas em Inteligência Artificial (AI). Trabalhamos para encontrar soluções tecnologicamente inteligentes para todas as áreas empresariais.";
    } else if (input.toLowerCase().includes("serviços")) {
      response =
        "Oferecemos soluções de Machine Learning, Visão Computacional e Processamento de Linguagem Natural.";
    } else if (input.toLowerCase().includes("contato")) {
      response =
        "Entre em contato via email: email@ia.com ou telefone: +55 71 91234-5678.";
    }
    setTimeout(() => addMessage(response, "bot-message"), 500);
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage.click();
  }
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((clickedItem) => {
  clickedItem.addEventListener("click", () => {
    faqItems.forEach((item) => {
      if (item !== clickedItem) {
        item.classList.remove("active");
      }
    });
    clickedItem.classList.toggle("active");
  });
});
