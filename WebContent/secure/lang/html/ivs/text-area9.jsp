<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>text-area9</title>
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
	width : 13px;
}

.input-css1 {
	border: medium none;
	width : 60px;
}

.input-css2 {
    border: medium none;
    width: 70px;
}

.input-css3 {
    border: medium none;
    width: 80px;
}

.input-css4 {
    border: medium none;
    width: 30px;
}

.input-css5 {
    border: medium none;
    width: 50px;
}

.input-css6 {
    border: medium none;
    width: 240px;
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

#outputDiv, #outputDiv2 {
	border: 1px solid gray;
    font-family: monospace;
    height: 383px;
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

.padding0 {
	padding: 0;
}

#a {
	display: inline-block;
    width: 30%;
}

#x {
	display: inline-block;
}

.introjs-fixParent {
	position: relative !important;
}

.background-color-yellow {
	background-color: yellow;
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
var typing_interval = 10;

$(document).ready(function() {
	introGuide();
		
	$("#rowVal, #colVal, #minVal, #maxVal").on("click keydown keyup", function(e) {
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
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
	});
	
	 $("#textArea, #rowVal, #colVal, #minVal, #maxVal").on("click keydown keyup", function(e) {
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
	
	$("select").on("click", function() {
		$("#appendToUlLi1").css("list-style-type", $(this).val());
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
					position : "bottom"
				},{
			 		element : "#inputDataList",
					intro : "",
					position : "bottom"
				},{
			 		element : "#listValue",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalDataList",
					intro : "",
					position : "bottom"
				},{
			 		element : "#idValue",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalOption1",
					intro : "",
					position : "bottom"
				},{
			 		element : "#option1Value",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalOption2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#option2Value",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalOption3",
					intro : "",
					position : "bottom"
				},{
			 		element : "#option3Value",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalOption4",
					intro : "",
					position : "bottom"
				},{
			 		element : "#option4Value",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalOption5",
					intro : "",
					position : "bottom"
				},{
			 		element : "#option5Value",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#label2",
					intro : "",
					position : "bottom"
				},{
			 		element : "#inputRange",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#output",
					intro : "",
					position : "right"
				},{
			 		element : "#onInput",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalTextArea",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#submit",
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
		switch (elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "250px"});
			var text = "Let us learn about <b class ='ct-code-b-yellow'>Form Elements</b>.";
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
		break;
		case "totalForm":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
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
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
			textFocus("url");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter action="data.jsp".<br> The action attribute specifies where to send the form-data when a form is submitted.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("url");
				});
			});
		break;
		case "label1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a label.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#label1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "inputDataList":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a input.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#inputDataList").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "listValue":
			introjs.refresh();
			$("#listValue").removeClass("hide");
			$("#listText").removeClass("hide");
			introjs.refresh();
			textFocus("listText");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter list="courses".<br>The list attribute refers to a &lt;datalist&gt; element that contains pre-defined options for an &lt;input&gt; element.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("listText");
				});
			});
		break;
		case "totalDataList":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a datalist.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#dataListOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#dataListCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "idValue":
			introjs.refresh();
			$("#idValue").removeClass("hide");
			$("#idText").removeClass("hide");
			introjs.refresh();
			textFocus("idText");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter id="courses". To tie a datalist to an input element, give the input element a list attribute and the datalist an id attribute that match.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("idText");
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
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "option1Value":
			introjs.refresh();
			$("#option1Value").removeClass("hide");
			$("#option1Text").removeClass("hide");
			/* $("#option1Body").removeClass("hide");
			$("#option1Body").addClass("opacity00"); */
			introjs.refresh();
			textFocus("option1Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="C".<br> The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option1Text");
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
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "option2Value":
			introjs.refresh();
			$("#option2Value").removeClass("hide");
			$("#option2Text").removeClass("hide");
			/* $("#option2Body").removeClass("hide");
			$("#option2Body").addClass("opacity00"); */
			introjs.refresh();
			textFocus("option2Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="Java".<br> The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option2Text");
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
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "option3Value":
			introjs.refresh();
			$("#option3Value").removeClass("hide");
			$("#option3Text").removeClass("hide");
			/* $("#option3Body").removeClass("hide");
			$("#option3Body").addClass("opacity00"); */
			introjs.refresh();
			textFocus("option3Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="Selenium".<br> The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option3Text");
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
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "option4Value":
			introjs.refresh();
			$("#option4Value").removeClass("hide");
			$("#option4Text").removeClass("hide");
			/* $("#option4Body").removeClass("hide");
			$("#option4Body").addClass("opacity00"); */
			introjs.refresh();
			textFocus("option4Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="HTML".<br> The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option4Text");
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
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "option5Value":
			introjs.refresh();
			$("#option5Value").removeClass("hide");
			$("#option5Text").removeClass("hide");
			/* $("#option5Body").removeClass("hide");
			$("#option5Body").addClass("opacity00"); */
			introjs.refresh();
			textFocus("option5Text");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter value="CSS".<br> The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("option5Text");
				});
			});
		break;
		
		
		case "label2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a label.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#label2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "inputRange":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a input. min and max are the range, you can change the min and max values.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#inputRange").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						charAtEnd("minVal");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "output":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a output. The &lt;output&gt; element represents the result of a calculation or user action.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#output").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "onInput":
			introjs.refresh();
			$("#onInput").removeClass("hide");
			$("#onInputText").removeClass("hide");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$('#ratingId').addClass("background-color-yellow");
			$('#aId').addClass("background-color-yellow");
			textFocus("onInputText");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>oninput execute a JavaScript when a user writes something in an input field.</li>"
					+ "<li>In this <b class ='ct-code-b-yellow'>input</b> is input element id. And <b class ='ct-code-b-yellow'>rating</b> is output element name.</ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#onInput").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						charAtEnd("onInputText");
					});
				});
			});
		break;
		case "browser":
			if (introjs._currentStep == 19) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$("#browser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>datalist</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv").append("<div style='margin-left:5px'><div><label>Please choose your course.</label></div><input id='dataList' list='courses'><datalist id='courses'>"
								+ "<option value='C'>"
								+ "<option value='Java'>"
								+ "<option value='Selenium'>"
								+ "<option value='HTML'>"
								+ "<option value='CSS'>"
								+ "</datalist></input></div>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 22) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>output</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > div:last-child").append("<div><div style='margin-left:5px' id='firstRange'><form><label>Please give your rating.</label><br> 0 <input id='a' min='0' max='5' value='0' type='range'> 5</form></div></div>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 25) {
				introjs.refresh();
				$("#firstRange").addClass("hide");
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>output</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > div:last-child").append("<div style='margin-left:5px'><html><body><form oninput='rating.value=parseInt(a.value)'><label>Please give your rating.</label><br> 0 <input id='a' min='0' max='5' value='0' type='range'> 5 = User Rating: <output style='display:inline-block' name='rating'></output></form></body></html><div>");
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 27) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>textarea</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > div:last-child").append("<div style='margin-left:5px'><div><label>Please write your comments below.</label></div><textarea id='outputTextArea' placeholder='comments...' rows=" + $("#rowVal").text() + " cols=" + $("#colVal").text() + " style='width:" + $("#colVal").text()+"%'"+">" + $("#textArea").text().trim() + "</textarea></div>")
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 29) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now sumbit. And see the url.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv > div:last-child").append("<div><input style='margin-left:5px' id='input' type='submit' value='submit' onclick='return codetantra()'></input></div>")
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "totalTextArea":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#totalTextArea').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can change the <b class ='ct-code-b-yellow'>row</b> and <b class ='ct-code-b-yellow'>row</b> values. And enter some text in text area.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#comments").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#textAreaOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#textAreaCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								charAtEnd("textArea");
								introjs.refresh();
								$('.introjs-nextbutton').show();
								introjs.refresh();
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
	$("#spinArrow").addClass("fa-spin")
	
	$("#outputDiv2").empty();
	$("#outputDiv2").append("<div><h3>Submitted Data</h3></div>");
	$("#outputDiv2").append("<div><h5>Your are selected: " + $("#dataList").val() + "</h5></div>");
	$("#outputDiv").addClass("hide");
	$("#outputDiv2").removeClass("hide");
	$("#urlText").addClass("hide");
	$("#urlText2").removeClass("hide");
	$("#activeArrow").removeClass("hide");
	$("#inActiveArrow").addClass("hide");
	$("#outputDiv2").append("<div><h5>User Rating: " + $("output").val() + "</h5></div>");
	$("#outputDiv2").append("<div><h5>Comments: " + $("#outputTextArea").val() + "</h5></div>");
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

function editText(selector) {
	$("input").on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if ($(this).val().length >= 1) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
		}
	});
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
<div class="col-xs-12 margin-top-20 padding0">
	<div class="col-xs-offset-1 col-xs-5 padding0">
		<div id="code" class="opacity00 padding0">
			<span id="htmlOpenTag" class="opacity00">&lt;html&gt;</span><br>
				&emsp;<span id="bodyOpenTag" class="opacity00">&lt;body&gt;</span><br>
				&emsp;&emsp;<span id="totalForm"><span id="formOpenTag" class="opacity00">&lt;form <span id="onInput" class="hide">oninput="<input id="onInputText" class="hide input-css6" maxlength='34' originalText="rating.value=parseInt(input.value)">"</span> <span id="action" class="hide">action="<input id="url" class="hide input-css1" maxlength='8' originalText="data.jsp">"</span>&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="label1" class="opacity00">&lt;label&gt;Please choose a course.&lt;/label&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="inputDataList" class="opacity00">&lt;input <span id="listValue" class="hide">list="<input id="listText" class="hide input-css5" maxlength='7' originalText="courses">"</span>&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="totalDataList"><span id="dataListOpenTag" class="opacity00">&lt;datalist <span id="idValue" class="hide">id="<input id="idText" class="hide input-css5" maxlength='7' originalText="courses">"</span>&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption1" class="opacity00"><span id="optionOpenTag1" class="opacity00">&lt;option <span id="option1Value" class="hide">value="<input id="option1Text" class="hide input-css0" maxlength='1' originalText="C">"</span>&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption2" class="opacity00"><span id="optionOpenTag2" class="opacity00">&lt;option <span id="option2Value" class="hide">value="<input id="option2Text" class="hide input-css4" maxlength='4' originalText="Java">"</span>&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption3" class="opacity00"><span id="optionOpenTag3" class="opacity00">&lt;option <span id="option3Value" class="hide">value="<input id="option3Text" class="hide input-css1" maxlength='8' originalText="Selenium">"</span>&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption4" class="opacity00"><span id="optionOpenTag4" class="opacity00">&lt;option <span id="option4Value" class="hide">value="<input id="option4Text" class="hide input-css4" maxlength='4' originalText="HTML">"</span>&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="totalOption5" class="opacity00"><span id="optionOpenTag5" class="opacity00">&lt;option <span id="option5Value" class="hide">value="<input id="option5Text" class="hide input-css4" maxlength='3' originalText="CSS">"</span>&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="dataListCloseTag" class="opacity00">&lt;/datalist&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="label2" class="opacity00">&lt;label&gt;Please give your rating.&lt;/label&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="inputRange" class="opacity00">0 &lt;input type="range" id="input" <span id="min">min="<div class='display-inline-block padding5' contenteditable='true' maxlength='1' id='minVal' spellcheck="false">0</div>"</span> <span id="max">max="<div class='display-inline-block padding5' contenteditable='true' maxlength='1' id='maxVal' spellcheck="false">5</div>" value="0"&gt; 5</span></span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="output" class="opacity00">= <span>User Rating: </span> &lt;output name="rating"&gt;&lt;/output&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="totalTextArea"><span id="comments" class="opacity00">&lt;label&gt;Please write your comments below.&lt;/label&gt;</span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="textAreaOpenTag" class="opacity00">&lt;textarea rows="<div class='display-inline-block' contenteditable='true' maxlength='1' id='rowVal' class="padding5" spellcheck="false">4</div>" cols="<div class='display-inline-block' contenteditable='true' maxlength='1' id='colVal' class="padding5" spellcheck="false">50</div>"&gt;</span>
						&emsp;&emsp;&emsp;&emsp;<div style="margin-left: 20px;" contenteditable='true' maxlength='200' id='textArea' class="padding5" spellcheck="false"></div>
						&emsp;&emsp;&emsp;&emsp;<span id="textAreaCloseTag" class="opacity00">&lt;/textarea&gt;</span></span><br>
						&emsp;&emsp;&emsp;&emsp;<span id="submit" class="opacity00">&lt;input type="button" value="submit"&gt;</span><br>
						&emsp;&emsp;<span id="formCloseTag" class="opacity00">&lt;/form&gt;</span></span><br>
				&emsp;<span id="bodyCloseTag" class="opacity00">&lt;/body&gt;</span><br>
			<span id="htmlCloseTag" class="opacity00">&lt;/html&gt;</span>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="browser" class="opacity00">
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
				<div class='col-xs-5 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/form.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
						<input type="text" maxlength="100" class="usr-text" class="padding00">
				</div>
				<div class='col-xs-3'>
					<div class='url'>
						<span class="col-xs-2 padding00 fa-display"><i class="fa fa-search fa-1x" style="padding: 4px;"></i></span>
						<span class="col-xs-10 padding00">
							<input type="text" maxlength="100" class="usr-text" placeholder='search' >
						</span>
					</div>
				</div>
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