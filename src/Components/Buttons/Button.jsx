export const Button = (props) => {
    return (
        <button className={props.className}>{props.icon ? props.icon : "" }{props.text ? props.text : ""}</button>
    )
}