import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './users/user.entity';
import { Rol } from './rol/rol.entity';

// 👇 Asegúrate de importar tu módulo correctamente
import { UsersModule } from './users/users.module'; // ruta corregida
import { ProyectoModule } from './proyecto/proyecto.module';
import { AuthModule } from './auth/auth.module';
import { RolModule } from './rol/rol.module'; // <--- AÑADE ESTA LÍNEA

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}', Usuario, Rol],
        synchronize: false, // Temporalmente habilitado para sincronizar la DB
      }),
    }),
    // 👇 Aquí agregas tu módulo
    UsersModule,
    ProyectoModule,
    AuthModule,
    RolModule, // <--- Y AÑADE ESTA LÍNEA AQUÍ
  ],
})
export class AppModule {}
