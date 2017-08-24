// OVELSE1

// var name = [ "Mantas", "Tur", "Jonas", "Julia", "Katarina", "Rita", "Roni", "Ea"];
// name.forEach(function(name) {
//     console.log(name);
// });
    
// OVELSER2

// var farver = ["Medina", "Rasmus", "Tina", "U2"];
// farver.forEach(function(farver, index, arr) {

// console.log(farver + ' har placering ' + index);
// });

// OVELSE3

var numbers = [12, 47, 38, 28, 39, 49, 20, 4, 6, 80];
numbers.forEach(function(number,index)  {

    if (typeof numbers[index+1 ]== 'undefined')  {
        console.log("der er ikke flere talt");
    }

    else {

        if (numbers [index]>numbers[index +1]) { 
        console.log("tallet er støre end næster") }
        
    else {
        console.log("så den er mindre");
    }
    }
    


});








