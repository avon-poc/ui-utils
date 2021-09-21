const converStrToObj = (str) => {
    let obj = {};
    if (str && typeof str === 'string') {
        const objStr = str.match(/\{(.)+\}/g);
         obj = JSON.parse(objStr[0]);
     }
    return obj;
};

export default converStrToObj;