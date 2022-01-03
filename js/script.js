"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let second = prompt("Один из последних просмотренных фильмов"),
    third = +prompt("На сколько вы его оцените?");
    
personalMovieDB.movies[second] = third;

console.log(personalMovieDB);