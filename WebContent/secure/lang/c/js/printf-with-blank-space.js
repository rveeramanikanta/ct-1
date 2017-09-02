var printfWithBlankSpaceReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#printfDefinition',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#program',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#variableDeclararionDiv',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#printfListDiv',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#sopLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep : "printText"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep : "printText"
			},{
				element :'#sopLine2',
				intro :'',
				tooltipClass : "hide",
				animateStep : "noSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep : "noComma"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass : "hide",
				animateStep : "withSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep : "withSpace"
			},{
				element :'#sopLine4',
				intro :'',
				tooltipClass : "hide",
				animateStep : "withComma"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep : "withComma"
			},{
				element :'#sopLine5',
				intro :'',
				tooltipClass : "hide",
				animateStep : "spaceAndComma"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep : "spaceAndComma"
			},{
				element : "#restartBtn",
				intro : "Click to restart",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
			case "printfDefinition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				TweenMax.to('#printfDefinition', 1, {opacity: 1, onComplete: function() {
					$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
						$('.introjs-duplicate-nextbutton').click(function() {
							$(".introjs-duplicate-nextbutton").remove();
							introcode.nextStep();
						});
					});
				}});
			break;
			case "program" :
				$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
				$("#printfDefinition").addClass("z-index1000000");
				$('.introjs-nextbutton').hide();
				introcode.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'We will first see how a <span class = "ct-code-b-yellow">printf()</span>'+
							' function without <span class = "ct-code-b-yellow">comma</span>'+
							' and <span class = "ct-code-b-yellow">space</span> works. And  later we will see'+
							' how to introduce a <span class = "ct-code-b-yellow">comma</span>'+
							' and <span class = "ct-code-b-yellow">space</span> to make the output reader friendly.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "variableDeclararionDiv" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring three integer variables '+
							'<span class = "ct-code-b-yellow">a</span>, '+
							'<span class = "ct-code-b-yellow">b</span>, '+
							'<span class = "ct-code-b-yellow">c</span> which are being initialized to '+
							'<span class = "ct-code-b-yellow">14</span>, '+
							'<span class = "ct-code-b-yellow">24</span> and '+
							'<span class = "ct-code-b-yellow">34</span>  '+
							'respectively.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect('#VariableDeclararion1', '#numberDiv1', function() {
						transferEffect('#VariableDeclararion2', '#numberDiv2', function() {
							transferEffect('#VariableDeclararion3', '#numberDiv3', function() {
								introNextStep();
							});
						});
					});
				});
			break;
			case "printfListDiv" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us go through the various '+
							' <span class = "ct-code-b-yellow">printf</span> statements which will show us'+
							' the usage of <span class = "ct-code-b-yellow">comma</span> '+
							' and <span class = "ct-code-b-yellow">space</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "sopLine" + sopLineCount :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printText" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class = "ct-code-b-yellow">printf</span> statement prints'+
									' the text enclosed in the <span class = "ct-code-b-yellow">double-quotes</span>'+
									' to the console.';								
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();	
							}); 
						break;
						case "noSpace" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here the <span class = "ct-code-b-yellow">printf()</span> '+
									'function contains <span class = "ct-code-b-yellow">&bsol;n%d%d</span> '+
									'and then the values <span class = "ct-code-b-yellow">a</span> and'+
									' <span class = "ct-code-b-yellow">b</span> '+
									' that will be substituted in their respective'+
									' <span class = "ct-code-b-yellow">%d</span> format characters.'
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						case "withComma" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'In this example we are using a <span class="ct-code-b-yellow">comma</span>'+
									' instead of <span class="ct-code-b-yellow">space</span> to separate '+
									'the two <span class="ct-code-b-yellow">%d</span> format characters'+
									' used to display <span class="ct-code-b-yellow">a</span> and'+
									' <span class="ct-code-b-yellow">b</span>. <br/><br/>'+
									' If you notice we do not have a <span class="ct-code-b-yellow">&bsol;n</span> '+
									' (<span class="ct-code-b-yellow">newline</span>) character before the first'+
									' <span class="ct-code-b-yellow">%d</span>'+
									' because in the previous <span class="ct-code-b-yellow">printf</span> we had a '+
									' <span class="ct-code-b-yellow">&bsol;n</span> at the end.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "withSpace" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Let us consider a <span class="ct-code-b-yellow">printf</span> statement that provides a '+
									'<span class="ct-code-b-yellow">space</span> between the two '+
									'<span class="ct-code-b-yellow">%d</span> format characteres so that'+
									' in the output we get a <span class="ct-code-b-yellow">space</span> while'+
									' the two values of <span class="ct-code-b-yellow">a</span> '+
									' and <span class="ct-code-b-yellow">b</span> are printed.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "spaceAndComma" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'In this <span class="ct-code-b-yellow">printf()</span> function '+
									'we are using both <span class="ct-code-b-yellow">comma</span> and'+
									' a <span class="ct-code-b-yellow">space</span> to '+
									'separate the three values <span class="ct-code-b-yellow">a</span>,'+
									' <span class="ct-code-b-yellow">b</span> and <span class="ct-code-b-yellow">c</span>. '
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printText" :
							$("#outputAValue0").text($('#outputText').text());
							transferEffect('#outputText', '#outputAValue0', function() {
								$("#appendDiv" + sopLineCount).removeClass("visibility-hidden");
								setTimeout(function() {
									sopLineCount++;
									introcode.nextStep();
								},800);
							});
						break;
						case "noComma" :
							printDecimalValue("decimalValueOnly");
						break;
						case "withComma" :
							printDecimalValue("decimalValueAndComma");
						break;
						case "withSpace" :
							printDecimalValue("decimalValueAndSpace");
						break;
						case "spaceAndComma" :
							printDecimalValue("decimalValueSpaceAndComma");
						break;
					}
				});
			break;
			case "restartBtn":
				$('.introjs-nextbutton').hide();
				$("#printfDefinition").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

var introcode;
var typingInterval = 10;
var tl = new TimelineLite();
var sopLineCount = 1;
var outputValueCount = 1;
var count = 0;

function printDecimalValue(text) {
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction('#persentage' + sopLineCount, 'z-index1000000', function() {
		highlightFunction('#aValue' + sopLineCount, 'z-index1000000', function() {
			fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
				$('#persentage' + sopLineCount).removeClass('z-index1000000');
				$('#aValue' + sopLineCount).removeClass('z-index1000000');
				highlightFunction('#addressValue1', 'circle-css z-index1000000', function() {
					$("#outputAValue" + outputValueCount).text($("#addressValue1").text());
					fromEffectWithTweenMax("#addressValue1", "#outputAValue" + outputValueCount, false, function() { 	
						$('#addressValue1').removeClass('circle-css z-index1000000');
			  			if (text == "decimalValueOnly") {
				  			printDecimalValue2('decimalValueOnly');
			  			} else if (text == "decimalValueAndComma" || text == "decimalValueSpaceAndComma") {
			  				transferEffect("#comma" + sopLineCount, "#commaO" + outputValueCount, function() {
			  					$("#commaO" + outputValueCount).text(",");
			  					if (text == "decimalValueSpaceAndComma") {
			  						printDecimalValue2("decimalValueSpaceAndComma");
			  					} else {
						  			printDecimalValue2('decimalValueAndComma'); 
			  					}
			  				});
			  			} else {
			  				transferEffect("#blankSpace" + sopLineCount, "#blankSpaceO" + outputValueCount, function() {
			  					$("#blankSpaceO" + outputValueCount).html("&nbsp;");
			  					$("#blankSpaceO" + outputValueCount).effect( "highlight",{color: '#ffff33'}, 500);
			  					printDecimalValue2('decimalValueAndSpace');
			  				});
			  			}
					});
				});
			});
		});
	});
}

function printDecimalValue2(text) {
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction('#persentageD' + sopLineCount, 'z-index1000000', function() {
		highlightFunction('#bValue' + sopLineCount, 'z-index1000000', function() {
			fromEffectWithTweenMax("#bValue" + sopLineCount, "#bValueAnimation", true,  function() {
				$('#persentageD' + sopLineCount).removeClass('z-index1000000');
				$('#bValue' + sopLineCount).removeClass('z-index1000000');
				highlightFunction('#addressValue2', 'circle-css z-index1000000', function() {
					$("#outputBValue" + outputValueCount).text($("#addressValue2").text());
					fromEffectWithTweenMax("#addressValue2", "#outputBValue" + outputValueCount, false, function() {
						$('#addressValue2').removeClass('circle-css z-index1000000');
				  		if (text == "decimalValueSpaceAndComma") {
				  			transferEffect("#blankSpace" + sopLineCount, "#blankSpaceO" + outputValueCount, function() {
			  					$("#blankSpaceO" + outputValueCount).html("&nbsp;");
			  					$("#blankSpaceO" + outputValueCount).effect( "highlight",{color: '#ffff33'}, 1000);
			  					cValurAnimation();
			  				});
				  		} else {
				  			if (text == 'decimalValueSpaceAndComma') {
				  				outputValueCount++;
								sopLineCount++;
								introNextStep();
				  			} else {
				  				if (text == 'decimalValueOnly') {
					  				typingText = 'You will notice that the two values '+
					  							 '<span class = "ct-code-b-yellow">14</span> and '+
					  							 '<span class = "ct-code-b-yellow">24</span> do not'+
					  							 ' have a <span class = "ct-code-b-yellow">space</span> in-between them.';
					  			} else if (text == 'decimalValueAndSpace') {
					  				typingText = 'You will notice that the two values '+
					  							 '<span class = "ct-code-b-yellow">14</span> and '+
					  							 ' <span class = "ct-code-b-yellow">24</span> have a'+
					  							 ' <span class = "ct-code-b-yellow">space</span> in-between them.';
					  			} else if (text == 'decimalValueAndComma') {
						  			typingText = 'You will notice that the two values '+
					  							 '<span class = "ct-code-b-yellow">14</span> and '+
					  							 ' <span class = "ct-code-b-yellow">24</span> have a'+
					  							 ' <span class = "ct-code-b-yellow">comma</span> in-between them.';
					  			}
					  			$('.introjs-tooltip').removeClass('hide');
					  			typing('.introjs-tooltiptext', typingText, typingInterval, 'white', function() {
					  				outputValueCount++;
									sopLineCount++;
									$('.introjs-nextbutton').show();
								});
				  			}
				  		}
					 });
				});
			});
		});
	});
}

function cValurAnimation() {
	highlightFunction('#persentageDA' + sopLineCount, 'z-index1000000', function() {
		highlightFunction('#cValue' + sopLineCount, 'z-index1000000', function() {
			fromEffectWithTweenMax("#cValue" + sopLineCount, "#cValueAnimation", true, function() {
				$('#persentageDA' + sopLineCount).removeClass('z-index1000000');
				$('#cValue' + sopLineCount).removeClass('z-index1000000'); 
				highlightFunction('#addressValue3', 'circle-css z-index1000000', function() {
					$("#outputCValue" + outputValueCount).text($("#addressValue3").text());
					fromEffectWithTweenMax("#addressValue3", "#outputCValue" + outputValueCount, false,  function() {
						$('#addressValue3').removeClass('circle-css z-index1000000');
				  		 outputValueCount++;
				  		introNextStep();
				  	});
				});
			});
		});
	});
}

//*******Text highlight function*****
function highlightFunction(selector1, selector2, callBackFunction) {
	$(selector1).addClass(selector2).effect( "highlight",{color: 'yellow'},500, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//*****setTimeout function to intro go next step step*****
function introNextStep() {
	setTimeout(function() {
		introcode.nextStep();
	},800);
}

//*****From effect animation*****
function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "red", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: white;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "white");
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


//********* Transfer effect function ********* 
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
} 