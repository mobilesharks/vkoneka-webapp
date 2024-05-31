import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// Define the /
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'pages/landing.html'));
});

app.get('/solution',(req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/solution.html'));
});

app.get('/business',(req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/business.html'));
});

app.get('/resources',(req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/404.html'));
});

app.get('/faqs',(req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/faqs.html'));
});

app.get('/tech_corner',(req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/tech_corner.html'));
});

app.get('/redirect',(req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/redirect.html'));
});

// Define the /privacy route
app.get('/privacy-policy', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages/privacy-policy.html'));
});

// Define the /general-terms route
app.get('/general-terms', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'general-terms.html'));
});

// Define the /download route
app.get('/download', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'download.html'));
});

// Define the /forgotten_password route
app.get('/forgotten_password', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'forgotten_password.html'));
});

// Define the /Phone route
const phoneDir = path.join(__dirname, 'Phone');

// Serve static files
app.use(express.static('Phone'));

// Dynamically create routes for each HTML file in Phone Dir
fs.readdir(phoneDir, (err, files) => {
  if (err) {
    console.error('Failed to list HTML files:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.html')) {
      // Create a route for each HTML file
      const route = file === 'index.html' ? '' : `/${file.replace('.html', '')}`;
      
      app.get('/Phone'+route, (req, res) => {
        res.sendFile(path.join(phoneDir, file));
      });

    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
