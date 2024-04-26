const servicesContainer = document.getElementById("servicesContainer");
// console.log(servicesContainer);

const services = [
  {
    id: 4,
    title: "Content Creation",
    category: "Services",
    image: "./images/content.jpg",
    description:
      "The best Fresh finds and great deals Exploring the aisles of deliciousness in AT Store Groceries. Stock Yours Now",
  },
  {
    id: 1,
    title: "Digital Marketing",
    category: "Services",
    image: "/images/digital-marketing.jpg",
    description:
      "Our digital marketing services are designed to help your brand stand out in the crowded digital landscape.",
  },
  {
    id: 2,
    title: "Web Designing",
    category: "Services",
    image: "/images/web-development.jpg",
    description:
      "Think Digital excels in creative, responsive web design. Our skilled team crafts tailored solutions prioritizing client goals. Proven excellence ",
  },
  {
    id: 3,
    title: "Graphics Designing",
    category: "Services",
    image: "/images/graphics.jpg",
    description:
      "Think Digital's graphic design service delivers visually compelling solutions. From branding to visual identity, we ensure impactful designs .",
  },
  {
    id: 5,
    title: "Photography",
    category: "Services",
    image: "/images/photographer.jpg",
    description:
      "Think Digital's photography service captures moments with precision and creativity. From professional shoots to product photography.",
  },
  {
    id: 6,
    title: "Videography",
    category: "Services",
    image: "/images/videography.jpg",
    description:
      "Creating compelling visual stories. From promotional content to corporate narratives, enhancing your brand's digital presence.",
  },
];

function renderServices(services) {
  services.forEach((service) => {
    const serviceHtml = `
      <a href="/service.html?title=${service.title}" class="flex flex-col items-center bg-gradient-to-b from-black to-indigo-700 border rounded-lg shadow w-72 md:w-auto lg:w-auto md:flex-row md:max-w-xl hover:bg-gray-900 ">
        <img class="object-cover w-64 rounded-t-lg h-48  md:rounded-none md:rounded-s-lg" src="${service.image}" alt="${service.title}">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">${service.title}</h5>
          <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">${service.description}</p>
        </div>
      </a>
    `;
    servicesContainer.insertAdjacentHTML("afterbegin", serviceHtml);
  });
}

renderServices(services);

const today = new Date();
const year = today.getFullYear();
// console.log(year);

// curent year
const yearContainer = document.querySelector(".year");
yearContainer.textContent = year;

// dark Mode
const darkModeBtn = document.querySelector(".darkmode-toggle");
// console.log(darkModeBtn);
const body = document.body;
darkModeBtn.addEventListener("click", changeMode);
const nameEl = document.querySelector(".name");

// adding theme to local storage
let theme = localStorage.getItem("theme");
// console.log(theme);
theme === "light" ? enableLightMode() : enableDarkMode();

function changeMode() {
  theme === "light" ? enableDarkMode() : enableLightMode();
  body.classList.contains("dark")
    ? (darkModeBtn.innerHTML = "<i class='bx bxs-sun'></i>")
    : (darkModeBtn.innerHTML = "<i class='bx bxs-moon'></i>");
}
function enableLightMode() {
  body.classList.remove("dark");
  theme = "light";
  localStorage.setItem("theme", "light");
}

function enableDarkMode() {
  body.classList.add("dark");
  theme = "dark";
  localStorage.setItem("theme", "dark");
}
