// import { Actions, Effect, ofType } from '@ngrx/effects';
// import {
//     ShoppingActionTypes,
//     LoadShoppingAction,
//     LoadShoppingSuccessAction,
//     LoadShoppingFailureAction,
//     // AddItemAction,
//     // AddItemSucessAction,
//     // AddItemFailureAction,
//     // DeleteItemSucessAction,
//     // DeleteItemAction
// } from './../actions/dashboard.actions';
// import { mergeMap, catchError, map } from 'rxjs/operators';
// import { ShoppingService } from '../../services/authentication.service';
// import { of } from 'rxjs';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class ShoppingEffects {
//     @Effect() loadShopping = this.actions.pipe(
//         ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
//         mergeMap(
//             () => this.shoppingService.getShoppingItems().pipe(
//                 map(data => new LoadShoppingSuccessAction(data)),
//                 catchError(error => of(new LoadShoppingFailureAction(error)))
//             )
//         )
//     )

//     @Effect() addShoppingItem = this.actions.pipe(
//         ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
//         mergeMap(
//             (data) => this.shoppingService.addShoppingItem(data.payload).pipe(
//                 map(() => new AddItemSucessAction(data.payload)),
//                 catchError(error => of(new AddItemFailureAction(error)))
//             )
//         )
//     )


//     @Effect() deleteShoppingItem = this.actions.pipe(
//         ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
//         mergeMap(
//             (data) => this.shoppingService.deleteShoppingItem(data.payload).pipe(
//                 map(() => new DeleteItemSucessAction(data.payload)),
//                 catchError(error => of(new AddItemFailureAction(error)))
//             )
//         )
//     )

//     constructor(private actions: Actions, private shoppingService: ShoppingService) { }

// }
