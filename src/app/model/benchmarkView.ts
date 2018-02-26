import { Category } from "./Category";
import { TrainingLevel } from "./trainingLevel";
import { Benchmark } from "./benchmark";
import { BenchmarkEntry } from "./benchmarkEntry";
import { Gender } from "./userData";

export class BenchmarkView {
    id: number;
    name: string;
    standards: string;
    trainingLevel: TrainingLevel;
    score: number;
    level: number[];
    modifier: string[];
    selectedModifier: number;
    scheme: string;
    gender: Gender
    category: Category;

    constructor(benchmark: Benchmark, entry: BenchmarkEntry) {
        this.id = benchmark.id;
        this.name = benchmark.name;
        this.gender = benchmark.gender;
        this.standards = benchmark.standards;
        this.level = benchmark.level;
        this.modifier = benchmark.modifier;
        this.scheme = benchmark.scheme;
        this.category = benchmark.category;

        if (entry != null) {
            this.score = entry.score;
            this.selectedModifier = entry.modifier;
            this.trainingLevel = entry.level;
        } else {
            this.score = 0;
            this.selectedModifier = 0;
            this.trainingLevel = TrainingLevel.Untrained;
        }
    }
}