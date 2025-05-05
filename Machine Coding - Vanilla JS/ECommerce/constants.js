const productsData = [
    {
      "id": 1,
      "name": "Fresh Red Tomatoes",
      "description": "Juicy, ripe red tomatoes perfect for salads and sauces.",
      "category": "Vegetables",
      "price": 40,
      "discountPercent": 30,
      "discountPercent": 25,
      "quantity": "500g",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Local Farm"
      }
    },
    {
      "id": 2,
      "name": "Crisp Cucumbers",
      "description": "Fresh and crunchy cucumbers, ideal for salads and pickling.",
      "category": "Vegetables",
      "price": 30,
      "discountedPrice": 25,
      "discountPercent": 16,
      "quantity": "1 kg",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cucumber_plants.jpg",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Hydroponic Farm"
      }
    },
    {
      "id": 3,
      "name": "Organic Carrots",
      "description": "Sweet and crunchy organic carrots, rich in beta-carotene.",
      "category": "Vegetables",
      "price": 50,
      "discountedPrice": 40,
      "discountPercent": 20,
      "quantity": "500g",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/Carrots_at_a_farmers_market_in_the_Villages_Florida.png",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Organic Farm"
      }
    },
    {
      "id": 4,
      "name": "Green Spinach",
      "description": "Leafy green spinach, packed with iron and vitamins.",
      "category": "Vegetables",
      "price": 35,
      "discountedPrice": 30,
      "discountPercent": 14,
      "quantity": "250g",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Spinazie_vrouwelijke_plant_%28Spinacia_oleracea_female_plant%29.jpg",
      "attributes": {
        "organic": true,
        "freshness": "Fresh",
        "origin": "Local Farm"
      }
    },
    {
      "id": 5,
      "name": "Mixed Bell Peppers",
      "description": "A colorful mix of red, yellow, and green bell peppers.",
      "category": "Vegetables",
      "price": 80,
      "discountedPrice": 70,
      "discountPercent": 12,
      "quantity": "3 pieces",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Red_bell_pepper.jpg",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Imported"
      }
    },
    {
      "id": 6,
      "name": "Fresh Broccoli",
      "description": "Nutrient-rich broccoli, great for steaming and stir-fries.",
      "category": "Vegetables",
      "price": 90,
      "discountedPrice": 80,
      "discountPercent": 11,
      "quantity": "1 piece",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Hydroponic Farm"
      }
    },
    {
      "id": 7,
      "name": "Purple Eggplants",
      "description": "Glossy purple eggplants, ideal for grilling and curries.",
      "category": "Vegetables",
      "price": 45,
      "discountedPrice": 38,
      "discountPercent": 15,
      "quantity": "500g",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Local Market"
      }
    },
    {
      "id": 8,
      "name": "Cauliflower",
      "description": "Fresh white cauliflower, perfect for roasting and curries.",
      "category": "Vegetables",
      "price": 55,
      "discountedPrice": 50,
      "discountPercent": 9,
      "quantity": "1 piece",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Chou-fleur_02.jpg",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Local Farm"
      }
    },
    {
      "id": 9,
      "name": "Green Zucchini",
      "description": "Tender green zucchini, versatile for various dishes.",
      "category": "Vegetables",
      "price": 70,
      "discountedPrice": 60,
      "discountPercent": 14,
      "quantity": "1 piece",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Zuchinni_1107.jpg",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Imported"
      }
    },
    {
      "id": 10,
      "name": "Fresh Green Beans",
      "description": "Crisp green beans, perfect for steaming and salads.",
      "category": "Vegetables",
      "price": 50,
      "discountedPrice": 42,
      "discountPercent": 16,
      "quantity": "250g",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/38_-_CIMG1598.JPG",
      "attributes": {
        "organic": true,
        "freshness": "Fresh",
        "origin": "Local Farm"
      }
    },
    {
      "id": 11,
      "name": "Fresh Red Apples",
      "description": "Crisp and juicy red apples, perfect for snacking.",
      "category": "Fruits",
      "price": 150,
      "discountedPrice": 120,
      "discountPercent": 20,
      "quantity": "1 kg",
      "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Local Orchard"
      }
    },
    {
      "id": 12,
      "name": "Bananas",
      "description": "Sweet and ripe bananas, rich in potassium.",
      "category": "Fruits",
      "price": 60,
      "discountedPrice": 50,
      "discountPercent": 16,
      "quantity": "1 dozen",
      "image": "https://images.unsplash.com/photo-1574226516831-e1dff420e7d8",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Tropical Farms"
      }
    },
    {
      "id": 13,
      "name": "Juicy Oranges",
      "description": "Citrusy and tangy oranges, full of vitamin C.",
      "category": "Fruits",
      "price": 80,
      "discountedPrice": 70,
      "discountPercent": 12,
      "quantity": "1 kg",
      "image": "https://images.unsplash.com/photo-1580910051070-8a6b5dff78a8",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Citrus Groves"
      }
    },
    {
      "id": 14,
      "name": "Strawberries",
      "description": "Sweet and succulent strawberries, perfect for desserts.",
      "category": "Fruits",
      "price": 200,
      "discountedPrice": 180,
      "discountPercent": 10,
      "quantity": "500g",
      "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Berry Farms"
      }
    },
    {
      "id": 15,
      "name": "Green Grapes",
      "description": "Seedless green grapes, sweet and crunchy.",
      "category": "Fruits",
      "price": 120,
      "discountedPrice": 100,
      "discountPercent": 16,
      "quantity": "1 kg",
      "image": "https://images.unsplash.com/photo-1611080626912-991bc9ab1999",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Vineyards"
      }
    },
    {
      "id": 16,
      "name": "Blueberries",
      "description": "Antioxidant-rich blueberries, perfect for smoothies.",
      "category": "Fruits",
      "price": 250,
      "discountedPrice": 220,
      "discountPercent": 12,
      "quantity": "500g",
      "image": "https://images.unsplash.com/photo-1592928306736-3c90592d9a95",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Mountain Farms"
      }
    },
    {
      "id": 17,
      "name": "Mangoes",
      "description": "Sweet and juicy mangoes, a tropical delight.",
      "category": "Fruits",
      "price": 180,
      "discountedPrice": 150,
      "discountPercent": 16,
      "quantity": "1 kg",
      "image": "https://images.unsplash.com/photo-1629183256514-86d3bb11991d",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Tropical Orchards"
      }
    },
    {
      "id": 18,
      "name": "Pineapple",
      "description": "Tropical pineapple, sweet and tangy flavor.",
      "category": "Fruits",
      "price": 100,
      "discountedPrice": 90,
      "discountPercent": 10,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1587049633312-88400926090d",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Tropical Farms"
      }
    },
    {
      "id": 19,
      "name": "Watermelon",
      "description": "Refreshing and hydrating watermelon, perfect for summer.",
      "category": "Fruits",
      "price": 60,
      "discountedPrice": 50,
      "discountPercent": 16,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1611078862415-7b6c4a9f47a6",
      "attributes": {
        "organic": false,
        "freshness": "Fresh",
        "origin": "Local Farms"
      }
    },
    {
      "id": 20,
      "name": "Pomegranates",
      "description": "Juicy pomegranates, rich in antioxidants.",
      "category": "Fruits",
      "price": 150,
      "discountedPrice": 130,
      "discountPercent": 13,
      "quantity": "1 kg",
      "image": "https://images.unsplash.com/photo-1598168163404-52ef43a4b372",
      "attributes": {
        "organic": true,
        "freshness": "Very Fresh",
        "origin": "Orchards"
      }
    },
    {
      "id": 21,
      "name": "Turmeric Powder",
      "description": "Aromatic turmeric powder, perfect for Indian cooking.",
      "category": "Masala",
      "price": 80,
      "discountedPrice": 70,
      "discountPercent": 12,
      "quantity": "200g",
      "image": "https://images.unsplash.com/photo-1595790597357-9f07d1dd7cab",
      "attributes": {
        "organic": true,
        "spiceLevel": "Mild",
        "origin": "India"
      }
    },
    {
      "id": 22,
      "name": "Red Chilli Powder",
      "description": "Hot and spicy red chilli powder to enhance flavors.",
      "category": "Masala",
      "price": 120,
      "discountedPrice": 100,
      "discountPercent": 16,
      "quantity": "200g",
      "image": "https://images.unsplash.com/photo-1600788892032-7c24f5a0eda4",
      "attributes": {
        "organic": true,
        "spiceLevel": "Hot",
        "origin": "India"
      }
    },
    {
      "id": 23,
      "name": "Coriander Powder",
      "description": "Freshly ground coriander powder for rich aroma.",
      "category": "Masala",
      "price": 90,
      "discountedPrice": 80,
      "discountPercent": 11,
      "quantity": "200g",
      "image": "https://images.unsplash.com/photo-1569171918146-0a7b3b38e95d",
      "attributes": {
        "organic": false,
        "spiceLevel": "Mild",
        "origin": "India"
      }
    },
    {
      "id": 24,
      "name": "Garam Masala",
      "description": "Blend of premium spices for authentic taste.",
      "category": "Masala",
      "price": 150,
      "discountedPrice": 130,
      "discountPercent": 13,
      "quantity": "200g",
      "image": "https://images.unsplash.com/photo-1589308078051-d50f3190b34a",
      "attributes": {
        "organic": true,
        "spiceLevel": "Medium",
        "origin": "India"
      }
    },
    {
      "id": 25,
      "name": "Cumin Seeds",
      "description": "Whole cumin seeds for rich flavor and digestion benefits.",
      "category": "Masala",
      "price": 110,
      "discountedPrice": 95,
      "discountPercent": 13,
      "quantity": "100g",
      "image": "https://images.unsplash.com/photo-1598515214682-bcd058c15381",
      "attributes": {
        "organic": true,
        "spiceLevel": "Mild",
        "origin": "India"
      }
    },
    {
      "id": 26,
      "name": "Black Pepper",
      "description": "Whole black pepper, rich in flavor and aroma.",
      "category": "Masala",
      "price": 180,
      "discountedPrice": 160,
      "discountPercent": 11,
      "quantity": "100g",
      "image": "https://images.unsplash.com/photo-1624453836719-6d2152e7b7e3",
      "attributes": {
        "organic": false,
        "spiceLevel": "Hot",
        "origin": "India"
      }
    },
    {
      "id": 27,
      "name": "Mustard Seeds",
      "description": "Whole mustard seeds for pickles and tempering.",
      "category": "Masala",
      "price": 70,
      "discountedPrice": 60,
      "discountPercent": 14,
      "quantity": "200g",
      "image": "https://images.unsplash.com/photo-1616777145014-8e5f54b1e3b8",
      "attributes": {
        "organic": true,
        "spiceLevel": "Mild",
        "origin": "India"
      }
    },
    {
      "id": 28,
      "name": "Cloves",
      "description": "Whole cloves with strong aroma and medicinal benefits.",
      "category": "Masala",
      "price": 250,
      "discountedPrice": 220,
      "discountPercent": 12,
      "quantity": "100g",
      "image": "https://images.unsplash.com/photo-1567936297583-dc75a82db8ea",
      "attributes": {
        "organic": true,
        "spiceLevel": "Strong",
        "origin": "India"
      }
    },
    {
      "id": 29,
      "name": "Cardamom",
      "description": "Green cardamom pods for aromatic sweetness.",
      "category": "Masala",
      "price": 300,
      "discountedPrice": 270,
      "discountPercent": 10,
      "quantity": "100g",
      "image": "https://images.unsplash.com/photo-1597228707283-b7c89a7cf6b8",
      "attributes": {
        "organic": false,
        "spiceLevel": "Mild",
        "origin": "India"
      }
    },
    {
      "id": 30,
      "name": "Fenugreek Seeds",
      "description": "Bitter and aromatic fenugreek seeds for health benefits.",
      "category": "Masala",
      "price": 60,
      "discountedPrice": 50,
      "discountPercent": 16,
      "quantity": "200g",
      "image": "https://images.unsplash.com/photo-1611033748019-c995db14d6a5",
      "attributes": {
        "organic": true,
        "spiceLevel": "Mild",
        "origin": "India"
      }
    },
    {
      "id": 31,
      "name": "Basmati Rice",
      "description": "Premium long-grain Basmati rice, perfect for biryanis.",
      "category": "Grocery",
      "price": 200,
      "discountedPrice": 180,
      "discountPercent": 10,
      "quantity": "5kg",
      "image": "https://images.unsplash.com/photo-1626078877057-65d31b267fc6",
      "attributes": {
        "organic": false,
        "glutenFree": true,
        "origin": "India"
      }
    },
    {
      "id": 32,
      "name": "Whole Wheat Flour",
      "description": "Stone-ground whole wheat flour for soft chapatis.",
      "category": "Grocery",
      "price": 150,
      "discountedPrice": 135,
      "discountPercent": 10,
      "quantity": "5kg",
      "image": "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      "attributes": {
        "organic": true,
        "glutenFree": false,
        "origin": "India"
      }
    },
    {
      "id": 33,
      "name": "Toor Dal",
      "description": "Protein-rich pigeon pea dal, staple for Indian households.",
      "category": "Grocery",
      "price": 160,
      "discountedPrice": 145,
      "discountPercent": 9,
      "quantity": "1kg",
      "image": "https://images.unsplash.com/photo-1615484477189-dcdd39a5f620",
      "attributes": {
        "organic": false,
        "glutenFree": true,
        "origin": "India"
      }
    },
    {
      "id": 34,
      "name": "Chana Dal",
      "description": "Split Bengal gram for rich and flavorful dal dishes.",
      "category": "Grocery",
      "price": 140,
      "discountedPrice": 125,
      "discountPercent": 11,
      "quantity": "1kg",
      "image": "https://images.unsplash.com/photo-1618773928121-59c55611c5e2",
      "attributes": {
        "organic": true,
        "glutenFree": true,
        "origin": "India"
      }
    },
    {
      "id": 35,
      "name": "Sugar",
      "description": "Fine-grain sugar for all your sweetening needs.",
      "category": "Grocery",
      "price": 45,
      "discountedPrice": 40,
      "discountPercent": 11,
      "quantity": "1kg",
      "image": "https://images.unsplash.com/photo-1622911487370-7740eeb1a36a",
      "attributes": {
        "organic": false,
        "glutenFree": true,
        "origin": "India"
      }
    },
    {
      "id": 51,
      "name": "Notebook",
      "description": "Hardcover ruled notebook for school and office use.",
      "category": "Stationery",
      "price": 120,
      "discountedPrice": 100,
      "discountPercent": 17,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1568667256549-094345857637",
      "attributes": {
        "pages": "200",
        "size": "A4",
        "origin": "India"
      }
    },
    {
      "id": 52,
      "name": "Ball Pen",
      "description": "Smooth-flowing ink pen for everyday writing.",
      "category": "Stationery",
      "price": 30,
      "discountedPrice": 25,
      "discountPercent": 16,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1531615018523-4bf112eb242f",
      "attributes": {
        "inkColor": "Blue",
        "refillable": false,
        "origin": "India"
      }
    },
    {
      "id": 53,
      "name": "Highlighter Set",
      "description": "Set of 5 vibrant color highlighters for study notes.",
      "category": "Stationery",
      "price": 150,
      "discountedPrice": 130,
      "discountPercent": 13,
      "quantity": "5 pieces",
      "image": "https://images.unsplash.com/photo-1607082349567-6edbc2ad2492",
      "attributes": {
        "colors": [
          "Yellow",
          "Pink",
          "Blue",
          "Green",
          "Orange"
        ],
        "inkType": "Fluorescent",
        "origin": "India"
      }
    },
    {
      "id": 54,
      "name": "Pencil Box",
      "description": "Durable plastic pencil box with compartments.",
      "category": "Stationery",
      "price": 180,
      "discountedPrice": 160,
      "discountPercent": 11,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1593538125164-769a28d66f99",
      "attributes": {
        "material": "Plastic",
        "lockType": "Snap Lock",
        "origin": "India"
      }
    },
    {
      "id": 55,
      "name": "Sketchbook",
      "description": "Thick, acid-free paper for sketching and drawing.",
      "category": "Stationery",
      "price": 250,
      "discountedPrice": 220,
      "discountPercent": 12,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1581894962705-1806d99b2d71",
      "attributes": {
        "pages": "100",
        "size": "A3",
        "origin": "India"
      }
    },
    {
      "id": 56,
      "name": "Sticky Notes",
      "description": "Colorful sticky notes for reminders and quick notes.",
      "category": "Stationery",
      "price": 80,
      "discountedPrice": 70,
      "discountPercent": 12,
      "quantity": "100 sheets",
      "image": "https://images.unsplash.com/photo-1600616637937-36c0d9f3cf63",
      "attributes": {
        "colors": [
          "Yellow",
          "Pink",
          "Blue"
        ],
        "selfAdhesive": true,
        "origin": "India"
      }
    },
    {
      "id": 57,
      "name": "Erasers",
      "description": "Soft and dust-free erasers for clean erasing.",
      "category": "Stationery",
      "price": 20,
      "discountedPrice": 18,
      "discountPercent": 10,
      "quantity": "2 pieces",
      "image": "https://images.unsplash.com/photo-1561299995-59fb183d19d6",
      "attributes": {
        "material": "Rubber",
        "dustFree": true,
        "origin": "India"
      }
    },
    {
      "id": 58,
      "name": "Geometry Box",
      "description": "Complete geometry set with compass, scale, and more.",
      "category": "Stationery",
      "price": 220,
      "discountedPrice": 195,
      "discountPercent": 11,
      "quantity": "1 set",
      "image": "https://images.unsplash.com/photo-1577458486846-efe6075d8fd1",
      "attributes": {
        "itemsIncluded": [
          "Compass",
          "Protractor",
          "Scale",
          "Set Square"
        ],
        "material": "Metal & Plastic",
        "origin": "India"
      }
    },
    {
      "id": 59,
      "name": "Paper Clips",
      "description": "Pack of 50 durable steel paper clips.",
      "category": "Stationery",
      "price": 50,
      "discountedPrice": 40,
      "discountPercent": 20,
      "quantity": "50 pieces",
      "image": "https://images.unsplash.com/photo-1611622449227-9e470cf73b6c",
      "attributes": {
        "material": "Steel",
        "coated": false,
        "origin": "India"
      }
    },
    {
      "id": 60,
      "name": "Glue Stick",
      "description": "Non-toxic glue stick for office and school use.",
      "category": "Stationery",
      "price": 45,
      "discountedPrice": 40,
      "discountPercent": 11,
      "quantity": "1 piece",
      "image": "https://images.unsplash.com/photo-1594977270606-645798b47c32",
      "attributes": {
        "nonToxic": true,
        "washable": true,
        "origin": "India"
      }
    }
]

const tabs = [
    {
        id: 1,
        title: 'Suggestions'
    },
    {
        id: 2,
        title: 'Quick List'
    }
]