import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListReoderPage } from './list-reoder.page';

describe('ListReoderPage', () => {
  let component: ListReoderPage;
  let fixture: ComponentFixture<ListReoderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReoderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListReoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
