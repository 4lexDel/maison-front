import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeUpdateComponent } from './challenge-update.component';

describe('HouseUpdateComponent', () => {
  let component: ChallengeUpdateComponent;
  let fixture: ComponentFixture<ChallengeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
