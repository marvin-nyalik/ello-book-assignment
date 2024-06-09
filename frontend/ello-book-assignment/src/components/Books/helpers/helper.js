export const getAvatarColor = (theme, readingLevel) => {
  switch (readingLevel) {
    case "H":
      return theme.palette.primary.main;
    case "I":
      return theme.palette.primary.steelBlue;
    case "E":
      return theme.palette.primary.yellow;
    case "D":
      return theme.palette.secondary.orangeRed;
    case "A":
      return theme.palette.secondary.teal;
    case "C":
      return theme.palette.secondary.turquioseDark;
    case "B":
      return theme.palette.secondary.yellowDark;

    default:
      return theme.palette.secondary.turquioseDark2;
  }
};
