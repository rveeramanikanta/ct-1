<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>nested-lists</title>
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
<title>Insert title here</title>
<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.input-css1 {
	border: medium none;
	width : 40px;
}

.input-css2 {
    border: medium none;
    width: 108px;
}

.input-css3 {
    border: medium none;
    width: 16px;
}

.input-css4 {
    border: medium none;
    width: 64px;
}

.user-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.output-div {
    border: 1px solid gray;
    height: 125px;
}

pre {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 12px;
    margin: 0 0 10px;
    padding: 9.5px;
}

.container {
	padding: 0px;
	margin-top: 30px;
	border: 2px solid grey;
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
</style>
</head>
<body>
<script type="text/javascript">
var putElement;
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;

$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		$("body").keypress(function(e) {
			if (e.which === 13) {
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
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#totalUl",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalUl",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "bottom"
				} ,{
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
			$('.introjs-tooltiptext').append("<ul><li></li></ul>");
			var text = "<li><b class ='ct-code-b-yellow'>HTML</b> allows us to nest different types of lists.</li>"
			 		+ "<li> For example we can put <b class ='ct-code-b-yellow'>Ordered List</b> in <b class ='ct-code-b-yellow'>Unordered List </b> or</li>"
			 		+ " put <b class ='ct-code-b-yellow'>Unordered List</b> in <b class ='ct-code-b-yellow'>Ordered List</b>.";
			typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "code":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#code').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a sample <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#htmlOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#htmlCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#bodyOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#bodyCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		break;
		case "totalUl":
			if (introjs._currentStep == 2) {
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#totalUl').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "235px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a <b class ='ct-code-b-yellow'>Unorder List</b> with a <b class ='ct-code-b-yellow'>List Item</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#ulOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#ulCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#training").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#courses").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
			} else if (introjs._currentStep == 4) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Let us create a <b>Nested List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltipbuttons").append("<span class='user-btn introjs-button' onclick='moveLi()'>Next &#8594;</span>");
					});
				});
			} else if (introjs._currentStep == 23) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Let us create another <b>Nested List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltipbuttons").append("<span class='user-btn introjs-button' onclick='moveLi2()'>Next &#8594;</span>");
					})
				})
			}
		break;
		case "browser":
			if (introjs._currentStep == 3) {
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#browser').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#outputDiv").append("<span><br><ul id='firstUl1'><li  style='margin-top:10px;' id='firstLi1'>Online Training</li></ul></span>");
					$("#outputDiv").append("<span><ul id='firstUl'><li id='firstLi'>Courses</li></ul></span>");
					$('.introjs-nextbutton').show();
				});
			});
			} else if (introjs._currentStep == 10) {
				introjs.refresh();
				$("<span>\n\t&nbsp&nbsp<input id='inputLi2Open' class='input-css1 opacity00' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputOlClose").parent());
				introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi2Open", "", "right"));
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv").append("<span style='margin-top-30px;'><ol id='appendToOl'><li>Java</li></ol></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 14) {
				introjs.refresh();
				$("<span>\n\t&nbsp&nbsp<input id='inputLi3Open' class='input-css1 opacity00' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputOlClose").parent());
				introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi3Open", "", "right"));
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						//$("#outputDiv #firstUl #firstLi").append("<span><ol><li>Web Development</li></ol></span>");
						$("#outputDiv #appendToOl").append("<span><li id='nestedLi'>Web Development</li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 18) {
				introjs.refresh();
				$("<span>\n\t&nbsp&nbsp<input id='inputLi4Open' class='input-css1 opacity00' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputOlClose").parent());
				introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi4Open", "", "right"));
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						//$("#outputDiv #firstUl #firstLi").append("<span><ol><li>Web Development</li></ol></span>");
						$("#outputDiv #appendToOl").append("<span><li>C</li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 22) {
				introjs.refresh();
				//$("<span>\n\t\t<input id='inputLiMove' class='input-css1' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputLi3Open").parent());
				
				$("<span id='inputLiMove' class='opacity00'>\n\t&nbsp&nbsp&lt;/li&gt;</span>").insertBefore($("#inputLi3Open").parent());
				introjs.insertOption(introjs._currentStep + 1, getStep("#totalUl", "", "right"));
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						//$("#outputDiv #firstUl #firstLi").append("<span><ol><li>Web Development</li></ol></span>");
						$("#outputDiv #appendToOl").append("<span><li>Selenium</li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 29) {
				introjs.refresh();
				$("<span>\n\t&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id='inputLi6Open' class='input-css1 ' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputUlClose").parent());
				introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi6Open", "", "right"));
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv #nestedLi").append("<span><ul><li>HTML</li></ul></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}  else if (introjs._currentStep == 33) {
				introjs.refresh();
				/* $("<span>\n\t\t<input id='inputLi6Open' class='input-css1 opacity00' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputUlClose").parent());
				introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi6Open", "", "right")); */
				introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The result of <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv #nestedLi").append("<span><ul><li>CSS</li></ul></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "inputOlOpen":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputOlOpen').removeClass("opacity00");
			textFocus("inputOlOpen");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>ol</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputOlOpen");
					$("<span>\n\t<input id='inputOlClose' class='input-css1 opacity00' maxlength='5' originalText='</ol>'></span>").insertBefore(".dummy");
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputOlClose", "", "right"));
					//textFocus("inputOlClose");
				});
			});
		break;
		case "inputOlClose":
			introjs.refresh();
			$("<span>\n\t&nbsp&nbsp<input id='inputLi1Open' class='input-css1 opacity00' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputOlClose").parent());
			introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi1Open", "", "right"));
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputOlClose').removeClass("opacity00");
			textFocus("inputOlClose");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>ol</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputOlClose");
					introjs.refresh();
				});
			});
		break;
		case "inputLi1Open":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi1Open').removeClass("opacity00");
			textFocus("inputLi1Open");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi1Open");
					$("<span><input id='inputLi1Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputOlClose").parent());
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi1Close", "", "bottom"));
				});
			});
		break;
		case "inputLi1Close":
			introjs.refresh();
			$("<span><input id='li1Data' class='input-css1 opacity00' maxlength='4' originalText='Java'></span>").insertBefore($("#inputLi1Close"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#li1Data", "", "right"));
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi1Close').removeClass("opacity00");
			textFocus("inputLi1Close");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi1Close");
					introjs.refresh();
					//$("<span>\n\t\t<input id='inputLi1Close' class='input-css1' maxlength='5'></span>").insertBefore(".dummy")
					//introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi2Close", "", "right"));
					
					/* $("<span><input id='li1Data' class='input-css2 opacity00' maxlength='30' originalText=''></span>").insertBefore($("#inputLi1Close"));
					introjs.insertOption(introjs._currentStep + 1, getStep("#li1Data", "", "right")); */
				});
			});
		break;
		case "li1Data":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#li1Data').removeClass("opacity00");
			textFocus("li1Data");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>Java</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("li1Data");
					//$(".introjs-nextbutton").show();
				});
			});
		break;
		case "inputLi2Open":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi2Open').removeClass("opacity00");
			textFocus("inputLi2Open");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi2Open");
					$("<span><input id='inputLi2Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputOlClose").parent());
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi2Close", "", "bottom"));
					
				});
			});
		break;
		case "inputLi2Close":
			introjs.refresh();
			$("<span><input id='li2Data' class='input-css2 opacity00' maxlength='15' originalText='Web Development'></span>").insertBefore($("#inputLi2Close"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#li2Data", "", "bottom"));
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi2Close').removeClass("opacity00");
			textFocus("inputLi2Close");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi2Close");
					introjs.refresh();
				});
			});
		break;
		case "li2Data":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#li2Data').removeClass("opacity00");
			textFocus("li2Data");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>Web Development</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("li2Data");
					introjs.insertOption(introjs._currentStep + 1, getStep("#browser", "", "bottom"));
					//$(".introjs-nextbutton").show();
				});
			});
		break;
		case "inputLi3Open":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi3Open').removeClass("opacity00");
			textFocus("inputLi3Open");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi3Open");
					$("<span><input id='inputLi3Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputOlClose").parent());
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi3Close", "", "bottom"));
					
				});
			});
		break;
		case "inputLi3Close":
			introjs.refresh();
			$("<span><input id='li3Data' class='input-css3 opacity00' maxlength='1' originalText='C'></span>").insertBefore($("#inputLi3Close"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#li3Data", "", "bottom"));
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi3Close').removeClass("opacity00");
			textFocus("inputLi3Close");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi3Close");
					introjs.refresh();
				});
			});
		break;
		case "li3Data":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#li3Data').removeClass("opacity00");
			textFocus("li3Data");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>C</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("li3Data");
					introjs.insertOption(introjs._currentStep + 1, getStep("#browser", "", "bottom"));
					//$(".introjs-nextbutton").show();
				});
			});
		break;
		case "inputLi4Open":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi4Open').removeClass("opacity00");
			textFocus("inputLi4Open");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi4Open");
					$("<span><input id='inputLi4Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputOlClose").parent());
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi4Close", "", "bottom"));
					
				});
			});
		break;
		case "inputLi4Close":
			introjs.refresh();
			$("<span><input id='li4Data' class='input-css4 opacity00' maxlength='8' originalText='Selenium'></span>").insertBefore($("#inputLi4Close"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#li4Data", "", "bottom"));
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi4Close').removeClass("opacity00");
			textFocus("inputLi4Close");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi4Close");
					introjs.refresh();
				});
			});
		break;
		case "li4Data":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#li4Data').removeClass("opacity00");
			textFocus("li4Data");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>Selenium</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("li4Data");
					introjs.insertOption(introjs._currentStep + 1, getStep("#browser", "", "bottom"));
					$("#outputDiv").css({"height": "240px"});
					//$(".introjs-nextbutton").show();
				});
			});
		break;
		case "inputUlOpen":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputUlOpen').removeClass("opacity00");
			textFocus("inputUlOpen");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>ul</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputUlOpen");
					//$("<span><input id='inputLi5Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputLiMove").parent());
					$("<span>\n\t&nbsp&nbsp&nbsp&nbsp<input id='inputUlClose' class='input-css1 opacity00' maxlength='5' originalText='</ul>'></span>").insertBefore($("#inputLiMove"));
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputUlClose", "", "bottom"));
					
				});
			});
		break;
		case "inputUlClose":
			introjs.refresh();
			//$("<span><input id='li5Data' class='input-css4 opacity00' maxlength='4' originalText='HTML'></span>").insertBefore($("#inputLi5Close"));
			//introjs.insertOption(introjs._currentStep + 1, getStep("#li5Data", "", "bottom"));
			$("<span>\n\t&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id='inputLi5Open' class='input-css1 opacity00' maxlength='4' originalText='<li>'></span>").insertBefore($("#inputUlClose").parent());
			introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi5Open", "", "right"));
			
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputUlClose').removeClass("opacity00");
			textFocus("inputUlClose");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>ul</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputUlClose");
					introjs.refresh();
				});
			});
		break;
		case "inputLi5Open":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi5Open').removeClass("opacity00");
			textFocus("inputLi5Open");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi5Open");
					$("<span><input id='inputLi5Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputUlClose").parent());
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi5Close", "", "bottom"));
					
				});
			});
		break;
		case "inputLi5Close":
			introjs.refresh();
			$("<span><input id='li5Data' class='input-css1 opacity00' maxlength='4' originalText='HTML'></span>").insertBefore($("#inputLi5Close"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#li5Data", "", "bottom"));
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi5Close').removeClass("opacity00");
			textFocus("inputLi5Close");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi5Close");
					introjs.refresh();
				});
			});
		break;
		case "li5Data":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#li5Data').removeClass("opacity00");
			textFocus("li5Data");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>HTML</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("li5Data");
					introjs.insertOption(introjs._currentStep + 1, getStep("#browser", "", "bottom"));
					//$("#outputDiv").css({"height": "240px"});
					//$(".introjs-nextbutton").show();
				});
			});
		break;
		case "inputLi6Open":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi6Open').removeClass("opacity00");
			textFocus("inputLi6Open");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> open tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi6Open");
					$("<span><input id='inputLi6Close' class='input-css1 opacity00' maxlength='5' originalText='</li>'></span>").insertBefore($("#inputUlClose").parent());
					introjs.insertOption(introjs._currentStep + 1, getStep("#inputLi6Close", "", "bottom"));
					
				});
			});
		break;
		case "inputLi6Close":
			introjs.refresh();
			$("<span><input id='li6Data' class='input-css1 opacity00' maxlength='3' originalText='CSS'></span>").insertBefore($("#inputLi6Close"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#li6Data", "", "bottom"));
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#inputLi6Close').removeClass("opacity00");
			textFocus("inputLi6Close");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>li</b> close tag.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("inputLi6Close");
					introjs.refresh();
					$("#outputDiv").css({"height": "350px"});
				});
			});
		break;
		case "li6Data":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#li6Data').removeClass("opacity00");
			textFocus("li6Data");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Please enter <b class ='ct-code-b-yellow'>CSS</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("li6Data");
					introjs.insertOption(introjs._currentStep + 1, getStep("#browser", "", "bottom"));
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
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

function moveLi() {
	$(".user-btn").remove();
	introjs.refresh();
	var text = "Let us create a Order List inside this list item.";
	typing($(".introjs-tooltiptext"), text, function() {
		$('#li1CloseTag').effect( "transfer", { to: $('#liEndCloseTag'), className:"ui-effects-transfer" }, 1000, function() {
			$('#li1CloseTag').addClass("opacity00");
			$('#liEndCloseTag').removeClass("opacity00");
			$('.introjs-nextbutton').show();
			$("<span>\n\t<input id='inputOlOpen' class='input-css1 opacity00' maxlength='4' originalText='<ol>'></span>").insertBefore(".dummy");
			introjs.insertOption(introjs._currentStep + 1, getStep("#inputOlOpen", "", "right"));
			introjs.refresh();
			//textFocus("inputOlOpen")
		});	
	});
}

function moveLi2() {
	$(".user-btn").remove();
	introjs.refresh();
	var text = "Let us create a Unorder List inside this list item.";
	typing($(".introjs-tooltiptext"), text, function() {
		$('#inputLi2Close').effect( "transfer", { to: $('#inputLiMove'), className:"ui-effects-transfer" }, 1000, function() {
			$('#inputLi2Close').addClass("opacity00");
			$('#inputLiMove').removeClass("opacity00");
			$('.introjs-nextbutton').show();
			$("<span>\n\t&nbsp&nbsp&nbsp&nbsp<input id='inputUlOpen' class='input-css1 opacity00' maxlength='4' originalText='<ul>'></span>").insertBefore($("#inputLiMove"));
			introjs.insertOption(introjs._currentStep + 1, getStep("#inputUlOpen", "", "right"));
			introjs.refresh();
			//textFocus("inputOlOpen")
		});	
	});
}

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector);
	
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

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Nested Lists</h4>
</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
<div id="code" class="opacity00">
<pre class="creampretab"><span id="htmlOpenTag" class="opacity00">&lt;html&gt;</span>
  <span id="bodyOpenTag" class="opacity00">&lt;body&gt;</span>
    <span id="totalUl" class="opacity00"><span id="ulOpenTag" class="opacity00">&lt;ul&gt;</span>
      <span id="training" class="opacity00"><span id="li2OpenTag" class="">&lt;li&gt;</span> Online Training <span id="li2CloseTag" class="">&lt;/li&gt;</span></span>
      <span id="courses" class="opacity00"><span id="li1OpenTag" class="">&lt;li&gt;</span> Courses <span id="li1CloseTag" class="">&lt;/li&gt;</span></span><span class='hide dummy'><br/>&emsp;&emsp;</span>
      <span id="liEndCloseTag" class="opacity00">&lt;/li&gt;</span>
    <span id="ulCloseTag" class="opacity00">&lt;/ul&gt;</span></span>
  <span id="bodyCloseTag" class="opacity00">&lt;/body&gt;</span>
<span id="htmlCloseTag" class="opacity00">&lt;/html&gt;</span></pre> 
	</div>
	</div>
	<div class="col-xs-5">
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
					<span id="urlText">localhost:8080/nested-lists.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</div> -->
				<span class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/nested-lists.jsp</span>
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