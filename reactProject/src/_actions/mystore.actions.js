import { mystoreConstants } from '../_constants';

export const mystoreActions = {
    setProducts,
    addProduct,
    updateProduct,
    removeProduct,
};

function setProducts(products) {
    return { type: mystoreConstants.SET_PRODUCTS, products };
}

function addProduct(product) {
    return { type: mystoreConstants.ADD_PRODUCT, product };
}

function updateProduct(productId, product) {
    return { type: mystoreConstants.UPDATE_PRODUCT, productId, product };
}

function removeProduct(productId) {
    return { type: mystoreConstants.REMOVE_PRODUCT, productId };
}
