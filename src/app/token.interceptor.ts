import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';




export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  
  return next(req);
};
