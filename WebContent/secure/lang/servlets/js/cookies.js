var fileNmes = ['signIn', 'logIn', 'drafts'];
var iVal = count = 1;
function cookiesReadyFunction() {
	$('line').hide();
	creatingBrowser(1, 'NewTab');
	creatingBrowser(2, 'NewTab');
	classNmeFiles();
	initIntroJS();
}

function creatingBrowser(val, titleId) {
	$("#browserId1").append('<div class="col-xs-12 padding00 margin-top10 container border-css opacity00" id="browser' + val + '">'
							+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding00"'
							+ ' id="browserHeading' + val + '">' + titleId + '</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
							+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
							+ '<div id="browser" class="col-xs-12 padding00 browser"><div class="col-xs-2 padding00 text-center">'
							+ '<span id="arrowCircle" class="col-xs-4 padding00"><i class="fa fa-arrow-left arrow"></i></span>'
							+ '<span class="col-xs-4 padding00"><i class="fa fa-arrow-right arrow"></i></span>'
							+ '<span class="col-xs-4 padding00"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
							+ '<div class="col-xs-8 padding00 text-center url"><input type="text" maxlength="100" '
							+ 'class="usr-text padding00" id="inputId' + val + '" placeholder="Search or enter address" disabled>'
							+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
							+ '<div class="col-xs-2 padding00 fa-display text-center">'
							+ '<span class="col-xs-6 padding00"><i class="fa fa-home fa-1x"></i></span>'
							+ '<span class="col-xs-6 padding00"><i class="fa fa-bars fa-1x"></i></span></div></div>'
							+ '<div class="col-xs-12 html-body padding00" id="htmlBody' + val + '"></div></div>');
	$('#browser1').removeClass('margin-top10');
}

function classNmeFiles() {
	var clasNmes = ['col-xs-offset-7', 'col-xs-offset-4', 'col-xs-offset-1']
	for (var i = 0; i < fileNmes.length; i++) {
		$('#fileMainDiv').append('<div class="col-xs-12 padding00 opacity00" id="fileDiv' + (i + 1)+ '"><i class="fa fa-file-text-o fa-2x" id="file'
 							+ (i + 1) +'"></i><div>' + fileNmes[i] + '.class</div></div>');
		$('#objFileDiv').append('<div class="col-xs-3 ct-fonts servletinstance-box margin-left position-css opacity00 destroy" id="'
								+ fileNmes[i] + 'Obj">' + fileNmes[i] + '.obj</div>');
		$('#serviceMthdDiv').append('<div class="col-xs-12 padding00"><div class="ellipse ct-fonts  service-text-style position-css opacity00 destroy"'
		  							+ 'id="service' + (fileNmes.length - i) + '"><span>service</span></div>');
		$('#service' + (fileNmes.length - i)).addClass(clasNmes[i]);
	}
	$('#serviceMthdDiv').addClass('margin-top5');
	$('#service2, #service1').parent().addClass('margin-top20');
}

function logInForm() {	//login form
	$('#htmlBody' + count).text('').append('<div class="col-xs-8 col-xs-offset-2 margin-top10 margin-bottom5 border-css opacity00 form-body"'
						+ ' id="logInFormDiv"><div id="loginHeading" class="col-xs-12 padding00 text-center">'
						+ '<span class="ct-fonts" style="color: teal;">Login Form</span></div>'
					 	+ '<div class="col-xs-12 padding00 margin-top5"> <input type="text" id="userName' + count + '"'
						+ 'spellcheck="false" class="col-xs-12 signin-form" placeholder="Enter your email" disabled>'
						+ '</div><div class="col-xs-12 padding00 margin-top10">'
						+ '<input type="password" id="password' + count + '" spellcheck="false" class="signin-form col-xs-12" disabled'
						+ ' placeholder="Enter your password"></div>'
						+ '<div style="float: right;" class="margin-top10 margin-bottom10">'
						+ '<a id="loginBtn" class="btn btn-primary ct-fonts">Sign In</a></div>');
}

function mailPage() {	// after login mail page
	$('#htmlBody' + count).text('').append('<div class="col-xs-12 padding00 opacity00 margin-bottom5" id="mailPageDiv' + count + '">'
						+ '<div class="col-xs-12 padding00 margin-top10">'
						+ '<div class="col-xs-4 col-xs-offset-3 border-css"><div class="col-xs-12 padding00">'
						+ '<input type="text" class="col-xs-10 padding00" style="border: medium none;">'
						+ '<i style="background: 4387fd" class="fa fa-1x fa-search"></i></div></div>'
						+ '<div class="col-xs-offset-2 col-xs-1"><i class="fa fa-th fa-1x"></i></div>'
						+ '<div class="col-xs-1"><i class="fa fa-bell fa-1x"></i></div><div class="col-xs-1"><i class="fa fa-user fa-1x"></i></div>'
						+ '</div><div class="col-xs-12 margin-top5"><div class="col-xs-4" id="mailBoxes' + count + '">'
						+ '<div class="col-xs-12 text-center padding00"><div class="col-xs-10 padding00 compose-box">Compose</div></div></div>'
						+ '<div class="col-xs-8 border-css padding00" style="background: #ddd;"><div class="col-xs-12 padding00" id="mailBody' + count + '">'
						+ '</div></div></div></div>');
}
function mailProperties(val, i) {
	$('#mailBoxes' + count).append('<div class="col-xs-12 padding00" id="mailMenu' + i + '">' + val + '</div>');
}

function mailText(val) {
	$('#mailBody' + count).append('<div class="col-xs-12 padding00 border-bottom"><div class="col-xs-5 padding2">'
					+ '<input type="checkbox" class="margin0" disabled> <i class="fa fa-1x fa-star-o"></i>&emsp;gmail</div>'
					+ '<div class="col-xs-7 padding2">' + val + '</div></div>');
}//mail page end 

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
				element: '#browser1',
				intro: '',
				animateStep: 'urlGmailEnter',
				tooltipClass: 'hide'
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
						case 'urlGmailEnter':
							zoomInEffect('#browser' + count, function() {
								$('.introjs-tooltip').removeClass('hide');
								if (count == 1) {
									text = 'Let us take an example <span class="ct-code-b-yellow">gmail</span>.';
								} else {
									$('#browser1').css({'opacity' : '0.5'});
									$('.svg-line').not('#line2, #line6, #line10').css({'display' : 'none'});
									$('text').css({'opacity' : '0'})
									iVal = 1;
									text = 'Let us take another example <span class="ct-code-b-yellow">gmail</span>.';
								}
								typing('.introjs-tooltiptext', text, function() {
									introNextSteps('#inputId' + count);
									$('.introjs-nextbutton').show();
								});
							});
						break;
						case 'requestForUrl':
							$('#inputId' + count).off().attr('disabled', 'disabled').css({'cursor' : 'not-allowed'});
							$('.introjs-tooltip').removeClass('hide');
							text = 'Now request goes to the <span class="ct-code-b-yellow">service</span> method.';
							typing('.introjs-tooltiptext', text, function() {
								if (count == 1) {
									introNextSteps('#mainDiv', 'request1');
								} else {
									introNextSteps('#mainDiv', 'request21');
								}
								$('.introjs-nextbutton').show();
							});
						break;
						case 'secondRequest':
							browserLoading(count, 'gmail.com/', 'google-g.jpg', 'Gmail', 'https://accounts..../login.jsp/', function() {
								logInForm();
								introjs.refresh();
								zoomInEffect('#logInFormDiv', function() {
									validation();
								});
							});
						break;
						case 'secondResponse':
							mailOpen(function() {
								$('#mailPageDiv' + count).css({'cursor' : 'pointer'});
								$('#mailBoxes' + count +' .col-xs-12').not('.text-center').hover(function() {
									$(this).css({'background' : 'gray', 'color' : 'white'});
								}, function() {
									$(this).css({'background' : '', 'color' : ''});
								});
								$('.introjs-tooltip').removeClass('hide');
								text = 'Click on <span class="ct-code-b-yellow">drafts</span> to send another <span class="ct-code-b-yellow">request'
											+ '</span>.';
								typing('.introjs-tooltiptext', text, function() {
									draftClick();
								});
							});
						break;
						case 'thirdResPonse':
							browserLoading('1', 'https://mail.../mail/u/0/#inbox', 'mail-m.jpg', ' Drafts - user1', 'https://mail.../mail/u/0/#drafts',
									function() {
								$('#mailBody1').empty().addClass('text-center opacity00').append('You don\'t have any saved drafts.<br><br>'
									 		+ 'Saving a draft allows you to keep a message you aren\'t ready to send yet.');
								zoomInEffect('#mailBody1', function() {
									$('.introjs-tooltip').removeClass('hide');
									text = '<span class="ct-code-b-yellow">Drafts</span> box is empty.';
									typing('.introjs-tooltiptext', text, function() {
										introNextSteps('#browser2', 'urlGmailEnter');
										count++;
										$('.introjs-nextbutton').show();
									});
								});
							});
						break;
						case 'response21':
							mailOpen(function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Mail opened.';
								typing('.introjs-tooltiptext', text, function() {
									introNextSteps('#mainDiv', 'destroyMethod', 'right');
									$('.introjs-nextbutton').show();
								});
							});
						break;
					}
				break;
				case 'inputId' + count:
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">gmail.com</span> in search.';
					typing('.introjs-tooltiptext', text, function() {
						$('#inputId' + count).attr('disabled', false).effect('highlight', {color: 'yellow'}, 500).focus();
						introNextSteps('#browser' + count, 'requestForUrl');
						events('#inputId' + count, 'gmail.com', true);
					});
				break;
				case 'mainDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'request1':
							sendRequest('#line1', '#text1', function() {
								$('#servletClassFile').removeClass('opacity00');
								zoomInEffect('#fileDiv' + iVal, function() {
									text = '<span class="ct-code-b-yellow">signIn.class</span> file.';
									popover('#fileDiv' + iVal, 'bottom', text, function() {
										appendPopoverBtn(function() {
											$('#fileDiv' + iVal).popover('destroy');
											gmailHomePage();
										});
									});
								});
							});
						break;
						case 'request12':
							iVal++;
							$('#loginBtn, #password' + count + ', #userName' + count).off().attr('disabled', 'disabled').css({'cursor' : 'not-allowed'});
							logInRequest('#line5', '#text3', '#fileDiv' + iVal, '#file2', '#logInObj', function() {
								creatingId('#line6', '7', '8', '#text4', function() {
									customIntroNxtStep('#browser1', 'secondResponse');
								});
							});
						break;
						case 'request3':
							iVal++;
							$('#mailBoxes .col-xs-12').not('.text-center').off();
							logInRequest('#line9', '#text5', '#fileDiv' + iVal, '#file3', '#draftsObj', function() {
								text = '<span class="ct-code-b-yellow">Request</span> goes to the <span class="ct-code-b-yellow">service</span> method.';
								popover('#draftsObj', 'bottom', text, function() {
									appendPopoverBtn(function() {
										$('.popover').remove();
										serviceRequest('#line10', '#service' + iVal, '#line9', function() {
											text = 'Checks <span class="ct-code-b-yellow">cookie id</span> present in <span class="ct-code-b-yellow">'
													+ 'cookies hashmap</span> with <span class="ct-code-b-yellow">2314regd..</span>.<br>'
													+ '<div id="appendText"></div>';
											popover('#service3', 'bottom', text, function() {
												appendPopoverBtn(function() {
													$('#objTd1').effect('highlight', {color: 'blue'}, 600, function() {
														text = 'Both are same.';
														typing('#appendText', text, function() {
															appendPopoverBtn(function() {
																text = '<span class="ct-code-b-yellow">Service</span> method gives a '
																		+ '<span class="ct-code-b-yellow">response</span> to the browser.';
																typing('#popover' + iVal, text, function() {
																	appendPopoverBtn(function() {
																		$('#service3').popover('destroy');
																		reponseToWebBrowser('11', '12', '#text6', function() { 
																			customIntroNxtStep('#browser1', 'thirdResPonse');
																		});
																	});
																});
															});
														});
													});
												});
											})
										});
									});
								});
							});
						break;
						case 'request21':
							text = 'Already <span class="ct-code-b-yellow">obj</span> file is created. <span class="ct-code-b-yellow">Service</span>'
									+ ' method gives a <span class="ct-code-b-yellow">response</span> to the browser.';
							secondBrowserAnimation('13', '14', '#text7', text, '#service1', function() {
								arrowRevealWithoutArrow('15', '16', function() {
									$('#text8').fadeTo(1000, 1, function() {
										customIntroNxtStep('#browser2', 'secondRequest');
									});
								});
							});
						break;
						case 'request22':
							iVal++;
							$('#loginBtn, #password' + count + ', #userName' + count).off().attr('disabled', 'disabled').css({'cursor' : 'not-allowed'});
							text = 'Already obj file is created.';
							secondBrowserAnimation('17', '19', '#text9', text, '#service2', function() {
								cookieCreationText(function() {
									cookieCreationAnim('20', '22', '#text10', function() {
										customIntroNxtStep('#browser' + count, 'response21');
									});
								});
							});
						break;
						case 'destroyMethod':
							zoomInEffect('#clockDiv', function() {
								text = 'There is no requests to servlet container. So servlet container calls destroy method.';
									popover('#clockDiv', 'bottom', text, function() {
									appendPopoverBtn(function() {
										$('#clockDiv .fa').addClass('fa-spin');
										setTimeout(function() {
											$('#clockDiv .fa').removeClass('fa-spin');
											TweenMax.to('.destroy', 0.5, {opacity: 0.2, onComplete: function() {
												$('.svg-line').css({'display' : 'none'});
												$('text').css({'opacity' : '0'});
												text = 'In servlet container all are destroyed except class files.';
												typing('#popover' + count, text, function() {
													appendPopoverBtn(function() {
														$('.popover').remove();
														introNextSteps('#restartBtn', '', 'right');
														introjs.nextStep();
													});
												});
											}});
										}, 2000);
									});
								});
							});
						break;
					}
				break;
				case 'restartBtn':
					$('#restartBtn').removeClass('opacity00');
					$('.introjs-tooltip').css({'min-width' : '120px'});
					$('.introjs-tooltip').removeClass('hide');
					text = 'Click to restart.';
					typing('.introjs-tooltiptext', text, function() {
						reloadBtn();
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <span class="ct-code-b-yellow">cookies</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function sendRequest(line, svgText, callBackFunction) {
	arrowReveal(line, true, function() {
		$(svgText).fadeTo(1000, 1, function() {
			callBackFunction();
		});
	});
}

function secondBrowserAnimation(line1, line2, text1, text, selector1, callBackFunction) {
	arrowRevealWithoutArrow(line1, line2, function() {
		$(text1).fadeTo(1000, 1, function() {
			popover(selector1, 'bottom', text, function() {
				appendPopoverBtn(function() {
					$(selector1).popover('destroy');
					callBackFunction();
				});
			});
		});
	});
}

function reloadBtn() {
	$('#restartBtn').click(function() {
		$('input').val('')
		location.reload();
	});
}

function validation() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Enter email <span class="ct-code-b-yellow">user' + count + '</span> password <span class="ct-code-b-yellow">'
				+ 'user' + count + '</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('#userName' + count + ' , #password' + count).attr('disabled', false).effect('highlight', {color: 'blue'}, 500);
		$('#userName' + count).focus();
		events('#userName' + count, 'user' + count, false);
		introNextSteps('#mainDiv', 'request' + count + '2');
		events('#password' + count, 'user' + count, true);
	});
}

function mailOpen(callBackFunction) {
	browserLoading(count, 'https://mail.../mail/u/0/', 'mail-m.jpg', ' inbox(5) - use', 'https://mail.../mail/u/0/#inbox', function() {
		mailPage();
		var arr1 = ['gmail', 'home', 'inbox', 'drafts', 'starred'];
		var arr2 = ['Inbox (5)', 'Starred', 'Sent Mail (3)', 'Drafts', 'more'];
		for (var i = 0; i < arr1.length; i++) {
			mailText('Welcome to ' +  arr1[i]);
			mailProperties(arr2[i], (i + 1));
		}
		$('#mailBody' + count+ ' .col-xs-12:last').removeClass('border-bottom');
		zoomInEffect('#mailPageDiv' + count, function() {
			callBackFunction();
		});
	});
}

function loadClassFile(selector1,selector2,callBackFunction) {
	$(".popover").remove();
	//$(selector1).css({'opacity': 0.5});
	loadAFIle(selector2, function() {
		text = 'Load the <span class="ct-code-b-yellow">' + fileNmes[iVal - 1] + '.class</span> and  it will generate a <span class="ct-code-b-yellow">'
					+ fileNmes[iVal - 1] +'.obj</span>.';
		popover(selector1, 'bottom', text, function() {
			callBackFunction();
		});
	});
}

function genarateObjFile(selector1, selector2, selector3, callBackFunction) {
	$(".load").remove();
	$(selector2).popover('destroy');
	$(selector1).css({'opacity': 1});
	$(selector2).removeClass('servletinstance-box opacity00');
	fromEffectWithTweenMax(selector1, selector3, true, function() {
		$(selector2).addClass('servletinstance-box').removeClass('opacity00');
		setTimeout(function() {
			callBackFunction();
		}, 400);
	});
}

function serviceRequest(line, selector, markerId, callBackFunction) {
	arrowReveal(line, false, function() {
		zoomInEffect(selector, function() {
			$(markerId).css({'marker-end' : ''});
			arrowReveal('#line' + iVal + 'a', false, function() {
				callBackFunction();
			});
		});
	});
}

function pushObjFile(selector1, selector2, selector3, selector4, text, line, selector5, callBackFunction) {
	$(".popover").remove();
	zoomInEffect(selector1, function() {
		$(selector2).addClass('opacity00');
		fromEffectWithTweenMax(selector3, selector4, false, function() {
			popover(selector4, 'bottom', text, function() {
				appendPopoverBtn(function() {
					$(selector4).popover('destroy');
					serviceRequest(line, selector5, '#line1', function() {
						text = 'The <span class="ct-code-b-yellow">Service</span> method gives a responce to the browser. ';
						popover(selector5, 'bottom', text, function() {
							callBackFunction();
						});
					});
				});
			});
		});
	});
}

function gmailHomePage() {
	loadClassFile('#fileDiv1', '#file1', function() {
		$('#faEtcSymbol').removeClass('opacity00');
		appendPopoverBtn(function() {
			$('.popover').remove();
			genarateObjFile('#file1', '#dupObjFile', '#dupObjFileNme', function() {
				text = '<span class="ct-code-b-yellow">Request</span> goes to the <span class="ct-code-b-yellow">service</span> method.';
				pushObjFile('#servletContainer', '#dupObjFile', '#dupObjFileNme', '#signInObj', text, '#line2', '#service1', function() {
					appendPopoverBtn(function() {
						$('#service1').popover('destroy');
						reponseToWebBrowser('3', '4', '#text2', function() {
							customIntroNxtStep('#browser1', 'secondRequest');
						});
					});
				});
			});
		});
	});
}


function reponseToWebBrowser(line1, line2, selector1, callBackFunction) {
	arrowRevealWithoutArrow(line1, line2, function() {
		$(selector1).fadeTo(1000, 1, function() {
			callBackFunction();
		});
	});
}

function browserLoading(val, loadurl, imgUrl, text, url, callBackFunction) {
	$('#browserHeading' + val).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
	$('#inputId' + val).val(loadurl);
	setTimeout(function() {
		$('#browserHeading' + val).text('').append('<img src="/secure/lang/servlets/images/' + imgUrl + '"></img>' + text + '')
		$('#inputId' + val).val(url)
		callBackFunction();
	}, 800);
}

function logInRequest(line, text, selector1, selector2, selector3, callBackFunction) {
	sendRequest(line, text, function() {
		zoomInEffect(selector1, function() {
			popover(selector1, 'bottom', '<span class="ct-code-b-yellow">' + fileNmes[iVal - 1] + '.class</span> file.', function() {
				appendPopoverBtn(function() {
					loadClassFile(selector1, selector2, function() {
						appendPopoverBtn(function() {
							$('.popover').remove();
							$('#dupObjFileNme').text(fileNmes[iVal - 1] + '.obj');
							genarateObjFile(selector2, '#dupObjFile', '#dupObjFileNme', function() {
								$('#dupObjFile').addClass('opacity00').popover('destroy');
								fromEffectWithTweenMax('#dupObjFileNme', selector3, false, function() {
									callBackFunction();
								});
							});
						});
					});
				});
			});
		});
	});
}

function cookieCreationText(callBackFunction) {
	$('.popover').remove();
	text = 'A <span class="ct-code-b-yellow">cookie id</span> is created and stored in <span class="ct-code-b-yellow">hashmap</span>'
				+ ' for <span class="ct-code-b-yellow">user' + count + '</span>.';
	popover('#service' + iVal, 'bottom', text, function() {
		appendPopoverBtn(function() {
			$('#service' + iVal).popover('destroy');
			callBackFunction();
		});
	});
}

function cookieCreationAnim(line3, line4, svgText, callBackFunction) {
	$('#objTd' + count).effect('highlight', {color: 'blue'}, 600);
	zoomInEffect('#objTd' + count, function() {
		$('#objId' + count).effect('highlight', {color: 'blue'}, 600);
		zoomInEffect('#objId' + count, function() {
			text = 'Cookie Id';
			popover('#hashMapDiv', 'bottom', text, function() {
				appendPopoverBtn(function() {
					$('#hashMapDiv').popover('destroy');
					text = '<span class="ct-code-b-yellow">Service</span> method gives a <span class="ct-code-b-yellow">response</span> to the browser.';
					popover('#service' + iVal, 'bottom', text, function() {
						appendPopoverBtn(function() {
							$('#service' + iVal).popover('destroy');
							reponseToWebBrowser(line3, line4, svgText, function() {
								callBackFunction();
							});
						});
					});
				});
			});
		});
	});
}

function creatingId(line1, line3, line4, svgText, callBackFunction) {
	text = '<span class="ct-code-b-yellow">Request</span> goes to the <span class="ct-code-b-yellow">service</span> method.';
	popover('#logInObj', 'bottom', text, function() {
		appendPopoverBtn(function() {
			$('.popover').remove();
			serviceRequest(line1, '#service' + iVal, '#line5', function() {
				cookieCreationText(function() {
					zoomInEffect('#hashMapDiv', function() {
						cookieCreationAnim(line3, line4, svgText, function() {
							callBackFunction();
						});
					});
				});	
			});
		});
	});
}

function arrowRevealWithoutArrow(startVal, endVal, callBackFunction) {
	if (startVal <= endVal) {
		arrowReveal('#line' + startVal, false, function() {
			if (startVal != endVal) {
				$('#line' + startVal).css({'marker-end' : ''});
			}
			startVal++;
			arrowRevealWithoutArrow(startVal, endVal, callBackFunction);
		});
	} else {
		callBackFunction();
	}
}

function draftClick() {
	$('#mailBoxes' + count +' .col-xs-12').not('.text-center').click(function() {
		$('.error-text').remove();
		if (this.id == 'mailMenu4') {
			$('#mailMenu4').css({'font-weight' : 'bold'});
			introNextSteps('#mainDiv', 'request3');
			$('#mailBoxes' + count +' .col-xs-12').not('.text-center').off();
			introjs.nextStep();
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Click on Drafts</div>');
		}
	});
}

function logInBtn() {
	$('#loginBtn').off().css({'cursor' : 'pointer'});
	$('#loginBtn').click(function() {
		$('.error-text').remove();
		if ($('#userName' + count).val() == 'user' + count && $('#password' + count).val() == 'user') {
			$('#loginBtn').off();
			introjs.nextStep();
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">email <span class="ct-code-b-yellow">user1</span>'
					+ ' password <span class="ct-code-b-yellow">user</span></div>');
		}
	});
}

function events(selector, value, flag) {
	$(selector).on('keydown', function(e) {
		$('.error-text, #requestDiv').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val().length >= max) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		$('.error-text').remove();
		if (!flag) {
			logInBtn();
		}
		if ($(selector).val().toLowerCase() == 'gmail.com' || ($('#userName' + count).val() == 'user' + count &&
					$('#password' + count).val() == 'user' + count)) {
			if ($('#userName' + count).val() == 'user' + count && $('#password' + count).val() == 'user' + count) {
				$('#requestDiv').remove();
				$('.introjs-tooltiptext').append('<div id="requestDiv"><br><span class="ct-code-b-yellow">Request</span> goes to the'
						+ ' <span class="ct-code-b-yellow">service</span> method.</div>');
			}
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introjs.nextStep();
			}
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter ' + value + '.</div>');
			$('.introjs-nextbutton').hide();
		}
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

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function popover(selector, position, text, callBackFunction) {
	$('.popover').remove();
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover' + iVal + '"></div>'
	}).popover('show');
	typing('#popover' + iVal, text, function() {
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

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function appendPopoverBtn(callBackFunction) {
	$('#popover' + iVal).append('<div><a class="introjs-button user-btn pull-right">Next &#8594;</a></div>');
	$('.user-btn').click(function() {
		$(this).remove();
		callBackFunction();
	});
}

function arrowReveal(lineId, flag, callBackFunction) {
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


function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	if (flag) {
		$(selector2).css({'color': 'blue'});
	}
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass('opacity00');
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).css({'color': ''});
		callBackFunction();
	}});
}


function loadAFIle(from, callBackFunction) {
	$('.load').remove();
	$('body').append("<i class='fa fa-spinner fa-pulse fa-3x fa-fw load' style='position: relative; z-index: 10000000; color: #b30047'></i>");
	var l = $(from).offset();
	$('.load').offset({
		'top': l.top,
		'left': l.left - ($(from).outerWidth())
	});
	setTimeout(function() {
		callBackFunction();
	},800);
}
