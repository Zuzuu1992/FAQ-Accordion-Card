const section = document.querySelector(".line");
const sections = document.querySelectorAll(".line");

console.log(sections);
sections.forEach((section) => {
  const question = section.querySelector(".question");
  const heading = section.querySelector(".el");
  const answer = section.querySelector(".answer");
  const arrow = section.querySelector(".down-arrow");
  heading.addEventListener("click", function (e) {
    sections.forEach((section) => {
      if (section !== e.currentTarget.parentElement) {
        section.querySelector(".answer").classList.remove("active");
      }
    });

    sections.forEach((section) => {
      if (section !== e.currentTarget.parentElement) {
        section.querySelector(".down-arrow").classList.remove("rotate");
      }
    });

    sections.forEach((section) => {
      if (section !== e.currentTarget.parentElement) {
        section.querySelector(".question").classList.remove("bold");
      }
    });

    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
    question.classList.toggle("bold");
  });
});
