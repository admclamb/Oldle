import { Api } from "./Api";
import { Picture } from "../ts/types/Picutre";

export class PictureApi extends Api {
  private static instance: PictureApi;
  private static basePath: string = "/pictures";

  private constructor() {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    if (!baseUrl) {
      throw new Error("No base url has been provided.");
    }
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    super(baseUrl, headers);
  }

  public static getInstance(): PictureApi {
    if (!PictureApi.instance) {
      PictureApi.instance = new PictureApi();
    }
    return PictureApi.instance;
  }

  public list(): Promise<[]> {
    return this.fetchJson<[]>(PictureApi.basePath, {}, []);
  }

  public read(_id: string): Promise<{}> {
    const path = `${PictureApi.basePath}/${_id}`;
    return this.fetchJson(path, {}, {});
  }

  public create(picture: {}): Promise<Picture | {}> {
    const options = {
      method: "POST",
      body: JSON.stringify({ date: picture }),
    };
    return this.fetchJson<{}>(PictureApi.basePath, options, {});
  }

  public update(picture: Picture): Promise<Picture | {}> {
    const options = {
      method: "PUT",
      body: JSON.stringify({ date: picture }),
    };
    return this.fetchJson<{}>(PictureApi.basePath, options, {});
  }

  public delete(_id: string): void {
    const path = `${PictureApi.basePath}/${_id}`;
    const options = {
      method: "DELETE",
    };
    this.fetchJson<void | null>(path, options, null);
  }
}
