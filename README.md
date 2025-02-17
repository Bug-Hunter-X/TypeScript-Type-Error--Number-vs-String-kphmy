# TypeScript Type Error: Number vs String

This repository demonstrates a common type error in TypeScript where a function expects a number but receives a string. This results in a compilation error, preventing unexpected runtime behavior.

## Bug
The `bug.ts` file contains two functions, `add` and `subtract`, which are designed to work with numbers. However, the code attempts to use these functions with string arguments. This triggers a type error during compilation.

## Solution
The `bugSolution.ts` file offers a solution to prevent this error by explicitly checking the input types or using type guards.