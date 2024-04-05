// js du popup pour le  button ajouter
document.getElementById("open-popup").addEventListener("click", function () {
  document.getElementById("popup-container").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup-container").style.display = "none";
});

document
  .getElementById("task-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    var task = document.getElementById("task-input").value;
    var date = document.getElementById("date-input").value;
    var priority = document.getElementById("priority-select").value;

    // Afficher les valeurs dans la console (vous pouvez faire autre chose avec ces valeurs)
    console.log("Tâche :", task);
    console.log("Date d'échéance :", date);
    console.log("Priorité :", priority);

    // Fermer la fenêtre popup
    document.getElementById("popup-container").style.display = "none";

    // Réinitialiser le formulaire
    document.getElementById("task-form").reset();

    // Stocker les données dans localStorage
    localStorage.setItem("newTask", JSON.stringify({ task, date, priority }));

    // Rediriger vers page-tous.html
    // window.location.href = "./page-tous.html";
  });

//-------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les données de localStorage
  var newTaskData = localStorage.getItem("newTask");

  if (newTaskData) {
    var { task, date, priority } = JSON.parse(newTaskData);

    // Créer un élément pour afficher la nouvelle tâche
    var newTaskElement = document.createElement("div");
    newTaskElement.classList.add("task-item");
    newTaskElement.innerHTML = `
      <h3>${task}</h3>
      <p>Date d'échéance : ${date}</p>
      <p>Priorité : ${priority}</p>
    `;

    // Ajouter l'élément créé au conteneur sur la page
    var pageTousContainer = document.getElementById("page-tous-container");
    if (pageTousContainer) {
      pageTousContainer.appendChild(newTaskElement);
    }

    // Effacer les données de localStorage une fois traitées
    localStorage.removeItem("newTask");
  }
});

//--------------------
// Enregistrer les tâches dans localStorage
localStorage.setItem("tasks", JSON.stringify(tasksArray));

// Récupérer les tâches depuis localStorage
var tasksData = localStorage.getItem("tasks");
var tasksArray = tasksData ? JSON.parse(tasksData) : [];

// Afficher les tâches récupérées sur la page
tasksArray.forEach(function (taskData) {
  var newTaskElement = createTaskElement(taskData);
  pageTousContainer.appendChild(newTaskElement);
});

////////////////////////////////////////////////////////
