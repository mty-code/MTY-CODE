const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});


<script>
  document.querySelectorAll(".card-buttons button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = document.querySelector(".card");
      const target = btn.getAttribute("data-section");

      card.dataset.state = target;

      document.querySelectorAll(".card-buttons button").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      document.querySelectorAll(".card-section").forEach(sec => sec.classList.remove("is-active"));
      document.querySelector(target).classList.add("is-active");
    });
  });
</script>
