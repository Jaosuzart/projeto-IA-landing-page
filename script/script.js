document.addEventListener("DOMContentLoaded", () => {
  // --- SEU CÓDIGO ORIGINAL (SEM ALTERAÇÕES) ---
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

  const apiResponses = {
    "quem somos": `
            Somos especialistas em Inteligência Artificial (AI). 
            Trabalhamos para encontrar soluções tecnologicamente inteligentes para todas as áreas empresariais. 
            Nossos laboratórios são os mais modernos da atualidade e nossos colaboradores são os técnicos mais experientes do mercado.
        `,
    serviços: `
            Nossos serviços incluem:
            - Soluções de Machine Learning: Análise preditiva, sistemas de recomendação, modelos de classificação.
            - Visão Computacional: Reconhecimento facial, análise de imagens, automação de tarefas.
            - Processamento de Linguagem Natural (PLN): Chatbots, análise de sentimento, tradução automática.
        `,
    contato: `
            Entre em contato conosco:
            - Email: email@ia.com
            - Telefone: +55 71 91234-5678
        `,
  };

  sendMessage.addEventListener("click", () => {
    const message = userInput.value.trim().toLowerCase();
    if (message) {
      const userMsg = document.createElement("div");
      userMsg.classList.add("message", "user-message");
      userMsg.textContent = message;
      chatbotMessages.appendChild(userMsg);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      setTimeout(() => {
        const response =
          apiResponses[message] ||
          'Desculpe, não entendi. Tente "Quem somos", "Serviços" ou "Contato".';
        const botMsg = document.createElement("div");
        botMsg.classList.add("message", "bot-message");
        botMsg.innerHTML = response;
        chatbotMessages.appendChild(botMsg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 500);
      userInput.value = "";
    }
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage.click();
    }
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const closeMenuBtn = document.getElementById("close-menu-btn");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
  });
  closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

  const animateOnScrollElements =
    document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );
  animateOnScrollElements.forEach((element) => observer.observe(element));

  const carouselTrack = document.querySelector(".carousel-track");
  const carouselItems = document.querySelectorAll(".carousel-item");

  if (carouselTrack && carouselItems.length > 0) {
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    carouselItems.forEach((item) => {
      const clone = item.cloneNode(true);
      carouselTrack.appendChild(clone);
    });

    const moveCarousel = () => {
      currentIndex++;
      const itemWidth = carouselItems[0].clientWidth;
      carouselTrack.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
      carouselTrack.style.transition = "transform 0.5s ease-in-out";

      if (currentIndex === totalItems) {
        setTimeout(() => {
          // Remove a animação de transição
          carouselTrack.style.transition = "none";
          // Reseta a posição para o início sem animar
          currentIndex = 0;
          carouselTrack.style.transform = "translateX(0)";
        }, 500); // O tempo deve ser igual à duração da transição do CSS
      }
    };

    // 4. Inicia o loop infinito a cada 3 segundos
    setInterval(moveCarousel, 3000);
  }
});
