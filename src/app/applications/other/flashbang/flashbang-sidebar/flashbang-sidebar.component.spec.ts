import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashbangSidebarComponent } from './flashbang-sidebar.component';

describe('FlashbangSidebarComponent', () => {
  let component: FlashbangSidebarComponent;
  let fixture: ComponentFixture<FlashbangSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashbangSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashbangSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
