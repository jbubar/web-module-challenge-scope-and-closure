//
(function(){
	var a = b = 3;
  })();
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

function createBase(added_nb){
	return (function(number){
	  return added_nb + number;
	})
  }

  var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
