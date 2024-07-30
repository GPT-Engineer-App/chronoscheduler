function rearrangeAppointments() {
  const appointmentContainer = document.querySelector('.appointments-container');
  if (!appointmentContainer) return;

  const appointments = Array.from(appointmentContainer.children);
  
  appointments.sort((a, b) => {
    const durationA = parseInt(a.querySelector('.duration').textContent);
    const durationB = parseInt(b.querySelector('.duration').textContent);
    return durationA - durationB;
  });

  appointments.forEach(appointment => appointmentContainer.appendChild(appointment));
}

// Run the rearrangement when the page loads
window.addEventListener('load', rearrangeAppointments);

// Also run it periodically in case of dynamic content updates
setInterval(rearrangeAppointments, 2000);