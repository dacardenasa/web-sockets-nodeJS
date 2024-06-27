const socket = io();
const labelOnline = document.querySelector("#labelOnline");
const labelOffline = document.querySelector("#labelOffline");
const textMessage = document.querySelector("#textMessage");
const submitButton = document.querySelector("#submitButton");

socket.on("connect", () => {
  labelOffline.style.display = "none";
  labelOnline.style.display = "";
});

socket.on("disconnect", () => {
  labelOffline.style.display = "";
  labelOnline.style.display = "none";
});

socket.on("sendMessage", (payload) => {
  console.info(payload);
});

submitButton.addEventListener("click", () => {
  const message = textMessage.value;
  const payload = {
    message,
    date: new Date().getTime(),
    id: "123abc"
  };
  socket.emit("sendMessage", payload, (id) => {
    console.info(id);
  });
});
