import "../../css/InputAddList.css"

export const InputAddList = ({onChange, inputName, ...props}) => {
    return (
        <div className="formContainer">
        <div className="inputContainer">
        <div className="label">
        <label htmlFor={props.id}>{inputName}</label>
        </div>
        <input className="input" 
        type={props.type} 
        onChange={onChange}
        {...props}/>
        </div>
        </div>
    )
}