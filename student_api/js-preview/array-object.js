// array and object

// Array
const students = ["Earth", "THO", "Silapkorn", "Ood", "Matus"]

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่เข้าไป ทำการสดงผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length} คน`);

//object
const student = {
    id: 101,
    name: "Ice",
    age: 18,
    major:"Information Technology"
};
console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);

//Array and object
const studentList = [
    {id: 101, name: "Ice", age: 20, major: "IT"},
    {id: 102, name: "Ball", age: 17, major: "IT Roblox"},
    {id: 103, name: "korn", age: 30, major: "IT PUBG"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่
const names = studentList.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ Map ${names}`);

//