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
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<title>color and font</title>

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

input {
	background: transparent;
	border: none;
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

#pcontent {
    margin-top: 5px;
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

.html-body {
	min-height: 160px;
	border: 1px solid gray;
	background: white;
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
}

.image-custom {
    height: 60px;
    position: absolute;
 }

.image-custom1 {
    width: 100%;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }
 
.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
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
	height: 100px;
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
var propertyMaxLength = ['9', '11', '10', '11', '12', '5'];
var valueMaxLength = ['5', '9', '7', '7', '10', '6' ];
var propertyName = ['font-size', 'font-family', 'font-style', 'font-weight','font-variant',  "color"]


$(document).ready(function() {
	displaybrowser('#browser',1);
	introGuide();
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
							element : "#hTagOpen",
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
			
			case "hTagOpen" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Open <span class="ct-code-b-yellow">h1</span> tag<br>'+
							'Hint: &lt;h1&gt;';
					typing('.introjs-tooltiptext', text, function() {
						$("#hTagOpen").focus();
						nextSteps("#hTagClose", "tagClose");
						textValidation("#hTagOpen", '<h1>' );
					});
				});
			break;
			
			case "hTagClose" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Close <span class="ct-code-b-yellow">h1</span> tag<br>'+
							'Hint: &lt;/h1&gt;';
					typing('.introjs-tooltiptext', text, function() {
						$("#hTagClose").focus();
						nextSteps("#hTagText", "bText");
						textValidation("#hTagClose", "</h1>");
					});
				});
			break;
			
			case "hTagText" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">Apply font and color</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#hTagText").focus();
						nextSteps("#htmlDisplay", "displayH1tag");
						textValidation("#hTagText", "Apply font and color");
					});
				});
			break;

			case "internalStyles" :
				$("#styleOpenTag").after('\n \t<div id="selectorSpan" class="position">'+
						'<input id="h1Selector" type="text" size="3" maxlength="3"></div>');
				intro.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we apply different types of styles.';
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#h1Selector", "h1Selector");
						$('.introjs-nextbutton').show();
					});
				});
				
			break;
				
			case "h1Selector" :
				$('.introjs-nextbutton').hide();
				$("#selectorSpan").append('\t<input id="openBrace" type="text" size="1" maxlength="1">');
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
						text = 'Enter <span class="ct-code-b-yellow">h1</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#h1Selector").focus();
						nextSteps("#openBrace", "openBrace");
						textValidation("#h1Selector", "h1");
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
					text = 'Enter <span class="ct-code-b-yellow">'+ propertyName[ (countPropertyAndValue -1)] +'</span>';
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
						text = 'Enter <span class="ct-code-b-yellow">30px</span>';
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
						textValidation("#value" + countPropertyAndValue, "30px");
					} else if (fontsizeCount == 2) {
						text = 'Change <span class="ct-code-b-yellow">30px</span> to 100%';
						textValidation("#value" + countPropertyAndValue, "100%");
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 3) {
						text = 'Change <span class="ct-code-b-yellow">100%</span> to 1.5em';
						textValidation("#value" + countPropertyAndValue, "1.5em");
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 4) {
						text = 'Enter <span class="ct-code-b-yellow">Times new</span>';
						textValidation("#value" + countPropertyAndValue, "Times new");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 5) {
						text = 'Change <span class="ct-code-b-yellow">Times new</span> to'+
								' <span class="ct-code-b-yellow">Monospace</span>';
						textValidation("#value" + countPropertyAndValue, "Monospace");
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 6) {
						text = 'Enter <span class="ct-code-b-yellow">oblique</span>';
						textValidation("#value" + countPropertyAndValue, "oblique");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 7) {
						text = 'Change <span class="ct-code-b-yellow">oblique</span> to'+
								' <span class="ct-code-b-yellow">italic</span>';
						textValidation("#value" + countPropertyAndValue, "italic");
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 8) {
						text = 'Enter <span class="ct-code-b-yellow">lighter</span>';
						textValidation("#value" + countPropertyAndValue, "lighter");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 9) {
						text = 'Change <span class="ct-code-b-yellow">lighter</span> to '+
								' <span class="ct-code-b-yellow">bold</span>';
						textValidation("#value" + countPropertyAndValue, "bold");
						$("#value"+countPropertyAndValue).attr({"size":4});
						$("#value"+countPropertyAndValue).attr({"maxlength":4});
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 10) {
						text = 'Enter <span class="ct-code-b-yellow">small-caps</span>';
						textValidation("#value" + countPropertyAndValue, "small-caps");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 11) {
						text = 'Enter <span class="ct-code-b-yellow">Orange</span>';
						textValidation("#value" + countPropertyAndValue, "Orange");
						nextSteps("#semicolon" + countPropertyAndValue, "semicolon" + countPropertyAndValue);
					} else if (fontsizeCount == 12) {
						text = 'Change  <span class="ct-code-b-yellow">Orange</span> to'+
								' <span class="ct-code-b-yellow">#f224a3</span>';
						textValidation("#value" + countPropertyAndValue, "#f224a3");
						$("#value"+countPropertyAndValue).attr({"size":8});
						$("#value"+countPropertyAndValue).attr({"maxlength":8});
						nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
					} else if (fontsizeCount == 13) {
						text = 'Change  <span class="ct-code-b-yellow">#f224a3</span> to'+
								' <span class="ct-code-b-yellow">rgb(94, 36, 242)</span>';
							$("#value"+countPropertyAndValue).attr({"size":16});
							$("#value"+countPropertyAndValue).attr({"maxlength":16});
							textValidation("#value" + countPropertyAndValue, "rgb(94, 36, 242)");
							nextSteps("#htmlDisplay", "htmlDisplay" + countPropertyAndValue);
						}
					typing('.introjs-tooltiptext', text, function() {
						$("#value" + countPropertyAndValue).focus();
					});
				});
			break;
			
			case "semicolon" + countPropertyAndValue :
				if (fontsizeCount < 11) {
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
						case "displayH1tag" :
							$("#pcontent").html('<h1>'+ $("#hTagText").val() + '</h1>');
							$("#htag").addClass("z-index1000000");
							transferEffect("#htag", "#pcontent", function () {
								$("#htag").removeClass("z-index1000000");	
								nextSteps("#internalStyles", "internalStyles");
								introNextStep();	
							});
						break;
						
						case "htmlDisplay" + countPropertyAndValue :
							$("#propertyAndValue" + countPropertyAndValue).addClass("z-index1000000");
							transferEffect("#propertyAndValue" + countPropertyAndValue, "#pcontent", function () {
								if (countPropertyAndValue == 1) {
									$("#pcontent>h1").css({"font-size": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 2){
									$("#pcontent>h1").css({"font-family": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 3) {
									$("#pcontent>h1").css({"font-style": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 4) {
									$("#pcontent>h1").css({"font-weight": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 5) {
									$("#pcontent>h1").css({"font-variant": $("#value"+countPropertyAndValue).val()});
								} else if (countPropertyAndValue == 6) {
									$("#pcontent>h1").css({"color": $("#value"+countPropertyAndValue).val()});
								}
								$("#propertyAndValue"+ countPropertyAndValue).removeClass("z-index1000000");	
								if (fontsizeCount < 3) {
									fontsizeCount++;
									nextSteps("#value" + countPropertyAndValue, "value"+countPropertyAndValue);
								} else {
									if (fontsizeCount == 4 || fontsizeCount == 6 || fontsizeCount == 8 || 
											fontsizeCount == 11 || fontsizeCount == 12 ) {
										fontsizeCount++;
										nextSteps("#value" + countPropertyAndValue, "value"+countPropertyAndValue);
									} else if (fontsizeCount == 13) {
										setTimeout(function() {
											intro.nextSteps();
										},800);
									} else {
										fontsizeCount++
										countPropertyAndValue++;
										nextSteps("#property" + countPropertyAndValue, "property"+countPropertyAndValue);
									}
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
					+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Font and Color</div>'
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
					+ '<div id = "pcontent" class="opacity00">Apply font and color</div>'
					+ '</div></div></div>');
		
					$('#url1').attr("placeholder", "https://www.codetantra.com/webdevelopment/font-and-color.html");
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
		 $("body").bind("cut copy paste", function(e) {
			e.preventDefault();
		}); 
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
			if ($(this).val() == "") {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
				$(".introjs-nextbutton").hide();
				//$(this).addClass("empty");
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
		});
	} 

</script>

	<div class="col-xs-12">
		<div class="ct-box-main">
		
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="fontIntroduction">Font and Color</h1>
			</div>

			<div class="col-xs-12 margin-top">
				<div class="col-xs-6 col-xs-offset-0 margin-top padding00" id="fontHtmlText">
					<pre class='creamPreTab4 padding00' id="code">
<span id="docType">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag"> &lt;html&gt; </span>
	<div id="internalStyles" style="display:inline-block"><span id="styleOpenTag">&lt;style&gt;</span>
<span id="styleCloseTag">&lt;/style&gt;</span></div>
	<span id="bodyOpenTag">&lt;body&gt; </span>
		<div id="htag" class="position"><input id="hTagOpen" type="text" size="4" maxlength='4'><input id="hTagText" type="text" size="20" maxlength='20'><input id="hTagClose" type="text" size="5" maxlength='5'></div>
	<span id="bodyCloseTag">&lt;/body&gt;</span>
<span id="hClosedTag">&lt;/html&gt;</span>
						</pre>
					</div>

				<div class="col-xs-6">
					<div class = "col-xs-12 padding00" id = "htmlDisplay">
						<div id="browser">
							<!-- <img id="image1" class="image-custom1" src="/images/font-and-color.png"> -->
						</div>
						<!-- <div class ="col-xs-12 html-body" id = "htmlBody">
							<span id = "pcontent" class="opacity00">Apply font and color</span>
						</div> -->
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