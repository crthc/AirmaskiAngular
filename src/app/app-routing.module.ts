import { AddressComponent } from './Components/forms/address/address.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./Pages/home/home.component";
import { ShopComponent } from "./Pages/shop/shop.component";
import { AboutModule } from "./Pages/about/about.module";
import { HealthComponent } from "./Pages/health/health.component";
import { MaskComponent } from "./Pages/mask/mask.component";
import { AccountComponent } from "./Components/forms/account/account.component";
import { LoginComponent } from "./Components/forms/login/login.component";
import { ContactComponent } from "./Components/forms/contact/contact.component";
import { RecoverComponent } from "./Components/forms/recover/recover.component";
import { LocationComponent } from "./Pages/location/location.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "shop", component: ShopComponent },
	{ path: "health", component: HealthComponent },
	{
    path: `about`, loadChildren: () =>
      import('./Pages/about/about.module').then(m => m.AboutModule)
  },
	{ path: "mask/:id", component: MaskComponent },
	{ path: "account", component: AccountComponent },
	{ path: "login", component: LoginComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "recover", component: RecoverComponent },

	{ 
		path: "address", 
		component: AddressComponent, 
		canActivate: [AuthGuard], 
	},
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
