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
						position : 'right',
						tooltipClass: 'hide'
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
	})
	
	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		var text = intro._introItems[intro._currentStep].intro;
		console.log(ElementId);
		$('.introjs-nextbutton').hide();
		switch (ElementId) {

			case 'mainTitle' :
				$('.introjs-nextbutton').hide();
					$(".introjs-tooltip").removeClass("hide");
					text = 'Let us understand the different symbols in a flow chart and what they represent.'; 
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
			break;
				
			case 'flowChart' :
				//$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					text = 'Let us understand the different symbols in a flow chart and what they represent.'
					typing(".introjs-tooltiptext", text, function() {
						 $("#flowChart").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							 $("#flowChart").removeClass("animated zoomIn");	
							 $('.introjs-nextbutton').show();
						 });
					}); 
				//});	 
			break;
			
			case 'restart':
				$("#restart").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", text, function() {
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
			
		/* 	case 'flowChart' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "this is table..";
					 typing(".introjs-tooltiptext", text, function() {
						 $("#flowChart").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$('.introjs-nextbutton').show();
						 });
					}); 
				});	 
			break;*/
			
			/* case 'terminal' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the termianl line..";
					 typing(".introjs-tooltiptext", text, function() {
						 $("#terminal td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							 $("#terminal td:eq(1)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								 $("#terminal td:eq(2)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
										$('.introjs-nextbutton').show();
								 })
							 })
						 });
					}); 
				});
			break;
			
			case 'process' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the process...";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;
			
			case 'ioLine' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the ioLine...";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;
			
			case 'decision' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the decision..";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;
			
			case 'flowLines' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "We are initializing array with two elements and converting array to arraylist.";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;  */
			
		}
	})
	
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
	$("#restart").click(function() {
		location.reload(true);
	})
	 /* function animateTR(id) {
		 $("#"+ id + "td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			 $("#"+ id +" td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				 $("#terminal td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					 
				 })
			 })
		 })
		 
	 } */
}

function animateTR(index) {
	var selector = $('.introjs-showElement.introjs-relativePosition > td > *');
	selector.eq(index).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		selector.eq(index).removeClass("animated zoomIn");
		++index;
		if (index < selector.length) {
			animateTR(index);
		} else {
			$('.introjs-nextbutton').show();
		}
	 });
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(".introjs-nextbutton").addClass("opacity00");
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