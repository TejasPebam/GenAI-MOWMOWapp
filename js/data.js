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
    },
    {
      "id": "food-extra-hyderabadi-chicken-biryani",
      "name": "Hyderabadi Chicken Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 269,
      "originalPrice": 310,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "1.0k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Dum-cooked basmati rice with chicken and aromatic spices.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 34,
      "calories": 560,
      "carbs": 63,
      "fat": 17,
      "tags": [
        "Biryani",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-mutton-dum-biryani",
      "name": "Mutton Dum Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 329,
      "originalPrice": 380,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "2.7k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Slow-cooked mutton with fragrant basmati rice.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 31,
      "calories": 620,
      "carbs": 70,
      "fat": 19,
      "tags": [
        "Biryani",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-egg-biryani",
      "name": "Egg Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 189,
      "originalPrice": 220,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "3.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Basmati rice layered with boiled eggs and spices.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 17,
      "calories": 470,
      "carbs": 53,
      "fat": 15,
      "tags": [
        "Biryani"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-paneer-biryani",
      "name": "Paneer Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 219,
      "originalPrice": 250,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "4.1k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Paneer and basmati rice with herbs and spices.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 16,
      "calories": 490,
      "carbs": 55,
      "fat": 15,
      "tags": [
        "Biryani",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-vegetable-dum-biryani",
      "name": "Vegetable Dum Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 179,
      "originalPrice": 210,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "5.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Vegetables and basmati rice slow cooked with herbs.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 8,
      "calories": 410,
      "carbs": 46,
      "fat": 13,
      "tags": [
        "Biryani",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-lucknowi-chicken-biryani",
      "name": "Lucknowi Chicken Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 279,
      "originalPrice": 320,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "6.5k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Fragrant, gently spiced Awadhi-style chicken biryani.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 32,
      "calories": 540,
      "carbs": 61,
      "fat": 17,
      "tags": [
        "Biryani"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-kolkata-chicken-biryani",
      "name": "Kolkata Chicken Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 259,
      "originalPrice": 300,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "7.2k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Bengal-style biryani with potato and aromatic rice.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 29,
      "calories": 550,
      "carbs": 62,
      "fat": 17,
      "tags": [
        "Biryani"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-prawn-biryani",
      "name": "Prawn Biryani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 299,
      "originalPrice": 340,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "8.9k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "biryani",
      "cuisine": "Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Prawns cooked with seasoned basmati rice.",
      "photo": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80"
      ],
      "protein": 27,
      "calories": 520,
      "carbs": 58,
      "fat": 16,
      "tags": [
        "Biryani",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-tikka-masala",
      "name": "Chicken Tikka Masala",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 279,
      "originalPrice": 320,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "9.6k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Tandoor chicken in a tomato and spice gravy.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 33,
      "calories": 510,
      "carbs": 57,
      "fat": 16,
      "tags": [
        "North Indian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-dal-makhani",
      "name": "Dal Makhani",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 189,
      "originalPrice": 220,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "1.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Slow-cooked black lentils in a creamy tomato gravy.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 12,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "North Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chole-masala",
      "name": "Chole Masala",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 159,
      "originalPrice": 180,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "2.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Chickpeas simmered with tomato and warming spices.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 11,
      "calories": 330,
      "carbs": 37,
      "fat": 10,
      "tags": [
        "North Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-rajma-chawal",
      "name": "Rajma Chawal",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 169,
      "originalPrice": 190,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "3.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Kidney bean curry served with steamed rice.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 12,
      "calories": 420,
      "carbs": 47,
      "fat": 13,
      "tags": [
        "North Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-palak-paneer",
      "name": "Palak Paneer",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "4.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Paneer in a spinach-based curry.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 17,
      "calories": 360,
      "carbs": 40,
      "fat": 11,
      "tags": [
        "North Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-kadai-chicken",
      "name": "Kadai Chicken",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 289,
      "originalPrice": 330,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "5.1k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Non-veg",
      "spicy": "Hot",
      "description": "Chicken cooked with peppers and kadai masala.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 35,
      "calories": 480,
      "carbs": 54,
      "fat": 15,
      "tags": [
        "North Indian",
        "Protein Rich",
        "Spicy"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-tandoori-chicken",
      "name": "Tandoori Chicken",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 299,
      "originalPrice": 340,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "6.8k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Yogurt-marinated chicken roasted in a tandoor.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 39,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "North Indian",
        "High Protein",
        "Grilled"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-butter-naan",
      "name": "Butter Naan",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 49,
      "originalPrice": 60,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "7.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Soft leavened flatbread brushed with butter.",
      "photo": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80"
      ],
      "protein": 4,
      "calories": 210,
      "carbs": 24,
      "fat": 7,
      "tags": [
        "North Indian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-garlic-naan",
      "name": "Garlic Naan",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 59,
      "originalPrice": 70,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "8.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Naan topped with garlic and herbs.",
      "photo": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80"
      ],
      "protein": 5,
      "calories": 230,
      "carbs": 26,
      "fat": 7,
      "tags": [
        "North Indian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-aloo-paratha",
      "name": "Aloo Paratha",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "9.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Whole-wheat flatbread stuffed with spiced potato.",
      "photo": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80"
      ],
      "protein": 5,
      "calories": 290,
      "carbs": 33,
      "fat": 9,
      "tags": [
        "North Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-paneer-tikka",
      "name": "Paneer Tikka",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "1.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Charred marinated paneer with peppers.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 20,
      "calories": 340,
      "carbs": 38,
      "fat": 11,
      "tags": [
        "North Indian",
        "Protein Rich",
        "Grilled"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-seekh-kebab",
      "name": "Chicken Seekh Kebab",
      "restaurantId": "punjab-grill",
      "restaurant": "Punjab Grill",
      "price": 249,
      "originalPrice": 290,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "2.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "north-indian",
      "cuisine": "North Indian",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Minced chicken kebabs with herbs and spices.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 30,
      "calories": 320,
      "carbs": 36,
      "fat": 10,
      "tags": [
        "North Indian",
        "High Protein"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-plain-masala-dosa",
      "name": "Plain Masala Dosa",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "3.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Crisp dosa with potato masala and chutneys.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 5,
      "calories": 280,
      "carbs": 32,
      "fat": 9,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-rava-dosa",
      "name": "Rava Dosa",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 119,
      "originalPrice": 140,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "4.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Crisp semolina dosa served with chutneys.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 4,
      "calories": 300,
      "carbs": 34,
      "fat": 9,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-idli-sambar",
      "name": "Idli Sambar",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 79,
      "originalPrice": 90,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "5.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Steamed idlis with lentil sambar.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 6,
      "calories": 230,
      "carbs": 26,
      "fat": 7,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-medu-vada",
      "name": "Medu Vada",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 69,
      "originalPrice": 80,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "6.1k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Crisp lentil fritters with coconut chutney.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 5,
      "calories": 260,
      "carbs": 29,
      "fat": 8,
      "tags": [
        "South Indian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-pongal",
      "name": "Pongal",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 89,
      "originalPrice": 100,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "7.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Rice and lentils cooked with cumin and pepper.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 6,
      "calories": 280,
      "carbs": 32,
      "fat": 9,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-uttapam",
      "name": "Uttapam",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 109,
      "originalPrice": 130,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "8.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Soft rice-lentil pancake with vegetables.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 5,
      "calories": 270,
      "carbs": 30,
      "fat": 8,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-pesarattu",
      "name": "Pesarattu",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 119,
      "originalPrice": 140,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "9.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Green gram crepe with ginger chutney.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 10,
      "calories": 260,
      "carbs": 29,
      "fat": 8,
      "tags": [
        "South Indian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-appam-with-vegetable-stew",
      "name": "Appam with Vegetable Stew",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 159,
      "originalPrice": 180,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "1.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Fermented rice appam with coconut vegetable stew.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 6,
      "calories": 340,
      "carbs": 38,
      "fat": 11,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-kerala-chicken-stew",
      "name": "Kerala Chicken Stew",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "2.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Chicken simmered in gently spiced coconut milk.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 28,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "South Indian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-lemon-rice",
      "name": "Lemon Rice",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 109,
      "originalPrice": 130,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "3.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Rice tempered with lemon, mustard seeds and peanuts.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 4,
      "calories": 290,
      "carbs": 33,
      "fat": 9,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-curd-rice",
      "name": "Curd Rice",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "4.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Cooling yogurt rice with mustard and curry leaves.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 5,
      "calories": 250,
      "carbs": 28,
      "fat": 8,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-bisi-bele-bath",
      "name": "Bisi Bele Bath",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 139,
      "originalPrice": 160,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "5.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Karnataka rice, lentil and vegetable one-pot meal.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 8,
      "calories": 360,
      "carbs": 40,
      "fat": 11,
      "tags": [
        "South Indian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-mysore-masala-dosa",
      "name": "Mysore Masala Dosa",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 129,
      "originalPrice": 150,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "6.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Veg",
      "spicy": "Hot",
      "description": "Crisp dosa with Mysore chutney and potato filling.",
      "photo": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
      ],
      "protein": 6,
      "calories": 320,
      "carbs": 36,
      "fat": 10,
      "tags": [
        "South Indian",
        "Spicy"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-chettinad",
      "name": "Chicken Chettinad",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 269,
      "originalPrice": 310,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "7.1k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Non-veg",
      "spicy": "Hot",
      "description": "Chicken curry with roasted Chettinad spices.",
      "photo": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80"
      ],
      "protein": 34,
      "calories": 450,
      "carbs": 51,
      "fat": 14,
      "tags": [
        "South Indian",
        "High Protein",
        "Spicy"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-fish-moilee-with-rice",
      "name": "Fish Moilee with Rice",
      "restaurantId": "south-kitchen",
      "restaurant": "South Kitchen",
      "price": 289,
      "originalPrice": 330,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "8.8k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "south-indian",
      "cuisine": "South Indian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Fish in mild coconut curry served with rice.",
      "photo": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80"
      ],
      "protein": 28,
      "calories": 430,
      "carbs": 48,
      "fat": 13,
      "tags": [
        "South Indian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-veg-hakka-noodles",
      "name": "Veg Hakka Noodles",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 159,
      "originalPrice": 180,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "9.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Wok-tossed noodles with vegetables.",
      "photo": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80"
      ],
      "protein": 7,
      "calories": 360,
      "carbs": 40,
      "fat": 11,
      "tags": [
        "Chinese",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-hakka-noodles",
      "name": "Chicken Hakka Noodles",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "1.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Wok-tossed noodles with chicken and vegetables.",
      "photo": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80"
      ],
      "protein": 22,
      "calories": 440,
      "carbs": 50,
      "fat": 14,
      "tags": [
        "Chinese",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-veg-fried-rice",
      "name": "Veg Fried Rice",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 149,
      "originalPrice": 170,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "2.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Fried rice with mixed vegetables.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 6,
      "calories": 330,
      "carbs": 37,
      "fat": 10,
      "tags": [
        "Chinese",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-fried-rice",
      "name": "Chicken Fried Rice",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 189,
      "originalPrice": 220,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "3.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Fried rice with chicken and spring onions.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 19,
      "calories": 420,
      "carbs": 47,
      "fat": 13,
      "tags": [
        "Chinese",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chilli-paneer",
      "name": "Chilli Paneer",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "4.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Indo-Chinese",
      "diet": "Veg",
      "spicy": "Hot",
      "description": "Paneer tossed with peppers and chilli sauce.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 15,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Chinese",
        "Spicy",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chilli-chicken",
      "name": "Chilli Chicken",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "5.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Indo-Chinese",
      "diet": "Non-veg",
      "spicy": "Hot",
      "description": "Chicken tossed in Indo-Chinese chilli sauce.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 26,
      "calories": 410,
      "carbs": 46,
      "fat": 13,
      "tags": [
        "Chinese",
        "Spicy",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-veg-momos",
      "name": "Veg Momos",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "6.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Steamed dumplings with vegetable filling.",
      "photo": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
      ],
      "protein": 5,
      "calories": 240,
      "carbs": 27,
      "fat": 7,
      "tags": [
        "Chinese",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-momos",
      "name": "Chicken Momos",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 129,
      "originalPrice": 150,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "7.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Steamed dumplings filled with chicken.",
      "photo": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
      ],
      "protein": 13,
      "calories": 280,
      "carbs": 32,
      "fat": 9,
      "tags": [
        "Chinese",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-hot-and-sour-soup",
      "name": "Hot and Sour Soup",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "8.1k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Tangy soup with vegetables and pepper.",
      "photo": "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
      ],
      "protein": 4,
      "calories": 110,
      "carbs": 12,
      "fat": 3,
      "tags": [
        "Chinese",
        "Soup"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-manchow-soup",
      "name": "Manchow Soup",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 109,
      "originalPrice": 130,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "9.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Spicy vegetable soup topped with crunchy noodles.",
      "photo": "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
      ],
      "protein": 4,
      "calories": 140,
      "carbs": 16,
      "fat": 4,
      "tags": [
        "Chinese",
        "Soup"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-mapo-tofu",
      "name": "Mapo Tofu",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 219,
      "originalPrice": 250,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "1.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Hot",
      "description": "Tofu in a savoury Sichuan-style sauce.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 17,
      "calories": 350,
      "carbs": 39,
      "fat": 11,
      "tags": [
        "Chinese",
        "Protein Rich",
        "Spicy"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-kung-pao-chicken",
      "name": "Kung Pao Chicken",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 249,
      "originalPrice": 290,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "2.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Non-veg",
      "spicy": "Hot",
      "description": "Chicken stir-fried with peppers and peanuts.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 29,
      "calories": 430,
      "carbs": 48,
      "fat": 13,
      "tags": [
        "Chinese",
        "Protein Rich",
        "Spicy"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-teriyaki-chicken-rice-bowl",
      "name": "Teriyaki Chicken Rice Bowl",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 259,
      "originalPrice": 300,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "3.9k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Japanese",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Grilled chicken with rice and teriyaki glaze.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 31,
      "calories": 490,
      "carbs": 55,
      "fat": 15,
      "tags": [
        "Asian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-veg-spring-rolls",
      "name": "Veg Spring Rolls",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 119,
      "originalPrice": 140,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "4.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Chinese",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Crisp rolls filled with seasoned vegetables.",
      "photo": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80"
      ],
      "protein": 4,
      "calories": 280,
      "carbs": 32,
      "fat": 9,
      "tags": [
        "Chinese",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-schezwan-noodles",
      "name": "Schezwan Noodles",
      "restaurantId": "chinese-wok",
      "restaurant": "Chinese Wok",
      "price": 179,
      "originalPrice": 210,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "5.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "chinese",
      "cuisine": "Indo-Chinese",
      "diet": "Veg",
      "spicy": "Hot",
      "description": "Noodles tossed in bold Schezwan sauce.",
      "photo": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80"
      ],
      "protein": 7,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Chinese",
        "Spicy"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-margherita-pizza",
      "name": "Margherita Pizza",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "6.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Tomato, mozzarella and basil on a baked pizza base.",
      "photo": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
      ],
      "protein": 11,
      "calories": 560,
      "carbs": 63,
      "fat": 17,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-farmhouse-pizza",
      "name": "Farmhouse Pizza",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 299,
      "originalPrice": 340,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "7.7k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Pizza topped with peppers, onion, mushroom and cheese.",
      "photo": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
      ],
      "protein": 13,
      "calories": 620,
      "carbs": 70,
      "fat": 19,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-pepperoni-pizza",
      "name": "Pepperoni Pizza",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 349,
      "originalPrice": 400,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "8.4k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Pizza with mozzarella and pepperoni.",
      "photo": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
      ],
      "protein": 18,
      "calories": 690,
      "carbs": 78,
      "fat": 21,
      "tags": [
        "Italian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-four-cheese-pizza",
      "name": "Four Cheese Pizza",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 329,
      "originalPrice": 380,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "9.1k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Pizza with a blend of four cheeses.",
      "photo": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
      ],
      "protein": 17,
      "calories": 700,
      "carbs": 79,
      "fat": 22,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-penne-arrabbiata",
      "name": "Penne Arrabbiata",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 219,
      "originalPrice": 250,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "1.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Hot",
      "description": "Penne pasta in spicy tomato sauce.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 9,
      "calories": 420,
      "carbs": 47,
      "fat": 13,
      "tags": [
        "Italian",
        "Spicy",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-pasta-alfredo",
      "name": "Pasta Alfredo",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 239,
      "originalPrice": 270,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "2.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Pasta in creamy parmesan sauce.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 11,
      "calories": 560,
      "carbs": 63,
      "fat": 17,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-spaghetti-aglio-e-olio",
      "name": "Spaghetti Aglio e Olio",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "3.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Spaghetti with garlic, olive oil and parsley.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 7,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-pesto-pasta",
      "name": "Chicken Pesto Pasta",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 279,
      "originalPrice": 320,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "4.9k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Chicken pasta with basil pesto.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 29,
      "calories": 510,
      "carbs": 57,
      "fat": 16,
      "tags": [
        "Italian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-lasagna",
      "name": "Lasagna",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 299,
      "originalPrice": 340,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "5.6k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Baked pasta layered with sauce and cheese.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 21,
      "calories": 590,
      "carbs": 66,
      "fat": 18,
      "tags": [
        "Italian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-mushroom-risotto",
      "name": "Mushroom Risotto",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 249,
      "originalPrice": 290,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "6.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Creamy rice with mushrooms and herbs.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 8,
      "calories": 470,
      "carbs": 53,
      "fat": 15,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-bruschetta",
      "name": "Bruschetta",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 129,
      "originalPrice": 150,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "7.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Toasted bread with tomato, basil and olive oil.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 4,
      "calories": 220,
      "carbs": 25,
      "fat": 7,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-caprese-salad",
      "name": "Caprese Salad",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "8.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Tomato, mozzarella and basil with olive oil.",
      "photo": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
      ],
      "protein": 13,
      "calories": 290,
      "carbs": 33,
      "fat": 9,
      "tags": [
        "Healthy",
        "Salad",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-minestrone-soup",
      "name": "Minestrone Soup",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 149,
      "originalPrice": 170,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "9.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Vegetable and bean soup with herbs.",
      "photo": "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
      ],
      "protein": 7,
      "calories": 180,
      "carbs": 20,
      "fat": 6,
      "tags": [
        "Healthy",
        "Soup",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-parmesan",
      "name": "Chicken Parmesan",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 299,
      "originalPrice": 340,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "1.1k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Breaded chicken with tomato sauce and cheese.",
      "photo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
      ],
      "protein": 34,
      "calories": 570,
      "carbs": 64,
      "fat": 18,
      "tags": [
        "Italian",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-pesto-veggie-sandwich",
      "name": "Pesto Veggie Sandwich",
      "restaurantId": "pizza-hub",
      "restaurant": "Pizza Hub",
      "price": 179,
      "originalPrice": 210,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "2.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Italian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Grilled sandwich with pesto and vegetables.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 8,
      "calories": 350,
      "carbs": 39,
      "fat": 11,
      "tags": [
        "Italian",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-grilled-salmon-bowl",
      "name": "Grilled Salmon Bowl",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 349,
      "originalPrice": 400,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "3.5k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Grilled salmon with grains and vegetables.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 36,
      "calories": 430,
      "carbs": 48,
      "fat": 13,
      "tags": [
        "Healthy",
        "High Protein",
        "Grilled"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-tofu-quinoa-bowl",
      "name": "Tofu Quinoa Bowl",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 249,
      "originalPrice": 290,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "4.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Tofu, quinoa and mixed vegetables.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 20,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Healthy",
        "High Protein",
        "Whole Grain",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chickpea-salad-bowl",
      "name": "Chickpea Salad Bowl",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 189,
      "originalPrice": 220,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "5.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Chickpeas, greens, cucumber and tomato.",
      "photo": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
      ],
      "protein": 12,
      "calories": 320,
      "carbs": 36,
      "fat": 10,
      "tags": [
        "Healthy",
        "Salad",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-paneer-tikka-salad",
      "name": "Paneer Tikka Salad",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "6.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Grilled paneer over a fresh salad.",
      "photo": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
      ],
      "protein": 21,
      "calories": 360,
      "carbs": 40,
      "fat": 11,
      "tags": [
        "Healthy",
        "Salad",
        "Protein Rich",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-sprouts-chaat",
      "name": "Sprouts Chaat",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "7.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Mixed sprouts with onion, tomato and lemon.",
      "photo": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
      ],
      "protein": 9,
      "calories": 180,
      "carbs": 20,
      "fat": 6,
      "tags": [
        "Healthy",
        "Sprouts",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-moong-dal-khichdi",
      "name": "Moong Dal Khichdi",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 139,
      "originalPrice": 160,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "8.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Rice and moong dal cooked until soft.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 10,
      "calories": 300,
      "carbs": 34,
      "fat": 9,
      "tags": [
        "Healthy",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-grilled-fish-with-vegetables",
      "name": "Grilled Fish with Vegetables",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 299,
      "originalPrice": 340,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "9.7k",
      "eta": "25-35 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Grilled fish with seasonal vegetables.",
      "photo": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80"
      ],
      "protein": 34,
      "calories": 350,
      "carbs": 39,
      "fat": 11,
      "tags": [
        "Healthy",
        "High Protein",
        "Grilled"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-egg-white-omelette",
      "name": "Egg White Omelette",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 129,
      "originalPrice": 150,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "1.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Egg-white omelette with spinach and tomato.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 18,
      "calories": 190,
      "carbs": 21,
      "fat": 6,
      "tags": [
        "Healthy",
        "High Protein"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-greek-yogurt-fruit-bowl",
      "name": "Greek Yogurt Fruit Bowl",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 169,
      "originalPrice": 190,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "2.1k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "None",
      "description": "Plain yogurt with fruit and seeds.",
      "photo": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
      ],
      "protein": 12,
      "calories": 240,
      "carbs": 27,
      "fat": 7,
      "tags": [
        "Healthy",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-overnight-oats",
      "name": "Overnight Oats",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 149,
      "originalPrice": 170,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "3.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "None",
      "description": "Oats soaked with milk, chia and fruit.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 9,
      "calories": 280,
      "carbs": 32,
      "fat": 9,
      "tags": [
        "Healthy",
        "Whole Grain",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-quinoa-avocado-salad",
      "name": "Quinoa Avocado Salad",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 239,
      "originalPrice": 270,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "4.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Quinoa, avocado, greens and lemon dressing.",
      "photo": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
      ],
      "protein": 9,
      "calories": 360,
      "carbs": 40,
      "fat": 11,
      "tags": [
        "Healthy",
        "Salad",
        "Whole Grain",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-lentil-soup",
      "name": "Lentil Soup",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 129,
      "originalPrice": 150,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "5.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Lentils simmered with vegetables and herbs.",
      "photo": "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
      ],
      "protein": 10,
      "calories": 210,
      "carbs": 24,
      "fat": 7,
      "tags": [
        "Healthy",
        "Soup",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-grilled-turkey-sandwich",
      "name": "Grilled Turkey Sandwich",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 249,
      "originalPrice": 290,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "6.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Lean turkey and greens on whole-grain bread.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 28,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Healthy",
        "High Protein"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-steamed-vegetable-dumplings",
      "name": "Steamed Vegetable Dumplings",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 139,
      "originalPrice": 160,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "7.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Asian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Steamed dumplings with vegetable filling.",
      "photo": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
      ],
      "protein": 6,
      "calories": 210,
      "carbs": 24,
      "fat": 7,
      "tags": [
        "Healthy",
        "Steamed",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-brown-rice-dal-bowl",
      "name": "Brown Rice Dal Bowl",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 159,
      "originalPrice": 180,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "8.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Brown rice, dal and seasonal vegetables.",
      "photo": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
      ],
      "protein": 11,
      "calories": 340,
      "carbs": 38,
      "fat": 11,
      "tags": [
        "Healthy",
        "Whole Grain",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-classic-beef-burger",
      "name": "Classic Beef Burger",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 229,
      "originalPrice": 260,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "9.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "American",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Beef patty with lettuce, tomato and house sauce.",
      "photo": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
      ],
      "protein": 25,
      "calories": 610,
      "carbs": 69,
      "fat": 19,
      "tags": [
        "Fast Food"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-crispy-chicken-burger",
      "name": "Crispy Chicken Burger",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "1.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "American",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Crispy chicken fillet in a toasted bun.",
      "photo": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
      ],
      "protein": 23,
      "calories": 650,
      "carbs": 73,
      "fat": 20,
      "tags": [
        "Fast Food"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-veggie-burger",
      "name": "Veggie Burger",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 159,
      "originalPrice": 180,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "2.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "American",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Vegetable patty with lettuce and tomato.",
      "photo": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
      ],
      "protein": 9,
      "calories": 420,
      "carbs": 47,
      "fat": 13,
      "tags": [
        "Fast Food",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-grilled-chicken-wrap",
      "name": "Grilled Chicken Wrap",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "3.1k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Healthy",
      "diet": "Non-veg",
      "spicy": "Mild",
      "description": "Grilled chicken and vegetables in a whole-wheat wrap.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 27,
      "calories": 380,
      "carbs": 43,
      "fat": 12,
      "tags": [
        "Healthy",
        "High Protein",
        "Grilled"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-paneer-kathi-roll",
      "name": "Paneer Kathi Roll",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 169,
      "originalPrice": 190,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "4.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Paneer and peppers wrapped in flatbread.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 13,
      "calories": 430,
      "carbs": 48,
      "fat": 13,
      "tags": [
        "Fast Food",
        "Indian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chicken-shawarma-roll",
      "name": "Chicken Shawarma Roll",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 199,
      "originalPrice": 230,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "5.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "Middle Eastern",
      "diet": "Non-veg",
      "spicy": "Medium",
      "description": "Chicken, vegetables and garlic sauce in pita.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 24,
      "calories": 480,
      "carbs": 54,
      "fat": 15,
      "tags": [
        "Fast Food",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-loaded-masala-fries",
      "name": "Loaded Masala Fries",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 149,
      "originalPrice": 170,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "6.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "American",
      "diet": "Veg",
      "spicy": "Medium",
      "description": "Fries tossed with Indian spices.",
      "photo": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80"
      ],
      "protein": 5,
      "calories": 470,
      "carbs": 53,
      "fat": 15,
      "tags": [
        "Fast Food"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-peri-peri-chicken-wings",
      "name": "Peri Peri Chicken Wings",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 249,
      "originalPrice": 290,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "7.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "American",
      "diet": "Non-veg",
      "spicy": "Hot",
      "description": "Chicken wings coated with peri-peri seasoning.",
      "photo": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
      ],
      "protein": 28,
      "calories": 520,
      "carbs": 58,
      "fat": 16,
      "tags": [
        "Fast Food",
        "Spicy",
        "Protein Rich"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-falafel-hummus-wrap",
      "name": "Falafel Hummus Wrap",
      "restaurantId": "the-healthy-box",
      "restaurant": "The Healthy Box",
      "price": 189,
      "originalPrice": 220,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "8.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "healthy",
      "cuisine": "Middle Eastern",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Falafel, hummus and vegetables in a wrap.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 11,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Healthy",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-grilled-cheese-sandwich",
      "name": "Grilled Cheese Sandwich",
      "restaurantId": "burger-barn",
      "restaurant": "Burger Barn",
      "price": 139,
      "originalPrice": 160,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "9.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "fast-food",
      "cuisine": "American",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Toasted bread with melted cheese.",
      "photo": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80"
      ],
      "protein": 10,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Fast Food",
        "Vegetarian"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chocolate-brownie",
      "name": "Chocolate Brownie",
      "restaurantId": "frosty-delights",
      "restaurant": "Frosty Delights",
      "price": 99,
      "originalPrice": 110,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "1.0k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "desserts",
      "cuisine": "Desserts",
      "diet": "Veg",
      "spicy": "None",
      "description": "Dense chocolate brownie.",
      "photo": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
      ],
      "protein": 3,
      "calories": 320,
      "carbs": 36,
      "fat": 10,
      "tags": [
        "Desserts",
        "Sweet"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-chocolate-lava-cake",
      "name": "Chocolate Lava Cake",
      "restaurantId": "frosty-delights",
      "restaurant": "Frosty Delights",
      "price": 129,
      "originalPrice": 150,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "2.7k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "desserts",
      "cuisine": "Desserts",
      "diet": "Veg",
      "spicy": "None",
      "description": "Warm chocolate cake with a molten centre.",
      "photo": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
      ],
      "protein": 4,
      "calories": 390,
      "carbs": 44,
      "fat": 12,
      "tags": [
        "Desserts",
        "Sweet"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-new-york-cheesecake",
      "name": "New York Cheesecake",
      "restaurantId": "frosty-delights",
      "restaurant": "Frosty Delights",
      "price": 159,
      "originalPrice": 180,
      "discount": "13% OFF",
      "rating": 4.5,
      "ratingCount": "3.4k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "desserts",
      "cuisine": "Desserts",
      "diet": "Veg",
      "spicy": "None",
      "description": "Creamy baked cheesecake on a biscuit base.",
      "photo": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
      ],
      "protein": 6,
      "calories": 410,
      "carbs": 46,
      "fat": 13,
      "tags": [
        "Desserts",
        "Sweet"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-mango-kulfi",
      "name": "Mango Kulfi",
      "restaurantId": "frosty-delights",
      "restaurant": "Frosty Delights",
      "price": 79,
      "originalPrice": 90,
      "discount": "13% OFF",
      "rating": 4.6,
      "ratingCount": "4.1k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "desserts",
      "cuisine": "Indian Desserts",
      "diet": "Veg",
      "spicy": "None",
      "description": "Traditional frozen mango and milk dessert.",
      "photo": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
      ],
      "protein": 3,
      "calories": 180,
      "carbs": 20,
      "fat": 6,
      "tags": [
        "Desserts",
        "Sweet"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-gulab-jamun",
      "name": "Gulab Jamun",
      "restaurantId": "frosty-delights",
      "restaurant": "Frosty Delights",
      "price": 69,
      "originalPrice": 80,
      "discount": "13% OFF",
      "rating": 4.7,
      "ratingCount": "5.8k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "desserts",
      "cuisine": "Indian Desserts",
      "diet": "Veg",
      "spicy": "None",
      "description": "Milk-solid dumplings in sugar syrup.",
      "photo": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
      ],
      "protein": 3,
      "calories": 250,
      "carbs": 28,
      "fat": 8,
      "tags": [
        "Desserts",
        "Sweet"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-fresh-lime-soda",
      "name": "Fresh Lime Soda",
      "restaurantId": "cafe-coffee-day",
      "restaurant": "Cafe Coffee Day",
      "price": 59,
      "originalPrice": 70,
      "discount": "13% OFF",
      "rating": 4.8,
      "ratingCount": "6.5k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "beverages",
      "cuisine": "Beverages",
      "diet": "Veg",
      "spicy": "None",
      "description": "Fresh lime soda, sweet or salted.",
      "photo": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80"
      ],
      "protein": 0,
      "calories": 70,
      "carbs": 8,
      "fat": 2,
      "tags": [
        "Beverages"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-cold-coffee",
      "name": "Cold Coffee",
      "restaurantId": "cafe-coffee-day",
      "restaurant": "Cafe Coffee Day",
      "price": 119,
      "originalPrice": 140,
      "discount": "13% OFF",
      "rating": 4.1,
      "ratingCount": "7.2k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "beverages",
      "cuisine": "Beverages",
      "diet": "Veg",
      "spicy": "None",
      "description": "Chilled coffee blended with milk.",
      "photo": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80"
      ],
      "protein": 5,
      "calories": 190,
      "carbs": 21,
      "fat": 6,
      "tags": [
        "Beverages"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-masala-buttermilk",
      "name": "Masala Buttermilk",
      "restaurantId": "cafe-coffee-day",
      "restaurant": "Cafe Coffee Day",
      "price": 49,
      "originalPrice": 60,
      "discount": "13% OFF",
      "rating": 4.2,
      "ratingCount": "8.9k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "beverages",
      "cuisine": "Indian",
      "diet": "Veg",
      "spicy": "Mild",
      "description": "Yogurt drink with cumin and herbs.",
      "photo": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80"
      ],
      "protein": 3,
      "calories": 60,
      "carbs": 7,
      "fat": 2,
      "tags": [
        "Beverages",
        "Low Calorie"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-mango-smoothie",
      "name": "Mango Smoothie",
      "restaurantId": "cafe-coffee-day",
      "restaurant": "Cafe Coffee Day",
      "price": 139,
      "originalPrice": 160,
      "discount": "13% OFF",
      "rating": 4.3,
      "ratingCount": "9.6k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "beverages",
      "cuisine": "Beverages",
      "diet": "Veg",
      "spicy": "None",
      "description": "Mango and yogurt smoothie.",
      "photo": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80"
      ],
      "protein": 6,
      "calories": 220,
      "carbs": 25,
      "fat": 7,
      "tags": [
        "Beverages",
        "Sweet"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
      }
    },
    {
      "id": "food-extra-iced-green-tea",
      "name": "Iced Green Tea",
      "restaurantId": "cafe-coffee-day",
      "restaurant": "Cafe Coffee Day",
      "price": 69,
      "originalPrice": 80,
      "discount": "13% OFF",
      "rating": 4.4,
      "ratingCount": "1.3k",
      "eta": "20-30 mins",
      "badge": "Popular",
      "category": "beverages",
      "cuisine": "Beverages",
      "diet": "Veg",
      "spicy": "None",
      "description": "Unsweetened chilled green tea.",
      "photo": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80"
      ],
      "protein": 0,
      "calories": 5,
      "carbs": 1,
      "fat": 0,
      "tags": [
        "Beverages",
        "Low Calorie"
      ],
      "customizations": {
        "portion": [
          "Regular",
          "Large (+₹50)"
        ],
        "spiceLevels": [
          "Mild",
          "Medium",
          "Spicy"
        ],
        "addOns": []
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
