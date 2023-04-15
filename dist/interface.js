// jab bhi ham kisi bhi object ke signature ko define karna chhate kisi dusre function me us time 
// ham interface ka use karte hai 
// jaise ki ham example le lete hai 
let person1 = {
    name: "Ramanand",
    subject: "MERN",
    class: 12,
    isProgrammer: true
};
let person2 = {
    name: "Rahul",
    subject: "MERN",
    class: 12,
    isProgrammer: true
};
console.log(person1.name);
console.log(person2.name);
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function sonfather(data) {
    console.log(`Son height is similar to father height i.e ${data.height}inch`);
    console.log(`Son weight is similar to father weight i.e ${data.weight}kg`);
}
sonfather({ height: 270, weight: 70 });
