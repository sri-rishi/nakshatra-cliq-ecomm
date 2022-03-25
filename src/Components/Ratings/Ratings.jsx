export const Ratings = (props) => {
    return (
        <p className="flex-row align-center rating-box gap-8-px">
            <span className="rating-value">{props.text}</span>
            <img className="star-img" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="rating"/>
        </p>
    )
}