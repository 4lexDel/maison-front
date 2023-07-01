import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofAddingComponent } from './proof-adding.component';

describe('ProofAddingComponent', () => {
  let component: ProofAddingComponent;
  let fixture: ComponentFixture<ProofAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
