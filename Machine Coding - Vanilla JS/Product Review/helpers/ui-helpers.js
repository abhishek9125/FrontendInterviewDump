class UIHelpers {
    renderLoading(containerSelector) {
        const container = document.querySelector(containerSelector);
        container.innerHTML = `
            <div>
                <div class="spinner"></div>
                <p>Loading Products</p>
            </div>
        `;
    }

    renderError(containerSelector, message) {
        const container = document.querySelector(containerSelector);
        container.innerHTML = `
            <div class="error">
                <p>${message}</p>
                <button id="retry-btn">Retry</button>
            </div>
        `;
    }

    renderStarRating(rating) {
        return [...Array(CONSTANTS.MAX_RATING)].map((_, index) => `
            <span class="rating-star ${index < rating ? 'active' : ''}" 
            data-rating="${index + 1}">★</span>
        `).join('');
    }

    showToast(message, delay = 3000) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            document.body.removeChild(toast);
        }, delay)
    }

    updateCharCount(textArea) {
        const charCountEl = document.getElementById('char-count');
        if (charCountEl) {
            charCountEl.textContent = 
                `${textArea.value.length}/${CONSTANTS.MAX_REVIEW_LENGTH}`;
        }
    }
}
