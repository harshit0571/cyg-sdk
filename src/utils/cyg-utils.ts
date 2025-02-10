export const validateSignature = (
  body: string,
  signature: string,
  secret: string
): boolean => {
  // Implement signature validation
  return true;
};

export const normalizeDate = (date: string | Date): string => {
  return new Date(date).toISOString();
};
