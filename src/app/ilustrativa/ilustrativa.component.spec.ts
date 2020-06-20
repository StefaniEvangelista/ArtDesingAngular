import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustrativaComponent } from './ilustrativa.component';

describe('IlustrativaComponent', () => {
  let component: IlustrativaComponent;
  let fixture: ComponentFixture<IlustrativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlustrativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlustrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
