class ReviewStorageService {
    saveReview(productId, review) {
        try {
            const reviews = this.getAllReviews();
            reviews[productId] = review;
            localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(reviews));
        } catch (error) {
            console.error('Error saving review:', error);
        }
    }

    getReview(productId) {
        const reviews = this.getAllReviews();
        return reviews[productId] || null;
    }

    getAllReviews() {
        try {
            const reviews = localStorage.getItem(CONSTANTS.STORAGE_KEY);
            return reviews ? JSON.parse(reviews) : {};
        } catch (error) {
            console.error('Error retrieving reviews:', error);
            return {};
        }
    }

    clearReview(productId) {
        const reviews = this.getAllReviews();
        delete reviews[productId];
        
        localStorage.setItem(
            CONSTANTS.STORAGE_KEY, 
            JSON.stringify(reviews)
        );
    }
}
