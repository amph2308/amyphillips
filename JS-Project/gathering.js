let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../JS-Project/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        //console.log(projects);
        proj= projects;
        findProjectInJSON(projects);
        //parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })


function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
        }else{
            continue;
        }
    }
}

function buildPage(project){
   // console.log(project);
   document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
}

// description of given project
function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../JS-Project/${data.projects[i].subdomain}.html"}>
    <div class="row project" id="${data.projects[i].subdomain}">
        <p>${data.projects[i].description}</p></div>
        </div></a>`;
    }
}


/* Declaring the alternative text for each image file */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


/* Declaring the array of image filenames */

const imgNames = ['../JS-Project/assets/gathering (1).png', '../JS-Project/assets/gathering (2).png', '../JS-Project/assets/gathering (3).png', '../JS-Project/assets/gathering (4).png', '../JS-Project/assets/gathering (5).png', '../JS-Project/assets/gathering (6).png', '../JS-Project/assets/gathering (7).png', '../JS-Project/assets/gathering (8).png'];
const imgAlts = ['The Mother', 'Bound Before the Cross', 'Running in a Circle', 'Three Girls in a Line', 'Hands Tied with Rosary', 'Three Girls Staring Upwards', 'Resting on Each Others Shoulders', 'Dancing Through the Woods'];


/* Looping through images */

for (let i =0; i<imgNames.length; i++) {
  const newImage = document.createElement('img');
    newImage.setAttribute('src', imgNames[i]);
    newImage.setAttribute('alt', imgAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imgNames[i]).setAttribute('alt', imgAlts[i]);
    displayedImage.alt = e.target.alt;
  });
}

