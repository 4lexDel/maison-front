import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImgInputComponent } from './test-img-input.component';

describe('TestImgInputComponent', () => {
  let component: TestImgInputComponent;
  let fixture: ComponentFixture<TestImgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestImgInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestImgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
