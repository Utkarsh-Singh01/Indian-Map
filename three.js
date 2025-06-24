document.addEventListener("DOMContentLoaded", function () {
  // Add saluting class to make the men salute after they line up
  setTimeout(() => {
    document.querySelector(".man1").classList.add("saluting");
    document.querySelector(".man2").classList.add("saluting");
    document.querySelector(".man3").classList.add("saluting");
    document.querySelector(".man4").classList.add("saluting");
    document.querySelector(".man5").classList.add("saluting");
  }, 6000);

  // Stop walking animations when men line up
  setTimeout(() => {
    const arms = document.querySelectorAll(".left-arm");
    const legs = document.querySelectorAll(".left-leg, .right-leg");

    arms.forEach((arm) => {
      arm.style.animation = "none";
      arm.style.transform = "rotate(0deg)";
    });

    legs.forEach((leg) => {
      leg.style.animation = "none";
      leg.style.transform = "rotate(0deg)";
    });
  }, 5000);
  createParticles();
  setTimeout(() => {
    createIndiaMap();
  }, 2000); // Start map creation sooner for simultaneous animation
});

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random positioning
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;

    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;

    // Random animation delay and duration
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
}

// Function to create and animate the India map
function createIndiaMap() {
  const indiaSvg = document.querySelector(".india-map");

  const stateData = {
    "IN-AN": {
      name: "Andaman and Nicobar Islands",
      description:
        "A union territory of 572 islands, famous for the Cellular Jail and pristine beaches.",
    },
    "IN-AP": {
      name: "Andhra Pradesh",
      description:
        "Home to the Lepakshi Temple with a hanging pillar and Tirupati, one of the richest temples.",
    },
    "IN-AR": {
      name: "Arunachal Pradesh",
      description:
        'Known as the "Land of the Rising Sun"; first to see sunrise in India.',
    },
    "IN-AS": {
      name: "Assam",
      description:
        "Globally famous for its tea and Kaziranga National Park, home to one-horned rhinos.",
    },
    "IN-BR": {
      name: "Bihar",
      description:
        "Home to Nalanda University, one of the world’s oldest learning centers.",
    },
    "IN-CH": {
      name: "Chandigarh",
      description:
        "India’s first planned city, designed by French architect Le Corbusier.",
    },
    "IN-CT": {
      name: "Chhattisgarh",
      description:
        'Known for its tribal culture and Chitrakote Falls, the "Niagara Falls of India".',
    },
    "IN-DD": {
      name: "Daman and Diu",
      description:
        "A former Portuguese colony with beautiful beaches and colonial forts.",
    },
    "IN-DL": {
      name: "Delhi",
      description:
        "Home to three UNESCO World Heritage Sites: Qutub Minar, Red Fort, and Humayun’s Tomb.",
    },
    "IN-DN": {
      name: "Dadra and Nagar Haveli",
      description:
        "A lush union territory nestled between Gujarat and Maharashtra.",
    },
    "IN-GA": {
      name: "Goa",
      description:
        "India’s smallest state, famous for its beaches, Portuguese heritage, and nightlife.",
    },
    "IN-GJ": {
      name: "Gujarat",
      description:
        "Home to the Statue of Unity – the tallest statue in the world.",
    },
    "IN-HP": {
      name: "Himachal Pradesh",
      description:
        "Known for its hill stations like Shimla and Manali, and the scenic Spiti Valley.",
    },
    "IN-HR": {
      name: "Haryana",
      description: "The site of the epic battle of Mahabharata at Kurukshetra.",
    },
    "IN-JH": {
      name: "Jharkhand",
      description:
        "Rich in minerals and forests; home to Betla National Park and waterfalls.",
    },
    "IN-JK": {
      name: "Jammu and Kashmir",
      description:
        "Known for its breathtaking beauty, with Dal Lake and the Himalayas.",
    },
    "IN-KA": {
      name: "Karnataka",
      description:
        "Hosts the Silicon Valley of India – Bengaluru, and Hampi, a UNESCO site.",
    },
    "IN-KL": {
      name: "Kerala",
      description:
        "Famous for its backwaters, Ayurveda, and literacy rate – the highest in India.",
    },
    "IN-LA": {
      name: "Ladakh",
      description:
        "India’s highest plateau; known for Pangong Lake, monasteries, and rugged terrain.",
    },
    "IN-LD": {
      name: "Lakshadweep",
      description:
        "A coral island group known for marine biodiversity and pristine waters.",
    },
    "IN-MH": {
      name: "Maharashtra",
      description:
        "Home to Mumbai, India’s financial capital, and the Ajanta-Ellora caves.",
    },
    "IN-ML": {
      name: "Meghalaya",
      description:
        "Has the world’s wettest place – Mawsynram – and living root bridges.",
    },
    "IN-MN": {
      name: "Manipur",
      description:
        "Known for the classical dance form Manipuri and floating lake at Loktak.",
    },
    "IN-MP": {
      name: "Madhya Pradesh",
      description:
        "The “Heart of India”; houses Khajuraho temples and Bandhavgarh Tiger Reserve.",
    },
    "IN-MZ": {
      name: "Mizoram",
      description:
        "A scenic hill state known for its bamboo dance – Cheraw – and rich culture.",
    },
    "IN-NL": {
      name: "Nagaland",
      description: "Famous for Hornbill Festival and unique tribal traditions.",
    },
    "IN-OR": {
      name: "Odisha",
      description:
        "Home to the Sun Temple at Konark and the Rath Yatra at Puri.",
    },
    "IN-PB": {
      name: "Punjab",
      description: "Land of the Golden Temple and vibrant bhangra culture.",
    },
    "IN-PY": {
      name: "Puducherry",
      description:
        "Known for its French architecture, Auroville, and serene beaches.",
    },
    "IN-RJ": {
      name: "Rajasthan",
      description:
        "Home to Thar Desert, Jaipur’s palaces, and forts like Mehrangarh and Amber.",
    },
    "IN-SK": {
      name: "Sikkim",
      description:
        "Home to Kanchenjunga, India’s highest peak, and a 100% organic farming state.",
    },
    "IN-TG": {
      name: "Telangana",
      description:
        "Home to Hyderabad’s Charminar, biryani, and the IT hub – Cyberabad.",
    },
    "IN-TN": {
      name: "Tamil Nadu",
      description:
        "Famous for Dravidian-style temples like Meenakshi and classical music & dance.",
    },
    "IN-TR": {
      name: "Tripura",
      description: "Rich in bamboo craft and the ancient Ujjayanta Palace.",
    },
    "IN-UP": {
      name: "Uttar Pradesh",
      description:
        "Shree Ram in Ayodhya, Banaras (kashi vishwanath temple), and the spiritual heart of Hinduism.",
    },
    "IN-UT": {
      name: "Uttarakhand",
      description:
        'Known as "Dev Bhoomi" (Land of the Gods), home to Char Dham and the Ganga.',
    },
    "IN-WB": {
      name: "West Bengal",
      description:
        "Birthplace of Rabindranath Tagore; known for Durga Puja and Sundarbans.",
    },
  };

  setTimeout(function () {
    // Get all path elements (states/regions)
    const paths = document.querySelectorAll(".india-map path");
    const stateInfo = document.querySelector(".state-info");

    console.log("Found " + paths.length + " path elements");

    // Animate states appearing one by one
    const animateStates = () => {
      const shuffledPaths = Array.from(paths);
      for (let i = shuffledPaths.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPaths[i], shuffledPaths[j]] = [
          shuffledPaths[j],
          shuffledPaths[i],
        ];
      }

      const centralStates = ["IN-MP", "IN-UP", "IN-CT", "IN-JH"];
      const northStates = [
        "IN-JK",
        "IN-HP",
        "IN-PB",
        "IN-UT",
        "IN-HR",
        "IN-DL",
        "IN-RJ",
      ];
      const eastStates = [
        "IN-BR",
        "IN-WB",
        "IN-OR",
        "IN-AS",
        "IN-ML",
        "IN-MN",
        "IN-NL",
        "IN-TR",
        "IN-MZ",
        "IN-AR",
        "IN-SK",
      ];
      const westStates = ["IN-GJ", "IN-MH", "IN-GA", "IN-DD", "IN-DN"];
      const southStates = [
        "IN-KA",
        "IN-TG",
        "IN-AP",
        "IN-TN",
        "IN-KL",
        "IN-PY",
      ];
      const islands = ["IN-AN", "IN-LD"];

      shuffledPaths.forEach((path) => {
        path.setAttribute("fill", "#4189e6");
        path.setAttribute("stroke", "rgba(255, 255, 255, 0.3)");
        path.setAttribute("stroke-width", "0.5px");
        path.style.opacity = "0";
      });

      const animateWithDelay = (path, delay, group) => {
        setTimeout(() => {
          path.style.animation = `stateAppear 0.8s ease forwards, statePulse 3s ease ${
            group === "center" ? "1.5s" : "2.5s"
          } infinite`;
        }, delay);
      };

      // Base delay between state animations
      const baseDelay = 80;
      let currentDelay = 0;

      // Animate central states first
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (centralStates.includes(stateId)) {
          animateWithDelay(path, currentDelay, "center");
          currentDelay += baseDelay;
        }
      });

      // Then north states
      currentDelay += 200;
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (northStates.includes(stateId)) {
          animateWithDelay(path, currentDelay, "north");
          currentDelay += baseDelay;
        }
      });

      // Then west states
      currentDelay += 100;
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (westStates.includes(stateId)) {
          animateWithDelay(path, currentDelay, "west");
          currentDelay += baseDelay;
        }
      });

      // Then east states
      currentDelay += 100;
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (eastStates.includes(stateId)) {
          animateWithDelay(path, currentDelay, "east");
          currentDelay += baseDelay;
        }
      });

      // Then south states
      currentDelay += 100;
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (southStates.includes(stateId)) {
          animateWithDelay(path, currentDelay, "south");
          currentDelay += baseDelay;
        }
      });

      // Finally islands
      currentDelay += 200;
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (islands.includes(stateId)) {
          animateWithDelay(path, currentDelay, "islands");
          currentDelay += baseDelay;
        }
      });

      // Any remaining states
      shuffledPaths.forEach((path) => {
        const stateId = path.getAttribute("id");
        if (
          !centralStates.includes(stateId) &&
          !northStates.includes(stateId) &&
          !eastStates.includes(stateId) &&
          !westStates.includes(stateId) &&
          !southStates.includes(stateId) &&
          !islands.includes(stateId)
        ) {
          animateWithDelay(path, currentDelay, "other");
          currentDelay += baseDelay;
        }
      });
    };

    // Start animation
    animateStates();

    paths.forEach((path) => {
      path.addEventListener("click", function () {
        console.log("Path clicked: " + this.id);

        paths.forEach((p) => {
          p.classList.remove("selected");
          if (p !== this) {
            p.setAttribute("fill", "#4189e6");
            p.style.filter = "none";
          }
        });

        this.classList.add("selected");
        this.setAttribute("fill", "#ff9800");
        this.style.filter = "drop-shadow(0 0 8px rgba(255, 152, 0, 0.6))";

        // Get the state ID from the path ID
        const stateId = this.id;

        // Update state info
        if (stateData[stateId]) {
          stateInfo.innerHTML = `
                                <div class="info-title">${stateData[stateId].name}</div>
                                <div class="info-description">${stateData[stateId].description}</div>
                            `;
        } else {
          stateInfo.innerHTML = `
                                <div class="info-title">${
                                  this.getAttribute("title") || "Unknown Region"
                                }</div>
                                <div class="info-description">Information not available for this region.</div>
                            `;
        }
      });

      path.addEventListener("mouseenter", function () {
        if (!this.classList.contains("selected")) {
          this.setAttribute("fill", "#64b5f6");
          this.style.filter = "drop-shadow(0 0 5px rgba(100, 181, 246, 0.6))";
        }
      });

      path.addEventListener("mouseleave", function () {
        if (!this.classList.contains("selected")) {
          this.setAttribute("fill", "#4189e6");
          this.style.filter = "none";
        }
      });
    });

    console.log("Event listeners added to all paths");
  }, 500); // 500ms delay to ensure SVG is loaded
}