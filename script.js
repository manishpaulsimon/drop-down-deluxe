function dropDown() {
  const navBar = document.querySelectorAll(".nav-bar");
  const list = document.querySelectorAll(".list");

  navBar.forEach((nav) =>
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = nav.getAttribute("data-target");
      const targetList = document.getElementById(targetId);

      // check if the target list is already active
      const isActive = targetList.classList.contains("active");

      list.forEach((li) => li.classList.remove("active"));

      if (!isActive) {
        targetList.classList.toggle("active");
      }
    })
  );
}

module.exports = dropDown;