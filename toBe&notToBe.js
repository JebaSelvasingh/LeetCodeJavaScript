var expect = function(val) {
    const throwError = (errorString) => { throw new Error(errorString)}
    return {
      toBe : (val2) => val === val2 || throwError("Not Equal"),
      notToBe : (val2) => val !== val2 || throwError("Equal")
    }
  }
  
  console.log(expect(2).toBe(5));