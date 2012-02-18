var lastfm_defaults = {
    limit:10,
    node_id: "lastfm"
}

function lastfm_onetrack(options){
    var opts = $.extend({}, lastfm_defaults, options);
    var cnt = 0;
    
    //base URL
    opts.feed_url = 'http://ws.audioscrobbler.com/2.0/?callback=?',  
    
    $.ajax({
        type: "GET",
        url: opts.feed_url,
      
        processData: true,
        data: {
            method:  "user.getrecenttracks",
            format:  "json",
            limit:   opts.limit,
            user:    opts.screen_name,
            api_key: opts.api_key
        },
        dataType: "json",
        success: function(data) {
            var track = data.recenttracks.track[0];
            $('<span/>', {
                'class': 'my-new-list',
                html: '"'+ track.name + '" by ' + track.artist["#text"]
            }).appendTo('#'+opts.node_id);
        }
    });
}