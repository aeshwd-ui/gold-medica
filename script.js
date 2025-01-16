// Array to store doctor details
const doctors = [
  {
    id: 1,
    name: "Dr. Vivek Jindal",
    profession: "MD Medicine & Physician",
    experience: "15 years",
    degree: "MBBS, MD",
    details: "Specializes in internal medicine and patient care.",
    img: "images/doctors/doctor1.jpeg",
  },
  {
    id: 2,
    name: "Dr. Preeti Jindal",
    profession: "Gynaecologist & Infertility Specialist",
    experience: "12 years",
    degree: "MBBS, DGO",
    details: "Expert in women's health and infertility treatment.",
    img: "images/doctors/doctor2.jpeg",
  },
  {
    id: 3,
    name: "Dr. Sumit Bansal",
    profession: "DCH & DNB (Paediatrics)",
    experience: "10 years",
    degree: "MBBS, DCH, DNB",
    details: "Cares for the health and development of children.",
    img: "images/doctors/doctor3.jpeg",
  },
  {
    id: 4,
    name: "Dr. Rachan Kathpaul",
    profession: "MS - Gastroenterology",
    experience: "14 years",
    degree: "MBBS, MS",
    details: "Specialist in treating gastrointestinal disorders.",
    img: "images/doctors/doctor5.jpeg",
  },
  {
    id: 5,
    name: "Dr. Ashu Gupta",
    profession: "DM Cardiologist",
    experience: "18 years",
    degree: "MBBS, MD, DM",
    details: "Specialist in heart-related conditions and surgeries.",
    img: "images/doctors/doctor6.jpeg",
  },
  {
    id: 6,
    name: "Ms. Sanjana Goyal",
    profession: "Consultant Dietitian",
    experience: "8 years",
    degree: "BSc, MSc (Nutrition)",
    details: "Provides personalized diet plans for optimal health.",
    img: "images/doctors/doctor7.jpeg",
  },
  {
    id: 7,
    name: "Dr. Heena Goyal",
    profession: "MD, Anesthesia Specialist",
    experience: "11 years",
    degree: "MBBS, MD",
    details: "Expert in anesthetic procedures and patient safety.",
    img: "images/doctors/doctor8.jpeg",
  },
  {
    id: 8,
    name: "Dr. Tarun Garg",
    profession: "MS - Spine & Brain Surgeon",
    experience: "20 years",
    degree: "MBBS, MS, MCh",
    details: "Performs complex spine and brain surgeries.",
    img: "images/doctors/doctor9.jpeg",
  },
  {
    id: 9,
    name: "Dr. Antim",
    profession: "Dermatologist",
    experience: "9 years",
    degree: "MBBS, MD",
    details: "Specialist in skin treatments and cosmetology.",
    img: "images/doctors/doctor10.jpeg",
  },
  {
    id: 10,
    name: "Dr. Ekta",
    profession: "Physiotherapist",
    experience: "7 years",
    degree: "BPT, MPT",
    details: "Helps patients recover through physical therapy.",
    img: "images/doctors/doctor11.jpeg",
  },
];


// Add event listeners to all buttons
document.querySelectorAll(".doctor-card button").forEach((button, index) => {
  button.addEventListener("click", () => {
    // Save doctor details to localStorage
    localStorage.setItem("selectedDoctor", JSON.stringify(doctors[index]));
    // Navigate to the profile page
    window.location.href = "doctor-profile.html";
  });
});




// ----------------------------------------------------------------------  //

/* FAQS Section */

$(function() {

	"use strict";

	$(".section-faq .questions .active .answer").slideDown();

	$(".section-faq .questions .single-question > div").on("click", function() {
		$(".section-faq .questions .single-question .answer").slideUp();
		if($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
		}
		else {
			$(".section-faq .questions .single-question").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next(".answer").slideDown();
		}
	});

});



















// --------------------------------------------------------------------------------- //

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


/* Facilities Toggle */

function toggleDescription() {
    const desc = document.getElementById("description");
    const btn = document.querySelector(".toggle-btn");

    if (desc.classList.contains("collapsed")) {
      desc.classList.remove("collapsed");
      desc.classList.add("expanded");
      btn.textContent = "View Less";
    } else {
      desc.classList.remove("expanded");
      desc.classList.add("collapsed");
      btn.textContent = "View More";
    }
  }



 

 


  
  


