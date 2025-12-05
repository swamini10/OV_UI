import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPg } from './for-pg';

describe('ForPg', () => {
  let component: ForPg;
  let fixture: ComponentFixture<ForPg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
