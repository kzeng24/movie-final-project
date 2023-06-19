import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMovieReviewsThunk } from "../../services/reviews-thunks";
import "./reviews.css"
import ReviewItem from "./reviewItem";
import { useParams } from "react-router";
const ReviewList = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    let { id } = useParams();

    console.log("movieId: ", id);

    const dispatch = useDispatch();
    useEffect(() => {
        const loadMovieReviews = async () => {
            const { payload } = await dispatch(findMovieReviewsThunk(id));
            setMovieReviews(payload);
            console.log("PAYLOAD", payload)
        }
        loadMovieReviews();
    }, [])
    return (
        <div className="wd-review-list-div">
            {/* <pre>{JSON.stringify(reviews, null, 2)}</pre> */}
            <ul className="list-group wd-review-list">
                <li >
                    <h3>Critic Reviews</h3><br />
                </li>
                {
                    movieReviews.map(review =>
                        <ReviewItem
                            key={review._id}
                            review={review} />
                    )
                }
            </ul>
        </div>
    );
}
export default ReviewList;