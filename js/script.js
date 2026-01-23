// ============================================
// PRODUCT DATA ARRAY
// ============================================
const products = [
    {
        id: 1,
        name: "Nike Air Max Running Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
        price: 129.99,
        description: "Premium running shoes with advanced cushioning technology. Perfect for daily runs and workouts. Features breathable mesh upper and durable rubber outsole.",
        category: "footwear",
        rating: 4.5
    },
    {
        id: 2,
        name: "Sony WH-1000XM4 Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
        price: 349.99,
        description: "Industry-leading noise cancellation with premium sound quality. 30-hour battery life and quick charge. Comfortable over-ear design for extended listening sessions.",
        category: "electronics",
        rating: 4.8
    },
    {
        id: 3,
        name: "Apple Watch Series 9",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
        price: 399.99,
        description: "Latest smartwatch with advanced health monitoring features. GPS, heart rate sensor, and water resistance. Perfect for fitness enthusiasts and daily use.",
        category: "electronics",
        rating: 4.7
    },
    {
        id: 4,
        name: "Premium Backpack",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
        price: 79.99,
        description: "Durable and stylish backpack with multiple compartments. Water-resistant material and padded laptop sleeve. Ideal for work, travel, and daily commute.",
        category: "accessories",
        rating: 4.6
    },
    {
        id: 5,
        name: "Cotton Hoodie",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
        price: 49.99,
        description: "Comfortable and cozy hoodie made from premium cotton. Perfect for casual wear and layering. Available in multiple colors with adjustable drawstring hood.",
        category: "clothing",
        rating: 4.4
    },
    {
        id: 6,
        name: "Adidas Ultraboost Sneakers",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop",
        price: 179.99,
        description: "High-performance sneakers with Boost midsole technology. Responsive cushioning and energy return. Perfect for running and athletic activities.",
        category: "footwear",
        rating: 4.7
    },
    {
        id: 7,
        name: "Wireless Earbuds Pro",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=800&fit=crop",
        price: 199.99,
        description: "Premium wireless earbuds with active noise cancellation. Crystal clear sound quality and long battery life. Comfortable fit with multiple ear tip sizes.",
        category: "electronics",
        rating: 4.5
    },
    {
        id: 8,
        name: "Leather Wallet",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
        price: 39.99,
        description: "Genuine leather wallet with RFID blocking technology. Multiple card slots and cash compartment. Slim design that fits comfortably in your pocket.",
        category: "accessories",
        rating: 4.3
    },
    {
        id: 9,
        name: "Classic T-Shirt",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
        price: 24.99,
        description: "Soft and comfortable cotton t-shirt. Classic fit with modern style. Perfect for everyday wear. Available in various colors and sizes.",
        category: "clothing",
        rating: 4.2
    },
    {
        id: 10,
        name: "Canvas Sneakers",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop",
        price: 59.99,
        description: "Versatile canvas sneakers perfect for casual wear. Comfortable and lightweight design. Durable construction with classic style that never goes out of fashion.",
        category: "footwear",
        rating: 4.4
    },
    {
        id: 11,
        name: "Smart Fitness Tracker",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
        price: 89.99,
        description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and activity tracking. Water-resistant design with 7-day battery life.",
        category: "electronics",
        rating: 4.5
    },
    {
        id: 12,
        name: "Denim Jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
        price: 69.99,
        description: "Classic denim jacket with modern fit. Durable denim fabric with comfortable lining. Perfect for layering in any season. Timeless style that complements any outfit.",
        category: "clothing",
        rating: 4.6
    }
];

// ============================================
// CART MANAGEMENT
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize app function
function initializeApp() {
    updateCartCount();
    loadFeaturedProducts();
    loadAllProducts();
    
    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
}

// ============================================
// PAGE NAVIGATION
// ============================================
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Load page-specific content
        if (pageName === 'products') {
            loadAllProducts();
        } else if (pageName === 'cart') {
            loadCart();
        } else if (pageName === 'home') {
            loadFeaturedProducts();
        }
    }
}

// ============================================
// PRODUCT DISPLAY FUNCTIONS
// ============================================
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    // Get first 4 products as featured
    const featured = products.slice(0, 4);
    featuredContainer.innerHTML = '';
    
    featured.forEach(product => {
        featuredContainer.appendChild(createProductCard(product));
    });
}

function loadAllProducts(filterCategory = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    // Filter products by category
    let filteredProducts = products;
    if (filterCategory !== 'all') {
        filteredProducts = products.filter(p => p.category === filterCategory);
    }
    
    // Update filter buttons
    updateFilterButtons(filterCategory);
    
    // Display products
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found in this category.</p>';
    } else {
        filteredProducts.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }
}

function updateFilterButtons(activeCategory) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === activeCategory || 
            (activeCategory === 'all' && btn.textContent.toLowerCase() === 'all')) {
            btn.classList.add('active');
        }
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetails(product.id);
    
    const stars = generateStars(product.rating);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x400?text=Product+Image'">
        <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">${stars} <span>${product.rating}</span></div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';
    }
    if (hasHalfStar) {
        starsHTML += '☆';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '☆';
    }
    
    return starsHTML;
}

// ============================================
// PRODUCT DETAILS
// ============================================
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    showPage('product-details');
    
    const detailsContainer = document.getElementById('productDetails');
    if (!detailsContainer) return;
    
    const stars = generateStars(product.rating);
    
    detailsContainer.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-details-image" onerror="this.src='https://via.placeholder.com/600x600?text=Product+Image'">
        <div class="product-details-info">
            <p class="product-details-category">${product.category}</p>
            <h1>${product.name}</h1>
            <div class="product-details-rating">${stars} <span>${product.rating} (${Math.floor(Math.random() * 200 + 50)} reviews)</span></div>
            <div class="product-details-price">$${product.price.toFixed(2)}</div>
            <p class="product-details-description">${product.description}</p>
            <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity()">-</button>
                    <input type="number" id="productQuantity" class="quantity-input" value="1" min="1" max="10">
                    <button class="quantity-btn" onclick="increaseQuantity()">+</button>
                </div>
            </div>
            <button class="add-to-cart-details" onclick="addToCart(${product.id}, parseInt(document.getElementById('productQuantity').value))">
                Add to Cart
            </button>
        </div>
    `;
}

function increaseQuantity() {
    const quantityInput = document.getElementById('productQuantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('productQuantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    loadCart();
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartCount();
            loadCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

function showCartNotification() {
    // Simple notification (can be enhanced with a toast notification)
    const notification = document.createElement('div');
    notification.textContent = 'Item added to cart!';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function loadCart() {
    const cartContent = document.getElementById('cartContent');
    const cartSummary = document.getElementById('cartSummary');
    
    if (!cartContent || !cartSummary) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add some products to get started!</p>
                <button class="cta-button" onclick="showPage('products')" style="margin-top: 1rem;">Browse Products</button>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }
    
    // Display cart items
    cartContent.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        const stars = generateStars(item.rating);
        const itemTotal = (item.price * item.quantity).toFixed(2);
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/200x200?text=Product+Image'">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
                <div class="product-rating" style="margin-bottom: 0.5rem;">${stars} ${item.rating}</div>
            </div>
            <div class="cart-item-price">$${itemTotal}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span style="padding: 0 1rem; font-weight: 600;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        
        cartContent.appendChild(cartItem);
    });
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% tax
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const total = subtotal + tax + shipping;
    
    cartSummary.innerHTML = `
        <h2>Order Summary</h2>
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax (10%):</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping:</span>
            <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
    `;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // In a real application, this would redirect to a payment page
    alert('Thank you for your purchase! This is a demo site. In a real application, you would be redirected to the payment page.');
    
    // Clear cart after checkout
    cart = [];
    saveCart();
    updateCartCount();
    loadCart();
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        loadAllProducts();
        return;
    }
    
    // Filter products by search term
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found matching your search.</p>';
    } else {
        filteredProducts.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }
    
    // Show products page
    showPage('products');
}

// ============================================
// CATEGORY FILTER
// ============================================
function filterByCategory(category) {
    loadAllProducts(category);
    showPage('products');
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);







