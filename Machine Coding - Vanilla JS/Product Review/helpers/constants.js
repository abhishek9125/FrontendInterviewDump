
const CONSTANTS = {
    MAX_REVIEW_LENGTH: 100,
    MIN_RATING: 1,
    MAX_RATING: 5,
    SELECTORS: {
        PRODUCT_LIST: '#product-list',
        REVIEW_SECTION: '#review-section',
        RATING_STARS: '.rating-star',
        REVIEW_TEXT: '#review-text',
        SUBMIT_BTN: '#submit-review-btn',
        NEXT_BTN: '#next-btn',
        PREV_BTN: '#prev-btn'
    },
    REVIEW_STEPS: {
        PRODUCT_LIST: 0,
        RATING: 1,
        REVIEW_TEXT: 2
    },
    ERROR_MESSAGES: {
        EMPTY_REVIEW: 'Review cannot be empty',
        REVIEW_TOO_LONG: 'Review must be 100 characters or less',
        NO_RATING: 'Please select a rating',
        API_FAILURE: 'Failed to load products. Please try again.'
    }
} 

const MOCK_DATA = [
    { 
        id: 1, 
        name: 'Smartphone Pro', 
        category: 'Electronics', 
        price: 49999 
    },
    { 
        id: 2, 
        name: 'Wireless Earbuds', 
        category: 'Audio', 
        price: 2999 
    },
    { 
        id: 3, 
        name: 'Laptop Ultra', 
        category: 'Computers', 
        price: 79999 
    },
    { 
        id: 4, 
        name: 'Smart Watch', 
        category: 'Wearables', 
        price: 9999 
    }
];