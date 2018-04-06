//STEP 1

//var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five"];
//movies = movies.slice(0,1);
//window.console.log(movies);


//STEP 2

//var movies = new Array(5);
//movies[0] = "The Fast and The Furious";
//movies[1] = "2 Fast 2 Furious";
//movies[2] = "Tokyo Drift";
//movies[3] = "Fast & Furious";
//movies[4] = "Fast Five";
//window.console.log(movies[0]);


//STEP 3

//var movies = new Array(6);
//movies[0] = "The Fast and The Furious";
//movies[1] = "2 Fast 2 Furious";
//movies[2] = "Tokyo Drift";
//movies[3] = "Fast & Furious";
//movies[4] = "Fast Five";
//movies[2] = "Fast & Furious 6"
//window.console.log(movies.length);



//STEP 4

//var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five"];
//delete movies[0];
//window.console.log(movies);

//STEP 5

//var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7"];
//for (i = 0; i < movies.length; i += 1) {	window.console.log(movies[i]);
//}

//STEP 6

//var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7"];
//for (index in movies) {
//	window.console.log(movies[index]);
//}

//STEP 7

////var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7"];
//var array = [];
//for(var i in movies){
//    array.push(movies[i]);
//    if (array.length === movies.length){
//    window.console.log(array.sort());
//    }
//}


//STEP 8

//var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7" ];
//var array = [];
//var leastFavMovies = ["Dumb and Dumber", "How High", "The Go Must Be Crazy"];
//for (var i in movies) {
//    array.push(movies[i]);
//    array.sort();
//   
//    if (array.length === movies.length) {
//        window.console.log("Movies I like: ");
//        window.console.log("");
//        for (i in array) {
//            window.console.log(array[i]);
//        }
//        array = [];
//        for ( var newMovie in leastFavMovies){
//            array.push(leastFavMovies[newMovie]);
//            array.sort();
//            if (array.length === leastFavMovies.length){
//                window.console.log("");
//                window.console.log("Movies I regret watching:");
//                window.console.log("");
//                for (i in array){
//                    window.console.log(array[i]);
//                }
//            }
//        }
//    }
//};


//STEP 9

//var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7" ];
//var leastFavMovies = ["Dumb and Dumber", "How High", "The Go Must Be Crazy"];
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.sort().reverse());


//STEP 10

//function array() {
    //var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7" ];
    //var leastFavMovies = ["Dumb and Dumber", "How High", "The Go Must Be Crazy"];
    //movies = movies.concat(leastFavMovies);
    //movies = movies.sort().reverse();
    //var lastItem = movies.length;
    //return window.console.log(movies[lastItem-1]);
//}
//array();


//STEP 11

//function myMovies() {
    //var movies = ["The Fast and The Furious","2 Fast 2 Furious","Tokyo Drift","Fast & Furious", "Fast Five", "Fast & Furious 6", "Furious 7" ];
    //var leastFavMovies = ["Dumb and Dumber", "How High", "The Go Must Be Crazy"];
//    movies = movies.concat(leastFavMovies);
//    movies = movies.sort().reverse();
//    return window.console.log(movies[0]);
//myMovies();

//STEP 12

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 



//STEP 13

//var employee1 = [], employee2 = [];
//employee1["id"] = 12345;
//employee1["name"] = "Joseph";
//employee1["title"] = "Programer";
//employee1["department"] = "Engineering";
//employee1["currentEmployee"] = true;
//
//employee2["id"] = 67890;
//employee2["name"] = "David";
//employee2["title"] = "Web Developer";
//employee2["department"] = "Engineering";
//employee2["currentEmployee"] = true;
//
//var employees = [];
//employee1.push(employee2);
//employees.push(employee1);
//window.console.log(employees);


//STEP 14

//var employee1 = [], employee2 = [];
//employee1["id"] = 12345;
//employee1["name"] = "Joseph";
//employee1["title"] = "Programer";
//employee1["department"] = "Engineering";
//employee1["currentEmployee"] = true;
//
//employee2["id"] = 67890;
//employee2["name"] = "David";
//employee2["title"] = "Web Developer";
//employee2["department"] = "Engineering";
//employee2["currentEmployee"] = true;
//
//var employees = [employee1, employee2];
//var i;
//for (i = 0; i < employees.length; i +=1) { 
//    window.console.log(employees[i]["name"]);
//    
//}

//STEP 15


//var employee1 = [], employee2 = [];
//employee1["id"] = 12345;
//employee1["name"] = "Joseph";
//employee1["title"] = "Programer";
//employee1["department"] = "Engineering";
//employee1["currentEmployee"] = true;
//
//employee2["id"] = 67890;
//employee2["name"] = "David";
//employee2["title"] = "Web Developer";
//employee2["department"] = "Engineering";
//employee2["currentEmployee"] = true;
//
//
//employee3["id"] = 09876;
//employee3["name"] = "Carl";
//employee3["title"] = "System Analyst";
//employee3["department"] = "Information Technology";
//employee3["currentEmployee"] = false;
//
//
//var employees = [employee1, employee2];
//var i;
//for (i = 0; i < employees.length; i +=1) { 
//    window.console.log(employees[i]["name"]);
//    
//}


//STEP 16

//var movies = [["The next three days", 1], ["The Dark Night", 2], ["Star Wars", 3], ["Scare Face", 4], ["Casino Royal", 5]];
//
//for (var name in movies){
//    var movieNames = movies[name].filter(function(item){
//        "use strict";
//        return typeof item === "string";
//    });
//    
//    window.console.log(movieNames);
//};

//STEP 17


//var array = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
//
//function breakArray(array){
//    window.console.log("Employees:");
//    window.console.log("");
//    for(var i in array){
//        window.console.log(array[i]);
//    }
//}
//
//breakArray(array);

//STEP 18

//function filter_array_values(arr) {
//  arr = arr.filter(isEligible);
//  return arr;
//}
//
//function isEligible(value) {
//  if(value !== false || value !== null || value !== 0 || value !== "") {
//   return window.console.log(value);
//  }
//}
//
//window.console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

//STEP 19


//var array = [1,2,3,4,5,6,7,8,9,10];
//
//function myArray(array){
//    var arrayLength = array.length;
//    var randomItem = Math.random()* arrayLength;
//    randomItem = Math.round(randomItem);
//    window.console.log(array[randomItem]);
// 
//}
//
//myArray(array);

//STEP 20

//var array = [10,20,30,40,50,100];
//function maxNumber(array){
//   
//window.console.log(Math.max.apply(Math, array));
//}
//
//maxNumber(array);