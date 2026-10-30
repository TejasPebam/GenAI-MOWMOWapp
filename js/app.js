/* =========================================================
   MowMow Master Application Engine
   Multi-Page Desktop-First Dining Discovery & Ordering Platform
   Matches 9-panel reference image with production-grade reliability
   ========================================================= */

(function(){
  'use strict';

  // Application State
  const AppState = {
    user: JSON.parse(localStorage.getItem('mowmowUser')) || MOW_DATA.demoUser,
    cart: JSON.parse(localStorage.getItem('mowmowCart')) || [
      { id: 'food-chicken-biryani', name: 'Chicken Biryani', restaurant: 'Behrouz Biryani', price: 249, photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80', qty: 1 },
      { id: 'food-paneer-butter-masala', name: 'Paneer Butter Masala', restaurant: 'The Healthy Box', price: 199, photo: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80', qty: 1 },
      { id: 'food-masala-chai', name: 'Masala Chai', restaurant: 'Cafe Coffee Day', price: 49, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80', qty: 2 }
    ],
    orders: JSON.parse(localStorage.getItem('mowmowOrders')) || MOW_DATA.demoOrders,
    favorites: JSON.parse(localStorage.getItem('mowmowFavorites')) || ['food-chicken-biryani', 'behrouz-biryani'],
    appliedCoupon: JSON.parse(localStorage.getItem('mowmowCoupon')) || { code: 'MOW50', discount: 50 },
    activeDiscoverCategory: 'all',
    discoverQuery: '',
    discoverFilters: {
      cuisines: [],
      priceRange: null, // 'under200', '200-400', '400-600', '600plus'
      diet: 'all'
    },
    aiMessages: [
      {
        sender: 'bot',
        text: "Tell me what you're craving, your budget or diet preferences. I'll suggest the best dishes for you!"
      }
    ]
  };

  function saveState(){
    localStorage.setItem('mowmowUser', JSON.stringify(AppState.user));
    localStorage.setItem('mowmowCart', JSON.stringify(AppState.cart));
    localStorage.setItem('mowmowOrders', JSON.stringify(AppState.orders));
    localStorage.setItem('mowmowFavorites', JSON.stringify(AppState.favorites));
    localStorage.setItem('mowmowCoupon', JSON.stringify(AppState.appliedCoupon));
    updateHeaderCartBadge();
  }

  // Toast Notification System
  function showToast(message, type = 'info'){
    const container = document.getElementById('appToastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // Modal Dialog System
  function openModal(htmlContent){
    const overlay = document.getElementById('appModalOverlay');
    const content = document.getElementById('modalContent');
    if (!overlay || !content) return;
    content.innerHTML = htmlContent;
    overlay.classList.add('active');
  }

  function closeModal(){
    const overlay = document.getElementById('appModalOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  // Cart Calculations matching Panel 5 & 6
  function getCartSubtotal(){
    return AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  function getCartDeliveryFee(subtotal){
    if (subtotal === 0) return 0;
    return 30; // standard delivery fee ₹30 as in reference summary
  }

  function getCartPlatformFee(){
    return AppState.cart.length > 0 ? 20 : 0;
  }

  function getCartDiscount(subtotal){
    if (!AppState.appliedCoupon || subtotal === 0) return 0;
    return AppState.appliedCoupon.discount || 50;
  }

  function getCartTotal(){
    const sub = getCartSubtotal();
    if (sub === 0) return 0;
    const delivery = getCartDeliveryFee(sub);
    const platform = getCartPlatformFee();
    const discount = getCartDiscount(sub);
    return Math.max(0, sub + delivery + platform - discount);
  }

  function addToCart(food, quantity = 1, customization = null){
    const existing = AppState.cart.find(item => item.id === food.id);
    if (existing) {
      existing.qty += quantity;
    } else {
      AppState.cart.push({
        id: food.id,
        name: food.name,
        restaurant: food.restaurant,
        restaurantId: food.restaurantId,
        price: food.price,
        photo: food.photo,
        qty: quantity,
        customization: customization
      });
    }
    saveState();
    showToast(`<strong>${food.name}</strong> added to your cart! 🛒`);
  }

  function updateCartItemQty(id, delta){
    const item = AppState.cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      AppState.cart = AppState.cart.filter(i => i.id !== id);
      showToast('Item removed from cart');
    }
    saveState();
  }

  function removeCartItem(id){
    AppState.cart = AppState.cart.filter(i => i.id !== id);
    saveState();
    showToast('Item removed from cart');
  }

  function toggleFavorite(id){
    const index = AppState.favorites.indexOf(id);
    if (index > -1) {
      AppState.favorites.splice(index, 1);
      showToast('Removed from favorites');
    } else {
      AppState.favorites.push(id);
      showToast('Saved to your favorites! ❤️');
    }
    saveState();
  }

  function updateHeaderCartBadge(){
    const badge = document.getElementById('headerCartBadge');
    if (!badge) return;
    const totalCount = AppState.cart.reduce((s, i) => s + i.qty, 0);
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  // Helper to Render Food Card Component with fallback
  function renderFoodCardHTML(food){
    const isFav = AppState.favorites.includes(food.id);
    const fallback = MowGraphics.fallbackFood(food.name);
    return `
      <div class="food-card" data-food-id="${food.id}">
        <div class="food-card-img-wrap" onclick="MowRouter.navigateTo('/food/${food.id}')" style="cursor:pointer">
          <img src="${food.photo}" alt="${food.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallback}'">
          ${food.badge ? `<span class="food-card-badge">${food.badge}</span>` : ''}
          <button class="food-card-fav ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); MowApp.toggleFav('${food.id}')" title="Favorite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>
        </div>
        <div class="food-card-body">
          <h3 class="food-card-title" onclick="MowRouter.navigateTo('/food/${food.id}')" style="cursor:pointer">${food.name}</h3>
          <div class="food-card-restaurant" onclick="MowRouter.navigateTo('/restaurants/${food.restaurantId}')" style="cursor:pointer">${food.restaurant}</div>
          
          <div class="food-card-meta">
            <div class="meta-rating">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>${food.rating} (${food.ratingCount || '5k'})</span>
            </div>
            <div class="meta-eta">⏱ ${food.eta}</div>
          </div>

          <div class="food-card-footer">
            <div class="food-price-wrap">
              <span class="price-current">₹${food.price}</span>
              ${food.originalPrice ? `<span class="price-original">₹${food.originalPrice}</span>` : ''}
            </div>
            <button class="btn-add-food" onclick="MowApp.addDish('${food.id}')">Add +</button>
          </div>
        </div>
      </div>
    `;
  }

  // Helper to Render Restaurant Card Component
  function renderRestaurantCardHTML(rest){
    const fallback = MowGraphics.fallbackFood(rest.name);
    return `
      <div class="restaurant-card" onclick="MowRouter.navigateTo('/restaurants/${rest.id}')">
        <div class="restaurant-card-img">
          <img src="${rest.photo}" alt="${rest.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallback}'">
          <span class="restaurant-badge">★ ${rest.rating} (${rest.ratingCount})</span>
        </div>
        <div class="restaurant-card-body">
          <h3 class="restaurant-card-name">${rest.name}</h3>
          <div class="restaurant-card-cuisine">${rest.cuisine}</div>
          <div class="restaurant-card-stats">
            <span>⏱ ${rest.eta}</span>
            <span class="text-gold">${rest.priceForTwo}</span>
          </div>
        </div>
      </div>
    `;
  }

  /* =========================================================
     PAGE 1: HOME PAGE RENDERER (Panel 1: Top-Left)
     ========================================================= */
  function renderHomePage(){
    const outlet = document.getElementById('appContent');
    const popularDishes = MOW_DATA.foods.slice(0, 4);
    const topRestaurants = MOW_DATA.restaurants.slice(0, 3);
    const biryaniFallback = MowGraphics.fallbackFood('Signature Chicken Biryani');

    outlet.innerHTML = `
      <!-- Hero Section -->
      <section class="home-hero-section">
        <div class="hero-glow-bg"></div>
        <div class="container hero-grid">
          
          <!-- Left Hero Column -->
          <div class="hero-content-col">
            <div class="hero-eyebrow">Good Food. Happier You.</div>
            <h1 class="hero-title">Delicious Food<br>Made for <span class="text-gradient-orange">Every Mood</span></h1>
            <p class="hero-description">Discover the best restaurants, explore trending dishes and get AI-powered recommendations tailored just for you.</p>

            <!-- Search Bar -->
            <form class="hero-search-box" onsubmit="event.preventDefault(); MowApp.handleHeroSearch();">
              <input type="text" id="heroSearchInput" class="hero-search-input" placeholder="Search for biryani, pizza, Chinese...">
              <button type="submit" class="hero-search-btn" title="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </button>
            </form>

            <!-- Cuisine Suggestion Chips -->
            <div class="hero-chips-wrap">
              <button class="hero-chip" onclick="MowApp.searchCuisine('biryani')">🍛 Biryani</button>
              <button class="hero-chip" onclick="MowApp.searchCuisine('north-indian')">🥘 North Indian</button>
              <button class="hero-chip" onclick="MowApp.searchCuisine('chinese')">🍜 Chinese</button>
              <button class="hero-chip" onclick="MowApp.searchCuisine('healthy')">🥗 Healthy</button>
              <button class="hero-chip" onclick="MowApp.searchCuisine('south-indian')">🥞 South Indian</button>
            </div>

            <!-- CTA Actions -->
            <div class="hero-cta-group">
              <button class="btn-primary" data-route="/restaurants">Explore Restaurants &rarr;</button>
              <button class="btn-secondary" onclick="MowApp.openStoryModal()">Watch Our Story &#9654;</button>
            </div>

            <!-- Stats Bar -->
            <div class="hero-stats-row">
              <div class="hero-stat-item">
                <div class="stat-val">500+</div>
                <div class="stat-label">Restaurants</div>
              </div>
              <div class="hero-stat-item">
                <div class="stat-val">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  4.8
                </div>
                <div class="stat-label">Average Rating</div>
              </div>
              <div class="hero-stat-item">
                <div class="stat-val">30 Mins</div>
                <div class="stat-label">Fast Delivery</div>
              </div>
              <div class="hero-stat-item">
                <div class="stat-val">100K+</div>
                <div class="stat-label">Happy Customers</div>
              </div>
            </div>

          </div>

          <!-- Right Hero Visual with Script Flourish Badge -->
          <div class="hero-visual-wrap">
            <div class="hero-food-plate" onclick="MowRouter.navigateTo('/food/food-chicken-biryani')" style="cursor:pointer" title="View Signature Chicken Biryani">
              <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1200&q=85" alt="Signature Royal Chicken Biryani" onerror="this.onerror=null; this.src='${biryaniFallback}'">
            </div>

            <div class="hero-floating-badge" onclick="MowRouter.navigateTo('/food/food-chicken-biryani')" title="Order Biryani Now">
              <div class="badge-script-biryani">Biryani</div>
              <div class="badge-script-sub">Always a</div>
              <div class="badge-script-sub">Good Idea!</div>
            </div>
          </div>

        </div>
      </section>

      <!-- Category Navigation Strip -->
      <section class="category-strip-section">
        <div class="container">
          <div class="category-strip">
            ${MOW_DATA.categories.map(cat => `
              <div class="category-tile" onclick="MowApp.filterByCategory('${cat.id}')">
                <div class="category-tile-img">
                  <img src="${cat.photo}" alt="${cat.name}" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(cat.name)}'">
                </div>
                <span class="category-tile-name">${cat.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- AI Assistant Promo Banner Card -->
      <section class="container">
        <div class="ai-promo-card">
          <div class="ai-promo-left">
            <div class="ai-promo-icon">🤖</div>
            <div class="ai-promo-content">
              <h3>AI Food Assistant</h3>
              <p>Tell us what you're craving. We'll suggest dishes that match your taste, macro targets, and budget in seconds.</p>
            </div>
          </div>
          <button class="btn-primary" data-route="/ai-assistant">Try Now &rarr;</button>
        </div>
      </section>

      <!-- Popular Picks Section -->
      <section class="container" style="margin-bottom: 60px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Popular Picks</h2>
            <p class="section-subtitle">Handpicked dishes worth discovering today</p>
          </div>
          <a href="/discover" class="section-link" data-route="/discover">View All &rarr;</a>
        </div>
        <div class="food-grid">
          ${popularDishes.map(f => renderFoodCardHTML(f)).join('')}
        </div>
      </section>

      <!-- Promotional Banners (3 Cards) -->
      <section class="container">
        <div class="promo-tri-grid">
          
          <div class="promo-card" onclick="MowRouter.navigateTo('/offers')" style="cursor:pointer">
            <div class="promo-card-bg">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" alt="Offers" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Offers')}'">
            </div>
            <div class="promo-card-overlay"></div>
            <div class="promo-card-content">
              <div class="badge-pill badge-gold" style="align-self:flex-start">Flat 50% OFF</div>
              <h3 class="promo-card-title">Something Delicious Awaits</h3>
              <button class="promo-card-btn">Explore Offers &rarr;</button>
            </div>
          </div>

          <div class="promo-card" onclick="MowApp.filterByCategory('healthy')" style="cursor:pointer">
            <div class="promo-card-bg">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80" alt="Healthy Choices" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Healthy Choices')}'">
            </div>
            <div class="promo-card-overlay"></div>
            <div class="promo-card-content">
              <div class="badge-pill badge-green" style="align-self:flex-start">Nutrient Packed</div>
              <h3 class="promo-card-title">Healthy Choices, Happier You</h3>
              <button class="promo-card-btn">Explore Healthy &rarr;</button>
            </div>
          </div>

          <div class="promo-card" onclick="MowRouter.navigateTo('/ai-assistant')" style="cursor:pointer">
            <div class="promo-card-bg">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="AI Recommendations" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('AI Assistant')}'">
            </div>
            <div class="promo-card-overlay"></div>
            <div class="promo-card-content">
              <div class="badge-pill badge-pink" style="align-self:flex-start">Smart Assistant</div>
              <h3 class="promo-card-title">Craving Something? Let AI Suggest!</h3>
              <button class="promo-card-btn">Try AI Assistant &rarr;</button>
            </div>
          </div>

        </div>
      </section>

      <!-- How It Works 4-Step Horizontal -->
      <section class="container how-it-works-section">
        <div class="section-header" style="justify-content:center; text-align:center;">
          <div>
            <h2 class="section-title">How It Works</h2>
            <p class="section-subtitle">Experience effortless luxury dining in 4 simple steps</p>
          </div>
        </div>
        <div class="how-steps-grid">
          <div class="how-step-card">
            <span class="step-number-badge">STEP 01</span>
            <div class="step-icon-wrap">🔍</div>
            <h3 class="step-title">Discover</h3>
            <p class="step-desc">Find your favorite gourmet restaurant or let our AI match your craving and diet.</p>
          </div>
          <div class="how-step-card">
            <span class="step-number-badge">STEP 02</span>
            <div class="step-icon-wrap">🍲</div>
            <h3 class="step-title">Customize</h3>
            <p class="step-desc">Tailor spice levels, portion sizes, and add-ons exactly how you love your food.</p>
          </div>
          <div class="how-step-card">
            <span class="step-number-badge">STEP 03</span>
            <div class="step-icon-wrap">💳</div>
            <h3 class="step-title">Seamless Order</h3>
            <p class="step-desc">Review your items, apply promotional savings, and checkout securely.</p>
          </div>
          <div class="how-step-card">
            <span class="step-number-badge">STEP 04</span>
            <div class="step-icon-wrap">🛵</div>
            <h3 class="step-title">Fast Delivery</h3>
            <p class="step-desc">Follow live step-by-step progress as your meal is cooked fresh and rushed over.</p>
          </div>
        </div>
      </section>

      <!-- Service Benefits Panel -->
      <section class="container">
        <div class="benefits-panel">
          <div class="benefit-item">
            <div class="benefit-icon">🚀</div>
            <div class="benefit-info">
              <h4>Free Delivery</h4>
              <p>On all qualifying orders above ₹249</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🌿</div>
            <div class="benefit-info">
              <h4>Fresh and Fast</h4>
              <p>Prepared to order with authentic ingredients</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🛡️</div>
            <div class="benefit-info">
              <h4>Secure Payment</h4>
              <p>100% encrypted UPI &amp; card demo transactions</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">⭐</div>
            <div class="benefit-info">
              <h4>Loyalty Rewards</h4>
              <p>Earn MowMow points on every delicious meal</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Top Rated Restaurants -->
      <section class="container" style="margin-bottom: 70px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Top Rated Restaurants</h2>
            <p class="section-subtitle">Award-winning dining kitchens in your city</p>
          </div>
          <a href="/restaurants" class="section-link" data-route="/restaurants">View All &rarr;</a>
        </div>
        <div class="restaurants-grid">
          ${topRestaurants.map(r => renderRestaurantCardHTML(r)).join('')}
        </div>
      </section>
    `;
  }

  /* =========================================================
     PAGE 2: DISCOVER (/discover) — Exact Match to Panel 2
     ========================================================= */
  function renderDiscoverPage(){
    const outlet = document.getElementById('appContent');
    const selectedCategory = AppState.activeDiscoverCategory || 'all';

    // Popular near you restaurants (Matching Panel 2)
    const popularNearRestaurants = MOW_DATA.restaurants.slice(0, 3);

    // Filter dishes if search query or filters are active
    const q = AppState.discoverQuery.toLowerCase().trim();
    const hasFilter = q || AppState.discoverFilters.cuisines.length > 0 || AppState.discoverFilters.priceRange || selectedCategory !== 'all';

    const filteredFoods = MOW_DATA.foods.filter(f => {
      if (q && !f.name.toLowerCase().includes(q) && !f.cuisine.toLowerCase().includes(q) && !f.restaurant.toLowerCase().includes(q)) return false;
      if (selectedCategory === 'healthy') {
        // Treat Healthy as a nutrition-focused filter, not as a loose cuisine label.
        // This prevents unrelated desserts, shakes, and ordinary dishes appearing here.
        const tags = Array.isArray(f.tags) ? f.tags.map(t => String(t).toLowerCase()) : [];
        const text = `${f.name || ''} ${f.description || ''} ${f.badge || ''}`.toLowerCase();
        const isDessertOrSweetDrink = /cake|milkshake|shake|ice cream|brownie|dessert|sundae|sweet tooth|sweetened/.test(`${f.name || ''} ${f.cuisine || ''} ${tags.join(' ')}`.toLowerCase());
        const healthySignals = tags.some(t => /healthy|protein rich|high protein|low calorie|salad|grilled|lean|whole grain|balanced|sprouts|steamed|soup/.test(t))
          || /grilled chicken|chicken bowl|quinoa|salad|steamed|sprouts|lentil|dal bowl|brown rice|whole grain|tofu bowl|lean protein|vegetable soup|grilled fish|egg white|oats/.test(text);
        const calories = Number(f.calories);
        const nutritionReasonable = Number.isFinite(calories) && calories <= 550;
        // The Healthy category is intentionally strict: ordinary biryani, desserts and drinks
        // must not leak in simply because their tags contain a loose health keyword.
        if (f.category !== 'healthy' || isDessertOrSweetDrink || !healthySignals || !nutritionReasonable) return false;
      } else if (selectedCategory !== 'all' && f.category !== selectedCategory) return false;
      if (AppState.discoverFilters.cuisines.length > 0 && !AppState.discoverFilters.cuisines.includes(f.cuisine)) return false;
      if (AppState.discoverFilters.priceRange === 'under200' && f.price > 200) return false;
      if (AppState.discoverFilters.priceRange === '200-400' && (f.price < 200 || f.price > 400)) return false;
      if (AppState.discoverFilters.priceRange === '400-600' && (f.price < 400 || f.price > 600)) return false;
      if (AppState.discoverFilters.priceRange === '600plus' && f.price < 600) return false;
      return true;
    });

    outlet.innerHTML = `
      <div class="container discover-layout">
        
        <!-- Top Search Bar -->
        <div class="hero-search-box" style="max-width: 100%; margin-bottom: 30px;">
          <input type="text" id="discoverSearchInput" class="hero-search-input" placeholder="Search for dishes, restaurants or cuisines..." value="${AppState.discoverQuery}" oninput="MowApp.handleDiscoverSearchInput(this.value)">
          <button class="hero-search-btn" title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
        </div>

        <!-- Header area -->
        <div class="discover-header-box">
          <span class="explore-tag">Explore</span>
          <h1 style="font-family: var(--font-serif); font-size: 38px; color: #FFF; margin-bottom: 8px;">What Are You Craving Today?</h1>
        </div>

        <!-- Category Row (8 round icons) -->
        <div class="category-strip-section" style="padding: 0 0 30px 0;">
          <div class="category-strip">
            ${MOW_DATA.categories.filter(c => c.id !== 'all').map(cat => `
              <div class="category-tile ${cat.id === selectedCategory ? 'active' : ''}" onclick="MowApp.filterByCategory('${cat.id}')">
                <div class="category-tile-img">
                  <img src="${cat.photo}" alt="${cat.name}" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(cat.name)}'">
                </div>
                <span class="category-tile-name">${cat.name}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2-Column Discover Layout -->
        <div class="discover-main-grid">
          
          <!-- Left Filter Sidebar -->
          <aside class="filter-sidebar">
            <div class="filter-header">
              <h3>Filters</h3>
              <button class="btn-reset-filters" onclick="MowApp.resetDiscoverFilters()">Reset All</button>
            </div>

            <!-- Cuisine Filter -->
            <div class="filter-group">
              <div class="filter-group-title">Cuisine</div>
              ${['North Indian', 'South Indian', 'Chinese', 'Fast Food', 'Continental', 'Healthy', 'Desserts'].map(c => `
                <label class="filter-checkbox-item">
                  <input type="checkbox" ${AppState.discoverFilters.cuisines.includes(c) ? 'checked' : ''} onchange="MowApp.toggleCuisineFilter('${c}')">
                  <span>${c}</span>
                </label>
              `).join('')}
            </div>

            <!-- Price Range Filter -->
            <div class="filter-group">
              <div class="filter-group-title">Price Range</div>
              <label class="filter-checkbox-item">
                <input type="radio" name="priceRangeRadio" value="under200" ${AppState.discoverFilters.priceRange === 'under200' ? 'checked' : ''} onchange="MowApp.setPriceRangeFilter('under200')">
                <span>Under ₹200</span>
              </label>
              <label class="filter-checkbox-item">
                <input type="radio" name="priceRangeRadio" value="200-400" ${AppState.discoverFilters.priceRange === '200-400' ? 'checked' : ''} onchange="MowApp.setPriceRangeFilter('200-400')">
                <span>₹200 - ₹400</span>
              </label>
              <label class="filter-checkbox-item">
                <input type="radio" name="priceRangeRadio" value="400-600" ${AppState.discoverFilters.priceRange === '400-600' ? 'checked' : ''} onchange="MowApp.setPriceRangeFilter('400-600')">
                <span>₹400 - ₹600</span>
              </label>
              <label class="filter-checkbox-item">
                <input type="radio" name="priceRangeRadio" value="600plus" ${AppState.discoverFilters.priceRange === '600plus' ? 'checked' : ''} onchange="MowApp.setPriceRangeFilter('600plus')">
                <span>₹600+</span>
              </label>
            </div>
          </aside>

          <!-- Right Results Area: Popular Near You & Top Cuisines -->
          <main class="discover-results-area">
            
            ${hasFilter ? `
              <!-- Filtered Foods Section -->
              <div class="section-header">
                <div>
                  <h2 class="section-title">Matching Dishes (${filteredFoods.length})</h2>
                  <p class="section-subtitle">Dishes matching your selected filters</p>
                </div>
              </div>
              <div class="food-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 40px;">
                ${filteredFoods.length > 0 
                  ? filteredFoods.map(f => renderFoodCardHTML(f)).join('')
                  : `<div style="grid-column: 1/-1; padding: 40px 20px; text-align: center; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                      <p style="color: var(--text-muted);">No dishes match your specific filters. Try resetting.</p>
                      <button class="btn-primary" style="margin-top: 12px;" onclick="MowApp.resetDiscoverFilters()">Reset Filters</button>
                    </div>`
                }
              </div>
            ` : ''}

            <!-- Popular Near You (3 Horizontal Cards matching Panel 2) -->
            <div class="section-header">
              <div>
                <h2 class="section-title">Popular Near You</h2>
              </div>
              <a href="/restaurants" class="section-link" data-route="/restaurants">See All &rarr;</a>
            </div>

            <div class="popular-near-grid">
              ${popularNearRestaurants.map(r => `
                <div class="horizontal-rest-card" onclick="MowRouter.navigateTo('/restaurants/${r.id}')">
                  <div class="horizontal-rest-img">
                    <img src="${r.photo}" alt="${r.name}" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(r.name)}'">
                  </div>
                  <div class="horizontal-rest-info">
                    <h3 class="horizontal-rest-name">${r.name}</h3>
                    <div class="horizontal-rest-meta">
                      <span class="text-gold">★ ${r.rating} (${r.ratingCount})</span>
                      <span class="text-muted">&bull;</span>
                      <span class="text-secondary">${r.eta}</span>
                    </div>
                    <div style="font-size: 13px; color: var(--text-primary); margin-bottom: 6px;">${r.priceForTwo}</div>
                    <div class="horizontal-rest-tags">${r.cuisine}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Top Cuisines Section Below -->
            <div class="section-header" style="margin-top: 30px;">
              <div>
                <h2 class="section-title">Top Cuisines</h2>
              </div>
            </div>
            <div class="top-cuisines-strip">
              <div class="top-cuisine-card" onclick="MowApp.filterByCategory('biryani')">
                <div class="top-cuisine-thumb">
                  <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=200&q=80" alt="Biryani" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Biryani')}'">
                </div>
                <div>
                  <div class="top-cuisine-name">Biryani</div>
                  <div class="top-cuisine-count">12 Restaurants</div>
                </div>
              </div>
              <div class="top-cuisine-card" onclick="MowApp.filterByCategory('north-indian')">
                <div class="top-cuisine-thumb">
                  <img src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80" alt="North Indian" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('North Indian')}'">
                </div>
                <div>
                  <div class="top-cuisine-name">North Indian</div>
                  <div class="top-cuisine-count">24 Restaurants</div>
                </div>
              </div>
              <div class="top-cuisine-card" onclick="MowApp.filterByCategory('chinese')">
                <div class="top-cuisine-thumb">
                  <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=200&q=80" alt="Chinese" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Chinese')}'">
                </div>
                <div>
                  <div class="top-cuisine-name">Chinese</div>
                  <div class="top-cuisine-count">18 Restaurants</div>
                </div>
              </div>
              <div class="top-cuisine-card" onclick="MowApp.filterByCategory('healthy')">
                <div class="top-cuisine-thumb">
                  <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80" alt="Healthy" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Healthy')}'">
                </div>
                <div>
                  <div class="top-cuisine-name">Healthy</div>
                  <div class="top-cuisine-count">15 Restaurants</div>
                </div>
              </div>
            </div>

          </main>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 3: RESTAURANTS LISTING (/restaurants) — Panel 3
     ========================================================= */
  function renderRestaurantsPage(){
    const outlet = document.getElementById('appContent');
    outlet.innerHTML = `
      <div class="container" style="padding-bottom: 60px;">
        
        <!-- Luxury Hero Banner -->
        <div class="restaurants-hero-banner">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="Top Restaurants" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Restaurants')}'">
          <div class="banner-overlay"></div>
          <div class="banner-content">
            <h1>Top Restaurants in Bangalore</h1>
            <p>Great food. Greater experiences.</p>
          </div>
        </div>

        <!-- Filter Chips matching Panel 3 -->
        <div class="restaurant-filter-chips">
          <button class="filter-chip-btn active" onclick="MowApp.filterRestaurants('all', this)">All</button>
          <button class="filter-chip-btn" onclick="MowApp.filterRestaurants('rating', this)">Rating 4.0+</button>
          <button class="filter-chip-btn" onclick="MowApp.filterRestaurants('fast', this)">Fast Delivery</button>
          <button class="filter-chip-btn" onclick="MowApp.filterRestaurants('veg', this)">Pure Veg</button>
          <button class="filter-chip-btn" onclick="MowApp.filterRestaurants('offers', this)">Offers</button>
          <button class="filter-chip-btn" onclick="MowApp.filterRestaurants('price', this)">Price ▾</button>
        </div>

        <!-- 3-Column Desktop Grid matching Panel 3 -->
        <div class="restaurants-grid" id="restaurantsListContainer">
          ${MOW_DATA.restaurants.map(r => renderRestaurantCardHTML(r)).join('')}
        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 4: RESTAURANT DETAIL (/restaurants/:id)
     ========================================================= */
  function renderRestaurantDetailPage(params){
    const outlet = document.getElementById('appContent');
    const rest = MOW_DATA.restaurants.find(r => r.id === params.id) || MOW_DATA.restaurants[0];
    const dishes = MOW_DATA.foods.filter(f => f.restaurantId === rest.id || f.restaurant === rest.name);

    outlet.innerHTML = `
      <div class="container" style="padding-bottom: 60px;">
        <a href="/restaurants" class="back-nav-link" data-route="/restaurants">&larr; Back to all restaurants</a>

        <!-- Restaurant Cover Header -->
        <div class="rest-detail-header">
          <img src="${rest.banner || rest.photo}" alt="${rest.name}" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(rest.name)}'">
          <div class="rest-detail-overlay">
            <div class="rest-detail-info">
              <h1>${rest.name}</h1>
              <div class="rest-detail-meta">
                <span class="text-gold">★ ${rest.rating} (${rest.ratingCount})</span>
                <span>&bull;</span>
                <span>⏱ ${rest.eta}</span>
                <span>&bull;</span>
                <span>${rest.priceForTwo}</span>
                <span>&bull;</span>
                <span>${rest.cuisine}</span>
              </div>
            </div>
            <button class="btn-primary" onclick="MowApp.toggleFav('${rest.id}')">
              ${AppState.favorites.includes(rest.id) ? 'Saved ❤️' : 'Save Restaurant'}
            </button>
          </div>
        </div>

        <p style="font-size: 16px; color: var(--text-secondary); max-width: 800px; margin-bottom: 36px; line-height: 1.6;">
          ${rest.description} Located at ${rest.address}.
        </p>

        <!-- Menu Section -->
        <div class="section-header">
          <div>
            <h2 class="section-title">Menu &amp; Specialties</h2>
            <p class="section-subtitle">Freshly prepared dishes from ${rest.name}</p>
          </div>
        </div>

        <div class="food-grid">
          ${dishes.length > 0 
            ? dishes.map(f => renderFoodCardHTML(f)).join('')
            : MOW_DATA.foods.slice(0, 4).map(f => renderFoodCardHTML(f)).join('')
          }
        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 5: FOOD DETAILS (/food/:id) — Exact Match to Panel 4
     ========================================================= */
  function renderFoodDetailPage(params){
    const outlet = document.getElementById('appContent');
    const food = MOW_DATA.foods.find(f => f.id === params.id) || MOW_DATA.foods[0];
    const isFav = AppState.favorites.includes(food.id);
    const relatedDishes = MOW_DATA.foods.filter(f => f.id !== food.id && (f.category === food.category || f.cuisine === food.cuisine)).slice(0, 4);

    outlet.innerHTML = `
      <div class="container food-detail-container">
        <a href="/restaurants/${food.restaurantId}" class="back-nav-link" data-route="/restaurants/${food.restaurantId}">&larr; Back to Restaurant</a>

        <div class="food-detail-layout">
          
          <!-- Left Column: Image, Thumbnails, Customization, Nutrition -->
          <div class="food-detail-gallery">
            <div class="food-detail-main-img">
              <img id="detailMainImg" src="${food.photo}" alt="${food.name}" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(food.name)}'">
              <button class="food-card-fav ${isFav ? 'active' : ''}" style="top:20px; right:20px;" onclick="MowApp.toggleFav('${food.id}')" title="Favorite">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>
            </div>

            <!-- 5 Thumbnails underneath -->
            <div class="food-detail-thumbnails">
              ${(food.gallery || [food.photo]).map((imgUrl, i) => `
                <div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="MowApp.switchDetailThumb('${imgUrl}', this)">
                  <img src="${imgUrl}" alt="Thumbnail" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(food.name)}'">
                </div>
              `).join('')}
            </div>

            <!-- Customization Box matching Panel 4 -->
            <div class="food-customization-box">
              <h4>Customization</h4>
              
              <div style="display:flex; gap:12px; margin-bottom:16px;">
                <button class="hero-chip active" id="portionBtn1" onclick="MowApp.selectPortion(0, this)">Regular</button>
                <button class="hero-chip" id="portionBtn2" onclick="MowApp.selectPortion(30, this)">Extra Masala (+₹30)</button>
              </div>

              <div style="font-size: 13.5px; font-weight: 600; color: #FFF; margin-bottom: 8px;">Add Ons</div>
              <div style="display: flex; gap: 20px;">
                <label class="filter-checkbox-item">
                  <input type="checkbox" id="detailAddonMasala" value="30" onchange="MowApp.calcDetailTotal(${food.price})">
                  <span>Extra Masala +₹30</span>
                </label>
                <label class="filter-checkbox-item">
                  <input type="checkbox" id="detailAddonChicken" value="80" onchange="MowApp.calcDetailTotal(${food.price})">
                  <span>Extra Chicken +₹80</span>
                </label>
              </div>
            </div>

            <!-- Nutritional Info (Per Serving) matching Panel 4 -->
            <div class="nutrition-stats-row">
              <div class="nutrition-stat-card">
                <div class="nutrition-val">${food.protein || 32}g</div>
                <div class="nutrition-lbl">Protein</div>
              </div>
              <div class="nutrition-stat-card">
                <div class="nutrition-val">${food.calories || 520}</div>
                <div class="nutrition-lbl">Calories</div>
              </div>
              <div class="nutrition-stat-card">
                <div class="nutrition-val">${food.carbs || 38}g</div>
                <div class="nutrition-lbl">Carbs</div>
              </div>
              <div class="nutrition-stat-card">
                <div class="nutrition-val">${food.fat || 18}g</div>
                <div class="nutrition-lbl">Fat</div>
              </div>
            </div>

          </div>

          <!-- Right Column: Info & Add to Cart -->
          <div class="food-detail-info">
            <h1>${food.name}</h1>
            <div class="food-detail-rest" onclick="MowRouter.navigateTo('/restaurants/${food.restaurantId}')" style="cursor:pointer">
              ${food.restaurant}
            </div>

            <div class="food-detail-rating-row">
              <div class="meta-rating" style="font-size: 15px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>${food.rating} (${food.ratingCount || '12.2k'})</span>
              </div>
              <span class="text-muted">&bull;</span>
              <span style="font-size: 14px; color: var(--text-secondary);">⏱ 30-40 mins</span>
              <span class="badge-pill badge-gold" style="background: rgba(255, 138, 39, 0.15); color: #FF8A27; border-color: rgba(255, 138, 39, 0.3);">Bestseller</span>
            </div>

            <div class="food-detail-price-row">
              <span class="detail-price-now" id="detailPriceDisplay">₹${food.price}</span>
              <span class="detail-price-was">₹299</span>
              <span class="badge-pill badge-green">17% OFF</span>
            </div>

            <p class="detail-desc">${food.description}</p>

            <!-- Quantity & Add to Cart Controls -->
            <div class="qty-add-row">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="MowApp.adjustDetailQty(-1, ${food.price})">&minus;</button>
                <span class="qty-value" id="detailQtyValue">1</span>
                <button class="qty-btn" onclick="MowApp.adjustDetailQty(1, ${food.price})">&plus;</button>
              </div>

              <button class="btn-primary" style="padding: 16px 42px; font-size: 16px;" onclick="MowApp.submitFoodDetailAdd('${food.id}')">
                Add to Cart
              </button>
            </div>

          </div>

        </div>

        <!-- Related Dishes -->
        <div class="section-header" style="margin-top: 50px;">
          <div>
            <h2 class="section-title">You Might Also Crave</h2>
            <p class="section-subtitle">Recommended dishes to pair with this meal</p>
          </div>
        </div>
        <div class="food-grid">
          ${relatedDishes.map(f => renderFoodCardHTML(f)).join('')}
        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 6: CART (/cart) — Exact Match to Panel 5
     ========================================================= */
  function renderCartPage(){
    const outlet = document.getElementById('appContent');
    const subtotal = getCartSubtotal();
    const delivery = getCartDeliveryFee(subtotal);
    const platform = getCartPlatformFee();
    const discount = getCartDiscount(subtotal);
    const total = getCartTotal();

    if (AppState.cart.length === 0) {
      outlet.innerHTML = `
        <div class="container" style="padding: 80px 0; text-align: center; max-width: 600px;">
          <div style="font-size: 64px; margin-bottom: 20px;">🛒</div>
          <h2 style="font-family: var(--font-serif); font-size: 32px; color: #FFF; margin-bottom: 10px;">Your cart is empty</h2>
          <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">Your cart is waiting for something delicious. Explore our chef-curated menus.</p>
          <button class="btn-primary" data-route="/discover">Discover Food &rarr;</button>
        </div>
      `;
      return;
    }

    outlet.innerHTML = `
      <div class="container cart-layout-grid">
        
        <!-- Left: Cart Items & Value Props -->
        <div class="cart-left-col">
          <h1 class="cart-header-title">My Cart</h1>
          <p class="cart-header-sub">Your favorite food, just a click away.</p>

          <div class="cart-items-card">
            ${AppState.cart.map(item => `
              <div class="cart-item-row">
                <div class="cart-item-left">
                  <div class="cart-item-thumb">
                    <img src="${item.photo}" alt="${item.name}" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood(item.name)}'">
                  </div>
                  <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-rest">${item.restaurant}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 18px;">
                  <div class="qty-stepper">
                    <button class="qty-btn" onclick="MowApp.changeCartQty('${item.id}', -1)">&minus;</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="MowApp.changeCartQty('${item.id}', 1)">&plus;</button>
                  </div>
                  <button class="btn-icon" style="width: 32px; height: 32px; color: var(--danger);" onclick="MowApp.removeCart('${item.id}')" title="Remove item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Coupon Input Box matching Panel 5 -->
          <div class="coupon-box">
            <input type="text" id="couponInput" class="coupon-input" placeholder="% Apply Coupon" value="${AppState.appliedCoupon ? AppState.appliedCoupon.code : ''}">
            <button class="btn-apply-coupon" onclick="MowApp.applyCoupon()">
              ${AppState.appliedCoupon ? 'Applied ✓' : 'Apply'}
            </button>
          </div>

          <!-- 3 Value Proposition Badges matching Panel 5 -->
          <div class="benefits-panel" style="padding: 24px; margin-bottom: 0; grid-template-columns: repeat(3, 1fr);">
            <div class="benefit-item">
              <div class="benefit-icon" style="width:40px; height:40px; font-size:18px;">🚚</div>
              <div class="benefit-info">
                <h4 style="font-size: 14px;">Free Delivery</h4>
                <p style="font-size: 12px;">On orders above ₹249</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon" style="width:40px; height:40px; font-size:18px;">⚡</div>
              <div class="benefit-info">
                <h4 style="font-size: 14px;">Fresh &amp; Fast</h4>
                <p style="font-size: 12px;">Prepared with care</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon" style="width:40px; height:40px; font-size:18px;">🔒</div>
              <div class="benefit-info">
                <h4 style="font-size: 14px;">Secure Payment</h4>
                <p style="font-size: 12px;">100% safe &amp; secure</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: Order Summary matching Panel 5 -->
        <div class="cart-right-col">
          <div class="order-summary-box">
            <h3>Order Summary</h3>

            <div class="summary-line">
              <span>Item Total</span>
              <span>₹${subtotal}</span>
            </div>
            <div class="summary-line">
              <span>Delivery Fee</span>
              <span>₹${delivery}</span>
            </div>
            <div class="summary-line">
              <span>Platform Fee</span>
              <span>₹${platform}</span>
            </div>
            <div class="summary-line text-pink">
              <span>Discount</span>
              <span>-₹${discount}</span>
            </div>

            <div class="summary-line total">
              <span>Total</span>
              <span style="color: #FFFFFF; font-size: 22px;">₹${total}</span>
            </div>

            <button class="btn-primary" style="width: 100%; padding: 16px;" data-route="/checkout">
              Proceed to Checkout &rarr;
            </button>
          </div>
        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 7: CHECKOUT (/checkout) — Exact Match to Panel 6
     ========================================================= */
  function renderCheckoutPage(){
    const outlet = document.getElementById('appContent');
    const subtotal = getCartSubtotal();
    const delivery = getCartDeliveryFee(subtotal);
    const platform = getCartPlatformFee();
    const discount = getCartDiscount(subtotal);
    const total = getCartTotal();

    if (AppState.cart.length === 0) {
      MowRouter.navigateTo('/cart');
      return;
    }

    outlet.innerHTML = `
      <div class="container cart-layout-grid">
        
        <!-- Left: Steps matching Panel 6 -->
        <div class="checkout-steps-column">
          <div>
            <h1 class="cart-header-title">Checkout</h1>
            <p class="cart-header-sub">Almost there! Complete your order.</p>
          </div>

          <!-- Step 1: Delivery Address -->
          <div class="checkout-step-card">
            <div class="step-header-row">
              <span class="step-badge-num">1</span>
              <h3>Delivery Address</h3>
            </div>
            <div class="selected-address-card" style="margin-bottom: 14px;">
              <div>
                <strong style="color: #FFF; font-size: 15px;">Home</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-top: 4px;">
                  123, Hostel Block A, Alliance University, Anekal, Bangalore
                </p>
              </div>
              <button class="btn-secondary" style="padding: 4px 12px; font-size: 12px; color: var(--accent-pink); border-color: rgba(255, 40, 91, 0.4);" onclick="MowApp.openChangeAddressModal()">Change</button>
            </div>
            <button class="btn-secondary" style="padding: 8px 16px; font-size: 13px; gap:6px;" onclick="MowApp.openChangeAddressModal()">
              <span>+</span> Add New Address
            </button>
          </div>

          <!-- Step 2: Delivery Time -->
          <div class="checkout-step-card">
            <div class="step-header-row">
              <span class="step-badge-num">2</span>
              <h3>Delivery Time</h3>
            </div>
            <div style="display: flex; gap: 30px;">
              <label class="filter-checkbox-item">
                <input type="radio" name="deliveryTime" value="asap" checked>
                <span><strong>ASAP</strong> (30-40 mins)</span>
              </label>
              <label class="filter-checkbox-item">
                <input type="radio" name="deliveryTime" value="schedule">
                <span>Schedule for later</span>
              </label>
            </div>
          </div>

          <!-- Step 3: Payment Method -->
          <div class="checkout-step-card">
            <div class="step-header-row">
              <span class="step-badge-num">3</span>
              <h3>Payment Method</h3>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <label class="filter-checkbox-item" style="padding: 14px; background: rgba(16, 11, 7, 0.7); border-radius: var(--radius-sm); border: 1px solid var(--border-medium);">
                <input type="radio" name="paymentMethod" value="upi" checked>
                <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                  <span><strong>UPI</strong> (Google Pay, PhonePe, Paytm)</span>
                  <span style="color: var(--accent-pink);">✓</span>
                </div>
              </label>
              <label class="filter-checkbox-item" style="padding: 14px; background: rgba(16, 11, 7, 0.7); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <input type="radio" name="paymentMethod" value="card">
                <span><strong>Credit / Debit Card</strong></span>
              </label>
              <label class="filter-checkbox-item" style="padding: 14px; background: rgba(16, 11, 7, 0.7); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <input type="radio" name="paymentMethod" value="cod">
                <span><strong>Cash on Delivery</strong></span>
              </label>
            </div>
          </div>

        </div>

        <!-- Right: Order Summary & Place Order matching Panel 6 -->
        <div class="cart-right-col">
          <div class="order-summary-box">
            <h3>Order Summary</h3>
            <div style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 14px;">3 Items</div>

            <div class="summary-line">
              <span>Item Total</span>
              <span>₹${subtotal}</span>
            </div>
            <div class="summary-line">
              <span>Delivery Fee</span>
              <span>₹${delivery}</span>
            </div>
            <div class="summary-line">
              <span>Platform Fee</span>
              <span>₹${platform}</span>
            </div>
            <div class="summary-line text-pink">
              <span>Discount</span>
              <span>-₹${discount}</span>
            </div>

            <div class="summary-line total">
              <span>Total</span>
              <span style="color: #FFFFFF; font-size: 22px;">₹${total}</span>
            </div>

            <button class="btn-primary" style="width: 100%; padding: 16px;" onclick="MowApp.placeDemoOrder(${total})">
              Place Order &rarr;
            </button>
          </div>

          <!-- Rider Banner with Authentic SVG Scooter Graphic -->
          <div class="rider-delivery-card">
            <div class="rider-avatar">
              ${MowGraphics.scooterRider(90, 65)}
            </div>
            <div>
              <strong style="color: #FFF; font-size: 14px; display: block; margin-bottom: 3px;">Your food is in good hands!</strong>
              <small style="color: var(--text-muted); font-size: 12px; line-height: 1.4; display: block;">Freshly prepared and delivered with love.</small>
            </div>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 8: ORDER TRACKING (/orders/:id) — Exact Match to Panel 7
     ========================================================= */
  function renderOrderTrackPage(params){
    const outlet = document.getElementById('appContent');
    const order = AppState.orders.find(o => o.id === params.id) || AppState.orders[0];

    outlet.innerHTML = `
      <div class="container tracking-container">
        
        <div class="tracking-header">
          <h1>Track Your Order</h1>
          <div class="order-num">Order #${order.id}</div>
        </div>

        <!-- Status Timeline Card matching Panel 7 -->
        <div class="timeline-card">
          <div class="timeline-steps-row">
            <div class="timeline-line"></div>

            <div class="timeline-step ${order.step >= 1 ? 'completed' : ''}">
              <div class="timeline-dot">✓</div>
              <div class="timeline-step-title">Order Placed</div>
              <div class="timeline-step-time">${order.orderPlacedTime || '12:24 PM'}</div>
            </div>

            <div class="timeline-step ${order.step === 2 ? 'active' : (order.step > 2 ? 'completed' : '')}">
              <div class="timeline-dot">👨‍🍳</div>
              <div class="timeline-step-title">Preparing</div>
              <div class="timeline-step-time">${order.preparingTime || '12:38 PM'}</div>
            </div>

            <div class="timeline-step ${order.step === 3 ? 'active' : (order.step > 3 ? 'completed' : '')}">
              <div class="timeline-dot">🛵</div>
              <div class="timeline-step-title">Out For Delivery</div>
              <div class="timeline-step-time">${order.outForDeliveryTime || '12:45 PM'}</div>
            </div>

            <div class="timeline-step ${order.step >= 4 ? 'completed' : ''}">
              <div class="timeline-dot">🍽️</div>
              <div class="timeline-step-title">Delivered</div>
              <div class="timeline-step-time">${order.deliveredTime || '1:05 PM'}</div>
            </div>
          </div>

          <!-- Estimated Delivery Box with Scooter Graphic -->
          <div class="tracking-eta-box">
            <div>
              <div class="eta-left-text">Estimated Delivery</div>
              <div class="eta-left-val">${order.step >= 4 ? 'Delivered' : (order.eta || '15 - 20 mins')}</div>
            </div>
            <div>
              ${MowGraphics.scooterRider(90, 65)}
            </div>
          </div>
        </div>

        <!-- Restaurant & Dish Card matching Panel 7 -->
        <div class="checkout-step-card" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; cursor:pointer;" onclick="MowRouter.navigateTo('/restaurants/${order.restaurantId || 'behrouz-biryani'}')">
          <div style="display:flex; align-items:center; gap:16px;">
            <div style="width:64px; height:64px; border-radius:12px; overflow:hidden; border:1px solid var(--border-subtle);">
              <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=200&q=80" alt="Behrouz Biryani" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Behrouz Biryani')}'">
            </div>
            <div>
              <strong style="color:#FFF; font-size:16px;">Behrouz Biryani</strong>
              <div style="font-size:13.5px; color:var(--text-muted); margin-top:2px;">Chicken Biryani, Masala Chai</div>
            </div>
          </div>
          <div style="font-size:24px; color:var(--text-muted);">&rsaquo;</div>
        </div>

        <!-- Need Help Section matching Panel 7 -->
        <div style="margin-top: 30px;">
          <h4 style="font-size: 15px; color: #FFF; margin-bottom: 14px;">Need Help?</h4>
          <div style="display: flex; gap: 16px;">
            <button class="btn-secondary" style="gap:8px;" onclick="MowApp.openHelpModal()">
              <span>📞</span> Call Support
            </button>
            <button class="btn-secondary" style="gap:8px;" onclick="MowRouter.navigateTo('/ai-assistant')">
              <span>💬</span> Chat with Us
            </button>
          </div>
        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 9: ORDERS HISTORY (/orders)
     ========================================================= */
  function renderOrdersHistoryPage(){
    const outlet = document.getElementById('appContent');
    outlet.innerHTML = `
      <div class="container" style="padding: 40px 0 60px 0; max-width: 900px;">
        <div class="section-header">
          <div>
            <h1 class="section-title">My Orders</h1>
            <p class="section-subtitle">Track ongoing deliveries and review previous orders</p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${AppState.orders.map(o => `
            <div class="checkout-step-card" style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:6px;">
                  <strong style="font-size: 17px; color: #FFF;">${o.restaurant}</strong>
                  <span class="badge-pill ${o.step === 4 ? 'badge-green' : 'badge-gold'}">${o.status}</span>
                </div>
                <div style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 8px;">
                  Order #${o.id} &bull; ${o.date}
                </div>
                <div style="font-size: 14px; color: var(--text-secondary);">
                  ${(o.items || []).map(i => `${i.name} (x${i.qty})`).join(', ')}
                </div>
                <div style="font-size: 15px; font-weight: 700; color: #FFF; margin-top: 8px;">
                  Total: ₹${o.total}
                </div>
              </div>

              <div style="display:flex; flex-direction:column; gap:10px;">
                <button class="btn-primary" style="padding: 8px 20px; font-size: 13px;" onclick="MowRouter.navigateTo('/orders/${o.id}')">
                  ${o.step < 4 ? 'Track Order' : 'View Details'}
                </button>
                <button class="btn-secondary" style="padding: 8px 20px; font-size: 13px;" onclick="MowApp.reorder('${o.id}')">
                  Reorder
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* =========================================================
     PAGE 10: MOWMOW AI ASSISTANT (/ai-assistant) — Panel 8
     ========================================================= */
  function renderAIAssistantPage(){
    const outlet = document.getElementById('appContent');
    outlet.innerHTML = `
      <div class="container ai-workspace-grid">
        
        <!-- Left Sidebar Options matching Panel 8 -->
        <aside class="ai-nav-sidebar">
          <div style="padding: 10px 14px 16px 14px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 10px;">
            <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 700; color: #FFF;">MowMow AI</div>
            <small style="color: var(--text-muted); font-size: 12px;">Your personal food assistant</small>
          </div>
          <button class="ai-nav-item active" onclick="MowApp.switchAITab('chat', this)">💬 AI Chat</button>
          <button class="ai-nav-item" onclick="MowApp.switchAITab('recommendations', this)">✦ Recommendations</button>
          <button class="ai-nav-item" onclick="MowApp.openMealBuilderModal()">🥗 Meal Builder</button>
          <button class="ai-nav-item" onclick="MowApp.switchAITab('nutrition', this)">💪 Diet &amp; Nutrition</button>
          <button class="ai-nav-item" onclick="MowApp.openFoodImageModal()">📷 Food from Image</button>
          <button class="ai-nav-item" onclick="MowApp.openHelpModal()">❓ Order Help</button>
        </aside>

        <!-- Main Conversational Panel with Robot Mascot Header -->
        <div class="ai-chat-panel">
          
          <div class="ai-chat-messages" id="aiChatStream">
            
            <!-- Bot Introduction with Mascot matching Panel 8 -->
            <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
              <div style="flex-shrink: 0;">
                ${MowGraphics.robotMascot(80, 80)}
              </div>
              <div class="msg-bubble" style="background: rgba(43, 27, 19, 0.85); border: 1px solid var(--border-medium); border-radius: 20px; padding: 20px 24px;">
                <div style="font-weight: 700; color: #FFF; font-size: 16px; margin-bottom: 6px;">Hi! I'm MowMow AI 🤖</div>
                <div style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
                  Tell me what you're craving, your budget or diet preferences.<br>I'll suggest the best dishes for you!
                </div>
              </div>
            </div>

            <!-- Dynamic Messages Stream -->
            ${AppState.aiMessages.slice(1).map(msg => `
              <div class="chat-msg-row ${msg.sender}">
                ${msg.sender === 'bot' ? '<div class="bot-avatar-circle">🤖</div>' : ''}
                <div class="msg-bubble">
                  ${msg.text}
                  ${msg.cards ? `<div class="food-grid" style="grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 14px;">${msg.cards.map(f => renderFoodCardHTML(f)).join('')}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Quick Suggested Prompts matching Panel 8 -->
          <div style="padding: 0 24px 14px 24px;">
            <div class="ai-quick-prompts-wrap">
              <button class="prompt-chip" onclick="MowApp.sendPrompt('High protein food under ₹300')">High protein food under ₹300</button>
              <button class="prompt-chip" onclick="MowApp.sendPrompt('Healthy dinner options')">Healthy dinner options</button>
              <button class="prompt-chip" onclick="MowApp.sendPrompt('Show me best biryani')">Show me best biryani</button>
              <button class="prompt-chip" onclick="MowApp.sendPrompt('Suggest a meal for the gym')">Suggest a meal for the gym</button>
              <button class="prompt-chip" onclick="MowApp.sendPrompt('Vegetarian options')">Vegetarian options</button>
              <button class="prompt-chip" onclick="MowApp.sendPrompt('Less spicy food')">Less spicy food</button>
            </div>
          </div>

          <!-- Bottom Chat Input Bar with Microphone -->
          <form class="ai-chat-input-bar" onsubmit="event.preventDefault(); MowApp.handleChatSubmit();">
            <input type="text" id="aiChatInput" class="chat-input-field" placeholder="Ask anything about food...">
            <button type="button" class="btn-icon" id="aiVoiceBtn" onclick="MowApp.triggerVoiceAssistant()" title="Voice Assistant">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            </button>
            <button type="submit" class="hero-search-btn" style="width: 42px; height: 42px;" title="Send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 11: USER PROFILE (/profile) — Exact Match to Panel 9
     ========================================================= */
  function renderProfilePage(){
    const outlet = document.getElementById('appContent');
    outlet.innerHTML = `
      <div class="container profile-layout-grid">
        
        <!-- Left Profile Sidebar matching Panel 9 -->
        <aside class="ai-nav-sidebar">
          <button class="ai-nav-item active">👤 Profile</button>
          <button class="ai-nav-item" data-route="/orders">🛍️ My Orders</button>
          <button class="ai-nav-item" onclick="MowApp.showFavoritesModal()">❤️ Favorites</button>
          <button class="ai-nav-item" onclick="MowApp.openChangeAddressModal()">📍 Addresses</button>
          <button class="ai-nav-item" onclick="MowApp.openPaymentMethodsModal()">💳 Payment Methods</button>
          <button class="ai-nav-item" onclick="MowApp.openSettingsModal()">🔔 Notifications</button>
          <button class="ai-nav-item" onclick="MowApp.openSettingsModal()">⚙️ Settings</button>
          <button class="ai-nav-item" onclick="MowApp.openHelpModal()">❓ Help &amp; Support</button>
          <button class="ai-nav-item" style="color: var(--danger);" onclick="MowApp.logout()">↪ Logout</button>
        </aside>

        <!-- Center: Profile Personal Information matching Panel 9 -->
        <div class="profile-card-center">
          <div class="profile-head-row">
            <div class="profile-user-left">
              <div class="profile-big-avatar">TP</div>
              <div>
                <h2 style="font-family: var(--font-serif); font-size: 24px; color: #FFF; margin-bottom: 4px;">
                  ${AppState.user.name}
                </h2>
                <p style="color: var(--text-muted); font-size: 14px;">${AppState.user.phone}</p>
              </div>
            </div>
            <button class="btn-secondary" onclick="MowApp.openEditProfileModal()">Edit Profile</button>
          </div>

          <h3 style="font-family: var(--font-serif); font-size: 18px; color: #FFF; margin-bottom: 18px;">
            Personal Information
          </h3>

          <div style="display: flex; flex-direction: column; gap: 18px; margin-bottom: 30px;">
            <div>
              <label style="font-size: 12px; color: var(--text-muted); text-transform: uppercase;">Name</label>
              <div style="font-size: 15px; color: #FFF; margin-top: 3px;">${AppState.user.name}</div>
            </div>
            <div>
              <label style="font-size: 12px; color: var(--text-muted); text-transform: uppercase;">Email</label>
              <div style="font-size: 15px; color: #FFF; margin-top: 3px;">${AppState.user.email}</div>
            </div>
            <div>
              <label style="font-size: 12px; color: var(--text-muted); text-transform: uppercase;">Location</label>
              <div style="font-size: 15px; color: #FFF; margin-top: 3px;">${AppState.user.location}</div>
            </div>
          </div>

        </div>

        <!-- Right: Membership & Points matching Panel 9 -->
        <div>
          <div class="vip-card">
            <div style="font-size: 24px; margin-bottom: 8px;">👑</div>
            <h3 style="font-family: var(--font-serif); font-size: 20px; color: #FFF; margin-bottom: 8px;">
              MowMow Plus
            </h3>
            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 18px; line-height: 1.5;">
              Unlock exclusive offers, free delivery and more!
            </p>
            <button class="btn-primary" style="width: 100%; padding: 10px;" onclick="MowApp.explorePlusPlans()">Explore Plans &rarr;</button>
          </div>

          <div class="loyalty-card">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
              <span style="font-size: 22px; color: var(--accent-gold);">★</span>
              <strong style="font-size: 26px; font-weight:700; color:#FFF;">${AppState.user.loyaltyPoints}</strong>
            </div>
            <h4 style="font-size: 14.5px; color: #FFF; margin-bottom: 3px;">Loyalty Points</h4>
            <p style="font-size: 12.5px; color: var(--text-muted);">Earn points every order</p>
          </div>
        </div>

      </div>
    `;
  }

  /* =========================================================
     PAGE 12: OFFERS (/offers)
     ========================================================= */
  function renderOffersPage(){
    const outlet = document.getElementById('appContent');
    outlet.innerHTML = `
      <div class="container" style="padding: 40px 0 60px 0;">
        <div class="restaurants-hero-banner" style="height: 220px;">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80" alt="Special Offers" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('Offers')}'">
          <div class="banner-overlay"></div>
          <div class="banner-content">
            <h1>Special Offers &amp; Promotions</h1>
            <p>Save more on exquisite dining with our verified member vouchers.</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 30px;">
          ${MOW_DATA.offers.map(offer => `
            <div class="checkout-step-card" style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <span class="badge-pill badge-gold" style="margin-bottom: 8px;">${offer.tag}</span>
                <h3 style="font-family: var(--font-serif); font-size: 20px; color: #FFF; margin-bottom: 6px;">${offer.title}</h3>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-bottom: 10px;">${offer.description}</p>
                <div style="font-size: 12.5px; color: var(--text-secondary);">Valid until: ${offer.validUntil} &bull; Min Order: ₹${offer.minOrder}</div>
              </div>
              <div>
                <button class="btn-primary" style="padding: 10px 20px; font-size: 13px;" onclick="MowApp.copyCoupon('${offer.code}')">
                  ${AppState.appliedCoupon?.code === offer.code ? 'Applied ✓' : `Apply ${offer.code}`}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* =========================================================
     PAGE 13: ABOUT MOWMOW (/about)
     ========================================================= */
  function renderAboutPage(){
    const outlet = document.getElementById('appContent');
    outlet.innerHTML = `
      <div class="container" style="padding: 40px 0 80px 0; max-width: 960px;">
        <div style="text-align: center; margin-bottom: 50px;">
          <div class="hero-eyebrow">Good Food. Happier You.</div>
          <h1 style="font-family: var(--font-serif); font-size: 46px; color: #FFF; margin-bottom: 16px;">The MowMow Philosophy</h1>
          <p style="font-size: 18px; color: var(--text-secondary); max-width: 700px; margin: 0 auto; line-height: 1.6;">
            We believe that discovering what to eat should be as satisfying as the feast itself. Combining gourmet culinary artistry with intelligent conversational AI.
          </p>
        </div>

        <div class="promo-card" style="height: 340px; margin-bottom: 50px;">
          <div class="promo-card-bg">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="Restaurant Ambiance" onerror="this.onerror=null; this.src='${MowGraphics.fallbackFood('MowMow Dining')}'">
          </div>
          <div class="promo-card-overlay"></div>
          <div class="promo-card-content" style="max-width: 600px;">
            <div class="badge-pill badge-gold" style="align-self: flex-start;">OUR MISSION</div>
            <h2 class="promo-card-title" style="font-size: 28px;">Curated for Connoisseurs, Powered by Intelligence</h2>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 36px; margin-bottom: 60px;">
          <div class="checkout-step-card">
            <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 12px;">✦ AI-Driven Personalization</h3>
            <p style="color: var(--text-muted); font-size: 15px; line-height: 1.7;">
              Our contextual recommendation engine analyzes your dietary goals, protein targets, spice tolerances, and past dining history to find the exact dish your palate is craving.
            </p>
          </div>
          <div class="checkout-step-card">
            <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 12px;">🎙️ Voice-Activated Ordering</h3>
            <p style="color: var(--text-muted); font-size: 15px; line-height: 1.7;">
              Simply speak your culinary mood—"Show me a healthy dinner under ₹300" or "Spicy chicken biryani"—and MowMow handles matching and cart placement seamlessly.
            </p>
          </div>
        </div>

        <div style="text-align: center;">
          <button class="btn-primary" data-route="/discover">Discover What's Cooking &rarr;</button>
        </div>
      </div>
    `;
  }

  // Register All Routes
  function initRouter(){
    MowRouter.addRoute('/', renderHomePage);
    MowRouter.addRoute('/home', renderHomePage);
    MowRouter.addRoute('/discover', renderDiscoverPage);
    MowRouter.addRoute('/restaurants', renderRestaurantsPage);
    MowRouter.addRoute('/restaurants/:id', renderRestaurantDetailPage);
    MowRouter.addRoute('/food/:id', renderFoodDetailPage);
    MowRouter.addRoute('/cart', renderCartPage);
    MowRouter.addRoute('/checkout', renderCheckoutPage);
    MowRouter.addRoute('/orders', renderOrdersHistoryPage);
    MowRouter.addRoute('/orders/:id', renderOrderTrackPage);
    MowRouter.addRoute('/ai-assistant', renderAIAssistantPage);
    MowRouter.addRoute('/profile', renderProfilePage);
    MowRouter.addRoute('/offers', renderOffersPage);
    MowRouter.addRoute('/about', renderAboutPage);
  }

  // Global App Actions for UI
  window.MowApp = {
    addDish: (id) => {
      const food = MOW_DATA.foods.find(f => f.id === id);
      if (food) addToCart(food, 1);
    },
    toggleFav: (id) => {
      toggleFavorite(id);
      MowRouter.resolveRoute();
    },
    filterByCategory: (catId) => {
      AppState.activeDiscoverCategory = catId;
      MowRouter.navigateTo('/discover');
    },
    searchCuisine: (catId) => {
      AppState.activeDiscoverCategory = catId;
      MowRouter.navigateTo('/discover');
    },
    handleHeroSearch: () => {
      const q = document.getElementById('heroSearchInput')?.value.trim();
      if (q) {
        AppState.discoverQuery = q;
        AppState.activeDiscoverCategory = 'all';
        MowRouter.navigateTo('/discover');
      }
    },
    handleDiscoverSearchInput: (val) => {
      AppState.discoverQuery = val;
      renderDiscoverPage();
    },
    resetDiscoverFilters: () => {
      AppState.activeDiscoverCategory = 'all';
      AppState.discoverQuery = '';
      AppState.discoverFilters = { cuisines: [], priceRange: null, diet: 'all' };
      renderDiscoverPage();
    },
    toggleCuisineFilter: (cuisine) => {
      const idx = AppState.discoverFilters.cuisines.indexOf(cuisine);
      if (idx > -1) AppState.discoverFilters.cuisines.splice(idx, 1);
      else AppState.discoverFilters.cuisines.push(cuisine);
      renderDiscoverPage();
    },
    setPriceRangeFilter: (range) => {
      AppState.discoverFilters.priceRange = range;
      renderDiscoverPage();
    },
    filterRestaurants: (filter, btn) => {
      document.querySelectorAll('.filter-chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const container = document.getElementById('restaurantsListContainer');
      if (!container) return;
      let rests = [...MOW_DATA.restaurants];
      if (filter === 'rating') rests = rests.filter(r => r.rating >= 4.5);
      if (filter === 'fast') rests = rests.filter(r => r.eta.includes('15') || r.eta.includes('20'));
      if (filter === 'veg') rests = rests.filter(r => r.cuisine.includes('Healthy') || r.cuisine.includes('Indian'));
      container.innerHTML = rests.map(r => renderRestaurantCardHTML(r)).join('');
    },
    switchDetailThumb: (url, el) => {
      const main = document.getElementById('detailMainImg');
      if (main) main.src = url;
      document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
    },
    selectPortion: (extra, el) => {
      document.querySelectorAll('#portionBtn1, #portionBtn2').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      el.dataset.extra = extra;
      MowApp.calcDetailTotal(249);
    },
    calcDetailTotal: (basePrice) => {
      let portionExtra = 0;
      const portionActive = document.querySelector('#portionBtn2.active');
      if (portionActive) portionExtra = 30;
      
      let addonTotal = 0;
      if (document.getElementById('detailAddonMasala')?.checked) addonTotal += 30;
      if (document.getElementById('detailAddonChicken')?.checked) addonTotal += 80;

      const qty = Number(document.getElementById('detailQtyValue')?.textContent || 1);
      const totalOne = basePrice + portionExtra + addonTotal;
      const grand = totalOne * qty;
      const display = document.getElementById('detailPriceDisplay');
      if (display) display.textContent = `₹${totalOne}`;
    },
    adjustDetailQty: (delta, basePrice) => {
      const qtyElem = document.getElementById('detailQtyValue');
      if (!qtyElem) return;
      let current = Number(qtyElem.textContent || 1) + delta;
      if (current < 1) current = 1;
      qtyElem.textContent = current;
      MowApp.calcDetailTotal(basePrice);
    },
    submitFoodDetailAdd: (foodId) => {
      const food = MOW_DATA.foods.find(f => f.id === foodId);
      if (!food) return;
      const qty = Number(document.getElementById('detailQtyValue')?.textContent || 1);
      addToCart(food, qty);
    },
    changeCartQty: (id, delta) => {
      updateCartItemQty(id, delta);
      renderCartPage();
    },
    removeCart: (id) => {
      removeCartItem(id);
      renderCartPage();
    },
    applyCoupon: () => {
      const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
      const match = MOW_DATA.offers.find(o => o.code === code);
      if (match) {
        AppState.appliedCoupon = match;
        saveState();
        showToast(`Coupon <strong>${code}</strong> applied successfully! 🎉`);
        renderCartPage();
      } else {
        showToast('Invalid demo coupon code. Try MOW50 or HEALTHY20', 'error');
      }
    },
    copyCoupon: (code) => {
      const match = MOW_DATA.offers.find(o => o.code === code);
      if (match) {
        AppState.appliedCoupon = match;
        saveState();
        showToast(`Coupon <strong>${code}</strong> applied! Proceed to checkout to redeem.`);
        renderOffersPage();
      }
    },
    placeDemoOrder: (total) => {
      const newOrder = {
        id: 'MM' + Math.floor(100000 + Math.random() * 900000),
        restaurant: AppState.cart[0]?.restaurant || 'Behrouz Biryani',
        restaurantId: AppState.cart[0]?.restaurantId || 'behrouz-biryani',
        items: [...AppState.cart],
        total: total,
        status: 'Preparing',
        step: 2,
        orderPlacedTime: 'Just now',
        preparingTime: '12:38 PM',
        outForDeliveryTime: 'Pending',
        deliveredTime: 'Pending',
        eta: '15 - 20 mins',
        date: 'Today · Just now',
        current: true
      };
      AppState.orders.unshift(newOrder);
      AppState.cart = [];
      saveState();
      showToast('Order confirmed! Tracking live preparation...');
      MowRouter.navigateTo(`/orders/${newOrder.id}`);
    },
    reorder: (orderId) => {
      const order = AppState.orders.find(o => o.id === orderId);
      if (order && order.items) {
        order.items.forEach(i => {
          const match = MOW_DATA.foods.find(f => f.name === i.name) || { id: 'food-chicken-biryani', name: i.name, restaurant: order.restaurant, price: i.price, photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80' };
          addToCart(match, i.qty);
        });
        MowRouter.navigateTo('/cart');
      }
    },
    sendPrompt: async (text) => {
      const query = String(text || '').trim();
      if (!query) return;
      AppState.aiMessages.push({ sender: 'user', text: query });
      renderAIAssistantPage();
      AppState.aiMessages.push({ sender: 'bot', text: 'Finding dishes that match your request…', cards: [] });
      renderAIAssistantPage();
      const foodCatalog = MOW_DATA.foods.map(f => ({
        id: f.id, name: f.name, restaurant: f.restaurant, price: Number(f.price) || 0,
        protein: Number(f.protein) || 0, calories: Number(f.calories) || 0, rating: Number(f.rating) || 0,
        category: f.category || '', cuisine: f.cuisine || '', diet: f.diet || '', spicy: f.spicy || '',
        tags: Array.isArray(f.tags) ? f.tags : [], description: f.description || ''
      }));
      const apiUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? '/api/gemini' : '/.netlify/functions/gemini';
      try {
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: 'recommend', query, foods: foodCatalog }) });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'AI request failed');
        const allowed = new Set(foodCatalog.map(f => String(f.id)));
        const ids = (Array.isArray(result.ids) ? result.ids : []).map(String).filter(id => allowed.has(id));
        const cards = ids.map(id => MOW_DATA.foods.find(f => String(f.id) === id)).filter(Boolean);
        const message = result.answer || (cards.length ? 'Here are dishes that match your request:' : 'I could not find a matching dish in the current menu. Try another request.');
        AppState.aiMessages.pop();
        AppState.aiMessages.push({ sender: 'bot', text: message, cards });
      } catch (error) {
        console.error('MowMow AI:', error);
        AppState.aiMessages.pop();
        AppState.aiMessages.push({ sender: 'bot', text: `I couldn't reach the AI service. ${error.message || 'Check your Gemini API key and server configuration.'} No unrelated foods were substituted.`, cards: [] });
      }
      renderAIAssistantPage();
      const stream = document.getElementById('aiChatStream');
      if (stream) stream.scrollTop = stream.scrollHeight;
    },
    handleChatSubmit: () => {
      const input = document.getElementById('aiChatInput');
      if (input && input.value.trim()) {
        MowApp.sendPrompt(input.value.trim());
        input.value = '';
      }
    },
    switchAITab: (tab, btn) => {
      document.querySelectorAll('.ai-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    },
    openMealBuilderModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 24px; color: #FFF; margin-bottom: 12px;">🥗 AI Meal Builder</h3>
        <p style="color: var(--text-muted); font-size: 14.5px; margin-bottom: 20px;">Specify your target budget and dietary preferences. MowMow will assemble a balanced nutritional meal.</p>
        <div style="margin-bottom: 16px;">
          <label style="font-size: 13px; color: var(--text-secondary); display:block; margin-bottom: 6px;">Budget Cap</label>
          <input type="number" id="mealBudgetInput" value="350" class="hero-search-input" style="background:var(--bg-input); border:1px solid var(--border-medium); padding:10px 14px; border-radius:var(--radius-sm); width:100%;">
        </div>
        <button class="btn-primary" style="width: 100%;" onclick="MowApp.generateMealCombination()">Build Balanced Combo</button>
      `);
    },
    generateMealCombination: async () => {
      const input = document.getElementById('mealBudgetInput');
      const budget = Number(input?.value || 350);
      if (!Number.isFinite(budget) || budget <= 0) {
        openModal('<h3 style="font-family:var(--font-serif);color:#FFF">Enter a valid budget</h3><p>Please enter a budget greater than ₹0.</p>');
        return;
      }
      const foods = MOW_DATA.foods.map(f => ({
        id: f.id, name: f.name, restaurant: f.restaurant, price: Number(f.price) || 0,
        protein: Number(f.protein) || 0, calories: Number(f.calories) || 0, rating: Number(f.rating) || 0,
        category: f.category || '', cuisine: f.cuisine || '', diet: f.diet || '', spicy: f.spicy || '',
        tags: Array.isArray(f.tags) ? f.tags : [], description: f.description || ''
      }));
      const apiUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? '/api/gemini' : '/.netlify/functions/gemini';
      try {
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: 'meal', query: 'Build a balanced meal combo', budget, foods }) });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'AI request failed');
        const allowed = new Set(foods.filter(f => f.price <= budget).map(f => String(f.id)));
        let picks = (Array.isArray(result.ids) ? result.ids : []).map(id => MOW_DATA.foods.find(f => String(f.id) === String(id))).filter(f => f && allowed.has(String(f.id)));
        let total = 0;
        picks = picks.filter((f, i) => { if (i > 3 || total + Number(f.price || 0) > budget) return false; total += Number(f.price || 0); return true; });
        if (!picks.length) {
          openModal(`<h3 style="font-family:var(--font-serif);font-size:22px;color:#FFF;margin-bottom:12px">No combo found</h3><p style="color:var(--text-muted)">${String(result.answer || `No suitable combo fits within ₹${budget}. Try increasing your budget.`).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}</p><button class="btn-primary" onclick="closeModal()" style="width:100%">Change budget</button>`);
          return;
        }
        const escapeText = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        openModal(`
          <h3 style="font-family:var(--font-serif);font-size:22px;color:#FFF;margin-bottom:12px">AI Crafted Combo</h3>
          <p style="color:var(--text-muted);font-size:14px;margin-bottom:16px">${escapeText(result.answer || `Personalized picks within your ₹${budget} budget.`)}</p>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px">
            ${picks.map(f => `<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--bg-secondary);padding:12px;border-radius:var(--radius-sm)"><div><strong style="color:#FFF">${escapeText(f.name)}</strong><div style="font-size:12px;color:var(--text-muted)">${Number(f.protein)||0}g protein • ₹${Number(f.price)||0}</div></div><button class="btn-add-food" onclick="MowApp.addDish('${String(f.id).replace(/[^a-zA-Z0-9_-]/g,'')}')">Add</button></div>`).join('')}
          </div>
          <p style="margin-bottom:14px;color:var(--text-muted)">Budget: ₹${budget} · Remaining: ₹${budget-total}</p>
          <button class="btn-primary" style="width:100%" onclick="MowApp.addAllToCart(${JSON.stringify(picks.map(f=>f.id))})">Add All to Cart • ₹${total}</button>
        `);
      } catch (error) {
        console.error('MowMow meal builder:', error);
        openModal(`<h3 style="font-family:var(--font-serif);color:#FFF">AI connection error</h3><p style="color:var(--text-muted)">${String(error.message || 'Check your Gemini API key and backend configuration.').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}</p><button class="btn-primary" onclick="closeModal()" style="width:100%">Close</button>`);
      }
    },
    addAllToCart: (ids) => {
      ids.forEach(id => {
        const food = MOW_DATA.foods.find(f => f.id === id);
        if (food) addToCart(food, 1);
      });
      closeModal();
      MowRouter.navigateTo('/cart');
    },
    openFoodImageModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 12px;">📷 Food from Image</h3>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 18px;">Upload or snap a photo of any meal to recognize calories, protein, and find matching restaurant menus.</p>
        <div style="border: 2px dashed var(--border-medium); border-radius: var(--radius-md); padding: 40px 20px; text-align: center; margin-bottom: 20px; cursor: pointer;" onclick="document.getElementById('foodImgFileInput').click()">
          <div style="font-size: 40px; margin-bottom: 8px;">📤</div>
          <p style="color: #FFF; font-weight: 500;">Click to upload food photo</p>
          <small style="color: var(--text-muted);">Supports JPG, PNG &amp; WEBP</small>
          <input type="file" id="foodImgFileInput" style="display:none" onchange="MowApp.simulateFoodVision()">
        </div>
      `);
    },
    simulateFoodVision: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 10px;">Identified: Royal Biryani 🍗</h3>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">AI Vision Match: 96% confidence</p>
        <div style="background:var(--bg-secondary); padding:16px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <div style="font-size:14px; color:#FFF; margin-bottom:4px;">Estimated Nutrition: <strong>32g Protein &bull; 520 kcal</strong></div>
          <div style="font-size:13px; color:var(--text-muted);">Closest Match in Bangalore: <strong>Behrouz Biryani</strong> (₹249)</div>
        </div>
        <button class="btn-primary" style="width: 100%;" onclick="closeModal(); MowRouter.navigateTo('/food/food-chicken-biryani')">View Matched Dish &rarr;</button>
      `);
    },
    triggerVoiceAssistant: () => {
      if (window.MowMowVoice) {
        showToast('🎙️ Listening... Tell MowMow your craving (e.g. "Chicken Biryani")');
        window.MowMowVoice.start({
          set value(v) {
            showToast(`Heard: "${v}"`);
            MowApp.sendPrompt(v);
          }
        });
      } else {
        showToast('Voice assistant active. Try typing your craving!');
      }
    },
    openChangeAddressModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 14px;">Select Delivery Address</h3>
        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
          ${AppState.user.addresses.map((a, i) => `
            <div style="background:var(--bg-secondary); padding:14px; border-radius:var(--radius-sm); cursor:pointer; border:1px solid var(--border-subtle);" onclick="MowApp.selectAddress(${i})">
              <strong style="color:#FFF;">${a.title}</strong>
              <p style="color:var(--text-muted); font-size:13px; margin-top:3px;">${a.address}</p>
            </div>
          `).join('')}
        </div>
      `);
    },
    selectAddress: (idx) => {
      const selected = AppState.user.addresses[idx];
      document.getElementById('currentLocationText').textContent = selected.title;
      closeModal();
      showToast(`Delivering to: ${selected.title}`);
    },
    openEditProfileModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 14px;">Edit Profile</h3>
        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
          <div>
            <label style="font-size:12px; color:var(--text-muted);">Your Name</label>
            <input type="text" id="editUserName" value="${AppState.user.name}" class="hero-search-input" style="background:var(--bg-input); border:1px solid var(--border-medium); padding:10px 14px; border-radius:var(--radius-sm); width:100%;">
          </div>
          <div>
            <label style="font-size:12px; color:var(--text-muted);">Phone Number</label>
            <input type="text" id="editUserPhone" value="${AppState.user.phone}" class="hero-search-input" style="background:var(--bg-input); border:1px solid var(--border-medium); padding:10px 14px; border-radius:var(--radius-sm); width:100%;">
          </div>
        </div>
        <button class="btn-primary" style="width:100%;" onclick="MowApp.saveProfileEdits()">Save Changes</button>
      `);
    },
    saveProfileEdits: () => {
      const name = document.getElementById('editUserName')?.value.trim();
      const phone = document.getElementById('editUserPhone')?.value.trim();
      if (name) AppState.user.name = name;
      if (phone) AppState.user.phone = phone;
      saveState();
      document.getElementById('headerUserName').textContent = AppState.user.name.split(' ')[0];
      closeModal();
      showToast('Profile updated successfully! ✨');
      renderProfilePage();
    },
    openPaymentMethodsModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 14px;">Payment Methods</h3>
        <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">Saved UPI IDs &amp; Cards for fast checkout.</p>
        <div style="background:var(--bg-secondary); padding:14px; border-radius:var(--radius-sm); margin-bottom:12px;">
          <strong style="color:#FFF;">Google Pay UPI</strong>
          <div style="font-size:13px; color:var(--text-muted);">tejas@okaxis &bull; Primary</div>
        </div>
        <div style="background:var(--bg-secondary); padding:14px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <strong style="color:#FFF;">HDFC Visa Debit Card</strong>
          <div style="font-size:13px; color:var(--text-muted);">&bull;&bull;&bull;&bull; 4821 &bull; Exp: 09/28</div>
        </div>
        <button class="btn-secondary" style="width:100%;" onclick="closeModal()">Close</button>
      `);
    },
    openSettingsModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 14px;">Preferences &amp; Settings</h3>
        <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:20px;">
          <label class="filter-checkbox-item">
            <input type="checkbox" checked>
            <span>Order updates via SMS &amp; WhatsApp</span>
          </label>
          <label class="filter-checkbox-item">
            <input type="checkbox" checked>
            <span>Personalized AI food recommendations</span>
          </label>
          <label class="filter-checkbox-item">
            <input type="checkbox">
            <span>Low-data mode for slow connections</span>
          </label>
        </div>
        <button class="btn-primary" style="width:100%;" onclick="closeModal(); showToast('Settings saved');">Save Settings</button>
      `);
    },
    openHelpModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 12px;">Help &amp; Customer Support</h3>
        <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">We are here to assist with orders, live delivery tracking, or restaurant inquiries.</p>
        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
          <div style="background:var(--bg-secondary); padding:14px; border-radius:var(--radius-sm);">
            <strong style="color:#FFF;">Customer Helpline</strong>
            <div style="font-size:13.5px; color:var(--accent-gold);">+91 80 4912 3456 (24/7)</div>
          </div>
          <div style="background:var(--bg-secondary); padding:14px; border-radius:var(--radius-sm);">
            <strong style="color:#FFF;">Email Support</strong>
            <div style="font-size:13.5px; color:var(--text-secondary);">support@mowmow.kitchen</div>
          </div>
        </div>
        <button class="btn-primary" style="width:100%;" onclick="closeModal()">Got it</button>
      `);
    },
    openTermsModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 12px;">Terms &amp; Privacy</h3>
        <p style="color:var(--text-muted); font-size:14px; line-height:1.6; margin-bottom:20px;">
          MowMow is an experimental luxury dining platform. All transactions in this environment operate in high-fidelity demonstration mode. No actual debit occurs.
        </p>
        <button class="btn-secondary" style="width:100%;" onclick="closeModal()">Close</button>
      `);
    },
    openStoryModal: () => {
      openModal(`
        <h3 style="font-family: var(--font-serif); font-size: 22px; color: #FFF; margin-bottom: 12px;">Our Brand Story 🎬</h3>
        <p style="color:var(--text-muted); font-size:15px; line-height:1.7; margin-bottom:20px;">
          MowMow was born out of a simple conviction: luxury dining shouldn't end at the restaurant door. We partner exclusively with master chefs and top culinary brands to deliver authentic warmth, aroma, and presentation to your home.
        </p>
        <button class="btn-primary" style="width:100%;" onclick="closeModal(); MowRouter.navigateTo('/about')">Read Full Story &rarr;</button>
      `);
    },
    explorePlusPlans: () => {
      showToast('You are already enrolled in MowMow Plus VIP Demo! Enjoy zero delivery fees.');
    },
    logout: () => {
      showToast('Logged out of demo session');
      MowRouter.navigateTo('/');
    }
  };

  // Wire Modal Close Actions
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
  document.getElementById('appModalOverlay')?.addEventListener('click', e => {
    if (e.target.id === 'appModalOverlay') closeModal();
  });

  document.getElementById('headerLocationBtn')?.addEventListener('click', () => {
    MowApp.openChangeAddressModal();
  });

  // Initialize Application on Page Load
  window.addEventListener('DOMContentLoaded', () => {
    initRouter();
    updateHeaderCartBadge();
    document.getElementById('headerUserName').textContent = AppState.user.name.split(' ')[0];
    document.getElementById('headerUserAvatar').textContent = AppState.user.name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();
    MowRouter.resolveRoute();
  });

})();
