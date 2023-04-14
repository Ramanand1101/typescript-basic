// jab bhi ham kisi bhi object ke signature ko define karna chhate kisi dusre function me us time 
// ham interface ka use karte hai 
// jaise ki ham example le lete hai 


//Proper definition-
/* When defining the signature of an object, you will usually use an interface. This is useful 
if we need to check that multiple objects have the same specific properties and value types: */



/* Example-1 */
interface person{
    name:string,
    subject:string,
    class:number ,
    isProgrammer:boolean
}

let person1:person={
    name:"Ramanand",
    subject:"MERN",
    class:12,
    isProgrammer:true

};

let person2:person={
    name:"Rahul",
    subject:"MERN",
    class:12,
    isProgrammer:true
}
console.log(person1.name)
console.log(person2.name)



/* Example-2 */
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

/* Example-3 */
interface dad{
    height:number,
    weight:number
}
function sonfather(data:dad){
    console.log(`Son height is similar to father height i.e ${data.height}inch`)
    console.log(`Son weight is similar to father weight i.e ${data.weight}kg`)
}
sonfather({height:270,weight:70})
