import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkSearchComponent } from './benchmark-search.component';

describe('BenchmarkSearchComponent', () => {
  let component: BenchmarkSearchComponent;
  let fixture: ComponentFixture<BenchmarkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
