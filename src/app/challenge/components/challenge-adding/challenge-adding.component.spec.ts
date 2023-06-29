import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeAddingComponent } from './challenge-adding.component';

describe('ChallengeAddingComponent', () => {
  let component: ChallengeAddingComponent;
  let fixture: ComponentFixture<ChallengeAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
