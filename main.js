   // Function to handle search by product name
   function handleSearch(event) {
    const query = event.target.value.toLowerCase(); // Get the search query (case-insensitive)
    const products = document.querySelectorAll('.wrapper'); // Get all product elements

    // Loop through each product
    products.forEach(product => {
      const productName = product.getAttribute('data-name').toLowerCase(); // Get the product name from data-name
      if (productName.includes(query)) {
        product.classList.remove('hidden'); // Show product if it matches the query
      } else {
        product.classList.add('hidden'); // Hide product if it doesn't match
      }
    });
  }
  function handleFilter(event) {
    const category = document.getElementById('categoryFilter').value; // Selected category filter
    const products = document.querySelectorAll('.wrapper'); // All product elements

    // Loop through each product and apply filters
    products.forEach(product => {
      const productCategory = product.getAttribute('data-category'); // Get the product category
      // Apply category filter
      const matchesCategory = (category === "" || productCategory === category);

      // If both filters match, show the product, otherwise hide it
      if (matchesCategory) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  }
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart items container
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = '';  // Clear previous cart content

    // If cart is empty
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Loop through the cart items and display them
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <div class="item-details">
                <p><strong>${item.name}</strong> (${item.category})</p>
                <p>Price: $${item.price}</p>
            </div>
            <div class="item-quantity">
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="item-price">
                <p>Total: $${item.price * item.quantity}</p>
            </div>
        `;

        cartItemsList.appendChild(cartItemDiv);
    });
}

// Checkout function (you can implement this to process the cart data)
function checkout() {
    alert("Proceeding to checkout...");
    // Redirect to a checkout page or payment gateway here if needed
}

// Call displayCart() when the page loads
window.onload = displayCart;
function addToCart(productName, productPrice, productCategory) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];  // Retrieve existing cart or create new array

    // Create product object
    const product = {
        name: productName,
        price: productPrice,
        category: productCategory,
        quantity: 1  // Initially, we set quantity to 1
    };

    // Check if the product is already in the cart
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex > -1) {
        // If product is already in the cart, increment its quantity
        cart[productIndex].quantity += 1;
    } else {
        // If product is not in the cart, add it to the cart
        cart.push(product);
    }

    // Store updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can show an alert to confirm the item is added
    alert(`${productName} has been added to the cart!`);
}
function cancelCart() {
    // Clear cart data from localStorage
    localStorage.removeItem('cart');

    // Refresh the cart display
    displayCart();

    // Optionally, show an alert
    alert("All products have been removed from the cart.");
}
window.onload = displayCart;
// Show login form when Login button is clicked
document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginContainer').style.display = 'flex'; // Show login form
}


