import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGridListComponent } from './item-grid-list.component';

describe('ItemGridListComponent', () => {
  let component: ItemGridListComponent;
  let fixture: ComponentFixture<ItemGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
