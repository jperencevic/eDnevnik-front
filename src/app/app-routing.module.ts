import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Route } from "@angular/router";
import { PupilViewComponent } from "./pupil-view/pupil-view.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { ParentViewComponent } from "./parent-view/parent-view.component";
import { TeacherViewComponent } from "./teacher-view/teacher-view.component";
import { AddMarkComponent } from "./components/mark/add-mark/add-mark.component";
import { UpdateDeleteMarkComponent } from "./components/mark/update-delete-mark/update-delete-mark.component";
import { FinalComponent } from "./components/mark/final/final.component";

const routes: Route[] = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "ROLE_PUPIL", component: PupilViewComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "password", component: ChangePasswordComponent },
  { path: "ROLE_PARENT", component: ParentViewComponent },
  { path: "ROLE_TEACHER", component: TeacherViewComponent },
  { path: "newMark/:pId/:ctgsId", component: AddMarkComponent },
  { path: "updateMark/:mId", component: UpdateDeleteMarkComponent },
  { path: "final/:pId/:sId", component: FinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
