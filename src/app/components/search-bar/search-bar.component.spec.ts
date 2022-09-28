import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TEST_PKM_SEARCH_BAR } from 'src/app/config/test_ids';
import { formatTestId } from 'src/app/utils/tests';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change the local value when writting on the input', (done) => {
    // We need the function triggerEventHandler(), this section
    // won't be refactored for now
    const input = fixture.debugElement.query(
      By.css(formatTestId(TEST_PKM_SEARCH_BAR))
    )!;
    expect(input.nativeElement).toBeDefined();
    input.nativeElement.value = "Char"
    input.triggerEventHandler('change', { target: input.nativeElement });

    fixture.detectChanges();
    expect(component.data).toBe("Char")
    done();
  });

  it('should emit the searched value when writting on the input', (done)=>{
    // We need the function triggerEventHandler(), this section
    // won't be refactored for now
    const input = fixture.debugElement.query(
      By.css(formatTestId(TEST_PKM_SEARCH_BAR))
    )!;

    component.searched.subscribe((val: string) => {
      expect(val).toBe('Char');
      done();
    });

    input.nativeElement.value = "Char"
    input.triggerEventHandler('change', { target: input.nativeElement });

    fixture.detectChanges();
  });

});
