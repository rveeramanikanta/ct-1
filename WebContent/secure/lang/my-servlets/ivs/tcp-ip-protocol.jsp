<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link type="text/css" rel="stylesheet" href="/css/alertify/alertify.core.css">
<link type="text/css" rel="stylesheet" href="/css/alertify/alertify.default.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/alertify.js" type="text/javascript" charset="utf-8"></script>
<script src="/secure/lang/servlets/js/tcp-ip-protocol.js" type="text/javascript"></script>
<title>TCP/IP Protocol</title>
<style type="text/css">

.box-border {
	border: 1px solid gray;
	border-radius: 6px;
	box-shadow: 0 5px 6px 0;
}

.svg-css {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.line {
	marker-end: url("#arrow");
	stroke: gray;
	stroke-width: 2;
}

.padding00 {
	padding: 0;
}

.popover-content {
	font-size: 14px;
	min-height: 50px;
}

.popover {
	min-height: 50px;
	width: 210px !important;
	font-size: 15px !important;
	z-index: 100000000;
}

.user-btn {
	background-color: green;
	margin: 0 !important;
}

.border {
	border: 1px solid gray;
}

.layer-heading {
	font-size: 13px;
    font-weight: bold;
}

.th-bgclr {
	background-color: #8FBC8F;
}

.nh-bgclr {
	background-color: #DDA0DD;
}

.dh-bgclr {
	background-color: #4682B4;
}

.dt-bgclr {
	background-color: #90EE90;
}

.data-bgclr {
	background-color: #fffacd;
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: 2s;
	animation-direction: alternate ;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color:orange;
		background: orange;
	}
}

.blinking-yellow {
	animation-name: blink-border-background-yellow ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-yellow { 
	50% {
		border-color: yellow;
		background: yellow;
	}
}

.ui-effects-transfer {
	border: 2px solid blue;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

.ct-demo-heading {
    background: maroon none repeat scroll 0 0;
}

.btn {
	padding: 5px 7px;
	font-size: 10px;
}

.popover-gray-out {
	background-color: #b0b0b0;
	min-height: 0px;
	color: black;
	font-family: monospace;
}

.zIndex {
	z-index: 10000000000 !important;
}

h5 {
	margin: 0;
}

.ct-blue-color {
	font-weight: bold;
}

.stroke1 {
	stroke: #556b2f;
}

.stroke2 {
	stroke: green;
}

.stroke3 {
	stroke: red;
}
</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	$('input').val('');
	tcpIpProtocalReady();
});
</script> 
	<div class="text-center" style="margin-top: 20px;">
		<h1 id="heading" class="label ct-demo-heading text-center">TCP/IP Protocol</h1>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 text-center opacity00" id="clientHeading1"><h5><i class="fa fa-laptop fa-2x"></i></h5>Client1</div>
		<div class="col-xs-4 col-xs-offset-4 text-center opacity00" id="clientHeading2"><h5><i class="fa fa-laptop fa-2x"></i></h5>Client2</div>
	</div>
	<div id="mainBox" class="col-xs-12" style="font-weight: bold;">
		<svg class="svg-css">
			<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
				<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		    </marker>
		    <marker id="myMarker2" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
				<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" fill="green"/>
		    </marker>
		    <marker id="myMarker3" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
				<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" fill="red"/>
		    </marker>
			<line y2="18.3%" y1="18.3%" x2="18%" x1="18%" id="arrow1" class="line stroke1"/>
			<line y2="40.5%" y1="40.5%" x2="18%" x1="18%" id="arrow2" class="line stroke1"/>
			<line y2="62.8%" y1="62.8%" x2="18%" x1="18%" id="arrow3" class="line stroke1"/>
			<line y2="85%" y1="85%" x2="18%" x1="18%" id="arrow4" class="line stroke1"/>
			<line y2="25.4%" y1="25.4%" x2="74%" x1="74%" id="arrow5" class="line stroke1"/>
			<line y2="47.5%" y1="47.5%" x2="82%" x1="82%" id="arrow6" class="line stroke1"/>
			<line y2="70%" y1="70%" x2="82%" x1="82%" id="arrow7" class="line stroke1"/>
			<line y2="92%" y1="92%" x2="82%" x1="82%" id="arrow8" class="line stroke1"/>
			
			<line y2="40.5%" y1="40.5%" x2="72%" x1="72%" id="arrow9" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="62.8%" y1="62.8%" x2="72%" x1="72%" id="arrow10" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="85%" y1="85%" x2="72%" x1="72%" id="arrow11" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="92%" y1="92%" x2="28%" x1="28%" id="arrow12" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="70%" y1="70%" x2="28%" x1="28%" id="arrow13" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="47.5%" y1="47.5%" x2="28%" x1="28%"id="arrow14"  class="line stroke2" stroke-dasharray="9, 3" />
			<line y2="40.5%" y1="40.5%" x2="89%" x1="89%" id="arrow15" class="line stroke2" stroke-dasharray="9, 3" />
			<line y2="62.8%" y1="62.8%" x2="89%" x1="89%" id="arrow16" class="line stroke2" stroke-dasharray="9, 3" />
			<line y2="85%" y1="85%" x2="89%" x1="89%" id="arrow17" class="line stroke2" stroke-dasharray="9, 3" />
			<line y2="92%" y1="92%" x2="11%" x1="11%" id="arrow18" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="70%" y1="70%" x2="11%" x1="11%" id="arrow19" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="47.5%" y1="47.5%" x2="11%" x1="11%" id="arrow20" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="40.5%" y1="40.5%" x2="78%" x1="78%" id="arrow27" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="62.8%" y1="62.8%" x2="78%" x1="78%" id="arrow28" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="85%" y1="85%" x2="78%" x1="78%" id="arrow29" class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="92%" y1="92%" x2="20%" x1="20%" id="arrow30"  class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="70%" y1="70%" x2="20%" x1="20%" id="arrow31"  class="line stroke2" stroke-dasharray="9, 3"/>
			<line y2="47.5%" y1="47.5%" x2="20%" x1="20%" id="arrow32" class="line stroke2" stroke-dasharray="9, 3"/>

			<line y2="40.5%" y1="40.5%" x2="15%" x1="15%" id="arrow21" class="line stroke3" stroke-dasharray="9, 3"/>
			<line y2="62.5%" y1="62.5%" x2="15%" x1="15%" id="arrow22" class="line stroke3" stroke-dasharray="9, 3"/>
			<line y2="84.5%" y1="84.5%" x2="15%" x1="15%" id="arrow23" class="line stroke3" stroke-dasharray="9, 3"/>
			<line y2="92%" y1="92%" x2="80%" x1="80%" id="arrow24" class="line stroke3" stroke-dasharray="9, 3"/>
			<line y2="70%" y1="70%" x2="80%" x1="80%"id="arrow25" class="line stroke3" stroke-dasharray="9, 3"/>
			<line y2="48%" y1="48%" x2="80%" x1="80%" id="arrow26" class="line stroke3" stroke-dasharray="9, 3"/>
			<line y2="26%" y1="26%" x2="82%" x1="82%" id="arrow0" class="line" style="stroke: rgb(85, 107, 47);"/>
		</svg>
		<div class="col-xs-12">
			<div id="client1Box" class="col-xs-4">
				<div style="height: 75px;  margin-top: 20px; background-color: thistle;" class="col-xs-12 box-border opacity00" id="appLayerDiv">
					<div style="padding: 0px; margin-top: 21px; font-weight: normal;" class="col-xs-3 opacity00" id="appFile">
						<input type='text' id='givenText' spellcheck='false' class='given-text data-bgclr form-control medium-text-field'
										 maxlength="9" style="width: 100%; font-size: 12px; font-family: monospace;" />
					</div>
					<div class="col-xs-2" style="padding: 0px; margin-top: 25px;">
						<button class="btn btn-success opacity00" type="button" style="margin-left: 9px;" onclick="alertMsg()">Go</button>
					</div>
					<div class="col-xs-5 layer-heading opacity00" id="appLayerText" style="margin-top: 28px;">Application Layer</div>
				</div>
				<div id="transportLayerDiv" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: khaki;">
					<div class="col-xs-12">
						<div class="col-xs-2 text-center padding00 opacity00 ack-transfer" id="ack1">
							<div class="col-xs-12" style="font-weight: bold; font-size: 10px;">ack1</div>
							<div class="col-xs-12"><i aria-hidden="true" class="fa fa-envelope-o"></i></div>
						</div>
						<div class="col-xs-5 col-xs-offset-1 layer-heading opacity00" id="transportLayerText">Transport Layer</div>
						<div class="col-xs-2 text-center padding00 opacity00 ack-transfer" id="ack3">
							<div class="col-xs-12" style="font-weight: bold; font-size: 10px;">ack3</div>
							<div class="col-xs-12"><i aria-hidden="true" class="fa fa-envelope-o"></i></div>
						</div>
						<div class="col-xs-2"> <i id="clock" class="fa fa-clock-o fa-2x opacity00" aria-hidden="true"></i></div>
					</div>
					<div class="col-xs-12">
						<div id="tlPack1" class="col-xs-4 padding00" style="margin-top: 4px; font-size: 10px;"></div>
						<div id="missingPacket1" class="col-xs-4 padding00" style="margin-top: 4px; font-size: 10px;">
							<div id="tHeader2" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00 opacity00">
								<div class="col-xs-12 padding00"><span id="tHeaderText2">TH</span> </div>
								<div class="col-xs-12 padding00"><span id="sequence2">2</span> </div>
							</div>
							<div id="packetDiv2" class="col-xs-4 text-center padding00 packet-border" style="height: 30px; line-height: 30px;">
								<span id="packet2" class="opacity00 packet-move"> </span>
							</div>
							<div id="ack2" class="col-xs-3 text-center padding00 opacity00">
								<div style="font-weight: bold; font-size: 10px;" class="col-xs-12 padding00">ack2</div>
								<div class="col-xs-12 padding00"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
							</div>
						</div>
						<div id="tlPack3" class="col-xs-4 padding00" style="margin-top: 4px; font-size: 10px;"></div>
					</div>
				</div>
				<div id="networkLayerDiv" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: rosybrown;">
					<div class="col-xs-12"><div id="networkLayerText" class="text-center layer-heading opacity00">Network Layer</div></div>
					<div class="col-xs-12" id="netWrkLyrDiv"></div>
				</div>
				<div id="dataLayerDiv" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: palegoldenrod;">
					<div class="col-xs-12"><div id="dataLayerText" class="text-center layer-heading opacity00">Data Link Layer</div></div>
					<div class="col-xs-12" id="dataLayrDiv"></div>
				</div> 
			</div>
			<div id="client2Box" class="col-xs-4 col-xs-offset-4">
				<div style="height: 75px;  margin-top: 20px; background-color: thistle;" class="col-xs-12 box-border opacity00" id="appLayerDiv2">
					<div style="padding: 5px; margin-top: 25px; font-weight: normal; min-height: 30px;" class="col-xs-3 data-bgclr" id="appFile2">
						<%for (int i = 1; i <= 3; i++) {%>
							<span class="recipient opacity00" id="recp<%=i%>"></span>
						<%}%>
					</div>
					<div class="col-xs-7 layer-heading col-xs-offset-1 opacity00" id="appLayerText2" style="margin-top: 28px;">Application Layer</div>
				</div>
				<div id="transportLayerDiv2" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: khaki;">
					<div class="col-xs-12"><div id="transportLayerText2" class="text-center layer-heading opacity00">Transport Layer</div></div>
					<div class="col-xs-12" id="transprtLyrDiv"></div>
				</div>	
				<div id="networkLayerDiv2" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: rosybrown;">
					<div class="col-xs-12"><div id="networkLayerText2" class="text-center layer-heading opacity00">Network Layer</div></div>
					<div class="col-xs-12" id="netWrkLyrDiv2"></div>
				</div>
				<div id="dataLayerDiv2" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: palegoldenrod;">
					<div class="col-xs-12"><div id="dataLayerText2" class="text-center layer-heading opacity00">Data Link Layer</div></div>
					<div class="col-xs-12" id="dataLayrDiv2"></div>
				</div> 
			</div>
		</div>
		<div class="col-xs-12" style="margin-top: 40px;">
			<div id="ethernetDiv" class="col-xs-offset-1 box-border col-xs-10 text-center opacity00"
					style="height: 40px; background-color: darkseagreen; line-height: 40px; font-weight: bold;">
				<div id="ackPopover1" class="col-xs-3 text-center padding00">
					<span id="biteTransfer1" class="opacity00" style="font-size: 10px; color: crimson">1000101001101001110101001011</span>
				</div>
				<div class="col-xs-4 col-xs-offset-1 text-center">Physical Media (Ethernet/Wi-Fi/etc) </div>
				<div id="ackPopover2" class="col-xs-3 col-xs-offset-1 padding00 text-center">
					<span id="biteTransfer2" class="opacity00" style="font-size: 10px; color: crimson">1000101001101001110101001011</span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center"><span id="restart" class="btn btn-warning opacity00" style="margin-top: 20px">Restart</span></div>
</body>
</html> 