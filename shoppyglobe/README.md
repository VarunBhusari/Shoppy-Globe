### **ShoppyGlobe - React E-Commerce Application**



ShoppyGlobe is a simple, modern e-commerce web application built with React, Redux Toolkit, React Router, and Tailwind CSS using Vite for fast development.

It lets users browse products fetched from a public API, search and filter products, view product details, manage a shopping cart with add/remove and quantity controls, and includes route-based code splitting for performance.



### **Features**



Product browsing with search and filtering.



Product details with dynamic routing.



Shopping cart with add, remove, and quantity update functionalities.



Redux Toolkit for global state management.



Async data fetching with error handling using Redux Thunks.



React Router for SPA navigation including 404 page.



Lazy loading components with React.lazy and Suspense.



Responsive styling fully implemented using Tailwind CSS utilities.



### **Getting Started**



#### **Prerequisites**



Node.js (v16 or newer recommended)

npm package manager



#### **Installation**



bash

git clone https://github.com/YOUR\_GITHUB\_USERNAME/shoppyglobe.git

cd shoppyglobe

npm install



#### **Running in Development**



Start the Vite development server:

bash

npm run dev



#### **Open your browser and go to:**



http://localhost:5173



### **Project Structure**


src/
  components/
    Header.jsx
    ProductItem.jsx
  features/
    products/
      productsSlice.js
      useFetchProducts.js
      ProductList.jsx
      ProductDetail.jsx
    cart/
      cartSlice.js
      Cart.jsx
      CartItem.jsx
  pages/
    Home.jsx
    Checkout.jsx
    NotFound.jsx
  store.js
  App.jsx
  main.jsx
  index.css




### **Technologies Used**



* React



* Vite



* Redux Toolkit



* React Router



* Tailwind CSS



* Axios





