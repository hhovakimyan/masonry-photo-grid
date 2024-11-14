export const calculateImageNewHeightWithRatio = (newWidth: number, oldWidth: number, oldHeight: number) => {
  return Math.ceil((newWidth / oldWidth) * oldHeight);
}