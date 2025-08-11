document.addEventListener("DOMContentLoaded", () => {
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
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  if (carouselTrack && carouselSlides.length > 0) {
    let currentIndex = 0;
    const totalSlides = carouselSlides.length;

    // Clonar slides para loop infinito
    carouselSlides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      carouselTrack.appendChild(clone);
    });

    const updateCarousel = () => {
      const itemWidth = carouselSlides[0].clientWidth;
      carouselTrack.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
      carouselTrack.style.transition = "transform 0.5s ease-in-out";
    };

    const resetCarousel = () => {
      currentIndex = 0;
      carouselTrack.style.transition = "none";
      carouselTrack.style.transform = "translateX(0)";
      setTimeout(() => {
        carouselTrack.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    };

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
        setTimeout(resetCarousel, 500);
      }
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1;
        carouselTrack.style.transition = "none";
        carouselTrack.style.transform = `translateX(-${
          totalSlides * carouselSlides[0].clientWidth
        }px)`;
        setTimeout(() => {
          currentIndex = totalSlides - 1;
          carouselTrack.style.transition = "transform 0.5s ease-in-out";
          updateCarousel();
        }, 50);
      }
      updateCarousel();
    });

    let autoPlay = setInterval(() => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        setTimeout(resetCarousel, 500);
        currentIndex = 0;
      }
      updateCarousel();
    }, 3000);

    carouselTrack.addEventListener("mouseover", () => {
      clearInterval(autoPlay);
    });

    carouselTrack.addEventListener("mouseout", () => {
      autoPlay = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
          currentIndex++;
        } else {
          setTimeout(resetCarousel, 500);
          currentIndex = 0;
        }
        updateCarousel();
      }, 3000);
    });

    window.addEventListener("resize", () => {
      updateCarousel();
    });
  }
});
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});
