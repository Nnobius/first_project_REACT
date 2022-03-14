import style from '../../Reviews.module.css'

const ReviewElement = (props) => {
    return (
        <div className={style.reviewElement}>
            <div>
            { props.name }
            </div>
            <div>
            Заказ №{ props.num }
            </div>
            <div>
            { props.text }
            </div>
        </div>
    )
}

export default ReviewElement;