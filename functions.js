
funkcije = {
    isPrime: function(number) {

        let prime = true;
        if(number == 1 || number == 2) return true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i == 0){
                prime = false;
                break;
            }
        }
        return prime;
    },

    sortArray: function(array){
        if (array.length <= 1) {
            return array;
          }
          
          const pivot = array[Math.floor(array.length / 2)];
          const left = [];
          const right = [];
          
          for (let i = 0; i < array.length; i++) {
            if (i === Math.floor(array.length / 2)) {
              continue;
            }
            if (array[i] < pivot) {
              left.push(array[i]);
            } else {
              right.push(array[i]);
            }
          }
          
          return [...funkcije.sortArray(left), pivot, ...funkcije.sortArray(right)];
        
    }
}

module.exports = funkcije;