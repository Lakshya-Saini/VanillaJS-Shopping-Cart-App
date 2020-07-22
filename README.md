# Single Page Shopping Cart App in VanillaJs.

## Working

1. Add product to cart from a list of featured products.
2. Manage products in cart and increase/decrease qty of any product. Add a coupon if you want.
3. Checkout products and add your details for shipping.
4. For Payment methods you can pay with credit/debit card, upi, paytm or google pay.
5. After successfull payment you can continue shopping.

## How to use

1. Clone this repository or simply download all files.

```
git clone https://github.com/Lakshya-Saini/VanillaJS_Shopping_Cart.git
```

2. Install dependencies

```
npm i
```

3. Open dist/assets/js/firebase.js and add your firebase configurations

```
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

4. Open your terminal and run this cmd: (optional)

```
npm run build
```

5. Now you are done with everything. Simply run index.html located in dist directory.
