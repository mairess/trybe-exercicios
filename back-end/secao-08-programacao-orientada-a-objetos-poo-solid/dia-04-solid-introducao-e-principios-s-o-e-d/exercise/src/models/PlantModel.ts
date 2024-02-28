import { HandleFile, FileType } from './HandleFile';
import { IModel, IPlantsMetadata } from './interfaces';
import { IPlant } from '../interfaces';

class PlantModel implements IModel<IPlant> {
  private fileTypePlant: FileType = 'plants';

  private fileTypePlantsMetadata: FileType = 'plantsMetadata';

  private handleFile = new HandleFile();

  private async getNextPlantId(incrementAmount = 1): Promise<number> {
    const plantsMetadata = await this.handleFile
      .readFile<IPlantsMetadata>(this.fileTypePlantsMetadata);
    plantsMetadata.lastPlantId += incrementAmount;

    await this.handleFile.saveFile(this.fileTypePlantsMetadata, plantsMetadata);

    return plantsMetadata.lastPlantId;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.handleFile.readFile<IPlant[]>(this.fileTypePlant);
    return plants;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await this.getAll();

    const newPlantId = await this.getNextPlantId(1);
    const newPlant = { id: newPlantId, ...plant };
    plants.push(newPlant);

    await this.handleFile.saveFile(this.fileTypePlant, plants);

    return newPlant;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();

    const plantById = plants.find((plant) => plant.id === parseInt(id, 10));
    if (!plantById) return null;
    return plantById;
  }

  public async update(editedPlant: IPlant): Promise<IPlant> {
    const plants = await this.getAll();

    const updatedPlants = plants.map((plant) => {
      if (plant.id === editedPlant.id) return editedPlant;
      return plant;
    });

    await this.handleFile.saveFile(this.fileTypePlant, updatedPlants);

    return editedPlant;
  }

  public async removeById(id: string): Promise<boolean> {
    const plants = await this.getAll();

    const removedPlant = plants.find((plant) => plant.id === parseInt(id, 10));
    if (!removedPlant) return false;

    const newPlants = plants.filter((plant) => plant.id !== parseInt(id, 10));
    this.handleFile.saveFile(this.fileTypePlant, newPlants);

    return true;
  }
}

export default PlantModel;