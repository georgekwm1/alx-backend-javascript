export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;

    this._length = length;

    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get student() {
    return this._student;
  }

  // setter
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (typeof students !== 'string' && !Array.isArray(students)) {
      throw TypeError('Student must be an array of Strings');
    }
    this._students = students;
  }
}
