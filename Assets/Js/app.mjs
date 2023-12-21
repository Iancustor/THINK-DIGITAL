// import API from "/services.json";
const today = new Date();
const year = today.getFullYear();
// console.log(year);
// curent year
const yearContainer = document.querySelector(".year");
yearContainer.textContent = year;

//Services

const servicesContainer = document.getElementById("servicesContainer");
console.log(servicesContainer);

const API = "services.json";

//fetch Services

async function fetchServices(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    renderServices(data);
  } catch (error) {
    console.log(error);
  }
}

function renderServices(services) {
  servicesContainer.innerHTML = ``;
  services.forEach((service) => {
    const serviceHtml = `
    <a href="/service.html?id=${service.id}" class="flex flex-col items-center bg-gradient-to-b from-black to-blue-700 border  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-900  ">
    <img class="object-cover w-64 rounded-t-lg h-48  md:rounded-none md:rounded-s-lg" src="${service.image}"
    alt="${service.title}">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${service.title}</h5>
        <p class="mb-3 font-normal text-gray-700  dark:text-gray-400">${service.description}</p>
    </div>
    </a>
      `;
    servicesContainer.insertAdjacentHTML("afterbegin", serviceHtml);
  });
}
fetchServices(API);
