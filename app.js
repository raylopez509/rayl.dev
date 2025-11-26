import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.resolve('public/projects.html'));
});

app.get('/resume', (req, res) => {
  res.sendFile(path.resolve('public/resume.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
