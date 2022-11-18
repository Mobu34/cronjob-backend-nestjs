import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class CronjobService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  createCron(date: Date, name: string, cb: () => void): void {
    const job = new CronJob(date, () => {
      console.log('Task done = ', name);
      cb();
      this.schedulerRegistry.deleteCronJob(name);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    console.log('GO');
  }
}
