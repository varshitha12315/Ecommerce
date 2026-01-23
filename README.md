# ShopHub - Professional E-Commerce Website

A complete, modern, and fully functional e-commerce website built with pure HTML, CSS, and Vanilla JavaScript. This project is portfolio-ready and demonstrates professional front-end development skills.

## 🚀 Features

- **Home Page** with hero section, featured products, and category navigation
- **Products Page** with grid layout, filtering, and search functionality
- **Product Details Page** with detailed information and quantity selector
- **Shopping Cart** with add/remove items, quantity management, and price calculation
- **LocalStorage Integration** for persistent cart data
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Modern UI/UX** with smooth animations and hover effects
- **Search Functionality** to find products quickly
- **Category Filtering** for easy product browsing

## 📁 Project Structure

```
ecommerce-website/
│── index.html          # Main HTML file with all pages
│── css/
│   └── style.css      # Complete styling with modern design
│── js/
│   └── script.js      # All functionality and product data
│── README.md          # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **Vanilla JavaScript** - No frameworks or libraries
- **LocalStorage API** - Cart persistence

## 📦 Product Categories

- **Electronics** - Headphones, Smartwatches, Fitness Trackers
- **Clothing** - Hoodies, T-Shirts, Denim Jackets
- **Footwear** - Running Shoes, Sneakers
- **Accessories** - Backpacks, Wallets

## 🎨 Design Features

- Modern color palette with CSS variables
- Smooth hover effects and transitions
- Card-based layout with shadows
- Responsive grid system
- Clean typography
- Professional animations

## 🚀 How to Run

1. **Clone or download** this project to your local machine

2. **Open the project folder** in your file explorer

3. **Open `index.html`** in your web browser:
   - Double-click the file, or
   - Right-click → Open with → Your preferred browser

4. **That's it!** The website is fully functional and ready to use.

## 💡 Usage

### Navigation
- Click on **Home**, **Products**, or **Cart** in the navigation bar
- Use the search bar to find specific products
- Click on category cards to filter products

### Shopping
- Browse products on the Products page
- Click on any product card to view details
- Use the quantity selector to choose how many items to add
- Click **Add to Cart** to add products to your cart
- View your cart by clicking the **Cart** link in the navigation

### Cart Management
- Increase or decrease item quantities
- Remove items from the cart
- View order summary with subtotal, tax, and shipping
- Proceed to checkout (demo functionality)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px and above)
- **Tablet** (768px - 1199px)
- **Mobile** (below 768px)

## 🎯 Key Functionality

- ✅ Dynamic product rendering
- ✅ Add to cart with quantity
- ✅ Remove from cart
- ✅ Update cart quantities
- ✅ Price calculation (subtotal, tax, shipping)
- ✅ LocalStorage persistence
- ✅ Search functionality
- ✅ Category filtering
- ✅ Product details view
- ✅ Responsive navigation

## 📝 Notes

- Product images are loaded from Unsplash (free stock photos)
- Cart data persists in browser LocalStorage
- This is a front-end only demo (no backend integration)
- Checkout functionality shows an alert (can be extended with payment integration)

## 🔧 Customization

### Adding Products
Edit the `products` array in `js/script.js`:

```javascript
{
    id: 13,
    name: "Your Product Name",
    image: "https://your-image-url.com/image.jpg",
    price: 99.99,
    description: "Product description here",
    category: "electronics", // or "clothing", "footwear", "accessories"
    rating: 4.5
}
```

### Changing Colors
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

## 📄 License

This project is open source and available for portfolio use.

## 👨‍💻 Developer

Built with ❤️ for front-end developers looking to showcase their skills.

---

**Note:** This is a complete, production-ready front-end e-commerce website suitable for portfolios and demonstrations.







