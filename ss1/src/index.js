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
// eslint-disable-next-line array-callback-return
courses.map((course) => {
    if (course.rating >= 4) {
        root.render(
            <h4>id: {course.id}, rating: {course.rating}, title{course.title}</h4>
        )
    }
})


//yeu cau 2

