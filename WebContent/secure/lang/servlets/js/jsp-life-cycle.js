
var dotClassFiles = ["logIn", "index"];
var phages = ['translationPhage', 'compilationPhage', 'classloadingPhage', 'instantAndInitil', 'requestAndDestroy'];
var count = urlCount = 1, arrCount = 0; 

function jspLifeCycleAnimation() {
	$('line, text').hide();
	viewBrowser();
	displayFileIcons('#dotJspFilesList', 'jsp');
	layearsDisplay();
	introSteps();
}

function layearsDisplay() {
	JspLifeCyclePhagesDiv()
	translatinPhageDivs();
	compilationPhageDivs();
	classloadingPhageDivs();
	lastFourPhages();
}

function viewBrowser() {
	for (var i = 1; i<= 3; i++) {
		displaybrowser('#browser'+ i +'',i);
	}
} 
 
function displaybrowser(selector, num) {  
	$(selector).append('<div class="container col-xs-12 padding0 opacity00" id="viewBrowser'+ num +'">'
				+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
				+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">New Tab</div>'
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
				+ '<div id="content'+ num +'" class="col-xs-12 html-text text-center opacity00 padding00">'
				+ '<img class="image-class" id="welcomePage" src="/secure/lang/servlets/images/login.png"></img></div></div></div>');
}

function displayFileIcons(selector, extension) {
	for (var i = 0; i < dotClassFiles.length; i++ ) {
		$(selector).append('<div class="col-xs-12 margin-top5 padding00" id="fileDiv'+ i +'">'
				+ '<div class="margin-top5 text-center padding00" id="file'+ i +'"><i class="fa fa-file-text-o" id="faFile'+ i +'"></i>'
				+ '<div class="col-xs-12 padding00">'+ dotClassFiles[i] +'.'+ extension +'</div></div></div>');
		if(i == 1) {
			$(selector).append('<div class="col-xs-12 text-center margin-top5 padding00"><i class="fa fa-ellipsis-h"></i><br/>'
				+ '<i class="fa fa-ellipsis-h"></i></div>');
		}
	}
}

function appendNextBtn(callBackFunction) {
	$('#popover' + count).append('<div class="text-right"><a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a></div>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$('.introjs-duplicate-nextbutton').remove();
		callBackFunction();
	});
}

function JspLifeCyclePhagesDiv() {
	for ( var i =  phages.length - 1; i >= 0; i--) {
		if(i == 3) {
			var arr = [ 'initialisation', 'instantiation'];
			$('#servletLifeCycleAnim').append('<div class="col-xs-12 text-center"><div class="margin-top30'
					+ ' text-center " id="'+ phages[i] +'"><div class="col-xs-6 " id='+ arr[0]+'></div>'
					+ '<div class="col-xs-6 " id='+ arr[1] +'></div> </div></div>');
		} else if (i == 4) {
			var arr = ['requestProcessing','destroy'];
			$('#servletLifeCycleAnim').append('<div class="col-xs-12 text-center"><div class="margin-top30'
					+ ' text-center " id="'+ phages[i] +'"><div class="col-xs-6 " id='+ arr[0]+'></div>'
					+ '<div class="col-xs-6" id='+ arr[1] +'></div> </div></div>');
		} else {
			$('#servletLifeCycleAnim').append('<div class="col-xs-12 text-center"><div class="margin-top30'
					+' text-center padding00" id="'+ phages[i] +'"> </div></div>');
		}
		if(i == 0) {
			$('#servletLifeCycleAnim').append('<div class="col-xs-12 margin-top20"></div>');
		}
	}
}

function translatinPhageDivs() {
	$('#translationPhage').append('<div class="opacity00  service text-center padding00" id="translationPhaseDiv">'
			+ '<div id="transl">Translation</div>'
			+ '<div class="col-xs-12 padding00 bg-color translation-phase" id="translationPhase">'
			+ '<div class="margin-top5 text-center padding00 opacity00 jspfile" id="file2">'
			+ '<i class="fa fa-file-text-o" id="faFile2"></i>'
			+ '<div class="col-xs-12 padding00" id="file2Name">logIn.jsp</div>'
			+ '</div></div></div>');
}

function compilationPhageDivs() {
	$('#compilationPhage').append('<div class="opacity00 service text-center padding00" id="compilationPhageDiv">'
			+ '<div id="complilarion">Compilation</div>'
			+ '<div class="col-xs-12 complilarion-phage bg-color" id="complilarionPhase">'
			+ '<div class="col-xs-4 margin-top5 text-center padding00 opacity00 jspfile" id="file3">'
			+ '<i class="fa fa-file-text-o" id="faFile3"></i>'
			+ '<div class="col-xs-12 padding00">logIn.java</div>'
			+ '</div><div class="col-xs-1 padding00 margin-top20 opacity00 jsparr" id="arrow1">'
			+ '<i class="fa fa-arrow-right faa-passing animated" id="linkArrowIcon1"></i>'
			+ '</div><div class="col-xs-2 padding00 margin-top5 padding00 opacity00" id="complIcon">'
			+ '<i class="fa fa-cog fa-spin fa-2x fa-fw"></i>'
			+ '</div><div class="col-xs-1 padding00 margin-top20 opacity00 jsparr" id="arrow2">'			
			+ '<i class="fa fa-arrow-right faa-passing animated" id="linkArrowIcon2"></i>'
			+ '</div><div class="col-xs-2 margin-top5 text-center padding00 opacity00 jspfile" id="file4">'
			+ '<i class="fa fa-file-text-o" id="faFile4"></i>'
			+ '<div class="col-xs-12 padding00">logIn.class</div>'
			+ '</div></div>');
}

function classloadingPhageDivs() {
	$('#classloadingPhage').append('<div class="opacity00 service text-center padding00" id="classLoadingPhageDiv">'
			+ '<div id="complilarion">Classloading</div>'
			+ '<div class="col-xs-12 classloading-phage bg-color" id="classloadingPhage">'
			+ '<div class="col-xs-4 margin-top5 text-center padding00 opacity00 jspfile" id="file5">'
			+ '<i class="fa fa-file-text-o" id="faFile5"></i>'
			+ '<div class="col-xs-12 padding00">logIn.class</div>'
			+ '</div><div class="col-xs-2 padding00 margin-top20 opacity00 jsparr" id="arrow3">'
			+ '<i class="fa fa-arrow-right faa-passing animated " id="linkArrowIcon3"></i>'
			+ '</div> <div class="col-xs-6 margin-top20 padding00 servlet opacity00" id="serltInstnce">'
			+ '<div class="col-xs-12">Servlet Instance </div>'
			+ '</div> <div class="col-xs-12 padding00 margin-top5"></div>'
			+ '</div>');
}

function instantiationPhageDiv(id0, id1, title, className, id2, id3, dspText) {
	$(id0).append('<div class="opacity00 service text-center padding00" id='+ id1 +'>'
			+ '<div id="transl">'+ title +'</div>' 
			+ '<div class="col-xs-12 padding00 bg-color '+ className +'" id='+ id2 +'>'
			+ '<div class="margin-top5"><div class="text-center padding00 servlet inline-block opacity00" id='+ id3 +'>'+dspText
			+ '</div><div class="margin-top5"></div></div></div></div>');
	
}

function lastFourPhages() {
	console.log('Hai');
	instantiationPhageDiv('#instantiation', 'instantiationPhaseDiv', 'Instantiation', 'instantiation-phase', 'instantiationPhase', 'instantiationObject', 'Servlet Instantiation');
	instantiationPhageDiv('#initialisation','initialisationPhaseDiv', 'Initialisation', 'initialisation-phase', 'initialisationPhase', 'initialisationMethd', 'jspInit()');
	instantiationPhageDiv('#requestProcessing', 'requestPhaseDiv', 'Request Processing', 'request-phase', 'requestPhase', 'serviceMethd', '_jspService()');
	instantiationPhageDiv('#destroy', 'destroyPhaseDiv', 'destroy', 'destroy-phase', 'destroyPhase', 'destroyMethd', 'jspDestroy()');
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
					text = 'Please enter the url <span class="ct-code-b-yellow">www.codetantra.com/login.jsp</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('#url' + urlCount).attr('disabled', false).focus();
						introNextSteps('#animationDiv', 'ctReqWel'+ urlCount +'', 'top');
						urlVerification('#url'+ urlCount, 'www.codetantra.com/login.jsp', true);
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
	text = 'Here we will learn the working of <span class="ct-code-b-yellow">JSP Life Cycle</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function firstRequest(selector1, url, line, lineTxt) {
	requestToLoad('#loadImg1','#url1', 'www.codetantra.com/login.jsp/', function() {
		zoomInEffect('#servletContainer', function() {
			requestOne('#line1', '#text1', '#servletJspFolder', true, '', '', function() {
				commomFunction('#text2', true);
			});
		});
	});
}

function thirdRequest() {
	requestToLoad('#loadImg' + urlCount,'#url' + urlCount, 'www.codetantra.com/login.jsp/', function() {
		$(".popover").remove();
		$('#servletContainer').popover('destroy');
		arrowRevealVertical('#line17', false, function() {
			$('#text5').fadeTo(1000, 1, function() {
				commomFunction('#text6', false);
			});
		});
	});
}


function commomFunction(vtext, flag) {
	checkIfJspFilePresentOrNot(function() {
		$('#fileDiv0').addClass('blinking');
		$('.popover').remove();
		$('#servletContainer').popover("destroy");
		$('#fileDiv0').removeClass('blinking');
		translationPhageAnimation(function() {
			complilarionPhaseAnimation(function() {
				classloadingPhageAnimation(function() {
					
					text = 'This is an <span class="ct-code-b-yellow">instantiation</span> phage.';
					instantiationPhageAnimation('#instantiationPhaseDiv', text, '#instantiationObject', '#line5', 'left', function() {
						text = 'This is an <span class="ct-code-b-yellow">initialisation</span> phage called by the '
							+' <span class="ct-code-b-yellow">servlet instance</span> object.';
						instantiationPhageAnimation('#initialisationPhaseDiv', text, '#initialisationMethd', '#line6', 'left', function() {
							text = 'The <span class="ct-code-b-yellow">service()</span> method recives a request '
									+'form user and generate corresponding reponse and send it to the user browser.';
							instantiationPhageAnimation('#requestPhaseDiv', text, '#serviceMethd', '', 'right', function() {
								if(flag) {
									arrowRevealVertical("#line7", false, function() {
										arrowRevealVertical('#line8', false, function() {
											fileLoading(vtext);
										});
									});
								} else {
									$('#line17').css({'marker-end' : ''});
									arrowRevealWithoutArrow(18, 20, function(){
										arrowRevealWithoutArrow(21, 23, function(){
											fileLoading(vtext);
										});
									});
								}
							});
						});
					});
				});
			});
		});
	});
}

function fileLoading(text) {
	loadingTitle('#loadImg' + urlCount, '#url'+urlCount, 'ct-logo.png','codetantra/#login', 'codetantra.', function() {
		requestResponse(text, '#content'+ urlCount, function() {
			urlCount += 1;
			if (text != "#text6") {
				customIntroNxtStep('#viewBrowser' + urlCount);
			} else {
				customIntroNxtStep('#restartBtn', 'restart');
			}
		});
	});
}

function secondRequest() {
	$('#requestPhaseDiv').popover("destroy");
	requestToLoad('#loadImg2','#url2', 'www.codetantra.com/login.jsp/', function() {
		arrowRevealVertical('#line9', false, function() {
			$('#text3').fadeTo(1000, 1, function() {
				 text = 'In this already servlet instance was created so the servlet container will directly '
					 	+'call the service() method.';
				 popover('#requestPhaseDiv','right', text, function() {
					 appendNextBtn(function() {
						 destroyObject();
					 });
				 });
			});
		});
	});
}

function destroyObject() {
	$(".popover").remove();
	 $('#clock').popover("destroy");
	 requestAndReponse('#line9', '', '', '#content'+ urlCount+'', '#text4', false, 10, 12, 13, 15, function() {
		 loadingTitle('#loadImg2', '#url2', 'ct-logo.png','codetantra/#login', 'codetantra.', function() {
			 zoomInEffect('#destroyIcon', function() {
				 text = 'The servlet container doesnot receive any request from the browser at '
					 + 'certain point of time, after that it destroy all the objects in servlet container.';
				 popover('#clock','bottom', text, function() {
					 appendNextBtn(function() {
						 $('#clock').addClass('opacity00');
						 $(".popover").remove();
						 arrowRevealVertical('#line16', false, function() {
							 $('#destroyPhaseDiv').popover("destroy");
							 zoomInEffect('#destroyPhaseDiv', function() {
								 $('#destroyMethd').removeClass('opacity00');
								 text = 'The service method call the destroy() method it will remove'
									 	+' all the objects present in servlet container.';
								 popover('#destroyPhaseDiv','right', text, function() {
									 appendNextBtn(function() {
										 $(".popover").remove();
										 $('.svg-line, text').css({'display': 'none'});
										TweenMax.to('.servlet, .service, #destroyIcon, #servletPool', 1, {opacity: 0, onComplete: function() {
											$('.servlet, .service, #destroyIcon, #servletPool, #srltInst').css({'opacity': ''}).addClass('opacity00');
											$('.jspfile, .jsparr, #complIcon').addClass('opacity00');
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


function requestResponse(viewText, selector, callBackFunction) {
		$(viewText).fadeTo(1000, 1, function() {
			$('#viewBrowser'+ urlCount +' .html-body').css({'overflow' : 'auto', 'z-index' : '1'});
			zoomInEffect(selector, function() {
				callBackFunction();
			});
		});
}

function checkIfJspFilePresentOrNot(callBackFunction) {
	text = 'The <span class="ct-code-b-yellow">servlet container</span> checks wether the given'
			+ ' <span class="ct-code-b-yellow">login.jsp</span> corressponding object is created or not,'
			+ '<br/>Here, there is no object is created for the <span class="ct-code-b-yellow">login.jsp</span>'
			+ ' so see how the <span class="ct-code-b-yellow">JSP life cycle</span> works internally. '
	popover('#servletContainer','left', text, function() {
		appendNextBtn(function() {
			callBackFunction();
		});
	});
}

function translationPhageText(callBackFunction) {
	text = 'In this <span class="ct-code-b-yellow">translation phage</span>, the <span class="ct-code-b-yellow">login.jsp</span>'
			+' file is converted into <span class="ct-code-b-yellow">login.java</span> file.';
	popover('#translationPhaseDiv','left', text, function() {
		appendNextBtn(function() {
			fromEffectWithTweenMax('#fileDiv0', '#file2', function () {
				callBackFunction();
			});
		});
	});
}

function complilarionPhaseText(callBackFunction) {
	text = 'In this <span class="ct-code-b-yellow">compilartion phage</span>, the <span class="ct-code-b-yellow">login.java</span>'
			+' file compiled and generates <span class="ct-code-b-yellow">login.class</span> file.';
	popover('#compilationPhageDiv','left', text, function() {
		appendNextBtn(function() {
			fromEffectWithTweenMax('#file2', '#file3', function () {
				callBackFunction();
			});
		});
	});
}

function classloadingPhageText(callBackFunction) {
	text = 'In this <span class="ct-code-b-yellow">class loading phage</span>, the <span class="ct-code-b-yellow">login.class</span>'
			+' file is loaded and generates <span class="ct-code-b-yellow">servlet instance</span> object.';
	popover('#classLoadingPhageDiv','left', text, function() {
		appendNextBtn(function() {
			fromEffectWithTweenMax('#file4', '#file5', function () {
				callBackFunction();
			});
		});
	});
}

function instantiationPhageText(selector1, text, position, callBackFunction) {
	popover(selector1, position, text, function() {
		appendNextBtn(function() {
			callBackFunction();
		});
	});
}

function translationPhageAnimation(callBackFunction) {
	$('.popover').remove();
	$('#translationPhaseDiv').popover('destroy');
	zoomInEffect("#translationPhaseDiv",function() {
		translationPhageText(function() {
			setTimeout(function() {
				TweenMax.to($('#file2'), 0.5, {rotationX : -90, onComplete:function() {
					$('#file2Name').text('login.java');
					TweenMax.to($('#file2'),0.5, {rotationX : 0, onComplete:function() {
						$('.popover').remove();
						arrowRevealVertical("#line2", false, function() {
							callBackFunction();
						});
					}});
				}});
			},500);
		});
	});
}

function complilarionPhaseAnimation(callBackFunction) {
	$('.popover').remove();
	$('#compilationPhageDiv').popover('destroy');
	zoomInEffect("#compilationPhageDiv",function() {
		complilarionPhaseText(function() {
			$('#linkArrowIcon1').addClass("faa-passing");
			$('#complIcon > i').addClass("fa-spin");
			$('#linkArrowIcon2').addClass("faa-passing");
			zoomInEffect("#arrow1", function() {
				zoomInEffect('#complIcon', function() {
					$('#linkArrowIcon1').removeClass("faa-passing");
					zoomInEffect("#arrow2", function() {
						zoomInEffect('#file4',function() {
							$('#complIcon > i').removeClass("fa-spin");
							$('#linkArrowIcon2').removeClass("faa-passing");
							$('.popover').remove();
							arrowRevealVertical("#line3", false, function() {
								callBackFunction();
							});
						});
					});
				})
			})
		});
	});
}

function classloadingPhageAnimation(callBackFunction) {
	$('.popover').remove();
	$('#classLoadingPhageDiv').popover('destroy');
	zoomInEffect('#classLoadingPhageDiv', function() {
		classloadingPhageText(function() {
			$('#linkArrowIcon3').addClass("faa-passing");
			fileLoadingAnimation('#faFile5', function() {
				zoomInEffect("#arrow3", function() {
					$('.fa-spinner').remove()
					zoomInEffect('#serltInstnce', function() {
						$('#linkArrowIcon3').removeClass("faa-passing");
						arrowRevealVertical("#line4", false, function() {
							callBackFunction();
						});
					});
				});
			});
		});
	});
}

function instantiationPhageAnimation(selector1, text, selector2, line1, position, callBackFunction) {
	$('.popover').remove();
	$(selector1).popover('destroy');
	zoomInEffect(selector1, function() {
		instantiationPhageText(selector1, text, position, function() {
			zoomInEffect(selector2, function() {
				$(selector1).popover("destroy");
				$('.popover').remove();
				if(selector2 == "#serviceMethd") {
					$("#line1").css({'marker-end' : ''});
				}
				arrowRevealVertical(line1, false, function() {
					callBackFunction();
				});
			});
		});
	});
}


function requestToLoad(id1, id2, url, callBackFunction) {
	$(id1).text('').append('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>Connecting...');
	$(id2).val(url);
	callBackFunction();
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

function loadingTitle(selector1, selector2, img, jspName, textafterLoad, callBackFunction) {
	$(selector1).text('').append('<img id="img'+ arrCount +'"src="/secure/lang/servlets/images/'+ img +'"></img>'+ textafterLoad +'')
	$(selector2).val('https://accounts..../'+ jspName +'')
		callBackFunction();
}

function requestResponse(viewText, selector, callBackFunction) {
	$('#viewBrowser'+ urlCount +' .html-body').css({'overflow' : 'auto', 'z-index' : '1'});
	$(viewText).fadeTo(1000, 1, function() {
		zoomInEffect(selector, function() {
			callBackFunction();
		});
	});
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

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector),1, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass('opacity00');
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
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