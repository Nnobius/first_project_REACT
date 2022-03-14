import style from '../Reviews.module.css'
import ReviewElement from "./ReviewElement/ReviewElement";

const ReviewList = (props) => {
    let ReviewItem = props.rewiewsData.map(ReviewItem => <ReviewElement key={ReviewItem.id} name={ReviewItem.name} num={ReviewItem.num} text={ReviewItem.text} />)

    return (
        <div className={style.reviewsList}>
            {ReviewItem}
        </div>
    )
}

export default ReviewList;