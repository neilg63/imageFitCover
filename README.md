imageFitCover
=============

This simple jQuery plugin lets you scale images to fit within their container element, as specified for the new CSS <em><a href="http://dev.w3.org/csswg/css-images-3/#the-object-fit" rel="external">object-fit: cover</a></em> property. It should work in all modern browsers that do not yet support <em>object-fit</em> natively and is compatible with jQuery 1.7+ and 2.*.

<p>A  <a href="http://multifaceted.info/demos/image-fit-cover/demo/index.html">simple demo</a> shows you the desired effect</p>

All images within the targeted container object will fill its entire area without changing their aspect ratio. The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height.

As of November 2014 the latest Webkit browsers and Firefox 36 support object-fit. However, Internet Explorer, Firefox before version 36 and older versions of Safari prior to version 7.1 d not.

This plugin only implements object-fit: <em>cover</em> property for img tags wrapped in the targeted containers. 

Other plugins, most notably Simon Schmid's <a href="https://github.com/schmidsi/jquery-object-fit">jquery.object-fit</a> and Anselm Hannemann's <a href="https://github.com/anselmh/object-fit">vanilla javascript polyfill</a>, provide more complete support for <en>object-fit</em> and implement other values such as fill, contain and scaled-down and work directly on any HTML object that should respond to object-fit rather than only on elements containing image tags.
	
Our approach may be less flexible, but is more efficient for situations where you need to fit images within an area within a different aspect ratio. As a jQuery plugin it can be combined with numerous other plugins for slide shows and other effects. Inline styles are added only to browsers that do not support object-fit via a simple test on initial page load.

<h3>Sample usage:<h3>

<h4>HTML Snippet:</h4>
<pre>
&lt;figure class="inage-cover"&gt;
	&lt;img src="/path-to-images-folder/image.jpg" width="800" height="600" /&gt;
&lt;/figure&gt;
</pre>

<h4>Stylesheet:</h4>
<pre>
figure.image-cover {
  position: relative;
  width: 50%;
  height: 20vh; /* viewport height, not supported in IE8*/
  overflow: hidden; /* important */
}

figure.image-cover img {
  position: relative; /*must have a non-static position to work in browsers that do not support object-fit*/
  width: 100%; /* initial value overriden by object-fit and/or plugin */
  height: 100%; /* initial value overriden by object-fit and/or plugin */
  object-fit: cover; /* works in latest Webkit browsers + FF 36+ */
}
</pre>

<h4>Javascript in jQuery context:</h4>
<pre>
$('figure.image-fit').imageFitCover();
</pre>
