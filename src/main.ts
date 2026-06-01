async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Static files untuk upload gambar menu
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('UKL Restoran API')
    .setDescription('Backend API Sistem POS Restoran')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs: http://localhost:${port}/api-docs`);
}
bootstrap();