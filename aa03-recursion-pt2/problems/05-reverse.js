/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(str, count = str.length - 1, str2 = "") {
  // Your code here
  let letter = str[count];

  if (count < 0) {
    return str2;
  }

  str2 = str2.concat(letter);
  count--;
  return reverse(str, count, str2);
}

console.log(reverse("house")); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
