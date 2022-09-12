const cloneArray = require("./cloneArray");

test("testing array copy",()=>{
    const myArr = [1,2,3,4,5]; //object -> ref 
    //expect(cloneArray(myArr)).toBe(myArr); //val
    expect(cloneArray(myArr)).toEqual(myArr); //ref
    //expect(function to test(arguments to test))."selector"(result that we should have);
});

//byVal -> number,string,boolean
//byRef -> object
