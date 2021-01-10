import math from '../math';

// describe用来表示一组相关的测试
describe('测试add方法', () => {
  // test方法编写测试用例
  test('add 1+2 = 3', function(){
    let res = math.add(1,2)
    expect(res).toBe(3)
  })
  test('add 2+2 = 4', function(){
    let res = math.add(2,2)
    expect(res).toBe(4)
  })
})

// describe用来表示一组相关的测试
describe('测试minus方法', () => {
  // test方法编写测试用例
  test('add 5-2 = 3', function(){
    let res = math.minus(5,2)
    expect(res).toBe(3)
  })
  test('add 5-4 = 1', function(){
    let res = math.minus(5,4)
    expect(res).toBe(1)
  })
})