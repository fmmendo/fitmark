import { Category } from "./Category";
import { Gender } from "./userData";

export class Benchmark {
    id: number;
    name: string;
    standards: string;
    level: number[];
    modifier: string[];
    scheme: string;
    category: Category;
    gender: Gender;
}