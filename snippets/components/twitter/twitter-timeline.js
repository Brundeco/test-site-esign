/**
 * twitter timeline
 *
 * <div class="twitter-timeline" data-user="esign" data-count="3"></div>
 */

esign.twitter = function () {

  var $twitterTimeline = $('.twitter-timeline');
  if($twitterTimeline.length) {

    $twitterTimeline.each(function() {

      var $this = $(this),
        user = $this.data('user'),
        count = $this.data('count');

      if(user) {
        $.ajax({
            url: 'http://apps.esign.eu/twitter/19/user_timeline.json?include_rts=true&screen_name=' + user + '&count=' + count,
            cache: true,
            crossDomain: true,
            dataType: 'json',
            success : function(tweetdata) {

              var html = '<ul>';

              $.each(tweetdata,
              function(i, tweet) {
                  console.log(tweet);

                  var user = tweet.user,
                    text = tweet.text;

                  if(tweet.retweeted_status) {
                    user = tweet.retweeted_status.user;
                    text = 'RT @' + user.screen_name + ': ' + tweet.retweeted_status.text;
                  }

                  html += '<li>';
                  html += '<h6><a href="https://twitter.com/' + user.screen_name + '">';
                  html +=   '<img src="' + user.profile_image_url_https  + '" alt="' + user.name + '" />';
                  html +=   user.name + ' <em>@' + user.screen_name + '</em>';
                  html += '</a></h6>';

                  html += '<p>' + esign.linkify(text) + '</p>';
                  html += '</li>';
              });

              html += '</ul>';

              $this.append(html);

              esign.cache.$grid.imagesLoaded( function() {
                esign.cache.$grid.isotope('layout');
              });

            }
        });
      }

    });

  }

};
