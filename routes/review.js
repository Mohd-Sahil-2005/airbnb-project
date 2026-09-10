
const express=require("express");
const router = express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validatereview, isloggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/review.js");

// post review route
router.post("/",
    isloggedIn,
    validatereview, wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isloggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;