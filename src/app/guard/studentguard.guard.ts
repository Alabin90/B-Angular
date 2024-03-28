import { CanActivateFn, Router } from '@angular/router';
import {Inject} from '@angular/core';

export const studentguardGuard: CanActivateFn = (route, state) => {
const router = Inject(Router)
  return localStorage['student'] ? true : (router.navigate(['/signin']))


};
