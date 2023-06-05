export class DatabaseErrorHandler {
  public static handleError(error) {
    if (error?.code === 11000) {
      return this.handleDuplicateKey(error);
    } else {
      return { status: error.status, message: error.message };
    }
  }

  private static handleDuplicateKey(error) {
    return {
      status: 409,
      message: `${Object.keys(error.keyPattern).join(', ')} already exist.`,
    };
  }
}
