var introjs;
var typingInterval = 5;
var fpAddress;
var enterText;
var characterCount = 1;
var printCharacterCount = 1;
var ctrlText;
var temp = 1;

var usageOfPutwAndGetw = function() {
	initIntroJS();
	
	$("#address1").text(Math.floor((Math.random() * 1024) + 1125));
	$("#address2").text(Math.floor((Math.random() * 1054) + 1225));
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
				tooltipClass: 'hide',
				position: 'right'
			}, {
				element: '#filePointer',
				intro: '',
				tooltipClass: 'hide',
			}, {
				element: '#addressDiv1',
				intro: '',
				tooltipClass: 'hide',
				animateStep: 'addresslocation'
			}, {
				element: '#characterPointer',
				intro: '',
				tooltipClass: 'hide',
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
				intro: '',
				tooltipClass: 'hide',
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
						$('.introjs-tooltip').removeClass('hide');
						text = 'In <b>putw()</b> & <b>getw()</b> functions we can <br><b>write</b> / <b>read</b> only'
								+ ' <span class="ct-code-b-yellow">integers</span>.';
						typing('.introjs-tooltiptext', text, function(){
							$('.introjs-nextbutton').show();
						});
					}});
				}});
				break;
			
			case "code":
				$("#code").removeClass("opacity00");
				$("#fileText").addClass("z-index");
					$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we will learn how the <span class="ct-code-b-yellow">putw()</span>,'
							+ ' <span class="ct-code-b-yellow">getw()</span> methods works on a file.';
					typing('.introjs-tooltiptext', text, function(){
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "filePointer" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <span class="ct-code-b-yellow">FILE</span> referred to as Stream. Stream means reading and writing of data.';
					typing('.introjs-tooltiptext', text, function(){
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "addressDiv1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
					 
						case "addresslocation" :
							$("#addressDivs").removeClass("opacity00");
							$("#filePointer").addClass("z-index").effect( "highlight",{color: '#ffff33'}, 500);
							$("#filePointer").effect( "transfer", { to: $("#addressDiv1"), className: "ui-effects-transfer" }, 1000 , function() {
								TweenMax.to('#addressDiv1', 1, {opacity: 1, onComplete: function() {
									$("#filePointer").removeClass("z-index");
									timeOut();
	          					}});
	        				});
							break;
					}
				});
				break;
			
			case "characterPointer" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'In <b>putw()</b> & <b>getw()</b> functions we will write / read only integers thats why we declare a variable'
							+ ' <span class="ct-code-b-yellow">int</span>.<br> This variable will be used to store integer.';
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
								timeOut();
	          				}});
	        			});
						break;
						
						case "addressDiv2storeValue" :
							$("#addressValue2").text(parseInt($("#character" + characterCount).val()));
							timeOut();
							break;
	
						case "printaddressDiv2" :
							if ($("#putcharacter" + printCharacterCount).text() == "EOF") {
								$("#addressValue2").text($("#putcharacter" + printCharacterCount).text());
								timeOut();
							} else {
								$("#addressValue2").text($("#putcharacter" + printCharacterCount).text());
								$('#addressValue1').addClass("z-index").effect( "highlight",{color: 'yellow'}, 800, function() {
									TweenMax.to("#addressValue1", 0.5, {rotationX: 90, onComplete:function() {
										$("#addressValue1").text(parseInt($("#addressValue1").text()) + 2);
									    TweenMax.to("#addressValue1", 0.5, {rotationX: 0, onComplete:function() {
									    	$('#addressValue1').removeClass("z-index");
									    	timeOut();
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
					text = "This is write mode.<br>In <span class='ct-code-b-yellow'>write</span> mode, a file with a specified"
							+ " name is created if the file does not exist; the contents are deleted if the file already exists.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "fileOpen" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we open <span class="ct-code-b-yellow">numbers.txt</span> file in <b>write</b> mode';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "readMode":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<div>This is read mode.</div>In read mode, the file is opened with the current contents safe if the file"
								+ "already exists; otherwise an error occurs."
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();		
					});
				});
				break;
			
			case "fileOpen1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we open <span class="ct-code-b-yellow">numbers.txt</span> file in <b>read</b> mode';
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
								text  = 'Here the file structure base address is stored in file pointer(fp).';
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " 
																	+ "onclick=svgArrowRevil()>Next &#8594;</a>");
								});
							});
							break;
					
						case "storeValue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Write the <span class="ct-code-b-yellow">' + parseInt($("#character" + characterCount).val()) + '</span>'
									+ ' at <span class="ct-code-b-yellow">fp</span> (i.e. <span class="ct-code-b-yellow">'
									+ $("#addressValue1").text() +'</span>) then pointer will automatically incremented'
									+ ' by <span class="ct-code-b-yellow">2</span> position.';
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
							text = 'Before closing a file the file pointer put <span class="ct-code-b-yellow">EOF</span> '+
									'at the fp (<span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>) of the file.';
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
											timeOut();
										});								
									}, 800);
								});
							});
							break;
						
						case "fileOpen" :
							$('.introjs-helperLayer').one('transitionend', function() {
								$(".introjs-duplicate-nextbutton").remove();
								$('.introjs-tooltip').addClass('hide');
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
									text = 'Get the <span class="ct-code-b-yellow">' + $("#putcharacter" + printCharacterCount).text() 
											+ '</span> from fp (i.e. <span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>).';
									typing('.introjs-tooltiptext', text, function() {
										if ($("#putcharacter" + printCharacterCount).text() == "EOF") {
											$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>"
																			+ "Next &#8594;</a>");
											$(".introjs-duplicate-nextbutton").click(function() {
												$(".introjs-duplicate-nextbutton").remove();
												$('.introjs-nextbutton').show();	
											});
										} else {
											$('.introjs-nextbutton').show();
										}
									});
								});
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Get the <span class="ct-code-b-yellow">' + $("#putcharacter" + printCharacterCount).text() + '</span> from'
										+ ' fp (i.e. <span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>).';
								typing('.introjs-tooltiptext', text, function() {
									if ($("#putcharacter" + printCharacterCount).text() == "EOF") {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											$('.introjs-nextbutton').show();	
										});
									} else {
										$('.introjs-nextbutton').show();
									}
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
										tooltipClass: "introjs-tooltip-min-width-custom"											
								}
								introjs.insertOption(introjs._currentStep + 1, options);
								timeOut();
							});								
							break;
					}
				});
				break;
			
			case "sopLine1" :
				$("#addressDiv1").removeClass("z-index");
				$("#line1, #line2, #line3").css({opacity: 0})
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">printf()</span> function is used to'
							+ ' print the data or user defined message on console.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "sopLine2" :
				$("#addressDiv1").removeClass("z-index");
				$("#svgDiv1").remove();
				ctrlText = "";
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">printf()</span> function is used to'
							+ ' print the data or user defined message on console.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "outputDiv" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "printing":
								$("#outputConsoleBody").append('<div id="printOutput">Enter number</div>');
								timeOut();
							break;
					
						case "printText" :
							$("#outputConsoleBody").append('<div id="appendDiv"></div>');
							$("#appendDiv").append('<input type="text" class="input-box" maxlength="4" size="4"'
												+ 'id="character'+characterCount+'"><br>');
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we are restricted to allow only numbers. To see how the number '+
									'will store in the file.';
							typing('.introjs-tooltiptext', text, function() {
								$("#character" + characterCount).effect("highlight", {color: 'yellow'}, 500);
								$("#character" + characterCount).focus();
								dynamicSteps("addressDiv2storeValue");
								changeValue("#character" + characterCount);
							});
							break;
						
						case "enterText" :
							$('.intorjs-nextbutton').hide();
							$("#character" + (characterCount -  1)).attr("disabled", true);
							$("#outputConsoleBody").append('<div id="appendDiv"></div>');
							if (characterCount == 4) {
								$("#appendDiv").append('<input type="text" class="input-box" maxlength="1" size="1"'
													+ ' id="character'+characterCount+'"></br>');
								$('.introjs-tooltip').removeClass('hide');
								var text = "Enter 0";
								typing('.introjs-tooltiptext', text, function() {
									$("#character" + characterCount).effect("highlight", {color: 'yellow'}, 500);
									$("#character" + characterCount).focus();
									dynamicSteps("addressDiv2storeValue");
									enterZero();
								});
							} else {
								$("#appendDiv").append('<input type="text" class="input-box" maxlength="4" size="4"'
													+ ' id="character'+characterCount+'"></br>');
								$('.introjs-tooltip').removeClass('hide');
								text = 'Here we are restricted to allow only numbers. To see how the number '+
										'will store in the file. and <span class="ct-code-b-yellow">fp</span> will automatically incremented '+
										'by <span class="ct-code-b-yellow">2</span>.<br>'+
										'Enter <span class="ct-code-b-yellow">0</span> to exit.';
								typing('.introjs-tooltiptext', text, function() {
								$("#character" + characterCount).effect("highlight", {color: 'yellow'}, 500);
								$("#character" + characterCount).focus();
								dynamicSteps("addressDiv2storeValue");
								changeValue("#character" + characterCount);
							});
						}
						break;
						
						case "printtext" :
							$("#outputConsoleBody").append('<div id="Output'+ characterCount +'">The given numbers are</div>');
							$("#outputConsoleBody").append('<div id="appendDiv1"></div>');
							$("#appendDiv1").append('<span id="textCharacter'+ printCharacterCount+'" class="filepadding"></span>');
							fileReadSteps();
							timeOut();
							break;
						
						case "printEnterText":
							$("#textCharacter" + printCharacterCount).text($("#addressValue2").text());
							printCharacterCount++;
							$("#appendDiv1").append('<br><span id="textCharacter'+ printCharacterCount+'"></span>');
							fileReadSteps();
							timeOut();
							break;
					}
				});
				break;
			
			case "whileCondition1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "location" :
							timeOut();
						break;
						
						case "condition" :
							if (parseInt($("#character" + characterCount).val()) == '0') {
								$('.introjs-tooltip').removeClass('hide');
								text = ' <span class="ct-code-b-yellow">'+ ctrlText
										+ '</span> !=  <span class="ct-code-b-yellow">'
										+ '0</span><br>since the above condition evaluates to <span class="ct-code-b-red">false</span>.'
										+ 'The control comes out of the loop.';
								typing('.introjs-tooltiptext', text, function() {
									fileCloseAndOpenSteps();
									$('.introjs-nextbutton').show();
								});
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = ' <span class="ct-code-b-yellow">'+ parseInt($("#character" + characterCount).val())  +
										'</span> !=  <span class="ct-code-b-yellow">'+
										'0</span> condition evaluated to  <span class="ct-code-b-yellow">true</span><br>';
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							}
							break;
					}
				});
				break;
			
			case "whileCondition2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
						case "condition1" :
							timeOut();
							break;
					
						case "condition2" :
							if ($("#putcharacter" + printCharacterCount).text() == 'EOF') {
								$('.introjs-tooltip').removeClass('hide');
								text = ' <span class="ct-code-b-yellow">'+ $("#putcharacter" + printCharacterCount).text() +
										'</span> !=  <span class="ct-code-b-yellow">'+
										'EOF</span> condition evaluated to  <span class="ct-code-b-red">false</span>';
								typing('.introjs-tooltiptext', text, function() {
									var options = {
											element :'#closeFile2',
											intro :'',
											tooltipClass : "hide",
										}
										introjs.insertOption(introjs._currentStep + 1, options);
									$('.introjs-nextbutton').show();
								});
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = ' <span class="ct-code-b-yellow">'+ $("#putcharacter" + printCharacterCount).text() +
										'</span> !=  <span class="ct-code-b-yellow">'+
										'EOF</span> condition evaluated to  <span class="ct-code-b-yellow">true</span>';
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							}
							break;
					}	
				});
				break;
			
			case "putChar" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">printf()</span> function is used to'
							+ ' <span class="ct-code-b-yellow">print</span> the <span class="ct-code-b-yellow">data</span>'
							+ ' or user defined <span class="ct-code-b-yellow">message</span> on <span class="ct-code-b-yellow">'
							+ 'console</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "characterStore" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#addressValue2").removeClass("opacity00");
					var text = "Here <span class='ct-code-b-yellow'>scanf()</span> function is used to <span class='ct-code-b-yellow'>read</span>"
								+ " any combination of <span class='ct-code-b-yellow'>numerical values</span> and that value should be stored in"
								+ " <span class='ct-code-b-yellow'>a</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "fputCharacter" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <b>putw()</b> is used to <b>write</b> data in to  <span class="ct-code-b-yellow">numbers.txt</span> file.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "fgetcharacter" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">getw(fp)</span> '+
							'is used to read the integer from a file and the file pointer is increased automatically.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "closeFile1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">fclose(fp)</span> '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "closeFile2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">fclose(fp)</span> '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, function() {
						var options = {
								element :'#numbersFile',
								intro :'',
								tooltipClass : "hide",
								animateStep: "fileClose1"
						}
						introjs.insertOption(introjs._currentStep + 1, options);
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
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function timeOut() {
	setTimeout(function() {
		introjs.nextStep();
	}, 500);
}

function dynamicSteps(action) {
	var options = {
		element :'#addressDiv2',
		intro :'',
		tooltipClass : "hide",
		animateStep: "addressDiv2storeValue"
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	var options = {
		element :'#whileCondition1',
		intro :'',
		tooltipClass : "hide",
		animateStep: "condition"
	}
	introjs.insertOption(introjs._currentStep + 2, options);
	var options = {
		element :'#fputCharacter',
		intro :'',
		tooltipClass : "hide",
	}
	introjs.insertOption(introjs._currentStep + 3, options);
	var options = {
		element :'#numbersFile',
		intro :'',
		tooltipClass : "hide",
		animateStep: "storeValue"
	}
	introjs.insertOption(introjs._currentStep + 4, options);
	var options = {
		element :'#outputDiv',
		intro :'',
		tooltipClass : "hide",
		animateStep: "enterText"
	}
	introjs.insertOption(introjs._currentStep + 5, options);
}

function fileCloseAndOpenSteps() {
	var options = {
			element :'#closeFile1',
			intro :'',
			tooltipClass : "hide",
			animateStep: "location"
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	var options = {
			element :'#numbersFile',
			intro :'',
			tooltipClass : "hide",
			animateStep: "fileClose"
	}
	introjs.insertOption(introjs._currentStep + 2, options);
	var options = {
			element :'#fileOpen1',
			intro :'',
			tooltipClass : "hide",
			animateStep: "location"
	}
	introjs.insertOption(introjs._currentStep + 3, options);
	var options = {
			element :'#numbersFile',
			intro :'',
			tooltipClass : "hide",
			animateStep: "fileOpen"
	}
	introjs.insertOption(introjs._currentStep + 4, options);
	var options = {
			element :'#sopLine2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "location"
	}
	introjs.insertOption(introjs._currentStep + 5, options);
	var options = {
			element :'#outputDiv',
			intro :'',
			tooltipClass : "hide",
			animateStep: "printtext"
	}
	introjs.insertOption(introjs._currentStep + 6, options);
}


function fileReadSteps() {
	var options = {
			element :'#numbersFile',
			intro :'',
			tooltipClass : "hide",
			animateStep: "fileRead"
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	var options = {
			element :'#whileCondition2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "condition1"
		}
		introjs.insertOption(introjs._currentStep + 2, options);
		var options = {
			element :'#fgetcharacter',
			intro :'',
			tooltipClass : "hide",
		}
		introjs.insertOption(introjs._currentStep + 3, options);
		var options = {
			element :'#addressDiv2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "printaddressDiv2"
		}
		introjs.insertOption(introjs._currentStep + 4, options);
		var options = {
			element :'#whileCondition2',
			intro :'',
			tooltipClass : "hide",
			animateStep: "condition2"
		}
		introjs.insertOption(introjs._currentStep + 5, options);
	var options = {
			element :'#putChar',
			intro :'',
			tooltipClass : "hide",
		}
		introjs.insertOption(introjs._currentStep + 6, options);
		var options = {
			element :'#outputDiv',
			intro :'',
			tooltipClass : "hide",
			animateStep: "printEnterText"
		}
		introjs.insertOption(introjs._currentStep + 7, options);
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
  			setTimeout(function() {
  				introjs.nextStep();
  			}, 500);
  		});
  	});
}

//arrow from up to down
function arrowMoving(id, callBackFunction) {
	$(id).after("<div class='dummy opacity00'>" + $("#addressDiv").html() + "</div>");
	var l1 = $("#addressDiv").offset();
	var l2 = $(".dummy").offset();
	var topLength = l2.top - l1.top;
	TweenMax.to("#addressDiv", 2, {top: topLength, onComplete:function() {
		$("#addressDiv").remove();
		$(".dummy").attr("id", "addressDiv").removeClass("dummy opacity00");
		$('#address3').text($('#addressValue1').text());
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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
		//keycode(48) = 0, keycode(96) = 0
		if (e.keyCode == 48 || e.keyCode == 96) {
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