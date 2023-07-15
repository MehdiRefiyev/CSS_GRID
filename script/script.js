let myOffcanvas = document.getElementById('offcanvasExample');
let projectsarea = document.getElementById("projects");
let aboutmeid = document.getElementById("aboutmeid");
let contactid = document.getElementById("contactid");
let prId = document.getElementById("prId").addEventListener('click' , fc1 , true);
let abId = document.getElementById("abId").addEventListener('click' , fc2 , true);
let cnId = document.getElementById("cnId").addEventListener('click' , fc3 , true);
let btnId = document.getElementById("btnId").addEventListener('click' , fc4 , true);

function fc1(){
    myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
        let y = projectsarea.offsetTop;
        window.scrollTo(0, y);
    } , true );
};
function fc2(){
    myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
        let y = aboutmeid.offsetTop;
        window.scrollTo(0, y);
    } , true );
};
function fc3(){
    myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
        let y = contactid.offsetTop;
        window.scrollTo(0, y);
    } , true );
};
function fc4(){myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {window.scrollTo(0,0);} , true );};