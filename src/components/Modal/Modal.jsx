import { useState } from "react";
import "../../css/Modal.css"

export const Modal = ({ text, onConfirm, onClose, showInput = false  }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleConfirm = () => {
        onConfirm(inputValue); 
    } 
    return (
        <>
        <div className="modalBackground" onClick={onClose}></div>
        <div className="modalOverlay">
        <h2>{text}</h2>
        {showInput && (
                    
                    <form className="formModal">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        
                    </form>
                )}
        <div className="buttonsContainer">
        <button className="buttonConfirm" onClick={handleConfirm}>Confirmar</button>
        <button className="buttonBack" onClick={onClose}>Voltar</button>
        </div>
        </div>
        </>
    )
}