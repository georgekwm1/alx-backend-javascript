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
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (typeof value !== 'string' && !Array.isArray(value)) {
      throw TypeError('Student must be an array of Strings');
    }
    this._students = value;
  }
}
