import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { MatSelectModule } from "@angular/material/select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { HomeComponent } from "./Components/home/home.component";
import { AboutComponent } from "./Components/about/about.component";
import { ShopComponent } from "./Components/shop/shop.component";
import { HealthComponent } from "./Components/health/health.component";
import { MaskComponent } from "./Components/mask/mask.component";
import { AccountComponent } from "./forms/account/account.component";
import { LoginComponent } from "./forms/login/login.component";
import { ContactComponent } from "./forms/contact/contact.component";
import { RecoverComponent } from "./forms/recover/recover.component";

//Services

import { MaskService } from "./Services/mask.service";
import { ValidatorsService } from "./Services/validators.service";
import { Covid19Service } from "./Services/covid19.service";
import { LocationComponent } from "./Components/location/location.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { CartComponent } from "./Components/cart/cart.component";

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
