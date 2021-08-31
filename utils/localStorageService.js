const localStorageService = (localStorage => {
    const _getItem = (key) => {
        return localStorage.getItem(key);
    };
    const _setItem = (key, value) => {
        return localStorage.setItem(key, value);
    };
    const _removeItem = (key) => {
        return localStorage.removeItem(key);
    };
    const _clear = () => {
        localStorage.clear();
    };
    return {
        getItem: (key) => {
            return _getItem(key);
        },
        setItem: (key, value) => {
            _setItem(key, value);
        },
        removeItem: (key) => {
            _removeItem(key);
        },
        clear: () => {
            _clear();
        },
    };
})(localStorage);


export default localStorage;