import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfPg } from './if-pg';

describe('IfPg', () => {
  let component: IfPg;
  let fixture: ComponentFixture<IfPg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfPg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfPg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
