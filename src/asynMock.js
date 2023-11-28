const products = [
    {
        id: '1',
        name: 'Tomatodo',
        price: 15.00,
        category: 'tomatodo',
        img: 'https://greenhouse.com.pe/844-large_default/tomatodo-dios-tiene-un-plan.jpg',
        stock: 25,
        description: 'Tomtatodo'
    },
    {
        id: '2',
        name: 'Taza',
        price: 15.00,
        category: 'taza',
        img: 'https://www.brildor.com/blog/wp-content/uploads/2019/11/como-sublimar-tazas-1-e1574069564818.png',
        stock: 25,
        description: 'Taza'
    },
    {
        id: '3',
        name: 'Polo',
        price: 25.00,
        category: 'polo',
        img: 'https://www.projectpieta.com/wp-content/uploads/2022/02/polo_negro_escudo.jpg',
        stock: 25,
        description: 'polo'
    },
    {
        id: '4',
        name: 'Polo',
        price: 25.00,
        category: 'polo',
        img: 'https://ox.pe/wp-content/uploads/2023/01/polo-negro-personalizado-bajo-demanda.png',
        stock: 25,
        description: 'polo'
    },

]
export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout (()=> {
            resolve (products)
        },500)
    })
}
export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id == productId))
        },500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category == categoryId))
        },500)
    })
}