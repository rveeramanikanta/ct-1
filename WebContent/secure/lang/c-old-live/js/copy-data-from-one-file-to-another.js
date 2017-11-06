var typingInterval = 10;
var intro;
var filePointerCount = 1;

var copyDataFromOneFileToAnotherReady = function() {
	intro = introJs();
	
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#program",
			intro	: "",
		},{
			element : "#savingFileStep",
			intro:'Saving to <span class="ct-code-b-yellow">example.c</span> file.',
		},{
			element : "#outputDiv",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "editGangaFile"
		},{
			element : "#gangaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "OpenGangaFileIngedit"
		},{
			element : "#outputDiv",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "compilation"
		},{
			element : "#mainMethod",
			intro	: '',
			tooltipClass : "hide"
		},{
			element : "#fileDeclaraion",
			intro	: '',
			tooltipClass : "hide"
		},{
			element : "#filePointerMenory",
			intro	: '',
			tooltipClass : "hide"
		},{
			element : "#characterDeclarion",
			intro	: '',
			tooltipClass : "hide" 
		},{
			element : "#characterAddress",
			tooltipClass : "hide",
			animateStep: "characterAddress"
		},{
			element : "#filePointer1",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "fpReadDeclaration"
		},{
			element : "#fileOpen1",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "readMode"
		},{
			element : "#gangaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "OpenGangaFileInReadMode"
		},{
			element : "#filePointer1",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "ganga"
		},{
			element : "#fpAddress1",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "gangaAddress"
		},{
			element : "#filePointer2",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "fpReadDeclaration"
		},{
			element : "#fileOpen2",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "writeMode"
		},{
			element : "#yamunaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "OpenGangaFileInWriteMode"
		},{
			element : "#filePointer2",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "yamuna"
		},{
			element : "#fpAddress2",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "yamunaAddress"
		},{
			element : "#condition",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "gotonextStep"
		},{
			element : "#storeCharacter",
			intro	: '',
			tooltipClass : "hide",
		},{
			element : "#characterAddress",
			tooltipClass : "hide",
			intro	: '',
			animateStep: "characterStore"
		},{
			element : "#fpAddress1",
			tooltipClass : "hide",
			intro	: '',
			animateStep: "incrementFpRead"
		},{
			element : "#gangaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "incrementFpRead"
		},{
			element : "#condition",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "conditionCheck"
		},{
			element : "#fputc",
			intro	: '',
			tooltipClass : "hide",
		},{
			element : "#yamunaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "writeCharacter"
		},{
			element : "#fpAddress2",
			tooltipClass : "hide",
			intro	: '',
			animateStep: "incrementFpWrite"
		},{
			element : "#yamunaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "incrementFpWrite"
		},{
			element : "#whileCondition", 
			tooltipClass : "hide",
			intro	: '',
		},{
			element : "#copyFile",  
			tooltipClass : "hide",
			intro	: '',
		},{
			element : "#printLine",  
			tooltipClass : "hide",
			intro	: '',
		},{
			element : "#outputDiv",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "printCopyText"
		},{
			element : "#fclose1",
			intro	: '',
			tooltipClass : "hide",
		},{
			element : "#gangaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "ganagaFileClose"
		},{
			element : "#fclose2",
			intro	: '',
			tooltipClass : "hide",
		},{
			element : "#yamunaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "yamunaFileClose"
		},{
			element : "#mainMethodCloseBrace",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
		},{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-tooltip').removeClass('hide');
				text = 'Here we will learn how the <span class="ct-code-b-yellow">data copy from one file to another file</span>.';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});	
			break;
			
			case "savingFileStep" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						saveFile();
					},200);
				});
			break; 
			
			case"outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "editGangaFile" :
							$("#geditGanga").removeClass("opacity00");
							text = $("#geditGanga").html();
							typing('#geditGanga', text, typingInterval, 'white', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = "The <span class='ct-code-b-yellow'>gedit</span> is "+
										"a simple text editor used to create and edit text files.";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-nextbutton').show();
								});
							});
						break;
						case "compilation" :
							$("#gangaFile").addClass("opacity00");
							$("#compilation").removeClass("opacity00");
							text = $("#compilation").html();
							typing('#compilation', text, typingInterval, 'white', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = "<ul><li><span class='ct-code-b-yellow'>gcc</span> is a compiler used to"+
										" compile the given program.</li><li><span class='ct-code-b-yellow'>example</span> is an "+
										"executable file which is created only when <span class='ct-code-b-yellow'>example.c</span>"+
										" is successfully compiled.</li><li><span class='ct-code-b-yellow'>example.c</span>"+
										" is our file name.</li>";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=commandLineValues()>Next &#8594;</a>");
								});
							});
						break;
						case "printCopyText" :
							zoomInEffect("#copieText", function() {
								introNextStep();
							});
						break;
					}
				});
			break;
			
			case "gangaFile" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "OpenGangaFileIngedit" :
							zoomInEffect("#gangaFile", function() {
								$('.introjs-tooltip').removeClass('hide');
								text = "The <span class='ct-code-b-yellow'>ganga.txt</span> file contains some data.";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-nextbutton').show();
								});
							});
						break;
						case "OpenGangaFileInReadMode" :
							zoomInEffect("#gangaFile", function() {
								$('#ganagaFileAddress').fadeTo(3000,1,function() {
									introNextStep();
								});
							});
						break;
						case "ganagaFileClose" :
							zoomOutEffect("#gangaFile", function() {
								$("#gangaFile").addClass("opacity00");
								filePointerCount++;
								introNextStep();
							});
						break;
						case "incrementFpRead" :
								$("#arrow-up").addClass("z-index10000000");
								var l1 = $("#fileFirstCharacter3").offset();
								$("#arrow-up").offset({left:l1.left});
								var l2 = $("#fileFirstCharacter1").offset();
								var topLength = l2.top-l1.top;
								var leftLength = l2.left-l1.left+10;
								TweenMax.from("#arrow-up", 1, {top: topLength, left: leftLength, onComplete: function() {
									$("#arrow-up").removeClass("z-index10000000");
									introNextStep();
								}});
						break;
					}
				});
			break;
			
			case "mainMethod" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "This is the main method whose receives the command line arguments.<ul><li>"+
							"The <span class='ct-code-b-yellow'>argc</span> is the argument count which store the"+
							" total number of arguments passed to the main method.</li>"+
							"<li><span class='ct-code-b-yellow'>argv</span> is a vector which contain all the "+
							"commad line arguments.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "fileDeclaraion" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">FILE</span> referred to as Stream. Stream means reading and writing of data.'+
							'<br> Here we take two file pointer : <ul><li><span class="ct-code-b-yellow">fpRead</span> for '+
							'ganga.txt</li><li><span class="ct-code-b-yellow">fpWrite</span> for'+
							' yamuna.txt.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "filePointerMenory" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#fpAddress1").removeClass("opacity00").addClass("animated zoomIn")
					$("#fpAddress2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$("#fpAddress1, #fpAddress2").removeClass("animated zoomIn");
						$(".address").removeClass("animated zoomIn");
						introNextStep();
					});
				});
			break; 
			
			case "characterDeclarion" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">char</span> data type is used to store only one'+
							' <span class="ct-code-b-yellow">character</span> at a time.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "characterAddress" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "characterAddress" :
						$("#characterAddress").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#characterAddress").removeClass("animated zoomIn");
							introNextStep();
						});
						break;
						case "characterStore" :
							filePointerCount = 1;
							$('#fileFirstCharacter'+filePointerCount).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
								$("#addressValue3").text($("#fileFirstCharacter"+filePointerCount).text());
								fromEffectWithTweenMax("#fileFirstCharacter" + filePointerCount, "#addressValue3", function() {
									$('#fileFirstCharacter'+filePointerCount).removeClass("z-index1000000");
									introNextStep();
								});
							});
						break;
					}
				});
			break;
			
			case "fileOpen" + filePointerCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "readMode" :				
							 text = 'The <span class="ct-code-b-yellow">fopen()</span> is used to open a file with '+
									'<span class="ct-code-b-yellow">r</span>(read).'+
									' mode. The file <span class="ct-code-b-yellow">ganga.txt</span> '+
									' can open only read mode but can not write.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
						case "writeMode" :					
							text = 'The <span class="ct-code-b-yellow">fopen()</span> is used to open a file.<br> Here its '+
								'open <span class="ct-code-b-yellow">yamuna.txt</span>  in <span class="ct-code-b-yellow">w</span> (write)'+
								' mode. if the file does not exist then a new file <span class="ct-code-b-yellow">yamuna.txt</span> '+
								'is created, otherwise its delete the content of the file.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			
			case "filePointer" + filePointerCount:
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "fpReadDeclaration" :
							introNextStep();
						break;
						case "ganga" :
							$('.introjs-tooltip').removeClass('hide');
							 text  = 'The <span class="ct-code-b-yellow">ganga.txt</span> file first character'+
								' address will be stored in <span class="ct-code-b-yellow">fpRead</span>.'; 
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
						case "yamuna" :
							$('.introjs-tooltip').removeClass('hide');
							text  = 'The <span class="ct-code-b-yellow">yamuna.txt</span> file first character'+
								' address will be stored in <span class="ct-code-b-yellow">fpWrite</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			
			 case "fpAddress" + filePointerCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "gangaAddress" :
							fpAddressStore();
						break;
						case "yamunaAddress" :
							fpAddressStore();
						break;
						case "incrementFpRead" :
							filePointerCount = 1;
							flipEffectWithTweenMax("#addressValue" + filePointerCount,parseInt($('#addressValue' + filePointerCount).text()) + 1, function() {
								introNextStep();
							});
						break;
						case "incrementFpWrite" :
							flipEffectWithTweenMax("#addressValue" + filePointerCount,parseInt($('#addressValue' + filePointerCount).text()) + 1, function() {
								introNextStep();
							});
						break;
					}
				});
			break;
			
			case "yamunaFile" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "OpenGangaFileInWriteMode" :
							zoomInEffect("#yamunaFile", function() {
								$('#yamunaFileAddress').fadeTo(3000,1,function() {
									introNextStep();
								});
							});
						break;
						case "writeCharacter" :
							filePointerCount++;
							zoomInEffect("#fileFirstCharacter2", function() {
								introNextStep();
							});
						break;
						case "yamunaFileClose" :
							zoomOutEffect("#yamunaFile", function() {
								$("#yamunaFile").addClass("opacity00");
								introNextStep();
							});
						break;
						case "incrementFpWrite" :
								$("#arrow-down").addClass("z-index10000000");
								var l1 = $("#fileFirstCharacter4").offset();
								$("#arrow-down").offset({left:l1.left});
								var l2 = $("#fileFirstCharacter2").offset();
								var topLength = l2.top-l1.top;
								var leftLength = l2.left-l1.left+10;
								TweenMax.from("#arrow-down", 1, {top: topLength, left: leftLength, onComplete: function() {
									$("#arrow-down").removeClass("z-index10000000");
									introNextStep();

									
								}});
						break;
					}
				});
			break;
			
			case "condition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "gotonextStep" :
							introNextStep();	
						break;
						case "conditionCheck" :
							$('.introjs-tooltip').removeClass('hide');
							text = ' <span class="ct-code-b-yellow">'+ $("#addressValue3").text() +
									'</span> !=  <span class="ct-code-b-yellow">'+
									'EOF(ctrl + d)</span> condition evaluated to  <span class="ct-code-b-yellow">true</span><br>'+
									' Here <span class="ct-code-b-yellow">EOF</span> means '+
									' End of file.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
						});
						break;
					}
				});
			break;
			
			case "storeCharacter" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fgetc()</span> function used to '+
						'gets the character from the specified stream and the position indicator increment by one position.<br> <br>'+
						'When ever get the character from the file. The <span class="ct-code-b-yellow">fpRead</span> will '+
						'automatically <span class="ct-code-b-yellow">increment</span>.<br><br>'+
						'The character <span class="ct-code-b-yellow">'+ $("#fileFirstCharacter").text()+'</span> stored in a variable '+
						'<span class="ct-code-b-yellow">ch</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "fputc" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fputc()</span> function used to write'+
							' a character  specified by the argument char to the specified stream and '+
							'the position indicator automatically increment.<br><br> The <span class="ct-code-b-yellow">fpWrite</span> will '+
							'automatically <span class="ct-code-b-yellow">increment</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "whileCondition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Like all tha characters store from ganga.txt to yamuna.txt';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "copyFile" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						$("#fileTextGanga").effect( "transfer", { to: $("#fileTextYamuna"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#addressValue3, #empty, #emptySpan").text("EOF").css({"color": "red"});
							$("#fileFirstCharacter4").removeClass("opacity00");
							TweenMax.to('#fileTextYamuna', 1, {opacity: 1, onComplete: function() {
								var l1 = $("#emptySpan").offset()
								$("#arrow-up").offset({top:(l1.top-10), left:l1.left});
								var l1 = $("#empty").offset()
								$("#arrow-down").offset({top:(l1.top-10), left:l1.left});
								$("#addressValue1").text(parseInt($("#addressValue1").text()) + 106);
								$("#addressValue2").text(parseInt($("#addressValue2").text()) + 106);
								
								introNextStep();
							}});
						});
					},500);
				});
			break;
			
			case "printLine" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					filePointerCount = 1;
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">printf()</span> function is used to'+
							' <span class="ct-code-b-yellow">print</span> the <span class="ct-code-b-yellow">data</span> '+
							'or user defined <span class="ct-code-b-yellow">message</span> on <span class="ct-code-b-yellow">'+
							'console</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "fclose" + filePointerCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fclose()</span> function '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "mainMethodCloseBrace" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Close the method.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
				
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();

	$('body').keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}
function introNextStep() {
	setTimeout(function() {
		intro.nextStep();
	},800);
}

function fpAddressStore() {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	$("#address"+filePointerCount).addClass("z-index1000000");
	setTimeout(function() {
		$('#address' + filePointerCount).effect( "highlight",{color: 'yellow'}, 500);
		$("#addressValue" + filePointerCount).text($("#address" + filePointerCount).text());
		fromEffectWithTweenMax("#address" + filePointerCount, "#addressValue" + filePointerCount, function() {
			$("#address"+filePointerCount).removeClass("z-index1000000");
			$("#address" + filePointerCount).remove();
			filePointerCount++;
			introNextStep();
		});
	},800);
}

function commandLineValues() {
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').addClass('hide');
	$("#commandLineValues").removeClass("opacity00");
	text = $("#commandLineValues").html();
	typing('#commandLineValues', text, typingInterval, 'white', function() {
		$('.introjs-tooltip').removeClass('hide');
		text = "After successfull compilation,<ul><li><span class='ct-code-b-yellow'>./example</span> is an executable file "+
				"which contains <span class='ct-code-b-yellow'>c</span> program."+
				"</li><li>Each argument must be separated by a space.</li>"+
				"<li>Here the <span class='ct-code-b-yellow'>ganga.txt</span> file is a source file and"+
				" <span class='ct-code-b-yellow'>yamuna.txt</span> is a destination file.</li>"+
				"<li>In c <span class='ct-code-b-yellow'>./example</span>"+
				" is also take it as one argument.</li>"+
				"</ul><br>We have <span class='ct-code-b-yellow'>3</span>"+
				" arguments in this line.";
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
			$('.introjs-nextbutton').show();
		});
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//save file animation
function saveFile() {
	$('.arrow1').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
	$('#dotJavaFileAboveText').show(1000).text('Saving').addClass('loading');
	$('.dotJavaFile').fadeTo(3000,1,function() {
		$('.arrow1 i').removeClass('faa-passing')
		$('#dotJavaFileAboveText').text('Saved').removeClass('loading');
		$("#className").text('example'),$("#extention").text('.c'),
		$('#dotJavaFileBelowText').addClass('pulse').on('animationend',function() {
			$('.introjs-nextbutton').show();
		});
	});
}
//zooming effect function
function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomOutEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
		$(selector1).removeClass("animated zoomOut")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//typing function
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