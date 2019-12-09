import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './sanatizehtml/sanitize-html.pipe';

@NgModule({
  declarations: [SanitizeHtmlPipe],
  imports: [CommonModule],
  exports: [SanitizeHtmlPipe],
})
export class PipesModule {}
