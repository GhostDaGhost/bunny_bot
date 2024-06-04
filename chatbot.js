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

    function getResponse(){
      const response=[
        "I am sorry, I can't help with the question.Transfering you to a live assistant."
      ];
      return response[Math.floor(Math.random()*response.length)];
    }
  
    async function handleSendMessage() {
      const userInput = inputField.value.trim().toLowerCase();
      if (userInput === "") return;
      
      const predefinedOption1 = ['help','bunnies','tech','general'];
      const predefinedOption2 = ['hi','hello','hey','how are you','thanks','thank you','bye','bye bye','goodbye'];

      if (predefinedOption1.includes(userInput)){
        addMessageToChat("user",userInput);
        handleUserOption(userInput);
      }
      else if (predefinedOption2.includes(userInput)){
        addMessageToChat("user",userInput);
        if(userInput==='hi'||userInput==='hello'||userInput==='hey'){

        addMessageToChat("bot","Hi,I am Bunny Bot! How can I assist you today?")
        }
        else if(userInput==='how are you'){
          
          addMessageToChat("bot","I am doing well! How can I assist you today?")
        }
        else if(userInput==='thanks'||userInput==='thank you'){
          
          addMessageToChat("bot","You are so welcome!")
        }
        else if(userInput==='bye'||userInput==='bye bye'||userInput==='goodbye'){
          
          addMessageToChat("bot","Goodbye,have a great day!")
        }}

      else{
      addMessageToChat("user", userInput);
      addMessageToChat("bot",getResponse());
    
      }
      
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

