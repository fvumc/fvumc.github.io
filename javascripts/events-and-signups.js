  $(document).ready(function() {
    if(jQuery("#events-and-signups").length > 0)
   {
    $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AqpGTeUvWTbjdEJhUlRJbmR4RjYxdUpUMkswaFhoZEE/od6/public/values?alt=json", function(data) {
      data.feed.entry.map( function(item) {
        $('ul#list-of-events').append('<li><a href="'+item['gsx$url']['$t']+'"><h4>'+item['gsx$title']['$t']+'</h4></a><p>'+item['gsx$description']['$t']+'</p><p></p></li>');
      });
    });
   }
  }
  );

