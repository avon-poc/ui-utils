import converStrToObj from "../convertStrToObj";


describe('to convert string to object', () => {
    
    it('price formatter will work', () => {
        
        let thestring = '{"Name":"samita Doe","Email":"john@doe.com","Address":"123 Doe Street"}';
        expect(typeof converStrToObj(thestring)).toBe(typeof {});
        });

     it('price formatter will work', () => {
        let thestring = '';
       expect(typeof converStrToObj(thestring)).toBe(typeof {});
     });

     it('price formatter will work', () => {
        let thestring = {};
       expect(typeof converStrToObj(thestring)).toBe(typeof {});
     });
})