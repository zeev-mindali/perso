export function divide(num1: number,num2: number):number{
    if (num2===0){
        throw new Error("we can not divide by zero");
    }
    return Math.round(num1/num2);
}

describe("divide function",()=>{
    describe("when given to integers",()=>{
        it("should return a division result",()=>{});
    });
});

it ("should return a division result",()=>{
    const [num1,num2,expected] = [40,4,10];
    const result = divide(num1,num2);
    expect(result).toEqual(expected);
})