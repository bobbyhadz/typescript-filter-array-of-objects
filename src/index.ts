export {};

// EXAMPLE 1 - Filter an Array of Objects in TypeScript

const employees = [
  { name: 'Alice', department: 'accounting' },
  { name: 'Bobby Hadz', department: 'human resources' },
  { name: 'Carl', department: 'accounting' },
];

const result = employees.filter((obj) => {
  return obj.department === 'accounting';
});

// [
//   { name: 'Alice', department: 'accounting' },
//   { name: 'Carl', department: 'accounting' }
// ]
console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2 - Typing the array of objects explicitly

// const employees: { name: string; department: string }[] = [];

// employees.push(
//   { name: 'Alice', department: 'accounting' },
//   { name: 'Bobby Hadz', department: 'human resources' },
//   { name: 'Carl', department: 'accounting' },
// );

// const result = employees.filter((obj) => {
//   return obj.department === 'accounting';
// });

// // [
// //   { name: 'Alice', department: 'accounting' },
// //   { name: 'Carl', department: 'accounting' }
// // ]
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 3 - Filter an array of objects based on multiple conditions (&& operator)

// interface Employee {
//   id: number;
//   name: string;
//   department: string;
// }

// const employees: Employee[] = [
//   { id: 1, name: 'Alice', department: 'accounting' },
//   { id: 2, name: 'Bobby Hadz', department: 'human resources' },
//   { id: 3, name: 'Carl', department: 'accounting' },
// ];

// const result = employees.filter((obj) => {
//   return obj.department === 'accounting' && obj.id !== 1;
// });

// // 👇️ [ { id: 3, name: 'Carl', department: 'accounting' } ]
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 4 - Filter an array of objects based on multiple conditions (|| operator)

// interface Employee {
//   id: number;
//   name: string;
//   department: string;
// }

// const employees: Employee[] = [
//   { id: 1, name: 'Alice', department: 'accounting' },
//   { id: 2, name: 'Bobby Hadz', department: 'human resources' },
//   { id: 3, name: 'Carl', department: 'accounting' },
// ];

// const result = employees.filter((obj) => {
//   return obj.department === 'human resources' || obj.id === 1;
// });

// // [
// //   { id: 1, name: 'Alice', department: 'accounting' },
// //   { id: 2, name: 'Bobby Hadz', department: 'human resources' }
// // ]
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 5 - Find the first object in an array that meets a condition in TS

// const employees = [
//   { name: 'Alice', department: 'accounting' },
//   { name: 'Bobby Hadz', department: 'human resources' },
//   { name: 'Carl', department: 'accounting' },
// ];

// const result = employees.find((obj) => {
//   return obj.name === 'Bobby Hadz';
// });

// // 👇️ { name: 'Bobby Hadz', department: 'human resources' }
// console.log(result);

// console.log(result?.name); // 👉️ "Bobby Hadz"
// console.log(result?.department); // 👉️ "human resources"

// ---------------------------------------------------

// // EXAMPLE 6 - Filter an array of objects based on multiple conditions with AND and OR operators

// interface Employee {
//   id: number;
//   name: string;
//   department: string;
// }

// const employees: Employee[] = [
//   { id: 1, name: 'Alice', department: 'accounting' },
//   { id: 2, name: 'Bobby Hadz', department: 'human resources' },
//   { id: 3, name: 'Carl', department: 'accounting' },
// ];

// const result = employees.filter((obj) => {
//   return (
//     (obj.department === 'accounting' && obj.id === 1) ||
//     obj.name === 'Bobby Hadz'
//   );
// });

// // 👇️ [
// //   { id: 1, name: 'Alice', department: 'accounting' },
// //   { id: 2, name: 'Bobby Hadz', department: 'human resources' }
// // ]
// console.log(result);
