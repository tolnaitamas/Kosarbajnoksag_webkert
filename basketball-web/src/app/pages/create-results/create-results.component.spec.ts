import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResultsComponent } from './create-results.component';

describe('CreateResultsComponent', () => {
  let component: CreateResultsComponent;
  let fixture: ComponentFixture<CreateResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
