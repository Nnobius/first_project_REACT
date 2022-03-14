import React from 'react';
import style from "../../Reviews.module.css";
import {AddReviewActionCreator} from "../../../../../state";

const ReviewForm = (props) => {
    let nameArea = React.createRef();
    let numArea = React.createRef();
    let reviewArea = React.createRef();

    let createReview = () => {
        let textName = nameArea.current.value;
        let textNum = numArea.current.value;
        let textReview = reviewArea.current.value;

        props.dispatch(AddReviewActionCreator(textName, textNum, textReview));

        nameArea.current.value = '';
        numArea.current.value = '';
        reviewArea.current.value = '';
    }

    return (
        <div>
            <p>Имя</p>
            <textarea ref={nameArea}></textarea>
            <p>Номер заказа</p>
            <textarea ref={numArea}></textarea>
            <p>Отзыв</p>
            <textarea ref={reviewArea}></textarea>
            <div>
                <button onClick={ createReview } className={style.reviewButton}>Добавить отзыв</button>
            </div>
        </div>
    );
}

export default ReviewForm;