export const IN = 'ERP/SESSION/IN';
export const OUT = 'ERP/SESSION/OUT';
export const sessionIn = () => ({
  type: IN,
});
export const sessionOut = () => ({
  type: OUT,
});
