import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {FooterComponent} from './modules/user-side/templates/footer/footer.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
