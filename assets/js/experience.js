//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Design Company Founder",
    cardImage: "assets/images/experience-page/DevFellow_Logo.jpg",
    place: "DevFellow",
    time: "(, 2020 - present)",
    desp: "<li>Worked with customers to get their requirement and deploy their desired website</li> <li>Formulated a successful business plan with a strong emphasis on growth and community needs. </li> <li>Oversaw sucessful website launch and continuing operation.</li>",
  },
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/logo-prmnt-symbol.svg",
    place: "Paramount Commerce",
    time: "(2019 - 2020)",
    desp: "<li>Recommended technical solutions and write technical specifications that meet business requirements and analyzed existing code to determine the functionality.</li><li>Delivered improvements and successfully migrated direct debit payment service from NET to JAVA and developed REST PI endpoints with the SQL database.</li><li>Analyzed defect metrics to ascertain trends and problem areas, developed instant debit payment service in Java and worked closely with the frontend and backend.</li><li>Estimated level of effort, time, and external dependencies for completion of various programming scenarios within 4 months paid internship.</li><li>Ensured code meets the functional intent of the requirements and seamlessly integrates with all components of the system.</li>",
  },
  {
    title: "Peer Educator",
    cardImage: "assets/images/experience-page/Dawson.png",
    place: "Dawson College",
    time: "(2016 - 2017)",
    desp:"<li>Tutor mathematics and conduct problem-solving sessions to sharpen student's skills</li><li>Motivated student to practice mental math and simple problem-solving techniques.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Chamedoon Customer Service",
    cardImage: "assets/images/experience-page/chamedoon.png",
    description:
      "Responsible for answering customers' questions and managing the data",
  },
  {
    title: "McGill University Peer Tutoring",
    cardImage: "assets/images/experience-page/mcgill.png",
    description:
      "Responsible for teaching calculus and basic programming to first year students",
  },
  {
    title: "Dawson College Problem Solving",
    cardImage: "assets/images/experience-page/dawsond.png",
    description:
      "Responsible for holding problem solving sessions for mathematics and physics.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


// const mentorshipcards = document.querySelector(".mentorship-cards");
// const mentor = [
//   {
//     title: "HakinCode",
//     image: "assets/images/experience-page/hakin.png",
//     time: "06/2020 - 08/2020",
//     desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
//   },
//   {
//     title: "Google Summer of Code",
//     image: "assets/images/experience-page/gsoc.png",
//     time: "03/2020 - 08/2020",
//     desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
//   },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, time, desp}) =>
//       (output += `        
//       <div class="column mentorshipCard"> 
//       <div class="card card2 mentorshipCardCover">
//         <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
//         <div class="information">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class=""sub-title">${time}</p>
//         </div>
//         <div class="more-information">
//         <ul class="list-group list-group-flush p-0 right-aligned">
//           <div class="list-group-item card2 disclaimer">${desp}</div>
//         </ul>
//         </div>
//         </div>
//       </div>
//       </div>
//       `)
//   );
//   mentorshipcards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
