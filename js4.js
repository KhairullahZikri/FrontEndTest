// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
    {
      id: "1",
      name: "Sherlock",
      score:90
    },
    {
      id: "2",
      name: "Genta",
      score: 75
    },
    {
      id: "3",
      name: "Ai",
      score: 80
    },
    {
      id: "4",
      name: "Budi",
      score:85
    }
  ]
  
  function result() {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < students.length; i++) {
      sum += students[i].score;
    }
    average = sum / students.length;
    output= [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].score < average) {
        const student = {};
        student.id = students[i].id;
        student.name = students[i].name;
        student.score = students[i].score;
        output.push(student);
      }
    }
    return output;
  }
  
  
  console.log(result());