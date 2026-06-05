var name = 'Nazmul';
console.log('My Name is', name);

// Function Scope
function test() {
  var age = 34;
  console.log(`He is ${age} year's old`);
}
test();
// console.log(age);

// Block Scope
{
  let height = 20;
  var speed = 100;
}
console.log(speed);
// console.log(height);

var a = 10;

function test() {
  var b = 20;

  if (true) {
    var c = 30;
    let d = 40;
  }

  console.log(a);
  console.log(b);
  console.log(c);
  //   console.log(d);
}

test();

var x = 10;

function test2() {
  console.log('test2', x);

  var x = 20;
}
test2();
