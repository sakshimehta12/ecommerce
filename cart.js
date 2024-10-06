// Example: Cart Data Structure
let cart = [
  {
    id: 1,
    name: "Product 1",
    price: 95,
    quantity: 1,
    image: "assets/images/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 120,
    quantity: 2,
    image: "assets/images/product2.jpg",
  },
];

// Function to Load Cart Items
function loadCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const totalPrice = (item.price * item.quantity).toFixed(2);

    cartItemsContainer.innerHTML += `
        <tr>
          <td>
            <img src="${item.image}" alt="${
      item.name
    }" class="img-fluid" width="70">
            <span class="ms-3">${item.name}</span>
          </td>
          <td>$${item.price.toFixed(2)}</td>
          <td>
            <input type="number" value="${
              item.quantity
            }" min="1" class="form-control quantity-input" data-index="${index}">
          </td>
          <td>$${totalPrice}</td>
          <td>
            <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button>
          </td>
        </tr>
      `;
  });

  updateCartSummary();
}

// Function to Update Cart Summary
function updateCartSummary() {
  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").innerText = `$${subtotal.toFixed(2)}`;
}

// Event Listeners for Quantity Changes and Removing Items
document.addEventListener("DOMContentLoaded", function () {
  loadCartItems();

  document.getElementById("cart-items").addEventListener("input", function (e) {
    if (e.target.classList.contains("quantity-input")) {
      const index = e.target.getAttribute("data-index");
      const newQuantity = e.target.value;
      cart[index].quantity = newQuantity ? parseInt(newQuantity) : 1;
      loadCartItems();
    }
  });

  document.getElementById("cart-items").addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      loadCartItems();
    }
  });
});

 // Scroll-to-top button visibility
 const scrollToTopBtn = document.querySelector(".scroll-to-top");
 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
     scrollToTopBtn.style.display = "block";
   } else {
     scrollToTopBtn.style.display = "none";
   }
 });

 // Smooth scroll to top
 scrollToTopBtn.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 });

 // Price range filter
 function updatePrice() {
   const priceValue = document.getElementById("priceRange").value;
   document.getElementById("priceValue").innerText = priceValue;
 }
