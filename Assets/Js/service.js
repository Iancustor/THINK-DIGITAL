const services = [
  {
    id: 4,
    title: "Content Creation",
    category: "Services",
    image: "./Images/content.jpg",
    description:
      "The best Fresh finds and great deals Exploring the aisles of deliciousness in AT Store Groceries. Stock Yours Now. Content creation is an artful process of crafting compelling and engaging material tailored to captivate audiences across various platforms. It involves brainstorming innovative ideas, meticulous research, and creative execution to deliver impactful messages. From creating informative blog posts to producing visually stunning videos, content creation encompasses a wide array of mediums. Businesses leverage content creation to establish their online presence, engage with their target audience, and ultimately drive conversions. With the ever-evolving digital landscape, quality content has become indispensable for brands aiming to stand out amidst the sea of information. Whether it's crafting persuasive copy, designing eye-catching graphics, or curating engaging social media posts, effective content creation is essential for building brand awareness and fostering meaningful connections with customers. Embrace the power of content creation to amplify your brand's voice and leave a lasting impression in the digital realm.",
  },
  {
    id: 1,
    title: "Digital Marketing",
    category: "Services",
    image: "./Images/digital-marketing.jpg",
    description:
      "Our digital marketing services are designed to help your brand stand out in the crowded digital landscape. In today's fast-paced world, establishing a strong online presence is crucial for businesses to reach their target audience effectively. With our comprehensive digital marketing strategies, we aim to elevate your brand visibility, drive traffic to your website, and ultimately boost your sales and conversions. From search engine optimization (SEO) to social media marketing, we employ a multi-faceted approach to maximize your online reach and engagement. Our team of experienced digital marketers specializes in crafting tailored campaigns that resonate with your target demographic, ensuring that your brand message cuts through the noise of the digital world. Whether you're a startup looking to gain traction or an established business seeking to expand your online footprint, our digital marketing services are tailored to suit your unique needs and goals. Let us partner with you on your digital journey and unlock the full potential of your brand in the digital sphere..",
  },
  {
    id: 2,
    title: "Web Designing",
    category: "Services",
    image: "./Images/web-development.jpg",
    description:
      "Think Digital excels in creative, responsive web design. Our skilled team crafts tailored solutions prioritizing client goals. Proven excellence in delivering visually stunning and user-friendly websites sets us apart. We understand that a website serves as the digital storefront for your business, making a lasting impression on visitors. That's why we meticulously design every aspect of your site, from layout and navigation to aesthetics and functionality, ensuring a seamless user experience across all devices. Our approach blends artistic flair with technical expertise to create websites that not only look captivating but also drive engagement and conversions. Whether you're launching a new brand or revamping an existing website, our team collaborates closely with you to bring your vision to life. With a focus on innovation and attention to detail, we strive to exceed your expectations and deliver results that elevate your online presence. Partner with Think Digital for web design solutions that reflect your brand's identity and leave a lasting impact on your audience.",
  },
  {
    id: 3,
    title: "Graphics Designing",
    category: "Services",
    image: "./Images/graphics.jpg",
    description:
      "Think Digital's graphic design service, Graphics Designing, offers visually compelling solutions tailored to your brand's needs. Our team of creative experts specializes in transforming concepts into captivating visuals that leave a lasting impression. With a keen eye for detail and a deep understanding of design principles, we craft graphics that not only stand out but also effectively convey your message. From logo design and branding to marketing collateral and digital assets, Graphics Designing covers a wide range of design needs. We believe that great design is not just about aesthetics; it's about effectively communicating your brand story and values. That's why we work closely with our clients to understand their unique vision and goals, ensuring that every design reflects their identity and resonates with their target audience. Whether you're launching a new product or revamping your brand identity, Graphics Designing is here to elevate your visual presence and help your brand make a memorable impact .",
  },
  {
    id: 5,
    title: "Photography",
    category: "Services",
    image: "./Images/photographer.jpg",
    description:
      "Think Digital's photography service captures moments with precision and creativity. Our team of skilled photographers is dedicated to showcasing your products, events, or portraits in the best light possible. We understand the power of imagery in storytelling and branding, which is why we strive to create captivating visuals that resonate with your audience. Whether it's professional shoots, product photography, or event coverage, our photographers bring a blend of technical expertise and artistic flair to every project. With an eye for detail and a passion for creativity, we ensure that each photograph tells a compelling story and evokes the desired emotions. From conceptualization to post-production, we work closely with our clients to ensure their vision is brought to life. Partner with Think Digital's photography service to elevate your visual content and leave a lasting impression on your audienceThink Digital's photography service captures moments with precision and creativity. From professional shoots to product photography.",
  },
  {
    id: 6,
    title: "Videography",
    category: "Services",
    image: "./Images/videography.jpg",
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
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-30 relative">
        <h1 class="serviceHeading mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          ${service.title}
        </h1>
        <p class="serviceDesptn mb-8 text-lg font-normal text-black w-auto lg:text-xl sm:px-16 lg:px-8">
          ${service.description}
        </p>
      </div>
      <div class="flex lg:flex-row gap-4 mb-3 items-center justify-center">
        <div class="object-contain">
          <img src="${service.image}" alt="${service.title}" class="image h-96 w-96 lg:max-w-full lg:w-[50rem] rounded-sm" />
        </div>
      </div>
    `;
  serviceContainer.innerHTML = serviceHtml; // Using innerHTML to set the HTML content of the serviceContainer
}

renderService(foundService);
