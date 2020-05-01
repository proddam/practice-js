// 내 답안
// 1. 이건 외우는 수 밖에....
// 원리는 0, 1을 제외한 정수 x 정수 = 솟수가 아니다
// 고로 기본적으로 모든 정수는 솟수라고 가정하고 출발!
// sqrt(N)까지 루프를 도니까 O(log N) 그리고, 그 안에서 N 번 도니까...
// O(N * log N)
// 결국 무식한 O(N^2) 보다는 낫다!
// reduce 사용도 간결하고 멋지다!

const primes = (number) => {
  const checks = new Array(number+1)
  checks.fill(true)
  checks[0] = checks[1] = false

  for (let i=2; i <= Math.sqrt(number); i++) {
    for (let j=2; i*j <= number; j++) {
      checks[i*j] = false
    }
  }
  
  // return checks.reduce((a,c,i) => {
  //   if (c) a.push(i)
  //   return a
  // }, [])

  return checks.reduce((a,c,i) => c? a.concat(i) : a, [])
}

const assert = require('assert')
describe("Sieve of Eratosthenes", () => {
  it("Should return all prime numbers", () => {
   assert.deepEqual(primes(10), [2, 3, 5, 7]);
  });
 });

