import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import { ApiException } from '@common/exception';

type IEnvConfig = Record<string, any>;

@Injectable()
export class ConfigService {
  private readonly envConfig: IEnvConfig;
  constructor() {
    const config = this.getConfigData()
    this.envConfig = this.validateEnv(config);
  }

  private getConfigData () {
    const url = `${process.cwd()}/${process.env.NODE_ENV || 'development'}.json`
    const json = fs.readFileSync(url, 'utf-8')
    return JSON.parse(json)
  }

  /**
   * @name 获取指定key的config值
   *
   * @param {string} key 键名
   * @returns {any} 返回配置项
   * @memberof ConfigService
   */
  get(key: string): any {
    return this.envConfig[key];
  }

  /**
   * @name 获取所有配置参数
   */
  all(): IEnvConfig {
    return this.envConfig;
  }

  /**
   * @name 校验环境参数合法性
   * @param {IEnvConfig} envConfig 环境配置参数
   */
  private validateEnv(envConfig: IEnvConfig): IEnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      ENV: Joi.string()
        .valid('dev', 'prod')
        .default('dev'),
      DATABASE_TYPE: Joi.string()
        .valid('mysql')
        .default('mysql'),
      DATABASE_HOST: Joi.string().default('localhost'),
      DATABASE_PORT: Joi.number().default(3306),
      DATABASE_NAME: Joi.string().default('middle_platform'),
      DATABASE_USER: Joi.string().default('root'),
      DATABASE_PASSWORD: Joi.string().default('123456'),
    });

    const { error, value: validateEnvConfig } = envVarsSchema.validate(
      envConfig,
    );

    if (error) {
      throw new ApiException(`Config validation error: ${error.message}`);
    }
    return validateEnvConfig;
  }
}
