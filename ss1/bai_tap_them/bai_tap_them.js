//------------------Yeu cau 1------------------
let isPrime = number => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let randomNumberArr = [1, 3, 5, 7, 11, 13, 15, 80, 85, 89, 91];

let primeNumberArr = randomNumberArr.filter((number) => isPrime(number));

console.log("------------------Yeu cau 1------------------")
console.log(primeNumberArr);

//------------------Yeu cau 2------------------
//muc tieu: firstName, gender, degree, languages: english

const person = {
    firstName: undefined,
    lastName: "Doe",
    age: 30,
    gender: "male",
    occupation: "developer",
    nationality: "American",
    city: "New York",
    hobbies: ["reading", "traveling", "photography"],
    language: ["English", "Spanish"],
    education: {
        degree: "Bachelor",
        major: "Computer Science",
        university: "Harvard University",
    },
};


let {firstName, gender, education: {degree}, language} = person;

let chosenPerson = {
    name: firstName,
    gender: gender,
    degree: degree,
    english: language[0]
};
console.log("------------------Yeu cau 2------------------")
console.log(chosenPerson);


//------------------Yeu cau 3------------------
// Viết một function có tham số là một đối tượng bất kỳ .
// Function sẽ hiển thi ra 2 thuộc tính firstName và degree
//   + Nếu đối tượng truyền vào không có thuộc tính firstName thì
//   firstNam có giá trị mặc định là "Quân", tương tự với degree là "NA


let personFn = (obj) => {
    const {firstName = "Quân", education: {degree} = "N/A"} = obj;
    console.log(firstName, degree);
}

console.log("------------------Yeu cau 3------------------")
personFn(person);
