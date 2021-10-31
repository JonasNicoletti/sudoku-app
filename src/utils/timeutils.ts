export const toTime = (score: number): string => {
  return new Date(score * 1000).toISOString().substr(14, 5);
};