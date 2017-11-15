var structureWithAssiagnmentOperator = function() {
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
			element :'#title',
			intro :''
		},{
			element :'#intVariable',
			intro :''
		},{
			element :'#arrayOfaValues',
			intro :''
		},{
			element :'#arrayTable1',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#arrayOfbValues',
			intro :''
		},{
			element :'#arrayTable2',
			intro :''
		},{
			element :'#bEqualsa',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#forCondition',
			intro :''
		},{
			element :'#arrayTable2',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#structureConcept',
			intro :''
		},{
			element :'#structBook',
			intro :''
		},{
			element :'#storeBmemory',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#bookB1',
			intro :''
		},{
			element :'#cLanguage',
			intro :''
		},{
			element :'#table1',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#bookB2',
			intro :''
		},{
			element :'#b2equalsB1',
			intro :''
		},{
			element :'#table2',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#restartBtn',
			intro :'Click to restart.',
			position:"right"
		
		}]
	});
	
	intro.onbeforechange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "title" :
			$('#tableDiv').addClass('visibility-hidden');
			$('#intVariable').addClass('opacity00');
			break;
		case "intVariable" :
			$('#tableDiv').removeClass('visibility-hidden');
			$('#intVariable').removeClass('opacity00');
			$('#arrayOfaValues').addClass('opacity00');
			break;
		case "arrayOfaValues" :
			$('#arrayOfaValues').removeClass('opacity00');
			$('.memory-class').addClass('opacity00').removeAttr('style');
			$('#aValue, #arrayTable1').addClass('opacity00');
			break;
		case "arrayTable1" :
			$('.memory-class').addClass('opacity00').removeAttr('style');
			$('#aValue, #arrayTable1, #arrayOfbValues').addClass('opacity00');
			break;
		case "arrayOfbValues" :
			$('#arrayOfbValues').removeClass('opacity00');
			$('#bValue, #arrayTable2').addClass('opacity00');
			break;
		case "arrayTable2" :
			if(intro._currentStep == 5) {
				$('#bValue, #arrayTable2').removeClass('opacity00');
				$('#bEqualsa').addClass('opacity00');
			} else if(intro._currentStep == 8) {
				$('#arrayTable2 .memory').removeAttr('style');
			}
			break;
		case "bEqualsa" :
			$('#forCondition').addClass('opacity00');
			break;
		case "forCondition" :
			$('#arrayTable2 .memory').removeAttr('style');
			$('#forCondition').removeClass('opacity00');
			break;
		case "structureConcept" :
			$('#structureConcept').removeClass('opacity00');
			break; 
		case "structBook" :
			break; 
		case "storeBmemory" : 
			break;
		case "bookB1" : 
			intro.refresh();
			break;
		case "cLanguage" : 
			$("#b1Array, #table1").addClass("opacity00");
			$('#tableVal2 > td > span').removeAttr('style');
			break;
		case "table1" :
			$('#tableVal2 > td > span').removeAttr('style');
			break;
		case "bookB2" : 
			$("#b2Arayy, #table2").addClass("opacity00");
			break;
		case "b2equalsB1" : 
			$("#b2Arayy, #table2").removeClass("opacity00");
			break;
		case "table2" : 
			break;
		}
	});
	
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
		
		// ********************** start ************back button logic//
		
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
		case "intVariable" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
				$('#intVariable').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"We declared a variable <span class='ct-code-b-yellow'>i</span> of type"
	  					 + " <span class='ct-code-b-yellow'>int</span>." ,function() { 
	  				$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 	 	});
				});
			break;
		case "arrayOfaValues" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#arrayOfaValues').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"An <span class='ct-code-b-yellow'>int array</span>"
	  					+ " <span class='ct-code-b-yellow'>a</span> of size <span class='ct-code-b-yellow'>5</span> is declared." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			  		});
				});
			break;
		case "arrayTable1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#aValue, #arrayTable1').removeClass('opacity00');
				$('#array0').addClass('circle-css');
				var l = $("#array0").offset();
				$("#memory0").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#memory0", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
		        	$('#array0').removeClass('circle-css');
		        	$('#array1').addClass('circle-css');
		        	var l = $("#array1").offset();
					$("#memory1").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#memory1", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
			        	$('#array1').removeClass('circle-css');
			        	$('#array2').addClass('circle-css');
			        	var l = $("#array2").offset();
						$("#memory2").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory2", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
				        	$('#array2').removeClass('circle-css');
				        	$('#array3').addClass('circle-css');
				        	var l = $("#array3").offset();
							$("#memory3").offset({"top": l.top,"left": l.left});
					        TweenMax.to("#memory3", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
					        	$('#array3').removeClass('circle-css');
					        	$('#array4').addClass('circle-css');
					        	var l = $("#array4").offset();
								$("#memory4").offset({"top": l.top,"left": l.left});
						        TweenMax.to("#memory4", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
						        	$('#array4').removeClass('circle-css');
						        	$('.introjs-tooltip').removeClass("hide");
						        	typing('.introjs-tooltiptext',"<ul><li>The array index always starts with "+
	  										"<span class='ct-code-b-yellow'>0</span>.</li><li>Each elelment of the array can be accessed by using"
	  										+ " <span class='ct-code-b-yellow'>subscript</span> (or) <span class='ct-code-b-yellow'>index</span>.</li>",
	  										 function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();	
	  									});
	  								}});  
								}});  
			 				}});  
						}});  
	  				}});  
				});
			break;
		case "arrayOfbValues" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#arrayOfbValues').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"An <span class='ct-code-b-yellow'>int array</span>"
	  					+ " <span class='ct-code-b-yellow'>b</span> of size <span class='ct-code-b-yellow'>5</span> is declared." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			  		});
				});
			break;
		case "arrayTable2" :
			if(intro._currentStep == 5) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#bValue').removeClass('opacity00');
					$('#arrayTable2').removeClass('opacity00');
		  			typing('.introjs-tooltiptext',"Memory is allocated for array <span class='ct-code-b-yellow'>b</span> "+
		  					"of size <span class='ct-code-b-yellow'>5</span>." ,function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();	
				 		 });
					});
			} else if(intro._currentStep == 8) {
				$('#structureConcept').addClass('opacity00');
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#tableVal1").addClass("z-index");
					var l = $("#memory0").offset();
					$("#memory5").offset({"top": l.top,"left": l.left});
				    $("#memory0").effect("highlight", {color: 'yellow'}, 400, function() {
				    	TweenMax.to("#memory5", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
					        var l = $("#memory1").offset();
							$("#memory6").offset({"top": l.top,"left": l.left});
							$("#memory1").effect("highlight", {color: 'yellow'}, 400, function() {
								TweenMax.to("#memory6", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
							    	var l = $("#memory2").offset();
									$("#memory7").offset({"top": l.top,"left": l.left});
									$("#memory2").effect("highlight", {color: 'yellow'}, 400, function() {
										TweenMax.to("#memory7", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
								        	var l = $("#memory3").offset();
											$("#memory8").offset({"top": l.top,"left": l.left});
											$("#memory3").effect("highlight", {color: 'yellow'}, 400, function() {
												TweenMax.to("#memory8", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
													var l = $("#memory4").offset();
													$("#memory9").offset({"top": l.top,"left": l.left});
													$("#memory4").effect("highlight", {color: 'yellow'}, 400, function() {
														TweenMax.to("#memory9", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
															$("#tableVal1").removeClass("z-index");
															if (intro._direction == "backward") {
																setTimeout(function() {
																	intro.previousStep();
																}, 500);	
															} else {
																setTimeout(function() {
																	intro.nextStep();
																}, 500);
															}
														}});
													});
								        		}});
											});
							       		}});
						   		 	});
					        	}});
							});
				    	}});
					});
				});
			}
			break;
		case "bEqualsa" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#bEqualsa').removeClass('opacity00');
				$("#arrayTable1").effect("highlight", {color: '#76EEC6'}, 1000, function() {
					$("#arrayTable2").effect("highlight",{color: '#76EEC6'}, 1000, function() {
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext',"<span id='error'><span id='user'>This statement throws a "
								+ " <b class='color-red'>compile time error</b>, as one array"
								+ " cannot be directly assigned to another array.", function() { 
  				      		$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
			  		});
				});
			});
			break;
		case "forCondition" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#forCondition').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"Assignment in arrays are done by assigning each and every element of one array to"+
	  					" another array by using their <span class='ct-code-b-yellow'>indices</span> (or) "+
	  					"<span class='ct-code-b-yellow'>subscript</span>." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		});
				});
			break;
		case "structureConcept" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#structureConcept').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"Now let us understand <b class='ct-code-b-yellow'>assignment</b> in structures." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		});
				});
			break; 
		case "structBook" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is a structure declaration of user defined datatype "+
						"<span class='ct-code-b-yellow'>book</span>." ,function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		});
				});
			break; 
		case "storeBmemory" : 
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward") {
					setTimeout(function() {
						intro.nextStep();
					}, 1000);	
				} else {
					setTimeout(function() {
						intro.previousStep();
					}, 1000);	
				}
				
			});
			break;
		case "bookB1" : 
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"We define a structure variable <span class='ct-code-b-yellow'>b1</span> of type"
						+ " <span class='ct-code-b-yellow'>book</span>." ,function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		});
				});
			break;
		case "cLanguage" : 
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"We initialize  <span class='ct-code-b-yellow'>b1</span> with the above values." ,function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		});
				});
			break;
		case "table1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#b1Array, #table1").removeClass("opacity00");
				intro.refresh();
				$('#name').addClass('circle-css');
				var l = $("#name").offset();
				$("#mem0").offset({"top": l.top,"left": l.left});
	        	TweenMax.to("#mem0", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
	        		$('#name').removeClass('circle-css');
	        		$('#price').addClass('circle-css');
	        		var l = $("#price").offset();
	        		$("#mem1").offset({"top": l.top,"left": l.left});
        			TweenMax.to("#mem1", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
        				$('#price').removeClass('circle-css');
        				$('#pages').addClass('circle-css');
        				var l = $("#pages").offset();
        				$("#mem2").offset({"top": l.top,"left": l.left});
    					TweenMax.to("#mem2", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
    						$('#pages').removeClass('circle-css');
    						if (intro._direction == "forward") {
    							setTimeout(function() {
        							intro.nextStep();
        						}, 300);
    						} else {
    							setTimeout(function() {
        							intro.previousStep();
        						}, 300);
    						}
    						
    					}});
		       		 }});
		        }});
			});
			break;
		case "bookB2" : 
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "We define a structure variable <span class='ct-code-b-yellow'>b2</span> of type"
						+ " <span class='ct-code-b-yellow'>book</span>." ,function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 	});
			});
			break;
		case "b2equalsB1" : 
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#b2Arayy, #table2").removeClass("opacity00");
				typing('.introjs-tooltiptext',"In <span class='ct-code-b-yellow'>structures</span> unlike "
						+"<span class='ct-code-b-yellow'>arrays</span>, it is possible to copy an entire structure to an other structure"
						+ " using the assignment operator <span class='ct-code-b-yellow'>=</span>." ,function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		});
				});
			break;
		case "table2" : 
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#tableVal2").addClass("z-index")
				var l = $("#mem0").offset();
				$("#mem30").offset({"top": l.top,"left": l.left});
				$("#mem0").effect("highlight", {color: 'yellow'}, 500, function() {
					TweenMax.to("#mem30", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
						var l = $("#mem1").offset();
						$("#mem31").offset({"top": l.top,"left": l.left});
						$("#mem1").effect("highlight", {color: 'yellow'}, 500, function() {
							TweenMax.to("#mem31", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
								var l = $("#mem2").offset();
								$("#mem32").offset({"top": l.top,"left": l.left});
								$("#mem2").effect("highlight", {color: 'yellow'}, 500, function() {
									TweenMax.to("#mem32", 0.5, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
										typing('.introjs-tooltiptext', "", function() {  
											$("#tableVal2").removeClass("z-index")
											setTimeout(function() {
												intro.nextStep();
											}, 300);
										});
									}});
								});
							}});
		       		 	});
		        	}});
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
			});
			break;
		}
	});
	
	intro.start();
	typing('.introjs-tooltiptext', "Let us understand how the <b class='ct-code-b-yellow'>assignment operator</b>"
			+" is used on <b class='ct-code-b-yellow'>structures</b>.",function() {
		$('.introjs-nextbutton').show();
		});	
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