import { pow } from './index'

test('4 во второй степени равно 16', function () {
    let result = pow(4, 2)
    expect(result).toBe(16);
});
test('4 во второй степени не равно 32', function (){
    let result = pow (4, 2)
    expect(result).not.toBe(32)
})
test('4 в нулевой степени равно 1', function (){
    let result = pow (4, 0)
    expect(result).toBe(1)
})