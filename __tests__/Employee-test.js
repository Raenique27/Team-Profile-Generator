const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Alisha", "1", "AlishaWin@email.com");

    expect(employee.name).toBe("Alisha");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("AlishaWin@email.com");
});

test("gets employee name", () => {
    const employee = new Employee("Alisha", "1", "AlishaWin@email.com");

    expect(employee.getName()).toEqual(employee.name.toString());
});

test("get employee ID", () => {
    const employee = new Employee("Alisha", "1", "AlishaWin@email.com");

    expect(employee.getId()).toEqual(employee.id.toString());
});

test("get employee email", () => {
    const employee = new Employee("Alisha", "1", "AlishaWin@email.com");

    expect(employee.getEmail()).toEqual(employee.email.toString());
});

test("get employee role", () => {
    const employee = new Employee("Alisha", "1", "AlishaWin@email.com");

    expect(employee.getRole()).toEqual("Employee");
});