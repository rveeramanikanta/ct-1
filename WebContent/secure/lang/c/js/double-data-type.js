var cell = 32;
var dataStep = 1;
var rightVal = 625;
var leftVal = 12;
var index = 1;
var quotient;
var remainder;
var divisionStep  = 1;
var rightDec;
var typingSpeed = 1;

var doubleDataTypeReady = function() {
	introcode = introJs();
	introcode.setOptions({
	showStepNumbers : false,
	exitOnOverlayClick : false,
	showBullets : false,
	exitOnEsc : false,
	keyboardNavigation : false,
	steps :[
	        {
				element : '#mainDiv',
				position : 'bottom',
				tooltipClass : 'hide',
				intro : ''
	        },
	        {
				element : "#restartBtn",
				intro : "Click to Restart",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}
	        ]
	});
	introcode.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "mainDiv":
			$('.introjs-nextbutton').hide();
			typingContent = '<ul><li><span class = color-green>double data</span> represents real numbers with a precision of 14-17 decimal places.</li><li>In the memory, it occupies <span class = color-green>8 bytes(64 bits)</span> of memory.</li><span id = "typing11"></span>'
			typing('#typing1',typingContent,function() {
				typingContent = '<li>It stores in <span class = color-green>IEEE 754 standard</span> format.</li><span id = "typing111"></span></ul>'
				typing('#typing11',typingContent,function() {
					typingContent = '<ul><li><span class = color-green>IEEE 754 standard</span> specifies the memory given for a double variable as given below:</li></ul>'
					typing('#typing111',typingContent,function() {
						for(var i = 1; i < 12; i++) {
							$('#boxDiv').append('<div class = "border-box color-pink opacity00" id = box'+i+'></span>');
						}
						for(var i = 13; i < 64; i++) {
							$('#boxDiv').append('<div class = "border-box color-blue opacity00" id = box'+i+'></span>');
						}
						for(var i = 64; i > 25; i--) {
							$('#spanDiv').append('<div class = "borderless-box" id = span'+i+'>'+i+'</div>');
						}
						for(var i = 25; i >= 16; i--) {
							$('#spanDiv').append('<div class = "borderless-box padding1" id = span'+i+'>'+i+'</div>');
						}
						for(var i = 15; i >= 10; i--) {
							$('#spanDiv').append('<div class = "borderless-box" id = span'+i+'>'+i+'</div>');
						}
						for(var i = 9; i >= 0; i--) {
							$('#spanDiv').append('<div class = "bord-box" id = span'+i+'>'+i+'</div>');
						}
						$('#box0').fadeTo(1000,1,function() {
							$('#floatsignDiv').css({'opacity' : '1'});
							$('#firstDiv').css({'opacity' : '1'});
							$('#floatnumDiv').css({'opacity' : '1'});
							$('#first1Div').css({'opacity' : '1'});
							$("#box0").effect( "highlight",{color: 'yellow'}, 500,function() {
							$('.introjs-tooltip').removeClass("hide");
							texttyping();
						}); 
					});
				});
			});
		});
		break;
		case "restartBtn":
			$(".nextBtn2").remove();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$("#restartBtn").click(function() {
					location.reload();
				});
			});
		break;
		} 
	});
	introcode.start();
	$('').hide();
	$('.introjs-nextbutton,.introjs-skipbutton,.introjs-prevbutton').hide();
}

function typing(typingId,typingContent,callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":typingSpeed,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}
function animationbtn1() {
	$('.animation-nextbtn').remove();	
	$('.introjs-tooltip').addClass("hide");
	setTimeout(function() {
		$('.color-pink').fadeTo(1000,1);
		$('#second2Div, #secondDiv').css({'opacity' : '1'});
		for(var i = 1; i < 12; i++) {
			$("#box" + i).show();
		}
		for(var i = 13; i < 64; i++) {
			$("#box" + i).hide();
		}
		$('.introjs-tooltip').removeClass("hide");
		texttyping2();
	},1000);
}
function texttyping2() {
	typingContent = '<span class = color-yellow>Exponent</span> of the scientific notation is achieved by shifting the '+
			'<span class = color-yellow>radix</span> or decimal point to number of positions. '+
				'It occupies <span class = color-yellow>11</span> bits.</li>'
	typing('.introjs-tooltiptext',typingContent,function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn'>&#8592; Back</a>"); 
		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>"+
			"Next &#8594;</a>"); 
		$('.user-btn').click(function() {
			$('.user-btn, .animation-nextbtn').remove();	
			$('.introjs-tooltip').addClass('hide');
			for(var i = 1; i < 12; i++) {
				$("#box" + i).hide();
			}
			for(var i = 13; i < 64; i++) {
				$("#box" + i).hide();
			}
			$("#secondDiv, #second2Div").css("opacity", 0);
			$("#thirdDiv, #third3Div").css("opacity", 0);
			$('.introjs-tooltip').removeClass("hide");
			texttyping();
		});
		$('.animation-nextbtn').click(function() { 
			$('.user-btn, .animation-nextbtn').remove();
			$('.introjs-tooltip').addClass('hide');
			$('.color-blue').fadeTo(1000,1);
			$('#thirdDiv').css({'opacity':'1'});
			$('#third3Div').css({'opacity':'1'});
			$('.introjs-tooltip').removeClass("hide");
			texttyping1();
		}); 
	}); 
}
function backbtn2() {
	$(".user-btn, .animation-nextbtn").remove();
	for(var i = 13; i < 64; i++) {
		$("#box" + i).hide();
	}
	$("#third3Div,#thirdDiv").css("opacity", 0);
	texttyping2();
}
function animationbtn2() {
	$(".user-btn, .animation-nextbtn").remove();	
	$('.introjs-tooltip').addClass('hide');
	$('#floatdec').css({'opacity':'1'});
	$('#inputDiv').fadeTo(1000,1,function() {
		setTimeout(function() { 
			$('#floatVar').fadeTo(1000,1,function() {
				$('#floatBox').fadeTo(1000,1,function() {
					$('.byte-div').fadeTo(1000,1,function() {
						$('#addDiv').fadeTo(1000,1,function() {
							$('.introjs-tooltip').removeClass('hide');
							typingContent = 'The double variable can be converted to binary and stored in the memory.'
							typing('.introjs-tooltiptext',typingContent,function() { 
								$('.introjs-tooltipbuttons').prepend("<a  class='introjs-button nextBtn2' onclick = 'myfunction1()'>&#8592; Back</a>");
								$('.introjs-nextbutton').show();
							 });
						});
					});
				});
			});
		 },1000); 
	});
}
function myfunction1() {
	$('.introjs-nextbutton').hide();
	$(".nextBtn2").remove();
	$('.introjs-tooltip').addClass('hide');
	$('#floatdec').css({'opacity':'0'});
	$('#addDiv,.byte-div,#floatBox,#inputDiv,#floatVar').fadeTo(10,0);
	$('.introjs-tooltip').removeClass('hide');
	texttyping1();
}
function texttyping1() {
	typingContent = '<span class = color-yellow>Mantissa</span> is the right side of radix or decimal '+
			'point after exponent is achieved. It occupies <span class = color-yellow>52</span> bits.'
	typing('.introjs-tooltiptext',typingContent,function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' "+
			"onclick = 'backbtn2()'>&#8592; Back</a>");		
		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' "+
			"onClick = 'animationbtn2()'>Next &#8594;</a>");
	});
}
function texttyping() {
	var typingContent = '<span class = color-yellow>Sign bit</span> stores the sign of a given double in <span class = color-yellow>1</span> bit.';
	typing('.introjs-tooltiptext',typingContent,function() {
		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' "+
		"onClick = 'animationbtn1()'>Next &#8594;</a>"); 
	});
	$(".animation-nextbtn, .user-btn").remove();
}
