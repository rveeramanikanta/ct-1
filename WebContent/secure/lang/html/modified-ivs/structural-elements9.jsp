<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>structural-elements</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
.margin-top-10 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.input-css0 {
	border: medium none;
	width : 70px;
}

.input-css1 {
	border: medium none;
	width : 200px;
}

.input-css2 {
	border: medium none;
	width : 40px;
}

.input-css3 {
	border: medium none;
	width : 165px;
}

.input-css4 {
	border: medium none;
	width : 135px;
}

.input-css5 {
	border: medium none;
	width : 50px;
}

.input-css6 {
	border: medium none;
	width : 56px;
}

.input-css7 {
	border: medium none;
	width : 90px;
}

.input-css8 {
	border: medium none;
	width : 80px;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.user-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.creampretab {
    -moz-tab-size: 2;
    tab-size: 2;
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 6px;
    color: #333;
    display: block;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 0;
    padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}



.display-inline-block {
	display: inline-block;
}

.padding5 {
	padding: 5px;
}

.padding6 {
	padding: 6px;
}

.bg-yellow {
	background: yellow;
}

.css-rules {
	color:red;
	font-size: 20px;
}

input:focus {
	background:#fff85a;
}

.visited {
	background: green;
}


#outputDiv1, #outputDiv2 {
	border: 1px solid gray;
    font-family: monospace;
    height: 320px;
    padding: 10px;
}

.container {
	padding: 0px;
	border: 1px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
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

.padding00 {
	padding: 0;
}

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
  	border-top-left-radius: 8px;
    border-top-right-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    min-width: 170px;
    margin: 2px 0 -4px;
    position: relative;
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

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	border: 1px solid gray;
	border-radius: 6px;`
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.zIndex {
	position: relative;
	z-index: 10000001 !important;
}

.style {
	border: 1px solid blue;
    border-radius: 6px;
}

hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid blue;
    width: 100%;
}

.padding10 {
	padding: 10px;
}

#asideDiv {
    min-height: 94px;
    align-items: center;
    display: flex;
    justify-content: center;
}
</style>
</head>
<body>
<script type="text/javascript">
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	
	$("#headerData, #footerData, #article1Data, #section1Data, #articleP1Data, #article2Data, #section2Data, #articleP2Data, #asideData, #asideP1Data, #asideP2Data").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max) {
			e.preventDefault();
		}
		$("body").keypress(function(e) {
			 if (e.which === 13) {
				 e.preventDefault();
			}
		});
		$("[contenteditable=true]").keydown(function(e) {
			if (e.which === 9) {
				e.preventDefault();
			}
		});
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#demoTitle",
					intro : "",
					position : "right"
				},{
			 		element : "#headerDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#navDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#sectionDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#asideDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#footerDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#headerOpenTag",
					intro : "",
					position : "right"
				},{
			 		element : "#headerCloseTag",
					intro : "",
					position : "right"
				},{
			 		element : "#totalHeaderH1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#headerData",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#footerOpenTag",
					intro : "",
					position : "right"
				},{
			 		element : "#footerCloseTag",
					intro : "",
					position : "right"
				},{
			 		element : "#totalFooterP",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#footerData",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#navOpenTag",
					intro : "",
					position : "right"
				},{
			 		element : "#navCloseTag",
					intro : "",
					position : "right"
				},{
			 		element : "#totalA1",
					intro : "",
					position : "right"
				},{
			 		element : "#href1",
					intro : "",
					position : "bottom"
				},{
			 		element : "#a1Data",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalA2",
					intro : "",
					position : "right"
				},{
			 		element : "#href2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#a2Data",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalA3",
					intro : "",
					position : "right"
				},{
			 		element : "#href3",
					intro : "",
					position : "bottom"
				},{
			 		element : "#a3Data",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#sectionOpenTag",
					intro : "",
					position : "right"
				},{
			 		element : "#sectionCloseTag",
					intro : "",
					position : "right"
				},{
			 		element : "#sectionH1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#section1Data",
					intro : "",
					position : "right"
				},{
			 		element : "#articleOpenTag1",
					intro : "",
					position : "right"
				},{
			 		element : "#articleCloseTag1",
					intro : "",
					position : "right"
				},{
			 		element : "#articleH1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#article1Data",
					intro : "",
					position : "right"
				},{
			 		element : "#articleP1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#articleP1Data",
					intro : "",
					position : "right"
				},{
			 		element : "#articleOpenTag2",
					intro : "",
					position : "right"
				},{
			 		element : "#articleCloseTag2",
					intro : "",
					position : "right"
				},{
			 		element : "#articleH2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#article2Data",
					intro : "",
					position : "right"
				},{
			 		element : "#articleP2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#articleP2Data",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#asideOpenTag",
					intro : "",
					position : "right"
				},{
			 		element : "#asideCloseTag",
					intro : "",
					position : "right"
				},{
			 		element : "#asideH",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#asideData",
					intro : "",
					position : "right"
				},{
			 		element : "#asideP1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#asideP1Data",
					intro : "",
					position : "right"
				},{
			 		element : "#asideP2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#asideP2Data",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#styles",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var text = "In this live demo we are going to learn about <b class='ct-code-b-yellow'>Structural Elements</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "headerDiv":
			introjs.refresh();
			$("#firstBrowser").removeClass("opacity00");	
			$("#headerDiv").removeClass("opacity00");	
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <b class ='ct-code-b-yellow'>&lt;header&gt;</b> element represents a container for introductory content or a set of navigational links.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "navDiv":
			introjs.refresh();
			$("#navDiv").removeClass("opacity00");	
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <b class ='ct-code-b-yellow'>&lt;nav&gt;</b> tag defines a set of navigation links.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "sectionDiv":
			introjs.refresh();
			$("#sectionDiv").removeClass("opacity00");	
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <b class ='ct-code-b-yellow'>&lt;section&gt;</b> tag defines sections in a documen."
				+ "The <b class ='ct-code-b-yellow'>&lt;article&gt;</b> tag specifies independent, self-contained content."
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "asideDiv":
			introjs.refresh();
			$("#asideDiv").removeClass("opacity00");	
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <b class ='ct-code-b-yellow'>&lt;aside&gt;</b> tag defines some content aside from the content it is placed in.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "footerDiv":
			introjs.refresh();
			$("#footerDiv").removeClass("opacity00");	
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <b class ='ct-code-b-yellow'>&lt;footer&gt;</b> tag defines a footer for a document or section.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "code":
			introjs.refresh();
			$("#firstBrowser").addClass("hide");
			$('#code').removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#code').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page, with <b class ='ct-code-b-yellow'>Ordered List</b> we will apply the styles"
					+ " on <b>list items</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "headerOpenTag":
			introjs.refresh();
			$("#headerOpenTag").removeClass("hide");
			introjs.refresh();
			textFocus("headerOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter header open tag i.e <b class ="ct-code-b-yellow">&lt;header&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("headerOpenTag");
				});
			});
		break;
		case "headerCloseTag":
			introjs.refresh();
			$("#headerCloseTag").removeClass("hide");
			introjs.refresh();
			textFocus("headerCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter header close tag i.e <b class ="ct-code-b-yellow">&lt;/header&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("headerCloseTag");
				});
			});
		break;
		case "totalHeaderH1":
			$("#totalHeaderH1").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "headerData":
			introjs.refresh();
			$("#headerData").removeClass("hide");
			introjs.refresh();
			//textFocus("headerData");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter header data as you want.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("headerData");
				});
			});
		break;
		case "browser":
			if (introjs._currentStep == 11) {
				$('.introjs-nextbutton').hide();
				$("#browser").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>header</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div id='browserHeader'><h1>" + $("#headerData").text() + "</h1></div>");
						$("#totalHeader").addClass("z-index");
						$('#totalHeader').effect("transfer", {to: $('#browserHeader'), className: "ui-effects-transfer"}, 1000, function() {
							$("#totalHeader").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 16) {
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>footer</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1  > div:last-child").append("<div id='browserFooter'><p>" + $("#footerData").text() + "</p></div>");
						$("#totalFooter").addClass("z-index");
						$('#totalFooter').effect("transfer", {to: $('#browserFooter'), className: "ui-effects-transfer"}, 1000, function() {
							$("#totalFooter").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 28) {
				$('.introjs-nextbutton').hide();
				$('#browserHeader').hide();
				$('#browserFooter').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>nav</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div id='browserDiv1'><h1>"+ $("#headerData").text() +"</h1><ul id='browserNav' style='list-style-type:none;'>"
								+ "<a href='#'><li>About Us</li></a><a href='#'><li>Contact Us</li></a><a href='#'><li>Courses</li></a></ul><p>"
								+ $("#footerData").text() +"</p></div>");
						$("#totalNav").addClass("z-index");
						$('#totalNav').effect("transfer", {to: $('#browserNav'), className: "ui-effects-transfer"}, 1000, function() {
							$("#totalNav").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 45) {
				$('.introjs-nextbutton').hide();
				$('#browserDiv1').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>section with articles</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div id='browserDiv2'><h1>"+ $("#headerData").text() +"</h1>"
								+"<div class='col-xs-12'>"
								+"<div class='col-xs-3'>"
								+"<ul id='browserNav' style='list-style-type:none; margin-left: -50px; margin-top: 16px;'>"
								+ "<a href='#'><li>About Us</li></a><a href='#'><li>Contact Us</li></a><a href='#'><li>Courses</li></a></ul><p></div>"
								+ "<div id='browserSection' class='col-xs-6'>"
								+ "<h3>" + $("#section1Data").text() +"</h3><h3>"+ $("#article1Data").text() +"</h3><p>"+ $("#articleP1Data").text() +"</p>"
								+ "<h3>"+ $("#article2Data").text() +"</h3><p>"+ $("#articleP2Data").text() +"</p>"
								+"</div>"
								+"</div>"
								+ " " +$("#footerData").text() +"</p></div>");
						$("#totalSection").addClass("z-index");
						$('#totalSection').effect("transfer", {to: $('#browserSection'), className: "ui-effects-transfer"}, 1000, function() {
							$("#totalSection").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 54) {
				$('.introjs-nextbutton').hide();
				$('#browserDiv2').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>aside</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div id='browserDiv3'><h1>"+ $("#headerData").text() +"</h1>"
								+"<div class='col-xs-12'>"
								+"<div class='col-xs-3'>"
								+"<ul id='browserNav' style='list-style-type:none; margin-left: -50px; margin-top: 16px;'>"
								+ "<a href='#'><li>About Us</li></a><a href='#'><li>Contact Us</li></a><a href='#'><li>Courses</li></a></ul><p></div>"
								+ "<div id='browserSection' class='col-xs-6'>"
								+ "<h3>" + $("#section1Data").text() +"</h3><h3>"+ $("#article1Data").text() +"</h3><p>"+ $("#articleP1Data").text() +"</p>"
								+ "<h3>"+ $("#article2Data").text() +"</h3><p>"+ $("#articleP2Data").text() +"</p>"
								+"</div>"
								+ "<div id='browserAside' class='col-xs-3' style='margin-top: 50px;'>"
								+ "<h3>"+ $("#asideData").text() +"</h3><p>&nbsp;"+ $("#asideP1Data").text() +"</p><p>&nbsp;"+ $("#asideP2Data").text() +"</p>"
								+"</div>"
								+"</div>"
								+ "<p>" +$("#footerData").text() +"</p></div>");
						$("#totalAside").addClass("z-index");
						$('#totalAside').effect("transfer", {to: $('#browserAside'), className: "ui-effects-transfer"}, 1000, function() {
							$("#totalAside").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 56) {
				$('.introjs-nextbutton').hide();
				$('#browserDiv3').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output after adding colors <b class ='ct-code-b-yellow'></b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div id='browserDiv4'><h1 style='background-color: orange;'>"+ $("#headerData").text() +"</h1>"
								+"<div class='col-xs-12'>"
								+"<div class='col-xs-3' style='background-color: lightblue;'>"
								+"<ul id='browserNav' style='list-style-type:none; margin-left: -50px; margin-top: 16px;'>"
								+ "<a href='#'><li>About Us</li></a><a href='#'><li>Contact Us</li></a><a href='#'><li>Courses</li></a></ul><p></div>"
								+ "<div id='browserSection' class='col-xs-6' style='background-color: cyan;'>"
								+ "<h3>" + $("#section1Data").text() +"</h3><h3>"+ $("#article1Data").text() +"</h3><p>"+ $("#articleP1Data").text() +"</p>"
								+ "<h3>"+ $("#article2Data").text() +"</h3><p>"+ $("#articleP2Data").text() +"</p>"
								+"</div>"
								+ "<div id='browserAside' class='col-xs-3' style='margin-top: 50px; background-color: lightcoral;'>"
								+ "<h3>"+ $("#asideData").text() +"</h3><p>&nbsp;"+ $("#asideP1Data").text() +"</p><p>&nbsp;"+ $("#asideP2Data").text() +"</p>"
								+"</div>"
								+"</div>"
								+ "<p style='background-color: lightgray; color: firebrick;'>" +$("#footerData").text() +"</p></div>");
						$("#totalAside").addClass("z-index");
						$('#totalAside').effect("transfer", {to: $('#browserAside'), className: "ui-effects-transfer"}, 1000, function() {
							$("#totalAside").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
		break;
		case "footerOpenTag":
			introjs.refresh();
			$("#footerOpenTag").removeClass("hide");
			introjs.refresh();
			textFocus("footerOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter header open tag i.e <b class ="ct-code-b-yellow">&lt;footer&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("footerOpenTag");
				});
			});
		break;
		case "footerCloseTag":
			introjs.refresh();
			$("#footerCloseTag").removeClass("hide");
			introjs.refresh();
			textFocus("footerCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter header close tag i.e <b class ="ct-code-b-yellow">&lt;/footer&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("footerCloseTag");
				});
			});
		break;
		case "totalFooterP":
			$("#totalFooterP").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "footerData":
			introjs.refresh();
			$("#footerData").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter footer data as you want.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("footerData");
				});
			});
		break;
		case "navOpenTag":
			introjs.refresh();
			$(".style").removeClass("style");
			$("#navOpenTag").removeClass("hide");
			introjs.refresh();
			textFocus("navOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter nav open tag i.e <b class ="ct-code-b-yellow">&lt;nav&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("navOpenTag");
				});
			});
		break;
		case "navCloseTag":
			introjs.refresh();
			$("#navCloseTag").removeClass("hide");
			introjs.refresh();
			textFocus("navCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter nav close tag i.e <b class ="ct-code-b-yellow">&lt;/nav&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("navCloseTag");
				});
			});
		break;
		case "totalA1":
			introjs.refresh();
			$("#totalA1").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Let us create a <b class ="ct-code-b-yellow">anchor tag</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "href1":
			introjs.refresh();
			$("#href1").removeClass("hide");
			$("#href1Data").removeClass("hide");
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
			textFocus("href1Data");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter href="<b class ="ct-code-b-yellow">about.jsp</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("href1Data");
				});
			});
		break;
		case "a1Data":
			introjs.refresh();
			$("#a1Data").removeClass("hide");
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
			textFocus("a1Data");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter href="<b class ="ct-code-b-yellow">About Us</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("a1Data");
				});
			});
		break;
		case "totalA2":
			introjs.refresh();
			$("#totalA2").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Let us create a <b class ="ct-code-b-yellow">anchor tag</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "href2":
			introjs.refresh();
			$("#href2").removeClass("hide");
			$("#href2Data").removeClass("hide");
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
			textFocus("href2Data");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter href="<b class ="ct-code-b-yellow">contact.jsp</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("href2Data");
				});
			});
		break;
		case "a2Data":
			introjs.refresh();
			$("#a2Data").removeClass("hide");
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
			textFocus("a2Data");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter href="<b class ="ct-code-b-yellow">Contact Us</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("a2Data");
				});
			});
		break;
		case "totalA3":
			introjs.refresh();
			$("#totalA3").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Let us create a <b class ="ct-code-b-yellow">anchor tag</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "href3":
			introjs.refresh();
			$("#href3").removeClass("hide");
			$("#href3Data").removeClass("hide");
			introjs.refresh();
			textFocus("href3Data");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter href="<b class ="ct-code-b-yellow">courses.jsp</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("href3Data");
				});
			});
		break;
		case "a3Data":
			introjs.refresh();
			$("#a3Data").removeClass("hide");
			introjs.refresh();
			textFocus("a3Data");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter href="<b class ="ct-code-b-yellow">Courses</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("a3Data");
				});
			});
		break;
		case "sectionOpenTag":
			introjs.refresh();
			$("#sectionOpenTag").removeClass("hide");
			introjs.refresh();
			textFocus("sectionOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter section open tag i.e <b class ="ct-code-b-yellow">&lt;section&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("sectionOpenTag");
				});
			});
		break;
		case "sectionCloseTag":
			introjs.refresh();
			$("#sectionCloseTag").removeClass("hide");
			introjs.refresh();
			textFocus("sectionCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter section close tag i.e <b class ="ct-code-b-yellow">&lt;/section&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("sectionCloseTag");
				});
			});
		break;
		case "sectionH1":
			$("#sectionH1").removeClass("opacity00");
			introjs.refresh();
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "section1Data":
			introjs.refresh();
			$("#section1Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter section data.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("section1Data");
				});
			});
		break;
		case "articleOpenTag1":
			introjs.refresh();
			$("#articleOpenTag1").removeClass("hide");
			introjs.refresh();
			textFocus("articleOpenTag1");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article open tag i.e <b class ="ct-code-b-yellow">&lt;article&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("articleOpenTag1");
				});
			});
		break;
		case "articleCloseTag1":
			introjs.refresh();
			$("#articleCloseTag1").removeClass("hide");
			introjs.refresh();
			textFocus("articleCloseTag1");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article close tag i.e <b class ="ct-code-b-yellow">&lt;/article&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("articleCloseTag1");
				});
			});
		break;
		case "articleH1":
			$("#articleH1").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "article1Data":
			introjs.refresh();
			$("#article1Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article heading.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("article1Data");
				});
			});
		break;
		case "articleP1":
			$("#articleP1").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "articleP1Data":
			introjs.refresh();
			$("#articleP1Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article data.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("articleP1Data");
				});
			});
		break;
		case "articleOpenTag2":
			introjs.refresh();
			$("#articleOpenTag2").removeClass("hide");
			$(".style").removeClass("style");
			introjs.refresh();
			textFocus("articleOpenTag2");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article open tag i.e <b class ="ct-code-b-yellow">&lt;article&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("articleOpenTag2");
				});
			});
		break;
		case "articleCloseTag2":
			introjs.refresh();
			$("#articleCloseTag2").removeClass("hide");
			introjs.refresh();
			textFocus("articleCloseTag2");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article close tag i.e <b class ="ct-code-b-yellow">&lt;/article&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("articleCloseTag2");
				});
			});
		break;
		case "articleH2":
			$("#articleH2").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "article2Data":
			introjs.refresh();
			$("#article2Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article heading.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("article2Data");
				});
			});
		break;
		case "articleP2":
			$("#articleP2").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "articleP2Data":
			introjs.refresh();
			$("#articleP2Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter article data.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("articleP2Data");
				});
			});
		break;
		case "asideOpenTag":
			introjs.refresh();
			$("#asideOpenTag").removeClass("hide");
			$(".style").removeClass("style");
			introjs.refresh();
			textFocus("asideOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter aside open tag i.e <b class ="ct-code-b-yellow">&lt;aside&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("asideOpenTag");
				});
			});
		break;
		case "asideCloseTag":
			introjs.refresh();
			$("#asideCloseTag").removeClass("hide");
			introjs.refresh();
			textFocus("asideCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter aside close tag i.e <b class ="ct-code-b-yellow">&lt;/aside&gt;</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("asideCloseTag");
				});
			});
		break;
		case "asideH":
			$("#asideH").removeClass("opacity00");
			introjs.refresh();
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "asideData":
			introjs.refresh();
			$("#asideData").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter aside data.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("asideData");
				});
			});
		break;
		case "asideP1":
			$("#asideP1").removeClass("opacity00");
			introjs.refresh();
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "asideP1Data":
			introjs.refresh();
			$("#asideP1Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter aside data.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("asideP1Data");
				});
			});
		break;
		case "asideP2":
			$("#asideP2").removeClass("opacity00");
			introjs.refresh();
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "asideP2Data":
			introjs.refresh();
			$("#asideP2Data").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter aside data.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("asideP2Data");
				});
			});
		break;
		case "styles":
			$("#styles").removeClass("hide");	
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us add colors. <b class ='ct-code-b-yellow'></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".style").removeClass("style");
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector);
}

function editText(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max-1) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			if (e.keyCode == 13 && e.keyCode == 9) {
				e.preventDefault();
			}
			e.preventDefault();
		}		
	});
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}
		
		if (e.altKey && e.keyCode == 77) {
			$(selector).val($(selector).attr("originalText"));
		}
		
		if ($(this).val() == $(selector).attr("originalText")) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
		}
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
}
</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Structural-Elements</h4>
</div>
<div class="col-xs-offset-4 col-xs-4 margin-top-20">
<div  id="firstBrowser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">structural-elem..</div>
						<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
					</li>
				</ul>
				<span id ="plus"><i class="fa fa-plus"></i></span>
			</div>
			<span class="col-xs-12 padding00" style="border-bottom: 1px solid gray; padding: 2px;">
				<span class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow" id="inActiveArrow"></i><i class="fa fa-arrow-left hide" id="activeArrow" onclick='returnArrow()'></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"  id="spinArrow"></i></span>
				</span>
				<span class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/structural-elements.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body col-xs-12 padding10" id="firstDiv">
					<div class="col-xs-12 text-center margin-top-10">
						<div id="headerDiv" class="style opacity00"><h5>&lt;header&gt;</h5></div>
					</div>
					<div class="col-xs-12 text-center margin-top-20">
						<div id="navDiv" class="style opacity00"><h5>&lt;nav&gt;</h5></div>
					</div>
					<div class="col-xs-12 margin-top-20">
						<div class="col-xs-8 text-center">
							<div id="sectionDiv" class="opacity00 style">
								<div><h5>&lt;section&gt;</h5></div><hr>
								<div><h5>&lt;article&gt;</h5></div>
							</div>
						</div>
						<div class="col-xs-4 text-center style opacity00" id="asideDiv">
							<div><h5>&lt;aside&gt;</h5></div>
						</div>
					</div>
					<div class="col-xs-12 text-center margin-top-20">
						<div id="footerDiv" class="style opacity00"><h5>&lt;footer&gt;</h5></div>
					</div>
			</div>
	</div>
</div>	
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-0 col-xs-5">
		<div id="code" class="opacity00 hide">
<pre class="creampretab"><span id="htmlOpenTag">&lt;html&gt;</span>
<span id="headOpenTag">&lt;head&gt;</span>
<span id="totalTitle"><span id="titleOpenTag">&lt;title&gt;</span>structural-elements<span id="titleCloseTag">&lt;/title&gt;</span></span>
<span id="styles" class="hide">&lt;style type="text/css"&gt;
	header {
		background-color: orange;
	}
	
	nav {
		background-color: lightblue;
	}
	
	section, article {
		background-color: cyan;
	}
	
	aside {
		background-color: lightcoral;
	}
	
	footer {
		background-color: firebrick;
	}
&lt;/style&gt;</span>
<span id="headCloseTag">&lt;/head&gt;</span>
<span id="bodyOpenTag">&lt;body&gt;</span>
<span id="totalHeader"><input id="headerOpenTag" class="hide input-css0" maxlength='8' originalText="<header>">
	<span id="totalHeaderH1" class="opacity00"><span id="headerOpenH1">&lt;h1&gt;</span><div style="display: inline-block;" contenteditable='true' id="headerData" class="hide input-css3" maxlength='20' spellcheck="false"></div><span id="headerCloseH1">&lt;h1&gt;</span></span>
<input id="headerCloseTag" class="hide input-css0" maxlength='9' originalText="</header>"></span>
<span id="totalNav"><input id="navOpenTag" class="hide input-css2" maxlength='5' originalText="<nav>">
	<span id="totalA1" class="opacity00"><span id="a1OpenTag">&lt;a <span id="href1" class="hide">href="<input id="href1Data" class="hide input-css0" maxlength='9' originalText="about.jsp">"</span>&gt;<input id="a1Data" class="hide input-css0" maxlength='8' originalText="About Us"></span><span id="a1CloseTag">&lt;a&gt;</span></span>
	<span id="totalA2" class="opacity00"><span id="a2OpenTag">&lt;a <span id="href2" class="hide">href="<input id="href2Data" class="hide input-css7" maxlength='11' originalText="contact.jsp">"</span>&gt;<input id="a2Data" class="hide input-css8" maxlength='10' originalText="Contact Us"></span><span id="a2CloseTag">&lt;a&gt;</span></span>
	<span id="totalA3" class="opacity00"><span id="a3OpenTag">&lt;a <span id="href3" class="hide">href="<input id="href3Data" class="hide input-css7" maxlength='11' originalText="courses.jsp">"</span>&gt;<input id="a3Data" class="hide input-css6" maxlength='7' originalText="Courses"></span><span id="a3CloseTag">&lt;a&gt;</span></span>
<input id="navCloseTag" class="hide input-css5" maxlength='6' originalText="</nav>"></span>
<span id="totalSection"><input id="sectionOpenTag" class="hide input-css8" maxlength='9' originalText="<section>">
	<span id="sectionH1" class="opacity00">&lt;h1&gt;<div style="display: inline-block;" id="section1Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/h1&gt;</span>
	<span id="totalArticle"><input id="articleOpenTag1" class="hide input-css0" maxlength='9' originalText="<article>">
		<span id="articleH1" class="opacity00">&lt;h1&gt;<div style="display: inline-block;" id="article1Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/h1&gt;</span>
		<span id="articleP1" class="opacity00">&lt;p&gt;<div style="display: inline-block;" id="articleP1Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/p&gt;</span>
	<input id="articleCloseTag1" class="hide input-css8" maxlength='10' originalText="</article>">
	<input id="articleOpenTag2" class="hide input-css0" maxlength='9' originalText="<article>">
		<span id="articleH2" class="opacity00">&lt;h1&gt;<div style="display: inline-block;" id="article2Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/h1&gt;</span>
		<span id="articleP2" class="opacity00">&lt;p&gt;<div style="display: inline-block;" id="articleP2Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/p&gt;</span>
	<input id="articleCloseTag2" class="hide input-css8" maxlength='10' originalText="</article>"></span>
<input id="sectionCloseTag" class="hide input-css8" maxlength='10' originalText="</section>"></span>
<span id="totalAside"><input id="asideOpenTag" class="hide input-css0" maxlength='7' originalText="<aside>">
	<span id="asideH" class="opacity00">&lt;h1&gt;<div style="display: inline-block;" id="asideData" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/h1&gt;</span>
		<span id="asideP1" class="opacity00">&lt;p&gt;<div style="display: inline-block;" id="asideP1Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/p&gt;</span>
		<span id="asideP2" class="opacity00">&lt;p&gt;<div style="display: inline-block;" id="asideP2Data" contenteditable='true' class="hide input-css3" maxlength='20' spellcheck="false"></div>&lt;/p&gt;</span>
<input id="asideCloseTag" class="hide input-css0" maxlength='8' originalText="</aside>"></span>
<span id="totalFooter"><input id="footerOpenTag" class="hide input-css0" maxlength='8' originalText="<footer>">
	<span id="totalFooterP" class="opacity00"><span id="headerOpenP">&lt;p&gt;</span><div style="display: inline-block;" contenteditable='true' id="footerData" class="hide input-css1" maxlength='50' spellcheck="false"></div><span id="footerCloseP">&lt;p&gt;</span></span>
<input id="footerCloseTag" class="hide input-css0" maxlength='9' originalText="</footer>"></span>
<span id="bodyCloseTag">&lt;/body&gt;</span>
<span id="htmlCloseTag">&lt;/html&gt;</span></pre> 
		</div>
	</div>
	<div class="col-xs-7">
		<div  id="browser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">structural-elem..</div>
						<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
					</li>
				</ul>
				<span id ="plus"><i class="fa fa-plus"></i></span>
			</div>
			<span class="col-xs-12 padding00" style="border-bottom: 1px solid gray; padding: 2px;">
				<span class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow" id="inActiveArrow"></i><i class="fa fa-arrow-left hide" id="activeArrow" onclick='returnArrow()'></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"  id="spinArrow"></i></span>
				</span>
				<span class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/structural-elements.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body" id="outputDiv1">
			
			</div>
			<div class ="html-body hide" id="outputDiv2">
			 
			</div>
		</div>	
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>