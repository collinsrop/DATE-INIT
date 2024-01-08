"use strict";
document.addEventListener("DOMContentLoad",()=>{//dom content loaded
//day
document.querySelector("#day").addEventListener("click",()=>{
	let weekdays=["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
	let currentDate=new Date().getDay();
	let place=document.querySelector(".place");
	place.innerHTML = weekdays[currentDate];
});
//year
document.querySelector("#month").addEventListener("click",()=>{
	let mounths=["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "sep", "Oct", "Nov", "Dec"];
	let currentMonth=new Date().getMonth();
	let point=document.querySelector(".month");
	point.innerHTML=mounths[currentMonth];
});
document.querySelector("#year").addEventListener("click",()=>{
	let year=new Date().getFullYear();
	let pl=document.querySelector(".year");
	pl.innerHTML=year;
});
});
document.querySelector("div").style.position="absolute";
document.querySelector("div").style.top="50%";
document.querySelector("div").style.left="50%";