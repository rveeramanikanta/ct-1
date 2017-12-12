
var cell = 32;
	var dataStep;
	var rightVal, leftVal;
	var index = 1, value = 0;
	var quotient;
	var remainder;
	var divisionStep ;
	var rightDec;
	var floatVal = "23.74";
	var fadeStep = 1;
var floatDataType = function() {
	dataStep = 1;
	divisionStep = 1;
	intro = introJs();
    intro.setOption('showStepNumbers',false);
    intro.setOption('exitOnOverlayClick',false);
    intro.setOption('keyboardNavigation',false);
		intro.setOptions({
			steps : [
					{
						element : '.discription-border',
						intro : '',
						position : 'bottom',
						tooltipClass: "hide"
					},
					{
						element : "#sign",
						intro: "",
						position: "bottom"
					},
					{
						element : "#eightBits",
						intro: "",
						position: "bottom"
					},
					{
						element : "#mantissa",
						intro: "",
						position: "bottom"
					},
					{
						element : '.discription-border',
						intro	: "",
						position : 'bottom'
					},
					{
						element : "#exp",
						intro: "",
						position: "top"
					}, 
					{
						element : '#expDivStep1',
						intro	: "",
						position : 'bottom'
					}, 
					{
						element : '#exp',//expDivStep2
						intro	: "",
						position : 'right'
					},
					{
						element : '#exp',//#expDivStep3
						intro	: "",
						position : 'right'
					},
					{
						element : '#exp',//expDivStep4
						intro	: "",
						position : 'right'
					},
					{
						element : '#exp',//expDivStep4
						intro	: "",
						position : 'right'
					},
					{
						element : '#exp',//expDivStep4
						intro	: "",
						position : 'right'
					},
					{
						element : '#restartBtn',
						intro : '',
						position : 'right',
						tooltipClass: 'hidden'
					}
			]
		})
		
		intro.onafterchange(function(targetElement) {
			
			if (intro._currentStep == 0) {
					$("#discription").fadeIn("slow", function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
			} 
			
			if (intro._currentStep == 1) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					TweenMax.to($("#blocks > div").eq(0), 1, {opacity: 1, onComplete: function() {
						fadingClick(fadeStep);
						++fadeStep;
					}})
				})
			}
		});	
		intro.start();
		$('.introjs-skipbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-nextbutton').hide();
		$('.introjs-bullets').hide();
		
		$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn'>Next&#8594;</a>");
		$('.introjs-tooltipbuttons').append("<a  class='introjs-button' id='divisionBtn'>Next&#8594;</a>");
		$('.introjs-tooltipbuttons').append("<a  class='introjs-button fadeBtn'>Next&#8594;</a>");
		$("#divisionBtn").hide();
		$('.nextBtn, .fadeBtn, .panel, #exp').hide();
		$(".nextBtn").click(function() {
				intro.nextStep();
				intro.refresh();
				$('.nextBtn').hide();
				nextClick(dataStep);
				++dataStep;
			})
			
			$("#divisionBtn").on('click', function() {
				divisionClick(divisionStep);
				++divisionStep;
			});
		
			$(".fadeBtn").on('click', function() {
				intro.nextStep();
					fadingClick(fadeStep);
					++fadeStep;
			});
			addSpan();
			$(".introjs-tooltip").hide();
}


function fadingClick(fadeStep) {
	
	if (fadeStep == 1) {
		$(".introjs-tooltip").show();
			var text = "<span class='ct-code-b-yellow'>Sign bit</span> represents the sign of a given value."
						+"<ul><li>0 -- positive number</li><li>1 -- negative number</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$(".fadeBtn").show();
				})
	}
	
	if (fadeStep == 2) {
		$(".introjs-tooltip").hide();
		$(".fadeBtn").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				TweenMax.to($("#blocks > div").eq(1), 1, {opacity: 1, onComplete: function() {
					$(".introjs-tooltip").show();
					var text = "<span class='ct-code-b-yellow '>Exponent</span> of the scientific notation is achieved by shifting the"
								+" <span class='ct-code-b-yellow'>radix</span> or decimal point to number"
								+" of positions and adding with <span class='ct-code-b-yellow'>127</span>."
								+" It occupies <span class='ct-code-b-yellow'>8</span> bits.";
					typing(".introjs-tooltiptext", text, function() {
						$(".fadeBtn").show();
					})
				}})
			})
	}
	
	if (fadeStep == 3) {
		$(".fadeBtn").hide();
		$(".introjs-tooltip").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				TweenMax.to($("#blocks > div").eq(2), 1, {opacity: 1, onComplete: function() {
					$(".introjs-tooltip").show();	
					var text = "<span class='ct-code-b-yellow'>Mantissa</span> is the right side of radix or decimal point"
								+" after exponent is achieved. It occupies <span class='ct-code-b-yellow'>23</span> bits.";
					typing(".introjs-tooltiptext", text, function() {
						$(".fadeBtn").show();
					})
				}})
			})
	}	
	
	if (fadeStep == 4) {
		$(".fadeBtn").hide();
		$(".introjs-tooltip").hide();
		$('.introjs-helperLayer ').one('transitionend', function() {
			$("#blocks").next().fadeIn("slow", function() {
				$(".introjs-tooltip").show()
				var text = "The float variable is converted to <span class='ct-code-b-yellow'>binary</span> and stored in"
							+" the memory. Click on the next button.";
				typing(".introjs-tooltiptext", text, function() {
					$(".nextBtn, #exp").show();
				})
			})
		})
	}	
}

function divisionClick(divisionStep) {
	$("#divisionBtn").hide();
	if (divisionStep == 1) {
		division(function() {
			valOffSet("#floatDecimal", "#dividend");
				quotient = Math.floor($("#dividend").text()/2);
				remainder = Math.floor($("#dividend").text()%2);
					TweenMax.to("#dividend",1,{top:0, left:0, onComplete: function() {
						$("#Brace").fadeTo("slow", "1", function() {
							$("#quotient").text(quotient);
							$("#remainder").text(remainder);
							$("#multiplier").text(quotient * 2);
							$("#quotient, #remainder, #divisor, #multiplier").addClass("opacity00");
							$("#divisionBtn").show();
						})
					}});
		});
}

 
if (divisionStep == 2) {
	$("#divisionBtn").hide();
	$("#divisor").fadeTo("slow", "1", function() {
			TweenMax.to("#quotient",1,{opacity:1, onComplete: function() {
				$("#divisionBtn").show();
			}});
	})
}

if (divisionStep == 3) {
	$("#divisionBtn").hide();
	TweenMax.fromTo("#multiplier, #line",1,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
		TweenMax.to("#remainder",1,{opacity:1, onComplete: function() {
			$("#divisionBtn").show();
		}})
	}})
}

if (divisionStep == 4) {
	$("#divisionBtn").hide();
	$("#binaryValue").append("<span id=binSpan1></span>");
	valOffSet("#remainder","#binSpan1", function() {
		$("#binSpan1").text(Math.floor($("#dividend").text()%2));
		$("#binaryValue > span").css("padding","0px 3px");
		TweenMax.to("#binSpan1",1,{opacity:1, top:0, left:0, onComplete:function() {
			$("#binSpan1").removeAttr('id');
			$("#divisionBtn").show();
		}})
	});
}

if (divisionStep == 5) {
		$("#divisionBtn").hide();
		typing("#decSteps","<li>Take the quotient value <span class='ct-code-b-yellow'>("+$("#quotient").text()+")</span>"
				+"and divide it by <span class='ct-code-b-yellow'>2</span>.</li>",function(){
		$(".heading-height").append('<li id=decSteps2></li>');
		$( "#decSteps" ).effect( "transfer", { to: $( "#decSteps2" ),className:"ui-effects-transfer"}, 1000,function() {
			$("#decSteps2").text( $("#decSteps").text());
			$("#dividend").text($("#quotient").text());
			valOffSet("#quotient", "#dividend");
			$("#quotient").text("");
			$("#multiplier").text("");
			$("#remainder").text("");
			TweenMax.to("#dividend",1,{top:0,left:0,onComplete:function() {
				$("#quotient,#remainder,#multiplier").css("opacity","");
				quotient = Math.floor($("#dividend").text()/2);
				 remainder = Math.floor($("#dividend").text()%2);
				 $("#quotient").text(quotient);
				$("#remainder").text(remainder);
				$("#multiplier").text(quotient * 2); 
				$("#divisionBtn").show();
			}});
		});
	});
}

if (divisionStep == 6) {
	$("#divisionBtn").hide();
	$("#divisor").fadeTo("slow","1",function(){
		TweenMax.to("#quotient",1,{opacity:1, onComplete: function() {
			$("#divisionBtn").show();
		}})
})
}

if (divisionStep == 7) {
	$("#divisionBtn").hide();
	TweenMax.fromTo("#multiplier,#line",1,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
		TweenMax.to("#remainder",1,{opacity:1, onComplete: function() {
			$("#divisionBtn").show();
		}})
	}})
}

if (divisionStep == 8) {
	$("#divisionBtn").hide();
	$("#binaryValue").append("<span id=binSpan1></span>");
	valOffSet("#remainder","#binSpan1");
	$("#binSpan1").text(Math.floor($("#dividend").text()%2));
	$("#binaryValue > span").css("padding","0px 3px");
	TweenMax.to("#binSpan1",1,{opacity:1,top:0,left:0,onComplete:function() {
		$("#binSpan1").removeAttr('id');
		$("#divisionBtn").show();
	}})
}

if (divisionStep == 9) {
	$("#divisionBtn").hide();
	typing("#decSteps","<li>Repeat the above step until you get the quotient value <span class='ct-code-b-yellow'>0</span>.</li>",function(){
			$(".heading-height").append('<li id=decSteps3></li>');
		$( "#decSteps" ).effect( "transfer", { to: $("#decSteps3"), className:"ui-effects-transfer"}, 1000,function() {
			$("#decSteps3").text( $("#decSteps").text());
			decimal(function() {
				$("#divisionBtn").show();
			});
		});
	});
	
}

if (divisionStep == 10) {
	$("#divisionBtn").hide();
	rightDec = rightDec * 2;
	TweenMax.fromTo('#mulTwo',1.5,{y:-90},{y:0,opacity:1,onComplete:function(){
		$('#mulTwo').append('<span id=fracBinary0>'+ rightDec.toString().split(".")[0] +'</span>.<span id=mulFraction0>'+rightDec.toString().split(".")[1]+'</span>');
		$("#FractionalBinaryValue").append("<span id=fracBinSpan0></span>");
		$("#mulTwo").removeAttr("id");
		valOffSet("#fracBinary0", "#fracBinSpan0");
		TweenMax.to("#fracBinSpan0", 0.5,{delay:0.5, top:0, left:0, onComplete: function() {
			$("#FractionalBinaryValue > span").css("padding","0px 3px")
			$("#fracBinSpan0").text(rightDec.toString().split(".")[0]);
			$(".heading-height").append("<li id=fracSteps2></li>");
			typing('#one','<li>After multiplying take the fraction part from the result '
					+'<span class="ct-code-b-yellow">'+rightDec+'</span> and multiple with <span class="ct-code-b-yellow">2</span>.</li>',function() {
				$('.heading-height').animate({scrollTop: $('.heading-height').prop("scrollHeight")}, 500);
				$( "#one" ).effect( "transfer", { to: $("#fracSteps2"),className:"ui-effects-transfer"}, 1000,function() {
					$("#fracSteps2").text( $("#one").text());
					$("#divisionBtn").show();
				});
			});
		}});
	}});
}

if (divisionStep == 11) {
	$("#divisionBtn").hide();
	var mulFraction = rightDec.toString().split(".")[1];
	rightDec = '0.' + mulFraction;
	$('#rightDecimalExp').append('<span id=cpyMulFraction style=position:relative;display:block;opacity:0; >0.'+mulFraction+'</span>');
	valOffSet("#mulFraction0", "#cpyMulFraction");
	TweenMax.to("#cpyMulFraction",1,{opacity:1, top:0, left:0, onComplete: function() {
		$(".heading-height").append("<li id=fracSteps3></li>");
		typing('#one', '<li>Multiply the <span class="ct-code-b-yellow">'+rightDec +'</span> with <span class="ct-code-b-yellow">2</span>.</li>', function() {
			$('.heading-height').animate({scrollTop: $('.heading-height').prop("scrollHeight")}, 500);
			$("#one").effect( "transfer", { to: $( "#fracSteps3" ), className:"ui-effects-transfer"}, 1000,function() {
				$("#fracSteps3").text( $("#one").text());
				$("#divisionBtn").show();
			});
		})
	}})
}

if (divisionStep == 12) {
	
	$("#divisionBtn").hide();
	rightDec = rightDec * 2;
	$('#cpyMulFraction').append('<span id="mulTwo" style=" display:inline-block;opacity:0;">&nbsp;x 2 =</span>');
	TweenMax.fromTo("#mulTwo",1,{y:-90},{opacity:1,y:0,onComplete:function() {
		$('#mulTwo').append('<span id=fracBinary1>'+ rightDec.toString().split(".")[0]+'</span>.<span id=mulFraction1>'+rightDec.toString().split(".")[1]+'</span>');
		$("#FractionalBinaryValue").append("<span id=fracBinSpan1></span>");
		$("#fracBinSpan1").insertBefore("#fracBinSpan0")
		valOffSet("#fracBinary1", "#fracBinSpan1");
		TweenMax.to("#fracBinSpan1",0.5,{delay:0.5,top:0,left:0,onComplete: function() {
			$("#FractionalBinaryValue > span").css("padding","0px 3px")
			$("#fracBinSpan1").text(rightDec.toString().split(".")[0]);
			$(".heading-height").append("<li id=fracSteps4></li>");
			typing("#one","<li>Repeat the above steps until we get the result as zero <span class='ct-code-b-yellow'>i.e,0.0000</span>.</li>",function() {
			$('.heading-height').animate({scrollTop: $('.heading-height').prop("scrollHeight")}, 500);
			$( "#one" ).effect( "transfer", { to: $( "#fracSteps4" ),className:"ui-effects-transfer"}, 1000,function() {
					$("#fracSteps4").text( $("#one").text());
					$("#mulTwo").removeAttr('id');
					$("#cpyMulFraction").removeAttr("id");
					$("#divisionBtn").show();
				});
			})
		}});
		
	}})
}

if (divisionStep == 13) {
		$("#divisionBtn").hide();
		fractionRecursion();
}

// This is the final step...
if (divisionStep == 14) {
	 typing(".introjs-tooltiptext", "<li><span id=signColor><b>S</b></span> - The sign of a binary floating-point"
			 +" number is represented by a single bit. A <span class='ct-code-b-yellow'>1</span> bit indicates a "
			 +"negative number, and a <span class='ct-code-b-yellow'>0</span> bit indicates a positive number.</li>",function() {
				 $("#span_0").text(0);
				 $("#divisionBtn").show();
	 });
}

if (divisionStep == 15) {
	
		typing(".introjs-tooltiptext","<li><span id=exponentColor><b>E</b></span>-The exponent part is stored "
				+"in a <span class='ct-code-b-yellow'>8</span> bits.</li>", function() {
				$("#biasBinExponent").css("background-color","pink");
				var Exp = $("#biasBinExponent").text();
					for(var i = 0; i < Exp.length; i++) {
						$("#span_"+(i+1)).text(Exp.charAt(i));
						$("#divisionBtn").show();
					}
		});
}

if (divisionStep == 16) {
	
	typing(".introjs-tooltiptext","<li><span id=mantisaColor><b>M</b></span>-You may have noticed that"
			+" in a normalized mantissa, the digit <span class='ct-code-b-yellow'>1</span> always appears to the left of the decimal point. In"
			+" fact, the leading <span class='ct-code-b-yellow'>1</span> is omitted from the mantissa in the IEEE storage format because "
			+"it is redundant.</li>", function() {
			
				$("#finalBin").css("background-color", "#d9ffcc");
				var Finalval = $("#finalBin").text();
				
				for (var i = 0; i < Finalval.length; i++) {
					$("#span_" + (i + 9)).text(Finalval.charAt(i));
				}
				
				$("#divisionBtn").show();
				$("#restartBtn").click(function() {
					location.reload(true);
				})	
	});
}

if (divisionStep == 17) {
	intro.nextStep();
	$("#restartBtn").removeClass("visibility-hidden");
}

}

function nextClick(dataStep) {
	if (dataStep == 1) {
		$(".nextBtn").hide();
		setTimeout(function() {
			typing('.introjs-tooltiptext', "Consider a float <span class='ct-code-b-yellow'>23.74</span> in which"
					+" <span class='ct-code-b-yellow'>23</span> is an integer and <span class='ct-code-b-yellow'>.74</span>"
					+" is a fractional part.", function() {
						$('.introjs-tooltiptext').removeClass('typingCursor');
						$('.nextBtn').show();
			}); 
		},1300);
	}
	
	if (dataStep == 2) {
		$(".nextBtn").hide();
		beforeDecimal = floatVal;
		leftVal = beforeDecimal.split('.')[0];
		rightVal = beforeDecimal.split('.')[1];
		leftBinary = (parseFloat(leftVal)).toString(2);
		rightBinary = (parseFloat("0."+rightVal)).toString(2).split('.')[1];
		$('#pdiv').append("<div id=apndVal><span id='intVal'>"+leftVal+"</span><span>.</span><span id='decimalVal'>"+rightVal+"</span> f</div>");
		
		setTimeout(function(){
			typing('.introjs-tooltiptext', "Since the value holds the float data type it occupies the <span class='ct-code-b-yellow'>4</span>"
					+" bytes of memory i.e <span class='ct-code-b-yellow'>32</span> bits."
					+"<ul id=bits></ul>", function(){
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.nextBtn').show();
					//$('.nextBtn').show();
					  /* TweenMax.fromTo("#span0",1,{top:-90},{top:0,opacity:1,onComplete:function() {
						 typing("#bits","<li><span id=signColor><b>S</b></span> - The sign of a binary floating-point number"
								 +"(given float is -ve or +ve) is represented by a single bit. A <span class='ct-code-b-yellow'>1</span> "
								 +"bit indicates a negative number, and a <span class='ct-code-b-yellow'>0</span> bit indicates"
								 +" a positive number.</li><span id=bits1></span>",function() {
							TweenMax.fromTo("#span1,#span2,#span3,#span4,#span5,#span6,#span7,#span8",1,{top: -90},{top:0,opacity:1,onComplete:function() {
								typing("#bits1","<li><span id=exponentColor><b>E</b></span> - The exponent of the scientific notation it is achieved"
										+" by shifting the radix point to number of positions and adding with <span class='ct-code-b-yellow'>127</span>."
										+"</li><span id=bits2></span>",function(){
									TweenMax.fromTo("#span9,#span10,#span11,#span12,#span13,#span14,#span15",1,{top:-90},{top:0,opacity:1,onComplete:function(){
										typing("#bits2","<li><span id=mantisaColor><b>M</b></span> - Before a floating-point binary number can be"
												+" stored correctly, its mantissa(M) must be normalized. As exponent part is achieved the"
												+" right side of radix point is mantissa(M).</li>",function() {
											TweenMax.fromTo('#span16, #span17, #span18, #span19, #span20, #span21, #span22, #span23',1,{top:-90},{top:0,opacity:1,onComplete:function(){
												TweenMax.fromTo('#span24, #span25, #span26, #span27, #span28, #span29, #span30, #span31',1,{top:-90},{top:0,opacity:1,onComplete:function() {
													$('.nextBtn').show();
												}});
											}});
										});
									}});
								});
							}})
							}) 
						}})   */
				
				//$('.nextBtn').show();
			}); 
			},1300); 
	
		var options =  {
				element : "#intVal",
				intro	: "",
				position : "bottom"
			}
		intro.insertOption(intro._currentStep + 1, options);
	
		 var options =  {
				element : "#decimalVal",
				intro	: "",
				position : "bottom",
			}
		intro.insertOption(intro._currentStep + 2, options); 
		 
		}

	if (dataStep == 3) {
		$('#rightDecimalExp').css('opacity','1');
		$(".nextBtn").hide(); // uncomment
		setTimeout(function() {
			
		typing('.introjs-tooltiptext', "To convert the decimal to binary the steps to be followed,<ul id=decSteps></ul>",function(){
			$('.introjs-tooltiptext').removeClass('typingCursor');
			$('#rightDecimalExp').show();
			$('.panel').show();
			$('#rightDecimalExp').append('<div id=label><b>Decimal-To-Binary</b></div>');
			$("#rightDecimalExp").append("<span id=declaration></span>");
			$('.heading-height').append('<div><b>Decimal-To-Binary-Steps </b></div>');
			typing("#declaration","amount = <span id='floatDecimal'>"+ leftVal+"</span><span>.</span><span id='floatFraction'>"+rightVal+"</span>",function(){
				typing("#decSteps","<li>Take the float-decimal value <span class='ct-code-b-yellow'>(23)</span> convert it to binary by dividing it with <span class='ct-code-b-yellow'>2</span>.</li>",function(){
					$('.heading-height').append('<li id=decSteps1></li>');
					$( "#decSteps" ).effect( "transfer", { to: $("#decSteps1"),className:"ui-effects-transfer"}, 1000,function() {
						$("#decSteps1").text( $("#decSteps").text());
						$("#divisionBtn").show(); //uncomment
					});
				})
			});
		}); 
		
				},1000);
	}

	 if (dataStep == 4) {
		$('.heading-height').append('<div id=label2><b>Fractional-To-Binary-Steps </b></div>');
		$('.heading-height').animate({scrollTop: $('.heading-height').prop("scrollHeight")}, 500);
		$(".nextBtn").hide(); //uncomment
			setTimeout(function() {
				typing('.introjs-tooltiptext',"To convert the fractional to binary the " 
						+"steps to be followed,<ul id=one></ul>", function() {
							$('#rightDecimalExp').show();
							$('#rightDecimalExp').append('<div id=label2><b>Fractionl-To-Binary</b></div>');
							$("#label2").append("<span id=FractionalBinaryValue></span>");
							typing('#one' ,"<li>Take the fractional part from the float <span class='ct-code-b-yellow'>23</span>."
									+"<span style='color:yellow;font-weight:bold;'>"+rightVal+"</span> mulitply it with "
									+"<span class='ct-code-b-yellow'>2</span>.</li>");//100
							 rightDec = "0."+rightVal;
							 $(".heading-height").append("<li id=fracSteps1></li>");
							 
							setTimeout(function() {
								
								$("#one").effect( "transfer", { to: $("#fracSteps1"),className:"ui-effects-transfer"}, 1000,function() {
									$("#fracSteps1").text( $("#one").text());
									binaryRecursion(rightDec, function() {
										$("#divisionBtn").show();//uncomment
									});//un-comment for fractional binary 
								});
							},2000);
						});//100
			}, 1300);
	}
	 
	 if (dataStep == 5) {
		 $('.nextBtn').show();
			setTimeout(function() {
				$('.heading-height').animate({scrollTop: $('.heading-height').prop("scrollHeight")}, 500);
				typing('.introjs-tooltiptext',"This is the exact converted floating-point to binary.", function() {
					$('.nextBtn').show();	
				});//100
			},1000);
		$('#pdiv').append("<div id=binVal>(<span id=leftBinary>"+(parseFloat(leftVal)).toString(2)+"</span><span id=dot><b>.</b></span><span id=rightBinary>"+(parseFloat("0."+rightVal)).toString(2).split('.')[1]+"</span>)<sub>2</sub></div>");
		TweenMax.staggerFrom('#binVal',1,{opacity:0,delay:0.5,y:-40,onComplete: function() {
		
		var options = {
					element : "#binVal",
					position:"right"
			}
			intro.insertOption(intro._currentStep+1, options);
			
		var options =  {
				element : "#dot",
				position : "right"
				}
			intro.insertOption(intro._currentStep+2, options);
		}});
	}
	 
	if (dataStep == 6) {
		$(".nextBtn").hide();
		typing(".introjs-tooltiptext","Before a floating-point binary number can be stored correctly, its mantissa must be normalized.",function() {
			$(".nextBtn").show();
		});
	} 
	
	if (dataStep == 7) {
		$(".nextBtn").hide();
		typing(".introjs-tooltiptext", "This is the radix point were the exponent value achieved by shifting this point.", function(){
			$(".nextBtn").show();
		})
	}
	
	if (dataStep == 8) {
		$(".nextBtn").hide();
		radixPoint();
		var dotIndex ;
		var dotShiftIndex;
		 $('<span id="dotShifted"></span>').insertAfter('#onePosition');
		var l1 = $("#dotPosition").offset();
		var l2 = $("#dotShifted").offset();
		var leftlength = l2.left - l1.left;
		dotIndex = $('#afterRadixShift').text().indexOf('.');
		$('#dotPosition').append('<span class=dot-circle></span>');
		   new TimelineLite().to('#dotPosition', 1, {delay:0.5, y:-12}).
		to('#dotPosition', 1, {x: leftlength-8, onComplete: function() {
			$("<span id=space>&nbsp</span>  ").insertAfter('#dotShifted');
		$('#dotShifted').css({'padding':'1px','font-weight':'bold'});
		}}).to('#dotPosition', 1, {y : 0,onComplete: function() {
			$('#space').remove();
			$('#dotShifted').text($('#dotPosition').text());
			$('#dotPosition').text('');
			dotShiftIndex = $('#afterRadixShift').text().indexOf('.');
			binValue = $('#afterRadixShift').text();
			$('#afterRadixShift').append('<div id=radix style="position:realtive;display:inline-block;opacity:0;" >&nbsp;x 2<span><sup id=exponent style="display:inline-block;opacity:0;">'
			+ (dotIndex - dotShiftIndex) +'</sup></span></div>');
			$('#dotPosition').children().removeAttr('class');
			 setTimeout(function() {
			TweenMax.fromTo('#radix', 1, {y:-90},{y:0,opacity:1,onComplete: function() {
				TweenMax.fromTo('#exponent',1,{y:-90},{delay:1, y:0, opacity:1, onComplete: function() {
					typing('.introjs-tooltiptext','The <span class="ct-code-b-yellow">mantissa</span> can be '
							+'achieved,By moving the decimal point so that only one digit appears before the decimal.',function() {
						$(".nextBtn").show();
					});
				 var options =  {
						element : "#exponent",
						position : "left"
						}
					intro.insertOption(intro._currentStep + 1, options); 
				}});
			}}); 
			}, 1000);  //9000
		}}); 
	}
	
	if (dataStep == 9) {
		$(".nextBtn").hide();
		typing(".introjs-tooltiptext","The <span class='ct-code-b-yellow'>exponent</span> expresses the number of positions the "
				+"decimal point was moved <span class='ct-code-b-yellow'>left</span> (positive exponent) or moved <span class='ct-code-b-yellow'>right</span> (negative exponent).",function() {
			$(".nextBtn").show();
		});
	}
	
	if (dataStep == 10) {
		$('#pdiv').append('<div><span id=demoMulBin2 style="position:realtive;display:inline-block;">'+ binValue +'</span><span id=demoByTwo style="position:realtive;display:inline-block;opacity:0;"> x 2</span><span id=demoExponent2 style="position:realtive;display:inline-block;opacity:0;"><sup id=possibleExponent style=position:absolute;><sup style="font-size:9px;">'+ 
		//change absolute to relative..		
		$('#exponent').text()+'+'+127+'</sup></sup></span><span><sup id=flipFront style="display:inline-block;opacity:0">'+(parseInt($('#exponent').text())+127)+'</sup></span></div>');
			 var options = {
						element : "#flipFront",
						position : "left"
			}
			intro.insertOption(intro._currentStep + 1, options); 
			TweenMax.fromTo("#demoByTwo",3,{delay:5,y:-90},{y:0,opacity:1,onComplete:function(){
				typing(".introjs-tooltiptext","IEEE Short Real exponents are stored as <span class='ct-code-b-yellow'>8</span>-bit unsigned "
						+"integers with a bias of <span class='ct-code-b-yellow'>127</span> and the exponent is added to "
						+"<span class='ct-code-b-yellow'>127</span>.");
					setTimeout(function() {
						TweenMax.fromTo("#demoExponent2",1,{y:-90},{y:0,opacity:1,onComplete:function() {
							TweenMax.fromTo("#possibleExponent",1,{delay:3,rotationX:0},{opacity:0,roatationX:90,onComplete:function(){
								TweenMax.fromTo("#flipFront",0.5,{delay:1,rotationX:-90},{rotationX:0,opacity:1,onComplete:function(){
							 		$(".nextBtn").show();
								 	/*	setTimeout(function() {
											typing(".introjs-tooltiptext","The binary exponent is unsigned, and therefore cannot be negative. The largest possible exponent is 128 when added to 127, it produces 255, the largest unsigned value represented by 8 bits. The approximate range is from 1.0 x 2<sup>"+ (-127) +"</sup> to 1.0 x 2<sup>"+128+"</sup>.",100,"","");
										},7000); */
								}});
					 		}});
						}})
					},1000);
			 	}});
	}
	
	if(dataStep == 11) {
		typing(".introjs-tooltiptext","The binary exponent is unsigned, and therefore cannot be negative."
				+" The largest possible exponent is <span class='ct-code-b-yellow'>128</span> when added "
				+"to <span class='ct-code-b-yellow'>127</span>, it produces <span class='ct-code-b-yellow'>255</span>,"
				+" the largest unsigned value represented by <span class='ct-code-b-yellow'>8</span> bits. The approximate"
				+" range is from <span class='ct-code-b-yellow'>1.0 x 2<sup>"+ (-127) +"</sup> "
				+"to 1.0 x 2<sup>"+128+"</sup></span>.",function() {
					$(".nextBtn").show();
		});
	}
	
	if(dataStep == 12) {
				var afterDot = binValue.slice(2);
				$('#pdiv').append('<div><span>'+binValue.substring(0,2)+'</span><span id=finalBin>'+ afterDot +'</span><span> x 2</span><sup id=biasedExponent><span id=biasBinExponent style="position: relative;" class=opacity00>'+
						(parseInt($('#flipFront').text())).toString(2) +'</span><span id=expToBin style="position:absolute;display:inline-block;" class=opacity00>'+$('#flipFront').text() +'</span></sup></div>');
			setTimeout(function(){
				
				TweenMax.to('#expToBin',1,{top:0, left:0, opacity:1,onComplete:function() {
					typing(".introjs-tooltiptext","Since the <span class='ct-code-b-yellow'>exponent</span> is in decimal, convert the exponent to binary.");
					setTimeout(function() {
						TweenMax.to('#expToBin',1,{rotationX:90,onComplete:function(){
							TweenMax.fromTo('#biasBinExponent',0.5,{rotationX:-90},{rotationX:0, opacity:1, onComplete: function() {
								$(".nextBtn").show();
							}});
					}})
						},1000);
				}});
			},1000);
	}
	
	if(dataStep == 13) {
		$(".nextBtn").hide();
		var mySpanDiv = document.getElementById("pdiv");
		for (var i = 0; i < 32; i++) {
		var  span= document.createElement('span');
		span.id = "span_"+i;
		span.className = "span-final";
		if (i == 0) {
			span.style.backgroundColor = "#ff0000";
			span.innerHTML = 'S';
		} else if (i > 0 && i < 9) {
			span.style.backgroundColor = "pink";// #66ff66
			span.innerHTML = 'E';
		} else {
			span.style.backgroundColor = "#d9ffcc";
			span.innerHTML = 'M';
		}
		mySpanDiv.appendChild(span);
		}
		typing('.introjs-tooltiptext', "We can now combine the <span class='ct-code-b-yellow'>sign</span>, "
				+"<span class='ct-code-b-yellow'>exponent</span>, and <span class='ct-code-b-yellow'>normalized mantissa</span> "
				+"into the binary IEEE short real representation", function() {
				$("#divisionBtn").show();
		})
	}

}
/*************************** Decimal-to-Binary**************************/
function division(callBackFtn) {
	$("#label").append("<span id=binaryValue></span>");
	$("#rightDecimalExp").append("<div id=tableDiv></div>");
	$("#tableDiv").append("<table><tr><td id=divisor>2</td id=Brace><td style=color:blue>)</td><td id=dividend>"+leftVal+"</td>"
							+"<td id=Brace style=color:blue>(</td><td id=quotient></td></tr><tr><td></td><td></td><td id=multiplier>"
							+"</td></tr><tr><td></td><td id=line colspan=4 style=color:blue>----------</td></tr>"
							+"<tr><td></td><td></td><td id=remainder></td></tr></table>");
	$("#divisor, #leftBrace, #rightBrace, #line").addClass("opacity00");
	
	if (typeof callBackFtn === 'function') {
		callBackFtn();
	}
}


function decimalDivision() {
	
	if ($("#dividend").text() >= 1) {
	
		var quotient = Math.floor($("#dividend").text()/2);
		var remainder = Math.floor($("#dividend").text()%2); 
		$("#quotient").text(quotient);
		$("#remainder").text(remainder);
		$("#multiplier").text(quotient * 2);
		$("#quotient,#remainder,#divisor,#multiplier").css("opacity","0"); 
		TweenMax.to("#divisor", 1, { opacity:1, onComplete: function() {
			decimalDivisionAnimation();
		}});
		
	} else {
		
		$("#divisionBtn").hide();
		$("#quotient").text('0');
		$("#multiplier").text('0');
		$("#remainder").text('0');
		$(".nextBtn").show();
		
	}
	
}

function decimal() {
	$("#divisionBtn").hide();
	 var quotient = $("#quotient").text();
	if (quotient > 0) {
		decimalDivisionAnimate();
	} else {
		$("#rightDecimalExp").append("<span id=desc></span>");
		typing("#desc","<span class='ct-code-b-blue'>(" + leftBinary + ")<sub>2</sub></span> is the binary value for the float-decimal <span class='ct-code-b-blue'>23</span>.",function() {
			$(".nextBtn").show();
		})
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
	TweenMax.to("#dividend",0.5,{top:1,left:0,onComplete:function() {
		TweenMax.to("#quotient",0.5,{opacity:1,onComplete:function() {
			TweenMax.fromTo("#multiplier",0.5,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
				TweenMax.to("#remainder",0.5,{opacity:1,onComplete:function() {
					$("#binaryValue").append("<span id=binSpan1></span>");
					valOffSet("#remainder","#binSpan1");
					$("#binSpan1").text(Math.floor($("#dividend").text()%2));
					$("#binaryValue > span").css("padding","0px 3px");
					TweenMax.to("#binSpan1",0.5,{opacity:1,top:0,left:0,onComplete:function() {
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
	TweenMax.to("#quotient",0.5,{opacity:1,onComplete:function() {
		TweenMax.fromTo("#multiplier",0.5,{rotationX:-90},{rotationX:0,opacity:1,onComplete:function() {
			TweenMax.to("#remainder",0.5,{opacity:1,onComplete:function() {
				$("#binaryValue").append("<span id=binSpan1></span>");
				valOffSet("#remainder","#binSpan1");
				$("#binSpan1").text(Math.floor($("#dividend").text()%2));
				$("#binSpan1").addClass("opacity00");
				TweenMax.to("#binSpan1",0.5,{opacity:1,top:0,left:0,onComplete:function() {
					//$("#binSpan1").text(remainder);
					$("#binSpan1").removeAttr('id');
					$("#dividend").text($("#quotient").text());
					valOffSet("#quotient", "#dividend");
					$("#quotient").text("");
					$("#multiplier").text("");
					$("#remainder").text("");
					TweenMax.to("#dividend",0.5,{top:0,left:0,onComplete:function() {
						//decimalDivision();
					}});
				}})
			}});
		}});
	}});
}
/**************************************End of Decimal to Binary*************************/

/*********************  converting fractional to binary ******************/
 function binaryRecursion(rightDec, callBackFunction) {
		var temp = rightDec;
		rightDec = rightDec * 2;
		animation(temp, rightDec, callBackFunction);			
	}

 function animation(temp, rightDec, callBackFunction) {
	 	//$("#binVal1").remove();
		var id = "#rightDecimalExp";
		$(id).append('<span id="binVal1" style="display:inline-block;opacity:0;">'+temp+'</span>');
		valOffSet('#floatFraction','#binVal1');
		TweenMax.to( "#binVal1", 3,{ delay:1,top:0,left:0,opacity:1,onComplete:function() {
			$("#divisionBtn").show();
			$('#binVal1').css({'display':'block'});
			$('#binVal1').append('<span id="mulTwo" style=" display:inline-block;opacity:0;">&nbsp;x 2 =</span>');
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
		}});
}
 
 function fractionRecursion() {
	 var mulFraction = $("#rightDecimalExp span").last().text();
	 $('#rightDecimalExp').append('<span id=cpyMulFraction style=position:relative;display:block;opacity:0; >0.'+ mulFraction + '</span>');
	 valOffSet("#mulFraction"+index, "#cpyMulFraction");
	 TweenMax.to("#cpyMulFraction",1,{opacity:1,top:0,left:0,onComplete:function() {
		rightDec = $('#cpyMulFraction').text()*2;
			$('#cpyMulFraction').append('<span id="mulTwo" style=" display:inline-block;opacity:0;">&nbsp;x 2 =</span>');
			TweenMax.fromTo("#mulTwo", 1, {y:-90},{ y:0, opacity:1, onComplete: function() {
				fractionRecursionResult();
			}})
	}});
}
 
 function fractionRecursionResult() {
	 
		$('#mulTwo').append('<span id=fracBinary'+(index+1)+'>'+rightDec.toString().split(".")[0]+'</span>.<span id=mulFraction'+(index+1)+'>'+rightDec.toString().split(".")[1]+'</span>');
		$("#FractionalBinaryValue").append("<span id=fracBinSpan"+(index+1)+"></span>");
		$("#fracBinSpan"+(index+1)).insertBefore("#fracBinSpan"+(index))
		valOffSet("#fracBinary"+(index+1), "#fracBinSpan"+(index+1));
		TweenMax.to("#fracBinSpan"+(index+1),1,{delay:0.5,top:0,left:0,onComplete: function() {
			$("#FractionalBinaryValue > span").css("padding","0px 3px")
			$("#fracBinSpan"+(index+1)).text(rightDec.toString().split(".")[0]);	
			$("#cpyMulFraction,#mulTwo").removeAttr("id");
			if (index <= 1) {
			fractionRecursion();
			index++;
			} else {
				$("#rightDecimalExp").append("<span id=fracDesc></span>")
				typing("#fracDesc","<span class='ct-code-b-blue'>("+ rightBinary.substring(0,5)+")<sub>2</sub></span>"
						+" is the approximate binary values for the float-fractional value.",function() {
						$(".nextBtn").show();
				});
				
			}
		}});
 }


/********************* End of the fraction Binary **********************************/

function radixPoint() {
	var pdiv = document.getElementById('pdiv');
	var cdiv = document.createElement('div');
				cdiv.setAttribute('id', 'afterRadixShift');
	var binText = $('#binVal > span').text();
	 var oneBoolean = true;
		for (var i = 0; i < binText.length; i++) {
			var cspan =	document.createElement('span');
			cspan.style.display = 'inline-block';
			cspan.style.position = 'relative';
			cspan.setAttribute('id', 'radixStepSpan'+i);
				if(binText[i] == '.') {
					cspan.setAttribute('id', 'dotPosition');
				} else if(oneBoolean && binText[i] == '1') {
					cspan.setAttribute('id', 'onePosition');
					oneBoolean = false;
				}
			cspan.innerHTML = binText[i];
			cdiv.appendChild(cspan);
		}
		pdiv.appendChild(cdiv);
	}


function valOffSet(from, to, callBackFunction) {
	var remLength = $(from).offset();
	$(to).offset({ top:remLength.top, left:remLength.left, onComplete: function() {
	}});
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function addSpan() {
	var mySpanDiv = document.getElementById("spanBits");
	for (var i = 0; i < 32; i++) {
	var  span= document.createElement('span');
	span.id = "span" + i;
	span.className = "span-box";
	span.style.opacity = "0";
	if (i == 0) {
		span.style.backgroundColor = "#ff0000";
		span.innerHTML = 'S';
	} else if (i > 0 && i < 9) {
		span.style.backgroundColor = "pink";// #66ff66
		span.innerHTML = 'E';
	} else {
		span.innerHTML = 'M';
	}
	mySpanDiv.appendChild(span);
	}
}


	function typing(selector, text, callBackFunction) {
	var typingSpeed = 15;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}