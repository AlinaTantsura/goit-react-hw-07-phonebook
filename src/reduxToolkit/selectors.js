
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilterWord = state => state.filter;

export const  getFiltredContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilterWord(state);
    if(filter) return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        return contacts;

}
