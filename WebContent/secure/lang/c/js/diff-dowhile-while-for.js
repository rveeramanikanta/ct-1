var iValue = 1;
var incrementCount = 1;
var lenOfInput;
var iCount = 4;
var diffDowhileWhileforReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#whileLine1',
			intro :'',
			position:"right",
		},
		{
			element :'#dowhileLine1',
			intro :'',
			position:"right",
		},
		{
			element :'#forDeclaration',
			intro :'',
			position:"right",
		},
		{
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#iwhileIncrement',
			intro :'',
			position:"right",
		},
		{
			element :'#idoIncrement',
			intro :'',
			position:"right",
		},
		{
			element :'#iIncrement',
			intro :'',
			position:"right",
		},
		{
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#whileBlock',
			intro :'',
			position:"right",
		},
		{
			element :'#dowhileBlock',
			intro :'',
			position:"right",
		},
		{
			element :'#forBlock',
			intro :'',
			position:"right",
		},
		{
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#whileLine1',
			intro :'',
			position:"right",
		},
		{
			element :'#dowhileLine1',
			intro :'',
			position:"right",
		},
		{
			element :'#forDeclaration',
			intro :'',
			position:"right",
		},
		{
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#restartBtn',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}
		]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "whileLine1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep == 12) {	
					text = "In <span class = 'color-yellow'>While loop</span> the variable is a counter variable as the number of executions should be known beforehand."
					typing('.introjs-tooltiptext',text,function() { 	
						$('.introjs-nextbutton').show();
					});
				}
			});
		break;
		case "dowhileLine1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			if(intro._currentStep == 1) {
				text = "<span class = 'color-yellow'>do While loop</span> is an <span class = 'color-yellow'>exit controlled loop</span> where the test condition is stated at the end of the body of the loop checked."
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			} else if(intro._currentStep == 13) {
				text = "In <span class = 'color-yellow'>do While loop</span> the variable can be a counter variable or a sentinel variable where the number of executions are not known beforehand."
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			}
			});
		break;
		case "forDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep == 2) {
					text = "<span class = 'color-yellow'>For loop</span> is a <span class = 'color-yellow'>entry controlled loop</span> where the condition is first checked."
					typing('.introjs-tooltiptext',text,function() { 	
						$('.introjs-nextbutton').show();
					});
				} else if(intro._currentStep == 14) {
					text = "In <span class = 'color-yellow'>for loop</span> the variable is a counter variable as the number of executions should be known beforehand."
					typing('.introjs-tooltiptext',text,function() { 	
						$('.introjs-nextbutton').show();
					});
				}
			});
		break;
		case "iwhileIncrement" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "In <span class = 'color-yellow'>While loop</span> the variable value is changed inside the loop."
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "idoIncrement" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "In <span class = 'color-yellow'>do while loop</span> the variable value is changed inside the loop."
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "iIncrement" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "In <span class = 'color-yellow'>for loop</span> the variable value is changed at the declaration."
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "printDefinition" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep == 3) {
					$('#printDefinition').addClass('box-border');
					text = "<ul><li><span class = 'color-red'>While loop</span> and <span class = 'color-red'>for loop</span> are <span class = 'color-red'>entry controlled loops</span> where the test condition is checked first.</li>"
							+"<li><span class = 'color-red'>do while</span> is an <span class = 'color-red'>exit controlled loop</span> where the body of the loop is executed for the first time without checking."
					typing('#typingbox1',text,function() {
						setTimeout(function () {
							intro.nextStep();
						}, 2500);
					});
				} else if(intro._currentStep == 7) {
					text = "<ul><li>In <span class = 'color-red'>While loop</span> and <span class = 'color-red'>do while loop</span> the <span class = 'color-red'> variables</span> values are changed inside the loop.</li>"
							+"<li>In <span class = 'color-red'>for loop</span> the variable values are changed at the declaration.</li></ul>"
					typing('#typingbox2',text,function() {
						setTimeout(function () {
							intro.nextStep();
						}, 2500);
					});
				} else if(intro._currentStep == 11) {
					text = "<ul><li>In <span class = 'color-red'>While loop</span> and <span class = 'color-red'>for loop</span> the control does not enter the loop till the condition is satisfied.</li>"
							+"<li>In <span class = 'color-red'>do While loop</span> the control enters the loop irrespective of the condition.</li></ul>"
					typing('#typingbox3',text,function() {
						setTimeout(function () {
							intro.nextStep();
						}, 2500);
					});
				} else if(intro._currentStep == 15) {
					text = "<ul><li>In <span class = 'color-red'>While loop</span> and <span class = 'color-red'>for loop</span> the control variable is a counter variable where the number of executions are known beforehand."
						+"<li>In <span class = 'color-red'>do While loop</span> the control variable can be a counter variable or sentinel variable where the number of executions are not known beforehand</li></ul>"
				typing('#typingbox4',text,function() {
					setTimeout(function () {
						intro.nextStep();
					}, 2500);
				});
			}				
			});
		break;
		case "whileBlock" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The control does not enter the <span class = 'color-yellow'>While loop</span> till the condition is satisfied.</li>"
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "dowhileBlock" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The control enters the <span class = 'color-yellow'>do While loop</span> once irrespective of the condition.</li>"
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "forBlock" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The control does not enter the <span class = 'color-yellow'>for loop</span> till the condition is satisfied.</li>"
				typing('.introjs-tooltiptext',text,function() { 	
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "restartBtn":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$('#restartBtn').click(function() {
					location.reload();
				});
			});
		break;
		}
	});

intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();
text = "<span class = 'color-yellow'>While loop</span> is a <span class = 'color-yellow'>entry controlled loop</span> where the condition is first checked."
	typing('.introjs-tooltiptext',text,function() { 	
		$('.introjs-nextbutton').show();
	});
}


function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":10,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}