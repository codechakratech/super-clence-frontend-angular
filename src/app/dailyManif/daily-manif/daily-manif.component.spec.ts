import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyManifComponent } from './daily-manif.component';

describe('DailyManifComponent', () => {
  let component: DailyManifComponent;
  let fixture: ComponentFixture<DailyManifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyManifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyManifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
