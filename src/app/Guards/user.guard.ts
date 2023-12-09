import { CanActivateFn ,Router} from '@angular/router';
import { UserAuthenticationService } from '../user-authantication.service';
import  {inject} from '@angular/core';
export const userGuard: CanActivateFn = (route, state) => {
const userService=inject(UserAuthenticationService);
const router=inject(Router);
if(userService.isUserLoggedInOrNot){
return true;

}else{
alert('You must be logged in first');
router.navigate(['/userlogin']);
return false;
}
};
