import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageListComponent } from './user-image-list.component';

describe('UserImageListComponent', () => {
  let component: UserImageListComponent;
  let fixture: ComponentFixture<UserImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
