var zeroAddingFlag = true;
var structureWithFunctionsReady = function() {
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
			tooltipClass: 'hide',
			position: 'left'
		},{
			element :'#preId',
			intro :'',
			position:"bottom"  
	 	},{
			element :'#errorVoidDisplay',
			intro :'',
			position:"bottom"  
		},{
			element :'#structBook',
			intro :'',
			position:"bottom"  
	 	},{
			element :'#voidMain',
			intro :'',
			position:"bottom" 
		},{
			element :'#memoryBookB',
			intro :'',
			position:"bottom"
		},{
			element :'#memoryStoreB',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"
		},{
			element :'#displayOfB',
			intro :'',
			position:"bottom"
		},{
			element :'#voidPrintFunction',
			intro :'',
			position:"bottom" 
		},{
			element :'#voidDispalyX',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"
		},{
			element :'#memoryStoreX',
			intro :'',
			tooltipClass:'hide',
			position:"bottom" 
		},{
			element :'#printF',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"  
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	
	
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		// ********************** start ************back button logic
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 1) {
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
		case "informationdiv" :
			$("#informationdiv").removeClass("visibility-hidden");
	  		TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
	  			$('#li1').append(' <a class="introjs-button user-btn" onclick="intro.nextStep()">Next &#8594;</a>');
	  			intro.refresh();
	  		}});
		break;
		
		case "preId" :
			$('.user-btn').remove();
			$('.visibility-hidden').removeClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				typing('.introjs-tooltiptext',"Let us consider an example.", function() {
	  				$('.introjs-nextbutton').show(); 
	  			});
			});
		break;
		
		case "errorVoidDisplay" :
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "<ul><li>This is the declaration of function <span class='ct-code-b-yellow'>display()</span>.</li>"
			  			+ " <li>This takes an argument of type struct <span class='ct-code-b-yellow'>book</span>.</li>"
			  			+ " <li>This line throws a <span class='ct-code-b-red'>compile time error</span>"
			  			+ ", as the <b class='ct-code-b-yellow'>structure book</b> has not been declared yet.</li>"
			  			+ "<li>This line <b class='ct-code-b-yellow'>should</b> be written after the struct <b class='ct-code-b-yellow'>book</b> declaration.</li></ul>", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
		case "structBook" :
			$('#errorVoidDisplay').addClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structBook").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This is a structure <span class='ct-code-b-yellow'>book</span> with three members"
			  			+ " <span class='ct-code-b-yellow'>name</span>,"
			  			+ " <span class='ct-code-b-yellow'>price</span> and <span class='ct-code-b-yellow'>page</span>.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
		case "voidMain" :
			$(".introjs-helperLayer").one("transitionend", function() {  
				$("#voidDisplay").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This line does not throw an error as <b class='ct-code-b-yellow'>book</b> is already declared.", function() {  
			  			$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "memoryBookB" :
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "Here we define a structure variable <span class='ct-code-b-yellow'>b</span> of type"
			  			+ " <span class='ct-code-b-yellow'>book</span> and it is initialized to the above values.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "memoryStoreB" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward") {
					$("#bArrow, #memoryStoreB").removeClass("opacity00");
					intro.refresh();
					$('#name').addClass('circle-css');
					var l = $("#name").offset();
					$("#memory0").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#memory0", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	$('#name').removeClass('circle-css');
			        	$('#price').addClass('circle-css');
			        	var l = $("#price").offset();
						$("#memory1").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				        	if (zeroAddingFlag) {
				        		$('#memory1').append('00000');
				        		zeroAddingFlag = !zeroAddingFlag;
				        	}
				        	$('#price').removeClass('circle-css');
				        	$('#pages').addClass('circle-css');
				        	var l = $("#pages").offset();
							$("#memory2").offset({"top": l.top,"left": l.left});
					        TweenMax.to("#memory2", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
								$('#pages').removeClass('circle-css');
				  					setTimeout(function() {
										intro.nextStep();
									}, 300);
			       				 }});
			       		 	}});
			        	}});
				} else {
					$("#bArrow, #memoryStoreB").addClass("opacity00");
					$('#trValue2 > .memory').removeAttr('style').addClass('opacity00');
					setTimeout(function() {
						intro.previousStep();
					}, 500); 
				}
			});
		break;
		case "displayOfB" : 
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#voidDispalyX").removeClass("opacity00");
		  	typing('.introjs-tooltiptext', "This is a <b class='ct-code-b-yellow'>function call</b> that sends the entire structure as a function argument.", function() {  
				$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "voidPrintFunction" : 
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidDispalyX").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This function <b class='ct-code-b-yellow'>display</b>, uses the structure <span class='ct-code-b-yellow'>book</span>"
			  			+ " to print the entire"
			  			+ " <span class='ct-code-b-yellow'>book</span> values to the console.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
		case "voidDispalyX" :
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					if (intro._direction == "forward") {
						intro.nextStep();
					} else {
						intro.previousStep();
					}
				}, 500); 	
			});
		break;
		case "memoryStoreX" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward") {
					$("#xArrow, #memoryStoreX").removeClass("opacity00");
					$("#trValue2").addClass("zindex");
					var l = $("#memory0").offset();  
					$("#memory01").offset({"top": l.top,"left": l.left});
					$("#memory0").effect("highlight", {color: 'yellow'}, 500, function() {
						TweenMax.to("#memory01", 1.3, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
							var l = $("#memory1").offset();
							$("#memory11").offset({"top": l.top,"left": l.left});
							$("#memory1").effect("highlight", {color: 'yellow'}, 500, function() {
								TweenMax.to("#memory11", 1.3, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
									var l = $("#memory2").offset();
									$("#memory21").offset({"top": l.top,"left": l.left});
									$("#memory2").effect("highlight", {color: 'yellow'}, 500, function() {
										TweenMax.to("#memory21", 1.3, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
											$("#trValue2").removeClass("zindex");
											setTimeout(function() {
												intro.nextStep();
											}, 300);
										}});
									});
								}});
			       		 	});
						}});
					});
				} else {
					$("#xArrow, #memoryStoreX").addClass("opacity00");
					$('#memoryStoreX tr:eq(1) > td').removeAttr('style');
					setTimeout(function() {
						intro.nextStep();
					}, 300);
				}
				
			});
		break; 
		case "printF" :
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#printF").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', ".", function() {  
			  		 setTimeout(function(){
						intro.nextStep();
						}, 800); 
					});
				});
		break;
		case "consoleId" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#consoleId").removeClass("opacity00");
			  	typing('#outPut', "NAME: " + "<span class='color-palegreen'>C LANGUAGE</span> <span style='margin-left: 20px;'></span>" + "price: " + "<span class='color-palegreen'>125.500000</span> <span style='margin-left: 20px;'></span>" + "page: " + "<span class='color-palegreen'>315</span>",  function() { 
			  		setTimeout(function(){
						intro.nextStep();
						}, 1000); 
					});
				});
		break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
		break;
		}
	});

	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {  
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
			}
		})
	}