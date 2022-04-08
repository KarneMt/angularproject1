import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'login', component: LoginComponent}]
        ),
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule 
      ],
      declarations: [ LoginComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // structure
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a row-element with class .username', () => {
    const el = fixture.debugElement.query(By.css('.username'))
    expect(el).toBeTruthy()
    // <input class="username">
  })
  it('should have a label with class label for username field', () => {
    const el = fixture.debugElement.query(By.css('.username label.label'))
    expect(el).toBeTruthy()
    expect(el.nativeElement.getAttribute('for')).toEqual('username')
    // <input name="username" class="username" />
    // <label for="username"></label>
  })
  
  it('should display Benutzername on the label for username field', () => {
    const el = fixture.debugElement.query(By.css('.username label'))
    expect(el.nativeElement.innerText).toEqual('Benutzername')
    // <label for="username">Benutzername</label>
  })

  // binding
  it('should bind the username to its FormControl', () => {
    const el = fixture.debugElement.query(By.css('.username input'))
    const ctrl = component.loginForm.get('username')

    const value = 'TestUser'
    ctrl?.setValue(value)
    console.log(ctrl)
    fixture.detectChanges()

    expect(el.nativeElement.value).toEqual(value)
    expect((el.nativeElement as HTMLInputElement).value).toEqual(value)
  })
  it('should mark username is invalid when it has no value', () => {
    const ctrl = component.loginForm.get('username')

    ctrl?.setValue(null)
    fixture.detectChanges()

    expect(ctrl?.invalid).toBeTruthy()
  })
  it('should mark usernmae as valid when it has a value', () => {
    const ctrl = component.loginForm.get('username')

    ctrl?.setValue('12345678')
    fixture.detectChanges()

    expect(ctrl?.valid).toBeTruthy()
  })
  it('should mark username as invalid when its value longer than 8 char', () => {
    const ctrl = component.loginForm.get('username')

    ctrl?.setValue('123456789')
    fixture.detectChanges()

    expect(ctrl?.invalid).toBeTruthy()
  })
  it('should mark username as invalid when its value is less than 8 char', () => {
    const ctrl = component.loginForm.get('username')

    ctrl?.setValue('1234567')
    fixture.detectChanges()

    expect(ctrl?.invalid).toBeTruthy()
  })

  // validation
  it('should return true when form is valid', () => {
    const value = {
      username: '24225132',
      password: 'Abc123!'
    }

    component.loginForm.patchValue(value)
    fixture.detectChanges()

    expect(component.loginForm.valid).toBeTruthy()
  })

});

