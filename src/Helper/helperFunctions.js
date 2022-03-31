const findItemInArray = (array, id) => {
    if(array.length === 0) return false; 
    return array.find(item => item._id === id);
} 

const totalOgPrice = (array) => {
    return array.reduce((total, { price, qty }) => (total = total + price.original * qty), 0)
}

const totalDiscount = (array) => {
    return array.reduce((total, {price, qty}) => (total = total + (price.original - price.discounted) * qty), 0);
}

export {findItemInArray, totalDiscount, totalOgPrice};