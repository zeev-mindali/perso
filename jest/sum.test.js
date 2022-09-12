const sum = require("./sum");

//create our first test
test("testing add two numbers",()=>{
    //      
    expect(sum(1,2)).toBe(3);
});