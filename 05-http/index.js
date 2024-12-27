import http from "http";

const PORT = 3000;

// Створення HTTP-сервера
const server = http.createServer(function (req, res) {
  console.log("Server received request...");

  // Встановлення заголовків відповіді
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Відправка відповіді
  res.end("Server is alive.");
});

// Початок прослуховування порта
server.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
