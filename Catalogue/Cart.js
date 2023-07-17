//add items to cart
function addToCart() {
  // Get the selected radio button element
  const selectedRadioBtn = document.querySelector(
    'input[name="cake-size"]:checked'
  );

  // Get the selected radio button value, price, quantity (set to 1 for now), and total price
  const selectedValue = selectedRadioBtn.value;
  const selectedPrice = parseInt(selectedRadioBtn.dataset.price);
  const quantity = 1;
  const totalPrice = quantity * selectedPrice;

  // Create an object containing the selected radio button value, quantity, price, and total price
  const cartItem = {
    name: selectedValue,
    quantity,
    price: selectedPrice,
    totalPrice,
  };

  // Retrieve the cart from local storage or session storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new cart item to the cart array
  cart.push(cartItem);

  // Store the updated cart array in local storage or session storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect the user to the cart page
  window.location.href =
    "http://localhost:80/IWP%20Project/Catalogue/Cart.html";
}

//display items in cart
const cartTable = document.getElementById("cart-table");

// function displayCart() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cartTable.innerHTML = `
//     <tr>
//       <th>Product Name</th>
//       <th>Quantity</th>
//       <th>Price</th>
//       <th>Total Price</th>
//       <th>Action</th>
//     </tr>
//   `;

//   let totalPrice = 0;

//   cart.forEach((item, index) => {
//     const itemTotalPrice = item.quantity * item.price;
//     cartTable.innerHTML += `
//       <tr>
//         <td>${item.name}</td>
//         <td>${item.quantity}</td>
//         <td>₹${item.price}</td>
//         <td>₹${itemTotalPrice}</td>
//         <td><button class="delete-btn" data-index="${index}" style="background-color:
//         #924936; color: #fff;">Delete</button></td>
//       </tr>
//     `;

//     totalPrice += itemTotalPrice;
//   });

//   cartTable.innerHTML += `
//     <tr>
//       <td colspan="3"></td>
//       <td><strong>Total Price: ₹${totalPrice}</strong></td>
//       <td></td>
//     </tr>
//   `;

//   // Add event listeners to the delete buttons
//   const deleteBtns = document.querySelectorAll(".delete-btn");
//   deleteBtns.forEach((deleteBtn) => {
//     deleteBtn.addEventListener("click", () => {
//       const index = deleteBtn.dataset.index;
//       cart.splice(index, 1);
//       localStorage.setItem("cart", JSON.stringify(cart));
//       displayCart();
//     });
//   });
// }
// displayCart();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartTable.innerHTML = `
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total Price</th>
      <th>Action</th>
    </tr>
  `;

  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemTotalPrice = item.quantity * item.price;
    cartTable.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>₹${item.price}</td>
        <td>₹${itemTotalPrice}</td>
        <td><button class="delete-btn" data-index="${index}" style="background-color:
        #924936; color: #fff;">Delete</button></td>
      </tr>
    `;

    totalPrice += itemTotalPrice;
  });

  cartTable.innerHTML += `
    <tr>
      <td colspan="3"></td>
      <td><strong>Total Price: ₹${totalPrice}</strong></td>
      <td></td>
    </tr>
  `;

  // Add event listeners to the delete buttons
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const index = deleteBtn.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });
  });

  // Return the total price
  return totalPrice;
}
displayCart();

const totalCost = displayCart(); // Get the total price from the cart

sessionStorage.setItem("totalCost", totalCost); // Store the total price in session storage
