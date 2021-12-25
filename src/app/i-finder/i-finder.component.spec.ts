import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFinderComponent } from './i-finder.component';

describe('IFinderComponent', () => {
  let component: IFinderComponent;
  let fixture: ComponentFixture<IFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
