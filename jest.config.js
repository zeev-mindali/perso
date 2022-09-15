module.exports={
    //the root of your source code , typically /src
    // '<rootDir> is a token jest substitutes
    roots: ["<rootDir>/src"],

    //Jest transformations - this adds support for typescript
    //using ts-jest
    transform: {
        "^.+\\.tsx?$" : "ts-jest"
    },

    //Run special logic, such as cleaning up components
    //when using React testing library and adds special 
    //extended assertions to jest

    //error in cleanup 
    // setupFilesAfterEnv: [
    //     "@testing-library/react/cleanup-after-each",
    //     "@testing-library/jest-dom/extend-expect"
    // ],

    //Test spec file resolution pattern
    //matches parent folder '__tests__' and filename
    //should contain 'test' or 'spec'.
    testRegex : "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    //module file extensions for importing
    moduleFileExtensions:["ts","tsx","js","jsx","json","node"]
};