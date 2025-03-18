
class ProductReviewApp {
    constructor() {
        this.productService = new ProductService();
        this.storageService = new ReviewStorageService();
        this.validators = new Validators();
        this.uiHelpers = new UIHelpers();

        this.products = [];
        this.currentStep = CONSTANTS.REVIEW_STEPS.PRODUCT_LIST;
        this.selectedProduct = null;
        this.currentRating = 0;
    }

    async init() {
        try {
            this.uiHelpers.renderLoading(CONSTANTS.SELECTORS.PRODUCT_LIST);
            this.products = await this.productService.fetchProducts();
            this.renderProductList();
        } catch (error) {
            this.uiHelpers.renderError(
                CONSTANTS.SELECTORS.PRODUCT_LIST, 
                error.message
            );
        }
    }

    renderProductList() {
        const productListContainer = document.querySelector(CONSTANTS.SELECTORS.PRODUCT_LIST);
        productListContainer.innerHTML = "";

        this.products.forEach((product) => {
            const productEl = document.createElement('div');
            productEl.classList.add('product-item');

            const existingReview = this.storageService.getReview(product.id);

            productEl.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <p>${product.price}</p>
                ${existingReview ? '<span class="reviewed-badge">Reviewed</span>' : ''}
            `

            productEl.addEventListener('click', () => this.selectProduct(product))

            productListContainer.appendChild(productEl);
        });

        this.renderReviewSection();
    }

    selectProduct(product) {

        this.selectedProduct = product;
        const existingReview = this.storageService.getReview(product.id);
        
        if (existingReview) {
            this.currentRating = existingReview.rating;
            this.currentStep = CONSTANTS.REVIEW_STEPS.REVIEW_TEXT;
        } else {
            this.currentRating = 0;
            this.currentStep = CONSTANTS.REVIEW_STEPS.RATING;
        }

        this.renderReviewSection();
    }

    renderRatingStep(reviewSection) {
        reviewSection.innerHTML = `
            <div class="rating-container">
                <h2>Rate your Product</h2>
                <div class="rating-stars">
                    ${this.uiHelpers.renderStarRating(this.currentRating)}
                </div>
                <div class="review-actions">
                    <button id="cancel-btn">Cancel</button>
                    <button id="next-btn" ${this.currentRating ? '' : ''}>
                        Next
                    </button>
                </div>
            </div>
        `;

        this.bindStarRatingEvents();
        this.bindRatingStepNavigation();
    }

    bindStarRatingEvents() {
        const stars = document.querySelectorAll(CONSTANTS.SELECTORS.RATING_STARS);
        stars.forEach((star) => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.dataset.rating);
                stars.forEach((s, index) => {
                    if(index < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                })

                this.currentRating = rating;

            })
        })
    }

    bindRatingStepNavigation() {
        const nextBtn = document.getElementById('next-btn');
        const cancelBtn = document.getElementById('cancel-btn');

        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                const ratingValidation = this.validators.validateRating(this.currentRating);
                if(ratingValidation.isValid) {
                    this.currentStep = CONSTANTS.REVIEW_STEPS.REVIEW_TEXT;
                    this.renderReviewSection()
                } else {
                    this.uiHelpers.showToast(ratingValidation.error);
                }
            });   
        }

        if(cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.selectedProduct = null;
                this.currentStep = CONSTANTS.REVIEW_STEPS.PRODUCT_LIST;
                this.renderProductList();
            })
        }
    }

    renderReviewTextStep(reviewSection) {

        const existingReview = this.storageService.getReview(
            this.selectedProduct.id
        );

        reviewSection.innerHTML = `
        <div class="review-text-container">
            <h2>Write Your Review</h2>
            <div class="rating-stars">
                ${this.uiHelpers.renderStarRating(this.currentRating)}
            </div>
            <textarea 
                id="review-text" 
                maxlength="${CONSTANTS.MAX_REVIEW_LENGTH}" 
                placeholder="Write your review"
            >${existingReview ? existingReview.text : ''}</textarea>
            <p id="char-count">
                0/${CONSTANTS.MAX_REVIEW_LENGTH}
            </p>
            <div class="review-actions">
                <button id="prev-btn">Previous</button>
                <button id="submit-review-btn">Submit Review</button>
            </div>
        </div>
    `;

        this.bindReviewTextEvents();
    }

    bindReviewTextEvents() {
        const reviewText = document.getElementById('review-text');
        const submitBtn = document.getElementById('submit-review-btn');
        const prevBtn = document.getElementById('prev-btn');

        reviewText.addEventListener('input', () => {
            this.uiHelpers.updateCharCount(reviewText);
        });

        prevBtn.addEventListener('click', () => {
            this.currentStep = CONSTANTS.REVIEW_STEPS.RATING;
            this.renderReviewSection();
        });

        submitBtn.addEventListener('click', () => {

            const textValidation = this.validators.validateReviewText(reviewText.value);
            
            if (textValidation.isValid) {

                this.storageService.saveReview(
                    this.selectedProduct.id, 
                    {
                        rating: this.currentRating,
                        text: reviewText.value
                    }
                );

                this.uiHelpers.showToast('Review submitted successfully');
                this.selectedProduct = null;
                this.currentStep = CONSTANTS.REVIEW_STEPS.PRODUCT_LIST;
                this.currentRating = 0;
                this.renderProductList();
            } else {
                this.uiHelpers.showToast(textValidation.error);
            }
        });
    }

    renderReviewSection() {
        const reviewSection = document.querySelector(CONSTANTS.SELECTORS.REVIEW_SECTION);

        switch(this.currentStep) {
            case CONSTANTS.REVIEW_STEPS.RATING:
                this.renderRatingStep(reviewSection);
                break;
            case CONSTANTS.REVIEW_STEPS.REVIEW_TEXT:
                this.renderReviewTextStep(reviewSection);
                break;
            default:
                reviewSection.innerHTML = '<p>Select a product to review</p>'
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new ProductReviewApp();
    app.init();
})

