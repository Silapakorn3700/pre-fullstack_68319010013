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
    {id: 102, name: "Ball", age: 17, major: "CG"},
    {id: 103, name: "korn", age: 30, major: "IT"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่
const names = studentList.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ Map ${names}`);

// filter : คัดกรองตัวที่เลือกและตรงเงื่อนไข
const isStudents = studentList.filter((s) => s.major === "IT");
console.log(`filter ${isStudents.length}`);

// find : หาตัวแรก(ตัวอักษร ตัวเลข)ที่ตรงเงื่อนไข
const found = studentList.find((s) => s.id === 103);
console.log("ผลการค้นหา", found);
console.log(`ผลการค้นหา ${found.name}`);

// ค้นหาจากชื่อ ไม่สนพิมพ์เล็ก-ใหญ่
const keyword = "ba";
const searchResult = studentList.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase()));
console.log(`ผลการค้นหา : ${keyword}`, searchResult.map((s) => s.name));

// ให้ลองค้นหาชื่อสาขา และแสดงข้อมูลทั้งหมดที่ตรงกับการพิมพ์ชื่อสาขาแค่บางอักขระ (keyword : i)
const keywordi = "i"
const searchResulti = studentList.filter((s) => s.major.toLowerCase().includes(keywordi.toLowerCase()));
console.log(`ผลการค้าหา : ${keywordi}`, searchResulti.map((s) => s.major));