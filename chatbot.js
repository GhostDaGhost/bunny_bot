document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("chatbot-input");
    const sendButton = document.getElementById("send-button");
    const messagesContainer = document.getElementById("chatbot-messages");
    const optionsContainer = document.getElementById("chatbot-options");
  
    function addMessageToChat(role, text) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("chatbot-message", role);
      messageElement.textContent = text;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    function addOptionsToChat(options) {
      optionsContainer.innerHTML = ""; // Clear previous options
      options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("chatbot-option");
        button.textContent = option.text;
        button.addEventListener("click", () => {
          addMessageToChat("user", option.text);
          handleUserOption(option.value);
        });
        optionsContainer.appendChild(button);
      });
    }
  
    function handleUserOption(option) {
      let response;
      switch(option) {
        case 'help':
          response = "Sure, I can help you with that. Here are some topics: About Our Bunnies, Technical Support, General Inquiries.";
          addOptionsToChat([
            { text: 'About Our Bunnies', value: 'about_our_bunnies' },
            { text: 'Technical Support', value: 'tech_support' },
            { text: 'General Inquiries', value: 'general' }
          ]);
          break;
        case 'about_our_bunnies':
          response = "For questions about our bunnies, please contact through our email: cozybuns@info.com";
          break;
        case 'tech_support':
          response = "For technical support, please describe your issue and our support team will assist you.";
          break;
        case 'general':
          response = "For general inquiries, please contact us at info@example.com.";
          break;
        default:
          response = "I'm not sure how to help with that.";
          break;
      }
      addMessageToChat("bot", response);
    }
  
    async function handleSendMessage() {
      const userInput = inputField.value.trim();
      if (userInput === "") return;
  
      addMessageToChat("user", userInput);
      inputField.value = "";
  
     
    }
  
    sendButton.addEventListener("click", handleSendMessage);
  
    inputField.addEventListener("keypress", async (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSendMessage();
      }
    });
  
    addMessageToChat("bot", "Hi! Welcome to Cozy Buns. How can I assist you today?");
    addOptionsToChat([
      { text: 'I need help', value: 'help' },
      { text: 'About Our Bunnies', value: 'about_our_bunnies' },
      { text: 'Technical Supprt', value: 'tech_support' },
      { text: 'General Inquiry', value: 'general' }
    ]);
  });

  