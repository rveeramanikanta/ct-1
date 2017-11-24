<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/secure/lang/c/js-min/swf.min.js"></script>
	
	<title>structures with functions</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
}

#informationdiv {
    border-radius: 0px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    margin-top: 30px;
    color: black;
    font-family: monospace;
    padding: 4px; 
    background: white;
    z-index: 9999999;
}

.color-rose {
	color:#8B008B;
}

.color-green {
	color: green;
}

.color-red {
	color: red;
}

.color-blue {
	color:#339;
}

.color-brown {
	color: #b85c00;
}

#tableDiv {
	min-height: 340px;
	border-radius: 5px;
	background-color: rgb(243, 235, 235);
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	font-family: monospace;
}

td {
	padding: 3px;
}

#memoryStoreB {
    width: 100%;
    font-size: 15px;
    text-align: center;
}

#memoryStoreX {
	width: 100%;
    font-size: 15px;
    text-align: center;
}

.memory {
	border: 1px solid Black;
    font-size: 15px;
    text-align: center;
}  

.array {
    font-size: 15px;
    text-align: center;
    color: #b85c00;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.color-maroon {
	color: #85144b;
}

.color-purple {
	color: #B10DC9;
}

.ct-code-b-red {
	font-family: monospace;
	color: red;
	font-weight: bold;
}
.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 60px;
    padding: 17px;
    white-space: pre-line;
}

.color-palegreen {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

pre {
	-moz-tab-size: 4;
	tab-size: 4;
	font-family: monospace; 
}

.user-btn {
	background: green;
	margin: 0!important;
}

.zindex {
	z-index: 9999999;
	background: white;
	position: relative;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Structure as Function Arguments</span>
</div>

<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-6 col-xs-offset-3 visibility-hidden'>
		<span id='li1' class='opacity00'>A <b class="color-green">structure</b> variable can be passed as an argument to the function.
					The argument passed can either be the <b class="color-green">entire</b> structure (or) <b class="color-green">individual</b>
					 structure element.</span>
	</div>
</div>
<div class="col-xs-12">
<div id='tableDiv' style='border: 1px solid black; margin-top: 20px; padding: 0' class='col-xs-offset-1 col-xs-10 visibility-hidden'>
	<div class='col-xs-8' style="margin-top: 13px;">
 <pre id="preId"><span id='errorVoidDisplay'> <span class='color-rose'>void</span> <span class='color-brown'>display</span>(<span class='color-rose'>struct</span> book);</span>
 <span id='structBook' class=''><span class='color-rose'>struct</span> book {
 	<span class='color-rose'>char</span> name[20];
 	<span class='color-rose'>float</span> price;
 	<span class='color-rose'>int</span> page;
 };</span>
 <span id='voidMain' class=''><span id='voidDisplay' class=''><span class='color-rose'>void</span> <span class='color-brown'>display</span>(<span class='color-rose'>struct</span> book);</span></span>
 	<span id='mainFunction'><span class='color-rose'>void</span> <span class='color-brown'>main</span>()</span> {
 	<span id='bookB'><span id='memoryBookB'><span class='color-rose'>struct</span> book b = {"<span id='name'>C LANGUAGE</span>", <span id='price'>125.5</span>, <span id='pages'>315</span>};</span></span>
 	<span id='displayOfB'><span class='color-brown'>display</span>(<span class='color-green'>b</span>);</span>
 } 
<span id='voidPrintFunction'><span id='voidDispalyX' class=''><span class='color-rose'>void</span> <span class='color-brown'>display</span>(<span class='color-rose'>struct</span> book <span class='color-green'>x</span>)</span> {
	<span id='printF' class=''>printf(<span class='color-blue'>"NAME:%s \t price: %f\t page:%d"</span>, x.name, x.price, x.page);</span>	
}</span>
</pre>
</div>
	<div id='' class='col-xs-4' style='margin-top: 30px;'>
		<div id='bArrow' class='opacity00 text-center'>
			<span class='ct-blue-color'><b>b</b></span></div>
		<table  id='memoryStoreB' class="opacity00"  style='border: 1px solid black'>
			<tbody>
				<tr><td class="color-purple memory">name</td>
				<td class="color-purple memory">price</td>
				<td class="color-purple memory">pages</td></tr>
				<tr id="trValue2">
		  			<td id='memory0' class="memory opacity00" style='width: 150px;'>C LANGUAGE</td>
		  			<td id='memory1' class="memory opacity00" style='width: 90px'>125.5</td>
		  			<td id='memory2' class="memory opacity00">315</td>
					</tr>
					<tr><td class="color-maroon">2024</td><td class="color-maroon">2034</td><td class="color-maroon">2038</td></tr>
      			</tbody>
   		</table>
    	<div id='xArrow' style='margin-top: 49px;' class='opacity00 text-center'>
    		<span class='ct-blue-color'><b>x</b></span></div>	
   		<table id='memoryStoreX'  style='margin-top: 0; border: 1px solid black;' class="opacity00" >
			<tbody>
				<tr><td class="color-purple memory">name</td>
				<td class="color-purple memory">price</td>
				<td class="color-purple memory">pages</td></tr>
				<tr>
		  			<td id='memory01' class="memory opacity00" style='width: 150px;'>C LANGUAGE</td>
		  			<td id='memory11' class="memory opacity00">125.500000</td>
		  			<td id='memory21' class="memory opacity00">315</td>
					</tr>
					<tr><td class="color-maroon">2054</td><td class="color-maroon">2064</td><td class="color-maroon">2068</td></tr>
      		</tbody>
   	</table>
	    </div>
	</div>
</div>
</div>
<div class='col-xs-12' style='margin-top: 15px;'>
	<div id="consoleId" class="opacity00 col-xs-offset-3 col-xs-6" style='padding: 0'>
		<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
		<div class="output-console-body" id="consoleBodyDiv"><span id='outPut'></span> </div>
	</div>
</div>
		
<div class="button col-xs-12 text-center " id="button" style='margin-top: 10px;'>
	<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:4px'><i class="fa fa-refresh"></i> Restart</button>
</div>

</body>
<script>
	$(document).ready(function() {
		structureWithFunctionsReady();
	});
</script>
</html>