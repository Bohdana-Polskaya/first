/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  },
  promo = document.querySelectorAll(".promo__adv img"),
  genre = document.getElementsByClassName("promo__genre"),
  backgr = document.querySelector(".promo__bg"),
  movie = document.querySelector(".promo__interactive-list");

promo.forEach((item) => {
  item.remove();
});

genre[0].textContent = "Драма";

backgr.style.backgroundImage = "url('img/bg.jpg')";

movie.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movie.innerHTML += `<li class="promo__interactive-item">${
    i + 1
  } ${film}<div class="delete"></div></li>`;
});

console.log(movie);
