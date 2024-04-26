$(document).ready(function() {
  
  $('.form').on('submit', (evt) => {
    evt.preventDefault();
    const task = $('.form__input').val();
    const newTask = $(`<li class="list__item" style="display: none">${task}</li>`);
    $(newTask).appendTo('ol');
    $(newTask).fadeIn(800)
    $('.form__input').val('')
  })

  $('.list__container').click(function(evt) {
    $(evt.target).toggleClass("list__item-done")
  })
})