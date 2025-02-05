//import { displayAgenda } from "./display.js"; = insert top script.js
 
// import { getData } from "./storage.js";

// Function to display the agenda for the selected user
export function displayAgenda(userId) {
   console.log("displayAgenda() called for userId:", userId); // Debugging

   const scheduleBody = document.getElementById("schedule-body");
   console.log("scheduleBody element:", scheduleBody); // Debugging

   scheduleBody.innerHTML = ""; // Clear previous content
   console.log("scheduleBody.innerHTML cleared."); // Debugging

   const agenda = getData(userId); // Fetch agenda for selected user
   console.log(`Agenda for User ${userId}:`, agenda); // Debugging

   if (!agenda || agenda.length === 0) {
      // No agenda, show a message
      scheduleBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center;">No agenda found for this user.</td>
      </tr>
    `;
      console.log("No agenda found, displaying message."); // Debugging
      return;
   }

   // If agenda exists, display it in the table
   agenda.forEach((topic) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${topic.name}</td>
      <td>${new Date(topic.startDate).toLocaleDateString()}</td>
      <td>${new Date(topic.oneWeek).toLocaleDateString()}</td>
      <td>${new Date(topic.oneMonth).toLocaleDateString()}</td>
      <td>${new Date(topic.threeMonths).toLocaleDateString()}</td>
      <td>${new Date(topic.sixMonths).toLocaleDateString()}</td>
      <td>${new Date(topic.oneYear).toLocaleDateString()}</td>
    `;
      scheduleBody.appendChild(row);
      console.log("Added row to scheduleBody:", row); // Debugging
   });
   console.log("displayAgenda() completed for userId:", userId); // Debugging
}
