import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./reviews-service";


export const findReviewsThunk = createAsyncThunk(
    "reviews/findReviews",
    async () => await service.findReviews()
);

export const findCriticReviewsThunk = createAsyncThunk(
    "reviews/findCriticReviews",
    async (criticUsername) => await service.findCriticReviews(criticUsername)
);

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId) => {
        await service.deleteReview(reviewId)
        return reviewId
    }
);

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (review) => {
        console.log(review)
        const newReview = await service.createReview(review)
        return newReview
    }
);

export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview',
    async (review) =>
        await service.updateReview(review)
);
