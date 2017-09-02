var t1;

var usageOfDoubleHashReady = function() {
	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		console.log("hello");
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	
	console.log();
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps : [{
					element :'#titleName',
					intro :'',
					position:"right"
				},{
					element :'#preBody',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#connectId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"bottom"
				},{
					element :'#connectId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',               
					intro :'',
					position:"bottom"
				},{
					element :'#restartBtn',               
					intro :'',
					position:"bottom"
				}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$("#preBody").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here is a sample code for<span class='ct-code-b-yellow'> ##</span>.<ul><li>Here, <span class='ct-code-b-yellow'>CONNECT(X,Y)</span> is symbol name or macro. And <span class='ct-code-b-yellow'>X##Y</span> is a symbolic constant.</li>" +
						"<li><span class='ct-code-b-yellow'>##</span> concatenates the X and Y values.</li>" +
						"<li>Before compilation starts symbolic name will be replaced with symbolic constant value.</li></ul>", 10, "",function() {
						$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>main()</span> is the operating system call.</li><li><span class='ct-code-b-yellow'>main()</span> is the execution starting point for a C program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function. It prints the message which is in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "connectId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 3) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#connectId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#connectId").text("5##6");
					}});
					
					t1.to("#connectId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.refresh();
						setTimeout(function() {
							intro.nextStep();
						}, 1500);
					}});
					
				});
				
			} else if(intro._currentStep == 6) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					
					t1.to("#connectId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#connectId").text("56");
					}});
					
					t1.to("#connectId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.refresh();
						setTimeout(function(){
							intro.nextStep();
						}, 1500);
					}});
				});
			}
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			$("#consoleId").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing("#typeChar", "result is : <span class='ct-code-b-green'>56</span>", 10, "",function() {
					typing(".introjs-tooltiptext", "The result <span class='ct-code-b-yellow'>56</span> is printed on to the output screen.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "Let us see a sample program on <span class='ct-code-b-yellow'>##</span>.", 10, "",function() {
		$('.introjs-nextbutton').show();
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
}