/*Question 2: Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4) should return [1,3]*/

const sum = (numbers, target) => {
	let answers = [];
	for(let i = 0; i < numbers.length; i++){
		for(let j = i+1; j < numbers.length; j++){
			if(numbers[i] + numbers[j] === target){
				let solution = [numbers[i],numbers[j]];
				answers.push(solution)
			}
		}
	}
	if (answers.length === 1){return answers.flat();}
	return answers;
}