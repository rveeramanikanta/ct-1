var count = 1;

function listenersReadyFunction() {
	poolServlets();
	$('#listenerObj, #httpSession').addClass('col-xs-6 col-xs-offset-4 ct-fonts text-center');
	creatingBrowser('1', '<img src="/secure/lang/servlets/images/google-g.jpg"></img> Gmail');
	creatingBrowser('2', '<img src="/secure/lang/servlets/images/google-g.jpg"></img> Gmail');
	$('#browser2').addClass('margin-top10');
	initIntroJS();
}

function poolServlets() {
	var servletNmes = ['Login', 'Cart', 'Logout', 'Contactus'];
	for (var i = 1; i <= 4; i++) {
		var t = servletNmes[i - 1].charAt(0).toLowerCase() + servletNmes[i - 1].substring(1, servletNmes[i - 1].length);  
		$('#poolDiv').append('<div class="col-xs-12 padding00 margin-top10 margin-bottom10"><div style="background-color: wheat;" '
						+ ' id="' + t +'Servlet" class="col-xs-8 col-xs-offset-2 line-hi8-css borderr-css ct-fonts padding00 box-shadow text-center">'
						+ servletNmes[i - 1] + ' servlet</div></div>');
	}
	tableAppend();
}

function tableAppend() {
	$('#tableDiv').append('<table id="tableId" style="width:100%"><tr style="color: darkslategray;"><th>Session Id</th><th>Created Time</th>' 
						+ '<th>Expired Time</th></tr></table>');
	for (var i = 1; i <= 2; i++) {
		$('#tableId').append('<tr id="tr' + i + '"></tr>');
		for (var j = 1; j <= 3; j++) {
			$('#tr' + i).append('<td id="td' + i + j + '"></td>');
		}
	}
	$('#td11').append('124fhrgrw4c').addClass('opacity00');
	$('#td21').append('9df3vgw0g2').addClass('opacity00');
}

function creatingBrowser(val, titleId) {
	$("#browserId").append('<div class="col-xs-12 padding00 container opacity00" id="browser' + val + '" style="border: 1px solid grey;">'
						+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding00"'
						+ ' id="browserHeading' + val + '">' + titleId + '</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
						+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
						+ '<div id="browser" class="col-xs-12 padding00 browser"><div class="col-xs-2 padding00 text-center">'
						+ '<span id="arrowCircle" class="col-xs-4 padding00"><i class="fa fa-arrow-left arrow"></i></span>'
						+ '<span class="col-xs-4 padding00"><i class="fa fa-arrow-right arrow"></i></span>'
						+ '<span class="col-xs-4 padding00"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
						+ '<div class="col-xs-8 padding00 text-center url"><input type="text" maxlength="100" '
						+ 'class="usr-text padding00" id="inputId' + val + '" disabled>'
						+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
						+ '<div class="col-xs-2 padding00 fa-display text-center">'
						+ '<span class="col-xs-6 padding00"><i class="fa fa-home fa-1x"></i></span>'
						+ '<span class="col-xs-6 padding00"><i class="fa fa-bars fa-1x"></i></span></div></div>'
						+ '<div class="col-xs-12 html-body padding00" id="htmlBody' + val + '"></div></div>');
}

function logInForm() {	//login form
	$('#htmlBody' + count).text('').append('<div class="col-xs-8 col-xs-offset-2 margin-top5 margin-bottom5 border-css form-body opacity00"'
						+ ' id="logInFormDiv' + count + '"><div id="loginHeading" class="col-xs-12 padding00 text-center">'
						+ '<span class="ct-fonts" style="color: teal;">Sign In</span></div>'
					 	+ '<div class="col-xs-12 padding00 margin-top5"> <input type="text" id="userName' + count +'"'
						+ 'spellcheck="false" class="col-xs-12 signin-form" placeholder="Enter your email" disabled>'
						+ '</div><div class="col-xs-12 padding00 margin-top10">'
						+ '<input type="password" id="passWord' + count + '" spellcheck="false" class="signin-form col-xs-12" disabled'
						+ ' placeholder="Enter your password"></div>'
						+ '<div style="float: right;" class="margin-top10 margin-bottom10">'
						+ '<a id="loginBtn' + count + '" class="btn btn-primary ct-fonts" disabled>Sign In</a></div>');
}

function mailPage() {	// after login mail page
	$('#htmlBody' + count).text('').append('<div class="col-xs-12 padding00 margin-bottom5 opacity00" id="mailPageDiv' + count + '">'
						+ '<div class="col-xs-12 padding00 margin-top5">'
						+ '<div class="col-xs-3 padding00 text-center"><img src="/secure/lang/servlets/images/google.png" style="width: 60%">'
						+ '</img></div><div class="col-xs-3 border-css padding2"><div class="col-xs-12 padding00">'
						+ '<input type="text" class="col-xs-10 padding00" style="border: medium none;">'
						+ '<i style="background: 4387fd" class="fa fa-1x fa-search"></i></div></div>'
						+ '<div class="col-xs-offset-1 col-xs-1 padding00 text-center"><i class="fa fa-th fa-1x"></i></div>'
						+ '<div class="col-xs-1 padding00 text-center"><i class="fa fa-bell fa-1x"></i></div><div class="col-xs-3 padding00 text-center">'
						+ '<span class="btn btn-sm btn-danger logout" id="logOut'+ count + '">Logout <i class="fa fa-sign-out"></i></span></div>'
						+ '</div><div class="col-xs-12 margin-top5 padding2"><div class="col-xs-4" id="mailBoxes' + count + '">'
						+ '<div class="col-xs-12 text-center padding00"><div class="col-xs-10 padding00 compose-box">Compose</div></div></div>'
						+ '<div class="col-xs-8 border-css padding00" style="background: #ddd;"><div class="col-xs-12 padding00" id="mailBody'
						+ count + '"></div></div></div></div>');
	mailProperties();
}

function mailProperties() {
	var arr1 = ['gmail', 'home', 'inbox', 'drafts'];
	var arr2 = ['Inbox (4)', 'Starred', 'Sent Mail (3)', 'Drafts'];
	for (var i = 0; i < 4; i++) {
		$('#mailBoxes' + count).append('<div class="col-xs-12 padding00">' + arr2[i] + '</div>');
		$('#mailBody' + count).append('<div class="col-xs-12 padding00 border-bottom"><div class="col-xs-5 padding2">'
						+ '<input type="checkbox" class="margin0" disabled> <i class="fa fa-1x fa-star-o"></i>&emsp;gmail</div>'
						+ '<div class="col-xs-7 padding2">Welcome to ' + arr1[i] + '</div></div>');
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
		steps : [{
				element: '#headingSection',
				intro: '',
				position: 'right'
			}, {
				element: '#browser' + count,
				intro: '',
				tooltipClass: 'hide',
				position: 'right',
				animateStep: 'loginPage' + count
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case 'browser' + count:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'loginPage' + count:
							$('#inputId' + count).val('https://accounts..../login.jsp/');
							logInForm();
							$('#logInFormDiv' + count).removeClass('opacity00');
							zoomInEffect('#browser' + count, function() {
								$('.introjs-tooltip').removeClass('hide');
								var val1, val2, userVal;
								if (count == 1) {
									val1 = 'admin';
									val2 = 'pwd';
									userVal = 'first'
								} else {
									val1 = 'servlets';
									val2 = '123';
									userVal = 'second';
								}
								var text = 'Now request from the <span class="ct-code-b-yellow">' + userVal + '</span> user. <br><br>Enter user name as'
											+ ' <span class="ct-code-b-yellow">' + val1 + '</span> and password <span class="ct-code-b-yellow">' 
											+ val2 + '</span>.';
								typing('.introjs-tooltiptext', text, function() {
									introNextSteps('#mainDiv', 'request' + count);
									$('#logInFormDiv' + count + ' .signin-form').attr('disabled', false).effect('highlight', {color: 'blue'}, 600);
									$('#userName' + count).focus();
									logInValidation(val1, val2);
								});
							});
						break;
						case 'response' + count:
							loadingUrl('mail-m.jpg', ' Inbox - admin', 'https://mail.../mail/u/0/#inbox', function() {
								mailPage();
								zoomInEffect('#mailPageDiv' + count, function() {
									$('.container-div').addClass('zIndex');
									if (count == 1) {
										objCreation(function() {
											$('.introjs-tooltip').removeClass('hide');
											text = 'Click on <span class="ct-code-b-yellow">logout</span> button to send another'
													+ ' <span class="ct-code-b-yellow">request</span>.';
											typing('.introjs-tooltiptext', text, function() {
												$('#logOut1').click(function() {
													$('#logOut1').off();
													introNextSteps('#mainDiv', 'request12');
													introjs.nextStep();
												});
											});
										});
									} else {
										text = 'From <span clas="ct-code-b-yellow">http session</span>, <span class="ct-code-b-yellow">session'
												+ ' listener object</span> is created.';
										listenerObjCreation(text, function() {
											text = 'Table stores the session created time.'
											tableAnim(text, function() {
												setTimeout(function() {
													introNextSteps('#mainDiv', 'request21')
													$('.container-div').removeClass('zIndex');
													introjs.nextStep();
												}, 800);
											});
										});
									}
								});
							});
						break;
						case 'response12':
							changingUrlMailToGoogle(function() {
								$('.container-div').addClass('zIndex');
								text = 'From http session, session listener object is created.';
								listenerObjCreation(text, function() {
									text = 'Admin logout. So session expired and time stored in expired time.';
									popover('#tableDiv', 'bottom', text, true, function() {
										sessionExpired(function() {
											$('#tableDiv').popover('destroy');
											$('.container-div').removeClass('zIndex');
											$('line').not('#line4').css({'display' : 'none'});
											$('text').not('#text5, #text6').css({'opacity' : '0'});
											count++;
											customIntroNxtStep('#browser' + count, 'loginPage' + count);
 										});
									});
								});
							});
						break;
					}
				break;
				case 'mainDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'request1':
							$('.signin-form, #loginBtn1').off().css({'cursor': 'not-allowed'}).attr('disabled', true);
							zoomInEffect('.container-div', function() {
								zoomInEffect('.instance-box', function() {
									text = 'Servlet instance pool with some servlet files.';
									popover('.instance-box', 'right', text, true, function() {
										text = 'Now request comes to the servlet container from browser.';
										typing('#popover', text, function() {
											appendPopoverBtn(function() {
												$('.instance-box').popover('destroy');
												lineRevealWithText('#line1', '#text1', function() {
													sessionAnim(function() {
														lineRevealWithText('#line2', '#text2', function() {
															customIntroNxtStep('#browser' + count, 'response' + count);
														});
													});
												});
											});
										});
									});
								});
							});
						break;
						case 'request12':
							lineRevealWithText('#line5', '#text3', function() {
								text = 'Http session is already created for this user. So, now directly response goes to the browser.';
								popoverAppendNDestroy('#logoutServlet', 'right', text, function() {
									lineRevealWithText('#line6', '#text4', function() {
										customIntroNxtStep('#browser' + count, 'response' + count + '2');
									});
								});
							});
						break;
						case 'request2':
							$('.signin-form, #loginBtn2').off().css({'cursor': 'not-allowed'}).attr('disabled', true);
							text = 'Now request goes to the servlet container.';
							popoverAppendNDestroy('#browser2', 'bottom', text, function() {
								lineRevealWithoutArrow(7, '#text5', function() {
									sessionAnim(function() {
										lineRevealWithoutArrow(10, '#text6', function() {
											customIntroNxtStep('#browser2', 'response2', 'right');
										});
									});
								});
							});
						break;
						case 'request21':
							sessionDestroyAnim(function() {
								introNextSteps('#restartBtn', '', 'right');
								introjs.nextStep();
							});
						break;
					}
				break;
				case 'restartBtn':
					$('#restartBtn').removeClass('opacity00');
					$('.introjs-tooltip').css({'min-width' : '120px'}).removeClass('hide');
					text = 'Click to restart.';
					typing('.introjs-tooltiptext', text, function() {
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
	text = 'Here we will learn about <span class="ct-code-b-yellow">Listeners</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function listenerObjCreation(text, callBackFunction) {
	popoverAppendNDestroy('#listenerObj', 'bottom', text, function() {		
		lineReveal('#line4', false, function() {
			callBackFunction();
		});
	});
}
function objCreation(callBackFunction) {
	zoomInEffect('#listenerObj', function() {
		text = 'Session listener object is created from http session.';
		listenerObjCreation(text, function() {
			zoomInEffect('#tableParentDiv', function() {
				text = 'A table is created with sessionId, created time and expired time.<br> Now the create time is stored in created time with'
						+ ' sessionId.';
				tableAnim(text, function() {
					$('.container-div').removeClass('zIndex');
					callBackFunction();
				});
			});
		});
	});
}

function tableAnim(text, callBackFunction) {
	popover('#tableDiv', 'bottom', text, true, function() {
		zoomInEffect('#td' + count + '1', function() {
			systemTime('2', function() {
				appendPopoverBtn(function() {
					$('#tableDiv').popover('destroy');
					callBackFunction();
				});
			});
		});
	});
}

function systemTime(val, callBackFunction) {
	$('#td' + count + val).effect('highlight', {color: 'blue'}, 500, function() {
		var currentTime = new Date().toLocaleTimeString();
		$('#td' + count + val).text(currentTime).addClass('opacity00');
		zoomInEffect('#td' + count + val, function() {
			callBackFunction();
		});
	});
}

function sessionAnim(callBackFunction) {
	text = 'Now request goes to the http session.';
	popoverAppendNDestroy('#loginServlet', 'right', text, function() {
		lineReveal('#line3', true, function() {
			zoomInEffect('#httpSession', function() {
				text = 'Now response goes to the browser.';
				popoverAppendNDestroy('#httpSession', 'bottom', text, function() {
					callBackFunction();
				});
			});
		});
	});
}

function sessionDestroyAnim(callBackFunction) {
	text = 'If servlet container does not get any request, session will expires.';
	popoverAppendNDestroy('.container-div', 'bottom', text, function() {
		setTimeout(function() {
			zoomInEffect('#clockDiv', function() {
				$('#clockDiv').addClass('fa-spin');
				setTimeout(function() {
					//text = 'Session timedout so, user automaticaly loggedout';
					//popoverAppendNDestroy('#browser2', 'bottom', text, function() {
						$('#clockDiv').removeClass('fa-spin').addClass('opacity00');
						$('#mailPageDiv2').effect('highlight', {color: 'blue'}, 800, function() {
							changingUrlMailToGoogle(function() {
								$('#httpSession').addClass('blinking');
								setTimeout(function() {
									sessionExpired(function() {
										text = 'Now expired time is stored in table.';
										popoverAppendNDestroy('#tableDiv', 'bottom', text, function() {
											introNextSteps('#restartBtn', '', 'right');
											$('.introjs-nextbutton').show();
											callBackFunction();
										});
									});
								}, 500);
							});
						});
					//});
				}, 2500);
			});
		}, 1000);
	});
}

function sessionExpired(callBackFunction) {
	TweenMax.to('#httpSession', 1, {opacity: 0, onComplete: function() {
		$('#httpSession').addClass('opacity00').css({opacity: ''});
		$('#line3').css({'display' : 'none'});
		systemTime('3', function() {
			callBackFunction();
		});
	}});
}
function changingUrlMailToGoogle(callBackFunction) {
	loadingUrl('google-g.jpg', ' Gmail', 'https://accounts..../login.jsp/', function() {
		logInForm();
		zoomInEffect('#logInFormDiv' + count, function() {
			callBackFunction();	
		});
	});
}

function loadingUrl(imgUrl, text, url, callBackFunction) {
	$('#browserHeading' + count).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
	setTimeout(function() {
		$('#browserHeading' + count).text('').append('<img src="/secure/lang/servlets/images/' + imgUrl + '"></img>' + text + '')
		$('#inputId' + count).val(url);
		callBackFunction();
	}, 800);
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

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function popover(selector, position, text, flag, callBackFunction) {
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
		if (flag) {
			appendPopoverBtn(function() {
				callBackFunction();
			});
		} else {
			callBackFunction();
		}
	});
}

function appendPopoverBtn(callBackFunction) {
	$('#popover').append('<div><a class="introjs-button user-btn pull-right">Next &#8594;</a></div>');
	$('.user-btn').click(function() {
		$(this).remove();
		callBackFunction();
	});
}

function popoverAppendNDestroy(id, position, text, callBackFunction) {
	popover(id, position, text, true, function() {
		$(id).popover('destroy');
		callBackFunction();
	});
}

function lineReveal(lineId, flag, callBackFunction) {
	var x2 = $(lineId).attr("x2");
	var y2 = $(lineId).attr("y2");
	$(lineId).attr("x2", $(lineId).attr("x1"));
	$(lineId).attr("y2", $(lineId).attr("y1"));
	$(lineId).show();
	if (flag) {
		TweenMax.to(lineId, 1, {attr:{x2 : x2, y1 : y2}, onComplete:function() {
			callBackFunction();
		}});
	} else {
		TweenMax.to(lineId, 1, {attr:{x2 : x2, y2 : y2}, onComplete:function() {
			callBackFunction();
		}});
	}
}

function lineRevealWithoutArrow(val, svgText, callBackFunction) {
	lineWithoutMarker(val, true, function() {
		lineWithoutMarker(val + 1, false, function() {
			lineRevealWithText('#line' + (val + 2), svgText, function() {
				callBackFunction();
			});
		});
	});
}

function lineWithoutMarker(val, flag, callBackFunction) {
	lineReveal('#line' + val, flag, function() {
		$('#line' + val).css({'marker-end' : ''});
		callBackFunction();
	});
}

function lineRevealWithText(lineId, svgText, callBackFunction) {
	lineReveal(lineId, true, function() {
		$(svgText).fadeTo(1000, 1, function() {
			callBackFunction();
		});
	});
}

function logInBtnClick(val1, val2) {
	$('.err-msg').remove();
	$('#loginBtn' + count).click(function() {
		formCond(val1, val2);
	});
}

function formCond(val1, val2) {
	if ($('#userName' + count).val() == val1 && $('#passWord' + count).val() == val2) {
		$('.signin-form, #loginBtn' + count).off().css({'cursor': 'not-allowed'}).attr('disabled', true);
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
	if ($('#userName' + count).val() != val1 && $('#passWord' + count).val() != val2) {
		$('#userName' + count).focus();
		value = t1 + ' and ' + t2;
	//} else if ($('#userName' + count).val() != val1 && $('#passWord' + count).val() == val2 || $('#userName' + count).val() != val1) {
	} else if ($('#userName' + count).val() != val1) {
		$('#userName' + count).focus();
		value = t1;
	} else if ($('#userName' + count).val() == val1 && $('#passWord' + count).val() != val2) {
		$('#passWord' + count).focus();
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
		if ($('#userName' + count).val() == val1 && $('#passWord' + count).val() == val2) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
		if (e.keyCode == 13) {
			formCond(val1, val2);
		}
	});
}
