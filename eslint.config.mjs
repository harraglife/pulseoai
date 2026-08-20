import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-config-next est encore au format eslintrc : FlatCompat fait le pont.
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // La regle proposait d'echapper les apostrophes en &apos;, ce que la charte
      // editoriale du site interdit. On garde le controle sur les autres entites.
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    },
  },
];

export default eslintConfig;
