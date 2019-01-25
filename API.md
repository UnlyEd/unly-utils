## Constants

<dl>
<dt><a href="#isBrowser">isBrowser</a></dt>
<dd><p>Special instruction to tell jest to run this file in a custom environment (overrides the testEnvironment in package.json)
See <a href="https://jestjs.io/docs/en/configuration.html#testenvironment-string">https://jestjs.io/docs/en/configuration.html#testenvironment-string</a></p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#browserRedirect">browserRedirect(url, target)</a></dt>
<dd><p>Redirect that handles the HTML <a> target
to redirect the current frame or open a new tab.</p>
</dd>
<dt><a href="#convertLineBreaks">convertLineBreaks(str, replacer)</a> ⇒ <code>string</code></dt>
<dd><p>Replace line breaks in a string by a HTML line break (<br>)</p>
</dd>
<dt><a href="#isBrowser">isBrowser()</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks whether the current runtime is a browser</p>
</dd>
</dl>

<a name="isBrowser"></a>

## isBrowser
Special instruction to tell jest to run this file in a custom environment (overrides the testEnvironment in package.json)
See https://jestjs.io/docs/en/configuration.html#testenvironment-string

**Kind**: global constant  
**Jest-environment**: jsdom  
<a name="browserRedirect"></a>

## browserRedirect(url, target)
Redirect that handles the HTML <a> target
to redirect the current frame or open a new tab.

**Kind**: global function  

| Param |
| --- |
| url | 
| target | 

<a name="convertLineBreaks"></a>

## convertLineBreaks(str, replacer) ⇒ <code>string</code>
Replace line breaks in a string by a HTML line break (<br>)

**Kind**: global function  

| Param | Default |
| --- | --- |
| str |  | 
| replacer | <code>&lt;br&gt;</code> | 

<a name="isBrowser"></a>

## isBrowser() ⇒ <code>boolean</code>
Checks whether the current runtime is a browser

**Kind**: global function  
