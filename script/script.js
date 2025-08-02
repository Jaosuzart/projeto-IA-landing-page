document.addEventListener("DOMContentLoaded", () => {
  // Animação de scroll
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

  // Menu de navegação responsivo
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

  // --- Chatbot ---
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatbotBtn = document.getElementById("close-chatbot");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotOptionsContainer = document.getElementById("chatbot-options");

  const chatbotMenu = {
    initial: {
      text: "Olá! 👋 Como posso ajudar você hoje? Escolha uma opção abaixo:",
      options: [
        {
          text: "Quem somos",
          response:
            "Somos especialistas em Inteligência Artificial (AI). Trabalhamos para encontrar soluções tecnologicamente inteligentes para todas as áreas empresariais. Nossos laboratórios são os mais modernos e nossos colaboradores, os mais experientes.",
        },
        {
          text: "Nossos Serviços",
          response:
            "Oferecemos soluções de Machine Learning, Visão Computacional, Processamento de Linguagem Natural e muito mais. Visite nossa página 'Nossos Serviços' para ver todos os detalhes!",
        },
        {
          text: "Contatos",
          response:
            "Você pode nos contatar pelo email@ia.com ou pelo telefone +55 71 91234-5678. Nossa página de 'Contatos' tem todas as informações.",
        },
        {
          text: "Outras perguntas",
          response:
            "Para outras perguntas, por favor, explore nosso site ou entre em contato diretamente através dos nossos canais oficiais. Estamos à disposição!",
        },
      ],
    },
  };

  function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);
    messageElement.textContent = text;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function showOptions(options) {
    chatbotOptionsContainer.innerHTML = "";
    options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.addEventListener("click", () => handleOptionClick(option));
      chatbotOptionsContainer.appendChild(button);
    });
  }

  function handleOptionClick(option) {
    addMessage(option.text, "user");

    setTimeout(() => {
      if (option.response) {
        addMessage(option.response, "bot");
      }
      setTimeout(() => {
        showOptions(chatbotMenu.initial.options);
      }, 800);
    }, 500);

    chatbotOptionsContainer.innerHTML = "";
  }

  // Inicia ou reinicia o chat
  function initChatbot() {
    chatbotMessages.innerHTML = "";
    chatbotOptionsContainer.innerHTML = "";
    addMessage(chatbotMenu.initial.text, "bot");
    showOptions(chatbotMenu.initial.options);
  }

  chatbotToggle.addEventListener("click", () => {
    const isActive = chatbotWindow.classList.contains("active");
    if (!isActive) {
      initChatbot();
    }
    chatbotWindow.classList.toggle("active");
  });

  closeChatbotBtn.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });
});
