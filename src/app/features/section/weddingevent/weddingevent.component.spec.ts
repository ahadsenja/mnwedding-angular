import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingeventComponent } from './weddingevent.component';

describe('WeddingeventComponent', () => {
  let component: WeddingeventComponent;
  let fixture: ComponentFixture<WeddingeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
