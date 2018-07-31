import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { PupilViewComponent } from "./pupil-view/pupil-view.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { ParentViewComponent } from "./parent-view/parent-view.component";
import { TeacherViewComponent } from "./teacher-view/teacher-view.component";
import { AddMarkComponent } from "./components/mark/add-mark/add-mark.component";
import { UpdateDeleteMarkComponent } from "./components/mark/update-delete-mark/update-delete-mark.component";
import { FinalComponent } from './components/mark/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    PupilViewComponent,
    HeaderComponent,
    ChangePasswordComponent,
    ParentViewComponent,
    TeacherViewComponent,
    AddMarkComponent,
    UpdateDeleteMarkComponent,
    FinalComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
