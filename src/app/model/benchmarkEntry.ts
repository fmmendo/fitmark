export class BenchmarkEntry {
    benchmarkId: number;
    modifier: string;
    score: number;

    constructor(id: number, mod: string, score: number)
    {
        this.benchmarkId = id;
        this.modifier = mod;
        this.score = score;
    }
}