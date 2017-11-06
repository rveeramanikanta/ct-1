var checkval;
var checkingFlag = false;
var ch;

var ifElseIfInCReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		 window.location.search = "?restart=1";
	});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
		  }
	});
	
	$('#charInput').keyup(function() {
		if($('#charInput').val().length > 0) {
			$('.introjs-nextbutton').show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter a character.");
			$('.introjs-nextbutton').hide();
		}
	});
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#ifElseStatement',
			intro :''
		},{
			element :'#mainFunctions',
			intro :''
		},{
			element :'#charCh',
			intro :''
		},{
			element :'#enterCharSpan',
			intro :''
		},{
			element :'#consoleId',
			intro :''
		},{
			element :'#getCh',
			intro :''
		},{
			element :'#enteredCharSpan',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#putChar',
			intro :''
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#ifCondition',
			intro :''
		},{
			element :'#ifConditionForLowerCase',
			intro :''
		},{
			element :'#printF1',
			intro :''
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#ifConditionForUpperCase',
			intro :''
		},{
			element :'#printF2',
			intro :''
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#printF3',
			intro :''
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#printF4',
			intro :''
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden'
		},{
			element :'#restartBtn',
			intro :'',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position:"right"
		}]
	});
	
	intro.onafterchange(function(targetElement) { 
		t1 = new TimelineLite();
		var elementId = targetElement.id;
		switch (elementId) {
		case "mainFunctions" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "<ul><li><b class='color-yellow'>main()</b> function is called by the operating system.</li>"+
						"<li><b class='color-yellow'>main()</b> is execution starting point for any <b class='color-yellow'>C</b> program.</li>"+
						"</ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break; 
		case "charCh" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>ch</b> is the variable which is of type char.<ul><li>It allocates 1 byte "+
		  				"of memory.</li><li>It stores only 1 character.</li></ul>", function() {  
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
	 	case "enterCharSpan" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>printf()</b> is library function, used to display the message specified "+
		  				"with in double quotes on to the output screen.", function() {  
		  			$('.introjs-nextbutton').show();	
				});
			});
		break; 
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 4) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#consoleId').removeClass('opacity00');
		  			typing('.introjs-tooltiptext', "Enter a <b class='color-yellow'>character</b>.<br><span class='errorText'></span>", function() {  
		  				$('#charInput').focus();
					});
				 });
			} else if(intro._currentStep == 7) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('#enteredConsole',"The given character is: " ,function() {
						setTimeout(function(){
							intro.nextStep();
							}, 800);
					});
				 });
			} else if(intro._currentStep == 9) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('#valGet', "<span style='color: #0f0;'>" + $('#charInput').val() + "</span>", function() { 
						setTimeout(function(){
							intro.nextStep();
						}, 800);
					});
				 });
			} else if(intro._currentStep == 13) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is a letter and vowel", function() {
						setTimeout(function(){
							intro.goToStep(22);
						}, 1000); 
					});
				});
			}  else if(intro._currentStep == 16) {
				$(".introjs-helperLayer").one("transitionend", function() {
					 typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is a letter and vowel", function() {
					  setTimeout(function(){
						  intro.goToStep(22);
						}, 1000); 
					});
				});
			} else if(intro._currentStep == 18) {
				$(".introjs-helperLayer").one("transitionend", function() {
					 typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is a letter and consonant", function() {
					  setTimeout(function(){
						  intro.goToStep(22);
						}, 1000); 
					});
				});
			} else if(intro._currentStep == 20) {
				$(".introjs-helperLayer").one("transitionend", function() {
					 typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is not a letter", function() {
					  setTimeout(function(){
						  intro.goToStep(22);
						}, 1000); 
					});
				});
			}
			break;
		case "getCh" :
			ch = $('#charInput').val();
			$('.introjs-nextbutton').hide();
			$("#charInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>getchar()</b> is a library function which reads only single character from "+
		  				"keyboard and it is assigned to variable <b class='color-yellow'>ch</b>.", function() {  
		  			$('.introjs-nextbutton').show();
			  		});
				});
			break;
		case "enteredCharSpan" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					intro.nextStep();
					}, 700);
				});
		break; 
		case "putChar" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>putchar()</b> is used to print the character on to the console.", function() {  
		  			$('.introjs-nextbutton').show();
					});
				});
			break;
		case "ifCondition" :
			$('.introjs-nextbutton').hide();
			checking();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation();				
				});
			break;
		case "ifConditionForLowerCase":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation1();
			  	 });
			break;
		case "printF1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>if</b> block.", function() {
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "ifConditionForUpperCase":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation2();
			  	});
			break;
		case "printF1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>if</b> block.", function() {
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "ifConditionForUpperCase":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation3();
			  	});
			break;
		case "printF2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>else if</b> block.", function() {
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "printF3":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-red'>false</b>, the control enters into the "+
						"<b class='color-yellow'>else</b> block.", function() {
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "printF4":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-red'>false</b>, the control enters into the "+
						"<b class='color-yellow'>else</b> block.", function() {
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "restartBtn":
			$("#charInput").attr("disabled", false);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
		break;
		}
	});

intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();
typing('.introjs-tooltiptext',"This code demonstrates the working of <b><span class='color-yellow'>if-else-if</span></b> block.",function() {
	$('#preBox').removeClass('opacity00');
	$('.introjs-nextbutton').show();
	});	
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
	
function charcheck() {
	if ( (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
 	{
		
	   if ( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ) {
		   $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	    	$(".user-btn").click(function() {
	    		$(".user-btn").remove();
	    		intro.goToStep(12);
	        });
		   
	   } else if ( ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ) {
	    	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	    	$(".user-btn").click(function() {
	    		$(".user-btn").remove();
	    	 	intro.goToStep(15);
	        });
	   } else {
	    	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
		    	 intro.goToStep(18);
		     });
	  }
   }
   else {
   	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
   	$(".user-btn").click(function() {
	   	$(".user-btn").remove();
	   	 intro.goToStep(20);
        });
	} 
}
 
 
function checking() {
	if ((ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') ) {
		checkingFlag = true;
	} else if((ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')) {
		checkingFlag = true;
	}
}
 
function evaluateCndtn(text) {
	if (text) {
		text = "<span class='ct-code-b-yellow'>" + text + "</span>";
	} else {
		text = "<span class='color-red'>" + text + "</span>";
	}
	return text;
}
 
 function animation() {
	 typing('.introjs-tooltiptext', "This is the <b class='color-yellow'>condition</b> part. If the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the <b class='color-yellow'>if</b> block, otherwise the control enters into the <b class='color-yellow'>else</b> block.<br><br>" +
				"<span id='ifConditionCheckIntooltip' class='opacity00'>(<span id='chFlip1' class='bold' style='display: inline-block;'>ch</span> >= <span class='color-yellow'> 'A'</span> <span class=''> && </span><span id='chFlip2' class='bold' style='display: inline-block;'> ch </span> <= <span class='color-yellow'> 'Z'</span>) <span class=''> ||"+
				" </span>(<span id='chFlip3'class='bold' style='display: inline-block;'> ch </span> >= <span class='color-yellow'> 'a'</span> <span class=''> && </span><span id='chFlip4' class='bold' style='display: inline-block;'> ch </span> <= <span class='color-yellow'> 'z'</span>)</span><br><span id='span'class='opacity00'>System converts each and every character into <b class='color-yellow'>ASCII</b> value.</span><br><span id='ifConditionCheckIntooltip1'></span>", function() {  
		var l = $("#ifConditionCheck").offset();
		$("#ifConditionCheckIntooltip").offset({"top": l.top,"left": l.left});
        TweenMax.to("#ifConditionCheckIntooltip", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
        	t1.to("#chFlip1", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
        		$("#chFlip1").text('\'' +$("#charInput").val() +'\'');
        		t1.to("#chFlip1", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
        			t1.to("#chFlip2", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		        			$("#chFlip2").text('\'' +$("#charInput").val() +'\'');
		        			t1.to("#chFlip2", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
		        				t1.to("#chFlip3", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		        				$("#chFlip3").text('\'' +$("#charInput").val() +'\'');
		        				t1.to("#chFlip3", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
		        					t1.to("#chFlip4", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		        						$("#chFlip4").text('\'' +$("#charInput").val() +'\'');
		        						t1.to("#chFlip4", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
		        							$('#span').removeClass('opacity00');
		        							$('#ifConditionCheckIntooltip1').append("(<span id='chFlip11' class='bold' style='display: inline-block;'> '" + ch + "'</span> >= <span id='upperA' style='display: inline-block;' class='color-yellow'> 'A'</span> <span class=''> && </span><span id='chFlip22' class='bold' style='display: inline-block;'> '" + ch + "' </span> <= <span class='color-yellow' id='upperZ' style='display: inline-block;'> 'Z'</span>) <span class=''> ||"+
  			        			  				" </span>(<span id='chFlip33'class='bold' style='display: inline-block;'> '" + ch + "' </span> >= <span class='color-yellow' id='lowerA' style='display: inline-block;'> 'a'</span> <span class=''> && </span><span id='chFlip44' class='bold' style='display: inline-block;'> '" + ch + "' </span> <= <span class='color-yellow' id='lowerZ' style='display: inline-block;'> 'z'</span>)</span><br><span id='trueAndFalse'></span><br><span id='trueAndFalse1'></span><br><span id='checking'></span>")
  			        	  					var l = $("#ifConditionCheckIntooltip").offset();
  			        	  					$("#ifConditionCheckIntooltip1").offset({"top": l.top,"left": l.left});
  			        	  			        TweenMax.to("#ifConditionCheckIntooltip1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
  			        	  			        	t1.to("#chFlip11", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
  			        	  			        		$("#chFlip11").text($("#charInput").val().charCodeAt(0));
  			        	  			        		t1.to("#chFlip11", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
  	  			        	  			        		t1.to("#upperA", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
	  	  			        	  			        		$("#upperA").text("65");
	  	  			        	  			        		t1.to("#upperA", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
		  	  			        	  			        		t1.to("#chFlip22", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
			  	  			        	  			        		$("#chFlip22").text( $("#charInput").val().charCodeAt(0));
			  	  			        	  			        		t1.to("#chFlip22", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
				  	  			        	  			        		t1.to("#upperZ", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
					  	  			        	  			        		$("#upperZ").text("90");
					  	  			        	  			        		t1.to("#upperZ", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
						  	  			        	  			        		t1.to("#chFlip33", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
							  	  			        	  			        		$("#chFlip33").text($("#charInput").val().charCodeAt(0));
							  	  			        	  			        		t1.to("#chFlip33", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
								  	  			        	  			        		t1.to("#lowerA", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
									  	  			        	  			        		$("#lowerA").text("97");
									  	  			        	  			        		t1.to("#lowerA", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
										  	  			        	  			        		t1.to("#chFlip44", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
											  	  			        	  			        		$("#chFlip44").text($("#charInput").val().charCodeAt(0));
											  	  			        	  			        		t1.to("#chFlip44", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
												  	  			        	  			        		t1.to("#lowerZ", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
													  	  			        	  			        		$("#lowerZ").text("122");
													  	  			        	  			        		t1.to("#lowerZ", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
															  	  			        							$("#trueAndFalse").append(evaluateCndtn(ch >= "A" ? true : false) + " ");
														  	  			        								$("#trueAndFalse").append("&& " + " ");
														  	  			        								$("#trueAndFalse").append(evaluateCndtn(ch <= "Z" ? true : false) + " ");
														  	  			        								$("#trueAndFalse").append("|| "+ " ");
														  	  			        								$("#trueAndFalse").append(evaluateCndtn(ch >= "a" ? true : false) + " ");
														  	  			        								$("#trueAndFalse").append("&& "+ " ");
														  	  			        								$("#trueAndFalse").append(evaluateCndtn(ch <= "z" ? true : false) + " ");
														  	  			        								$("#trueAndFalse1").append(evaluateCndtn(ch >= "A" && ch <= "Z" ? true : false) + " ");
														  	  			        								$("#trueAndFalse1").append("|| "+ " ");
														  	  			        								$("#trueAndFalse1").append(evaluateCndtn(ch >= "a" && ch <= "z" ? true : false) + " ");
														  	  			        	  			        		var evaluateMsg;
															  	  			        							if (checkingFlag) evaluateMsg = "evaluates to <b class='color-yellow'>" + checkingFlag + "</b>.";
															  	  			        							else evaluateMsg = "evaluates to <b class='color-red'>" + checkingFlag + "</b>.";
															  	  			        							typing('#checking', evaluateMsg, function() { 
																  	  			        							  setTimeout(function(){
																  	  			        								charcheck();
																	  	  			        							}, 2600); 
															  	  			        							 		});
													  	  			        	  			        				}});
								  	  			        	  			        								}});
								  	  			        	  			        							}});
								  	  			        	  			      							}});
									  	  			        	  			  						}});
				  	  			        	  			        								}});
				  	  			        	  			        							}});
				  	  			        	  			      							}});
				  	  			        	  			        					}});
  			        	  			        									}});
  			        	  			        								}});
  			        	  			      								}});
	  	  			        	  			      					}});
  	  			        	  			        				}});
  	  			        	  			        			}});
  	  			        	  			      			}});
  			        	  			        		}});
		  			        					}});
											}});
	        							}});
									}});
	        					}});
							}});
		      			}});
					}});
     			 }});
			});
 		}
 function animation1() {
	 typing('.introjs-tooltiptext', "<span id='lowerLetterVowelsIntoolTip' class='opacity00'><span id='lowerCaseCh' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'a'</span> <span class=''>||</span> <span id='lowerCaseCh1' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'e'</span> <span class=''>||</span> <span id='lowerCaseCh2' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'i'</span> <span class=''>||</span> <span id='lowerCaseCh3' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'o'</span> <span class=''>||</span>"+
				" <span id='lowerCaseCh4' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'u'</span></span><br><span id='lowerLetterVowelsIntoolTip1'></span><br><span id='trueSpan'></span>", function() {
		var l = $("#lowerLetterVowels").offset();
		$("#lowerLetterVowelsIntoolTip").offset({"top": l.top,"left": l.left});
	    TweenMax.to("#lowerLetterVowelsIntoolTip", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	    	t1.to("#lowerCaseCh", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
	        	$("#lowerCaseCh").text('\'' +$("#charInput").val()+'\'');
	        	t1.to("#lowerCaseCh", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
	        		t1.to("#lowerCaseCh1", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
 			        	$("#lowerCaseCh1").text('\'' +$("#charInput").val()+'\'');
 			        	t1.to("#lowerCaseCh1", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
 			        		t1.to("#lowerCaseCh2", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
 		 			        	$("#lowerCaseCh2").text('\'' +$("#charInput").val()+'\'');
 		 			        	t1.to("#lowerCaseCh2",0.3, {opacity:1, rotationX: 0, onComplete: function() {
 		 			        		t1.to("#lowerCaseCh3", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
 		 		 			        	$("#lowerCaseCh3").text('\'' +$("#charInput").val()+'\'');
 		 		 			        	t1.to("#lowerCaseCh3", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
		 		 		 			        	t1.to("#lowerCaseCh4", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		 			 		 			        	$("#lowerCaseCh4").text('\'' +$("#charInput").val()+'\'');
		 			 		 			        	t1.to("#lowerCaseCh4", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
								 			    	$('#lowerLetterVowelsIntoolTip1').append("<span id='lowerCaseCh10' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallA'>'a'</span> <span class=''>||</span> <span id='lowerCaseCh12' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallE'>'e'</span> <span class=''>||</span> <span id='lowerCaseCh23' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallI'>'i'</span> <span class=''>||</span> <span id='lowerCaseCh34' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallO'>'o'</span> <span class=''>||</span>"+
								 							" <span id='lowerCaseCh45' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallU'>'u'</span></span>") 
								 			    	var l = $("#lowerLetterVowelsIntoolTip").offset();
									 				$("#lowerLetterVowelsIntoolTip1").offset({"top": l.top,"left": l.left});
									 			    TweenMax.to("#lowerLetterVowelsIntoolTip1", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
									 			    	t1.to("#lowerCaseCh10", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
									 			        	$("#lowerCaseCh10").text($("#charInput").val().charCodeAt(0));
									 			        	t1.to("#lowerCaseCh10", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
									 			        		t1.to("#vowelsmallA", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
									 			        			$("#vowelsmallA").text("97");
									 		 			        	t1.to("#vowelsmallA", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
									 		 			        		t1.to("#lowerCaseCh12", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
											 	  			        		$("#lowerCaseCh12").text($("#charInput").val().charCodeAt(0));
											 	  			        		t1.to("#lowerCaseCh12", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
											 	  			        			t1.to("#vowelsmallE", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
											 		 			        			$("#vowelsmallE").text("101");
											 		 		 			        	t1.to("#vowelsmallE", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
													 	  			        			t1.to("#lowerCaseCh23", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
													 	  			        				$("#lowerCaseCh23").text($("#charInput").val().charCodeAt(0));
													 	  			        				t1.to("#lowerCaseCh23", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
													 	  			        					t1.to("#vowelsmallI", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
															 		 			        			$("#vowelsmallI").text("105");
															 		 		 			        	t1.to("#vowelsmallI", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
															 	  			        					t1.to("#lowerCaseCh34", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
															 	  			        						$("#lowerCaseCh34").text($("#charInput").val().charCodeAt(0));
															 	  			        						t1.to("#lowerCaseCh34", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
															 	  			        							t1.to("#vowelsmallO", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
																			 		 			        			$("#vowelsmallO").text("105");
																			 		 		 			        	t1.to("#vowelsmallO", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
																	 	  			        							t1.to("#lowerCaseCh45", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
																		 		 	  			        					$("#lowerCaseCh45").text($("#charInput").val().charCodeAt(0));
																		 		 	  			        					t1.to("#lowerCaseCh45", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
																			 		 	  			        					t1.to("#vowelsmallU", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
																							 		 			        			$("#vowelsmallU").text("117");
																							 		 		 			        	t1.to("#vowelsmallU", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
																 		 	  			        										typing('#trueSpan', "evaluates to <b class=color-yellow>true</b>.", function() {
																					  														$('.introjs-nextbutton').show();
																				 		 	  			        							});
																								 		 		 			        	}});
																			 	  			        						 		}});
								 		 	  			        																}});
									 	  			        						 										}});
								 		 	  			        														}});
									 	  			        						 								}});
								 		 	  			        												}});
									 	  			        						 						}});
																	 		 		 			     	}});
												 	  			        						 	}});
												 		 		 			        			}});
									 	  			        						 		}});
 	  			        																}});
	  			        						 									}});
 	  			        														}});
	  			        						 							}});
 	  			        												}});
	  			        						 					}});
 	  			        										}});
 			        						 				}});
 	  			        								}});
 	  			        							}});
 			        						 	}});
 			        					  	}});
 			        				   	}});
									}});
        						}});
						 	}});
        			   	}});
				    }});
	   			}});
	        }});
	  	});
 	}
 
 function animation2() {
	 typing('.introjs-tooltiptext', "<span id='upperLetterVowelsIntoolTip' class='opacity00'><span id='upperCaseCh' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'A'</span> <span class=''>||</span> <span id='upperCaseCh1' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'E'</span> <span class=''>||</span> <span id='upperCaseCh2' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'I'</span> <span class=''>||</span> <span id='upperCaseCh3' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'O'</span> <span class=''>||</span>"+
				" <span id='upperCaseCh4' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'U'</span></span><br><span id='upperLetterVowelsIntoolTip1' ></span><br><span id='trueSpan1'></span>", function() {
		var l = $("#upperLetterVowels").offset();
		$("#upperLetterVowelsIntoolTip").offset({"top": l.top,"left": l.left});
	    TweenMax.to("#upperLetterVowelsIntoolTip", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	    	t1.to("#upperCaseCh", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
	        	$("#upperCaseCh").text('\'' +$("#charInput").val()+'\'');
	        	t1.to("#upperCaseCh", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
	        		t1.to("#upperCaseCh1", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
 			        	$("#upperCaseCh1").text('\'' +$("#charInput").val()+'\'');
 			        	t1.to("#upperCaseCh1", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
 			        		t1.to("#upperCaseCh2", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
 		 			        	$("#upperCaseCh2").text('\'' +$("#charInput").val()+'\'');
 		 			        	t1.to("#upperCaseCh2", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
 		 			        		t1.to("#upperCaseChe3", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
 		 		 			        	$("#upperCaseCh3").text('\'' +$("#charInput").val()+'\'');
 		 		 			        	t1.to("#upperCaseCh3", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
	 		 		 			        	t1.to("#upperCaseCh4", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
	 			 		 			        	$("#upperCaseCh4").text('\'' +$("#charInput").val()+'\'');
	 			 		 			        	t1.to("#upperCaseCh4", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
	 			 		 			       
								 			    	$('#upperLetterVowelsIntoolTip1').append("<span id='upperCaseCh10' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperA'>'A'</span> <span class=''>||</span> <span id='upperCaseCh11' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperE'>'E'</span> <span class=''>||</span> <span id='upperCaseCh22' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperI'>'I'</span> <span class=''>||</span> <span id='upperCaseCh33' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperO'>'O'</span> <span class=''>||</span>"+
								 							" <span id='upperCaseCh44' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperU'>'U'</span></span");
								 			      	var l = $("#upperLetterVowelsIntoolTip").offset();
									 				$("#upperLetterVowelsIntoolTip1").offset({"top": l.top,"left": l.left});
									 			    TweenMax.to("#upperLetterVowelsIntoolTip1", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
								 			    	
									 			    	t1.to("#upperCaseCh10", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
									 			        	$("#upperCaseCh10").text($("#charInput").val().charCodeAt(0));
									 			        	t1.to("#upperCaseCh10", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
									 			        		t1.to("#vowelUpperA", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
									 		 			        	$("#vowelUpperA").text("65");
									 		 			        	t1.to("#vowelUpperA", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
								 			        				
									 		 			        		t1.to("#upperCaseCh11", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
									 		 	  			        		$("#upperCaseCh11").text($("#charInput").val().charCodeAt(0));
									 		 	  			        		t1.to("#upperCaseCh11", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
										 		 	  			        		t1.to("#vowelUpperE", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
										 			 		 			        	$("#vowelUpperE").text("69");
										 			 		 			        	t1.to("#vowelUpperE", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
										 			 		 			        		
										 			 		 			        		t1.to("#upperCaseCh22", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
										 				 	  			        			$("#upperCaseCh22").text($("#charInput").val().charCodeAt(0));
										 				 	  			        				t1.to("#upperCaseCh22", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
											 				 	  			        				t1.to("#vowelUpperI", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
											 				 			 		 			        	$("#vowelUpperI").text("73");
											 				 			 		 			        	t1.to("#vowelUpperI", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
											 				 			 		 			        	
											 				 			 		 			        		t1.to("#upperCaseCh33", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
												 					 	  			        					$("#upperCaseCh33").text($("#charInput").val().charCodeAt(0));
												 					 	  			        						t1.to("#upperCaseCh33", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
													 					 	  			        						t1.to("#vowelUpperO", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
																 				 			 		 			        	$("#vowelUpperO").text("79");
																 				 			 		 			        	t1.to("#vowelUpperO", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
										 				 			 		 			        		
																	 				 			 		 			        	t1.to("#upperCaseCh44", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
																	 			 		 	  			        					$("#upperCaseCh44").text($("#charInput").val().charCodeAt(0));
																	 			 		 	  			        					t1.to("#upperCaseCh44", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
																	 			 		 	  			        						t1.to("#vowelUpperU", 0.3, {opacity:1, rotationX: -90, onComplete: function() {
																			 				 			 		 			        		$("#vowelUpperU").text("85");
																			 				 			 		 			        		t1.to("#vowelUpperU", 0.3, {opacity:1, rotationX: 0, onComplete: function() {
																			 				 			 		 			        			typing('#trueSpan1', "evaluates to <b class=color-yellow>true</b>.", function() {
																					  															$('.introjs-nextbutton').show();
																				 		 	  			        								});
																				 				 			 		 			        	 }});
																		 																  }});
																		 							        					 	   }});
																		 													 		}});
																		 					 		 			       			}});
																		 													}});
																		 				        						}});
																		 										 	}});
																		 										}});
																		 									}});
								 				 			 		 			        				}});
					 																				}});
					 									        					 			}});
					 															 			}});
					 				 			 		 			       				}});
		 																			}});
		 									        							}});
		 															 		}});
		 		 			         									}});
																	}});
	        					 								}});
							  								}});
		 		 			        					}});
													}});
	        					 				}});
							 				}});
		        				  		}});
									}});
        						}});
							}});
						}});
	   		 		}});
	  		 	});
 			}
 
 function animation3() {
	 typing('.introjs-tooltiptext', "<span id='upperLetterVowelsIntoolTip' class='opacity00'><span id='upperCaseCh' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'A'</span> <span class=''>||</span> <span id='upperCaseCh1' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'E'</span> <span class=''>||</span> <span id='upperCaseCh2' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'I'</span> <span class=''>||</span> <span id='upperCaseCh3' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'O'</span> <span class=''>||</span>"+
				" <span id='upperCaseCh4' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'U'</span></span><br><span id='upperLetterVowelsIntoolTip1' ></span><br><span id='trueSpan1'></span>", function() {
		var l = $("#upperLetterVowels").offset();
		$("#upperLetterVowelsIntoolTip").offset({"top": l.top,"left": l.left});
	    TweenMax.to("#upperLetterVowelsIntoolTip", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	    	t1.to("#upperCaseCh", 1, {opacity:1, rotationX: -90, onComplete: function() {
	        	$("#upperCaseCh").text('\'' +$("#charInput").val()+'\'');
	        	t1.to("#upperCaseCh", 1, {opacity:1, rotationX: 0, onComplete: function() {
	        		t1.to("#upperCaseCh1", 1, {opacity:1, rotationX: -90, onComplete: function() {
 			        	$("#upperCaseCh1").text('\'' +$("#charInput").val()+'\'');
 			        	t1.to("#upperCaseCh1", 1, {opacity:1, rotationX: 0, onComplete: function() {
 			        		t1.to("#upperCaseCh2", 1, {opacity:1, rotationX: -90, onComplete: function() {
 		 			        	$("#upperCaseCh2").text('\'' +$("#charInput").val()+'\'');
 		 			        	t1.to("#upperCaseCh2", 1, {opacity:1, rotationX: 0, onComplete: function() {
 		 			        		t1.to("#upperCaseChe3", 1, {opacity:1, rotationX: -90, onComplete: function() {
 		 		 			        	$("#upperCaseCh3").text('\'' +$("#charInput").val()+'\'');
 		 		 			        	t1.to("#upperCaseCh3", 1, {opacity:1, rotationX: 0, onComplete: function() {
	 		 		 			        	t1.to("#upperCaseCh4", 1, {opacity:1, rotationX: -90, onComplete: function() {
	 			 		 			        	$("#upperCaseCh4").text('\'' +$("#charInput").val()+'\'');
	 			 		 			        	t1.to("#upperCaseCh4", 1, {opacity:1, rotationX: 0, onComplete: function() {
	 			 		 			       
								 			    	$('#upperLetterVowelsIntoolTip1').append("<span id='upperCaseCh10' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperA'>'A'</span> <span class=''>||</span> <span id='upperCaseCh11' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperE'>'E'</span> <span class=''>||</span> <span id='upperCaseCh22' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperI'>'I'</span> <span class=''>||</span> <span id='upperCaseCh33' class='bold' style='display: inline-block;'>"+ch+"</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperO'>'O'</span> <span class=''>||</span>"+
								 							" <span id='upperCaseCh44' class='bold' style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperU'>'U'</span></span");
								 			      	var l = $("#upperLetterVowelsIntoolTip").offset();
									 				$("#upperLetterVowelsIntoolTip1").offset({"top": l.top,"left": l.left});
									 			    TweenMax.to("#upperLetterVowelsIntoolTip1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
								 			    	
									 			    	t1.to("#upperCaseCh10", 1, {opacity:1, rotationX: -90, onComplete: function() {
									 			        	$("#upperCaseCh10").text($("#charInput").val().charCodeAt(0));
									 			        	t1.to("#upperCaseCh10", 1, {opacity:1, rotationX: 0, onComplete: function() {
									 			        		t1.to("#vowelUpperA", 1, {opacity:1, rotationX: -90, onComplete: function() {
									 		 			        	$("#vowelUpperA").text("65");
									 		 			        	t1.to("#vowelUpperA", 1, {opacity:1, rotationX: 0, onComplete: function() {
								 			        				
									 		 			        		t1.to("#upperCaseCh11", 1, {opacity:1, rotationX: -90, onComplete: function() {
									 		 	  			        		$("#upperCaseCh11").text($("#charInput").val().charCodeAt(0));
									 		 	  			        		t1.to("#upperCaseCh11", 1, {opacity:1, rotationX: 0, onComplete: function() {
										 		 	  			        		t1.to("#vowelUpperE", 1, {opacity:1, rotationX: -90, onComplete: function() {
										 			 		 			        	$("#vowelUpperE").text("69");
										 			 		 			        	t1.to("#vowelUpperE", 1, {opacity:1, rotationX: 0, onComplete: function() {
										 			 		 			        		
										 			 		 			        		t1.to("#upperCaseCh22", 1, {opacity:1, rotationX: -90, onComplete: function() {
										 				 	  			        			$("#upperCaseCh22").text($("#charInput").val().charCodeAt(0));
										 				 	  			        				t1.to("#upperCaseCh22", 1, {opacity:1, rotationX: 0, onComplete: function() {
											 				 	  			        				t1.to("#vowelUpperI", 1, {opacity:1, rotationX: -90, onComplete: function() {
											 				 			 		 			        	$("#vowelUpperI").text("73");
											 				 			 		 			        	t1.to("#vowelUpperI", 1, {opacity:1, rotationX: 0, onComplete: function() {
											 				 			 		 			        	
											 				 			 		 			        		t1.to("#upperCaseCh33", 1, {opacity:1, rotationX: -90, onComplete: function() {
												 					 	  			        					$("#upperCaseCh33").text($("#charInput").val().charCodeAt(0));
												 					 	  			        						t1.to("#upperCaseCh33", 1, {opacity:1, rotationX: 0, onComplete: function() {
													 					 	  			        						t1.to("#vowelUpperO", 1, {opacity:1, rotationX: -90, onComplete: function() {
																 				 			 		 			        	$("#vowelUpperO").text("79");
																 				 			 		 			        	t1.to("#vowelUpperO", 1, {opacity:1, rotationX: 0, onComplete: function() {
										 				 			 		 			        		
																	 				 			 		 			        	t1.to("#upperCaseCh44", 1, {opacity:1, rotationX: -90, onComplete: function() {
																	 			 		 	  			        					$("#upperCaseCh44").text($("#charInput").val().charCodeAt(0));
																	 			 		 	  			        					t1.to("#upperCaseCh44", 1, {opacity:1, rotationX: 0, onComplete: function() {
																	 			 		 	  			        						t1.to("#vowelUpperU", 1, {opacity:1, rotationX: -90, onComplete: function() {
																			 				 			 		 			        		$("#vowelUpperU").text("85");
																			 				 			 		 			        		t1.to("#vowelUpperU", 1, {opacity:1, rotationX: 0, onComplete: function() {
																			 				 			 		 			        			typing('#trueSpan1', "evaluates to <b class=color-yellow>true</b>.", function() {
																					  															$('.introjs-nextbutton').show();
																				 		 	  			        								});
																				 				 			 		 			        	 }});
																		 																  }});
																		 							        					 	   }});
																		 													 		}});
																		 					 		 			       			}});
																		 													}});
																		 				        						}});
																		 										 	}});
																		 										}});
																		 									}});
								 				 			 		 			        				}});
					 																				}});
					 									        					 			}});
					 															 			}});
					 				 			 		 			       				}});
		 																			}});
		 									        							}});
		 															 		}});
		 		 			         									}});
																	}});
	        					 								}});
							  								}});
		 		 			        					}});
													}});
	        					 				}});
							 				}});
		        				  		}});
									}});
        						}});
							}});
						}});
	   		 		}});
	  		 	});
 			}