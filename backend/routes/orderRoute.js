
const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticationUser  ,authorizationRoles} = require("../middleware/auth");

router.route("/order/new").post(isAuthenticationUser , newOrder);

router.route("/order/:id").get(isAuthenticationUser ,authorizationRoles("admin"), getSingleOrder);

router.route("/orders/me").get(isAuthenticationUser , myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticationUser , authorizationRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticationUser , authorizationRoles("admin"), updateOrder)
  .delete(isAuthenticationUser , authorizationRoles("admin"), deleteOrder);

module.exports = router;