<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
 	<script src="/secure/lang/c/js/structure-with-assignment-operator.js"></script>
	
	<title>Feature of structure</title>
<style>
#totaldiv {
	margin-top: 25px;
}

#tableDiv {
	 min-height: 193px;
	 border: 1px solid black;
	 margin-top: 35px;
	 background-color: #fffff0;
	 border-radius: 10px;
	 font-family: monospace;
}

.color-rose {
	color:#8B008B;
}
	
.color-green {
	color: green;
}
	
#table {
	border: 1px solid Black;
    font-size: 15px;
    text-align: center;
    padding: 5px;
}
    
.memory {
	border: 1px solid Black;
    text-align: center;
    font-size: 15px;
    padding: 5px;
}  

.array {
	padding: 5px;
	text-align: center;
}
	 
.address {
	padding: 4px;
	color:  #339;
	text-align: center;
}

.color-red {
	color: red;
}

.color-brown {
	color: #b85c00;
}

table {
	width: 100%;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 3px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.color-yellow {
	color: yellow;
}

.z-index {
    position: relative;
    z-index: 9999999;
    background: white;
    border-radius: 4px;
    padding: 4px;
}

pre {
	-moz-tab-size: 3;
	tab-size: 3;
	font-family: monospace;
}

.user-btn {
	background: green;
	margin: 0!important;
}
</style>
</head>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Usage of Assignment Operator on Structures</span>
</div>
<div  class='col-xs-10  container'>
	<div id='tableDiv' class='col-xs-9 col-xs-offset-3 visibility-hidden'>
		<div  class='col-xs-5' style='margin-top: 12px;'>
			<span id='intVariable' class='opacity00'><span class='color-rose'>int</span> i;</span><br>
			<span id='arrayOfaValues' class='opacity00'><span class='color-rose'>int</span> a[<span class='color-brown'>5</span>] = {<span id='array0'>10</span>, <span id='array1'>20</span>, <span id='array2'>30</span>, <span id='array3'>40</span>, <span id='array4'>50</span>};</span><br>
			<span id='arrayOfbValues' class='opacity00'><span class='color-rose'>int</span> b[<span class='color-brown'>5</span>];</span><br>
			<span id='bEqualsa' class='opacity00'> b = a;</span><br>
			<div style='margin-top: 20px;'><span id='forCondition' class='opacity00'><span class='color-rose'>for</span> ( i = 0;  i < 5;  i++) {<br>
				&emsp;&emsp;&emsp;b[<span class='color-brown'>i</span>] = a[<span class='color-brown'>i</span>];<br>
			}</span></div>
		</div>
		<div class='col-xs-1'>
			<div id='aValue' style='margin-top: 36px;' class='opacity00'><span class='color-green'><b>a</b></span>
				&emsp;<span class='color-red'>&rarr;</span></div>
			<div id='bValue' style='margin-top: 50px;' class='opacity00'><span class='color-green'><b>b</b></span>
				&emsp;<span class='color-red'>&rarr;</span></div>
		</div>
	<div class='col-xs-4'>
		<div id='arrayTable1' class='opacity00' style='position: relative; z-index: 9999999;'>
			<table id="arrayTable" style='padding: 10px'>
				<tbody>
					<tr>
			  			<%for (int i = 1; i <= 5; i++)  {%>
			  				<td class="array">a[<span class='color-brown'><%=(i-1)%></span>]</td>
			  			<%}%>
  					</tr>
        		</tbody>
	        	</table>
			<table style="border: 1px solid black; height: 15px;" id="tableVal1">
				<tbody>
					<tr>
			  			<%for (int i = 1; i <= 5; i++)  {%>
			  				<td  class="memory"><span id='memory<%=(i - 1)%>' class='memory-class opacity00'><%=(i * 10)%></span></td>
			  			<%}%>
  					</tr>
        		</tbody>
     		</table>
      		<table  class="" id="addressTable" style='padding: 10px'>
					<tbody><tr>
				  			<td class="address">2024</td>
				  			<td class="address">2026</td>
				  			<td class="address">2028</td>
				  			<td class="address">2030</td>
				  			<td class="address">2032</td>
	  					</tr>
	        		</tbody>
	        	</table>
	        </div>	
	        <div id='arrayTable2' class='opacity00' style='position: relative; z-index: 9999999;'>
			<table  class="" id="arrayTable" style='padding: 10px'>
					<tbody><tr>
				  			<%for (int i = 1; i <= 5; i++)  {%>
					  			<td class="array">b[<span class='color-brown'><%=(i - 1)%></span>]</td>
				  			<%}%>
	  					</tr>
	        		</tbody>
	        	</table>
		<table style="border: 1px solid black; height: 15px;" class="" id="table">
					<tbody><tr>
				  			<td id='memory5' class="memory opacity00">10</td>
				  			<td id='memory6' class="memory opacity00">20</td>
				  			<td id='memory7' class="memory opacity00">30</td>
				  			<td id='memory8' class="memory opacity00">40</td>
				  			<td id='memory9' class="memory opacity00">50</td>
	  					</tr>
	        		</tbody>
      		</table>
      		<table  class="" id="addressTable" style='padding: 10px'>
					<tbody><tr>
				  			<td class="address">2034</td>
				  			<td class="address">2036</td>
				  			<td class="address">2038</td>
				  			<td class="address">2040</td>
				  			<td class="address">2042</td>
	  					</tr>
	        		</tbody>
	        	</table>
	        </div>
	    </div>
	</div>
</div>
<div class='col-xs-12'>
	<div class='col-xs-8 col-xs-offset-2' style='margin-top: 30px; padding: 0'>
		<div class='col-xs-6 col-xs-offset-1'>
<pre id='structureConcept' class='opacity00' style='margin-top: 24px;'><span id='structBook' class=''><span class='color-rose'>struct</span> book <span id='membersOfStructBook'>{
	<span class='color-rose'>char</span> name[20];
	<span class='color-rose'>float</span> price;
	<span class='color-rose'>int</span> page;
};</span></span>
<span id='storeBmemory'><span id='bookB1'><span class='color-rose'>struct</span> book b1</span> = <span id='cLanguage'>{"<span id='name'>C LANGUAGE</span>", <span id='price'>125.5</span>, <span id='pages'>315</span>};</span></span>
<span id='bookB2'>struct book b2;</span>
<span id='b2equalsB1'>b2 = b1;</span></pre>
			</div>
	<div id='memoryStoreB' class='col-xs-3 col-xs-offset-1' style="padding: 0">
		<div  id='b1Table'>
			<div id='b1Array'  class='opacity00 text-center' style="color: green;">b1</div>
			<table  class="opacity00" id="table1" style='border: 1px solid black;'>
				<tbody>
					<tr><td class="array memory">name</td><td class="array memory">price</td><td class="array memory">pages</td></tr>
					<tr id="tableVal2">
			  			<td  class="memory" style='width: 138px;'><span  id='mem0' class="opacity00">C LANGUAGE</span></td>
			  			<td class="memory"><span  id='mem1' class="opacity00">125.5</span></td>
			  			<td  class="memory"><span  id='mem2' class="opacity00">315</span></td>
  					</tr>
  					<tr><td class="array">2024</td><td class="array">2044</td><td class="array">2048</td></tr>
        		</tbody>
      		</table>
      	</div>
      	<div id="b2Table">
      		<div id='b2Arayy' class='opacity00 text-center' style="margin-top: 10px; color: green;">b2</div>
      		<table  class="opacity00" id="table2" style='border: 1px solid black;'>
				<tbody>
					<tr><td class="array memory">name</td><td class="array memory">price</td><td class="array memory">pages</td></tr><tr>
			  			<td id='mem30' class="memory opacity00" style='width: 138px;'>C LANGUAGE</td>
			  			<td id='mem31' class="memory opacity00">125.5</td>
			  			<td id='mem32' class="memory opacity00">315</td>
  					</tr>
  					<tr><td class="array">2054</td><td class="array">2074</td><td class="array">2078</td></tr>
        		</tbody>
      		</table>
      	</div>
     </div>
  </div>
</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:4px'><i class="fa fa-refresh"></i> Restart</button>
</div>
</body>

<script>
$(document).ready(function() {
	structureWithAssiagnmentOperator();
	});
	</script>
</html>