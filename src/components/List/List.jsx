import "../../css/List.css"

export const List = ({list, onEdit, onClick,onDelete, onChange, ...props }) => {
    return (
        <div className="listContainer">
        <input 
        className="checkboxList" 
        type={props.type} 
        onChange={onChange}
        />
        <div className="detailsItemContainer">
        <div className="nameItem">
        <h2>Nome</h2>
        <h4>{list.name}</h4>
        </div>
        <div className="linkItem">
        <h2>Link</h2>
        <h4>{list.link}</h4>
        </div>
        <div className="precoItem">
        <h2>Preço</h2>
        <h4>{list.preco}</h4>
        </div> 
        </div>   
        <div className="buttonGroup">
        <div className="buttonDelete"> 
            <button onClick={onDelete}>
                Deletar
            </button>  
        </div>
        <div className="buttonEdit">
        <button onClick={onEdit}>
                Editar
            </button> 
        </div>
        </div>
        </div>
    )
}