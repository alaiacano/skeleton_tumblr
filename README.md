This is a tumblr theme based on the
[Skeleton](https://github.com/dhgamache/Skeleton) grid boilerplate. It
will hopefully be in the tumblr theme garden at some point. 

The tumblr template engine documents can be found at
http://www.tumblr.com/docs/en/custom_themes 

## Features

* Same theme on mobile and "normal" web (you have to disable the mobile theme in your tumblr blog settings).
* Images re-size based on your window size. This includes mobile vertical/horizontal views.
* Loads high-res images for every device except phones (ipad gets high-res). Phones get a link to the high-res image.
* Option to include current/most recently played track in last.fm
* Disquss comments
* Option to turn notes on/off

# Known bugs

* Spotify posts don't look great on phones (yet)
* Need to get photosets resizing properly. They kind of mess up the mobile view.

## Files
The following files are required. All of the javascript and css have
already been uploaded to tumblr and are referenced appropriately in
the theme.

* `skeleton_theme.html` - The actual theme code. Copy/paste this into
  your custom HTML box in the tumblr theme customization page. 
* `javascripts/lastfm.js` - For retreiving your current track from
  last.fm (optional). It will require a last.fm API key which you can
  enter as an advanced customization option on tumblr. 
* `stylesheets/base.css`, `layout.css`, `skeleton.css` - The Skeleton
  css files. AKA all of the hard work.

## Installing

To install the theme, simply copy the raw source of
[skeleton_theme.html](https://raw.github.com/alaiacano/skeleton_tumblr/master/skeleton_theme.html),
then go to tumblr.com/customize/[your blog], click the `Edit HTML`
button, and paste the code in there.

You'll be prompted with options for your last.fm username/API key,
Disqus shortname, and the text to put in the footer.
