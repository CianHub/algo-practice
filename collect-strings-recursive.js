function collectStrings(obj) {
  const strArr = [];

  function helper(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "string") strArr.push(obj[key]);
      if (typeof obj[key] === "object") helper(obj[key]);
    }
    return strArr;
  }

  return helper(obj);
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
