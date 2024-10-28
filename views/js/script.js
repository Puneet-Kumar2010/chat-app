const socket = io();
const Input = document.getElementById("inputField");
const messageArea = document.querySelector(".main-message");
let Name;

do {
    Name = prompt("Enter your Name");
} while (!Name);

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (Input.value.trim() !== "") {
            sendMessage(Input.value, Name);
        }
    }
});

const sendMessage = (text, user) => {
    let msg = {
        text: text,
        author: user
    };
    socket.emit('sendMsg', msg);
    Input.value = ""; // Clear input field after sending message
};

socket.on("receiveMsg", (data) => {
    const newMessage = document.createElement("div");
    const paragraph = document.createElement("p");
    if (data.author === Name) {
        paragraph.textContent = data.text;
        newMessage.appendChild(paragraph);
        newMessage.classList.add("go", "message");
    } else {
        paragraph.textContent = `${data.author} : ${data.text}`;
        newMessage.appendChild(paragraph);
        newMessage.classList.add("come", "message");
    }
    messageArea.appendChild(newMessage);
});


setInterval(()=>{
    messageArea.scrollTop = messageArea.scrollHeight;
},5)