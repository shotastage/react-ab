export const Random = () => {
  const val: number = Math.random();

  return (val > 0.5) ? 1 : 2;
};
