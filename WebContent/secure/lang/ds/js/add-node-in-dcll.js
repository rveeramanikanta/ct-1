var introjs;
function addNodesInDCLLReady() {
	dynamicTempNodes(1);
	dynamicTempNodes(2);
	createDynamicNodes('#fstExplain', 0);
	$('#node0').addClass('col-xs-offset-1');
	createDynamicNodes('#dynamicNodes', 1);
	initIntroJs();
	/*animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
	svgAppend('#animationDiv');
	svgLineTopAndBottom('#animationDiv', '#tempDiv1', '#prevDiv1', 'line1', 'top', '', '', true);
	svgDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#nextDiv1', '#tempDiv2', 'line2', 'line3', 'right', 'top', '', '', true);*/
}

function initIntroJs() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps: [ {
			element: '#headingInDcll',
			intro: ''
		}, {
			element: '#algorithmDiv',
			intro: '',
			tooltipClass: 'hide'
		}, {
			element: '#animationDiv',
			intro: '',
			animateStep: 'fstDeclaration',
			tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case 'headingInDcll':
				text = 'Here we will learn about <y>addNode()</y> method in a <y>Doubly Circular Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> to a <bl>Doubly Circular Linked List(DCLL)</bl>. &emsp;';
					typing('#algorithmDiv', text, function() {
						nextBtnCalling('#algorithmDiv', function() {
							$('#algorithmDiv').append('<ul style="list-style-type: circle" id="ul1"></ul>');
							$('#node0 > div:last').remove();
							introjs.nextStep();
						});
					});
				});
			break;
			case 'animationDiv':
				$('#animationDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
					case 'fstDeclaration':
						zoomInEffect('#firstNode', function() {
							animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
							$('.introjs-tooltip').removeClass('hide');
							text = '<span id="l2">Let us store the <yy class="ct-fonts brn">beginning of the linked list</yy> in a pointer variable'
									+ ' of type <yy class="ct-fonts b">node</yy> (<bgb>first</bgb>).<br> Since the <yy class="ct-fonts brn">Linked '
									+ 'list</yy> is <yy class="ct-fonts brn">not yet created</yy> we should initialize it with'
									+ ' <yy class="ct-fonts g">NULL</yy>.';
							typing('.introjs-tooltiptext', text, function() {
								//algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l2', 1, 'fstCreation');
							});
						});
					break;
					}
				});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		"cursor_color" : "white",
		"typing_interval" : "1"
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function nextBtnCalling(id, callBackFunction) {
	$(id).append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons a:last', 300);
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node" id="tempDiv' + val + '"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
	animatedTooltip('#tempDiv' + val, "top", "Address of the newly created node");
}

function getRandomInt(min, max) { //random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(id, nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	$(id).append('<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
	 				+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 ct-green-color ct-fonts text-center padding0">prev</div>'
					+ ' <div class="col-xs-4 ct-blue-color ct-fonts padding0 text-center">data</div>'
					+ '	<div class="col-xs-4 ct-green-color ct-fonts text-center padding0">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="prevDiv' + nodeNum + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + nodeNum + '" class="prev-span ct-green-color">NULL</span></div>'
					+ ' <div id="dataDiv' + nodeNum + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + nodeNum + '" class="data-span ct-blue-color opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum + '" class="div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum + '" class="next-span ct-green-color">NULL</span></div></div>'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 col-xs-offset-4 padding0 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding0 ct-brown-color ct-fonts">'+ randomAddress
					+ '</span></div></div></div>');
	$('#prev' + nodeNum + ', #data' + nodeNum + ', #next' + nodeNum).addClass('position-css ct-fonts');
	animatedTooltip('#prevDiv' + nodeNum, "bottom", "prev holds previous node's address");
	animatedTooltip('#dataDiv' + nodeNum, "bottom", "data holds user data");
	animatedTooltip('#nextDiv' + nodeNum, "bottom", "next holds next node's address");
}


function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "data-original-title" : tooltipText}).tooltip();
}
