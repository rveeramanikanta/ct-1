var tl;
var count = 0;

var tcpIpProtocalReady = function() {
	for (var i = 1; i <= 3; i++) {
		netWrkLyr1Boxes(i);
		transprtLayr2Boxes('#transprtLyrDiv', i);
		dataLyr1Boxes(i);
		append5Boxes('#netWrkLyrDiv2', 'nlPacket', 'dnlh2', 'nh2', 'th2', 'networkPacketDiv2', 'networkPacket2', 'dnhTailer2', i)
		append5Boxes('#dataLayrDiv2', 'client2Packet', 'dh2', 'dnh2', 'dth2', 'dataPacketDiv2', 'dataPacket2', 'dataTailer2', i)
	}
	transportLayerDivBoxes('#tlPack1', '1');
	transportLayerDivBoxes('#tlPack3', '3');

	tl = new TimelineLite();
	$("text").hide();
	
	$("#givenText").on("keydown keyup mouseup mousedown", function(e) {
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		if ($(this).val().length > max) {
			if(e.which == 8 || e.which == 46){
	   			return true;	
			}
  			e.preventDefault();
	 	} else {
	 		if(e.which == 13 || e.which == 222){
	 			$(".btn-success").click();	
			}
	 	}
	});
	text = "<span class='ct-code-b-yellow'>TCP/IP</span> architecture consists of <span class='ct-code-b-yellow'>4 layers</span> which are used to" +
			" <span class='ct-code-b-yellow'>transfer information</span> from one computer to another. Let us understand how this information" +
			" is transferred.";
	popover("#heading", 'bottom', text, function() {
		appendPopoverBtn('textTransform');
	});
	
	$("#restart").click(function() {
		$('input').val('');
		location.reload();
	});
}

function netWrkLyr1Boxes(i) {
	var val;
	if (i == 1 || i == 3) {
		val = 'nlPack' + i;
	} else {
		val = 'missingPacket2';
	}
	$('#netWrkLyrDiv').append('<div id=' + val + ' class="col-xs-4 padding00 network-border opacity00" style="margin-top: 10px; font-size: 10px;">'
						+ '<div id="nh' + i + '" style="height: 30px;" class="nh-bgclr col-xs-4 border text-center padding00 opacity00">'
						+ '<div class="col-xs-12 padding00"><span id="nhText' + i + '">NH</span> </div>'
						+ '<div class="col-xs-12 padding00"><span id="nhSequence' + i + '" style="font-size: 7px;">11.44.12.3</span> </div></div>'
						+ '<div id="th' + i + '" style="height: 30px;" class="th-bgclr col-xs-2 border text-center padding00">'
						+ '<div class="col-xs-12 padding00">TH</div>'
						+ '<div class="col-xs-12 padding00">' + i + '</div></div><div id="networkPacketDiv' + i +'"'
						+ ' class="col-xs-3 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">'
						+ '<span id="networkPacket' + i + '"></span></div></div>');
}

function transprtLayr2Boxes(id, i) {
	$(id).append('<div id="tlPacket' + i + '" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;"><div id="tlnh2'
			 	+ i + '" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 col-xs-offset-1 border text-center padding00">'
				+ '<div class="col-xs-12 padding00"><span id="tlnhText2' + i + '">NH</span></div></div>'
				+ '<div id="tHeader2' + i + '" style="height: 30px;" class="th-bgclr col-xs-2 border text-center padding00">'
				+ '<div class="col-xs-12 padding00">TH</div><div class="col-xs-12 padding00">' + i + '</div></div>'
				+ '<div id="packetDiv2' + i + '" class="col-xs-3 padding00 text-center" style="height: 30px; line-height: 30px;">'
				+ '<span id="packet2' + i + '"></span></div></div>');
}

function dataLyr1Boxes(i) {
	$('#dataLayrDiv').append('<div id="dataAck'+ i + '" class="col-xs-4 padding00 data-border opacity00" style="margin-top: 10px; font-size: 10px;">'
	  						+ '<div id="dh' + i + '" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00 opacity00">'
							+ '<div class="col-xs-12 padding00">DH</div><div class="col-xs-12 padding00">' + i + '</div></div><div id="dnh'
							+ i +'" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border text-center padding00">'
							+ '<div class="col-xs-12 padding00">NH</div></div>'
							+ '<div id="dth' + i + '" style="height: 30px;" class="th-bgclr col-xs-2 border data-border text-center padding00">'
							+ '<div class="col-xs-12 padding00">TH</div><div class="col-xs-12 padding00">' + i + '</div></div>'
							+ '<div id="dataPacketDiv' + i +'" class="col-xs-3 data-bgclr border text-center padding00"'
							+ ' style="height: 30px; line-height: 30px;"><span id="dataPacket' + i + '"></span></div>'
	   						+ '<div id="dataTailer' + i + '" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00 opacity00">'
							+ '<div class="col-xs-12 padding00">DT</div><div class="col-xs-12 padding00">' + i + '</div></div></div>');
}

function append5Boxes(parentId, id, td1, td2, td3, td4, td5, td6, i) {
	$(parentId).append('<div id="' + id + i + '" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">'
						+ '<div id="' + td1 + i + '" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00">'
						+ '<div class="col-xs-12 padding00">DH</div><div class="col-xs-12 padding00">' + i + '</div></div>'
						+ '<div id="' + td2 + i + '" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border text-center padding00">'
						+ '<div class="col-xs-12 padding00">NH</div></div>'
						+ '<div id="' + td3 + i + '" style="height: 30px;" class="th-bgclr col-xs-2 border  text-center padding00">'
						+ '<div class="col-xs-12 padding00">TH</div>'
						+ '<div class="col-xs-12 padding00">' + i + '</div></div>'
						+ '<div id="' + td4 + i + '" class="col-xs-3 data-bgclr border text-center padding00"'
						+ 'style="height: 30px; line-height: 30px;"><span id="' + td5 + i + '"></span></div>'
						+ '<div id="' + td6 + i + '" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00">'
						+ '<div class="col-xs-12 padding00">DT</div>'
						+ '<div class="col-xs-12 padding00">' + i + '</div></div></div>');
}


function transportLayerDivBoxes(id, val) {
	$(id).append('<div id="tHeader' + val + '" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00 opacity00">'
				+ '<div class="col-xs-12 padding00">TH</div><div class="col-xs-12 padding00">' + val + '</div></div>'
				+ '<div id="packetDiv' + val + '" class="col-xs-4 padding00 text-center packet-border" style="height: 30px; line-height: 30px;">'
				+ '<span id="packet' + val + '" class="opacity00 packet-move"> </span></div>');
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": '5',
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function textTransform() {
	count++;
	$('#appLayerDiv').on('hide.bs.popover', function() {
		 return false; 
	});
	$('#heading').popover('destroy');
	$("input").prop('disabled', true);
	zoomInEffect("#clientHeading1", function() {
		zoomInEffect('#appLayerDiv', function() {
			zoomInEffect('#appLayerText', function() {
				zoomInEffect('#appFile', function() {
					$(".btn-success").removeClass("opacity00");
					text = "<span class='start-text'>Please type some text (text should be equal to 9 characters)</span><span class='end-text'> in " +
							"the input box and click on GO button in the application layer. For ex: How are you. Lets consider this data needs " +
							"to be sent to some friend at computer2.</span>";
					popover("#appLayerDiv", 'right', text, function() { 
						$("input").prop('disabled', false);
						$("#givenText").addClass("blinking-orange");
						$("input").focus();
					});
				});
			});
		});
	});
}

function packetDivision() {
	popoverGrayOut();
	$(".btn-success").prop('disabled', true);
	valDivision('#packet1', '#packet2', '#packet3'); 
	var l1 = $("#givenText").offset();
	for (var i = 1; i <= 3; i++ ) {
		$("#packet" + i).offset({"top": l1.top, "left": l1.left});
	}
	$(".svg-css").css("z-index", "100000000");
	$("input").prop('disabled', true);
	arrowReveal(1, 25.4, function() {
		zoomInEffect('#transportLayerDiv', function() {
			zoomInEffect('#transportLayerText', function() {
				text = '<span class="start-text"><div style="font-size: 10px; color: black;" class="col-xs-3 padding00 "> ' +
						' <div class="th-bgclr col-xs-5 border text-center padding00 blinking-yellow" style="height: 30px;" id="tooltipTh1"> ' +
				        ' <div class="col-xs-12 padding00"><span id="tHeader">TH</span> </div> ' +
						' <div class="col-xs-12 padding00"><span id="tSequence">1</span> </div></div>' +
						' <div style="height: 30px; line-height: 30px;" class="col-xs-6 text-center padding00 packet-border border data-bgclr"' + 
						' id="tooltipTh2"><span class="" id="thText">' +$("#givenText").val().substring(0, 3) +'</span></div> ' +
						' </div> This data is broken up into smaller chunks/packets</span><span class="end-text"> and a'+ 
						' <span class="ct-code-b-yellow yellow-color">sequence</span> is added as <span class="ct-code-b-yellow yellow-color">header' +
						'</span> to these packets. These sequence numbers are added so that the packets can be reordered at the destination.</span>';
				popover("#transportLayerDiv", 'right', text, function() {
					appendPopoverBtnWithoutCal(function() {
						tl.to(".packet-move", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							$(".packet-border").addClass("border data-bgclr").removeClass("opacity00");
							fromEffectRepeated('#tHeader', 1, function() {
								appendPopoverBtn('networkLayer');
							});
						}});
					});
				});
			});
		});
	});
}

function networkLayer() {
	popoverGrayOut();
	$('#tooltipTh1').removeClass('blinking-yellow');
	valDivision('#networkPacket1', '#networkPacket2', '#networkPacket3');
	tdOffset('#tlPack1', '#missingPacket1', '#nlPack1', '#missingPacket2');
	var l = $('#tlPack3').offset();
	$('#nlPack3').offset({"top": l.top, "left": l.left});
	arrowReveal(2, 47.5, function() {
		zoomInEffect('#networkLayerDiv', function() {
			zoomInEffect('#networkLayerText', function() {
				text = '<span class="start-text"><div style="color: black; font-size: 10px;" class="col-xs-5 padding00">' +
						'<div class="nh-bgclr col-xs-5 border text-center padding00 blinking-yellow" style="height: 30px; color: black;' +
						' font-size: 10px;" id="tooltipNh"> <div class="col-xs-12 padding00"><span id="tooltipNhHeader">NH</span>' +
						'</div><div class="col-xs-12 padding00"><span style="font-size: 7px;" id="tooltipNhSequence">11.44.12.3</span> </div></div>' +
						'<div style="height: 30px;" class="th-bgclr col-xs-3 border network-border text-center padding00">' +
						'<div class="col-xs-12 padding00"><span>TH</span></div><div class="col-xs-12 padding00"><span>1</span></div></div>' +
						'<div style="height: 30px; line-height: 30px;" class="col-xs-4 data-bgclr network-border border text-center padding00">' +
						'<span class="" id="networkPacket1">'+ $("#givenText").val().substring(0,3) +'</span>' +
						'</div></div> In the <span class="ct-code-b-yellow yellow-color">Network Layer</span> these packets are added</span>' +
						' <span class="end-text"> with information like the destination <span class="ct-code-b-yellow yellow-color">ip address</span>' +
						', shortest route for that packet to travel to reach its destination in this layer.</span>';
				popover("#networkLayerDiv", 'right', text, function() {
					appendPopoverBtnWithoutCal(function() {
						tl.to(".network-border", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							fromEffectRepeated('#nh', 1, function() {
								appendPopoverBtn('dataLinkLayer');
							});
						}});
					});
				});
			});
		});
	});
}

function dataLinkLayer() {
	popoverGrayOut();
	$('#tooltipNh').removeClass('blinking-yellow');
	valDivision('#dataPacket1', '#dataPacket2', '#dataPacket3');
	tdOffset('#nlPack1', '#missingPacket2', '#dataAck1', '#dataAck2');
	var l = $('#nlPack3').offset();
	$('#dataAck3').offset({"top": l.top});
	arrowReveal(3, 70, function() {
		zoomInEffect('#dataLayerDiv', function() {
			zoomInEffect('#dataLayerText', function() {
				text = '<span class="start-text"><div style="font-size: 10px; color: black" class="col-xs-6 padding00"> ' +
						'<div id="tooltipDh" class="dh-bgclr col-xs-2 border text-center padding00 blinking-yellow" style="height: 30px;"> ' +
						'<div class="col-xs-12 padding00"><span>DH</span></div><div class="col-xs-12 padding00"><span>1</span> </div></div> '+
						'<div class="nh-bgclr col-xs-2 border data-border text-center padding00" style="height: 30px; line-height: 30px;"> ' +
						'<div class="col-xs-12 padding00"><span>NH</span></div></div>' +
						'<div class="th-bgclr col-xs-2 border data-border text-center padding00" style="height: 30px;" id="dth1"> ' +
						'<div class="col-xs-12 padding00"><span>TH</span></div><div class="col-xs-12 padding00"><span>1</span></div></div> ' + 
						'<div style="height: 30px; line-height: 30px;" class="col-xs-3 data-bgclr data-border border text-center padding00"> ' +
						'<span>' + $("#givenText").val().substring(0, 3) + '</span></div>' +
						'<div id="tooltipDt" class="dt-bgclr col-xs-2 border text-center padding00" style="height: 30px;"> ' +
						'<div class="col-xs-12 padding00"><span>DT</span></div><div class="col-xs-12 padding00"><span>1</span> </div></div>' +
						'</div> The actual <span class="ct-code-b-yellow yellow-color">physical address</span> is added</span>' + 
						' <span class="end-text"> to the packet in this  layer and it is here the packets are sent over the' +
						' <span class="ct-code-b-yellow yellow-color">routes</span> specified in <span class="ct-code-b-yellow yellow-color">transport' +
						' layer</span> either <span class="ct-code-b-yellow yellow-color">over ethernet, wifi</span> or' +
						' <span class="ct-code-b-yellow yellow-color">cables</span> to the intended' +
						' destination.</span>';
				popover("#dataLayerDiv", 'right', text, function() {
					appendPopoverBtnWithoutCal(function() {
						tl.to(".data-border", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							fromEffectRepeated('#dh', 1, function() {
								$('#tooltipDh').removeClass('blinking-yellow');
								$('#tooltipDt').addClass('blinking-yellow');
								fromEffectRepeated('#dataTailer', 1, function() {		
									appendPopoverBtn('ethernet');
								});
							});
						}});
					});
				});
			});
		});
	});
}

function ethernet() {
	popoverGrayOut();
	$('#tooltipDt').removeClass('blinking-yellow');
	valDivision('#dataPacketDiv21', '#dataPacketDiv22', '#dataPacketDiv23');
	tdOffset('#biteTransfer1', '#dataAck2', '#biteTransfer2', '#biteTransfer1');
	arrowReveal(4, 92, function() {
		zoomInEffect('#ethernetDiv', function() {
			tl.to('#biteTransfer1', 1.5, {opacity: 1, top: 0, left: 0, onComplete: function () {
			    $('#biteTransfer1').css('opacity', 0);
			    $('#biteTransfer2').removeClass('opacity00').addClass('zIndex').css({'background' : 'white'});
			    tl.to('#biteTransfer2', 3.5, {opacity: 1, top: 0, left: 0, onComplete: function () {
			    	$('#biteTransfer2').removeClass('zIndex').css({'background' : ''});
			    	arrowReveal(8, 85, function() {
						zoomInEffect("#clientHeading2", function() {
							zoomInEffect('#dataLayerDiv2', function() {
								zoomInEffect('#dataLayerText2', function() {
									text = "<span class='start-text'>At the destination computer, the <span class='ct-code-b-yellow yellow-color'>data" +
											" link layer</span> receives the packet</span><span class='end-text'>, removes the data added by the" +
											" <span class='ct-code-b-yellow yellow-color'>data link layer</span> at source and the packets are" +
											" sent to its <span class='ct-code-b-yellow yellow-color'>Network layer</span>.</span>";
									popover("#dataLayerDiv2", 'left', text, function() {
										appendPopoverBtnWithoutCal(function() {
											tl.to("#biteTransfer2", 1, {opacity: 0, top : -90, left: 30, onComplete: function() {
												tl.to("#client2Packet1", 1, {opacity:1, onComplete: function() {
													$("#client2Packet1").removeClass("opacity00");
													tl.to("#client2Packet3", 1, {opacity:1, onComplete: function() {
														$("#client2Packet3").removeClass("opacity00");
														appendPopoverBtn('networkLayer2');
													}});
												}});
											}});
										});
									});
								});
							});
						});
					});
			    }});
			}});
		});
	});
}

function networkLayer2() {
	popoverGrayOut();
	valDivision('#networkPacketDiv21', '#networkPacketDiv22', '#networkPacketDiv23');
	tdOffset('#client2Packet1', '#client2Packet3', '#nlPacket1', '#nlPacket3');
	arrowReveal(7, 62.8, function() {
		zoomInEffect('#networkLayerDiv2', function() {
			zoomInEffect('#networkLayerText2', function() {
				text = "<span class='start-text'>The <span class='ct-code-b-yellow yellow-color'>Network layer</span> removes the" +
						" <span class='ct-code-b-yellow yellow-color'>headers and <span class='ct-code-b-yellow yellow-color'>trailers</span>" +
						" set by source</span><span class='end-text'> and sends the packets to its <span class='ct-code-b-yellow yellow-color'>" +
						"transport layer</span>.</span>";
				popover("#networkLayerDiv2", 'left', text, function() {
					appendPopoverBtnWithoutCal(function() {
						tl.to("#nlPacket1", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							removingBoxes('#dnlh21', function() {
								removingBoxes('#dnhTailer21', function() {
									tl.to("#nlPacket3", 1, {opacity:1, top:0, left: 0, onComplete: function() {
										removingBoxes('#dnlh23', function() {
											removingBoxes('#dnhTailer23', function() {
												appendPopoverBtn('transportLayer2');
											});
										});
									}});
								});
							});
						}});
					});
				});
			});
		});
	});
}

function transportLayer2() {
	popoverGrayOut();
	valDivision('#packetDiv21', '#packetDiv22', '#packetDiv23');
	tdOffset('#nlPacket1', '#nlPacket3', '#tlPacket1', '#tlPacket3');
	arrowReveal(6, 40.5, function() {
		zoomInEffect('#transportLayerDiv2', function() {
			zoomInEffect('#transportLayerText2', function() {
				text = "<span class='start-text'>In this layer the data packets are checked for sequence, an" +
						" <span class='ct-code-b-yellow yellow-color'>acknowledgement</span></span>" +
						"<span class='end-text'> is sent to the source that the packet has received. If <span class='ct-code-b-yellow yellow-color'>no" +
						" packet</span> is received <span class='ct-code-b-yellow yellow-color'>no acknowledgement</span> is sent.</span>";
				popover("#transportLayerDiv2", 'left', text, function() {
					appendPopoverBtnWithoutCal(function() {
						$("#packetDiv21").addClass("border data-bgclr");
						$("#packetDiv23").addClass("border data-bgclr");
						tl.to("#tlPacket1", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							removingBoxes('#tlnh21', function() {
								tl.to("#tlPacket3", 1, {opacity:1, top:0, left: 0, onComplete: function() {
									removingBoxes('#tlnh23', function() {
										appendPopoverBtn('acknowledgement1');
									});
								}});
							});
						}});
					});
				});
			});
		});
	});
}

function missingPacket() {
	popoverGrayOut();
	arrowReveal(21, 47.5, function() {
		$('#missingPacket1').effect( "transfer", { to: $("#missingPacket2"), className: "ui-effects-transfer" }, 1000, function() {
			arrowReveal(22, 69.5, function() {
				$('#missingPacket2').effect( "transfer", { to: $("#dataAck2"), className: "ui-effects-transfer" }, 1000, function() {
					arrowReveal(23, 91.5, function() {
						arrowReveal(24, 85, function() {
							zoomInEffect('#client2Packet2', function() {
								arrowReveal(25, 63, function() {
									middleBoxes('#client2Packet2', '#nlPacket2', function() {
										removingBoxes('#dnlh22', function() {
											removingBoxes('#dnhTailer22', function() {
												arrowReveal(26, 41, function() {
													$("#packetDiv22").addClass("border data-bgclr");
													middleBoxes('#nlPacket2', '#tlPacket2', function() {
														removingBoxes('#tlnh22', function() {
															$("#clock").removeClass("fa-spin");
															text = "<span class='start-text'>If a packet has arrived late at" +
																	" <span class='ct-code-b-yellow yellow-color'>destination</span>, and since" +
																	" the source did not get an acknowledgement</span><span class='end-text'> it" +
																	" resends the packet. The destination now has two packets of the same data, so" +
																	" it ignores the resent data packet and uses the first packet and sends an" +
																	" acknowledgement.</span>";
															popover("#ackPopover2", 'bottom', text, function() {
																appendPopoverBtn('acknowledgement2');
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
					});
				});
			});
		});
	});
}

function acknowledgement1() {
	popoverGrayOut();
	var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9;
	
	l0 = l5 = $("#networkLayerDiv2").offset();
	l1 = l6 = $("#dataLayerDiv2").offset();
	l2 = l7 = $("#ethernetDiv").offset();
	l3 = l8 = $("#dataLayerDiv").offset();
	l4 = l9 = $("#networkLayerDiv").offset();
	
	$("#ack3").offset({"top": l5.top - 35, "left": l6.left + 294});
	$("#ack1").offset({"top": l0.top - 35, "left": l0.left + 60});
	$("#clock").addClass("fa-spin").removeClass("opacity00");
	ackArrow(9, 15, 47.5, 47.5, function() {
		ack1Anim(l1.top - 35, l6.top - 35, 10, 16, 70, 70, function() {
			ack1Anim(l2.top - 35, l7.top - 35, 11, 17, 92, 92, function() {
				tl.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
					ackArrow(18, 12, 85, 85, function() {
						$("#ack1").css("opacity", 0);
						$("#ack1").offset({"left": l3.left + 100});
						$("#ack3").css("opacity", 0);
						$("#ack3").offset({"left": l8.left + 285});
						ack1Anim(l3.top - 35, l8.top - 35, 19, 13, 62.8, 62.8, function() {
							ack1Anim(l4.top - 35, l9.top - 35, 20, 14, 40.5, 40.5, function() {
								tl.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
									tl.to(".ack-transfer", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
										$("#clock").removeClass("fa-spin");
										text = "<span class='start-text'>If an <span class='ct-code-b-yellow yellow-color'>" +
												"acknowledgement</span> is <span class='ct-code-b-yellow yellow-color'>not received" +
												"</span> by the <span class='ct-code-b-yellow yellow-color'>transport layer</span>" +
												" at source from the destination</span><span class='end-text'>, it assumes" +
												" the packet is not received and resends the packet, which travels through the source" +
												" and destination layers.</span>";
										popover("#ackPopover1", 'bottom', text, function() {
											appendPopoverBtn('missingPacket');
										});
									}});
								}});
							});
						});
					});
				}});
			});
		});
	});
}

function acknowledgement2() {
	popoverGrayOut();
	$("#clock").addClass("fa-spin");
	var l5 = $("#networkLayerDiv2").offset();
	var l6 = $("#dataLayerDiv2").offset();
	var l7 = $("#ethernetDiv").offset();
	var l8 = $("#dataLayerDiv").offset();
	var l9 = $("#networkLayerDiv").offset();
	$("#ack2").offset({"top": l5.top - 35, "left": l5.left + 115});
	arrowReveal(27, 47.5, function() {
		ack2Anim(28, 70, l6.top - 35, function() {
			ack2Anim(29, 92, l7.top - 35, function() {
				tl.to("#ack2", 1, {opacity:1, onComplete: function() {
					arrowReveal(30, 85, function() {
						$("#ack2").css("opacity", 0);
						$("#ack2").offset({"left": l8.left + 235});
						ack2Anim(31, 62.8, l8.top - 35, function() {
							ack2Anim(32, 40.5, l9.top - 35, function() {	
								tl.to("#ack2", 1, {opacity:1, onComplete: function() {
									tl.to("#ack2", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
										$("#clock").removeClass("fa-spin");
										arrowReveal(0, 18.5, function() {
											zoomInEffect('#appLayerDiv2', function() {
												valDivision('#recp1', '#recp2', '#recp3');
												tdOffset('#packetDiv21', '#packetDiv22', '#recp1', '#recp2');
												var l3 = $("#packetDiv23").offset();
												$("#recp3").offset({"top": l3.top, "left": l3.left});
												zoomInEffect('#appLayerText2', function() {
													text = "<span class='start-text'>Once all the packets are received, the sequence" +
															" and port no</span><span class='end-text'> and any other information" +
															" added are removed, and the information sent by the source computer" +
															" is sent to the appplication layer which displays the information in" +
															" the sent format.</span>";
													popover("#appLayerDiv2", 'left', text, function() {
														tl.to(".recipient", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
															$('#appFile2').empty().text($('#givenText').val());
															appendPopoverBtn('restart');
														}});
													});
												});
											});
										});
									}});
								}});
							});
						});
					});
				}});
			});
		});
	});
}

function alertMsg() {
	if ($("#givenText").val().length < 9) {
		text = "<span class='start-text'>Please type some text (text should be equal to 9 characters)</span><span class='end-text'> in " +
				"the input box and click on GO button in the application layer. For ex: How are you. Lets consider this data needs " +
				"to be sent to some friend at computer2.</span>";
		$("#popover" + count).empty().append(text);
		$(".alertify-log-error").remove();
		alertify.error('Please enter text with 9 characters', 1000);
	} else if ($("#givenText").val().length == 9) {
		packetDivision();
	}
}

function restart() {
	popoverGrayOut();
	$("#restart").removeClass("opacity00");
	text = "Click to restart.";
	popover("#restart", 'bottom', text, function() {
		$(".popover").css({"min-height": 0 +"px"});
		$(".popover-content").css({"min-height": 0 +"px"});
	});
}

function middleBoxes(parentId, id, callBackFunction) {
	var l1 = $(parentId).offset();
	$(id).offset({"top": l1.top, "left": l1.left});
	tl.to(id, 1, {opacity:1, top:0, left: 0, onComplete: function() {
		callBackFunction();
	}});
}

function ack2Anim(i1, i2, val, callBackFunction) {
	tl.to("#ack2", 1, {opacity:1, onComplete: function() {
		arrowReveal(i1, i2, function() {
			$("#ack2").css("opacity", 0);
			$("#ack2").offset({"top": val});
			callBackFunction();
		});
	}});
}

function ack1Anim(val1, val2, i1, i2, i3, i4, callBackFunction) {
	tl.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
		ackArrow(i1, i2, i3, i4, function() {
			$("#ack1").css("opacity", 0);
			$("#ack1").offset({"top": val1});
			$("#ack3").css("opacity", 0);
			$("#ack3").offset({"top": val2});
			callBackFunction();
		});
	}});
}

function arrowReveal(num, y, callBackFunction) {
	if(num > 8 && num < 21 || num > 26 && num < 33) {
		$("#arrow" + num).css("marker-end", "url(#myMarker2)");  
	} else if(num > 20 && num < 27) {
		$("#arrow" + num).css("marker-end", "url(#myMarker3)");  
	} else {
		$("#arrow" + num).css("marker-end", "url(#myMarker)");
	}
	tl.to("#arrow" + num, 0.5, {attr:{ y2 : y +"%" }, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function ackArrow(num1, num2, y1, y2, callBackFunction) {
	$("#arrow" + num1 + ",  #arrow" + num2).css("marker-end", "url(#myMarker2)"); 
	TweenMax.to("#arrow" + num1, 0.5, {attr:{ y2 : y1 +"%" }});
	TweenMax.to("#arrow" + num2, 0.5, {attr:{ y2 : y2 +"%" }, onComplete: function() {
		callBackFunction();
	}});
}

function appendPopoverBtnWithoutCal(callBackFunction) {
	$("#popover" + count).append('<div style="text-align: right;"><a class="introjs-button user-btn">Next →</a></div>');
	$('.user-btn').click(function() {
		$(this).remove();
		callBackFunction();
	});
}

function appendPopoverBtn(val) {
	$("#popover" + count).append('<div style="text-align: right;"><a class="introjs-button user-btn" onclick="' + val + '()">Next →</a></div>');
}

function fromEffectRepeated(id, val, callBackFunction) {
	if (val <= 3) {
		$(id + val).removeClass("opacity00").css("opacity", 1);
		tl.from(id + val, 1, {opacity:1, top: -40, onComplete: function() {
			val++;
			fromEffectRepeated(id, val, callBackFunction);
		}});
	} else {
		callBackFunction();
	}
}

function tdOffset(parentId1, parentId2, id1, id2) {
	var l1 = $(parentId1).offset();
	var l2 = $(parentId2).offset();
	$(id1).offset({"top": l1.top, "left": l1.left});
	$(id2).offset({"top": l2.top, "left": l2.left});
}

function valDivision(id1, id2, id3) {
	var fileText = $("#givenText").val();
	$(id1).text(fileText.substring(0, 3));
	$(id2).text(fileText.substring(3, 6));
	$(id3).text(fileText.substring(6));
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function removingBoxes(id, callBackFunction) {
	tl.to(id, 0.5, {top: 50, opacity: 0, onComplete: function() {
	  $(id).addClass('opacity00').css({'top' : '0px'});
	  callBackFunction();
	}});
}

function popover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'"></div>',
		container: '#mainBox'
	}).popover('show');
	if (position == 'right' || position == 'left') {
		var t = $('#popover' + count).parents('.popover').attr('id');
		$('#' + t + ' .arrow').css({'top' : '25%'});
	}
	typing('#popover' + count, text, function() {
		callBackFunction();
	});
}

function mouseEvents() {
	$('.popover-gray-out > div').mouseover(function () {
		var t = this.id;
		$('#' + t + ' .more').css({'display': 'none'});
		$('#' + t + ' .end-text').css({'display': 'inline'});
		$(this).parents('.popover').addClass('zIndex');
	});
	
	$('.popover-gray-out > div').mouseout(function () {
		var t = this.id;
		$('#' + t + ' .end-text').not('#popover' + count).css({'display': 'none'});
		$('#' + t + ' .more').not('#popover' + count).css({'display': 'inline'});
		$(this).parents('.popover').removeClass('zIndex');
	});
}

function popoverGrayOut() {
	$(".user-btn").remove();
	$(".popover-content").addClass("popover-gray-out");
	$('#popover' + count + ' .end-text').css({'display' : 'none'});
	$('#popover' + count + ' .start-text').after('<span class="more" style="display: inline">.....</span>');
	$('.yellow-color').removeClass('ct-code-b-yellow').addClass('ct-blue-color');
	mouseEvents();
	count++;
}

