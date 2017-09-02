var introcode;
var typingInterval = 10;
var fpAddress;
var enterText;
var addressCount = 1;
var characterCount = 1;
var printLine = 1;
var  ctrlText;
var arr = [];

function randomNumber() {
	fpAddress = Math.floor((Math.random() * 1086) + 1850);
	$("#svgDiv1").click(function() {
		caretAtEnd(document.getElementById('employeeId'));
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
				element :'#structor',
				intro :'',
				tooltipClass : "hide",
				position: "right"
			},{
				element :'#filePointer',
				intro :'',
				tooltipClass : "hide",
				position: "right"
			},{
				element :'#filePointerAddress',
				intro :'',
				tooltipClass : "hide",
				position: "right",
				animateStep: "fptrlocation"
			},{
				element :'#structureDeclaration',
				intro :'',
				tooltipClass : "hide",
				position: "right",
			},{
				element :'#structAddressDiv',
				intro :'',
				tooltipClass : "hide",
				position: "right",
				animateStep: "emplocation"
			},{
				element :'#fileOpen',
				intro :'',
				tooltipClass : "hide",
				animateStep: "emplocation"
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				position: "left",
				animateStep: "location"
			},{
				element :'#printLine1',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printTextInOutput"
			},{
				element :'#scanfLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "scanflocation"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "readvaluesfromkeyboard"
			},{
				element :'#structAddressDiv',
				intro :'',
				tooltipClass : "hide",
				position: "right",
				animateStep: "structValues"
			},{
				element :'#fwrite',
				intro :'',
				tooltipClass : "hide",
				position: "top",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				position: "left",
				animateStep: "binaryValues"
			},{
				element :'#closeFile1',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				position: "left",
				animateStep: "closeFile"
			},{
				element :'#fileOpen1',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				position: "left",
				animateStep: "openFileWithReadMode"
			},{
				element :'#printLine2',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printIdText"
			},{
				element :'#fread',
				intro :'',
				position: "top",
				tooltipClass : "hide",
			},{
				element :'#structAddressDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "structValues1"
			},{
				element :'#printLine3',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printTextValue"
			},{
				element :'#closeFile2',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "fileClose"
			},{
				element : "#restartBtn",
				intro : "Click to Restart",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
			case "fileText" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				TweenMax.to('#text1', 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to('#text2', 0.5, {opacity: 1, onComplete: function() {
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
					text = 'Here we will learn how the <span class="ct-code-b-yellow">fwrite()</span> '+
							' and <span class="ct-code-b-yellow">fread()</span> methods work in file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "structor" :
				$("#fileText").addClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-tooltip').removeClass('hide');
				text = 'It is the declaration of new user defind data type <span class="ct-code-b-yellow">record</span>';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
					$('.introjs-nextbutton').show();
				});
			});
			break;
			case "filePointer" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <span class="ct-code-b-yellow">FILE</span> referred to as Stream. Stream means flow of a data that can be '+
							'<span class="ct-code-b-yellow">read</span> or <span class="ct-code-b-yellow">write</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "filePointerAddress" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					 case "fptrlocation" :
						 zoomInEffect("#addressDiv1",function() {
							 setTimeoutToIntroGoNextStep();
						 });
					break;
					}
				});
			break;
			case "structureDeclaration" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'It is structor definition which allocats memory to the structor variables '+
							'<span class="ct-code-b-yellow">emp</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "structAddressDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					 case "emplocation" :
						 zoomInEffect("#structAddressDiv", function() {
							 setTimeoutToIntroGoNextStep();
						 });
					break;
					case "structValues" :
						$("#empIdValue").text($("#employeeId").text()).addClass("opacity00");
						$("#empNameValue").text($("#employeeName").text()).addClass("opacity00");
						$("#employeeId").addClass("circle-css output-value-circle");
						zoomInEffect("#empIdValue", function() {
							$("#employeeId").removeClass("circle-css output-value-circle");
							$("#employeeName").addClass("circle-css output-value-circle");
							zoomInEffect("#empNameValue", function() {
								$("#employeeName").removeClass("circle-css output-value-circle");
								$("#employeeSalary").addClass("circle-css output-value-circle");
								printDecimalValue();
								setTimeout(function() {
									$("#employeeSalary").removeClass("circle-css output-value-circle");
								},200);
								setTimeoutToIntroGoNextStep();
							});
						 });
					 break;
					case "structValues1" :
						$('.introjs-tooltip').removeClass('hide');
						$("#putcharacter1").addClass("z-index1000000");
						text = 'The integer value of <span class="ct-code-b-yellow">'+ $("#putcharacter1").text() +'</span>  is '+
								'<span class="ct-code-b-yellow">'+ $("#empIdValue").text() +'</span> ';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								zoomInEffect("#empIdValue", function() {
									$("#putcharacter1").removeClass("z-index1000000");
									$("#putcharacter2").addClass("z-index1000000");
									text = 'The character value of <span class="ct-code-b-yellow">'+ $("#putcharacter2").text() +'</span>  is '+
											'<span class="ct-code-b-yellow">'+ $("#empNameValue").text() +'</span> ';
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											zoomInEffect("#empNameValue", function() {
												$("#putcharacter2").removeClass("z-index1000000");
												$("#putcharacter3").addClass("z-index1000000");
												text = 'The float value of <span class="ct-code-b-yellow">'+ $("#putcharacter3").text() +'</span>  is '+
														'<span class="ct-code-b-yellow">'+ $("#empSalaryValue").text() +'</span> ';
												typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
													$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
													$(".introjs-duplicate-nextbutton").click(function() {
														$(".introjs-duplicate-nextbutton").remove();
														zoomInEffect("#empSalaryValue", function() {
															$("#putcharacter3").removeClass("z-index1000000");
															$('.introjs-tooltip').addClass('hide');
															rotationFunction(function() {
																$(".fa-arrow-up").addClass("z-index1000000");
																var l1 = $("#putcharacter4").offset();
																var l2 = $(".fa-arrow-up").offset({top: l1.top, left: l1.left});
																var l3 = $("#putcharacter4").offset();
																var leftLength = l1.left-l3.left;
																TweenMax.from(".fa.arrow-up", 1, {top: 0, left: leftLength, onComplete: function() {
																	$(".fa-arrow-up").css({"top": "0"});
																	$(".fa-arrow-up").removeClass("z-index1000000");
																	setTimeoutToIntroGoNextStep();				
																}});
															});
														});
													});
												});
											});
										 });
									});
								});
							});
						});
					 break;
					}
				});
			break;
			case "fileOpen" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fopen()</span> is used to open a file.<br> Here its '+
							'open <span class="ct-code-b-yellow">codetantra.txt</span>  in <span class="ct-code-b-yellow">w</span> (write)'+
							' mode. if the file does not exist then a new file <span class="ct-code-b-yellow">codetantra.txt</span> '+
							'is created, otherwise its delete the content of the file.';
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
							$("#fileSpan").append('<span id ="appendSpan'+ characterCount+'"><span id="putcharacter'+ characterCount+'" class = "opacity00"></span></span>');
							$('#textFile').append('<br><i class="fa fa-arrow-up arrow-up"><div id="address5" class="address-text text-center"></div></i>');
							$("#address5").text(fpAddress);
							$('.introjs-tooltip').removeClass('hide');
							text  = 'The address of the first character in the file <span class="ct-code-b-yellow">codetantra.txt</span>'+
									' is stored in the file pointer <span class="ct-code-b-yellow">fptr</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
								"onclick=svgRevilLine()>Next &#8594;</a>");
							});
						});
					break;
					case "binaryValues" :
						for (var i = 2; i < 5; i++) {
							$("#fileSpan").append('&nbsp;<span id ="appendSpan'+ i+'"><span id="putcharacter'+ i+'" class = "opacity00"></span></span>');
						}
						$('.introjs-tooltip').removeClass('hide');
						text  = 'In <span class="ct-code-b-yellow">fwrite()</span> function all the <br>'+
								' values converted in to the binary format.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$("#putcharacter1").text(parseInt($("#empIdValue").text()).toString(2));
							var value = $("#empNameValue").text().length;
							var str = '';
							for (var i = 0; i < value; i++) {
							  str = str +" "+ ($("#empNameValue").text()).charCodeAt(i).toString(2);
							}
							$("#putcharacter2").text(str);
							$("#putcharacter3").text(parseFloat($("#empSalaryValue").text()).toString(2));
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								$('.introjs-tooltip').addClass('hide');
								$("#empIdValue, #empNameValue, #empSalaryValue").addClass("circle-css output-value-circle");
								$("#putcharacter1, #putcharacter2, #putcharacter3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$("#putcharacter1, #putcharacter2, #putcharacter3").removeClass("animated zoomIn");
									$("#empIdValue, #empNameValue, #empSalaryValue").removeClass("circle-css output-value-circle");
									rotationFunction(function() { 
										var l1 = $("#putcharacter4").offset();
										var l2 = $(".fa-arrow-up").offset({top: l1.top, left: l1.left});
										var l3 = $("#putcharacter4").offset();
										var leftLength = l1.left-l3.left;
										TweenMax.from(".fa.arrow-up", 1, {top: 0, left: leftLength, onComplete: function() {
											setTimeoutToIntroGoNextStep();
                  						}});
									});
								});
							});
						});
					break;
					case "closeFile" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'Before closing a file the file pointer put a <span class="ct-code-b-yellow">EOF</span> '+
								'at the fp(<span class="ct-code-b-yellow">'+ $("#addressValue1").text() +'</span>) of the file.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								$('.introjs-tooltip').addClass('hide');
								$("#putcharacter4").text("EOF").removeClass("opacity00").addClass("ct-code-b-red");
								setTimeout(function() {
									$("#addressValue1, #empIdValue, #empNameValue, #empSalaryValue").addClass("opacity00");
									$("#codetantraFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
										$(".fa-arrow-up").addClass("opacity00");
										$("#codetantraFile").removeClass("animated zoomOut").addClass("opacity00");
										setTimeout(function() {
											introcode.nextStep();
										},800);
									});								
								},800);
							});
						});
					break;
					case "openFileWithReadMode" :
						$("#line1").attr({y2:"87.8%" ,x2:"17.6%"});
						$("#line2").attr({x2:"98.8%" ,y2:"61.6%"});
						$("#line3").attr({y2:"13.8%" ,x2:"97.9%"});
						$("#arrow1, #arrow2").css({"opacity": "1"});
						$(".introjs-duplicate-nextbutton").remove();
						$('.introjs-tooltip').addClass('hide');
						$("#codetantraFile").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#codetantraFile").removeClass("animated zoomIn opacity00");
							$(".arrow-up").css({"left": "0"});
							$(".arrow-up").removeClass("opacity00");
								$("#address5").text(fpAddress).removeClass("opacity00");
							setTimeout(function(){
								$('.introjs-tooltip').removeClass('hide');
								text  = 'The address of the first character in the file <span class="ct-code-b-yellow">codetantra.txt</span>'+
										' is stored in the file pointer <span class="ct-code-b-yellow">fptr</span>.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=svgRevilLine()>Next &#8594;</a>");
								});
							},500);
						});	
					break;
					case "fileClose":
						$("#addressValue1, #empIdValue, #empNameValue, #empSalaryValue ").addClass("opacity00");
						$("#codetantraFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
							$(".fa-arrow-up").addClass("opacity00");
							$("#codetantraFile").removeClass("animated zoomOut").addClass("opacity00");
							characterCount++;
							setTimeoutToIntroGoNextStep();
						});
						break;
					}
				});
			break;
			case "printLine"+ printLine :
				if (printLine == 2) {
					$("#svgDiv1").remove();
					$("#address5").remove();	
				}
				$("#line1, #line2, #line3, #line4, #line5").css({opacity: 0});
				$("#addressDiv1").removeClass("z-index1000000");
				$("#address5").addClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">printf()</span> function is used to'+
							' <span class="ct-code-b-yellow">print</span> the <span class="ct-code-b-yellow">data</span> '+
							'or user defined <span class="ct-code-b-yellow">message</span> on <span class="ct-code-b-yellow">'+
							'console</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						printLine++;
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printTextInOutput" :
							$("#outputText, #enterValuesOfEmployee").removeClass("opacity00");
							setTimeoutToIntroGoNextStep();
						break;
						case "readvaluesfromkeyboard" :
							$("#outputText, #enterValuesOfEmployee").removeClass("opacity00");
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here enter employee <span class="ct-code-b-yellow">Id</span>, '+
									'<span class="ct-code-b-yellow">Name</span> and <span class="ct-code-b-yellow">Salary</span>.<br>'+
									' press space bar to enter name and salary.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.input-box').attr({contenteditable: 'true'});
								caretAtEnd(document.getElementById('employeeId'));
								$("#employeeId").focus();
								pressSpacebarToNextLine("#employeeId","#employeeName");
								pressSpacebarToNextLine("#employeeName","#employeeSalary");
								enterOnlyNumbers("#employeeId", 2);
								enterOnlyNumbers("#employeeName", 8);
								changeValue("#employeeSalary");
							});
						break;
						case "printIdText":
							$("#outputText1").removeClass("opacity00");
							setTimeoutToIntroGoNextStep();
						break;
						case "printTextValue" :
							$("#empIdValue").addClass("circle-css output-value-circle");
							$("#idvalue").text($("#empIdValue").text());
							zoomInEffect("#idvalue", function() {
								$("#empIdValue").removeClass("circle-css output-value-circle");
								setTimeout(function() {
									$("#empNameValue").addClass("circle-css output-value-circle");
									$("#namevalue").text($("#empNameValue").text());
									zoomInEffect("#namevalue", function() {
										$("#empNameValue").removeClass("circle-css output-value-circle");
										setTimeout(function() {
											$("#empSalaryValue").addClass("circle-css output-value-circle");
											$("#salaryvalue").text($("#empSalaryValue").text());
											zoomInEffect("#salaryvalue", function() {
												$("#empSalaryValue").removeClass("circle-css output-value-circle");
												setTimeoutToIntroGoNextStep();
											});
										},300);
									});
								},300);
								
							});
						break;
					}
				});
				break;
			case "scanfLine1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "scanflocation" :
							$('#outputScanfLine').removeAttr('contenteditable placeholder');
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">scanf()</span> function is used to'+
									' <span class="ct-code-b-yellow">read</span> the <span class="ct-code-b-yellow">data</span> '+
									'from <span class="ct-code-b-yellow">console</span>. ';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			case "fwrite" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fwrite()</span> function is used to write the entair structure block on to the given file'+
							'.<br> Here <ul>'+
							'<li><span class="ct-code-b-yellow">&emp</span> represent the base address of the entair structor </li>'+
							'<li>The <span class="ct-code-b-yellow">sizeof(emp)</span> operator returns the total number of bytes to be allocated '+
							' for <span class="ct-code-b-yellow">emp</span>.<br> Here int(<span class="ct-code-b-yellow">2</span>) + char(<span class="ct-code-b-yellow">10</span>)'+
							' + float(<span class="ct-code-b-yellow">4</span>) = <span class="ct-code-b-yellow">16</span> bytes.</li>'+
							'<li><span class="ct-code-b-yellow">1</span> represent the number of records to be return the file.</li>'+
							'<li> <span class="ct-code-b-yellow">fptr</span> contain address of the location when <span class="ct-code-b-yellow">fwrite()</span>'+
							' need to write the entair structor</li>';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "closeFile1" :
				$(".introjs-tooltip").css({"min-width":300})
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">fclose(FILE *fp)</span> '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "closeFile2" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">fclose(FILE *fp)</span> '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});		
				});
			break;
			case "fileOpen1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fopen()</span> is used to open a file with '+
							'<span class="ct-code-b-yellow">r</span>(read) '+
							' mode. The file <span class="ct-code-b-yellow">codetantra.txt</span> '+
							' can open only read mode but can not write.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "fread" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fread()</span> function is used to read the entair structure block from the given file'+
							'.<br> Here <ul>'+
							'<li><span class="ct-code-b-yellow">&emp</span> represent the base address of the entair structor </li>'+
							'<li>The <span class="ct-code-b-yellow">sizeof(emp)</span> operator returns the total number of bytes to be allocated '+
							' for <span class="ct-code-b-yellow">emp</span>.<br> Here int(<span class="ct-code-b-yellow">2</span>) + char(<span class="ct-code-b-yellow">10</span>)'+
							' + float(<span class="ct-code-b-yellow">4</span>) = <span class="ct-code-b-yellow">16</span> bytes.</li>'+
							'<li><span class="ct-code-b-yellow">1</span> represent the number of records to be return the file.</li>'+
							'<li> <span class="ct-code-b-yellow">fptr</span> contain address of the location when <span class="ct-code-b-yellow">fread()</span>'+
							' need to read the entair structor</li>';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
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

function arrowAnimation() {
	var l1 = $("#putcharacter" + (characterCount+1)).offset();
	$(".fa-arrow-up").offset({left:l1.left});
	var l2 = $("#putcharacter" + characterCount).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	TweenMax.from(".fa.arrow-up", 1, {top: topLength, left: leftLength, onComplete: function() {
		characterCount++;
		setTimeoutToIntroGoNextStep();
		
	}});
}

function rotationFunction(callBackFunction) {
	$('#addressValue1').addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
		TweenMax.to("#addressValue1", 1, {rotationX: 90, onComplete:function() {
			$("#addressValue1").text(parseInt($("#addressValue1").text()) + 1);
			TweenMax.to("#addressValue1", 1, {rotationX: 0, onComplete:function() {
	     		$('#addressValue1').removeClass("z-index1000000");
	           	if (typeof callBackFunction === "function") {
					callBackFunction();
				}
	        }});
	      }});
	    });
}

function binaryValueStore(selector1,callBackFunction) {
	zoomInEffect("#putcharacter"+characterCount, function() {
		$(selector1).removeClass("circle-css output-value-circle");
		characterCount++;
		$("#fileSpan").append('&nbsp;<span id ="appendSpan'+ characterCount+'"><span id="putcharacter'+ characterCount+'" class = "opacity00"></span></span>');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	 });
}

function svgRevilLine(callBackFunction) {
	$(".introjs-duplicate-nextbutton").remove();
		$("#addressValue1").text(fpAddress).addClass("opacity00");
	TweenMax.to("#line1", 1, {attr:{x2: "98.6%", y2: "87.8%" }, opacity: 1, onComplete:function() {
		$("#arrow1").css({"opacity": "0"});
		TweenMax.to("#line2", 1, {attr:{x2: "98.8%", y2: "13.6%" }, opacity: 1, onComplete:function() {
			$("#arrow2").css({"opacity": "0"});
					TweenMax.to("#line5", 1, {attr:{x2: "93.9%", y2: "13.8%" }, opacity: 1, onComplete:function() {
						$("#addressDiv1").addClass("z-index1000000");
						setTimeout(function() {
							$("#addressValue1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					  			$("#addressValue1").removeClass("animated zoomIn");
					  			$('.introjs-tooltip').removeClass('hide');
					  			$('.introjs-nextbutton').show();
					  		});
						},500);
					}});
		}});
	}});
}

function enterOnlyNumbers(id1, selector) {
	$(id1).on("keydown", function(e) {
		$(".keyValue").text($(id1).text());
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (selector == 2) {
			if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				e.preventDefault();
			}	
		} else if (selector == 8) {
			if (((e.shiftKey) || (e.keyCode < 64 && e.keyCode > 91)) && ((e.keyCode < 96) && (e.keyCode > 123))) {
				e.preventDefault();
			}
		}			
		if ($(this).text().length > max-1) {
			if (selector == 2) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 2.</span>");
				e.preventDefault();
			} else if (selector == 8) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 10.</span>");
				e.preventDefault();
			} 
		}
	});
}

 function changeValue(id1) {
		$(id1).on("keydown", function(e) {
			$(".keyValue").text($(id1).text());
			$('.error-text').remove();
			var max = $(this).attr("maxlength");
			if($(this).text().indexOf('.') !== -1) {    
				if ((e.keyCode == 190) || (e.keyCode == 110)) {
				e.preventDefault();
				}
			}
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 190, 110]) !== -1) {
				return;
			}
			if ((e.shiftKey) || (e.which != 46 && ((e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105)))) {
				   e.preventDefault();
			} 
			if ($(this).text().length > max-1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 5.</span>");
				e.preventDefault();
			}
		});
		$(id1).on("keyup", function(e) {
			$('.error-text').remove();
			$(".keyValue").text($(id1).text());
			if ($(this).text() == "") {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter salary.</span>");
				$(this).addClass("empty");
			} else {
				$(this).removeClass("empty");
			}
			introcode.refresh();
			if ($(".empty").length > 0 ) {
				$(".introjs-nextbutton").hide();
			} else if ($(id1).text() == '.') {
				$(".introjs-nextbutton").hide();
			} else {
				$(".introjs-nextbutton").show();
			}
		});
	} 
 
 function printDecimalValue() {
		if ($("#employeeSalary").text().indexOf('.') != -1) {
			if ($("#employeeSalary").text().startsWith('.')) {
				floatValue = 0 + $("#employeeSalary").text();
				appendZeros("startsWithdot");
			}  else if ($("#employeeSalary").text().endsWith('.')) {
				 floatValue = $("#employeeSalary").text() + '000000';
				 $("#empSalaryValue").text(floatValue);
			}  else {
				appendZeros("abcd");
			 } 
		} else {
			floatValue = $("#employeeSalary").text() + '.000000';
			$("#empSalaryValue").text(floatValue);
		} 
	}
	
	function appendZeros(text) {
		floatValue = $("#employeeSalary").text().substr($("#employeeSalary").text().indexOf('.') + 1, $("#employeeSalary").text().length);
		if (floatValue.length < 5) {
			var str = '';
			for (var i = floatValue.length; i < 5; i++) {
				str = str + '0';
			}
			if (text == "startsWithdot") {
				floatValue =  0 + $("#employeeSalary").text() + str;
				$("#empSalaryValue").text(floatValue);
				valueAnimation();
			} else {
				floatValue =  $("#employeeSalary").text() + str;
				$("#empSalaryValue").text(floatValue);
			}
		 } else {
			floatValue =  $("#employeeSalary").text();
			$("#empSalaryValue").text(floatValue);
		 }
	}

function pressSpacebarToNextLine(selector1, selector2) {
	$(selector1).on("keydown", function(e) {
		if (e.keyCode == 32) {
			$(selector2).focus();
			e.preventDefault();
		}
	});	
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


function setTimeoutToIntroGoNextStep() {
	setTimeout(function(){
		introcode.nextStep();
	},800);
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//cursor position at end
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