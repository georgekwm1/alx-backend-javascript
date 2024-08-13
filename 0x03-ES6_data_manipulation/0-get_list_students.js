export default function getListStudents() {
  const array = new Object();
  const array2 = new Object();
  const array3 = new Object();
  const new_array = [];
  array.id = 1;
  array.firstName = 'Guillaume';
  array.location = 'San Francisco';
  array2.id = 2;
  array2.firstName = 'James';
  array2.location = 'Columbia';
  array3.id = 5;
  array3.firstName = 'Serena';
  array3.location = 'San Francisco';
  return new_array.concat(array, array2, array3);
}
