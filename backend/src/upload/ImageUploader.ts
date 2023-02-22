import fs from 'fs';
import S3 from 'aws-sdk/clients/s3';
const bucketName = process.env.AWS_BUCKET_NAME_DEVELOPMENT;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_DEVELOPMENT;
const secretAccessKey = process.env.AWS_SECRET_KEY_DEVELOPMENT;

export class ImageUploader {
  private s3;
  private bucketName: string;

  public constructor(bucketName: string) {
    this.s3 = new S3({ region, accessKeyId, secretAccessKey });
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
