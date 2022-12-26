const homeCarousel = document.getElementById("carouselIndicators");

const homeCarouselTitle = document.getElementsByClassName("carouselTitle")[0];

const homeCarouselText = document.getElementsByClassName("carouselText")[0];

const title0 = "TAX CONSULTING";
const title1 = "SELF-MANAGED SUPERFUND";
const title2 = "BOOKKEEPING";
const title3 = "TAX RETURNS";

const text0 =
  "Over time your business and personal circumstances will develop and evolving tax legislation will bring new obligations. Your taxation requirements will also change. The right advice at the right time can make all the difference."
const text1 =
  "Our team of accredited SMSF Accountants specialise in automation systems, having built our own toolkit on top of the Class Super platform. This allows us to offer a service founded on unparalleled technical excellence while ensuring value in everything we do!";
const text2 =
  "Our Bookkeeping solutions are designed for small to medium sized businesses, from a cross-section of industries. We know that with the right Bookkeeping systems and support, we can get you back to focusing on what matters most to you.";
const text3 =
  "EazyChamp works hard to help everyone with their individual tax returns so that you get the best income tax return you deserve. We can get you back to focusing on what matters most to you.";

homeCarousel.addEventListener("slide.bs.carousel", (event) => {
  const currentSlide = document
    .querySelector(".carousel-indicators .active")
    .getAttribute("data-bs-slide-to");
  console.log(currentSlide);
  switch (currentSlide) {
    case "0":
      homeCarouselTitle.textContent = title0;
      homeCarouselText.innerText = text0;
      break;
    case "1":
      homeCarouselTitle.textContent = title1;
      homeCarouselText.innerText = text1;
      break;
    case "2":
      homeCarouselTitle.textContent = title2;
      homeCarouselText.innerText = text2;
      break;
    case "3":
      homeCarouselTitle.textContent = title3;
      homeCarouselText.innerText = text3;
      break;
  }
});
