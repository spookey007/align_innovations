import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { create } from 'xmlbuilder2'
import fs from 'fs';
import { fileURLToPath } from 'url';
import { testConnection } from './db/index.js'; // Import the testConnection function
import routes from './routes/index.js'; // Import your routes

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config(); // Load environment variables from .env file

app.use(cors({
  origin: '*', // Allows requests from any origin
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static file serving
app.use(express.static(path.join(__dirname, '../dist')));

// Use routes before the catch-all
app.use('/api', routes);

app.use((req, res, next) => {
  console.log('Main middleware reached');
  next();
});

// Catch-all for frontend routing (should be last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', "index.html"));
});

const generateSitemap = async () => {
  const baseUrl = process.env.BASE_URL;

  // Example static and dynamic URLs (modify as needed)
  const urls = [
    { loc: '/', priority: '1.0' },
    { loc: '/about', priority: '0.8' },
    { loc: '/contact', priority: '0.8' },
    { loc: '/practice-areas', priority: '0.7' }
  ];

  // Create XML structure
  const xml = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  urls.forEach(({ loc, priority }) => {
    xml.ele('url')
      .ele('loc').txt(`${baseUrl}${loc}`).up()
      .ele('priority').txt(priority).up()
      .up();
  });

  const xmlString = xml.end({ prettyPrint: true });

  // Save the sitemap.xml file in the public folder
  const sitemapPath = path.join(__dirname, '../public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xmlString, 'utf8');
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
};

generateSitemap();
// Test the database connection
testConnection(); // Call the function to test the database connection


export default app;