function DeQueueArrayReady() {
	
}

function pushMethod() {
	$('#deQueueMethods').text('').append('void push(int x) {\n'
								+ '\tif (front == -1) {\n'
								+ '\t\tprintf("Dequeue is overflow\\n");\n'
								+ '\t} else {\n'
								+ '\t\tfront--;\n'
								+ '\t\tdeQueue[front] = x;\n'
								+ '\t}\n'
								+ '}');
}

function popMethod() {
	$('#deQueueMethods').text('').append('void pop() {\n'
									+ '\tint x;\n'
									+ '\tif (front == -1) {\n'
									+ '\t\tprintf("Dequeue is underflow\\n");\n'
									+ '\t} else {\n'
									+ '\t\tprintf("Deleted element : %d\\n", deQueue[front]);\n' 
									+ '\t\tif (front == rear) {\n'
									+ '\t\t\tfront = rear = -1;\n'
									+ '\t\t} else {\n'
									+ '\t\t\tfront++;\n'
									+ '\t\t}\n\t}\n}');
}

function injectMethod() {
	$('#deQueueMethods').text('').append('void inject(int x) {\n'
									+ '\tif (rear == MAX - 1) {\n'
									+ '\t\tprintf("Dequeue is overflow\\n");\n'
									+ '\t} else {\n'
									+ '\t\trear++;\n'
									+ '\t\tdeQueue[rear] = x;\n'
									+ '\t\tif (front == -1) {\n'
									+ '\t\t\tfront = 0;\n'
									+ '\t\t}\n\t}\n}');	
}

function ejectMethod() {
	$('#deQueueMethods').text('').append('void eject() {\n'
									+ '\tint x;\n'
									+ '\tif (rear == -1) {\n'
									+ '\t\tprintf("Dequeue is underflow\\n");\n'
									+ '\t} else {\n'
									+ '\t\tprintf("Deleted element : %d\\n", deQueue[rear]);\n'
									+ '\t\tif (front == rear) {\n'
									+ '\t\t\tfront = rear = -1;\n'
									+ '\t\t} else {\n'
									+ '\t\t\trear--;\n'
									+ '\t\t}\n\t}\n}');	
}











