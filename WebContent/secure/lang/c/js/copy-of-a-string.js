var introjs;
var typingInterval = 5;
var count = 0;
var i = 0;

var spaceFlag = true;

var copyOfStringReady = function() {
	introGuide();
	
	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
				showStepNumbers : false,
				exitOnOverlayClick : false,
				showBullets : false,
				exitOnEsc : false,
				keyboardNavigation : false,
				steps : [ {
							element: '#program',
							intro: '',
							position: 'right'
						}, {
							element: '#intDec',
							intro: ''
						}, {
							element: '#charDec',
							intro: '',
						}, {
							element: '#memory',
							intro: '',
							tooltipClass: 'hide'
						}, {
							element: '#enterString',
							intro: ''
						}, {
							element: '#output',
							intro: '',
							tooltipClass: 'hide',
							outputStep: 'printStatement'
						}, {
							element: '#scanf',
							intro: ''
						}, {
							element: '#output',
							intro: '',
							outputStep: 'textEnter'
						}, {
							element: '#tableId1',
							intro: '',
							position: 'left'
						}, {
							element: '#forLoop',
							intro: '',
							tooltipClass: 'hide'
						}, {
							element: '#iInitialization',
							intro: ''
						}, {
							element: '#condition',
							intro: ''
						}, {
							element: '#stringLength',
							intro: '',
							position: 'right'
						}, {
							element: '#output',
							intro: '',
							tooltipClass: 'hide',
							outputStep: 'lastStatement'
						}, {
							element: '#restart',
							intro: '',
							position: 'right'
						}]
				})
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();	
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "program":
			var text = "In this program we will learn how to <span class='ct-code-b-yellow'>copy a string</span> without"
						+ " using any string library functions.";
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
			
		case "intDec":
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "A variable i of type int is declared";
				typing('.introjs-tooltiptext', text, function() {
					$("#intDec").effect("transfer", {to: $("#cup"), className: "ui-effects-transfer"}, 500, function() {
						$("#cup").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "charDec":
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement declares two <span class='ct-code-b-yellow'>character arrays</span> with the size"
							+ " <span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "memory":
			$('.introjs-helperLayer ').one('transitionend', function() {
				tableCreation();
			});
			break;
			
		case "tableId1":
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#userString").removeClass("hide");
				spaceFind();
				if (spaceFlag) {
					var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads all the characters that are specified"
								+ " in the console in the same sequence.";
				} else {
					var text = "Since you have provided a space only the first sequence of characters before the space is considered is"
								+ " read by the <span class='ct-code-b-yellow'>scanf()</span> method.";
				}
				var text = text + "<br><br>Also note the <span class='ct-code-b-yellow'>delimiter('\\0')</span> character that is automatically"
							+ " appended as the last character that indicates the end of the string in the array.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
	
		case "enterString":
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Let us print a statement to the console asking the user to provide a string.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "output":
			$('.introjs-tooltip').css({'min-width' : '200px;'});
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch(outputStep) {
					
					case "printStatement": 
						$("#output").removeClass("opacity00");
						$(".firstLine").append('<span id="printString">Enter a string : </span>');
						timeOut();
						break;
						
					case "textEnter":
						var text = "Enter a string.";
						typing('.introjs-tooltiptext', text, function() {
							$(".firstLine").append('<span id="textEnter"><input type="text" class="input" maxlength="19" id ="usrText"></span>');
							$("#usrText").effect("highlight", {color: 'yellow'}, 500);
							$("#usrText").focus();
							events();
						});
						break;
						
					case "lastStatement":
						$(".thirdLine").append('<span id="lengthString">The copied string = </span>');
						$.each($("#usrText").val().split(""), function(index, value) {
							if (value.trim() == "") {
								return false;
							}
							$("#lengthString").append('<span class="ct-code-b-yellow">' + value + '</span>');
						});
						timeOut();
						break;
				}
			});
			break;
			
		case "scanf":
			$('.introjs-tooltip').css({'min-width' : '300px'});
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>scanf()</span> function with the format specifier" 
							+ " <span class='ct-code-b-yellow'>%s</span> reads multiple characters specified"
							+ " on the console until it encounters a white space.<br><br>"
							+ " The content that is stored into the <span class='ct-code-b-yellow'>ch</span> character array"
							+ " will always have a <span class='ct-code-b-yellow'>'\\0'</span>";
							+ " character at the end specifying the end of the string.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "iInitialization":
			$('.introjs-tooltip').css({'min-width' : '200px'});
			introjs.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here we initialized <span class='ct-code-b-yellow'>i</span> with <span class='ct-code-b-yellow'>0</span>.";
				typing('.introjs-tooltiptext', text, function() {
				$("#cup").addClass("z-index");
				$(".value").removeClass("opacity00")
				changeValue("#iSpan", ".zero", i, function() {
					$("#cup").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "forLoop":
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "condition":
			$('.introjs-tooltip').css({'min-width' : '250px'});
			$('.introjs-helperLayer ').one('transitionend', function() {
				//if (count < ($("#usrText").val().length)) {
				var text1 = "The condition in the while loop evaluates if the character at the given position i is \\0 or not.<br><br>"
				if (($('#usrText').val().charAt(count) == " ") || ($('#usrText').val().charAt(count) == "")) {
					var newStep = getStep('#delimeter', '', '', '')
					introjs.insertOption(introjs._currentStep + 1, newStep);
					var text = 	 text1 + "a[" + count + "] = \\0 and" 
								+ " <span class='ct-code-b-yellow'>\\0 != \\0</span> <br>condition evaluates to <span class='ct-red'>false</span>"
								+ " hence control comes out of the for loop.";
					
				} else {
					var newStep = getStep('#line1', '', '', '');
					introjs.insertOption(introjs._currentStep + 1, newStep);
					var text = text1 + "a[" + count + "] = " + $('#usrText').val().charAt(count)
								+ " and <span class='ct-code-b-yellow'>" +  $('#usrText').val().charAt(count) +" != \\0 </span> <br>condition"
								+ " evaluates to <span class='ct-code-b-yellow'>true</span> hence control enters in to the for loop.";
				}
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line1":
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>b[" + count + "] = " + $('#usrText').val().charAt(count) + "</span>";
				typing('.introjs-tooltiptext', text, function () {
					var newStep = getStep('#tableId2', '', 'hide', '');
					introjs.insertOption(introjs._currentStep + 1, newStep);
						$('.introjs-nextbutton').show()
					});
				});
				break;
				
		case "tableId2":
			introjs.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				//if (count < ($("#usrText").val().length)) {
				if (($('#usrText').val().charAt(count) == " ") || ($('#usrText').val().charAt(count) == "")) {
					$("#tdBorder" + i).text("\\0");
				} else {
					$("#tdBorder" + i).text($("#usrText").val().charAt(count));
					var newStep = getStep('#increment', '', '', '');
					introjs.insertOption(introjs._currentStep + 1, newStep);
				}
				timeOut();
			});
			break;
			
		case "increment":
			i++;
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Since the character at <br><span class='ct-code-b-yellow'>ch[" + count + "]</span> = "
							+ "<span class='ct-code-b-yellow'>" + $("#usrText").val().charAt(count) + "</span>"
							+ "</span> & "+ $("#usrText").val().charAt(count) + " != \\0 <br>then the <span class='ct-code-b-yellow'>i</span>"
							+ " value will be incremented to <span class='ct-code-b-yellow animate'>" + i + "</span>";
				typing('.introjs-tooltiptext', text, function () {
					$("#cup").addClass("z-index");
						changeValue("#iSpan", ".animate", i, function() {
						$("#cup").removeClass("z-index");                                                      
						var newStep = getStep('#condition', '', '', ''); 
						introjs.insertOption(introjs._currentStep + 1, newStep);
						count++;
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "delimeter":
			$('.introjs-helperLayer ').one('transitionend', function() {
				var newStep = getStep('#tableId2', '', 'hide', '');
				introjs.insertOption(introjs._currentStep + 1, newStep);
				var text = "<span class='ct-code-b-yellow'>b[" + count + "] = \\0";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "stringLength":
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>printf()</span> function which uses the <span class='ct-code-b-yellow'>%s</span>"
							+ " format character prints all the characters stored in the character array"
							+ " <span class='ct-code-b-yellow'>ch</span> until it encounters the <span class='ct-code-b-yellow'>\\0</span> character.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "restart":
			$('.introjs-tooltip').css({'min-width' : '200px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text);
			});
			break;
		}
	});
	
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tableCreation() {
	$("#memory").removeClass("opacity00");
	$("#tableId1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#tableId1").removeClass("animated zoomIn")
		for (var i = 0; i < 20; i++) {
			$("#userString").append("<td class='td-border'></td>");
		}
		//$("#userString").append("<td><div class='opacity00'></div></td>");
		$("#tableId2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$("#tableId2").removeClass("animated zoomIn");
			for (var i = 0; i < 20; i++) {
				$("#copyString").append("<td class='td-border' id='tdBorder" + i + "'></td>");
			}
			//$("#copyString").append("<td><div class='opacity00'></div></td>");
			setTimeout(function() {
				introjs.nextStep();
			}, 1000);
		});
	});
}

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


function spaceFind() {
	$.each($("#usrText").val().split(""), function(index, value) {
		if (value.trim() != "") {
	    	$("#userString td").eq(index + 1).addClass("filled").text(value);
	    } else {
	    	$("#userString td").eq(index + 1).text("\\0");
			return false;
	    }
	});
	
	if ($(".filled").length < 20) {
		$("#userString td").eq($(".filled").length + 1).text("\\0");
	}
}

function events() {
	$("#usrText").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		
		//space bar = 32
		if (e.keyCode == 32) {
			spaceFlag = false;
		}
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode === 9) {
			e.preventDefault();
		}
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>String length 19.</span>");
			e.preventDefault();
		}
	}); 
	
	$("#usrText").on("keyup", function(e) {
		if ($("#usrText").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
}

function timeOut() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function changeValue(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	$(id1).addClass("z-index");
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
		$(id1).removeClass("z-index");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}