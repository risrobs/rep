import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const product = document.querySelector(".product")
  const price = document.querySelector(".price")
  console.log(price.textContent)

  product.setAttribute("data-price", price.textContent)
});