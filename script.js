const products = [
  { id: 1, name: "Men Hoodie", category: "men", price: 1499, image: "images/hoodie.jpg" },
  { id: 2, name: "Women Dress", category: "women", price: 1999, image: "images/dress.jpg" },
  { id: 3, name: "Men T-Shirt", category: "men", price: 799, image: "images/tshirt.jpg" },
  { id: 4, name: "Women Top", category: "women", price: 999, image: "images/top.jpg" }
];


let cart = [];

// Display products
function displayProducts(filteredProducts) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  filteredProducts.forEach(product => {
   productContainer.innerHTML += `
  <div class="card">
    <img src="${product.image}" width="100%">
    <h4>${product.name}</h4>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  </div>
`;
  });
}

// Filter function
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });
}

// Buy all → WhatsApp
function buyAll() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const phoneNumber = "919502101483"; // replace with your number

  let message = "Hi, I want to order:\n";

  cart.forEach(item => {
    message += `${item.name} - ₹${item.price}\n`;
  });

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

// Initial load
displayProducts(products);
