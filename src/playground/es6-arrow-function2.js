//arguments - no longer bound with arrow functions
const add = (a, b) => {
   return a + b;
};

console.log(add(55, 1));
//this keyword = no longer bound with arrow functions

const user ={
   name: 'Helen',
   cities: ['melbourne','sydney','perth'],
   printPlacesLived(){ 
     return  this.cities.map((city)=> this.name + ' has lived in ' + city);
   }
};

console.log(user.printPlacesLived());

//challenge

const multiplier ={
   //numbers array
   //multiply by - single number
   //multiply is going to return a new array where the number have been multiplied.
   numArray: [1,2,3,4,5],
   multiBy: 3,
   multiply(){
      return this.numArray.map((num) => num * this.multiBy);
   }

};
console.log(multiplier.multiply());