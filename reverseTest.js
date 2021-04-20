const expect = require("chai").expect;
describe("Reverse String", () => {
  it("Reverse String Method A", () => {
    let original = "abcdefg";
    let originalArray = [...original];
    originalArray.reverse();
    let reversed = originalArray.join("");
    console.log(reversed);
    expect(reversed).to.eql("gfedcba");
  });

  it.only("Reverse String Method B", () => {
    let original = "abcdefg";
    let originalArray = [...original];
    let i = 0;
    let j = originalArray.length;
    while (i < j) {
      let temp = originalArray[i];
      originalArray[i] = originalArray[j];
      originalArray[j] = temp;

      i++;
      j--;
    }

    let reversed = originalArray.join("");
    console.log(reversed);
    expect(reversed).to.eql("gfedcba");
  });
});
