import * as schedule from "node-schedule";
import { Day } from "../../models/DayModel";
import dayjs from "dayjs";
import { Picture } from "../../models/PictureModel";

export class AssignDay {
  private cron: string;
  constructor(timeFormat: string) {
    this.cron = timeFormat;
  }
  public schedule(): void {
    schedule.scheduleJob(this.cron, async function () {
      const currentDay = dayjs(new Date()).format("YYYY-MM-DD");
      const foundDay = Day.findOne({ date: currentDay });
      if (!foundDay) {
        const max = await Day.countDocuments();
        const randomIndex = Math.floor(Math.random() * max);
        const randomPicture = await Picture.findOne().skip(randomIndex);
      }
    });
  }
}
