import isObjectNotEmpty  from "../isObjectNotEmpty";



describe('is object not Empty', () => {
    
    it('object not Empty', () => {
        let obj =['product1', 'product2'];
        expect(isObjectNotEmpty(obj)).toBe(true);
    });

    it('object is Empty', () => {
        let obj=[];
        expect(isObjectNotEmpty(obj)).toBe(false);
    });

})