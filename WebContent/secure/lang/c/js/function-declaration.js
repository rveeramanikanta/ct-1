var functionDeclarationReady = function() {
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
			element :'#informationdiv',
			intro :'',
			tooltipClass: "hide"
		},{
			element :'#format',
			intro :'',
			tooltipClass: "hide"
		},{
			element :'#returnType3',
			intro :''
		},{
			element :'#functionName3',
			intro :''
		},{
			element :'#argument3',
			intro :''
		},{
			element :'#semicolon3',
			intro :''
		},{
			element :'#declaration1',
			intro :''
		},{
			element :'#example1',
			intro :''
		},{
			element :'#example2',
			intro :''
		},{
			element :'#example3',
			intro :''
	 	},{
			element :'#restartBtn',
			intro :'Click to restart.',
			position: 'right'
		}]
	});
	
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "informationdiv" :
				$("#informationdiv").removeClass("opacity00").append("<ul><li id='li11' class='opacity00'>A function is a <span class='color-green'>"
						+ "set of executable statements</span> which perform a task.</li>"
						+ "<li id='li1' class='opacity00'>A <span class='color-green'>function declaration</span> specifies the"
						+ " name of the function, the argument types and the return datatype that would be returned by the function.</li>"
						+ "<li id='li2' class='opacity00'>Function declarations must end with a <span class='color-green'>"
						+ "semicolon (;)</span>.</li>"
						+ "<li id='li3' class='opacity00'>A function needs to be declared before a function is defined, and a call to that function"
						+ " is made.</li>"
						+ "<li id='li4' class='opacity00'>If a function call is made before the function is declared, it throws an"
						+ " <b style='color: red'>error</b>.</li></ul>");  
				TweenMax.to($("#li11"), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
						TweenMax.to($("#li2"), 0.5, {opacity: 1, onComplete: function() {
							TweenMax.to($("#li3"), 0.5, {opacity: 1, onComplete: function() {
								TweenMax.to($("#li4"), 0.5, {opacity: 1, onComplete: function() {
									$('.introjs-tooltip').removeClass("hide"); 	
									typing('.introjs-tooltiptext',"Let us consider the syntax of a function declaration." ,function() {
										$('.introjs-nextbutton').show();
									});
								}});
							}});
						}});
					}});
				}});
			break;
			case "format" :
				$("#informationdiv").addClass("zindex10")
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#format").removeClass("opacity00");
					setTimeout(function() {
						intro.nextStep();
					}, 500);
				});
			break;
			case "returnType3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "<ul><li><span class='ct-code-b-yellow'>return_type</span> is the data type of the value that is "
							+ "returned by the function.</li>"
							+ "<li>For example : If the return type is <span class='ct-code-b-yellow'>void</span>, this function"
							+ " returns nothing.</li></ul>", function() {  
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "functionName3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "Any valid identifier can be used as a <span class='ct-code-b-yellow'>function_name</span>.",
							 function() {  
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "argument3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "<ul><li><span class='ct-code-b-yellow'>parameter_types</span> are comma-separated list of data"
							+ " types that will be used by the function definition.</li><li><span class='ct-code-b-yellow'>"
							+ "parameter_types</span> are <span class='ct-code-b-yellow'>optional</span>.</li></ul>", 
							 function() {  
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "semicolon3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "Function declaration must end with a <span class='ct-code-b-yellow'>semicolon(;)</span>.", function() {  
			  			$('.introjs-nextbutton').show();
					});
				});
			break;
			case "declaration1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "Let us consider three different types of function declarations.", function() {  
						$("#declaration1").removeClass("visibility-hidden");
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "example1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "Here the name of the function is <span class='ct-code-b-yellow'>sum</span>, it takes two"
							+ " <span class='ct-code-b-yellow'>int</span> arguments and it will return a value of"
							+ " <span class='ct-code-b-yellow'>int</span> data type.", function() {  
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "example2" :
				$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "Here the name of the function is <span class='ct-code-b-yellow'>display</span>, it takes"
			  			+ " <span class='ct-code-b-yellow'>void</span>(no argument) and it will return a <span class='ct-code-b-yellow'>void</span>"
			  			+ " (i.e., nothing).", function() {  
					$('.introjs-nextbutton').show();
					});
				});
			break;
			case "example3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext', "Here the name of the function is <span class='ct-code-b-yellow'>gettime</span>, it takes"
							+ " <span class='ct-code-b-yellow'>void</span>(no argument) as parameter and it will return a value of"
							+ " <span class='ct-code-b-yellow'>int</span> data type.", function() {  
						$('.introjs-nextbutton').show();
			  		});
				});
			break;
			case "restartBtn":
				$('.introjs-tooltip').css({'min-width' : '120px'});
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restartBtn").removeClass("opacity00");
				});
			break;
		}
	});
	
	intro.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}