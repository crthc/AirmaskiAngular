import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";

//Services

import { MaskService } from "./Services/mask.service";
import { ValidatorsService } from "./Services/validators.service";
import { Covid19Service } from "./Services/covid19.service";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent
	
	],
	imports: [
		MatSelectModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		LeafletModule,
		BrowserAnimationsModule,
		LazyLoadImageModule
		
	],
	providers: [MaskService, ValidatorsService, Covid19Service],
	bootstrap: [AppComponent],
})
export class AppModule {}
