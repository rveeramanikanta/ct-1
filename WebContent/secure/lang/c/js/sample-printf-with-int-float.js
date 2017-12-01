var num = '20+30';
var sum = 50;
var per = '%d';
var count = 0;
var z = 0;
var input;
var lenOfInput;

var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddentotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		escOnExit : false,
		showStepNumbers : false,
		steps : [{
						element : '#preBody',
						intro : '',
					},		
					{
						element : '#include',
						intro : "",
					},
					{
						element : '#main',
						intro : "",
					},
					{
						element : '#printf1',
						intro : '',
						tooltipClass: 'hide'
					},
					{
						element : '#outputBox',
						intro : '',
						animateStep: 'printSum',
						tooltipClass: 'hide'
					}, {
						element : '#printf2',
						intro : '',
						tooltipClass: 'hide'
					}
					,{
						element : '#outputBox',
						intro : '',
						animateStep: 'printFloat',
						tooltipClass: 'hide'
					}, {
						element : '#printf3',
						intro : '',
						tooltipClass: 'hide'
					},{
						element : '#outputBox',
						intro : '',
						animateStep: 'printChar',
						tooltipClass: 'hide'
					},{
						element: '#mainClose',
						intro: '',
					}, {
						element: '#restartBtn',
						intro: '',
						position: 'right'
					}]
	});
	

	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "printf1" :
			$('#outputBox').addClass("opacity00");
			$("#total").addClass("opacity00").removeClass('style');
			$('#printlnId1').addClass('opacity00');
		break;
		case 'outputBox':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'printSum':
				$('#printlnId1').addClass('opacity00');
			break;
			case 'printFloat':
				$('#printlnId2').addClass('opacity00');
			break;
			case 'printChar':
				$('#printlnId3').addClass('opacity00');
			break;
			}
			break;
			case "printf2" :
				$("#total2").addClass("opacity00").removeClass('style');
				$('#printlnId2').addClass('opacity00');
			break;
			case "printf3" :
				$("#total3").addClass("opacity00").removeClass('style');
				$('#printlnId3').addClass('opacity00');
			break;
			
		}
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 0 && intro._currentStep != 1) {
				$('.introjs-prevbutton').show();
			} 
			$('.introjs-nextbutton').show();
			return;
		}
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
			//$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Let us consider a sample code which uses " +
						"<y>printf()</y> and <y>format characters</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			//});
		break; 
		case "include" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"It is a <y>preprocessor directive</y> which includes the " +
						"<y>header file</y> <y>stdio.h</y> in our program." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "main" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is the <y>main()</y> method where the program execution starts." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printf1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext",'<ul><li><y>printf()</y> prints '+
						'the text message onto the console.</li><span id = "typing2"></span>',function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printf2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext",'Here, the format character <span class = "color-yellow">%f</span> '+
						'refers to a <span class = "color-yellow">float</span> value.',function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printf3" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext",'Here, the format character <span class = "color-yellow">%c</span> refers'+
						' to a <span class = "color-yellow">character</span> value.',function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'mainClose':
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"close the <y>main</y> tag.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'outputBox':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'printSum':
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#outputBox').removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append('<div id="total" class="position display opacity00">'+
							'<div id="printf11" class="display">printf("<div id="sumTwo" class="position display">Sum of two integers = <y>%d</y></div>\n",(<div id="sum" class="display yellow">20+30</div>));</div></div>');
				$("#printf1").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
					$("#total").removeClass("opacity00");
					fromEffectWithTweenMax("#printf1", "#total", function() {
						$("#printf1").css("z-index", "");
						//$('.introjs-prevbutton').show();
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="total1()">Next&rarr;</a>');
					});
				});
				});
			break;
			case 'printFloat':
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide").css('max-width' ,'350px');
					$('.introjs-tooltiptext').append('<div id="total2" class="display position opacity00">'+
							'<div id="printf21" class="display">printf("<div id="productTwo" '+
							'class="position display">Product of two float values = <y>%f</y></div>\n",'+
							'<div class="display">(<div id="product" class="display yellow">12.6*2.5</div>)</div>);</div></div>');
					$("#printf2").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
						$("#total2").removeClass("opacity00");
						fromEffectWithTweenMax("#printf2", "#total2", function() {
							$("#printf2").css("z-index", "");
							//$('.introjs-tooltip').css('width','');
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="flip()">Next&rarr;</a>');
						});
					});
				});
			break;
			case 'printChar':
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append('<div id="total3" class="display position opacity00">'+
							'<div id="printf31" class="display">printf("<div class="display position" id="charVal">The given '+
							'character = <y>%c</y></div>\n","<div class="display yellow" id="char">A</div>");</div></div>');
					$("#printf3").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
						$("#total3").removeClass("opacity00");
						fromEffectWithTweenMax("#printf3", "#total3", function() {
							$("#printf3").css("z-index", "");
							//$('.introjs-tooltip').css('width','');
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="flipchar()">Next&rarr;</a>');
						});
					});
				});
			break;
			}
		break;
		case "restartBtn" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#countBox').removeClass('z-index1000000');
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					$('#restart').click(function() {
						location.reload();
					});
				});
			});
		break;
		}
	});
	intro.start();
	
}
function total1() {
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<div id="output" class="opacity00 display position">Sum of two integers = <div id="dVal" class="display yellow">%d</div></div>');
	$('#sumTwo').css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$('#output').removeClass('opacity00');
		fromEffectWithTweenMax('#sumTwo', "#output", function() {
			$('#sumTwo').css('z-index','');
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="flipEffect()">Next&rarr;</a>');
		});
	});
}
function flipEffect() {
	$('.user-button').remove();
	flipEffectWithTweenMax("#sum", '50',function() {
		transferEffect('#sum', '#dVal', function() {
			flipEffectWithTweenMax("#dVal", $("#sum").text(), function() {
				transferEffect('#output' ,"#printlnId1", function() {
					$('#printlnId1').removeClass('opacity00');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
}
function flip() {
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<div id="output1" class="opacity00 display position">Product of two '+
			'float values = <div id="fVal" class="display yellow">%f</div></div>');
	$('#productTwo').css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$('#output1').removeClass('opacity00');
		fromEffectWithTweenMax('#productTwo', "#output1", function() {
			$('#productTwo').css('z-index','');
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="flipEffect1()">Next&rarr;</a>');
		});
	});
}
function flipchar() {
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<div id="outputChar" class="opacity00 display position">The '+
			'given character = <div id="cVal" class="display yellow">%c</div></div>');
	$('#charVal').css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$('#outputChar').removeClass('opacity00');
		fromEffectWithTweenMax('#charVal', "#outputChar", function() {
			$('#charVal').css('z-index','');
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="flipEffect2()">Next&rarr;</a>');
		});
	});
}
function flipEffect1() {
	$('.user-button').remove();
	flipEffectWithTweenMax("#product", '31.500000',function() {
		transferEffect('#product', '#fVal', function() {
			flipEffectWithTweenMax("#fVal", $("#product").text(), function() {
				transferEffect('#output1' ,"#printlnId2", function() {
					$('#printlnId2').removeClass('opacity00');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
}
function flipEffect2() {
	$('.user-button').remove();
	flipEffectWithTweenMax("#char", 'A',function() {
		transferEffect('#char', '#cVal', function() {
			flipEffectWithTweenMax("#cVal", $("#char").text(), function() {
				transferEffect('#outputChar' ,"#printlnId3", function() {
					$('#printlnId3').removeClass('opacity00');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
}
function typing(typingId, typingContent, typingCallbackFunction) {
	var typingSpeed = 1;
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingSpeed,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 400);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
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
		}
	});
}
function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}
					