<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/jquery-ui.css">
	<link rel="stylesheet" href="/css/introjs.css" >
	<link rel="stylesheet" href="/css/introjs-ct.css" >
	<link rel="stylesheet" href="/css/animate.css">
	<link rel="stylesheet" href="/css/font-awesome.min.css">

	<script src="/js/jquery-latest.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/intro.js" type="text/javascript"></script>
	<script src="/js/typewriting.min.js" type="text/javascript"></script>
	<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<title>Element P</title>
<style type="text/css">

pre {
	tab-size: 3;
	-moz-tab-size: 3;
}

.container {
	padding: 0px;
	margin-top: 6px;
	border: 2px solid grey;
	width: 100%
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
	background: white;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
	padding-left: 3px;
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
    min-width: 185px;
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

.position {
	position: relative;
	display: inline-block;
}

.padding {
	padding: 0 40px;
}

.absolute-div-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.html-body {
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 4;
    border-radius: 8px;
    background-color: #fffae6;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
}

.margin-top {
    margin-top: 20px;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  #ff66b3;
	}
}

input {
	background : transparent;
	border : none;
	height: 25px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
  }
</style>

</head>
<body>

<script type="text/javascript">
var intro;
var typingInterval = 10;
var inputFieldCount = 1;
var pTagText = ['I am a Developer.', 'I work in CodeTantra.', 'You are learning Web Designing.'];

$(document).ready(function() {
	introGuide();

	$('#urlPlaceHolder').attr("placeholder", "https://www.codetantra.com/webdevelopment/example.html");
	$('#search').attr("placeholder", "Search");
	
	$('#restartBtn').click(function() {
		location.reload();
	});
});
	
	function introGuide() { 
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			
				steps : [{
							element : "#code",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "samplePage",
						},{
							element : "#divTagText1",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#restartBtn",
							intro : "Click to restart",
							tooltipClass: "introjs-tooltip-min-width-custom",
							position : "right"
						}]
		});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "code" :
				$("#htmlDisplay1").addClass("visibility-hidden");
				$("#codeAndDisplay").removeClass("opacity00");
				$('.introjs-nextbutton').hide();
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "samplePage" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we will learn the different between the '+
									'<span class="ct-code-b-yellow">&lt;p&gt;</span> tag text '+
									'and the <span class="ct-code-b-yellow">body</span> text.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
			break;
			
			case "divTagText" + inputFieldCount :
				$('.introjs-nextbutton').hide();
				if (inputFieldCount == 1) {
					$("#divTag").append('<div id="spanCount'+ (inputFieldCount + 1) +'"><input id="divTagText'+ (inputFieldCount + 1) +
							'" type="text" size="21" maxlength="21" spellcheck="false"></div>');					
				} else if(inputFieldCount == 2) {
					$("#divTag").append('<div id="spanCount'+ (inputFieldCount + 1) +'"><input id="divTagText'+ (inputFieldCount + 1) +
						'" type="text" size="31" maxlength="31" spellcheck="false"></div>');
				} 
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter the text <span class="ct-code-b-yellow">'+ pTagText[(inputFieldCount -1)]  +'</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#divTagText" + inputFieldCount).focus().effect( "highlight",{color: 'yellow'});
						textValidation("#divTagText" + inputFieldCount, pTagText[(inputFieldCount -1)]);
						inputFieldCount++;
						if (inputFieldCount <= 3) {
							nextSteps("#divTagText" + inputFieldCount, "divTagText");
						} else {
							nextSteps("#divTag", "divTag");
						}
					});
				});
			break;
			
			case "divTag" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we see how the body of the text will display in the browser.';
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#htmlDisplay", "bodyOfTheText");
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "openPTag" + inputFieldCount :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we enter <span class="ct-code-b-yellow">&lt;p&gt;</span> tag.';
					typing('.introjs-tooltiptext', text, function() {
						$("#openPTag" + inputFieldCount).focus().effect( "highlight",{color: 'yellow'});
						textValidation("#openPTag" + inputFieldCount, '<p>');
						nextSteps("#closePTag" + inputFieldCount , "bodyOfTheText");
					});
				});
			break;
			
			case "closePTag" + inputFieldCount :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we enter <span class="ct-code-b-yellow">&lt;/p&gt;</span> tag.';
					typing('.introjs-tooltiptext', text, function() {
						$("#closePTag" + inputFieldCount).focus().effect( "highlight",{color: 'yellow'});
						textValidation("#closePTag" + inputFieldCount, '</p>');
						nextSteps("#spanCount" + inputFieldCount , "spanCount1");
					});
				});
			break;
			
			case "spanCount" + inputFieldCount :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'See the different between p tag text and body of the  text.';
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#htmlDisplay" , "ptag"+inputFieldCount);
						$('.introjs-nextbutton').show();
					});
				});
			break;

			case "htmlDisplay" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "bodyOfTheText" :
							transferEffect('#divTag', '#outputText', function() {
								$("#divTagText1").before('<input id="openPTag1" type="text" size="3" maxlength="3">');
								$("#divTagText1").after('<input id="closePTag1" type="text" size="4" maxlength="4">');
								nextSteps("#openPTag1", "openPTag1");
								inputFieldCount = 1;
								introNextStep();
							});
						break;
						
						case "ptag" + inputFieldCount :
							$('.introjs-tooltip').removeClass('hide');
							text = 'See how the p tag text display in the browser.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
								"onclick=pTagAnimation()>Next &#8594;</a>");
							});
						break;
					}
				});
			break;
			
			case "restartBtn":
				$("#code").removeClass('z-index1000000');
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
	}
	
	function pTagAnimation() {
		if (inputFieldCount < 3) {
			$("#divTagText" + (inputFieldCount + 1)).before('<input id="openPTag'+ (inputFieldCount + 1) +
					'" type="text" size="3" maxlength="3">');
			$("#divTagText" + (inputFieldCount + 1)).after('<input id="closePTag'+ (inputFieldCount + 1) +
					'" type="text" size="4" maxlength="4">');
		}
		$('.introjs-tooltip').addClass('hide');
		$('.introjs-duplicate-nextbutton').remove();
		transferEffect('#spanCount' + inputFieldCount, '#pTagOutput' + inputFieldCount, function() {
			$("#pTagOutput" + inputFieldCount).after('<br>');
			if (inputFieldCount < 3) {
				nextSteps("#openPTag" + (inputFieldCount + 1), "openPTag" + (inputFieldCount + 1));
			}
			inputFieldCount ++;
			introNextStep();
		});
	}
	
	//****dynamic steps*************
	function nextSteps(stepName, animatedStep) {
		var options = {
				element :stepName,
				intro :'',
				tooltipClass : "hide",
				animateStep: animatedStep
		}
		intro.insertOption(intro._currentStep + 1, options);
	}
	
	//setTime out to intro go next step********
	function introNextStep() {
		setTimeout(function() {
			intro.nextStep();
		},1200);
	}
	
	//********* Transfer effect function ********* 
	function transferEffect(selector1, selector2, callBackFunction) {
		$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass("opacity00");
			$(selector1).removeClass("z-index1000000")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//zooming effect function
	function zoomInEffect(selector1, callBackFunction) {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	function zoomOutEffect(selector1, callBackFunction) {
		$(selector1).removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
			$(selector1).removeClass("animated zoomOut")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//********** Typing function **********
	function typing(typingId, typingContent, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval" : typingInterval,
			"cursor_color" : 'white',
		}, function() {
			$(typingId).removeClass("typingCursor");
			typingCallbackFunction();
			$('.introjs-tooltip').show();
		});
	}
	
	//********** Check text color and font-size **************** 
	function textValidation(selector, validationText1) {
		//******bind - Is used to combine Multiple event types at once
		 /*  $("body").bind("cut copy paste", function(e) {
			e.preventDefault();
		}); */
		//When the keybord key deep press
		$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		//backspace[8], tab[9], escape[27], leftArrow[37], rightArrow[39], delete[46], enter[13]
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 9, 27, 37, 39, 46, 13]) !== -1) {
			return;
		}
		//***** Check input text field to limited access *****
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>max length restricted to "+ max +".</span>");
			e.preventDefault();
		} 	
	});
	//*********When the keybord key is released*******
	$(selector).on("keyup", function(e) {
		$(".introjs-duplicate-nextbutton").remove();
		$('.error-text').remove();
		intro.refresh();
		//*******Text empty to show error message***********
		if ($(this).val() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
			$(".introjs-nextbutton").hide();
			//$(this).addClass("empty");
		} else {
			//************check the given text entered or not and display next button*********
			var trimText = $(selector).val();
			if (trimText.trim().toLowerCase() == validationText1.toLowerCase()) {
				$(".introjs-nextbutton").show();
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
				$(".introjs-nextbutton").hide();
			}
		}
	});
} 
</script>

<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="fontIntroduction">The &lt;p&gt; Element</h1>
			</div>

			<div class="col-xs-12 margin-top" id="codeAndDisplay">
				<div class="col-xs-5 padding00" id="fontHtmlText">
					<pre class='creamPreTab4 padding00' id="code">
<span id="docType">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag"> &lt;html&gt; </span>
	<span id="headOpenTag"> &lt;head&gt; </span>
		<span id="titleOpenTag"> &lt;title&gt; </span>Element P<span id="titleCloseTag"> &lt;/title&gt; </span>
	<span id="headCloseTag">&lt;/head&gt; </span>
	<span id="bodyOpenTag">&lt;body&gt; </span>
		<div id="divTag" class="position"><div id='spanCount1'><input id="divTagText1" type="text" size="18" maxlength='18'></div></div>
	<span id="bodyCloseTag">&lt;/body&gt; </span>
<span id="hClosedTag">&lt;/html&gt;</span></pre>
				</div>
			
			<div class="col-xs-6">
				<div class='container' id = "htmlDisplay">
					<div class='tab-container'>
						<ul class="tabs clearfix" >
							<li class="active" id="titleOfThePage">
								<div class="col-xs-10">Element P</div>
								<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
							</li>
						</ul>
							<span id ="plus"><i class="fa fa-plus"></i></span>
					</div>
					<div id='browser' class='col-xs-12 padding00'>
						<div class='col-xs-2 padding00 text-center'>
							<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
							<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
							<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
						</div>
						<div class='col-xs-5 padding00 text-center url'>
							<span class='col-xs-10'><input type="text" maxlength="100" class="usr-text" class="padding00" id="urlPlaceHolder"></span>
							<span class='col-xs-2 padding00'><i class="fa fa-star-o fa-1x"></i></span>
						</div>
						<div class='col-xs-3'>
							<div class='url'>
								<span class="col-xs-3 padding00 fa-display"><i class="fa fa-search fa-1x"></i></span>
								<span class="col-xs-9 padding00"><input type="text" maxlength="100" class="usr-text" id="search" ></span>
							</div>
						</div>
						<div class='col-xs-2 padding00 fa-display text-center'>	
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
						</div>
					</div>
					<div class ="col-xs-12 html-body" id = "htmlBody">
						<div id="outputText" class="opacity00">
							<span id = "pTagOutput1">I am a Developer.</span>
							<span id = "pTagOutput2">I work in CodeTantra.</span>
							<span id = "pTagOutput3">You are learning Web Designing.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class = 'col-xs-12 buttons-div text-center'>
			<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
		</div> 
	</div>
</div>
</body>
</html>