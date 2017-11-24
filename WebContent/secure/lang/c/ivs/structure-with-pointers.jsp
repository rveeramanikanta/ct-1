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
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/secure/lang/c/js-min/swp.min.js"></script>
	
	<title>structures with pointers</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
}

#informationdiv {
	background-color: white;
    border-radius: 0px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
   	min-height: 60px;
    margin-top: 30px;
    color: black;
    font-family: monospace; 
    z-index: 9999999;
    padding: 10px;
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
	height: 283px;
	border-radius: 5px;
	background-color: rgb(243, 235, 235);
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

#table {
    width: 100%;
    font-size: 15px;
    text-align: center;
}

.memory {
	border: 1px solid Black;
    width: 50px;
    font-size: 15px;
    text-align: center;
}  

.array {
	width: 50px;
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
    margin-bottom: 14px;
    overflow: auto;
    padding: 17px;
    white-space: nowrap;
}

.color-palegreen {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

.color-maroon {
	color: #85144b;
}

.color-purple {
	color: #B10DC9;
}

#box {
	height: 53px;
	border: 1px solid black;
}

.ct-blue-color {
	font-weight: bold;
	font-family: monospace;
}

pre {
	-moz-tab-size: 3;
	tab-size: 3;
	font-family: monospace;
}

.memory {
	position: relative;
    z-index: 9999999;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Structure with Pointers</span>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-6 col-xs-offset-3'>
		<ul>
			<li id="l11" class="opacity00">A pointer pointing to a structure is known as <b class='color-green'>structure pointer</b>.</li>
		  	<li id="l12" class="opacity00">When we access the structure member, the <b class='color-green'>left hand side of the dot</b> operator should always be a
		  	 structure variable.</li>
		  	<li id="l13" class="opacity00">In the same way, the <b class='color-green'>left hand side of the arrow</b> operator must always be a pointer to a structure.</li></ul>
	</div>
</div>
<div id='tableDiv' style='border: 1px solid black; margin-top: 20px' class='col-xs-12 col-xs-offset-1 col-xs-10 visibility-hidden'>
<div class='col-xs-12 col-xs-7' style="margin-top: 10px; margin-bottom: 10px">
<pre><span id='voidFunction'><span class='color-rose'>void</span> <span class='color-brown'>main</span>();</span> {
	<span id='membersOfStructBook'><span class='color-rose'>struct</span> book {
		<span class='color-rose'>char</span> name[20];
		<span class='color-rose'>float</span> price;
		<span class='color-rose'>int</span> page;
	};</span>	
	<span id='storeBmemory'><span id='memorySend'><span class='color-rose'>struct</span> book b = {"<span id='name'>C LANGUAGE</span>", <span id='price'>125.5</span>, <span id='pages'>315</span>};</span></span>
	<span id='bookPointer'><span id='pointerP' class=''><span class='color-brown'>struct </span><span>book *p;</span></span></span>
	<span id='pEquals'>p = &b</span>
	<span id='printF' class=''>printf(<span class='color-blue'>"NAME:%s \t price: %f\t page:%d"</span>, <span id='pName'>p&rarr;name</span>, <span id='pprice'>p&rarr;price</span>, <span id='pPage'>p&rarr;page</span>);</span>
}
		</pre>
	</div>
	<div id='boxOfP' class='col-xs-1 opacity00' style='margin-top: 62px; padding: 0'>
		<div class='color-green text-center' ><span id='pId' style='position: relative; z-index: 9999999;'>p</span></div>
		<div id='box' style='position: relative; display: table' class="col-xs-12">
			<span id='address1' class="color-maroon opacity00" style="text-align: center; display: table-cell; vertical-align: middle;">2024</span>
		</div>
		<div class='text-center color-maroon'>5034</div>
	</div> 
	<!-- <div id='arrow'style='color: red; margin-top: 78px; z-index: 9999999; position: relative;' class='opacity00'>&rarr;</div> -->
	<div id='memoryStoreB' class='col-xs-3  col-xs-offset-1 opacity00' style='margin-top: 62px; padding: 0'>
		<div  class=''>
			<div style='z-index: 9999999px;' id='bArrow' class='text-center opacity00'><span class='color-green' style='position: relative; z-index: 9999999;'>b</span></div>
			<table  class="" id="table" style='border: 1px solid black;'>
					<tbody>
						<tr>
				  			<td class="ct-blue-color memory" id='name1' style='position: relative; z-index: 9999999;'>name</td>
				  			<td class="ct-blue-color memory" id='price1' style='position: relative; z-index: 9999999;'>price</td>
				  			<td class="ct-blue-color memory" id='pages1' style='position: relative; z-index: 9999999;'>pages</td>
	  					</tr>
						<tr>
				  			<td id='memory0' class="memory opacity00" style='width: 140px'>C LANGUAGE</td>
				  			<td id='memory1' class="memory opacity00" >125.5<span id='zeros' class='opacity00'>00000</span></td>
				  			<td id='memory2' class="memory opacity00">315</td>
	  					</tr>
	  					<tr>
				  			<td id='address' class="color-maroon" style='position: relative; z-index: 9999999;'>2024</td>
				  			<td class="color-maroon">2034</td>
				  			<td class="color-maroon">2038</td>
	  					</tr>
	        		</tbody>
      		</table>
      	</div>
		</div>
	</div>
	<div class='col-xs-offset-3 col-xs-6' style='margin-top: 15px;'>
			<div id="consoleId" class="center opacity00">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
					<div class="output-console-body" id="consoleBodyDiv">
						 <span id='outPut'><span id='nameOutPut'></span><span id='priceOutPut' style='margin-left: 20px;'></span><span id='pageOutPut'  style='margin-left: 20px;'></span></span> 
					</div>
			</div>
		</div>
	<div class="button col-xs-12 text-center " id="button">
		<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:4px'><i class="fa fa-refresh"></i> Restart</button>
	</div>
</body>
<script>
	$(document).ready(function() {
		structureWithPointersReady();
	});
</script>
</html>