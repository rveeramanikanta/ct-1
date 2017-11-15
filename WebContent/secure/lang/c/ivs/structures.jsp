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
	<script src="/secure/lang/c/js/structures.js"></script>
	<title>Structures</title>
</head>

<style>
#totaldiv {
	margin-top: 20px;
}

.information-div {
	background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    min-height: 125px;
    font-family: monospace;
    margin-top: 20px;
    color: black;
    padding: 10px;
}
	
.color-rose {
	color:#8B008B;
}
	
.introjs-tooltip {
    min-width: 300px;
}

.memory {
	border: 1px solid Black;
}   
	 
.color-green {
	color: green;
	font-weight: bold;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

#declarationDefination {
	position: relative;
	z-index: 9999999;
	font-size: 18px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	text-align: center;
	color: DarkBlue;
	background: PaleGoldenRod;
}

table {
	width: 100%;
	text-align: center;
	table-layout: fixed;
}

td {
	padding: 2px;
	text-align: center;
	border: 1px solid black;
}
.text-center {
	text-align: center;
}

pre {
	tab-size: 3;
	-moz-tab-size: 3;
	margin: 0;
}

.margin-top-10 {
	margin-top: 10px;
}

.zindex {
	z-index: 99999999 !important;
	background: white;
}

.tab-size, pre {
	tab-size: 4;
	-moz-tab-size: 4;
}
</style>

<body>
	<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Structures</span>
	</div>
	<div class="col-xs-12">
		<div class='col-xs-12'>
			<div id='informationdiv' class='information-div col-xs-8 col-xs-offset-2 visibility-hidden'></div>
		</div>
		
		<div class='col-xs-12'>
			<div class='col-xs-offset-4 col-xs-4 opacity00' style='margin-top: 10px' id='declarationDefination'>
				Structure Declaration and Definition
			</div>
		</div>
	
		<div class='col-xs-12 margin-top-10'>
			<div class="col-xs-6 col-xs-offset-3">
				<div class="col-xs-12">
<pre id='exampleOfStudent' margin-top: 10px;' class='opacity00 col-xs-6'>
	<span id='studentStruct'><span class="color-green">struct</span> <span class='color-rose'>student</span> {</span>
		<span id='members'><span id='int'><span class='color-rose'>int</span> number;</span>
		<span id='float'><span class='color-rose'>float</span> marks;</span>
		<span id='char'><span class='color-rose'>char</span> section;</span>
	}</span>;
	<span id='studentVariables'><span class="color-green">struct</span> student s1, s2, s3;</span></pre>
			<div id='tables' class='col-xs-4 col-xs-offset-1' style='margin-top: 2px;'>
				<div id='storeS1' class="col-xs-12 opacity00" style="padding: 0">
			   		<div class="text-center"><b class="color-green">s1</b></div>
					<table id="table">
						<tbody>
							<tr><td>number</td><td>marks</td><td>section</td></tr>
							<tr>
					  			<td class="memory opacity00">memory</td>
					  			<td class="memory opacity00">memory</td>
					  			<td class="memory opacity00">memory</td>
			 				</tr><tr><td>1044</td><td>1046</td><td>1050</td></tr>
			    		</tbody>
			   		</table>
			   	</div>
				<div id='storeS2' class="col-xs-12 opacity00"  style="padding: 0; margin-top: 10px;">
			   		<div class="text-center"><b class="color-green">s2</b></div>
						<table id="table">
							<tbody>
								<tr><td>number</td><td>marks</td><td>section</td></tr>
								<tr>
						  			<td class="memory opacity00">memory</td>
						  			<td class="memory opacity00">memory</td>
						  			<td class="memory opacity00">memory</td>
			  					</tr>
					  			</tr><tr><td>1060</td><td>1062</td><td>1066</td></tr>
			 				</tbody>
			 			</table>
					</div>
					<div id='storeS3' class="col-xs-12 opacity00" style="padding: 0; margin-top: 10px;">	
				  		<div class="text-center"><b class="color-green">s3</b></div>
							<table id="table">
								<tbody>
									<tr><td>number</td><td>marks</td><td>section</td></tr>
									<tr>
							  			<td class="memory opacity00">memory</td>
							  			<td class="memory opacity00">memory</td>
							  			<td class="memory opacity00">memory</td>
						  			</tr>
						  			<tr><td>1070</td><td>1072</td><td>1076</td></tr>
				 				</tbody>
				 			</table>
			 			</div>
				    </div>
				</div>
			</div>
		</div>
		<div class='col-xs-12'>
			<div class="col-xs-6 col-xs-offset-3">
				<div class="col-xs-12">
					<div id='structureDeclaration'class='col-xs-6 opacity00 margin-top-10'>
<pre id='declarationSyntax'><span id='keyWord' class="color-green">struct</span> <span id='structureName' class='color-rose'>structure_name</span> <span id='enclosedBraces'>{
	data_type1 var1;
	data_type2 var2;
	....
	....
	data_typeN varN;
}</span><span id='semicolon'>;</span></pre>
		</div>
	<div class="col-xs-6 margin-top-10">
	<pre id='exampleStructureDeclaration' class='opacity00'>
	<span id='structutreIdentifier'><span class="color-green">struct</span> <span class='color-rose'>employee</span></span> {
		<span id='name'><span class='color-rose'>char</span> name[20];</span>
		<span id='id'><span class='color-rose'>int</span> id;</span>
		<span id='long'><span class='color-rose'>float</span> salary;</span>
	};
     </pre></div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top-10'>
			<div id='structureDefination' class='col-xs-6 col-xs-offset-3 text-center' style="padding: 0">
				<pre id='definitionSyntax' class='opacity00'>
	<span id='keyWord1' class="color-green">struct</span><span id='structureName1' class='color-rose'> structure_name</span> <span id='structureVariables'>svar1, svar2, ...., svarN;</span></pre>
			</div>
		</div>
		<div class="button col-xs-12 text-center margin-top-10" id="button">
			<button class="btn btn-warning opacity00" id='restartBtn'><i class="fa fa-refresh"></i> Restart</button>
		</div>
	</div>
</body>

<script>
	/* Modification on 17-08-17 by Durga Mahesh.
	Modification are changing the text color to yellow color which is important in the tooltip text */ 
	$(document).ready(function() {
		structuresReady();
	});
</script>
</html>