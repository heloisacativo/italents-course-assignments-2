import "../../css/Button.css"

export const Button = ({text, onClick, ...props}) => {
    return (
        <div className="buttonContainer">
            <button className="button" type={props.type} onClick={(event) => {
                event.preventDefault();
                onClick();
            }}>{text}</button>
        </div>
    )
}