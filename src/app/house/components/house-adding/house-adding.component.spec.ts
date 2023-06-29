import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAddingComponent } from './house-adding.component';

describe('HouseAddingComponent', () => {
  let component: HouseAddingComponent;
  let fixture: ComponentFixture<HouseAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
