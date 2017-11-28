var typingInterval = 1;
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
			tooltipClass : "hide",
			intro:' Let us save the above code to <span class="ct-code-b-yellow">example.c</span> file.',
		},{
			element : "#outputDiv",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "editGangaFile",
		},{
			element : "#gangaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "OpenGangaFileIngedit",
		},{
			element : "#outputDiv",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "compilation",
		},{
			element : "#mainMethod",
			intro	: '',
			//tooltipClass : "hide",
		},{
			element : "#fileDeclaraion",
			intro	: '',
			//tooltipClass : "hide",
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
			animateStep: "conditionCheck" 
		},{
			element : "#fputc",
			intro	: '',
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
			intro	: '',
		},{
			element : "#copyFile",  //********************* completed;
			tooltipClass : "hide",
			intro	: '',
		},{
			element : "#printLine",  
			//tooltipClass : "hide",
			intro	: '',
		},{
			element : "#outputDiv",
			intro	: '',
			tooltipClass : "hide",
			animateStep: "printCopyText"
		},{
			element : "#fclose1",
			intro	: '',
			//tooltipClass : "hide",
		},{
			element : "#gangaFile",
			intro	: '',
			position : "right",
			tooltipClass : "hide",
			animateStep: "ganagaFileClose"
		},{
			element : "#fclose2",
			intro	: '',
			//tooltipClass : "hide",
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
			//tooltipClass : "hide",
		},{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) {
		
		
		
		var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				$('.arrow1, #dotJavaFileAboveText, #dotJavaFileAboveText, #className, #extention').empty();
				$('#dotJavaFileBelowText').removeClass('pulse');
				$('.dotJavaFile').removeAttr('style').addClass('opacity00');
			break;
			
			case "savingFileStep" :
				$('.arrow1, #dotJavaFileAboveText, #dotJavaFileAboveText, #className, #extention').empty();
				$('#dotJavaFileBelowText').removeClass('pulse');
				$('.dotJavaFile').removeAttr('style').addClass('opacity00');
				$('#geditGanga').addClass('opacity00');
			break; 
			
			case"outputDiv" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "editGangaFile" :
						$('#geditGanga, #gangaFile').addClass('opacity00');
					break;
					case "compilation" :
						$('#commandLineValues, #compilation').addClass('opacity00');
					break;
					case "printCopyText" :
					break;
				}
			break;
			
			case "gangaFile" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "OpenGangaFileIngedit" :
						$("#gangaFile").addClass('opacity00');
						$('#commandLineValues, #compilation').addClass('opacity00');
					break;
					case "OpenGangaFileInReadMode" :
					break;
					case "ganagaFileClose" :
					break;
					case "incrementFpRead" :
					break;
				}
			break;
			
			case "mainMethod" :
			break;
			
			case "fileDeclaraion" :
			break;
			
			case "filePointerMenory" :
			break; 
			
			case "characterDeclarion" :
			break;
			case "characterAddress" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "characterAddress" :
					break;
					case "characterStore" :
					break;
				}
			break;
			
			case "fileOpen" + filePointerCount :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "readMode" :	
						
					break;
					case "writeMode" :	
					break;
				}
			break;
			
			case "filePointer" + filePointerCount:
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "fpReadDeclaration" :
					break;
					case "ganga" :
					break;
					case "yamuna" :
					break;
				}
			break;
			
			 case "fpAddress" + filePointerCount :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "gangaAddress" :
					break;
					case "yamunaAddress" :
					break;
					case "incrementFpRead" :
					break;
					case "incrementFpWrite" :
					break;
				}
			break;
			
			case "yamunaFile" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "OpenGangaFileInWriteMode" :
					break;
					case "writeCharacter" :
					break;
					case "yamunaFileClose" :
					break;
					case "incrementFpWrite" :
					break;
				}
			break;
			
			case "condition" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "gotonextStep" :
					break;
					case "conditionCheck" :
					break;
				}
			break;
			
			case "storeCharacter" :
			break;
			
			case "fputc" :
			break;
			
			case "whileCondition" :
			break;
			
			case "copyFile" :
			break;
			
			case "printLine" :
				if (intro._direction == "forward") {
					filePointerCount = 1;
				}
				console.log(filePointerCount + "printLine before");
			break;
			
			case "fclose" + filePointerCount :
			break;
			
			case "mainMethodCloseBrace" :
				if (intro._direction == "forward") {
					$('.introjs-tooltip').css('min-width','150px');
				} else {
					$('.introjs-tooltip').css('min-width','250px');
				}
				
			break;
		}
	});
	
	intro.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
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
			case "program" :
				$('.introjs-tooltip').removeClass('hide');
				text = 'Let us learn how to  <span class="ct-code-b-yellow">copy</span> data from one file to another file.';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			break;
			
			case "savingFileStep" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						saveFile();
					},200);
				});
			break; 
			
			case"outputDiv" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "editGangaFile" :
							$("#geditGanga").removeClass("opacity00");
							text = $("#geditGanga").html();
							typing('#geditGanga', text, typingInterval, 'white', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = "The <span class='ct-code-b-yellow'>gedit</span> is "+
										"a simple text editor used to  <span class='ct-code-b-yellow'>create</span> and  <span class='ct-code-b-yellow'>edit</span> text files.";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
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
										" compile the given program.</li>"
										"<li><span class='ct-code-b-yellow'>example.c</span>"+
										" is our file name.</li>"
										+"<li>When the <span class='ct-code-b-yellow'>example.c</span> is successfully compiled, we get "+
										" an executable file <span class='ct-code-b-yellow'>example</span></li>";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=commandLineValues()>Next &#8594;</a>");
								});
							});
						break;
						case "printCopyText" :
							if (intro._direction == "forward") {
								zoomInEffect("#copieText", function() {
									introNextStep();
								});
							} else {
								$('#copieText').addClass('opacity00');
								introPreviousStep();
							}
							
						break;
					}
				});
			break;
			
			case "gangaFile" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "OpenGangaFileIngedit" :
							zoomInEffect("#gangaFile", function() {
								$('.introjs-tooltip').removeClass('hide');
								text = "The <span class='ct-code-b-yellow'>ganga.txt</span> file contains some data.";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						break;
						case "OpenGangaFileInReadMode" :
							if (intro._direction == "forward") {
								zoomInEffect("#gangaFile", function() {
									$('#ganagaFileAddress').fadeTo(3000,1,function() {
										introNextStep();
									});
								});
							} else {
								$("#gangaFile").addClass('opacity00');
								$('#ganagaFileAddress').removeAttr('style');
								introPreviousStep();
							}
							
						break;
						case "ganagaFileClose" :
							if (intro._direction == "forward") {
								zoomOutEffect("#gangaFile", function() {
									$("#gangaFile").addClass("opacity00");
									filePointerCount++;
									introNextStep();
								});
							} else {
								zoomInEffect("#gangaFile", function() {
									filePointerCount--;
									introPreviousStep();
								});
							}
							
						break;
						case "incrementFpRead" :
							if (intro._direction == "forward") {
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
							} else {
								var l1 = $("#fileFirstCharacter1").offset();
								$("#arrow-up").offset({left:l1.left});
								var l2 = $("#fileFirstCharacter3").offset();
								var topLength = l2.top-l1.top;
								var leftLength = l2.left-l1.left+10;
								TweenMax.from("#arrow-up", 1, {top: topLength, left: leftLength});
									introPreviousStep();
							}
						break;
					}
				});
			break;
			
			case "mainMethod" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = "This is the  <span class='ct-code-b-yellow'>main</span> method, its  <span class='ct-code-b-yellow'>reads</span> the command line arguments.<ul><li>"+
							"The <span class='ct-code-b-yellow'>argc</span> is the  <span class='ct-code-b-yellow'>count</span> of the total number of arguments that"+
							" will be passed to the method.</li>"+
							"<li><span class='ct-code-b-yellow'>argv</span> is a vector which contains the "+
							" <span class='ct-code-b-yellow'>commad line arguments</span>.</li></ul>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "fileDeclaraion" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					var text = '<span class="ct-code-b-yellow">FILE</span> is a data structure defined in the standard I/O functions '
								+ 'and points to the internal structure that describes the file.'
								+'<br> Here we take two file pointers : <ul><li><span class="ct-code-b-yellow">*fpRead</span> for '
								+ 'ganga.txt</li><li><span class="ct-code-b-yellow">*fpWrite</span> for'
								+ ' yamuna.txt.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "filePointerMenory" :
				$('.introjs-helperLayer').one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#fpAddress1").removeClass("opacity00").addClass("animated zoomIn")
						$("#fpAddress2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$(".address").removeClass("animated zoomIn");
							introNextStep();
						});
					} else {
						$(".address").addClass("opacity00");
						introPreviousStep();
					}
					
				});
			break; 
			
			case "characterDeclarion" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">char</span> data type is used to store only one'+
							' <span class="ct-code-b-yellow">character</span> at a time.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "characterAddress" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "characterAddress" :
							if (intro._direction == "forward") {
								$("#characterAddress").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$("#characterAddress").removeClass("animated zoomIn");
									introNextStep();
								});
							} else {
								$("#characterAddress").addClass("opacity00");
								introPreviousStep();
							}
						
						break;
						case "characterStore" :
							if (intro._direction == "forward") {
								filePointerCount = 1;
								$('#fileFirstCharacter'+filePointerCount).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
									$("#addressValue3").text($("#fileFirstCharacter"+filePointerCount).text());
									fromEffectWithTweenMax("#fileFirstCharacter" + filePointerCount, "#addressValue3", function() {
										$('#fileFirstCharacter'+filePointerCount).removeClass("z-index1000000");
										introNextStep();
									});
								});
							} else {
								filePointerCount = 3;
								$('#addressValue3').empty();
								introPreviousStep();
							}
							
						break;
					}
				});
			break;
			
			case "fileOpen" + filePointerCount :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "readMode" :	
							text = 'The file <span class="ct-code-b-yellow">ganga.txt</span> is opened in read mode.<br/><br/> '
								+ "In <span class='ct-code-b-yellow'>read</span> mode, "
								+ "the file data can only be  <span class='ct-code-b-yellow'>read</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						break;
						case "writeMode" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The function <span class="ct-code-b-yellow">fopen()</span> opens a file '
								+ '<span class="ct-code-b-yellow">yamuna.txt</span>  in '
								+ '<span class="ct-code-b-yellow">w </span>(write)'
								+ " mode. <br/><span class='ct-code-b-yellow'>w</span> stands "
								+ "for <span class='ct-code-b-yellow'>write</span> mode.<br><br/>"
								+ " In <span class='ct-code-b-yellow'>write</span> mode, if the file <b>does not exist</b>"
								+ ", a file with the specified name is  <span class='ct-code-b-yellow'>created</span>.<br><br/> If the file <b>exists</b>"
								+ " with the same name, the contents of the file are  <span class='ct-code-b-yellow'>deleted</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						break;
					}
				});
			break;
			
			case "filePointer" + filePointerCount:
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "fpReadDeclaration" :
							if (intro._direction == "forward") {
								introNextStep();
							} else {
								filePointerCount = 1;
								introPreviousStep();
							}
							
						break;
						case "ganga" :
							var text = "Here, the file  <span class='ct-code-b-yellow'>ganga.txt</span> base address is stored in the "
								+ "<span class='ct-code-b-yellow'>file pointer(fpRead)</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						break;
						case "yamuna" :
							$('.introjs-tooltip').removeClass('hide');
							var text = "Here, the file  <span class='ct-code-b-yellow'>yamuna.txt</span> base address is stored in the "
								+ "<span class='ct-code-b-yellow'>file pointer(fpWrite)</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
							break;
					}
				});
			break;
			
			 case "fpAddress" + filePointerCount :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "gangaAddress" :
						case "yamunaAddress" :
							if (intro._direction == "forward") {
								fpAddressStore();
							} else {
								$("#address" + filePointerCount).removeClass('opacity00');
								$("#addressValue" + filePointerCount).empty();
								introPreviousStep();
							}
							
						break;
						case "incrementFpRead" :
							
							if (intro._direction == "forward") {
								flipEffectWithTweenMax("#addressValue" + filePointerCount,parseInt($('#addressValue' + filePointerCount).text()) + 1, function() {
									introNextStep();
								});
							} else {
								$('#addressValue1').text($('#addressValue1').text() - 1);
								introPreviousStep();
							}
							
						break;
						case "incrementFpWrite" :
							if (intro._direction == "forward") {
								flipEffectWithTweenMax("#addressValue" + filePointerCount,parseInt($('#addressValue' + filePointerCount).text()) + 1, function() {
									introNextStep();
								});
							} else {
								$('#addressValue2').text($('#addressValue2').text() - 1);
								introPreviousStep();
							}
						break;
					}
				});
			break;
			
			case "yamunaFile" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "OpenGangaFileInWriteMode" :
							if (intro._direction == "forward") {
								zoomInEffect("#yamunaFile", function() {
									$('#yamunaFileAddress').fadeTo(3000,1,function() {
										introNextStep();
									});
								});
							} else {
								$('#yamunaFile').addClass('opacity00');
								$('#yamunaFileAddress').removeAttr('style');
								introPreviousStep();
							}
						break;
						case "writeCharacter" :
							if (intro._direction == "forward") {
								filePointerCount++;
								zoomInEffect("#fileFirstCharacter2", function() {
									introNextStep();
								});
							} else {
								filePointerCount--;
								$('#fileFirstCharacter2').addClass('opacity00');
								introPreviousStep();
							}
							
						break;
						case "yamunaFileClose" :
							if (intro._direction == "forward") {
								zoomOutEffect("#yamunaFile", function() {
									$("#yamunaFile").addClass("opacity00");
									introNextStep();
								});
							} else {
								zoomInEffect("#yamunaFile", function() {
									introPreviousStep();
								});
								
							}
							
						break;
						case "incrementFpWrite" :
							if (intro._direction == "forward") {
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
							} else {
								var l1 = $("#fileFirstCharacter2").offset();
								$("#arrow-down").offset({left:l1.left});
								var l2 = $("#fileFirstCharacter4").offset();
								var topLength = l2.top-l1.top;
								var leftLength = l2.left-l1.left+10;
								TweenMax.from("#arrow-down", 0.2, {top: topLength, left: leftLength});
								introPreviousStep();
							}
								
						break;
					}
				});
			break;
			
			case "condition" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "gotonextStep" :
							if (intro._direction == "forward") {
								introNextStep();	
							} else {
								filePointerCount--;
								introPreviousStep();
							}
							
						break;
						case "conditionCheck" :
							text = ' The value of the <span class="ct-code-b-yellow">ch</span> is '
									+'<span class="ct-code-b-yellow">'+ $("#addressValue3").text() +
									' </span> and  <span class="ct-code-b-yellow">'+ $("#addressValue3").text() +'</span>'+
									' !=  <span class="ct-code-b-yellow">'+
									'EOF(ctrl + d)</span>, so the condition evaluates to <span class="ct-code-b-yellow">true</span><br>'+
									'<br/> Here <span class="ct-code-b-yellow">EOF</span> means '+
									' End of file.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
						break;
					}
				});
			break;
			
			case "storeCharacter" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'The function <span class="ct-code-b-yellow">fgetc(fpRead)</span> '
						+ 'gets the character from the file, that is in the position <span class="ct-code-b-yellow">fpRead</span>.'
						+ '<br/><br/>The variable <span class="ct-code-b-yellow">fpRead</span> will be '+
						'automatically <span class="ct-code-b-yellow">incremented</span> by one.<br><br>'+
						'The character <span class="ct-code-b-yellow">'+ $("#fileFirstCharacter1").text()+'</span> is stored in a variable '+
						'<span class="ct-code-b-yellow">ch</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "fputc" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'The <span class="ct-code-b-yellow">fputc(ch, fpRead)</span> function writes the character '
						+ '<span class="ct-code-b-yellow">' +  $("#fileFirstCharacter1").text() + '</span>'
						+ ' to the file at the position pointed by <span class="ct-code-b-yellow">fpRead</span>'
						+' (<span class="ct-code-b-yellow">'
						+ $("#addressValue1").text() +'</span>).<br/><br/> The file pointer'
						+ ' <span class="ct-code-b-yellow">fp</span> will be automatically incremented'
						+ ' by <span class="ct-code-b-yellow">1</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "whileCondition" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'This steps of (reading each character from '
						+ '<span class="ct-code-b-yellow">ganga.txt</span> and '
						+ 'writing to <span class="ct-code-b-yellow">yamuna.txt</span>)'
						+' are repeated till the <span class="ct-code-b-yellow">EOF</span> is '
						+'reached in <span class="ct-code-b-yellow">ganga.txt</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "copyFile" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						if (intro._direction == "forward") {
							$("#fileTextGanga").effect( "transfer", { to: $("#fileTextYamuna"), className: "ui-effects-transfer" }, 1500 , function() {
								$("#addressValue3, #empty, #emptySpan").text("EOF").css({"color": "red"});
								$("#fileFirstCharacter4").removeClass("opacity00");
								TweenMax.to('#fileTextYamuna', 1, {opacity: 1, onComplete: function() {
									var l1 = $("#emptySpan").offset();
									$("#arrow-up").offset({top:(l1.top-10), left:l1.left});
									var l1 = $("#empty").offset();
									$("#arrow-down").offset({top:(l1.top-10), left:l1.left});
									$("#addressValue1").text(parseInt($("#addressValue1").text()) + 106);
									$("#addressValue2").text(parseInt($("#addressValue2").text()) + 106);
									introNextStep();
								}});
							});
						} else {
							$("#addressValue3").text("C").removeAttr('style');
							var l1 = $("#fileFirstCharacter1").offset();
							$("#arrow-up").offset({top:(l1.top-10), left:l1.left+10});
							var l1 = $("#fileFirstCharacter2").offset();
							$("#arrow-down").offset({top:(l1.top-10), left:l1.left+10});
							$('#empty, #emptySpan').empty();
							$("#fileFirstCharacter4").addClass("opacity00");
							$("#fileTextYamuna").removeAttr('style');
							$("#addressValue1").text(parseInt($("#addressValue1").text()) - 106);
							$("#addressValue2").text(parseInt($("#addressValue2").text()) - 106);
							filePointerCount = 2; //modification
							introPreviousStep();
						}
					},500);
				});
			break;
			
			case "printLine" :
				$('.introjs-helperLayer').one('transitionend', function() {
					console.log(filePointerCount);
					text = '<span class="ct-code-b-yellow">printf()</span> function is used to'+
							' <span class="ct-code-b-yellow">print</span> the <span class="ct-code-b-yellow">data</span> '+
							'or user defined <span class="ct-code-b-yellow">message</span> on <span class="ct-code-b-yellow">'+
							'console</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "fclose" + filePointerCount :
				$('.introjs-helperLayer').one('transitionend', function() {
					//$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fclose()</span> function '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "mainMethodCloseBrace" :
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Close the method.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
	intro.start();
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
	},500);
}

function introPreviousStep() {
	setTimeout(function () {
		intro.previousStep();
	},500);
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
			$("#address" + filePointerCount).addClass('opacity00');
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
		text = "Let us understand the above line, We have <span class='ct-code-b-yellow'>3</span>"+
				" arguments in this line.<ul><li><span class='ct-code-b-yellow'>./example</span> is an executable file "+
				"which contains the <span class='ct-code-b-yellow'>c</span> program."+
				"</li>"+
				"<li>In c <span class='ct-code-b-yellow'>./example</span>"+
				" is also taken as one argument.</li>"+
				"<li>Here, <span class='ct-code-b-yellow'>ganga.txt</span> is the source file and"+
				" <span class='ct-code-b-yellow'>yamuna.txt</span> is the destination file.</li>"+
				"<li>Each argument must be separated by a  <span class='ct-code-b-yellow'>space</span>.</li>"+
				"</ul>";
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
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
	$('.introjs-tooltip').removeClass('hide');
	$('.arrow1').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
	$('#dotJavaFileAboveText').show(1000).text('Saving').addClass('loading');
	$('.dotJavaFile').fadeTo(3000,1,function() {
		$('.arrow1 i').removeClass('faa-passing');
		$('#dotJavaFileAboveText').text('Saved').removeClass('loading');
		$("#className").text('example');
		$("#extention").text('.c');
		$('#dotJavaFileBelowText').addClass('pulse').on('animationend',function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
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
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}