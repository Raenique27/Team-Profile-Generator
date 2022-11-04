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