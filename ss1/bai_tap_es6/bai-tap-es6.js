//------------------Yeu cau 1------------------
let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];

let array1 = courses.filter((course) => course.rating >= 4);
console.log("------------------Yeu cau 1------------------")
console.log(array1);


//------------------Yeu cau 2------------------
let temp = courses.filter((course) => course.rating < 4);
let array2 = temp.map((item) =>
    item.id + "-" + item.title + "-" + item.rating
)

console.log("------------------Yeu cau 2------------------")
console.log(array2)


//------------------Yeu cau 3------------------
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

let mergedArray = [...courses, ...addedCourses];
console.log("------------------Yeu cau 3------------------");
console.log(mergedArray);