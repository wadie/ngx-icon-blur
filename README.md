# ngx-icon-blur [![npm version](http://img.shields.io/npm/v/ngx-icon-blur.svg)](https://npmjs.org/package/ngx-icon-blur) [![StackBlitz](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/ngx-icon-blur)

> An Angular component that can be used to create frosted glass effect of icons.

![preview](https://imgur.com/a0P7xon.gif)
## Available options

Option | Description
:---:|---
src | A string that represents the src location of your icon
type | "ROUNDED" OR "SQUARE" OR "CIRCLE
size | A number that represents the size of the icon
padding | A number that represents the padding of the icon
name | A string that represents the alt name of your icon

## Install

```bash
$ npm install ngx-icon-blur --save
```

## Usage

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NgxBlurIconeModule } from 'ngx-icon-blur';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIconBlurModule // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its component in your Angular application:

```xml
<!-- You can now use NgxBlurIcon component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-icon-blur
    [source]="'https://codekeep.io/assets/icon.svg'"
    [name]="'icon'"
    [padding]="5"
    [size]="100"
    [type]="'ROUNDED'"
></ngx-icon-blur>
```

[StackBlitz Demo](https://stackblitz.com/edit/ngx-icon-blur)

## Related
[react-icon-blur](https://github.com/JP1016/react-icon-blur)

## License

MIT © [Wadie](https://github.com/wadie)
