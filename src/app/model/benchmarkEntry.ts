import { TrainingLevel } from "./trainingLevel";

export class BenchmarkEntry {
    benchmarkId: number;
    modifier: number;
    score: number;
    level: TrainingLevel;

    constructor(id: number, mod: number, score: number, level: TrainingLevel)
    {
        this.benchmarkId = id;
        this.modifier = mod;
        this.score = score;
        this.level = level;
    }
}