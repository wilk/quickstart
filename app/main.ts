// the bootstrap definition file
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// browser platform for dynamic (JiT) compilation
platformBrowserDynamic().bootstrapModule(AppModule);
