<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>C Language Index</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>

<style type="text/css">
.fa-check {
	color: green;
}
</style>
<script type="text/javascript">

	function opendialog(className, url, width, height) {
		if (width == undefined) {
			width = 600;
		} else {
			width = jQuery(window).width() * width;
		}
		if (height == undefined) {
			height = 400;
		} else {
			height = jQuery(window).height() * height;
		}
		var $dialog = $('#javaDocBrowserDiv').html(
				'<iframe id="javaDocIFrame" style="border: 0px; " src="' + url
						+ '" width="100%" height="100%"></iframe>').dialog({
			title : className,
			autoOpen : false,
			dialogClass : 'dialog_fixed ui-widget-header jqueryUIPopupDialog',
			modal : false,
			height : height,
			minWidth : width,
			minHeight : height,
			draggable : true
		});
		$dialog.dialog('open');
		$dialog.closest('.ui-dialog').css("z-index", "1043");
	}
</script>
</head>
<body>
	<div id="javaDocBrowserDiv"></div>
	<div class='container'>

		<div class='well text-center' style='margin-top: 40px;'>
			<h1>C Language Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1 (Introduction to C) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>C History</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('History of C Language', 'c-language-timeline.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">History of C Language</span>
						</td>
						<td>No need</td>
						<td>Ajay</td>
						<td>Sekhar -- success</td>
						<td>10-08-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td><span style = "color : red">Generations of Computers</span></td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Generations of Computers', 'generation-of-computers.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : red">Generations of Computers</span>
						</td>
						<td>No need</td>
						<td>Shanthan</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td><span style = "color : red">Generations of programming languages</span></td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Generation of programming languages',
								 'generations-of-programming-languages.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> 
								 &emsp; <span style = "color : red">Generations of programming languages</span>
						</td>
						<td>No need</td>
						<td>Anil</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>C program life cycle</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('C program life cycle', 'c-program-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">C program life cycle</span>
						</td>
						<td>No need</td>
						<td>Mallika</td>
						<td>Sekhar -- success</td>
						<td>25-08-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Directives</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Explanation of #include', 'include.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of #include</span>	
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Anil & Mahesh / Raj</td>
						<td>Sekhar -- suceess</td>
						<td>21-09-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Identifiers</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('C Identifiers', 'c-identifiers.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">C Identifiers</span>
						</td>
						<td>No need</td>
						<td>Mahesh</td>
						<td>Sekhar -- suceess</td>
						<td>29-08-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Coding conventions</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Coding Conventions in a C program', 'usage-of-spaces-and-tabs-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Coding Conventions in a C program</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Pavan</td>
						<td>Sekhar -- suceess</td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Sample programs</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Sample program in C using printf()', 'sample-of-printf.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Using printf()
									</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Sample program in C using printf() with %d and %f', 
									'sample-printf-with-int-float.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : green">Using printf() with %d and %f</span>
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Raj</td>
						<td>Sekhar -- success</td>
						<td>28-10-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Decimal-to-Binary</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Decimal to Binary', 'decimal-to-binary.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to Binary</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Live-Demo / Raj</td>
						<td>Ramana -- success</td>
						<td>same as JAVA</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Binary-to-Decimal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Binary to Decimal', 'binary-to-decimal-convertion.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary to Decimal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Raj</td>
						<td>Sekhar -- success</td>
						<td>20-08-2016</td>
					</tr>
					
					<tr>
						<td>11</td>
						<td>Decimal-to-Octal</td>
						<td>	
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Decimal to Octal', 'decimal-to-octal.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to Octal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Live-Demo / Raj</td>
						<td>Ramana -- success</td>
						<td>same as JAVA</td>
					</tr>
					
					<tr>
						<td>12</td>
						<td>Octal-to-Decimal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Octao to Decimal', 'octal-to-decimal-conversion.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Octal to Decimal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Raj</td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
					
					<tr>
						<td>13</td>
						<td>Octal-to-Binary</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Octal to Binary', 'octal-to-binary-conversion.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Octal to Binary</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Raj</td>
						<td>Sekhar -- success</td>
						<td>23-09-2016</td>
					</tr>
					
					<tr>
						<td>14</td>
						<td>Binary-to-Octal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Binary to Octal', 'binary-to-octal.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary to Octal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Raj</td>
						<td>Sekhar -- success</td>
						<td>20-08-2016</td>
					</tr>
					
					<tr>
						<td>15</td>
						<td>Decimal-to-Hexadecimal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Decimal to Hexadecimal', 'decimal-to-hexadecimal.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to Hexadecimal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Live-Demo / Raj</td>
						<td>Ramana -- success</td>
						<td>same as JAVA</td>
					</tr>
					
					<tr>
						<td>16</td>
						<td>Hexadecimal-to-Decimal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Hexadecimal to Decimal', 'hexadecimal-decimal.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hexadecimal to Decimal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Raj</td>
						<td>Sekhar -- suceess</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>17</td>
						<td>Hexadecimal-to-Binary</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Hexadecimal to Binary', 'hexadecimal-binary.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hexadecimal to Binary</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Raj</td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
					
					<tr>
						<td>18</td>
						<td>Binary-to-Hexadecimal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Binary to Hexadecimal', 'binary-to-hexa.jsp', 1, 1)"><i class='fa fa-eye'></i>
									&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary to Hexadecimal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div> 
						 </td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Raj</td>
						<td>Sekhar -- success</td>
						<td>25-08-2016</td>
					</tr>
					
					<tr>
						<td>19</td>
						<td>Hexadecimal-to-Octal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Hexadecimal to Octal', 'hexadecimal-octal.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hexadecimal to Octal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Raj</td>
						<td>Sekhar -- suceess</td>
						<td>01-10-2016</td>
					</tr>
					
					<tr>
						<td>20</td>
						<td>Octal-to-Hexadecimal</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Octal to Hexadecimal', 'octal-to-hexadecimal-conversion.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Octal to Hexadecimal</span>
							</div>
							<div>(Available in C, C++, and Java from <b>secure/lang/c/ivs</b>)</div>	
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Raj</td>
						<td>Sekhar -- success</td>
						<td>30-09-2016</td>
					</tr>
					
					<tr>
						<td>21</td>
						<td><span style = "color : red"> How a C program works (It is Not Required)</span></td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('How a C language works', 
								'how-c-language-works.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									 <span style = "color : red">How a C language works (It is Not Required)</span></td>
						<td>No need</td>
						<td>Ramya</td>
						<td>Sekhar -- success</td>
						<td>12-08-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-2 (Data Types) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Different data types in C</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Different Data-types in C', 'datatypes-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Different Data-types in C</span>
						</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>20-08-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>int datatype</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('int Data-type', 'int-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">int Data-type </span>
						 </td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>20-08-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>short int datatype</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('short int Data-type', 'short-int-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">short int Data-type</span>
					 	</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>22-08-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>long int datatype</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('long int Data-type', 'long-int-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">long int Data-type</span>
						</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>24-08-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>float datatype</td>
						<td>	
							<a class='btn btn-xs btn-success' href="javascript:opendialog('float Data-type', 'float-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> float Data-type</span></td>
						<td>No need</td>
						<td>Karthik</td>
						<td>Sekhar -- success</td>
						<td>26-08-2016</td>
					</tr>
					<tr>
						<td>6</td>
						<td>double datatype</td>
						<td>	
							<a class='btn btn-xs btn-success' href="javascript:opendialog('double Data-type', 'double-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> double Data-type</span></td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Raj </td>
						<td>Sekhar -- success</td>
						<td>02-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>char datatype</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('char Data-type', 'char-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">char Data-type</span>
						</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>04-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Different constants in C</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Constants in C', 'constants-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Constants in C</span>
					 	</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>25-09-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Directives</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Explanation of #define', 'usage-of-hash-define.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">explanation of #define</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Anil & Mahesh / Raj</td>
						<td>Sekhar -- suceess</td>
						<td>21-09-2016</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>One's complement</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of ones complement',
								 'ones-complement.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">explanation of	one's complement</span>
					  	</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Raj</td>
						<td>Sekhar -- success</td>
						<td>16-08-2016</td>
					</tr>
					<tr>
						<td>11</td>
						<td>Two's complement</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of twos complement', 
								'twos-complement.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">explanation of two's complement</span>
							</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Raj</td>
						<td>Sekhar -- success</td>
						<td>18-08-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-3 (Operators in C) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Statements</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Statements in C language', 'statements-in-C.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Statements in C language</span>
						</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- suceess</td>
						<td>21-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Arithmetic Operators</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Arithmetic Operators', 'arithmetic-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Arithmetic Operators</span>
						</td>
						<td>No need</td>
						<td>Karthik</td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Relational Operators</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Relational Operators', 'relational-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Relational Operators</span>
					 	</td>
						<td>No need</td>
						<td>Karthik</td>
						<td>Sekhar -- success</td>
						<td>01-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Logical Operators</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Logical Operators', 'logical-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Logical Operators</span>
					 	</td>
						<td>No need</td>
						<td>Karthik</td>
						<td>Sekhar -- success</td>
						<td>03-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Unary Operators</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Post Increment Operator', 'post-increment-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of	Post Increment
									 Operator</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Post Decrement Operator', 'post-decrement-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Post Decrement 
									Operator</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Pre Increment Operator', 'pre-increment-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Pre Increment 
									Operator</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Pre Decrement Operator', 'pre-decrement-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Pre Decrement 
									Operator</span>
							</div>

						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna / Anil</td>
						<td>Sekhar -- success</td>
						<td>17-08-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Assignment Operator</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Assignment Operator', 'assignment-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Assignment Operator</span>
						</td>
						<td>No need</td>
						<td>Karthik</td>
						<td>Sekhar -- success</td>
						<td>07-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Conditional Operators</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Conditional Operators', 'conditional-operator-c.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Conditional Operators</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Largest of three numbers',
									 'largest-of-three-numbers-program.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									  <span style = "color : red">Largest of three numbers program(using conditional operators)</span> 
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Anil</td>
						<td>Sekhar -- suceess</td>
						<td>17-08-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Bitwise Operators</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Bitwise AND Operator', 'bitwise-and-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise AND
								 Operator</span>
					 	</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Anil</td>
						<td>Sekhar -- success</td>
						<td>17-08-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Bitwise Operators</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Bitwise OR Operator', 'bitwise-or-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise OR Operator</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Anil</td>
						<td>Sekhar -- success</td>
						<td>19-08-2016</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Bitwise Operators</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Execution of Bitwise XOR Operator', 
								'bitwise-xor-operator.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Execution of Bitwise XOR Operator</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Anil</td>
						<td>Sekhar -- success</td>
						<td>21-08-2016</td>
					</tr>
					
					<tr>
						<td>11</td>
						<td>Bitwise LeftShif</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Bitwise LeftShif', 'bitwise-left-shift-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise LeftShif</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Anil</td>
						<td>Sekhar -- success</td>
						<td>23-08-2016</td>
					</tr>
					
					<tr>
						<td>12</td>
						<td>Bitwise RightShift</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Execution of Bitwise RightShift', 
								'bitwise-right-shift-operator.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green">Execution of Bitwise RightShift</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Anil</td>
						<td>Sekhar -- success</td>
						<td>25-08-2016</td>
					</tr>
					
					<tr>
						<td>13</td>
						<td>Bitwise Operators</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Execution of Bitwise One\'s complement operator', 'bitwise-not-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise One's 
									complement operator</span> 
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Anil</td>
						<td>Sekhar -- success</td>
						<td>27-08-2016</td>
					</tr>
					
					<tr>
						<td>14</td>
						<td>Special Operators</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Special Operators', 'special-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Special Operators</span>
						 </td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / anil</td>
						<td>Sekhar -- success</td>
						<td>20-08-2016</td>
					</tr>
					
					<tr>
						<td>15</td>
						<td>Precedence and Associativity</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Operator Precedence and Associativity Table', 
								'operator-precedence-table.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Operator Precedence and Associativity Table</span>
						</td>
						<td>No need</td>
						<td>Anil</td>
						<td>Sekhar -- success</td>
						<td>29-08-2016</td>
					</tr>
					
					<tr>
						<td>16</td>
						<td>Precedence and Associativity</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Operator Precedence and Associativity',
								 'operator-precedence-associativity.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Operator Precedence and Associativity</span>
					 	</td>
						<td>No need</td>
						<td>Anil</td>
						<td>Sekhar -- success</td>
						<td>29-08-2016</td>
					</tr>
					
					<tr>
						<td>17</td>
						<td>Implicit Type Conversion</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Type Conversion', 'implicit-type-conversion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;  <span style = "color : green">Implicit Type Conversion</span>
						</td>
						<td>No need</td>
						<td>Durga Mahesh</td>
						<td>Sekhar -- success</td>
						<td>25-08-2016</td>
					</tr>
					
					<tr>
						<td>18</td>
						<td>Explicit Type Conversion</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explicit Type Conversion',
								 'explicit-type-conversion.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Explanation of Explicit Type Conversion</span>
						</td>
						<td>No need</td>
						<td>Suresh</td>
						<td>Sekhar -- success</td>
						<td>26-08-2016</td>
					</tr>
				</tbody>	
			</table>

			<div class='text-center'>
				<h3>UNIT-4 (Data Input and Output) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					
					<tr>
						<td>1</td>
						<td>Directives #include</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of #include', 'include.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of #include</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Anil / Swathi</td>
						<td>Sekhar -- success</td>
						<td>01-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Directives #define</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of #define', 
								'usage-of-hash-define.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Explanation of #define</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i> </td>
						<td>Mahesh / Swathi </td>
						<td>Sekhar -- suceess</td>
						<td>20-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Directives ##</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of ##', 'usage-of-double-hash.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of ##</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i> </td>
						<td>Mahesh / Swathi </td>
						<td>Sekhar -- suceess</td>
						<td>24-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>getchar()</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of getchar()',
								 'usage-of-getchar.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Usage of getchar()</span>
					  	</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva  / Swathi</td>
						<td>Sekhar -- success</td>
						<td>22-08-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>putchar()</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of putchar()',
								 'usage-of-putchar.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Usage of putchar()</span>
					 	</td>
					 	<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Swathi</td>
						<td>Sekhar -- success</td>
						<td>24-08-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>C Programs example</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to Read and Print a character',
									 'program-to-read-print-character.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								  	<span style = "color : green">Program to Read and Print a character</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Conversion of Upper to Lower case', 
									'upper-to-lowercase.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									<span style = "color : green"> conversion of upper to lower case program
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna & Mahesh / Swathi </td>
						<td>Sekhar -- success</td>
						<td>01-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>scanf() usage</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of scanf()', 'scanf-usage.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"> Usage of scanf()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Durga Mahesh / Swathi</td>
						<td>Sekhar -- success</td>
						<td>02-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>printf() usage</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of printf()', 'printf-usage-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of printf()</span></td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Durga Mahesh  / Swathi</td>
						<td>Sekhar -- success</td>
						<td>07-09-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Additional features of printf()</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Nested printf() statements', 'nested-printf-statements.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Nested printf() statements</span> 
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna  / Swathi </td>
						<td>Sekhar -- success</td>
						<td>29-08-2016</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>C Programs example</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Arthimatic Operations',
								 'arithmetic-operation-program.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								  <span style = "color : green">Explanation of arithmetic operations program</span>
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna & Mahesh / Swathi </td>
						<td>Sekhar -- success</td>
						<td>01-09-2016</td>
					</tr>
					
					<tr>
						<td>11</td>
						<td>gets() & puts() usage</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of gets() & puts()', 
								'read-print-string-using-gets-puts.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green"> Usage of gets() & puts()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mahesh  / Swathi</td>
						<td>Sekhar -- success</td>
						<td>10-09-2016</td>
					</tr>
					
					<tr>
						<td>12</td>
						<td>Additional features of scanf()</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Features of scanf()', 'scanf-function.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> scanf() function</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of scanf()', 'scanf-space.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">scanf() with space</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of scanf()', 'scanf-comma-dot.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">scanf() with comma and dot</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of scanf()', 'scanf-rs.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">scanf() with Rs</span> 
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of scanf()', 'scanf-fieldwidth.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">scanf() with fieldwidth</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of scanf()', 'scanf-suppresion.jsp', 1, 1)"><i class='fa fa-eye'></i>
									&nbsp;Live Demo</a> &emsp; <span style = "color : green">scanf() with suppresion of value</span>
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ajay / Swathi</td>
						<td>Sekhar -- success</td>
						<td>07-09-2016</td>
					</tr>
					
					<tr>
						<td>13</td>
						<td>Additional features of printf()</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-percentage-d.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> printf() with %d</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-field-width.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"> printf() with FieldWidth</span> 
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-minus.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">printf() with minus</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-blank-space.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">printf() with blank space</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-zero.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;  <span style = "color : green">printf() with zero's</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-plus.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> printf() with plus</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Features of printf()', 'printf-with-float-field-width.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"> printf() with float</span>
							</div>
						</td>

						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna  / Swathi</td>
						<td>Sekhar -- success</td>
						<td>29-08-2016</td>
					</tr>
					<tr>
						<td>14</td>
						<td>Algorithms & Flowcharts</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Different Symbols used in flowchart', 
									'flowcharts-symbols.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : green">Different Symbols used in flowchart</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Program Development Steps', 'program-development-steps.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green">  Program Development Steps</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Algorithm & flowchart to find area of circle', 
									'flowchart-area-of-circle.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									 <span style = "color : green">Algorithm & flowchart to find area of circle </span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									 href="javascript:opendialog('Algorithm & flowchart to Convert Celsius into Fahrenheit',
									 'flowchart-temperature.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									 <span style = "color : green"> Convert Celsius into Fahrenheit</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Algorithm & flowchart to find total and avg of marks', 
									'flowchart-student-avg.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									  <span style = "color : green"> Find total and avg of marks</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Algorithm & flowchart to check whether the number is odd or even',
									 'flowchart-oddOrEven.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									 <span style = "color : green">Check whether the number is odd or even</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Algorithm & flowchart to find largest of 3 numbers',
									 'flowchart-largest-three-numbers.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : green">Find largest of 3 numbers</span>
							</div>
						</td>
						<td>
							<div><i class="fa fa-check fa-1x"></i></div>
							<div>No need</div>
						</td>
						<td>Ajay & Karthik / Swathi</td>
						<td></td>
						<td>21-11-2016</td>	
					</tr>
					
					<tr>
						<td>15</td>
						<td>Basic Structure of C</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Basic Structure of C', 'structure-of-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Basic Structure of C Program</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Anil  / Swathi</td>
						<td>Sekhar -- success</td>
						<td>10-09-2016</td>
					</tr>
					
					<tr>
						<td>16</td>
						<td>Swap of 2 two numbers</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Swap of 2 numbers', 'swap-with-temp-variable.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Swap of 2 numbers</span></td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Manikanta  / Swathi </td>
						<td>Sekhar -- success</td>
						<td>27-09-2016</td>
					</tr>
					
					<tr>
						<td>17</td>
						<td>Swap of 2 two numbers without temporary variable</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Swap of 2 two numbers without temporary',
								 'swap-without-temp-variable.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Swap of 2 two numbers without temporary variable</span></td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Manikanta / Swathi</td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-5 (Control Flow Statements - Part - 1) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Programs on if-else</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Counting Problem', 'counting-demo-in-c.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green">Counting Problem </span>
							</div>
						</td>
						<td>No need</td>
						<td>Siva & Padmaja </td>
						<td>Sekhar -- success</td>
						<td>26-10-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>if-else</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of if-else', 'if-else-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of if-else </span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja  / Karthik </td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Program on if-else</td>
						<td>
							<a class='btn btn-xs btn-success'
								href="javascript:opendialog('Number is even or odd', 'number-checking-even-or-odd.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Number is even or odd</span> 
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Siva / Karthik </td>
						<td>Sekhar -- success</td>
						<td>26-10-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Nested if-else-if</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Execution of Nested if-else-if',
								 'nested-if-else-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green"> Nested if-else-if</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ajay / Karthik</td>
						<td>Sekhar -- success</td>
						<td>26-10-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>if-else-if</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Execution of if-else-if', 'if-else-if-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green">Explanation of if-else-if</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Karthik</td>
						<td>Sekhar -- success</td>
						<td>26-10-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Program on if-else</td>
						<td>	
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Year is Leap year or Not', 'leap-year-program.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Year is Leap year or Not</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Difference between if-else and switch-case', 
									'diff-if-else-and-switch-statement-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : green"> Difference between if-else and switch-case</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Largest of 3 Numbers', 'find-the-largest-number.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : red"> Largest of 3 Numbers 
									(using if-else)</span>
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Siva / Karthik </td>
						<td>Sekhar -- success</td>
						<td>26-10-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Switch case</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of switch-case',
								 'switch-statement-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Explanation of switch-case</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Padmaja / Karthik </td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Directives #if, #else</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of #if #else', 
								'usage-of-hash-if-else.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green"> Explanation of #if #else</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i> </td>
						<td>Mahesh / Swathi </td>
						<td>Sekhar -- suceess</td>
						<td>21-09-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Directives #if, #elif</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of #if #elif', 
								'usage-of-hash-elif.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green">Explanation of #if #elif</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mahesh  / Swathi</td>
						<td>Sekhar -- suceess</td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Directives #undef</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of #undef', 'usage-of-undef.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green">Explanation of #undef</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mahesh / Swathi</td>
						<td>Sekhar -- suceess</td>
						<td>23-09-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-6 (Control Flow Statements - Part - 2) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>While loop</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of while loop',
								 'while-loop-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Explanation of while loop</span>
						 </td>
						<td><i class="fa fa-check"></i></td>
						<td>Padmaja / Karthik</td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Programs on loop</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program on Prime numbers',
									 'sample-program-on-prime-numbers.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									 <span style = "color : green"> Prime numbers</span> 
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Program on Armstrong numbers', 'armstrong-number-program.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Armstrong numbers</span>
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna & Durga Mahesh / Karthik </td>
						<td>Sekhar -- success</td>
						<td>02-11-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>do-while</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of do-while loop', 
								'do-while-loop-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Explanation of do-while loop</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Padmaja / Karthik</td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>for loop</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of for loop', 'for-loop-in-c.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Explanation of for loop </span>
						</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Programs on loops</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print Pascal triangle', 
									'pascal-triangle-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									<span style = "color : green"> Print Pascal triangle</span> 
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print alphabets in triangle',
									 'pyramid-triangle-alphabet.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									 <span style = "color : green">Print alphabets in triangle</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print Pyramid in reverse', 
									'pyramid-reverse-triangle.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									<span style = "color : green"> Print Pyramid in reverseL</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print Lower triangle',
									 'pyramid-lowertriangle-star.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									 <span style = "color : green"> Print Lower triangle</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print multiplication table as pyramid', 
									'pyramid-multiplication-table.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : green"> Print multiplication table as pyramid</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print pyramid of numbers in lower triangle',
									 'pyramid-lowertriangle-number.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									 <span style = "color : green">Print pyramid of numbers in lower triangle</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' 
									href="javascript:opendialog('Program to print pyramid of numbers in reverse order in lower triangle', 
									'pyramid-lowertriangle-numbers-reverse.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									<span style = "color : green"> Print pyramid of numbers in reverse order in lower triangle</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print line number in same row as pyramid', 
									'pyramid-lowertriangle-line-in-same-row.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									<span style = "color : green">  Print line number in same row as pyramid</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print Floyds Triangle', 
									'floyds-triangle-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									 <span style = "color : green">Print floyds triangle</span>
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Anil & Durga Mahesh / Karthik </td>
						<td>Sekhar -- success</td>
						<td>17-11-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Program to print pyramind</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print pyramind', 
								'pyramid-triangle-star-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Program to print pyramind</span>
						 </td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Durga Mahesh / Karthik </td>
						<td>Sekhar -- success</td>
						<td>07-11-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>break statement</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of break statement',
								 'break-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Explanation of break statement</span>
						  </td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Karthik</td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Continue</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of continue statement', 
								'continue-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green">Explanation of continue statement</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Karthik </td>
						<td>Sekhar -- success</td>
						<td>07-10-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>goto statement</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of goto Statement', 'goto.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of goto statement</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Anil / Karthik</td>
						<td>Sekhar -- success</td>
						<td>15-09-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-7 (Arrays in C) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>1-D Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Accessing One-dimensional arrays', 
								'accessing-one-dimension-array.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green"> Accessing One-dimensional arrays</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Karthik / Shiva</td>
						<td>Sekhar -- success</td>
						<td>30-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>2-D Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Accessing Two-dimensional arrays',
								 'two-dimensional-array.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Accessing Two-dimensional arrays</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Durga Mahesh / Shiva</td>
						<td>Sekhar -- success</td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Initialization of 1-D arrays',
								 'initialization-of-one-dimensional-arrays.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								   <span style = "color : green">Initialization of 1-D arrays</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Shiva </td>
						<td>Sekhar -- success</td>
						<td>10-09-2016</td>
					</tr>

					<tr>
						<td>4</td>
						<td>Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Initialization of 2-D arrays',
								 'initialization-of-two-dimensional-arrays.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
							 	 <span style = "color : green">Initialization of 2-D arrays</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Shiva</td>
						<td>Sekhar -- success</td>
						<td>14-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Program on arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program on Multiplication of two Matrices', 
								'matrix-multiplication.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Multiplication of two Matrices</span>
						</td>
						<td>No need</td>
						<td>Karthik</td>
						<td></td>
						<td>01-10-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Program on arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to Interchange two rows in a matrix', 
								'matrix-rows-interchange.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Interchange two rows in a matrix</span>
						</td>
						<td>No need</td>
						<td>Karthik</td>
						<td></td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Program on arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to Interchange two columns in a matrix', 
								'matrix-columns-interchange.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green">Interchange two columns in a matrix</span>
						 </td>
						<td>No need</td>
						<td>Karthik</td>
						<td></td>
						<td>03-10-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-8 (Sorting and Searching using Arrays) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Sorting Technique</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Bubble sort',
									 '/secure/lang/ds/bubble-sort.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  	<span style = "color : green">Bubble sort</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
					 	</td>
						<td>No need</td>
						<td>Poorna</td>
						<td>Sekhar -- success</td>
						<td>25-06-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Sorting Technique</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Insertion sort',
									 '/secure/lang/ds/insertion-sort.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								  	<span style = "color : green">Insertion sort</span>
						 	</div>	
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Anil</td>
						<td></td>
						<td>25-06-2016</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Sorting Technique</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Selection sort with largest element',
									 '/secure/lang/ds/selection-sort-largest-element.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> 
								 	&emsp;  <span style = "color : green">Selection sort with largest element</span>
						 	</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div> 
						</td>
						<td>No need</td>
						<td>Durga Mahesh</td>
						<td></td>
						<td>21-09-2016</td>
					</tr>

					<tr>
						<td>4</td>
						<td>Sorting Technique</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Selection sort with smallest element', 
									'/secure/lang/ds/selection-sort-smallest-element.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> 
									&emsp;  <span style = "color : green">Selection sort with smallest element</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Durga Mahesh</td>
						<td></td>
						<td>25-06-2016</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Searching Technique</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Linear search',
									 '/secure/lang/ds/linear-search.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 	<span style = "color : green"> Linear search</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Manikanta</td>
						<td></td>
						<td>25-06-2016</td>
					</tr>

					<tr>
						<td>6</td>
						<td>Searching Technique</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Binary search', 
									'/secure/lang/ds/binary-search.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
									<span style = "color : green"> Binary search</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Manikanta</td>
						<td></td>
						<td>25-06-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-9 (Strings - Text Processing) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Strings</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Read and Write strings using gets() & puts()',
								 'read-print-string-using-gets-puts.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Read and Write strings using gets() & puts() </span>
						 </td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mahesh  / Sathish</td>
						<td>Sekhar -- success</td>
						<td>10-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Strings</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Read and Write strings using scanf() and printf()',
								 'read-print-string-using-scanf-printf.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Read and Write strings using scanf() and printf()</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Mahesh / Sathish </td>
						<td>Sekhar -- success</td>
						<td>02-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Strings</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Read a string using getchar()',
								 'read-string-using-getchar.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Read a string using getchar()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mahesh / Sathish  </td>
						<td>Sekhar -- success</td>
						<td>05-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Program on Strings</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to find length of string', 
								'length-of-a-string.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green">Program to find length of string</span>
						 </td>
						<td><i class="fa fa-check"></i></td>
						<td>Mallika / Sathish  </td>
						<td>Sekhar -- success</td>
						<td>30-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Initialization of character arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Initialization of character array',
								 'initialization-of-character-arrays.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a>
								  &emsp; <span style = "color : green">Initialization of character array</span>
					  	</td>
						<td><i class="fa fa-check"></i></td>
						<td>Shiva / Sathish </td>
						<td>Sekhar -- success</td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Program on Strings</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to copy one string to another string',
								 'copy-of-a-string.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green"> Program to copy one string to another string</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mallika / Sathish </td>
						<td>Sekhar -- success</td>
						<td>01-10-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Program on Strings</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to concatenate two strings',
								 'concatination-of-strings.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green"> Program to concatenate two strings</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mallika / Sathish </td>
						<td>Sekhar -- success</td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>String Functions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Different String functions', 
								'string-functions.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								  <span style = "color : green">Different String functions	(all 4 in one demo)</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Sathish </td>
						<td>Sekhar -- success</td>
						<td>04-10-2016</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Program on Strings</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to sort the names', '', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;  <span style = "color : red">Program to sort the names</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to find whether a string is palindrome or not',
									 'palindrome-or-not.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								  	<span style = "color : red">Find whether a string is palindrome or not</span>
							</div>
						</td>
						<td> <span style = "color : red">No demo</span></td>
						<td>Mahesh</td>
						<td></td>
						<td>03-10-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-10 (Functions) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Functions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Function Definition',
								 'function-definition.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Function Definition</span></td>
						<td><i class="fa fa-check"></i></td>
						<td>Suresh / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>07-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Functions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Function Declaration',
								 'function-declaration.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Function Declaration</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Suresh / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>02-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Functions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Function Call', 'function-call.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"> Function Call</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Anil / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>02-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Program on Functions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Sample program on functions',
								 'sample-program-on-functions.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Sample program on functions</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Anil / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>07-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Formal & actual parameters</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Formal & actual parameters', 
								'different-argument-variables.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green">Formal & actual parameters</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Ajay / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Local & global variables</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Local & global variables',
								 'local-global-variables.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Local & global variables</span>
						</td>
						<td><i class="fa fa-check"></i></td>
						<td>Ajay / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Function Categories</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Categories of functions',
								 'categories-of-functions.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green"> Categories of functions </span>
						</td>
						<td>No need</td>
						<td>Ajay</td>
						<td>Sekhar - suceess</td>
						<td>20-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Program on Functions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program Life Cycle Demo', 
								'sample-progaram-on-functions-sin-cos.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green">Find sinx, cosx, tanx using functions </span>
						</td>
						<td>No need</td>
						<td>Ajay</td>
						<td>Sekhar -- success</td>
						<td>29-09-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Functions with arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Function with arrays', 
								'functions-with-arrays.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Functions with arrays</span>
						</td>
						<td>No need</td>
						<td>Ajay</td>
						<td>Sekhar - suceess</td>
						<td>03-10-2016</td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-11 (Storage Classes) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Storage Classes</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Storage Classes', 'storage-classes.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;  <span style = "color : green">All 4 with	differences</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan  / Pavan</td>
						<td>Sekhar -- success</td>
						<td>25-08-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Storage Classes</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Automatic Variables', 'automatic-var.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Automatic Variables</span></td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Storage Classes</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Extern Variables', 'extern-variable.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Extern Variables</span>
						</td>
						<td>No need</td>
						<td>Padmaja</td>
						<td></td>
						<td>04-10-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Storage Classes</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Static Variables', 'static-variables.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Static Variables</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ajay / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>04-10-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Storage Classes</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Register Variables', 'register-variable.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Register Variables</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Padmaja / Mahesh</td>
						<td></td>
						<td>28-10-2016</td>
					</tr>
				</tbody>
			</table>


			<div class='text-center'>
				<h3>UNIT-12 (Recursion) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Program on Recursion</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to find Factorial of a number using Recursion',
									 '/secure/lang/ds/factorial-using-recursion.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 	<span style = "color : green">Find Factorial of a number using Recursion</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Manikanta</td>
						<td>Sekhar -- success</td>
						<td>25-08-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Program on Recursion</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to find gcd of 2 numbers using Recursion',
									 '/secure/lang/ds/gcd-using-recursion.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  	<span style = "color : green">Find gcd of 2 numbers using Recursion</span>
						 	</div>	
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Manikanta</td>
						<td>Sekhar -- success</td>
						<td>25-11-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Program on Recursion</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Program to print Fibonacci series using Recursion', 
									'/secure/lang/ds/fibonacci-series-using-recursion.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a>
								 	&emsp; <span style = "color : green">Print Fibonacci series using Recursion</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Manikanta</td>
						<td>Sekhar -- success</td>
						<td>25-11-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Program on Recursion</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Towers of Hanoi problem',
									 '/secure/lang/ds/tower-of-hanoi.jsp?lang=c', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : green"> Towers of Hanoi problem</span>
							</div>
							<div>(Available in C and C++ from <b>secure/lang/ds</b>)</div>
						</td>
						<td>No need</td>
						<td>Manikanta</td>
						<td></td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Recursion Vs Iteration</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Difference between Recursion and Iteration', '', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : red">Difference between Recursion and Iteration with one program</span>
						</td>
						<td><span style = "color : red">No demo</span></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-13 (Pointers) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Introduction to Pointers</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Pointers introduction',
								 'pointers-introduction.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Pointers introduction</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>01-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Declaration of Pointers</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Pointers declaration', 'pointers-declaration.jsp', 1, 1)">
								<i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Pointers declaration</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan  / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>03-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Parameter passing methods</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Call by Value', 'call-by-value.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Call by Value</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan  / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>10-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Parameter passing methods</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Call by Address', 'call-by-address.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Call by Address</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>13-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>DMA</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Why DMA', 'dynamic-memory-allocation.jsp', 1, 1)">
								<i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green"> why DMA (Dynamic memory Allocation)</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>17-09-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>DMA</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of malloc()',
								 'usage-of-malloc-function.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Explanation of malloc()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva  / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>18-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>DMA</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of calloc()',
								 'usage-of-calloc-function.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Explanation of calloc()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>DMA</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of realloc()',
								 'usage-of-realloc-function.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Explanation of realloc()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>DMA</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of free()',
								 'usage-of-free-function.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a>
								  &emsp; <span style = "color : green">Explanation of free()</span></td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>30-09-2016</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Pointers with Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Pointers with 1-D arrays',
								 'pointers-one-dimensional-array.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Pointers with 1-D arrays</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>25-09-2016</td>
					</tr>
					
					<tr>
						<td>11</td>
						<td>Pointers with Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Pointers with 2-D arrays',
								 'pointers-two-dimensional-array.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Pointers with 2-D arrays</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
					
					<tr>
						<td>12</td>
						<td>Array of Pointers</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Arrays of Pointers', 'array-of-pointers.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Arrays of Pointers</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>30-09-2016</td>
					</tr>
				
					<tr>
						<td>13</td>
						<td>Array of Pointers with 2-D</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Array of Pointers with 2-D',
								 'two-dimensional-array-using-array-of-pointers.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Array of Pointers with 2-D</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>04-10-2016</td>
					</tr>
					
					<tr>
						<td>14</td>
						<td>Pointer to an Array</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Pointer to an array', 'pointer-to-an-array.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Pointer to an array</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>03-10-2016</td>
					</tr>
					
					<tr>
						<td>15</td>
						<td>Double Pointer</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Multiple indirection operator', 
								'multiple-indirection-operator.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Multiple indirection operator</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Shiva / Mahesh</td>
						<td></td>
						<td>04-10-2016</td>
					</tr>
					
					<tr>
						<td>16</td>
						<td>Disadvantages of Pointers</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Disadvantages in Pointers',
								 'pointers-disadvantages.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								  <span style = "color : green">Disadvantages in Pointers</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>04-10-2016</td>
					</tr>
					
					<tr>
						<td>16</td>
						<td>Drawbacks of Pointers</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Pointers drawbacks', 'pointers-drawbacks.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : red"> Pointers drawbacks</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Pavan / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>07-09-2016</td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-14 (Structures and Unions) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Structure Declarations and Definitions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Structure Declaration and Definition', 
								'structures.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Structure Declaration and definition (3 different types in one demo)</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Mahesh</td>
						<td></td>
						<td>17-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Processing a Structure</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Processing of a Structure using dot operator',
								 'processing-of-structure-with-dot.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Processing of a Structure using dot operator</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Mahesh</td>
						<td>sekhar</td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Initialization of Structures</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Initialization of structure variable',
								 'structure-initialization.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								 <span style = "color : green">Initialization of structure variable</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Karthik / Mahesh</td>
						<td></td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Array of Structures</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('array of Structures', 'array-of-structure.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Array of structure</span>
						</td>
						<td>No need</td>
						<td>Ramya</td>
						<td></td>
						<td>24-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Features of Structures</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Structures with Assignment operator',
									 'structure-with-assignment-operator.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> 
									 &emsp;<span style = "color : green">Structures with Assignment operator</span> 
							</div>	
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Nested Structures', 'nested-structures.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Nested Structures</span> 
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Structures with functions',
									 'structure-with-functions.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> 
									 &emsp; <span style = "color : green">Structures with functions</span> 
							</div>
							<div>
								<a class='btn btn-xs btn-success' href="javascript:opendialog('Structures with pointers',
									 'structure-with-pointers.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> 
									 &emsp; <span style = "color : green">Structures with pointers</span> 
							</div>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Suresh / Mahesh</td>
						<td></td>
						<td>22-09-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Processing a Structures</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Processing a structure using arrow operator', 
								'processing-of-structure-with-arrow.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green"> Processing a structure using arrow operator</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Mahesh</td>
						<td></td>
						<td>26-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Self referential structures</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Self referential structures', 
								'self-referential-structure.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green">Self referential structures</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Mahesh</td>
						<td></td>
						<td>27-09-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Unions</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Explanation of Unions', 'usage-of-union.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Unions</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Mahesh</td>
						<td></td>
						<td>30-09-2016</td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Structure vs Union</td> 
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Structure vs Union', 
								'difference-between-structure-and-union.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green">Structure vs Union	with example</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Mahesh</td>
						<td></td>
						<td>04-10-2016</td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Structures Vs Arrays</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Difference between Structures and Arrays', 
								'difference-between-array-and-structure.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green">Difference between Structures and Arrays with example</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Ramya / Mahesh</td>
						<td></td>
						<td>03-10-2016</td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-15 (Files and Command Line Arguments) </h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Different modes in Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Opening and closing a file with different modes',
								 'file-operations.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Opening and closing a file with different modes</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mallika / Mahesh</td>
						<td>Sekhar -- success</td>
						<td>20-09-2016</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of fgetc() and fputc()', 
								'usage-of-fgetc-and-fputc.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								  <span style = "color : green">Usage of fgetc() and fputc()</span>
						</td>
						<td>No need</td>
						<td>Poorna</td>
						<td>Sekhar -- success</td>
						<td>20-09-2016</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of fgetw() and fputw()',
								 'usage-of-putw-and-getw.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
								<span style = "color : green"> Usage of fgetw() and fputw()</span>
						</td>
						<td>No need</td>
						<td>Mallika</td>
						<td>Sekhar -- success</td>
						<td>26-09-2016</td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of fgets() and fputs()',
								 'usage-of-fputs-and-fgets.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Usage of fgets() and fputs()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Mallika / Mahesh</td>
						<td></td>
						<td>30-09-2016</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of fscanf() and fprintf()',
								 'usage-of-fprintf-and-fscanf.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : green"> Usage of fscanf() and fprintf()</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna / Shanthan </td>
						<td>Sekhar -- success</td>
						<td>24-09-2016</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Usage of fread() and fwrite()', 
								'usage-of-fread-and-fwrite.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								<span style = "color : green"> Usage of fread() and fwrite() </span>
						</td>
						<td>No need</td>
						<td>Poorna</td>
						<td>Sekhar -- success</td>
						<td>28-09-2016</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Random file access</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Random file access', '', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
									<span style = "color : red">Random file access	(program with fseek(),ftell() and rewind())</span>
						</td>
						<td><span style = "color : red">No demo</span> </td>
						<td>Poorna</td>
						<td></td>
						<td>01-10-2016</td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Command line arguments in C</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Command line arguments in C', 
								'command-line-arguments-in-c.jsp', 1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;
								 <span style = "color : red">Command line arguments in C</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna / Mahesh </td>
						<td>Sekhar -- success</td>
						<td>04-10-2016</td>
					</tr>

					<tr>
						<td>9</td>
						<td>Program on Files</td>
						<td>
							<a class='btn btn-xs btn-success' href="javascript:opendialog('Program on Files', 'copy-data-from-one-file-to-another.jsp',
							 	1, 1)"><i class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; 
							 	<span style = "color : red">Program to copy contents of one file to another file using command line arguments</span>
						</td>
						<td><i class="fa fa-check fa-1x"></i></td>
						<td>Poorna / Mahesh </td>
						<td></td>
						<td>03-10-2016</td>
					</tr>

					
				<!-- $('#questionText .btn-success').attr('href'); -->
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>
