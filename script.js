const resume = {
  name: "",
  lastName: "",
  education: {
    seniorHigh: {
      institution: "",
      address: ""
    },
    college: {
      institution: "",
      address: ""
    }
  },
  age: 0, // Assign an actual age
  about: "",
  interest: [],
  workExperience: {}, // You can provide details here
  professionalSummary: "", // Provide a summary
  skills: {}, // Add skills here
  honorAwards: {}, // Add awards here
  language: [] // Add languages here
};


const nameInput = prompt('Enter your name: ');
const lastNameInput = prompt("Last name: ");
const educationInput = prompt('high school: ');
const  interestInput =  prompt('interest: ')
  
resume.name = nameInput;
resume.lastName = lastNameInput;
resume.education.college.institution = educationInput;
resume.interest = interestInput;
// work experience prompt
const comparyInput = prompt('Company: ');
const positionInput = prompt('Position: ');
const yearsInput = prompt('years: ');
// Adding work experience
resume.workExperience = {
  company: comparyInput,
  position: positionInput,
  years: yearsInput
};
//prompt skills
const programmingInput = prompt('Programming skills: ');
const designInput = prompt('Design Skills: ');
const languagesInput = prompt('Languages Skills: ');

// Adding skills
resume.skills = {
  programming: programmingInput,
  design: designInput,
  languages: languagesInput
};

const awardInput = prompt('Award: ');
const yearAwardInput = prompt('Year Award: ');
// Adding an award
resume.honorAwards = {
  awardName: awardInput,
  year: yearAwardInput
};

// Accessing an array element
console.log(resume); // Output: "English"
