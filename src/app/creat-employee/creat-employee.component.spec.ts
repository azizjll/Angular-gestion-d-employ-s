import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEmployeeComponent } from './creat-employee.component';

describe('CreatEmployeeComponent', () => {
  let component: CreatEmployeeComponent;
  let fixture: ComponentFixture<CreatEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
