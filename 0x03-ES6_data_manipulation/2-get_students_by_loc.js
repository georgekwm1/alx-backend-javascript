export default function getStudentsByLocation(array, city) {
  const new_array = [];
  if (Array.isArray(array)) {
    return array.filter((value) => city === value.location);
  }
  return [];
}
