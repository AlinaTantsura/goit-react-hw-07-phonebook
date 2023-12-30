
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilterWord = state => state.filter;

export const  selectFiltredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilterWord(state);
    if(filter) return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        return contacts;

}
