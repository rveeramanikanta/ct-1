var introjs;
var typingInterval = 5;

var fileOperations = function() {
	introGuide();
	
	$('#restart').click(function() {
		location.reload();
	});
	
	var x = Math.floor((Math.random() * 1024) + 2565);
	$(".address").text(x);
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#heading',
					intro: ''
				 }, {
				 	element: '#typingDiv',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#fileOperation',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#writeOpen',
					intro: '',
					tooltipClass: 'hide',
					writeFileOpenSteps: 'writeFileOpen'
				}, {
					element: '#usrFile',
					intro: ''
				}, {
					element: '#writeMode',
					intro: ''
				}, {
					element: '#writeOpen',
					intro: '',
					writeFileOpenSteps: 'fileWriteMode2'
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileWriteMode'
				}, {
					element: '#writeClose',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileClose'
				}, {
					element: '#readOpen',
					intro: '',
					tooltipClass: 'hide',
					readOpenSteps: 'readFileOpen'
				}, {
					element: '#readMode',
					intro: ''
				}, {
					element: '#readOpen',
					intro: '',
					readOpenSteps: 'readModeFile'
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileReadMode'
				}, {
					element: '#readClose',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileClose'
				}, {
					element: '#appendOpen',
					intro: '',
					tooltipClass: 'hide',
					appendModeSteps: 'appendFileOpen'
				}, {
					element: '#appendMode',
					intro: ''
				}, {
					element: '#appendOpen',
					intro: '',
					appendModeSteps: 'appendModeFile'
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileAppendMode'
				}, { 
					element: '#appendClose',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileClose'
				}, {
					element: '#restart',
					intro: 'Click to restart.',
					tooltipClass: '',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "heading":
				var text = "Let us learn how to <span class='ct-code-b-yellow'>open</span> and <span class='ct-code-b-yellow'>close</span>"
							+ " a <b>file</b> in different <span class='ct-code-b-yellow'>modes</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			
			case "typingDiv":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#typingDiv").removeClass("opacity00");
					TweenMax.to($("#line1"), 0.5, {opacity: 1, onComplete: function() {
						$("#path").addClass("style-css");
						$('.introjs-tooltip').removeClass("hide");
						$('.introjs-tooltiptext').append('<ul><li></li></ul>');
						var text = "<span class='ct-code-b-yellow'>filename</span> specifies the complete"
									+ " <span class='ct-code-b-yellow'>path</span> of the file location.";
						typing(".introjs-tooltiptext > ul li:last-child", text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton' id='buttonMode'"
													+ " onClick='modeBtn();'>Next &#8594;</a>");
						});
					}});
				});
				break;
				
			case "fileOperation":
				$("#closeFile").removeClass("style-css");
				$("#readEditor").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to($("#fileOperation"), 0.5, {opacity: 1, onComplete: function() {
						$("#fileRd").addClass("blink");
						$(".introjs-tooltip, #fileOperation").removeClass("hide opacity00");
						text = '<span class="ct-code-b-yellow">FILE</span> is a data structure defined in the standard I/O functions '
								+ 'and generally points to the internal structure that describes the file.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton'"
												+ " id='fPointer' onClick='filePointer();'>Next &#8594;</a>");
						});
					}});
				});
				break;
				
			case "writeOpen":
				$(".introjs-helperLayer").one('transitionend', function() {
					var writeFileOpenSteps = introjs._introItems[introjs._currentStep].writeFileOpenSteps;
					switch(writeFileOpenSteps) {
						
					case "writeFileOpen":
						TweenMax.to($("#writeOpen"), 0.5, {opacity: 1, onComplete: function() {
							$("#writeOpen").removeClass("opacity00");
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						}});
						break;
						
					case "fileWriteMode2":
						$('.introjs-tooltip').removeClass("hide");
						text = 'Here <span class="ct-code-b-yellow">fopen()</span> opens the file <span class="ct-code-b-yellow">codetantra.txt'
								+ '</span> in <span class="ct-code-b-yellow">write</span> mode and the base address of this file structure'
								+ ' is assigned to the file pointer <span class="ct-code-b-yellow">fp</span>.'; 
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
						break;
					}
				});
				break;
					
			case "usrFile":
				introjs.refresh();
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "This is a file with the name <span class='ct-code-b-yellow'>codetantra.txt</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "writeMode":
				$(".introjs-helperLayer").one('transitionend', function() {
					text = "<span class='ct-code-b-yellow'>w</span> stands for <span class='ct-code-b-yellow'>write</span> mode.<br>In "
							+ "<span class='ct-code-b-yellow'>write</span> mode, if the file <b>does not exist</b>, a file with the specified"
							+ "  name is created.<br><br> If the file <b>exists</b> with the same name, the contents of the file are deleted.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "txtFile":
				var textFileSteps = introjs._introItems[introjs._currentStep].textFileSteps;
				switch(textFileSteps) {
				
					case "fileWriteMode":
						$(".introjs-helperLayer").one('transitionend', function() {
							zoomInEffect("#txtFile", function() {
								$(".address, .fa").removeClass("hide");
								$("#fpDiv").addClass("z-index");
								$('.address').effect( "transfer", { to: $(".panel-body"), className: "ui-effects-transfer" }, 1000, function() {
									$(".fp-address").text($(".address").text());
									$("#fpDiv").removeClass("z-index");
									$('.introjs-tooltip').removeClass("hide");
									var text = "Here the file <span class='ct-code-b-yellow'>codetantra.txt</span> is opened in write mode."
												+ "<br><br> <span class='ct-code-b-yellow'>Please enter one character</span>.";
									typing('.introjs-tooltiptext', text, function() {
										$('#wModeText').effect("highlight", {color: 'yellow'}, 500).focus();
										inputEvent("1", "#wModeText");
									});
								});
							});
						});
						break;
							
						case "fileClose":
							$(".fp-address").text("null");
							$(".fa, .address").remove();
							$("#fpDiv").addClass("opacity00");
							$('.introjs-helperLayer').one('transitionend', function() {
								zoomOutEffect("#txtFile", function() {
									setTimeout(function() {
										introjs.nextStep();
									}, 300);
								});
							});
							break;
							
						case "fileReadMode":
							$('.introjs-helperLayer').one('transitionend', function() {
								zoomInEffect("#txtFile", function() {
									$('.introjs-tooltip').removeClass("hide");
									var text = "The <span class='ct-code-b-yellow'>codetantra.txt</span> file is opened in read mode.<br>"
												+ " In this mode, the data can be only read.";
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
							break;
							
						case "fileAppendMode":
							$('.introjs-helperLayer').one('transitionend', function() {
								zoomInEffect("#txtFile", function() {
									$('.introjs-tooltip').removeClass("hide");
									var text = "The <span class='ct-code-b-yellow'>codetantra.txt</span> file is opened in <b>append</b> mode."
												+ "<br> Please enter any text.";
									typing('.introjs-tooltiptext', text, function() {
										var t = $("#wModeText").val();
										$("#wModeText").remove();
										$("#writeText").append(t + '&nbsp;<input id="lastText" spellcheck="false"'
															+ ' maxlength="20" class="usr-text">');
										$("#lastText").effect("highlight", {color: 'yellow'}, 500).focus();
										inputEvent('20', "#lastText");
										$('.introjs-nextbutton').show();
									});
								});
							});
							break;
							
					}
				break;
				
			case "appendClose":
			case "writeClose":
			case "readClose":
				$("#fpDiv").removeClass("z-index");
				$('input').attr('disabled', true);
				$(".introjs-helperLayer").one('transitionend', function() {
					if (elementId == "writeClose") {
						TweenMax.to($("#writeClose"), 0.5, {opacity: 1, onComplete: function() {
							closingMethod();
						}});
					} else if (elementId == "appendClose") {
						TweenMax.to($("#appendClose"), 0.5, {opacity: 1, onComplete: function() {
							closingMethod();
						}});
					} else {
						TweenMax.to($("#readClose"), 0.5, {opacity: 1, onComplete: function() {
							closingMethod();
						}});
					}
				});
				break;
				
			case "readOpen":
				$(".introjs-helperLayer").one('transitionend', function() {
					var readOpenSteps = introjs._introItems[introjs._currentStep].readOpenSteps;
					switch(readOpenSteps) {
						
						case "readFileOpen": 
							TweenMax.to($("#readOpen"), 0.5, {opacity: 1, onComplete: function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 500);
							}});
							break;
							
						case "readModeFile":
							$('.introjs-tooltip').removeClass("hide");
							var text = "Here we open <span class='ct-code-b-yellow'>codetantra.txt</span> file in read mode.<br>If the file "
										+ "exists, it is opened with existing data, else an error occurs that the file does not exist.";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
							break;
					}
				});
				break;
				
			case "readMode":
				introjs.refresh();
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>r</span> stands for <span class='ct-code-b-yellow'>read</span> mode."
							+ " <br><br>In <span class='ct-code-b-yellow'>read</span> mode, the file data can only be read"
							+ " and the user will not be able to add/modify/append data."
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();		
					});
				});
				break;
				
			case "appendOpen":
				$(".introjs-helperLayer").one('transitionend', function() {
					var appendModeSteps = introjs._introItems[introjs._currentStep].appendModeSteps;
					switch(appendModeSteps) {
						
						case "appendFileOpen":
							TweenMax.to($("#appendOpen"), 0.5, {opacity: 1, onComplete: function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 500);
							}});
							break;
							
						case "appendModeFile":
							$('.introjs-tooltip').removeClass("hide");
							var text = "Here we open <span class='ct-code-b-yellow'>codetantra.txt</span> file in append mode.";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
							break;
					}
				});
				break;
				
			case "appendMode":
				$("#txtFile").addClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#appendOpen").removeClass("opacity00");
					var text = "<span class='ct-code-b-yellow'>a</span> stands for <span class='ct-code-b-yellow'>append</span> mode."
								+ " <br><br>In <span class='ct-code-b-yellow'>append</span> mode, If the file with the name exists,"
								+ " new data is added to the existing data of the file.<br><br>"
								+ " If the file does not exist a new file with the given name is created and the data is added.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();		
					});
				});
				break;
				
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
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

function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomOutEffect(id, callBackFunction) {
	$(id).addClass("animated zoomOut").addClass("opacity00").one('animationend', function() {
		$(this).removeClass("animated zoomOut");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function modeBtn() {
	$("#path").removeClass("style-css");
	$("#buttonMode").remove();
	$("#mode").addClass("style-css");
	$('.introjs-tooltiptext > ul').append('<li></li>');
	var text = "<span class='ct-code-b-yellow'>mode</span> specifies the purpose of <b>opening</b> the file."
				+ " (i.e., for <b>reading / writing / appending</b>)";
	typing(".introjs-tooltiptext > ul li:last-child", text, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton' id='buttonClose' onClick='fCloseBtn();'>Next &#8594;</a>");
	});
}

function fCloseBtn() {
	$("#buttonClose").remove();
	$("#mode").removeClass("style-css");
	$("#closeFile").addClass("style-css");
	TweenMax.to($("#line2"), 0.5, {opacity: 1, onComplete: function() {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "<span class='ct-code-b-yellow'>fp</span> is the pointer to the <span class='ct-code-b-yellow'>FILE</span> data structure.";
		typing(".introjs-tooltiptext > ul li:last-child", text, function() {
			$('.introjs-nextbutton').show();
		});
	}});
}

function filePointer() {
	$("#fPointer").remove();
	$("#fileRd").removeClass("blink");
	$("#fpRd").addClass("blink");
	$('.introjs-tooltiptext').append('<div class="pointer-text"></div>');
	var text = "<br>fp is a <span class='ct-code-b-yellow'>File pointer</span> that contains the address of the structure "
				+ " <span class='ct-code-b-yellow'>FILE</span>.";
	typing('.pointer-text', text, function() {
		$("#fpDiv").addClass("z-index");
		$("#fpRd").removeClass("blink");
		$('#fileOperation').effect( "transfer", { to: $("#fpDiv"), className: "ui-effects-transfer" }, 1000, function() {
			$("#fpDiv").removeClass("opacity00 z-index");
			$('.introjs-nextbutton').show();
		});
	});
}

function inputEvent(value, id) {
	($(id).parent()).click(function() {
		$(id).focus();
	});
	$(id).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val().length < 1) {
			$(".fp-address").text($(".address").text());
		} else {
			$(".fp-address").text("null");
		}
		if ($(this).val().length >= max) {
			if (value == 1) {
				text = " digit ";
			} else {
				text = " digits ";
			}
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br>Here we are restricted the maximum length "
					 + value + text + "only.</span>");
			e.preventDefault();
		}
	});
	$(id).on("keyup", function(e) {
		if (value == 1) {
			event(id);
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

function event(id) {
	if ($(id).val().length < 1) {
		$(".introjs-nextbutton").hide();
		$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter string.</span>");
		$(".fp-address").text($(".address").text());
	} else {
		$(".introjs-nextbutton").show();
		$(".fp-address").text("null");
	}
}

function closingMethod() {
	$('.introjs-tooltip').removeClass('hide');
	var text = "<span class='ct-code-b-yellow'>fclose()</span> function is used to close the file and "
				+ "it automatically <span class='ct-code-b-yellow'>saves</span> the data in the file."
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}