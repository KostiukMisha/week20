function sendMessage() {
    var nicknameInput = document.getElementById('nickname-input');
    var messageInput = document.getElementById('message-input');
    var chatMessages = document.getElementById('chat-messages');

    var nickname = nicknameInput.value;
    var messageText = messageInput.value;

    if (nickname.trim() !== '' && messageText.trim() !== '') {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = nickname + ': ' + messageText;

        chatMessages.appendChild(messageElement);

        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}