<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>types-of-lists</title>
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

.margin-top-30 {
	margin-top: 30px;
}

.margin-top-40 {
	margin-top: 40px;
}

#orderList, #unorderList {
	border: 1px solid gray;
	border-radius: 5px;
	height: 210px;
}

.display-flex {
	display: flex;
}

.border {
	border: 2px solid gray;
	border-radius: 50%;
}

.padding {
	padding: 5px;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-green {
	background-color: #90EE90
}

.user-btn {
	background-color: green;
}

.background-color-blue {
	background-color: #87CEFA
}
.padding3 {
	padding: 3px;
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

.browser-img {
	width: 100%
}

#outputDiv1, #outputDiv2 {
	border: 1px solid gray;
    height: 188px;
}

#outputDiv3 {
	border: 1px solid gray;
    height: 170px;
}

#outputDiv3 {
	border: 1px solid gray;
    height: 155px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
	padding: 3px;
	min-width: 60px;
}


[contenteditable=false] {
	outline: none;
	font-family: monospace;
}

.error-text {
	color: red;
	font-weight: bold;
}

.introjs-tooltip {
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    max-width: 300px;
    min-width: 290px;
    padding: 10px;
    position: absolute;
    transition: opacity 1.1s ease-out 0s;
    visibility: visible;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 10000001 !important;
}

.font-style {
	font-family: Times New Roman;
    font-size: medium;
    font-weight: bold;
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
var delete_key = 46;
var backspace_key = 8;

$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	$("body").attr({ondragstart :"return false"});
	$("*").bind("cut copy paste",function(e) { 
		e.preventDefault();
	});
	$("body").keydown(function(e) {
		 if (e.which === 9) {
			 e.preventDefault();
		}
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
					position: "right"
				},{
			 		element : "#ulCode",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterUlOpenTag",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterUlCloseTag",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiOpenTag1",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag1",
					intro : "",
					position: "bottom"
				},{
			 		element : "#firstLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiOpenTag2",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag2",
					intro : "",
					position: "bottom"
				},{
			 		element : "#secondLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiOpenTag3",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag3",
					intro : "",
					position: "bottom"
				},{
			 		element : "#thirdLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiOpenTag4",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag4",
					intro : "",
					position: "bottom"
				},{
			 		element : "#fourthLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiOpenTag5",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag5",
					intro : "",
					position: "bottom"
				},{
			 		element : "#fifthLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#liData1",
					intro : "",
					position: "bottom"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#liData2",
					intro : "",
					position: "bottom"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#liData3",
					intro : "",
					position: "bottom"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#liData4",
					intro : "",
					position: "bottom"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#liData5",
					intro : "",
					position: "bottom"
				},{
			 		element : "#ulbrowser",
					intro : "",
					position: "bottom"
				},{
			 		element : "#olCode",
					intro : "",
					position: "right"
				},{
			 		element : "#enterOlOpenTag",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterOlCloseTag",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiOpenTag11",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag11",
					intro : "",
					position: "bottom"
				},{
			 		element : "#firstOlLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterLiOpenTag12",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag12",
					intro : "",
					position: "bottom"
				},{
			 		element : "#secondOlLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterLiOpenTag13",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag13",
					intro : "",
					position: "bottom"
				},{
			 		element : "#thirdOlLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterLiOpenTag14",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag14",
					intro : "",
					position: "bottom"
				},{
			 		element : "#fourthOlLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterLiOpenTag15",
					intro : "",
					position: "bottom"
				},{
			 		element : "#enterLiCloseTag15",
					intro : "",
					position: "bottom"
				},{
			 		element : "#fifthOlLi",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#liData11",
					intro : "",
					position: "top"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#liData12",
					intro : "",
					position: "top"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#liData13",
					intro : "",
					position: "top"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#liData14",
					intro : "",
					position: "top"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#liData15",
					intro : "",
					position: "top"
				},{
			 		element : "#olbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#dlCode",
					intro : "",
					position: "right"
				},{
			 		element : "#dlOpenTag",
					intro : "",
					position: "top"
				},{
			 		element : "#dlCloseTag",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDtOpenTag1",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDtCloseTag1",
					intro : "",
					position: "top"
				},{
			 		element : "#firstDt",
					intro : "",
					tooltipClass: "hide"
				},{
			 		element : "#dtData1",
					intro : "",
					position: "top"
				},{
			 		element : "#dlbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDdOpenTag1",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDdCloseTag1",
					intro : "",
					position: "top"
				},{
			 		element : "#firstDd",
					intro : "",
					tooltipClass: "hide"
				},{
			 		element : "#ddData1",
					intro : "",
					position: "top"
				},{
			 		element : "#dlbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDtOpenTag2",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDtCloseTag2",
					intro : "",
					position: "top"
				},{
			 		element : "#secondDt",
					intro : "",
					tooltipClass: "hide"
				},{
			 		element : "#dtData2",
					intro : "",
					position: "top"
				},{
			 		element : "#dlbrowser",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDdOpenTag2",
					intro : "",
					position: "top"
				},{
			 		element : "#enterDdCloseTag2",
					intro : "",
					position: "top"
				},{
			 		element : "#secondDd",
					intro : "",
					tooltipClass: "hide"
				},{
			 		element : "#ddData2",
					intro : "",
					position: "top"
				},{
			 		element : "#dlbrowser",
					intro : "",
					position: "top"
				}, {
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
			var text = "HTML provides a way to display multiple items using <b class ='ct-code-b-yellow'>lists</b>.<br>"
					+ " <b class ='ct-code-b-yellow'>lists</b>  are 3 types<br>"
					+ "<b class ='ct-code-b-yellow'>1.Unordered List</b><br>"
					+ "<b class ='ct-code-b-yellow'>2.Ordered List</b><br>"
					+ "<b class ='ct-code-b-yellow'>3.Definition List</b><br>"
					+ "<li>Let us see how <b class ='ct-code-b-yellow'>Unorderd List</b> will work.</li>";
			typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "ulCode":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#ulCode').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is basic <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#ulHtmlOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#ulHtmlCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#ulBodyOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#ulBodyCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$(this).removeClass("animated zoomIn");
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		break;
		case "enterUlOpenTag":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterUlOpenTag");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;ul&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterUlOpenTag");
					++buttonCount;
				});
			});
		break;
		case "enterUlCloseTag":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterUlCloseTag");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/ul&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterUlCloseTag");
					++buttonCount;
				});
			});
		break;
		case "enterLiOpenTag1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag1");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag1");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag1");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag1");
					++buttonCount;
				});
			});
		break;
		case "firstLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "ulbrowser":
			if (introjs._currentStep == 7) {
				$('.introjs-nextbutton').hide();
				$("#ulbrowser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> first <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<br><br><ul id='ulFirstLi'><span><li id='liTransfer1'></li></span></ul>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 11) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> seond <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<ul id='ulSecondLi'><span><li id='liTransfer2'></li></span></ul>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 15) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> third <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<ul id='ulThirdLi'><span><li id='liTransfer3'></li></span></ul>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 19) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> fourth <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<ul id='ulFourthLi'><span><li id='liTransfer4'></li></span></ul>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 23) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.<br> fifth <b class ='ct-code-b-yellow'>li</b>.<br>"
							+ " Let us add some data into the <b class ='ct-code-b-yellow'>&lt;li&gt;</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<ul id='ulFifthLi'><span><li id='liTransfer5'></li></span></ul>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 25) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "First <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1 #liTransfer1").append("<span id='addToUlLi1'>" + $("#liData1").text() + "</span>");
						$("#addToUlLi1").addClass("opacity00");
						$('#liData1').effect( "transfer", { to: $('#liTransfer1'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToUlLi1").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 27) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Second <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1 #liTransfer2").append("<span id='addToUlLi2'>" + $("#liData2").text() + "</span>");
						$("#addToUlLi2").addClass("opacity00");
						$('#liData2').effect( "transfer", { to: $('#liTransfer2'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToUlLi2").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 29) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Third <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1 #liTransfer3").append("<span id='addToUlLi3'>" + $("#liData3").text() + "</span>");
						$("#addToUlLi3").addClass("opacity00");
						$('#liData3').effect( "transfer", { to: $('#liTransfer3'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToUlLi3").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 31) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Fourth <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1 #liTransfer4").append("<span id='addToUlLi4'>" + $("#liData4").text() + "</span>");
						$("#addToUlLi4").addClass("opacity00");
						$('#liData4').effect( "transfer", { to: $('#liTransfer4'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToUlLi4").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 33) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Fifth <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.<br>"
							+ " Now let us see <b class ='ct-code-b-yellow'>Ordered List</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1 #liTransfer5").append("<span id='addToUlLi5'>" + $("#liData5").text() + "</span>");
						$("#addToUlLi5").addClass("opacity00");
						$('#liData5').effect( "transfer", { to: $('#liTransfer5'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToUlLi5").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
		break;
		case "enterLiOpenTag2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag2");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag2");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag2");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag2");
					++buttonCount;
				});
			});
		break;
		case "secondLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "enterLiOpenTag3":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag3");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag3");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag3":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag3");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag3");
					++buttonCount;
				});
			});
		break;
		case "thirdLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "enterLiOpenTag4":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag4");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag4");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag4":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag4");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag4");
					++buttonCount;
				});
			});
		break;
		case "fourthLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "enterLiOpenTag5":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag5");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag5");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag5":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag5");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag5");
					++buttonCount;
				});
			});
		break;
		case "fifthLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "liData1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData1");
				introjs.refresh();
				var text = "Enter the data into first <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData1");
					++buttonCount;
				});
			});
		break;
		case "liData2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData2");
				introjs.refresh();
				var text = "Enter the data into second <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData2");
					++buttonCount;
				});
			});
		break;
		case "liData3":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData3");
				introjs.refresh();
				var text = "Enter the data into second <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData3");
					++buttonCount;
				});
			});
		break;
		case "liData4":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData4");
				introjs.refresh();
				var text = "Enter the data into second <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData4");
					++buttonCount;
				});
			});
		break;
		case "liData5":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData5");
				introjs.refresh();
				var text = "Enter the data into second <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData5");
					++buttonCount;
				});
			});
		break;
		case "olCode":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#olCode').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#olHtmlOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#olHtmlCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#olBodyOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#olBodyCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$(this).removeClass("animated zoomIn");
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		break;
		case "enterOlOpenTag":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterOlOpenTag");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;ol&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterOlOpenTag");
					++buttonCount;
				});
			});
		break;
		case "enterOlCloseTag":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterOlCloseTag");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/ol&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterOlCloseTag");
					++buttonCount;
				});
			});
		break;
		case "enterLiOpenTag11":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag11");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag11");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag11":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag11");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag11");
					++buttonCount;
				});
			});
		break;
		case "firstOlLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "olbrowser":
			if (introjs._currentStep == 40) {
				$('.introjs-nextbutton').hide();
				$("#olbrowser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> first <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2").append("<br><br><ol id='olAppendLi'><span><li id='liTransfer11'></li></span></ol>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 44) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> second <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #olAppendLi").append("<span><li id='liTransfer12'></li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 48) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> third <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #olAppendLi").append("<span><li id='liTransfer13'></li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 52) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> fourth <b class ='ct-code-b-yellow'>li</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #olAppendLi").append("<span><li id='liTransfer14'></li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 56) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Ordered List</b>.<br> fifth <b class ='ct-code-b-yellow'>li</b>."
							+ " Let us enter data into <b class ='ct-code-b-yellow'>li</b>";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #olAppendLi").append("<span><li id='liTransfer15'></li></span>");
						$('.introjs-nextbutton').show();
					});
				});
			}  if (introjs._currentStep == 58) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "First <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #liTransfer11").append("<span id='addToOlLi1'>" + $("#liData11").text() + "</span>");
						$("#addToOlLi1").addClass("opacity00");
						$('#liData11').effect( "transfer", { to: $('#liTransfer11'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToOlLi1").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 60) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Second <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #liTransfer12").append("<span id='addToOlLi2'>" + $("#liData12").text() + "</span>");
						$("#addToOlLi2").addClass("opacity00");
						$('#liData12').effect( "transfer", { to: $('#liTransfer12'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToOlLi2").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 62) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Third <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #liTransfer13").append("<span id='addToOlLi3'>" + $("#liData13").text() + "</span>");
						$("#addToOlLi3").addClass("opacity00");
						$('#liData13').effect( "transfer", { to: $('#liTransfer13'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToOlLi3").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 64) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Fourth <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #liTransfer14").append("<span id='addToOlLi4'>" + $("#liData14").text() + "</span>");
						$("#addToOlLi4").addClass("opacity00");
						$('#liData14').effect( "transfer", { to: $('#liTransfer14'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToOlLi4").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 66) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Fifth <b class ='ct-code-b-yellow'>&lt;li&gt;</b> data."
						+ " Now let us see <b class ='ct-code-b-yellow'>Description Lists</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv2 #liTransfer15").append("<span id='addToOlLi5'>" + $("#liData15").text() + "</span>");
						$("#addToOlLi5").addClass("opacity00");
						$('#liData15').effect( "transfer", { to: $('#liTransfer15'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToOlLi5").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
		break;
		case "enterLiOpenTag12":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag12");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag12");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag12":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag12");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag12");
					++buttonCount;
				});
			});
		break;
		case "secondOlLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "enterLiOpenTag13":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag13");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag13");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag13":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag13");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag13");
					++buttonCount;
				});
			});
		break;
		case "thirdOlLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "enterLiOpenTag14":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag14");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag14");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag14":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag14");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag14");
					++buttonCount;
				});
			});
		break;
		case "fourthOlLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "enterLiOpenTag15":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiOpenTag15");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiOpenTag15");
					++buttonCount;
				});
			});
		break;
		case "enterLiCloseTag15":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterLiCloseTag15");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>List Item</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/li&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterLiCloseTag15");
					++buttonCount;
				});
			});
		break;
		case "fifthOlLi":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "liData11":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData11");
				introjs.refresh();
				var text = "Enter the data into first <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData11");
					++buttonCount;
				});
			});
		break;
		case "liData12":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData12");
				introjs.refresh();
				var text = "Enter the data into second <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData12");
					++buttonCount;
				});
			});
		break;
		case "liData13":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData13");
				introjs.refresh();
				var text = "Enter the data into third <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData13");
					++buttonCount;
				});
			});
		break;
		case "liData14":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData14");
				introjs.refresh();
				var text = "Enter the data into fourth <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData14");
					++buttonCount;
				});
			});
		break;
		case "liData15":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("liData15");
				introjs.refresh();
				var text = "Enter the data into fifth <b class ='ct-code-b-yellow'>&lt;li&gt;</b>."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("liData15");
					++buttonCount;
				});
			});
		break;
		case "dlCode":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#dlCode').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#dlHtmlOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#dlHtmlCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#dlBodyOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#dlBodyCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$(this).removeClass("animated zoomIn");
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		break;
		case "dlOpenTag":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("dlOpenTag");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>Definition List</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;dl&gt;</b> tag."
				typing(".introjs-tooltiptext", text, function() {
					textFocus("dlOpenTag");
					++buttonCount;
				});
			});
		break;
		case "dlCloseTag":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("dlCloseTag");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>Definition List</b>.<br> i.e <b class ='ct-code-b-yellow'>&lt;/dl&gt;</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("dlCloseTag");
					++buttonCount;
				});
			});
		break;
		case "enterDtOpenTag1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDtOpenTag1");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>&lt;dt&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;dt&gt;</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDtOpenTag1");
					++buttonCount;
				});
			});
		break;
		case "enterDtCloseTag1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDtCloseTag1");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>&lt;dt&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;/dt&gt;</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDtCloseTag1");
					++buttonCount;
				});
			});
		break;
		case "firstDt":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "dtData1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("dtData1");
				introjs.refresh();
				var text = "Enter <b class ='ct-code-b-yellow'>CT</b> inside <b class ='ct-code-b-yellow'>&lt;dt&gt;</b> tag.</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("dtData1");
					++buttonCount;
				});
			});
		break;
		case "dlbrowser":
			if (introjs._currentStep == 74) {
				$('.introjs-nextbutton').hide();
				$("#dlbrowser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Definition List</b>.<br> first <b class ='ct-code-b-yellow'>dt</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv3").append("&nbsp;&nbsp;<span id='addToDt1'>" + $("#dtData1").text() + "</span>");
						$("#addToDt1").addClass("opacity00");
						$('#dtData1').effect( "transfer", { to: $('#addToDt1'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToDt1").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 79) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Definition List</b>.<br> first <b class ='ct-code-b-yellow'>dd</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv3").append("<div  id='addToDd1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>-" + $("#ddData1").text() + "</span></div>");
						$("#addToDd1").addClass("opacity00");
						$('#ddData1').effect( "transfer", { to: $('#addToDd1'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToDd1").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 84) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Definition List</b>.<br> second <b class ='ct-code-b-yellow'>dt</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv3").append("<div  id='addToDt2'>&nbsp;&nbsp;<span>" + $("#dtData2").text() + "</span></div>");
						$("#addToDt2").addClass("opacity00");
						$('#dtData2').effect( "transfer", { to: $('#addToDt2'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToDt2").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} if (introjs._currentStep == 89) {
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Definition List</b>.<br> second <b class ='ct-code-b-yellow'>dd</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv3").append("<div  id='addToDd2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>-" + $("#ddData2").text() + "</span></div>");
						$("#addToDd2").addClass("opacity00");
						$('#ddData2').effect( "transfer", { to: $('#addToDd2'), className:"ui-effects-transfer" }, 1000, function() {
							$("#addToDd2").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
		break;
		case "enterDdOpenTag1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDdOpenTag1");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDdOpenTag1");
					++buttonCount;
				});
			});
		break;
		case "enterDdCloseTag1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDdCloseTag1");
				introjs.refresh();
				var text = "Close the data <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;/dd&gt;</b> tag.</b></b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDdCloseTag1");
					++buttonCount;
				});
			});
		break;
		case "firstDd":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "ddData1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("ddData1");
				introjs.refresh();
				var text = "Enter <b class ='ct-code-b-yellow'>CodeTantra</b> inside <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("ddData1");
					++buttonCount;
				});
			});
		break;
		case "enterDtOpenTag2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDtOpenTag2");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>&lt;dt&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;dt&gt;</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDtOpenTag2");
					++buttonCount;
				});
			});
		break;
		case "enterDtCloseTag2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDtCloseTag2");
				introjs.refresh();
				var text = "Close the <b class ='ct-code-b-yellow'>&lt;dt&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;/dt&gt;</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDtCloseTag2");
					++buttonCount;
				});
			});
		break;
		case "secondDt":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "dtData2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("dtData2");
				introjs.refresh();
				var text = "Enter <b class ='ct-code-b-yellow'>WWW</b> inside <b class ='ct-code-b-yellow'>&lt;dt&gt;</b> tag.</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("dtData2");
					++buttonCount;
				});
			});
		break;
		case "enterDdOpenTag2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDdOpenTag2");
				introjs.refresh();
				var text = "Open the <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDdOpenTag2");
					++buttonCount;
				});
			});
		break;
		case "enterDdCloseTag2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterDdCloseTag2");
				introjs.refresh();
				var text = "Close the data <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.<br> i.e <b class ='ct-code-b-yellow'>&lt;/dd&gt;</b> tag.</b></b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterDdCloseTag2");
					++buttonCount;
				});
			});
		break;
		case "secondDd":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "ddData2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("ddData2");
				introjs.refresh();
				var text = "Enter <b class ='ct-code-b-yellow'>World Wide Web</b> inside <b class ='ct-code-b-yellow'>&lt;dd&gt;</b> tag.</b>"
				typing(".introjs-tooltiptext", text, function() {
					textFocus("ddData2");
					++buttonCount;
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

function editText(selector, buttonCount) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
			if ($.inArray(e.keyCode, [delete_key, backspace_key, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			
			if (e.altKey && e.keyCode == 77) {
				$(selector).text($(selector).attr("originalText"));
			}
			
			if ($(this).text().length > max-1) {
				if (buttonCount == 1) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 2) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 3) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 4) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 5) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 6) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 7) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 8) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 9) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 10) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				}  else if (buttonCount == 11) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 12) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 13) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 14) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 15) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 16) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 17) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 18) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 19) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 20) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 21) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 22) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 23) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				}  else if (buttonCount == 24) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 25) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				}  else if (buttonCount == 26) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 27) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				}  else if (buttonCount == 28) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 29) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 30) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 31) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 32) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 33) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 34) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 35) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 36) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 37) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 38) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 39) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 2.</span>");
				} else if (buttonCount == 40) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 41) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 42) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 10.</span>");
				} else if (buttonCount == 43) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 44) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 45) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 3.</span>");
				} else if (buttonCount == 46) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 4.</span>");
				} else if (buttonCount == 47) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 5.</span>");
				} else if (buttonCount == 48) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>String length restricted to 15.</span>");
				}
				if ($.inArray(e.keyCode, [delete_key, backspace_key, 9, 27, 37, 39, 13]) !== -1) {
					return;
				}
				if (e.keyCode == 13 && e.keyCode == 9) {
					e.preventDefault();
				}
				e.preventDefault();1
			}
	});
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
			if (buttonCount == 1) {
				if ($(this).text() == "<ul>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter ul open tag.</span>");
				}
			} else if (buttonCount == 2) {
				$(this).attr('contenteditable', true);
				if ($(this).text() == "</ul>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter ul close tag.</span>");
				}
		  }	else if (buttonCount == 3) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 4) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  }	else if (buttonCount == 5) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 6) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  } else if (buttonCount == 7) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 8) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  }  else if (buttonCount == 9) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 10) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  }  else if (buttonCount == 11) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 12) {
			  $(this).attr('contenteditable', true);
			  if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  }  else if (buttonCount == 13) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 14) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 15) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 16) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 17) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 18) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<ol>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter ol open tag.</span>");
				}
		  } else if (buttonCount == 19) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</ol>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter ol close tag.</span>");
				}
		  } else if (buttonCount == 20) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 21) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  } else if (buttonCount == 22) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 23) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  } else if (buttonCount == 24) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 25) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  } else if (buttonCount == 26) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 27) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  } else if (buttonCount == 28) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li open tag.</span>");
				}
		  } else if (buttonCount == 29) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</li>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter li close tag.</span>");
				}
		  } else if (buttonCount == 30) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 31) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 32) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 33) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 34) {
			  $(this).attr('contenteditable', true);
			  if (($(this).text().length) >= 1) {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					//$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a string.</span>");
				}
		  } else if (buttonCount == 35) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<dl>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dl open tag.</span>");
				}
		  } else if (buttonCount == 36) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</dl>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dl close tag.</span>");
				}
		  } else if (buttonCount == 37) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<dt>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dt open tag.</span>");
				}
		  } else if (buttonCount == 38) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</dt>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dt close tag.</span>");
				}
		  } else if (buttonCount == 39) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "CT") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter CT.</span>");
				}
		  } else if (buttonCount == 40) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<dd>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dd open tag.</span>");
				}
		  } else if (buttonCount == 41) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</dd>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dd close tag.</span>");
				}
		  } else if (buttonCount == 42) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "CodeTantra") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter CodeTantra.</span>");
				}
		  } else if (buttonCount == 43) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<dt>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dt open tag.</span>");
				}
		  } else if (buttonCount == 44) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</dt>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dt close tag.</span>");
				}
		  } else if (buttonCount == 45) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "WWW") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter WWW.</span>");
				}
		  } else if (buttonCount == 46) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "<dd>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter open dd tag.</span>");
				}
		  } else if (buttonCount == 47) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "</dd>") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter dd close tag.</span>");
				}
		  } else if (buttonCount == 48) {
			  $(this).attr('contenteditable', true);
				if ($(this).text() == "World Wide Web") {
					$('.introjs-nextbutton').show();
					$(this).removeClass("empty");
					$(this).attr('contenteditable', false);
				} else {
					$('.introjs-nextbutton').hide();
					$(this).addClass("empty");
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter World Wide Web.</span>");
				}
		  }
	});
}

function textFocus(selector) {
	$("#" + selector).focus();
	editText('#' + selector, buttonCount);
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Introduction to Different Types Of Lists</h4>
</div>
<div class="col-xs-12">
	<div class="col-xs-offset-1 col-xs-5 margin-top-20">
		<div id="ulCode" class="opacity00">
		<pre class="creampretab"><span id="ulHtmlOpenTag" class="opacity00">&lt;html&gt;</span>
<span id="ulBodyOpenTag" class="opacity00">&lt;body&gt;</span>
	<span id="enterUlOpenTag" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;ul&gt;'></span>
		<span id="firstLi"><span id="enterLiOpenTag1" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData1" contenteditable='true', spellcheck='false', maxlength='10' originalText=''></span><span id="enterLiCloseTag1" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="secondLi"><span id="enterLiOpenTag2" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData2" contenteditable='true', spellcheck='false', maxlength='10' originalText=''></span><span id="enterLiCloseTag2" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="thirdLi"><span id="enterLiOpenTag3" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData3" contenteditable='true', spellcheck='false', maxlength='10' originalText=''></span><span id="enterLiCloseTag3" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="fourthLi"><span id="enterLiOpenTag4" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData4" contenteditable='true', spellcheck='false', maxlength='10' originalText=''></span><span id="enterLiCloseTag4" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="fifthLi"><span id="enterLiOpenTag5" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData5" contenteditable='true', spellcheck='false', maxlength='10' originalText=''></span><span id="enterLiCloseTag5" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
	<span id="enterUlCloseTag" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/ul&gt;'></span>
<span id="ulBodyCloseTag" class="opacity00">&lt;/body&gt;</span>
<span id="ulHtmlCloseTag" class="opacity00">&lt;/html&gt;</span></pre>
		</div>
	</div>
	<div class="col-xs-5 margin-top-20">
		<div  id="ulbrowser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">unordered..</div>
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
					<span id="urlText">localhost:8080/unordered-list.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body" id="outputDiv1"></div>
		</div>	
	</div>
</div>
<div class="col-xs-12">
	<div class="col-xs-offset-1 col-xs-5 margin-top-20">
		<div id="olCode" class="opacity00">
		<pre class="creampretab"><span id="olHtmlOpenTag" class="opacity00">&lt;html&gt;</span>
<span id="olBodyOpenTag" class="opacity00">&lt;body&gt;</span>
	<span id="enterOlOpenTag" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;ol&gt;'></span>
		<span id="firstOlLi"><span id="enterLiOpenTag11" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData11" contenteditable='true', spellcheck='false', maxlength='10'></span><span id="enterLiCloseTag11" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="secondOlLi"><span id="enterLiOpenTag12" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData12" contenteditable='true', spellcheck='false', maxlength='10'></span><span id="enterLiCloseTag12" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="thirdOlLi"><span id="enterLiOpenTag13" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData13" contenteditable='true', spellcheck='false', maxlength='10'></span><span id="enterLiCloseTag13" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="fourthOlLi"><span id="enterLiOpenTag14" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData14" contenteditable='true', spellcheck='false', maxlength='10'></span><span id="enterLiCloseTag14" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
		<span id="fifthOlLi"><span id="enterLiOpenTag15" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;li&gt;'></span><span id="liData15" contenteditable='true', spellcheck='false', maxlength='10'></span><span id="enterLiCloseTag15" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/li&gt;'></span></span>
	<span id="enterOlCloseTag" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/ol&gt;'></span>
<span id="olBodyCloseTag" class="opacity00">&lt;/body&gt;</span>
<span id="olHtmlCloseTag" class="opacity00">&lt;/html&gt;</span></pre>  
		</div>
	</div>
	<div class="col-xs-5 margin-top-20">
		<div  id="olbrowser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">ordered..</div>
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
					<span id="urlText">localhost:8080/ordered-list.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body" id="outputDiv2"></div>
		</div>	
	</div>
</div>
<div class="col-xs-12">
	<div class="col-xs-offset-1 col-xs-5 margin-top-20">
		<div id="dlCode" class="opacity00">
		<pre class="creampretab"><span id="dlHtmlOpenTag" class="opacity00">&lt;html&gt;</span>
<span id="dlBodyOpenTag" class="opacity00">&lt;body&gt;</span>
	<span id="dlOpenTag" contenteditable='true', spellcheck='false', maxlength='4' originalText='&lt;dl&gt;'></span>
		<span id="firstDt"><span id="enterDtOpenTag1" contenteditable='true', spellcheck='false', maxlength='4' originalText='<dt>'></span><span id="dtData1" contenteditable='true', spellcheck='false', maxlength='2' originalText='CT'></span><span id="enterDtCloseTag1" contenteditable='true', spellcheck='false', maxlength='5' originalText='</dt>'></span></span>
		<span id="firstDd"><span id="enterDdOpenTag1" contenteditable='true', spellcheck='false', maxlength='4' originalText='<dd>'></span><span id="ddData1" contenteditable='true', spellcheck='false', maxlength='10' originalText='CodeTantra'></span><span id="enterDdCloseTag1" contenteditable='true', spellcheck='false', maxlength='5' originalText='</dd>'></span></span>
		<span id="secondDt"><span id="enterDtOpenTag2" contenteditable='true', spellcheck='false', maxlength='4' originalText='<dt>'></span><span id="dtData2" contenteditable='true', spellcheck='false', maxlength='3' originalText='WWW'></span><span id="enterDtCloseTag2" contenteditable='true', spellcheck='false', maxlength='5' originalText='</dt>'></span></span>
		<span id="secondDd"><span id="enterDdOpenTag2" contenteditable='true', spellcheck='false', maxlength='4' originalText='<dd>'></span><span id="ddData2" contenteditable='true', spellcheck='false', maxlength='14' originalText='World Wide Web'></span><span id="enterDdCloseTag2" contenteditable='true', spellcheck='false', maxlength='5' originalText='</dd>'></span></span>
	<span id="dlCloseTag" contenteditable='true', spellcheck='false', maxlength='5' originalText='&lt;/dl&gt;'></span>
<span id="dlBodyCloseTag" class="opacity00">&lt;/body&gt;</span>
<span id="dlHtmlCloseTag" class="opacity00">&lt;/html&gt;</span></pre>
		</div>
	</div>
	<div class="col-xs-5 margin-top-20">
		<div  id="dlbrowser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">definition..</div>
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
					<span id="urlText">localhost:8080/definition-list.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body" id="outputDiv3"></div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>