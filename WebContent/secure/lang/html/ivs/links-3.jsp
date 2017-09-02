<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Button & Image as links</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<style>
.margin-top-25 {
	margin-top: 25px;
}

pre {
	margin: 0;
	-moz-tab-size: 3;
}

img {
	width: 100%;
}
</style>
<script>

</script>
</head>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading">Links</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 margin-top-25">
			<div class="col-xs-5">
<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Links&lt;/title&gt;
		&lt;style&gt;
			
		&lt;/style&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;a href="home.html"&gt;
			&lt;button&gt;This is a link&lt;/button&gt;
		&lt;/a&gt;
		&lt;a href="home.html"&gt;
			&lt;img src="/images/codetantra-logo.jpg"&gt;
		&lt;/a&gt;
	&lt;/body&gt;
&lt;/html&gt;
</pre>
			</div>
			<div class="col-xs-6 col-xs-offset-1">
				<img src="/images/links.png">
				<div style="border: 1px solid black; height: 200px; padding: 8px;">
					<a href="home.html"><button>This is link</button></a>
					<div class="col-xs-3"><a href="home.html"><img src="/images/codetantra-logo.jpg"></a></div>
					<iframe name="targetDiv" height="100%" width="100%" frameBorder="0"></iframe>
				</div>
			</div>
		</div>
	</div>
</body>
</html>