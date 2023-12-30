import Container from "./Container.styled";
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "reduxToolkit/selectors";
import { fetchContacts } from "reduxToolkit/operations";
import { useEffect } from "react";
import { Loader } from "./Loader/Loader.styled";

export const App = () => {
    const isLoad = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return(
            <Container>
                <h1>Phonebook</h1>
                <Form />
            
            {(isLoad && !error) && <Loader />}
           {     (contacts.length !== 0) && (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                    <Contacts />
                </>
            )}
            
                
            </Container>
        )
}