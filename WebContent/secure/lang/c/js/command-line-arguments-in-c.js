var typingInterval = 1;
var intro;
var indexCount = 0;
var temp;

function introFunction() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#program",
			intro	: "",
			position : "bottom",
		},{
			element : "#savingFileStep",
			tooltipClass: "hide",
			intro:'Let us save the file to <span class="ct-code-b-yellow">example.c</span>.',
			position : "bottom",
		},{
			element : "#compilation",
			intro	: '',
			position : "bottom",
			tooltipClass : "hide",
		},{
			element : "#commandLineValues",
			intro	: '',
			position : "bottom",
			tooltipClass : "hide",
		},{
			element : "#mainMethod",
			intro	: '',
			position : "bottom",
		},{
			element : "#argcCount",
			intro 	: "",
			position : "bottom",
		},{
			element : "#argsLine",
			intro :"",
			position : "bottom",
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "arraySize"
		},{
			element : "#sopArgsLength",
			intro	: "",
			position : "bottom",
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "arrayLength"
		},{
			element : "#outputConsole",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf0",
			intro : "",
			position : "bottom",
			//tooltipClass : "hide",
			animateStep: "sopArgsZero"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : "#outputConsole",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf1",
			intro : "",
			position : "bottom",
			animateStep: "sopAgrs"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : "#outputConsole",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf2",
			intro : "",
			position : "bottom",
			animateStep: "sopAgrs"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : "#outputConsole",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf3",
			intro : "",
			position : "bottom",
			animateStep: "sopAgrs"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : "#outputConsole",
			tooltipClass : "hide"
		},{
			element : "#restartBtn",
			intro : "Click to restart",
			position : "right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				if (intro._direction == "backward") {
					$('#totalStep2').empty().append(temp);
				}
				
			break;
			case "savingFileStep" :
				$('#totalStep2').empty().append(temp);
				$('#compilation').addClass('opacity00');
			break;
			case"compilation" :
				$('#compilation').addClass('opacity00');
				$('#commandLineValues').addClass('opacity00');
				break;
			case "commandLineValues" :
				$('#commandLineValues').addClass('opacity00');
			break;
			case "argsLine" :
				$('tbody > tr:eq(1) > *').removeClass('td-border');
				$('tbody > tr:eq(1) span').addClass('opacity00');
			break;
			case "animationBox" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "arraySize" :
						$('tbody > tr:eq(1) > *').removeClass('td-border');
						$('tbody > tr:eq(1) span').addClass('opacity00');
					break;
				}
			break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
		
		// ********************** start ************back button logic
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		
		// ********************** end ************back button logic
		
		
		
		
		
		var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				temp = $('#totalStep2').html();
				$('.introjs-tooltip').removeClass('hide');
				text = 'Let us learn how <span class="ct-code-b-yellow">command line arguments</span> work.';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});	
			break;
			
			case "outputConsole" :
				if (intro._direction == "backward") {
					intro.previousStep();
				}
				
				if (intro._direction == "backward" && indexCount != 0) {
					indexCount--;
					intro.previousStep();
					if (indexCount == 0) {
						$('#outputArgsOf0').empty();
					} else {
						$('.final-div > span:not(:empty):last').empty();
					}
				}
			break;
				
			case "savingFileStep" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						$('.introjs-tooltip').removeClass('hide');
						saveFile();
					},100);
				});
			break;
			case"compilation" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#compilation").removeClass("opacity00");
					text = $("#compilation").html();
					typing('#compilation', text, typingInterval, 'white', function() {
						text = "<ul><li><span class='ct-code-b-yellow'>gcc</span> is a compiler used to"+
								" compile the given program.</li><li><span class='ct-code-b-yellow'>example</span> is an "+
								"executable file which is created only when <span class='ct-code-b-yellow'>example.c</span>"+
								" is successfully compiled.</li><li><span class='ct-code-b-yellow'>example.c</span>"+
								" is our file name.</li>";
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							intro._introItems[intro._currentStep].intro = "";
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "commandLineValues" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#commandLineValues").removeClass("opacity00");
					text = $("#commandLineValues").html();
					typing('#commandLineValues', text, typingInterval, 'white', function() {
						text = "<ul><li>When we successfully compile the <span class='ct-code-b-yellow'>example.c</span> file, an "
								+"executable <span class='ct-code-b-yellow'>./example</span> file is created. "+
								"</li><li>The arguments that are passed to the program from the command line are "+
								"called <span class='ct-code-b-yellow'>command line arguments"+
								"</span>.</li><li>Each argument "+
								"must be separated by a space.</li><li>In c, <span class='ct-code-b-yellow'>./example</span>"+
								" is also taken as one argument.</li></ul>";
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							intro._introItems[intro._currentStep].intro = "";
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			case "mainMethod" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "This is the main method, it reads the command line arguments.<ul><li>"
							+ "The <span class='ct-code-b-yellow'>argc</span> is the count of"
							+ " the total number of arguments that"
							+ " are passed to the command line.</li>"
							+ "<li><span class='ct-code-b-yellow'>argv</span>"
							+ " is a vector which contains the "
							+ "commad line arguments.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "argcCount" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "<ul><li><span class='ct-code-b-yellow'>argc</span> is the argument count which stores the"+
							" total number of arguments passed to the main method.</li><li>"+
							"It can be accessed using the reference <span class='ct-code-b-yellow'>argc</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "argsLine" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "<ul><li><span class='ct-code-b-yellow'>argv</span> is a vector which contain all the commad line arguments.</li><li>"+
							"They can be accessed using the reference <span class='ct-code-b-yellow'>argv</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "animationBox" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "arraySize" :
							if (intro._direction == "forward") {
								animateArrayWith(0);
							} else {
								intro.previousStep();
							}
							
						break;
						case "arrayLength" :
							if (intro._direction == "forward") {
								animateLengthWith(0);
							} else {
								$('#outputArgsLength').empty();
								intro.previousStep();
							}
						break;
						case "indexZero" :
							animateArrayIndexWith(indexCount);
						break;
					}
				});
			break;
			case "sopArgsLength" :
				$('.introjs-helperLayer').one('transitionend', function() { 
					text = "<ul><li>This statement prints the length of the array "+
							"<span class='ct-code-b-yellow'>argc</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "restartBtn" :
				$('.introjs-tooltip').css('min-width','125px');
				$('.introjs-helperLayer').one('transitionend', function() { 
					$('#restartBtn').removeClass('visibility-hidden');
				});
			break;
			case "sopAgrsOf"+indexCount :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "sopArgsZero" :
							text = "<ul><li>In C, array elements are accessed using a <span class='ct-code-b-yellow'>subscript</span> or "+
									"<span class='ct-code-b-yellow'>index</span>."+
									"<li>The above statement accesses the element present at index <span class='ct-code-b-yellow'>0</span>"+
									" in the character array <span class='ct-code-b-yellow'>argv</span> i.e (argv[0]).</li></ul>";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						break;
						case "sopAgrs" :
							text = "The above statement accesses the element present at index <span class='ct-code-b-yellow'>"+ indexCount +"</span>"+
									" in the character array <span class='ct-code-b-yellow'>argv</span> i.e (argv["+ indexCount +"]).";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						break;
					}
				});
			break;
		}
	});
	intro.start();
	$( ".output-console-body > * " ).wrap( "<div class='final-div'></div>" );
	
	$('body').keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}


//save file animation
function saveFile() {
	$('.arrow1').append('<i class="fa fa-arrow-right faa-passing animated remove-arrow"></i>');
	$('#dotJavaFileAboveText').show(1000).text('Saving').addClass('loading');
	$('.dotJavaFile').fadeTo(2000,1,function() {
		$('.arrow1 i').removeClass('faa-passing');
		$('#dotJavaFileAboveText').text('Saved').removeClass('loading');
		$("#className").text('example'),$("#extention").text('.c'),
		$('#dotJavaFileBelowText').addClass('pulse').on('animationend',function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}

function animateArrayWith(index) {
	$("#value" + index).effect( "transfer", { to: $("#td" + index), className: "ui-effects-transfer" }, 1000, function() {
		$('#td' + index).addClass('td-border');
		if (index < 3) {
			animateArrayWith(index + 1);
		} else {
			$('.introjs-tooltip').removeClass('hide');
			$('.introjs-tooltiptext').addClass('height-width');
			$('.introjs-tooltiptext').typewriting("An array of size <span class='ct-code-b-yellow'>4</span> "+
					"is created for storing the <span class='ct-code-b-yellow'>4</span> arguments.", {
				"typing_interval": 30,
				"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor, height-width');
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animateValueWith(0)'>" + 
					"Next &#8594;</a>");
				});
		}
	});
}

function animateValueWith(index) {
	$(".introjs-duplicate-nextbutton").remove();
	$('#tdValue' + index).removeClass('opacity00');
	var l1 = $('#value' + index).offset();
	var l2 = $('#tdValue' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	TweenLite.from($('#tdValue' + index), 1.0, {top: topLength, left: leftLength, onComplete: function() {
		if (index < 3) {
			animateValueWith(index + 1);
		} else {
			intro.nextStep();
		}
	}});
}

//Find argument length
function animateLengthWith(index) {
	$('#td' + index).effect("highlight", {color: '#003399'}, 1300);
	$('#tdLength' + index).fadeTo(1300, 1, function() {
		if (index < 3) {
			animateLengthWith(index + 1);
		} else {
		intro.nextStep();
		setTimeout(function() {
			$('#outputArgsLength').typewriting("length of the arguments : 4", {
				"typing_interval": 100,
				"cursor_color": 'white'
				}, function() {
				$('#outputArgsLength').removeClass('typingCursor');
					setTimeout(function() {
						intro.nextStep();
						$('tbody > tr:eq(2) span').removeAttr('style').addClass('opacity00');
					}, 1300);
				});
		}, 1300);
		}
	});
}

function animateArrayIndexWith(index) {
	var l1 = $('#args' + index).offset();
	var l2 = $('#tdIndex' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	$('#args' + index).addClass('args-circle');
	$('#args' + index).effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#args' + index).removeClass('args-circle');
		$('#tdIndex' + index).removeClass('opacity00');
		TweenLite.from($('#tdIndex' + index), 1.5, {top: topLength, left: leftLength, onComplete: function() {
			$('#td' + index).effect("highlight", {color: '#003399'}, 1300, function() {
				intro.nextStep(); 
				setTimeout(function() {
					$('#outputArgsOf' + index).typewriting("argv[" + index + "] : " + $('#tdValue' + index).text(), {
						"typing_interval": 100,
						"cursor_color": 'white'
						}, function() {
							$('#outputArgsOf' + index).removeClass('typingCursor');
							indexCount++;
							setTimeout(function() {
								intro.nextStep(); 
								$('#tdIndex' + index).addClass('opacity00');
							}, 1300);
						});
				}, 1300);
			});
		}});

	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}