setTimeout(function(){

var list = document.querySelector("ul"),
    jobTitle = document.querySelector(".job-title");

if(list.classList.contains("hidden")){
	list.classList.remove("hidden");
}
if(jobTitle.classList.contains("hidden")){
	jobTitle.classList.remove("hidden");
}

}, 1000);
