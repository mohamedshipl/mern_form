const express=require('express')
const router=express.Router();

const userSignUpController=require("../controller/userSignUp");
const userSignInController = require('../controller/userSignIn');
const authToken = require('../middleware/authToken');
const userDetailsController = require('../controller/userDetails');
const userLogout = require('../controller/userLogOut');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const UploadProductController = require('../controller/upLoadProduct');
const getProductController = require('../controller/getProduct');
const updateProductController = require('../controller/updateProduct');
const getCategoryProduct = require('../controller/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/getCategoryWiseProduct');
const getProductDetails = require('../controller/getProductDetails');
const addToCartController = require('../controller/addToCartController');
const countAddToCartProduct = require('../controller/countAddToCartProduct');
const addToCartViewProduct = require('../controller/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct');
const searchProduct = require('../controller/searchProduct');
const filterProductController = require('../controller/filterProduct');
const paymentController = require('../controller/paymentController');
const webhooks = require('../controller/webhook');
const orderController = require('../controller/order.controller');
const allOrderController = require('../controller/allOrder.controller');
//const UploadProductController = require('../controller/upLoadProduct');



router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/userdetails",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken, updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)
router.post("/checkout",authToken,paymentController)
router.post('/webhook',webhooks) // /api/webhook
router.get("/order-list",authToken,orderController)
router.get("/all-order",authToken,allOrderController)









module.exports=router


