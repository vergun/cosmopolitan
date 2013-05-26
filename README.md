Cosmpolitan
==============
A 4kb JavaScript library with no dependencies that gets your app talking

    cosmpolitan.google();   // "https://plus.google.com/share?url=https://github.com/instore/cosmopolitan"
    cosmpolitan.twitter();  // "http://twitter.com/home?status=instore%2Fcosmopolitan%20%C2%B7%20GitHub%3A%20https%3A%2F%2Fgithub.com%2Finstore%2Fcosmopolitan"

Try them out yourself:
   <a href="https://plus.google.com/share?url=https://github.com/instore/cosmopolitan">Share on Google</a>
   <a href="http://twitter.com/home?status=instore%2Fcosmopolitan%20%C2%B7%20GitHub%3A%20https%3A%2F%2Fgithub.com%2Finstore%2Fcosmopolitan">Share on Twitter</a>

Cosmopolitan has built-in support for Facebook, Twitter, Stumbleupon, GooglePlus, Reddit, and LinkedIn.

Three easy steps
--------------

- 1 Set your defaults
- 2 Set your links
- 3 Relax and enjoy

1 Set your defaults
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

Change these defaults to suit your needs. For example set *url* as your website url, *source* as your company name, and *summary* as your page's summary. 
  
Rather than change defaults application wide, you can alternatively set these defaults on each page for example:

    cosmopolitan.defaults.source = "My Company";
    cosmopolitan.defaults.description = "My Company provides tools for businesses.";
  
2 Set your links
--------------

Cosmpolitan.js exposes six social services each that maps to a function which returns a URl that shares your website's content. For example if I'm on "http://www.verdiergun.com" calling cosmopolitan.google() returns "https://plus.google.com/share?url=http://verdiergun.com/"

These are the services and this is how they map:

- reddit      : cosmopolitan.reddit()
- google plus : cosmopolitan.google()
- linkedin    : cosmopolitan.linkedin()
- stumbleupon : cosmopolitan.stumbleupon()
- twitter     : cosmopolitan.twitter()
- facebook    : cosmopolitan.facebook()

This library doesn't make assumptions about where you will embed these links. For example if you have this HTML:

    <a href="" id="google">Share on Google</a>

You could set up sharing with:

    $('#google').href(cosmopolitan.google()) //using jQuery
  
    document.getElementById('google').href = cosmopolitan.google() //using regular JavaScript
  
  
3 Relax and enjoy
--------------

Sit back, relax, and enjoy a fresh Cosmpolitan.

<img src="https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn1/851578_472160816206236_251760216_n.png" alt="Cosmopolitan" />

About, License, etc...
--------------
This library was created from our <a href="http://instoredoes.com/blog">blog</a>. We use the library to power our own social service sharing.

MIT License. © MMIX – MMXIII Own Group, Inc. All rights reserved.

  


  



