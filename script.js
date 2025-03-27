// Handling Patient Data
document.getElementById('patientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const dob = document.getElementById('dob').value;
    const medicalHistory = document.getElementById('medicalHistory').value;

    const patientData = { name, dob, medicalHistory };
    addPatientToList(patientData);
    document.getElementById('patientForm').reset();
});

function addPatientToList(patientData) {
    const li = document.createElement('li');
    li.textContent = `${patientData.name}, DOB: ${patientData.dob}`;
    document.getElementById('patientList').appendChild(li);
}

// Handling Reminders
document.getElementById('reminderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const reminderText = document.getElementById('reminderText').value;
    const reminderTime = document.getElementById('reminderTime').value;

    const reminder = { reminderText, reminderTime };
    addReminderToList(reminder);
    document.getElementById('reminderForm').reset();
});

function addReminderToList(reminder) {
    const li = document.createElement('li');
    li.textContent = `${reminder.reminderText} at ${reminder.reminderTime}`;
    document.getElementById('reminderItems').appendChild(li);
}

// Handling Medicines
document.getElementById('medicineForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const medicineName = document.getElementById('medicineName').value;
    const dosage = document.getElementById('dosage').value;

    const medicine = { medicineName, dosage };
    addMedicineToList(medicine);
    document.getElementById('medicineForm').reset();
});

function addMedicineToList(medicine) {
    const li = document.createElement('li');
    li.textContent = `${medicine.medicineName}, Dosage: ${medicine.dosage} mg`;
    document.getElementById('medicinesItems').appendChild(li);
}

// Handling Communication with Doctor
document.getElementById('sendMessage').addEventListener('click', function() {
    const message = document.getElementById('messageInput').value;
    const li = document.createElement('li');
    li.textContent = `You: ${message}`;
    document.getElementById('chatMessages').appendChild(li);
    document.getElementById('messageInput').value = '';
});

// Virtual Health Assistant
document.getElementById('askAssistant').addEventListener('click', function() {
    const query = document.getElementById('assistantQuery').value;
    const response = `Answer to: ${query}`; // Mock response
    document.getElementById('responseText').textContent = response;
    document.getElementById('assistantQuery').value = '';
});
