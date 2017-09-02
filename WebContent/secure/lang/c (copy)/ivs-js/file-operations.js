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
					intro: '',
					position: 'right'
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
					position: 'top',
					textFileSteps: 'fileWriteMode'
				}, {
					element: '#txtFile',
					intro: '',
					position: 'top',
					textFileSteps: 'writingText'
				}, {
					element: '#writeClose',
					intro: ''
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
					position: 'top',
					textFileSteps: 'fileReadMode'
				}, {
					element: '#readClose',
					intro: ''
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
					position: 'top',
					textFileSteps: 'fileAppendMode'
				}, { 
					element: '#appendClose',
					intro: ''
				}, {
					element: '#txtFile',
					intro: '',
					tooltipClass: 'hide',
					textFileSteps: 'fileClose'
				}, {
					element: '#restart',
					intro: 'Click to restart.',
					tooltipClass: 'introjs-tooltip-min-width-custom',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "heading":
				var text = "Let us learn how to <span class='ct-code-b-yellow'>open</span> and <span class='ct-code-b-yellow'>close</span>"
							+ " a <b>file</b> in different <span class='ct-code-b-yellow'>modes</span>";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			
			case "typingDiv":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#typingDiv").removeClass("opacity00");
					TweenMax.to($("#line1"), 0.5, {opacity: 1, onComplete: function() {
						$("#path").addClass("blink");
						$('.introjs-tooltip').removeClass("hide");
						var text = "<span class='ct-code-b-yellow'>Filename</span> specifies the complete"
									+ " <span class='ct-code-b-yellow'>path</span> of a file";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton' id='buttonMode'"
													+ " onClick='modeBtn();'>Next &#8594;</a>");
						});
					}});
				});
				break;
				
			case "readEditor":
				$("#closeFile").removeClass("blink");
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#readEditor").removeClass("opacity00");
					var text = "Let us learn how to <span class='ct-code-b-yellow'>open</span> and"
								+ " <span class='ct-code-b-yellow'>close</span> a file in"
								+ " <span class='ct-code-b-yellow'>different modes</span>."
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
					
			case "fileOperation":
				$("#closeFile").removeClass("blink");
				$("#readEditor").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to($("#fileOperation"), 0.5, {opacity: 1, onComplete: function() {
						$("#fileRd").addClass("blink");
						$(".introjs-tooltip").removeClass("hide");
						var text = "FILE contains all the information to control the stream process, where the stream is a flow of data.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton'"
												+ " id='fPointer' onClick='filePointer();'>Next &#8594;</a>");
						});
					}});
				});
				break;
				
			case "writeOpen":
				$("#fpDiv").removeClass("z-index");
				$(".introjs-helperLayer").one('transitionend', function() {
					var writeFileOpenSteps = introjs._introItems[introjs._currentStep].writeFileOpenSteps;
					switch(writeFileOpenSteps) {
						
					case "writeFileOpen":
						TweenMax.to($("#writeOpen"), 0.5, {opacity: 1, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						}});
						break;
						
					case "fileWriteMode2":
						$('.introjs-tooltip').removeClass("hide");
						var text = "Here we open <span class='ct-code-b-yellow'>codetantra.txt</span> file in <b>write mode</b>";
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
					var text = "This is <span class='ct-code-b-yellow'>write</span> mode.<br> So the file is opened with in write mode.<br>"
								+ " File with a specified name is created if the file does not "
								+ "exist, the contents are deleted if the file already exists.";
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
								$(".address, .fa, .introjs-tooltip").removeClass("hide");
								var text = "Address will be stored in fp.";
								typing('.introjs-tooltiptext', text, function() {
									$("#fpDiv").addClass("z-index");
									$('.address').effect( "transfer", { to: $(".panel-body"), className: "ui-effects-transfer" }, 1000, function() {
										$(".fp-address").text($(".address").text());
										var text = "<span class='ct-code-b-yellow'>codetantra.txt</span> file opened in write mode.<br>You can"
													+ " enter any data that text will be stored in <span class='ct-code-b-yellow'>"
													+ " codetantra.txt</span> file.";
										typing('.introjs-tooltiptext', text, function() {
											$('#wModeText').attr('contenteditable', 'true');
											$("#wModeText").focus();
											events("#wModeText");
										});
									});
								});
							});
						});
						break;
							
						case "writingText":
							$(".fp-address").text("null");
							$(".fa, .address").remove();
							var text = "You can enter any data that data will be stored in <span class='ct-code-b-yellow'>"
										+ "codetantra.txt</span> file.";
							typing('.introjs-tooltiptext', text, function() {
								$("#wModeText").removeAttr("contenteditable maxlength");
								$("#wModeText").append('<div id="appendText" class="user-text" contenteditable="true" spellcheck="false"'
													+ ' maxlength="30" style="display: inline-block;">&nbsp;</div>');
								$("#appendText").effect("highlight", {color: "yellow"}, 300).focus();
								events("#appendText");
							});
							break;
							
						case "fileClose":
							$('.introjs-helperLayer').one('transitionend', function() {
								zoomOutEffect("#txtFile", function() {
									$("#fpDiv").addClass("opacity00");
									$(".fa, .address").remove();
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
									var text = "<span class='ct-code-b-yellow'>codetantra.txt</span> file opened in read mode.<br>"
												+ " In this you can read the data .";
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
									var text = "<span class='ct-code-b-yellow'>codetantra.txt</span> file opened in <b>append</b> mode."
												+ " you can <b>read</b> or <b>write</b> the text.";
									typing('.introjs-tooltiptext', text, function() {
										$("#wModeText , #appendText").removeAttr("contenteditable maxlength");
										$("#wModeText").append('<span id="lastText" contenteditable="false" spellcheck="false" maxlength="20"'
															+ ' class="user-text">&nbsp;</span>');
										$('[contenteditable="false"]').attr('contenteditable', 'true');
										$("#lastText").focus();
										events("#lastText");
										$('.introjs-nextbutton').show();
									});
								});
							});
							break;
							
					}
				break;

			case "writeClose":
				$("#fpDiv").removeClass("z-index");
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to($("#writeClose"), 0.5, {opacity: 1, onComplete: function() {
						var text = "<span class='ct-code-b-yellow'>fclose()</span> function is used to close the file and "
									+ "it automatically <span class='ct-code-b-yellow'>save</span> that file."
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						})
					}});
				});
				break;
				
			case "readOpen":
				$('[contenteditable="true"]').attr('contenteditable', 'false');
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
							var text = "Here we open <span class='ct-code-b-yellow'>codetantra.txt</span> file in read mode";
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
					var text = "This is <span class='ct-code-b-yellow'>read</span> mode.<br>So the file is opened with in read mode."
								+ "<br>In reading mode, the file is opened with the current contents safe if the file already exists,"
								+ " otherwise an error occurs."
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();		
					});
				});
				break;
				
			case "readClose":
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to($("#readClose"), 0.5, {opacity: 1, onComplete: function() {
						var text = "<span class='ct-code-b-yellow'>fclose()</span> function is used to close the file and"
									+ " it automatically <span class='ct-code-b-yellow'>save</span> that file."
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();		
						});
					}});
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
							var text = "Here we open <span class='ct-code-b-yellow'>codetantra.txt</span> file in append mode";
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
					var text = "This is <span class='ct-code-b-yellow'>append</span> mode.<br>So the file opened with in append mode."
								+ " <br>In <span class='ct-code-b-yellow'>append</span> mode,"
								+ " the file is opened with the current contents safe if the file exist.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();		
					});
				});
				break;
				
			case "appendClose":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#appendClose").removeClass("opacity00");
					var text = "<span class='ct-code-b-yellow'>fclose()</span> function is used to close the file and "
								+ "it automatically <span class='ct-code-b-yellow'>save</span> that file."
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "restart":
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
	$("#path").removeClass("blink");
	$("#buttonMode").remove();
	$("#mode").addClass("blink");
	$('.introjs-tooltiptext').append('<div class="mode-text"></div>');
	var text = "<span class='ct-code-b-yellow'>mode</span> specifies the purpose of <b>opening</b> file<br>"
				+ "i.e., for <b>reading / writing / appending</b>.";
	typing(".mode-text", text, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton' id='buttonOpen' onClick='fOpenBtn();'>Next &#8594;</a>");
	});
}

function fOpenBtn() {
	$("#buttonOpen").remove();
	$("#mode").removeClass("blink");
	$("#openFile").addClass("blink");
	$('.introjs-tooltiptext').append('<div class="open-text"></div>');
	var text = "<span class='ct-code-b-yellow'>fopen()</span> function is used to <span class='ct-code-b-yellow'>open</span>"
				+ " an existing or a new file.";
	typing(".open-text", text, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-nextbutton' id='buttonClose' onClick='fCloseBtn();'>Next &#8594;</a>");
	});
}

function fCloseBtn() {
	$("#buttonClose").remove();
	$("#openFile").removeClass("blink");
	$("#closeFile").addClass("blink");
	TweenMax.to($("#line2"), 0.5, {opacity: 1, onComplete: function() {
		$('.introjs-tooltiptext').append('<div class="close-text"></div>');
		var text = "<span class='ct-code-b-yellow'>fclose()</span> function is used to <span class='ct-code-b-yellow'> save</span> the"
					+ " operations done on file and <span class='ct-code-b-yellow'>close</span> the file."
		typing(".close-text", text, function() {
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
			$("#fpDiv").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function events(id) {
	($(id).parent()).click(function() {
		$(id).focus();
	});
	
	$(id).on("keydown keyup", function(e) {
		var max = $(this).attr("maxlength");
		$(".error-text").remove();
		
		if ($(this).text() == "") {
			$(this).addClass("empty");
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter string.</span>");
		} else {
			$(this).removeClass("empty");
		}
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (($(this).text().length >= max) || (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9)) {
			e.preventDefault();
		}
	});
}