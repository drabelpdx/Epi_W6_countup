describe('countUp', function() {
  it("rounds down the quotient of the dividend and divisor", function() {
    expect(countUp(50,7)).to.equal(7);
  });

  it("it counts up to bigNum by multiples of smallNum", function() {
    expect(countUp(20,4)).to.eql([4,8,12,16,20]);
  });
});
