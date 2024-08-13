export default function getStudentsByLocation(array, city) {
  const new_array = [];
  return array.filter((value) => city === value["location"]);
}
