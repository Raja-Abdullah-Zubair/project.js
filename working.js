// let studentName = [
//   {
//     name: "Ali",
//     class: "11",
//     city: "wah cantt",
//   },
//   {
//     name: "Ahmad",
//     class: "12",
//     city: "wah cantt",
//   },
//   {
//     name: "husain",
//     class: "11",
//     city: "wah cant",
//   },
// ];

const data = [
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
];
test(data);
function test(arr) {
  for (let i = 0; i <= 3; i++) {
    console.log(`value ${i + 1}:${arr[i].id}`);
  }
}
