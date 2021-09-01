const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (students) => {
    const allDetails = students.map((item, index) => {
        const newObj = {
          name: item[0],
          skills: item[1],
          scores: item[2],
        };
        return newObj;
    });
    return allDetails;

}
console.log(convertArrayToObject(students))