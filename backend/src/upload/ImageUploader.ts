import fs from 'fs';

export class ImageUploader {
  private s3;
  private bucketName: string;

  public constructor(config, bucketName: string) {
    this.s3 = new S3(config);
    this.bucketName = bucketName;
  }

  public uploadFile(file) {
    try {
      const fileStream = fs.readFileSync(file.path);
      const uploadParams = {
        Bucket: this.bucketName,
        Body: fileStream,
        Key: file.filename,
      };
      return this.s3.upload(uploadParams).promise();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public getFileStream(fileKey) {
    const downloadParams = {
      Key: fileKey,
      Bucket: this.bucketName,
    };

    return this.s3.getObject(downloadParams).createReadStream();
  }
}
