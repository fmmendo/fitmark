import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './benchmark';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const benchmarks = [
        { id: 11, name: 'Pull-ups', standards: 'some standards', level: [1,2,3], modifier: ['a', 'b', 'c'], scheme:'dunno', category: Category.Gymnastics },
        { id: 12, name: 'Push-ups', standards: 'some standards', level: [1,2,3], modifier: ['a', 'b', 'c'], scheme:'dunno', category: Category.Gymnastics },
        { id: 13, name: 'Sit-ups', standards: 'some standards', level: [1,2,3], modifier: ['a', 'b', 'c'], scheme:'dunno', category: Category.Gymnastics }
    ];
    return {benchmarks};
  }
}