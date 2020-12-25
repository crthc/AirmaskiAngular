
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
	{ 
		path: "home", loadChildren: () =>
			import('./Pages/home/home.module').then(m => m.HomeModule) 
	},
	{ 
		path: "shop", loadChildren: () =>
			import('./Pages/shop/shop.module').then(m => m.ShopModule) },

	{ 
		path: "health", loadChildren: () =>
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
	{ 
		path: "account", 
		loadChildren: () =>
			import('./Components/forms/account/account.module').then(m => m.AccountModule),
		canActivate: [LoggedGuard], 
	},
	{ 
		path: "login", 
		loadChildren: () =>
			import('./Components/forms/login/login.module').then(m => m.LoginModule),
		canActivate: [LoggedGuard], 
	 },
	{ 
		path: "contact", loadChildren: () =>
			import('./Components/forms/contact/contact.module').then(m => m.ContactModule)
	},
	{ 
		path: "recover", loadChildren: () =>
			import('./Components/forms/recover/recover.module').then(m => m.RecoverModule) 
	},

	{ 
		path: "address", 
		loadChildren: () =>
			import('./Components/forms/address/address.module').then(m => m.AddressModule),
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
