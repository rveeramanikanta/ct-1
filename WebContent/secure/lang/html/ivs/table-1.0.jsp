<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>

<title>Introduction to Tables</title>
<style>

#totaldiv {
	margin-top: 15px;
}

pre {
	tab-size: 3;
	-moz-tab-size: 3;
}

.usr-text {
	border-width: 0px;
	background-color: transparent;
}

.errorText {
	color: red;
	font-weight: bold;
}

#tableBox, .tableData, .tablehead, .tableData1 {
	border: 2px solid rgba(192,192,192,0);
	position: relative;
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
	border: 2px solid orange;
	border-radius: 4px;
}

table {
    border-collapse: unset; 
    border-spacing: 2px;
}

body {
    font-size: 12px;
}

#htmlTableCreation {
	font-size: 11px;
}

.margin-top-2 {
	margin-top: 2%;
}

.padding0 {
	padding: 0;
}

.border-css {
	border: 1px solid grey;
}

.container {
	padding: 0px;
	margin-top: 30px;
	margin: 0;
}

.active {
	display: flex;
	align-items: center;
}

.browser-css {
	margin-top: 3px;
}

.plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
	margin-bottom: 5px;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

ul.tabs > li.active {
	background: #efefef;
}

ul.tabs > li {
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
	height:25px;
	padding: 0;
	overflow:visible;
}

.user-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
	padding-left: 5px;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	min-height: 150px;
	border-top: 1px solid gray;
	padding: 10px;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}
</style>
</head>
<body>
	<div class="col-xs-12 padding0 margin-top20 text-center"><h1 class="label ct-demo-heading">Introduction to Tables</h1></div>
<div class='col-xs-12'>
	<div class='col-xs-5' style='margin-top: 20px;'>
	<pre id='htmlTableCreation'>&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Tables&lt;/title&gt;
		&lt;style&gt;  
			<input maxlength="15" id='border1Px'>
   				<input maxlength="11" id='widthAttr'>
   				<input maxlength="26" id='borderCollapse'>
			<input maxlength="1" id='closeBraceOftable'>	
			<input maxlength="8" id='tdThAttr'>
   				<input maxlength="20" id='textalignAttr'>
   				<input maxlength="13" id='paddingAttr'>
			<input maxlength="1" id='closedTagForTdTh'>
			<input maxlength="4" id='thAttr'>
   				<input maxlength="27" id='backgrouncolorAttr'>
			<input maxlength="1" id='closedbracketForTh'>
		&lt;/style&gt;
	&lt;/head&gt;
	&lt;body&gt;     
		<input maxlength="8" id='tableOpenTag'>
			<input maxlength="7" id='tHeadOpenTag'>
				<input maxlength="4" id='rowOpenTag'>
					<input id='testHeadOpenTag' maxlength="4"><input maxlength="4" id='testDataEnterTag'> <input maxlength="5" id='testHeadClosedTag'>
					<input maxlength="4" id='testHeadOpenTag1'><input maxlength="11" id='testDataEnterTag1'> <input maxlength="5" id='testHeadClosedTag1'>
					<input maxlength="4" id='testHeadOpenTag2'><input maxlength="7" id='testDataEnterTag2'> <input maxlength="5" id='testHeadClosedTag2'> 
				<input maxlength="5" id='rowClosedTag'>
			<input maxlength="8" id='tHeadClosedTag'>
			<input maxlength="7" id='tbodyOpenTag'>
     			<input maxlength="4" id='rowOpenTag1'>
					<input maxlength="4" id='testDataOpenTag'><input maxlength="7" id='numberOne'> <input maxlength="5" id='testDataClosedTag'>
					<input maxlength="4" id='testDataOpenTag1'><input maxlength="7" id='FounderName'> <input maxlength="5" id='testDataClosedTag1'>
					<input maxlength="4" id='testDataOpenTag2'><input maxlength="5" id='Founded'> <input maxlength="5" id='testDataClosedTag2'> 
     			<input maxlength="5" opacity00" id='rowClosedTag1'>
     			<input maxlength="4" id='rowOpenTag2'>
					<input maxlength="4" id='testDataOpenTagLast'><input maxlength="8" id='numberTwo'> <input maxlength="5" id='testDataClosedTagLast'>
					<input maxlength="4" id='testDataOpenTagLast1'><input maxlength="11" id='FounderName1'> <input maxlength="5" id='testDataClosedTagLast1'>
					<input maxlength="4" id='testDataOpenTagLast2'><input maxlength="3" id='Founded1'> <input maxlength="5" id='testDataClosedTagLast2'> 
     			<input maxlength="5" id='rowClosedTag2'>
     		<input maxlength="8" id='tbodyClosedTag'>
		<input maxlength="8" id='tableClosedTag'>
	&lt;/body&gt;     
&lt;/html&gt;</pre>
</div>
<div class='col-xs-6 col-xs-offset-1' >
	<div class='padding0 opacity00 col-xs-12' id='tableOutPut' style='margin-top: 50px; border: 1px solid black'></div>
		<div class="button col-xs-12 text-center " id="button">
			<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	creatingBrowser();
	for (var i = 0; i <= $('#htmlTableCreation input').length; i++) {
		var t = $('#htmlTableCreation input').eq(i).attr('id');
		$('#' + t).attr({'type' : 'text', 'spellcheck' : 'false', 'size': $('#' + t).attr('maxlength')}).addClass('usr-text opacity00');
	}
	initIntroJS();
	$('#restartBtn').click(function() {
		window.location.search = "?restart=1";
	});
});

function creatingBrowser() {	//browser
	$("#tableOutPut").append('<div id="tableTitleInBrowser" class="col-xs-12 padding0 margin-top10 container border-css">'
					+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding0"'
					+ ' id="browserHeading">Tables</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
					+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
					+ '<div class="col-xs-12 padding0 browser-css"><div class="col-xs-2 padding0 text-center">'
					+ '<span id="arrowCircle" class="col-xs-4 padding0"><i class="fa fa-arrow-left arrow"></i></span>'
					+ '<span class="col-xs-4 padding0"><i class="fa fa-arrow-right arrow"></i></span>'
					+ '<span class="col-xs-4 padding0"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
					+ '<div class="col-xs-8 padding0 text-center url"><input type="text"'
					+ 'class="user-text padding0" id="inputId" value="https://www.codetantra.com/webdevelopment/table.html" disabled>'
					+ '<span class="col-xs-1 padding0"><i class="fa fa-star-o fa-1x"></i></span></div>'
					+ '<div class="col-xs-2 padding0 fa-display text-center">'
					+ '<span class="col-xs-6 padding0"><i class="fa fa-home fa-1x"></i></span>'
					+ '<span class="col-xs-6 padding0"><i class="fa fa-bars fa-1x"></i></span></div></div>'
					+ '<div class="col-xs-12 html-body" id="htmlBody"></div></div>');
	tableAppend();
}

function tableAppend() {
	$('#htmlBody').append("<div class='col-xs-12' style='margin-top: 10px;'><table id='tableBox'><thead><tr id='row1'>"
				+ " <th id='hash' class='tablehead'><span class='div-border opacity00' id='game'>Game</span></th>"
				+ " <th id='name' class=' tablehead'><div class='div-border opacity00' id='player'>Player Name</div></th>"
				+ " <th id='founded' class=' tablehead'><div class='div-border opacity00' id='country'>Country</div></th></tr></thead><tbody>"
				+ " <tr id='row2'><td id='oneType' class=' tableData'><div class='div-border opacity00' id='cricket'>Cricket</div></td>"
				+ " <td id='FounderNamesType' class='tableData'><div class='div-border opacity00' id='dhoni'>MSDhoni</div></td>"
				+ " <td id='wikipediainTable' class='tableData'><div class='div-border opacity00' id='india'>India</div></td></tr>"
				+ " <tr id='row3'><td id='twoinTable' class=' tableData1'><div class='div-border opacity00' id='football'>Football</div></td>"
				+ " <td id='founderNameInTable' class=' tableData1'><div class='div-border opacity00' id='messi'>LionelMessi</div></td> <td "
				+ "id='mobileInTable' class=' tableData1'><div class='div-border opacity00' id='usa'>USA</div></td></tr></tbody></table><br></div>");	
}

function initIntroJS() {
	intro = introJs();
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
			element :'#tableOutPut',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableClosedTag',
			intro :'',
			position:"right" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom", 
			tooltipClass:"hidden"
		},{
			element :'#tHeadOpenTag',
			intro :'',
			position:"bottom"
		},{
			element :'#tHeadClosedTag',
			intro :'',
			position:"right" 
		},{
			element :'#rowOpenTag',
			intro :'',
			position:"bottom"
		},{
			element :'#rowClosedTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag',
			intro :'',
			position:"bottom"   
		},{
			element :'#testHeadClosedTag',
			intro :'',
			position:"bottom"  
		},{
			element :'#testDataEnterTag',
			intro :'',
			position:"bottom",
		},{
			element :'#hash',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#testHeadClosedTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataEnterTag1',
			intro :'',
			position:"bottom",
		},{
			element :'#name',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#testHeadClosedTag2',
			intro :'',
			position:"bottom"   
		},{
			element :'#testDataEnterTag2',
			intro :'',
			position:"bottom",
		},{
			element :'#founded',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tbodyOpenTag',
			intro :'',
			position:"bottom"  
		},{
			element :'#tbodyClosedTag',
			intro :'',
			position:"right"  
		},{
			element :'#rowOpenTag1',
			intro :'',
			position:"bottom"  
		},{
			element :'#rowClosedTag1',
			intro :'',
			position:"bottom"  
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#testDataClosedTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#numberOne',
			intro :'',
			position:"bottom",
		},{
			element :'#cricket',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag1',
			intro :'',
			position:"bottom" 
		},{
			element :'#testDataClosedTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#FounderName',
			intro :'',
			position:"bottom",
		},{
			element :'#dhoni',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataClosedTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#Founded',
			intro :'',
			position:"bottom"  
		},{
			element :'#india',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#rowOpenTag2',
			intro :'',
			position:"bottom" 
		},{
			element :'#rowClosedTag2',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTagLast',
			intro :'',
			position:"bottom" 
		},{
			element :'#testDataClosedTagLast',
			intro :'',
			position:"bottom"
		},{
			element :'#numberTwo',
			intro :'',
			position:"bottom",
		},{
			element :'#football',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTagLast1',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataClosedTagLast1',
			intro :'',
			position:"bottom"
		},{
			element :'#FounderName1',
			intro :'',
			position:"bottom",
		},{
			element :'#messi',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTagLast2',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataClosedTagLast2',
			intro :'',
			position:"bottom"
		},{
			element :'#Founded1',
			intro :'',
			position:"bottom",
		},{
			element :'#usa',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"  
		},{
			element :'#tableBox',
			intro :'',
			position:"bottom", 
		},{
			element :'#border1Px',
			intro :'',
			position:"right" 
		},{
			element :'#closeBraceOftable',
			intro :'',
			position:"right"
		},{
			element :'#widthAttr',
			intro :'',
			position:"right",
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#borderCollapse',
			intro :'',
			position:"right" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		 },{
			element :'#tdThAttr',
			intro :'',
			position:"right" 
		 },{
			element :'#closedTagForTdTh',
			intro :'',
			position:"right" 
		 },{
			element :'#textalignAttr',
			intro :'',
			position:"bottom"
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#paddingAttr',
			intro :'',
			position:"bottom"
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden" 
		},{
			element :'#thAttr',
			intro :'',
			position:"right" 
		},{
			element :'#closedbracketForTh',
			intro :'',
			position:"right"
		},{
			element :'#backgrouncolorAttr',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		switch (elementId) {
		
		case "tableOutPut" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._currentStep == 1) {
					zoomInEffect('#tableOutPut', function() {
						typing('.introjs-tooltiptext',"The given title displays here" ,function() { 
							$('.introjs-nextbutton').show();
				  	  	});
					});
				} else if (intro._currentStep == 4) {
					scrollTopWithTweenMax("#tableBox", "#tableBox");
				/* scrollTop();
				TweenLite.to($("#tableBox"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$("#tableBox").effect('highlight',  {color: "#ff9900"}, 2000);
					 setTimeout(function(){
						intro.nextStep();
						}, 500); 
				}}); */
				} else if (intro._currentStep == 9) {
					scrollTopWithTweenMax(".tablehead", "#row1");
				} else if (intro._currentStep == 26) {
					scrollTopWithTweenMax(".tableData", "#row2");
				} else if (intro._currentStep == 41) {
					scrollTopWithTweenMax(".tableData1", "#row3");
		  		} else	if (intro._currentStep == 58) {
		  			intro.refresh();
						typing('.introjs-tooltiptext',"sdf" ,function() {
							$('#widthAttr').addClass('circle-css');
							$("#widthAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
								TweenMax.to("#tableBox", 2,{css: {width:"82%"}});
								$('#widthAttr').removeClass('circle-css');
								setTimeout(function(){
									intro.nextStep();
									}, 3000);
							});
						});
			  		} else if (intro._currentStep == 60) {
						$('#borderCollapse').addClass('circle-css');
						$("#borderCollapse").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
						TweenMax.to("#tableBox",1,{delay:0.5,css:{borderCollapse:"collapse"}});
							typing('.introjs-tooltiptext',"padding" ,function() {
								$('#borderCollapse').removeClass('circle-css');
								 setTimeout(function(){
									intro.nextStep();
									}, 2500);
							});
						 });
					} else if (intro._currentStep == 64) {
						$('#textalignAttr').addClass('circle-css');	
						$("#textalignAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
							TweenMax.to("#tableBox, .tablehead",1,{delay:0.5,css:{textAlign:"center"}});
				  			intro.refresh();
							typing('.introjs-tooltiptext',"padding" ,function() {
								$('#textalignAttr').removeClass('circle-css');
								setTimeout(function(){
									intro.nextStep();
									}, 2400);
							});
						 });
					} else if (intro._currentStep == 66) {
						typing('.introjs-tooltiptext',"padding" ,function() {
							$('#paddingAttr').addClass('circle-css');
							$("#paddingAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
					  			TweenMax.to("#tableBox, .tablehead, .tableData",1,{delay:0.3,css:{color:"green"}});
								intro.refresh();
					  			$('#paddingAttr').removeClass('circle-css');
					  			setTimeout(function(){
									intro.nextStep();
								}, 2800);
							});
						 });
					} else if (intro._currentStep == 70) {
						intro.refresh();
						$('#backgrouncolorAttr').addClass('circle-css');
							$("#backgrouncolorAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
								TweenMax.to(".tablehead",1,{delay:0.5,css:{backgroundColor:"yellow"}});
								typing('.introjs-tooltiptext',"padding" ,function() {
									$('#backgrouncolorAttr').removeClass('circle-css');
									 setTimeout(function(){
										intro.nextStep();
										}, 3700); 
								});
							});
					}
			});
			break;
			case "tableOpenTag" :
				scrollTop();
				text = "Open a table tag here i.e. <span class='ct-code-b-yellow'>&lt;table&gt;</span>.";
				typingNValidation(text, elementId, "<table>");
			break;
			case "tableClosedTag" :
				text = "Close table tag here i.e. <span class='ct-code-b-yellow'>&lt;/table&gt;</span>.";
				typingNValidation(text, elementId, "</table>");
			break;
			case "tHeadOpenTag" :
				text = "Open a tablehead tag here i.e. <span class='ct-code-b-yellow'>&lt;thead&gt;</span>"
		  				+ "<ul><li>The <span class='ct-code-b-yellow'>&lt;thead&gt;</span> tag is used to group header content in "
		  				+ "<span class='ct-code-b-yellow'>HTML</span> table.</li></ul>";
				typingNValidation(text, elementId, "<thead>");
			break;
			case "tHeadClosedTag" :
				text = "Close a tablehead tag here i.e. <span class='ct-code-b-yellow'>&lt;/thead&gt;</span>.";
				typingNValidation(text, elementId, "</thead>");
			break;
			case "rowOpenTag" :
				var text = "Open a tablerow tag here i.e. <span class='ct-code-b-yellow'>&lt;tr&gt;</span>." 
							+ "<ul><li>The <span class='ct-code-b-yellow'>&lt;tr&gt;</span> defines a row in " 
							+ "<span class='ct-code-b-yellow'>HTML</span> table.</li>" 
							+ "<li>A <span class='ct-code-b-yellow'>&lt;tr&gt;</span> element contains one or more" 
							+ " <span class='ct-code-b-yellow'>&lt;th&gt;</span> or <span class='ct-code-b-yellow'>&lt;td&gt;</span> " 
							+ "elements.</li></ul><span class='errorText'></span>"
				typingNValidation(text, elementId, "<tr>");
			break;
			case "rowClosedTag" :
				text = "Close the tablerow tag here i.e. <span class='ct-code-b-yellow'>&lt;/tr&gt;</span>.";
				typingNValidation(text, elementId, "</tr>");
			break;
			case "testHeadOpenTag" :
				text = "Open header cell tag here i.e. <span class='ct-code-b-yellow'>&lt;th&gt;</span>."
		  				+ "<ul><li>The <span class='ct-code-b-yellow'>&lt;th&gt;</span> tag defines a header cell in  "
		  				+ "<span class='ct-code-b-yellow'>HTML</span> table.</li><li>The text in <span class='ct-code-b-yellow'>&lt;th&gt;</span>"
		  				+ " elements are bold.</li></ul>";
				typingNValidation(text, elementId, "<th>");
			break;  
			case "testHeadClosedTag" :
				text = "Close the header cell tag here i.e. <span class='ct-code-b-yellow'>&lt;/th&gt;</span>.";
				typingNValidation(text, elementId, "</th>");
			break; 
			case "testDataEnterTag" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>Game</span>.";
				typingNValidation(text, elementId, "Game");
			break;
			//case "game" :
			case "hash" :
				tdAnimation('#game', '#testDataEnterTag');
			break;
			case "testHeadOpenTag1" :
				intro.refresh();
				text = "Open header cell tag here i.e. <span class='ct-code-b-yellow'>&lt;th&gt;</span>.";
				typingNValidation(text, elementId, "<th>");	
			break;
			case "testHeadClosedTag1" :
				text = "Close the header cell tag here i.e. <span class='ct-code-b-yellow'>&lt;/th&gt;</span>.";
				typingNValidation(text, elementId, "</th>");
			break;
			case "testDataEnterTag1" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>Player Name</span>";
				typingNValidation(text, elementId, "Player Name");
			break;
			case "name" :
				tdAnimation('#player', '#testDataEnterTag1');
			break;
			case "testHeadOpenTag2" :
				$("#name").removeClass("display-block");
				text = "Open header cell tag here i.e. <span class='ct-code-b-yellow'>&lt;th&gt;</span>.";
				intro.refresh();
				typingNValidation(text, elementId, "<th>");
			break;
			case "testHeadClosedTag2" :
				text = "Close header cell tag here i.e. <span class='ct-code-b-yellow'>&lt;/th&gt;</span>.";
				typingNValidation(text, elementId, "</th>");
			break;
			case "testDataEnterTag2" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>Country</span>";
				typingNValidation(text, elementId, "Country");
			break;
			case "founded" :
				tdAnimation('#country', '#testDataEnterTag2');
			break;
			case "tbodyOpenTag" :
				intro.refresh();
				text = "Open tablebody tag here i.e. <span class='ct-code-b-yellow'>&lt;tbody&gt;</span>.<ul><li>"
		  				+ "The &lt;tbody&gt; tag is used to group the body content in  <span class='ct-code-b-yellow'>HTML</span> table</li></ul>";
				typingNValidation(text, elementId, "<tbody>");
			break;
			case "tbodyClosedTag" :
				text = "Close tablebody tag here i.e. <span class='ct-code-b-yellow'>&lt;/tbody&gt;</span>.";
				typingNValidation(text, elementId, "</tbody>");
			break;
			case "rowOpenTag1" :
				text = "Open tablerow tag here i.e. <span class='ct-code-b-yellow'>&lt;tr&gt;</span>.";
				typingNValidation(text, elementId, "<tr>");
			break;
			case "rowClosedTag1" :
				text = "Close tablerow tag here i.e. <span class='ct-code-b-yellow'>&lt;/tr&gt;</span>."; 
				typingNValidation(text, elementId, "</tr>");
			break;
			case "testDataOpenTag" :
				text = "Open tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;td&gt;</span>."
		  				+ "<ul><li>The <span class='ct-code-b-yellow'>&lt;td&gt;</span> tag defines a standard cell in "
		  				+ "<span class='ct-code-b-yellow'>HTML</span> table.</li></ul>";
				typingNValidation(text, elementId, "<td>");
			break;
			case "testDataClosedTag" :
				text = "Close tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;/td&gt;</span>.";
				typingNValidation(text, elementId, "</td>");
			break;
			case "numberOne" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>Cricket</span>";
				typingNValidation(text, elementId, "Cricket");
			break;
			case "cricket" :
				tdAnimation('#cricket', '#numberOne');
			break;
			case "testDataOpenTag1" :
				text = "Open tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;td&gt;</span>.";
				typingNValidation(text, elementId, "<td>");
			break;
			case "testDataClosedTag1" :
				text = "Close tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;/td&gt;</span>.";
				typingNValidation(text, elementId, "</td>");
			break;
			case "FounderName" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>MSDhoni</span>";
				typingNValidation(text, elementId, "MSDhoni");
			break;
			case "dhoni" :
				tdAnimation('#dhoni', '#FounderName');
			break;
			case "testDataOpenTag2" :
				text = "Open tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;td&gt;</span>.";
				typingNValidation(text, elementId, "<td>");
			break;
			case "testDataClosedTag2" :
				text = "Close tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;/td&gt;</span>.";
				typingNValidation(text, elementId, "</td>");
			break;
			case "Founded" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>India</span>";
				typingNValidation(text, elementId, "India");
			break;
			case "india" :
				tdAnimation('#india', '#Founded');
			break;
			case "rowOpenTag2" :
				text = "Open tablerow tag here i.e. <span class='ct-code-b-yellow'>&lt;tr&gt;</span>.";
				typingNValidation(text, elementId, "<tr>");
			break;
			case "rowClosedTag2" :
				text = "Close tablerow tag here i.e. <span class='ct-code-b-yellow'>&lt;/tr&gt;</span>.";
				typingNValidation(text, elementId, "</tr>");
			break;
			case "testDataOpenTagLast" :
				text = "Open tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;td&gt;</span>.";
				typingNValidation(text, elementId, "<td>");
			break;
			case "testDataClosedTagLast" :
				text = "Close tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;/td&gt;</span>.";
				typingNValidation(text, elementId, "</td>");
			break;
			case "numberTwo" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>Football</span>";
				typingNValidation(text, elementId, "Football");
			break;
			case "football" :
				tdAnimation('#football', '#numberTwo');
			break;
			case "testDataOpenTagLast1" :
				text = "Open tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;td&gt;</span>.";
				typingNValidation(text, elementId, "<td>");
			break;
			case "testDataClosedTagLast1" :
				text = "Close tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;/td&gt;</span>.";
				typingNValidation(text, elementId, "</td>");
			break;
			case "FounderName1" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>LionelMessi</span>";
				typingNValidation(text, elementId, "LionelMessi");
			break;
			case "messi" :
				tdAnimation('#messi', '#FounderName1');
			break;
			case "testDataOpenTagLast2" :
				text = "Open tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;td&gt;</span>.";
				typingNValidation(text, elementId, "<td>");
			break;
			case "testDataClosedTagLast2" :
				text = "Close tabledata tag here i.e. <span class='ct-code-b-yellow'>&lt;/td&gt;</span>.";
				typingNValidation(text, elementId, "</td>");
			break;
			case "Founded1" :
				text = "Type text here i.e. <span class='ct-code-b-yellow'>USA</span>";
				typingNValidation(text, elementId, "USA");
			break;
			case "usa" :
				tdAnimation('#usa', '#Founded1');
			break;  
			case "tableBox" : 
				$(".introjs-helperLayer").one("transitionend", function() {
			  		typing('.introjs-tooltiptext',"Let us apply the style properties to basic html table." ,function() { 
				  		$('.introjs-nextbutton').show();	
					});
				});
			break;
			case "border1Px" : 
				scrollTop();
				text = "Type the selectors and Open curly braces i.e.<br><span class='ct-code-b-yellow'>table, th, td {</span>";
				typingNValidation(text, elementId, "table, th, td {");
			break;
			case "closeBraceOftable" : 
				text = "Close curly braces , i.e. <span class='ct-code-b-yellow'> }</span>";
				typingNValidation(text, elementId, "}");
			break;
			case "widthAttr" :
				text = "Type a width property i.e. <br><span class='ct-code-b-yellow'>width: 80%;</span>";
				typingNValidation(text, elementId, "width: 80%;");
			break; 
			case "borderAttr" :
				text = "Type a border property i.e. <span class='ct-code-b-yellow'>border: 1px solid grey;</span>";
				typingNValidation(text, elementId, "border: 1px solid grey;");
			break;
			case "borderCollapse" :
		  		text = "Type a bordercollapse property i.e.<br><span class='ct-code-b-yellow'>border-collapse: collapse;</span>";
		  		typingNValidation(text, elementId, "border-collapse: collapse;");
			break;
			case "tdThAttr" : 
				text = "Type selectors and open a curly brace, i.e.<br><span class='ct-code-b-yellow'>th, td {</span>";
				typingNValidation(text, elementId, "th, td {");
			break;
			case "closedTagForTdTh" : 
				text = "Close curly brace i.e. <span class='ct-code-b-yellow'> }</span>";
				typingNValidation(text, elementId, "}");	
			break;
			case "textalignAttr" :
				text = "Type a text-align property i.e<br><span class='ct-code-b-yellow'>text-align: center;</span>";
				typingNValidation(text, elementId, "text-align: center;");
			break;
			case "paddingAttr" :
				text = "Type a color property i.e<br><span class='ct-code-b-yellow'>color: green;</span>";
				typingNValidation(text, elementId, "color: green;");
			break; 
			case "thAttr" : 
				text = "Type selector and open a curly brace , i.e.<br><span class='ct-code-b-yellow'>th {</span>";
				typingNValidation(text, elementId, "th {");
			break;
			case "closedbracketForTh" : 
				text = "Close the curly brace, i.e. <span class='ct-code-b-yellow'>}</span>";
				typingNValidation(text, elementId, "}");
			break;
			case "backgrouncolorAttr" :
				text = "Type a background property i.e<br><span class='ct-code-b-yellow'>background-color: yellow;</span>";
				typingNValidation(text, elementId, "background-color: yellow;");
			break;
			case "restartBtn":
				$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
			break;
		}
	});
	intro.start();
	scrollTop();
	typing('.introjs-tooltiptext', "Basic html page", function() {
		$('.introjs-nextbutton').show();
	});	
} 
 
function tdAnimation(id1, id2) {
	intro.refresh();
	scrollTop();
	$(".introjs-helperLayer").one("transitionend", function() {
		$(id1).removeClass('opacity00');
		var l = $(id2).offset();
		$(id1).offset({"top": l.top,"left": l.left});
		TweenMax.to(id1, 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			intro.refresh();
			setTimeout(function() {
				intro.nextStep();
			}, 500);		
		}});
	});
}
function typingNValidation(text, elementId, val) {
	$(".introjs-helperLayer").one("transitionend", function() {
  		typing('.introjs-tooltiptext', text, function() { 
			textenter("#" + elementId, val);
  		});
	});
}

function textenter(selector, value) {
	$(selector).removeClass('opacity00').focus();
	intro.refresh();
	$(selector).keyup(function(e) {
		if (e.keyCode == 17) {
			$(selector).val(value);
		}
		if ($(selector).val().trim() == value.toLowerCase() || $(selector).val().trim() == value.toUpperCase() ||
				$(selector).val().trim() == value.trim()) {
			$('.errorText').remove();
		  	$('.introjs-nextbutton').show();
		  	if (e.keyCode == 13) {
		  		intro.nextStep();
			  	$(selector).attr('disabled', true);
		  	}
	  	} else {
	  		$('.errorText').remove();
	  		$('.introjs-tooltiptext').append("<div class='errorText'>Please type correctly.</div>");
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

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": '5',
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
	
function scrollTopWithTweenMax(selector1, selector2) {
	scrollTop();
	TweenLite.to($(selector1), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
		$(selector2).effect('highlight',  {color: "#ff9900"}, 2000);
		setTimeout(function(){
			intro.nextStep();
		}, 500); 
	}});
}
</script>
</html>