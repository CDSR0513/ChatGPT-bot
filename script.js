const sendButton = document.getElementById('send-button');
const userInput = document.querySelector('#user-input');
const chatLog = document.getElementById('chat-log');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== "") {
        appendMessage("사용자", message);
        userInput.value = "";
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
