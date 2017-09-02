var typingInterval = 5;
var multipleIndirectionOperatorReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#preCode',
			intro : '',
		}, {
			element :'#line1',
			intro : '',
		}, {
			element :'#line7',
			intro : '',
		}, {
			element :'#animationDiv',
			intro : '',
			animateStep : 'zoomingEffect',
			tooltipClass: 'hide',
		}, {
			element :'#line2',
			intro : '',
		}, {
			element :'#xBox',
			intro : '',
		}, {
			element :'#line3',
			intro : '',
		}, {
			element :'#pBox',
			intro : '',
		}, {
			element :'#animationDiv',
			intro : '',
			animateStep : 'firstSvgAnimate',
		}, {
			element :'#line4',
			intro : '',
		}, {
			element :'#qBox',
			intro : '',
		}, {
			element :'#animationDiv',
			intro : '',
			animateStep : 'secondSvgAnimate',
		}, {
			element :'#line5',
			intro : '',
		}, {
			element :'#animationDiv',
			intro : '',
			animateStep : 'bounceEffect',
		}, {
			element :'#line6',
			intro : '',
		}, {
			element :'#consoleId',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preCode':
			var typingContent = "Let us consider an example.";
			TweenMax.to($("#preCode"), 1, {opacity: 1});
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'line1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "A variable <span class='ct-code-b-yellow'>x</span> and a pointer variable <span class='ct-code-b-yellow'>" +
									"p</span> of type int has been declared."; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line7':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>q</span> is a <span class='ct-code-b-yellow'>double pointer variable</span> "+
											"which is used to store the address of another <span class='ct-code-b-yellow'>pointer variable</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The variable <span class='ct-code-b-yellow'>x</span> is initialized with value "+
				"<span class='ct-code-b-yellow'>10</span>."
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here the pointer variable <span class='ct-code-b-yellow'>p</span> is assigned with "+
				"<span class='ct-code-b-yellow'>&x</span> i.e., the address of <span class='ct-code-b-yellow'>x</span> is stored into " +
				"<span class='ct-code-b-yellow'>p</span>."
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here the pointer variable <span class='ct-code-b-yellow'>q</span> is assigned with "+
				"<span class='ct-code-b-yellow'>&p</span> i.e., the address of <span class='ct-code-b-yellow'>p</span> is stored in " +
				"<span class='ct-code-b-yellow'>q</span>."
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here the double pointer <span class='ct-code-b-yellow'>q</span> is assigned with the value "+
									"<span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line6':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = 'This statement prints the value of the double pointer variable <span class="ct-code-b-yellow">**q</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'animationDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'zoomingEffect':
				$('.introjs-helperLayer').one('transitionend', function() {
					boxAnimation("#xBox");
					boxAnimation("#pBox");
					boxAnimation("#qBox", function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = "The variables <span class='ct-code-b-yellow'>q</span>, <span class='ct-code-b-yellow'>p</span> and " +
											"<span class='ct-code-b-yellow'>x</span> are occupies <span class='ct-code-b-yellow'>2 bytes</span>" +
											" of memory with some address (i.e., location of memory). <br><br> Let us assume their addresses to be" +
											" <span class='ct-code-b-yellow'>2036</span>, " +
											"<span class='ct-code-b-yellow'>5036</span> and <span class='ct-code-b-yellow'>3058</span>.";
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$(".introjs-nextbutton").show();	
						});
					});
				});
				break;
			case 'bounceEffect':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "<ul>"+
											"<li>The double pointer variable <span class='ct-code-b-yellow'>q</span> contains the address of "+
											"the single pointer variable <span class='ct-code-b-yellow'>p</span>.<br> i.e., "+
											"<span class='ct-code-b-yellow'>*(*(q))</span> --> "+
											"<span class='ct-code-b-yellow'>*(*(5036))</span>--><span class='ct-code-b-yellow'>*(3058)</span>.</li>"+
											"<li>The single pointer variable <span class='ct-code-b-yellow'>p</span> contains the address of variable "+
											"<span class='ct-code-b-yellow'>x</span> i.e., <span class='ct-code-b-yellow'>*(3058)</span>.</li>"+
											"<li>Here <span class='ct-code-b-yellow'>*(3058)</span> represents value at <span class='ct-code-b-yellow'>"+
												"3058</span>.</li>"+
											"<li>So <span class='ct-code-b-yellow'>q</span> can access the value of "+
											"<span class='ct-code-b-yellow'>x</span>.</li>"+
										"</ul>";
					typing('.introjs-tooltiptext', typingContent, 20, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							$("#input2").addClass("css-circle").effect( "highlight", {color:"white"}, 1000, function() {
								$("#input2").removeClass("css-circle");
								bounceFromEffectWithTimelineMax("#input2", "#xValue", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
				break;
			case 'firstSvgAnimate':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "Here the pointer variable <span class='ct-code-b-yellow'>p</span> has the address of "+
					"<span class='ct-code-b-yellow'>x</span> so it can access the variable <span class='ct-code-b-yellow'>x</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						svgAppend($('#animationDiv'), 'svg1');
						svgMarkerAppend($('#svg1'), 'marker1');
						svgAnimatingLine($('#animationDiv'), $('#box2'), $('#xVariable'), $('#svg1'), 'svgLine1', 'marker1', function() {	
							$(".introjs-nextbutton").show();
						});	
					});
				});
				break;
			case 'secondSvgAnimate':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "Here the pointer variable <span class='ct-code-b-yellow'>q</span> has the address of "+
					"<span class='ct-code-b-yellow'>p</span> so it can access the pointer variable <span class='ct-code-b-yellow'>p</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						svgAppend($('#animationDiv'), 'svg2');
						svgMarkerAppend($('#svg2'), 'marker2');
						svgAnimatingLine($('#animationDiv'), $('#box1'), $('#pVariable'), $('#svg2'), 'svgLine2', 'marker2', function() {	
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			}
			break;
		case 'xBox':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Variable <span class='ct-code-b-yellow'>x</span> is assigned with value <span class='ct-code-b-yellow'>10</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						tweenmaxValueAnimation("#input1", "#xValue", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'pBox':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here the address of <span class='ct-code-b-yellow'>x</span> (i.e., <span class='ct-code-b-yellow'>3058</span>) " + 
									"is stored in <span class='ct-code-b-yellow'>p</span> ";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();	
						tweenmaxValueAnimation("#xBoxAddress", "#pValue", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'qBox':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here the address of <span class='ct-code-b-yellow'>p</span> (i.e., <span class='ct-code-b-yellow'>5036</span>) " +
								"is stored in <span class='ct-code-b-yellow'>q</span> ";	
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();	
						tweenmaxValueAnimation("#pBoxAddress", "#qValue", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'consoleId':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#printText1").removeClass("visibility-hidden");
				var typingContent = $("#printText1").html();
				typing('#printText1', typingContent, '30', 'white', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css({"min-width" : "110px"});
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
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
	marker.style.fill = 'gray';
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

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxValueAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).addClass("css-circle").effect( "highlight", {color:"white"}, 1000, function() {
		$(selector1).removeClass("css-circle");
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1.5, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function bounceFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
}
