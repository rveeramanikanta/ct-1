var tl = new TimelineLite();
var typingSpeed = 5;

var wordCount = function() {
	introGuide();
	
	$(".line").hide();
	
	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#demoTitle",
			intro : "",
			position : "right"
		}, {
			element : "#driverClassName",
			intro : "",
			position : "right"
		}, {
			element : "#jobConf",
			intro : "",
			position : "right"
		}, {
			element : "#jobInstance",
			intro : "",
			position : "right"
		}, {
			element : "#jobPanel",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#jobRequirements",
			intro : "",
			position : "right"
		}, {
			element : "#setJobName",
			intro : "",
			position : "right"
		}, {
			element : "#jobPanel",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#setJarCls",
			intro : "",
			position : "right"
		}, {
			element : "#setMapperCls",
			intro : "",
			position : "right"
		}, {
			element : "#mapperPanel",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#setReducerCls",
			intro : "",
			position : "right"
		}, {
			element : "#reducerPanel",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#setOutputKey",
			intro : "",
			position : "right"
		}, {
			element : "#setOutputVal",
			intro : "",
			position : "right"
		}, {
			element : "#inputPath",
			intro : "",
			position : "right"
		}, {
			 element: '#inputFileDiv',
			 intro: '',
			 position: 'left',
			 tooltipClass: 'hide'
		 }, {
			element : "#outputPath",
			intro : "",
			position : "right"
		}, {
			 element: '#outputFileDiv',
			 intro: '',
			 position: 'left',
			 tooltipClass: 'hide'
		}, {
			element : "#jobWaitForCmplt",
			intro : "",
			position : "top"
		}, {
			element : "#mapperClass",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#mapMethod",
			intro : "",
			position : "right"
		}, {
			element : "#cleanLine",
			intro : "",
			position : "right"
		}, {
			element : "#tokens",
			intro : "",
			position : "right"
		}, {
			element : "#whileLoop",
			intro : "",
			position : "right"
		}, {
			element : "#setMapResult",
			intro : "",
			position : "right"
		}, {
			element : "#mapContext",
			intro : "",
			position : "right"
		}, {
			element : "#jobWaitForCmplt",
			intro : "",
			position : "top"
		}, {
			element : "#reducerClass",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#reducerMethod",
			intro : "",
			position : "right"
		}, {
			element : "#sumDec",
			intro : "",
			position : "right"
		}, {
			element : "#forLoop",
			intro : "",
			position : "right"
		}, {
			element : "#updateSum",
			intro : "",
			position : "right"
		}, {
			element : "#setReduceResult",
			intro : "",
			position : "right"
		}, {
			element : "#reducerContext",
			intro : "",
			position : "right"
		}, {
			element : "#jobWaitForCmplt",
			intro : "",
			position : "top"
		}, {
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "demoTitle":
			$(".introjs-nextbutton").hide();
			var text = "In mapreduce algorithm mainly involved three classes,<br/> that are <span class='ct-code-b-yellow'>driver</span>," 
						+ " <span class='ct-code-b-yellow'>mapper</span> and <span class='ct-code-b-yellow'>reducer</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$("#driverClass").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$(this).removeClass("zIndex");
					$("#mapperClass").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 1000, function() {
						$(this).removeClass("zIndex");
						$("#reducerClass").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 1000, function() {
							$(this).removeClass("zIndex");
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
			
		
		case "driverClassName":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In side the driver class job is created and tasks are assigned to that job. " 
							+ "All job requirements are initialized in this driver class.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "jobConf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "new configuration object <span class='ct-code-b-yellow'>conf</span> has been initialized.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "jobInstance":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Creates a new job with no particular Cluster and a given Configuration.<br/><br/>" 
							+ "A Cluster will be created from the conf parameter only when it's needed.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "jobPanel":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 4) {
					$("#jobPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$(".introjs-tooltip").removeClass("hide");
						var text = "After creation of a job the user needs to configure all the requirements for job tasks.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				} else {
					$("#jobName").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 1000, function() {
						$(this).removeClass("zIndex");
					});
					$('#jobName').effect( "transfer", { to: $("#panelJobName"), className: "ui-effects-transfer" }, 1000, function() {
						$("#panelJobName").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					});
				}
			});
			break;
			
		case "jobRequirements":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "All job requirements are initialized by using setter methods.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setJobName":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Set the user-specified job name.<br/><br/>" 
							+ " i.e. <span class='ct-code-b-yellow'>wordcount</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setJarCls":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Set the Jar by finding where a given class came from.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setOutputKey":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here will set the types expected as output key from both the map and reduce phases.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setOutputVal":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here will set the types expected as output value from both the map and reduce phases.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "inputPath":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Add a Path to the list of inputs for the map-reduce job.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "inputFileDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#inputFileDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					$(".introjs-tooltip").removeClass("hide");
					var text = "Add input path to the map-reduce job.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "outputPath":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Set the path of the output directory for the map-reduce job.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "outputFileDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputFileDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					$(".introjs-tooltip").removeClass("hide");
					var text = "Once successfully submit the job, in this location directory is created with name of output.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "jobWaitForCmplt":
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').css({"max-height" : "160px", "overflow" : "auto"});
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 19) {
					var text = "Submit the job to the cluster and wait for it to finish.<br/><br/>" 
								+ "The job submission process involves:"; 
					typing(".introjs-tooltiptext", text, function() {
						$("#animationDiv").addClass("zIndex").css("background-color", "white");
						$(".introjs-tooltiptext").append("<ul><li class='opacity00'>Checking the input and output specifications of the job.</li></ul>");
						
						TweenMax.to($(".introjs-tooltiptext > ul li:last-child"), 1, {opacity : 1, onComplete:function() {
							$(".introjs-tooltiptext > ul li:last-child").removeClass("opacity00");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='inputOuputSpec()'>Next &#8594;</a>");
						}});
					});
				} else if (introjs._currentStep == 27) {
					var text = "Finally we get a output from the mapper.";
					stepsTyping(text, "mappersOuput()");
				} else {
					var text = "Reducer process the intermediate output and finally write into output file.";
					stepsTyping(text, "finalOuput()");
				}
			});
			break;
			
		case "jobPanel":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#jobPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
			
		case "setMapperCls":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Set the <span class='ct-code-b-yellow'>Mapper</span> class for the job.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setReducerCls":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Set the <span class='ct-code-b-yellow'>Reducer</span> class for the job.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mapperPanel":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#mapperPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
			
		case "reducerPanel":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#reducerPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass("animated zoomIn");
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
			
		case "mapperClass":
		case "reducerClass":
			$('.introjs-tooltiptext').removeAttr("style");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "mapMethod":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we override a map method from <span class='ct-code-b-yellow'>Mapper</span> class." 
							+ "Parameters to map method are KEYIN, VALUEIN, Context.<br/><br/>" 
							+ "This method called once for each key/value pair in the input split. </br><br/>" 
							+ "Most applications should override this, but the default is the identity function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "cleanLine":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are remove special characters like $,],^ etc from the input value " 
							+ "stored into a String varible cleanLine.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "tokens":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using StringTokenizer splitting input value into tokens.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "whileLoop":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using while loop iterate all tokens.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setMapResult":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are set each token into Text variable word.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mapContext":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Finally we write a key/value pairs into map context.<br/><br/> " 
							+ "That become a input key/value pair to the reducer phase.";
				typing(".introjs-tooltiptext", text, function() {
					introjs._introItems[introjs._currentStep + 1].intro = introjs._introItems[19].intro
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "reducerMethod":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we override a reducer method from <span class='ct-code-b-yellow'>Reducer</span> class." 
							+ "Parameters to reducer method are KEYIN, Iterable<VALUEIN>, Context.<br/><br/>" 
							+ "This method is called once for each key.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "sumDec":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare a int variable sum and initialized to 0.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "forLoop":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using for-each loop we iterate each value.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "updateSum":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "update the sum value from get the value for IntWritable variable val.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "setReduceResult":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Finally sum value set as result to reducer.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "reducerContext":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Finally key/value pair write into output file.";
				typing(".introjs-tooltiptext", text, function() {
					introjs._introItems[introjs._currentStep + 1].intro = introjs._introItems[19].intro
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "restart":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text);
			});
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function arrowReveal(arrowId, x2, y2, callBackFunction) {
	$(arrowId).show();
	tl.to(arrowId, 1, {attr:{x2: x2, y2: y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function inputOuputSpec() {
	$(".user-btn").remove();
	arrowReveal("#arrow1", "44%", "23%", function() {
		arrowReveal("#arrow2", "74.5%", "23%", function() {
			$('.introjs-tooltiptext').append('<div class="text"></div>');
			var text = "Computing the InputSplit for the job. ";
			typing(".text", text, function() {
			//stepsTyping(text, "InputSplits()");
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html()
			$('.introjs-nextbutton').show();
			});
		});
	});
}

function stepsTyping(text, nextBtnAction) {
	$(".introjs-tooltiptext > ul").append("<li class='opacity00'>" + text + "</li>");
	var container = $('.introjs-tooltiptext');
	scrollTo = $('.introjs-tooltiptext > ul > li:last-child');
		container.animate({
		scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
		TweenMax.to($(".introjs-tooltiptext > ul li:last-child"), 1, {opacity : 1, onComplete:function() {
			$(".introjs-tooltiptext > ul li:last-child").removeClass("opacity00");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='" + nextBtnAction + "'>Next &#8594;</a>");
		}});
	});
}

function mappersOuput() {
	$(".user-btn").remove();
	arrowReveal("#arrow3", "41.4%", "86%", function() {
		$("#mapperDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$(this).removeClass("animated zoomIn");
			var text = "After complition of mapper map-reduce transfer the intermediate output to reducer as a input.";
			stepsTyping(text, "reducerInput()");
		});
	});
}

function reducerInput() {
	$(".user-btn").remove();
	arrowReveal("#arrow4", "69.3%", "86%", function() {
		introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		$(".introjs-nextbutton").show();
	});
}

function finalOuput() {
	$(".user-btn").remove(); 
	arrowReveal("#arrow5", "86.5%", "39.1%", function() {
		$("#outputFile div").removeClass("opacity00");
		introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html(); 
		$(".introjs-nextbutton").show();
	});
}