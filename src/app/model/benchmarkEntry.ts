export class BenchmarkEntry {
    benchmarkId: number;
    modifier: number;
    score: number;

    constructor(id: number, mod: number, score: number)
    {
        this.benchmarkId = id;
        this.modifier = mod;
        this.score = score;
    }
}