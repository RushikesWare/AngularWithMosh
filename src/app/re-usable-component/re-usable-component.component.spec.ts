import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUsableComponentComponent } from './re-usable-component.component';

describe('ReUsableComponentComponent', () => {
  let component: ReUsableComponentComponent;
  let fixture: ComponentFixture<ReUsableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReUsableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUsableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
