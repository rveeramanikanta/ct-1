var dotClassFiles = ["SignIn", "LogIn", "SentMail"];
var count = urlCount = 1, arrCount = 0;


function sessionAnimation() {
	$('line,text').hide();
	displaybrowser('#brower1',1);
	displaybrowser('#brower1',2);
	displayFileIcons();
	displayLoginForm(1);
	displayLoginForm(2);
	dispalyTable();
	displayServletObjects();
	introSteps();
}

function displaybrowser(selector, num) {  
	$(selector).append('<div class="container col-xs-12 padding0 opacity00" id="viewBrowser'+ num +'">'
				+ '<div class="tab-container">'
				+ '<ul class="tabs clearfix"><li class="active">'
				+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num+'">New Tab</div>'
				+ '<i class="fa fa-times fa-sm margin-top20"></i>'
				+ '</li></ul><span id ="plus"><i class="fa fa-plus"></i></span></div>'
				+ '<div id="browser" class="col-xs-12 padding00">'
				+ '<div class="col-xs-2 padding00 text-center">'
				+ '<span id="arrowCircle" class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-left arrow"></i></span>'
				+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-right arrow"></i></span>'
				+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
				+ '<div class="col-xs-8 padding00 text-center url">'
				+ '<input type="text" maxlength="50" class="usr-text padding00" id="url'+  num +'">'
				+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
				+ '<div class="col-xs-2 padding00 fa-display text-center">'	
				+ '<span class="col-xs-6 padding00 margin-top5"><i class="fa fa-home fa-1x"></i></span>'
				+ '<span class="col-xs-6 padding00 margin-top5"><i  class="fa fa-bars fa-1x"></i></span></div></div>'
				+ '<div class ="col-xs-12 html-body" id = "htmlBody">'
				+ '<div id="content'+ num +'" class="col-xs-12 opacity00"></div></div></div>');
}

function displayFileIcons() {
	for (var i = 0; i < dotClassFiles.length; i++ ) {
		$('#dotClassFilesList').append('<div class="col-xs-12 margin-top5 padding00">'
				+ '<div class="margin-top5 text-center padding00" id="file'+ i +'">'
				+ '<i class="fa fa-file-text-o" id="faFile'+ i +'"></i>'
				+ '<div class="col-xs-12 padding00">'+ dotClassFiles[i] +'.class</div></div></div>');
		if(i == 2) {
			$('#dotClassFilesList').append('<div class="col-xs-12 text-center margin-top5 padding00"><i class="fa fa-ellipsis-h"></i><br/>'
				+ '<i class="fa fa-ellipsis-h"></i></br><i class="fa fa-ellipsis-h"></i></div>');
		}
	}
}


function displayLoginForm(num) {
	$('#content' + num).append('<div class="col-xs-10 col-xs-offset-1" id="formContainer">'
				+ '<form id="login" name="login">'
				+ '<h2 style="text-align: center;" class="form-signin-heading">Sign In</h2>'
				+ '<div style="margin-left: 20px;margin-right: 20px;"><div class="form-group">'
				+ '<input class="form-control" placeholder="Email" name="loginId" id="loginId'+ num +'" type="email">'
				+ '</div><div class="form-group">'
				+ '<input class="form-control" placeholder="Password" name="password" id="password'+ num +'" type="password">'
				+ '</div><div class="form-group pull-right">'
				+ '<a id="loginBtn'+ num +'" class="btn btn-primary btn-sm">Sign In</a>'
				+ '</div></div></form></div>');
}

function dispalyTable() {
	$('#hashTable').append('<table style="width:100%" class = "opacity00" id="displayHashTable">'
				+ '<tr><td>HTTP Session_Id</td><td>HTTP Session_obj</td></tr>'
				+ '<tr><td id="jId"class="opacity00">1A53D5...</td><td class="opacity00" id="name">login.obj</td></tr>'
				+ '<tr><td id="jId2" class="opacity00">5J1235...</td><td class="opacity00" id="jack">login.obj</td></tr></table>');
}

function displayServletObjects() {
		$('#servletObjects').append('<div class="col-xs-12 text-center margin-top30 padding00" id="div1">'
				+ '<div class="servlet servler-Object inline-block margin-top30 text-center opacity00" id="siginObj">signIn.obj</div>'
				+ '<div class="servlet servler-Object inline-block margin-top30 text-center opacity00" id="logInObj">logIn.obj</div>'
				+ '<div class="servlet servler-Object inline-block margin-top30 text-center opacity00" id="sentMailObj">sentMail.obj</div>'
				+ '</div>');
	
}

function mailPage(num) {
	$('#content'+ num).append('<div class="col-xs-12 padding00"><div class="col-xs-12 padding00 margin-top10">'
						+ '<div class="col-xs-4 col-xs-offset-3 border-css"><div class="col-xs-12 padding00">'
						+ '<input type="text" class="col-xs-10 padding00" style="border: medium none;">'
						+ '<i style="background: 4387fd" class="fa fa-1x fa-search"></i></div></div>'
						+ '<div class="col-xs-offset-2 col-xs-1"><i class="fa fa-th fa-1x"></i></div>'
						+ '<div class="col-xs-1"><i class="fa fa-bell fa-1x"></i></div><div class="col-xs-1"><i class="fa fa-user fa-1x"></i></div>'
						+ '</div><div class="col-xs-12 margin-top5"><div class="col-xs-4" id="mailBoxes'+ urlCount+'">'
						+ '<div class="col-xs-12 text-center padding00"><div class="col-xs-10 padding00 compose-box">Compose</div></div></div>'
						+ '<div class="col-xs-8 border-css padding00" style="background: #ddd;"><div class="col-xs-12 padding00" id="mailBody'+ num +'">'
						+ '</div></div></div></div>');
}
function mailProperties(val, i) {
	$('#mailBoxes' + urlCount).append('<div class="col-xs-12 padding00" id="menu'+ i +'">' + val + '</div>');
}

function mailText(val) {
	$('#mailBody' + urlCount).append('<div class="col-xs-12 padding00 border-bottom"><div class="col-xs-5 padding2">'
					+ '<input type="checkbox" class="margin0" disabled> <i class="fa fa-1x fa-star-o"></i>&emsp;gmail</div>'
					+ '<div class="col-xs-7 padding2">' + val + '</div></div>');
}

function introSteps() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [{
					element: '#headingSection',
					intro: ''
				},{
					element: '#viewBrowser1',
					intro: '',
					animateStep: 'enterUrlReq',
					tooltipClass: 'hide'
				}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case 'viewBrowser' + urlCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'enterUrlReq':
							$('#viewBrowser' + urlCount).removeClass('opacity00');
							if(urlCount == 1) {
								customIntroNxtStep('#url' + urlCount);
							} else {
								$('.svg-line, text').not('#line2, #line5, #line8').css({'display': 'none'});
								$('#viewBrowser1').css({'opacity' : 0.5});
								$('.introjs-tooltip').removeClass('hide');
								text = 'Some other user login in another web site.'
								typing('.introjs-tooltiptext', text, function() {
									introNextSteps('#url'+ urlCount);
									$('.introjs-nextbutton').show();
								});
							}
						break;
						case 'enterUserNameAndPwd' :
							$('#viewBrowser' + urlCount).removeClass('introjs-fixParent');
							$('.introjs-tooltip').removeClass('hide');
							if(urlCount == 1) {
								text = 'Please enter user <span class="ct-code-b-yellow">name</span> as <span class="ct-code-b-yellow">admin</span> and '
									+ ' <span class="ct-code-b-yellow">password</span> as <span class="ct-code-b-yellow">pwd</span> and click on '
									+ ' <span class="ct-code-b-yellow">submit</span> button.';
								formValidation('admin', 'pwd');
								introNextSteps('#animationDiv', 'usrAndPwdReq', 'top');
							} else {
								text = 'Please enter user <span class="ct-code-b-yellow">name</span> as <span class="ct-code-b-yellow">jack</span> and '
									+ ' <span class="ct-code-b-yellow">password</span> as <span class="ct-code-b-yellow">123</span> and click on '
									+ ' <span class="ct-code-b-yellow">submit</span> button.';
								formValidation('jack', '123');
								introNextSteps('#animationDiv', 'secUsrAndPwdReq', 'top');
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#loginId' + urlCount).focus();
							});
						break;
						case 'clickOnSentMail' :
							$('#viewBrowser' + urlCount).removeClass('introjs-fixParent');
							$('.introjs-tooltip').removeClass('hide');
							text = 'Please click on <span class="ct-code-b-yellow">Sent Mail</span> lable.';
							typing('.introjs-tooltiptext', text, function() {
								$('#content' + urlCount).css({'cursor': 'pointer'});
								$('#mailBoxes'+ urlCount  +' .col-xs-12:not(.text-center)').hover(function() {
									$(this).css({'background': 'gray', 'color' : 'white'});
								}, function() {
									$(this).css({'background': 'none', 'color': 'black'});
								});
								clickSentMail();
							});
						break;
						case 'viewSentMails' :
							urlCount++;
							arrCount = 0;
							customIntroNxtStep('#viewBrowser2', 'enterUrlReq');
						break;
					}
				break;
				case 'restartBtn' :
					$('#restartBtn').removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
				break;
				case 'url' + urlCount :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Please enter the url <span class="ct-code-b-yellow">www.gmail.com</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('#url' + urlCount).focus();
						if(urlCount == 1) {
							introNextSteps('#animationDiv', 'gmailReq', 'top');
						} else {
							introNextSteps('#animationDiv', 'gmailSecndReq', 'top');
						}
						urlVerification('#url'+ urlCount, 'www.gmail.com', true);
					});
				break;
				case "animationDiv" :
					$('#url' + urlCount).attr('disabled', 'disabled');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'gmailSecndReq' :
							$('#service1').popover("destroy");
							$('#loadImg' + urlCount).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
							$('#url2').val('www.gmail.com/');
							arrowRevealWithoutArrow(10, 11, function() {
								$("#text7").fadeTo(1000, 1, function() {
									text = 'previously we have created <span class="ct-code-b-yellow">signIn.obj</span>, the '
											+ ' service method uses <span class="ct-code-b-yellow">signIn.obj</span> we have already created.'
											+ '  The <span class="ct-code-b-yellow">service</span> method used '
											+ '<span class="ct-code-b-yellow">signIn.obj</span> file and give a reponce to the browser.'
									popover('#service1','bottom', text, function() {
										appendNextBtn(function() {
											$('#service1').popover("destroy");
											$(".popover").remove();
											arrowRevealWithoutArrow(12, 13,function() {
												$("#text8").fadeTo(1000, 1, function() {
													loadingTitle('#loadImg2', '#url2', 'google-logo.jpg','login.jsp/', 'Gmail', function() {
														zoomInEffect('#content2',function() {
															customIntroNxtStep('#viewBrowser2', 'enterUserNameAndPwd');
														});
													});
												});
											});
										});
									});
								});
							});
						break;
						case 'gmailReq':
							$('#loadImg' + urlCount).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
							$('#url1').val('www.gmail.com/');
							zoomInEffect('#servletContainer',function() {
								$('#servletClassFolder').popover("destroy");
								arrowRevealVertical("#line1", true, function() {
									$("#text1").fadeTo(1000, 1, function() {
										zoomInEffect('#servletClassFolder', function() {
											text = 'This is a Class folder, In this we have a many Class files. <br/>'
													+ ' Here we requested url is <span class="ct-code-b-yellow">www.gmail.com</span>, '
													+ 'the corresponding class file is <span class="ct-code-b-yellow">'+dotClassFiles[arrCount] +'.class</span> file. ';
											popover('#servletClassFolder','left', text, function() {
												appendNextBtn(function() {
													gmailHomePage();
												});
											});
										});
									});
								})
							});
						break;
						case 'usrAndPwdReq' :
							$('#servletClassFolder').popover("destroy");
							arrCount++;
							$('#loadImg' + urlCount).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
							$('#url1').val('www.gmail.com/');
							//zoomInEffect('#service2', function() {
								arrowRevealVertical("#line4", true, function() {
									$("#text3").fadeTo(1000, 1, function() {
										text = 'This is a Class folder, In this we have a many Class files. <br/>'
												+ 'the corresponding class file is <span class="ct-code-b-yellow">'
												+ dotClassFiles[arrCount] +'.class</span> file. ';
										popover('#servletClassFolder','left', text, function() {
											appendNextBtn(function() {
												LogInPage();
											});
										});
									});
								});
							//});
						break;
						case 'secUsrAndPwdReq' :
							$('#service2').popover("destroy");
							arrCount++;
							$('#loadImg' + urlCount).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
							$('#url1').val('www.gmail.com/');
							arrowRevealWithoutArrow(14, 16, function() {
								$("#text9").fadeTo(1000, 1, function() {
									text = 'previously we have created <span class="ct-code-b-yellow">logIn.obj</span>, the '
										+ ' service method generates a <span class="ct-code-b-yellow">session id </span> for '
										+ '<span class="ct-code-b-yellow">jack</span> and it can be stored in the .'
										+ '  The <span class="ct-code-b-yellow">HashTable</span>.'
									popover('#service2','bottom', text, function() {
										appendNextBtn(function() {
											$('#service2').popover("destroy");
											$("#jId2").effect("highlight", {color: 'blue'}, 800);
											zoomInEffect('#jId2', function() {
												$("#jack").effect("highlight", {color: 'blue'}, 800);
												zoomInEffect('#jack', function() {
													$(".popover").remove();
													text = 'The <span class="ct-code-b-yellow">Service</span> method gives a responce to the browser along '
														+' with <span class="ct-code-b-yellow">JSession id</span>.';
													popover('#service2','bottom', text, function() {
														appendNextBtn(function() {
															$(".popover").remove();
															arrowRevealWithoutArrow(17, 19, function() {
																$('#text10').fadeTo(1000, 1, function() {
																	loadingbrowser();
																});
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
						case 'clickSentMail' :
							$('#servletClassFolder').popover("destroy");
							arrCount++;
							$('#loadImg' + urlCount).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
							$('#url1').val('www.gmail.com/');
							arrowRevealVertical("#line7", true, function() {
								$("#text5").fadeTo(1000, 1, function() {
									text = 'This is a Class folder, In this we have a many Class files. <br/>'
											+ 'the corresponding class file is <span class="ct-code-b-yellow">'
											+ dotClassFiles[arrCount] +'.class</span> file. ';
									popover('#servletClassFolder','left', text, function() {
										appendNextBtn(function() {
											sentMailPage();
										});
									});
								});
							});
						break;
					}
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn how the <span class="ct-code-b-yellow">sessions</span> is working in servlet.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
		
	});
}

function clickSentMail() {
	$('#mailBoxes'+ urlCount +' .col-xs-12:not(.text-center)').click(function() {
		$('.error-text').remove();
		if ($(this).attr('id') == 'menu2') {
			$('#mailBoxes'+ urlCount +' .col-xs-12:not(.text-center)').off();
			introNextSteps('#animationDiv', 'clickSentMail', 'top');
			introjs.nextStep();
		} else {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please click on Sent Mail.</span>");
		}
	});
}

function gmailHomePage() {
	loadClassFile('#file0', '#faFile0', function() {
		$('#file0').css({'opacity': 1});
		appendNextBtn(function() {
			genarateObjFile('#file1', '#serrvice', '#nameOfObj', function() {
				pushObjFile('#servletPool', '#serrvice', '#nameOfObj', '#siginObj', '#line2', '#service1', '#line1', '#line20', function() {
					appendNextBtn(function() {
						reponseToWebBrowser('#line3', '#text2', function() {
							loadingTitle('#loadImg1', '#url1', 'google-logo.jpg','login.jsp/', 'Gmail', function() {
								zoomInEffect('#content1',function() {
									customIntroNxtStep('#viewBrowser1', 'enterUserNameAndPwd');
								});
							});
						});
					});
				});
			});
		});
	});
}

function  LogInPage() {
	loadClassFile('#file1', '#faFile1', function() {
		$('#file1').css({'opacity': 1});
		appendNextBtn(function() {
			genarateObjFile('#file2', '#serrvice', '#nameOfObj', function() {
				pushRemainingObjFilles('#serrvice', '#nameOfObj', '#logInObj', '#line5', '#service2', '#line4', '#line21', function() {
					appendNextBtn(function() {
						$(".popover").remove();
						revilHashMap(function() {
							serviceResponce();
						});
					});
				});
			});
		});
	});
}

function revilHashMap(callBackFunction) {
	$('#service2').popover("destroy");
	$("#hashTableText").effect("highlight", {color: 'blue'}, 800);
	zoomInEffect('#hashTableText', function() {
		zoomInEffect('#displayHashTable', function() {
			$("#jId").effect("highlight", {color: 'blue'}, 800);
			zoomInEffect('#jId', function() {
				$("#name").effect("highlight", {color: 'blue'}, 800);
				zoomInEffect('#name', function() {
					callBackFunction();
				});
			});
		});
	});
}

function sentMailPage() {
	loadClassFile('#file2', '#faFile2', function() {
		$('#file2').css({'opacity': 1});
		appendNextBtn(function() {
			genarateObjFile('#file2', '#serrvice', '#nameOfObj', function() {
				pushRemainingObjFilles('#serrvice', '#nameOfObj', '#sentMailObj', '#line8', '#service3','#line7', '#line22', function() {//poo
					appendNextBtn(function() {
						$(".popover").remove();
						$('#jId, #jSes').removeClass('blinking');
						arrowRevealVertical('#line9',false, function() {
							$("#text6").fadeTo(1000, 1, function() {
								loadingTitle('#loadImg1', '#url1', 'mail-logo.png','mail/u/#SentMail', 'SentMail(3)-', function() {
									$('#mailBody' + urlCount).addClass('opacity00').empty();
									var arr = ['gmail', 'home', 'inbox'];
									for (var i = 0; i < arr.length; i++) {
										mailText('Welcome to '+ arr[i] +'');
									}
									setTimeout(function() {
										zoomInEffect('#mailBody' + urlCount,function() {
											customIntroNxtStep('#viewBrowser1', 'viewSentMails');
										});
									},200);
								});
							});
						});
					});
				});
			});
		});
	});
}

function serviceResponce() {
	text = 'The <span class="ct-code-b-yellow">Service</span> method gives a responce to the browser along '
			+' with <span class="ct-code-b-yellow">JSession id</span>.';
	popover('#service2','bottom', text, function() {
		appendNextBtn(function() {
			$(".popover").remove();
			arrowRevealVertical('#line6', false, function() {
				$('#text4').fadeTo(1000, 1, function() {
					loadingbrowser();
				});
			});
		});
	});
}

function loadingbrowser() {
	loadingTitle('#loadImg' + urlCount, '#url' + urlCount, 'mail-logo.png','mail/u/#inbox', 'Inbox(5)-Admi', function() {
		$('#content' + urlCount).addClass('padding00 margin-top5 opacity00').empty();
		$('#htmlBody').addClass('padding00');
		mailPage(urlCount);
		var arr = ['gmail', 'home', 'inbox', 'drafts', 'starred'];
		var mailList = ['Inbox(5)', 'Starred','Sent Mail(3)', 'Drafts','More'];
		for (var i = 0; i < arr.length; i++) {
			mailText('Welcome to '+ arr[i] +'');
			mailProperties(mailList[i], i);
		}
		setTimeout(function() {
			zoomInEffect('#content' + urlCount,function() {
				if (urlCount == 1) {
					customIntroNxtStep('#viewBrowser' +urlCount, 'clickOnSentMail');
				} else {
					zoomInEffect('#destroy', function() {
						text = 'There is no requests comming to servlet container so timer starts to destroy.';
						popover('#clock','left', text, function() {
							appendNextBtn(function() {
								$('line, text').remove();
								TweenMax.to('#hashTable, line, text, .service, .servlet', 1, {opacity: 0, onComplete: function() {
									appendNextBtn(function() {
										$(".popover").remove();
										$('#destroy').addClass('opacity00');
										introNextSteps('#restartBtn', 'restart');
										introjs.nextStep();
									});
								}});
							});
						});
					});
				}
			});
		},200);
	});
}


function loadingTitle(selector1, selector2, img, jspName, textafterLoad, callBackFunction) {
	$(selector1).text('').append('<img id="img'+ arrCount +'"src="/secure/lang/servlets/images/'+ img +'"></img>'+ textafterLoad +'')
	$(selector2).val('https://accounts..../'+ jspName +'')
		callBackFunction();
}

function arrowRevealWithoutArrow(startVal, endVal, callBackFunction) {
	if (startVal <= endVal) {
		arrowRevealVertical('#line' + startVal, false, function() {
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



function storeJSessionId(selector1,selector2, selector3, selector4, line1, line2, line3, callBackFunction) {
	$(".popover").remove();
	linesAnimation(line1, line2, line3, function() {
		$(selector2).popover("destroy");
		zoomInEffect(selector1, function() {
			zoomInEffect(selector2, function() {
				zoomInEffect(selector3, function() {
					zoomInEffect(selector4, function() {
						text = 'The <span class="ct-code-b-yellow">'+ dotClassFiles[arrCount] +'.obj</span> is stored in  '
								+'<span class="ct-code-b-yellow">hashmap<span>. ';
						popover(selector2,'bottom', text, function() {
							callBackFunction();
						});
				    });
				});
			});
		});
	});
}


function formValidation(val1, val2) {
	$('#loginBtn' + urlCount).off().css({'cursor': 'pointer'});
	$('#loginBtn' + urlCount).click(function() {
		if ($('#loginId' +urlCount).val() == val1 && $('#password' + urlCount).val() == val2) {
			$('#loginId'+ urlCount+', #password1').css({'disabled' : 'disabled'});
			$('#loginBtn' + urlCount).off();
			introjs.nextStep();
		} else {
			$('.error-text').remove();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter the given user name and password.</span>");
		} 
	});
}

function gmailSiginPage() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Pleas enter user <span class="ct-code-b-yellow">name</span> as <span class="ct-code-b-yellow">admin</span> and '
			+ ' <span class="ct-code-b-yellow">password</span> as <span class="ct-code-b-yellow">pwd</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('#loginId1').focus();
	});
}

function loadClassFile(selector1, selector2, callBackFunction) {
	$(selector1).popover("destroy");
	$(".popover").remove();
	$(selector1).css({'opacity': 0.5});
	loadAFIle(selector2, function() {
		text = 'Load a <span class="ct-code-b-yellow">'+ dotClassFiles[arrCount]  +'.class</span> and  it will generate '
				+'a <span class="ct-code-b-yellow">'+ dotClassFiles[arrCount] +'.obj</span>';
		popover(selector1,'left', text, function() {
			callBackFunction();
		});
	});
}

function genarateObjFile(selector1, selector2, selector3, callBackFunction) {
	$(".popover, .load").remove();
	$(selector1).css({'opacity': 1});
	$(selector2).removeClass('service opacity00');
	$(selector3).text(dotClassFiles[arrCount]);
	$(selector2).popover("destroy");
	fromEffectWithTweenMax(selector1, selector3, true, function() {
		$(selector2).addClass('service').removeClass('opacity00');
		callBackFunction();
	});
}

function pushObjFile(selector1, selector2, selector3, selector4, line1, selector5, line2, line3, callBackFunction) {
	$(".popover").remove();
	zoomInEffect(selector1, function() {
		$(selector2).addClass('opacity00');
		fromEffectWithTweenMax(selector3, selector4, false, function() {
			$(selector5).popover("destroy");
			arrowRevealVertical(line1, false, function() {
				zoomInEffect(selector5,function() {
					$(line2).css({'marker-end' : ''});
					arrowRevealVertical(line3, false, function() {	
						text = 'The <span class="ct-code-b-yellow">Service</span> method gives a responce to the browser. ';
						popover(selector5,'bottom', text, function() {
							callBackFunction();
						});
					});
				});
			});
		});
	});
}

function pushRemainingObjFilles(selector2, selector3, selector4, line1, selector5, line2, line3,  callBackFunction) {
	$(".popover").remove();
	$(selector4).popover("destroy");
	setTimeout(function() {
		$(selector2).addClass('opacity00');
		fromEffectWithTweenMax(selector3, selector4, false, function() {
			$(selector5).popover("destroy");
			arrowRevealVertical(line1, false, function() {
				zoomInEffect(selector5, function() {
					$(line2).css({'marker-end' : ''});
					arrowRevealVertical(line3, false, function() {
						if(dotClassFiles[arrCount] == "SentMail") {
							text = 'The <span class="ct-code-b-yellow">service</span> method checks'
									+ ' wether the comming session id <span class="ct-code-b-yellow" id="jSes">'+ $('#jId').text() 
									+ '</span> is same or not.<br/><div id="appendDiv"></div>';
						} else {
							text = 'Hrere, the <span class="ct-code-b-yellow">service</span> method generates a '
									+ '<span class="ct-code-b-yellow">session Id</span> for '
									+ '<span class="ct-code-b-yellow">'+dotClassFiles[arrCount] +'</span> obj and it will be stored in '
									+ ' HashMap.';
						}
						popover(selector5, 'bottom', text, function() {
							if (dotClassFiles[arrCount] == "SentMail") {
								$('#jId, #jSes').addClass('blinking');
								appendNextBtn(function() {
									text1 = 'Here session id are same so control get ready to give a responce to the browser.'
									typing('#appendDiv', text1, function() {
										callBackFunction();
									});
								});
							} else {
								callBackFunction();
							}
						});
					});
				});
			});
		});
	},800);
}

function reponseToWebBrowser(line1, selector1, callBackFunction) {
	$(".popover").remove();
	arrowRevealVertical(line1, false,function() {
		$(selector1).fadeTo(1000, 1, function() {
			callBackFunction();
		});
	});
}

function appendNextBtn(callBackFunction) {
	$('#popover' + count).append('<a class="introjs-button introjs-duplicate-nextbutton pull-right">Next &#8594;</a>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$('.introjs-duplicate-nextbutton').remove();
		callBackFunction();
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {	//typing function
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function customIntroNxtStep(stepName, animatedStep, position) {	//custiom  time to intro goes to next step
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function introNextSteps(stepName, animatedStep, position) {	//dynamic intro next step
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

function callBackFunction() {
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function setTimeToIntroGoNextStep() {	//set time to Intro goes to next step
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		$(selector1).removeAttr('style');
		callBackFunction();
	});
}


function popover(selector, position, text, callBackFunction) {	//display popover
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'">'+ text +'</div>',
		container: '#animationDiv'
	});
	$(selector).popover('show');
	typing('#popover' + count, text, function() {
		callBackFunction();
	});
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


function arrowRevealVertical(lineId, flag, callBackFunction) {	//arrow reveal vertically
	 var y;	
	 var x2 = $(lineId).attr('x2');
	 var y2 = $(lineId).attr('y2');
	 $(lineId).attr('x2', $(lineId).attr('x1'));
	 $(lineId).attr('y2', $(lineId).attr('y1'));
	 $(lineId).show();
	 if (flag) {
		 TweenMax.to(lineId, 1, {attr: {x2: x2,y1: y2},onComplete: function () {
			 callBackFunction();
		 }});
	 } else {
		 TweenMax.to(lineId, 1, {attr: {x2: x2,y2: y2},onComplete: function () {
			 callBackFunction();
		 }});
	 }
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

function loadingAnimation(from,to,callBackFunction) {
	$('.load').remove();
	$('body').append("<i class='fa fa-spinner fa-pulse fa-3x fa-fw load' style='position: relative; z-index: 10000000; color: #b30047'></i>");
	var l = $(from).offset();
	$('.load').offset({
		'top': l.top,
		'left': l.left - ($(from).outerWidth())
	});
	var l1 = $(from).offset();
	var l2 = $(to).offset();
	var topLength = parseInt($('.load').css('top')) + (l2.top - l1.top);
	var leftLength = parseInt($('.load').css('left')) + (l2.left - l1.left);
	TweenMax.to('.load', 15, { top : topLength, left : leftLength, onComplete: function() {
		callBackFunction();
	}});
}

function urlVerification(selector1, value1) {
	$(selector1).on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 9, 27, 37, 39, 46, 13]) !== -1) { //backspace[8], tab[9], escape[27], leftArrow[37], rightArrow[39], delete[46], enter[13]
			return;
		}
	});
	$(selector1).on("keyup", function(e) {
		if ($(selector1).val().toLowerCase() == value1.toLowerCase()) {
			$(this).removeClass("empty");
		} else {
			$('.error-text').remove();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter the given url.</span>");
			$(this).addClass("empty");
		}
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		}  else {
			$(".introjs-nextbutton").show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introjs.nextStep();
			}
		} 
	});
}
