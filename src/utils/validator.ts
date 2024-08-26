class Validator {
  constructor() {}

  hasNonEmptyValues(obj: any) {
    const keys = Object.keys(obj);
    return Object.values(obj).every((value, index) => {
      if (keys[index] === "referral_link") {
        return true;
      } else {
        return (
          value ||
          (typeof value === "string" && (value as string).trim().length !== 0)
        );
      }
    });
  }

  atLeastOneValueNotEmpty(obj: any) {
    return Object.values(obj).some(
      (value) =>
        value !== null &&
        value !== undefined &&
        !value &&
        (value as any).trim().length !== 0
    );
  }

  validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

export const validator = new Validator();

export default Validator;
