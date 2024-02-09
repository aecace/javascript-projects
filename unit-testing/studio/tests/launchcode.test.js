// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return 'nonprofit' for key 'organization'", function() {
    expect(launchcode.organization).toBe('nonprofit');
  });

  test("should return 'Jeff' for key 'executiveDirector'", function() {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  test("should return '100' for key 'percentageCoolEmployees'", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should return values 'Web Development', 'Data Analysis', and 'Liftoff' as well as length of '3' for key 'programsOffered'", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("should return 'Launch!' when number is divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });

  test("should return 'Code!' when number is divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });

  test("should return 'Rocks!' when number is divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

  test("should return 'LaunchCode!' when number is divisible by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  test("should return 'Code Rocks!' when number is divisible by 3 AND 5", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("should return 'Launch Rocks! (CRASH!!!!)' when number is divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("should return 'LaunchCode Rocks!' when number is divisible by 2, 3, AND 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("should return 'Rutabagas! That doesn't work.' when number is not divisible by 2, 3, OR 5", function() {
    expect(launchcode.launchOutput(7)).toBe(`Rutabagas! That doesn't work.`);
  });

});