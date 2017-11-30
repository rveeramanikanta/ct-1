var flowchartSymbolsReady = function() {
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
					{
						element : "#flowChart",
						intro : '',
						position : 'right'
						
					},
					{
						element : "#terminal",
						intro : 'An <span class="ct-code-b-yellow">oval</span> symbol is used to represent the <span class="ct-code-b-yellow">terminal'
								+ '</span> in a flow chart.',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#process",
						intro : 'A <span class="ct-code-b-yellow">rectangle</span> is used to represent a <span class="ct-code-b-yellow">process</span>'
								+ ' (set of operations).',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#ioLine",
						intro : 'A <span class="ct-code-b-yellow">parallelogram</span> is used to represent an <span class="ct-code-b-yellow">input / '
								+ 'output</span> operation.',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#decision",
						intro : 'A <span class="ct-code-b-yellow">rhombous</span> is used to represent a <span class="ct-code-b-yellow">decision</span>.',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#flowLines",
						intro : 'An <span class="ct-code-b-yellow">arrow</span> is used to represent a flow line with arrowheads '
									+ ' representing the <span class="ct-code-b-yellow">direction</span> of flow.',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#restart",
						intro : 'Click to restart.',
						position : 'right',
						tooltipClass: 'hide'
					} 
				]
	});
	intro.onbeforechange(function(targetElement) {
		var ElementId = targetElement.id;
		var text = intro._introItems[intro._currentStep].intro;
		switch (ElementId) {

			case 'mainTitle' :
				 
			break;
				
			case 'flowChart' :
				if (intro._direction == "backward") {
				if (intro._currentStep == 0) {
					
					//$("#terminal").addClass("opacity00");
					$("#oval").addClass("opacity00");
					$("#2-c0l").addClass("opacity00");
					$("#3-col").addClass("opacity00");
				}
				
				}
			break;
			
			break;
			 case ElementId:
				 if (intro._direction == "backward") {
					 	if (ElementId = "terminal") {
					 		if (intro._currentStep == 1) {
					 	$("#rectangle").addClass("opacity00");
					 	$("#c22").addClass("opacity00");
					 	$("#c23").addClass("opacity00");
					 	}
					 }
					 	if (ElementId = "process") {
					 		if (intro._currentStep == 2) {
					 	$("#rectangle").removeClass("opacity00");
					 	$("#c22").removeClass("opacity00");
					 	$("#c23").removeClass("opacity00");
					 	$("#parallelogram").addClass("opacity00");
						$("#c32").addClass("opacity00");
						$("#c33").addClass("opacity00");
			    	}
			    }
					 	if (ElementId = "ioLine") {
			    			if (intro._currentStep == 3) {
						$("#parallelogram").removeClass("opacity00");
						$("#c32").removeClass("opacity00");
						$("#c33").removeClass("opacity00");
						$("#rhombus").addClass("opacity00");
						$("#c42").addClass("opacity00");
						$("#c43").addClass("opacity00");
			    			}
					}
					 	if (ElementId = "decision") {
					 		if (intro._currentStep == 4) {
					 			$("#flow").addClass("opacity00");
								$("#flowc").addClass("opacity00");
								$("#flowcc").addClass("opacity00");
					 		}
					 	}
				 }
			    /*if (ElementId = "parallelogram") {
			    	$("#parallelogram").addClass("opacity00");
					$("#c32").addClass("opacity00");
					$("#c33").addClass("opacity00");
			    }*/
				 
				break; 
		}
	});
	
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
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
		var ElementId = targetElement.id;
		var text = intro._introItems[intro._currentStep].intro;
		console.log(ElementId);
		$('.introjs-nextbutton').hide();
		switch (ElementId) {
			case 'mainTitle' :
				$('.introjs-nextbutton').hide();
					
						$('.introjs-nextbutton').show();
					
			break;
				
			case 'flowChart' :
				 
					intro._introItems[intro._currentStep]["isCompleted"] = false;
					text = 'Let us understand the different symbols in a flow chart and what they represent.'
					typing(".introjs-tooltiptext", text, function() {
						if (intro._direction == "forward") {
						 $("#flowChart").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							 $("#flowChart").removeClass("animated zoomIn");
						 
							 
						 });
						} 
					}); 
					$('.introjs-nextbutton').show();
				 
			break;
			
			case 'restart':
				$("#restart").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltip").css({"min-width": "115px"});
					})
				});
			break;
			 case ElementId:
				 				
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					
					 typing(".introjs-tooltiptext", text, function() {
						
						 animateTR(0);
						
					 });
					 
				});
				
				break; 
		
			
		}
	})
	
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
	$("#restart").click(function() {
		location.reload(true);
	})
	 
}

function animateTR(index) {
	
	 	var selector = $('.introjs-showElement.introjs-relativePosition > td > *');
	 	$(".introjs-tooltip").removeClass("hide");
	 	 if (intro._direction == "forward") {
	 		
	 	selector.eq(index).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		selector.eq(index).removeClass("animated zoomIn");
		++index;
		if (index < selector.length) {
		animateTR(index);
		} else {
			$('.introjs-nextbutton,.introjs-prevbutton').show();
		}
		});
	 	 }
	 if (intro._direction == "backward") {
		 $('.introjs-nextbutton,.introjs-prevbutton').show();
	}
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(".introjs-nextbutton").addClass("opacity00");
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			//intro._introItems[intro._currentStep].intro = $(".intro-tooltiptext").html();
			$(".introjs-nextbutton").removeClass("opacity00");
			if (typeof callBackFunction === "function") {
				callBackFunction();
		}
	})
}