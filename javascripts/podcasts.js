  $(document).ready(function() {
    if(jQuery("ul#podcast-list").length > 0)
    {
      console.log('on the podcasts ul');

      $.get("http://audio.fvumc.org/podcast.xml", function(data){
        $(data).find('item').each(function() {
          console.log( $(this) );
        });
      });


//$.get('rss.php?url='+rssUrl, function(d) {

    ////find each 'item' in the file and parse it
    //$(d).find('item').each(function() {

        ////name the current found item this for this particular loop run
        //var $item = $(this);
        //// grab the post title
        //var title = $item.find('title').text();
        //// grab the post's URL
        //var link = $item.find('link').text();
        //// next, the description
        //var description = $item.find('description').text();
        ////don't forget the pubdate
        //var pubDate = $item.find('pubDate').text();
        //var media = $item.find('media\\:content').attr('url').text();

            //// now create a var 'html' to store the markup we're using to output the feed to the browser window
        //var html = "<div class=\"entry\"><h2 class=\"postTitle\">" + title + "<\/h2>";
        //html += "<em class=\"date\">" + pubDate + "</em>";
        //html += "<p class=\"description\">" + description + "</p>";
        //html += "<img src=\"" + media + "\" alt=\"image\"/>";
        //html += "<a href=\"" + link + "\" target=\"_blank\">Read More >><\/a><\/div>";

        ////Send Results to a div
        //$('#rss').append($(html));
    //});
//});




      //$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AqpGTeUvWTbjdEJhUlRJbmR4RjYxdUpUMkswaFhoZEE/od6/public/values?alt=json", function(data) {
        //data.feed.entry.map( function(item) {
          //$('ul#list-of-events').append('<li><a href="'+item['gsx$url']['$t']+'"><h4>'+item['gsx$title']['$t']+'</h4></a><p>'+item['gsx$description']['$t']+'</p><p></p></li>');
        //});
      //});
    }
  });

