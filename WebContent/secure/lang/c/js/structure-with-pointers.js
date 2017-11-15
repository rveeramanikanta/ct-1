 var structureWithPointersReady = function() {
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
			position:"left",
			tooltipClass: 'hide'
		},{
			element :'#tableDiv',
			intro :'',
			tooltipClass:'hide',
			position:"bottom" 
		},{
			element :'#membersOfStructBook',
			intro :'',
			position:"bottom" 
		},{
			element :'#memorySend',
			intro :'',
			position:"bottom"  
		},{
			element :'#memoryStoreB',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"
		},{
			element :'#bookPointer',
			intro :'',
			position:"bottom" 
		},{ 
			element :'#boxOfP',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"
		},{ 
			element :'#pEquals',
			intro :'',
			position:"bottom"
		},{ 
			element :'#printF',
			intro :'',
			tooltipClass:'hide',
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide',
			position:"bottom" 
		},{ 
			element :'#printF',
			intro :'',
			tooltipClass:'hide',
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide',
			position:"bottom" 
		},{ 
			element :'#printF',
			intro :'',
			tooltipClass:'hide',
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
	
	intro.onbeforechange(function(targetElement) {
	var elementId = targetElement.id;
		switch (elementId) {
			case "informationdiv" :
				$('ul:first > li').removeAttr('style');
			break;
		}
	});
	
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
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
		
		case "informationdiv" :
	  		TweenMax.to($("#l11"), 0.5, {opacity: 1, onComplete: function() {
	  			TweenMax.to($("#l12"), 0.5, {opacity: 1, onComplete: function() {
	  				TweenMax.to($("#l13"), 0.5, {opacity: 1, onComplete: function() {
	  					$('.introjs-tooltip').removeClass("hide");
	  					typing('.introjs-tooltiptext',"Let us consider an example." ,function() { 
	  						$('.introjs-nextbutton').show();
	  					});
	  				}});
	  			}});
	  		}});
		break;
		case "tableDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
	  			setTimeout(function() {
	  				$('#tableDiv').removeClass('visibility-hidden');
	  				if (intro._direction == "forward") {
	  					intro.nextStep();
	  				} else {
	  					$('#tableDiv').addClass('visibility-hidden');
	  					intro.previousStep();
	  				}
				}, 300); 	
			});
		break;
		case "membersOfStructBook" :
			$("#voidDisplay").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#membersOfStructBook").removeClass("opacity00");
				typing('.introjs-tooltiptext', "This is a structure declaration of user defined datatype "+
						"<span class='ct-code-b-yellow'>book</span>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
	 	case "memorySend" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structBook").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Here a variable <span class='ct-code-b-yellow'>b</span> is defined for"
	  					 + " <span class='ct-code-b-yellow'>book</span> and initialized to the above values.", function() {
			  		$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "memoryStoreB" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward") {
					$('#bArrow, #memoryStoreB').removeClass("opacity00");
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
				        	$('#zeros').removeClass('opacity00');
				        	$('#price').removeClass('circle-css');
				        	$('#pages').addClass('circle-css');
				        	var l = $("#pages").offset();
							$("#memory2").offset({"top": l.top,"left": l.left});
					        TweenMax.to("#memory2", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
								$('#pages').removeClass('circle-css');
				  					setTimeout(function() {
				  						intro.nextStep();
				  					}, 400); 
		       				 	}});
		       		 		}});
		        		}});
				} else {
					setTimeout(function() {
						$('#table tr:eq(1) > td').css('opacity','0');
						$('#bArrow, #memoryStoreB').addClass("opacity00");
  						intro.previousStep();
  					}, 300); 
				}
				
				});
		break;
		case "bookPointer" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pointerP").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "Here <span class='ct-code-b-yellow'>p</span> is a pointer variable to the structure book."
			  			+ "<br><br> A pointer is allocated <span class='ct-code-b-yellow'>2 bytes</span> of memory to store the address of"
			  			+ " the variable of <span class='ct-code-b-yellow'>book</span>.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "boxOfP" :
			if (intro._direction == "forward") {
				$('#boxOfP, #arrow').removeClass('opacity00');
				$(".introjs-helperLayer").one("transitionend", function() {
				$("#address1").removeClass("opacity00");
				var l = $("#address").offset();
					$("#address1").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#address1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		       			$("#address1").removeClass('memory');
				  		setTimeout(function() {
							intro.nextStep();
							}, 500); 
		       			}});
				});
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#boxOfP, #arrow, #address1').addClass('opacity00');
					$("#address1").addClass("opacity00").css('opacity','0');
						intro.previousStep();
				});
			}
			
		break;
		case "pEquals" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pointerP").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "The address of structure variable <span class='ct-code-b-yellow'>b</span> is stored into"
			  			+ " the pointer variable.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "printF" :
			if(intro._currentStep == 8) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext', "<b class='ct-code-b-yellow'>p &rarr; name</b> </br> Picks the address stored in "
							+"<b class='ct-code-b-yellow'>p</b>, and goes to that specific address and reads the value of"
							+ " <b class='ct-code-b-yellow'>name</b> to display it to the console.", function() {  
						$("#pName").effect("highlight", {color: '#FFDC00'}, 1000, function() {
							$("#pId").effect("highlight", {color: '#FFDC00'}, 1000, function() {
								$("#address").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
									$("#name1").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
										$("#memory0").effect("highlight", {color: '#FFDC00'}, 1000, function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										});
									});
								});
							});
						});
					});
				});
			} else if(intro._currentStep == 10) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext', "<b class='ct-code-b-yellow'>p &rarr; price</b></br> Picks the address stored in "
							+"<b class='ct-code-b-yellow'>p</b>, and goes to that specific address and reads the value of"
							+ " <b class='ct-code-b-yellow'>price</b> to display it to the console.", function() {  
						$("#pprice").effect("highlight", {color: '#FFDC00'}, 1000, function() {
							$("#pId").effect("highlight", {color: '#FFDC00'}, 1000, function() {
								$("#address").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
									$("#price1").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
										$("#memory1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										});
									});
								});
							});
						});
					});
				});
			} else if(intro._currentStep == 12) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext', "<b class='ct-code-b-yellow'>p &rarr; pages</b></br> Picks the address stored in "
							+"<b class='ct-code-b-yellow'>p</b>, and goes to that specific address and reads the value of"
							+" <b class='ct-code-b-yellow'>pages</b> to display it to the console.", function() {  
						$("#pPage").effect("highlight", {color: '#FFDC00'}, 1000, function() {
							$("#pId").effect("highlight", {color: '#FFDC00'}, 1000, function() {
								$("#address").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
									$("#pages1").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
										$("#memory2").effect("highlight", {color: '#FFDC00'}, 1000, function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										});
									});
								});
							});
						});
					});
				});
			}
		break;
		case "consoleId" :
			if (intro._direction == "forward") {
				if(intro._currentStep == 9) {
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#consoleId").removeClass("opacity00");
					  	typing('#nameOutPut', "NAME: " + "<span class='color-palegreen'>C LANGUAGE</span>",  function() { 
					  		setTimeout(function() {
								intro.nextStep();
							}, 800); 
							});
						});
				} else if(intro._currentStep == 11) {
					$(".introjs-helperLayer").one("transitionend", function() {
						typing('#priceOutPut', "price: " + "<span class='color-palegreen'>125.500000</span>",  function() { 
					  		setTimeout(function() {
								intro.nextStep();
							}, 800); 
						});
					});
				} else if(intro._currentStep == 13) {
					$(".introjs-helperLayer").one("transitionend", function() {
						typing('#pageOutPut',  "page: " + "<span class='color-palegreen'>315</span></span>",  function() { 
					  		setTimeout(function() {
								intro.nextStep();
							}, 800); 
						});
					});
				}
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._currentStep == 9) {
						$("#consoleId").addClass("opacity00");
					}
					setTimeout(function() {
					$('.color-palegreen:last').parent().empty();
					intro.previousStep();
					}, 500); 
				});
			}
			
			
		break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width': '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
		break;
		}
	});

	intro.start();
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