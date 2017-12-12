var introjs;
var fpAddress;
var characterCount = 1;
var printCharacterCount = 1;
var ctrlText;
var temp = 1;

var usageOfPutwAndGetw = function() {
	initIntroJS();
	
	fpAddress = Math.floor((Math.random() * 1086) + 1325);
	
	$("#svgDiv1, #outputConsoleBody").click(function() {
		  $("#character" + characterCount).focus();
	});
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [ {
				element: '#fileText',
				intro: '',
				tooltipClass: "hide"
			}, {
				element: '#code',
				intro: '',
				position: 'right'
			}, {
				element: '#filePointer',
				intro: ''
			}, {
				element: '#addressDiv1',
				intro: '',
				tooltipClass: 'hide',
				animateStep: 'addresslocation'
			}, {
				element: '#characterPointer',
				intro: ''
			}, {
				element: '#addressDiv2',
				intro: '',
				tooltipClass: 'hide',
				animateStep: 'addressDiv2location'
			}, {
				element: '#fileName',
				intro: ''
			}, {
				element: '#writeMode',
				intro: ''
			}, {
				element: '#fileOpen',
				intro: ''
			}, {
				element: '#numbersFile',
				intro: '',
				tooltipClass: 'hide',
				animateStep: 'location'
			}, {
				element: '#sopLine1',
				intro: '',
				tooltipClass: 'hide',
			}, {
				element: '#outputDiv',
				intro: '',
				animateStep: 'printing',
				tooltipClass: 'hide'
			}, {
				element: '#characterStore',
				intro: '',
				tooltipClass: 'hide',
			}, {
				element: '#outputDiv',
				intro: '',
				tooltipClass: 'hide',
				animateStep: 'printText'
			}]
	});
	
	introjs.onafterchange(function(targetElement){
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
			
			case "fileText" :
				TweenMax.to($("#firstLine"), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#secondLine"), 0.5, {opacity: 1, onComplete: function() {
						$('#secondLine').append('&emsp;<a class="introjs-button introjs-duplicate-nextbutton" onclick="nextBtn()">Next &#8594;</a>');
					}});
				}});
				break;
			
			case "code":
				$("#code").removeClass("opacity00");
					$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Let us learn how the <span class="ct-code-b-yellow">putw()</span> and'
							+ ' <span class="ct-code-b-yellow">getw()</span> functions work on the file.';
					typing('.introjs-tooltiptext', text, function(){
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "filePointer" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<span class="ct-code-b-yellow">FILE</span> is a data structure defined in the standard I/O functions '
							+ 'and generally points to the internal structure that describes the file.';
					typing('.introjs-tooltiptext', text, function(){
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "addressDiv1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#addressDivs").removeClass("opacity00");
					$("#filePointer").addClass("z-index").effect( "highlight",{color: '#ffff33'}, 500);
					$("#filePointer").effect( "transfer", { to: $("#addressDiv1"), className: "ui-effects-transfer" }, 1000 , function() {
						TweenMax.to('#addressDiv1', 1, {opacity: 1, onComplete: function() {
							$("#filePointer").removeClass("z-index");
							setTimeToIntroNextStep();
	  					}});
					});
				});
				break;
			
			case "characterPointer" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'We declare a variable <span class="ct-code-b-yellow">a</span> of type <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "addressDiv2" :
				$('.introjs-helperLayer').one('transitionend', function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					
					case "addressDiv2location" :
						$("#characterPointer").addClass("z-index").effect( "highlight",{color: '#ffff33'}, 500);
						$("#characterPointer").effect("transfer", { to: $("#addressDiv2"), className: "ui-effects-transfer" }, 1000 , function() {
							TweenMax.to('#addressDiv2', 1, {opacity: 1, onComplete: function() {
								$("#characterPointer").removeClass("z-index");
								setTimeToIntroNextStep();
	          				}});
	        			});
						break;
						
						case "addressDiv2storeValue" :
							$("#character" + characterCount).attr('disabled', true);
							$("#addressValue2").text(parseInt($("#character" + characterCount).val()));
							setTimeToIntroNextStep();
							break;
	
						case "printaddressDiv2" :
							if ($("#putcharacter" + printCharacterCount).text() == "EOF") {
								$("#addressValue2").text($("#putcharacter" + printCharacterCount).text());
								setTimeToIntroNextStep();
							} else {
								$("#addressValue2").text($("#putcharacter" + printCharacterCount).text());
								$('#addressValue1').addClass("z-index").effect( "highlight",{color: 'yellow'}, 800, function() {
									TweenMax.to("#addressValue1", 0.5, {rotationX: 90, onComplete:function() {
										$("#addressValue1").text(parseInt($("#addressValue1").text()) + 2);
									    TweenMax.to("#addressValue1", 0.5, {rotationX: 0, onComplete:function() {
									    	$('#addressValue1').removeClass("z-index");
									    	setTimeToIntroNextStep();
										}});
								  	}});
								});
							}
							break;
					}
				});
				break;
			
			case "fileName":
				introjs.refresh();
				$(".introjs-helperLayer").one('transitionend', function() {
					text = "This is a file with the name <span class='ct-code-b-yellow'>numbers.txt</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "writeMode":
				$(".introjs-helperLayer").one('transitionend', function() {
					text = "<span class='ct-code-b-yellow'>w</span> stands for <span class='ct-code-b-yellow'>write</span> mode.<br>In <span class="
							+ "'ct-code-b-yellow'>write</span> mode, if the file <b>does not exist</b>, a file with the specified name is created."
							+ "<br><br> If the file <b>exists</b> with the same name, the contents of the file are deleted.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "fileOpen" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Here <span class="ct-code-b-yellow">fopen</span> opens the file <span class="ct-code-b-yellow">numbers.txt</span> in '
							+ '<span class="ct-code-b-yellow">write</span> mode and the base address of this file structure is assigned'
							+ ' to the file pointer fp.'; 
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "readMode":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>r</span> stands for <span class='ct-code-b-yellow'>read</span> mode."
								+ " <br><br>In read mode, the file is opened with the current contents safe if the file"
								+ "already exists; otherwise an error occurs."
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();		
					});
				});
				break;
			
			case "fileOpen1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Now, let us understand how <span class="ct-code-b-yellow">getw()</span> works. We open '
							+ '<span class="ct-code-b-yellow">numbers.txt</span> file in <b>read</b> mode';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "numbersFile" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "location" :
							$("#numbersFile").removeClass("opacity00");
							$("#textFile").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$("#textFile").removeClass("animated zoomIn");
								$("#text").removeClass("opacity00");
								$("#fileSpan").append('<span id="putcharacter'+ characterCount+'" class="opacity00 ct-blue-color">');
								$('#textFile').append('<div id="addressDiv" class="col-xs-12 padding00"><i class="fa fa-arrow-up arrow-up"></i>'
												+ '<div><span id="address3" class="text-center"'
												+ 'style="display: inline-block; position: relative;"></span></div></div>');
								$("#address3").text(fpAddress);
								$('.introjs-tooltip').removeClass('hide');
								text  = 'The file structure\'s base address (i.e., <span class="ct-code-b-yellow">' + parseInt($("#address3").text()) 
										+ '</span>) is stored in file pointer(fp).';
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " 
																	+ "onclick=svgArrowRevil()>Next &#8594;</a>");
								});
							});
							break;
					
						case "storeValue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The putw() function writes the value <span class="ct-code-b-yellow">' + parseInt($("#character" 
									+ characterCount).val()) + '</span>  of <span class="ct-code-b-yellow">a</span> at'
									+ ' <span class="ct-code-b-yellow">fp</span> address (i.e. <span class="ct-code-b-yellow">'
									+ $("#addressValue1").text() +'</span>).<br><br> Once the value is written, the pointer will be'
									+ ' automatically incremented by <span class="ct-code-b-yellow">2</span>.(i.e. <span class="ct-code-b-yellow">'
									+ (parseInt($("#addressValue1").text()) + 2) +'</span>).';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
								$(".introjs-duplicate-nextbutton").click(function() {
									$(".introjs-duplicate-nextbutton").remove();
									$('.introjs-tooltip').addClass('hide');
									$("#fileSpan").append('<div><span id="putcharacter'+ characterCount+'" class="opacity00 ct-blue-color">'
														+ '</span></div>');
									$("#putcharacter" + characterCount).text(parseInt($("#character" + characterCount).val())).removeClass("opacity00");
									characterCount++;
									$("#fileSpan").append('<div><span id="putcharacter'+ characterCount+'" class="opacity00 ct-blue-color">'
														+ '</span></div>');
									$("#address3").effect("highlight", {color: 'yellow'}, 800);
									TweenMax.to("#address3", 0.5, {rotationX: 90, onComplete:function() {
										$("#address3").text(parseInt($("#addressValue1").text()) + 2);
										TweenMax.to("#address3", 0.5, {rotationX: 0, onComplete:function() {
											$('#addressValue1').addClass("z-index").effect( "highlight",{color: 'yellow'}, 800, function() {	
												TweenMax.to("#addressValue1", 0.5, {rotationX: 90, onComplete:function() {
													$("#addressValue1").text(parseInt($("#addressValue1").text()) + 2);
												     TweenMax.to("#addressValue1", 0.5, {rotationX: 0, onComplete:function() {
												    	$('#addressValue1').removeClass("z-index");
												    	var l1 = $("#putcharacter" + characterCount).offset();
														var l2 = $("#addressDiv").offset({top: l1.top, left: l1.left});
														var l3 = $("#putcharacter" + (characterCount -1)).offset();
														var leftLength = l1.left-l3.left;
														TweenMax.from("#addressDiv", 1, {top: 0, left: leftLength, onComplete: function() {
															introjs.nextStep();
														}});
													}});
												}});
											});
										}});
									}});
								});
							});
							break;
						
						case "fileClose" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Before closing the file, the file pointer puts an <span class="ct-code-b-yellow">EOF</span> '+
									'marker at the fp (<span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>) of the file.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
								$(".introjs-duplicate-nextbutton").click(function() {
									$(".introjs-duplicate-nextbutton").remove();
									$('.introjs-tooltip').addClass('hide');
									$("#putcharacter" + characterCount).text("EOF").removeClass("opacity00").addClass("ct-code-b-red");
									setTimeout(function() {
										$("#addressValue1").addClass("opacity00");
										$("#numbersFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
											$("#numbersFile").removeClass("animated zoomOut").addClass("opacity00");
											setTimeToIntroNextStep();
										});								
									}, 800);
								});
							});
							break;
						
						case "fileOpen" :
							$('.introjs-helperLayer').one('transitionend', function() {
								$("#numbersFile").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$("#numbersFile").removeClass("animated zoomIn opacity00");
									svgArrowRevilLine();
								});			
							});
							break;
						
						case "fileRead" :
							temp++;
							if ( printCharacterCount > 1) {
								arrowMoving($("#putcharacter" + printCharacterCount), function() {
									$('.introjs-tooltip').removeClass('hide');
									text = 'Gets the value <span class="ct-code-b-yellow">' + $("#putcharacter" + printCharacterCount).text() 
											+ '</span> from fp (i.e. <span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>).';
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Reads the integer at fp (i.e. <span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>)'
										+ ' from <span class="ct-code-b-yellow">numbers.txt</span>. Here the integer is'
										+ ' <span class="ct-code-b-yellow">' + $("#putcharacter" + printCharacterCount).text() + '</span>';
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							}
							break;
						
						case "fileClose1" :
							$("#addressValue1, #addressValue2").addClass("opacity00");
								$("#numbersFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
								$("#numbersFile").removeClass("animated zoomOut").addClass("opacity00");
								var options = {
										element : "#restartBtn",
										intro : "Click to restart.",
										position : "right",
										tooltipClass: ""											
								}
								introjs.insertOption(introjs._currentStep + 1, options);
								setTimeToIntroNextStep();
							});								
							break;
					}
				});
				break;
			
			case "sopLine2" :
			case "sopLine1" :
				if (elementId == "sopLine1") {
					$("#addressDiv1").removeClass("z-index");
					$("#line1, #line2, #line3").css({opacity: 0});
				} else {
					$("#addressDiv1").removeClass("z-index");
					$("#svgDiv1").remove();
					ctrlText = "";
				}
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeToIntroNextStep();
				});
				break;
			
			case "outputDiv" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "printing":
								$("#outputConsoleBody").append('<div id="printOutput">Enter number</div>');
								setTimeToIntroNextStep();
							break;
					
						case "printText" :
							$("#outputConsoleBody").append('<div id="appendDiv"></div>');
							$("#appendDiv").append('<input type="text" class="input-box" maxlength="4" size="4"'
												+ 'id="character'+characterCount+'"><br>');
							$('.introjs-tooltip').removeClass('hide');
							text = 'Please enter any number. This number will be assigned to the variable <span class="ct-code-b-yellow">a</span>.';
							typing('.introjs-tooltiptext', text, function() {
								$("#character" + characterCount).effect("highlight", {color: 'yellow'}, 500).focus();
								dynamicSteps("addressDiv2storeValue");
								changeValue("#character" + characterCount);
							});
							break;
						
						case "enterText" :
							$('.intorjs-nextbutton').hide();
							$("#character" + (characterCount -  1)).attr("disabled", true);
							$("#outputConsoleBody").append('<div id="appendDiv"></div>');
							$('.introjs-tooltip').removeClass('hide');
							if (characterCount == 4) {
								$("#appendDiv").append('<input type="text" class="input-box" maxlength="1" size="1"'
													+ ' id="character'+characterCount+'"></br>');
								var text = "Enter 0";
								enterZero();
							} else {
								$("#appendDiv").append('<input type="text" class="input-box" maxlength="4" size="4"'
													+ ' id="character'+characterCount+'"></br>');
								text = 'Let us add one more number. This number will be assigned to the variable'
										+ ' <span class="ct-code-b-yellow">a</span>.<br><br>'
										+ 'Enter <span class="ct-code-b-yellow">0</span> to exit.';
								changeValue("#character" + characterCount);
							}
							typing('.introjs-tooltiptext', text, function() {
								$("#character" + characterCount).effect("highlight", {color: 'yellow'}, 500).focus();
								dynamicSteps("addressDiv2storeValue");
							});
						break;
						
						case "printtext" :
							$("#outputConsoleBody").append('<div id="Output'+ characterCount +'">The given numbers are</div>');
							$("#outputConsoleBody").append('<div id="appendDiv1"></div>');
							$("#appendDiv1").append('<span id="textCharacter'+ printCharacterCount+'" class="filepadding"></span>');
							fileReadSteps();
							setTimeToIntroNextStep();
							break;
						
						case "printEnterText":
							$("#textCharacter" + printCharacterCount).text($("#addressValue2").text());
							printCharacterCount++;
							$("#appendDiv1").append('<br><span id="textCharacter'+ printCharacterCount+'"></span>');
							fileReadSteps();
							setTimeToIntroNextStep();
							break;
					}
				});
				break;
			
			case "whileCondition1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "location" :
							setTimeToIntroNextStep();
						break;
						
						case "condition" :
							if (parseInt($("#character" + characterCount).val()) == '0') {
								$('.introjs-tooltip').removeClass('hide');
								text = ' <span class="ct-code-b-yellow">'+ ctrlText + '</span> !=  <span class="ct-code-b-yellow">'
										+ '0</span><br>Here the above condition evaluates to <span class="ct-code-b-red">false</span>, '
										+ 'Hence the control comes out of the loop.';
								fileCloseAndOpenSteps();
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = ' <span class="ct-code-b-yellow">'+ parseInt($("#character" + characterCount).val())  +
										'</span> !=  <span class="ct-code-b-yellow">'+
										'0</span> condition evaluates to  <span class="ct-code-b-yellow">true</span><br>';
							}
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
							break;
					}
				});
				break;
			
			case "whileCondition2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "condition1" :
							setTimeToIntroNextStep();
							break;
					
						case "condition2" :
							$('.introjs-tooltip').removeClass('hide');
							if ($("#putcharacter" + printCharacterCount).text() == 'EOF') {
								text = ' <span class="ct-code-b-yellow">'+ $("#putcharacter" + printCharacterCount).text()
										+ '</span> !=  <span class="ct-code-b-yellow">'
										+ 'EOF</span> condition evaluates to  <span class="ct-code-b-red">false</span>';
								introNextStep('#closeFile2', 1);
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text1 = 'This value of <span class="ct-code-b-yellow">a</span> is compared with EOF. If <span class="ct-code-b-yellow">'
										+ 'a</span> is not equal to <span class="ct-code-b-yellow">EOF</span>, the loop '
								if (printCharacterCount == 1) {
									text2 = 'begins.';
								} else {
									text2 = 'continues.'
								}
								text = text1 + text2 + ' <br><br>  Here <span class="ct-code-b-yellow">'+ $("#putcharacter"
										+ printCharacterCount).text() + '</span> != <span class='
										+ '"ct-code-b-yellow">EOF</span> condition evaluates to <span class="ct-code-b-yellow">true</span>';
							}
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
							break;
					}	
				});
				break;
			
			case "characterStore" :
			case "putChar" :
				$('.introjs-helperLayer').one('transitionend', function() {
					if (elementId == "characterStore") {
						$("#addressValue2").removeClass("opacity00");
					}
					setTimeToIntroNextStep();
				});
				break;
			
			case "fputCharacter" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <b>putw()</b> is used to <b>write</b> the value of the variable <span class="ct-code-b-yellow">a</span> in to'
								+ ' <span class="ct-code-b-yellow">numbers.txt</span> file. This value of'
								+ ' <span class="ct-code-b-yellow">a</span> is written in the file at fp address.'
								+ '<br><br> After the value is written the <span class="ct-code-b-yellow">fp</span> will'
								+ ' be automatically incremented by <span class="ct-code-b-yellow">2</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "fgetcharacter" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">getw(fp)</span> '+
							'reads the integer from the file and the value is assigned to the variable <span class="ct-code-b-yellow">a</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "closeFile2" :
			case "closeFile1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					if (elementId == "closeFile2") {
						introNextStep('#numbersFile', 1, 'fileClose1');
					}
					text = 'The function <span class="ct-code-b-yellow">fclose(fp)</span> '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "restartBtn":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
				});
				break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": '1',
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function introNextStep(stepName, val, animatedStep) {
	var options = {
			element :stepName,
			intro :'',
			position : '',
			tooltipClass : 'hide',
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + val, options);
}

function dynamicSteps(action) {
	introNextStep('#addressDiv2', 1, 'addressDiv2storeValue');
	introNextStep('#whileCondition1', 2, 'condition');
	introNextStep('#fputCharacter', 3);
	introNextStep('#numbersFile', 4, 'storeValue');
	introNextStep('#outputDiv', 5, 'enterText');
}

function fileCloseAndOpenSteps() {
	introNextStep('#closeFile1', 1, 'location');
	introNextStep('#numbersFile', 2, 'fileClose');
	introNextStep('#fileOpen1', 3, 'location');
	introNextStep('#numbersFile', 4, 'fileOpen');
	introNextStep('#sopLine2', 5, 'location');
	introNextStep('#sopLine2', 5, 'location');
	introNextStep('#outputDiv', 6, 'printtext');
}


function fileReadSteps() {
	introNextStep('#numbersFile', 1, 'fileRead');
	introNextStep('#whileCondition2', 2, 'condition1');
	introNextStep('#fgetcharacter', 3);
	introNextStep('#addressDiv2', 4, 'printaddressDiv2');
	introNextStep('#whileCondition2', 5, 'condition2');
	introNextStep('#putChar', 6);
	introNextStep('#outputDiv', 7, 'printEnterText');
}

function svgArrowRevil() {
	$(".introjs-duplicate-nextbutton").remove();
 	$("#addressValue1").text(fpAddress).addClass("opacity00");
	TweenMax.to("#line1", 0.5, {attr:{x2: "50.1%", y2: "27.5%" }, opacity: 1, onComplete:function(){
		$("#arrow1").css({"opacity": "0"});
		TweenMax.to("#line2", 0.5, {attr:{x2: "50.1%", y2: "15.6%" }, opacity: 1, onComplete:function(){
			$("#arrow2").css({"opacity": "0"});
		  	TweenMax.to("#line3", 0.5, {attr:{x2: "44.4%", y2: "15.8%" }, opacity: 1, onComplete:function(){
				$("#addressDiv1").addClass("z-index");
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
	$("#addressDiv1").addClass("z-index");
	$("#addressValue1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
  		$("#addressValue1").removeClass("animated zoomIn");
  		arrowMoving($("#putcharacter" + printCharacterCount), function() {
  			$('.introjs-tooltip').removeClass("hide");
  			text = 'When a file is opened in the <span class="ct-code-b-yellow">read</span> mode the fp points to the base address (i.e., '
  					+ '<span class="ct-code-b-yellow">' + parseInt($("#address3").text()) + '</span>) of the file structrue.';
  			typing('.introjs-tooltiptext', text, function() {
  				$('.introjs-nextbutton').show();
  			})
  		});
  	});
}

//arrow from up to down
function arrowMoving(id, callBackFunction) {
	$('#address3').text($('#addressValue1').text());
	$(id).after("<div class='dummy opacity00'>" + $("#addressDiv").html() + "</div>");
	var l1 = $("#addressDiv").offset();
	var l2 = $(".dummy").offset();
	var topLength = l2.top - l1.top;
	TweenMax.to("#addressDiv", 2, {top: topLength, onComplete:function() {
		$("#addressDiv").remove();
		$(".dummy").attr("id", "addressDiv").removeClass("dummy opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function nextBtn() {
	$('.introjs-duplicate-nextbutton').remove();
	$("#fileText li").removeClass("opacity00");
	introjs.nextStep();
}

function setTimeToIntroNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

//condition to enter numbers
function changeValue(id1) {
	$(id1).on("keydown", function(e) {
		$(".keyValue").text($(id1).val());
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if (e.keyCode == 48 || e.keyCode == 96) {//keycode(48) = 0, keycode(96) = 0
            ctrlText = "0";
        }
		if ($(this).val().length >= max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please restrict the string maximun"
										+ " length 4 digits only.</span>");
			e.preventDefault();
		}
	});
	$(id1).on("keyup", function(e) {
		$(".keyValue").text($(id1).val());
		$('.error-text').remove();
		if ($(this).val().length < 1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter number.</span>");
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

// condition to enter only zero
function enterZero() {
	$('.introjs-nextbutton').hide();
	$("#character" + characterCount).on("keydown keyup", function(e) {
		var max = $(this).attr("maxlength");
		$(".error-text").remove();
		if (e.keyCode == 48 || e.keyCode == 96) {
            ctrlText = "0";
            $('.introjs-nextbutton').show();
        } else {
        	$('.introjs-nextbutton').hide();
        	$(".introjs-tooltiptext").append('<span class="ct-code-b-red error-text"><br/>please Enter 0</span>');
        }
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val().length >= max) {
			e.preventDefault();
		}
	});
}