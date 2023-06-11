export const getCalculatingTimeMoveie = (item) => {
  const hour = Math.floor(item / 60);
  const minutes = item % 60;

  return `${hour} ч ${minutes > 0 ? `${minutes} м` : ""}`;
};
