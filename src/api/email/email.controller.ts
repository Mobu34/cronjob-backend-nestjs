import { Controller, Get } from '@nestjs/common';
import { CronjobService } from 'src/cronjob/cronjob.service';

@Controller('email')
export class EmailController {
  constructor(private readonly cronjobService: CronjobService) {}

  @Get()
  handleEmail() {
    const date = new Date(Date.now() + 10 * 1000);
    const sendEmail = () => {
      console.log('Execution once cronjob is executed');
    };
    this.cronjobService.createCron(date, 'randomId', sendEmail);
  }
}
