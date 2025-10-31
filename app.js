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

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
