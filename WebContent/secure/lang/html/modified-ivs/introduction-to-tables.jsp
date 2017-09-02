<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Introduction to tables</title>
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
<style type="text/css">

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
}/* End of browser - css */

pre {
	tab-size: 3;
	-moz-tab-size: 3;
	padding: 3px;
	font-size: 11.5px;
	font-family: monospace;
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

.margin-top13 {
	margin-top: 13px;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.position-css {
	display: inline-block;
}

.zIndex {
	z-index: 9999999;
	background: white;
	padding: 3px;
}
</style>
</head>
<body>
	<div class="col-xs-12 padding0 margin-top13 text-center"><h1 class="label ct-demo-heading">Introduction to Tables</h1></div>
	<div class='col-xs-12'>
		<div class='col-xs-5 margin-top13'>
<pre id='htmlTableCreation'>&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Tables&lt;/title&gt;
		&lt;style&gt;  
			<div class="position-css" id="fstStyle"><input maxlength="13" id='border1Px'></div>	
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
					<input id='testHeadOpenTag' maxlength="4"><span id='testDataEnterTag'></span> <input maxlength="5" id='testHeadClosedTag'>
					<input maxlength="4" id='testHeadOpenTag1'><span id='testDataEnterTag1'></span> <input maxlength="5" id='testHeadClosedTag1'>
					<input maxlength="4" id='testHeadOpenTag2'><span id='testDataEnterTag2'></span> <input maxlength="5" id='testHeadClosedTag2'> 
				<input maxlength="5" id='rowClosedTag'>
			<input maxlength="8" id='tHeadClosedTag'>
			<input maxlength="7" id='tbodyOpenTag'>
     			<input maxlength="4" id='rowOpenTag1'>
					<input maxlength="4" id='testDataOpenTag'><span id='numberOne'></span> <input maxlength="5" id='testDataClosedTag'>
					<input maxlength="4" id='testDataOpenTag1'><span id='FounderName'></span> <input maxlength="5" id='testDataClosedTag1'>
					<input maxlength="4" id='testDataOpenTag2'><span id='Founded'></span> <input maxlength="5" id='testDataClosedTag2'> 
     			<input maxlength="5" opacity00" id='rowClosedTag1'>
     			<div id="rowOpenTag2" class="position-css"></div>
     		<input maxlength="8" id='tbodyClosedTag'>
		<input maxlength="8" id='tableClosedTag'>
	&lt;/body&gt;     
&lt;/html&gt;</pre>
		</div>
		<div class='col-xs-6 col-xs-offset-1' >
			<div class='padding0 opacity00 col-xs-12' id='tableOutPut' style='margin-top: 50px; border: 1px solid black'></div>
				<div class="button col-xs-12 text-center " id="button"><button class="btn btn-warning opacity00" id='restartBtn'>Restart</button>
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
				+ " <tr id='row3' class='opacity00'><td id='twoinTable' class=' tableData1'><div class='div-border' id='football'>Football</div></td>"
				+ " <td id='founderNameInTable' class=' tableData1'><div class='div-border' id='messi'>LionelMessi</div></td> <td "
				+ "id='mobileInTable' class=' tableData1'><div class='div-border' id='usa'>USA</div></td></tr></tbody></table><br></div>");	
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
			animateStep : 'showBrowser',
			tooltipClass: 'hide'
		},{
			element :'#tableOpenTag',
			intro :''
		},{
			element :'#tableClosedTag',
			intro :'',
			position:"right" 
		},{
			element :'#tableOutPut',
			intro :'',
			animateStep:"showTable", 
			tooltipClass:"hidden"
		},{
			element :'#tHeadOpenTag',
			intro :''
		},{
			element :'#tHeadClosedTag',
			intro :'',
			position:"right" 
		},{
			element :'#rowOpenTag',
			intro :''
		},{
			element :'#rowClosedTag',
			intro :''
		},{
			element :'#tableOutPut',
			intro :'',
			animateStep:"firstTr",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag',
			intro :'',
			position:"bottom"   
		},{
			element :'#testHeadClosedTag',
			intro :''
		},{
			element :'#testDataEnterTag',
			intro :'',
			tooltipClass : "hide",
		},{
			element :'#hash',
			intro :'',
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag1',
			intro :''
		},{
			element :'#testHeadClosedTag1',
			intro :''
		},{
			element :'#testDataEnterTag1',
			intro :'',
			tooltipClass : "hide",
		},{
			element :'#name',
			intro :'',
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag2',
			intro :''
		},{
			element :'#testHeadClosedTag2',
			intro :''
		},{
			element :'#testDataEnterTag2',
			intro :'',
			tooltipClass : "hide",
		},{
			element :'#founded',
			intro :'',
			tooltipClass:"hidden"
		},{
			element :'#tbodyOpenTag',
			intro :''
		},{
			element :'#tbodyClosedTag',
			intro :'',
			position:"right"  
		},{
			element :'#rowOpenTag1',
			intro :''
		},{
			element :'#rowClosedTag1',
			intro :'',
			position:"bottom"  
		},{
			element :'#tableOutPut',
			intro :'',
			animateStep : "secondTr",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag',
			intro :''
		},{
			element :'#testDataClosedTag',
			intro :''
		},{
			element :'#numberOne',
			intro :'',
			tooltipClass : "hide",
		},{
			element :'#cricket',
			intro :'',
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag1',
			intro :''
		},{
			element :'#testDataClosedTag1',
			intro :''
		},{
			element :'#FounderName',
			intro :'',
			tooltipClass : "hide",
		},{
			element :'#dhoni',
			intro :'',
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag2',
			intro :''
		},{
			element :'#testDataClosedTag2',
			intro :''
		},{
			element :'#Founded',
			intro :'',
			tooltipClass : "hide"  
		},{
			element :'#india',
			intro :'',
			tooltipClass:"hidden"
		},{
			element :'#rowOpenTag2',
			intro :''
		}, {
			element: '#row3',
			intro: '',
			tooltipClass: 'hide'
		}, {
			element :'#tableBox',
			intro :''
		},{
			element :'#border1Px',
			intro :'',
			position:"right"
		}, {
			element: '#fstStyle',
			intro: '',
			position: 'right'
		} ]
	});
	
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		$('.usr-text').attr('disabled', true);
		switch (elementId) {
		
			case "tableOutPut" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case 'showBrowser':
							zoomInEffect('#tableOutPut', function() {
								$('.introjs-tooltip').removeClass('hide');
								typing('.introjs-tooltiptext',"The given title displays here" ,function() { 
									$('.introjs-nextbutton').show();
						  	  	});
							});
						break;
						case 'showTable':
							tweenMaxAnim("#tableBox", "#tableBox");
						break;
						case 'firstTr':
							tweenMaxAnim(".tablehead", "#row1");
						break;
						case 'secondTr':
							tweenMaxAnim(".tableData", "#row2");
						break;
						
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
				trDataAnim('#testDataEnterTag', 'Game');
			break;
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
				trDataAnim('#testDataEnterTag1', 'Player Name');
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
				trDataAnim('#testDataEnterTag2', 'Country');
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
				trDataAnim('#numberOne', 'Cricket');
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
				trDataAnim('#FounderName', 'MSDhoni');
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
				trDataAnim('#Founded', 'India');
			break;
			case "india" :
				$('#rowOpenTag2').addClass('opacity00').html('&lt;tr&gt;<br>\t&lt;td&gt;Football&lt;/td&gt;<br>\t&lt;td&gt;LionelMessi'
								+ '&lt;/td&gt;<br>\t&lt;td&gt;USA&lt;/td&gt;<br>&lt;/tr&gt;');
				tdAnimation('#india', '#Founded');
			break;
			case 'rowOpenTag2':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Similar row with data';
					nextWitToolTipHide(text, function() {
						zoomInEffect('#rowOpenTag2', function() {
							setTimeout(function() {
								intro.nextStep();
							}, 800);
						});
					});
				});
			break;
			case 'row3':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#row3 td').css({'border-color': 'rgba(192,192,192,3)'});
					$('#rowOpenTag2').effect("transfer", {to: $("#row3"), className: "ui-effects-transfer"}, 1500, function(){
						zoomInEffect('#row3', function() {
							setTimeout(function() {
								intro.nextStep();
							}, 800);
						});
					});
				});
			break;
			case "tableBox" : 
				$(".introjs-helperLayer").one("transitionend", function() {
			  		typing('.introjs-tooltiptext', "Let us apply the style properties to basic html table." ,function() { 
				  		$('.introjs-nextbutton').show();	
					});
				});
			break;
			case "border1Px" : 
				scrollTop();
				$('#border1Px').after('<span id="text1"> {</span><br>\t<span id="text3">width: 80%</span><br><span id="text2">}</span>');
				$('#fstStyle span').addClass('opacity00');
				$(".introjs-helperLayer").one("transitionend", function() {
					text = "<span class='ct-code-b-yellow'>table, th, td</span>";
					typingNValidation(text, elementId, "table, th, td");
				});
			break;
			case 'fstStyle':
				intro.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					text = 'Let us apply width';
					nextWitToolTipHide(text, function() {
						styleAttrAnim('#fstStyle', 1, 3, function() {
							$('#tableOutPut').addClass('zIndex');
								TweenMax.to("#tableBox", 2, {css: {width:"82%"}}, function() {
									$('#fstStyle #text3').after('<span id="text4" class="opacity00">border-collapse: collapse;</span>');
									introjs.refresh();
									styleAttrAnim('#fstStyle', 4, 4, function() {
										
										//intro.nextStep();
									});
								});
							});
						});
					});
				//});
			break;
		}
	});
	intro.start();
	scrollTop();
	typing('.introjs-tooltiptext', "Basic html page", function() {
		$('.introjs-nextbutton').show();
	});	
}

function styleAttrAnim(id, i, val, callbackFunction) {
	if (i <= val) {
		TweenMax.to(id + ' #text' + i, 0.5, {opacity: 1, onComplete: function() {
			styleAttrAnim(id, ++i, val, callbackFunction)
		}});
	} else {
		$(id + ' #text' + val).effect('highlight', {color: 'blue'}, 800, function() {
			callbackFunction();
		});
	}
}

function nextWitToolTipHide(text, callbackFunction) {
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
		$('.user-btn').click(function() {
			$(this).remove();
			$('.introjs-tooltip').addClass('hide');
			callbackFunction();
		});
	});
}

function trDataAnim(id, val) {
	$(id).addClass('opacity00').text(val);
	intro.refresh();
	zoomInEffect(id, function() {
		setTimeout(function() {
			intro.nextStep();
		}, 600);
	});
}

function tweenMaxAnim(id1, id2) {
	scrollTop();
	TweenLite.to($(id1), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
		$(id2).effect('highlight',  {color: "#ff9900"}, 2000);
		setTimeout(function(){
			intro.nextStep();
		}, 500); 
	}});
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
	$(selector).attr('disabled', false).removeClass('opacity00').focus();
	intro.refresh();
	$(selector).keyup(function(e) {
		if (e.keyCode == 17) {
			$(selector).val(value);
		}
		if ($(selector).val() == value.toLowerCase() || $(selector).val() == value.toUpperCase() || $(selector).val() == value.trim()) {
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
</script>
</html>