import fs from 'fs/promises';
import path from 'path';

export type FileType = 'plants' | 'plantsMetadata';

const PATHS = {
  plants: path.join(__dirname, 'database', 'plantsData.json'),
  plantsMetadata: path.join(__dirname, 'database', 'plantsMetadata.json'),
};

export class HandleFile {
  private PATHS = PATHS;

  public async saveFile<T>(type: FileType, data: T): Promise<void> {
    await fs.writeFile(this.PATHS[`${type}`], JSON.stringify(data, null, 2));
  }

  public async readFile<T>(type: FileType): Promise<T> {
    const dataRaw = await fs.readFile(this.PATHS[`${type}`], { encoding: 'utf8' });
    const data: T = JSON.parse(dataRaw);
    return data;
  }
}