const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

let initial_path = path.join(__dirname, 'public');

const app = express();
app.use(express.static(initial_path));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.sendFile(path.join(initial_path, 'home.html'));
})

app.get('/editor', (req, res) => {
  res.sendFile(path.join(initial_path, 'editor.html'))
})

// upload link

app.post('/upload', (req, res) => {
  let file = req.files.image;
  let date = new Date();
  //adds the date, time and filename to get a unique image name
  let imageName = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = `public/uploads/${imageName}`;

  // create upload
  file.mv(path, (err, result) => {
    if (err) {
      throw err
    } else {
      // the image upload path
      res.json(`uploads/${imageName}`)
    }
  })
})

app.listen('3000', () => {
  console.log('listening on port 3000...')
})