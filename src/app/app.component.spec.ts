import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Detecta los cambios para asegurarse de que el template se actualice
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'Hello, mycv'`, () => {
    expect(component.title).toEqual('Hello, mycv');
  });

  xit('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log('Rendered title:', compiled.querySelector('h1')?.textContent); // Log para verificar el contenido
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, mycv');
  });
});
