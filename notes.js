// // Prototype Chains

// const gold = {a: 'Property in gold'};

// // console.log(gold.a)
// // console.log(gold.b) // returns undefined because that value hasn't been assigned

// const blue = Object.assign({}, gold)
// // console.log(blue)

// blue.b = 'Property in blue'
// // console.log(blue)

// gold.c = 'Testing' // Will not translate to blue 
// // console.log(gold)
// // console.log(blue)

// const rose = Object.create(gold);
// console.log(rose) // Empty object
// rose.b = 'flowers'
// console.log(rose.b)
// console.log(rose.c) // Will refer to gold 
// console.log(gold)

const Car = function(loc){
    const obj = Object.create(Car.prototype)
    obj.loc = loc
    return obj
}

Car.prototype = {
    move: function(){this.loc++}
}

const vw = Car(1)
vw.move()
console.log(vw.constructor)
console.log(Car.prototype.constructor)
console.log(vw instanceof Car)