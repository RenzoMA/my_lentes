import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { Product } from "../models/product";

export interface AppState {
  products: Product[];
  myCart: Product[];
}

const initialState: AppState = {
  products: [
    {
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },{
      id: "1",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "2",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "3",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
    {
      id: "4",
      description: "description",
      imageUrl:
        "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/10/27110945/1600762618-20200922-lisa-min.jpg",
      price: 20,
      title: "my Title",
    },
  ],
  myCart: [],
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
