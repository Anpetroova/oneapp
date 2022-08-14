
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний фильм?', ''),
      b = prompt('На сколько оцениту его?',''),
      c = prompt('Последний фильм?', ''),
      d = prompt('На сколько оцениту его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);








