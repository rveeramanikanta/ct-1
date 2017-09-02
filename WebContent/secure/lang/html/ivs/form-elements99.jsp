<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>form-data99</title>
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
.margin-top-20 {
	margin-top: 20px;
}

.input-css0 {
	border: medium none;
	width : 52px;
}

.input-css1 {
	border: medium none;
	width : 143px;
}

.input-css2 {
    border: medium none;
    width: 80px;
}

.input-css3 {
    border: medium none;
    width: 110px;
}

.input-css4 {
    border: medium none;
    width: 24px;
}

.input-css5 {
    border: medium none;
    width: 60px;
}

.input-css6 {
    border: medium none;
    width: 75px;
}

.input-css7 {
    border: medium none;
    width: 82px;
}

.input-css8 {
    border: medium none;
    width: 180px;
}

.input-css9 {
    border: medium none;
    width: 68px;
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

#code {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: monospace;
    font-size: 12px;
    padding: 9.5px;
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

.creampretab {
    -moz-tab-size: 3;
    color: #333;
    display: block;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 0;
    padding: 5px;
}

#outputDiv, #outputDiv2 {
	border: 1px solid gray;
    font-family: monospace;
    height: 558px;
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
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.zIndex {
	position: relative;
	z-index: 10000001 !important;
}

fieldset {
	border: 1px solid;
	padding: 10px;
}

legend {
	border-width: 0;
	font-size: 16px;
	margin-bottom: 0;
	/* width: 28.5%; */
	width: 56.5%;
	width: 248px;
	padding: 3px;
}

.style1 {
	color: red;
}

.style2 {
	color: blue;
}
</style>
</head>
<body>
<script type="text/javascript">
var putElement;
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

$(document).ready(function() {
	introGuide();
	$("#rowVal, #colVal").on("click keydown keyup", function(e) {
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
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		 if (e.which === 13) {
			 e.preventDefault();
		}
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
		
		var max = $(this).attr("maxlength");
	}); 
	
	$('#restart').click(function() {
		location.reload();
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
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#totalForm",
					intro : "",
					position : "right"
				},{
			 		element : "#action",
					intro : "",
					position : "bottom"
				},{
			 		element : "#label1",
					intro : "",
					position : "right"
				},{
			 		element : "#label12",
					intro : "",
					position : "right"
				},{
			 		element : "#labelBody1",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#inputTag1",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#label2",
					intro : "",
					position : "right"
				},{
			 		element : "#label22",
					intro : "",
					position : "right"
				},{
			 		element : "#labelBody2",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalSelect",
					intro : "",
					position : "right"
				},{
			 		element : "#selectName",
					intro : "",
					position : "right"
				},{
			 		element : "#totalOption1",
					intro : "",
					position : "right"
				},{
			 		element : "#option1Value",
					intro : "",
					position : "right"
				},{
			 		element : "#option1Body",
					intro : "",
					position : "right"
				},{
			 		element : "#totalOption2",
					intro : "",
					position : "right"
				},{
			 		element : "#option2Value",
					intro : "",
					position : "right"
				},{
			 		element : "#option2Body",
					intro : "",
					position : "right"
				},{
			 		element : "#totalOption3",
					intro : "",
					position : "right"
				},{
			 		element : "#option3Value",
					intro : "",
					position : "right"
				},{
			 		element : "#option3Body",
					intro : "",
					position : "right"
				},{
			 		element : "#totalOption4",
					intro : "",
					position : "right"
				},{
			 		element : "#option4Value",
					intro : "",
					position : "right"
				},{
			 		element : "#option4Body",
					intro : "",
					position : "right"
				},{
			 		element : "#totalOption5",
					intro : "",
					position : "right"
				},{
			 		element : "#option5Value",
					intro : "",
					position : "right"
				},{
			 		element : "#option5Body",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalOptgroup1",
					intro : "",
					position : "right"
				},{
			 		element : "#optLabel1",
					intro : "",
					position : "right"
				},{
			 		element : "#totalOptgroup2",
					intro : "",
					position : "right"
				},{
			 		element : "#optLabel2",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#fieldset1",
					intro : "",
					position : "right"
				},{
			 		element : "#fieldset2",
					intro : "",
					position : "right"
				},{
			 		element : "#legend1",
					intro : "",
					position : "right"
				},{
			 		element : "#legend2",
					intro : "",
					position : "right"
				},{
			 		element : "#legendBody",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalInputs",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				} ,{
			 		element : "#submit",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#optStyle1",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#optStyle2",
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
			$(".introjs-tooltip").css({"min-width": "250px"});
			var text = "Let us learn <b class ='ct-code-b-yellow'>Form Elements</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "code":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#code').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#htmlOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#htmlCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#headOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#headCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$(this).removeClass("animated zoomIn");
									$("#totalTitle").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
										$(this).removeClass("animated zoomIn");
										$("#bodyOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											$(this).removeClass("animated zoomIn");
											$("#bodyCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
												$(this).removeClass("animated zoomIn");
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
		break;
		
		case "totalForm":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a form.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#formOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#formCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "action":
			introjs.refresh();
			$("#action").removeClass("hide");
			$("#url").removeClass("hide");
			introjs.refresh();
			textFocus("url");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">action="data.jsp"</b>.<br> The action attribute specifies where to send the form-data when a form is submitted.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("url");
				});
			});
		break;
		case "label1":
			introjs.refresh();
			$("#label1").removeClass("hide");
			$("#labelOpenTag1").removeClass("hide");
			introjs.refresh();
			textFocus("labelOpenTag1");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">&lt;label&gt;</b> open tag.<br>&lt;label&gt; tag defines a label for an &lt;input&gt; element.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("labelOpenTag1");
				});
			});
		break;
		case "label12":
			introjs.refresh();
			$("#label12").removeClass("hide");
			$("#labelCloseTag1").removeClass("hide");
			$("#labelBody1").removeClass("hide");
			$("#label1Text").removeClass("hide");
			$("#labelBody1").addClass("opacity00");
			introjs.refresh();
			textFocus("labelCloseTag1");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">&lt;/label&gt;</b> close tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("labelCloseTag1");
					
				});
			});
		break;
		case "labelBody1":
			introjs.refresh();
			$("#labelBody1").removeClass("opacity00");
			introjs.refresh();
			textFocus("label1Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Name:</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("label1Text");
				});
			});
		break;
		case "inputTag1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a input field.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#inputTag1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "label2":
			introjs.refresh();
			$("#label2").removeClass("hide");
			$("#labelOpenTag2").removeClass("hide");
			introjs.refresh();
			textFocus("labelOpenTag2");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">&lt;label&gt;</b> open tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("labelOpenTag2");
				});
			});
		break;
		case "label22":
			introjs.refresh();
			$("#label22").removeClass("hide");
			$("#labelCloseTag2").removeClass("hide");
			$("#labelBody2").removeClass("hide");
			$("#label2Text").removeClass("hide");
			$("#labelBody2").addClass("opacity00");
			introjs.refresh();
			textFocus("labelCloseTag2");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">&lt;/label&gt;</b> close tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("labelCloseTag2");
					
				});
			});
		break;
		case "labelBody2":
			introjs.refresh();
			$("#labelBody2").removeClass("opacity00");
			introjs.refresh();
			textFocus("label2Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Select Account type:</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("label2Text");
				});
			});
		break;
		case "totalSelect":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create <b>select</b>. &lt;select&gt; element is used to create a <b>drop-down list</b>.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#selectOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#selectCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "selectName":
			introjs.refresh();
			$("#selectName").removeClass("hide");
			$("#selectText").removeClass("hide");
			introjs.refresh();
			textFocus("selectText");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Defines a name for the drop-down list. Enter name="<b class ="ct-code-b-yellow">accountType</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("selectText");
				});
			});
		break;
		case "totalOption1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#totalOption1").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create option. The &lt;option&gt; tag defines an option in a select list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optionOpenTag1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optionCloseTag1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "option1Value":
			introjs.refresh();
			$("#option1Value").removeClass("hide");
			$("#option1Text").removeClass("hide");
			$("#option1Body").removeClass("hide");
			$("#option1Body").addClass("opacity00");
			introjs.refresh();
			textFocus("option1Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="<b class ="ct-code-b-yellow">Savings Account</b>". The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option1Text");
				});
			});
		break;
		case "option1Body":
			introjs.refresh();
			$("#option1Body").removeClass("opacity00");
			$("#option1Val").removeClass("hide");
			introjs.refresh();
			textFocus("option1Val");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Savings Account</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option1Val");
				});
			});
		break;
		case "totalOption2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#totalOption2").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create option. The &lt;option&gt; tag defines an option in a select list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optionOpenTag2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optionCloseTag2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "option2Value":
			introjs.refresh();
			$("#option2Value").removeClass("hide");
			$("#option2Text").removeClass("hide");
			$("#option2Body").removeClass("hide");
			$("#option2Body").addClass("opacity00");
			introjs.refresh();
			textFocus("option2Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="<b class ="ct-code-b-yellow">Current Account</b>". The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option2Text");
				});
			});
		break;
		case "option2Body":
			introjs.refresh();
			$("#option2Body").removeClass("opacity00");
			$("#option2Val").removeClass("hide");
			introjs.refresh();
			textFocus("option2Val");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Current Account</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option2Val");
				});
			});
		break;
		case "totalOption3":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#totalOption3").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create option. The &lt;option&gt; tag defines an option in a select list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optionOpenTag3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optionCloseTag3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "option3Value":
			introjs.refresh();
			$("#option3Value").removeClass("hide");
			$("#option3Text").removeClass("hide");
			$("#option3Body").removeClass("hide");
			$("#option3Body").addClass("opacity00");
			introjs.refresh();
			textFocus("option3Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="<b class ="ct-code-b-yellow">Women Saving Account</b>". The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option3Text");
				});
			});
		break;
		case "option3Body":
			introjs.refresh();
			$("#option3Body").removeClass("opacity00");
			$("#option3Val").removeClass("hide");
			introjs.refresh();
			textFocus("option3Val");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Women Saving Account</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option3Val");
				});
			});
		break;
		case "totalOption4":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#totalOption4").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create option. The &lt;option&gt; tag defines an option in a select list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optionOpenTag4").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optionCloseTag4").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "option4Value":
			introjs.refresh();
			$("#option4Value").removeClass("hide");
			$("#option4Text").removeClass("hide");
			$("#option4Body").removeClass("hide");
			$("#option4Body").addClass("opacity00");
			introjs.refresh();
			textFocus("option4Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="<b class ="ct-code-b-yellow">Salary Account</b>". The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option4Text");
				});
			});
		break;
		case "option4Body":
			introjs.refresh();
			$("#option4Body").removeClass("opacity00");
			$("#option4Val").removeClass("hide");
			introjs.refresh();
			textFocus("option4Val");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Salary Account</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option4Val");
				});
			});
		break;
		case "totalOption5":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#totalOption5").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create option. The &lt;option&gt; tag defines an option in a select list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optionOpenTag5").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optionCloseTag5").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "option5Value":
			introjs.refresh();
			$("#option5Value").removeClass("hide");
			$("#option5Text").removeClass("hide");
			$("#option5Body").removeClass("hide");
			$("#option5Body").addClass("opacity00");
			introjs.refresh();
			textFocus("option5Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="<b class ="ct-code-b-yellow">NRO Saving Account</b>". The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option5Text");
				});
			});
		break;
		case "option5Body":
			introjs.refresh();
			$("#option5Body").removeClass("opacity00");
			$("#option5Val").removeClass("hide");
			introjs.refresh();
			textFocus("option5Val");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">NRO Saving Account</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option5Val");
				});
			});
		break;
		case "totalOptgroup1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a optgroup inside select. The  &lt;optgroup&gt; is used to create group related options in a drop-down list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optgroupOpenTag1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optgroupCloseTag1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "optLabel1":
			introjs.refresh();
			$("#optLabel1").removeClass("hide");
			$("#optLabel1Text").removeClass("hide");
			introjs.refresh();
			textFocus("optLabel1Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter label="<b class ="ct-code-b-yellow">Domestic</b>". The label attribute specifies a label for an option-group. Let us create another optgroup.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("optLabel1Text");
				});
			});
		break;
		case "totalOptgroup2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create another optgroup inside select. The  &lt;optgroup&gt; is used to create group related options in a drop-down list.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#optgroupOpenTag2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#optgroupCloseTag2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "optLabel2":
			introjs.refresh();
			$("#optLabel2").removeClass("hide");
			$("#optLabel2Text").removeClass("hide");
			introjs.refresh();
			textFocus("optLabel2Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter label="<b class ="ct-code-b-yellow">NRI</b>". The label attribute specifies a label for an option-group.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("optLabel2Text");
				});
			});
		break;
		case "fieldset1":
			introjs.refresh();
			$("#fieldset1").removeClass("hide");
			$("#fieldsetOpenTag").removeClass("hide");
			introjs.refresh();
			textFocus("fieldsetOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Let us create <b class ="ct-code-b-yellow">fieldset</b>. Fieldset is used to group related elements in a form. Enter <b class ="ct-code-b-yellow">&lt;fieldset&gt;</b> open tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("fieldsetOpenTag");
				});
			});
		break;
		case "fieldset2":
			introjs.refresh();
			$("#fieldset2").removeClass("hide");
			$("#fieldsetCloseTag").removeClass("hide");
			introjs.refresh();
			textFocus("fieldsetCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">&lt;/fieldset&gt;</b> close tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("fieldsetCloseTag");
				});
			});
		break;
		case "legend1":
			introjs.refresh();
			$("#legend1").removeClass("hide");
			$("#legendOpenTag").removeClass("hide");
			introjs.refresh();
			textFocus("legendOpenTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = '&lt;legend&gt; tag defines a caption for the &lt;fieldset&gt; element. Enter <b class ="ct-code-b-yellow">&lt;legend&gt;</b> open tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("legendOpenTag");
				});
			});
		break;
		case "legend2":
			introjs.refresh();
			$("#legend2").removeClass("hide");
			$("#legendCloseTag").removeClass("hide");
			$("#legendBody").removeClass("hide");
			$("#legendText").removeClass("hide");
			$("#legendBody").addClass("opacity00");
			introjs.refresh();
			textFocus("legendCloseTag");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">&lt;/legend&gt;</b> close tag.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("legendCloseTag");
					
				});
			});
		break;
		case "legendBody":
			introjs.refresh();
			$("#legendBody").removeClass("opacity00");
			introjs.refresh();
			textFocus("legendText");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">Address For Communication</b>.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("legendText");
				});
			});
		break;
		case "totalInputs":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create input fields.";
				introjs.refresh();
				typing($(".introjs-tooltiptext"), text, function() {
					$("#input1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#input2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#input3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			});
		break;
		case "submit":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a button.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#submit").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton').show();
					});	
				});
			});
		break;
		case "optStyle1":
			introjs.refresh();
			$("#optStyle1").removeClass("hide");
			$("#optStyle1Text").removeClass("hide");
			introjs.refresh();
			textFocus("optStyle1Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter style="<b class ="ct-code-b-yellow">color:red</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("optStyle1Text");
				});
			});
		break;
		case "optStyle2":
			introjs.refresh();
			$("#optStyle2").removeClass("hide");
			$("#optStyle2Text").removeClass("hide");
			introjs.refresh();
			textFocus("optStyle2Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter style="<b class ="ct-code-b-yellow">color:blue</b>".';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("optStyle2Text");
				});
			});
		break;
		case "browser":
			if (introjs._currentStep == 7) {
				$('.introjs-nextbutton').hide();
				$("#browser").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>label</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv").append("<span><html><body><label>Name: </label></body></html></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 9) {
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>input</b> field.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv > span:last-child").append("<span><html><body><input id='inputName' type='text' placeholder='Name'></body></html></span><br>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 13) {
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>input</b> field.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv > span:last-child").append("<span><html><body><label>Select Account Type: </label></body></html></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 31) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the select. Let us group the related options in a drop-down list by using optgroup.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > span:last-child").append("<span><select id='firstSelect'>"
								+ "<option>"+$("#option1Val").val()+"</option>"
								+ "<option>"+$("#option2Val").val()+"</option>"
								+ "<option>"+$("#option3Val").val()+"</option>"
								+ "<option>"+$("#option4Val").val()+"</option>"
								+ "<option>"+$("#option5Val").val()+"</option>"
								+ "</select></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 36) {
				$("#firstSelect").hide();
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the select and optgroup with options.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > span:last-child").append("<span><select><optgroup id='opt1' label="+ $("#optLabel1Text").val() +">"
										+ "<option>"+$("#option1Val").val()+"</option>"
										+ "<option>"+$("#option2Val").val()+"</option>"
										+ "<option>"+$("#option3Val").val()+"</option>"
										+ "</optgroup>"
										+ "<optgroup id='opt2' label='" + $("#optLabel2Text").val() + "'>"
										+ "<option>"+$("#option4Val").val()+"</option>"
										+ "<option>"+$("#option5Val").val()+"</option>"
										+ "</optgroup></select></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 42) {
				$("#secondDiv").hide();
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the fieldset with legend.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > span:last-child").append("<div><div id='firstLegend'><fieldset style='padding: 5px;'><legend>"+ $("#legendText").val() + "</legend></fieldset></div></div>")
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 44) {
				$("#firstLegend").hide();
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now let us add inline-style to optgroup.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > span:last-child").append("<div><div id='secondLegend'><fieldset style='padding: 5px;'><legend>"+ $("#legendText").val() + "</legend>"
							+"<label>E-mail: </label><input type='text' placeholder='E-mail'><br>" 
							+"<label>Mobile: </label><input type='text' placeholder='Number'><br>"
							+"<label>Address: </label><input type='text' placeholder='Address'><br>"
							+ "</fieldset></div></div>");
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 46) {
				$("#secondLegend").hide();
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now let us add style to optgroup.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > span:last-child").append("<div><fieldset style='padding: 5px;'><legend>"+ $("#legendText").val() + "</legend>"
								+"<label>E-mail: </label><input id='email' type='text' placeholder='E-mail'><br>" 
								+"<label>Mobile: </label><input id='phNumber' type='text' placeholder='Number'><br>"
								+"<label>Address: </label><input id='address' type='text' placeholder='Address'><br>"
								+ "<input style='margin-left:64px' id='input' type='submit' value='submit' onclick='return codetantra()'></input>"
								+ "</fieldset></div>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 48) {
					introjs.refresh();
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "Click on select and see the result the color will be changed.";
						typing(".introjs-tooltiptext", text, function() {
							$("#opt1").addClass("style1");
							$('.introjs-nextbutton').show();
						});
					});
			} else if (introjs._currentStep == 50) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Click on select and see the result the color will be changed.";
					typing(".introjs-tooltiptext", text, function() {
						$("#opt2").addClass("style2");
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
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

function codetantra() {
	$("#urlText2").effect( "highlight",{color: '#ffff33'}, 2000);
	$("#formUrl").addClass("zIndex");
	$("#spinArrow").addClass("fa-spin")
	
	$("#outputDiv2").empty();
	$("#outputDiv2").append("<div><h3>Submitted Data</h3></div>");
	$("#outputDiv2").append("<div><h5>Name: " + $("#inputName").val() + "</h5></div>");
	$("#outputDiv2").append("<div><h5>Your are selected: " + $("select").last().val()+ "</h5></div>");
	$("#formUrl").removeClass("zIndex");
	$("#outputDiv").addClass("hide");
	$("#outputDiv2").removeClass("hide");
	$("#urlText").addClass("hide");
	$("#urlText2").removeClass("hide");
	$("#activeArrow").removeClass("hide");
	$("#inActiveArrow").addClass("hide");
	$("#outputDiv2").append("<div><h5>E-mail: " + $("#email").val() + "</h5></div>");
	$("#outputDiv2").append("<div><h5>Mobile: " + $("#phNumber").val() + "</h5></div>");
	$("#outputDiv2").append("<div><h5>Address: " + $("#address").val() + "</h5></div>");
	$("#spinArrow").removeClass("fa-spin")
}

function returnArrow() {
	$("#activeArrow").addClass("hide");
	$("#inActiveArrow").removeClass("hide");
	$("#outputDiv").removeClass("hide");
	$("#outputDiv2").addClass("hide");
	$("#urlText").removeClass("hide");
	$("#urlText2").addClass("hide");
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Form Elements</h4>
</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-6">
		<div id="code" class="opacity00">
			<span id="htmlOpenTag" class="opacity00">&lt;html&gt;</span><br>
				<span id="headOpenTag" class="opacity00">&lt;head&gt;</span><br>
				<span id="totalTitle" class="opacity00"><span id="titleOpenTag">&lt;title&gt;</span>form-elements<span id="titleCloseTag">&lt;/title&gt;</span></span><br>
				<span id="headCloseTag" class="opacity00">&lt;/head&gt;</span><br>
				<span id="bodyOpenTag" class="opacity00">&lt;body&gt;</span><br>
					&emsp;&emsp;<span id="totalForm"><span id="formOpenTag" class="opacity00">&lt;form <span id="action" class="hide">action="<input id="url" class="hide input-css5" maxlength='8' originalText="data.jsp">"</span>&gt;</span><br>
					&emsp;&emsp;&emsp;&emsp;<span id="label1" class="hide input-css0"><input id="labelOpenTag1" class="hide input-css0" maxlength='7' originalText="<label>"></span> <span id="labelBody1" class="hide input-css0"><input id="label1Text" class="hide input-css0" maxlength='5' originalText="Name:"></span> <span id="label12" class="hide input-css5"><input id="labelCloseTag1" class="hide input-css5" maxlength='8' originalText="</label>"></span><span id="inputTag1" class="opacity00">&lt;input type="text" name="name" placeholder="Name"&gt;</span><br>
					&emsp;&emsp;&emsp;&emsp;<span id="label2" class="hide input-css0"><input id="labelOpenTag2" class="hide input-css0" maxlength='7' originalText="<label>"></span> <span id="labelBody2" class="hide input-css0"><input id="label2Text" class="hide input-css1" maxlength='21' originalText="Select Account Type: "></span> <span id="label22" class="hide input-css5"><input id="labelCloseTag2" class="hide input-css5" maxlength='8' originalText="</label>"></span><br>
					&emsp;&emsp;&emsp;&emsp;<span id="totalSelect"><span id="selectOpenTag" class="opacity00">&lt;select <span id="selectName" class="hide">name="<input id="selectText" class="hide input-css2" maxlength='11' originalText="accountType">"</span>&gt;</span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOptgroup1"><span id="optgroupOpenTag1" class="opacity00">&lt;optgroup <span id="optLabel1" class="hide">label="<input id="optLabel1Text" class="hide input-css5" maxlength='8' originalText="Domestic">"</span> <span id="optStyle1" class="hide">style="<input id="optStyle1Text" class="hide input-css9" maxlength='9' originalText="color:red">"</span>&gt;</span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption1" class="opacity00"><span id="optionOpenTag1" class="opacity00">&lt;option <span id="option1Value" class="hide">value="<input id="option1Text" class="hide input-css3" maxlength='15' originalText="Savings Account">"</span>&gt;</span> <span id="option1Body" class="hide input-css3"><input id="option1Val" class="hide input-css3" maxlength='15' originalText="Savings Account"></span> <span id="optionCloseTag1" class="opacity00">&lt;/option&gt;</span></span><br>
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption2" class="opacity00"><span id="optionOpenTag2" class="opacity00">&lt;option <span id="option2Value" class="hide">value="<input id="option2Text" class="hide input-css3" maxlength='15' originalText="Current Account">"</span>&gt;</span> <span id="option2Body" class="hide input-css3"><input id="option2Val" class="hide input-css3" maxlength='15' originalText="Current Account"></span> <span id="optionCloseTag2" class="opacity00">&lt;/option&gt;</span></span><br>
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption3" class="opacity00"><span id="optionOpenTag3" class="opacity00">&lt;option <span id="option3Value" class="hide">value="<input id="option3Text" class="hide input-css1" maxlength='20' originalText="Women Saving Account">"</span>&gt;</span> <span id="option3Body" class="hide input-css1"><input id="option3Val" class="hide input-css1" maxlength='20' originalText="Women Saving Account"></span> <span id="optionCloseTag3" class="opacity00">&lt;/option&gt;</span></span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="optgroupCloseTag1" class="opacity00">&lt;/optgroup&gt;</span></span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOptgroup2"><span id="optgroupOpenTag2" class="opacity00">&lt;optgroup <span id="optLabel2" class="hide">label="<input id="optLabel2Text" class="hide input-css4" maxlength='3' originalText="NRI">"</span> <span id="optStyle2" class="hide">style="<input id="optStyle2Text" class="hide input-css6" maxlength='10' originalText="color:blue">"</span>&gt;</span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption4" class="opacity00"><span id="optionOpenTag4" class="opacity00">&lt;option <span id="option4Value" class="hide">value="<input id="option4Text" class="hide input-css3" maxlength='14' originalText="Salary Account">"</span>&gt;</span> <span id="option4Body" class="hide input-css3"><input id="option4Val" class="hide input-css3" maxlength='14' originalText="Salary Account"></span> <span id="optionCloseTag4" class="opacity00">&lt;/option&gt;</span></span><br>
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption5" class="opacity00"><span id="optionOpenTag5" class="opacity00">&lt;option <span id="option5Value" class="hide">value="<input id="option5Text" class="hide input-css1" maxlength='18' originalText="NRO Saving Account">"</span>&gt;</span> <span id="option5Body" class="hide input-css3"><input id="option5Val" class="hide input-css1" maxlength='18' originalText="NRO Saving Account"></span> <span id="optionCloseTag5" class="opacity00">&lt;/option&gt;</span></span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="optgroupCloseTag2" class="opacity00">&lt;/optgroup&gt;</span></span><br>
					
					&emsp;&emsp;&emsp;&emsp;<span id="selectCloseTag" class="opacity00">&lt;/select&gt;</span></span><br>
					

					&emsp;&emsp;&emsp;&emsp;<span id="fieldset1" class="hide input-css6"><input id="fieldsetOpenTag" class="hide input-css6" maxlength='10' originalText="<fieldset>"></span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="legend1" class="hide input-css5"><input id="legendOpenTag" class="hide input-css5" maxlength='8' originalText="<legend>"></span> <span id="legendBody" class="hide input-css6"><input id="legendText" class="hide input-css8" maxlength='25' originalText="Address For Communication"></span> <span id="legend2" class="hide input-css2"><input id="legendCloseTag" class="hide input-css2" maxlength='9' originalText="</legend>"></span><br>
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalInputs"><span id="input1" class="opacity00">&lt;label&gt;E-mail: &lt;/label&gt;<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;input type="text" name="e-mail" placeholder="E-mail"&gt;</span><br>
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="input2" class="opacity00">&lt;label&gt;Mobile: &lt;/label&gt;<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;input type="text" name="mobile" placeholder="mobile"&gt;</span><br>
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="input3" class="opacity00">&lt;label&gt;Address: &lt;/label&gt;<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;input type="text" name="address" placeholder="mobile"&gt;</span></span><br>
					
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="submit" class="opacity00">&lt;input type="button" value="submit"&gt;</span><br>
					
					&emsp;&emsp;&emsp;&emsp;<span id="fieldset2" class="hide input-css7"><input id="fieldsetCloseTag" class="hide input-css7" maxlength='11' originalText="</fieldset>"></span><br>
					&emsp;&emsp;<span id="formCloseTag" class="opacity00">&lt;/form&gt;</span></span><br>
				<span id="bodyCloseTag" class="opacity00">&lt;/body&gt;</span><br>
			<span id="htmlCloseTag" class="opacity00">&lt;/html&gt;</span>
		</div>
	</div>
	<div class="col-xs-6">
		<div  id="browser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">form-elements</div>
						<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
					</li>
				</ul>
				<span id ="plus"><i class="fa fa-plus"></i></span>
			</div>
			<div class="col-xs-12 padding00" style="border-bottom: 1px solid gray; padding: 2px;">
				<div class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow" id="inActiveArrow"></i><i class="fa fa-arrow-left hide" id="activeArrow" onclick='returnArrow()'></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"  id="spinArrow"></i></span>
				</div>
				<!-- <div class='col-xs-5 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/form.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
					<input type="text" maxlength="100" class="usr-text" class="padding00">
				</div> -->
				<span class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/form.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<div class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</div>
			</div>
			<div class ="html-body" id="outputDiv"></div>
			<div class ="html-body hide" id="outputDiv2"></div>
		</div>	
	</div>		
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>