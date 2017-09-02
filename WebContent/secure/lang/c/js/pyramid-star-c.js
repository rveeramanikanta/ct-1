var typingSpeed = 5;
var intro;
var tl;

var pyramidStarCReady = function() {
	tl = new TimelineLite();
	$('#rowValue').attr('contenteditable','false');
	
	$("#rowValue").on("click keydown keyup", function(e) {
		var max = $(this).attr("maxlength");
		$(".error-msg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
			$(".introjs-tooltiptext").append("<div class='error-msg'>Empty value is not allowed</div>");
		} else {
			$(".introjs-nextbutton").show();
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.which < 49 || e.which > 57))&& ((e.keyCode < 97) || (e.keyCode > 105))) {
                e.preventDefault();
        }
		
		if ($(this).text().length > max) {
			if($(this).attr("id") == "rowValue") {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 1.</div>");
			}
			e.preventDefault();
		}
	});
	
	

	
	
	console.log("I am ready");
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#starDisplay",
			intro : "",
			position : "bottom"
		}, {
			element : "#codeDiv",
			intro : "",
			position : "right",
			action : "sampleCode"
		}, {
			element : "#variableDeclaration",
			intro : "",
			position : "right"
		}, {
			element : "#memoryIntDiv",
			intro : "",
			position : "right"
		}, {
			element : "#getPrintf",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action : "printfText"
		}, {
			element : "#getScanf",
			intro : "",
			position : "right"
		}, {
			element : "#outputDiv",
			intro : "",
			position : "left",
			action : "printfValue"
		}, {
			element : "#rowBox",
			intro : "",
			position : "top"
		}, {
			element : "#assignStar",
			intro : "",
			position : "bottom"
		}, {
			element : "#starBox",
			intro : "",
			position : "bottom"
		}, {
			element : "#totalForLoop",
			intro : "",
			position : "top",
			action : "execute"
		}]});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "starDisplay":
			$(".introjs-nextbutton").hide();
        	var text = "Following sample code will produce this output if user enter number of rows is equal to 9.";
        	typing(".introjs-tooltiptext", text, function() {
        		$(".introjs-nextbutton").show();
        	});
        	break;
        	
		case "codeDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var action = intro._introItems[intro._currentStep].action;
				switch(action) {
				case "sampleCode":
					var text = "sample code.";
		        	typing(".introjs-tooltiptext", text, function() {
		        		$(".introjs-nextbutton").show();
		        	}); 
					break;
				}
			});
        	break;
        	
		case "rowBox":
			$('#rowValue').attr('contenteditable','false');
			$(".introjs-nextbutton").hide();
			$('#rowMemory').text($('#rowValue').text());
			$('.introjs-helperLayer ').one('transitionend', function() {
				console.log('i am rowbox');
				$('#rowMemory').removeClass('opacity00');
				$('#rowMemory').addClass('circle-css');
				var pos = $('#rowValue').offset();
				$('#rowMemory').offset({"top":pos.top,"left":pos.left});
				TweenMax.to("#rowMemory", 2, {top : 0, left : 0,onComplete : function() {
						$('#rowMemory').removeClass('circle-css');
						$(".introjs-nextbutton").show();
				}});
			});
        	break;
        	
		case "variableDeclaration":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "integer variable <b class ='ct-code-b-yellow'>rows,i,j,k</b> are declared.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton").show();
	        	});
			});
        	break;
        	
		case "totalForLoop":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var action = intro._introItems[intro._currentStep].action;
				switch(action) {
				case "execute":
					$('#totalForLoop').addClass('z-index');
					$(".introjs-tooltiptext").append("<ul id='ulTag'></ul>");
					firstForLoopExe();
					break;
				case "codeDivAterSpace":
					jIncrementStep();
				break;
				}
			});
        	break;
        	
		case "getPrintf":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
			}, 1000);
			});
        	break;
        	
		case "assignStar":
			$('#consoleBodyDiv1').append("<div id='spaceDiv'></div>");
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<b class ='ct-code-b-yellow'>char</b> data type variable is declared i.e: <b class ='ct-code-b-yellow'>star</b>.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton").show();
	        	});
			});
        	break;
        	
		case "starBox":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#starBox').removeClass('opacity00');
				$('#assignStar').addClass("zIndex");
				$('#starBox').toggleClass('animated zoomIn').one('animationend', function() {
					$('#starValue').removeClass("opacity00");
					$('#assignStar').removeClass("zIndex");
					var text = "One byte of memory is allocated to char data type variable.";
		        	typing(".introjs-tooltiptext", text, function() {
		        		$(".introjs-nextbutton").show();
		        	});
				});
			});
        	break;
        	
		case "outputDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var action = intro._introItems[intro._currentStep].action;
				switch(action) {
				case "printfText":
					$('#animationDivText').removeClass('opacity00');
						setTimeout(function() {
							intro.nextStep();
					}, 1000);
					break;
				case "printfValue":
					$('#rowValue').attr('contenteditable','true');
					$('.introjs-nextbutton').hide();
						$('.matrix').removeClass('opacity00');
						charAtEnd('rowValue');
						 var text ="Enter a value for number of rows.";
						typing(".introjs-tooltiptext", text, function() {
		 				});
					break;
					
				case "spacePrint":
					$("#spaceDiv *").removeAttr("id");
					$('#spaceDiv').append("<span class='outline-none' contenteditable='true' spellcheck='false' id='consoleSpace'>&nbsp;</span>");
					$('#consoleSpace').keydown(function(e) {
						e.preventDefault();
					});
					charAtEnd('consoleSpace');
					setTimeout( function () {
						forLoopCodeDynamicStep();
						intro.nextStep();
					}, 3000);
					break;
				}
			});
			
        	break;
        	
		case "getScanf":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<b class ='ct-code-b-yellow'>scanf()</b>function reads one integer value as row size.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton").show();
	        	});
			});
        	break;
        	
		case "memoryIntDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#variableDeclaration").addClass("zIndex").effect("highlight", {color: 'yellow'}, 2000, function() {
					$('#rowBox').removeClass('opacity00');
					$('#rowBox').toggleClass('animated zoomIn').one('animationend', function() {
						
					});
					$('#iBox').removeClass('opacity00');
					$('#iBox').toggleClass('animated zoomIn').one('animationend', function() {
						
					});
					$('#jBox').removeClass('opacity00');
					$('#jBox').toggleClass('animated zoomIn').one('animationend', function() {
						
					});
					$('#kBox').removeClass('opacity00');
					$('#kBox').toggleClass('animated zoomIn').one('animationend', function() {
						$('.zIndex').removeClass('zIndex');
						var text = "<b class ='ct-code-b-yellow'>Two</b> bytes of memory is allocated to each <b class ='ct-code-b-yellow'>int</b>"
											+ " data type of variable.";
			        	typing(".introjs-tooltiptext", text, function() {
			        		$(".introjs-nextbutton").show();
			        	});
					});
					
				});
			});
        	break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
    $('.introjs-prevbutton').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function firstForLoopExe() {
	$('.introjs-tooltip').css("min-width","350px");
	$(".introjs-tooltiptext #ulTag").append("<li><b class ='ct-code-b-yellow opacity00' id='iDeclaration'> i = <span id='iVal'>0</span></b></li>");
	var pos1 =  $("#forLoopI").offset();
	$("#iDeclaration").offset({"top": pos1.top, "left": pos1.left});
	$("#forLoopI").effect("highlight", {color: 'yellow'}, 1000, function() {
		tl.to("#iDeclaration", 1, {opacity: 1, top:0, left:0, onComplete: function() {
			$('#iDeclaration').removeClass('opacity00');
			$('#iBox').addClass("zIndex");
			$('#iMemory').addClass('circle-css');
			var pos2 = $('#iVal').offset();
			$("#iMemory").offset({"top": pos2.top, "left": pos2.left});
			$('#iMemory').removeClass('opacity00');
			$('.introjs-tooltipReferenceLayer').css('z-index',"1000000");
			 tl.to("#iMemory", 1, {opacity: 1, top:0, left:0, onComplete: function() {
				$('#iMemory').removeClass('circle-css');
				iCondition();
			}});   
		}});
	});
}

function iCondition() {
	$(".introjs-tooltiptext #ulTag").append("<li><b class ='ct-code-b-yellow opacity00' id='tooltipIConditon'>"
	+"<span id='iCondtionI' class='display-inline-block'> i </span> < <span id='iConditonRows' class='display-inline-block'>rows</span></b></li>");
	var pos1 =  $("#iCondition").offset();
	$("#tooltipIConditon").offset({"top": pos1.top, "left": pos1.left});
	$("#iCondition").effect("highlight", {color: 'yellow'}, 1000, function() {
		tl.to("#tooltipIConditon", 1, {opacity: 1, top:0, left:0, onComplete: function() {
			$('#tooltipIConditon').removeClass('opacity00');
			flipEffect("#iConditonRows",$('#rowMemory').text(), function() {
				flipEffect("#iCondtionI",$('#iMemory').text(), function() {
					var text = "";
					if (parseInt($('#iMemory').text()) < parseInt($('#rowMemory').text())) {
						text = "evaluates to  <span class='ct-code-b-yellow'>true</span>....."
					} else {
						text = "evaluates to  <span class='ct-code-b-red'>false</span>....."
					}
					$("#tooltipIConditon").append("&emsp;<span class='display-inline-block color-white'></span>");
					typing($("#tooltipIConditon > span:last-child"), text, function() {
						if (parseInt($('#iMemory').text()) < parseInt($('#rowMemory').text())) {
							secondForLoopExe();
						} else {
							finalStep();
						}
					});
				});
			});
		}});
	});
}
var jDeclareZero = true;
function secondForLoopExe() {
	if (jDeclareZero) {
		jDeclareZero = !jDeclareZero;
		$(".introjs-tooltiptext #ulTag").append("<li><b class ='ct-code-b-yellow opacity00' id='jDeclaration'> j = <span id='jVal'>0</span></b></li>");
		var pos1 =  $("#forLoopJ").offset();
		$("#jDeclaration").offset({"top": pos1.top, "left": pos1.left});
		$("#forLoopJ").effect("highlight", {color: 'yellow'}, 1000, function() {
			tl.to("#jDeclaration", 1, {opacity: 1, top:0, left:0, onComplete: function() {
				$('#jDeclaration').removeClass('opacity00');
				$('#jBox').addClass("zIndex");
				$('#jMemory').addClass('circle-css');
				var pos2 = $('#jVal').offset();
				$("#jMemory").offset({"top": pos2.top, "left": pos2.left});
				$('#jMemory').removeClass('opacity00');
				$('.introjs-tooltipReferenceLayer').css('z-index',"1000000");
				tl.to("#jMemory", 1, {opacity: 1, top:0, left:0, onComplete: function() {
					$('#jMemory').removeClass('circle-css');
					jCondition();
				}});   
			}});
		});
	} else {
		jCondition();
	}
}

function jCondition() {
	$(".introjs-tooltiptext #ulTag *").removeAttr("id");
	$(".introjs-tooltiptext #ulTag").append('<li><b class="ct-code-b-yellow opacty00" id="tooltipJConditon"><span id="jCondtionJ" '
			+'class="display-inline-block"> j </span> &lt; <span class="display-inline-block" id="jCondtionRHS"><span id="jConditonRows" class="display-inline-block">rows</span> - '
			+'<span id="jConditonI" class="display-inline-block" > i </span></span></b></li>');
	var pos1 =  $("#jCondition").offset();
	$("#tooltipJConditon").offset({"top": pos1.top, "left": pos1.left});
	$("#jCondition").effect("highlight", {color: 'yellow'}, 1000, function() {
		tl.to("#tooltipJConditon", 1, {opacity: 1, top:0, left:0, onComplete: function() {
			$('#tooltipJConditon').removeClass('opacity00');
			flipEffect("#jConditonI",$('#iMemory').text(), function() {
				flipEffect("#jConditonRows",$('#rowMemory').text(), function() {
					var jCondtionRHSValue = parseInt($('#rowMemory').text())-parseInt($('#iMemory').text());
					flipEffect("#jCondtionRHS",jCondtionRHSValue, function() {
						flipEffect("#jCondtionJ",$('#jMemory').text(), function() {
							var text = "";
							if (parseInt($('#jMemory').text()) < jCondtionRHSValue ) {
								text = "evaluates to  <span class='ct-code-b-yellow'>true</span>....."
							} else {
								text = "evaluates to  <span class='ct-code-b-red'>false</span>....."
							}
							$("#tooltipJConditon").append("&emsp;<span class='display-inline-block color-white'></span>");
							typing($("#tooltipJConditon > span:last-child"), text, function() {
								if (parseInt($('#jMemory').text()) < jCondtionRHSValue) {
									$("#printfSpace").effect("highlight", {color: 'yellow'}, 1000, function() {
										setTimeout( function () {
											outputDynamicStep();
											intro.nextStep();
											$('#printfSpace').addClass('zIndex');
										}, 1000);
									});
								} else {
									kConditon();
								}
							});
						});
					});
				});
			});
		}});
	});
}

function outputDynamicStep() {
	var dynamicStep = {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action: "spacePrint"
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
}

function forLoopCodeDynamicStep() {
	//$('#consoleSpace').attr('contenteditable','false');
	var dynamicStep = {
			element : "#totalForLoop",
			intro : "",
			position : "top",
			action: "codeDivAterSpace"
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
}

function jIncrementStep() {
	$(".introjs-tooltiptext").append("<ul id='ulTag'></ul>");
	$(".introjs-tooltiptext #ulTag").append("<li><b class ='ct-code-b-yellow opacity00 display-inline-block' id='tooltipJIncrement'>j++</b></li>");
	var pos1 =  $("#jIncrement").offset();
	$("#tooltipJIncrement").offset({"top": pos1.top, "left": pos1.left});
	$("#jIncrement").effect("highlight", {color: 'yellow'}, 1000, function() {
		tl.to("#tooltipJIncrement", 1, {opacity: 1, top:0, left:0, onComplete: function() {
			flipEffect("#tooltipJIncrement",parseInt($('#jMemory').text())+1, function() {
				flipEffect("#jMemory",parseInt($('#jMemory').text())+1, function() {
					jCondition();
				});
			});
		}});
	});
}