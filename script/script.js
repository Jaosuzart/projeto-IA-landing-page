document.addEventListener("DOMContentLoaded", () => {
  // Animation on scroll
  const sections = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  sections.forEach((section) => observer.observe(section));
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll("a");

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("active");
  };

  menuToggle.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatbotBtn = document.getElementById("close-chatbot");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSendBtn = document.getElementById("chatbot-send");
  const chatbotMessages = document.getElementById("chatbot-messages");

  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
    if (chatbotWindow.classList.contains("active")) {
      chatbotInput.focus();
    }
  });

  closeChatbotBtn.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });

  const addMessage = (text, sender) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);
    messageElement.textContent = text;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const getBotResponse = (userInput) => {
    const lcInput = userInput.toLowerCase();
    if (lcInput.includes("serviços") || lcInput.includes("servicos")) {
      return "Oferecemos soluções de Machine Learning, Visão Computacional e muito mais. Visite nossa página 'Nossos Serviços' para detalhes!";
    } else if (
      lcInput.includes("contato") ||
      lcInput.includes("email") ||
      lcInput.includes("telefone")
    ) {
      return "Você pode nos contatar pelo email@ia.com ou pelo telefone +55 71 91234-5678. Nossa página de 'Contatos' tem todas as informações.";
    } else if (
      lcInput.includes("olá") ||
      lcInput.includes("oi") ||
      lcInput.includes("bom dia")
    ) {
      return "Olá! Tudo bem? Em que posso ser útil?";
    } else if (lcInput.includes("obrigado") || lcInput.includes("obrigada")) {
      return "De nada! Se precisar de mais alguma coisa, é só perguntar.";
    } else {
      return "Desculpe, não entendi. Poderia reformular a sua pergunta? Sou um bot em treinamento e minhas especialidades são sobre nossos serviços e formas de contato.";
    }
  };

  const handleSendMessage = () => {
    const messageText = chatbotInput.value.trim();
    if (messageText === "") return;
    addMessage(messageText, "user");

    chatbotInput.value = "";

    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      addMessage(botResponse, "bot");
    }, 1000);
  };

  chatbotSendBtn.addEventListener("click", handleSendMessage);
  chatbotInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  });
});
