function areThereDuplicatesFreq(...args) {
  /*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/
  /*
1. understand the problem
    1. rephrase = check if there are any duplicates among the params
    2. identify inputs = params can be integers and strings
    3. identify outputs = boolean
    4. do we have enough info? = yes
    5. what are the key details? = variable number of inputs
2. explore examples
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true
    areThereDuplicates('a', 'b', 'c', 'a') // true  
3. break down the solution
4. solve/simply
5. refactor
*/

  //check if length of args is 1 or zero and return false if so
  if (args.length < 2) return false;

  const hshmap = {};

  for (let arg of args) {
    if (hshmap[`${arg}`]) return true;
    hshmap[`${arg}`] = 1;
  }

  return false;
}

function areThereDuplicatesBinary(...args) {
  /*
  check length
  init i pointer at 0
  
  loop through args using j pointer start at 1

  if i !== j -> move i forwards and set i to be j
  else return true
  */
  if (args.length < 2) return false;

  args.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[i - 1]) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicatesPointer(1, 2, 3));
