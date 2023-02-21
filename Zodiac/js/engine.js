const zodiacSigns = [
  {
    name: "Aries",
    information:
      "Aries is a fire sign, known for their enthusiasm, energy, and leadership qualities. They are brave, independent, and confident, always eager to take on new challenges and experiences.",
    start: [3, 21],
    end: [4, 19]
  },
  {
    name: "Taurus",
    information:
      "Taurus is an earth sign, known for their practicality, stability, and sensuality. They are reliable, patient, and hardworking, always striving to maintain a harmonious and comfortable life.",
    start: [4, 20],
    end: [5, 20]
  },
  {
    name: "Gemini",
    information:
      "Gemini is an air sign, known for their versatility, intelligence, and communication skills. They are curious, adaptable, and sociable, always seeking new knowledge and experiences to broaden their horizons.",
    start: [5, 21],
    end: [6, 20]
  },
  {
    name: "Cancer",
    information:
      "Cancer is a water sign, known for their emotional depth, intuition, and nurturing qualities. They are sensitive, compassionate, and imaginative, always seeking to create a secure and loving environment for themselves and others.",
    start: [6, 21],
    end: [7, 22]
  },
  {
    name: "Leo",
    information:
      "Leo is a fire sign, known for their charisma, confidence, and leadership qualities. They are generous, proud, and creative, always striving to shine in the spotlight and be the center of attention.",
    start: [7, 23],
    end: [8, 22]
  },
  {
    name: "Virgo",
    information:
      "Virgo is an earth sign, known for their practicality, intelligence, and attention to detail. They are analytical, hardworking, and perfectionist, always striving to improve themselves and the world around them.",
    start: [8, 23],
    end: [9, 22]
  },
  {
    name: "Libra", 
    information:
      "Libra is an air sign, known for their charm, diplomacy, and sense of justice. They are balanced, graceful, and sociable, always striving to maintain harmony and fairness in their relationships and the world.",
    start: [9, 23],
    end: [10, 22]
  },
  {
    name: "Scorpio",
    information:
      "Scorpio is a water sign, known for their intensity, intuition, and passion. They are mysterious, powerful, and resourceful, always striving to uncover the hidden truths and uncover their full potential.",
    start: [10, 23],
    end: [11, 21]
  },
  {
    name: "Sagittarius",
    information:
      "Sagittarius is a fire sign, known for their sense of adventure, optimism, and sense of humor. They are independent, curious, and love to travel and explore the world.",
    start: [11, 22],
    end: [12, 21]
  },
  {
    name: "Capricorn",
    information:
      "Capricorn is an earth sign, known for their discipline, ambition, and practicality. They are responsible, reliable, and work hard to achieve their goals.",
    start: [12, 22],
    end: [1, 19]
  },
  {
    name: "Aquarius",
    information:
    "Aquarius is an air sign, known for their originality, independence, and humanitarianism. They are innovative, forward-thinking, and value equality and freedom for all.",
    start: [1, 20],
    end: [2, 18]
    },
    {
    name: "Pisces",
    information:
    "Pisces is a water sign, known for their empathy, imagination, and spiritual nature. They are compassionate, intuitive, and have a deep connection to their emotions and the emotions of others.",
    start: [2, 19],
    end: [3, 20]
    }
];

const calculateBtn = document.querySelector("#calculate-btn");
const monthSelect = document.querySelector("#month");
const dayInput = document.querySelector("#day");
const zodiacSignEl = document.querySelector("#zodiac-sign");
const zodiacInfoEl = document.querySelector("#zodiac-info");

calculateBtn.addEventListener("click", function() {
  const month = parseInt(monthSelect.value);
  const day = parseInt(dayInput.value);

  let zodiacSign = "";
  let zodiacInfo = "";

  if (day >= 1 && day <= 31) {
    zodiacSigns.forEach(function(sign) {
      if (month === sign.start[0] && day >= sign.start[1]) {
        zodiacSign = sign.name;
        zodiacInfo = sign.information;
      } else if (month === sign.end[0] && day <= sign.end[1]) {
        zodiacSign = sign.name;
        zodiacInfo = sign.information;
      }
    });
  } else {
    zodiacSignEl.textContent = "Invalid Day";
    zodiacInfoEl.textContent = "";
  }

  if (zodiacSign) {
    zodiacSignEl.textContent = zodiacSign;
    zodiacInfoEl.textContent = zodiacInfo;
  } else {
    zodiacSignEl.textContent = "Invalid Date";
    zodiacInfoEl.textContent = "";
  }
});
