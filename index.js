class Formatter {
  
     static capitalize(word){
         return  word.toUpperCase();
     }

     static sanitize(word){
      return word.replace(/[^a-z0-9]/gi, '');
     }

     static titleize(){


     }
}

console.log(Formatter.capitalize('nour'));
console.log(Formatter.sanitize('A!@#b$%^c&*'));