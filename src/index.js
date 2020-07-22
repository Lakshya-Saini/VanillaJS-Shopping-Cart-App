let preloader = document.querySelector(".preloader");
let mainContent = document.querySelector(".main-content");
let cartContent = document.querySelector(".cart-content");
let navbarBrand = document.querySelector(".navbar-brand");
let shoppingCartIcon = document.querySelector(".shopping-cart-icon");
let productCategory = document.querySelector(".product-category");
let products = document.querySelector(".products-list");
let cartItemsCount = document.querySelector(".cartItemsCount");
let showProductsInCart = document.querySelector(".cartProducts");
let noProductsInCart = document.querySelector(".noProductsInCart");
let checkoutProducts = document.querySelector(".checkoutProducts");
let itemSubtotal = document.querySelector(".itemSubtotal");
let grandTotal = document.querySelector(".grandTotal");
let savings = document.querySelector(".savings");
let promocode = document.querySelector(".promocode");
let applyPromocode = document.querySelector(".apply-promocode");
let proceedToCheckoutButton = document.querySelector(
  ".proceed-to-checkout-btn"
);
let checkoutPage = document.querySelector(".checkout-page");
let cardDetails = document.querySelector(".card-details");
let upiDetails = document.querySelector(".upi-details");
let paytmDetails = document.querySelector(".paytm-details");
let gpayDetails = document.querySelector(".gpay-details");
let card = document.querySelector("#card");
let upi = document.querySelector("#upi");
let paytm = document.querySelector("#paytm");
let gpay = document.querySelector("#gpay");
let orderSummaryDetails = document.querySelector(".order-summary-details");
let submitDetailsForm = document.querySelector("#submit-details-form");
let cardDetailsForm = document.querySelector(".card-details-form");
let upiDetailsForm = document.querySelector(".upi-details-form");
let paytmDetailsForm = document.querySelector(".paytm-details-form");
let gpayDetailsForm = document.querySelector(".gpay-details-form");

let selectedProductID = [];
let count = 0;
let listItems = ``;
let showProduct;
let cartProducts = ``;
let checkoutMenuProducts = ``;

// ---------- Count Product IDs in Local Storage ---------------- //

if (localStorage.getItem("productID")) {
  var localStorageItemsLength = localStorage.getItem("productID").split(",")
    .length;
  cartItemsCount.innerHTML = localStorageItemsLength;
}

let getID = () => {
  return Math.random().toString(36).substr(2, 10);
};

let categoryList = [
  {
    id: getID(),
    name: "All",
  },
  {
    id: getID(),
    name: "Jeans",
  },
  {
    id: getID(),
    name: "Shirts",
  },
  {
    id: getID(),
    name: "Jackets",
  },
  {
    id: getID(),
    name: "Shrugs",
  },
  {
    id: getID(),
    name: "T-Shirts",
  },
  {
    id: getID(),
    name: "Short Pants",
  },
  {
    id: getID(),
    name: "Capris",
  },
  {
    id: getID(),
    name: "Formal Pants",
  },
  {
    id: getID(),
    name: "Cargo Pants",
  },
  {
    id: getID(),
    name: "Blazers",
  },
];

let productsList = [
  {
    id: getID(),
    info: {
      type: "Generic",
      name: "Black Designer Faux Leather Biker Jacket for Man",
      img: "jacket-1.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "20",
      price: {
        prevPrice: "4599",
        newPrice: "2000",
      },
      weight: "1.5 Kg",
    },
    category: {
      id: categoryList[3].id,
      name: categoryList[3].name,
    },
    dealer: {
      id: getID(),
      name: "Lakshya Saini",
      email: "lakshya@test.com",
      phone_number: "9999999999",
      address: "ABC Street, NY, USA",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "Urbano Fashion",
      name: "Urbano Fashion Men's Black Denim Solid Casual Shirt",
      img: "shirt-1.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "100",
      price: {
        prevPrice: "700",
        newPrice: "499",
      },
      weight: "0.1 Kg",
    },
    category: {
      id: categoryList[2].id,
      name: categoryList[2].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "Urbano Fashion",
      name: "Men's Black Slim Fit Stretch Jeans for Modern Style",
      img: "jeans-1.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "40",
      price: {
        prevPrice: "2000",
        newPrice: "599",
      },
      weight: "0.4 Kg",
    },
    category: {
      id: categoryList[1].id,
      name: categoryList[1].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "PU Leather Jackets",
      name: "Men's Zipper and Full Sleeves Faux Leather Jacket",
      img: "jacket-3.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "42",
      price: {
        prevPrice: "6300",
        newPrice: "2600",
      },
      weight: "1.6 Kg",
    },
    category: {
      id: categoryList[3].id,
      name: categoryList[3].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "PickMee Cotton Tshirts",
      name: "Pikmee Cotton Tshirts | Men Half Sleeve | Casual Neck Collar",
      img: "tshirt-1.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "16",
      price: {
        prevPrice: "400",
        newPrice: "260",
      },
      weight: "0.2 Kg",
    },
    category: {
      id: categoryList[5].id,
      name: categoryList[5].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "Cotton Jackets",
      name: "Men's Zipper and Full Sleeves Cotton Jacket",
      img: "jacket-2.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "20",
      price: {
        prevPrice: "2500",
        newPrice: "800",
      },
      weight: "0.7 Kg",
    },
    category: {
      id: categoryList[3].id,
      name: categoryList[3].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "Lether Jeans",
      name: "Men's Black Hip Hop Jeans for Modern Style",
      img: "jeans-2.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "20",
      price: {
        prevPrice: "1200",
        newPrice: "650",
      },
      weight: "0.3 Kg",
    },
    category: {
      id: categoryList[1].id,
      name: categoryList[1].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
  {
    id: getID(),
    info: {
      type: "Cardigans",
      name: "Veirdo Men’s Cotton Blend Hooded Cardigan Casual wear",
      img: "shrug-1.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dicta voluptatem suscipit inventore exercitationem non, quam corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure natus ipsa id totam provident, officia voluptatem numquam nihil doloremque animi rem quia quas alias iste doloribus molestias sapiente ab.",
      qty: "20",
      price: {
        prevPrice: "600",
        newPrice: "360",
      },
      weight: "0.2 Kg",
    },
    category: {
      id: categoryList[4].id,
      name: categoryList[4].name,
    },
    dealer: {
      id: getID(),
      name: "John Doe",
      email: "johndoe@test.com",
      phone_number: "7777777777",
      address: "ABC Street, Brisbane, Australia",
      is_verified: true,
    },
    availability: "available",
    date_added: new Date(),
  },
];

let filterProducts = (type) => {
  showProduct = "";
  productsList.forEach((product) => {
    if (product.category.name === type) {
      showProduct +=
        "<div class='col-md-4'><div class='card' product-id='" +
        product.id +
        "'><div class='card-body'><img src='../dist/assets/img/" +
        product.info.img +
        "' class='card-img-top' alt='image' /><h4 class='card-title'>" +
        product.info.type +
        "</h4><h3 class='card-title'>" +
        product.info.name +
        "</h3><span class='card-text newPrice'><i class='fas fa-rupee-sign'></i>" +
        product.info.price.newPrice +
        "</span><span class='card-text prevPrice'><i class='fas fa-rupee-sign'></i>" +
        product.info.price.prevPrice +
        "</span><span class='card-text savePrice'>" +
        parseInt(
          ((product.info.price.prevPrice - product.info.price.newPrice) /
            product.info.price.prevPrice) *
            100,
          10
        ) +
        "% off" +
        "</span><button type='button' class='btn btn-secondary btn-block shadow-none addToCart'>Add to Cart</button></div></div></div>";
    } else if (type === "All") {
      showProduct +=
        "<div class='col-md-3 pl-0'><div class='card' product-id='" +
        product.id +
        "'><div class='card-body'><img src='../dist/assets/img/" +
        product.info.img +
        "' class='card-img-top' alt='image' /><h4 class='card-title'>" +
        product.info.type +
        "</h4><h3 class='card-title'>" +
        product.info.name +
        "</h3><span class='card-text newPrice'><i class='fas fa-rupee-sign'></i>" +
        product.info.price.newPrice +
        "</span><span class='card-text prevPrice'><i class='fas fa-rupee-sign'></i>" +
        product.info.price.prevPrice +
        "</span><span class='card-text savePrice'>" +
        parseInt(
          ((product.info.price.prevPrice - product.info.price.newPrice) /
            product.info.price.prevPrice) *
            100,
          10
        ) +
        "% off" +
        "</span><button type='button' class='btn btn-secondary btn-block shadow-none addToCart'>Add to Cart</button></div></div></div>";
    }
  });

  if (showProduct === "") {
    return "<p class='p-4 mx-auto'>No Product(s)</p>";
  }

  return showProduct;
};

let removeActiveClass = (parent, selectedChild) => {
  let children = Array.from(parent.children);
  for (let i = 0; i < children.length; i++) {
    if (
      children[i] !== selectedChild &&
      children[i].classList.contains("active")
    ) {
      children[i].classList.remove("active");
    }
  }
};

// -------------- Content Visibility ------------- //

let viewContent = (element, visibility) => {
  element.style.display = visibility;
};

// By default hide preloader
viewContent(preloader, "none");

// By default show main content and hide cart, checkout page content
viewContent(mainContent, "block");
viewContent(cartContent, "none");
viewContent(checkoutPage, "none");

// listen for click event on shopping cart icon
shoppingCartIcon.addEventListener("click", (e) => {
  viewContent(cartContent, "block");
  viewContent(mainContent, "none");
  viewContent(checkoutPage, "none");
});

// listen for click event on navbar brand
navbarBrand.addEventListener("click", (e) => {
  viewContent(cartContent, "none");
  viewContent(mainContent, "block");
  viewContent(checkoutPage, "none");
});

// Hide No Products in Cart Message
viewContent(noProductsInCart, "block");
viewContent(showProductsInCart, "none");
viewContent(checkoutProducts, "none");

// Initially Hide Card, UPI, Paytm, GPay Details Block
viewContent(cardDetails, "block");
viewContent(upiDetails, "none");
viewContent(paytmDetails, "none");
viewContent(gpayDetails, "none");

// ------------- If Page is refreshed then delete local storage ------------------ //

if (window.performance.navigation.type === 1) {
  localStorage.removeItem("productID");

  database
    .collection("cartProducts")
    .get()
    .then((res) => {
      res.forEach((element) => {
        element.ref.delete();
      });
    });

  database
    .collection("checkout")
    .get()
    .then((res) => {
      res.forEach((element) => {
        element.ref.delete();
      });
    });
}

// ---------- Category List ---------------- //
categoryList.forEach((category) => {
  listItems += `<li category-id=${category.id} class="list-group-item">${category.name}</li>`;
});

// Initially show all products
products.innerHTML = filterProducts("All");

// listen for a click event on Add to Cart button
products.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let newProduct = {
      productID: e.target.parentElement.parentElement.getAttribute(
        "product-id"
      ),
    };
    selectedProductID.push(
      e.target.parentElement.parentElement.getAttribute("product-id")
    );
    localStorage.setItem("productID", selectedProductID);
    addProductToCart(newProduct);

    e.target.innerHTML = "<i class='fas fa-check'></i> Added to Cart";
    e.target.setAttribute("disabled", true);
    e.target.classList.add("addedToCart");

    cartItemsCount.innerHTML = count += 1;
  }
});

// -------------- Cart Products --------------- //

// get productID of a product when added to cart
database.collection("cartProducts").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      getProductID(doc.data());
    }
  });
});

// add productID in db
let addProductToCart = (productID) => {
  database
    .collection("cartProducts")
    .add(productID)
    .then(() => console.log("Product added to cart"));
};

// get each productID in db and show product in cart
let getProductID = (data) => {
  productsList.forEach((product) => {
    if (data.productID === product.id) {
      cartProducts += `
      <div class="product" data-id=${product.id}>
        <div class="row mx-0">
          <div class="col-md-1">
            <img
              src="../dist//assets/img/${product.info.img}"
              alt="image"
            />
          </div>
          <div class="col-md-4">
            <h5>
              ${product.info.name}
            </h5>
            <p>${product.availability}</p>
          </div>
          <div class="col-md-2">
            <h5 class="initial-price">
              <i class="fas fa-rupee-sign"></i> <span>${product.info.price.newPrice}</span>
            </h5>
          </div>
          <div class="col-md-2">
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  class="btn shadow-none button-addon2"
                  type="button"
                >
                  <i class="fa fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                name="qty"
                class="form-control shadow-none qty"
                value="1"
                disabled
              />
              <div class="input-group-append">
                <button
                  class="btn shadow-none button-addon1"
                  type="button"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <h5 class="total-amount">
              <i class="fas fa-rupee-sign"></i> <span>${product.info.price.newPrice}</span>
            </h5>
          </div>
          <div class="col-md-1">
            <button class="delete-btn shadow-none" data-id=${product.id}><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
      `;
    }
  });

  showProductsInCart.innerHTML = cartProducts;
};

// Update Product Qty Value
let changeProductCartQty = (prevQty, operation) => {
  if (prevQty === 1 && operation === "decrement") {
    return prevQty;
  }

  let value = operation === "increment" ? (prevQty += 1) : (prevQty -= 1);
  return value;
};

// Update Qty Text in DOM
let updateQtyTextInput = (qty, updatedQty) => {
  qty.setAttribute("value", updatedQty);
};

// Update Total Amount in DOM
let updateTotalAmount = (qty, price, total) => {
  total.textContent = qty * price;
};

// Delete Product from LocalStorage
let deleteProductFromLocalStorage = (product) => {
  let productID = product.getAttribute("data-id");
  let productIDInLocalStorage = localStorage.getItem("productID").split(",");

  let newProductID = productIDInLocalStorage.filter((id) => id !== productID);

  cartItemsCount.innerHTML = newProductID.length;

  if (newProductID.length > 0)
    localStorage.setItem("productID", newProductID.join(","));
  else {
    localStorage.removeItem("productID");
    viewContent(noProductsInCart, "block");
    viewContent(showProductsInCart, "none");
    viewContent(checkoutProducts, "none");
  }
};

// Delete Product from UI
let deleteProductFromUI = (product) => {
  product.parentElement.parentElement.parentElement.remove();
};

// Calculate Grand Total of all products added in cart
let getProductTotalTextValue = (product) => {
  return parseInt(
    Array.from(
      Array.from(
        Array.from(Array.from(product.children)[0].children)[4].children
      )[0].children
    )[1].textContent
  );
};

// Set Value of Item Subtotal in Cart
let setSubTotalTextValue = (element, total) => {
  element.textContent = total;
};

// Set Value of Grand Total in Cart
let setGrandTotalTextValue = (element, total) => {
  element.textContent = total;
};

// Check if cart is empty or not
database.collection("cartProducts").onSnapshot((snapshot) => {
  if (snapshot.size > 0) {
    viewContent(noProductsInCart, "none");
    viewContent(showProductsInCart, "block");
    viewContent(checkoutProducts, "block");

    let product = document.querySelectorAll(".product");
    let subTotalTextValue = 0;
    let totalAmountText;

    if (product) {
      product.forEach((p) => {
        let productTotalTextValue = getProductTotalTextValue(p);
        subTotalTextValue += productTotalTextValue;

        p.addEventListener("click", (e) => {
          if (e.target.tagName === "I") {
            let incrButton = e.target.parentElement.classList.contains(
              "button-addon1"
            );
            let decButton = e.target.parentElement.classList.contains(
              "button-addon2"
            );
            let deleteProduct = e.target.parentElement.classList.contains(
              "delete-btn"
            );

            if (incrButton) {
              let qty =
                e.target.parentElement.parentElement.previousElementSibling;
              let initialPrice = Array.from(
                Array.from(
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.previousElementSibling.children
                )[0].children
              )[1];
              totalAmountText = Array.from(
                Array.from(
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.nextElementSibling.children
                )[0].children
              )[1];

              let newValue = changeProductCartQty(
                parseInt(qty.getAttribute("value")),
                "increment"
              );
              updateQtyTextInput(qty, newValue);
              updateTotalAmount(
                newValue,
                parseInt(initialPrice.textContent),
                totalAmountText
              );
              subTotalTextValue += parseInt(initialPrice.textContent);
              setSubTotalTextValue(itemSubtotal, subTotalTextValue);
              setGrandTotalTextValue(grandTotal, subTotalTextValue);
            }

            if (decButton) {
              let qty = e.target.parentElement.parentElement.nextElementSibling;
              if (parseInt(qty.getAttribute("value")) === 1) {
                e.target.parentElement.setAttribute("disabled", true);
                return;
              } else {
                e.target.parentElement.removeAttribute("disabled");
                let initialPrice = Array.from(
                  Array.from(
                    e.target.parentElement.parentElement.parentElement
                      .parentElement.previousElementSibling.children
                  )[0].children
                )[1];
                totalAmountText = Array.from(
                  Array.from(
                    e.target.parentElement.parentElement.parentElement
                      .parentElement.nextElementSibling.children
                  )[0].children
                )[1];

                let newValue = changeProductCartQty(
                  parseInt(qty.getAttribute("value")),
                  "decrement"
                );
                updateQtyTextInput(qty, newValue);
                updateTotalAmount(
                  newValue,
                  parseInt(initialPrice.textContent),
                  totalAmountText
                );
                subTotalTextValue -= parseInt(initialPrice.textContent);
                setSubTotalTextValue(itemSubtotal, subTotalTextValue);
                setGrandTotalTextValue(grandTotal, subTotalTextValue);
              }
            }

            if (deleteProduct) {
              deleteProductFromLocalStorage(e.target.parentElement);
              deleteProductFromUI(e.target.parentElement);

              subTotalTextValue -= parseInt(totalAmountText.textContent);
              setSubTotalTextValue(itemSubtotal, subTotalTextValue);
              setGrandTotalTextValue(grandTotal, subTotalTextValue);
            }
          }
        });
      });

      setSubTotalTextValue(itemSubtotal, subTotalTextValue);
      setGrandTotalTextValue(grandTotal, subTotalTextValue);
    }
  } else {
    viewContent(noProductsInCart, "block");
    viewContent(showProductsInCart, "none");
  }
});

// Set Value of savings in cart
let setSavings = (element, value) => {
  let savings = parseInt(itemSubtotal.textContent * (value / 100));
  element.textContent = savings;
  return savings;
};

// Add Product to Checkout
let addProductToCheckout = (product) => {
  database
    .collection("checkout")
    .add(product)
    .then(() => console.log("Product added to cart"));
};

// Check and apply Promocode
applyPromocode.addEventListener("click", (e) => {
  if (promocode.value === "") return alert("Please enter your promocode");
  if (parseInt(savings.textContent) !== 0) {
    alert("Promocode already applied");
    promocode.value = "";
    return;
  }
  if (promocode.value === "NEWPROMO" || promocode.value === "newpromo") {
    let savingsValue = setSavings(savings, 10);
    setGrandTotalTextValue(
      grandTotal,
      parseInt(grandTotal.textContent - savingsValue)
    );
    promocode.value = "";
  }
});

// Proceed to Checkout Page
proceedToCheckoutButton.addEventListener("click", (e) => {
  var productsSubTotal = itemSubtotal.textContent;
  var productsSavings = savings.textContent;

  Array.from(showProductsInCart.children).forEach((product) => {
    var productID = product.getAttribute("data-id");
    var productQTY = Array.from(
      Array.from(
        Array.from(Array.from(product.children)[0].children)[3].children
      )[0].children
    )[1].value;
    var productTotalPrice = Array.from(
      Array.from(
        Array.from(Array.from(product.children)[0].children)[4].children
      )[0].children
    )[1].textContent;

    new_product = {
      productID,
      productQTY,
      productTotalPrice,
      productsSubTotal,
      productsSavings,
    };

    addProductToCheckout(new_product);
  });

  viewContent(mainContent, "none");
  viewContent(cartContent, "none");
  viewContent(checkoutPage, "block");
});

// ---------- Checkout Page ---------------- //

let resetForm = (form) => {
  form.reset();
};

// On click of payment button show their resp blocks
card.addEventListener("click", (e) => {
  viewContent(cardDetails, "block");
  viewContent(upiDetails, "none");
  viewContent(paytmDetails, "none");
  viewContent(gpayDetails, "none");

  resetForm(upiDetailsForm);
  resetForm(paytmDetailsForm);
  resetForm(gpayDetailsForm);
});

upi.addEventListener("click", (e) => {
  viewContent(cardDetails, "none");
  viewContent(upiDetails, "block");
  viewContent(paytmDetails, "none");
  viewContent(gpayDetails, "none");

  resetForm(cardDetailsForm);
  resetForm(paytmDetailsForm);
  resetForm(gpayDetailsForm);
});

paytm.addEventListener("click", (e) => {
  viewContent(cardDetails, "none");
  viewContent(upiDetails, "none");
  viewContent(paytmDetails, "block");
  viewContent(gpayDetails, "none");

  resetForm(upiDetailsForm);
  resetForm(cardDetailsForm);
  resetForm(gpayDetailsForm);
});

gpay.addEventListener("click", (e) => {
  viewContent(cardDetails, "none");
  viewContent(upiDetails, "none");
  viewContent(paytmDetails, "none");
  viewContent(gpayDetails, "block");

  resetForm(upiDetailsForm);
  resetForm(paytmDetailsForm);
  resetForm(cardDetailsForm);
});

// get product when added to checkout menu
database.collection("checkout").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      let allProducts = getProduct(doc.data());
      displayProductsInCheckout(allProducts, doc.data());
    }
  });
});

// get each product in db
let getProduct = (data) => {
  productsList.forEach((product) => {
    if (data.productID === product.id) {
      checkoutMenuProducts += `
      <div class="product">
        <div class="row mx-0">
          <div class="col-md-2">
            <img
              src="../dist//assets/img/${product.info.img}"
              alt="image"
            />
          </div>
          <div class="col-md-3">
            <h5>
              ${product.info.name.substr(0, 30) + "..."}
            </h5>
          </div>
          <div class="col-md-2">
            <h5 class="initial-price">
              <i class="fas fa-rupee-sign"></i> <span>${
                product.info.price.newPrice
              }</span>
            </h5>
          </div>
          <div class="col-md-2">
            <h5 class="qty">
              <span>${data.productQTY}</span>
            </h5>
          </div>
          <div class="col-md-2">
            <h5 class="total-amount">
              <i class="fas fa-rupee-sign"></i> <span>${
                data.productTotalPrice
              }</span>
            </h5>
          </div>
        </div>
      </div>
      `;
    }
  });

  return checkoutMenuProducts;
};

// show product in checkout
let displayProductsInCheckout = (products, data) => {
  products += `
  <div class="total-cost-details">
    <div class="row mx-0">
      <div class="col-md-6 pl-0">
        <h5>Subtotal</h5>
      </div>
      <div class="col-md-6 pr-0">
        <h5 class="checkout-subtotal">${data.productsSubTotal}</h5>
      </div>
    </div>
    <div class="row mx-0">
      <div class="col-md-6 pl-0">
        <h5>Savings</h5>
      </div>
      <div class="col-md-6 pr-0">
        <h5 class="checkout-savings">${data.productsSavings}</h5>
      </div>
    </div>
    <div class="row mx-0">
      <div class="col-md-6 pl-0">
        <h5>Shipping Charge</h5>
      </div>
      <div class="col-md-6 pr-0">
        <h5 class="checkout-shipping-charge">40</h5>
      </div>
    </div>
    <div class="row mx-0">
      <div class="col-md-6 pl-0">
        <h5>Tax</h5>
      </div>
      <div class="col-md-6 pr-0">
        <h5 class="checkout-tax">${parseInt(data.productsSubTotal * 0.18)}</h5>
      </div>
    </div>
    <hr />
    <div class="row mx-0">
      <div class="col-md-6 pl-0">
        <h4>Total</h4>
      </div>
      <div class="col-md-6 pr-0">
        <h4 class="checkout-grandTotal">${
          parseInt(data.productsSubTotal) +
          parseInt(data.productsSubTotal * 0.18) +
          40
        }</h4>
      </div>
    </div>
  </div>
  `;

  orderSummaryDetails.innerHTML = products;
};

// Set Value Attribute In submit details form
let setAttributeInSubmitDetailsForm = (element, value) => {
  element.setAttribute("value", value);
};

// Set Disabled to True In submit details form
let disableInputsInSubmitDetailsForm = (element) => {
  element.setAttribute("disabled", true);
  element.style.backgroundColor = "#eee";
};

// submit details of user in checkout page
submitDetailsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let {
    fullName,
    email,
    phoneNumber,
    address,
    city,
    pinCode,
    country,
  } = e.target;

  let regExp = "";

  if (
    fullName.value === "" ||
    email.value === "" ||
    address.value === "" ||
    city.value === "" ||
    pinCode.value === "" ||
    country.value === ""
  ) {
    return alert("All fields are required");
  }

  regExp = /^[a-zA-Z0-9]{3,}$/;
  if (!regExp.test(fullName.value)) {
    return alert("Name must be atleast 3 characters long");
  }

  regExp = /^[a-z0-9_\.]{1,}[@]{1}[a-z]{1,12}[\.]{1}[a-z]{1,10}$/;
  if (!regExp.test(email.value)) {
    alert("Incorrect Email");
  }

  if (phoneNumber.value) {
    if (phoneNumber.value.length !== 10) {
      return alert("Invalid Phone Number");
    }
  }

  if (pinCode.value) {
    if (pinCode.value.length !== 6) {
      return alert("Invalid Pin Code");
    }
  }

  setAttributeInSubmitDetailsForm(fullName, fullName.value);
  setAttributeInSubmitDetailsForm(email, email.value);
  setAttributeInSubmitDetailsForm(phoneNumber, phoneNumber.value);
  setAttributeInSubmitDetailsForm(address, fullName.value);
  setAttributeInSubmitDetailsForm(city, city.value);
  setAttributeInSubmitDetailsForm(pinCode, pinCode.value);
  setAttributeInSubmitDetailsForm(country, country.value);

  disableInputsInSubmitDetailsForm(fullName);
  disableInputsInSubmitDetailsForm(email);
  disableInputsInSubmitDetailsForm(phoneNumber);
  disableInputsInSubmitDetailsForm(address);
  disableInputsInSubmitDetailsForm(city);
  disableInputsInSubmitDetailsForm(pinCode);
  disableInputsInSubmitDetailsForm(country);

  e.target[7].style.display = "none";

  alert("Details Submitted");
});

// Card Number Validation
cardDetailsForm.cardNumber.addEventListener("keydown", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

// Card Expiry Date Validation
cardDetailsForm.expiryDate.addEventListener("keydown", (e) => {
  e.target.value = e.target.value
    .replace(
      /[^0-9$]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      "0$1 / $2" // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      "0" // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      "$1 / $2" // To handle 113 > 11/3
    );
});

cardDetailsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let { nameOnCard, cardNumber, expiryDate, cvv } = e.target;
  let regExp = "";

  if (
    nameOnCard.value === "" ||
    cardNumber.value === "" ||
    expiryDate.value === "" ||
    cvv.value === ""
  ) {
    return alert("All card details are required");
  }

  regExp = /^[a-zA-Z0-9]{3,}$/;
  if (!regExp.test(nameOnCard.value)) {
    return alert("Invalid Name");
  }

  regExp = /^[0-9\s]{19}$/;
  if (!regExp.test(cardNumber.value)) {
    return alert("Invalid Card Number");
  }

  regExp = /^[0-9]{3}$/;
  if (!regExp.test(cvv.value)) {
    return alert("Invalid CVV");
  }

  viewContent(preloader, "flex");

  setTimeout(() => {
    viewContent(preloader, "none");
    alert("Payment Successfull");
    location.reload();
  }, 3000);
});
