const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CSR Example</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          document.getElementById("root").innerHTML = "Hello from CSR!";
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
