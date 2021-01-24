import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

export interface AppState {

}

const initialState: AppState = {

};

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  private appStateSubject$ = new BehaviorSubject<AppState>(initialState);
  private appState$ = this.appStateSubject$.asObservable();

  constructor() {}

  select<K>(fnMap: (state: AppState) => K): Observable<K> {
    return this.appState$.pipe(
      map((source) => fnMap(source)),
      distinctUntilChanged()
    );
  }

  getCurrentState<K extends keyof AppState>(key: K) {
    return this.appStateSubject$.getValue()[key];
  }

  updateState(partialState: Partial<AppState>) {
    const currentState = this.appStateSubject$.getValue();
    const newState = {
      ...currentState,
      ...partialState,
    };
    this.appStateSubject$.next(newState);
  }
}
