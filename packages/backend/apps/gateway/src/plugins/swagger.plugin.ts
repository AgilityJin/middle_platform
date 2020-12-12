import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const injectorSwaggerPlugin = (app: INestApplication) => {
  const apiDocOptions = new DocumentBuilder()
    .setTitle('Agility 中台')
    .setDescription('个人中台服务')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()
  
  const document = SwaggerModule.createDocument(app, apiDocOptions)
  SwaggerModule.setup('docs/v1', app, document)
}
