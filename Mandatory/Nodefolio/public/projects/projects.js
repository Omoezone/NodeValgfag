//fetch("/api/projects").then(res => res.json).then(console.log) 

(async function getProjects() {
    const response = await fetch("/projects");
    const result = await response.json();

})(); 