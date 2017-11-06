<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Operator Precedence Table</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
table, th, td {
    border: 2px solid gray;
    border-collapse: collapse;
    text-align: center;
    padding: 6px;
}
#tableMain {
	width: 100%;
	text-align: center;
}

.margin-top {
	margin-top: 20px;
}

td {
	font-size: 10px;
	padding: 0px;
}

.borderBottom {
	border-bottom: 1px solid gray;
}
</style>
</head>
<body>
<div class='text-center margin-top'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Operator Precedence and Associativity Table</h4>
</div>
<div class="col-xs-offset-3 col-xs-6">
	<table id="tableMain" class="margin-top">
		<tr>
			<th>Precedence level</th>
			<th>Operator</th>
	    	<th>Operation</th> 
	    	<th>Associativity</th>
		</tr>
		<tr>
			<td>1</td>
			<td>
				<div class='borderBottom'>( )</div>
				<div class='borderBottom'>[ ]</div>
				<div class='borderBottom'>.</div>
				<div>---></div>
			</td>
	    	<td>
	    		<div class='borderBottom'>Functional cell(or) Parentheses</div>
	    		<div class='borderBottom'>Array subscript</div>
				<div class='borderBottom'>Dot</div>
				<div>Arrow</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>2</td>
			<td>
				<div class='borderBottom'><b>!</b></div>
				<div class='borderBottom'>~</div>
				<div class='borderBottom'>-</div>
				<div class='borderBottom'>++</div>
				<div class='borderBottom'>--</div>
				<div class='borderBottom'>&</div>
				<div class='borderBottom'>*</div>
				<div class='borderBottom'>(fata_type)</div>
				<div>sizeof()</div>
			</td>
	    	<td>
	    		<div class='borderBottom'>Logical NOT</div>
	    		<div class='borderBottom'>One's compliment</div>
				<div class='borderBottom'>Unary minus</div>
				<div class='borderBottom'>Increment</div>
				<div class='borderBottom'>Decrement</div>
				<div class='borderBottom'>Address of</div>
				<div class='borderBottom'>Indirection</div>
				<div class='borderBottom'>Cast oparator</div>
				<div>sizeof special operator</div>
	    	</td> 
	    	<td>Right to Left</td>
		</tr>
		<tr>
			<td>3</td>
			<td>
				<div class='borderBottom'>*</div>
				<div class='borderBottom'>/</div>
				<div>%</div>
				
			</td>
	    	<td>
	    		<div class='borderBottom'>Multiplication</div>
	    		<div class='borderBottom'>Division</div>
				<div>Modulus</div>
				
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>4</td>
			<td>
				<div class='borderBottom'>+</div>
				<div>-</div>
				
			</td>
	    	<td>
	    		<div class='borderBottom'>Addition</div>
	    		<div>Subtraction</div>
				
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>5</td>
			<td>
				<div class='borderBottom'> << </div>
				<div> >> </div>
			</td>
	    	<td>
	    		<div class='borderBottom'>Left shift</div>
	    		<div>Right shift</div>
				
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>6</td>
			<td>
				<div class='borderBottom'> < </div>
				<div class='borderBottom'> > </div>
				<div class='borderBottom'> <= </div>
				<div> >= </div>
			</td>
	    	<td>
	    		<div class='borderBottom'>Less than</div>
	    		<div class='borderBottom'>Greater than</div>
				<div class='borderBottom'>Less than or equal to</div>
				<div>Greater than or equal to</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>7</td>
			<td>
				<div class='borderBottom'> == </div>
				<div> != </div>
			</td>
	    	<td>
	    		<div class='borderBottom'>Equal to</div>
	    		<div>Not equal to</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>8</td>
			<td>
				<div> & </div>
			</td>
	    	<td>
	    		<div>Bitwise AND</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>9</td>
			<td>
				<div> ^ </div>
			</td>
	    	<td>
	    		<div>Bitwise XOR</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>10</td>
			<td>
				<div> | </div>
			</td>
	    	<td>
	    		<div>Bitwise OR</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>11</td>
			<td>
				<div> && </div>
			</td>
	    	<td>
	    		<div>Logical AND</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>12</td>
			<td>
				<div> || </div>
			</td>
	    	<td>
	    		<div>Logical OR</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
		<tr>
			<td>13</td>
			<td>
				<div> ?: </div>
			</td>
	    	<td>
	    		<div>Conditional</div>
	    	</td> 
	    	<td>Right to Left</td>
		</tr>
		<tr>
			<td>14</td>
			<td>
				<div> = += -= *= /= %= </div>
				<div>>>= <<== &= ^= |=</div>
			</td>
	    	<td>
	    		<div>Simple and compound assignment</div>
	    	</td> 
	    	<td>Right to Left</td>
		</tr>
			<tr>
			<td>15</td>
			<td>
				<div> <b>,</b> </div>
			</td>
	    	<td>
	    		<div>Comma</div>
	    	</td> 
	    	<td>Left to Right</td>
		</tr>
	</table>
</div>
</body>
</html>