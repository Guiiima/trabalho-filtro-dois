import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trabalho';
  imageSrc: string | ArrayBuffer | null = null;
  imageFilter: string = '';
  imageRotation: string = '';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione apenas um arquivo de imagem.');
    }
  }
   applyBlur(): void {
    this.imageFilter = 'blur(5px)';
  }

  applySharpening(): void {
    this.resetFilters()
    this.imageFilter = 'url(#sharpeningFilter)';
   // this.imageFilter = 'contrast(200%) brightness(120%)';
  }

  rotateImage(): void {
    this.resetFilters()
    this.imageRotation = 'rotate(45deg)';
  }
  private resetFilters(): void {
    this.imageFilter = '';
    this.imageRotation = '';
  }
}