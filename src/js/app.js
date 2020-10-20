import '../scss/app.scss';

// Your JS Code goes here

$('#burger').click(function (event) {
  $('#burger').toggleClass('active');
  $('#nav').toggleClass('active');
});

let slider = document.getElementById("sliderRange");
let output = document.getElementById("sliderResult");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

$(document).ready(function () {
  const btnSelector = '.order__menu-button';
  const targetMenuSelector = '.order__menu-list';
  $(btnSelector).each(function () {
    $(this).click(function (event) {
      console.log(this);
      console.log('click');
      const $targetElem = $(this).parent().find(targetMenuSelector);
      $(this).parent().find(targetMenuSelector).toggleClass('hidden').toggleClass('open');
      $(this).parent().find(btnSelector).toggleClass('open');
      $(document).mouseup(function (e) {
        let container = $targetElem;
        if (container.has(e.target).length === 0) {
          container.addClass('hidden');
        }
      });
    });
  });
  $('.order__menu-clause').each(function () {
    $(this).click(function (event) {
      $(event.currentTarget).parents('.order__menu-collapse').find(btnSelector).html($(event.currentTarget).html() + '.fas fa-angle-down');
      $(event.currentTarget).parents('.order__menu-collapse').find(targetMenuSelector).addClass('hidden');
      $(event.currentTarget).parents('.order__menu-collapse').find(btnSelector).removeClass('open');
    });
  });
});