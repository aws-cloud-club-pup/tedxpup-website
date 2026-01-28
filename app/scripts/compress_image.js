/**
 * Compress a specific WebP image to reduce file size
 * Usage: node compress_image.js <image_path> <target_reduction_percent>
 * Example: node compress_image.js public/sponsors/gold/5-icpep-logo.webp 70
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function compressImage(imagePath, targetReductionPercent = 70) {
  try {
    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      console.error(`Error: File '${imagePath}' does not exist`);
      return;
    }

    // Get original file size
    const originalSize = fs.statSync(imagePath).size;
    console.log(`Original file: ${imagePath}`);
    console.log(`Original size: ${originalSize.toLocaleString()} bytes`);
    console.log(`Target reduction: ${targetReductionPercent}%`);
    console.log('-'.repeat(50));

    // Estimate quality based on target reduction
    // Higher reduction = lower quality
    let quality;
    if (targetReductionPercent >= 80) quality = 30;
    else if (targetReductionPercent >= 70) quality = 50;
    else if (targetReductionPercent >= 60) quality = 60;
    else if (targetReductionPercent >= 50) quality = 70;
    else if (targetReductionPercent >= 40) quality = 75;
    else quality = 80;

    console.log(`Compressing with quality: ${quality}...`);

    const parsedPath = path.parse(imagePath);
    const tempPath = path.join(parsedPath.dir, `${parsedPath.name}_temp${parsedPath.ext}`);

    // Compress the image
    await sharp(imagePath)
      .webp({ quality: quality, effort: 6 })
      .toFile(tempPath);

    const finalSize = fs.statSync(tempPath).size;
    const finalReduction = ((originalSize - finalSize) / originalSize) * 100;

    console.log('\n' + '-'.repeat(50));
    console.log(`New size: ${finalSize.toLocaleString()} bytes`);
    console.log(`Actual reduction: ${finalReduction.toFixed(1)}%`);
    console.log(`Saved: ${(originalSize - finalSize).toLocaleString()} bytes`);

    // Replace original with compressed version
    fs.unlinkSync(imagePath);
    fs.renameSync(tempPath, imagePath);

    console.log('\n✅ Image compressed successfully!');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node compress_image.js <image_path> [target_reduction_percent]');
  console.log('');
  console.log('Example: node compress_image.js public/sponsors/gold/5-icpep-logo.webp 70');
  console.log('Default reduction: 70%');
  process.exit(1);
}

const imagePath = args[0];
const targetReduction = args[1] && !isNaN(args[1]) ? parseInt(args[1]) : 70;

compressImage(imagePath, targetReduction)
  .then(() => {
    console.log('\n✨ Done!');
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

export { compressImage };
