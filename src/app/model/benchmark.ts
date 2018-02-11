import { Category } from "./Category";

export class Benchmark {
    id: number;
    name: string;
    standards: string;
    level: number[];
    modifier: string[];
    scheme: string;
    category: Category;

    score: number;
    selectedMod: number;
    currentLevel: number;
}