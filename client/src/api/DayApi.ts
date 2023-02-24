import { Day } from '../ts/types/Day';
import { Api } from './Api';

export class DayApi extends Api {
  private static instance: DayApi;
  private static basePath: string = '/days';
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
    return this.fetchJson<[]>(DayApi.basePath, {}, []);
  }

  public readDay(day: Date): Promise<any> {
    const path = `${DayApi.basePath}/${day}`;
    return this.fetchJson<{}>(path, {}, {});
  }

  public readDayById(_id: string): Promise<any> {
    const path = `${DayApi.basePath}/id/${_id}`;
    return this.fetchJson<{}>(path, {}, {});
  }

  public createDay(day: Day): Promise<Day | {}> {
    const options = {
      method: 'POST',
      body: JSON.stringify({ date: day }),
    };
    return this.fetchJson<{}>(DayApi.basePath, options, {});
  }

  public updateDay(day: Day): Promise<Day | {}> {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ date: day }),
    };
    return this.fetchJson<{}>(DayApi.basePath, options, {});
  }

  public deleteDay(_id: string): void {
    const path = `${DayApi.basePath}/${_id}`;
    const options = {
      method: 'DELETE',
    };
    this.fetchJson<void | null>(path, options, null);
  }
}
