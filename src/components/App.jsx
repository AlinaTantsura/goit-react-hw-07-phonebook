import Container from "./Container.styled";
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "reduxToolkit/selectors";
import { fetchContacts } from "reduxToolkit/operations";
import { useEffect } from "react";

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    useEffect(() => {
        dispatch(fetchContacts())
        
    },[dispatch])

    return(
            <Container>
                <h1>Phonebook</h1>
                <Form />
            
            {(contacts.length !== 0) && (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                    <Contacts />
                </>
                 )}
                
            </Container>
        )
}