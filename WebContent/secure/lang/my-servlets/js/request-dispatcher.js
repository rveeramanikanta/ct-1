var count = 1;
function requestDispatcherReady() {
	$('line').hide();
	$('.servlets').addClass('borderr-css ct-fonts padding00 box-shadow text-center opacity00');
	creatingBrowser('<img src="/secure/lang/servlets/images/ct-logo.png" class="logo"> CodeTantra');
	$('#inputId').val('https://learn.codetantra.com/login.jsp');
	logInForm();
	initIntroJS();
}

function creatingBrowser(titleId) {
	$("#browserId").append('<div class="col-xs-12 padding00 container" id="browser" style="border: 1px solid grey;">'
							+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding00"'
							+ ' id="browserHeading">' + titleId + '</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
							+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
							+ '<div id="browser" class="col-xs-12 padding00 browser"><div class="col-xs-2 padding00 text-center">'
							+ '<span id="arrowCircle" class="col-xs-4 padding00"><i class="fa fa-arrow-left arrow"></i></span>'
							+ '<span class="col-xs-4 padding00"><i class="fa fa-arrow-right arrow"></i></span>'
							+ '<span class="col-xs-4 padding00"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
							+ '<div class="col-xs-8 padding00 text-center url"><input type="text" maxlength="100" '
							+ 'class="usr-text padding00" id="inputId" disabled>'
							+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
							+ '<div class="col-xs-2 padding00 fa-display text-center">'
							+ '<span class="col-xs-6 padding00"><i class="fa fa-home fa-1x"></i></span>'
							+ '<span class="col-xs-6 padding00"><i class="fa fa-bars fa-1x"></i></span></div></div>'
							+ '<div class="col-xs-12 html-body padding00" id="htmlBody"></div></div>');
}

function logInForm() {	//login form
	$('#htmlBody').text('').append('<div class="col-xs-8 col-xs-offset-2 margin-top20 margin-bottom10 border-css form-body box-shadow"'
						+ ' id="logInFormDiv"><div id="loginHeading" class="col-xs-12 padding00 text-center">'
						+ '<span class="ct-fonts" style="color: teal;">Sign In</span></div>'
					 	+ '<div class="col-xs-12 padding00 margin-top5"> <input type="text" id="userName"'
						+ 'spellcheck="false" maxlength="15" class="col-xs-12 signin-form" placeholder="Username" disabled>'
						+ '</div><div class="col-xs-12 padding00 margin-top10">'
						+ '<input type="password" maxlength="15" id="passWord" spellcheck="false" class="signin-form col-xs-12" disabled'
						+ ' placeholder="Password"></div><div class="col-xs-12 ct-red ct-fonts padding00 margin-top5 opacity00"'
						+ ' id="errorMessage" style="font-size: 11px;"></div>'
						+ '<div class="col-xs-12 text-right padding00 margin-top5 margin-bottom10">'
						+ '<a id="loginBtn" class="btn btn-primary ct-fonts">Sign In</a></div>');
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [ {
				element: '#headingSection',
				intro: ''
			}, {
				element: '#browserId',
				intro: '',
				animateStep: 'wrongUrl' + count,
				tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
				case 'browserId':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'wrongUrl' + count:
							zoomInEffect('#browserId', function() {
								$('.introjs-tooltip').removeClass('hide');
								formOpenText('servlets', '12345');
							});
						break;
						case 'errorMessage':
			 				count++;
							$('#errorMessage').text('Invalid Username or Password. Try again.');
							introjs.refresh();
							loadingUrl('ct-logo.png', 'Welcome to CT', 'https://..codetantra.com/login.jsp', function() { 
								$('#errorMessage').effect('highlight', {color: 'yellow'}, 1500);
								zoomInEffect('#errorMessage', function() {
									$('.introjs-tooltip').removeClass('hide');
									text = 'You entered wrong username or password that\'s why it\'s showing an <span class="ct-code-b-yellow">error'
											+ '</span>. This is <span class="ct-code-b-yellow">include()</span> method.';
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
										$('.user-btn').click(function() {
											$(this).remove();
											$('.signin-form').val('');
											$('#line1, #line2, #line4').css({'display' : 'none'});
											$('#text1, #text3').css({'opacity' : '0'});
											formOpenText('codetantra', '12345');
										});
									});
								});
							});
						break;
						case 'welcomeMessage':
							loadingUrl('ct-logo.png', ' CodeTantra', 'https://..codetantra.com//secure/home.jsp', function() {
								$('#htmlBody').text('').append('<div id="imgDiv" class="col-xs-12 padding00 opacity00">'
										+ '<img src="/secure/lang/servlets/images/cdt.png" style="width: 100%">');
								zoomInEffect('#imgDiv', function() {
									introjs.refresh();
									$('.introjs-tooltip').removeClass('hide');
									text = 'This is the <span class="ct-code-b-yellow">forward() method.';
									typing('.introjs-tooltiptext', text, function() {
										introNextSteps('#restartBtn', '', 'right');
										$('.introjs-nextbutton').show();
									});
								});
							});
						break;
					}
				break;
				case 'mainDiv':
					$('.signin-form, #loginBtn').off().css({'cursor' : 'not-allowed'}).attr('disabled', true);
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'request1':
							zoomInEffect('#servletDiv', function() {
								text = 'Requst goesto servlet container';
								popover('#mainDiv', 'bottom', text, function() {
									popoverBtnWithoutCall(function() {
										$('#mainDiv').popover('destroy');
										arrowWithText('#line1', true, '#text1', function() {
											zoomInEffect('#loginServlet', function() {
												line1Reveal();
											});
										});	
									});
								});
							});
						break;
						case 'request2':
							arrowWithText('#line1', true, '#text1', function() {
								line1Reveal();
							});
						break;
					}
				break
				case 'restartBtn':
					$('#restartBtn').removeClass('opacity00');
					$('.introjs-tooltip').css({'min-width' : '120px'});
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', 'Click to restart.', function() {
						$('#restartBtn').click(function() {
							$('input').val('');
							location.reload();
						});
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'The <span class="ct-code-b-yellow">RequestDispatcher</span> interface provides the facility of <span class="ct-code-b-yellow">dispatching'
			+ '</span> the <span class="ct-code-b-yellow">request to another resource</span> it may be html, servlet or jsp.<br> There are two'
			+ ' methods: <br><ol><li><span class="ct-code-b-yellow">include()</span></li><li><span class="ct-code-b-yellow">forward()</span>.</li></ol>';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function formOpenText(val1, val2) {
	text = 'Enter Username as <span class="ct-code-b-yellow">' + val1 + '</span> password <span class="ct-code-b-yellow">' + val2 +'</span>.';
	typing('.introjs-tooltiptext', text, function() {
		formFocus(val1, val2);
	});
}

function line1Reveal() {
	text = 'This is the <span class="ct-code-b-yellow">Login Servlet</span>.';
	popover('#loginServlet', 'bottom', text, function() {
		popoverBtnWithoutCall(function() {
			$('#loginServlet').popover('destroy');
			arrowReveal('#line2', false, function() {
				rdRequest();
			});
		});
	});
}

function formFocus(val1, val2) {
	logInValidation(val1, val2);
	introNextSteps('#mainDiv', 'request' + count);
	$('#loginBtn').attr('disabled', false).css({'cursor' : 'pointer'});
	$('.signin-form').attr('disabled', false).css({'cursor': 'auto'}).effect('highlight', {color: 'blue'}, 800);
	$('#userName').focus();
}

function rdRequest() {
	if (count == 1) {
		zoomInEffect('#rDServlet', function() {
			rdRequestAnim();
		});
	} else {
		rdRequestAnim();
	}
}

function rdRequestAnim() {
	text = 'This is <span class="ct-code-b-yellow">RequestDispatcher(RD)</span>.';
	popover('#rDServlet', 'bottom', text, function() {
		popoverBtnWithoutCall(function() {
			if (count == 1) {	//include()
				text1 = '<span class="ct-code-b-yellow">Include()</span> method includes the content of a resource (servlet, JSP page, or HTML file)'
						+ ' in the response.';
				text2 = 'Now <span class="ct-code-b-yellow">response</span> is sent back to the browser.';
				methodCalling(text1, '#errorServlet', '#line3', true, '#text2', text2, '#line4', '#text3', 'errorMessage');
			} else {	//forward()
				text1 = '<span class="ct-code-b-yellow">Forward()</span> method forwards a request from a servlet to another resource'
						+ ' (servlet, JSP file, or HTML file) on the server.';
				text2 = 'Now <span class="ct-code-b-yellow">response</span> goes to the browser.';
				methodCalling(text1, '#welcomeServlet', '#line5', false, '#text4', text2, '#line6', '#text5', 'welcomeMessage');
			}
		});
	});
}

function methodCalling(text1, id1, line1, flag, svgText1, text2, line2, svgText2, nextStep) {
	typing('#popover', text1, function() {
		popoverBtnWithoutCall(function() {
			$('#rDServlet').popover('destroy');
			arrowWithText(line1, flag, svgText1, function() {
				zoomInEffect(id1, function() {
					popover(id1, 'bottom', text2, function() {
						popoverBtnWithoutCall(function() {
							$(id1).popover('destroy');
							arrowWithText(line2, flag, svgText2, function() {
								customIntroNxtStep('#browserId', nextStep);
							});
						});
					});
				});
			});
		});
	})
}

function loadingUrl(imgUrl, text, url, callBackFunction) {
	$('#browserHeading').text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
	setTimeout(function() {
		$('#browserHeading').text('').append('<img src="/secure/lang/servlets/images/' + imgUrl + '" class="logo"></img>' + text + '')
		$('#inputId').val(url)
		callBackFunction();
	}, 800);
}

function arrowWithText(line, flag, svgText, callBackFunction) {
	$(svgText).fadeTo(1000, 1, function() {
		arrowReveal(line, flag, function() {
			callBackFunction();
		});
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function popoverBtnWithoutCall(callBackFunction) {
	 $('#popover').append('<div><a class="introjs-button user-btn pull-right">Next &#8594;</a></div>');
	 $('.user-btn').click(function() {
		 $(this).parent().remove();
		 callBackFunction();
	 });
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
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
	typing('#popover', text, function() {
		callBackFunction();
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function logInBtnClick(val1, val2) {
	$('.err-msg').remove();
	$('#loginBtn').click(function() {
		formCond(val1, val2);
	});
}

function formCond(val1, val2) {
	if ($('#userName').val() == val1 && $('#passWord').val() == val2) {
		$('#loginBtn').off();
		introjs.nextStep();
	} else {
		validation(val1, val2);
	}
}

function validation(val1, val2) {
	$('.err-msg').remove();
	var t1 = '<span class="ct-code-b-yellow">' + val1 + '</span>';
	var t2 = '<span class="ct-code-b-yellow">' + val2 + '</span>';
	var value;
	if ($('#userName').val() != val1 && $('#passWord').val() != val2) {
		value = t1 + ' and ' + t2;
	} else if ($('#userName').val() != val1 && $('#passWord').val() == val2 || $('#userName').val() != val1) {
		value = t1;
	} else if ($('#userName').val() == val1 && $('#passWord').val() != val2) {
		value = t2;
	}
	$('.introjs-tooltiptext').append('<span class="ct-red err-msg"><br>Please enter ' + value + '</span>');
}

function logInValidation(val1, val2) {
	logInBtnClick(val1, val2);
	$('.signin-form').on('keydown', function(e) {
		$('.err-msg').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val().length >= max) {
			e.preventDefault();
		}
	});
	$('.signin-form').on('keyup', function(e) {
		if ($('#userName').val() == val1 && $('#passWord').val() == val2) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
		if (e.keyCode == 13) {
			formCond(val1, val2);
		}
	});
}


function arrowReveal(lineId, flag, callBackFunction) {
	var x2 = $(lineId).attr("x2");
	var y2 = $(lineId).attr("y2");
	$(lineId).attr("x2", $(lineId).attr("x1"));
	$(lineId).attr("y2", $(lineId).attr("y1"));
	$(lineId).show();
	if (flag) {
		TweenMax.to(lineId, 1.5, {attr:{x2 : x2, y1 : y2}, onComplete:function() {
			callBackFunction();
		}});
	} else {
		TweenMax.to(lineId, 1.5, {attr:{x2 : x2, y2 : y2}, onComplete:function() {
			callBackFunction();
		}});
	}
}