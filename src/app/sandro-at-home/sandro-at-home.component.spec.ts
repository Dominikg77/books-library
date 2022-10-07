import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandroAtHomeComponent } from './sandro-at-home.component';

describe('SandroAtHomeComponent', () => {
  let component: SandroAtHomeComponent;
  let fixture: ComponentFixture<SandroAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandroAtHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandroAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
