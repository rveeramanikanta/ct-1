
var dotClassFiles = ["welcome", "LogIn"];
var count = urlCount = 1, arrCount = 0; 

function lifeCycleAnimation() {
	$('line, text').hide();
	viewBrowser();
	displayFileIcons();
	introSteps();
}

function viewBrowser() {
	for (var i = 1; i<=3; i++) {
		displaybrowser('#browser'+ i +'',i);
	}
} 
 
function displaybrowser(selector, num) {  
	$(selector).append('<div class="container col-xs-12 padding0 opacity00" id="viewBrowser'+ num +'">'
				+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
				+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg">New Tab</div>'
				+ '<i class="fa fa-times fa-sm margin-top20"></i>'
				+ '</li></ul><span id ="plus"><i class="fa fa-plus"></i></span></div>'
				+ '<div id="browser" class="col-xs-12 padding00"><div class="col-xs-2 padding00 text-center">'
				+ '<span id="arrowCircle" class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-left arrow"></i></span>'
				+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-right arrow"></i></span>'
				+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
				+ '<div class="col-xs-8 padding00 text-center url">'
				+ '<input type="text" maxlength="50" class="usr-text padding00" id="url'+  num +'">'
				+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
				+ '<div class="col-xs-2 padding00 fa-display text-center">'	
				+ '<span class="col-xs-6 padding00 margin-top5"><i class="fa fa-home fa-1x"></i></span>'
				+ '<span class="col-xs-6 padding00 margin-top5"><i  class="fa fa-bars fa-1x"></i></span></div></div>'
				+ '<div class ="col-xs-12 html-body padding00" id = "htmlBody">'
				+ '<div id="content'+ num +'" class="col-xs-12 html-text opacity00 padding00">'
				+ '<img class="image-class" id="welcomePage" src="/secure/lang/servlets/images/ct-wel-page.jpg"></img></div></div></div>');
}

function displayFileIcons() {
	for (var i = 0; i < dotClassFiles.length; i++ ) {
		$('#dotClassFilesList').append('<div class="col-xs-12 margin-top5 padding00">'
				+ '<div class="margin-top5 text-center padding00" id="file'+ i +'"><i class="fa fa-file-text-o" id="faFile'+ i +'"></i>'
				+ '<div class="col-xs-12 padding00">'+ dotClassFiles[i] +'.class</div></div></div>');
		if(i == 1) {
			$('#dotClassFilesList').append('<div class="col-xs-12 text-center margin-top5 padding00"><i class="fa fa-ellipsis-h"></i><br/>'
				+ '<i class="fa fa-ellipsis-h"></i></div>');
		}
	}
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
					element: '#viewBrowser'+ urlCount,
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
						$('#animationDiv').removeClass('opacity00');
					$('#url' + urlCount).attr('disabled', 'disabled');
					$('#browser' + urlCount).removeClass('opacity00');
					zoomInEffect('#viewBrowser' + urlCount, function() {
						customIntroNxtStep('#url' + urlCount, 'enterUrl', 'bottom');
					});
				break;
				case 'url' + urlCount :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Please enter the url <span class="ct-code-b-yellow">www.codetantra.com</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('#url' + urlCount).attr('disabled', false).focus();
						introNextSteps('#animationDiv', 'ctReqWel'+ urlCount +'', 'top');
						urlVerification('#url'+ urlCount, 'www.codetantra.com', true);
					});
				break;
				case 'animationDiv' :
					$('#url' + urlCount).attr('disabled', 'disabled');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'ctReqWel' + urlCount :
							if (urlCount == 2) {
								secondRequest();
							} else if (urlCount == 1) {
								firstRequest();
							} else {
								thirdRequest();
							}
						break;
					}
				break;
				case 'restartBtn' :
					$('#restartBtn').removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn the working of <span class="ct-code-b-yellow">Servlet Life Cycle</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
		
	});
}

function firstRequest() {
	zoomInEffect('#servletContainer', function() {
		requestOne('#line1', '#text1', '#servletClassFolder', true, '', '', function() {
			loadClassFile('#file0', '#faFile0', function() {
				appendNextBtn(function() {
					createServletInstance(function() {
						$('#service1').popover('destroy');
						 text = 'The service() method recives a request form user and generate corresponding reponse'
							 	+ ' and send it to the user browser.';
						 popover('#service1','right', text, function() {
							 appendNextBtn(function() {
								 $('#service1').popover("destroy");
								 requestAndReponse('#line1', '#line4', '#line5', '#content'+ urlCount +'', '#text2', true, '', '', '', '', function() {
									 urlCount += 1;
									 customIntroNxtStep('#viewBrowser' + urlCount);
								 });
							 });
						 });
					});
				});
			});
		});
	});
}

function secondRequest() {
	$('#service1').popover("destroy");
	arrowRevealVertical('#line6', false, function() {
		$('#text3').fadeTo(1000, 1, function() {
			 text = 'In this already servlet instance was created so the servlet container will directly '
				 	+'call the service() method.';
			 popover('#service1','right', text, function() {
				 appendNextBtn(function() {
					 destroyObject();
				 });
			 });
		});
	});
}

function thirdRequest() {
	arrowRevealVertical('#line12', false, function() {
		$('#text5').fadeTo(1000, 1, function() {
			loadClassFile('#file0', '#faFile0', function() {
				appendNextBtn(function() {
					$('#service1').popover("destroy");
					createServletInstance(function() {
						text = 'The service() method recives a request form user and generate corresponding reponse'
						 	+ ' and send it to the user browser.';
						popover('#service1','right', text, function() {
							appendNextBtn(function() {
								$('#service1').popover("destroy");
								requestAndReponse('#line12', '', '', '#content'+ urlCount +'', '#text5', false, '13', '15', '16', '18', function() {
									urlCount += 1;
									customIntroNxtStep('#restartBtn', 'restart');
								});
							});
						});
					});
				});
			});
		});
	});
}

function destroyObject() {
	$(".popover").remove();
	 $('#clock').popover("destroy");
	 requestAndReponse('#line6', '', '', '#content'+ urlCount+'', '#text4', false, 7, 8, 9, 10, function() {
		 zoomInEffect('#destroyIcon', function() {
			 text = 'The servlet container doesnot receive any request from the browser at '
				 + 'certain point of time, after that it destroy all the objects in servlet container.';
			 popover('#clock','bottom', text, function() {
				 appendNextBtn(function() {
					 $('#clock').addClass('opacity00');
					 $(".popover").remove();
					 arrowRevealVertical('#line11', false, function() {
						 $('#destroyObj').popover("destroy");
						 zoomInEffect('#destroyObj', function() {
							 text = 'The service method call the destroy() method it will remove'
								 	+' all the objects present in servlet container.';
							 popover('#destroyObj','right', text, function() {
								 appendNextBtn(function() {
									 $(".popover").remove();
									 $('.svg-line, text').css({'display': 'none'});
									TweenMax.to('.servlet, .service, #destroyIcon, #servletPool', 1, {opacity: 0, onComplete: function() {
										$('.servlet, .service, #destroyIcon, #servletPool, #srltInst').css({'opacity': ''}).addClass('opacity00');
										 urlCount += 1;
										 customIntroNxtStep('#viewBrowser' + urlCount);
									}});
								 });
							 });
						 });
					 });
				 });
			 });
		 });
	 });
}

function requestAndReponse(line1, line2, line3, selector, viewText, flag, val1, val2, val3, val4, callBackFunction) {
	$(line1).css({'marker-end' : ''});
	if (flag) {
		arrowRevealVertical(line2, false, function() {
			arrowRevealVertical(line3, false, function() {
				requestResponse(viewText, selector, function() {
					callBackFunction();
				});
			});	
		});
	} else {
		arrowRevealWithoutArrow(val1, val2, function() {
			arrowRevealWithoutArrow(val3, val4, function() {
				requestResponse(viewText, selector, function() {
					callBackFunction();
				});
			});
		});
	}
}

function requestResponse(viewText, selector, callBackFunction) {
		$(viewText).fadeTo(1000, 1, function() {
			$('#viewBrowser'+ urlCount +' .html-body').css({'overflow' : 'auto', 'z-index' : '1'});
			zoomInEffect(selector, function() {
				callBackFunction();
			});
		});
}

function createServletInstance(callBackFunction) {
	$(".popover, .load").remove();
	fromEffectWithTweenMax('#file0', '#extraText', true, function() {
		$('#file0').css({'opacity': 1});
		zoomInEffect('#servletPool', function() {
			$('#extraText').addClass('opacity00');
			$('#servletInsta').removeClass('opacity00').removeClass('servlet servler-Object');
			$('#servletInsta, #initMethod').popover("destroy");
			fromEffectWithTweenMax('#extraText', '#srltInst', true, function() {
				$('#servletInsta').removeClass('opacity00').addClass('servlet servler-Object');
				text = 'The <span class="ct-code-b-yellow">servlet instance</span> call the <span class="ct-code-b-yellow">init()'
						+ '</span> method';
				arrowRevilAndZoomAndrevilText('#servletInsta', text, '#line2', '#initMethod', function() {
					$('#initMethod').popover("destroy");
					text = 'The <span class="ct-code-b-yellow">init() </span> call the <span class="ct-code-b-yellow">service()'
						+ '</span> method';
					arrowRevilAndZoomAndrevilText('#initMethod', text, '#line3', '#service1', function() {
						$('#service1').popover("destroy");
						callBackFunction();
					});
				});
			});
		});
	});
}

function arrowRevilAndZoomAndrevilText(selector1, text, line1, selector2, callBackFunction) {
	$(selector1).popover("destroy");
	$(".popover").remove();
	popover(selector1,'left', text, function() {
		appendNextBtn(function() {
			$(".popover").remove();		
			arrowRevealVertical(line1, false, function() {
				zoomInEffect(selector2, function() {
					callBackFunction();
				});
			});
		});
	});
}

function requestOne(line1, viewText, selector1, flag, val1, val2, callBackFunction) {
	if (flag) {
		arrowRevealVertical(line1, false, function() {
			requestOneAnimation(viewText, selector1, function() {
				callBackFunction();
			});
		});
	} else {
		arrowRevealWithoutArrow(val1, val2, function() {
			requestOneAnimation(viewText, selector1, function() {
				callBackFunction();
			});
		});
	}
}

function requestOneAnimation(viewText, selector1, callBackFunction) {
	$(viewText).fadeTo(1000, 1, function() {
		zoomInEffect(selector1, function() {
			callBackFunction();
		});
	});
}

function loadClassFile(selector1, selector2,  callBackFunction) {
	$(selector1).popover("destroy");
	$(".popover").remove();
	$(selector1).css({'opacity': 0.5});
	fileLoadingAnimation(selector2, function() {
		text = 'Load a <span class="ct-code-b-yellow">'+ dotClassFiles[arrCount]  +'.class</span> and it will generate '
				+ 'a <span class="ct-code-b-yellow">servlet instance</span> and it can be stored in '
				+ ' <span class="ct-code-b-yellow">servlet instance pool</span> ';
		popover(selector1,'left', text, function() {
			callBackFunction();
		});
	});
}

function fileLoadingAnimation(from, callBackFunction) {
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

function FromfileLoadingAnimation(from, toId,callBackFunction) {
	$('.load').remove();
	$('body').append("<i class='fa fa-spinner fa-pulse fa-3x fa-fw load' style='position: relative; z-index: 10000000; color: #b30047'></i>");
	var l = $(from).offset();
	$('.load').offset({
		'top': l.top,
		'left': l.left - ($(from).outerWidth())
	});
	var l1 = $(from).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($('.load').css('top')) + (l2.top - l1.top);
	var leftLength = parseInt($('.load').css('left')) + (l2.left - l1.left);
	TweenMax.to('.load', 4.5, { top : topLength, left : leftLength, onComplete: function() {
		setTimeout(function() {
			callBackFunction();
		},800);
	}});
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






