/**
 * Convert all images in a folder to WebP format
 * Usage: node convert_to_webp.js <folder_path> [quality] [--keep-original]
 * Defaults: quality=100, deletes originals
 * Example: node convert_to_webp.js app/public/sponsors
 * Example: node convert_to_webp.js app/public/sponsors 90 --keep-original
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supported image formats
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.gif'];

/**
 * Get all image files in a directory recursively
 */
function getImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recursively get files from subdirectories
      results = results.concat(getImageFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        results.push(filePath);
      }
    }
  });

  return results;
}

/**
 * Format bytes to human-readable format
 */
function formatBytes(bytes) {
  return bytes.toLocaleString();
}

/**
 * Convert images to WebP
 */
async function convertToWebP(folderPath, quality = 100, deleteOriginal = true) {
  console.log(`Converting images in: ${folderPath}`);
  console.log(`Quality: ${quality}`);
  console.log(`Delete originals: ${deleteOriginal}`);
  console.log('-'.repeat(50));

  // Check if folder exists
  if (!fs.existsSync(folderPath)) {
    console.error(`Error: Folder '${folderPath}' does not exist`);
    return;
  }

  // Get all image files
  const imageFiles = getImageFiles(folderPath);

  if (imageFiles.length === 0) {
    console.log(`No images found in '${folderPath}'`);
    return;
  }

  console.log(`Found ${imageFiles.length} images to convert\n`);

  let convertedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const imgPath of imageFiles) {
    try {
      const parsedPath = path.parse(imgPath);
      const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

      // Skip if WebP already exists
      if (fs.existsSync(webpPath)) {
        console.log(`⏭️  Skipped (already exists): ${parsedPath.base}`);
        skippedCount++;
        continue;
      }

      // Get original file size
      const originalSize = fs.statSync(imgPath).size;

      // Convert to WebP
      await sharp(imgPath)
        .webp({ quality: quality, effort: 6 })
        .toFile(webpPath);

      // Get WebP file size
      const webpSize = fs.statSync(webpPath).size;
      const reduction = ((originalSize - webpSize) / originalSize) * 100;

      console.log(`✅ Converted: ${parsedPath.base} → ${parsedPath.name}.webp`);
      console.log(`   Size: ${formatBytes(originalSize)} bytes → ${formatBytes(webpSize)} bytes (${reduction.toFixed(1)}% reduction)`);

      convertedCount++;

      // Delete original if requested
      if (deleteOriginal) {
        fs.unlinkSync(imgPath);
        console.log(`   🗑️  Deleted original: ${parsedPath.base}`);
      }

    } catch (error) {
      console.error(`❌ Error converting ${path.basename(imgPath)}: ${error.message}`);
      errorCount++;
    }
  }

  console.log('-'.repeat(50));
  console.log('Conversion complete!');
  console.log(`✅ Converted: ${convertedCount}`);
  console.log(`⏭️  Skipped: ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node convert_to_webp.js <folder_path> [quality] [--keep-original]');
  console.log('');
  console.log('Defaults: quality=100, deletes originals (use --keep-original to keep them)');
  console.log('');
  console.log('Examples:');
  console.log('  node convert_to_webp.js app/public/sponsors');
  console.log('  node convert_to_webp.js app/public/sponsors 90');
  console.log('  node convert_to_webp.js app/public/sponsors 100 --keep-original');
  process.exit(1);
}

const folderPath = args[0];
const quality = args[1] && !isNaN(args[1]) ? parseInt(args[1]) : 100;
const deleteOriginal = args.includes('--keep-original') ? false : true;

convertToWebP(folderPath, quality, deleteOriginal)
  .then(() => {
    console.log('\n✨ Done!');
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

export { convertToWebP };

