export class DataValidator {
  public static hasValidProperties(
    validProperties: string[],
    data: {}
  ): boolean {
    const invalidFields: string[] = Object.keys(data).filter(
      (field: string) => !validProperties.includes(field)
    );
    if (invalidFields.length) {
      throw new Error(`Invalid field(s): ${invalidFields.join(', ')}`);
    }
    return true;
  }

  public static hasRequiredProperties(
    requiredProperties: string[],
    data: {}
  ): boolean {
    requiredProperties.forEach((property) => {
      if (!data[property]) {
        throw new Error(`A '${property}' property is required`);
      }
    });
    return true;
  }
}
