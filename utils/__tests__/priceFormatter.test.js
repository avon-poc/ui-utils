import priceFormatter  from "../priceFormatter";

describe('to check price formatter is working', () => {
    
    it('price formatter will work', () => {
        let price =30;
        expect(priceFormatter(price)).toBe('$30.00');
    });

})