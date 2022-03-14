import style from './Reviews.module.css'
import React from "react";
import ReviewList from "./ReviewList/ReviewList";
import {AddReviewActionCreator} from "../../../state";
import ReviewForm from "./ReviewList/ReviewForm/ReviewForm";


const Reviews = (props) => {
    return (
        <div>
            <div className={style.reviewForm}>
                <ReviewForm dispatch={props.dispatch}/>
            </div>
            <div className={style.reviews}>
                <ReviewList rewiewsData={props.rewiewsData}/>
            </div>
        </div>
    )
}

export default Reviews;