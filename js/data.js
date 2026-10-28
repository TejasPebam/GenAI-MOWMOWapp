/* =========================================================
   MowMow Luxury Data Store & Food Catalog
   Preserves existing demo records and enriches with reference items
   ========================================================= */

const MOW_DATA = {
  categories: [
    { id: 'all', name: 'All', icon: '🍽️', photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&q=80' },
    { id: 'biryani', name: 'Biryani', icon: '🍛', photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=200&q=80' },
    { id: 'north-indian', name: 'North Indian', icon: '🥘', photo: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80' },
    { id: 'south-indian', name: 'South Indian', icon: '🥞', photo: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200&q=80' },
    { id: 'chinese', name: 'Chinese', icon: '🍜', photo: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=200&q=80' },
    { id: 'fast-food', name: 'Fast Food', icon: '🍔', photo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80' },
    { id: 'healthy', name: 'Healthy', icon: '🥗', photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80' },
    { id: 'desserts', name: 'Desserts', icon: '🍨', photo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80' },
    { id: 'beverages', name: 'Beverages', icon: '🥤', photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80' }
  ],

  restaurants: [
    {
      id: 'behrouz-biryani',
      name: 'Behrouz Biryani',
      rating: 4.5,
      ratingCount: '12.2k',
      eta: '30-40 mins',
      priceForTwo: '₹249 for two',
      cuisine: 'Biryani, North Indian',
      tags: ['Biryani', 'North Indian'],
      photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80',
      description: 'Royal Persian recipe biryanis slow-cooked with aromatic long-grain basmati and secret royal spices.',
      address: '12th Main Road, Indiranagar, Bangalore',
      featured: true
    },
    {
      id: 'the-healthy-box',
      name: 'The Healthy Box',
      rating: 4.3,
      ratingCount: '8.9k',
      eta: '20-30 mins',
      priceForTwo: '₹199 for two',
      cuisine: 'Healthy, Salads, Bowls',
      tags: ['Healthy', 'Salads', 'Bowls'],
      photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80',
      description: 'Clean, macro-balanced nutrient bowls, fresh microgreen salads, and cold-pressed elixirs.',
      address: '80 Feet Road, Koramangala 4th Block, Bangalore',
      featured: true
    },
    {
      id: 'punjab-grill',
      name: 'Punjab Grill',
      rating: 4.6,
      ratingCount: '9.5k',
      eta: '30-35 mins',
      priceForTwo: '₹399 for two',
      cuisine: 'North Indian, Mughlai',
      tags: ['North Indian', 'Mughlai'],
      photo: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80',
      description: 'Authentic Punjabi heritage cuisine slow-cooked in charcoal tandoors with pure butter and spices.',
      address: 'Lavelle Road, Shanthala Nagar, Bangalore',
      featured: true
    },
    {
      id: 'chinese-wok',
      name: 'Chinese Wok',
      rating: 4.2,
      ratingCount: '7.8k',
      eta: '25-35 mins',
      priceForTwo: '₹149 for two',
      cuisine: 'Chinese, Asian, Noodles',
      tags: ['Chinese', 'Noodles'],
      photo: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1600&q=80',
      description: 'Authentic wok-tossed street and gourmet Asian noodles, dimsums, and aromatic gravies.',
      address: 'Church Street, Central Bangalore',
      featured: true
    },
    {
      id: 'pizza-hub',
      name: 'Pizza Hub',
      rating: 4.4,
      ratingCount: '7.9k',
      eta: '30-35 mins',
      priceForTwo: '₹249 for two',
      cuisine: 'Pizza, Italian, Fast Food',
      tags: ['Pizza', 'Fast Food'],
      photo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80',
      description: 'Hand-stretched sourdough pizzas baked in stone deck ovens with imported mozzarella and herbs.',
      address: 'HSR Layout, Sector 3, Bangalore',
      featured: true
    },
    {
      id: 'frosty-delights',
      name: 'Frosty Delights',
      rating: 4.6,
      ratingCount: '4.1k',
      eta: '15-20 mins',
      priceForTwo: '₹129 for two',
      cuisine: 'Desserts, Shakes, Beverages',
      tags: ['Desserts', 'Beverages'],
      photo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80',
      description: 'Artisanal Belgian ice creams, molten lava brownies, and thick protein milkshakes.',
      address: 'Residency Road, Bangalore',
      featured: true
    }
  ],

  foods: [
    {
      id: 'food-chicken-biryani',
      name: 'Chicken Biryani',
      restaurantId: 'behrouz-biryani',
      restaurant: 'Behrouz Biryani',
      price: 249,
      originalPrice: 299,
      discount: '17% OFF',
      rating: 4.5,
      ratingCount: '12.2k',
      eta: '30-40 mins',
      badge: 'Bestseller',
      category: 'biryani',
      cuisine: 'North Indian',
      diet: 'Non-veg',
      spicy: 'Medium',
      description: 'Aromatic basmati rice cooked with tender chicken, authentic spices and herbs.',
      photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80',
        'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80',
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80'
      ],
      protein: 32,
      calories: 520,
      carbs: 38,
      fat: 18,
      tags: ['Biryani', 'Protein Rich', 'Spicy', 'Popular Picks'],
      customizations: {
        portion: ['Regular', 'Extra Masala'],
        spiceLevels: ['Mild', 'Medium', 'Extra Spicy'],
        addOns: [
          { name: 'Extra Masala', price: 30 },
          { name: 'Extra Chicken', price: 80 },
          { name: 'Raita', price: 25 }
        ]
      }
    },
    {
      id: 'food-paneer-butter-masala',
      name: 'Paneer Butter Masala',
      restaurantId: 'the-healthy-box',
      restaurant: 'The Healthy Box',
      price: 199,
      originalPrice: 249,
      discount: '20% OFF',
      rating: 4.4,
      ratingCount: '8.1k',
      eta: '25-30 mins',
      badge: 'Popular',
      category: 'north-indian',
      cuisine: 'North Indian',
      diet: 'Veg',
      spicy: 'Medium',
      description: 'Cottage cheese cubes bathed in a velvety cashew and ripe tomato gravy seasoned with freshly ground spices.',
      photo: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80',
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80'
      ],
      protein: 18,
      calories: 460,
      carbs: 22,
      fat: 22,
      tags: ['North Indian', 'Vegetarian', 'Popular Picks'],
      customizations: {
        portion: ['Regular', 'Large (+₹60)'],
        spiceLevels: ['Mild', 'Medium', 'Spicy'],
        addOns: [
          { name: 'Butter Naan', price: 40 },
          { name: 'Jeera Rice', price: 60 }
        ]
      }
    },
    {
      id: 'food-masala-chai',
      name: 'Masala Chai',
      restaurantId: 'cafe-coffee-day',
      restaurant: 'Cafe Coffee Day',
      price: 49,
      originalPrice: 60,
      discount: '18% OFF',
      rating: 4.6,
      ratingCount: '15k',
      eta: '10-15 mins',
      badge: 'Classic',
      category: 'beverages',
      cuisine: 'Indian',
      diet: 'Veg',
      spicy: 'Mild',
      description: 'Handcrafted traditional Indian kadak chai brewed with fresh crushed ginger, green cardamom and cloves.',
      photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=80',
      gallery: ['https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80'],
      protein: 3,
      calories: 90,
      carbs: 14,
      fat: 3,
      tags: ['Beverages', 'Budget Friendly'],
      customizations: {
        portion: ['Regular Cup', 'Large Flask (+₹45)'],
        addOns: [{ name: 'Osmania Biscuits', price: 20 }]
      }
    },
    {
      id: 'food-grilled-chicken-bowl',
      name: 'Grilled Chicken Bowl',
      restaurantId: 'the-healthy-box',
      restaurant: 'The Healthy Box',
      price: 279,
      originalPrice: 320,
      discount: '15% OFF',
      rating: 4.8,
      ratingCount: '9.4k',
      eta: '20-25 mins',
      badge: 'High Protein',
      category: 'healthy',
      cuisine: 'Healthy',
      diet: 'Non-veg',
      spicy: 'Mild',
      description: 'Tender marinated chicken breast with roasted bell peppers, quinoa, baby spinach, and lemon vinaigrette.',
      photo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80'
      ],
      protein: 42,
      calories: 390,
      carbs: 18,
      fat: 10,
      tags: ['Healthy', 'Protein Rich', 'Popular Picks'],
      customizations: {
        portion: ['Regular', 'Double Protein (+₹90)'],
        spiceLevels: ['Herb & Lemon', 'Piri Piri'],
        addOns: [
          { name: 'Boiled Egg (2 pcs)', price: 40 },
          { name: 'Avocado Slice', price: 60 }
        ]
      }
    },
    {
      id: 'food-chocolate-lava-cake',
      name: 'Chocolate Lava Cake',
      restaurantId: 'frosty-delights',
      restaurant: 'Frosty Delights',
      price: 129,
      originalPrice: 159,
      discount: '19% OFF',
      rating: 4.7,
      ratingCount: '6.8k',
      eta: '15-20 mins',
      badge: 'Sweet Tooth',
      category: 'desserts',
      cuisine: 'Desserts',
      diet: 'Veg',
      spicy: 'None',
      description: 'Warm, gooey molten Belgian chocolate pudding cake with a velvety molten center.',
      photo: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80'
      ],
      protein: 6,
      calories: 360,
      carbs: 45,
      fat: 16,
      tags: ['Desserts', 'Popular Picks', 'Sweet'],
      customizations: {
        portion: ['Single', 'Double Pack (+₹110)'],
        addOns: [
          { name: 'Vanilla Ice Cream Scoop', price: 45 },
          { name: 'Choco Chip Sprinkles', price: 20 }
        ]
      }
    },
    {
      id: 'food-margherita-pizza',
      name: 'Artisan Margherita Pizza',
      restaurantId: 'pizza-hub',
      restaurant: 'Pizza Hub',
      price: 249,
      originalPrice: 299,
      discount: '17% OFF',
      rating: 4.5,
      ratingCount: '8.3k',
      eta: '30-35 mins',
      badge: 'Cheesy',
      category: 'fast-food',
      cuisine: 'Italian',
      diet: 'Veg',
      spicy: 'Mild',
      description: 'Hand-tossed sourdough crust with Italian pomodoro sauce, fresh mozzarella and sweet basil.',
      photo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
      gallery: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'],
      protein: 15,
      calories: 550,
      carbs: 60,
      fat: 20,
      tags: ['Fast Food', 'Pizza', 'Vegetarian'],
      customizations: {
        portion: ['Medium (10 inch)', 'Large (12 inch) (+₹120)'],
        addOns: [
          { name: 'Extra Mozzarella Cheese', price: 60 },
          { name: 'Garlic Dip', price: 30 }
        ]
      }
    },
    {
      id: 'food-veg-fried-rice',
      name: 'Wok Veg Fried Rice',
      restaurantId: 'chinese-wok',
      restaurant: 'Chinese Wok',
      price: 149,
      originalPrice: 180,
      discount: '17% OFF',
      rating: 4.3,
      ratingCount: '5.2k',
      eta: '20-25 mins',
      badge: 'Budget Friendly',
      category: 'chinese',
      cuisine: 'Chinese',
      diet: 'Veg',
      spicy: 'Medium',
      description: 'Steamed jasmine rice tossed in a blazing wok with baby corn, carrots, scallions and sesame soy.',
      photo: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80',
      gallery: ['https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80'],
      protein: 8,
      calories: 430,
      carbs: 65,
      fat: 12,
      tags: ['Chinese', 'Budget Friendly', 'Vegetarian'],
      customizations: {
        portion: ['Regular', 'Large Bowl (+₹50)'],
        addOns: [{ name: 'Veg Manchurian Gravy', price: 70 }]
      }
    },
    {
      id: 'food-butter-chicken',
      name: 'Murgh Makhani (Butter Chicken)',
      restaurantId: 'punjab-grill',
      restaurant: 'Punjab Grill',
      price: 299,
      originalPrice: 350,
      discount: '15% OFF',
      rating: 4.8,
      ratingCount: '11.5k',
      eta: '30-35 mins',
      badge: 'Chef Special',
      category: 'north-indian',
      cuisine: 'North Indian',
      diet: 'Non-veg',
      spicy: 'Medium',
      description: 'Tandoor-roasted shredded chicken simmered in silk butter tomato reduction with dried fenugreek.',
      photo: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=80',
      gallery: ['https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80'],
      protein: 34,
      calories: 610,
      carbs: 24,
      fat: 28,
      tags: ['North Indian', 'Protein Rich', 'Spicy'],
      customizations: {
        portion: ['Regular (2 pcs)', 'Half Handi (4 pcs) (+₹150)'],
        addOns: [{ name: 'Garlic Butter Naan', price: 50 }]
      }
    },
    {
      id: 'food-masala-dosa',
      name: 'Crispy Mysore Masala Dosa',
      restaurantId: 'the-healthy-box',
      restaurant: 'South Kitchen',
      price: 89,
      originalPrice: 110,
      discount: '19% OFF',
      rating: 4.6,
      ratingCount: '13k',
      eta: '15-20 mins',
      badge: 'Traditional',
      category: 'south-indian',
      cuisine: 'South Indian',
      diet: 'Veg',
      spicy: 'Medium',
      description: 'Crisp golden crepe coated with spicy red chutney and stuffed with seasoned potato mash, with coconut chutney.',
      photo: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80',
      gallery: ['https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80'],
      protein: 8,
      calories: 320,
      carbs: 52,
      fat: 8,
      tags: ['South Indian', 'Budget Friendly', 'Vegetarian'],
      customizations: {
        portion: ['Standard Single', 'With Vada (+₹35)'],
        addOns: [{ name: 'Extra Ghee Roast', price: 20 }, { name: 'Filter Coffee', price: 35 }]
      }
    },
    {
      id: 'food-strawberry-shake',
      name: 'Thick Strawberry Milkshake',
      restaurantId: 'frosty-delights',
      restaurant: 'Frosty Delights',
      price: 159,
      originalPrice: 190,
      discount: '16% OFF',
      rating: 4.6,
      ratingCount: '4.2k',
      eta: '15-20 mins',
      badge: 'Refreshing',
      category: 'beverages',
      cuisine: 'Desserts',
      diet: 'Veg',
      spicy: 'None',
      description: 'Real Mahabaleshwar strawberries hand-churned with rich dairy cream, vanilla beans and strawberry coulis.',
      photo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80',
      gallery: ['https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80'],
      protein: 8,
      calories: 310,
      carbs: 38,
      fat: 9,
      tags: ['Beverages', 'Sweet', 'Vegetarian'],
      customizations: {
        portion: ['Medium (350ml)', 'Large (500ml) (+₹40)'],
        addOns: [{ name: 'Whipped Cream Topping', price: 25 }]
      }
    }
  ],

  demoUser: {
    name: 'Tejas Pebam',
    phone: '+91 98765 43210',
    email: 'tejas@example.com',
    location: 'Bangalore, Karnataka',
    addresses: [
      {
        id: 'addr1',
        title: 'Home',
        address: '123, Hostel Block A, Alliance University, Anekal, Bangalore',
        selected: true
      },
      {
        id: 'addr2',
        title: 'Work / Campus',
        address: 'Innovation Lab 4, Tech Park, Electronic City Phase 1, Bangalore',
        selected: false
      }
    ],
    loyaltyPoints: 1250,
    vipStatus: 'MowMow Plus Member'
  },

  offers: [
    {
      code: 'MOW50',
      title: '50% OFF Up to ₹100',
      description: 'Use coupon code MOW50 on your first 3 orders above ₹199.',
      minOrder: 199,
      discountPercent: 50,
      maxDiscount: 100,
      tag: 'WELCOME SPECIAL',
      validUntil: 'Nov 30, 2026'
    },
    {
      code: 'HEALTHY20',
      title: 'Flat 20% OFF on Clean Bowls',
      description: 'Enjoy 20% off on all salads, high-protein bowls, and smoothies.',
      minOrder: 249,
      discountPercent: 20,
      maxDiscount: 80,
      tag: 'HEALTHY PICK',
      validUntil: 'Dec 15, 2026'
    },
    {
      code: 'BIRYANI30',
      title: 'Flat ₹50 OFF on Behrouz Biryani',
      description: 'Valid on authentic royal biryani meals of ₹299 or more.',
      minOrder: 299,
      discountFixed: 50,
      tag: 'WEEKEND FEAST',
      validUntil: 'Dec 31, 2026'
    },
    {
      code: 'FEAST100',
      title: 'Flat ₹100 OFF on Family Orders',
      description: 'Order food worth ₹699 or more and get instant ₹100 off.',
      minOrder: 699,
      discountFixed: 100,
      tag: 'MEGA SAVER',
      validUntil: 'Dec 31, 2026'
    }
  ],

  demoOrders: [
    {
      id: 'MM123456',
      restaurant: 'Behrouz Biryani',
      restaurantId: 'behrouz-biryani',
      items: [
        { name: 'Chicken Biryani', qty: 1, price: 249 },
        { name: 'Masala Chai', qty: 1, price: 49 }
      ],
      total: 546,
      status: 'Preparing',
      step: 2, // 1: Order Placed, 2: Preparing, 3: Out for Delivery, 4: Delivered
      orderPlacedTime: '12:24 PM',
      preparingTime: '12:38 PM',
      outForDeliveryTime: '12:45 PM',
      deliveredTime: '1:05 PM',
      eta: '15 - 20 mins',
      date: 'Today · 12:24 PM',
      current: true
    },
    {
      id: 'MM101982',
      restaurant: 'The Healthy Box',
      restaurantId: 'the-healthy-box',
      items: [
        { name: 'Grilled Chicken Bowl', qty: 1, price: 279 },
        { name: 'Strawberry Protein Shake', qty: 1, price: 159 }
      ],
      total: 468,
      status: 'Delivered',
      step: 4,
      date: 'Yesterday · 8:15 PM',
      eta: 'Delivered',
      current: false
    },
    {
      id: 'MM099814',
      restaurant: 'Punjab Grill',
      restaurantId: 'punjab-grill',
      items: [
        { name: 'Murgh Makhani (Butter Chicken)', qty: 1, price: 299 },
        { name: 'Paneer Butter Masala', qty: 1, price: 199 }
      ],
      total: 548,
      status: 'Delivered',
      step: 4,
      date: '20 Oct · 1:30 PM',
      eta: 'Delivered',
      current: false
    }
  ]
};

// Export to window and module
if (typeof window !== 'undefined') {
  window.MOW_DATA = MOW_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MOW_DATA;
}
