export default class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Index signature for additional properties

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        yearsOfExperience?: number,
        additionalProps?: { [key: string]: any }
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;

        if (additionalProps) {
            Object.assign(this, additionalProps);
        }
    }
}

// Example usage:
const teacher = new Teacher('John', 'Doe', true, 'New York', 10, { contract: true });
console.log(teacher);