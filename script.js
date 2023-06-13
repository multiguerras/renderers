const apiBaseUrl = "http://25.41.43.195:8080/api/v3"; // Reemplaza "tu_ip_personalizada" con tu dirección IP

// Obtener el contenedor de la lista de ordenadores
const computersList = document.getElementById("computers-list");

// Generar la lista de ordenadores y sus opciones de estado
fetch(`${apiBaseUrl}/worker-mgt/workers`)
    .then(response => response.json())
    .then(computers => {
        computers.forEach(computer => {
            // Crear el elemento de ordenador y mostrar la información
            const computerElement = document.createElement("div");
            computerElement.className = "computer";
            computerElement.setAttribute("data-id", computer.id);

            const nameElement = document.createElement("span");
            nameElement.textContent = computer.name;
            computerElement.appendChild(nameElement);

            const statusElement = document.createElement("span");
            statusElement.className = "computer-status";
            statusElement.textContent = computer.status;
            computerElement.appendChild(statusElement);

            const actionsElement = document.createElement("div");
            actionsElement.className = "computer-actions";

            const shutdownButton = createActionButton("Apagar", () => changeStatus(computer.id, "Apagado"));
            actionsElement.appendChild(shutdownButton);

            const sleepButton = createActionButton("Suspender", () => changeStatus(computer.id, "En suspensión"));
            actionsElement.appendChild(sleepButton);

            const wakeUpButton = createActionButton("Despertar", () => changeStatus(computer.id, "Encendido"));
            actionsElement.appendChild(wakeUpButton);

            computerElement.appendChild(actionsElement);

            // Agregar el elemento de ordenador a la lista
            computersList.appendChild(computerElement);
        });
    })
    .catch(error => {
        console.error(error);
    });

// Función para crear botones de acción
function createActionButton(label, onClick) {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
}

// Función para cambiar el estado de un ordenador
function changeStatus(computerId, newStatus) {
    fetch(`${apiBaseUrl}/workers/${computerId}/status`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus })
    })
    .then(response => response.json())
    .then(updatedComputer => {
        // Actualizar el estado mostrado en la interfaz
        const computerElement = document.querySelector(`.computer[data-id="${computerId}"]`);
        const statusElement = computerElement.querySelector(".computer-status");
        statusElement.textContent = updatedComputer.status;
    })
    .catch(error => {
        console.error(error);
    });
}
