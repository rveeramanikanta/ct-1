
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
<script src="/secure/lang/c/js-min/claic.min.js"></script>
<title>Command Line Arguments in Action</title>

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

.margin-top {
    margin-top: 17px;
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
    tab-size : 4;
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

.output-console-body {
	white-space: nowrap !important;
	padding : 10px !important;
	min-height :80px !important;
}

.opacity00 {
	opacity: 0;
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
	margin-top: 65px;
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


</style>

<script>
$(document).ready(function() {
	introFunction();
});
</script>

</head>
<body>

<div class='box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Command Line Arguments in Action</h1>
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
	<div>
		<div class='row'>
		<div class='col-sm-5 col-xs-offset-1 box-border' id = "savingFileStep">
			<div class= 'col-xs-9 padding0'>
<pre class='creamPreTab4' id = "program">
#include &lt;stdio.h&gt;
<span id = "mainMethod">int main(<span id = "argcCount" >int argc</span>, <span id='argsLine'>char *argv[]</span>)</span> {
	<span id='sopArgsLength'>printf("length of the arguments : %d\n" , argc);</span>
	<span id='sopAgrsOf0'>printf("argv[0] : %d\n",  argv[<span id='args0'>0</span>]);</span>
	<span id='sopAgrsOf1'>printf("argv[1] : %d\n",  argv[<span id='args1'>1</span>]);</span>
	<span id='sopAgrsOf2'>printf("argv[2] : %d\n",  argv[<span id='args2'>2</span>]);</span>
	<span id='sopAgrsOf3'>printf("argv[3] : %d\n",  argv[<span id='args3'>3</span>]);</span>
<span id='mainMethodCloseBrace'>}</span>
</pre></div>
					<div class="col-xs-3 padding0" id="totalStep2">
						<div class="col-xs-4 arrow1"></div>
						<div class="col-xs-8 text-center margin-top">
							<div>
								<span id="dotJavaFileAboveText"></span>
							</div>
							<div>
								<i
									class="img-responsive dotJavaFile fa fa-file-text-o fa-4x opacity00"></i>
							</div>
							<div>
								<span id="dotJavaFileBelowText"><span id="className"></span><span
									id="extention"></span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-5">
					<div class='col-sm-12 box-border' id='animationBox'>
						<div>
							<span>&gt;&gt; <span id='compilation' class="opacity00">gcc
									-o example <b>example.c</b>
							</span></span>
						</div>
						<div>
							<span>&gt;&gt; <span id='commandLineValues'
								class="opacity00"><span id='value0'><b>./example</b></span>
									<span id='value1'>Ganga</span> <span id='value2'>501</span> <span
									id='value3'>Gold</span></span></span>
						</div>
						<div>
							<table align="center">
								<tr>
									<td><span id='tdIndex0'
										class='opacity00 position-relative'>0</span></td>
									<td><span id='tdIndex1'
										class='opacity00 position-relative'>1</span></td>
									<td><span id='tdIndex2'
										class='opacity00 position-relative'>2</span></td>
									<td><span id='tdIndex3'
										class='opacity00 position-relative'>3</span></td>
								</tr>
								<tr>
									<td id='td0'><span id='tdValue0'
										class='opacity00 position-relative'>./example</span></td>
									<td id='td1'><span id='tdValue1'
										class='opacity00 position-relative'>Ganga</span></td>
									<td id='td2'><span id='tdValue2'
										class='opacity00 position-relative'>501</span></td>
									<td id='td3'><span id='tdValue3'
										class='opacity00 position-relative'>Gold</span></td>
								</tr>
								<tr>
									<td><span id='tdLength0' class='opacity00'>1</span></td>
									<td><span id='tdLength1' class='opacity00'>2</span></td>
									<td><span id='tdLength2' class='opacity00'>3</span></td>
									<td><span id='tdLength3' class='opacity00'>4</span></td>
								</tr>
							</table>
						</div>
						<div class="output-console center" id="outputConsole">
							<div class="output-console-title-bar">
								<span>Output</span>
							</div>
							<div class="output-console-body">
								<span id='outputArgsLength'></span> <span id='outputArgsOf0'></span>
								<span id='outputArgsOf1'> </span> <span id='outputArgsOf2'></span>
								<span id='outputArgsOf3'></span>
							</div>
					</div>
				</div>
			</div>
	</div>
	
</div>
</body>
</html>