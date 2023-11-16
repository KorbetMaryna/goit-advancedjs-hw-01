<div align="center" id="top"> 
 
  &#xa0;

<a href="https://korbetmaryna.github.io/goit-advancedjs-hw-01/">Visit site</a>

</div>

<h1 align="center">Goit Advancedjs Hw 01</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/KorbetMaryna/goit-advancedjs-hw-01?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/KorbetMaryna/goit-advancedjs-hw-01?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/KorbetMaryna/goit-advancedjs-hw-01?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/KorbetMaryna/goit-advancedjs-hw-01?color=56BEB8">

</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Task 1</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Task 2</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Task 3</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: About

Neoversity's homework tasks

## :sparkles: Tasks

:heavy_check_mark: Task 1;\

1. Add the SimpleLightbox library as a project dependency using npm (the CDN
   link from your past work is no longer needed).
2. Use your JavaScript code from the previous homework, but refactor it given
   that the library was installed via npm (import/export syntax).

:heavy_check_mark: Task 2;\

1. Check out the documentation of the Vimeo player library.
2. Add the library as a project dependency via npm.
3. Initialize the player in the script file as described in the pre-existing
   player section, but note that you have added the player as an npm package,
   not via CDN.
4. Read the documentation of the on() method and start tracking the timeupdate
   event - playback time update.
5. Save playback time to local storage. Let the key for the storage be the
   "videoplayer-current-time" string.
6. When reloading the page, use the setCurrentTime() method to resume playback
   from the saved position.
7. Add the lodash.throttle library to the project and make sure that the
   playback time is updated in the storage once a second or less frequent.

:heavy_check_mark: Task 3;

1. Track the input event on the form, and each time write to local storage an
   object with the email and message fields, in which you save the current
   values of the form fields. Let the key for the storage be the
   "feedback-form-state" string.
2. When loading the page, check the state of the storage, and if it stores some
   data, use it to fill in the form fields. Otherwise, the fields must be empty.
3. When submitting the form, clear the storage and form fields, and also display
   the object with the email and message fields and their current values in the
   console.
4. Make sure that the storage is updated no more than once every 500
   milliseconds. To do this, add to the project and use the lodash.throttle
   library.

## :rocket: Technologies

- [JavaScript](https://www.w3schools.com/js/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
