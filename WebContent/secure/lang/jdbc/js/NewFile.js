var stringInterval;
var text;
var startsWithText;
var prefix;
var startIndex;
var introjs;

	function introJsTest(stepNo) {
		introjs = introJs();
		introjs.setOptions({
			steps: [
			        {
	        	    	element: '#codeIntro' ,
	        	    	intro: 'The above code demonstrates the working of <b>startsWith</b> methods.',
	        	    	position: 'bottom',
	        	    },
	        	    {
		  				element: '#textId', 
		  				intro: "This statement initializes the reference <b>text</b> with <b class='tooltip-text-edit ct-code-b-yellow'>Banana</b>. The text can be changed to any value.<br><br><span class = 'errorText'></span>",
		  				position: 'right',
	  				},
	  				{
		  				element: '#animationDiv', 
		  				intro: "",
		  				position: 'bottom',
		  				tooltipClass: "hide"
	  				},
	  				{
	  					element: '#startsWithNoparameter', 
		  				intro: "This statement prints the result of executing <b>startsWith(String str)</b> method.<br><br><span class = 'errorText'></span>",
		  				position: 'bottom',
	  				},
	  				{
		  				element: '#animationDiv', 
		  				intro: "",
		  				position: 'bottom',
		  				tooltipClass: "hide"
	  				},
	  				{
	        	  		element: '#consoleId', 
	        	  		intro: "",
	        	  		tooltipClass: "hide"
	      	  		},
	  				{
	  					element: '#startsWithMethod', 
		  				intro: "This statement prints the result of executing <b>startsWith(String str, int index)</b> method.<br><br><span class = 'errorText'></span>",
		  				position: 'bottom',
	  				},
	  				{
		  				element: '#animationDiv', 
		  				intro: "",
		  				position: 'bottom',
		  				tooltipClass: "hide"
	  				},
	  				{
	        	  		element: '#consoleId', 
	        	  		intro: "",
	        	  		tooltipClass: "hide"
	      	  		},
	      	  		{
	        	  		element: '.exit-main', 
	        	  		intro: "",
	        	  		tooltipClass: "hide"
	      	  		},
	      	  		{
		  				element: '#restart', 
		  				intro: "Click to Restart",
		  				position: 'right',
	  				}]
		});
		introjs.setOption("showStepNumbers","false");
	 	introjs.setOption("exitOnEsc","true");
	 	introjs.setOption("exitOnOverlayClick","false");
	 	introjs.setOption("showBullets","false");
		introjs.setOption('keyboardNavigation', false);
		introjs.goToStep(stepNo).start();
		//introjs.start();
		$('.introjs-tooltipbuttons').append("<a id='skipButton' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
		$("#skipButton").insertBefore(".introjs-nextbutton");
		$("#space").insertBefore(".introjs-nextbutton");
		$('.introjs-bullets').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		
	}



var startsWithMethods = function() {
	
	introJsTest(1);
	$("#skipButton").hide();
	$('body').keydown(function(e) {
		if(e.which == 13) {
			e.preventDefault();
		}	
	});
	
	$(".given-text").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46) {
	   			return true;
			}
			e.preventDefault();
	 	}
	});
	
	$("#changeText").keyup(function() {
		introjs.refresh();
        $(".tooltip-text-edit").text($("#changeText").text());
    });
	
	$(".index-length-limit").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
			if ($(this).text().length > max || (isNaN($(this).text()))) {
				if (e.which == 8 || e.which == 46) {
		   			return true;	
				}
   			e.preventDefault();
		 	}
			if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
			return true;
		} else {
			e.preventDefault();
		}
	});  
	
	$(".given-text").keyup(function() {
    	introjs.refresh();
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton").removeClass("opacity00");
        	$("#skipButton").removeClass("opacity00");
        } else {
        	$(".introjs-nextbutton").addClass("opacity00");
        	$("#skipButton").addClass("opacity00");
        	$('.errorText').text("please enter text");
        }
    });
	
	$("#startsWithIndex").keyup(function() {
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton").removeClass("opacity00");
        	$("#skipButton").removeClass("opacity00");
        } else {
        	$(".introjs-nextbutton").addClass("opacity00");
        	$("#skipButton").addClass("opacity00");
        	$('.errorText').text("please enter index");
        }
    });
	$("#restart").click(function() {
		 location.reload();
	});
	$("#skipButton").click(function() {
		if(introjs._currentStep == 3) {
			introjs.goToStep(6);
		}
		if(introjs._currentStep == 6) {
			$('.introjs-nextbutton').hide();
			$("#skipButton").hide();
			introjs.goToStep(9);
		}
	});
	
	
	//introJsTest(0);
	introjs.onbeforechange(function(targetElement) { 
		
		var element = targetElement.id;
		console.log(element);	
		
		if (element == "codeIntro" ) {
			console.log("asdf3");
		}
		
		
		if(element == "textId") { 
		$("#changeText").attr("contenteditable", true);
			setTimeout(function() {
				charAtEnd(document.getElementById("changeText"));
			},1000);
		}
		
		if(element == "startsWithNoparameter") {
			$("#prefix").attr("contenteditable", true);
			setTimeout(function() {
				charAtEnd(document.getElementById("prefix"));
			},1000);
		}
		
		if(element == "startsWithMethod") {
			$("#startsWithText").attr("contenteditable", true);
			$("#startsWithIndex").attr("contenteditable", true);
			setTimeout(function() {
				charAtEnd(document.getElementById("startsWithText"));
			},1000);
		}
		
		
		
		
		if(element == "animationDiv") {
			text = $('#changeText').text();
			startsWithText = $("#startsWithText").text();
			prefix = $("#prefix").text();
			startIndex = parseInt($("#startsWithIndex").text());
			
			$("#animationDiv").append( $("#textBoxes") );
			$("#animationDiv").append( $("#startsWithBoxes") );
			$("#animationDiv").append( $("#result") );
							
			var tl = new TimelineLite();
			if(text.length > 0) {
				if(introjs._currentStep == 2) {
					$("#changeText").attr("contenteditable", false);
					$("#skipButton").show();
					$('#enteredText').hide();
					$('#textIndices').hide();
					givenText();
		      		$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#enteredText').append("text = ");
						$('#enteredText').fadeIn(500);
		      		}); 
					tl.staggerFrom("#executeBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#executeBoxes", 0.5, {onComplete: function() {
						$('#textIndices').append("Indices = ");
						$('#textIndices').fadeIn(500);
					}});
					tl.staggerFrom("#excecuteIndices", 0.5, {opacity:0, y:-200, delay:0.5});
					tl.from("#excecuteIndices", 0.5, {delay:0.5, onComplete : function() {
						$('.introjs-nextbutton').click();
					}});
				}  else if(introjs._currentStep == 4) {
					prefix = $("#prefix").text();
					$("#prefix").attr("contenteditable", false);
					$('#swText').hide();
					$('#animationDiv br').remove();
					$("#animationDiv").append("<br><br><br><br>");
					$("#textBoxes").append("<br>");
					prefixText();
		      		$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#swText').append("Starts with text = ");
						$('#swText').fadeIn(800);
		      		}); 
					tl.staggerFrom("#swBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength").append("Length of the <b>text</b> = <span class = 'length'> "+ text.length + "</span>" );
						$("#compareLength").fadeIn(500);
					}});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength2").append("<br>Length of the <b>starts with text</b> = <span class = 'length'> "+ prefix.length + "</span>" );
						$("#compareLength2").fadeIn(500);
					}});
					var z = 0;
					if(prefix.length <= text.length) {
						tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
							$(".length").css("border", "1px solid blue");
							typing("#startWithError", "<br>Since the length of <b>starts with text</b> does not exceed the length of <b>text</b>, we will compare the characters.");
						}});
						tl.from("#", 0.5, {delay: 8.5, onComplete: function() {
							$("#compareLength").fadeOut(500);
							$("#compareLength2").fadeOut(500);
							$("#startWithError").fadeOut(500);
						}});
						tl.from("#swBoxes", 0.5, {delay:0.5, onComplete: function() {
							stringInterval = setInterval(function() {
								$("#textIndex" + z).css("border", "2px solid #A9A9A9");
								if(z > 0) {
									$('#circleAtText1'+ (z-1)).hide();
									$('#circleAtSw'+ (z-1)).hide();
								}
								
								$("#textBox" + z).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText1" + z + "'></span>")
								$("#swBox" + z).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtSw" + z + "'></span>")
								
								$('#circleAtText1'+ z).hide();
								$('#circleAtSw'+ z).hide();
								$('#circleAtText1'+ z).fadeIn(500);
								$('#circleAtSw'+ z).fadeIn(1200);
								if (z == (prefix.length - 1)) {
									clearInterval(stringInterval);
									$('.comparingCircle').fadeOut(800);
									setTimeout(function() {
										$(".circle").css("border", "none");
										$('.introjs-nextbutton').click();
									},2200);
								}
								
								if(text.charAt(z) === prefix.charAt(z)) {
									setTimeout(function() {
										$("#result").append("<span class='check fa fa-check'></span>&nbsp;");
										++z;
									},1300);
								} else {
									setTimeout(function() {
										$("#result").append("<span class='not-matched fa fa-times'></span>&nbsp;");
										clearInterval(stringInterval);
										$('.comparingCircle').fadeOut(800);
									},1300);
									setTimeout(function() {
										$(".circle").css("border", "none");
										if (z != (prefix.length-1)) {
											$('.introjs-nextbutton').click();
										}
									},2500);
								}
							},2200);
						}},"-=1.8");
					} else {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#startWithError", "<br>Since the length of the <b>starts with text</b> exceeds the length of the <b>text</b>, <b>text</b> will not start with it.");
							}});
							tl.from("#", 0.5, {delay: 8.5, onComplete: function() {
								$('.introjs-nextbutton').click();
							}});
						});
					}
				} else if(introjs._currentStep == 7) {
					startsWithText = $("#startsWithText").text();
					startIndex = parseInt($("#startsWithIndex").text());
					$("#startsWithText").attr("contenteditable", false);
					$("#startsWithIndex").attr("contenteditable", false);
					$('#startWithError').empty();
					$('#startWithError').show();
					$("#compareLength").empty();
					$("#compareLength2").empty();
					$('#swText').hide();
					$('#swText').empty();
					$('#swBoxes').empty();
					$("#result").empty();
					$("#result").append("&nbsp;");
					$('#animationDiv br').remove();
					$("#animationDiv").append("<br><br><br><br><br>");
					$("#textBoxes").append("<br>");
					$(".introjs-nextbutton").hide();
		        	$("#skipButton").hide();
					startWithText();
		      		$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#swText').append("Starts with text = ");
						$('#swText').fadeIn(800);
		      		}); 
					tl.staggerFrom("#swBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength").append("Length of the <b>text</b> = <span class = 'length'> "+ text.length + "</span>" );
						$("#compareLength").fadeIn(500);
					}});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength2").append("<br>Length of the <b>starts with text</b> = <span class = 'length'> "+ startsWithText.length + "</span>" );
						$("#compareLength2").fadeIn(500);
					}});  
					var x = startIndex;
					var y = 0;
					if(startIndex <= text.length-1 && startsWithText.length <= text.length) {
						tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
							$(".length").css("border", "1px solid blue");
							typing("#startWithError", "<br>Since the length of <b>starts with text</b> not exceeds the length of <b>text</b>, we will compare characters.");
						}});
						tl.from("#", 0.5, {delay: 8, onComplete: function() {
							$("#compareLength").fadeOut(500);
							$("#compareLength2").fadeOut(500);
							$("#startWithError").fadeOut(500);
						}});
						tl.from("#swBoxes", 0.5, {delay: 0.5, onComplete: function() {
							stringInterval = setInterval(function() {
								$("#textIndex" + x).css("border", "2px solid #A9A9A9");
								if(x > startIndex) {
									$('#circleAtText2'+ (x-1)).hide();
									$('#circleAtSw2'+ (y-1)).hide(); 
								}
								
								$("#textBox" + x).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText2" + x + "'></span>")
								$("#swBox" + y).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtSw2" + y + "'></span>")
								
								$('#circleAtText2'+ x).hide();
								$('#circleAtSw2'+ y).hide();
								$('#circleAtText2'+ x).fadeIn(500);
								$('#circleAtSw2'+ y).fadeIn(1200);
								if (x == (startIndex + (startsWithText.length-1))) {
									clearInterval(stringInterval);
									$('.comparingCircle').fadeOut(800);
									setTimeout(function() {
										$('.introjs-nextbutton').click();
									},2200);
								}
								if(text.charAt(x) === startsWithText.charAt(y)) {
									setTimeout(function() {
										$("#result").append("<span class='check fa fa-check'></span>&nbsp;");
										++x;
										++y;
									},1300);
								} else {
									setTimeout(function() {
										$("#result").append("<span class='not-matched fa fa-times'></span>&nbsp;");
										clearInterval(stringInterval);
										$('.comparingCircle').fadeOut(800);
									},1300);
									setTimeout(function() {
										if (x != (startIndex + (startsWithText.length-1))) {
											$('.introjs-nextbutton').click();
										}
									},2500);
								}
							},2200);
						}},"-=1.8");
					} else if(startsWithText.length > text.length) {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#startWithError", "<br>Since the length of the <b>starts with text</b> exceeds the length of the <b>text</b>, <b>text</b> can't starts with it.");
							}});
							tl.from("#", 0.5, {delay: 8.5, onComplete: function() {
								$('.introjs-nextbutton').click();
							}});
						});
					} else if(startIndex > text.length - 1) {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#startWithError", "<br>Length of the <b>starts with text</b> not exceeds the length of the <b>text</b>.<br>But Starts with index <b style = 'color : red'>"+ startIndex + "</b> exceeds the <b>last index of the text</b>, So <b>text</b> can't starts with it.");
							}});
							tl.from("#", 0.5, {delay: 13, onComplete: function() {
								$('.introjs-nextbutton').click();
							}});
						});
					}
				}
			} 
		}
		if(element == "consoleId") {
			text = $('#changeText').text();
			startIndex = parseInt($("#startsWithIndex").text());
			startsWithText = $("#startsWithText").text();
			prefix = $("#prefix").text();
			console.log(prefix);
			var returnVal = (text.substring(0, (prefix.length)) === prefix);
			console.log(returnVal);
			var returnVal2 = (text.substring(startIndex, (startIndex + (startsWithText.length))) === startsWithText);
			
			if(introjs._currentStep == 5) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1", "startsWith : " + returnVal);
				});
				setTimeout(function() {
		       		$('.introjs-nextbutton').click();
		       	}, 2800);
			}
			if(introjs._currentStep == 8) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor2", "startsWith : " + returnVal2);
				});
				setTimeout(function() {
		       		$('.introjs-nextbutton').click();
		       		$('.introjs-helperLayer').one('transitionend', function() {
		       			$('.exit-main').fadeTo(500, 1);
					});
		       	}, 2800);
			}
		}
		if(introjs._currentStep == 9) {
			setTimeout (function() {
				$('.introjs-nextbutton').click();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#restart').fadeTo(1000,1);
				});
			}, 2800);
		}
	});
}


/* ------------------------   functions    -------------------------- */
var i;
function givenText() {	
	for(i = 0; i < text.length; i++) {
		$("#row1").append($("#textIndices"));
		$("#row2").append($("#enteredText"));
		$("#row1").append($("#excecuteIndices"));
		$("#row2").append($("#executeBoxes")); 
		
		$("#excecuteIndices").append("<span id = 'textIndex"+i+"' class = 'circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
		$("#executeBoxes").append("<span id = 'textBox"+i+"' class='box green'><b class='letter'>" + text.charAt(i) + "</b></span>&nbsp;");						
	}
}
function prefixText() {	
	for(i = 0; i < prefix.length; i++) {
		$("#swBoxes").append("<span id = 'swBox"+i+"' class='box green'><b class='letter'>" + prefix.charAt(i) + "</b></span>&nbsp;");						
	}
}
function startWithText() {	
	for(i = 0; i < startsWithText.length; i++) {
		$("#swBoxes").append("<span id = 'swBox"+i+"' class='box green'><b class='letter'>" + startsWithText.charAt(i) + "</b></span>&nbsp;");						
	}
}
function typing(id, content) {
 $(id).removeClass('typingCursor');
    $(id).typewriting( content , {
          "typing_interval": 75,
          "cursor_color": 'white'
     }, function() {	    
    	 $(id).removeClass('typingCursor');
    }); 
}
function charAtEnd(element) {
	element.focus();
	
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
	    var range = document.createRange();
	    range.selectNodeContents(element);
	    range.collapse(false);
	    
	    var sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	}    	   
}
function typingOutput(id, content) {
    $(id).typewriting( content , {
          "typing_interval": 40,
          "cursor_color": 'white',    
          
      }, function() {
    	  $(id).removeClass('typingCursor');
      }); 
	}