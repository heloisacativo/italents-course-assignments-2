import { useState } from "react"
import { InputAddList } from "../components/InputAddList/InputAddList"
import { Button } from "../components/Button/Button"
import { List } from "../components/List/List"
import "../css/HomePage.css";
import { Modal } from "../components/Modal/Modal";
import EmptyImg from "../assets/imgs/empty.png";
import HeaderImg from "../assets/imgs/img-header.png";

export const HomePage = () => {

      const [itemForm, setItemForm] = useState({
            name: "",
            link: "",
            preco: ""
      })

      const[list, setList] = useState([])
      const[completedList, setCompletedList] = useState([])
      const[isOpenModal, setIsOpenModal] = useState(false)
      const [itemToEdit, setItemToEdit] = useState(null);
      const [modalAction, setModalAction] = useState('');


      const handleFieldsChange = (event) => {
            setItemForm({
              ...itemForm,
              [event.target.name] : event.target.value    
            })
            console.log(itemForm)
      }

      const handleClick = () => {
            setList([...list, itemForm]);
            setItemForm({ name: "", link: "", preco: "" }); 
        }

      const handleChecked = (index) => {
            const itemToMove = list[index];
            setCompletedList([...completedList, itemToMove]);
            setList(list.filter((_, i) => i !== index));
      }

      const clickOpenModalDelete = (index) => {
            setItemToEdit(index);
            setModalAction('delete')
            setIsOpenModal(true);
      };


      const clickOpenModalEdit = (index) => {
            setItemToEdit(index);
            setModalAction('edit')
            setIsOpenModal(true);
            setItemForm(list[index]); 
      }

      const handleConfirm = (value) => {
            if (modalAction === 'edit') {
                const updatedList = list.map((item, index) =>
                    index === itemToEdit ? { ...item, name: value } : item
                );
                setList(updatedList);
            } else if (modalAction === 'delete') {
                setCompletedList(list.filter((_, index) => index !== itemToEdit));
                setList(list.filter((_, index) => index !== itemToEdit));
            }
            setIsOpenModal(false); // Fecha o modal
        }

      return (
        <div >
            <header>
                  <img src={HeaderImg} alt="Imagem do Header"/>
                  <h1>Minha lista de compras</h1>    
            </header>
            <div className="mainContainer">
            <form className="formMainContainer">
            <InputAddList inputName="Nome do Item" id="itemName" name="name" type="text" value={itemForm.name} onChange={event => handleFieldsChange(event)}/>
            <InputAddList inputName="Link" id="itemName" name="link" type="url" value={itemForm.link} onChange={event => handleFieldsChange(event)}/>
            <InputAddList inputName="Preço" id="itemName" name="preco" type="number" value={itemForm.preco} onChange={event => handleFieldsChange(event)}/>
            <Button type="submit" text="Salvar" onClick={handleClick}/>
            </form>
           
            <div className="list">
            <ul>
                  {list.length === 0 ? (
                   <div className="empty">
                   <img src={EmptyImg} alt="Sem imagem"/>
                   <p>Não há nada por aqui...</p>
                   <p>Comece a adicionar</p>
                   </div>
                  ): (
                        list.map((item, index) => (
                              <List 
                              list={item} 
                              key={index}
                              type="checkbox"
                              onChange={() => handleChecked(index)}
                              onDelete={() => clickOpenModalDelete(index)}
                              onEdit={() => clickOpenModalEdit(index)}
                              />
                        ))
                  )}
            </ul>
           
            {isOpenModal && (
                  <Modal 
                  text={modalAction === 'edit' ? "Editar" : "Tem certeza que deseja excluir?"}
                  onConfirm={handleConfirm}
                  onClose={() => setIsOpenModal(false)}
                  showInput={modalAction === 'edit'}
                  itemForm={itemForm}
                  setItemForm={setItemForm}
                  />
            )}
                   
            <div className="completedListContainer">
            <ul>
                {completedList.length === 0 ? (
                  <div className="emptyListCompleted">
                  <p>Nenhum item adquirido</p>   
                  </div>
                     
                  ) : (
                        completedList.map((item, index) => (
                        <List
                           list={item}
                           key={index}
                           type="checkbox"
                           checked={true} 
                           onChange={() => handleChecked(index)}
                           onDelete={() => clickOpenModalDelete(index)}
                           onEdit={() => clickOpenModalEdit(index)}
                           />
                  ))
            )}
            </ul>
            </div>
            </div>
            </div> 
        </div>
      )
}