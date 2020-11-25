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
import { HomeComponent } from "./Views/home/home.component";
import { AboutComponent } from "./Views/about/about.component";
import { ShopComponent } from "./Views/shop/shop.component";
import { HealthComponent } from "./Views/health/health.component";
import { MaskComponent } from "./Views/mask/mask.component";
import { AccountComponent } from "./Components/forms/account/account.component";
import { LoginComponent } from "./Components/forms/login/login.component";
import { ContactComponent } from "./Components/forms/contact/contact.component";
import { RecoverComponent } from "./Components/forms/recover/recover.component";
import { AddressComponent } from './Components/forms/address/address.component';

//Services

import { MaskService } from "./Services/mask.service";
import { ValidatorsService } from "./Services/validators.service";
import { Covid19Service } from "./Services/covid19.service";
import { LocationComponent } from "./Views/location/location.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { CartComponent } from "./Views/cart/cart.component";


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AboutComponent,
		ShopComponent,
		HealthComponent,
		MaskComponent,
		AccountComponent,
		LoginComponent,
		ContactComponent,
		RecoverComponent,
		LocationComponent,
		CartComponent,
		AddressComponent
	
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
	],
	providers: [MaskService, ValidatorsService, Covid19Service],
	bootstrap: [AppComponent],
})
export class AppModule {}
