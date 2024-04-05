// --------------------------
document.addEventListener("DOMContentLoaded", function () {
  var pageTousContainer = document.getElementById("page-tous-container");
  var taskCountElement = document.querySelector("#task-count h1");

  // Fonction pour créer un élément de tâche avec des actions
  function createTaskElement(taskData) {
    var { task, date, priority } = taskData;

    // Créer un élément pour afficher la nouvelle tâche
    var newTaskElement = document.createElement("div");
    newTaskElement.classList.add("task-item");
    newTaskElement.innerHTML = `
          <h3>${task}</h3>
            <p>Date d'échéance : ${date}</p>
            <p>Priorité : ${priority}</p>
            <i class="fas fa-trash delete-btn" title="Supprimer"></i>
            <i class="fas fa-edit edit-btn" title="Modifier"></i>
            <i class="fas fa-check-circle complete-btn" title="Terminer la tâche"></i>
        `;

    // Ajouter des événements aux boutons pour gérer les actions
    var deleteButton = newTaskElement.querySelector(".delete-btn");
    var editButton = newTaskElement.querySelector(".edit-btn");
    var completeButton = newTaskElement.querySelector(".complete-btn");

    deleteButton.addEventListener("click", function () {
      // Supprimer la tâche de l'interface
      pageTousContainer.removeChild(newTaskElement);
      // Vous pouvez également ajouter du code ici pour supprimer la tâche de votre système de stockage (localStorage, base de données, etc.)
    });

    editButton.addEventListener("click", function () {
      // Mettre en œuvre la logique de modification de la tâche ici
      // Par exemple, ouvrir un formulaire de modification dans un popup
      alert("Fonctionnalité de modification à implémenter !");
    });

    completeButton.addEventListener("click", function () {
      // Mettre en œuvre la logique de marquage de la tâche comme terminée ici
      // Par exemple, mettre à jour le style de la tâche pour indiquer qu'elle est terminée
      newTaskElement.style.textDecoration = "line-through";
      newTaskElement.style.opacity = "0.6";
    });

    return newTaskElement;
  }

  // Récupérer les données de localStorage
  var newTaskData = localStorage.getItem("newTask");

  if (pageTousContainer && newTaskData) {
    var taskData = JSON.parse(newTaskData);
    var newTaskElement = createTaskElement(taskData);

    // Ajouter l'élément créé au conteneur sur la page
    pageTousContainer.appendChild(newTaskElement);

    // Effacer les données de localStorage une fois traitées
    localStorage.removeItem("newTask");
  }
});
