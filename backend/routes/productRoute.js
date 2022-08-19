const express = require("express");
const { 
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
 } = require("../controllers/productController");
const { isAuthenticationUser ,authorizationRoles} = require("../middleware/auth");
const router = express.Router();

router.route('/products').get(getAllProducts); 


router
.route('/product/new')
.post(isAuthenticationUser,authorizationRoles("admin"),createProduct);

router
.route("/admin/product/:id")
.put(isAuthenticationUser,authorizationRoles("admin"),updateProduct)
.delete(isAuthenticationUser,authorizationRoles("admin"),deleteProduct)

router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenticationUser , createProductReview);
router
    .route("/reviews")
    .get(getProductReviews)
    .delete(isAuthenticationUser,deleteReview);

module.exports = router; 