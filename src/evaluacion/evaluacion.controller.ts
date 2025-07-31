import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Controller('evaluaciones')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  @Get()
  findAll() {
    return this.evaluacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluacionService.findOne(+id);
  }

  @Post()
  create(@Body() createEvaluacionDto: CreateEvaluacionDto) {
    return this.evaluacionService.create(createEvaluacionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEvaluacionDto: UpdateEvaluacionDto) {
    return this.evaluacionService.update(+id, updateEvaluacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluacionService.remove(+id);
  }
}
