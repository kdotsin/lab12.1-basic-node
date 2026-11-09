import e from "express";
import { url } from "inspector";
import path from "path";
import { fileURLToPath } from "url";

const app = e();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(e.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})