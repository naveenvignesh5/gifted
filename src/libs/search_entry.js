import { getItem, setItem } from "./local_storage";
import { SEARCH_ENTRY_STORAGE_KEY, SEARCH_ENTRY_LIMIT } from "../constants";


const updateSearchEntry = (newEntry) => {
    let entries = getItem(SEARCH_ENTRY_STORAGE_KEY);
    
    if (!entries) {
        entries = [ newEntry ];
        setItem(SEARCH_ENTRY_STORAGE_KEY, entries);
        return;
    }

    if (entries.length > SEARCH_ENTRY_LIMIT) entries.pop();

    entries.unshift(newEntry);

    setItem(SEARCH_ENTRY_STORAGE_KEY, entries);
};

const getSearchEntry = () => {
    let entries = getItem(SEARCH_ENTRY_STORAGE_KEY);

    return entries;
}

export  { updateSearchEntry, getSearchEntry };
