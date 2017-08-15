$(document).ready(function() {
  $('#survey').submit(function(event) {
    event.preventDefault();

    $('input:checkbox[name=transport]:checked').each(function() {
      var transportMode = $(this).val();
      $('#result').append('<li>'+transportMode+'</li>');
    })
    $('input:checkbox[name=futureTransport]:checked').each(function(){
      var futureTransportMode = $(this).val();
      $("#result").append('<li>'+futureTransportMode+'</li>');
    })
  })
})
