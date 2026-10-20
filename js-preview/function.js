// แบบปกติ ฟังก์ชั่นที่มีการรับค่า
function calculateTotal(price, quantity){
    return price * quantity;
}

console.log(`ราคารวม ${calculateTotal(25,4)}`);

// แบบ arrow function
const calculateTotalArrow = (price, quantity) => price * quantity;
console.log(`ราคารวม ${calculateTotalArrow(20,67)}`);

//แบบ arrow function + default parameter
const calculateWithVat = (price, quantity, vat = 0.07) => {
    const subtotal = price * quantity;
    return (subtotal + subtotal * vat).toFixed(2);
}
console.log(`รวมค่า vat ${calculateWithVat(100,2)}`)