import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingleComponent } from './index-single.component';

describe('IndexSingleComponent', () => {
  let component: IndexSingleComponent;
  let fixture: ComponentFixture<IndexSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSingleComponent]
    });
    fixture = TestBed.createComponent(IndexSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
