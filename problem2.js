(function () {
	var first=1;
	var second=2;
	var sum_result = 2;

	while(second<4000000){
		var temp = second;
		second = first +second;
		first = temp;

		if(second%2==0){
			sum_result = sum_result + second		
		}
	}

	console.log(sum_result);

}());