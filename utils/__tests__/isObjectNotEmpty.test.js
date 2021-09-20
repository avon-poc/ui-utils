import isParamsNotEmpty  from "../isObjectNotEmpty";
 
describe('is object not Empty', () => {
    
    it('object not Empty', () => {
        let obj =['product1', 'product2'];
        expect(isParamsNotEmpty(obj)).toBe(true);
    });
 
    it('object is Empty', () => {
        let obj=[];
        expect(isParamsNotEmpty(obj)).toBe(false);
    });
 
    it('String is not Empty', () => {
        let str='test';
        expect(isParamsNotEmpty(str)).toBe(true);
    });
 
})