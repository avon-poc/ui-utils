const converStrToObj = (str) => {
    let obj = {};
    if (str && typeof str === 'string') {
        const objStr = str.match(/\{(.)+\}/g);
        try {
            obj = objStr ? JSON.parse(objStr[0]) : {};
        }
        catch (e) {
            obj = {};
        }
    }
    return obj;
};

export default converStrToObj;