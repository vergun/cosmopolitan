//global namespace :: cosmpolitan
var cosmopolitan = {

        version:          "0.1",

        defaults: {

            // your website URL, defaults to current url
            url:            window.location.href,

            // the name of your company, defaults to document's title
            source:         window.document.title,

            // the title of your link, defaults to document's title
            title:          window.document.title,

            // a basic summary of your page, defaults to page's meta description
            summary:         "",

            // replace with your facebook app_id, defaults to Cosmpolitan's application id
            facebook_app_id: "472158962873088",

            // replae with your application's image, defaults to Cosmpolitan's application image
            app_image_url:   "https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn1/851578_472160816206236_251760216_n.png"
        }
    };

//cosmopolitan :: meta
cosmopolitan.license        = "MIT";
cosmopolitan.author         = {};
cosmopolitan.author.name    = "Verdi Ergun";
cosmopolitan.author.email   = "vergun@gmail.com";
cosmopolitan.author.website = "http://www.verdiergun.com";

//cosmopolitan :: reddit
cosmopolitan.reddit = function() {
    "use strict";
    var base_url = "http://www.reddit.com/s/";
    return base_url + this.defaults.url;
};

//cosmopolitan :: google
cosmopolitan.google = function() {
    "use strict";
    var base_url = "https://plus.google.com/share?url=";
    return base_url + this.defaults.url;
};

//cosmopolitan :: linkedin
cosmopolitan.linkedin = function() {
    "use strict";
    var base_url = "http://www.linkedin.com/shareArticle?mini=true&url=",
        url      = encodeURIComponent(this.defaults.url),
        title    = encodeURIComponent(this.defaults.title),
        summary  = encodeURIComponent(this.defaults.summary),
        source   = encodeURIComponent(this.defaults.source);
    return base_url + url + "&title=" + title + "&summary=" + summary + "&source=" + source;
};

//cosmopolitan :: stumbleupon
cosmopolitan.stumbleupon = function() {
    "use strict";
    var base_url = "http://www.stumbleupon.com/submit?url=",
        url      = this.defaults.url,
        title    = encodeURIComponent(this.defaults.title);
    return base_url + url + "&title=" + title;
};

//cosmopolitan :: twitter
cosmopolitan.twitter = function() {
    "use strict";
    var base_url = "http://twitter.com/home?status=",
        url      = this.defaults.url,
        title    = this.defaults.title,
        maxLengh = 140 - (url.length + 1);
    if (title.length > maxLengh) { title = title.substr(0, maxLengh - 3) + "..."; }
    return base_url + encodeURIComponent(this.defaults.title + ": " + this.defaults.url);
};

//cosmopolitan ::facebook
cosmopolitan.facebook = function() {
    "use strict";
    var base_url      = "https://www.facebook.com/dialog/feed?app_id=",
        app_id      = this.defaults.facebook_app_id,
        url         = this.defaults.url,
        app_image   = this.defaults.app_image_url,
        title       = encodeURIComponent(this.defaults.title),
        caption     = encodeURIComponent('Check out "' + title + '".'),
        summary     = encodeURIComponent(this.defaults.summary),
        redirectUri = function() {
            if (app_id === "472158962873088") { return "http://www.cosmpolitanapp.com"; }
            if (app_id !== "472158962873088") { return url; }
        };
    return base_url + app_id + "&link=" + "&picture=" + app_image + "&name=" + title + "&caption=" + caption + "&description=" + summary + "&redirect_uri=" + redirectUri();
};