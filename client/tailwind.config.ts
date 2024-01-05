import type { Config } from 'tailwindcss'
import {mauve} from "@radix-ui/colors"
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
          "primarybgcolor":mauve.mauve12,
          "secondarybgcolor":mauve.mauve2,
          
        
          "primarycomponentcolor":mauve.mauve3,
          "secondarycomponentcolor":mauve.mauve4,
          "teritiarycomponentcolor":mauve.mauve5,
      },
      textColor: {
          "primarytextcolor":mauve.mauve11,
          "secondarytextcolor":mauve.mauve12,
      },
      borderColor: {
        "primarybordercolor":mauve.mauve6,
        "secondarybordercolor":mauve.mauve7,
        "teritiarybordercolor":mauve.mauve8,
      },
      colors: {
        "primarysolidcolor":mauve.mauve9,
        "secondarysolidcolor":mauve.mauve10,
      },

    },
  },
  plugins: [],
}
export default config
