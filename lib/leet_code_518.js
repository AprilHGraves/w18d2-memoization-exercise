// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.


var change = function (amount, coins, memo={}) {
  const key = amount+coins;
  if (key in memo) {
    return memo[key]
  }
  if (amount === 0) {
    return 1
  }
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    if (coin < amount) {
      const res = change(amount - coin, coins.slice(0, i + 1), memo);
      count += res;
    } else if (coin === amount) {
      count += 1;
    }
  }
  memo[key] = count;
  return count
};

// const a = change(5, [1,2,5]); // 4
// const b = change(500, [3, 5, 7, 8, 9, 10, 11]); // 35502874
// const c = change(5000,[102,89,76,63,50,37,24,11]); // 992951208
// console.log(c);


