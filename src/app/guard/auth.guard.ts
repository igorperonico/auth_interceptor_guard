import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const localToken = localStorage.getItem("token")
  if (localToken != null) {
    return true
  } else {
    router.navigate(["/login"], { queryParams: { stateUrl: state.url } })
    return false
  }

};
