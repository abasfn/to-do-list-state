const number = (n1: number, n2: number) => {
    return n1 >= n2 ? true : false
}
const welcomeMasage = (name: string) => {
    return `helwoww ${name} welcome to jest tuturial`;
}
const ShopingList = () => {
    return ['abas', 'ali', 'milk']
}
const getUser = () => {
    return { id: 1, name: 'abas' }
}
const login = (pasword: string) => {
    if (pasword !== '1234') {
        throw new Error('password is wrong')
    }
    return { jwt: 'w9j2gmf@#fewsf' };
}

module.exports = { number, welcomeMasage, ShopingList, getUser, login };
export default {};
