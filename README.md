# Resume

My personal resume in portuguese and english generated using ReactJS and react-pdf.

## Stack

- [React](https://react.dev/)
- [React PDF](https://react-pdf.org/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## How to run

In the .env file set the language `VITE_LANGUAGE=pt-BR` or `VITE_LANGUAGE=en-US`

Run `npm run dev`

## How to use as template

Fork the project

### Change resume contents

Change the content of the files in the `src/me/portuguese.ts` and `src/me/english.ts`.

### Add new language

1. Add the language code to `SupportedLanguage` in `src/intl/index.ts`. It should be compatible with node's Intl Locales.
2. Create a `src/intl/<language>.ts` file with the translations following the structure in the other language files.
3. Add the new translation to the translations record in `src/intl/index.ts`.
4. Create a `src/me/<language>.ts` file with the resume content following the structure in the other language files.
5. Add the new translation to the translations record in `src/me/index.ts`.

### Change the layout of the resume

Change the `<Resume/>` component in `src/components/Resume.tsx` as you see fit. 

## Credits

Most of the icons used are based on the [Lucide](https://lucide.dev/) icons.

The colors used are based on the [Tailwind](https://tailwindcss.com/) zinc color palette.