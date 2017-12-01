
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/cdfofta.min.js"></script>
<title>Copy data from one file to another</title>

<style>

.introjs-tooltip {
	min-width: 250px;
}

.box-main {
	margin: 10px;
	padding: 10px;
}

.padding0 {
	padding: 0px;
}

.file-top {
    margin-top: 52px;
}

.margin-top {
    margin-top: 25px;
}

.position {
	display: inline-block;
	position: relative;	
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 1000000;
}

.buttons-div {
	margin-top: 20px;
	text-align: center;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	padding: 10px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 11px;
    margin: 5px;
    padding: 10px;
    white-space: pre;
}

table {
	margin-top: 30px;
	text-align: center;
}
td {
    padding: 10px;
    width: 25%;
}

.td-border {
	border: 2px solid;
}

ol, ul {
	margin-bottom: 0;
    margin-left: -15px;
}

.center {
	display: block;
    margin-left: auto;
    margin-right: auto;
}

.output-console {
	width: 300px;
}

.position-absolute {
	position: absolute;
}

.position-relative {
	position: relative;
}

.img-responsive {
	display: inline-block;
	max-height: 75px;
}

.arrow1 {
	margin-top: 100px;
	color : green;
}

.ui-effects-transfer {
    border: 1px solid #003399;
    position: relative;
    z-index: 9999999;
}

.height-width {
	height: 44px;
	width: 290px;
}

.args-circle {
	border: 1px solid;
    border-radius: 50%;
    padding: 2px;
    position: relative;
    z-index: 9999999;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.faa-passing {
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes example {
      0%   { left:0px; top:0px;}
    100%  {top:0px; left:20px;}
}

.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -moz-animation: ellipsis 2s infinite;
    content: "\2026"; /* ascii code for the ellipsis character */
}
@-moz-keyframes ellipsis {
    from {
        width: 0px;
    }
    to {
        width: 12px;
    }
}

.pulse {
	animation: pulse 1s linear 2;
}

@-moz-keyframes pulse {
 0% {
   -moz-transform: scale(0.6);
   transform: scale(0.8);
 }

 100% {
   -moz-transform: scale(1);
   transform: scale(1);
   font-weight: bold;
 }
}

.output-console-body {
    white-space: normal;
    height: 100px;
    font-size: 11px;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.number-div > .number-body {
	color: #e60073;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
	margin-bottom: 5px;
	padding: 4px;
}

.ct-code-b-green, .blue-color {
	font-weight: bold;
	font-family: monospace;
	color: #1aff1a;
}

.pink-color {
	font-weight: bold;
	color: #ff4dd2
}

.red-color {
	color: red;
}

.blue-color {
	font-weight: bold;
	color: blue;
}

.brown-color {
	color: #b30000;
}

.top-padding {
	position: absolute;
	margin-left: -6px;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.z-index10000000 {
	background-color: white;
	z-index: 10000000 !important;
}


</style>

<script>
	$(document).ready(function() {
		copyDataFromOneFileToAnotherReady();
	});
</script>

</head>
<body>

<div class='box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Copy data from one file to another file</h1>
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
	<div>
		<div class='row margin-top'>
		<div class = "col-xs-5 col-xs-offset-1">
		<div class='col-sm-12 box-border' id = "savingFileStep">
			<div class= 'col-xs-9 padding0'>
<pre class='creamPreTab4' id = "program">
#include &lt;<span class="blue-color">stdio.h</span>&gt;
<span id = "mainMethod">int main(<span id = "argcCount" >int <span class="blue-color">argc</span></span>, <span id='argsLine'>char <span class="blue-color">*argv[]</span></span>)</span> {
	<span id= "fileDeclaraion">FILE *fpRead, *fpWrite;</span>
	<span id= "characterDeclarion">char ch;</span>
	<span id = "filePointer1">fpRead = <span id = "fileOpen1">fopen(<span class="brown-color">argv[1]</span>,"<span class="pink-color">r</span>")</span>;</span>
	<span id = "filePointer2">fpWrite = <span id = "fileOpen2">fopen(<span class="brown-color">argv[2]</span>,"<span class="pink-color">w</span>")</span>;</span> 
	<span id ="whileCondition"><span id = "condition">while(<span id = "storeCharacter">(ch = <b>fgetc(fpRead)</b>)</span> != <span class="red-color">EOF</span>)</span> {
		<span id = "fputc"><b>fputc(ch, fpWrite)</b>;</span>
	}</span>
	<span id = "printLine">printf("Content copied to %s \n",  <b>argv[2]</b>);</span>
	<span id = "fclose1">fclose(fpRead);</span>
	<span id = "fclose2">fclose(fpWrite);</span>
<span id='mainMethodCloseBrace'>}</span>
</pre></div>
	<div class="col-xs-1 arrow1">
	</div>
			<div class="col-xs-2 text-center file-top">
				<div>
					<span id="dotJavaFileAboveText"></span>
				</div>
				<div>
					<i class="img-responsive dotJavaFile fa fa-file-text-o fa-4x opacity00"></i>
				</div>
				<div>
					<span id="dotJavaFileBelowText"><span id="className"></span><span
						id="extention"></span></span>
				</div>
			</div>
					</div>
		<div class = "col-xs-12 box-border margin-top" id = "memoryAllocatin">
		<div class = "col-xs-8" id = "filePointerMenory">
			<div class = "col-xs-5 address opacity00" id = "fpAddress1">
				<div class="panel-primary number-div" id = "addressDiv1">
		    		<div class="panel-heading text-center number-div">fpRead</div>
		    		<div class="panel panel-body number-body text-center">
		    			<span class="text-center position" id="addressValue1"></span>
		    		</div>
		    		<!-- <div class="address-text text-center">1024</div> -->
				</div>
			</div>
			<div class = "col-xs-5 address col-xs-offset-2 opacity00" id = "fpAddress2">
				<div class="panel-primary number-div" id = "addressDiv2">
			    	<div class="panel-heading text-center number-div">fpWrite</div>
			    	<div class="panel panel-body number-body text-center">
			    		<span class="text-center position" id="addressValue2"></span>
			    	</div>
					<!-- <div class="address-text text-center">1224</div> -->
				</div>
			</div>
		</div>
			<div class = "col-xs-3 address1 col-xs-offset-1 opacity00" id = "characterAddress">
				<div class="panel-primary number-div" id = "addressDiv3">
			    	<div class="panel-heading text-center number-div">ch</div>
			    	<div class="panel panel-body number-body text-center">
			    		<span class="text-center position" id="addressValue3"></span>
			    	</div>
					<!-- <div class="address-text text-center">2524</div> -->
				</div>
			</div>
		</div>
	</div>
		<div class = "col-xs-5">
			<div class='col-sm-12 box-border' id='animationBox'>
				<div class="output-console center" id = "outputDiv">
					<div class="output-console-title-bar">
						<span>Output</span>
					</div>
	        		<div class="output-console-body">
	        		<div>
						<span id='geditGanga' class = "opacity00">&gt;&gt; gedit <span class = "ct-code-b-green">ganga.txt</span></span>
					</div>
	        		<div>
						<span id='compilation' class = "opacity00">&gt;&gt;  gcc -o example example.c</span>
					</div>	
					<div>
						<span id='commandLineValues' class = "opacity00">&gt;&gt; ./example <span class = "ct-code-b-yellow" id='file1'>ganga.txt</span> <span class = "ct-code-b-green" id='file2'>yamuna.txt</span></span>
					</div>
					<div>
						<span id='copieText' class = "opacity00"><b>Content copied to yamuna.txt</b></span>
					</div>
					<div>
						<span id='geditYamuna' class = "opacity00">&gt;&gt; <b>gedit yamuna.txt</b></span>
					</div>
		        		</div>
					</div>
					<div class = "col-xs-12" id = "copyFile">
						<div class = "col-xs-6 margin-top opacity00" id = "gangaFile">
							<div class = "col-xs-12 text-center" id ="gangaTxt">ganga.txt</div>
							<div class="col-xs-12 top-padding opacity00" id = "ganagaFileAddress">
								<span id="address1" class="address-text text-center">2025</span><br>
								<i class="fa fa-arrow-down" id = "arrow-up"></i>
							</div>
							<div class = "col-xs-12 box-border" id ="ganga-txt">
								<span id = "fileFirstCharacter1">C</span><span id = "fileFirstCharacter3">o</span><span id = "fileTextGanga">deTantra
								 was founded by Ramana TSV. Ramana loves coding and sharing what he knows about coding.</span><span id = "emptySpan"></span><br><br><br><br>
							</div>
						</div>
						<div class = "col-xs-6 margin-top opacity00" id = "yamunaFile">
							<div class = "col-xs-12 text-center" id ="yamunaTxt">yamuna.txt</div>
							<div class="col-xs-12 top-padding opacity00" id = "yamunaFileAddress">
								<span id="address2" class="address-text text-center">5052</span><br>
								<i class="fa fa-arrow-down" id = "arrow-down"></i>
							</div>
							<div class = "col-xs-12 box-border" id ="yamuna-txt">
								<span class = "opacity00" id = "fileFirstCharacter2">C</span><span class = "opacity00" id = "fileFirstCharacter4">o</span><span class = "opacity00" id = "fileTextYamuna">deTantra 
								was founded by Ramana TSV. Ramana loves coding and sharing what he knows about coding.</span><span id = "empty"></span><br><br><br><br>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>