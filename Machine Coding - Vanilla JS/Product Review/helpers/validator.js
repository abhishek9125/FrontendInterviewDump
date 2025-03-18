class Validators {

    validateReviewText(text) {
        if (!text || text.trim() === '') {
            return {
                isValid: false,
                error: CONSTANTS.ERROR_MESSAGES.EMPTY_REVIEW
            };
        }

        if (text.length > CONSTANTS.MAX_REVIEW_LENGTH) {
            return {
                isValid: false,
                error: CONSTANTS.ERROR_MESSAGES.REVIEW_TOO_LONG
            };
        }

        return {
            isValid: true,
            error: null
        };
    }
    
    validateRating(rating) {
        if(!rating || rating < CONSTANTS.MIN_RATING || rating > CONSTANTS.MAX_RATING) {
            return {
                isValid: false,
                error: CONSTANTS.ERROR_MESSAGES.NO_RATING
            };
        }

        return {
            isValid: true,
            error: null
        }
    }

}