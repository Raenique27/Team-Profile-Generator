const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'index.html');

const createHtml = require('./src/createHtml');

// Create arrays that are empty for the team and id 
const teamArray = [];
const idArray = [];

//Start application
function startApp() {

    // Prompt user to make a team manager when app starts
    function createManager() {
        console.log('Build your team profile');
        inquirer.prompt([
            {
                type: "input",
                name: "managersName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if(answer) {
                        return true;
                    } else {
                        console.log("Please enter team manager's name!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managersId",
                message: "What is the team manager's ID?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter team manager's ID!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managersEmail",
                message: "What is the team managers email ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter manager's email!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managersOfficeNumber",
                message: "What is the team manager's office number ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide team managers office number!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answer.managersOfficeNumber);
            teamArray.push(manager);
            idArray.push(answers.managersId);
            createTeam();
        });
    }
    // createTeam function after user is done createManager
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamList",   
                message: "What would you like to create next ?",
                choices: [
                    "Intern",
                    "Engineer",
                    "Quit"
                ]            
            }
        ]).then(userAnswer => {
            switch (userAnswer.teamList) {
                case "Intern":
                    createIntern();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                default:
                     renderHTML();
            }
        });
    }
    // create an Engineer if chosen by user
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineersName",
                message: "What is the engineer's name ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name !");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineersId",
                message: "What is the engineer's Id ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an Id for the engineer!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineersEmail",
                message: "What is the engineer's email?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an email for the engineer!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineersGithub",
                message: "What is the engineer's Github username? ",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's Github username !");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineersName, answers.engineersId, answers.engineersEmail, answers.engineersGithub);
            teamArray.push(engineer);
            idArray.push(answers.engineersId);
            createTeam();
        });
    }
    // create an Intern if chosen by user
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internsName",
                message: "What is the intern's name ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's name !");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internsId",
                message: "What is the intern's ID ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's ID!");
                        return false;
                    }
                }
            }, 
            {
                type: "input",
                name: "internsEmail",
                message: "What is the intern's email ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an email for the Intern !");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internsSchool",
                message: "What is the intern's school ?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter a school for the Intern !");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internsName, answers.internsId, answers.internsEmail, answers.internsSchool);
            teamArray.push(intern);
            idArray.push(answers.internsId);
            createTeam();
        });
    }
    function renderHTML() {
        // create dist directory for index.html if it does not exist
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Creating Team Profile... ");
        fs.writeFileSync(outputPath, createHtml(teamArray), "utf-8");
    }

    createManager();
}

startApp();


