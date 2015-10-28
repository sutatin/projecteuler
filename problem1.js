(function () {
    
var i=0;
var result = 0;
while(i<999){
 ++i;
 	if(i%3==0){
 		result = result + i;
 	}else if(i%5==0){
 		result = result + i;
 	}
}
console.log(result)

}());