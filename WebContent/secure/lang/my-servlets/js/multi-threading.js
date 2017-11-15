var iVal = 1;

function multiThreadingReady() {
	poolCreation();
	browserNReqResCreation();
	initIntroJS();
}

function browserNReqResCreation() {
	for (var i = 1; i <= 3; i++) {
		creatingBrowser(i, '<img src="/secure/lang/servlets/images/ct-logo.png" class="logo">Welcome to CT</img>');
		$('#inputId' + i).val('https://..codetantra.com/login.jsp');
		$('#reqEcpBox' + i).addClass('col-xs-12 padding00 opacity00 destroy').append('<div class="eclipse-shape-small col-xs-5 box-shadow" id="req'
				 			+ i + '">request</div><div style="margin-left: 5px;"' + ' id="res' + i 
							+ '" class="eclipse-shape-small box-shadow col-xs-5 bg-color-white">response</div>');
	}
	$('#browser1').removeClass('margin-top5');
}

function creatingBrowser(val, titleId) {
	$("#browserId").append('<div class="col-xs-12 padding00 container margin-top5 opacity00" style="border: 1px solid grey;"'
						+ ' id="browser' + val + '"><div class="tab-container"><ul class="tabs padding00 clearfix" ><li class="active">'
						+ ' <div class="col-xs-12 margin-top20 padding00"id="browserHeading' + val + '">' + titleId 
						+ '</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
						+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
						+ '<div id="browser" class="col-xs-12 padding00 browser"><div class="col-xs-2 padding00 text-center">'
						+ '<span id="arrowCircle" class="col-xs-4 padding00"><i class="fa fa-arrow-left arrow"></i></span>'
						+ '<span class="col-xs-4 padding00"><i class="fa fa-arrow-right arrow"></i></span>'
						+ '<span class="col-xs-4 padding00"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
						+ '<div class="col-xs-8 padding00 text-center url margin-bottom5"><input type="text" maxlength="100" '
						+ 'class="usr-text padding00" id="inputId' + val + '" disabled>'
						+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
						+ '<div class="col-xs-2 padding00 fa-display text-center">'
						+ '<span class="col-xs-6 padding00"><i class="fa fa-home fa-1x"></i></span>'
						+ '<span class="col-xs-6 padding00"><i class="fa fa-bars fa-1x"></i></span></div></div>'
						+ '<div class="col-xs-12 html-body padding00" id="htmlBody' + val + '"></div></div>');
	$('#htmlBody' + val).append('<div class="col-xs-8 col-xs-offset-2 margin-top5 margin-bottom5 border-css form-body"'
						+ ' id="logInFormDiv' + val + '"><div id="loginHeading" class="col-xs-12 padding00 text-center">'
						+ '<span class="ct-fonts" style="color: teal;">Sign In</span></div>'
					 	+ '<div class="col-xs-12 padding00"> <input type="text" id="userName' + val +'"'
						+ 'spellcheck="false" class="col-xs-12 signin-form" placeholder="Enter your email" maxlength="15" disabled>'
						+ '</div><div class="col-xs-12 padding00">'
						+ '<input type="password" id="passWord' + val + '" spellcheck="false" class="signin-form col-xs-12" disabled'
						+ ' placeholder="Enter your password"></div>'
						+ '<div class="margin-top5 margin-bottom5 pull-right">'
						+ '<a id="loginBtn' + val + '" class="btn btn-primary ct-fonts" disabled>Sign In</a></div>');
}

function threadsCreation() {
	$('.eclipse-shape').addClass('col-xs-2 opacity00 destroy box-shadow');
	$('.new-servlet-box').addClass('margin-left20 opacity00 box-shadow');
	for (var i = 1; i <= 5; i++) {
		$('#freePool').append('<div class="progress progress-bar-vertical bar-margin" id="pgBar' + i + '">'
						+ ' <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"></div></div>');
	}
}

function poolCreation() {
	var arr = ['Used Pool', 'Free Pool'];
	for (var i = 0; i <= 1; i++) {
		var t = arr[i].charAt(0).toLowerCase() + arr[i].substring(1, arr[i].length).split(" ").join("");
		$('#poolDiv').prepend('<div class="col-xs-3 col-xs-offset-1 padding00"><div id="' + t + 'Div"'
						+ ' class="col-xs-12 padding00 text-center instance-box border-css opacity00"><div id="' + t + '"'
						+ ' class="thread-pool col-xs-12 padding00 text-center"></div>'
						+ '<div class="pool-heading col-xs-12 padding00 text-center margin-top5 ct-fonts">' + arr[i] + '</div></div></div>');
	}
	threadsCreation();
}

function initIntroJS() {
	introjs= introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps: [ {
					element: '#headingSection',
					intro: ''
				}, {
					element: '#browser1',
					intro: '',
					tooltipClass: 'hide',
					animateStep: 'request1'
				}, {
					element: '#restartBtn',
					intro: 'Click to restart.',
					position: 'right'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
				case 'browser' + iVal:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'request' + iVal:
							var nmesArr = ['', 'admin', 'jack', 'user'];
							var passWrdArr = ['', '123', '456', '789'];
							zoomInEffect('#browser' + iVal, function() {
								introNextSteps('#mainDiv', '', 'request' + iVal);
								$('.introjs-tooltip').removeClass('hide');
								text = 'Please enter <span class="ct-code-b-yellow">' + nmesArr[iVal] + ' <br> ' + passWrdArr[iVal] + '</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#browser' + iVal + ' .signin-form').attr('disabled', false).effect('highlight', {color: 'yellow'}, 500);
									$('#userName' + iVal).focus();
									formValidation(nmesArr[iVal], passWrdArr[iVal]);
								});
							});
						break;
					}
				break;
				case 'mainDiv':
					$('#browser' + iVal + ' .signin-form, #loginBtn' + iVal).off().attr('disabled', true).css({'cursor' : 'not-allowed'});
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'request1':
							$('.servlet-container').removeClass('opacity00');
							zoomInEffect('#freePoolDiv', function() {
								lineRevealWithText('0%', '24%', '8%', '24%', 'arrow1', '#text1', false, function() {
									zoomInEffect('#usedPoolDiv', function() {
										movingBarFromThreadToUsed('#pgBar5', '24%', '24.7%', 'arrow2', function() {
											firstReqAnim();
										});
									});
								});
							});
						break;
						case 'request2':
							reqFromBrowser('57.5%', '#text3', '#pgBar4', function() {
								setTimeout(function() {
									iVal++;
									introNextSteps('#browser3', '', 'request3');
									introjs.nextStep();
								}, 800);
							});
						break;
						case 'request3':
							reqFromBrowser('84.5%', '#text5', '#pgBar3', function() {
								movingReqResToInvoke(2, '57.5%', '54%', 'arrow22', false, '72%', '56%', '47%', 'arrow23');
								movingReqResToInvoke(3, '84.5%', '61%', 'arrow32', false, '78%', '82.5%', '47%', 'arrow33', function() {
									text = 'Now <span class="ct-code-b-yellow">service</span> method gives a <span class="ct-code-b-yellow">response'
											+ '</span> to the browser.';
									popoverAppendNDestroy('#model12', 'bottom', text, function() {
										multiReqAnim();
									});
								});
							});
						break;
					}
				break;
				case 'restartBtn':
					$('#restartBtn').removeClass('opacity00');
					$('.introjs-tooltip').css({'min-width' : '120px'});
					$('#restartBtn').click(function() {
						location.reload();
						$('input').val('');
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <span class="ct-code-b-yellow">multithreading</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
	});
}

function introNextSteps(stepName, position, animatedStep) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element: stepName,
			intro: '',
			tooltipClass: 'hide',
			position: position,
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({'element' : stepName});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(this).removeClass('animated zoomIn');
		callBackFunction();
	})
}

function zoomEffectWithPopover(id1, id2, text, callBackFunction) {
	zoomInEffect(id1, function() {
		popoverAppendNDestroy(id2, 'bottom', text, function() {
			callBackFunction();
		});
	});
}
function validationAfterNextStep(val1, val2) {
	$('.err-msg').remove();
	var lVal;
	if ($('#userName' + iVal).val() == val1 && $('#passWord' + iVal).val() == val2) {
		$('#browser' + iVal + ' .signin-form, #loginBtn' + iVal).off().attr('disabled', true).css({'cursor' : 'not-allowed'});
		introjs.nextStep();
	} else {
		if ($('#userName' + iVal).val() != val1) {
			lVal = '<span class="ct-code-b-yellow">' + val1 + '</span>';
			$('#userName' + iVal).focus();
		} else if ($('#userName' + iVal).val() == val1 && $('#passWord' + iVal).val() != val2) {
			lVal = '<span class="ct-code-b-yellow">' + val2 + '</span>';
			$('#passWord' + iVal).focus();
		}
		$('.introjs-tooltiptext').append('<div class="err-msg">Please enter ' + lVal + '</div>');
	}
} 

function formValidation(val1, val2) {
	$('#loginBtn' + iVal).attr('disabled', false).click(function() {
		validationAfterNextStep(val1, val2);
	});
	$('.signin-form').on('keydown', function(e) {
		$('.err-msg').remove();
		if ($.inArray(e.keyCode, [8, 27, 37, 39, 46]) !== -1) {
			return;
		}
	});
	$('.signin-form').on('keyup', function(e) {
		if ($('#userName' + iVal).val() == val1 && $('#passWord' + iVal).val() == val2) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
		if (e.keyCode == 13) {
			validationAfterNextStep(val1, val2);
		}
	});
}

function svgLineAppend(svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('id', svgLineId);
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.style.markerEnd = 'url("#myMarker")';
	line.setAttribute('class', 'svg-line');
	$('#svgDiv').append(line);
}

function lineReveal(x1, y1, x2, y2, lineId, flag, callBackFunction) {
	svgLineAppend(lineId, x1, y1, x1, y1);
	if (flag) {
		$('#' + lineId).css({'stroke-dasharray' : '9,5'});
	}
	TweenMax.to($('#' + lineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		callBackFunction();
	}});
}

function lineRevealWithText(x1, y1, x2, y2, lineId, svgText, flag, callBackFunction) {
	lineReveal(x1, y1, x2, y2, lineId, flag, function() {
		$(svgText).fadeTo(1000, 1, function() {
			callBackFunction();
		});
	});
}

function lineWithoutMarker(x1, y1, x2, y2, lineId, flag, callBackFunction) {
	lineReveal(x1, y1, x2, y2, lineId, flag, function() {
		$('#' + lineId).css({'marker-end' : ''});
		callBackFunction();
	});
}

function lineWithZoomEffect(x1, y1, x2, y2, lineId, flag, id, text, position, btnFlag, callBackFunction) {
	lineReveal(x1, y1, x2, y2, lineId, flag, function() {
		 zoomInEffect(id, function() {
			if (btnFlag) {
				 popoverAppendNDestroy(id, position, text, function() {
					callBackFunction();
				});
			} else {
				callBackFunction();
			}
		 });
	});
}

function ThreadPoolToUsedPool(id, callBackFunction) {
	$("#usedPool").append('<div class="progress progress-bar-vertical runningPool bar-margin"><div role="progressbar"'
						+ ' class="progress-bar progress-bar-success progress-bar-striped active"></div></div>');
	var l = $(id).offset();
	$(".runningPool").eq(0).offset({"top" : l.top, "left" : l.left});
	$(id).addClass("opacity00").removeClass('bar-margin');
	TweenMax.to($(".runningPool").eq(0), 1, {top : 0, left : 0, onComplete:function() {
		$(".runningPool > div").addClass("progress-bar-danger");
		TweenMax.to(id, 1, {"width" : "0%", onComplete:function() {
			$(id).remove();
			reArrangIds();
			callBackFunction();
		}});
	}});
}

function usedPoolToThreadPool(val, callBackFunction) {
	for (var i = 0; i < val; i++) {
		$("#freePool").prepend('<div class="progress progress-bar-vertical bar-margin pool-free" id="bar' + i + '"><div role="progressbar"'
                    		+ ' class="progress-bar progress-bar-danger progress-bar-striped active"></div></div>');
		var l = $(".runningPool").eq((val - 1) - i).addClass("opacity00").offset();
		$("#bar" + i).offset({top : l.top, left : l.left});
	}
	TweenMax.to($(".pool-free"), 1, {top : 0, left : 0, onComplete:function() {
		$("#usedPool .opacity00").remove();
		$('.progress-bar-danger').addClass('progress-bar-success').removeClass('progress-bar-danger');
		iVal++;
		reArrangIds();
		callBackFunction();
	}});
}

function reArrangIds() {
	$.each($('#freePool .progress'), function(idx) {
		$(this).attr('id', 'pgBar' + (idx + 1));
	});
}

function movingReqRes(id) {
	var l = $('#singleThreadModelBox').offset();
	$(id).offset({"left": l.left});
	TweenMax.to(id, 1, {opacity: 1, left: 0, onComplete: function() {}});
}

function TweenMaxEffect(id1, id2, callBackFunction) {
	var l1 = $(id1).offset();
	var l2 = $(id2).offset();
	TweenMax.to(id2, 1, {opacity: 1, top: l1.top - l2.top, onComplete: function() {
		$(id2).css({'top' : '0'});
		callBackFunction();
	}});
}

function popover(selector, position, text, callBackFunction) {
	$('.popover').remove();
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover"></div>'
	}).popover('show');
	if (position == 'right') {
		$('.popover .arrow').css({'top' : '25%'});
	}
	typing('#popover', text, function() {
		$('#popover').append('<div><a class="introjs-button user-btn pull-right">Next &#8594;</a></div>');
		$('.user-btn').click(function() {
			$(this).remove();
			callBackFunction();
		});
	});
}

function popoverAppendNDestroy(id, position, text, callBackFunction) {
	popover(id, position, text, function() {
		$(id).popover('destroy');
		callBackFunction();
	});
}

function movingBarFromThreadToUsed(id, y1, x2, lineId, callBackFunction) {
	text = 'Now <span class="ct-code-b-yellow">thread</span> moves from <span class="ct-code-b-yellow">free pool</span> to'
			+ ' <span class="ct-code-b-yellow">used pool</span>.';
	popoverAppendNDestroy('#freePoolDiv', 'bottom', text, function() {
		ThreadPoolToUsedPool(id, function() {
			movingReqResToInvoke(iVal, y1, x2, lineId, true, '', '', '', '', function() {
				callBackFunction();
			});
		});
	});
}

function movingReqResToInvoke(val, y1, x2, lineId1, flag, x11, y11, y12, lineId2, callBackFunction) {
	movingReqRes('#reqEcpBox' + val);
	lineReveal('8.8%', y1, x2, y1, lineId1, false, function() {
		if (flag) {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
		} else {
			lineReveal(x11, y11, x11, y12, lineId2, false, function() {
				if (typeof callBackFunction === 'function') {
					callBackFunction();
				}
			});
		}
	});
}

function responseToBrowser(x1, y1, x2, y2, lineId1, x11, y11, x12, y12, lineId2, y21, lineId3, svgText, val, callBackFunction) {
	lineWithoutMarker(x1, y1, x2, y2, lineId1, true, function() {
		lineReveal(x11, y11, x12, y12, lineId2, true, function() {
			lineRevealWithText('8%', y21, '0%', y21, lineId3, svgText, true, function() {
				if (typeof callBackFunction === 'function') {
					callBackFunction();
				}
			});
		});
	});
}

function loadingUrl(val, callBackFunction) {
	$('#browserHeading' + val).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
	setTimeout(function() {
		$('#browserHeading' + val).text('').append('<img src="/secure/lang/servlets/images/ct-logo.png" class="logo"></img> CodeTantra')
		$('#inputId' + val).val('https://...codetantra.com/secure/home.jsp');
		$('#htmlBody' + val).text('').append('<div class="col-xs-12 padding00 scrollbar-css opacity00" id="imgDiv' + val + '">'
								+ '<img src="/secure/lang/servlets/images/cdt.png"></img></div>');
		zoomInEffect('#imgDiv' + val, function() {
			setTimeout(function() {
				if (typeof callBackFunction === 'function') {
					callBackFunction();
				}
			});
		}, 800);
	}, 1000);
}

function reqFromBrowser(y1, svgText, id, callBackFunction) {
	lineRevealWithText('0%', y1, '8%', y1, 'arrow' + iVal + '1', svgText, false, function() {
		text = 'Now thread goes to the used pool from free pool.';
		popoverAppendNDestroy('#freePoolDiv', 'bottom', text, function() {
			ThreadPoolToUsedPool(id, function() {
				callBackFunction();
			});
		});
	});
}

function firstReqAnim() {
	text = 'This is the <span class="ct-code-b-yellow">servlet instance</span> method.';
	lineWithZoomEffect('39.8%', '26.7%', '39.8%', '37.3%', 'arrow3', false, '#model10', text, 'bottom', true, function() {
		text = 'This is the <span class="ct-code-b-yellow">init (ServletConfig)</span> method.';
		lineWithZoomEffect('45.8%', '42.5%', '48.5%', '42.5%', 'arrow4', false, '#model11', text, 'bottom', true, function() {
			$('.configColor').effect('highlight', {color: 'blue'}, 800, function() {
				var l1 = $('#model11').offset();
				var l2 = $('#servletConfig').offset();
				TweenMax.to('#servletConfig', 1, {opacity: 1, top: l1.top - l2.top, onComplete: function() {
					$('#servletConfig').css({'top' : '0'});
				//TweenMaxEffect('#model11', '#servletConfig', function() {
					lineReveal('55%', '34.2%', '55%', '37.5%', 'arrow5', false,  function() {
						text = 'By using web container we can create a <span class="ct-code-b-yellow">ServletConfig</span> method.';
						popoverAppendNDestroy('#servletConfig', 'right', text, function() {
							text = 'This is the <span class="ct-code-b-yellow">service</span> method.';
							lineWithZoomEffect('64.8%', '42.5%', '67.3%', '42.5%', 'arrow6', false, '#model12', text, 'bottom', true, function() {
								$('#resColor').effect('highlight', {color: 'blue'}, 500, function() {
									movingResponse1();
									lineWithoutMarker('69.8%', '47%', '69.8%', '51.5%', 'arrow7', true, function() {
										responseToBrowser('69.8%', '51.5%', '17.4%', '51.5%', 'arrow8', '17.4%', '51.5%', '17.4%', '34.5%', 
														'arrow9', '31%', 'arrow10', '#text2', iVal, function() {
											loadingUrl(iVal, function() {
												text = 'Response came to the browser so pool become free.';
												popoverAppendNDestroy('#usedPool', 'right', text, function() {
													usedPoolToThreadPool(1, function() {
														introNextSteps('#browser2', '', 'request2');
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
				}});
			});
		});
	});
}


function multiReqAnim() {
	movingResponses(2);
	responseToBrowser('74.8%', '46.8%', '74.8%', '62.7%', 'arrow24', '74.8%', '62.7%', '25.4%', '62.7%', 'arrow25', '62.7%', 'arrow26', '#text4', 2);
	movingResponses(3);
	responseToBrowser('81.8%', '46.8%', '81.8%', '91.5%', 'arrow34', '81.8%', '91.5%', '25.4%', '91.5%', 'arrow35', '91.5%', 'arrow36',
				'#text6', 3, function() {
		loadingUrl(2);
		loadingUrl(3, function() {
			text = 'Response came to the browser so pool become free.';
			popoverAppendNDestroy('#usedPool', 'right', text, function() {
				usedPoolToThreadPool(2, function() {
					text = 'After some time <span class="ct-code-b-yellow">destroy</span> <br> method called.';
					zoomEffectWithPopover('#clockDiv', '#clockFa', text, function() {
						$('#clockFa').addClass('fa-spin');
						setTimeout(function() {
							$('#clockFa').removeClass('fa-spin');
							zoomInEffect('#model13', function() {
								$('text, line').hide();
								TweenMax.to('.destroy', 1, {opacity: 0});
								TweenMax.to('.container', 1, {opacity: 0.3})
								text = '<span class="ct-code-b-yellow">Destroy</span> method will destroy.';
								popoverAppendNDestroy('#model13', 'bottom', text, function() {
									introjs.nextStep();
								});
							});
						}, 2500);
					});
				});
			});
		});
	});
}

function movingResponse1() {
	var l = $('#model12').offset();
	var l1 = $('#reqEcpBox2').offset();
	$('#response1').offset({'top': l.top, 'left': l.left - $("#model12").outerHeight()});
	TweenMax.to('#response1', 1, {opacity: 1, top: (l1.top - l.top) + 10, left: l1.left / 2.3, onComplete: function () {
		TweenMax.to('#response1', 1, {top: (l1.top - l.top) + 10, left: 0, onComplete: function () {
			TweenMax.to('#response1', 1, {top: 0, left: 0, onComplete: function () {}});
		}});                             
	}});
}

function movingResponses(val) {
	var l = $('#model12').offset() 
	var l1 = $('#reqEcpBox' + val).offset();
	var l2, t;
	if (val == 2) {
		l2 = l.left;
		t = 2.1 
	} else {
		var h = $("#model12").outerHeight();
		l2 = l.left + h;
		t = 1.9
	}
	$('#response' + val).offset({'top': l.top, 'left': l2});
	TweenMax.to('#response' + val, 1, {opacity: 1, top: 0, left: l1.left / t, onComplete: function () {
		TweenMax.to('#response' + val, 1, {top: 0, left: 0, onComplete: function () {}});                             
	}});
}

