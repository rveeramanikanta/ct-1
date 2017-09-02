var cell = 32;
var dataStep = 1;
var rightVal = 625;
var leftVal = 12;
var index = 1;
var quotient;
var remainder;
var divisionStep  = 1;
var rightDec;
var  exppower = 0;

var floatInActionReady = function() {
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
				element : '#mainnumDiv',
				position : 'bottom',
				intro : '',
				tooltipClass : 'hide',
	        },
	        {
				element : '#intpart',
				position : 'bottom',
				tooltipClass : 'hide',
				intro : ''
	        },
	        {
				element : '#fractpart',
				position : 'bottom',
				tooltipClass : 'hide',
				intro : ''
	        },
	        {
				element : '#finalDivtext',
				position : 'bottom',
				tooltipClass : 'hide',
				intro : ''
	        },
	        {
				element : '#shiftdotDiv',
				position : 'right',
				tooltipClass : 'hide',
				intro : ''
	        }, 
	        {
				element : '#finalDiv',
				position : 'right',
				tooltipClass : 'hide',
				intro : ''
	        },
	        {
				element : '#restartBtn',
				position : 'right',
				intro : ''
	        } 
	        ]
	});
	introcode.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "mainDiv":
		$('.introjs-nextbutton').hide();
		typingContent = '<ul><li><span class = color-green>float data</span> represents real numbers with a decimal point.</li><li>It occupies <span class = color-green>4 bytes(32 bits)</span> in the memory.</li><span id = "typing11"></span>'
		typing('#typing1',typingContent,function() {
			typingContent = '<li><span class = color-green>float </span> stores in <span class = color-green>IEEE 754 standard</span> format.</li><span id = "typing111"></span></ul>'
			typing('#typing11',typingContent,function() {
				typingContent = '<ul><li><span class = color-green>IEEE 754 standard</span> specifies the memory given for a float variable as </li></ul>'
				typing('#typing111',typingContent,function() {
					for(var i = 1; i < 9; i++) {
						$('#boxDiv').append('<div class = "border-box color-pink opacity00" id = box'+i+'></span>');
					}
					for(var i = 9; i < 32; i++) {
						$('#boxDiv').append('<div class = "border-box color-blue opacity00" id = box'+i+'></span>');
					}
					for(var i = 30; i > 25; i--) {
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
							typingContent = '<span class = "color-yellow">Sign bit</span> represents the sign of a given value.<br><ul><li>0 -- positive number</li><li>1 -- negative number</li>'
							typing('.introjs-tooltiptext',typingContent,function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' onClick = 'animationbtn1()'>Next &#8594;</a>"); 
							});
						});
					});
		 		});
			});
		});
		break;
		case "mainnumDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				$('#mainnumDiv').addClass('introjs-showElement');  
				$('.first-heading').text('How to convert float value to binary');
				$('#numDiv').fadeTo(1000,1,function() {
			 		$('#intpart').fadeTo(1000,1,function() {
						$('.introjs-tooltip').removeClass("hide");
						typingContent = 'First we convert the integral part(12) and then fractional part(.625) to binary.'
						typing('.introjs-tooltiptext',typingContent,function() {
				 			$('.introjs-nextbutton').show();	
						});
				 	});
				});
			});
		break;
		case "intpart":
		$('.introjs-nextbutton').hide();
		$('#int1Div').fadeTo(1000,1,function() {
			introcode.refresh();
			$('.panel-text').append('<span id = step0></span>');
		 	typingContent = '<ul><li>Take the integral value <span id = "int12Div">12</span></li><span id = step2></span>'
			typing('#step0',typingContent,function() {
				$('#int2Div').fadeTo(1000,1,function() {
					setTimeout(function() {
						$('#int2Div').append('<div id=label><b>Decimal-To-Binary</b></div>');
						$("#label").append("&nbsp;<span id=declaration></span>");
						typingContent = '<span id="floatDecimal">'+ leftVal+'</span>'
						typing('#declaration',typingContent,function() {
							$('.introjs-tooltip').removeClass("hide");
							typingContent = 'Here, integral value is the value before the decimal point'
							typing('.introjs-tooltiptext',typingContent,function() {
								$("#divisionBtn").show(); 
							});
						});
					},1000);
				});
			}); 
		 });
		break;
		case "fractpart":
		$('.introjs-tooltip').addClass("hide");
		$('.introjs-helperLayer').one('transitionend', function() {
			$('.introjs-nextbutton').hide();
			$('#bDiv').css({'opacity':'1'});
			var fractoffset = $('#fractnumDiv').offset();
			$('#fracpart').offset ({
				"top" : fractoffset.top,
				"left" : fractoffset.left
			});
			TweenMax.to('#fracpart',0.5,{opacity:1,top : 0,left:0, onComplete:function() {
				$('#int3Div').css({'opacity' : '1'});
				typingContent = '<ul id=one></ul>'
				typing('.panel2-text',typingContent,function() { 
					setTimeout(function() {
						typingContent = '<li>Take the fractional part from 12.<span style="font-weight:bold;">'+rightVal+'</span> mulitply it with 2.</li><span id = "two"></span>'
						typing('#one',typingContent,function() { 
							typingContent = 'We take the fractional part(0.625) and multiply it by 2.'
							typing('.introjs-tooltiptext',typingContent,function() { 
								$('#int4Div').css({'opacity' : '1'});
								$('#int4Div').append('<div id=label2><b>Fractional-To-Binary</b></div>');
								$("#label2").append("<span id=FractionalBinaryValue></span>");
								$("#label2").append("<div id= fractnum>Fraction : <span id = rightValue>0.625</span></div>");
								var rightDec = $('#rightValue').text();
								$('.introjs-tooltip').removeClass("hide");
								binaryRecursion(rightDec);
							});
						});
					},2000);
				});
			}});
		});
		break;
		case "finalDivtext":
		$('.introjs-helperLayer').one('transitionend', function() {
			$('#finalDivtext').append('<span id="floatText" class = "col-xs-offset-3 padding0">12.625 = (<span id = "lef">1100</span>.<span id = "lef">101</span>)<sub>2</sub></span><br><span id = "floatText1" class = "marginleft30"></span>');
			typingContent = 'Now, as per IEEE 754 standard specify the binary number into normalisation form.<span id = "floatText2" class = "marginleft30"></span>'
			typing('#floatText1',typingContent,function() {
				typingContent = '<br>Normalisation form means before the decimal point we have only one value.<span id = "floatText3" classs = "col-xs-offset-3 padding0"></span>'
				typing('#floatText2',typingContent,function() {
					typingContent = 'So, we normalise.'
					typing('.introjs-tooltiptext',typingContent,function() { 
						$('.introjs-tooltip').removeClass("hide");
						$('introjs-nextbutton').show();
					});
				});
			});
		});
		break;
		case "shiftdotDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltip').removeClass("hide");
				typingContent = 'The decimal point is shifted to get only one value before it.'
				typing('.introjs-tooltiptext',typingContent,function() { 
					$('#shiftdotDiv').append('<div class = "col-xs-offset-3 col-xs-4 " id = "floatanimation">1<span id = "manValDiv"><span id = "num1">&nbsp;&nbsp;1</span><span id = "num2">&nbsp;&nbsp;0</span><span id ="num3">&nbsp;0</span><span id = "num4">&nbsp;.</span>1&nbsp;0&nbsp;1</span>&nbsp;x <span id = "power3"> 2</span><sup id = exp3><sup>0</sup></sup></span></div>');
						$("#num4").effect( "highlight", {color:"#669966"}, 3000 );
						setTimeout(function() {
						shiftdot(3);
						$("#num4").effect( "highlight", {color:"#669966"}, 3000 );
						setTimeout(function() {
							typingContent = 'x <span id = "power3"> 2<span id = exp3><span>3</span></span></span>'
							typing('#mulby2',typingContent,function() {
								$('#shiftdotDiv').append('<span class = "col-xs-11" id = deduceDiv></span>')
								typingContent = '<ul><li>The <b>exponent</b>  is <span class = "opacity00" id = exp3Div>3</span><span id = "binarybiasDiv"></span>'
								typing('#deduceDiv',typingContent,function() {
									var numoffset = $('#exp3').offset();
									$('#exp3Div').offset ({
										"top" : numoffset.top,
										"left" : numoffset.left
									});
									TweenMax.to('#exp3Div',2,{opacity:1,top : 0,left:0, onComplete:function() {
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' onClick = 'animationbtn3()'>Next &#8594;</a>"); 
									}});	
								}); 
							}); 
						},3000);
					},2000);
				});
			});
		break;
		case "finalDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide"); 
				$('.introjs-nextbutton').hide();
				$('#finalDiv').css({'opacity':'1'});
				typingContent = 'Representation of the float value in binary form is.'
				typing('.introjs-tooltiptext',typingContent,function() {
					setTimeout(function() {
						$('#lastDiv').css({'opacity':'1'});
						$('#lastvalDiv').css({'opacity':'1'});
						setTimeout(function() {
							$('#signval').text(0);
							typingContent = 'In Sign bit, we entered the value <b>0</b> as the sign of the given float value is positive(+ve).'
							typing('.introjs-tooltiptext',typingContent,function() {
								$("#signval").effect( "highlight", {color:"#669966"}, 3000 );
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$('.animation-nextbtn').remove();
									$('#expval').text(10000010); 
									$("#biasBinExponent").effect( "highlight", {color:"#669966"}, 3000 );
									$("#expval").effect( "highlight", {color:"#669966"}, 3000 );
									typingContent = 'The exponent value is <span class = color-yellow>10000010</span>.'
									typing('.introjs-tooltiptext',typingContent,function() {
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
										$('.animation-nextbtn').click(function() { 
											$('.animation-nextbtn').remove();
											typing('.introjs-tooltiptext','The mantissa is <span class = color-yellow>100101</span>',function() {
												$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>");
												$('.animation-nextbtn').remove();
												$('#manval').text(100101); 
												$("#mantissavalue").effect( "highlight", {color:"#669966"}, 3000 );
												$("#manval").effect( "highlight", {color:"#669966"}, 3000 );
												setTimeout(function() {
													$('#lastbitDiv').css({'opacity':'1'});
													$('.introjs-nextbutton').show();
												},3500);
											});
										});
									});
								});
							});
						},1000);
					},2000);
				});
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				typingContent = 'To restart, click on this button.'
				typing('.introjs-tooltiptext',typingContent,function() {
				});
			});
		break;
		} 
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn'>Next&#8594;</a>");
	$('.introjs-tooltipbuttons').append("<a  class='introjs-button' id='divisionBtn'>Next&#8594;</a>");
	$("#divisionBtn").hide();
	$(".nextBtn").hide();
	$("#divisionBtn").on('click',function() {
		divisionClick(divisionStep);
		++divisionStep;
	})
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function myfunction() {
	$('#mainDiv').addClass('visibility-hidden'); 
	$('.nextBtn1').hide();
	document.getElementById("animationDiv").style.zIndex = "-1";
	  introcode.nextStep();
}

function typing(typingId,typingContent,callbackFunction) {
$(typingId).typewriting(typingContent, {
	"typing_interval":10,
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
		$('#secondDiv').css({'opacity' : '1'});
		$('#second2Div').css({'opacity' : '1'});
		$('.introjs-tooltip').removeClass("hide");
		typingContent = '<span class = color-yellow>Exponent</span> of the scientific notation is achieved by shifting the <span class = color-yellow>radix</span> or decimal point to number of positions and adding with 127. It occupies 8 bits.</li>'
		typing('.introjs-tooltiptext',typingContent,function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function() { 
				$('.animation-nextbtn').remove();	
				$('.introjs-tooltip').addClass('hide');
				$('.color-blue').fadeTo(1000,1);
				$('#thirdDiv').css({'opacity':'1'});
				$('#third3Div').css({'opacity':'1'});
				$('.introjs-tooltip').removeClass("hide");
				typingContent = '<span class = color-yellow>Mantissa</span> is the right side of radix or decimal point after exponent is achieved. It occupies 23 bits.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' onClick = 'animationbtn2()'>Next &#8594;</a>"); 
				});
			}); 
		}); 
	},1000);
}
function animationbtn2() {
	$('.animation-nextbtn').remove();	
	$('.introjs-tooltip').addClass('hide');
	$('#floatdec').css({'opacity':'1'});
	$('#inputDiv').fadeTo(1000,1,function() {
		setTimeout(function() { 
			$('#floatVar').fadeTo(1000,1,function() {
				$('#floatBox').fadeTo(1000,1,function() {
					$('.byte-div').fadeTo(1000,1,function() {
						$('#addDiv').fadeTo(1000,1,function() {
							$('.introjs-tooltip').removeClass('hide');
							typingContent = 'The float variable is converted to binary and stored in the memory. Click on the next button.'
							typing('.introjs-tooltiptext',typingContent,function() { 
							 	$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn1' onclick = 'myfunction()'>Next&#8594;</a>"); 
							 });
						});
					});
				});
			});
		 },1000); 
	});
}
function animationbtn3() {
	$('.animation-nextbtn').remove();	
	typingContent = '<br>We use <a href = "https://en.wikipedia.org/wiki/Exponent_bias">bias form</a> for 32 bit and add 127 to exponent 3.<span id = "biasDiv"></span></li>'
	typing('#binarybiasDiv',typingContent,function() {
		$('#binarybiasDiv').append('<div><span id=demoMulBin2">Exponent = </span><span id = "demobytwo"><span style="position:absolute; display:inline-block;" class = "opacity00" id = "possibleExponent" >'+ $('#exp3').text()+'+'+127+'</span><span id=flipFront style="position : relative;" class = "opacity00">'+(parseInt($('#exp3').text())+127)+'</span></span></div>');
		 TweenMax.to("#possibleExponent",1,{rotationX:90,opacity:1, onComplete:function(){
			 TweenMax.fromTo("#flipFront",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function(){
				$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
				$('.animation-nextbtn').click(function() { 
					$('.animation-nextbtn').remove();
					$('#binarybiasDiv').append('<div><span id = "expdisplay" class = "opacity00">Exponent = <span id=biasedExponent><span id=expToBin style="position:absolute;display:inline-block;" class=opacity00>'+$('#flipFront').text() +'</span><span id=biasBinExponent style="position: relative;" class=opacity00>'+
							(parseInt($('#flipFront').text())).toString(2) +'</span></span></div>');
					setTimeout(function() {
						typingContent = 'Since the exponent is in decimal, convert the exponent to binary'
						typing('.introjs-tooltiptext',typingContent,function() {
							$('#expdisplay').css({'opacity':'1'});
							TweenMax.to('#expToBin',1,{rotationX:90,opacity:1, onComplete:function() {
								TweenMax.fromTo('#biasBinExponent',0.5,{rotationX:-90},{rotationX:0,opacity:1}); 
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$('.animation-nextbtn').remove();
									typingContent = 'Mantissa is the fractional value after the decimal point.'
									typing('.introjs-tooltiptext',typingContent,function() { 
										$('#biasedExponent').append('<br><span id = mantissaDiv>Mantissa = <span id = mantissavalue>100101</span></span>');
										$("#manValDiv").effect( "highlight", {color:"#669966"}, 3000 );
										$("#mantissavalue").effect( "highlight", {color:"#669966"}, 3000 );
										$('.introjs-nextbutton').show();
									});
								});
							}});
						});
					},1200);
				});
			}});
		 }});	
	});
}
function shiftdot(count) {
	var i = 4;
	if(count >= 1) {
		var l1 = $("#num" + i).offset();
		var val = $("#num" + i).text();
		var l2 = $("#num" + count).offset();
		var val1 = $("#num" + count).text();
		var l4 = l2.top - l1.top;
	 	var l5 = l2.left-l1.left;
	 	TweenMax.to("#num" + i, 2, {top :l4, left:l5,onComplete:function() {
		    TweenMax.to("#num" + count, 1, {left : 6});
		    $('#exp3').text(exppower);
	   	}});
		count--;
		exppower++;
		shiftdot(count);
	}
}
function divisionClick(divisionStep) {
	$('.introjs-nextbutton').hide();
	if (divisionStep == 1) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		division();
		valOffSet("#floatDecimal", "#dividend");
		quotient = Math.floor($("#dividend").text()/2);
		remainder = Math.floor($("#dividend").text()%2);
		TweenMax.to("#dividend",.5,{top:0,left:0,onComplete:function() {
			$("#Brace").fadeTo("slow","1",function() {
				$("#quotient").text(quotient);
				$("#remainder").text(remainder);
				$("#multiplier").text(quotient * 2);
				$("#quotient,#remainder,#divisor,#multiplier").addClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typingContent = 'In Binary System, since the base is 2, we divide the integral value(12) by 2.'
				typing('.introjs-tooltiptext',typingContent,function(){
					$("#divisionBtn").show();
				});
			})
		}})
	}
	if (divisionStep == 2) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		$("#divisor").fadeTo("slow","1",function() {
			TweenMax.to("#quotient",.5,{opacity:1,onComplete:function() {
				TweenMax.fromTo("#multiplier,#line",.5,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
					TweenMax.to("#remainder",.5,{opacity:1,onComplete:function() {
						$('.introjs-tooltip').addClass('hide');
						$("#divisionBtn").hide();
						$("#binaryValue").append("<span id=binSpan1></span>");
						valOffSet("#remainder","#binSpan1");
						$("#binSpan1").text(Math.floor($("#dividend").text()%2));
						$("#binaryValue > span").css("padding","0px 3px");
						TweenMax.to("#binSpan1",.5,{opacity:1,top:0,left:0,onComplete:function() {
							$("#binSpan1").removeAttr('id');
							$('.introjs-tooltip').removeClass('hide');
							typingContent = 'Let us store the remainder.'
							typing('.introjs-tooltiptext',typingContent,function() {
								$("#divisionBtn").show();
							});
						}})
					}})
				}})
			}})
		})
	}
	if (divisionStep == 3) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		typingContent = '<li>Take the quotient value i.e, '+$("#quotient").text()+'<span> divide it with 2.</span></li><span id = "step3"></span>'
		typing('#step2',typingContent,function() { 
			$("#dividend").text($("#quotient").text());
			valOffSet("#quotient", "#dividend");
			$("#quotient").text("");
			$("#multiplier").text("");
			$("#remainder").text("");
			$('#line').css({'opacity' : '0'});
			TweenMax.to("#dividend",.5,{top:0,left:0,onComplete:function() {
				$("#quotient,#remainder,#multiplier").css("opacity","");
				quotient = Math.floor($("#dividend").text()/2);
				remainder = Math.floor($("#dividend").text()%2);
				$("#quotient").text(quotient);
				$("#remainder").text(remainder);
				$("#multiplier").text(quotient * 2); 
				$('.introjs-tooltip').removeClass('hide');
				typingContent = 'In the next step, let us take the quotient of previous step as divisor and divide it by 2.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$("#divisor").fadeTo("slow","1",function() {
						TweenMax.to("#quotient",.5,{opacity:1,onComplete : function() {
							TweenMax.fromTo("#multiplier,#line",.5,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
								$('#remainder').css({'padding-left' : '4px'});
								TweenMax.to("#remainder",.5,{opacity:1, onComplete : function() {
									$("#binaryValue").append("<span id=binSpan1></span>");
									valOffSet("#remainder","#binSpan1");
									$("#binSpan1").text(Math.floor($("#dividend").text()%2));
									$("#binaryValue > span").css("padding","0px 3px");
									TweenMax.to("#binSpan1",.5,{opacity:1,top:0,left:0,onComplete:function() {
										$("#binSpan1").removeAttr('id');
										$('.introjs-tooltip').removeClass('hide');
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
										$('.animation-nextbtn').click(function() { 
											$('.animation-nextbtn').remove();
											typingContent = 'Let us append the remainder to the left of the previous remainder.'
											typing('.introjs-tooltiptext',typingContent,function() {
												$("#divisionBtn").show();
											});
										});
									}})
								}})
							}})
						}});
					})
				});
			}});
		});
	}
	
	if (divisionStep == 4) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		typingContent = '<li>Repeat the above step until you get the quotient value 0.</li>'
		typing('#step3',typingContent,function() { 
			$('.introjs-tooltip').removeClass('hide');
			typingContent = 'Let us repeat the above steps i.e. divide the quotient by 2, till we get the quotient as 0.'
			typing('.introjs-tooltiptext',typingContent,function() {
				setTimeout(function() {
					decimal();
				},1500);
			});
		});
	}
	if (divisionStep == 5) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		rightValue = rightValue * 2;
		$('#mulTwo').append('<span id = "result"><span id= "fracBinary0">1.</span><span id="mulFraction0">25</span></span>');
		setTimeout(function() {
			$("#FractionalBinaryValue").append("<span id=fracBinSpan0></span>");
			$("#mulTwo").removeAttr("id");
			$("#FractionalBinaryValue > span").css("padding","0px 3px");
		 	valOffSet("#fracBinary0", "#fracBinSpan0"); 
			TweenMax.to("#fracBinSpan0",0.5,{delay:0.5,top:0,left:0,onComplete:function(){
				$("#fracBinSpan0").text('1');
				$('.introjs-tooltip').removeClass('hide');
				typingContent = 'Let us take the integral value before decimal and store it.'
				typing('.introjs-tooltiptext',typingContent,function() {
					typingContent = '<li>Take the fractional part from <b>1.25</b> and multiply it(<b>.25</b>) with 2.</li><span id = "three"></span>'
					typing('#two',typingContent,function() {  
						$("#divisionBtn").show();
					});
				});
			}});
		});
	}
	
	if (divisionStep == 6) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		var mulFraction = 25;
		rightDec = '0.'+mulFraction;
		$('#binVal1').append('<div><span id="cpyMulFraction" >0.'+mulFraction+'</span></div>');
		valOffSet("#mulFraction0", "#cpyMulFraction");
		TweenMax.to("#cpyMulFraction",.5,{opacity:1,top:0,left:0,onComplete:function() {
			$('.introjs-tooltip').removeClass('hide');
			typingContent = 'Let us take the fraction part(.25) after the decimal and multiply it with 2.'
			typing('.introjs-tooltiptext',typingContent,function() {
				rightDec = rightDec * 2;
				$('#cpyMulFraction').append('<span id="mul2">&nbsp;x 2 =</span>');
				TweenMax.fromTo("#mul2",.5,{y:-90},{opacity:1,y:0,onComplete:function() {
					$('#mul2').append('<span id=fracBinary1>0.</span><span id=mulFraction1>50</span>');
					$("#FractionalBinaryValue").append("<span id=fracBinSpan1></span>");
					valOffSet("#fracBinary1", "#fracBinSpan1");
					TweenMax.to("#fracBinSpan1",0.5,{delay:0.5,top:0,left:0,onComplete:function(){
						$("#FractionalBinaryValue > span").css("padding","0px 3px")
						$("#fracBinSpan1").text('0');
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
						$('.animation-nextbtn').click(function() { 
							$('.animation-nextbtn').remove();
							typingContent = 'Multiply the fractional part with 2 and take the integral part before the decimal and append it to the right of the previous value.'
							typing('.introjs-tooltiptext',typingContent,function() {
								$("#divisionBtn").show();
							});
						});
					}});
				}})
			});
		}})
	}
	
	if (divisionStep == 7) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		var mulFraction1 = 50;
		rightDec = '0.'+mulFraction1;
		$('.introjs-tooltip').removeClass('hide');
		typingContent = 'Repeat the above steps i.e.multiply the fractional part with 2 and take the integral part before the decimal and append it to the right of the previous value till we get the fractional part as 0.0000'
		typing('.introjs-tooltiptext',typingContent,function() {
			$('#binVal1').append('<div><span id = "cpyMulFraction1" class = "opacity00" >0.'+mulFraction1+'</span></div>');
			valOffSet("#mulFraction1", "#cpyMulFraction1");
			typingContent = '<li>Take the fractional part from <b>0.50</b> and multiply it(<b>.50</b>) with 2.</li>'
			typing('#three',typingContent,function() {  
				TweenMax.to("#cpyMulFraction1",.5,{opacity:1,top:0,left:0,onComplete:function() {
					rightDec = rightDec * 2;
					$('#cpyMulFraction1').append('<span id="mul3">&nbsp;x 2 =</span>');
					TweenMax.fromTo("#mul3",.5,{y:-90},{opacity:1,y:0,onComplete:function() {
						$('#mul3').append('<span id=fracBinary2>1.</span><span id=mulFraction2>0</span>');
						$('#mulFraction2').effect( "highlight",{color: 'yellow'}, 500,function() {
						$("#FractionalBinaryValue").append("<span id=fracBinSpan2></span>");
							valOffSet("#fracBinary2", "#fracBinSpan2");
							TweenMax.to("#fracBinSpan2",0.5,{delay:0.5,top:0,left:0,onComplete:function() {
								$("#FractionalBinaryValue > span").css("padding","0px 3px")
								$("#fracBinSpan2").text('1');
								$("#divisionBtn").show();
							}});
						});
					}});
				}});
			});
		});
	}
	
	// This is the final step..
	if (divisionStep == 8) {
		$('.introjs-tooltip').addClass('hide');
		$("#divisionBtn").hide();
		typingContent = ''
		typing('#four',typingContent,function() {  
			$('#binVal1').append('<div><span id="cpyMulFraction4"></span></div>');
			typingContent = '<span id = "fra">101</span> is the binary value for 0.625.'
			typing('#cpyMulFraction4',typingContent,function() { 
				$('.introjs-tooltip').removeClass('hide');
				typingContent = 'Let us combine the conversion of decimal-binary and fraction-binary result.'
				typing('.introjs-tooltiptext',typingContent,function() {  
					$(".introjs-nextbutton").show();
				});
			});
		});
	}
}
function typing(typingId,typingContent,callbackFunction) {
$(typingId).typewriting(typingContent, {
	"typing_interval":10,
	"cursor_color": "blue"
}, function() {
	$(typingId).removeClass('typingCursor');
	callbackFunction();
});
}
function valOffSet(from,to) {
	var remLength = $(from).offset();
	$(to).offset({top:remLength.top,left:remLength.left});
}
function division() {
	$("#label").append("<span id=binaryValue></span>");
	$("#int2Div").append("<div id=tableDiv></div>");
	$("#tableDiv").append("<table><tr id = tablechildDiv><td id=divisor>2</td id=Brace><td style=color:blue>)</td><td id=dividend>"+leftVal+"</td><td id=Brace style=color:blue>(</td><td id=quotient></td></tr><tr><td></td><td></td><td id=multiplier></td></tr><tr><td></td><td id=line colspan=3 style=color:blue>----------</td></tr><tr><td></td><td></td><td id=remainder></td></tr></table>");
	$("#divisor,#leftBrace,#rightBrace,#line").addClass("opacity00");
}
function decimalDivision() {
	if ($("#dividend").text() >= 1) {
		var quotient = Math.floor($("#dividend").text()/2);
		var remainder = Math.floor($("#dividend").text()%2); 
		$("#quotient").text(quotient);
		$("#remainder").text(remainder);
		$("#multiplier").text(quotient * 2);
		$("#quotient,#remainder,#divisor,#multiplier").css("opacity","0"); 
		TweenMax.to("#divisor",.5,{opacity:1,onComplete:function() {
			decimalDivisionAnimation();
		}});
	} else {
		$("#divisionBtn").hide();
		$("#quotient").text('0');
		$("#multiplier").text('0');
		$("#remainder").text('0');
	}
}

function decimal() {
	$('.introjs-tooltip').addClass('hide');
	$("#divisionBtn").hide();
	var quotient = $("#quotient").text();
	if (quotient > 0) {
		decimalDivisionAnimate();
	} else {
		var leftBinary = (parseFloat(leftVal)).toString(2);
		$("#int2Div").append("<span id=desc></span>")
		typingContent ="<span id = 'lef'>" +leftBinary+"</span> is the binary value for 12."
		typing('#desc',typingContent,function() { 
			$('#fractpart').css({'opacity':'1'});
			$('.introjs-tooltip').removeClass('hide');
			typingContent = 'Now let us convert the fractional part to binary.'
			typing('.introjs-tooltiptext',typingContent,function() {
				$('.introjs-nextbutton').show();
			});
		});
	}
}
function decimalDivisionAnimate() {
	$("#dividend").text($("#quotient").text());
	var quotient = Math.floor($("#dividend").text()/2);
	var remainder = Math.floor($("#dividend").text()%2);
	valOffSet("#quotient", "#dividend");
	$("#quotient,#multiplier,#remainder").text("");
	$("#quotient").text(quotient);
	$("#remainder").text(remainder);
	$("#multiplier").text(quotient * 2);
	$("#quotient,#remainder,#multiplier").css("opacity",""); 
	TweenMax.to("#dividend",.5,{top:0,left:0,onComplete:function() {
		TweenMax.to("#quotient",.5,{opacity:1,onComplete:function() {
			TweenMax.fromTo("#multiplier",.5,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
				TweenMax.to("#remainder",.5,{opacity:1,onComplete:function() {
					$("#binaryValue").append("<span id=binSpan1></span>");
					valOffSet("#remainder","#binSpan1");
					$("#binSpan1").text(Math.floor($("#dividend").text()%2));
					$("#binaryValue > span").css("padding","0px 3px");
					TweenMax.to("#binSpan1",.5,{opacity:1,top:0,left:0,onComplete:function() {
						$("#binSpan1").removeAttr('id');
						decimal();
					}})
				}})
			}})
		}});
	}});
}
function decimalDivisionAnimation() {
	var remainder = Math.floor($("#dividend").text()%2);
	TweenMax.to("#quotient",.5,{opacity:1,onComplete:function() {
		TweenMax.fromTo("#multiplier",.5,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
			TweenMax.to("#remainder",.5,{opacity:1,onComplete:function() {
				$("#binaryValue").append("<span id=binSpan1></span>");
				valOffSet("#remainder","#binSpan1");
				$("#binSpan1").text(Math.floor($("#dividend").text()%2));
				$("#binSpan1").addClass("opacity00");
				TweenMax.to("#binSpan1",.5,{opacity:1,top:0,left:0,onComplete:function() {
					$("#binSpan1").removeAttr('id');
					$("#dividend").text($("#quotient").text());
					valOffSet("#quotient", "#dividend");
					$("#quotient").text("");
					$("#multiplier").text("");
					$("#remainder").text(""); 
					$('#line').css({'opacity' : '0'});
					TweenMax.to("#dividend",.5,{top:0,left:0,onComplete:function() {
						decimalDivision();
					}});
				}})
			}});
		}});
	}});
}

function binaryRecursion(rightDec) {
	var temp = rightDec;
	rightDec = rightDec * 2;
	animation(temp,rightDec);			
}
	
function animation(temp,rightDec) {
var id = "#int4Div";
	$(id).append('<span id="binVal1" class = "opacity00">'+temp+'</span>');
	valOffSet('#rightValue','#binVal1'); 
   	TweenMax.to( "#binVal1", .5,{ delay:1,top:0,left:0,opacity:1,onComplete:function() {
		$('#binVal1').append('<span id="mulTwo" style=" display:inline-block;">&nbsp;x 2 =</span>'); 
		$("#divisionBtn").show();
	}});  
}