import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicModalPage } from './ionic-modal.page';

describe('IonicModalPage', () => {
  let component: IonicModalPage;
  let fixture: ComponentFixture<IonicModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
