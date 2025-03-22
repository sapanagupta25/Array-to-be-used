// Initial array
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // 1. Print developers using map
  function PrintDeveloperbyMap() {
    arr
      .map(employee => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
  }
  
  // 2. Print developers using forEach
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // 3. Add new data
  function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  // 4. Remove admin
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  // 5. Concatenate array
  function ConcatinateArray() {
    let newArray = [
      { id: 5, name: "Alice", age: "22", profession: "designer" },
      { id: 6, name: "Bob", age: "25", profession: "manager" },
      { id: 7, name: "Charlie", age: "28", profession: "tester" }
    ];
  
    let combinedArray = arr.concat(newArray);
    console.log(combinedArray);
  }
  
  // Uncomment to test each function
  // PrintDeveloperbyMap();
  // PrintDeveloperbyForEach();
  // addData();
  // removeAdmin();
  // ConcatinateArray();
  