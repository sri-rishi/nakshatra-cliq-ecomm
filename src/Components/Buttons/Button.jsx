export const Button = (props) => {
    return (
        <button onClick={props.onClick ? props.onClick : () => {}} type={props.type ? props.type : ""} className={props.className}>{props.icon ? props.icon : "" }{props.text ? props.text : ""}</button>
    )
}