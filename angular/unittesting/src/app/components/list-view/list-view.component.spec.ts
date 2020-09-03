import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../services/app.service';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [
        HttpClientModule
      ],
      providers:[
        AppService
      ]
    })
    .compileComponents();
    appService = TestBed.inject(AppService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Api call testing
  it('Get all list',(done)=>{
    appService.getAllList().subscribe((response)=>{
      expect(response.length).not.toBe(0);
      expect(component.list.length).toEqual(10);
      done();
    })
  })

  const testCase = {
    title:'new title',
    response: {
      id:101,
      title: 'new title'
    }
  }

  // post new list data
  it('Post new list',(done)=>{
    appService.postList(testCase.title).subscribe((response)=>{
      expect(response.id).toBe(101);
      expect(component.list.length).toEqual(10);
      done();
    })
  })
});
