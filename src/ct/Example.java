package ct;

import java.util.Scanner;

public class Example { 
	
     public static void main(String[] args) {
    	
    	int k, i = 0, j = 1;
    	Scanner s = new Scanner(System.in);
    	int n = s.nextInt();
    	
    	System.out.print( i + " " + j);
    	for (int t = 2; t <= n; t++) {
    		k = i + j;
    		 System.out.print(" " + k);
    		 i = j;
    		 j = k;
    	 }
    }
}


