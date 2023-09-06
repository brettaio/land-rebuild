import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLogoComponent } from './clients-logo.component';

describe('ClientsLogoComponent', () => {
  let component: ClientsLogoComponent;
  let fixture: ComponentFixture<ClientsLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsLogoComponent]
    });
    fixture = TestBed.createComponent(ClientsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
