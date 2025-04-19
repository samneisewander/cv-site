export const kebabize = (str: string): string => {
    return str
      .split("")
      .map((letter: string, idx: number) => {
        return letter.toUpperCase() === letter
          ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
          : letter;
      })
      .join("");
};