<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>apply borders and styles</title>
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

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-tooltip {
    width: 500px;
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

div,span {
	position: relative;
}

.margin-top {
    margin-top: 21px;
}

.padding00 {
	padding: 0px;
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.html-body  {
	/* min-height: 200px; */
	border: 1px solid gray;
	background: white;
	overflow-x: auto;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 3;
	tab-size: 3;
    border-radius: 8px;
    background-color: #fffae6;
    weight: 350px;
}

.step {
	position: relative;
    display: inline-block;
}

.image-custom {
    height: 60px;
    position: absolute;
 }

.image-custom1 {
    width: 100%;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  red;
	}
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

#htmlDisplay {
	padding: 4px;
	margin-top: 30px;
}

#htmlDisplay1 {
	padding: 4px;
	margin-top: 30px;
}

input {
	background: transparent;
	border: none;
}


 .container { /*Browser css  */
	padding: 0px;
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

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
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

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	min-height: 100px;
	border-top: 1px solid gray;
	background: white;
	/* overflow: auto; */
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 15px;
} /* browse css closed */
 
 
</style>

</head>
<body>
<script type="text/javascript">
var intro;
var typingInterval = 10;
var fontsizeCount = 1;
var countPropertyAndValue = 1;
var multipleChoice;
var propertyMaxLength = ['12', '12', '12', '6', '16', '18', '19', '18', '12', '12', '12'];
var valueMaxLength = ['6', '4', '5', '16', '6', '6', '6', '6', '12', '20', '26' ];
var propertyName = ['border-style', 'border-width', 'border-color', 'border','border-top-style', 
                    'border-right-style', 'border-bottom-style', 'border-left-style', 'border-style',
                    'border-style', 'border-style'];

$(document).ready(function() {
	introGuide();
	displaybrowser('#browser',1);
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
						},{
							element : "#pTagOpen",
							intro	: "",
							tooltipClass : "hide",
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
			case "code" :
				$("#content").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				text = 'Let us revise a basic HTML page syntax which already you are familiar with.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			
			case "pTagOpen" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Open <span class="ct-code-b-yellow">p</span> tag<br>'+
							'Hint: &lt;p&gt;';
					typing('.introjs-tooltiptext', text, function() {
						$("#pTagOpen").focus();
						nextSteps("#pTagClose", "tagClose");
						textValidation("#pTagOpen", '<p>' );
					});
				});
			break;
			
			case "pTagClose" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Close <span class="ct-code-b-yellow">p</span> tag<br>'+
							'Hint: &lt;/p&gt;';
					typing('.introjs-tooltiptext', text, function() {
						$("#pTagClose").focus();
						nextSteps("#pTagText", "bText");
						textValidation("#pTagClose", "</p>");
					});
				});
			break;
			
			case "pTagText" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">Apply different types of borders</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#pTagText").focus();
						nextSteps("#htmlDisplay", "displayPtag");
						textValidation("#pTagText", "Apply different types of borders");
					});
				});
			break;

			case "internalStyles" :
				$("#styleOpenTag").after('\n \t<div id="selectorSpan" class="position">'+
						'<input id="pSelector" type="text" size="2" maxlength="2"></div>');
				intro.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we apply different types of styles.';
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#pSelector", "pSelector");
						$('.introjs-nextbutton').show();
					});
				});
				
			break;
				
			case "pSelector" :
				$('.introjs-nextbutton').hide();
				$("#selectorSpan").append('\t<input id="openBrace" type="text" size="1" maxlength="1">');
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
						text = 'Enter <span class="ct-code-b-yellow">p</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#pSelector").focus();
						nextSteps("#openBrace", "openBrace");
						textValidation("#pSelector", "p");
					});
				});
			break;
			
			case "openBrace" :
				$('.introjs-nextbutton').hide();
				$("#selectorSpan").append('\n<input id="closeBrace" class="position" type="text" size="1" maxlength="1">');
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
						text = 'Enter <span class="ct-code-b-yellow">{</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#openBrace").focus();
						nextSteps("#closeBrace", "closeBrace");
						textValidation("#openBrace", "{");
					});
				});
			break;
			
			case "closeBrace" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">}</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#closeBrace").focus();
						nextSteps("#selectorSpan", "selectorSpan");
						textValidation("#closeBrace", "}");
					});
				});
			break;
			
			case "selectorSpan" :
				$("#openBrace").after('\n\t<div id="propertyAndValue1" class="position"><input id="property1" type="text" size='+ 
						propertyMaxLength [(countPropertyAndValue - 1) ] +' maxlength='+ propertyMaxLength [(countPropertyAndValue - 1)] +'></div>');
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we apply different types of styles.';
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#property1", "property" + countPropertyAndValue);
						$('.introjs-nextbutton').show();
						
					});
				});
			break;
			
			case "property" + countPropertyAndValue:
				$("#property" + countPropertyAndValue).after('<input id="colon' + countPropertyAndValue +
						'" type="text" size="1" maxlength="1">');
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					if (countPropertyAndValue == 4) {
						text = 'The <span class="ct-code-b-yellow">'+ propertyName[ (countPropertyAndValue -1)] +'</span>'+
								' property is a shorthand property for the following individual border properties:'+
								'<ul><li><span class="ct-code-b-yellow">border-width</span></li>'+
								'<li><span class="ct-code-b-yellow">border-style</span> (required) </li>'+
								'<li><span class="ct-code-b-yellow">border-color</span></li></ul>'+
								'Enter <span class="ct-code-b-yellow">'+ propertyName[ (countPropertyAndValue -1)] +'</span>';
					} else {
						text = 'Enter <span class="ct-code-b-yellow">'+ propertyName[ (countPropertyAndValue -1)] +'</span>';
					}
					typing('.introjs-tooltiptext', text, function() { 
						$("#property" + countPropertyAndValue).focus();
						nextSteps("#colon" + countPropertyAndValue, "colon" + countPropertyAndValue);
						textValidation("#property" + countPropertyAndValue, propertyName[ (countPropertyAndValue -1)]);
					});
				});
			break;
			
			case "colon"+countPropertyAndValue :
				$("#colon" + countPropertyAndValue ).after('<input id="value'+ countPropertyAndValue +
						'" type="text" size="'+ valueMaxLength [(countPropertyAndValue - 1) ] +'" maxlength="'+
						valueMaxLength [(countPropertyAndValue - 1)] +'"></span>');
				
				$("#value" + countPropertyAndValue).after('<input id="semicolon' + countPropertyAndValue +
				'" type="text" size="1" maxlength="1">');
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">:</span> (colon).';
					typing('.introjs-tooltiptext', text, function() {
						$("#colon"+countPropertyAndValue).focus();
						nextSteps("#value" + countPropertyAndValue, "value" + countPropertyAndValue);
						textValidation("#colon" + countPropertyAndValue, ":");
					});
				});
			break;
			
			case "value" + countPropertyAndValue :
				$('.introjs-nextbutton').hide(); 
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					if (fontsizeCount == 1) {
						text = 'Enter <span class="ct-code-b-yellow">solid</span>';
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
						textValidation("#value" + countPropertyAndValue, "solid");
					} else if (fontsizeCount == 2) {
						multipleChoice = 2;
						text = 'Change any one of the below<ul> '+
								'<li><span class="ct-code-b-yellow">dotted</span></li>'+
								'<li><span class="ct-code-b-yellow">dashed</span></li>'+
								'<li><span class="ct-code-b-yellow">double</span></li>'+
								'<li><span class="ct-code-b-yellow">groove</span></li>'+
								'<li><span class="ct-code-b-yellow">ridge</span></li>'+
								'<li><span class="ct-code-b-yellow">inset</span></li>'+
								'<li><span class="ct-code-b-yellow">outset</span></li>';
						textValidation("#value" + countPropertyAndValue, "dotted");
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 3) {
						text = 'Enter <span class="ct-code-b-yellow">15px</span>';
						textValidation("#value" + countPropertyAndValue, "15px");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 4) {
						text = 'Enter <span class="ct-code-b-yellow">blue</span>';
						textValidation("#value" + countPropertyAndValue, "blue");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					}  else if (fontsizeCount == 5) {
						text = 'Enter <span class="ct-code-b-yellow">12px solid green</span>';
						textValidation("#value" + countPropertyAndValue, "12px solid green");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 6 || fontsizeCount == 7 || fontsizeCount == 8  || fontsizeCount == 9 ) {
						multipleChoice = 2;
						text = 'Enter any one of the below value <ul> '+
								'<li><span class="ct-code-b-yellow">dotted</span></li>'+
								'<li><span class="ct-code-b-yellow">dashed</span></li>'+
								'<li><span class="ct-code-b-yellow">double</span></li>'+
								'<li><span class="ct-code-b-yellow">groove</span></li>'+
								'<li><span class="ct-code-b-yellow">ridge</span></li>'+
								'<li><span class="ct-code-b-yellow">inset</span></li>'+
								'<li><span class="ct-code-b-yellow">outset</span></li>';
						textValidation("#value" + countPropertyAndValue, "dotted");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 10) {
						text = 'Enter <span class="ct-code-b-yellow">dotted solid</span>';
						textValidation("#value" + countPropertyAndValue, "dotted solid");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 11) {
						text = 'Enter <span class="ct-code-b-yellow">dotted solid dashed</span>';
						textValidation("#value" + countPropertyAndValue, "dotted solid dashed");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 12) {
						text = 'Enter <span class="ct-code-b-yellow">dotted solid dashed groove</span>';
						textValidation("#value" + countPropertyAndValue, "dotted solid dashed groove");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					}
					typing('.introjs-tooltiptext', text, function() {
						$("#value" + countPropertyAndValue).focus();
					});
				});
			break;
			
			case "semicolon" + countPropertyAndValue :
				multipleChoice = 1;
				if (fontsizeCount < 12) {
					$("#propertyAndValue" + countPropertyAndValue).after('\n\t<div id="propertyAndValue'+(countPropertyAndValue + 1) +
							'" class="position"><input id="property'+ (countPropertyAndValue +1) +'" type="text" size='+ 
							propertyMaxLength [(countPropertyAndValue) ] +' maxlength='+ propertyMaxLength [(countPropertyAndValue)] +'></div>');
				}
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">;</span> (semicolon).';
					typing('.introjs-tooltiptext', text, function() {
						$("#semicolon" + countPropertyAndValue).focus();
						nextSteps("#propertyAndValue"+countPropertyAndValue, "propertyAndValue" + countPropertyAndValue);
						textValidation("#semicolon" + countPropertyAndValue, ";");
					});
				});
			break;
			
			case "propertyAndValue" + countPropertyAndValue :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is '+ propertyName[(countPropertyAndValue-1)] +' property and value pair.';
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
						$('.introjs-nextbutton').show();
					});
				});
			break; 
			
			case "htmlDisplay" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "displayPtag" :
							$("#pcontent").html('<p>' +$("#pTagText").val() + '</p>');
							$("#ptag").addClass("z-index1000000");
							transferEffect("#ptag", "#pcontent", function () {
								$("#ptag").removeClass("z-index1000000");	
								nextSteps("#internalStyles", "internalStyles");
								introNextStep();	
							});
						break;
						
						case "htmlDisplay" + countPropertyAndValue :
							$("#propertyAndValue" + countPropertyAndValue).addClass("z-index1000000");
							transferEffect("#propertyAndValue" + countPropertyAndValue, "#pcontent", function () {
								if (countPropertyAndValue == 1) {
									multipleChoice = 1;
									$("#pcontent >p").css({"border-style": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 2){
									$("#pcontent>p").css({"border-width": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 3) {
									$("#pcontent>p").css({"border-color": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 4) {
									$("#pcontent>p").css({"border": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 5) {
									$("#pcontent>p").css({"border-top-style": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 6) {
									$("#pcontent>p").css({"border-right-style": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 7) {
									$("#pcontent>p").css({"border-bottom-style": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 8) {
									$("#pcontent>p").css({"border-left-style": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 9 || countPropertyAndValue == 10 || countPropertyAndValue == 11 ) {
									$("#pcontent>p").css({"border-style": $("#value"+countPropertyAndValue).val()});
								}
								$("#propertyAndValue"+ countPropertyAndValue).removeClass("z-index1000000");	
									if (fontsizeCount < 2 ) {
										fontsizeCount++;
										nextSteps("#value" + countPropertyAndValue, "value"+countPropertyAndValue);
									} else if (fontsizeCount == 12) {
										setTimeout(function() {
											intro.nextSteps();
										},800);
									} else {
										fontsizeCount++
										countPropertyAndValue++;
										nextSteps("#property" + countPropertyAndValue, "property"+countPropertyAndValue);
									}
								introNextStep();
							});
						break;
					}
				});
			break;
		
			case "restartBtn":
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

	function displaybrowser(selector, num) {  
		$(selector).append('<div class="container col-xs-12 padding0" id="viewBrowser'+ num +'">'
					+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
					+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Boders</div>'
					+ '<i class="fa fa-times fa-sm margin-top20"></i>'
					+ '</li></ul><span id ="plus"><i class="fa fa-plus"></i></span></div>'
					+ '<div id="browser" class="col-xs-12 padding00"><div class="col-xs-2 padding00 text-center">'
					+ '<span id="arrowCircle" class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-left arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-right arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
					+ '<div class="col-xs-8 padding00 text-center url">'
					+ '<input type="text" maxlength="50" class="usr-text padding00" id="url'+  num +'">'
					+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
					+ '<div class="col-xs-2 padding00 fa-display text-center">'	
					+ '<span class="col-xs-6 padding00 margin-top5"><i class="fa fa-home fa-1x"></i></span>'
					+ '<span class="col-xs-6 padding00 margin-top5"><i  class="fa fa-bars fa-1x"></i></span></div></div>'
					+ '<div class ="col-xs-12 html-body padding00" id = "htmlBody">'
					+ '<div id="content'+ num +'" class="col-xs-12 html-text padding00">'
					+ '<div id = "pcontent" class="opacity00">Apply different types of borders</div>'
					+ '</div></div></div>');
		
					$('#url1').attr("placeholder", "https://www.codetantra.com/webdevelopment/borders.html");
	}
	
	function appendNextBtn(callBackFunction) {
		$('.introjs-tooltiptext').append('<div class="text-right"><a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a></div>');
		$('.introjs-duplicate-nextbutton').click(function() {
			$('.introjs-duplicate-nextbutton').remove();
			callBackFunction();
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
	function textValidation(text, validationText1 ) {
		//******bind - Is used to combine Multiple event types at once
		/*  $("body").bind("cut copy paste", function(e) {
			e.preventDefault();
		});  */
		//When the keybord key deep press
		$(text).on("keydown", function(e) {
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
		$(text).on("keyup", function(e) {
			$(".introjs-duplicate-nextbutton").remove();
			$('.error-text').remove();
			intro.refresh();
			//*******Text empty to show error message***********
			if (e.keyCode == 17) {
				$(text).val(validationText1)
			}
			if ($(this).val() == "") {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
				$(".introjs-nextbutton").hide();
				//$(this).addClass("empty");
			} else {
				if (multipleChoice == 2) {
					var trimText = $(text).val();
					if ( trimText.trim().toLowerCase() == "dotted".toLowerCase() ||
						 trimText.trim().toLowerCase() == "dashed".toLowerCase() ||
						 trimText.trim().toLowerCase() == "double".toLowerCase() ||
						 trimText.trim().toLowerCase() == "groove".toLowerCase() ||
						 trimText.trim().toLowerCase() == "ridge".toLowerCase() ||
						 trimText.trim().toLowerCase() == "inset".toLowerCase() ||
						 trimText.trim().toLowerCase() == "outset".toLowerCase()) {
						$(".introjs-nextbutton").show();
					} else {
						$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
						$(".introjs-nextbutton").hide();
					}
				} else {
					//************check the given text entered or not and display next button*********
					var trimText = $(text).val();
					if ( trimText.trim().toLowerCase() == validationText1.toLowerCase() ) {
						$(".introjs-nextbutton").show();
					} else {
						$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
						$(".introjs-nextbutton").hide();
					}
				}
			}
		});
	} 
</script>


<div class="col-xs-12">
		<div class="ct-box-main">
		
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="fontIntroduction">Introduction to Border</h1>
			</div>

			<div class="col-xs-12 margin-top">
				<div class="col-xs-6 col-xs-offset-0 margin-top padding00" id="fontHtmlText">
					<pre class='creamPreTab4 padding00' id="code">
<span id="docType">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag"> &lt;html&gt; </span>
	<div id="internalStyles" style="display:inline-block"><span id="styleOpenTag">&lt;style&gt;</span>
<span id="styleCloseTag">&lt;/style&gt;</span></div>
	<span id="bodyOpenTag">&lt;body&gt; </span>
		<div id="ptag" class="position"><input id="pTagOpen" type="text" size="3" maxlength='3'><input id="pTagText" type="text" size="33" maxlength='33'><input id="pTagClose" type="text" size="4" maxlength='4'></div>
	<span id="bodyCloseTag">&lt;/body&gt;</span>
<span id="hClosedTag">&lt;/html&gt;</span>
						</pre>
					</div>

				<div class="col-xs-6">
					<div class = "col-xs-12 padding00" id = "htmlDisplay"><div id="browser"></div></div>
				</div>
			</div>
			<div class = 'col-xs-12 buttons-div text-center'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
		</div>
	</div>

</body>
</html>