var t1;
var TweenMax;
var tl = new TimelineLite();
var typingSpeed = 1;
var executeBtnCount = 1;

var usageOfHashDefineReady = function() {

	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		$("#inputChar").attr("disabled", false);
		$("#inputChar").val('');
		$("#inputChar1").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
	$('body').keypress(function(event) {
		if (event.keyCode == 13) {
		     event.preventDefault();
		}
	});
	
	$('#inputChar').on("keydown", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength"); 
		if ($(this).val().length > max) {
			if (e.keyCode == 110 || e.keyCode == 190) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39, 110, 190]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Please restrict the Max Length 3 digits only</div>");
			e.preventDefault();
		}
	});
	
	$("#inputChar").on("keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		
		if ($(this).val() == "") {
			$(".introjs-nextbutton,.introjs-prevbutton").hide();
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Please enter a float number.</div>");
		} else {
			$(".introjs-nextbutton,.introjs-prevbutton").show();
		}
		if ($("#inputChar").val().length < 1) {
			$(".introjs-nextbutton,.introjs-prevbutton").hide();
		}
		if ($("#inputChar").val().startsWith('.') || $("#inputChar").val().endsWith('.')) {
			//$('.ct-code-b-red').remove();
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Number can't end with dot.</div>");
			$(".introjs-nextbutton,.introjs-prevbutton").hide();
			//e.preventDefault();
			return false;
		} /* else {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Number can't end with dot</div>");
			//$(".introjs-nextbutton").show();
		} */
		/* if (($("#num2").val().charAt(0) == ".") || ($("#num2").val().charAt($(".float-num").val().length - 1) == ".")) {
			$(".introjs-nextbutton").hide();
			if (($("#num2").val().charAt(0) == ".")) {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Enter number first</div>");
			} else {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Number can't end with dot</div>");
			}
		} */
	});
	introjsGuide();
	$("#nextBtn").click(function() {
		$('.introjs-nextbutton').click();
	});
}

function introjsGuide() {
	intro = introJs();
	intro.setOptions({
		
		steps : [{
					element :'#informationdiv',
					intro :'',
					tooltipClass:'hide',
					position:"right"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#piValue1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#piValue2',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line4',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#animationDiv',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line5',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line6',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#inputChar',
					intro :'',
					position:"bottom",
					//tooltipClass:"hide"
				},{
					element :'#radiusId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line7',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#areaId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom",
					tooltipClass :"hide"
				},{
					element :'#circumferenceId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line10',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#preBody1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line12',
					intro :'',
					position:"bottom"
				},{
					element :'#cubeAId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line14',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#aValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line15',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line16',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#inputChar1',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#aValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line17',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#cubeAId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId1',
					intro :'',
					tooltipClass: "hide",
					position: "bottom"
				},{
					element :'#restartBtn',
					intro :'',
					position: "right"
			}]
	});

	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "informationdiv" :
			
			break;
			
		case "line2" :
			
			break;
			
		case "piValue1" :
			
			break;
			
		case "piValue2" :
			
			break;
			
		case "line4" :
			
			$("#animationDiv").addClass("opacity00");
			$("#radiusId").removeAttr("style").addClass("opacity00");
			$("#areaId").removeAttr("style").addClass("opacity00");
			$("#circumferenceId").removeAttr("style").addClass("opacity00");
			break;
			
		case "animationDiv" :
			
			break;
			
		case "line5" :
			$("#consoleId").addClass("opacity00");
			break;
			
		case "line6" :
			$("#inputChar").val('');
			$("#typeInputChar").removeClass("hidden");
			$("#enterRadiusValue").addClass("hidden");
			break;
			
		case "line7" :
			$("#panelAreaBody").addClass("visibility-hidden").text("");
			break;
			
		case "line8" :
			console.log(intro._currentStep);
			console.log(intro._direction);
			if (intro._direction == "backward") {
			$("#panelCircumferenceBody").text("");
			}
		case "line9" :
			if (intro._direction == "backward") {
				$("#finalAreaValue").addClass("opacity00");
			}
			break;
			
		case "line10" :
			if (intro._direction == "backward") {
				$("#finalCircumferenceValue").addClass("opacity00");
				$('#finalCircumferenceValue span').text("");
				
			}
			break;
			
		case "inputChar" :
			$("#inputChar").val('');
			$("#radiusValue").text("");
			$("#inputChar").attr("disabled", false);
			break;
			
		case "radiusId" :
				
				break;
			
		case "areaId" :
			
			break;
			
		case "circumferenceId" :
			
			break;
			
		case "consoleId" :
		
			if(intro._currentStep == 7) {
				
			
			} else if(intro._currentStep == 16) {
				
			} else if(intro._currentStep == 18) {
				$("#preBody1").addClass("opacity00");
				$("#animationDiv1").addClass("opacity00");
			}
			break;
			
		case "preBody1" :
			
			break;
			
		case "line12" :
			
			break;
			
		case "line14" :
			$("#aValue").addClass("visibility-hidden")
			break;
			
		case "line15" :
			$("#consoleId1").addClass("opacity00");
			break;
			
		case "line16" :
			$("#typeInputChar1").removeClass("hidden");
			$("#enterNumberId").addClass("hidden");
			break;
			
		case "line17" :
			
			break;
			
		case "aValue" :
			
			if(intro._currentStep == 23) {
				
			} else if(intro._currentStep == 28) {
				
			}
			break;
			
		case "cubeAId" :
			
			if (intro._currentStep == 21) {
				
			} else if (intro._currentStep == 30) {
				
				
			}
			break;
			
		case "inputChar1" :
			$("#inputChar1").val('');
			break;
			
		case "consoleId1" :
			
			if(intro._currentStep == 25) {
				
			} else if(intro._currentStep == 31) {
							
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
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$("#informationdiv").removeClass("opacity00");
			$("#defination").removeClass("opacity00");
			TweenMax.to("#list1", 0.2, {opacity: 1, onComplete: function() {
				TweenMax.to("#list2", 0.2, {opacity: 1, onComplete: function() {
					TweenMax.to("#list3", 0.2, {opacity: 1, onComplete: function() {
						$("#nextBtn").removeClass("opacity00");
					}});
				}});
			}});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preBody").removeClass("opacity00");
				typing(".introjs-tooltiptext", "In this statement we are declaring a symbolic constant <span class='ct-code-b-yellow'>PI</span> with its value <span class='ct-code-b-yellow'>3.141</span> using <span class='ct-code-b-yellow'>#define</span>.<br/>" +
						"So, whenever the compilation starts all the occurrences of <span class='ct-code-b-yellow'>PI</span> is replaced by <span class='ct-code-b-yellow'>3.141</span>.</li></ul>", function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "piValue1" :
			$(".introjs-tooltip").hide();
			$('.introjs-nextbutton').hide();
			if (intro._direction == "forward") {
			$('.introjs-helperLayer').one('transitionend', function() {
				t1.to("#piValue1", 0.4, {opacity: 1, rotationX: -90, onComplete: function() {
					$("#piValue1").text("3.141");
					intro.refresh();
				}});
				
				t1.to("#piValue1", 0.4, {opacity:1, rotationX: 0, onComplete: function() {
					setTime();
				}});
			});
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					t1.to("#piValue1", 0.4, {opacity:1, rotationX: -90, onComplete: function() {
						$("#piValue1").text("PI");
						intro.refresh();
					}});
					
					t1.to("#piValue1", 0.4, {opacity:1, rotationX: 0, onComplete: function() {
						setTime();
					}});
				});
			}
			break;
			
		case "piValue2" :
			$('.introjs-nextbutton').hide();
			if (intro._direction == "forward") {
			$('.introjs-helperLayer').one('transitionend', function() {
				t1.to("#piValue2", 0.4, {opacity:1, rotationX: -90, onComplete: function() {
					$("#piValue2").text("3.141");
					intro.refresh();
				}});
				
				t1.to("#piValue2", 0.4, {opacity:1, rotationX: 0, onComplete: function() {
					setTime();
				}});
			});
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					t1.to("#piValue2", 0.4, {opacity:1, rotationX: -90, onComplete: function() {
						$("#piValue2").text("PI");
						intro.refresh();
					}});
					
					t1.to("#piValue2", 0.4, {opacity:1, rotationX: 0, onComplete: function() {
						setTime();
					}});
				});
			}
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function() {
					if (intro._direction=="forward") {
							intro.nextStep()
					} else {
						intro.previousStep()
					}
				}, 500);
			});
			break;
			
		case "animationDiv" :
			$('.introjs-nextbutton').hide();
			
				if (intro._direction=="forward") {
			$("#animationDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				//$("introjs-tooltip").removeClass("hide");
				$("#radiusId").removeClass("opacity00");
				TweenMax.staggerFrom("#radiusId", 0.6, {opacity:0, top: -100}, -0.5, function() {
					$("#areaId").removeClass("opacity00");
					TweenMax.staggerFrom("#areaId", 0.6, {opacity:0, top: -100}, -0.5, function() {
						$("#circumferenceId").removeClass("opacity00");
						TweenMax.staggerFrom("#circumferenceId", 0.6, {opacity:0, top: -100}, -0.5, function() {
							
						  setTimeout(function(){
							intro.nextStep()
						  }, 500);
						});
					});
				});
			});
				} else {
					intro.previousStep()
				}
			
				
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTime();
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
						setTimeout(function() {
							if (intro._direction=="forward") {
								$("#typeInputChar").addClass("hidden");
								$("#enterRadiusValue").removeClass("hidden");
								$('.introjs-helperLayer').one('transitionend', function() {
									$("#scanPercent").effect("highlight", {color: '#008000'}, 1000, function() {
										$("#scanAmpPercentId").effect("highlight",{color: '#008000'}, 1000, function() {
									intro.nextStep()
										});
									});
								});
							} else {
								intro.previousStep()
							}
						}, 500);
				
			break;
			
		case "line7" :
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Expression is evaluated and the result is stored in area.</br>" +
						"<span><span class='ct-code-b-yellow'>area</span> = <span id='totalRadius' class='ct-code-b-yellow position-relative display-inline'>3.141 * <span  id='radiusOne' class='ct-code-b-yellow position-relative display-inline'>r</span> * <span id='radiusTwo' class='ct-code-b-yellow position-relative display-inline'>r</span></span></span>"+
						" <span id='tooltipAreaNextBtn' class='introjs-button next-btn opacity00' onclick='tooltipFlipArea()'>Next &#8594;</span>", function() {
					$('#tooltipAreaNextBtn').removeClass("opacity00");
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Expression is evaluated and the result is stored in circumference.</br>" +
						"<span><span class='ct-code-b-yellow'>circumference</span> = <span id='totalCircumference' class='ct-code-b-yellow position-relative display-inline'>2 * <span  id='circumPiValue' class='ct-code-b-yellow position-relative display-inline'>3.141</span> * <span id='circumRadius' class='ct-code-b-yellow position-relative display-inline'>r</span></span></span>" +
						"<span id='tooltipCircumNextBtn' class='introjs-button next-btn opacity00' onclick='tooltipFlipCircum()'>Next &#8594;</span>", function() {
						$('#tooltipCircumNextBtn').removeClass("opacity00");
				});
			});
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTime();
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTime();
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.intro-tooltip').show();
				$("#inputChar").addClass("blinking-orange");	
				$("#inputChar").focus();
				typing(".introjs-tooltiptext", "Enter the radius.</br>" +
						"<span id='errorTextBox1' class='ct-code-b-red'></span>", function() {
				});
			});
			break;
			
		case "radiusId" :
			if($('#inputChar').val().includes(".")) {
				$("#radiusValue").text($('#inputChar').val() + '00000');
			} else {
				$("#radiusValue").text($('#inputChar').val() + '.000000');
			}
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#inputChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				$("#panelRadiusBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelRadiusBody").removeClass('animated zoomIn');
					setTime();
				});
			});
			break;
			
		case "areaId" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelAreaBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelAreaBody").removeClass('animated zoomIn');
					setTime();
				});
			});
			break;
			
		case "circumferenceId" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelCircumferenceBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelCircumferenceBody").removeClass('animated zoomIn');
					setTime();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 7) {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('.introjs-helperLayer').one('transitionend', function() {
									$("#consoleId").removeClass("opacity00");
									typing("#typeRadiusId", " <span id='typeInputChar'>Enter the radius : </span>", function() {
										$("#typeRadiusId").removeClass("typingCursor");	
										setTimeout (function() {
									intro.nextStep()
										}, 500);
									});
								});
							} else {
								intro.previousStep()
							}
						}, 500);
				
			} else if(intro._currentStep == 16) {
				/*$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#finalAreaValue", "<br /> Area of circle is : <span class='ct-code-b-green'>"+ $("#panelAreaBody").text() +"</span>", function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
				});*/
				if (intro._direction =="forward") {
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#finalAreaValue").removeClass("opacity00");
					typing("#finalAreaValue", "<br /> Area of circle is : <span class='ct-code-b-yellow'>"+ $("#panelAreaBody").text() +"</span>", function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
				});
				} else {
					intro.previousStep()
				}
			} else if(intro._currentStep == 18) {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('.introjs-helperLayer ').one('transitionend', function() {
									$("#finalCircumferenceValue").removeClass("opacity00");
									typing("#finalCircumferenceValue", "Circumference of circle : <span class='ct-code-b-yellow'>"+ $("#panelCircumferenceBody").text() +"</span>", function() {
										setTimeout(function() {
											intro.nextStep();
										}, 500);
									});
								});	
							} else {
								intro.previousStep()
							}
						}, 500);
				
			}
			break;
			
		case "preBody1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preBody1").removeClass("opacity00");
				$("#animationDiv1").removeClass("opacity00");
				$("#animationDiv").removeClass("opacity00");
				setTime();
			});
			break;
			
		case "line12" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>CUBE(num)</span> is a symbolic function.<br/>It is replaced with the formula <span class='ct-code-b-yellow'>num * num * num</span> before compilation starts.", function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line14" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTime();
			});
			break;
			
		case "line15" :
			$('.introjs-nextbutton').hide();
				setTimeout(function() {
					if (intro._direction=="forward") {
						$('.introjs-helperLayer').one('transitionend', function() {
							setTimeout(function() {
								intro.nextStep()
										}, 500);
						});
					} else {
						intro.previousStep()
					}
				}, 500);
		
			break;
			
		case "line16" :
			$('.introjs-nextbutton').hide();
						setTimeout(function() {
							if (intro._direction=="forward") {
								$("#typeInputChar1").addClass("hidden");
								$("#enterNumberId").removeClass("hidden");
								$('.introjs-helperLayer').one('transitionend', function() {
									$("#scanPercent1").effect("highlight", {color: '#008000'}, 1000, function() {
										$("#scanAmpPercentId1").effect("highlight",{color: '#008000'}, 1000, function() {
											setTimeout(function() {
									intro.nextStep()
											}, 500);
										});
									});
								});	
							} else {
								intro.previousStep()
							}
						}, 500);
			
			break;
			
		case "line17" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTime();
			});
			break;
			
		case "aValue" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 23) {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('.introjs-helperLayer ').one('transitionend', function() {
									$("#aValue").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
										$("#aValue").removeClass('animated zoomIn');
										setTimeout(function() {
										intro.nextStep()
										}, 500);
									});
								});
							} else {
								intro.previousStep()
							}
						}, 500);
				
			} else if(intro._currentStep == 28) {
				$("#aNumber").text($('#inputChar1').val());
				$("#inputChar1").attr("disabled", true);
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#panelABody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#panelABody").removeClass('animated zoomIn');
						intro.refresh();
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
					});
				});
			}
			break;
			
		case "cubeAId" :
			$('.introjs-nextbutton').hide();
			console.log(intro._currentStep,intro._direction); 
			if (intro._currentStep == 21) {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('.introjs-helperLayer').one('transitionend', function() {
									$(".introjs-tooltip").removeClass("hide");
									t1.to("#aCubeValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
										$("#aCubeValue").html('<span id="a1" class="position-relative display-inline">a</span> * <span id="a2" class="position-relative display-inline">a</span> * <span id="a3" class="position-relative display-inline">a</span>');
										intro.refresh();
									}});
									
									t1.to("#aCubeValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
										
										setTimeout(function() {
											intro.nextStep()
													}, 500);
									}});
								}); // 36
									
							} else  {
								$('.introjs-nextbutton').hide();
								$('.introjs-helperLayer').one('transitionend', function() {
									$(".introjs-tooltip").removeClass("hide");
									t1.to("#aCubeValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
										$("#aCubeValue").html('<span id = "a1" class = "position-relative display-inline">CUBE(A)</span>');
										intro.refresh();
									}});
									t1.to("#aCubeValue",0.5, {opacity:1, rotationX: 0, onComplete: function() {
										setTimeout(function() {
											intro.previousStep()
													}, 500);
									}});
								});
							}
						}, 500);	
			} else if (intro._currentStep == 30) {
				intro.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					
					t1.to("#a1", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#a1").text($('#inputChar1').val());
					}});
					
					t1.to("#a1", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
					//	intro.refresh();
					}});
					
					t1.to("#a2", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#a2").text($('#inputChar1').val());
					}});
					
				    t1.to("#a2", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
				    	intro.refresh();
				    }});
				    
					t1.to("#a3", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#a3").text($('#inputChar1').val());
					}});
					
					t1.to("#a3", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.refresh();
					}});
					
					var l1 = parseInt($('#inputChar1').val());
					var result = l1 * l1 * l1;
					
					t1.to("#aCubeValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#aCubeValue").text(result);
						intro.refresh();
					}});

					t1.to("#aCubeValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					}});
				});
			}
			break;
			
		case "inputChar1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Enter a number.</br>" +
				"<span id='errorTextBox2' class='ct-code-b-red'></span>", function() {
					$("#inputChar1").addClass("blinking-orange");
					$("#inputChar1").focus();
					$("#inputChar1").keyup(function() {
						if ($("#inputChar1").val().length == '') {
							$('.introjs-nextbutton,.introjs-prevbutton').hide();
						} else {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						}
					});
				});
			});
			break;
			
		case "consoleId1" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 25) {
				setTimeout(function() {
					if (intro._direction == "forward") {
				
				$('.introjs-helperLayer ').one('transitionend', function() {
				$("#consoleId1").removeClass("opacity00");
					typing("#typeNumberId","<span id='typeInputChar1'>Enter a number : </span>", function() {
						$("#typeNumberId").removeClass("typingCursor");
						setTime();
					});
				});
				} else {
					intro.previousStep();
				}
			}, 500);
			} else if(intro._currentStep == 31) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#finalCubeValue", "The cube of the given number is : <span class='ct-code-b-yellow'>"+ $("#aCubeValue").text() +"</span>", function() {
						setTime();
					});
				});				
			}
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", function() {
					
				});
			});
			break;
		}
	});
	
	intro.setOption('showStepNumbers', false);
	intro.setOption('exitOnOverlayClick', false);
	intro.setOption('exitOnEsc', false);
	intro.setOption('keyboardNavigation', false);
	intro.start();
	
	intro.refresh();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$('.introjs-nextbutton,.introjs-prevbutton').addClass('opacity00');
}

function setTime() {
	setTimeout(function() {
		if (intro._direction=="forward") {
				intro.nextStep()
		} else {
			intro.previousStep()
		}
	}, 500);
}

function isNumber(evt) {
	$(".error-text").remove();
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    	$("#errorTextBox2").addClass("ct-code-b-red");
    	$("#errorTextBox2").text("Enter only integer values");
        return false;
	} else {
    	$("#errorTextBox2").removeClass("ct-code-b-red");
    	$("#errorTextBox2").text("");
	    return true;
    }
}

function tooltipFlipArea() {
	$(".next-btn").remove();	
	t1.to("#radiusOne", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		if($('#inputChar').val().includes(".")) {
			$("#radiusOne").text($('#inputChar').val() + '00000');
		} else {
			$("#radiusOne").text($('#inputChar').val() + '.000000');							
		}
	}});
	
	t1.to("#radiusOne", 1, {opacity:1, rotationX: 0});
	
	t1.to("#radiusTwo", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		if($('#inputChar').val().includes(".")) {
			$("#radiusTwo").text($('#inputChar').val() + '00000');
		} else {
			$("#radiusTwo").text($('#inputChar').val() + '.000000');							
		}
	}});
	
	t1.to("#radiusTwo", 1, {opacity:1, rotationX: 0});
	var l1;
	var result;
	if($('#inputChar').val().includes(".")) {
		l1 = parseFloat($('#inputChar').val() + '00000');
		result = 3.141 * l1 * l1;
		console.log("final result with dot = " + result);
	} else {
		l1 = parseFloat($('#inputChar').val() + '.000000');
		result = 3.141 * l1 * l1;
		console.log("final result without dot = " + result);
	}
	
	var givenString = result.toString();
	console.log("resulted givenString is = " + givenString);
	var indexOfDot = givenString.indexOf(".");
	var index;
	if (indexOfDot == -1) {
		index = 0;
	} else {
		index = givenString.substring(indexOfDot + 1, givenString.length).length;
	}
	if(index > 6) {
		givenString = givenString.substring(0, 8);
	}
	
	for (var i = index; i < 6; i++) {
		if(i == 0) {
			givenString = givenString.concat(".0");
		} else {
			givenString = givenString.concat("0");
		}
	}
	console.log("givenString = " + givenString);
	
	t1.to("#totalRadius", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$("#totalRadius").text(givenString);
		$("#panelAreaBody").text(givenString);
		$("#totalRadius").addClass("ct-code-b-yellow");
	}});
	
	t1.to("#totalRadius", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		$('.introjs-nextbutton,.introjs-prevbutton').show();
	}});
}

function tooltipFlipCircum() {
	$(".next-btn").remove();
	t1.to("#circumRadius", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		if($('#inputChar').val().includes(".")) {
			$("#circumRadius").text($('#inputChar').val() + '00000');
		} else {
			$("#circumRadius").text($('#inputChar').val() + '.000000');
		}
	}});
	
	t1.to("#circumRadius", 1, {opacity:1, rotationX: 0});
	var l1;
	var result;
	if($('#inputChar').val().includes(".")) {
		l1 = parseFloat($('#inputChar').val() + '00000');
		result = 2 * 3.141 * l1;
	} else {
		l1 = parseFloat($('#inputChar').val() + '.000000');
		result = 2 * 3.141 * l1;
	}
	
	
	var givenString = result.toString();
	console.log("resulted givenString is = " + givenString);
	var indexOfDot = givenString.indexOf(".");
	var index;
	if (indexOfDot == -1) {
		index = 0;
	} else {
		index = givenString.substring(indexOfDot + 1, givenString.length).length;
	}
	if(index > 6) {
		givenString = givenString.substring(0, 8);
	}
	
	for (var i = index; i < 6; i++) {
		if(i == 0) {
			givenString = givenString.concat(".0");
		} else {
			givenString = givenString.concat("0");
		}
	}
	console.log("givenString = " + givenString);
	t1.to("#totalCircumference", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$("#totalCircumference").text(givenString);
		$("#panelCircumferenceBody").text(givenString).addClass('visibility-hidden');
		$("#totalCircumference").addClass("ct-code-b-yellow");
	}});
	
	t1.to("#totalCircumference", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		$('.introjs-nextbutton,.introjs-prevbutton').show();
	}});
}

/* function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
} */
function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});

}