import { AddressComponent } from './Components/forms/address/address.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MaskComponent } from "./Pages/mask/mask.component";
import { AccountComponent } from "./Components/forms/account/account.component";
import { LoginComponent } from "./Components/forms/login/login.component";
import { ContactComponent } from "./Components/forms/contact/contact.component";
import { RecoverComponent } from "./Components/forms/recover/recover.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ 
		path: "home", loadChildren: () =>
			import('./Pages/home/home.module').then(m => m.HomeModule) 
	},
	{ 
		path: "shop", loadChildren: () =>
			import('./Pages/shop/shop.module').then(m => m.ShopModule) },

	{ path: "health", loadChildren: () =>
	import('./Pages/health/health.module').then(m => m.HealthModule)
},
	{
    path: `about`, loadChildren: () =>
      import('./Pages/about/about.module').then(m => m.AboutModule)
  },
	{ 
		path: "mask/:id", loadChildren: () =>
			import('./Pages/mask/mask.module').then(m => m.MaskModule)
	},
	{ path: "account", component: AccountComponent },
	{ path: "login", component: LoginComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "recover", component: RecoverComponent },

	{ 
		path: "address", 
		component: AddressComponent, 
		canActivate: [AuthGuard], 
	},
	{ 
		path: "location", loadChildren: () =>
			import('./Pages/location/location.module').then(m => m.LocationModule)
	},
	{ 
		path: "cart", loadChildren: () =>
			import('./Pages/cart/cart.module').then(m => m.CartModule)
	},
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
