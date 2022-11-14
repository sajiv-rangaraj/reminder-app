const setDataToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getDataFromLocal = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

const clearDataFromLocal = (key) => {
    localStorage.removeItem(key);
}

export { setDataToLocal, getDataFromLocal, clearDataFromLocal };