import converStrToObj from "../convertStrToObj";


describe('to convert string to object', () => {
    
    it('price formatter will work', () => {
        let string = 'this is string';
        expect(typeof converStrToObj(string)).toBe(typeof {});
    });

})