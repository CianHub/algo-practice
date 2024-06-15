function reverse(str, revStr = "") {
  // Write a recursive function called reverse which accepts a
  // string and returns a new string in reverse.
  /*
  1 understand the problem
    1 rephrase: return a string in the opposite order using recursion
    2 identify inputs - str
    3 idenfity outputs - str
    4. can we solve - yes
  2 explore examples
  3 break it down
  4 solve/simplify
  5 refactor
  */

  // base case  str.length === 0 return revStr
  // newStr = revStr + str[lastCharIdx]
  // str = str.substring(1)
  if (str.length === 0) return revStr;
  return reverse(
    str.substring(0, str.length - 1),
    revStr + str[str.length - 1]
  );
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
