import { useStorage } from "@vueuse/core";

export const useLanguage = () => {
  const language = useStorage("portfolio-language", "fr");
  return { language };
};
