import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominikAtHomeComponent } from './dominik-at-home.component';

describe('DominikAtHomeComponent', () => {
  let component: DominikAtHomeComponent;
  let fixture: ComponentFixture<DominikAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominikAtHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominikAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
