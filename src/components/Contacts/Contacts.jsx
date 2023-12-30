import Button from "components/Form/Button.styled";
import Item from "./Item.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltredContacts } from "reduxToolkit/selectors";
import { Notify } from "notiflix";
import { deleteContacts } from "reduxToolkit/operations";

const Contacts = () => {
    const dispatch = useDispatch()
    const filtredContacts = useSelector(selectFiltredContacts);

    return (
            <ul>
            {filtredContacts.map(({name, number, id}) => {
                const handleClick = () => {
                    Notify.success(`The contact '${name}' is successfully deleted`);
                    return dispatch(deleteContacts(id))
                }
                return <Item key={id}>{name}: {number}
                    <Button type='button'
                        onClick={handleClick}>Delete</Button> </Item>
            })}
            </ul>
    )
}

export default Contacts;