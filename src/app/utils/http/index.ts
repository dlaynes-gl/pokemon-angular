import type { HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';

export function handleHttpErrors() {
  return catchError((error: HttpErrorResponse) => {
    // if (error.status === 404) {
    //   return of(undefined);
    // } else {
      return throwError(() => error);
    // }
  });
}
