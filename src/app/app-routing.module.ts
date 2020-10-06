import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./Components/home/home.component";
import { ShopComponent } from "./Components/shop/shop.component";
import { AboutComponent } from "./Components/about/about.component";
import { HealthComponent } from "./Components/health/health.component";
import { MaskComponent } from "./Components/mask/mask.component";
import { AccountComponent } from "./forms/account/account.component";
import { LoginComponent } from "./forms/login/login.component";
import { ContactComponent } from "./forms/contact/contact.component";
import { RecoverComponent } from "./forms/recover/recover.component";
import { LocationComponent } from "./Components/location/location.component";
import { CartComponent } from "./Components/cart/cart.component";

const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "shop", component: ShopComponent },
	{ path: "health", component: HealthComponent },
	{ path: "about", component: AboutComponent },
	{ path: "mask/:id", component: MaskComponent },
	{ path: "account", component: AccountComponent },
	{ path: "login", component: LoginComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "recover", component: RecoverComponent },
	{ path: "location", component: LocationComponent },
	{ path: "cart", component: CartComponent },
	{ path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: "enabled",
			anchorScrolling: "enabled",
		}),
	],
	//[RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
