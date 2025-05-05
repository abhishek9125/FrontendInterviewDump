document.addEventListener('DOMContentLoaded', async function () {

    const fetchData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsData);
            }, 300)
        })
    }

    let allProducts = await fetchData();

    const getCategories = (products) => {

        const categories = [];
        const uniqueCategories = {};

        products.forEach((item) => {
            if (!uniqueCategories[item.category]) {
                uniqueCategories[item.category] = {
                    title: item.category,
                    image: item.image
                };
                categories.push(uniqueCategories[item.category]);
            }
        })

        return categories;
    }

    const renderCategoryList = (categories) => {
        const categoryContainer = document.querySelector('.category-list');

        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';

            const categoryImage = document.createElement('img');
            categoryImage.className = 'category-image';
            categoryImage.src = category.image;

            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category.title;

            categoryItem.appendChild(categoryImage);
            categoryItem.appendChild(categoryTitle);

            categoryItem.addEventListener('click', () => handleCategoryClick(category.title));
            categoryContainer.appendChild(categoryItem);
        });
    }

    const handleCategoryClick = (category) => {
        let selectedProducts = allProducts.filter((item) => item.category === category);
        renderProducts(selectedProducts);
    }

    const renderProductItem = (product) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        const productImage = document.createElement('img');
        productImage.className = 'product-image';
        productImage.src = product.image;
        productItem.appendChild(productImage);

        const productContent = document.createElement('div');
        productContent.className = 'product-content';

        const productTitle = document.createElement('div');
        productTitle.className = 'product-title';
        productTitle.textContent = product.name;
        productContent.appendChild(productTitle);

        const productQuantity = document.createElement('div');
        productQuantity.className = 'product-quantity';
        productQuantity.textContent = product.quantity;
        productContent.appendChild(productQuantity);

        const productFooter = document.createElement('div');
        productFooter.className = 'product-footer';

        const priceContainer = document.createElement('div');

        const productPrice = document.createElement('div');
        productPrice.className = 'product-price';
        productPrice.textContent = product.price;
        priceContainer.appendChild(productPrice);

        const productDiscountedPrice = document.createElement('div');
        productDiscountedPrice.className = 'product-discounted-price';
        productDiscountedPrice.textContent = product.discountPercent;
        priceContainer.appendChild(productDiscountedPrice);

        productFooter.appendChild(priceContainer);

        const addButton = document.createElement('button');
        addButton.className = 'product-add';
        addButton.textContent = 'Add';
        productFooter.appendChild(addButton);

        productContent.appendChild(productFooter);

        productItem.appendChild(productContent);

        const productDiscount = document.createElement('div');
        productDiscount.className = 'product-discount';
        productDiscount.textContent = `${product.discountPercent}%`;
        productItem.appendChild(productDiscount);

        const wishlistAdd = document.createElement('div');
        wishlistAdd.className = 'product-wishlist-add';
        wishlistAdd.textContent = '+';
        productItem.appendChild(wishlistAdd);

        return productItem;
    }

    const renderProducts = (products) => {
        const productContainer = document.querySelector('.product-list');
        productContainer.innerHTML = '';

        products.forEach(product => {
            const productItem = renderProductItem(product);
            productContainer.appendChild(productItem);
        });
    };

    const renderWishlists = (tabContentWrapper) => {
        tabContentWrapper.innerHTML = '<div>Quick List</div>'
    }

    const renderTabContent = (id) => {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('tab-wrapper-main')
        let tabContentWrapper = document.querySelector('.tab-content-wrapper');
        if(tabContentWrapper) {
            tabContentWrapper.innerHTML = "";
        } else {
            tabContentWrapper = document.createElement('div');
            tabContentWrapper.className = "tab-content-wrapper";
            wrapper.appendChild(tabContentWrapper);
        }

        switch(id) {
            case 1:
                tabContentWrapper.innerHTML = '<div>suggestions</div>'
                break;
            case 2:
                renderWishlists(tabContentWrapper)
                break;
            default:
                tabContentWrapper.innerHTML = '<p>Select a tab</p>'
        }
    }

    const renderTabs = () => {
        const wrapper = document.querySelector('.wrapper');
        const tabsWrapper = document.createElement('div');
        tabsWrapper.className = 'tabs-wrapper';
        tabs.forEach((item) => {
            const tabItem = document.createElement('div')
            tabItem.innerText = item.title;
            tabItem.className="tab";
            tabItem.addEventListener('click', () => renderTabContent(item.id));
            tabsWrapper.appendChild(tabItem);
        })

        wrapper.appendChild(tabsWrapper);
    }

    const openWishlistTabs = () => {
        const wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = ``;
        renderTabs();
    }

    const bindWishlistButton = () => {
        const wishlist = document.querySelector('.wishlist-open');
        wishlist.addEventListener('click', () => openWishlistTabs())
    }
    
    async function init() {
        let categories = getCategories(allProducts);
        renderCategoryList(categories);
        renderProducts(allProducts);
        bindWishlistButton();
    }

    init();
})