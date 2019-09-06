// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// fn(5)
// 		5 * <= 24
//   => fn(4)
// 			4 * <= 6
//     => fn(3)
//           3 * <= 2
//       => fn(2)
//           2  *  <= 1
//         => fn(1)
//           => 1



function factorial(num) {
	if(num === 1){
		return 1;
	}
	return num  * factorial(num - 1)
  
}
factorial(5)