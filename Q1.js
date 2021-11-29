/*Question 1: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types.
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/

//Question 1:
const organize = (array) =>{
	array.sort(function(a,b){return a-b});
	const answer = array.reduce((acc, item, i, arr) => {
		if(item === arr[i-1]){
			acc[acc.length - 1].push(item);
		}
		else {
			acc.push(item === arr[i+1] ? [item] : item);
		}
		return acc;
	}, []);
	return answer;
}

//Bonus:
const organize2 = (array) =>{
	const strArray = array.filter(item => typeof item === "string");
	const numArray = array.filter(item => typeof item === "number");
	numArray.sort(function(a,b){return a-b});
	const answer = numArray.reduce((acc, item, i, arr) => {
		if(item === arr[i-1]){
			acc[acc.length - 1].push(item);
		}
		else {
			acc.push(item === arr[i+1] ? [item] : item);
		}
		return acc;
	}, []);
	answer.push(strArray);
	return answer;
}