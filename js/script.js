'use strict';


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 'sex');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < 2; i++) {
//     const second = prompt("Один из последних просмотренных фильмов"),
//         third = prompt("На сколько вы его оцените?");

//     if (second != null && third != null && second != '' && third != '' && second.length < 50) {
//         personalMovieDB.movies[second] = third;
//         console.log("ok");
//     } else {
//         console.log("error");
//         i--;
//     }
// }


// let x = 0;
// while (x < 2) {
//     x++;
//     const second = prompt("Один из последних просмотренных фильмов"),
//         third = prompt("На сколько вы его оцените?");
//     if (second != null && third != null && second != '' && third != '' && second.length < 50) {
//         personalMovieDB.movies[second] = third;
//         console.log("ok");
//     } else {
//         console.log("error");
//         x--;
//     }
// }

// do {
//     x++;
//     const second = prompt("Один из последних просмотренных фильмов"),
//         third = prompt("На сколько вы его оцените?");
//     if (second != null && third != null && second != '' && third != '' && second.length < 50) {
//         personalMovieDB.movies[second] = third;
//         console.log("ok");
//     } else {
//         console.log("error");
//         x--;
//     }
// } while (x < 2);


if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов"); // это 1 вопрос
} else if (10 >= personalMovieDB.count < 30 ) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);