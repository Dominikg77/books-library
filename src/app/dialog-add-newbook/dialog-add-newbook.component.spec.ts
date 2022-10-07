import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNewbookComponent } from './dialog-add-newbook.component';

describe('DialogAddNewbookComponent', () => {
  let component: DialogAddNewbookComponent;
  let fixture: ComponentFixture<DialogAddNewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddNewbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddNewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
