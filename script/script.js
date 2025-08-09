document.addEventListener("DOMContentLoaded", () => {
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatbot = document.getElementById("close-chatbot");
  const userInput = document.getElementById("user-input");
  const sendMessage = document.getElementById("send-message");
  const chatbotMessages = document.getElementById("chatbot-messages");

  // Toggle chatbot window
  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
  });

  closeChatbot.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });

  // Simulate API responses
  const apiResponses = {
    "quem somos": `
            Somos especialistas em <strong>Inteligência Artificial (AI)</strong>. 
            Trabalhamos para encontrar soluções tecnologicamente inteligentes para todas as áreas empresariais. 
            Nossos laboratórios são os mais modernos da atualidade e nossos colaboradores são os técnicos mais experientes do mercado.
        `,
    serviços: `
            Nossos serviços incluem:
            - <strong>Soluções de Machine Learning</strong>: Análise preditiva, sistemas de recomendação, modelos de classificação.
            - <strong>Visão Computacional</strong>: Reconhecimento facial, análise de imagens, automação de tarefas.
            - <strong>Processamento de Linguagem Natural (PLN)</strong>: Chatbots, análise de sentimento, tradução automática.
        `,
    contato: `
            Entre em contato conosco:
            - Email: email@ia.com
            - Telefone: +55 71 91234-5678
        `,
  };

  // Handle message sending
  sendMessage.addEventListener("click", () => {
    const message = userInput.value.trim().toLowerCase();
    if (message) {
      // Display user message
      const userMsg = document.createElement("div");
      userMsg.classList.add("message", "user-message");
      userMsg.textContent = message;
      chatbotMessages.appendChild(userMsg);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

      // Simulate API call and display response
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

  // Menu toggle functionality
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const closeMenuBtn = document.getElementById("close-menu-btn");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

  // Animation on scroll
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
});
