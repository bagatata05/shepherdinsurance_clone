import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceDir = path.resolve(__dirname, '..');

const assets = [
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/css/shepherd-00.webflow.shared.bf7ca9520.min.css", dest: "public/css/shepherd-shared.css" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/6967fcaec4a604c140d2daf8_Frame%202147227436.jpg", dest: "public/assets/og-image.jpg" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/6944715688a0692fb624f282_Frame%202147227429.png", dest: "public/favicon.png" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/6944717162f4506446a11947_Frame%202147227430.jpg", dest: "public/apple-touch-icon.jpg" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611a94fd27dcb7d92996f3_Shep-Side-Swipe_001.gif", dest: "public/assets/gifs/shep-side-swipe.gif" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611a9408bbbdfa752a5db8_Shep-Square_001.gif", dest: "public/assets/gifs/shep-square.gif" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611a94e4eaee353b11ad0b_Shep-Up_001.gif", dest: "public/assets/gifs/shep-up.gif" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611b396cd12b4ce90fabfe_Group%202147210670.webp", dest: "public/assets/images/group-2147210670.webp" },
  
  // Partner Logos
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6972a414648acf6787659bc2_home-logo-7.png", dest: "public/assets/logos/procore.png" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6972a3f1a7cf48a63d8e4179_home-logo-9.png", dest: "public/assets/logos/autodesk.png" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69725b586e1e0fd9b4efe2de_home-logo-5.avif", dest: "public/assets/logos/wtw.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69725a8b00c62ca739b3f277_home-logo-4.avif", dest: "public/assets/logos/usi.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6972a38b9033f2799776b92c_home-logo-8.avif", dest: "public/assets/logos/lockton.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69725a6498f6f1f6912b0711_home-logo-1.avif", dest: "public/assets/logos/shepherd-small.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6972a42408d2744920759769_home-logo-2.png", dest: "public/assets/logos/logo-2.png" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69725a411350aa409ab0ba2b_image%2064.avif", dest: "public/assets/logos/logo-64.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69725a34f4138ac841079cea_image%2068.avif", dest: "public/assets/logos/logo-68.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69725a0d193857303c34c2d7_image%2060.avif", dest: "public/assets/logos/logo-60.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6993191a6513c915db53a0f7_marsh-logo-blue%201.png", dest: "public/assets/logos/marsh.png" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6958569b4aabf55b43e338de_image%2069.avif", dest: "public/assets/logos/logo-69.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69585686849a15bf2c90e5af_image%2062.avif", dest: "public/assets/logos/logo-62.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69585676744862f8f7396b8c_image%2061.avif", dest: "public/assets/logos/logo-61.avif" },
  { url: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6958566eab89a28052d589f6_image%2059.avif", dest: "public/assets/logos/logo-59.avif" },

  // Section graphics & backgrounds
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69610f8e01715e065592a3a5_Rectangle%20191.webp", dest: "public/assets/images/underwriting-hero.webp" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696fcef56a3dcace0c796868_Speed%20that%20keeps%20pace.gif", dest: "public/assets/gifs/speed-keeps-pace.gif" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696fcef568e96e22921af758_Intelligence%20that%20rewards.gif", dest: "public/assets/gifs/intelligence-rewards.gif" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696fcef5cfacc948b12220a0_Single%20conected%20system.gif", dest: "public/assets/gifs/single-connected-system.gif" },
  
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/695acdd5ec64ef30d0795208_Rectangle%2062.webp", dest: "public/assets/images/industries-background.webp" },
  
  // Coverage Cards
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033b8a3f81c4c8dc954_Rectangle%2084.webp", dest: "public/assets/images/coverage-1.webp" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a32faf015d487b68_Rectangle%20269.webp", dest: "public/assets/images/coverage-2.webp" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033e71fcc4ed2a3ab81_Rectangle%20272.webp", dest: "public/assets/images/coverage-3.webp" },
  { url: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a5e7dcd7b19d41f1_Rectangle%20273.webp", dest: "public/assets/images/coverage-4.webp" }
];

async function downloadFile(url, destPath) {
  const fullDestPath = path.join(workspaceDir, destPath);
  
  // Ensure target folder exists
  fs.mkdirSync(path.dirname(fullDestPath), { recursive: true });
  
  console.log(`Downloading ${url} -> ${destPath}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: Status ${res.status}`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(fullDestPath, buffer);
    console.log(`Successfully saved ${destPath}`);
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
  }
}

async function run() {
  console.log("Starting asset downloads...");
  for (const asset of assets) {
    await downloadFile(asset.url, asset.dest);
  }
  console.log("Finished asset downloads!");
}

run();
