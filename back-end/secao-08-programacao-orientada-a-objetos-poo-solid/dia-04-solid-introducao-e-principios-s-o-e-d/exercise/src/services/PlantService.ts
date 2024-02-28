import { INewPlant, IPlant } from '../interfaces';
import { IService } from './interfaces';
import { IModel } from '../models/interfaces';
import { NotFoundException } from '../exceptions';
import PlantValidate from './validations/PlantValidate';

class PlantService implements IService<IPlant, INewPlant> {
  private readonly model: IModel<IPlant>;

  constructor(model: IModel<IPlant>) {
    this.model = model;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.model.getAll();
    return plants;
  }

  static waterFrequencyCalculator(needsSun: boolean, size: number, origin: string): number {
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    return waterFrequency;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    PlantValidate.validateAttributes(plant);

    const { needsSun, size, origin } = plant;
    const waterFrequency = PlantService.waterFrequencyCalculator(needsSun, size, origin);

    const newPlant = await this.model.create({ ...plant, waterFrequency });
    return newPlant;
  }

public async getById(id: string): Promise<IPlant> {
    const plant = await this.model.getById(id);
    if (!plant) throw new NotFoundException('Plant not Found!');
    return plant;
  }

  public async update(id: string, plant: INewPlant): Promise<IPlant> {
    const plantExists = await this.model.getById(id);
    if (!plantExists) throw new NotFoundException('Plant not Found!');

    PlantValidate.validateAttributes(plant);
    const { needsSun, size, origin } = plant;
    const waterFrequency = PlantService.waterFrequencyCalculator(needsSun, size, origin);
    const editedPlant = await this.model.update({ id: parseInt(id, 10), ...plant, waterFrequency });
    return editedPlant;
  }

  public async removeById(id: string): Promise<void> {
    const isPlantRemoved = await this.model.removeById(id);
    if (!isPlantRemoved) throw new NotFoundException('Plant not Found!');
  }

}


export default PlantService;