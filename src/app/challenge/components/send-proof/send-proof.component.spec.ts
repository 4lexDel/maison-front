import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProofComponent } from './send-proof.component';

describe('SendProofComponent', () => {
  let component: SendProofComponent;
  let fixture: ComponentFixture<SendProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
