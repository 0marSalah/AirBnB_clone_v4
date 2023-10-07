// request the api if status is ok
$.ajax({
  url: '/2-hbnb/',
  method: 'GET',
  success: function () {
    $('DIV#api_status').addClass('available');
  },
  error: function () {
    $('DIV#api_status').removeClass('available');
  }
});
