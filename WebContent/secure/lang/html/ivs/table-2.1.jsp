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

<title>Introduction to Tables-3</title>
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
	color: #13B737;
}

.color-b-yellow {
	color: yellow;
	font-weight: bold;
}
.usr-text3 {
	border-width: 0px;
	background-color: transparent;
	width: 130px;
}

.usr-text {
	border-width: 0px;
	background-color: transparent;
	width: 65px;
}

.usr-text1 {
	border-width: 0px;
	background-color: transparent;
	width: 146px;
}

.errorText {
	color: red;
	font-weight: bold;
}

.usr-text2 {
	border-width: 0px;
	background-color: transparent;
	width: 89px;
}

.usr-text5 {
	border-width: 0px;
	background-color: transparent;
	width: 66px;
}

.usr-text7 {
	border-width: 0px;
	background-color: transparent;
	width: 195px;
}
.usr-text8 {
	border-width: 0px;
	background-color: transparent;
	width: 12px;
}
.usr-text9 {
	border-width: 0px;
	background-color: transparent;
	width: 45px;
}
.usr-text12 {
	border-width: 0px;
	background-color: transparent;
	width: 194px;
}
.usr-text13 {
	border-width: 0px;
	background-color: transparent;
	width: 286px;
}

.usr-text0 {
	border-width: 0px;
	background-color: transparent;
	width: 81px;
}

.usr-text14 {
	border-width: 0px;
	background-color: transparent;
	width: 166px;
}
.usr-text20 {
	border-width: 0px;
	background-color: transparent;
	width: 211px;
}

.padding-col0 {
	padding-left: 0px;
	padding-right: 0px;
}

.circle-css {
	border: 1px solid;
	border-radius: 2%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 2px solid #800000;
	border-radius: 4px;
}

body {
    font-size: 12px;
}

table, th, td  {
    border-spacing: 0px;
    border-collapse: unset;
}

#tableInBrowser, .head, .tabledata-1, .tabledata-2, .tabledata-3, .tabledata-4 {
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


ul.tabs > li{
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

.usr-text-codetantra {
	border: medium none;
	min-width: 20%; 
	background: none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.usr-text-enter {
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

caption {
	padding: 0;
}
</style>

<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Introduction to Tables-3</span>
</div>
<div class='container'>
<div class='col-xs-12'>
	<div class='col-xs-6' style='margin-top: 30px;'>
		<pre id='htmlTableCreation' class='creamPreTab4'><span id='docType' class='color-green opacity00'>&lt;!DOCTYPE html&gt;</span>
<span id='htmlOpen' class='color-green opacity00'>&lt;html&gt;</span>
<span id='headOpen' class='color-green opacity00'>&lt;head&gt;</span>
<span id='titleTag' class='opacity00'><span id='' class='color-green'>&lt;title&gt;</span><span>Introduction to Tables-3</span><span class='color-green'>&lt;/title&gt;</span></span>
<span id='styleOpenTag' class='color-green opacity00'>&lt;style&gt;</span>
<span  class=''><input type="text" maxlength="9" class="usr-text1 opacity00" id='border1Px'></span>
    <span><input type="text" maxlength="50" class="usr-text1 opacity00" id='colorAttr'></span>
    <span><input type="text" maxlength="50" class="usr-text20 opacity00" id='bgColorAttr'></span>
    <span><input type="text" maxlength="50" class="usr-text1 opacity00" id='fontWeightAttr'></span>
    <span><input type="text" maxlength="50" class="usr-text7 opacity00" id='textAlign'></span>
<span><input type="text" maxlength="1" class="usr-text8 opacity00" id='ClosedbracketForCaption'></span>
<input maxlength="25" class="usr-text20" id="tableInCss" type="text">
    <input type="text" maxlength="25" class="usr-text20  opacity00" id='bgColor'>
<input type="text" maxlength="1" class="usr-text8  opacity00" id='tableClosed'>
<input maxlength="25" class="usr-text20" id="tablenthchildEven" type="text">
    <input type="text" maxlength="25" class="usr-text20  opacity00" id='bgColorEven'>
<input type="text" maxlength="1" class="usr-text8  opacity00" id='ClosedEven'>
<span id='styleClosedTag' class='color-green opacity00'>&lt;/style&gt;</span>
<span id='headClose' class='color-green opacity00'>&lt;/head&gt;</span>
<span id='bodyOpenTag' class='color-green opacity00 z-index'>&lt;body&gt;</span>
<span><input type="text" maxlength="8" class="usr-text opacity00" id='tableOpenTag'></span>
<input type="text" maxlength="10" class="usr-text0 " id='captionOpenAttr'><input type="text" maxlength="23" class="usr-text14 opacity00" id='captionTitle'><input type="text" maxlength="10" class="usr-text0" id='captionCloseAttr'>
    <span id='rowSpan1' class='opacity00'><span class="usr-text9 " id='rowOpenTag'>&lt;tr&gt;</span>
       <span class="usr-text9 " id='testHeadOpenTag'>&lt;th&gt;</span><span class="usr-text2" id='testDataEnterTag'>Website</span><span class="usr-text9 " id='testHeadClosedTag'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testHeadOpenTag1'>&lt;th&gt;</span><span class="usr-text2" id='testDataEnterTag1'>Founder(s)</span><span class="usr-text9 " id='testHeadClosedTag1'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testHeadOpenTag2'>&lt;th&gt;</span><span class="usr-text2" id='testDataEnterTag2'>Year</span><span class="usr-text9" id='testHeadClosedTag2'>&lt;/th&gt;</span>
    <span class="usr-text9" id='rowClosedTag'>&lt;/tr&gt;</span></span>
    <span class='opacity00' id='rowSpan2'><span class="usr-text9" id='rowOpenTag1'>&lt;tr&gt;</span>
       <span class="usr-text9 " id='testDataOpenTag'>&lt;th&gt;</span><span class="usr-text2" id='numberOne'>Wikipedia</span><span class="usr-text9 " id='testDataClosedTag'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTag1'>&lt;th&gt;</span><span class="usr-text2" id='FounderName'>LarrySanger & JimmyWales</span><span class="usr-text9 " id='testDataClosedTag1'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTag2'>&lt;th&gt;</span><span class="usr-text2" id='Founded'>2001</span><span class="usr-text9 " id='testDataClosedTag2'>&lt;/th&gt;</span>
    <span class="usr-text9" id='rowClosedTag1'>&lt;/tr&gt;</span></span>
    <span class='opacity00' id='rowSpan3'><span class="usr-text9" id='rowOpenTag2'>&lt;tr&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast'>&lt;th&gt;</span><span class="usr-text2" id='numberTwo'>Youtube</span><span class="usr-text9 " id='testDataClosedTagLast'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast1'>&lt;th&gt;</span><span class="usr-text2" id='FounderName1'>ChadHurley, SteveChen & JawedKarim</span><span class="usr-text9 " id='testDataClosedTagLast1'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast2'>&lt;th&gt;</span><span class="usr-text2" id='Founded1'>2005</span><span class="usr-text9 " id='testDataClosedTagLast2'>&lt;/th&gt;</span>
    <span class="usr-text9" id='rowClosedTag2'>&lt;/tr&gt;</span></span>
    <span class='opacity00' id='rowSpan4'><span class="usr-text9" id='rowOpenTag2'>&lt;tr&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast'>&lt;th&gt;</span><span class="usr-text2" id='numberTwo'>Facebook</span><span class="usr-text9 " id='testDataClosedTagLast'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast1'>&lt;th&gt;</span><span class="usr-text2" id='FounderName1'>Mark Zuckerberg</span><span class="usr-text9 " id='testDataClosedTagLast1'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast2'>&lt;th&gt;</span><span class="usr-text2" id='Founded1'>2004</span><span class="usr-text9 " id='testDataClosedTagLast2'>&lt;/th&gt;</span>
    <span class="usr-text9" id='rowClosedTag2'>&lt;/tr&gt;</span></span>
    <span class='opacity00' id='rowSpan5'><span class="usr-text9" id='rowOpenTag2'>&lt;tr&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast'>&lt;th&gt;</span><span class="usr-text2" id='numberTwo'>Google</span><span class="usr-text9 " id='testDataClosedTagLast'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast1'>&lt;th&gt;</span><span class="usr-text2" id='FounderName1'>LarryPage&SergeyBrin</span><span class="usr-text9 " id='testDataClosedTagLast1'>&lt;/th&gt;</span>
       <span class="usr-text9 " id='testDataOpenTagLast2'>&lt;th&gt;</span><span class="usr-text2" id='Founded1'>1996</span><span class="usr-text9 " id='testDataClosedTagLast2'>&lt;/th&gt;</span>
    <span class="usr-text9" id='rowClosedTag2'>&lt;/tr&gt;</span></span>
<span><input type="text" maxlength="8" class="usr-text opacity00" id='tableClosedTag'></span>
<span id='bodyClosedTag' class='color-green opacity00 z-index'>&lt;/body&gt;</span>
<span id='htmlClose' class='color-green opacity00'>&lt;/html&gt;</span></pre>
</div>
	<div class='col-xs-6'>
	<div class='col-xs-12  padding-col0 opacity00' id='browser' style='margin-top: 30px; border: 1px solid black;'>
	
			<div id='tableTitleInBrowser' class='container' style="border: 1px solid grey;  padding: 0; width: 100%;">
				<div class='tab-container'>
					<ul class="tabs clearfix" >
						<li class="active" style="display: flex; align-items: center;">
							<div id='tableTitle' class="col-xs-10">Introduction to Tables-3</div>
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
						<span class='col-xs-10 padding0'><input type="text" maxlength="100" class="usr-text-codetantra" value='www.codetantra.com/w....' id='edittitle'></span>
						<span class='col-xs-1 padding0'><i class="fa fa-star-o fa-1x" aria-hidden="true"></i></span>
					</div>
					<div class='col-xs-2'>
						<div style='display: flex; align-items: center; border: 1px solid gray;'>
							<span class="col-xs-2 padding0" style=" display: flex; align-items: center;"><i class="fa fa-search fa-1x" aria-hidden="true" ></i></span>
							<span class="col-xs-10 padding0"><input type="text" maxlength="100" class="usr-text-enter" ></span>
						</div>
					</div>
					<div class='col-xs-2 padding0'  style='display: flex; align-items: center;'>	
						<span class='col-xs-4 text-center'><i class="fa fa-arrow-down fa-1x" aria-hidden="true"></i></span>
						<span class='col-xs-4 text-center'><i class="fa fa-home fa-1x" aria-hidden="true"></i></span>
						<span class='col-xs-4 text-center'><i  class="fa fa-bars fa-1x" aria-hidden="true"></i></span>
					</div>
				</div>
			</div>
			
			
			<div id='tableTotal' class='col-xs-12' style='margin-top: 10px;'>
				<table id='tableInBrowser'>
					<caption class='opacity00' id='captiontitleInOutput'>Founders of Websites</caption>
					   <tr id='row-1'>
					     <th id='hash' class='head opacity00 '><div class='opacity00 website'>Website</div></th>
					     <th id='name' class='head opacity00 '><div class='opacity00 founder'>Founder(s)</div></th>
					     <th id='founded' class='head opacity00'><div class='opacity00 year'>Year</div></th>
					   </tr>
					   <tr id='row-2'>
					     <td id='oneType' class='tabledata-1 opacity00'><div class='opacity00 wikipedia'>Wikipedia</div></td>
					     <td id='FounderNamesType' class='tabledata-1 opacity00'><div class='opacity00 larry-jimmy'>LarrySanger & JimmyWales</div></td>
					     <td id='wikipediainTable' class='tabledata-1 opacity00'><div class='opacity00 year-2001'>2001</div></td>
					   </tr>
						<tr  id='row-3'>
						  <td id='twoinTable' class='tabledata-2 opacity00'><div class='opacity00 youtube'>Youtube</div></td>
						  <td id='founderNameInTable' class='tabledata-2 opacity00'><div class='opacity00 stev-jaw-cha'>ChadHurley, SteveChen & JawedKarim</div></td>
						  <td id='mobileInTable' class='tabledata-2 opacity00'><div class='opacity00 year-2005'>2005</div></td>
						</tr>
						<tr  id='row-4'>
						  <td id='twoinTable' class='tabledata-3 opacity00'><div class='opacity00 facebook'>Facebook</div></td>
						  <td id='founderNameInTable' class='tabledata-3 opacity00'><div class='opacity00 markzuker'>Mark Zuckerberg</div></td>
						  <td id='mobileInTable' class='tabledata-3 opacity00'><div class='opacity00 year-2004'>2004</div></td>
						</tr>
						<tr  id='row-5'>
						  <td id='twoinTable' class='tabledata-4 opacity00'><div class='opacity00 google'>Google</div></td>
						  <td id='founderNameInTable' class='tabledata-4 opacity00'><div class='opacity00 larry-sergey'>LarryPage&SergeyBrin</div></td>
						  <td id='mobileInTable' class='tabledata-4 opacity00'><div class='opacity00 year-1996'>1996</div></td>
						</tr>
				</table> <br>
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
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#htmlTableCreation',
			intro :'',
			position:"right"
		},{
			element :'#browser',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			titleStep : 'browser1'
		},{
			element :'#tableOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableClosedTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#browser',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			titleStep : 'browser2'
		},{
			element :'#rowSpan1',
			intro :'',
			position:"bottom"
		},{
			element :'#row-1',
			intro :'',
			position:"bottom",
			tooltipClass: "hidden"
		},{
			element :'#rowSpan2',
			intro :'',
			position:"bottom"   
		},{
			element :'#row-2',
			intro :'',
			position:"bottom", 
			tooltipClass: "hidden"
		},{
			element :'#rowSpan3',
			intro :'',
			position:"bottom" 
		},{
			element :'#row-3',
			intro :'',
			position:"bottom", 
			tooltipClass: "hidden"
		},{
			element :'#rowSpan4',
			intro :'',
			position:"bottom" 
		},{
			element :'#row-4',
			intro :'',
			position:"bottom", 
			tooltipClass: "hidden"
		},{
			element :'#rowSpan5',
			intro :'',
			position:"bottom" 
		},{
			element :'#row-5',
			intro :'',
			position:"bottom", 
			tooltipClass: "hidden"
		},{
			element :'#tableTotal',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'tableInBrowser0' 
		},{
			element :'#captionOpenAttr',
			intro :'',
			position:"bottom" 
		},{
			element :'#captionCloseAttr',
			intro :'',
			position:"bottom"
		},{
			element :'#captionTitle',
			intro :'',
			position:"bottom"  
		},{
			element :'#tableTotal',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'tableInBrowser1' 
		},{
			element :'#border1Px',
			intro :'',
			position:"bottom" 
		},{
			element :'#ClosedbracketForCaption',
			intro :'',
			position:"bottom" 
		},{
			element :'#colorAttr',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableTotal',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'tableInBrowser3'
		},{
			element :'#bgColorAttr',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableTotal',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'tableInBrowser4'
		},{
			element :'#fontWeightAttr',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableTotal',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'tableInBrowser5'
		},{
			element :'#textAlign',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableTotal',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'tableInBrowser6'
		},{
			element :'#tableInCss',
			intro :'',
			position:"bottom",
		},{
			element :'#tableClosed',
			intro :'',
			position:"bottom",
		},{
			element :'#bgColor',
			intro :'',
			position:"bottom", 
		},{
			element :'#tableInBrowser',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'table' 
		},{
			element :'#tablenthchildEven',
			intro :'',
			position:"bottom", 
		},{
			element :'#ClosedEven',
			intro :'',
			position:"bottom", 
		},{
			element :'#bgColorEven',
			intro :'',
			position:"bottom", 
		},{
			element :'#tableInBrowser',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden',
			animateStep : 'table1' 
		}, {
			element :'#restartBtn', 
			intro :'',
			position:"right"
		}]
	});
	
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "browser" :
			 var titleStep = intro._introItems[intro._currentStep].titleStep;
			   switch(titleStep) {
				case 'browser1':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#browser').removeClass('opacity00');
						console.log("browser");
						setTimeout(function(){
							intro.nextStep();
							}, 500); 
						});
				break;
				case 'browser2':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						TweenLite.to($("#tableInBrowser"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
							$("table").effect('highlight',  {color: "#ff9900"}, 2000);
							 setTimeout(function(){
								intro.nextStep();
								}, 500); 
							}});
						});
					break;
				  }
			break;
		case "tableOpenTag" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableOpenTag').removeClass('opacity00');
				$("#tableOpenTag").attr("disabled", false);
				$('#tableOpenTag').focus();
		  		typing('.introjs-tooltiptext',"Open a table tag.<br><span class='errorText'></span>" ,function() { 
		  			textenter("#tableOpenTag", "<table>");
		  			});
				});
			break;
		case "tableClosedTag" :
			$("#tableOpenTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableClosedTag').removeClass('opacity00');
				$('#tableClosedTag').focus();
		  		typing('.introjs-tooltiptext',"Close table tag.<br><span class='errorText'></span>" ,function() { 
		  			textenter("#tableClosedTag", "</table>");
		  			});
				});
			break;
		case "rowSpan1" :
			scrollTop();
			$("#tHeadClosedTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
				$('#rowSpan1').removeClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowOpenTag').focus();
				var text = "first row"
		  		typing('.introjs-tooltiptext', text, function() {
		  			$('.introjs-nextbutton').show();
					});
				});
			break;
		case "row-1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".head").removeClass("opacity00");
				TweenLite.to($(".head"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$(".website").removeClass("opacity00");
					$(".founder").removeClass("opacity00");
					$(".year").removeClass("opacity00");
					$("#row-1").effect('highlight',  {color: "#ff9900"}, 2000);
					setTimeout(function(){
						intro.nextStep();
						}, 500);
					}});
				});
			break;
		case "rowSpan2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowSpan2').removeClass('opacity00');
				intro.refresh();
		  		typing('.introjs-tooltiptext',"row-2" ,function() { 
		  			$('.introjs-nextbutton').show();
		  			});
				});
			break;
		case "row-2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".tabledata-1").removeClass("opacity00");
				TweenLite.to($(".tabledata-1"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$(".wikipedia").removeClass("opacity00");
					$(".larry-jimmy").removeClass("opacity00");
					$(".year-2001").removeClass("opacity00");
					$("#row-2").effect('highlight',  {color: "#ff9900"}, 2000);
					setTimeout(function(){
						intro.nextStep();
						}, 500);
					}});
				});
			break;
		case "rowSpan3" :
			$("#rowOpenTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowSpan3').removeClass('opacity00');
				intro.refresh();
		  		typing('.introjs-tooltiptext',"row-3" ,function() { 
		  			$('.introjs-nextbutton').show();
		  			});
				});
			break;
		case "row-3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".tabledata-2").removeClass("opacity00");
				TweenLite.to($(".tabledata-2"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$(".youtube").removeClass("opacity00");
					$(".stev-jaw-cha").removeClass("opacity00");
					$(".year-2005").removeClass("opacity00");
					$("#row-3").effect('highlight',  {color: "#ff9900"}, 2000);
					setTimeout(function(){
						intro.nextStep();
						}, 500);
					}});
				});
			break;
		case "rowSpan4" :
			$("#rowOpenTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowSpan4').removeClass('opacity00');
				intro.refresh();
		  		typing('.introjs-tooltiptext',"row-4" ,function() { 
		  			$('.introjs-nextbutton').show();
		  			});
				});
			break;
		case "row-4" :
			scrollTop();
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".tabledata-3").removeClass("opacity00");
				TweenLite.to($(".tabledata-3"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$(".facebook").removeClass("opacity00");
					$(".markzuker").removeClass("opacity00");
					$(".year-2004").removeClass("opacity00");
					$("#row-4").effect('highlight',  {color: "#ff9900"}, 2000);
					setTimeout(function(){
						intro.nextStep();
						}, 500);
					}});
				});
			break;
		case "rowSpan5" :
			$("#rowOpenTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowSpan5').removeClass('opacity00');
				intro.refresh();
		  		typing('.introjs-tooltiptext',"row-5" ,function() { 
		  			$('.introjs-nextbutton').show();
		  			});
				});
			break;
		case "row-5" :
			scrollTop();
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".tabledata-4").removeClass("opacity00");
				TweenLite.to($(".tabledata-4"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$(".google").removeClass("opacity00");
					$(".larry-sergey").removeClass("opacity00");
					$(".year-1996").removeClass("opacity00");
					$("#row-5").effect('highlight',  {color: "#ff9900"}, 2000);
					setTimeout(function(){
						intro.nextStep();
						}, 500);
					}});
				});
			break;
		case "captionOpenAttr" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#captionOpenAttr').removeClass('opacity00');
				$('#captionOpenAttr').focus();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>&lt;caption&gt;</span>"+
				"<br><span class='errorText'></span>" ,function() {
		  			textenter("#captionOpenAttr", "<caption>");		
				  	});
				});
			break;
		case "captionCloseAttr" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#captionCloseAttr').removeClass('opacity00');
				$('#captionCloseAttr').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>&lt;/caption&gt;</span><br>"+
				"<span class='errorText'></span>" ,function() {
		  			textenter("#captionCloseAttr", "</caption>");		
				  	});
				});
			break;
		case "captionTitle" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#captionTitle').removeClass('opacity00');
				$('#captionTitle').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e.<br><span class='color-b-yellow'>Founders of Websites</span>"+
						"<br><span class='errorText'></span>" ,function() {
		  			textenter("#captionTitle", "Founders of Websites");		
				  	});
				});
			break; 
		 case "tableTotal" :
			 var animateStep = intro._introItems[intro._currentStep].animateStep;
			   switch(animateStep) {
			  
			   case "tableInBrowser0" :
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#tableTotal').removeClass('opacity00');
						setTimeout(function(){
							intro.nextStep();
							}, 1000);
						});
					break;
				case 'tableInBrowser1':
					intro.refresh();
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						var l = $("#captionTitle").offset();
						$("#captiontitleInOutput").offset({"top": l.top,"left": l.left});
			       		TweenMax.to("#captiontitleInOutput", 0.8, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
							$('#captiontitleInOutput').removeClass('opacity00');
							intro.refresh();
					  		typing('.introjs-tooltiptext',"Text." ,function() { 
					  			setTimeout(function(){
									intro.nextStep();
									}, 1000);
								});
							}});	
						});
					break;
				case 'tableInBrowser3':
			    	 $('.introjs-nextbutton').hide();
						intro.refresh();
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#colorAttr').addClass('circle-css');
							$("#colorAttr").addClass("blink").effect("transfer", {to: $("#captiontitleInOutput"), className: "ui-effects-transfer"}, 1500, function() {
							TweenMax.to("#captiontitleInOutput", 2 ,{css: {color:"orange"}});
					  			$('#colorAttr').removeClass('circle-css');
					  			setTimeout(function(){
									intro.nextStep();
									}, 1300);
								});
							});
						break;
				case 'tableInBrowser4':
			    	 $('.introjs-nextbutton').hide();
						intro.refresh();
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#bgColorAttr').addClass('circle-css');
							$("#bgColorAttr").addClass("blink").effect("transfer", {to: $("#captiontitleInOutput"), className: "ui-effects-transfer"}, 1500, function() {
							TweenMax.to("#captiontitleInOutput", 2 ,{css: {backgroundColor:"#7d1935"}});
					  			$('#bgColorAttr').removeClass('circle-css');
					  			setTimeout(function(){
									intro.nextStep();
									}, 1300);
								});
							});
						break;
				case 'tableInBrowser5':
			    	 $('.introjs-nextbutton').hide();
						intro.refresh();
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#fontWeightAttr').addClass('circle-css');
							$("#fontWeightAttr").addClass("blink").effect("transfer", {to: $("#captiontitleInOutput"), className: "ui-effects-transfer"}, 1500, function() {
							TweenMax.to("#captiontitleInOutput", 2 ,{css: {fontWeight:"bold"}});
					  			$('#fontWeightAttr').removeClass('circle-css');
					  			setTimeout(function(){
									intro.nextStep();
									}, 1300);
								});
							});
						break;
				case 'tableInBrowser6':
			    	 $('.introjs-nextbutton').hide();
						intro.refresh();
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#textAlign').addClass('circle-css');
							$("#textAlign").addClass("blink").effect("transfer", {to: $("#captiontitleInOutput"), className: "ui-effects-transfer"}, 1500, function() {
							TweenMax.to("#captiontitleInOutput", 2 ,{css: {textAlign:"center"}});
					  			$('#textAlign').removeClass('circle-css');
					  			setTimeout(function(){
									intro.nextStep();
									}, 1300);
								});
							});
						break;
				} 
			break;
		case "border1Px" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#border1Px').removeClass('opacity00');
				$('#border1Px').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>caption {</span><br>"+
					"<span class='errorText'></span>" ,function() {
		  			textenter("#border1Px", "caption {");		
				  	});
				});
			break; 
		case "ClosedbracketForCaption" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#ClosedbracketForCaption').removeClass('opacity00');
				$('#ClosedbracketForCaption').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>}</span><br><span class='errorText'></span>" ,function() {
		  			textenter("#ClosedbracketForCaption", "}");		
				  	});
				});
			break;
		case "colorAttr" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#colorAttr').removeClass('opacity00');
				$('#colorAttr').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type a color property i.e.<br><span class='color-b-yellow'>color: orange;</span><br>"+
				"<span class='errorText'></span>" ,function() {
		  			textenter("#colorAttr", "color: orange;");		
				  	});
				});
			break; 
		case "bgColorAttr" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#bgColorAttr').removeClass('opacity00');
				$('#bgColorAttr').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type a background-color property i.e.<br><span class='color-b-yellow'>background-color: #7d1935;</span><br>"+
				"<span class='errorText'></span>" ,function() {
		  			textenter("#bgColorAttr", "background-color: #7d1935;");		
				  	});
				});
			break; 
		case "fontWeightAttr" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#fontWeightAttr').removeClass('opacity00');
				$('#fontWeightAttr').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type a font-weight property i.e.<br><span class='color-b-yellow'>font-weight: bold;</span><br>"+
				"<span class='errorText'></span>" ,function() {
		  			textenter("#fontWeightAttr", "font-weight: bold;");		
				  	});
				});
			break; 
		case "textAlign" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#textAlign').removeClass('opacity00');
				$('#textAlign').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type a text-align property i.e.<br><span class='color-b-yellow'>text-align: center;</span><br>"+
				"<span class='errorText'></span>" ,function() {
		  			textenter("#textAlign", "text-align: center;");		
				  	});
				});
			break; 
		case "tableInCss":
			$('.introjs-nextbutton').hide();
			$("#FontweightAttr").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableInCss').removeClass("opacity00");
				$('#tableInCss').focus();
				typing('.introjs-tooltiptext', "Type a  table style and open curly brace i.e.<br><span class='color-b-yellow'>table tr:nth-child(odd) {</span><br>"+
					"<span class='errorText'></span>", function() {
					textenter("#tableInCss", "table tr:nth-child(odd) {");	
					});
				});
			break;
		case "tableClosed":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableClosed').removeClass("opacity00");
				$('#tableClosed').focus();
				typing('.introjs-tooltiptext', "Close curly brace i.e. <span class='color-b-yellow'>}</span><br><span class='errorText'></span>", function() {
					textenter("#tableClosed", "}");	
					});
				});
			break;
		case "bgColor":
			$('.introjs-nextbutton').hide();
			$("#FontweightAttr").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#bgColor').removeClass("opacity00");
				$('#bgColor').focus();
				typing('.introjs-tooltiptext', "Type a  background-color property i.e.<br><span class='color-b-yellow'>background-color: #50d07d;</span><br>"+
				"<span class='errorText'></span>", function() {
					textenter("#bgColor", "background-color: #50d07d;");	
					});
				});
			break;
		case "tablenthchildEven":
			$('.introjs-nextbutton').hide();
			$("#bgColorCell1").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tablenthchildEven').removeClass("opacity00");
				$('#tablenthchildEven').focus();
				typing('.introjs-tooltiptext', "Type a  table style and open curly brace i.e.<br><span class='color-b-yellow'>table tr:nth-child(odd) {</span><br>"+
					"<span class='errorText'></span>", function() {
					textenter("#tablenthchildEven", "table tr:nth-child(even) {");	
					});
				});
			break;
		case "ClosedEven":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#ClosedEven').removeClass("opacity00");
				$('#ClosedEven').focus();
				typing('.introjs-tooltiptext', "Close curly brace i.e. <span class='color-b-yellow'>}</span><br><span class='errorText'></span>", function() {
					textenter("#ClosedEven", "}");	
					});
				});
			break;
		case "bgColorEven":
			$('.introjs-nextbutton').hide();
			$("#ClosedEven").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#bgColorEven').removeClass("opacity00");
				$('#bgColorEven').focus();
				typing('.introjs-tooltiptext', "Type a  background-color property i.e.<br><span class='color-b-yellow'>background-color: #ffd500;</span><br>"+
				"<span class='errorText'></span>", function() {
					textenter("#bgColorEven", "background-color: #ffd500;");	
					});
				});
			break;
		case "tableInBrowser":
			 var animateStep = intro._introItems[intro._currentStep].animateStep;
			 switch(animateStep) {
			
			case 'table':
				$('.introjs-nextbutton').hide();
				$("#bgColor").attr("disabled", true);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('tr:nth-child(odd)').css("background", "#50d07d");
					setTimeout(function(){
						intro.nextStep();
						}, 1000);
					});
				break;
					
			  case 'table1':
				$('.introjs-nextbutton').hide();
				$("#bgColor").attr("disabled", true);
				$(".introjs-helperLayer").one("transitionend", function() {
					$('tr:nth-child(even)').css("background", "#ffd500");
					setTimeout(function(){
						intro.nextStep();
						}, 1000);
					});
				break;
			 	}
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
			}
		});

	intro.start();
	scrollTop()
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$("#tableOpenTag").attr("disabled", true);
	basicTags();
	});
function textenter(selector, value) {
	$(selector).keyup(function(e) {
		if (e.altKey && e.keyCode == 77) {
			$(this).val(value);
		}
		if ($(selector).val() == value.toLowerCase() || $(selector).val() == value.toUpperCase() || $(selector).val() == value.trim()) {
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
							zoomInEffect("#bodyOpenTag", function() {
								zoomInEffect("#bodyClosedTag", function() {
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
		});
	});
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