var buttonName, hVal;

function polynomialArrayReady() {
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	if (lang == 'cpp') {
		$('#headerFiles').html('#include &lt;iostream&gt;\nusing namespace std;');
	}
	initIntroJS();
}

function customIntroNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : tooltip,
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function getURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}

}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : 
			[ {
				element: '#polynomialHeading',
				intro: ''
			}, {
				element: '#polyArrayInit',
				intro: '',
				position: 'right'
			} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		switch(elementId) {
			case 'polynomialHeading':
				text = 'A <y>polynomial</y> is an <y>expression</y> consisting of <y>variables</y> (or <y>indeterminates</y>) and <y>coefficients</y>'
						+ ' that involves only the operations of <y>addition</y>, <y>subtraction</y>, <y>multiplication</y>, and non-negative'
						+ ' <y>integer exponents</y> of variables.<br>Ex : X<sup>2</sup> - 2X + 1';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					$('#preCode').removeClass('opacity00');
				});
			break;
			case 'polyArrayInit':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Let us declare a <y>MAX</y> with maximum size <y>10</y>.'
					typing('.introjs-tooltiptext', text, function() {
						//$('.margin-left').addClass('hide');
						$('#animationDiv').removeClass("opacity00");
						getIntrojsStep('#createBtnDiv', '', '', 'show');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'createBtnDiv':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', 'Click on create.');
					setTimeout(function() {
						$("#btnsDiv [disabled]").removeAttr("disabled");
						doPlayPause();
					}, 500);
				});
			break;
			case 'btnsDiv':
				introjs.refresh();
				$('.fa').remove();
				$('.background-color-yellow').removeClass('background-color-yellow');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#arrayMethods, #mainCallMethod').empty();
					typing('.introjs-tooltiptext', 'Choose any operation.');
					setTimeout(function() {
						$("#btnsDiv [disabled]").removeAttr("disabled");
						doPlayPause();
					}, 500);
				});
			break;
			case 'arrayDeclaration':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li>Let us declare two int arrays <y>head1</y> and <y>head2</y> with maximum size <y>MAX + 1</y> (i.e., <y>11</y>)'
							+ ' and initialize with <y>zero</y>(0).</li>'
							+ ' <li>Let us declare two int variables <y>hpow1</y> and <y>hpow2</y>.</li></ul>';
					typing('.introjs-tooltiptext', text, function() {
						customIntroNextSteps('#animationDiv', 'arrayInit', 'hide');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'printf3':
			case 'printf1':
				$('.introjs-helperLayer').one('transitionend', function() {
					customIntroNextSteps('#outputDiv', '', 'show', 'right');
					if (elementId == 'printf1') {
						$('#output').empty().append('<div id="power1Span" class="opacity00">Enter highest power of first polynomial :'
											+ ' <input class="usr-txt" size="3" maxlength="1" id="create1Text" type="text"/></div>');
					} else {
						$('#line2').removeClass('background-color-yellow');
						$('.fa, #createMethod').remove();
						iVal++;
						$('#output').append('<div id="power2Span">Enter highest power of second polynomial : <input class="usr-txt" size="3"'
								+ ' maxlength="1" id="create2Text" type="text"/></div>');
					}
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			break;
			case 'printf4':
			case 'printf2':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (elementId == 'printf2') {
						$("#output").append('<div class="opacity00">Enter first polynomial : </div>');
					} else {
						$("#output").append('<div class="opacity00">Enter second polynomial : </div>');
					}
					setTimeout(function() {
						customIntroNextSteps('#outputDiv', '', 'hide');
						introjs.nextStep();
					}, 500);
				});
			break;
			case 'createMethodCal2':
			case 'createMethodCal1':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Here we are calling <y>create</y>method</y> and passing <y>head' + iVal + '</y> and <y>hpow' + iVal + '</y> as arguments.';
					typing('.introjs-tooltiptext', text, function() {
						createMethod();
						getIntrojsStep('#createMethod', '', 'right', 'show');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'createMethod':
				$('#createMethod').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'In this method we are <y>inserting</y> values into the <y>head' + iVal + '</y>.'
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltiptext').append('<ul><li><span>int power</span></li></ul>');
						travel('#powerDec', '.introjs-tooltiptext ul li span', function() {
							hVal = (iVal == 1) ? hpow1 : hpow2; 
							$(".introjs-tooltiptext ul li span").append(" = <span>" + hVal + "</span>");
							text = 'Let us declare an <y>int</y> variable <y>i</y>.';
							arrowMoving('#line1', '#line1', text, function() {
								nextBtnWithoutCalling(function() {
									text = "This <y>for-loop</y> is repeated untill the <y>i</y> value is greater than or equal to <y>zero</y>.";
									arrowMoving('#line1', '#line2', text, function() {
										text = "Initially the <y>i</y> value is initialize with <y>power</y> value (i.e., "
												+ " <b style='font-family: monospace;'> i = " + $('#create' + iVal + 'Text').val() + "</b>).";
										liTying(text, function() {
											text = "It is used to enter the <y>coefficient</y> values.";
											liTying(text, function() {
												nextBtnWithoutCalling(function() {
													$('#output').append('<div id="coeff' + iVal + 'Span0" class="opacity00">Enter coeff value for '  
																	+ hVal + ' degree term : <input class="usr-txt" size="3" maxlength="2"'
																	+ ' id="create' + iVal + 'Text0" type="text"/></div>');
													customIntroNextSteps('#outputDiv', '', 'show', 'right');
													introjs.nextStep();
												});
											});
										});
									});
								});
							});
						});
					});
				});
			break;
			case 'animationDiv':
				$("#btnsDiv .btn").attr("disabled", "disabled");
				$('.introjs-helperLayer').one('transitionend', function() {	
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch (animateStep) {
						case 'arrayInit':
							$('#canvas').removeClass("opacity00");
							setTimeout(function() {
								customIntroNextSteps('#printf1', '', 'hide');
								introjs.nextStep();
							}, 800);
						break;
						case 'hpow1Anim':
							console.log(iVal)
							if (iVal == 1) {
								hpow1 = parseInt($('#create1Text').val());
							} else {
								hpow2 = parseInt($('#create2Text').val());
							}
							doPlayPause();
						break;
						case 'coeffAnim':
							let t = parseInt($('#create1Text').val());
							for (let i = t; i >= 0; i--) {
								head1[i] = parseInt($('#create' + iVal + 'Text' + t).val());
							}
							doPlayPause();
						break;
					}
				});
			break;
			case 'outputDiv':
				$("#outputDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".output-console-body").scrollTo($("#output > div:last"), 300, function() {
						$("#output > div:last").removeClass("opacity00");
						if (introjs._introItems[introjs._currentStep].tooltipClass == "hide") {
							doPlayPause();
						} else {
							let t = $('#output input:last').attr('id');
							if (t == 'create1Text' || t == 'create2Text') {
								typing('.introjs-tooltiptext', 'Enter highest power', function() {
									coeffValidation('#' + t, '', '', '', '', true);
								});
							} else {
								typing('.introjs-tooltiptext', 'Enter coefficient value.', function() {
									coeffValidation('#create' + iVal + 'Text0', hVal, 0, hVal, iVal, false);
								});
							}
						}
					});
				});
			break;
		}
	});
	introjs.start();
}

function coeffValidation(id, power, val, hpower, i, flag) {
	$(".usr-txt").off("keydown");
	var minusFlag = true;
	$(id).effect('highlight', {color: 'blue'}, 800).focus();
	$(id).off().on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if ((!flag) && $(id).val().length >= 1) {
			minusFlag = false;
		} else if ((!flag) && ($(id).val().indexOf('-') == -1 || parseInt($(id).val()) == 0)) {
			minusFlag = true;
		}
		if ((e.which == 109 || e.which == 173) && minusFlag && (!flag)) {
			minusFlag = false;
			return true;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	$(id).on("keyup", function(e) {
		if ($(id).val().indexOf('-') == 0 && (!flag)) {
			$(id).attr("maxlength", "3");
		} else if ($(id).val().indexOf('-') == -1 && (!flag)) {
			$(id).attr("maxlength", "2");
		}
		if ($(this).val().length > 0) {	
			if (flag) {
				customIntroNextSteps('#animationDiv', 'hpow1Anim', 'hide', 'right');
				$('.introjs-nextbutton').removeClass('introjs-disabled').show();
				if (e.keyCode == 13) {
					$(this).attr("disabled", true);
					introjs.nextStep();
				}
			} else {
				if (($(id).val().length >= 2 && $(id).val().indexOf('-', $(id).val().indexOf('-') + 1) == -1) || (!$(id).val().startsWith('-'))) {
					if (hpower == val) {
						e.preventDefault();
						customIntroNextSteps('#animationDiv', 'coeffAnim', 'hide', 'right');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
						if (e.keyCode == 13) {
							introjs.nextStep();
						}
						/*if (i == 1) {
							$('#output').append('<div id="power2Span">Enter highest power of second polynomial : <input class="usr-txt" size="3"'
									+ ' maxlength="1" id="create2Text" type="text"/></div>');
							coeffValidation('#create2Text', '', '', '', '', true);
						}*/
					} else {
						if (e.keyCode == 13) {
							$('.introjs-nextbutton').hide();
							$(this).attr("disabled", true);
							power--;
							val++;
							$("#output").append('<div id="coeff' + i + 'Span' + val +'">Enter coeff value for ' + (power) + ' degree term : '  
												+ '<input class="usr-txt" size="3" id="create' + i + 'Text' + val + '" maxlength="2" type="text"/></div>');
							coeffValidation('#create' + i + 'Text' + val, power, val, hpower, i, false);
					    }
					}
				} else {
					$('.introjs-nextbutton').hide();
				}
			}
   		} else {
   			$('.introjs-nextbutton').hide();
   		}
	});
}

function createMain() {
	iVal = 1;
	$('#mainCallMethod').html('').append('<span id="arrayDeclaration">int hpow1, hpow2;\n'
							+ 'int head1[MAX + 1] = {0},\n\t\t head2[MAX + 1] = {0};</span>\n'
							+ '<div id="printf1" class="position-css">printf("Enter highest power of first polynomial : ");\n'
							+ 'scanf("%d", &hpow1);</div>\n'
							+ '<span id="printf2">printf("Enter first polynomial : \\n");</span>\n'
							+ '<span id="createMethodCal1">create(head1, hpow1);</span>\n'
							+ '<div id="printf3" class="position-css">printf("Enter highest power of second polynomial : ");\n'
							+ 'scanf("%d", &hpow2);</div>\n'
							+ '<span id="printf4">printf("Enter second polynomial : \\n");</span>\n'
							+ '<span id="createMethodCal2">create(head2, hpow2);</span>');
	getIntrojsStep('#arrayDeclaration', '', 'right', 'show');
	introjs.nextStep();
}

function createMethod() {
	$('#arrayMethods').html('').append('<pre class="creampretab4 opacity00" id="' + buttonName + 'Method"></pre>');
	$('#' + buttonName + 'Method').append('<span id="methodDiv">void ' + buttonName + '(int arr[max + 1], <span id="powerDec">int power</span>) {\n'
							+ '\t<span id="line1">int i;</span>\n'
							+ '\t<div id="line2" class="position-css">for(i = power; i >= 0; i--) {\n'
							+ '\t<div id="methodText" class="position-css"></div>\n}</div>\n</span>'
							+ '}');
							if (buttonName == 'create') {
								$('#methodText').append('printf("Enter coeff value for %d degree term : ", i);\n'
													+ 'scanf("%d", &arr[i]);');
							} else {
								$('#methodText').append('printf("%d X^ %d --> ", arr[i], i);');
								$('#methodDiv').append('printf("\n");\n')
							}
}

function displayMain() {
	$('#mainCallMethod').html('').append('printf("First polynomial is : ");\n'
							+ 'display(head1, hpow1);\n'
							+ 'printf("Second polynomial is : ");\n'
							+ 'display(head2, hpow2);')
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({'top': l.top, 'left': l.left - ($('.arrow').width() * 1.5)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowMoving(id1, id2, text, callBackFunction) {
	$('.user-btn').remove();
	$('.background-color-yellow').removeClass('background-color-yellow');
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	arrow(id1, id2, function() {
		$(id2).addClass('background-color-yellow');
		liTying(text, function() {
			callBackFunction();
		});
	});
}

function liTying(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing($(".introjs-tooltiptext ul li:last"), text, function() {
		callBackFunction();
	});
}

function nextBtnWithoutCalling(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$(this).remove();
		callBackFunction();
	});
}




