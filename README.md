imageFitCover
=============

This simple jQuery plugin lets you sizes image within their container in the same way as the new CSS <em>object-fit: cover</em> property in all modern browsers that do not yet support it natively.

<p>A  <a href="http://multifaceted.info/demos/image-fit-cover/demo/index.html">simple demo</a> shows you the desired effect</p>

All images within the targeted container object will fill its entire area without changing their aspect ratio. The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height.

As of November 2014 the latest Webkit browsers and Firefox 36 support object-fit. However, Internet Explorer, Firefox before version 36 and older versions of Safari prior to version 7.1 d not.

This plugin only implements object-fit: cover property for img tags wrapped in targeted containers. Other plugins, most notably jquery object fit, https://github.com/schmidsi/jquery-object-fit, provide more complete support for object-fit by implementing other values such as fill, contain and scaled-down and work directly on the HTML object that should respond to object-fit rather than its container. Our approach is less flexible, but more efficient. Inline styles are added only to browsers that do not support object-fit via a simple test on initial page load.

Sample usage:

HTML Snippet:
<pre>
&lt;figure class="inage-cover"&gt;
	&lt;img src="/path-to-images-folder/image.jpg" width="800" height="600" /&gt;
&lt;/figure&gt;
</pre>

Style sheet:
<pre>
figure.image-cover {
  position: relative;
  width: 50%;
  height: 20vh; /* viewport hieght, not supported in IE8*/
  overflow: hidden; /* important */
}

figure.image-cover img {
  position: relative; /*must have a non-static position to work in browsers that do not support object-fit*/
  width: 100%; /* initial value overriden by object-fit and/or plugin */
  height: 100%; /* initial value overriden by object-fit and/or plugin */
  object-fit: cover; /* works in latest Webkit browsers + FF 36+ */
}
</pre>
Javascript in jQuery context:

<pre>
$('figure.image-fit').imageFitCover();
</pre>
