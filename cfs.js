// Constants and Variables
const COURSE = "BSCS";
let name = "John Carlo Abaya";
let address = "Paypayad, Candon City, Ilocos Sur";
let age = 20;
let classRole = "Student";
let password = "BSCSsecurePassword123";

 
function checkStudentInfo(name, address, age, classRole, password) {
    if (COURSE === "BSCS" || COURSE === "BSM" || COURSE === "BAEL") {
        switch (classRole) {
            case "Officer":
                console.log("Class Role: Officer");
                break;
            case "Student":
                if (password.length >= 12 && password.includes(COURSE)) {
                    console.log(Name: ${name});
                    for (let i = 0; i < age; i++) {
                        console.log(Address: ${address});
                    }
                } else {
                    console.log("Password does not meet the requirements.");
                }
                break;
            case "Teacher":
                console.log("Class Role: Teacher");
                break;
            default:
                console.log("Class Role: Unassigned");
                break;
        }
    } else {
        console.log("Course not recognized.");
    }
}


checkStudentInfo(name, address, age, classRole, password)