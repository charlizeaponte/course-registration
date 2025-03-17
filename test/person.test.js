// person.test.js
const Person = require('../src/person'); 
const Institution = require('../src/institution');

describe('person', () => {
    let person;
    let institution;

    beforeEach(() => {
        institution = new Institution('Quinnipiac University', 'quinnipiac.edu');
        person = new Person('Aponte', 'Charlize', institution, '2004-02-02', 'caponte', 'student');
    });

    test('Check if person was intialized correctly', () => {
        expect(person.lastName).toBe('Aponte');
        expect(person.firstName).toBe('Charlize');
        expect(person.school).toBe(institution);
        expect(person.dateOfBirth).toEqual(new Date(Date.UTC(2004, 1, 2)));//this will display febuary 02, 2004
        expect(person.userName).toBe('caponte');
        expect(person.affiliation).toBe('student');
    });

    test('check if the get email function returns email', () => {
        expect(person.email).toBe('caponte@quinnipiac.edu');
    });

    test('Check if toString returns correct string ', () => {
        const String = `\nStudent Name: Charlize Aponte\nSchool: Quinnipiac University\nDOB: Feb 02, 2004\nUsername: caponte\naffiliation: student\n`;
        expect(person.toString()).toBe(String);
    });

    test('Fails constructor with invaild dob', () => {
        expect(() => new Person('Aponte', 'Charlize', institution, 'invalid-date', 'caponte', 'student')).toThrow();
    });
    test('fails get email function when no username entered', () => {
        const bademail = new Person('Aponte', 'Charlize', institution, '2004-02-02', '', 'student');
        expect(bademail.email).toBe('caponte@quinnipiac.edu');
    });

    test('toString function fails when school is null', () => {
        const nullSchool = new Person('Aponte', 'Charlize', null, '2004-02-02', 'caponte', 'student');
        expect(() => nullSchool.toString()).toThrow(TypeError);
    });

});