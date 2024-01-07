import { ConfigModuleOptions, registerAs } from '@nestjs/config';
import { CommonConfigs, ThrottlerConfigs } from '../types';
import * as Joi from 'joi';

const common = registerAs<CommonConfigs>('common', () => ({
  port: +process.env.PORT,
  url: process.env.URL,
}));

const throttler = registerAs<ThrottlerConfigs>('throttler', () => ({
  ttl: +process.env.THROTTLE_TTL,
  limit: +process.env.THROTTLE_LIMIT,
}));

export const EnvConfig: ConfigModuleOptions = {
  envFilePath: '.env',
  isGlobal: true,
  validationSchema: Joi.object({
    PORT: Joi.string().required(),
    URL: Joi.string().required(),
    THROTTLE_TTL: Joi.number().required(),
    THROTTLE_LIMIT: Joi.number().required(),
  }),
  load: [common, throttler],
};
