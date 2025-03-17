class Person {
  constructor (lastName, firstName, school, dateOfBirth, userName, affiliation) {
    this.lastName = lastName
    this.firstName = firstName
    this.school = school
    /*I was getting an fail on the ToString test for the wrong birthdate of Feb 1,2004 and not Feb 02,2004 which was bc of how toLocaleDateString()
    handles local time/daylight savings. I will be changing the code to use Date.UTC() to handle the inconsistences
*/
    const dateParts = dateOfBirth.split('-');
    this.dateOfBirth = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));
    this.userName = userName
    this.affiliation = affiliation
  }

  get email () {
    return `${this.userName}@${this.school.domain}`
  }
 
  toString () {
    //updating 2 string to handle utc date
    const utcDate = this.dateOfBirth.toUTCString();
    const dateParts = utcDate.split(' ');
    const day = dateParts[1];
    const month = dateParts[2];
    const year = dateParts[3];
    return ('\n' + 'Student Name: ' + this.firstName + ' ' + this.lastName + '\n' +
            'School: ' + this.school.name + '\n' +
            'DOB: ' + month + ' ' + day + ', ' + year + '\n' +
            'Username: ' + this.userName + '\n' +
            'affiliation: ' + this.affiliation + '\n')
  }
}

module.exports = Person
