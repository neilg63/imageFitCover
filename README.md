imageFitCover
=============

This simple jQuery plugin lets you add *object-fit: cover* property in all modern browsers when used with images.

All images within the targeted container object will fill its entire area without changing their aspect ratio. The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height.

As of November 2014 the latest Webkit browsers and Firefox 36 support object-fit. However, Internet Explorer, Firefox before version 36 and older versions of Safari prior to version 7.1 d not.

This plugin only implements object-fit: cover property for img tags wrapped in targeted containers. Other plugins, most notably jquery object fit, https://github.com/schmidsi/jquery-object-fit, provide more complete support for object-fit by implementing other values such as fill, contain and scaled-down and work directly on the HTML object that should respond to object-fit rather than its container. Our approach is less flexible, but more efficient. Inline styles are added only to browsers that do not support object-fit via a simple test on initial page load.

Sample usage:

Style sheet:

figure.image-fit {
  position: relative;
  width: 50%;
  height: 20vh; /* viewport hieght, not supported in IE8*/
  overflow: hidden; /* important */
}

figure.image-fit img {
  position: relative; /*must have a non-static position to work in browsers that do not support object-fit*/
  width: 100%; /* initial value overriden by object-fit and/or plugin */
  height: 100%; /* initial value overriden by object-fit and/or plugin */
  object-fit: cover; /* works in latest Webkit browsers + FF 36+ */
}

Javascript in jQuery context:

$('figure.image-fit').imageFitCover();

