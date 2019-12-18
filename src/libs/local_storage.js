const getItem = (key) => {
    let item = localStorage.getItem(key);
    return JSON.parse(item);
}

const setItem = (key, obj) => {
    let itemString = JSON.stringify(obj);
    localStorage.setItem(key, itemString);
}

export { getItem, setItem }
