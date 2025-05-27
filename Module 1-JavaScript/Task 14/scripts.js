$(document).ready(function() {
  // Show events with fadeIn
  $('#showEventsBtn').click(function() {
    $('.event-card').fadeIn();
    $('#message').text('Events are now visible.').css('color', 'green');
  });

  $('#hideEventsBtn').click(function() {
    $('.event-card').fadeOut();
    $('#message').text('Events are hidden.').css('color', 'red');
  });

  $('[id^=registerBtn]').click(function() {
    const eventId = $(this).closest('.event-card').attr('id');
    const eventName = $(this).siblings('h3').text();
    $('#message').text(`You have registered for ${eventName}!`).css('color', 'blue');
  });
});
