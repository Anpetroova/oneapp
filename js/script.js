"use strict";
 
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Последний фильм?', ''),
              b = prompt('На сколько оцениту его?','');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
        console.log('error');
        i--;
        }
    }
}

remeberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено слишком много фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >=30) {
        console.log("Вы киноман");
    } else {
        console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
