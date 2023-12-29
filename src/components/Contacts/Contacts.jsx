import Button from "components/Form/Button.styled";
import Item from "./Item.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFiltredContacts } from "reduxToolkit/selectors";
import { Notify } from "notiflix";
import { deleteContacts } from "reduxToolkit/operations";

const Contacts = () => {
    // const contacts = useSelector(getContacts);
    // const filter = useSelector(getFilterWord);
    const dispatch = useDispatch();

    // const getFiltredContacts = (contacts, filter) => {
    // }
 
    const filtredContacts = useSelector(getFiltredContacts);
    

    return (
            <ul>
            {filtredContacts.map(({ name, id, number }) => {
                const handleClick = () => {
                            console.log(id)
                            Notify.success(`The contact '${name}' is successfully deleted`);
                            return dispatch(deleteContacts(id))
                        }
                return (<Item key={id} id={id}>{name}: {number}   
                    <Button type='button'
                        onClick={handleClick}>Delete</Button> </Item>
                )
            })}
            </ul>
    )
}

export default Contacts;