// 1. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 2. Check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// 3. Personalized greeting using template literal
function greetUser(name) {
  return `Hello, ${name}! Welcome to the course.`;
}

console.log("--- Question 1: Celsius to Fahrenheit ---");
console.log("0°C in Fahrenheit:", celsiusToFahrenheit(0));   // Expected: 32
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25)); // Expected: 77

console.log("\n--- Question 2: Is Even Check ---");
console.log("Is 4 even?", isEven(4));   // Expected: true
console.log("Is 7 even?", isEven(7));   // Expected: false

console.log("\n--- Question 3: Personalized Greeting ---");
console.log(greetUser("Marvin"));

const modules = [
  { name: "HTML & CSS", hours: 12 },
  { name: "JavaScript Basics", hours: 8 },
  { name: "Responsive Design", hours: 15 },
  { name: "Git & GitHub", hours: 4 },
  { name: "Node.js Intro", hours: 20 }
];

const filterLongModules = (array) => array.filter(m => m.hours > 10);
let longModules = filterLongModules(modules);

console.log("\n--- Initial Filter (Modules > 10 hours) ---");
longModules.forEach(m => {
  console.log(`${m.name}: ${m.hours} hours`);
});

modules.push({ name: "Advanced React", hours: 25 });

longModules = filterLongModules(modules);

console.log("\n--- Updated Filter (After adding 6th module) ---");
longModules.forEach(m => {
  console.log(`${m.name}: ${m.hours} hours`);
});
const menuButton = document.getElementById('menu-btn');
const navLinkMenu = document.getElementById('nav-menu');

if (menuButton && navLinkMenu) {
    menuButton.addEventListener('click', () => {
        navLinkMenu.classList.toggle('open');
    });
}
const contactMessage = document.getElementById('message');
const countFeedback = document.getElementById('char-count');

if (contactMessage && countFeedback) {
    contactMessage.addEventListener('input', () => {
        countFeedback.textContent = `${contactMessage.value.length} characters`;
    });
}