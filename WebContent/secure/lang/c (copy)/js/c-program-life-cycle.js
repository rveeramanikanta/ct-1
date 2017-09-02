var introjs;
var count = 0;

var cProgramLifeCycle = function() {
	initIntroJS();
	
	svgAppend("#outSideDiv", "svg");
	svgMarkerAppend("#svg", "arrow");
	
	$("#restart").click(function() {
		location.reload();
	});
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
					element: '#heading',
					intro: '',
					position: 'right'
				}, {
					element: '#mainDiv',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#mainDiv',
					intro: '',
					tooltipClass: 'hide',
					position: 'right'
				}, {
					element: '#insideDiv',
					intro: '',
					tooltipClass: 'hide',
					position: 'right'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
			
			case "heading":
				var text = "Let us learn the steps involved in writing and executing a <b class='ct-code-b-yellow'>C</b> program.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();	
				});
				break;
				
			case "mainDiv":
				if (introjs._currentStep == 1) {
					$('.introjs-helperLayer').one('transitionend', function() {
						$(".step1, #step1Text").removeClass("opacity00");
						var text = $("#step1Text").html();
						typing('#step1Text', text, function() {
							$("#sourceCode").fadeTo(1000, 1, function() {
								$(".step1").popover({
									placement: 'left',
									/* viewport: $("#firstId"), */
									html: true,
									trigger: 'focus',
									content: '<div id="popover1"></div>',
								}).popover('show');
								$(".popover").css({"top" : "0px;"});
								var text = "We can use any text editor to write a <b class='ct-code-b-yellow one'>C</b> program.";
								typing("#popover1", text, function() {
									$('#popover1').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="userButton(1)">Next &#8594;</span></div>');
								});
							});
						});
					});
				} else {
					($("#popover1").parent()).css({"background-color":"lightgray", "color":"black"});
					$(".one").addClass("ct-blue-color");
					$("#saveDiv").removeClass("hide");
					introjs.refresh();
					$('.introjs-helperLayer').one('transitionend', function() {
						$(".step2, #step2Text").removeClass("opacity00");
						$(".step2").css({'bottom':'5px;'});
						var text = $("#step2Text").html();
						typing('#step2Text', text, function() {
							introjs.refresh();
							$(".step2").popover({
								placement: 'left',
								html: true,
								trigger: 'focus',
								content: '<div id="popover2"></div>',
							}).popover('show');
							var text = "The file name in which the <b class='ct-code-b-yellow two'>C</b> code is written should" 
										+ " end with <span class='ct-code-b-yellow two'>.c</span> extension.";
							typing("#popover2", text, function() {
								$('#popover2').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="saveFile()">Next &#8594;</span></div>');
							});
						});
					});
				}
				break;
					
			case "insideDiv":
				introjs.refresh();
				if (introjs._currentStep == 3) {
					($("#popover2").parent()).css({"background-color":"lightgray", "color":"black"});
					$(".two").addClass("ct-blue-color");
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#compilationDiv").removeClass("opacity00");
						$(".step3, #step3Text").removeClass("opacity00");
						var text = $("#step3Text").html();
						typing('#step3Text', text, function() {
							$(".step3").popover({
								placement: 'left',
								html: true,
								trigger: 'focus',
								content: '<div id="popover9"></div>'
							}).popover('show');
							var text = "Compilation has two main steps<br>1 - Object file creation and <br>2 - Linking<br>" 
										+ "Compilation is performed by executing the command <br>" 
										+ "<span class='compilation-style'>cc -o Hello.out Hello.c</span>."
										+ "<br><br>Compilation will generate <b class='ct-code-b-yellow three'>Hello.obj</b> file, "
										+ "if there are no syntax errors.<br/><br>";
							typing('#popover9', text, function() {
								$("#popover9").append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="compilationFile()">Next &#8594;</span></div>');
							});
						});
					});
				} else if (introjs._currentStep == 4) {
					$("#compilationIcon").popover('hide');
					($("#popover9").parent()).css({"background-color":"lightgray", "color":"black"});
					$(".three").addClass("ct-blue-color");
					objectFile();
				} else if (introjs._currentStep == 5) {
					linkingFile();
				} else {
					($("#popover5").parent()).css({"background-color":"lightgray", "color":"black"});
					$(".four").addClass("ct-blue-color");
					$("#fifthStep").popover('hide');
					outputFile();
				}
				break;
				
			case "restart":
				($("#popover7").parent()).css({"background-color":"lightgray", "color":"black"});
				$(".five").addClass("ct-blue-color");
				$("#insideDiv").addClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart";
					typing('.introjs-tooltiptext', text);
				});
				break;

		}
	});
	
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval": "5",
		"cursor_color": "white",
	}, function() {
		$(selector).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function nextStep() {
	$('.popover-height').remove();
	introjs.nextStep();	
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'red';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Left side to selector2 Right side
function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//from selector1 Top side to selector2 Bottom side
function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//saving File step
function saveFile() {
	$('.popover-height, .custom-btn').remove();
	$("#sourceFileIcon").removeClass("opacity00").addClass("faa-passing animated");
	introjs.refresh();
	$("#fileAboveText").removeClass("opacity00").addClass("loading");
	$("#sourceFile").fadeTo(3000, 1, function() {
		$("#sourceFile").css({opacity: '0.5'});
		$("#sourceFileIcon").removeClass("faa-passing");
		$("#fileAboveText").text("Saved").removeClass("loading");
		$("#fileBelowText").removeClass("opacity00");
		$("#fileBelowText").addClass("pulse").one('animationend', function() {
			$("#compilationDiv").addClass("opacity00").removeClass("hide");
			$('#popover2').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="nextStep()">Next &#8594;</span></div>');
		});
	});
}

//compilation file step
function compilationFile() {
	$('.popover-height, .custom-btn').remove();
	$("#compilationArrow").removeClass("opacity00").addClass('faa-passing');
	introjs.refresh();
	$("#compilationAboveText").removeClass("opacity00").addClass("loading");
		$("#compilationIcon").fadeTo(1500, 1, function() {
		$("i").removeClass("faa-passing");
		setTimeout(function() {
			$("#compilationAboveText").text("Compiled").removeClass("loading");
			$("#compilationIcon").addClass("fa-spin");
			setTimeout(function() {
				$("#compilationIcon").removeClass("fa-spin");
				svgMarkerAppend("#svg", "arrow1");
				svgAnimatingLineRightToLeft("#outSideDiv", "#compilationIcon", "#span2", "svg", "line1", "arrow1", function() {
					$("#arrow1").css({opacity: '0'});
					svgMarkerAppend("#svg", "arrow2");
					svgAnimatingLineTopToBottom("#outSideDiv", "#span2", "#span1", "svg", "line2", "arrow2", function() {
						$("#arrow2").css({opacity: '0'});
						svgAnimatingLineLeftToRight("#outSideDiv", "#span1", "#sourceCode", "svg", "line3", "arrow", function() {
							$("#errorText, .error-text").removeClass("opacity00");
							var text = $("#errorText").html();
							typing('#errorText', text, function() {
								var newStep = getStep('#insideDiv', '', 'hide', 'right');
								introjs.insertOption(introjs._currentStep + 1, newStep);
								$("#popover9").append('<div class="append-text"></div>')
								var text = "If there are compilation errors we will have to correct the code and repeat the same steps.";
								typing(".append-text", text, function() {
									$('#popover9').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="nextStep()">Next &#8594;</span></div>');
								});
							}); 
							
						}); 
					});
				});
			}, 800);
		}, 800);
	});
}

//user button
function userButton(count) {
	$('.custom-btn, .popover-height').remove();
	count++;
	if (count == 1) {
		$("#errorText, .error-text").removeClass("opacity00");
		var text = $("#errorText").html();
		typing('#errorText', text, function() {
			svgMarkerAppend("#svg", "arrow1");
			svgAnimatingLineRightToLeft("#outSideDiv", "#compilationIcon", "#span2", "svg", "line1", "arrow1", function() {
				$("#arrow1").css({opacity: '0'});
				svgMarkerAppend("#svg", "arrow2");
				svgAnimatingLineTopToBottom("#outSideDiv", "#span2", "#span1", "svg", "line2", "arrow2", function() {
					$("#arrow2").css({opacity: '0'});
					svgAnimatingLineLeftToRight("#outSideDiv", "#span1", "#sourceCode", "svg", "line3", "arrow", function() {
						var newStep = getStep('#insideDiv', '', 'hide', 'right');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						$("#popover9").append('<div class="append-text"></div>')
						var text = "If there are compilation errors we will have to correct the code and repeat the same steps.";
						typing(".append-text", text, function() {
							$('#popover9').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="nextStep()">Next &#8594;</span></div>');
						});
					}); 
					
				}); 
			});
		});
	} else if(count == 2) {
		$("#preTab").removeClass("opacity00");
		var text = $("#preTab").html();
		typing("#preTab", text, function() {
			setTimeout(function() {
				introjs.nextStep();
			}, 800);
		});
	}
}

//creating object file
function objectFile() {
	$("#objFile").removeClass("hide");
	introjs.refresh();
	$('.introjs-helperLayer').one('transitionend', function() {
		$("#binaryArrow").removeClass("opacity00").addClass('faa-passing animated');
		introjs.refresh();
		$("#binaryAboveText").removeClass("opacity00").addClass("loading");
		$("#binaryImg").fadeTo(1500, 1, function() {
			$("i").removeClass("faa-passing");
			$("#binaryAboveText").text("Generated").removeClass("loading");
			$("#binaryBelowText").removeClass("opacity00").addClass("pulse").one('animationend', function() {
				var newStep = getStep('#insideDiv', '', 'hide', 'right');
				introjs.insertOption(introjs._currentStep + 1, newStep);
				setTimeout(function() {
					introjs.nextStep();
				}, 700);
			});
		});
	});
}

//linking file
function linkingFile() {
	$("#linking").removeClass("hide");
	introjs.refresh();
	$('.introjs-helperLayer').one('transitionend', function() {
		$(".step4, #step4Text").removeClass("opacity00");
		var text = $("#step4Text").html();
		typing('#step4Text', text, function() {
			$("#linkArrowIcon").removeClass("opacity00").addClass("faa-passing animated");
			introjs.refresh();
			$("#linkAboveText").removeClass("opacity00").addClass("loading");
			$("#linkIcon").fadeTo(1500, 1, function() {
				$("i").removeClass("faa-passing");
				$("#linkAboveText").text('linked').removeClass("loading");
				$("#fourthStep").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover5"></div>'
				}).popover('show');
				var text = "<span class='ct-code-b-yellow four'>Linker</span> links <span class='ct-code-b-yellow four'>one</span>"
							+ " or <span class='ct-code-b-yellow four'>more object files</span> into a"
							+ " <span class='ct-code-b-yellow four'>single executable file</span>. These executable files can have any extension.<br><br>"
							+ " For example in Windows operating system, these executable files usually have"
							+ " <span class='ct-code-b-yellow four'>.exe</span> extension.";
				typing('#popover5', text, function() {
					$('#popover5').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="executionFile()">Next &#8594;</span></div>');
				});
			});
		});
	});
}

//exe file
function executionFile() {
	$('.popover-height, .custom-btn').remove();
	$("#linkIcon").addClass("fa-spin");
	setTimeout(function() {
		$("#linkIcon").removeClass("fa-spin");
		$("#exeFileDiv").removeClass("hide");
		introjs.refresh();
		$("#exeFileArrow").removeClass("opacity00").addClass('faa-passing animated');
		$("#exeFile").fadeTo(1000, 1, function() {
			$("#exeFile").css({opacity: '0.7'});
			$("i").removeClass("faa-passing");
			$("#exeBelowText").removeClass("opacity00").addClass("pulse").on('animationend', function() {
				var newStep = getStep('#insideDiv', '', 'hide', '');
				introjs.insertOption(introjs._currentStep + 1, newStep);
				$('#popover5').append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="nextStep()">next &#8594;</span></div>')
			});
		});
	}, 1000);
}

//output file
function outputFile() {
	$("#outputDiv").removeClass("hide");
	introjs.refresh();
	$('.introjs-helperLayer').one('transitionend', function() {
		$(".step5, #step5Text").removeClass("opacity00");
		var text = $("#step5Text").html();
		typing('#step5Text', text, function() {
			$("#outputArrow").removeClass("opacity00").addClass('faa-passing animated');
			$("#output").fadeTo(1000, 1, function() {
				setTimeout(function() {
					$("i").removeClass("faa-passing");
					$(".step5").popover({
						placement: 'left',
						html: true,
						trigger: 'focus',
						content: '<div id="popover7"></div>'
					}).popover('show');
					var text = "If there are <span class='ct-code-b-yellow five'>no runtime errors</span>, system generates the required "
								+ "<span class='ct-code-b-yellow five'>output</span>.";
					typing('#popover7', text, function() {
						$("#outputBody").removeClass("opacity00");
						var text = $("#outputText").html();
						typing('#outputText', text, function() {
							$("#popover7").append('<div class="popover-height"><span class="introjs-button custom-btn" onclick="nextStep()">Next &#8594;</span></div>');
						});
					});
				}, 1000);
			});
		});
	});
}

//dynamic steps
function getStep(element, intro, tooltipClass, position) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}