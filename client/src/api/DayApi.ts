import { Api } from './Api';
const baseUrl = process.env.API_BASE_URL;

export class DayApi extends Api {
  private static instance: DayApi;

  private constructor() {
    const baseUrl = process.env.BACKEND_BASE_URL || '';
    if (!baseUrl) {
      throw new Error('No base url has been provided.');
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    super(baseUrl, headers);
  }

  public static getInstance(): DayApi {
    if (!DayApi.instance) {
      DayApi.instance = new DayApi();
    }
    return DayApi.instance;
  }

  public listDays(): Promise<[]> {
    const path = new URL('days');
    return this.fetchJson<[]>(path, {}, []);
  }

  public readDay(day: Date) Promise<any> {
    const path = new URL('days');
  }
}
