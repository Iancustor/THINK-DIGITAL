const services = [
  {
    id: 4,
    title: "Content Creation",
    category: "Services",
    image: "/images/content.jpg",
    description:
      "The best Fresh finds and great deals Exploring the aisles of deliciousness in AT Store Groceries. Stock Yours Now. Content creation is an artful process of crafting compelling and engaging material tailored to captivate audiences across various platforms. It involves brainstorming innovative ideas, meticulous research, and creative execution to deliver impactful messages. From creating informative blog posts to producing visually stunning videos, content creation encompasses a wide array of mediums. Businesses leverage content creation to establish their online presence, engage with their target audience, and ultimately drive conversions. With the ever-evolving digital landscape, quality content has become indispensable for brands aiming to stand out amidst the sea of information. Whether it's crafting persuasive copy, designing eye-catching graphics, or curating engaging social media posts, effective content creation is essential for building brand awareness and fostering meaningful connections with customers. Embrace the power of content creation to amplify your brand's voice and leave a lasting impression in the digital realm.",
  },
  {
    id: 1,
    title: "Digital Marketing",
    category: "Services",
    image: "/images/digital-marketing.jpg",
    description:
      "Our digital marketing services are designed to help your brand stand out in the crowded digital landscape. In today's fast-paced world, establishing a strong online presence is crucial for businesses to reach their target audience effectively. With our comprehensive digital marketing strategies, we aim to elevate your brand visibility, drive traffic to your website, and ultimately boost your sales and conversions. From search engine optimization (SEO) to social media marketing, we employ a multi-faceted approach to maximize your online reach and engagement. Our team of experienced digital marketers specializes in crafting tailored campaigns that resonate with your target demographic, ensuring that your brand message cuts through the noise of the digital world. Whether you're a startup looking to gain traction or an established business seeking to expand your online footprint, our digital marketing services are tailored to suit your unique needs and goals. Let us partner with you on your digital journey and unlock the full potential of your brand in the digital sphere..",
  },
  {
    id: 2,
    title: "Web Designing",
    category: "Services",
    image: "/images/web-development.jpg",
    description:
      "Think Digital excels in creative, responsive web design. Our skilled team crafts tailored solutions prioritizing client goals. Proven excellence in delivering visually stunning and user-friendly websites sets us apart. We understand that a website serves as the digital storefront for your business, making a lasting impression on visitors. That's why we meticulously design every aspect of your site, from layout and navigation to aesthetics and functionality, ensuring a seamless user experience across all devices. Our approach blends artistic flair with technical expertise to create websites that not only look captivating but also drive engagement and conversions. Whether you're launching a new brand or revamping an existing website, our team collaborates closely with you to bring your vision to life. With a focus on innovation and attention to detail, we strive to exceed your expectations and deliver results that elevate your online presence. Partner with Think Digital for web design solutions that reflect your brand's identity and leave a lasting impact on your audience.",
  },
  {
    id: 3,
    title: "Graphics Designing",
    category: "Services",
    image: "/images/graphics.jpg",
    description:
      "Think Digital's graphic design service, Graphics Designing, offers visually compelling solutions tailored to your brand's needs. Our team of creative experts specializes in transforming concepts into captivating visuals that leave a lasting impression. With a keen eye for detail and a deep understanding of design principles, we craft graphics that not only stand out but also effectively convey your message. From logo design and branding to marketing collateral and digital assets, Graphics Designing covers a wide range of design needs. We believe that great design is not just about aesthetics; it's about effectively communicating your brand story and values. That's why we work closely with our clients to understand their unique vision and goals, ensuring that every design reflects their identity and resonates with their target audience. Whether you're launching a new product or revamping your brand identity, Graphics Designing is here to elevate your visual presence and help your brand make a memorable impact .",
  },
  {
    id: 5,
    title: "Photography",
    category: "Services",
    image: "/images/photographer.jpg",
    description:
      "Think Digital's photography service captures moments with precision and creativity. Our team of skilled photographers is dedicated to showcasing your products, events, or portraits in the best light possible. We understand the power of imagery in storytelling and branding, which is why we strive to create captivating visuals that resonate with your audience. Whether it's professional shoots, product photography, or event coverage, our photographers bring a blend of technical expertise and artistic flair to every project. With an eye for detail and a passion for creativity, we ensure that each photograph tells a compelling story and evokes the desired emotions. From conceptualization to post-production, we work closely with our clients to ensure their vision is brought to life. Partner with Think Digital's photography service to elevate your visual content and leave a lasting impression on your audienceThink Digital's photography service captures moments with precision and creativity. From professional shoots to product photography.",
  },
  {
    id: 6,
    title: "Videography",
    category: "Services",
    image: "/images/videography.jpg",
    description:
      "Creating compelling visual stories is our passion. From promotional content to corporate narratives, we specialize in enhancing your brand's digital presence through the power of video. Our experienced team combines creativity with technical expertise to produce high-quality videos that captivate audiences and leave a lasting impression. Whether you're looking to showcase your products, tell your brand's story, or engage with your audience in new and exciting ways, we're here to help. With a focus on innovation and storytelling, we'll work closely with you to bring your vision to life and create videos that resonate with your target audience. Let us elevate your brand's digital presence through the art of videography.",
  },
];

// single service

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get("title");

const foundService = services.find((service) => {
  return service.title === title;
});

// console.log(foundService);

function renderService(service) {
  const serviceContainer = document.getElementById("servicesSection1");

  const serviceHtml = `
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-30 relative  ">
        <h1 class="serviceHeading mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          ${service.title}
        </h1>
        <p class="serviceDesptn mb-8 text-lg font-normal py-6 px-2  w-auto text-white bg-gradient-to-b from-black to-blue-800 lg:text-xl sm:px-16 lg:px-8">
          ${service.description}
        </p>
      </div>
      <div class="flex lg:flex-row gap-4 px-6 mb-3 items-center justify-center">
      <div class="grid md:grid-cols-2 gap-8">
      <div
        id="default-carousel"
        class="relative w-full"
        data-carousel="slide"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/new6.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/web-development.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/new.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 4 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/new4.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 5 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/new8.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 6 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/new3.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 7 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/camera.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 8 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./images/graphics.jpg"
              class="absolute block h-full w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
        >
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div
        class="bg-gradient-to-b from-black to-blue-800 border rounded-lg p-8 md:p-12"
      >
        <h2
          class="text-gray-100 dark:text-gray-100 text-3xl font-extrabold mb-2"
        >
          ${service.title}
        </h2>
        <p class="text-lg font-normal text-gray-50 mb-4">
        Think Digital your one-stop
        destination for unparalleled digital solutions. From expert content
        creation and bespoke web development to cutting-edge digital
        marketing strategies, captivating photography, dynamic videography,
        and stunning graphics design, we redefine digital excellence. Your
        journey to digital success begins with us. Let's craft your digital
        legacy together
        </p>
      </div>
    </div>
      </div>
    `;
  serviceContainer.innerHTML = serviceHtml; // Using innerHTML to set the HTML content of the serviceContainer
}

renderService(foundService);
