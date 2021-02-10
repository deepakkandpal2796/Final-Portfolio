const btn = document.querySelectorAll(".btn-container button");
// console.log(btn.length);
const product = document.querySelectorAll(".gallery-image");

btn.forEach((item) => {
  item.addEventListener("click", function () {
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");
    }
    item.classList.add("active");

    //show products
    product.forEach((show) => {
      show.style.display = "none";
      let products = item.textContent.toLowerCase();
      if (show.getAttribute("data-att") === products || products === "all" ) {
        show.style.display = "block";
      }
    });
  });
});
