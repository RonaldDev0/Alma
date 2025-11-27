/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Script para generar iconos de PWA desde una imagen fuente
 * 
 * Uso:
 * 1. Coloca tu imagen fuente (icon-source.png) en la carpeta public/
 * 2. Ejecuta: node scripts/generate-icons.js
 * 
 * Requiere: npm install sharp --save-dev
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const sourceImage = path.join(__dirname, '../public/icon-source.png')
const outputDir = path.join(__dirname, '../public')

// Tamaños de iconos a generar
const iconSizes = [
  { size: 192, name: 'icon-192x192.png', maskable: false },
  { size: 192, name: 'icon-192x192-maskable.png', maskable: true },
  { size: 512, name: 'icon-512x512.png', maskable: false },
  { size: 512, name: 'icon-512x512-maskable.png', maskable: true },
  { size: 180, name: 'apple-touch-icon.png', maskable: false }
]

async function generateIcons() {
  // Verificar que existe la imagen fuente
  if (!fs.existsSync(sourceImage)) {
    console.error('❌ Error: No se encontró icon-source.png en la carpeta public/')
    console.log('\n📝 Pasos:')
    console.log('1. Crea o descarga una imagen cuadrada de alta calidad (mínimo 512x512px)')
    console.log('2. Nómbrala "icon-source.png"')
    console.log('3. Colócala en la carpeta public/')
    console.log('4. Vuelve a ejecutar este script')
    process.exit(1)
  }

  console.log('🎨 Generando iconos de PWA...\n')

  try {
    for (const icon of iconSizes) {
      const outputPath = path.join(outputDir, icon.name)
      
      if (icon.maskable) {
        // Para iconos maskable, crear con padding (80% del tamaño)
        const padding = Math.floor(icon.size * 0.1) // 10% de padding en cada lado
        const contentSize = icon.size - (padding * 2)
        
        await sharp(sourceImage)
          .resize(contentSize, contentSize, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .extend({
            top: padding,
            bottom: padding,
            left: padding,
            right: padding,
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .resize(icon.size, icon.size)
          .png({ quality: 100, compressionLevel: 9 })
          .toFile(outputPath)
      } else {
        // Para iconos normales, redimensionar directamente
        await sharp(sourceImage)
          .resize(icon.size, icon.size, {
            fit: 'cover',
            position: 'center'
          })
          .png({ quality: 100, compressionLevel: 9 })
          .toFile(outputPath)
      }
      
      console.log(`✅ Generado: ${icon.name} (${icon.size}x${icon.size}px)`)
    }
    
    console.log('\n✨ ¡Iconos generados exitosamente!')
    console.log('\n📋 Próximos pasos:')
    console.log('1. Revisa los iconos en la carpeta public/')
    console.log('2. Si están bien, puedes eliminar icon-source.png')
    console.log('3. Reconstruye la app: npm run build')
    
  } catch (error) {
    console.error('❌ Error al generar iconos:', error.message)
    process.exit(1)
  }
}

generateIcons()

