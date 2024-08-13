export default function updateStudentGradeByCity(array, city, newGrades) {
  const filter_byCity = array.filter((value) => value.location === city);

  return filter_byCity.map((value) => {
    const studentGrade = newGrades.find(
      (grade) => grade.studentId === value.id,
    );

    if (studentGrade) {
      value.grade = studentGrade.grade;
    } else {
      value.grade = 'N/A';
    }

    return value;
  });
}
