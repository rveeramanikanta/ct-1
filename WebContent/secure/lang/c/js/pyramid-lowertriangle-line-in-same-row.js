var typingSpeed = 5;
var intro;
var tl;
var iCount = 1;
var jCount = 1;

var pyramidLowertriangleLineInSameRowReady = function() {
	$("#restart").click(function() {
		location.reload();
	})
	
	tl = new TimelineLite();
	$('#rowValue').attr('contenteditable','false');
	
	$("#rowValue").on("keydown", function(e) {
		intro.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/>row number should be single digit.</div>");
			e.preventDefault();
		}
	});
	
	$("#rowValue").on("keyup", function(e) {
		intro.refresh();
		if ($(this).text() == "") {
			$('.error-msg').remove();
	       	$('.introjs-tooltiptext').append("<div class='error-msg'><br/>Empty value is not allowed.</div>");
			$(".introjs-nextbutton").hide();
			$("#rowValue").empty();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
	
	
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
			element : "#topDiv",
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
			element : "#totalForLoop",
			intro : "",
			position : "top"
		}, {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action : "outputPrintingStart"
		}, {
			element : "#restart",
			intro : "",
			position : "right"
		}]});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
        	
		case "topDiv":
			$('.introjs-nextbutton').hide();
			var text = $("#typingDiv").html();
			typing("#typingDiv", text, function() {
			});
		break;
		
		case "codeDiv":
			$('#codeDiv').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var action = intro._introItems[intro._currentStep].action;
				switch(action) {
				case "sampleCode":
					var text = "This is the sample <b class='ct-code-b-yellow'>C</b> program.";
		        	typing(".introjs-tooltiptext", text, function() {
		        		$(".introjs-nextbutton").show();
		        	}); 
					break;
				}
			});
        	break;
        	
		case "variableDeclaration":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "integer variables <b class ='ct-code-b-yellow'>rows,i,j</b> are declared.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton").show();
	        	});
			});
        	break;
        	
		case "restart":
			$('.user-btn').remove();
			$('.introjs-tooltip').css("min-width","200px");
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#restart').removeClass('opacity00');
				var text = "Click to restart.";
	        	typing(".introjs-tooltiptext", text, function() {
	        	});
			});
        	break;
        	
        case "totalForLoop":
			$('#rowValue').attr('contenteditable','false');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
					var text="Here you have one outer <b class='ct-code-b-yellow'>for-loop</b> and two inner <b class='ct-code-b-yellow'>for-loops</b>.";
		        	typing(".introjs-tooltiptext", text, function() {
		        		$('.introjs-tooltiptext').append("<ul><li></li></ul>");
		        		var text="The outer <b class='ct-code-b-yellow'>for-loop</b> is used to  print number of lines of pyramid.(Green color)";
		        		typing(".introjs-tooltiptext ul li:last-child", text, function() {
		        			$('.outer').addClass('background-color-green');
		        			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="innerLoopOne()">Next &#8594;</a>');
		        		});
		        	});
			});
        	break; 
        	
        case "getPrintf":
			$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
				}, 500);
			});
        	break;
        	
		case "outputDiv":
			$('#consoleId1').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
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
					
				case "outputPrintingStart":
					$('#codeDiv').addClass('z-index');
					arrow(".outer", ".outer", function() {
						setTimeout(function() {
							$("#consoleBodyDiv1").append("<div id='row1'></div>");
							mainForLoop();
						}, 200);
					});
					
					break;
				}
			});
			
        	break;
        	
		case "getScanf":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here <b class ='ct-code-b-yellow'>scanf()</b> function reads one integer value as row size.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton").show();
	        	});
			});
        	break;
        	
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
    $('.introjs-prevbutton').hide();
}

function StarPreview() {
	$('.user-btn').remove();
	$('#starDisplay').removeClass('opacity00');
	var text = "Let us consider a sample <b class='ct-code-b-yellow'>C</b> program to print this pyramid.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-nextbutton").show();
	});
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

function innerLoopOne () {
	$('.user-btn').remove();
	$('.introjs-tooltiptext ul').append("<li></li>");
	var text="This inner <b class='ct-code-b-yellow'>for-loop</b> is used to print the <b class='ct-code-b-yellow'>number</b>  on each line.(Yellow color)";
	typing(".introjs-tooltiptext li:last-child", text, function() {
		$('.inner-one').addClass('background-color-yellow').removeClass("background-color-green");
		$(".introjs-nextbutton").show();	
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

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth() * 2)
	});
	
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	  
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	  
	TweenMax.to(".arrow", 1, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function mainForLoop() {
	jCount = 1;
	if (iCount <= parseInt($("#rowValue").text()) ) {
		arrow(".outer", ".inner-one", function() {
			$(".next-line-span").remove();
			printAnimation(jCount,function() {
				arrow('#jForLoop','#codeNextLine',function() {
					 iCount++;
					 jCount++;
					$(".print").last().removeClass("blinking");
					$('.blinking').removeClass('blinking');
					$("#consoleBodyDiv1").append("<div id='row" + iCount + "'><span class='next-line-span blinking'>&nbsp;</span></div>"); 
					setTimeout(function() {
						arrow("#codeNextLine", ".outer", function() {
							mainForLoop();
						});
					}, 100);
				});
			});
		});
	} else {
		$(".arrow").remove();
		intro.nextStep();
		$('.blinking').removeClass('blinking');
	}
}

function printAnimation(count,callBackFunction) {
	//$(".print.space").removeClass("blinking").html("&nbsp;");
	if (count <= iCount) {
		arrow("#jForLoop","#printNumber",function() {
			$(".print.space").removeClass("blinking").html("&nbsp;");
			$(".print").last().removeClass("blinking");
			$("#row" + iCount).append("<span class='print'>"+iCount+"</span>");
			$("#row" + iCount).append("<span class='print space blinking'>_</span>");
			count++;
			$(".print").last().addClass("blinking");
			arrow("#printNumber", "#jForLoop", function() {
				printAnimation(count, callBackFunction);
			}); 
		});
	} else {
		$(".print.space").removeClass("blinking").html("&nbsp;");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

//$('#codeNextLine').prepend("<span class='glyphicon glyphicon-arrow-right faa-passing animated' id='treearr'></span>");