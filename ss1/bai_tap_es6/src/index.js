import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

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

// yeu cau 1
// Tạo một component
function CourseList() {
    return (
        <div>
            {courses.map((course) => {
                if (course.rating >= 4) {
                    return (
                        <div key={course.id}>
                            <h3>{course.title}</h3>
                            <p>Id: {course.id}</p>
                            <p>Rating: {course.rating}</p>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

root.render(<CourseList/>);

//yeu cau 2


//yeu cau 3
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

