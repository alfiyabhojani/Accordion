const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

// creating element
function showFaq(parentEle) {
  const lastChild = parentEle.lastChild;
  const currentState = lastChild.style.display;
  lastChild.style.display = currentState === "block" ? "none" : "block";

  const newState = currentState === "block" ? "none" : "block";
  const btn = parentEle.firstChild.lastChild;
  btn.innerText = newState === "block" ? "-" : "+";
}

function createFaq(id) {
  let element = document.createElement("div");
  let head = document.createElement("div");
  let title = document.createElement("h3");
  let button = document.createElement("div");
  let answer = document.createElement("p");

  element.setAttribute("class", "faq");
  head.setAttribute("class", "faq_header");
  button.setAttribute("class", "show_btn");
  button.setAttribute("id", "show_hide");
  answer.setAttribute("class", "hidden");

  button.innerText = "+ ";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";

  let elementComplete = {
    element,
    title,
    head,
    button,
    answer,
  };
  return elementComplete;
}

// adding element
faqData.forEach((ele) => {
  let mainFaq = createFaq(ele.id);
  mainFaq.title.innerText = ele.question;
  mainFaq.answer.innerText = ele.answer;
  mainFaq.element.setAttribute("id", ele.id);
  accordianBody.append(mainFaq.element);

  mainFaq.element.append(mainFaq.head);
  mainFaq.head.append(mainFaq.title);
  mainFaq.head.append(mainFaq.button);
  mainFaq.element.append(mainFaq.answer);
});

let btn = document.querySelectorAll(".show_btn");

btn.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    showFaq(ele.parentNode.parentElement);
  });
});

function btnStatusUpdate() {}
