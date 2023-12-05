document.addEventListener('DOMContentLoaded', function() {
    const headerColor = document.getElementById('header-color');
// console.log(headerColor);
const headerBackgroundColor = document.getElementById('resume-header-bg-color');
// console.log(headerBackgroundColor);
const headerTextColor = document.getElementById('header-text-color');
// console.log(headerTextColor);
const fullName = document.getElementById('fullname');
const finalFullName = document.getElementById('final-fullName');
// console.log(finalFullName);
const jobTitleValue = document.getElementById('job-title-value');
const finalJobTitle = document.getElementById('final-jobTitle');
const email = document.getElementById('email-value');
const finalEmail = document.getElementById('final-email');
const phoneNumberValue = document.getElementById('phoneNumber-value');
const finalPhoneNumber = document.getElementById('final-phone');
const cityValue = document.getElementById('city-value');
const finalAddress = document.getElementById('final-address');
const summaryValue = document.getElementById('summary-value');
const finalSummary = document.getElementById('final-summary');
const addEmployement = document.getElementById('add-employement');
const employementTemplate = document.getElementById('employement-template');
const experienceTag = document.getElementById('experience');
const skillsValue = document.getElementById('skills-value');
const mySkills = document.getElementById('my-skills');
const addProject = document.getElementById('add-project');
const projectTemplate = document.getElementById('project-template');
const projectsTag = document.getElementById('projects');
// console.log(projectsTag);

headerColor.addEventListener('input', updateHeaderColor);
headerTextColor.addEventListener('input', updateHeaderTextColor);
fullName.addEventListener('keyup', updateCandidateName);
jobTitleValue.addEventListener('keyup', updateJobTitle);
email.addEventListener('keyup', updateEmail);
phoneNumberValue.addEventListener('keyup', updatePhoneNumber);
cityValue.addEventListener('keyup', updateAddress);
summaryValue.addEventListener('keyup', updateSummary);
addEmployement.addEventListener('click', addEmployementFn);
skillsValue.addEventListener('input', updateSkillsArray);
addProject.addEventListener('click', addProjectFn);

function updateHeaderColor(e){
    headerBackgroundColor.style.backgroundColor = e.target.value;
    // console.log(value);
}

function updateHeaderTextColor(e){
    headerBackgroundColor.style.color = e.target.value;
}

function updateCandidateName(e) {
    finalFullName.innerText = e.target.value;
}

function updateJobTitle(e){
    finalJobTitle.innerText = e.target.value;
}

function updateEmail(e){
    finalEmail.innerText = e.target.value;
}

function updatePhoneNumber(e){
    finalPhoneNumber.innerHTML = e.target.value;
}

function updateAddress(e){
    finalAddress.innerText = e.target.value;
}

function updateSummary(e){
    finalSummary.innerText = e.target.value;
}

// Handle skills value on Final resume template
let skillsArray = [];
function updateSkillsArray(e){
    skillsArray = e.target.value.split(",");
    console.log(skillsArray);
    updateSkills();
}

function updateSkills(){
    mySkills.innerHTML = "";
    if(skillsArray.length > 0){
        skillsArray.forEach((ele)=>{
            const trimmedEle = ele.trim();
            if(trimmedEle !== ""){
                const div = document.createElement('div');
                div.classList.add("bg-gray-800", "text-[0.8rem]", "text-white", "w-max", "px-2", "py-1", "rounded");
                div.innerText = trimmedEle;
                mySkills.append(div);
            }
        })
    }
}

// Add Employement Function
let expId = 1;
function addEmployementFn(){
    const uniqueId = `emp-${expId}`;
    // console.log(uniqueId);
    const newTemplate = createEmployement(uniqueId);
    const newExperience = createExperience(uniqueId);
    employementTemplate.append(newTemplate);
    experienceTag.append(newExperience);
    let tempId = expId;
    //applying events on startDate, endDate, jobTitle, Employer and description
    // to dynamic update data in respective experience field
    const expStartDate = document.getElementById(`exp-start-${tempId}`);
    const expEndDate = document.getElementById(`exp-end-${tempId}`);
    const expJobTitle = document.getElementById(`exp-jobTitle-${tempId}`);
    const expEmployer = document.getElementById(`exp-employer-${tempId}`);
    const expDescription = document.getElementById(`exp-des-${tempId}`);

    expStartDate.addEventListener('change', (e) => updateExpStartDate(e, tempId));
    expEndDate.addEventListener('change', (e) => updateExpEndDate(e, tempId));
    expJobTitle.addEventListener('keyup', (e) => updateExpJobTitle(e, tempId));
    expEmployer.addEventListener('keyup', (e) => updateExpEmployer(e, tempId));
    expDescription.addEventListener('keyup', (e) => updateExpDescription(e, tempId));

    // cross button handling below
    const cross = document.querySelectorAll('.cross');
    const crossArray = Array.from(cross);
    expId+=1;
    crossArray.forEach((tag)=>{
        tag.addEventListener('click', (e)=>{
            // console.log(e.target.dataset.uniqueId);
            const uniqueId = e.target.dataset.uniqueId;
            // console.log(uniqueId);
            crossFn(uniqueId);
            // newTemplate.remove();
            // newExperience.remove();
            // id-=1;
        });
    });
}

// Create Element Function
function createEmployement(uniqueId){
    const div = document.createElement('div');
    div.classList.add("flex", "flex-col");
    // console.log(uniqueId);
    div.dataset.uniqueId = uniqueId; // Set a unique identifier
    // console.log(div.target.uniqueId);
    div.innerHTML = `
                    <div class="flex justify-between items-center">
                        <label class="text-[1.1rem] pl-1 font-semibold" for="">Start</label>
                        <div class="rounded-full p-2 hover:bg-slate-400 cursor-pointer">
                            <i class="cross fa-solid fa-xmark fa-lg" data-unique-id="${uniqueId}"></i>
                        </div>
                    </div>
                    <input id="exp-start-${expId}" class="w-full my-2 p-2 rounded" type="date" placeholder="-----,--">
                    <label class="text-[1.1rem] pl-1 font-semibold" for="">End</label>
                    <input id="exp-end-${expId}" class="w-full my-2 p-2 rounded" type="date" placeholder="-----,--">
                    <input id="exp-jobTitle-${expId}" class="w-full my-2 p-2 rounded" type="text" placeholder="Job Title">
                    <input id="exp-employer-${expId}" class="w-full my-2 p-2 rounded" type="text" placeholder="Employer">
                    <textarea id="exp-des-${expId}" class="w-full my-2 p-2 rounded" name="" cols="30" rows="5" placeholder="Description"></textarea>
                    `
    return div;
}

function createExperience(uniqueId){
    const div = document.createElement('div');
    div.dataset.uniqueId = uniqueId; // Set a unique identifier
    div.innerHTML = `
                    <div class="flex justify-between items-center my-2">
                        <div>• <span id="resume-exp-jobTitle${expId}" class="">Software Engineer</span></div>
                        <div class="flex">
                            <div id="resume-exp-start${expId}">01-2022 <span>||</span></div>
                            <div id="resume-exp-end${expId}">12-2023</div>
                        </div>
                    </div>
                    <p id="resume-exp-employer${expId}" class="my-2">Netflix</p>
                    <p id="resume-exp-description${expId}" class="my-2">Supervising a team of developers to maintain users experience and app's eco-system.</p>
                    `
    return div;
}

function updateExpStartDate(e, id){
    const resumeExpStartDate = document.getElementById(`resume-exp-start${id}`);
    const startDateValue = e.target.value;
    // Split the date into an array of parts
    const dateParts = startDateValue.split("-");

     // Extract the month and year
     const month = dateParts[1];
     const year = dateParts[0];

    // Update the resumeExpStartDate
    resumeExpStartDate.innerText = `${month}-${year} || `;
}

function updateExpEndDate(e,id){
    const resumeExpEndDate = document.getElementById(`resume-exp-end${id}`);
    const endDateValue = e.target.value;

    const dateParts = endDateValue.split("-");
    const month = dateParts[1];
    const year = dateParts[0];
    resumeExpEndDate.innerText = `${month}-${year}`;
}

function updateExpJobTitle(e, id){
    const resumeExpJobTitle = document.getElementById(`resume-exp-jobTitle${id}`);
    // update resume job title on keyup
    resumeExpJobTitle.innerText = e.target.value;
}

function updateExpEmployer(e, id){
    const resumeExpEmployer = document.getElementById(`resume-exp-employer${id}`);
    resumeExpEmployer.innerText = e.target.value;
}

function updateExpDescription(e, id){
    const resumeExpDescription = document.getElementById(`resume-exp-description${id}`);
    resumeExpDescription.innerText = e.target.value;
}

// PROJECT TAB ADD, DELETE AND DATA UPDATE ON KEYPRESS IN PROJECT FIELDS FUNCTIONALITY
let projectId = 1;
function addProjectFn(){
    const uniqueId = `proj-${projectId}`;
    const newTemplate = createProjectTab(uniqueId);
    // console.log(newTemplate);
    const newProject = createProjectTemplate(uniqueId);
    console.log(newProject);
    projectTemplate.append(newTemplate);
    projectsTag.append(newProject);
    let tempId = projectId;

    //applying events on startDate, endDate, project Title and description
    // to dynamic update data in respective project field

    const startDate = document.getElementById(`proj-start-${tempId}`);
    const endDate = document.getElementById(`proj-end-${tempId}`);
    const projectTitle = document.getElementById(`proj-Title-${tempId}`);
    const description = document.getElementById(`proj-des-${tempId}`);

    startDate.addEventListener('change', (e) => updateProjectStartDate(e, tempId));
    endDate.addEventListener('change', (e) => updateProjectEndDate(e, tempId));
    projectTitle.addEventListener('keyup', (e) => updateProjectTitle(e, tempId));
    description.addEventListener('keyup', (e) => updateProjectDescription(e, tempId));

    // cross button handling below
    const cross = document.querySelectorAll('.cross');
    const crossArray = Array.from(cross);
    projectId+=1;
    crossArray.forEach((tag)=>{
        tag.addEventListener('click', (e)=>{
            // console.log(e.target.dataset.uniqueId);
            const uniqueId = e.target.dataset.uniqueId;
            // console.log(uniqueId);
            crossFn(uniqueId);
        });
    });
}

function createProjectTab(uniqueId){
    const div = document.createElement('div');
    div.classList.add('flex', 'flex-col');
    div.dataset.uniqueId = uniqueId;
    div.innerHTML = `
                    <div class="flex justify-between items-center">
                        <label class="text-[1.1rem] pl-1 font-semibold" for="">Start</label>
                        <div class="rounded-full p-2 hover:bg-slate-400 cursor-pointer">
                            <i class="cross fa-solid fa-xmark fa-lg" data-unique-id="${uniqueId}"></i>
                        </div>
                    </div>
                    <input id="proj-start-${projectId}" class="w-full my-2 p-2 rounded" type="date" placeholder="-----,--">
                    <label class="text-[1.1rem] pl-1 font-semibold" for="">End</label>
                    <input id="proj-end-${projectId}" class="w-full my-2 p-2 rounded" type="date" placeholder="-----,--">
                    <input id="proj-Title-${projectId}" class="w-full my-2 p-2 rounded" type="text" placeholder="Project Title">
                    <textarea id="proj-des-${projectId}" class="w-full my-2 p-2 rounded" name="" cols="30" rows="5" placeholder="Description"></textarea>
                    `
    return div;
}   

function createProjectTemplate(uniqueId){
    const div = document.createElement('div');
    div.dataset.uniqueId = uniqueId; // Set a unique identifier
    div.innerHTML = `
                    <div class="flex justify-between items-center my-2">
                        <div>• <span id="projectTitle${projectId}" class="">Instant Resume Builder</span></div>
                        <div class="flex">
                            <div id="project-startDate${projectId}">06-2023 <span>||</span></div>
                            <div id="project-endDate${projectId}">10-2023</div>
                        </div>
                    </div>
                    <p id="project-description${projectId}" class="my-2">A project which help candidate to create their resume fast and east by providing several satisfying themes, text-decoration, instant sharing on mail and social media, print or download your file in PDF format.</p>
                    `
    return div;
}

function updateProjectStartDate(e, id){
    const projectStartDate = document.getElementById(`project-startDate${id}`);
    const startDateValue = e.target.value;
    // Split the date into an array of parts
    const dateParts = startDateValue.split("-");

     // Extract the month and year
     const month = dateParts[1];
     const year = dateParts[0];

    // Update the resumeExpStartDate
    projectStartDate.innerText = `${month}-${year} || `;
}

function updateProjectEndDate(e,id){
    const projectEndDate = document.getElementById(`project-endDate${id}`);
    const endDateValue = e.target.value;

    const dateParts = endDateValue.split("-");
    const month = dateParts[1];
    const year = dateParts[0];
    projectEndDate.innerText = `${month}-${year}`;
}

function updateProjectTitle(e, id){
    const projectTitle = document.getElementById(`projectTitle${id}`);
    // update project title on keyup
    projectTitle.innerText = e.target.value;
}

function updateProjectDescription(e, id){
    const projectDescription = document.getElementById(`project-description${id}`);
    projectDescription.innerText = e.target.value;
}

function crossFn(uniqueId) {
    const employmentDiv = document.querySelectorAll(`div[data-unique-id="${uniqueId}"]`);
    const removeDataArray = Array.from(employmentDiv);
    // console.log(removeDataArray);
    removeDataArray.forEach((ele)=>{
        ele.remove();
    })
}

const addEducationInputs = document.getElementById('add-education-inputs');
const educationInputsContainer = document.getElementById('education-inputs-container');
const educationData = document.getElementById('education-data');

addEducationInputs.addEventListener('click', addEducationFn);

// EDUCATION TAB ADD, DELETE AND DATA UPDATE ON KEYPRESS FUNCTIONALITY
let eduId = 1;
function addEducationFn(){
    const uniqueId = `edu-${eduId}`;
    // console.log(uniqueId);
    const template    = createEducationInputs(uniqueId);
    const data = createEducationDetails(uniqueId);
    educationInputsContainer.append(template);
    educationData.append(data);
    let tempId = eduId;
    //applying events on startDate, endDate, jobTitle, Employer and description
    // to dynamic update data in respective experience field
    const startDate = document.getElementById(`edu-start-${tempId}`);
    const endDate = document.getElementById(`edu-end-${tempId}`);
    const qualification = document.getElementById(`edu-qualification-${tempId}`);
    const university = document.getElementById(`university-${tempId}`);
    const description = document.getElementById(`edu-des-${tempId}`);

    startDate.addEventListener('change', (e) => updateEduStartDate(e, tempId));
    endDate.addEventListener('change', (e) => updateEduEndDate(e, tempId));
    qualification.addEventListener('keyup', (e) => updateQualification(e, tempId));
    university.addEventListener('keyup', (e) => updateUniversityData(e, tempId));
    description.addEventListener('keyup', (e) => updateEduDescription(e, tempId));

    // cross button handling below
    const cross = document.querySelectorAll('.cross');
    const crossArray = Array.from(cross);
    eduId+=1;
    crossArray.forEach((tag)=>{
        tag.addEventListener('click', (e)=>{
            // console.log(e.target.dataset.uniqueId);
            const uniqueId = e.target.dataset.uniqueId;
            // console.log(uniqueId);
            crossFn(uniqueId);
            // newTemplate.remove();
            // newExperience.remove();
            // id-=1;
        });
    });
}

// Create Element Function
function createEducationInputs(uniqueId){
    const div = document.createElement('div');
    div.classList.add("flex", "flex-col");
    // console.log(uniqueId);
    div.dataset.uniqueId = uniqueId; // Set a unique identifier
    // console.log(div.target.uniqueId);
    div.innerHTML = `
                    <div class="flex justify-between items-center">
                        <label class="text-[1.1rem] pl-1 font-semibold" for="">Start</label>
                        <div class="rounded-full p-2 hover:bg-slate-400 cursor-pointer">
                            <i class="cross fa-solid fa-xmark fa-lg" data-unique-id="${uniqueId}"></i>
                        </div>
                    </div>
                    <input id="edu-start-${eduId}" class="w-full my-2 p-2 rounded" type="date" placeholder="-----,--">
                    <label class="text-[1.1rem] pl-1 font-semibold" for="">End</label>
                    <input id="edu-end-${eduId}" class="w-full my-2 p-2 rounded" type="date" placeholder="-----,--">
                    <input id="edu-qualification-${eduId}" class="w-full my-2 p-2 rounded" type="text" placeholder="Qualification">
                    <input id="university-${eduId}" class="w-full my-2 p-2 rounded" type="text" placeholder="School/College">
                    <textarea id="edu-des-${eduId}" class="w-full my-2 p-2 rounded" name="" cols="30" rows="5" placeholder="Description"></textarea>
                    `
    return div;
}

function createEducationDetails(uniqueId){
    const div = document.createElement('div');
    div.dataset.uniqueId = uniqueId; // Set a unique identifier
    div.innerHTML = `
                    <div class="flex justify-between items-center my-2">
                        <div>• <span id="qualification${eduId}" class="">Bachelors in Computer Science</span></div>
                        <div class="flex">
                            <div id="edu-exp-start${eduId}">01-2022 <span>||</span></div>
                            <div id="edu-exp-end${eduId}">12-2023</div>
                        </div>
                    </div>
                    <p id="university${eduId}" class="my-2">Arihant College of Professional Education</p>
                    <p id="edu-description${eduId}" class="my-2">Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum.</p>
                    `
    return div;
}

function updateEduStartDate(e, id){
    const projectStartDate = document.getElementById(`edu-exp-start${id}`);
    const startDateValue = e.target.value;
    // Split the date into an array of parts
    const dateParts = startDateValue.split("-");

     // Extract the month and year
     const month = dateParts[1];
     const year = dateParts[0];

    // Update the resumeExpStartDate
    projectStartDate.innerText = `${month}-${year} || `;
}

function updateEduEndDate(e,id){
    const projectEndDate = document.getElementById(`edu-exp-end${id}`);
    const endDateValue = e.target.value;

    const dateParts = endDateValue.split("-");
    const month = dateParts[1];
    const year = dateParts[0];
    projectEndDate.innerText = `${month}-${year}`;
}

function updateQualification(e, id){
    const qualificationData = document.getElementById(`qualification${id}`);
    // update resume job title on keyup
    qualificationData.innerText = e.target.value;
}

function updateUniversityData(e, id){
    const universityTag = document.getElementById(`university${id}`);
    universityTag.innerText = e.target.value;
}

function updateEduDescription(e, id){
    const educationDescription = document.getElementById(`edu-description${id}`);
    educationDescription.innerText = e.target.value;
}

// function printContent() {
//     // Open a new window for printing
//     var printWindow = window.open('', '_blank');

//     // Inject the content to be printed into the new window
//     printWindow.document.write('<html><head><title>Print</title>');
//     printWindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />'); // Include font-awesome styles
//     printWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css">'); // Include your external stylesheet
//     printWindow.document.write('<script src="https://cdn.tailwindcss.com"></script>'); // Include tailwind Library
//     printWindow.document.write('<script defer src="../controller/script.js"></script>');
//     printWindow.document.write('</head><body>');
//     printWindow.document.write(document.getElementById('template-right-container-twoColumn').innerHTML);
//     printWindow.document.write('</body></html>');

//     // Close the document after writing the content
//     printWindow.document.close();

//     // Trigger the print function
//     printWindow.print();
// }

// DOWNLOAD PDF BUTTON LOGIC WITH "HTML2PDF" LIBRARY
window.onload = function(){
    document.getElementById('downloadBtn')
    .addEventListener('click', (event)=>{
        event.preventDefault();
        const resumeContent = this.document.getElementById('template-right-container-twoColumn');
        // console.log(resumeContent);
        html2pdf().from(resumeContent).save();
    })
}

// window.jspdf = window.jsPDF.jsPDF;
// console.log(window.jsPDF);

// const downloadBtn = document.getElementById('downloadBtn');
// downloadBtn.addEventListener('click', convert_HTML_to_PDF);

// function convert_HTML_to_PDF(){
//     var doc = new jsPDF();
//     // console.log(doc);

//     const resumeContent = document.getElementById('template-right-container-twoColumn');
//     doc.html(resumeContent, {
//         callback : function(doc) {
//             doc.save('resume.pdf');
//         },
//         margin : [10, 10, 10, 10],
//         autoPaging : 'text',
//         x : 0,
//         y : 0,
//         width : 190,
//         windowWidth : 675
//     })
// }
});





                            