<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />

<title>Introduction to Tables-2</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

.color-green {
	color: green;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.user-btn {
	min-width: 15px;
	min-height: 15px;
	display: inline-block;
	border-width: 0px;
	background-color: transparent;
	outline: none;
}

.errorText {
	color: red;
	font-weight: bold;
}

input {
	background-color: transparent;
	border: medium none;
}

.ct-code-b-yellow {
	color: yellow;
}

table, td, th {
	border-spacing: 3px;
	border-collapse: separate;
}

.table, .header-cell, .data-cell-0, .data-cell-1, .data-cell-2 {
	border: 1px solid rgba(192,192,192,0);
	position: relative;
}
	
ul.tabs{
 	display: inline-block;
    line-height: 25px;
    list-style-type: none;
    margin: 0;
    max-height: 26px;
    overflow: hidden;
}

ul.tabs > li.active{
  z-index: 2;
  background: #efefef;
}


ul.tabs > li {
  	border-top-left-radius: 90px;
    border-top-right-radius: 90px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    float: right;
    height: 29px;
    margin: 0 8px;
    min-width: 221px;
    position: relative;
}

#browser {
	margin-top: 3px;
}

.margin-top-2 {
	margin-top: 2%;
}

.arrow {
	color: grey;
	font-size:20px;
	color: lightgray;
    font-size: 15px;
	
}

.tabs {
	height:45px;
	padding: 0 0 0 0;
	overflow:visible;
}

.usr-text {
	border: medium none;
	min-width: 20%; 
	background: none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.usr-text1 {
	border: medium none;
	background: none;
}

#text7 {
	position: absolute;
	display: inline-block;
	-webkit-transform: perspective(-100px) rotateX(-30deg);
 	-moz-transform: perspective(-100px) rotateX(-30deg);
}

.tab-title {
    background-color: white;
    border: 1px solid gray;
    border-radius: 25px 25px 0 0;
    color: black;
}

.top-border {
	background-color: black;
    height: 30px;
}


.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
    margin: 0;
    max-height: 35px;
    padding: 0;
}

#into {
	float: right;
    font-size: 11px;
}

.padding0 {
	padding: 0;
}

.z-index {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

#browserBox {
	border: 1px solid grey;
	padding-left: 0;
	padding-right: 0;
	min-height: 210px;
}

#borderDotted {
	height: 20px;
}

.errorText-border {
	color: red;
	font-weight: bold;
}

body {
    font-size: 12px;
}

</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Introduction to Tables-2</span>
</div>
<div class='container'>
	<div class='col-xs-12'>
		<div class='col-xs-6'>
			<pre id='preHtmlBox' style='margin-top: 25px;' class='creamPreTab4'><span id='docType' class='color-green opacity00'>&lt;!DOCTYPE html&gt;</span>
<span id='htmlOpen' class='color-green opacity00'>&lt;html&gt;</span>
<span id='headOpen' class='color-green opacity00'>&lt;head&gt;</span>
	<span id='titleTag' class='opacity00'><span id='' class='color-green'>&lt;title&gt;</span><span>Introduction to Tables-2</span><span class='color-green'>&lt;/title&gt;</span></span>
<span id='styleOpenTag' class='color-green opacity00'>&lt;style&gt;</span>
<span class='user-btn opacity00' id="tableType" contenteditable="true" max="7" spellcheck="false"></span>
	<span  id="borderDotted" class='opacity00'>border: <select class="select-border">
		<option selected opt="select">--select--</option>
  		<option opt="black" >1px solid grey</option>
  		<option opt="dotted" >thin dotted grey</option>
  		<option opt="dashed" >thin dashed grey</option>
	</select></span>
<span class='user-btn opacity00' id="closeBracket" contenteditable="true" max="7" spellcheck="false"></span>
<span id='styleClosedTag' class='color-green opacity00'>&lt;/style&gt;</span>
<span id='headClose' class='color-green opacity00'>&lt;/head&gt;</span>
<span id='bodyOpenTag' class='color-green opacity00 z-index'>&lt;body&gt;</span>
<span><span class='user-btn opacity00' id="tableOpenTag" contenteditable="true" max="7" spellcheck="false"></span></span>
	<span class='user-btn opacity00' id="tableHeadOPenTag" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowOpenTag" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="headCellOpenTag" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="headerText" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="headCellCloseTag" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="headCellOpenTag1" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="headerText1" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="headCellCloseTag1" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowCloseTag" contenteditable="true" max="7" spellcheck="false"></span>
	<span class='user-btn opacity00' id="tableHeadCloseTag" contenteditable="true" max="8" spellcheck="false"></span>
	<span class='user-btn opacity00' id="tableBodyOpenTag" contenteditable="true" max="8" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowOpenTag1" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="tabledataOpenTag" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataText" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataCloseTag" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="tabledataOpenTag1" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataText1" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataCloseTag1" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowCloseTag1" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowOpenTag2" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="tabledataOpenTag2" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataText2" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataCloseTag2" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="tabledataOpenTag3" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataText3" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataCloseTag3" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowCloseTag2" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowOpenTag3" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="tabledataOpenTag4" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataText4" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataCloseTag4" contenteditable="true" max="7" spellcheck="false"></span>
			<span class='user-btn opacity00' id="tabledataOpenTag5" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataText5" contenteditable="true" max="7" spellcheck="false"></span><span class='user-btn opacity00' id="tabledataCloseTag5" contenteditable="true" max="7" spellcheck="false"></span>
		<span class='user-btn opacity00' id="tableRowCloseTag3" contenteditable="true" max="7" spellcheck="false"></span>
	<span class='user-btn opacity00' id="tableBodyCloseTag" contenteditable="true" max="8" spellcheck="false"></span>
<span class='user-btn' id="tableClosedTag" contenteditable="true" max="1" spellcheck="false"></span>
<span id='bodyClosedTag' class='color-green opacity00 z-index'>&lt;/body&gt;</span>
<span id='htmlClose' class='color-green opacity00'>&lt;/html&gt;</span></pre>
</div>
<div class='col-xs-6' style='margin-top: 30px;'>
<div id='browserBox' class='opacity00'>
	<div id='tableTitleInBrowser' class='container opacity00' style="border: 1px solid grey;  padding: 0; width: 100%;">
		<div class='tab-container'>
			<ul class="tabs clearfix" >
				<li class="active" style="display: flex; align-items: center;">
					<div id='tableTitle' class="col-xs-10">Introduction to Tables-2</div>
					<i class="col-xs-2 fa fa-times fa-sm" style="padding: 0px;"></i>
				</li>
			</ul>
			<span style='color: white; font-size: 18px;'><i class="fa fa-plus" aria-hidden="true"></i></span>
		</div>
		<div id='browser' class='col-xs-12' style='padding-bottom: 6px;' >
			<div class='col-xs-2 padding0 text-center'>
				<span id='arrowCircle' class='col-xs-4 padding0'><i  class="fa fa-arrow-left arrow" aria-hidden="true"></i></span>
				<span  class='col-xs-4 padding0'><i class="fa fa-arrow-right arrow" aria-hidden="true"></i></span>
				<span  class='col-xs-4 padding0'><i class="fa fa-rotate-right fa-1x" aria-hidden="true"></i></span>
			</div>
			<div class='col-xs-5 padding0 text-center' style="border: 1px solid; display: flex; align-items: center;">
				<span class='col-xs-1 padding0'><i class="fa fa-search fa-1x" aria-hidden="true" style="font-size: 10px;"></i></span>
				<span class='col-xs-10 padding0'><input type="text" maxlength="100" class="usr-text" value='www.codetantra.com/w....' id='edittitle'></span>
				<span class='col-xs-1 padding0'><i class="fa fa-star-o fa-1x" aria-hidden="true"></i></span>
			</div>
			<div class='col-xs-2'>
				<div style='display: flex; align-items: center; border: 1px solid gray;'>
					<span class="col-xs-2 padding0" style=" display: flex; align-items: center;"><i class="fa fa-search fa-1x" aria-hidden="true" ></i></span>
					<span class="col-xs-10 padding0"><input type="text" maxlength="100" class="usr-text1" ></span>
				</div>
			</div>
			<div class='col-xs-2 padding0'  style='display: flex; align-items: center;'>	
				<span class='col-xs-4 text-center'><i class="fa fa-arrow-down fa-1x" aria-hidden="true"></i></span>
				<span class='col-xs-4 text-center'><i class="fa fa-home fa-1x" aria-hidden="true"></i></span>
				<span class='col-xs-4 text-center'><i  class="fa fa-bars fa-1x" aria-hidden="true"></i></span>
			</div>
		</div>
	</div>
	<div class='col-xs-12'>
		<table class='table-box' id='table' style='width: 50%; margin-top: 10px'>
			  <thead>
			     <tr id='row0'>
			        <th class='header-cell'><div id='column' class='opacity00'>Column</div></th>
			        <th class='header-cell'><div id='dataType' class='opacity00'>Data Type</div></th>
			     </tr>
			  </thead>
			  <tbody>
				<tr id='row1'>
				    <td id='colspan2' class='data-cell-0'><div  id='name' class='opacity00'>name</div></td>
				    <td class='data-cell-0'><div  id='string' class='opacity00'>string</div></td>
				</tr>
				<tr id='row2'>
				    <td class='data-cell-1'><div id='months' class='opacity00'>months</div></td>
				    <td id='rowspan2' class='data-cell-1'><div id='integer' class='opacity00'>integer</div></td>
				</tr>
				 <tr id='row3'>
				   <td class='data-cell-2'><div id='salary' class='opacity00'>salary</div></td>
				   <td class='data-cell-2'><div id='integer1' class='opacity00'>integer</div></td>
				 </tr>
			  </tbody>
		</table>
	</div>
	</div>
	<div class="button col-xs-12 text-center " id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</div>
</div>
</div>
</body>
<script type="text/javascript">
 $(document).ready(function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		 window.location.search = "?restart=1";
	});
	/* $('body').on('drop', function(event) {
	    event.preventDefault();
	  });
	$('body').on('copy paste', 'input', function (e) {
		e.preventDefault(); 
		}); */
	/* $("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			} 
	});*/
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#preHtmlBox',
			intro :'',
			position:"right"
		},{
			element :'#tableTitleInBrowser',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableClosedTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableType',
			intro :'',
			position:"bottom" 
		},{
			element :'#closeBracket',
			intro :'',
			position:"bottom" 
		},{
			element :'#borderDotted',
			intro :'',
			position:"bottom" 
		},{
			element :'#browserBox',
			intro :'',
			position:"bottom",
			tooltipClass: 'hidden',
			animateStepTwo : 'borderAttr'
		},{
			element :'#tableHeadOPenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableHeadCloseTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableRowOpenTag',
			intro :'',
			position:"bottom"
		},{
			element :'#tableRowCloseTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#row0',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#headCellOpenTag',
			intro :'',
			position:"bottom"
		},{
			element :'#headCellCloseTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#headerText',
			intro :'',
			position:"bottom"
		},{
			element :'#column',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#headCellOpenTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#headCellCloseTag1',
			intro :'',
			position:"bottom" 
		},{
			element :'#headerText1',
			intro :'',
			position:"bottom"  
		},{
			element :'#dataType',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tableBodyOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableBodyCloseTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableRowOpenTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#tableRowCloseTag1',
			intro :'',
			position:"bottom"  
		},{
			element :'#row1',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tabledataOpenTag',
			intro :'',
			position:"bottom",
			animateStepOne : 'colSpan'
		},{
			element :'#tabledataCloseTag',
			intro :'',
			position:"bottom" 
		
		},{
			element :'#tabledataText',
			intro :'',
			position:"bottom" 
		},{
			element :'#name',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tabledataOpenTag1',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataCloseTag1',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataText1',
			intro :'',
			position:"bottom" 
		},{
			element :'#string',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tableRowOpenTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#tableRowCloseTag2',
			intro :'',
			position:"bottom"  
		},{
			element :'#row2',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tabledataOpenTag2',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataCloseTag2',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataText2',
			intro :'',
			position:"bottom" 
		},{
			element :'#months',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tabledataOpenTag3',
			intro :'',
			position:"bottom",
			animateStep : 'opentdTag'
		},{
			element :'#tabledataCloseTag3',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataText3',
			intro :'',
			position:"bottom" 
		},{
			element :'#integer',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tableRowOpenTag3',
			intro :'',
			position:"bottom"
		},{
			element :'#tableRowCloseTag3',
			intro :'',
			position:"bottom"  
		},{
			element :'#row3',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tabledataOpenTag4',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataCloseTag4',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataText4',
			intro :'',
			position:"bottom" 
		},{
			element :'#salary',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tabledataOpenTag5',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataCloseTag5',
			intro :'',
			position:"bottom" 
		},{
			element :'#tabledataText5',
			intro :'',
			position:"bottom" 
		},{
			element :'#integer1',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden" 
		},{
			element :'#tabledataOpenTag3',
			intro :'',
			position:"bottom",
			animateStep : 'enterRowSpan' 
		},{
			element :'#browserBox',
			intro :'',
			position:"bottom",
			tooltipClass : 'hidden',
			animateStepTwo : 'rowspanAnimated'
		},{
			element :'#tabledataOpenTag',
			intro :'',
			position:"bottom",
			animateStepOne : 'colSpan1'
		},{
			element :'#browserBox',
			intro :'',
			position:"bottom",
			tooltipClass : 'hidden',
			animateStepTwo : 'colspanAnimated' 
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
			}]
		});
		
		intro.onafterchange(function(targetElement) { 
			var elementId = targetElement.id;
			switch (elementId) {
			
			case "tableTitleInBrowser" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#edittitle").attr("disabled", true);
					$('#tableTitleInBrowser').removeClass('opacity00');
					$('#browserBox').removeClass('opacity00');
					$("#tableTitle").effect('highlight',  {color: "#ff9900"}, 2000);
					typing('.introjs-tooltiptext',"Table title displays here." ,function() { 
			  			$('.introjs-nextbutton').show();
					  	});
					});
				break;
			case "tableOpenTag" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#bodyOpenTag').removeClass('opacity00').addClass('z-index');
					$('#bodyClosedTag').removeClass('opacity00').addClass('z-index');
					$('#tableOpenTag').removeClass('opacity00');
					$('#tableOpenTag').focus();
			  		typing('.introjs-tooltiptext',"Open the table tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableOpenTag", "<table>");
					  	});
					});
				break;
			case "tableClosedTag" :
				$('.introjs-nextbutton').hide();
				$("#tableOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableClosedTag').removeClass('opacity00');
					$('#tableClosedTag').focus();
			  		typing('.introjs-tooltiptext',"Close the table tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableClosedTag", "</table>");
					  	});
					});
				break; 
			case "tableHeadOPenTag" :
				$('.introjs-nextbutton').hide();
				$("#tableClosedTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableHeadOPenTag').removeClass('opacity00');
					$('#tableHeadOPenTag').focus();
			  		typing('.introjs-tooltiptext',"Open the tablehead tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableHeadOPenTag", "<thead>");
					  	});
					});
				break; 
			case "tableHeadCloseTag" :
				$('.introjs-nextbutton').hide();
				$("#tableHeadOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableHeadCloseTag').removeClass('opacity00');
					$('#tableHeadCloseTag').focus();
			  		typing('.introjs-tooltiptext',"Close the tablehead tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableHeadCloseTag", "</thead>");
					  	});
					});
				break; 
			case "tableRowOpenTag" :
				$('.introjs-nextbutton').hide();
				$("#tableHeadCloseTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowOpenTag').removeClass('opacity00');
					$('#tableRowOpenTag').focus();
			  		typing('.introjs-tooltiptext',"Open the tablerow tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowOpenTag", "<tr>");
					  	});
					});
				break; 
			case "tableRowCloseTag" :
				$('.introjs-nextbutton').hide();
				$("#tableRowOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowCloseTag').removeClass('opacity00');
					$('#tableRowCloseTag').focus();
			  			typing('.introjs-tooltiptext',"Close the table row tag.<br><span class='errorText'></span>" ,function() { 
			  				textenter("#tableRowCloseTag", "</tr>");
					  		});
					});
				break; 
			case "row0" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenLite.to($(".header-cell"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
						$(".header-cell").effect('highlight',  {color: "#ff9900"}, 500);
						setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "headCellOpenTag" :
				$('.introjs-nextbutton').hide();
				$("#tableRowCloseTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#headCellOpenTag').removeClass('opacity00');
					$('#headCellOpenTag').focus();
			  		typing('.introjs-tooltiptext',"Open the tablehead cell tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#headCellOpenTag", "<th>");
					  	});
					});
				break;
			case "headCellCloseTag" :
				$('.introjs-nextbutton').hide();
				$("#headCellOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#headCellCloseTag').removeClass('opacity00');
					$('#headCellCloseTag').focus();
			  		typing('.introjs-tooltiptext',"Close the tablehead cell tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#headCellCloseTag", "</th>");
					  	});
					});
				break;
			case "headerText" :
				$('.introjs-nextbutton').hide();
				$("#headCellCloseTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#headerText').removeClass('opacity00');
					$('#headerText').focus();
			  		typing('.introjs-tooltiptext',"Type text here i.e.<span class='ct-code-b-yellow'>Column</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#headerText", "Column");
					  	});
					});
				break;
			case "column" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#column').removeClass('opacity00');
					var l = $("#headerText").offset();
					$("#column").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#column", 0.8, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
				  		typing('.introjs-tooltiptext',"Text." ,function() { 
				  			setTimeout(function(){
								intro.nextStep();
								}, 300); 
							});
						}});
					});
				break;
			case "headCellOpenTag1" :
				$('.introjs-nextbutton').hide();
				$("#headerText").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#headCellOpenTag1').removeClass('opacity00');
					$('#headCellOpenTag1').focus();
			  		typing('.introjs-tooltiptext',"Open the tablehead cell tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#headCellOpenTag1", "<th>");
					  	});
					});
				break;
			case "headCellCloseTag1" :
				$('.introjs-nextbutton').hide();
				$("#headCellOpenTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#headCellCloseTag1').removeClass('opacity00');
					$('#headCellCloseTag1').focus();
			  		typing('.introjs-tooltiptext',"Close the tablehead cell tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#headCellCloseTag1", "</th>");
					  	});
					});
				break;
			case "headerText1" :
				$('.introjs-nextbutton').hide();
				$("#headCellCloseTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#headerText1').removeClass('opacity00');
					$('#headerText1').focus();
			  		typing('.introjs-tooltiptext',"Type text here i.e.<br><span class='ct-code-b-yellow'>Data Type</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#headerText1", "Data Type");
					  	});
					});
				break; 
			case "dataType" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#dataType').removeClass('opacity00');
					var l = $("#headerText1").offset();
					$("#dataType").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#dataType", 0.8, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
				  		typing('.introjs-tooltiptext',"Text." ,function() { 
				  			setTimeout(function(){
								intro.nextStep();
								}, 300); 
							});
						}});
					});
				break;
			case "tableBodyOpenTag" :
				$('.introjs-nextbutton').hide();
				$("#headerText1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableBodyOpenTag').removeClass('opacity00');
					$('#tableBodyOpenTag').focus();
			  		typing('.introjs-tooltiptext',"Open table body tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableBodyOpenTag", "<tbody>");
					  	});
					});
				break; 
			case "tableBodyCloseTag" :
				$('.introjs-nextbutton').hide();
				$("#tableBodyOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableBodyCloseTag').removeClass('opacity00');
					$('#tableBodyCloseTag').focus();
			  		typing('.introjs-tooltiptext',"Close table body.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableBodyCloseTag", "</tbody>");
					  	});
					});
				break;
			case "tableRowOpenTag1" :
				$('.introjs-nextbutton').hide();
				$("#tableBodyCloseTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowOpenTag1').removeClass('opacity00');
					$('#tableRowOpenTag1').focus();
			  		typing('.introjs-tooltiptext',"Open the tablerow tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowOpenTag1", "<tr>");
					  	});
					});
				break; 
			case "tableRowCloseTag1" :
				$('.introjs-nextbutton').hide();
				$("#tableRowOpenTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowCloseTag1').removeClass('opacity00');
					$('#tableRowCloseTag1').focus();
			  		typing('.introjs-tooltiptext',"Close the table row tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowCloseTag1", "</tr>");
					  	});
					});
				break; 
			case "row1" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenLite.to($(".data-cell-0"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
						$(".data-cell-0").effect('highlight',  {color: "#ff9900"}, 500);
						setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "tabledataOpenTag" :
				var animateStepOne = intro._introItems[intro._currentStep].animateStepOne;
				switch(animateStepOne) {
				
				case 'colSpan':
				$('.introjs-nextbutton').hide();
				$("#tableRowCloseTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataOpenTag').removeClass('opacity00');
					$('#tabledataOpenTag').focus();
			  		typing('.introjs-tooltiptext',"Open the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataOpenTag", "<td>");
					  	});
					});
				break; 
				case 'colSpan1':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#tabledataOpenTag').removeAttr('max contenteditable spellcheck');
						$('#tabledataOpenTag').removeClass('opacity00');
						$('#tabledataOpenTag').off();
						$('#tabledataOpenTag').text("");
						$("#tabledataOpenTag").append("&lt;td <span id='colSpan' contenteditable='true' max='7' spellcheck='false'></span>&gt;")
						$('#colSpan').focus();
						typing('.introjs-tooltiptext',"Type here i.e. <span class='ct-code-b-yellow'>colspan='2'</span><br><span class='errorText'></span>" ,function() { 
							textenter("#colSpan", "colspan='2'");
						  	});
						});
					break; 
				}
				break;
			case "tabledataCloseTag" :
				$('.introjs-nextbutton').hide();
				$("#tabledataOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataCloseTag').removeClass('opacity00');
					$('#tabledataCloseTag').focus();
			  		typing('.introjs-tooltiptext',"Close the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataCloseTag", "</td>");
					  	});
					});
				break; 
			case "tabledataText" :
				$('.introjs-nextbutton').hide();
				$("#tabledataCloseTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataText').removeClass('opacity00');
					$('#tabledataText').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>name</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataText", "name");
					  	});
					});
				break; 
			case "name" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#name').removeClass('opacity00');
					var l = $("#tabledataText1").offset();
					$("#name").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#name", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
				  		typing('.introjs-tooltiptext',"Text." ,function() { 
				  			setTimeout(function(){
								intro.nextStep();
								}, 300); 
							});
						}});
					});
				break;
			case "tabledataOpenTag1" :
				$('.introjs-nextbutton').hide();
				$("#tabledataText").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataOpenTag1').removeClass('opacity00');
					$('#tabledataOpenTag1').focus();
			  		typing('.introjs-tooltiptext',"Open the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataOpenTag1", "<td>");
					  	});
					});
				break; 
			case "tabledataCloseTag1" :
				$('.introjs-nextbutton').hide();
				$("#tabledataOpenTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataCloseTag1').removeClass('opacity00');
					$('#tabledataCloseTag1').focus();
			  		typing('.introjs-tooltiptext',"Close the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataCloseTag1", "</td>");
					  	});
					});
				break; 
			case "tabledataText1" :
				$('.introjs-nextbutton').hide();
				$("#tabledataCloseTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataText1').removeClass('opacity00');
					$('#tabledataText1').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>string</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataText1", "string");
					  	});
					});
				break; 
			case "string" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#string').removeClass('opacity00');
					var l = $("#tabledataText2").offset();
					$("#string").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#string", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
			  			setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "tableRowOpenTag2" :
				$('.introjs-nextbutton').hide();
				$("#tabledataText1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowOpenTag2').removeClass('opacity00');
					$('#tableRowOpenTag2').focus();
			  		typing('.introjs-tooltiptext',"Open the tablerow tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowOpenTag2", "<tr>");
					  	});
					});
				break; 
			case "tableRowCloseTag2" :
				$('.introjs-nextbutton').hide();
				$("#tableRowOpenTag2").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowCloseTag2').removeClass('opacity00');
					$('#tableRowCloseTag2').focus();
			  		typing('.introjs-tooltiptext',"Close the table row tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowCloseTag2", "</tr>");
					  	});
					});
				break; 
			case "row2" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenLite.to($(".data-cell-1"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
						$(".data-cell-1").effect('highlight',  {color: "#ff9900"}, 500);
						setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "tabledataOpenTag2" :
				$('.introjs-nextbutton').hide();
				$("#tableRowCloseTag2").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataOpenTag2').removeClass('opacity00');
					$('#tabledataOpenTag2').focus();
			  		typing('.introjs-tooltiptext',"Open the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataOpenTag2", "<td>");
					  	});
					});
				break; 
			case "tabledataCloseTag2" :
				$('.introjs-nextbutton').hide();
				$("#tabledataOpenTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataCloseTag2').removeClass('opacity00');
					$('#tabledataCloseTag2').focus();
			  		typing('.introjs-tooltiptext',"Close the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataCloseTag2", "</td>");
					  	});
					});
				break; 
			case "tabledataText2" :
				$('.introjs-nextbutton').hide();
				$("#tabledataCloseTag").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataText2').removeClass('opacity00');
					$('#tabledataText2').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>months</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataText2", "months");
					  	});
					});
				break; 
			case "months" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#months').removeClass('opacity00');
					var l = $("#tabledataText3").offset();
					$("#months").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#months", 0.8, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
			  			setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			
			case "tabledataOpenTag3" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				
				case 'opentdTag':
					$('.introjs-nextbutton').hide();
					$("#tabledataText").attr("contenteditable", false);
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#tabledataOpenTag3').removeClass('opacity00');
						$('#tabledataOpenTag3').focus();
				  		typing('.introjs-tooltiptext',"Open the tabledata tag.<br><span class='errorText'></span>" ,function() { 
				  			textenter("#tabledataOpenTag3", "<td>");
						  	});
						});
					break; 
				case 'enterRowSpan':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#tabledataOpenTag3').removeAttr('max contenteditable spellcheck');
						$('#tabledataOpenTag3').removeClass('opacity00');
						$('#tabledataOpenTag3').off();
						$('#tabledataOpenTag3').text("");
						$("#tabledataOpenTag3").append("&lt;td <span id='rowSpan' contenteditable='true' max='7' spellcheck='false'></span>&gt;")
						$('#rowSpan').focus();
						typing('.introjs-tooltiptext',"Type here i.e. <span class='ct-code-b-yellow'>rowspan='2'</span><br><span class='errorText'></span>" ,function() { 
							textenter("#rowSpan", "rowspan='2'");
						  	});
						});
					break; 
			}
			break;
			case "tabledataCloseTag3" :
				$('.introjs-nextbutton').hide();
				$("#tabledataOpenTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataCloseTag3').removeClass('opacity00');
					$('#tabledataCloseTag3').focus();
			  		typing('.introjs-tooltiptext',"Close the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataCloseTag3", "</td>");
					  	});
					});
				break; 
			case "tabledataText3" :
				$('.introjs-nextbutton').hide();
				$("#tabledataCloseTag1").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataText3').removeClass('opacity00');
					$('#tabledataText3').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>integer</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataText3", "integer");
					  	});
					});
				break; 
			case "integer" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#integer').removeClass('opacity00');
					var l = $("#tabledataText4").offset();
					$("#integer").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#integer", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
			  			setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "tableRowOpenTag3" :
				$('.introjs-nextbutton').hide();
				$("#tabledataText3").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowOpenTag3').removeClass('opacity00');
					$('#tableRowOpenTag3').focus();
			  		typing('.introjs-tooltiptext',"Open the tablerow tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowOpenTag3", "<tr>");
					  	});
					});
				break; 
			case "tableRowCloseTag3" :
				$('.introjs-nextbutton').hide();
				$("#tableRowOpenTag3").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableRowCloseTag3').removeClass('opacity00');
					$('#tableRowCloseTag3').focus();
			  		typing('.introjs-tooltiptext',"Close the table row tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableRowCloseTag3", "</tr>");
					  	});
					});
				break; 
			case "row3" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenLite.to($(".data-cell-2"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
						$(".data-cell-2").effect('highlight',  {color: "#ff9900"}, 500);
						setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "tabledataOpenTag4" :
				$('.introjs-nextbutton').hide();
				$("#tableRowCloseTag3").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataOpenTag4').removeClass('opacity00');
					$('#tabledataOpenTag4').focus();
			  		typing('.introjs-tooltiptext',"Open the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataOpenTag4", "<td>");
					  	});
					});
				break; 
			case "tabledataCloseTag4" :
				$('.introjs-nextbutton').hide();
				$("#tabledataOpenTag4").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataCloseTag4').removeClass('opacity00');
					$('#tabledataCloseTag4').focus();
			  		typing('.introjs-tooltiptext',"Close the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataCloseTag4", "</td>");
					  	});
					});
				break; 
			case "tabledataText4" :
				$('.introjs-nextbutton').hide();
				$("#tabledataCloseTag4").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataText4').removeClass('opacity00');
					$('#tabledataText4').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>salary</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataText4", "salary");
					  	});
					});
				break;
			case "salary" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#salary').removeClass('opacity00');
					var l = $("#tabledataText4").offset();
					$("#salary").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#salary", 0.8, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
			  			setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break;
			case "tabledataOpenTag5" :
				$('.introjs-nextbutton').hide();
				$("#tabledataText4").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataOpenTag5').removeClass('opacity00');
					$('#tabledataOpenTag5').focus();
			  		typing('.introjs-tooltiptext',"Open the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataOpenTag5", "<td>");
					  	});
					});
				break; 
			case "tabledataCloseTag5" :
				$('.introjs-nextbutton').hide();
				$("#tabledataOpenTag5").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataCloseTag5').removeClass('opacity00');
					$('#tabledataCloseTag5').focus();
			  		typing('.introjs-tooltiptext',"Close the tabledata tag.<br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataCloseTag5", "</td>");
					  	});
					});
				break; 
			case "tabledataText5" :
				$('.introjs-nextbutton').hide();
				$("#tabledataCloseTag5").attr("contenteditable", false);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tabledataText5').removeClass('opacity00');
					$('#tabledataText5').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>integer</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tabledataText5", "integer");
					  	});
					});
				break; 
			case "integer1" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#integer1').removeClass('opacity00');
					var l = $("#tabledataText5").offset();
					$("#integer1").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#integer1", 0.8, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						intro.refresh();
						setTimeout(function(){
							intro.nextStep();
							}, 300); 
						}});
					});
				break; 
			case "tableType" :
				$('.introjs-nextbutton').hide();
				$('#bodyOpenTag').removeClass('z-index');
				$('#bodyClosedTag').removeClass('z-index');
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#tableType').removeClass('opacity00');
					$('#tableType').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>table {</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#tableType", "table {");
					  	});
					});
				break; 
			case "closeBracket" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#closeBracket').removeClass('opacity00');
					$('#closeBracket').focus();
			  		typing('.introjs-tooltiptext',"Type text.<span class='ct-code-b-yellow'>}</span><br><span class='errorText'></span>" ,function() { 
			  			textenter("#closeBracket", "}");
					  	});
					});
				break; 
			case "borderDotted" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#borderDotted').removeClass('opacity00');
					$('#borderDotted').focus();
			  		typing('.introjs-tooltiptext',"Select the border of the table<br><span class='errorText-border'></span>" ,function() { 
			  			$( ".select-border" ).on("change",function() {
			  				console.log("changeeeeeeeee");
			  				if ($(".select-border option:selected").attr('opt') === "select") {
			  					$('.introjs-nextbutton').hide();
			  					$('.errorText-border').html("Please select correct border of table");
				  				} else {
				  					$('.introjs-nextbutton').show();
				  					$('.errorText-border').empty();
				  				}
			  				});
					  	});
					});
				break; 
			case "restartBtn":
				$('.introjs-nextbutton').hide();
				$("#backgrouncolorAttr").attr("disabled", true);
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "Click to restart.", function() {
						$("#restartBtn").removeClass("opacity00");
						});
					});
				break;
			case "browserBox" :
				var animateStepTwo = intro._introItems[intro._currentStep].animateStepTwo;
				switch(animateStepTwo) {
				
				case 'rowspanAnimated':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#enterRowSpan").attr("contenteditable", false);
						TweenLite.to("#rowspan2", 3, {attr:{rowSpan: 2}, ease:Linear.easeNone});
						$("#rowspan2").effect('highlight',  {color: "#ff9900"}, 200);
						setTimeout(function(){
							intro.nextStep();
						}, 500); 
							//});
						});
					break;
				case 'colspanAnimated':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#enterRowSpan").attr("contenteditable", false);
						TweenLite.to("#colspan2", 3, {attr:{colSpan: 2}, ease:Linear.easeNone});
							$("#rowspan2").effect('highlight',  {color: "#ff9900"}, 200);
							setTimeout(function(){
								intro.nextStep();
								}, 500); 
							//});
						});
					break;
				case 'borderAttr':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#table').removeClass('opacity00');
						tableborder();
						$("#table").effect('highlight',  {color: "#ff9900"}, 200);
						setTimeout(function(){
							intro.nextStep();
							}, 1200); 
						});
					break;
					}
			break; 
			}
		});

	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	scrollTop();
	basicTags();
	});
 
function textenter(selector, value) {
	$(selector).keyup(function(e) {
		if (e.altKey && e.keyCode == 77) {
			$(this).text(value);
			console.log("altttttttttttttt");
		}
		$(selector).focus();
		intro.refresh();
		if ($(selector).text() == value) {
			console.log("value" + value);
			$('.introjs-nextbutton').show();
		  	$('.errorText').empty();
	  	} else {
	  		$('.errorText').html("Please type correctly.");
		  	$('.introjs-nextbutton').hide();
	    }
	});
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}
function basicTags() {
	zoomInEffect("#docType", function() {
		zoomInEffect("#htmlOpen", function() {
			zoomInEffect("#htmlClose", function() {
				zoomInEffect("#headOpen", function() {
					zoomInEffect("#headClose", function() {
						zoomInEffect("#titleTag", function() {
							zoomInEffect("#styleOpenTag", function() {
								zoomInEffect("#styleClosedTag", function() {
									$('.introjs-tooltip').removeClass("hide");
									var text = "Basic html page";
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
				});
			});
		});
	});
}
function tableborder() {
	if ($('.select-border option:selected').attr('opt') === 'black') {
		TweenLite.to($('#table'), 1, {css: {border: '1px solid rgba(192,192,192,3);'}, onComplete: function () {
    	}});
	} else if($('.select-border option:selected').attr('opt') === 'dotted') {
		TweenLite.to($('#table'), 1, {css: {border: 'thin dotted rgba(192,192,192,3);'}, onComplete: function () {
	    	console.log("dottedddddddddddddd");
		}});
	} else if($('.select-border option:selected').attr('opt') === 'dashed') {
		TweenLite.to($('#table'), 1, {css: {border: 'thin dashed rgba(192,192,192,3);'}, onComplete: function () {
			console.log("dashedddddddddddddddddd");
		}});
	}
}
function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
} 
function scrollTop() {
    window.scrollTo(0, 0);
}
</script>
</html>