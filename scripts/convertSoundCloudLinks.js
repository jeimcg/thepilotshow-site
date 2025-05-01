// scripts/convertSoundCloudLinks.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const tracks = [
  {
    title: 'Joanna (Ft. Kole)',
    link: 'https://soundcloud.com/dakota-homealone/joanna',
  },
  {
    title: 'Love (Ft. Rock Ali)',
    link: 'https://soundcloud.com/pilotboys/pilot-d-ft-rock-ali-love',
  },
  {
    title: 'Purple Rain Freestyle',
    link: 'https://soundcloud.com/dakota-homealone/purple-rain-freestyle',
  },
  {
    title: 'Mixtape 3: 2016 The Summer Mixtape',
    link: 'https://soundcloud.com/dakota-homealone/sets/the-summer',
  },
  {
    title: 'FTL Tape 2017-2018',
    link: 'https://soundcloud.com/ftl-tunez/sets/ftl-volume-1',
  }
]

const resolveSoundCloudUrl = async (url) => {
  try {
    const res = await fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`)
    if (!res.ok) throw new Error(`Failed to fetch for ${url}`)
    const data = await res.json()

    // SoundCloud returns iframe HTML — extract the track API link from `src` attr
    const match = data.html.match(/src="https:\/\/w.soundcloud.com\/player\/\?url=(.*?)"/)
    if (!match || !match[1]) return null

    const decodedUrl = decodeURIComponent(match[1])
    return decodedUrl
  } catch (err) {
    console.warn(`⚠️ Could not resolve: ${url}`)
    return null
  }
}

const convertToApiLinks = async () => {
  const results = []

  for (const track of tracks) {
    const apiLink = await resolveSoundCloudUrl(track.link)

    if (apiLink) {
      results.push({
        title: track.title,
        link: apiLink,
      })
      console.log(`✅ Converted: ${track.title}`)
    } else {
      console.warn(`❌ Failed to convert: ${track.title}`)
    }
  }

  // Output file
  const outputPath = path.join(__dirname, '../src/data/convertedTracks.js')
  const fileContents = `// Auto-generated SoundCloud API links\nexport const convertedTracks = ${JSON.stringify(results, null, 2)};\n`

  // Ensure directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, fileContents)

  console.log(`\n✅ Done! Wrote ${results.length} converted track(s) to: ${outputPath}`)
}

convertToApiLinks()
