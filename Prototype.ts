// Prototype allows objects to be clones of other objects, rather then extended via inheritance.
const zombie = {
    eatBrains() {
        return 'yum 🧠';
    }
}
  
const chad = Object.create(zombie, { name: { value: 'chad'} });
// the prototype method in JS
console.log(chad.__proto__)
console.log(Object.getPrototypeOf(chad))
  
// create another chad
const babyChad = Object.create(chad, { baby: { value: true } });

console.log(babyChad.baby,babyChad.name, babyChad.eatBrains())