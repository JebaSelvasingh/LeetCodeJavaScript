var addTwoPromises = async function (promise1, promise2) {
  const result1 = await promise1;
  const result2 = await promise2;
  return new Promise((resolve, reject) => {
    resolve(result1 + result2);
    try {
    } catch (error) {
      reject(Error("One of the promises failed"));
    }
  });
};
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
