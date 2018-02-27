import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompGrocerylistComponent } from './newcomp-grocerylist.component';

describe('NewcompGrocerylistComponent', () => {
  let component: NewcompGrocerylistComponent;
  let fixture: ComponentFixture<NewcompGrocerylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompGrocerylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompGrocerylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
