Cosmpolitan
==============
A 4kb JavaScript library with no dependencies that gets your app talking

How to get started
--------------

- 1. Set your defaults
- 2. Set your links
- 3. Relax and enjoy

1. Set your defaults
--------------
At the top of *cosmopolitan.js* and *cosmopolitan_min.js* is a defaults object literal.

  defaults: {
    
    // your website URL, defaults to current url
    url: window.location.href,
    
    // the name of your company, defaults to document's title
    source: window.document.title,
    
    // the title of your link, defaults to document's title
    title: window.document.title,
    
    // a basic summary of your page, defaults to page's meta description
    summary: "",
    
    // replace with your facebook app_id, defaults to Cosmpolitan's application id
    facebook_app_id: "472158962873088", 
    
    // replae with your application's image, defaults to Cosmpolitan's application image
    app_image_url: "https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn1/851578_472160816206236_251760216_n.png"
  }

  Change these defaults to suit your needs. For example set *url* as your website url, *source* as your company name, and *summary* as your page's summary. You can always override these defaults inline by calling *cosmopolitan.defaults.source = "new source"; for example.
  
2. Set your links
--------------

Cosmpolitan.js exposes six social services each that maps to a function which returns a URl that shares your website's content. For example if I'm on "http://www.verdiergun.com" calling cosmopolitan.google() returns "https://plus.google.com/share?url=http://verdiergun.com/"

These are the services and this is how they map:

- reddit      : cosmopolitan.reddit()
- google plus : cosmopolitan.google()
- linkedin    : cosmopolitan.linkedin()
- stumbleupon : cosmopolitan.stumbleupon()
- twitter     : cosmopolitan.twitter()
- facebook    : cosmopolitan.facebook()

This library doesn't make assumptions about where you will embed these links, that's up to you, for example if you have this chunk of HTML:

<a href="" id="google">Share on Google</a>

You could call to set up sharing:

  $('#google').href(cosmopolitan.google()) //using Jquery
  
  document.getElementById('google').href = cosmopolitan.google() //using regular JavaScript
  
  
3. Relax and enjoy
--------------

Now you can sit back, relax and enjoy your Cosmpolitan. 
  


  



