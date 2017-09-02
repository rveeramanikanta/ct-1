<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Break Tag</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>

<style type="text/css">

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

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.introjs-duplicate {
	background-color: green;
	position: absolute;
}

[contenteditable="true"]:empty::before {
	color: #cbcbcb !important;
	content: attr(placeholder);
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

div,span, #arrow-up {
	position: relative;
}

.margin-top {
    margin-top: 21px;
}

.margin-left-64 {
    margin-left: 64px;
}

.padding00 {
	padding: 0px;
}

.position {
	position: relative;
	display: inline-block;
}

.html-body {
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.creamPreTab4 {
	tab-size: 4;
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 4;
    border-radius: 8px;
    background-color: #fffae6;
}

.step {
	position: relative;
    display: inline-block;
}

#bText {
	height: 80px;
}	

.image-custom {
    height: 60px;
    position: absolute;
 }

.image-custom1 {
    width: 100%;
}

[contenteditable="true"] {
    outline: medium none;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  #9fbff2;
	}
}

.faa-passing {
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes example {
      0%   { left:0px; top:10px;}
    100%  {top:18px; left:0px;}
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
  }

#textAndTag {
	width: 200px;
	display: inline-block;
}

</style>

</head>
<body>
<script type="text/javascript">

var typingInterval = 10;
var intro;
var filePointerCount = 1;

$(document).ready(function() {
	introGuide();
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	$("#appendSpan") .click(function() {
		caretAtEnd(document.getElementById('textOnly'));
	});
	
	$(".introjs-tooltiptext") .click(function() {
		caretAtEnd(document.getElementById('textAndTag'));
	});
	$('#urlPlaceHolder').attr("placeholder", "https://www.codetantra.com/webdevelopment/breake-tag.html");
	$("#PText").text('This is paragraph Tag...');
});

	function introGuide() { 
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			
				steps : [/* {
							element : "#bText",
							intro	: "",
							tooltipClass : "hide",
						}, */{
							element : "#code",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "learn"
						},{
							element : "#pTag",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#htmlDisplay",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "preTag"
						},{
							element : "#pTagWithbreakTag",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#htmlDisplay",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "preTagWithBreak"
						},{
							element : "#restartBtn",
							intro : "Click to Restart",
							tooltipClass: "introjs-tooltip-min-width-custom",
							position : "right"
						}]
		});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "bText" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				text = 'The &lt;br&gt; tag inserts a single line break.<br>'+
						'The &lt;br&gt; tag is an empty tag which means that it has no end tag.';
				typing('#bText', text, function() {
					$('#bText').append("<a class='introjs-button introjs-duplicate' " +
						"onclick=intro.nextStep()>Next &#8594;</a>");
					text = 'p tag text';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});	
				});
			break;
		
			case "code" :
				$(".introjs-duplicate").remove();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				//$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#code").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "learn" :
							$("#pText").addClass("z-index1000000");
							$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we will learn the <span class="ct-code-b-yellow">HTML</span>.';
							typing('.introjs-tooltiptext', text, function() {
								fadeInLeftEffect(".step", function() {
									$('.introjs-nextbutton').show();
								});
							});	
						break;	
					}
			//	});
			break;
			
			case "pTag" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is paragraph tag without use &lt;br&gt; tag.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});	
				});
			break;
			
			case "htmlDisplay" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#htmlDisplay").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "preTag" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we print paragraph text.';
							typing('.introjs-tooltiptext', text, function() {
								transferEffect("#pTag", "#pcontent", function () {
									$("#pTag").removeClass("z-index1000000")
									$('.introjs-nextbutton').show();
								});
							});
						break;
						
						case "preTagWithBreak" :
							$("#break").removeClass("blinking");
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we print paragraph tag with break tag.';
							typing('.introjs-tooltiptext', text, function() {
								$("#pTagWithbreakTag").addClass("z-index1000000");
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=nametransferEffect()>Next &#8594;</a>");
								/* $('.introjs-nextbutton').show(); */
							});
						break;
					}
				});
			break;
			
			case "pTagWithbreakTag" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we use <span class="ct-code-b-yellow">&lt;br&gt;</span> tag.';
					typing('.introjs-tooltiptext', text, function() {
						$("#break").addClass("blinking");
						$('.introjs-nextbutton').show();
					});
				});
			break;

			case "restartBtn":
				$("#pTagWithbreakTag, #name, #break, #company").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
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
	
	function nametransferEffect() {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		transferEffect("#name", "#browserName", function() {
			$('.introjs-tooltip').removeClass('hide');
			text = 'Now the cursor position is here after &lt;br&gt; tag the cursor goes to next line.';
			typing('.introjs-tooltiptext', text, function() {
				$('#browserName').after('<i class="fa fa-arrow-up arrow-up faa-passing" id="arrow1"></i>');
				$('#browserName').after('<span id="cursor"></span>');
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
					"onclick=cursorPosition()>Next &#8594;</a>");
			});
		});
	}
	
	function cursorPosition() {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		transferEffect("#break", "#cursor", function() {
			setTimeout(function() {
				$('#browserCompany').before('<i class="fa fa-arrow-up arrow-up faa-passing" id="arrow2"></i>');
				$("#arrow1").remove();
				fromEffectWithTweenMax("#cursor", ".arrow-up", function() {
					$("#arrow2").addClass(" faa-passing");
					$('.introjs-tooltip').removeClass('hide');
					text = 'After &lt;br&gt; tag the text will be display.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=textDisplayAfterBreak()>Next &#8594;</a>");
					});
				});
			},800);
		});
	}
	
	function textDisplayAfterBreak() {
		$(".introjs-duplicate-nextbutton").remove();
		transferEffect("#company", "#browserCompany", function() {
		$("#arrow2").remove();
			$('.introjs-nextbutton').show();
		});
	}
	
	//transfer effect function 
	function transferEffect(selector1, selector2, callBackFunction) {
		$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass("opacity00");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
	
	//fadeInLeft effect function
	function fadeInLeftEffect(selector, callBackFunction) {
		$(selector).removeClass("opacity00").addClass("animated fadeInLeft").one('animationend', function() {
			$(selector).removeClass("animated fadeInLeft")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//typing function
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


</script>

	<div class="col-xs-12">
		<div class="ct-box-main">
		
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">&lt;br&gt; Element</h1>
			</div>
			<!-- <div class="col-xs-12">
				<div class="col-xs-6 col-xs-offset-3 margin-top box-border" id="bText"></div>
			</div> -->
			<div class="col-xs-12 margin-top">
				<div class="col-xs-5 col-xs-offset-1 margin-top padding00" id="savingFileStep">
					
						<pre class='creamPreTab4 padding00 ' id="code">
<span id="docType" class="opacity00 step">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag" class="opacity00 step"> &lt;html&gt; </span>
	<span id="headOpenTag" class="opacity00 step">&lt;head&gt;</span>
		<span id="titleTag" class="opacity00 step">&lt;title&gt;<span id='titleText'>br Tag</span>&lt;/title&gt;</span>
 	<span id="headCloseTag" class="opacity00 step">&lt;/head&gt;</span>
	<span id="bodyOpenTag" class="opacity00 step">&lt;body&gt; </span>
		<span id="pTag" class="opacity00 step">&lt;p&gt;Name: Ramana, CompanyName: CodeTantra&lt;/p&gt;</span>
		<span id="pTagWithbreakTag" class="opacity00 step">&lt;p&gt;<span id="name">Name:ramana,</span> <span id="break">&lt;br&gt;</span> <span id="company">CompanyName: CodeTantra</span> &lt;/p&gt;</span>
	<span id="bodyCloseTag" class="opacity00 step">&lt;/body&gt; </span>
<span id="hClosedTag" class = "opacity00 step"> &lt;/html&gt; </span>
						</pre>
					</div>
				<div class="col-xs-6 margin-top">
				<div class='container' id = "htmlDisplay">
					<div class='tab-container'>
						<ul class="tabs clearfix" >
							<li class="active" id="titleOfThePage">
								<div class="col-xs-10">br Tag</div>
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
								<span class="col-xs-9 padding00"><input type="text" maxlength="100" class="usr-text" id="search" placeholder ="Search"></span>
							</div>
						</div>
						<div class='col-xs-2 padding00 fa-display text-center'>	
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
						</div>
					</div>
					<div class ="col-xs-12 html-body" id = "htmlBody">
						<span id = "pcontent" class="opacity00">Name: Ramana, CompanyName: CodeTantra</span><br>
						<span id = "browserName" class="opacity00">Name: Ramana,</span><br>
						<span id = "browserCompany" class="opacity00">CompanyName: CodeTantra</span>
						<div class="col-xs-12 margin-top"></div>
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