(function () {
	console.time("prime");
	target = 600851475143;
	prime_candidate = 0;
	prime_factor=[];
	factor=[];

	//因数を見つける
	//最初は　i<= target/2とかでしたらフリーズした…。
	for (var i = 3; i <= Math.sqrt(target); i++) {
		if(i%2==0) continue //これがあると500ms→400msぐらい違った
		if(target % i == 0){
			factor.push(i);
			};
		};

	console.log(factor);

	//素因数を見つける
	for (var i = 0; i <= factor.length-1; i++) {
		i_is_prime = true;

		for (var j = 0; j <= factor.length-1; j++) {
			// console.log("factor[i]:"+factor[i]+"   "+"factor[j]:"+factor[j])

			if(factor[i]>factor[j]&&factor[i]%factor[j]==0){
				i_is_prime = false;
			}

		};

		if(i_is_prime){
			prime_factor.push(factor[i])
		}
	};
	console.log(prime_factor);
	console.timeEnd("prime");
}());