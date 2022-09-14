

function toggle(posibilidades) {
    let elemento = 0;
    return function () {
        if (posibilidades.length === 1) {
            return posibilidades[0]
        } else if (elemento >= posibilidades.length) {
            elemento = 0
            return posibilidades[elemento]
        } else {
            let temp = elemento
            elemento = elemento + 1
            return posibilidades[temp]
        }
    }
}


const hello = toggle(['hello']);
const onOff = toggle(['on', 'off']);
let speed = toggle(['slow', 'medium', 'fast']);

console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"

console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
 

