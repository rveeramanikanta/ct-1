var introcode;
var typingInterval = 1;
var fpAddress;
var enterText;
var addressCount = 1;
var characterCount = 1;
var  ctrlText;
var arr = [];
var secondInput;
var fileSpan
function randomNumbers() {
	var x = Math.floor((Math.random() * 1104) + 5125);
	$("#address1").text(x);
	var y = Math.floor((Math.random() * 1054) + 2550);
	$("#address2").text(y);
	var z = Math.floor((Math.random() * 1354) + 1950);
	$("#address3").text(z);
	var a = Math.floor((Math.random() * 1254) + 1150);
	$("#address4").text(a);
	fpAddress = Math.floor((Math.random() * 1086) + 1850);
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
				position: "right",
			},{
				element :'#filePointer',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#addressDiv1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "fptrlocation"
			},{
				element :'#idDeclaration',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#addressDiv2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "idlocation"
			},{
				element :'#nameDeclaration',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#addressDiv3',
				intro :'',
				tooltipClass : "hide",
				animateStep: "namelocation"
			},{
				element :'#salaryDeclaration',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#addressDiv4',
				intro :'',
				tooltipClass : "hide",
				animateStep: "salarylocation"
			},{
				element :'#fileOpen',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "location",
			},{
				element :'#printLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printflocation",
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "readvaluesfromkeyboard"
			},{
				element :'#scanfLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "scanflocation"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "readvaluesfromkeyboard1"
			}, {
				element :'#memoryVal',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#fprintf',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "readValues"
			},{
				element :'#closeFile1',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "closeFile"
			},{
				element :'#fileOpen1',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#codetantraFile',
				intro :'',
				tooltipClass : "hide",
				animateStep: "openFileWithReadMode"
			},{
				element :'#printLine2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printflocation",
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printText"
			},{
				element :'#fscanf',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#addressDiv2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "idValueStore"
			},{
				element :'#addressDiv3',
				intro :'',
				tooltipClass : "hide",
				animateStep: "nameValueStore"
			},{
				element :'#addressDiv4',
				intro :'',
				tooltipClass : "hide",
				animateStep: "salaryValueStore"
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
	introcode.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "filePointer":
			$("#addressDiv1").addClass("opacity00")
			break;
		case "idDeclaration":
			 $("#addressDiv2").addClass("opacity00");
			break;
		case "nameDeclaration":
			 $("#addressDiv3").addClass("opacity00");
			break;
		case "salaryDeclaration":
			 $("#addressDiv4").addClass("opacity00");
			break;
		case "fileOpen":
			if (introcode._direction == "backward") {
				$(".fa").remove();
				$("#line1, #line2,#line3").css("opacity", "0");
				$("#line2").attr("y2", "75.5%");
				$("#line3").attr("x2", "5.7%");
				$("#line1").attr("x2", "8.6%");
				$("#addressValue1").text("");
				$("#codetantraFile").addClass("opacity00");
				$("#textFile").addClass("opacity00");
				$("#text").addClass("opacity00");
				$("#textFile > i").remove();
				$("#textFile br").remove();
			}
			break;
		case "codetantraFile" :
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			var animateStep = introcode._introItems[introcode._currentStep].animateStep;
				switch(animateStep) {
				case "location" :
					if (introcode._direction == "backward") {
						$("#codetantraFile").addClass("opacity00");
						$("#textFile").addClass("opacity00");
						$("#text").addClass("opacity00");
						$("#textFile i").remove();
						$("#textFile br").remove();
						$("#line1, #line2,#line3").css("opacity", "0");
						$("#line2").attr("y2", "75.5%");
						$("#line3").attr("x2", "5.7%");
						$("#line1").attr("x2", "8.6%");
					}
					break;
				case "closeFile":
					if (introcode._direction == "backward") {
						$("#codetantraFile").removeClass("opacity00");
					}
					break;
				}
				break;
		case "outputDiv":
			var animateStep = introcode._introItems[introcode._currentStep].animateStep;
			switch(animateStep) {
			case "readvaluesfromkeyboard1":
				if (introcode._direction == "backward") {
					$("#inputVal").empty().append(secondInput);
				}
			break;
			}
			break;
		case "fileOpen1" :
			if (introcode._direction == "backward") {
				$("#codetantraFile, #addressValue1").addClass("opacity00");
				$("#addressText").remove();
			}
			break;
		case "printLine3" :
			if (introcode._direction == "backward") {
				$("#idText, #nameText, #salaryText").empty();
				$("#idvalue, #namevalue, #salaryvalue").removeAttr('style').empty();
			}
			break;
		}
	});
	introcode.onafterchange(function(targetElement){
		if (introcode._introItems[introcode._currentStep]["tooltipClass"] == "hide") {
			introcode._introItems[introcode._currentStep]["animation"] = "repeat";
		}
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
				$('.introjs-prevbutton').hide();
				$("#fileText").addClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us learn how the functions <span class="ct-code-b-yellow">fprintf()</span> '+
							' and <span class="ct-code-b-yellow">fscanf()</span> work.';
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
						+ '.<br/><br/>It points to the internal structure that describes the file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "addressDiv1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					 case "fptrlocation" :
						 if (introcode._direction == "backward") {
							setTimeout(function() {
								introcode.previousStep();
							}, 800); 
						 } else {
							 zoomInEffect("#addressDiv1",function() {
								 setTimeoutToIntroGoNextStep();
							 });
						}
					break;
					}
				});
			break;
			
			case "idDeclaration" :
				$('.introjs-nextbutton, .introjs-prevbutton').show();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">int</span> data type is used to store the employee <span class="ct-code-b-yellow">id</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			
			case "memoryVal" :
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				if (introcode._direction == "forward") {
				var text = $('#secondInput').val();
				var i = 0;
				$('#inputVal').empty();
				
				var intIndexOfMatch = text.indexOf("  ");
				while (intIndexOfMatch != -1) {
				  text = text.replace( "  ", " " )
				  intIndexOfMatch = text.indexOf( "  ");
				}
				
				$.each(text.split(' '), function (index, val) {
					$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
					console.log($("#val" + i).text());
					/*if(i == 1) {
						  $("#space1").remove();
					  }*/
						i++ 
					});
				
				var dotPos = $('#val2').text().indexOf(".");
				if (dotPos == (($('#val2').text().length) - 1)) {
					$('#val2').text($('#val2').text()+"0");
				} else if (dotPos == 0){
					$('#val2').text("0"+$('#val2').text());
				}
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressValue2").text($("#val0").text());
					fromEffectWithTweenMax("#val0","#addressValue2", function() {
						$("#addressValue3").text($("#val1").text());
						fromEffectWithTweenMax("#val1","#addressValue3", function() {
							$("#addressValue4").text($("#val2").text());	
							fromEffectWithTweenMax("#val2","#addressValue4", function() {
								setTimeoutToIntroGoNextStep();
							});
						});
					});
					
				});
				} else {
					setTimeout(function() {
						$("#addressValue2, #addressValue4, #addressValue3").text("");
						introcode.previousStep();
					}, 1000);
				}
			 
				
			break;
			
			case "addressDiv2" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					 case "idlocation" :
						 if (introcode._direction == "backward") {
							setTimeout(function() {
								introcode.previousStep();
							}, 800); 
						 } else {
						 zoomInEffect("#addressDiv2",function() {
							 setTimeoutToIntroGoNextStep();
						 });
						 }
					 break;
					 case "idValueStore" :
						 if (introcode._direction == "backward") {
							 var l1 = $("#appendSpan1").offset();
							 var l2 = $(".arrow-up").offset({top:l1.top - 10, left:l1.left});
							 $("#addressValue2").addClass("opacity00");
							 rotationFunctionMinus(function() {
								 setTimeout(function() {
									introcode.previousStep(); 
								 }, 500);
							 });
						 } else {
						 $(".arrow-up").removeClass("z-index1000000");
						 $("#id").addClass("z-index1000000").effect("highlight", {color: 'green'}, 1000, function() {
						 	$("#addressValue2").text($("#id").text());
						 	$("#addressValue2").removeClass("opacity00");
							fromEffectWithTweenMax("#id", "#addressValue2", function(){
							 	 $("#id").removeClass("z-index1000000")
								$(".arrow-up").addClass("z-index1000000");
								rotationFunction(function() {
									var l1 = $("#appendSpan2").offset();
									var l2 = $(".arrow-up").offset({top:l1.top - 10, left:l1.left});
									setTimeout(function() {
										introcode.nextStep(); 
									 }, 500);
								});
							});
						 });
						 }
					break;
					}
				});
			break;
			case "nameDeclaration" :
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">char</span> array is used to store the employee <span class="ct-code-b-yellow">name</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "addressDiv3" :
				$(".arrow-up").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					 case "namelocation" :
						 if (introcode._direction == "backward") {
							setTimeout(function() {
								introcode.previousStep();
							}, 800); 
						 } else {
							 zoomInEffect("#addressDiv3",function() {
								 setTimeoutToIntroGoNextStep();
							 });
						 }
					break;
					 case "nameValue" :
						 $('.scanfValue1').addClass('output-value-circle circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
							 $("#addressValue3").text($(".scanfValue1").text());
							 fromEffectWithTweenMax(".scanfValue1", "#addressValue3", function() {
								 $('.scanfValue1').removeClass('output-value-circle circle-css')
									setTimeoutToIntroGoNextStep();
								});
						 });
					break;
					 case "nameValueStore" :
						 if (introcode._direction == "backward") {
							 var l1 = $("#appendSpan2").offset();
							 var l2 = $(".arrow-up").offset({top:l1.top - 10, left:l1.left});
							 $("#addressValue3").addClass("opacity00");
							 rotationFunctionMinus(function() {
								 setTimeout(function() {
									introcode.previousStep(); 
								 }, 500);
							 });
						 } else {
						 $("#name").addClass("z-index1000000").effect("highlight", {color: 'green'}, 1000, function() {
							 $("#addressValue3").text($("#name").text()).removeClass("opacity00");
							 fromEffectWithTweenMax("#name", "#addressValue3", function(){
								 $("#name").removeClass("z-index1000000");
								 $(".arrow-up").addClass("z-index1000000");
									rotationFunction(function() {
										var l1 = $("#appendSpan3").offset();
										var l2 = $(".arrow-up").offset({top:l1.top - 10, left:l1.left});
										setTimeoutToIntroGoNextStep();
									});
							 });
						 });
						 }
					break;
						 
					}
				});
			break;
			case "salaryDeclaration" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">float</span> data type is used to store the employee <span class="ct-code-b-yellow">salary</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "addressDiv4" :
				$(".arrow-up").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					 case "salarylocation" :
						 if (introcode._direction == "backward") {
							setTimeout(function() {
								introcode.previousStep();
							}, 800); 
						} else {
							zoomInEffect("#addressDiv4",function() {
								setTimeoutToIntroGoNextStep()	
							});
						}
					break;
					 case "salaryValueStore" :
						 if (introcode._direction == "backward") {
							 var l1 = $("#appendSpan3").offset();
							 var l2 = $(".arrow-up").offset({top:l1.top - 10, left:l1.left});
							 $("#addressValue4").addClass("opacity00");
							 rotationFunctionMinus(function() {
								 setTimeout(function() {
									introcode.previousStep(); 
								 }, 500);
							 });
						 } else {
						 $("#salary").addClass("z-index1000000").effect("highlight", {color: 'green'}, 1000, function() {
							 $("#addressValue4").text($("#salary").text()).removeClass("opacity00");
							 fromEffectWithTweenMax("#salary", "#addressValue4", function() {
								 $(".arrow-up").addClass("z-index1000000");
								 $("#salary").removeClass("z-index1000000");
									rotationFunction(function() {
										var l1 = $("#appendSpan4").offset();
										var l2 = $(".arrow-up").offset({top:l1.top - 10, left:l1.left});
										setTimeoutToIntroGoNextStep();
									});
							 });
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
						+ "for <span class='ct-code-b-yellow'>write</span> mode.<br><br/>"
						+ " In <span class='ct-code-b-yellow'>write</span> mode, if the file <b>does not exist</b>"
						+ ", a file with the specified name is <span class='ct-code-b-yellow'>created</span>.<br><br> If the file <b>exists</b>"
						+ " with the <span class='ct-code-b-yellow'>same name</span>, the contents of the file are <span class='ct-code-b-yellow'>deleted</span>.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
								$("#fileSpan").append('<span id ="appendSpan'+ characterCount+'"><span id="putcharacter'+ characterCount+'" class = "opacity00"></span> <span id = "id"></span></span>');
								fileSpan = $("#fileSpan").html();
								$('#textFile').append('<br><i class="fa fa-arrow-up arrow-up"><div id="address5" class="address-text text-center"></div></i>');
								$("#address5").text(fpAddress);
								$('.introjs-tooltip').removeClass('hide');
								var text = "Here, the file structure's base address is stored in the "
									+ "<span class='ct-code-b-yellow'>file pointer(fp)</span>.";
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=svgRevilLine()>Next &#8594;</a>");
								});
							});
						break;
						
						case "readValues" :
							if (introcode._direction == "backward") {
								setTimeout(function() {
									$(".arrow-up").removeAttr('style')
									characterCount = 1;
									$("#addressValue1").text(parseInt($("#addressValue1").text()) - 3);
									$("#textFile br").remove();
									$("#fileSpan").empty().append(fileSpan);
									$("#fileSpan").after("<br>");
									introcode.previousStep();
								}, 300);
							} else {
							printValue("#putcharacter" +characterCount , "#idStore", "#id", "#addressValue2", "id", "readValue",function() {
								$("#fileSpan").append('<br><span id ="appendSpan'+ characterCount +'"><span id="putcharacter'+ characterCount+'" class = "opacity00"></span> <span id = "name"></span></span>');
								printValue("#putcharacter" + characterCount, "#nameStore", "#name", "#addressValue3", "name","readValue", function() {
									$("#fileSpan").append('<br><span id ="appendSpan'+ characterCount +'"><span id="putcharacter'+ characterCount+'" class = "opacity00"></span> <span id = "salary"></span></span>');	
									printValue("#putcharacter" + characterCount, "#salaryStore", "#salary", "#addressValue4", "salary","readValue", function() {
										$("#fileSpan").append('<br><span id ="appendSpan'+ characterCount +'"><span id="putcharacter'+ characterCount+'" class = "opacity00"></span>');
										setTimeoutToIntroGoNextStep();
									});
								});
							});
							}
						break;
						
						case "closeFile" :
							if (introcode._direction == "forward") {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Before closing a file the file pointer puts an <span class="ct-code-b-yellow">EOF</span>.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									setTimeout(function() {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											$('.introjs-tooltip').addClass('hide');
											$("#putcharacter" + characterCount).text("EOF").addClass("ct-code-b-red").removeClass("opacity00"	, function() {
												$("#addressValue1, #addressValue2, #addressValue3, #addressValue4").addClass("opacity00");
												$("#codetantraFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
													$(".fa-arrow-up").addClass("opacity00");
													$("#codetantraFile").removeClass("animated zoomOut").addClass("opacity00");
													setTimeout(function() {
														introcode.nextStep();
													},800);
												});			
											});
										});
									},800);
								});
							} else {
								setTimeout(function() {
									$("#putcharacter" + characterCount).addClass("opacity00", function() {
										$(".fa-arrow-up").removeClass("opacity00");
										$("#addressValue1, #addressValue2, #addressValue3, #addressValue4").removeClass("opacity00");
										introcode.previousStep();
									});
								},800);
							}
						break;
						case "openFileWithReadMode" :
							$(".introjs-duplicate-nextbutton").remove();
							$('.introjs-tooltip').addClass('hide');
							if (introcode._direction == "backward") {
								$("#addressText").show();
								$(".arrow-up").removeClass("fa-arrow-down").addClass("fa-arrow-up").addClass("opacity00");
								var l1 = $("#appendSpan4").offset();
								var l2 = $(".arrow-up").offset({top:l1.top-10, left:l1.left});
										setTimeout(function() {
											$("#arrow111, #arrow11").css({"opacity": "0"});
											$("#arrow1").css({"opacity": "1"});
											$("#line13, #line12, #line11").css("opacity", "0");
											$("#line13").attr("x2", "10.9%");
											$("#line11").attr("x2", "8.7%");
											$("#line12").attr("y2", "61.8%")
											introcode.previousStep();
										},500);
									} else {
							$("#codetantraFile").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								
									$("#codetantraFile").removeClass("animated zoomIn");
									$(".arrow-up").removeClass("fa-arrow-up").addClass("fa-arrow-down").removeClass("opacity00");
									var l1 = $("#appendSpan1").offset();
									var l2 = $(".arrow-up").offset({top:l1.top-10, left:l1.left});
									$(".arrow-up").append('<span id = "addressText" class = "position">'+fpAddress +'</span>');
									$("#addressText").css({top:-16, left: -21})
									setTimeout(function(){
										svgArrowRevil();
									},500);
							});	
									}
						break;
						
						case "fileClose":
							$("#addressValue1, #addressValue2, #addressValue3, #addressValue4").addClass("opacity00");
							$("#codetantraFile").removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
								$(".fa-arrow-up").addClass("opacity00");
								$("#codetantraFile").removeClass("animated zoomOut").addClass("opacity00");
								setTimeout(function() {
									introcode.nextStep();
								},800);
							});
							break;
					}
				});
			break;
			
			case "printLine1" :
				secondInput = $("#inputVal").html();
				$("#line1, #line2, #line3").css({opacity: 0});
				$("#addressDiv1").removeClass("z-index1000000");
				$("#address5").remove();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printflocation" :
							setTimeoutToIntroGoNextStep();
						break;
					}
				});
			break;
			
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "readvaluesfromkeyboard" :
							if (introcode._direction == "forward") {
							$("#outputText, #enterValuesOfEmployee").removeClass("opacity00");
							setTimeout(function() {
								introcode.nextStep();
							},800);
						} else {
							$("#outputText, #enterValuesOfEmployee").addClass("opacity00");
							setTimeout(function() {
								introcode.previousStep();
							},800);
						}
						break;
						case "readvaluesfromkeyboard1" :
							$('.introjs-tooltip').removeClass('hide');
							text ="Please enter an integer, string and a float value each separated by a"
								+" <b class='ct-code-b-yellow'>space</b>.<br/><br/>For example:<br/>"
								+" If your integer is <b class='ct-code-b-yellow'>24</b>, string value is "
								+" <b class='ct-code-b-yellow'>ramana</b> and the float value is" 
								+" <b class='ct-code-b-yellow'>25000.0</b> respectively, enter"
								+" them as <b class='ct-code-b-yellow'>24 ramana 25000.0</b>";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								arr = [];
								$("#secondInput").addClass("blinking-orange");
								$("#secondInput").removeAttr('disabled');
								$("#secondInput").focus();
								$('#secondInput').on("keydown", function(e) {
									if (arr.length == 3 || arr.length == 0) {
										if (e.keyCode == 32) {
											e.preventDefault();
										}
									}
								});
									
								$('#secondInput').on("keyup", function(e) {
									$('.length-error-text').remove();
									if ($(this).val() == "") {
										$(".introjs-nextbutton").hide();
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
											"Please enter an integer and a float value each separated by a space.</span>");
									} 
									var givenText = $(this).val();
									var splittedText = givenText.split(" ");
									arr = [];
									
									$.each(splittedText, function(idx, val) {
										if (val != '') {
											arr.push(val);
										}
									});
									if (arr.length == 3) {
										var a0 = $.isNumeric(arr[0]);
										var a1 = $.isNumeric(arr[2]);
										var a2 = !($.isNumeric(arr[1]));
										var dot = arr[2].indexOf(".") !== -1;
										var dot1 = arr[0].indexOf(".") == -1;
										if (a0 && a1 && a2 && dot && dot1) {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										  } else {
											  $('.introjs-nextbutton, .introjs-prevbutton').hide();
										    $('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
													+"<br/> Please follow the above format.</span>");
										  }
									} else {
										$('.introjs-nextbutton, .introjs-prevbutton').hide();
									}
								});
							}); 
						break;
							
						case "printText":
							if (introcode._direction == "backward") {
								$("#outputText1").addClass("opacity00");
								setTimeout(function() {
									introcode.previousStep();
								}, 800);
							} else {
								$("#outputText1").removeClass("opacity00");
								setTimeout(function() {
									introcode.nextStep();
								}, 800);
							}
						break;
						case "printTextValue" :
							if (introcode._direction == "backward") {
								setTimeout(function() {
									introcode.previousStep();
								}, 1000);
							} else {
							printValue("#idText" , "#idprint", "#idvalue", "#addressValue2", "id", "printValue",function() {
								printValue("#nameText", "#nameprint", "#namevalue", "#addressValue3", "name","printValue", function() {
									printValue("#salaryText", "#salaryprint", "#salaryvalue", "#addressValue4", "salary","printValue", function() {
										setTimeoutToIntroGoNextStep();
									});
								});
							});
							}
							break;
					}
				});
				break;
			case "scanfLine1" :
				$("#secondInput").val("");
				$("#secondInput").attr('disabled', true);
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "scanflocation" :
							setTimeoutToIntroGoNextStep();
						break;
					}
				});
				break;
			case "fprintf" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">fprintf()</span> function is used to'+
							' <span class="ct-code-b-yellow">write</span> the <span class="ct-code-b-yellow">data</span> '+
							'into a <span class="ct-code-b-yellow">file</span>.<br><br>'+
							'The <span class="ct-code-b-yellow">fp</span> will automatically be incremented'
							+' by <span class="ct-code-b-yellow">one</span>.<br><br>'+
							'<b>Note:</b> <span class="ct-code-b-yellow">&#92;n</span> is used by the '+
							'cursor to point to the next line.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "closeFile2" :
			case "closeFile1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The function <span class="ct-code-b-yellow">fclose(fp)</span> '+
							' is used to close the file.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "fileOpen1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The file <span class="ct-code-b-yellow">codetantra.txt</span> is opened in <span class="ct-code-b-yellow">read mode</span>. '
						+ "In <span class='ct-code-b-yellow'>read</span> mode, "
						+ "the data in the file can only be read.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "printLine2" :
				$("#addressText").hide();
				$("#addressDiv1").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printflocation" :
							setTimeoutToIntroGoNextStep();
						break;
					}
				});
			break;
			case "fscanf" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The <span class="ct-code-b-yellow">fscanf</span> is used to read the data from the '+
								'file.'
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			case "printLine3" :
				$(".arrow-up").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">printf()</span> prints the data to the output console.';
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
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
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
function rotationFunctionMinus(callBackFunction) {
	$('#addressValue1').addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
		TweenMax.to("#addressValue1", 1, {rotationX: -90, onComplete:function() {
			$("#addressValue1").text(parseInt($("#addressValue1").text()) - 1);
			TweenMax.to("#addressValue1", 1, {rotationX: 0, onComplete:function() {
	     		$('#addressValue1').removeClass("z-index1000000");
	           	if (typeof callBackFunction === "function") {
					callBackFunction();
				}
	        }});
	      }});
	    });
}

function svgArrowRevil() {
	$(".introjs-duplicate-nextbutton").remove();
		$("#addressValue1").text(fpAddress).addClass("opacity00");
		 $("#arrow111").css({"opacity": "1"});
		TweenMax.to("#line13", 1, {attr:{x2: "8.1%", y2: "61.8%" }, opacity: 1, onComplete:function() {
		$("#arrow111").css({"opacity": "0"});
		$("#arrow11").css({"opacity": "1"});
		TweenMax.to("#line12", 1, {attr:{x2: "8.3%", y2: "39.6%" }, opacity: 1, onComplete:function() {
			$("#arrow11").css({"opacity": "0"});
			$("#arrow1").css({"opacity": "1"});
			TweenMax.to("#line11", 1, {attr:{x2: "17.4%", y2: "39.8%" }, opacity: 1, onComplete:function() {
				$("#addressDiv1").addClass("z-index1000000");
				setTimeout(function() {
					$("#addressValue1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			  			$("#addressValue1").removeClass("animated zoomIn");
			  			setTimeout(function() {
			  				introcode.nextStep();
			  				$("#line13, #line12, #line11").css("opacity", "0");
			  			}, 500);
			  		});
				},500);
			}});
		}});
	}});
}

function svgRevilLine() {
	$(".introjs-duplicate-nextbutton").remove();
		$("#addressValue1").text(fpAddress).addClass("opacity00");
		$("#arrow111").css({"opacity": "1"});
	TweenMax.to("#line1", 1, {attr:{x2: "5.6%", y2: "75.8%" }, opacity: 1, onComplete:function() {
		$("#arrow111").css({"opacity": "0"});
		$("#arrow11").css({"opacity": "1"});
		TweenMax.to("#line2", 1, {attr:{x2: "5.8%", y2: "39.6%" }, opacity: 1, onComplete:function() {
			$("#arrow11").css({"opacity": "0"});
			$("#arrow1").css({"opacity": "1"});
			TweenMax.to("#line3", 1, {attr:{x2: "17.1%", y2: "39.8%" }, opacity: 1, onComplete:function() {
				$("#addressDiv1").addClass("z-index1000000");
				setTimeout(function() {
					$("#addressValue1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			  			$("#addressValue1").removeClass("animated zoomIn");
			  			$('.introjs-nextbutton, .introjs-prevbutton').show();
			  		});
				},500);
			}});
		}});
	}});
}

function setTimeoutToIntroGoNextStep() {
	if (introcode._direction == "backward") {
		setTimeout(function(){
			introcode.previousStep();
		},800); 
	} else {
		setTimeout(function() {
			introcode.nextStep();
		},800);
	}
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function printValue(selector1, selector2, selector3, selector4, text, value, callBackFunction) {
	if (text == "id") {
		$(selector1).text("Id = ").addClass("opacity00");
	} else if (text == "name") {
		$(selector1).text("Name = ").addClass("opacity00")
	} else {
		$(selector1).text("Salary = ").addClass("opacity00");
	}
	$(selector2).effect( "highlight",{color: '#ffff33'}, 500);
	$(selector2).effect( "transfer", { to: $(selector1), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector1).removeClass("opacity00");
	  	$(selector4).effect( "highlight",{color: '#ffff33'}, 500);
	  	$(selector2).removeClass("z-index1000000");
	  	setTimeout(function() {
			$(selector3).text($(selector4).text());
			fromEffectWithTweenMax(selector4, selector3,function() {
				if (value == "readValue") {
				    $('#addressValue1').addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 800, function() {
				    	TweenMax.to("#addressValue1", 1, {rotationX: 90, onComplete:function() {
				        	$("#addressValue1").text(parseInt($("#addressValue1").text()) + 1);
							TweenMax.to("#addressValue1", 1, {rotationX: 0, onComplete:function() {
								$(".arrow-up").before("<br>");
				          		$('#addressValue1').removeClass("z-index1000000");
				          		characterCount++;
				           		if (typeof callBackFunction === "function") {
									callBackFunction();
								}
				        	}});
				      	}});
				    });
			  	} else {
			  		if (typeof callBackFunction === "function") {
						callBackFunction();
					}
			  	}
		  	});
	  },800);
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
		introcode._introItems[introcode._currentStep].intro = $(".introjs-tooltiptext").html();
	});
} 