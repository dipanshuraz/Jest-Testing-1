const { sum, average, createUser, fetchUser, unionArray } = require("./index");

describe("Test Case for SUM function", () => {
  test("sum function exists", () => {
    expect(sum).toBeDefined();
  });
  test("sum must be 15", () => {
    expect(sum(5, 10)).toBe(15);
  });
});

describe("Test Cases for Average", () => {
  test("should Exists", () => {
    expect(average).toBeDefined();
  });
  test("should be x", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});
describe("Create User Tests", () => {
  test("should have", () => {
    (name = "Ravi"), (age = 21), (place = "Patna");
    var obj = {
      name,
      age,
      place
    };
    expect(createUser(name, age, place)).toEqual(obj);
  });
});

describe("<= test case ", () => {
  test("should 100+200<=300", () => {
    (n = 100), (m = 200);
    expect(n + m).toBeLessThanOrEqual(300);
  });
});

// Array

describe("array contains masai", () => {
  test("should Have", () => {
    let name = ["ravi", "kumar", "raz"];
    expect(name).toContain("ravi");
  });
});

describe("Axios Called", () => {
  test("should Get User data Async 1", () => {
    return fetchUser().then(res => expect(res.first_name).toBe("Janet"));
  });
  test("Async 2", async () => {
    // Assertions to check how many calls happened
    const data = await fetchUser();
    expect(data.first_name).toBe("Janet");
  });
});

describe("UnionArray", () => {
  test(" define true", () => {
    expect(unionArray).toBeDefined();
  });
  test("should unionArray([1, 2, 3], [3, 4, 5])", () => {
    let arr1 = [1, 2, 3];
    let arr2 = [3, 4, 5];
    let arr3 = [1, 2, 3, 4, 5];
    expect(unionArray(arr1, arr2)).toEqual(arr3);
  });
});
