    const { number, welcomeMasage, ShopingList, getUser,login } = require('./code');
describe('number', () => {
    it('test should return true ue if n1 grater than n2', () => {
        const result = number(10, 5);
        expect(result).toBe(true)
    })
    it('test should return false ue if n1 less than n2', () => {
        const result = number(5, 10);
        expect(result).toBe(false)
    })
    it('test should return tr ue if n1 equal than n2', () => {
        const result = welcomeMasage('milk');
        expect(result).toContain('milk')
    })
})
describe('ShopingList', () => {
    it('if list has milk', () => {
        const result = ShopingList();
        expect(result).toContain('milk')
    })
})
describe('getUser', () => {
    it('if useer ', () => {
        const result = getUser();
        expect(result).toMatchObject({ id: 1, name: 'abas' })
    })
})
describe('login', () => {
    it('if password is right', () => {
        const result = login('1234');
        expect(result).toHaveProperty(('jwt')) 
    })
    it('if password is wrong ', () => {
        expect(()=>{login('3456')}).toThrow();
    })
})

export default {}