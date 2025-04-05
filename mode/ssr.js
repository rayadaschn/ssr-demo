const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SSR Example</title>
      </head>
      <body>
        <h1>Hello, SSR!</h1>
        <script>
          // SSR code here
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
