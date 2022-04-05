import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatServiceComponent } from './creat-service.component';

describe('CreatServiceComponent', () => {
  let component: CreatServiceComponent;
  let fixture: ComponentFixture<CreatServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
