var introcode;
var typingInterval = 1;
var fpAddress;
var enterText;
var characterCount = 1;
var printCharacterCount = 1;
var  ctrlText;


function randamFunction() {
	var x = Math.floor((Math.random() * 1024) + 5125);
	$("#address1").text(x);
	var y = Math.floor((Math.random() * 1054) + 1850);
	$("#address2").text(y);
	fpAddress = Math.floor((Math.random() * 1086) + 1850);
	
	$("#svgDiv1").click(function() {
		  $("#character" + characterCount).removeAttr().focus();
	});
}

function introGuide() {
		introcode = introJs();
		introcode.setOptions({
			showStepNumbers : false,
			exitOnOverlayClick : false,
			showBullets : false,
			exitOnEsc : false,
			keyboardNavigation : false,
				steps : [{
					element :'#fileText',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#code',
					intro :'',
					tooltipClass : "hide",
					position: "right"
				},{
					element :'#filePointer',
					intro :'',
					tooltipClass : "hide",
				},{
					element :'#addressDiv1',
					intro :'',
					tooltipClass : "hide",
					animateStep: "addresslocation"
				},{
					element :'#characterPointer',
					intro :'',
					tooltipClass : "hide",
				},{
					element :'#addressDiv2',
					intro :'',
					tooltipClass : "hide",
					animateStep: "addressDiv2location"
				},{
					element :'#fileOpen',
					intro :'',
					tooltipClass : "hide",
				},{
					element :'#codetantraFile',
					intro :'',
					tooltipClass : "hide",
					animateStep: "location"
				},{
					element :'#sopLine1',
					intro :'',
					tooltipClass : "hide",
				},{
					element :'#outputDiv',
					intro :'',
					tooltipClass : "hide",
					animateStep: "printText"
				},{
					element :'#closeFile1',
					intro :'',
					tooltipClass : "hide",
					animateStep: "printText"
				}]
		});
		introcode.onafterchange(function(targetElement){
			var elementId = targetElement.id;
			switch (elementId) {
				case "fileText" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					TweenMax.to('#text3', 0.5, {opacity: 1, onComplete: function() {
						TweenMax.to('#text4', 0.5, {opacity: 1, onComplete: function() {
							$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
								$('.introjs-duplicate-nextbutton').click(function() {
									$('#mainDiv').removeClass('opacity00');
									$(".introjs-duplicate-nextbutton").remove();
									introcode.nextStep();
								});
							});
						}});
					}});
				break;
				case "code":
					$("#fileText").addClass("z-index1000000");
						$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we will learn how the <span class="ct-code-b-yellow">fgetc()</span> and'
								+ ' <span class="ct-code-b-yellow">fputc()</span> methods work on a file.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "filePointer" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
						$('.introjs-tooltip').removeClass('hide');
						var text = '<span class="ct-code-b-yellow">FILE</span> is a data structure defined in the standard I/O functions '
							+ 'and points to the internal structure that describes the file.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "addressDiv1" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						var animateStep = introcode._introItems[introcode._currentStep].animateStep;
						switch(animateStep) {
						 case "addresslocation" :
							 transferEffect("#filePointer", "#addressDiv1");
						break;
						}
					});
				break;
				case "characterPointer" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
						$('.introjs-tooltip').removeClass('hide');
						text = 'The <span class="ct-code-b-yellow">char</span> data type stores only one'
								+ ' <span class="ct-code-b-yellow">character</span> at a time.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "addressDiv2" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "addressDiv2location" :
							transferEffect("#characterPointer", "#addressDiv2");
							break;
							case "addressDiv2storeValue" :
								if (ctrlText == "EOF") {
									$("#addressValue2").text(ctrlText);
								} else {
									$("#addressValue2").text($("#character" + characterCount).val());
								}
								introNextStep();
							break;
							case "printaddressDiv2" :
								if ($("#putcharacter" + printCharacterCount).text() == "EOF") {
									$("#addressValue2").text($("#putcharacter" + printCharacterCount).text());
									introNextStep();
								} else {
									$("#addressValue2").text($("#putcharacter" + printCharacterCount).text());
									$('#addressValue1').addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
										TweenMax.to("#addressValue1", 1, {rotationX: 90, onComplete:function() {
											$("#addressValue1").text(parseInt($("#addressValue1").text()) + 1);
										    TweenMax.to("#addressValue1", 1, {rotationX: 0, onComplete:function() {
										    	$('#addressValue1').removeClass("z-index1000000");
												var l1 = $("#putcharacter" + (printCharacterCount +1)).offset();
												var l2 = $(".fa-arrow-up").offset({top: l1.top, left: l1.left});
												var l3 = $("#putcharacter" + (printCharacterCount )).offset();
												var leftLength = l3.left-l1.left;
												$(".fa-arrow-up").css({top:-0});  
												TweenMax.from(".fa.arrow-up", 1, {top: 0, left: leftLength, onComplete: function() {
													introNextStep();
												}});
											}});
									  	}});
									});
								}
							break;
						}
					});
				break;
				case "fileOpen" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The function <span class="ct-code-b-yellow">fopen()</span> opens a file with '
								+ '<span class="ct-code-b-yellow">w</span>(writing)'
								+ " mode. <br/><br/><span class='ct-code-b-yellow'>w</span> stands "
								+ "for <span class='ct-code-b-yellow'>write</span> mode.<br>"
								+ " In <span class='ct-code-b-yellow'>write</span> mode, if the file <b>does not exist</b>"
								+ ", a file with the specified name is created.<br><br> If the file <b>exists</b>"
								+ " with the same name, the contents of the file are deleted.";
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "fileOpen1" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The file <span class="ct-code-b-yellow">codetantra.txt</span> is opened in read mode. '
								+ "In <span class='ct-code-b-yellow'>read</span> mode, "
								+ "the file data can only be read.";
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "codetantraFile" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						var animateStep = introcode._introItems[introcode._currentStep].animateStep;
						switch(animateStep) {
							case "location" :
								$("#codetantraFile").removeClass("opacity00");
								$("#textFile").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$("#textFile").removeClass("animated zoomIn");
									$("#text").removeClass("opacity00");
									$("#fileSpan").append('<span id="putcharacter'+ characterCount+'" class = "opacity00"></span>');
									$('#textFile').append('<br><i class="fa fa-arrow-up arrow-up"><br><br><br>'
											+'<div id="address3" class="address-text text-center"></div></i>');
									$("#address3").text(fpAddress);
									$('.introjs-tooltip').removeClass('hide');
									var text = "Here, the file structure base address is stored in the "
										+ "<span class='ct-code-b-yellow'>file pointer(fp)</span>.";
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " 
												+ "onclick=svgArrowRevil()>Next &#8594;</a>");
									});
								});
								break;
							case "storeValue" :
								$('.introjs-tooltip').removeClass('hide');
								text = 'The <span class="ct-code-b-yellow">fputc()</span> method writes the character '
										+ '<span class="ct-code-b-yellow">' + $("#character" + characterCount).val() + '</span>'
										+ ' to the file at the position pointed by <span class="ct-code-b-yellow">fp</span>'
										+' (<span class="ct-code-b-yellow">'
										+ $("#addressValue1").text() +'</span>).<br/><br/> The file pointer'
										+ ' <span class="ct-code-b-yellow">fp</span> will be automatically incremented'
										+ ' by <span class="ct-code-b-yellow">1</span>.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button "
											+ "introjs-duplicate-nextbutton'>Next &#8594;</a>");
									$(".introjs-duplicate-nextbutton").click(function() {
										$(".introjs-duplicate-nextbutton").remove();
										$('.introjs-tooltip').addClass('hide');
										$("#putcharacter" + characterCount).text($("#character" + characterCount).val()).removeClass("opacity00");
										characterCount++;
										$("#fileSpan").append('<span id="putcharacter'+ characterCount+'" class = "opacity00"></span>');
										$('#addressValue1').addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
											TweenMax.to("#addressValue1", 1, {rotationX: 90, onComplete:function() {
												$("#addressValue1").text(parseInt($("#addressValue1").text()) + 1);
												TweenMax.to("#addressValue1", 1, {rotationX: 0, onComplete:function() {
													$('#addressValue1').removeClass("z-index1000000");
													var l1 = $("#putcharacter" + characterCount).offset();
													var l2 = $(".fa-arrow-up").offset({top: l1.top, left: l1.left});
													var l3 = $("#putcharacter" + (characterCount -1)).offset();
													var leftLength = l1.left-l3.left;
													TweenMax.from(".fa.arrow-up", 1, {top: 0, left: leftLength, onComplete: function() {
														introNextStep();
													}});
												}});
											}});
										});
									});
								});
							break;
							case "fileClose" :
								$('.introjs-tooltip').removeClass('hide');
								text = 'Before closing a file the file pointer puts a <span class="ct-code-b-yellow">EOF</span>.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
									$(".introjs-duplicate-nextbutton").click(function() {
										$(".introjs-duplicate-nextbutton").remove();
										$('.introjs-tooltip').addClass('hide');
										$("#putcharacter" + characterCount).text(ctrlText).removeClass("opacity00").addClass("ct-code-b-red");
										setTimeout(function() {
											$("#addressValue1").addClass("opacity00");
											$("#codetantraFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
												$(".fa-arrow-up").addClass("opacity00");
												$("#codetantraFile").removeClass("animated zoomOut").addClass("opacity00");
												introNextStep();
											});								
										},800);
									});
								});
							break;
							case "fileOpen" :
								$(".introjs-duplicate-nextbutton").remove();
								$('.introjs-tooltip').addClass('hide');
								$("#codetantraFile").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$("#codetantraFile").removeClass("animated zoomIn opacity00");
									$(".fa-arrow-up").css({top: 0, left: 0}).removeClass("opacity00");
									$("#address3").removeClass("opacity00");
									setTimeout(function(){
										svgArrowRevilLine();
									},500);
								});								
							break;
							case "fileRead" :
								$('.introjs-tooltip').removeClass('hide');
								text = 'Reads the character <span class="ct-code-b-yellow">' + $("#putcharacter" + printCharacterCount).text() 
										+ '</span> from file at fp(<span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>).';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									if ($("#putcharacter" + printCharacterCount).text() == "EOF") {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											introcode.goToStep(22);
										});
									} else {
										$('.introjs-nextbutton').show();	
									}
								});	
							break;
							case "fileClose1" :
								$("#addressValue1, #addressValue2").addClass("opacity00");
									$("#codetantraFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
									$(".fa-arrow-up").addClass("opacity00");
									$("#codetantraFile").removeClass("animated zoomOut").addClass("opacity00");
									var options = {
											element : "#restartBtn",
											intro : "Click to Restart",
											tooltipClass: "introjs-tooltip-min-width-custom",
											position : "right"
									}
									introcode.insertOption(introcode._currentStep + 1, options);
									introNextStep();
								});								
									break;
								
						}
					});
				break;
				case "sopLine1" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$("#addressDiv1").removeClass("z-index1000000");
					$("#line1, #line2, #line3").css({opacity: 0})
		  			$("#address3").addClass("opacity00");
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeout(function() {
							introcode.nextStep()
						}, 500);
					});
				break;
				case "sopLine2" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$("#addressDiv1").removeClass("z-index1000000");
					$("#svgDiv1, #address3").remove();
					ctrlText = "";
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeout(function() {
							introcode.nextStep()
						}, 500);
					});
				break;
				case "outputDiv" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						var animateStep = introcode._introItems[introcode._currentStep].animateStep;
						switch(animateStep) {
							case "printText" :
								$("#outputConsoleBody").append('<div id = "printOutput">Enter a character</div>');
								$("#outputConsoleBody").append('<div id = "appendDiv"></div>');
								$("#appendDiv").append('<input type="text" class = "input-box" maxlength="1"'
										+' size="1" id="character'+characterCount+'">');
								$('.introjs-tooltip').removeClass('hide');
								var text = 'Please enter a character.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('#character' + characterCount).removeAttr().focus();
									changeValue("#character" + characterCount);
									dynamicSteps("location");
								});
							break;
							case "enterText" :
								$("#outputConsoleBody").append('<div id = "appendDiv"></div>');
								$("#appendDiv").append('<input type="text" class = "input-box" maxlength="1"'
										+ ' size="1" id="character'+characterCount+'">');
								$('.introjs-tooltip').removeClass('hide');
								text = 'Please enter a character to continue or '
										+ 'press <span class="ct-code-b-yellow">ctrl + d</span> on key bord to exit.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('#character' + characterCount).removeAttr().focus();
								changeValue("#character" + characterCount);
								dynamicSteps("location");
							});
							break;
							case "printtext" :
								$("#outputConsoleBody").append('<div id = "	Output'+ characterCount +'">Print the characters</div>');
								$("#outputConsoleBody").append('<div id = "appendDiv1"></div>');
								$("#appendDiv1").append('<span id="textCharacter'+ printCharacterCount+'"></span>');
								fileReadSteps();
								introNextStep();
							break;
							case "printEnterText":
								$("#textCharacter" + printCharacterCount).text($("#addressValue2").text());
								printCharacterCount++;
								$("#appendDiv1").append('<span id="textCharacter'+ printCharacterCount+'"></span>');
								fileReadSteps();
								introNextStep();
								break;
						}
					});
				break;
				case "whileCondition1" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						var animateStep = introcode._introItems[introcode._currentStep].animateStep;
						switch(animateStep) {
							case "location" :
								introNextStep();
							break;
							case "condition" :
								if (ctrlText == 'EOF') {
									$('.introjs-tooltip').removeClass('hide');
									var text = 'The value entered is <span class="ct-code-b-yellow">'+ ctrlText + 
											' </span> and <span class="ct-code-b-yellow">'+ ctrlText 
											+ '</span> !=  <span class="ct-code-b-yellow">'+
											'EOF(ctrl + d)</span>, so condition evaluates to  <span class="ct-code-b-yellow">false</span>.';
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										fileCloseAndOpenSteps();
										$('.introjs-nextbutton').show();
									});
								} else {
									$("#character" + characterCount).attr("disabled", "disabled")
									$('.introjs-tooltip').removeClass('hide');
									var text = 'The value entered is <span class="ct-code-b-yellow">'+ $("#character" + characterCount).val()  +
											'</span> and <span class="ct-code-b-yellow">'+ $("#character" + characterCount).val()  +
											'</span>!=  <span class="ct-code-b-yellow">'+
											'EOF(ctrl + d)</span>, so the condition evaluates to <span class="ct-code-b-yellow">true</span>.';
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										$('.introjs-nextbutton').show();
									});
								}
							break;
						}
					});
				break;
				case "whileCondition2" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						var animateStep = introcode._introItems[introcode._currentStep].animateStep;
						switch(animateStep) {
							case "condition1" :
								introNextStep();
							break;
							case "condition2" :
								var con = $("#putcharacter" + printCharacterCount).text() == 'EOF'
								$('.introjs-tooltip').removeClass('hide');
								text = 'Here, the value of  <span class="ct-code-b-yellow">ch</span> is <span class="ct-code-b-yellow">'
									+ $("#putcharacter" + printCharacterCount).text() +'</span> and '
									+ '<span class="ct-code-b-yellow">'+ $("#putcharacter" + printCharacterCount).text() 
									+ '</span> !=  <span class="ct-code-b-yellow">'+
									'EOF(ctrl + d)</span>so, the condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
								if (con) {
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										var options = {
												element :'#closeFile2',
												intro :'',
												tooltipClass : "hide",
											}
											introcode.insertOption(introcode._currentStep + 1, options);
										$('.introjs-nextbutton').show();
									});
								} else {
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										$('.introjs-nextbutton').show();
									});
								}
							break;
						}
					});
				break;
				case "putChar" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The <span class="ct-code-b-yellow">putchar()</span> function is used to '
								+ ' write a character to the console or any other standard output.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "characterStore" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						$("#addressValue2").removeClass("opacity00");
						var inputVal;
						if (ctrlText == 'EOF') {
							inputVal = ctrlText;
						} else {
							inputVal = $("#character" + characterCount).val();
						}
						var text = 'The <span class="ct-code-b-yellow">getchar()</span> is used to get the character from the console.<br>'
								+ ' <br/>Here the value entered in the console is <span class="ct-code-b-yellow">'
								+ inputVal + '</span>, and is stored in a variable'
								+ ' <span class="ct-code-b-yellow">ch</span>.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "fputCharacter" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = 'The function <span class="ct-code-b-yellow">fputc(ch, fp)</span> writes'
								+ ' the character <span class="ct-code-b-yellow">ch</span> to the file.<br/><br/>'
								+ ' The file pointer <span class="ct-code-b-yellow">fp</span> automatically'
								+ ' increments by <span class="ct-code-b-yellow">one</span>. '
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "fgetcharacter" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The function <span class="ct-code-b-yellow">fgetc(fp)</span> '
								+ 'gets the character from the file, that is in the position <span class="ct-code-b-yellow">fp</span>.'
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "closeFile1" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The function <span class="ct-code-b-yellow">fclose(fp)</span> '
								+ ' is used to close the file.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "closeFile2" :
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The function <span class="ct-code-b-yellow">fclose(fp)</span> '
								+ ' is used to close the file.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							var options = {
									element :'#codetantraFile',
									intro :'',
									tooltipClass : "hide",
									animateStep: "fileClose1"
							}
							introcode.insertOption(introcode._currentStep + 1, options);
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "restartBtn":
					$('.introjs-helperLayer').one('transitionend', function () {
						$("#restartBtn").removeClass('visibility-hidden');
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				break;
			}
		});
		introcode.start();
		$('.introjs-skipbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-nextbutton').hide(); 
	}
	
	function dynamicSteps(action) {
		var options = {
			element : '#whileCondition1',
			intro :'',
			tooltipClass : "hide",
			animateStep: "location"
		}
		introcode.insertOption(introcode._currentStep + 1, options);
		var options = {
			element :'#characterStore',
			intro :'',
			tooltipClass : "hide",
		}
		introcode.insertOption(introcode._currentStep + 2, options);
		var options = {
			element :'#addressDiv2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "addressDiv2storeValue"
		}
		introcode.insertOption(introcode._currentStep + 3, options);
		var options = {
			element :'#whileCondition1',
			intro :'',
			tooltipClass : "hide",
			animateStep: "condition"
		}
		introcode.insertOption(introcode._currentStep + 4, options);
		var options = {
			element :'#fputCharacter',
			intro :'',
			tooltipClass : "hide",
		}
		introcode.insertOption(introcode._currentStep + 5, options);
		var options = {
			element :'#codetantraFile',
			intro :'',
			tooltipClass : "hide",
			animateStep: "storeValue"
		}
		introcode.insertOption(introcode._currentStep + 6, options);
		var options = {
			element :'#outputDiv',
			intro :'',
			tooltipClass : "hide",
			animateStep: "enterText"
		}
		introcode.insertOption(introcode._currentStep + 7, options);
	}
	
	function fileCloseAndOpenSteps() {
		var options = {
				element :'#closeFile1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "location"
		}
		introcode.insertOption(introcode._currentStep + 1, options);
		var options = {
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "fileClose"
		}
		introcode.insertOption(introcode._currentStep + 2, options);
		var options = {
				element :'#fileOpen1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "location"
		}
		introcode.insertOption(introcode._currentStep + 3, options);
		var options = {
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "fileOpen"
		}
		introcode.insertOption(introcode._currentStep + 4, options);
		var options = {
				element :'#sopLine2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "location"
		}
		introcode.insertOption(introcode._currentStep + 5, options);
		var options = {
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printtext"
		}
		introcode.insertOption(introcode._currentStep + 6, options);
	}
	
	
	function fileReadSteps() {
		var options = {
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "fileRead"
		}
		introcode.insertOption(introcode._currentStep + 1, options);
		var options = {
				element :'#whileCondition2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "condition1"
		}
		introcode.insertOption(introcode._currentStep + 2, options);
		var options = {
			element :'#fgetcharacter',
			intro :'',
			tooltipClass : "hide",
		}
		introcode.insertOption(introcode._currentStep + 3, options);
		var options = {
			element :'#addressDiv2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "printaddressDiv2"
		}
		introcode.insertOption(introcode._currentStep + 4, options);
		var options = {
			element :'#whileCondition2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "condition2"
		}
		introcode.insertOption(introcode._currentStep + 5, options);
		var options = {
			element :'#putChar',
			intro :'',
			tooltipClass : "hide",
		}
		introcode.insertOption(introcode._currentStep + 6, options);
		var options = {
			element :'#outputDiv',
			intro :'',
			tooltipClass : "hide",
			animateStep: "printEnterText"
		}
		introcode.insertOption(introcode._currentStep + 7, options);
	}
	
	function svgArrowRevil() {
		$(".introjs-duplicate-nextbutton").remove();
  		$("#addressValue1").text(fpAddress).addClass("opacity00");
		TweenMax.to("#line3", 1, {attr:{x2: "66.8%", y2: "34.8%" }, opacity: 1, onComplete:function(){
			$("#arrow111").css({"opacity": "0"});
			TweenMax.to("#line2", 1, {attr:{x2: "66.8%", y2: "15.6%" }, opacity: 1, onComplete:function(){
				$("#arrow11").css({"opacity": "0"});
			  	TweenMax.to("#line1", 1, {attr:{x2: "60.4%", y2: "15.8%" }, opacity: 1, onComplete:function(){
					$("#addressDiv1").addClass("z-index1000000");
					setTimeout(function() {
						$("#addressValue1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				  			$("#addressValue1").removeClass("animated zoomIn");
				  			$('.introjs-nextbutton').show();
				  		});
					},500);
				}});
			}});
		}});
	}
	
	function svgArrowRevilLine() {
		$(".introjs-duplicate-nextbutton").remove();
  		$("#addressValue1").text(fpAddress).addClass("opacity00");
  		$("#arrow111").css({"opacity": "1"});
		TweenMax.to("#line13", 1, {attr:{x2: "66.8%", y2: "34.8%" }, opacity: 1, onComplete:function(){
			$("#arrow111").css({"opacity": "0"});
			$("#arrow11").css({"opacity": "1"});
			TweenMax.to("#line12", 1, {attr:{x2: "66.8%", y2: "15.6%" }, opacity: 1, onComplete:function(){
				$("#arrow11").css({"opacity": "0"});
			  	TweenMax.to("#line11", 1, {attr:{x2: "60.4%", y2: "15.8%" }, opacity: 1, onComplete:function(){
					$("#addressDiv1").addClass("z-index1000000");
					setTimeout(function() {
						$("#addressValue1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				  			$("#addressValue1").removeClass("animated zoomIn");
				  			setTimeout(function() {
				  				introcode.nextStep();
				  			},800);
				  		});
					},500);
				}});
			}});
		}});
	}
	
	function introNextStep() {
		setTimeout(function() {
			introcode.nextStep();
		},500);
	}
	
	function transferEffect(selector1, selector2) {
		$(selector1).effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			TweenMax.to(selector2, 1, {opacity: 1, onComplete: function() {
				setTimeout(function(){
					introcode.nextStep();
				},800);
				}});
		});
	}
	
	function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval" : typingInterval,
			"cursor_color" : cursorColor
		}, function() {
			$(typingId).removeClass("typingCursor");
			typingCallbackFunction();
			$('.introjs-tooltip').show();
		});
	} 
	
	function caretAtEnd(element) {
		element.focus();
		if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
			var range = document.createRange();
			range.selectNodeContents(element);
			range.collapse(false);
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		}
	}

	function changeValue(id1) {
		$(id1).on("keydown", function(e) {
			$(".keyValue").text($(id1).val());
			$('.error-text').remove();
			var max = $(this).attr("maxlength");
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
				return;
			}
			if (e.keyCode == 68 && e.ctrlKey) {
	            ctrlText = "EOF";
	            introcode.goToStep(11);
	        }
			if ($(this).val().length > max-1) {
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 1.</span>");
					e.preventDefault();
			}
		});
		$(id1).on("keyup", function(e) {
			$(".keyValue").text($(id1).val());
			if ($(this).val() == "") {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter one character.</span>");
				$(this).addClass("empty");
			} else {
				$(this).removeClass("empty");
			}
			introcode.refresh();
			if ($(".empty").length > 0 ) {
				$(".introjs-nextbutton").hide();
			} else {
				$(".introjs-nextbutton").show();
			}
		});
	}