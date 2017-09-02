var typingInterval = 10;
var intro;
var indexCount = 0;
var commandLineArgumentsReady = function() {
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
			position : "bottom"
		},{
			element : "#savingFileStep",
			intro:'Saving to <span class="ct-code-b-yellow">example.c</span> file.',
			position : "bottom"
		},{
			element : "#compilation",
			intro	: '',
			position : "bottom",
			tooltipClass : "hide"
		},{
			element : "#commandLineValues",
			intro	: '',
			position : "bottom",
			tooltipClass : "hide"
		},{
			element : "#mainMethod",
			intro	: '',
			position : "bottom",
			tooltipClass : "hide"
		},{
			element : "#argcCount",
			intro 	: "",
			position : "bottom"
		},{
			element : "#argsLine",
			intro :"",
			position : "bottom"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "arraySize"
		},{
			element : "#sopArgsLength",
			intro	: "",
			position : "bottom",
			tooltipClass : "hide"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "arrayLength"
		},{
			element : ".output-console",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf0",
			intro : "",
			position : "bottom",
			tooltipClass : "hide",
			animateStep: "sopArgsZero"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : ".output-console",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf1",
			intro : "",
			position : "bottom",
			tooltipClass : "hide",
			animateStep: "sopAgrs"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : ".output-console",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf2",
			intro : "",
			position : "bottom",
			tooltipClass : "hide",
			animateStep: "sopAgrs"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : ".output-console",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf3",
			intro : "",
			position : "bottom",
			tooltipClass : "hide",
			animateStep: "sopAgrs"
		},{
			element : "#animationBox",
			tooltipClass : "hide",
			animateStep: "indexZero"
		},{
			element : ".output-console",
			tooltipClass : "hide"
		},{
			element : "#restartBtn",
			intro : "Click to Restart",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-tooltip').removeClass('hide');
				text = 'Here we will learn how the <span class="ct-code-b-yellow">command line arguments</span>  works.';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});	
			break;
			case "savingFileStep" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						saveFile();
					},200);
				});
			break;
			case"compilation" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#compilation").removeClass("opacity00");
					text = $("#compilation").html();
					typing('#compilation', text, typingInterval, 'white', function() {
						text = "<ul><li><span class='ct-code-b-yellow'>gcc</span> is a compiler used to"+
								" compile the given program.</li><li><span class='ct-code-b-yellow'>example</span> is an "+
								"executable file which is created only when <span class='ct-code-b-yellow'>example.c</span>"+
								" is successfully compiled.</li><li><span class='ct-code-b-yellow'>example.c</span>"+
								" is our file name.</li>";
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "commandLineValues" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#commandLineValues").removeClass("opacity00");
					text = $("#commandLineValues").html();
					typing('#commandLineValues', text, typingInterval, 'white', function() {
						text = "After successfull compilatin<ul><li><span class='ct-code-b-yellow'>./example</span> is an executable file "+
								"which contains <span class='ct-code-b-yellow'>c</span> program."+
								"</li><li>Arguments are passed to the program from the command line those "+
								"arguments are called as <span class='ct-code-b-yellow'>command line arguments"+
								"</span>.</li><li>Each argument "+
								"must be separated by a space.</li><li>In c <span class='ct-code-b-yellow'>./example</span>"+
								" is also take it as one argument.</li>"+
								"</ul><br>We have <span class='ct-code-b-yellow'>4</span>"+
								" arguments in this line.";
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			case "mainMethod" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "This is the main method whose receives the command line arguments.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "argcCount" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "<ul><li><span class='ct-code-b-yellow'>argc</span> is the argument count which store the"+
							" total number of arguments passed to the main method.</li><li>"+
							"That can be accessed using the reference <span class='ct-code-b-yellow'>argc</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "argsLine" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "<ul><li><span class='ct-code-b-yellow'>argv</span> is a vector which contain all the commad line arguments.</li><li>"+
							"They can be accessed using the reference <span class='ct-code-b-yellow'>argv</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationBox" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "arraySize" :
							animateArrayWith(0);
						break;
						case "arrayLength" :
							animateLengthWith(0);
						break;
						case "indexZero" :
							animateArrayIndexWith(indexCount);
						break;
					}
				});
			break;
			case "sopArgsLength" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "<ul><li>This statement prints the length of the array referenced by "+
							"<span class='ct-code-b-yellow'>argc</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "sopAgrsOf"+indexCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "sopArgsZero" :
							text = "<ul><li>In C array elements are stored depending on <span class='ct-code-b-yellow'>subscript</span> or "+
									"<span class='ct-code-b-yellow'>index</span>."+
									"<li>The above statement accesses the element present at index <span class='ct-code-b-yellow'>0</span>"+
									" in the Character array referenced by <span class='ct-code-b-yellow'>argv</span>.</li></ul>";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
						case "sopAgrs" :
							$('.introjs-tooltip').removeClass('hide');
							text = "The above statement accesses the element present at index <span class='ct-code-b-yellow'>"+ indexCount +"</span>"+
									" in the Character array referenced by <span class='ct-code-b-yellow'>argv</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();

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
	$('.arrow1').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
	$('#dotJavaFileAboveText').show(1000).text('Saving').addClass('loading');
	$('.dotJavaFile').fadeTo(3000,1,function() {
		$('.arrow1 i').removeClass('faa-passing')
		$('#dotJavaFileAboveText').text('Saved').removeClass('loading');
		$("#className").text('example'),$("#extention").text('.c'),
		$('#dotJavaFileBelowText').addClass('pulse').on('animationend',function() {
			$('.introjs-nextbutton').show();
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
	TweenLite.from($('#tdValue' + index), 1.5, {top: topLength, left: leftLength, onComplete: function() {
		if (index < 3) {
			animateValueWith(index + 1);
		} else {
				intro.nextStep();
				$('.introjs-nextbutton').show();
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
							$('.introjs-nextbutton').show();
							$('#tdLength0, #tdLength1, #tdLength2, #tdLength3').addClass('visibility-hidden');
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
								if (intro._currentStep == 23) {
									setTimeout(function() {
										$('#restartBtn').removeClass('visibility-hidden');
									},800);
								} else {
									$('.introjs-nextbutton').show();
								}
							}, 1300);
						});
				}, 1300);
			});
		}});

	});
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}