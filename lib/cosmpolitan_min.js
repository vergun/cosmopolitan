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
cosmopolitan.license="MIT";cosmopolitan.author={};cosmopolitan.author.name="Verdi Ergun";cosmopolitan.author.email="vergun@gmail.com";cosmopolitan.author.website="http://www.verdiergun.com";cosmopolitan.reddit=function(){"use strict";var e="http://www.reddit.com/s/";return e+this.defaults.url};cosmopolitan.google=function(){"use strict";var e="https://plus.google.com/share?url=";return e+this.defaults.url};cosmopolitan.linkedin=function(){"use strict";var e="http://www.linkedin.com/shareArticle?mini=true&url=",t=encodeURIComponent(this.defaults.url),n=encodeURIComponent(this.defaults.title),r=encodeURIComponent(this.defaults.summary),i=encodeURIComponent(this.defaults.source);return e+t+"&title="+n+"&summary="+r+"&source="+i};cosmopolitan.stumbleupon=function(){"use strict";var e="http://www.stumbleupon.com/submit?url=",t=this.defaults.url,n=encodeURIComponent(this.defaults.title);return e+t+"&title="+n};cosmopolitan.twitter=function(){"use strict";var e="http://twitter.com/home?status=",t=this.defaults.url,n=this.defaults.title,r=140-(t.length+1);if(n.length>r){n=n.substr(0,r-3)+"..."}return e+encodeURIComponent(this.defaults.title+": "+this.defaults.url)};cosmopolitan.facebook=function(){"use strict";var e="https://www.facebook.com/dialog/feed?app_id=",t=this.defaults.facebook_app_id,n=this.defaults.url,r=this.defaults.app_image_url,i=encodeURIComponent(this.defaults.title),s=encodeURIComponent('Check out "'+i+'".'),o=encodeURIComponent(this.defaults.summary),u=function(){if(t==="472158962873088"){return"http://www.cosmpolitanapp.com"}if(t!=="472158962873088"){return n}};return e+t+"&link="+"&picture="+r+"&name="+i+"&caption="+s+"&description="+o+"&redirect_uri="+u()}