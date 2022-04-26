import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashbangComponent } from './flashbang.component';

describe('FlashbangComponent', () => {
  let component: FlashbangComponent;
  let fixture: ComponentFixture<FlashbangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashbangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashbangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
