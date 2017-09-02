<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>styling-lists</title>
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

.input-css2 {
    border: medium none;
    width: 220px;
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

.output-div {
    border: 1px solid gray;
    height: 160px;
}

#code {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: monospace;
    font-size: 12px;
    padding: 9.5px;
}

#appendToUlLi1.circle {
    list-style-type: circle;
}

#appendToUlLi1.square {
    list-style-type: square;
}

#appendToUlLi1.upper-roman {
    list-style-type: upper-roman;
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
	
	$("select").on("click", function() {
		$("#appendToUlLi1").css("list-style-type", $(this).val());
	});
	/* $("body").attr({ondragstart :"return false"});
	$("*").bind("cut copy paste",function(e) { 
		e.preventDefault();
	}); */
	
	/* $("[contenteditable=true]").on("keydown keyup", function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
				return;
			}
			
			if (e.altKey && e.keyCode == 77) {
				$(this).text($(this).attr("originalText"));
			}
			
			$("body").keypress(function(e) {
				 if (e.which === 13) {
					 e.preventDefault();
			}
		});
	}); */
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
					position : "bottom"
				},{
			 		element : "#totalUl",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalUl",
					intro : "",
					position : "bottom"
				},{
			 		element : "#inputListStyle",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "bottom"
				},{
			 		element : "#ulOpenTag1",
					intro : "",
					position : "top"
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
			var text = "Let us learn how to style different types of <b class ='ct-code-b-yellow'>Lists</b>.";
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
		case "totalUl":
			if (introjs._currentStep == 2) {
				introjs.refresh();
				$(".introjs-tooltip").css({"min-width": "250px"});
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				//$('#code').removeClass("opacity00");
				$("#ulCloseTag").prev().remove();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Let us create a <b class ='ct-code-b-yellow'>Unorder List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#ulOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#ulCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#totalLi1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$(this).removeClass("animated zoomIn");
									$("#totalLi2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
										$(this).removeClass("animated zoomIn");
										$("#totalLi3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											$(this).removeClass("animated zoomIn");
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
				});
			} if (introjs._currentStep == 4) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now let us change the list <b class ='ct-code-b-yellow'>style</b> by adding <b class ='ct-code-b-yellow'>list-style-type</b>"
						+ " property to the <b class ='ct-code-b-yellow'>Unordered List</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton').show();
					});
				});	
			}
		break;
		case "browser":
			if (introjs._currentStep == 3) {
				$('.introjs-nextbutton').hide();
				$("#browser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv").append("<ul id='appendToUlLi1'><span><li id='firstLi'>" + $("#li1Data").text() + "</li></span>");
						$("#outputDiv #appendToUlLi1").append("<span><li id='secondLi'>" + $("#li2Data").text() + "</li></span>");
						$("#outputDiv #appendToUlLi1").append("<span><li id='secondLi'>" + $("#li3Data").text() + "</li></span></ul>");
						$('.introjs-nextbutton').show();
					});
				});
			} if (introjs._currentStep == 6) {
				$('.introjs-nextbutton').hide();
				$("#browser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "After adding the list-style-type to circle.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<span class='user-btn introjs-button' onclick='revealCircle()'>Next &#8594;</span>");
					});
				});
			}
		break;
		case "inputListStyle":
		introjs.refresh();
		$("#inputListStyle").removeClass("hide");
		$(".introjs-tooltip").css({"min-width": "300px"});
		introjs.refresh();
		textFocus("inputListStyle");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter <b class ="ct-code-b-yellow">style="list-style-type:circle"</b>.';
				typing(".introjs-tooltiptext", text, function() {
					charAtEnd("inputListStyle");
					//$('.introjs-nextbutton').show();
				});
			});
		break
		case "ulOpenTag1":
			introjs.refresh();
			$("#ulOpenTag1").removeClass("hide");
			$("#ulOpenTag").addClass("hide");
			$("#browser").addClass("z-index");
			$("#ulOpenTag1").addClass("z-index");
			$(".introjs-tooltip").css({"min-width": "250px"});
			introjs.refresh();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Select the style. And see the result on browser.";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function() {
							introjs.nextStep()
						}, 8000);
					});
				});
		break
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

function revealCircle() {
	$("#inputListStyle").addClass("z-index");
	$('#inputListStyle').effect( "transfer", { to: $('#appendToUlLi1'), className:"ui-effects-transfer" }, 1000, function() {
		$("#appendToUlLi1").addClass("circle");
		$("#inputListStyle").removeClass("z-index");
		$(".user-btn").remove();
		$('.introjs-nextbutton').show();
	});
}

function revealSquare() {
	$("#appendToUlLi1").addClass("square");
	$(".user-btn").remove();
	$('.introjs-nextbutton').show();
}

function revealUpperRoman() {
	$("#appendToUlLi1").addClass("upper-roman");
	$(".user-btn").remove();
	$('.introjs-nextbutton').show();
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

function textFocus(selector) {
	$("#"+selector).focus();			
	editText('#'+ selector, buttonCount);
	
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
	<h4 class='label ct-demo-heading' id='demoTitle'>Styling Lists</h4>
</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="opacity00">
			<span id="htmlOpenTag" class="opacity00">&lt;html&gt;</span><br>
				&emsp;<span id="bodyOpenTag" class="opacity00">&lt;body&gt;</span><br>
				&emsp;&emsp;&nbsp;<span id="ulOpenTag1" class="hide">&lt;ul style="list-style-type:<select><option value="circle" id="selectCircle">circle</option>
				<option value="square" id="selectSquare">square</option>
				<option value="lower-roman" id="selectLowerRoman">lower-roman</option>
				<option value="upper-roman" id="selectUpperRoman">upper-roman</option>
				<option value="lower-alpha" id="selectLowerAlpha">lower-alpha</option>
				<option value="upper-alpha" id="selectUpperAlpha">upper-alpha</option>
				<option value="decimal" id="selectDecimal">decimal</option>
				<option value="decimal-leading-zero" id="selectDecimalLeadingZero">decimal-leading-zero</option>
				<option value="lower-greek" id="selectLowerGreek">lower-greek</option>
				</select>"&gt;</span><br>
				&emsp;&emsp;&nbsp;<span id="totalUl"><span id="ulOpenTag" class="opacity00">&lt;ul <span><input id="inputListStyle" class="hide input-css2" maxlength='40' originalText="style='list-style-type:circle'"></span>&gt;</span><br>
				&emsp;&emsp;&emsp;&nbsp;<span id="totalLi1" class="opacity00"><span id="li1OpenTag" class="">&lt;li&gt;</span>&nbsp;<span id="li1Data">Java</span>&nbsp;<span id="li1CloseTag" class="">&lt;/li&gt;</span></span><br>
				&emsp;&emsp;&emsp;&nbsp;<span id="totalLi2" class="opacity00"><span id="li2OpenTag" class="">&lt;li&gt;</span>&nbsp;<span id="li2Data">HTML</span>&nbsp;<span id="li2CloseTag" class="">&lt;/li&gt;</span></span><br>
				&emsp;&emsp;&emsp;&nbsp;<span id="totalLi3" class="opacity00"><span id="li3OpenTag" class="">&lt;li&gt;</span>&nbsp;<span id="li3Data">CSS</span>&nbsp;<span id="li3CloseTag" class="">&lt;/li&gt;</span></span><br><br>
				&emsp;&emsp;&nbsp;<span id="ulCloseTag" class="opacity00">&lt;/ul&gt;</span></span><br>
				&emsp;<span id="bodyCloseTag" class="opacity00">&lt;/body&gt;</span><br>
			<span id="htmlCloseTag" class="opacity00">&lt;/html&gt;</span>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="browser" class="opacity00">
			<img class="browser-img" alt="" src="ct-img.png" style="width: 100%;">
			<div id="outputDiv" class="output-div">
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>