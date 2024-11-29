
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ProductVariantColor
 * 
 */
export type ProductVariantColor = $Result.DefaultSelection<Prisma.$ProductVariantColorPayload>
/**
 * Model ProductVariantSize
 * 
 */
export type ProductVariantSize = $Result.DefaultSelection<Prisma.$ProductVariantSizePayload>
/**
 * Model Wishlist
 * 
 */
export type Wishlist = $Result.DefaultSelection<Prisma.$WishlistPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Bag
 * 
 */
export type Bag = $Result.DefaultSelection<Prisma.$BagPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model PaymentDetail
 * 
 */
export type PaymentDetail = $Result.DefaultSelection<Prisma.$PaymentDetailPayload>
/**
 * Model PaymentMethodInfo
 * 
 */
export type PaymentMethodInfo = $Result.DefaultSelection<Prisma.$PaymentMethodInfoPayload>
/**
 * Model ShippingAddress
 * 
 */
export type ShippingAddress = $Result.DefaultSelection<Prisma.$ShippingAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PRODUCT_SIZES: {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL'
};

export type PRODUCT_SIZES = (typeof PRODUCT_SIZES)[keyof typeof PRODUCT_SIZES]


export const PRODUCT_STATUS: {
  Active: 'Active',
  Inactive: 'Inactive',
  Out_of_Stock: 'Out_of_Stock',
  Discontinued: 'Discontinued',
  Pending: 'Pending',
  Draft: 'Draft',
  Archived: 'Archived'
};

export type PRODUCT_STATUS = (typeof PRODUCT_STATUS)[keyof typeof PRODUCT_STATUS]


export const ORDER_STATUS: {
  pending: 'pending',
  processing: 'processing',
  completed: 'completed',
  canceled: 'canceled'
};

export type ORDER_STATUS = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]


export const PAYMENT_STATUS: {
  paid: 'paid',
  unpaid: 'unpaid',
  failed: 'failed'
};

export type PAYMENT_STATUS = (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS]


export const PAYMENT_METHOD: {
  GCASH: 'GCASH',
  Maya: 'Maya',
  BPI: 'BPI',
  PayPal: 'PayPal',
  Other: 'Other'
};

export type PAYMENT_METHOD = (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD]

}

export type PRODUCT_SIZES = $Enums.PRODUCT_SIZES

export const PRODUCT_SIZES: typeof $Enums.PRODUCT_SIZES

export type PRODUCT_STATUS = $Enums.PRODUCT_STATUS

export const PRODUCT_STATUS: typeof $Enums.PRODUCT_STATUS

export type ORDER_STATUS = $Enums.ORDER_STATUS

export const ORDER_STATUS: typeof $Enums.ORDER_STATUS

export type PAYMENT_STATUS = $Enums.PAYMENT_STATUS

export const PAYMENT_STATUS: typeof $Enums.PAYMENT_STATUS

export type PAYMENT_METHOD = $Enums.PAYMENT_METHOD

export const PAYMENT_METHOD: typeof $Enums.PAYMENT_METHOD

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.productVariantColor`: Exposes CRUD operations for the **ProductVariantColor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariantColors
    * const productVariantColors = await prisma.productVariantColor.findMany()
    * ```
    */
  get productVariantColor(): Prisma.ProductVariantColorDelegate<ExtArgs>;

  /**
   * `prisma.productVariantSize`: Exposes CRUD operations for the **ProductVariantSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariantSizes
    * const productVariantSizes = await prisma.productVariantSize.findMany()
    * ```
    */
  get productVariantSize(): Prisma.ProductVariantSizeDelegate<ExtArgs>;

  /**
   * `prisma.wishlist`: Exposes CRUD operations for the **Wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlist.findMany()
    * ```
    */
  get wishlist(): Prisma.WishlistDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.bag`: Exposes CRUD operations for the **Bag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bags
    * const bags = await prisma.bag.findMany()
    * ```
    */
  get bag(): Prisma.BagDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.paymentDetail`: Exposes CRUD operations for the **PaymentDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentDetails
    * const paymentDetails = await prisma.paymentDetail.findMany()
    * ```
    */
  get paymentDetail(): Prisma.PaymentDetailDelegate<ExtArgs>;

  /**
   * `prisma.paymentMethodInfo`: Exposes CRUD operations for the **PaymentMethodInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethodInfos
    * const paymentMethodInfos = await prisma.paymentMethodInfo.findMany()
    * ```
    */
  get paymentMethodInfo(): Prisma.PaymentMethodInfoDelegate<ExtArgs>;

  /**
   * `prisma.shippingAddress`: Exposes CRUD operations for the **ShippingAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingAddresses
    * const shippingAddresses = await prisma.shippingAddress.findMany()
    * ```
    */
  get shippingAddress(): Prisma.ShippingAddressDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Category: 'Category',
    ProductVariantColor: 'ProductVariantColor',
    ProductVariantSize: 'ProductVariantSize',
    Wishlist: 'Wishlist',
    Address: 'Address',
    Bag: 'Bag',
    Order: 'Order',
    OrderItem: 'OrderItem',
    PaymentDetail: 'PaymentDetail',
    PaymentMethodInfo: 'PaymentMethodInfo',
    ShippingAddress: 'ShippingAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "product" | "category" | "productVariantColor" | "productVariantSize" | "wishlist" | "address" | "bag" | "order" | "orderItem" | "paymentDetail" | "paymentMethodInfo" | "shippingAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductVariantColor: {
        payload: Prisma.$ProductVariantColorPayload<ExtArgs>
        fields: Prisma.ProductVariantColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>
          }
          findMany: {
            args: Prisma.ProductVariantColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>[]
          }
          create: {
            args: Prisma.ProductVariantColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>
          }
          createMany: {
            args: Prisma.ProductVariantColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantColorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>
          }
          update: {
            args: Prisma.ProductVariantColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantColorPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariantColor>
          }
          groupBy: {
            args: Prisma.ProductVariantColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantColorCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantColorCountAggregateOutputType> | number
          }
        }
      }
      ProductVariantSize: {
        payload: Prisma.$ProductVariantSizePayload<ExtArgs>
        fields: Prisma.ProductVariantSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>
          }
          findFirst: {
            args: Prisma.ProductVariantSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>
          }
          findMany: {
            args: Prisma.ProductVariantSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>[]
          }
          create: {
            args: Prisma.ProductVariantSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>
          }
          createMany: {
            args: Prisma.ProductVariantSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>[]
          }
          delete: {
            args: Prisma.ProductVariantSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>
          }
          update: {
            args: Prisma.ProductVariantSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantSizePayload>
          }
          aggregate: {
            args: Prisma.ProductVariantSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariantSize>
          }
          groupBy: {
            args: Prisma.ProductVariantSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantSizeCountAggregateOutputType> | number
          }
        }
      }
      Wishlist: {
        payload: Prisma.$WishlistPayload<ExtArgs>
        fields: Prisma.WishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findFirst: {
            args: Prisma.WishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findMany: {
            args: Prisma.WishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          create: {
            args: Prisma.WishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          createMany: {
            args: Prisma.WishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          delete: {
            args: Prisma.WishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          update: {
            args: Prisma.WishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          deleteMany: {
            args: Prisma.WishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          aggregate: {
            args: Prisma.WishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlist>
          }
          groupBy: {
            args: Prisma.WishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Bag: {
        payload: Prisma.$BagPayload<ExtArgs>
        fields: Prisma.BagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          findFirst: {
            args: Prisma.BagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          findMany: {
            args: Prisma.BagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>[]
          }
          create: {
            args: Prisma.BagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          createMany: {
            args: Prisma.BagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>[]
          }
          delete: {
            args: Prisma.BagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          update: {
            args: Prisma.BagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          deleteMany: {
            args: Prisma.BagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          aggregate: {
            args: Prisma.BagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBag>
          }
          groupBy: {
            args: Prisma.BagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BagCountArgs<ExtArgs>
            result: $Utils.Optional<BagCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      PaymentDetail: {
        payload: Prisma.$PaymentDetailPayload<ExtArgs>
        fields: Prisma.PaymentDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          findFirst: {
            args: Prisma.PaymentDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          findMany: {
            args: Prisma.PaymentDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>[]
          }
          create: {
            args: Prisma.PaymentDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          createMany: {
            args: Prisma.PaymentDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>[]
          }
          delete: {
            args: Prisma.PaymentDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          update: {
            args: Prisma.PaymentDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          aggregate: {
            args: Prisma.PaymentDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentDetail>
          }
          groupBy: {
            args: Prisma.PaymentDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethodInfo: {
        payload: Prisma.$PaymentMethodInfoPayload<ExtArgs>
        fields: Prisma.PaymentMethodInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>
          }
          update: {
            args: Prisma.PaymentMethodInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodInfoPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethodInfo>
          }
          groupBy: {
            args: Prisma.PaymentMethodInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodInfoCountAggregateOutputType> | number
          }
        }
      }
      ShippingAddress: {
        payload: Prisma.$ShippingAddressPayload<ExtArgs>
        fields: Prisma.ShippingAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          findFirst: {
            args: Prisma.ShippingAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          findMany: {
            args: Prisma.ShippingAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>[]
          }
          create: {
            args: Prisma.ShippingAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          createMany: {
            args: Prisma.ShippingAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippingAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>[]
          }
          delete: {
            args: Prisma.ShippingAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          update: {
            args: Prisma.ShippingAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          deleteMany: {
            args: Prisma.ShippingAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShippingAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingAddressPayload>
          }
          aggregate: {
            args: Prisma.ShippingAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippingAddress>
          }
          groupBy: {
            args: Prisma.ShippingAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingAddressCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Address: number
    Order: number
    Bag: number
    ShippingAddress: number
    Wishlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | UserCountOutputTypeCountAddressArgs
    Order?: boolean | UserCountOutputTypeCountOrderArgs
    Bag?: boolean | UserCountOutputTypeCountBagArgs
    ShippingAddress?: boolean | UserCountOutputTypeCountShippingAddressArgs
    Wishlist?: boolean | UserCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShippingAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingAddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    Bag: number
    OrderItem: number
    ProductVariantColor: number
    Wishlist: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bag?: boolean | ProductCountOutputTypeCountBagArgs
    OrderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs
    ProductVariantColor?: boolean | ProductCountOutputTypeCountProductVariantColorArgs
    Wishlist?: boolean | ProductCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BagWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductVariantColorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantColorWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductVariantColorCountOutputType
   */

  export type ProductVariantColorCountOutputType = {
    ProductVariantSize: number
    Bag: number
  }

  export type ProductVariantColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductVariantSize?: boolean | ProductVariantColorCountOutputTypeCountProductVariantSizeArgs
    Bag?: boolean | ProductVariantColorCountOutputTypeCountBagArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantColorCountOutputType without action
   */
  export type ProductVariantColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColorCountOutputType
     */
    select?: ProductVariantColorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantColorCountOutputType without action
   */
  export type ProductVariantColorCountOutputTypeCountProductVariantSizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantSizeWhereInput
  }

  /**
   * ProductVariantColorCountOutputType without action
   */
  export type ProductVariantColorCountOutputTypeCountBagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BagWhereInput
  }


  /**
   * Count Type ProductVariantSizeCountOutputType
   */

  export type ProductVariantSizeCountOutputType = {
    OrderItem: number
    Wishlist: number
  }

  export type ProductVariantSizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | ProductVariantSizeCountOutputTypeCountOrderItemArgs
    Wishlist?: boolean | ProductVariantSizeCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantSizeCountOutputType without action
   */
  export type ProductVariantSizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSizeCountOutputType
     */
    select?: ProductVariantSizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantSizeCountOutputType without action
   */
  export type ProductVariantSizeCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductVariantSizeCountOutputType without action
   */
  export type ProductVariantSizeCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    ShippingAddress: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShippingAddress?: boolean | AddressCountOutputTypeCountShippingAddressArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountShippingAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingAddressWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderItem: number
    PaymentDetail: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | OrderCountOutputTypeCountOrderItemArgs
    PaymentDetail?: boolean | OrderCountOutputTypeCountPaymentDetailArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    username: string | null
    email: string | null
    user_id: string | null
    address: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    username: string | null
    email: string | null
    user_id: string | null
    address: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    username: number
    email: number
    user_id: number
    address: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    username?: true
    email?: true
    user_id?: true
    address?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    username?: true
    email?: true
    user_id?: true
    address?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    username?: true
    email?: true
    user_id?: true
    address?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    username: string
    email: string
    user_id: string
    address: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    username?: boolean
    email?: boolean
    user_id?: boolean
    address?: boolean
    Address?: boolean | User$AddressArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    Bag?: boolean | User$BagArgs<ExtArgs>
    ShippingAddress?: boolean | User$ShippingAddressArgs<ExtArgs>
    Wishlist?: boolean | User$WishlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    username?: boolean
    email?: boolean
    user_id?: boolean
    address?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    username?: boolean
    email?: boolean
    user_id?: boolean
    address?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | User$AddressArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    Bag?: boolean | User$BagArgs<ExtArgs>
    ShippingAddress?: boolean | User$ShippingAddressArgs<ExtArgs>
    Wishlist?: boolean | User$WishlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Address: Prisma.$AddressPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Bag: Prisma.$BagPayload<ExtArgs>[]
      ShippingAddress: Prisma.$ShippingAddressPayload<ExtArgs>[]
      Wishlist: Prisma.$WishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      username: string
      email: string
      user_id: string
      address: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Address<T extends User$AddressArgs<ExtArgs> = {}>(args?: Subset<T, User$AddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany"> | Null>
    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    Bag<T extends User$BagArgs<ExtArgs> = {}>(args?: Subset<T, User$BagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findMany"> | Null>
    ShippingAddress<T extends User$ShippingAddressArgs<ExtArgs> = {}>(args?: Subset<T, User$ShippingAddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findMany"> | Null>
    Wishlist<T extends User$WishlistArgs<ExtArgs> = {}>(args?: Subset<T, User$WishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly user_id: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Address
   */
  export type User$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.Bag
   */
  export type User$BagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    where?: BagWhereInput
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    cursor?: BagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * User.ShippingAddress
   */
  export type User$ShippingAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    where?: ShippingAddressWhereInput
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    cursor?: ShippingAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * User.Wishlist
   */
  export type User$WishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    name: string | null
    slug: string | null
    price: number | null
    sku: string | null
    category_id: string | null
    description: string | null
    isFeatured: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    name: string | null
    slug: string | null
    price: number | null
    sku: string | null
    category_id: string | null
    description: string | null
    isFeatured: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    name: number
    slug: number
    price: number
    sku: number
    category_id: number
    description: number
    isFeatured: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    name?: true
    slug?: true
    price?: true
    sku?: true
    category_id?: true
    description?: true
    isFeatured?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    name?: true
    slug?: true
    price?: true
    sku?: true
    category_id?: true
    description?: true
    isFeatured?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    name?: true
    slug?: true
    price?: true
    sku?: true
    category_id?: true
    description?: true
    isFeatured?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    name: string
    slug: string
    price: number
    sku: string | null
    category_id: string
    description: string | null
    isFeatured: boolean
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    sku?: boolean
    category_id?: boolean
    description?: boolean
    isFeatured?: boolean
    Bag?: boolean | Product$BagArgs<ExtArgs>
    OrderItem?: boolean | Product$OrderItemArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    ProductVariantColor?: boolean | Product$ProductVariantColorArgs<ExtArgs>
    Wishlist?: boolean | Product$WishlistArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    sku?: boolean
    category_id?: boolean
    description?: boolean
    isFeatured?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    sku?: boolean
    category_id?: boolean
    description?: boolean
    isFeatured?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bag?: boolean | Product$BagArgs<ExtArgs>
    OrderItem?: boolean | Product$OrderItemArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    ProductVariantColor?: boolean | Product$ProductVariantColorArgs<ExtArgs>
    Wishlist?: boolean | Product$WishlistArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Bag: Prisma.$BagPayload<ExtArgs>[]
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      Category: Prisma.$CategoryPayload<ExtArgs>
      ProductVariantColor: Prisma.$ProductVariantColorPayload<ExtArgs>[]
      Wishlist: Prisma.$WishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      name: string
      slug: string
      price: number
      sku: string | null
      category_id: string
      description: string | null
      isFeatured: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bag<T extends Product$BagArgs<ExtArgs> = {}>(args?: Subset<T, Product$BagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findMany"> | Null>
    OrderItem<T extends Product$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ProductVariantColor<T extends Product$ProductVariantColorArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductVariantColorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findMany"> | Null>
    Wishlist<T extends Product$WishlistArgs<ExtArgs> = {}>(args?: Subset<T, Product$WishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly category_id: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly isFeatured: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.Bag
   */
  export type Product$BagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    where?: BagWhereInput
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    cursor?: BagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Product.OrderItem
   */
  export type Product$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product.ProductVariantColor
   */
  export type Product$ProductVariantColorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    where?: ProductVariantColorWhereInput
    orderBy?: ProductVariantColorOrderByWithRelationInput | ProductVariantColorOrderByWithRelationInput[]
    cursor?: ProductVariantColorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantColorScalarFieldEnum | ProductVariantColorScalarFieldEnum[]
  }

  /**
   * Product.Wishlist
   */
  export type Product$WishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    name: string | null
    slug: string | null
    variant_color_required: boolean | null
    variant_size_required: boolean | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    name: string | null
    slug: string | null
    variant_color_required: boolean | null
    variant_size_required: boolean | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    name: number
    slug: number
    variant_color_required: number
    variant_size_required: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    name?: true
    slug?: true
    variant_color_required?: true
    variant_size_required?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    name?: true
    slug?: true
    variant_color_required?: true
    variant_size_required?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    name?: true
    slug?: true
    variant_color_required?: true
    variant_size_required?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    name: string
    slug: string
    variant_color_required: boolean
    variant_size_required: boolean
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    slug?: boolean
    variant_color_required?: boolean
    variant_size_required?: boolean
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    slug?: boolean
    variant_color_required?: boolean
    variant_size_required?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    slug?: boolean
    variant_color_required?: boolean
    variant_size_required?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      name: string
      slug: string
      variant_color_required: boolean
      variant_size_required: boolean
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly variant_color_required: FieldRef<"Category", 'Boolean'>
    readonly variant_size_required: FieldRef<"Category", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariantColor
   */

  export type AggregateProductVariantColor = {
    _count: ProductVariantColorCountAggregateOutputType | null
    _min: ProductVariantColorMinAggregateOutputType | null
    _max: ProductVariantColorMaxAggregateOutputType | null
  }

  export type ProductVariantColorMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    color: string | null
    product_id: string | null
  }

  export type ProductVariantColorMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    color: string | null
    product_id: string | null
  }

  export type ProductVariantColorCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    color: number
    images: number
    product_id: number
    _all: number
  }


  export type ProductVariantColorMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    color?: true
    product_id?: true
  }

  export type ProductVariantColorMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    color?: true
    product_id?: true
  }

  export type ProductVariantColorCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    color?: true
    images?: true
    product_id?: true
    _all?: true
  }

  export type ProductVariantColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariantColor to aggregate.
     */
    where?: ProductVariantColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantColors to fetch.
     */
    orderBy?: ProductVariantColorOrderByWithRelationInput | ProductVariantColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariantColors
    **/
    _count?: true | ProductVariantColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantColorMaxAggregateInputType
  }

  export type GetProductVariantColorAggregateType<T extends ProductVariantColorAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariantColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariantColor[P]>
      : GetScalarType<T[P], AggregateProductVariantColor[P]>
  }




  export type ProductVariantColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantColorWhereInput
    orderBy?: ProductVariantColorOrderByWithAggregationInput | ProductVariantColorOrderByWithAggregationInput[]
    by: ProductVariantColorScalarFieldEnum[] | ProductVariantColorScalarFieldEnum
    having?: ProductVariantColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantColorCountAggregateInputType | true
    _min?: ProductVariantColorMinAggregateInputType
    _max?: ProductVariantColorMaxAggregateInputType
  }

  export type ProductVariantColorGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    color: string
    images: string[]
    product_id: string
    _count: ProductVariantColorCountAggregateOutputType | null
    _min: ProductVariantColorMinAggregateOutputType | null
    _max: ProductVariantColorMaxAggregateOutputType | null
  }

  type GetProductVariantColorGroupByPayload<T extends ProductVariantColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantColorGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantColorGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    color?: boolean
    images?: boolean
    product_id?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantSize?: boolean | ProductVariantColor$ProductVariantSizeArgs<ExtArgs>
    Bag?: boolean | ProductVariantColor$BagArgs<ExtArgs>
    _count?: boolean | ProductVariantColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantColor"]>

  export type ProductVariantColorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    color?: boolean
    images?: boolean
    product_id?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantColor"]>

  export type ProductVariantColorSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    color?: boolean
    images?: boolean
    product_id?: boolean
  }

  export type ProductVariantColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantSize?: boolean | ProductVariantColor$ProductVariantSizeArgs<ExtArgs>
    Bag?: boolean | ProductVariantColor$BagArgs<ExtArgs>
    _count?: boolean | ProductVariantColorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantColorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariantColor"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      ProductVariantSize: Prisma.$ProductVariantSizePayload<ExtArgs>[]
      Bag: Prisma.$BagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      color: string
      images: string[]
      product_id: string
    }, ExtArgs["result"]["productVariantColor"]>
    composites: {}
  }

  type ProductVariantColorGetPayload<S extends boolean | null | undefined | ProductVariantColorDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantColorPayload, S>

  type ProductVariantColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantColorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantColorCountAggregateInputType | true
    }

  export interface ProductVariantColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariantColor'], meta: { name: 'ProductVariantColor' } }
    /**
     * Find zero or one ProductVariantColor that matches the filter.
     * @param {ProductVariantColorFindUniqueArgs} args - Arguments to find a ProductVariantColor
     * @example
     * // Get one ProductVariantColor
     * const productVariantColor = await prisma.productVariantColor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantColorFindUniqueArgs>(args: SelectSubset<T, ProductVariantColorFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductVariantColor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductVariantColorFindUniqueOrThrowArgs} args - Arguments to find a ProductVariantColor
     * @example
     * // Get one ProductVariantColor
     * const productVariantColor = await prisma.productVariantColor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantColorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductVariantColor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorFindFirstArgs} args - Arguments to find a ProductVariantColor
     * @example
     * // Get one ProductVariantColor
     * const productVariantColor = await prisma.productVariantColor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantColorFindFirstArgs>(args?: SelectSubset<T, ProductVariantColorFindFirstArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductVariantColor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorFindFirstOrThrowArgs} args - Arguments to find a ProductVariantColor
     * @example
     * // Get one ProductVariantColor
     * const productVariantColor = await prisma.productVariantColor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantColorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductVariantColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariantColors
     * const productVariantColors = await prisma.productVariantColor.findMany()
     * 
     * // Get first 10 ProductVariantColors
     * const productVariantColors = await prisma.productVariantColor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantColorWithIdOnly = await prisma.productVariantColor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantColorFindManyArgs>(args?: SelectSubset<T, ProductVariantColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductVariantColor.
     * @param {ProductVariantColorCreateArgs} args - Arguments to create a ProductVariantColor.
     * @example
     * // Create one ProductVariantColor
     * const ProductVariantColor = await prisma.productVariantColor.create({
     *   data: {
     *     // ... data to create a ProductVariantColor
     *   }
     * })
     * 
     */
    create<T extends ProductVariantColorCreateArgs>(args: SelectSubset<T, ProductVariantColorCreateArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductVariantColors.
     * @param {ProductVariantColorCreateManyArgs} args - Arguments to create many ProductVariantColors.
     * @example
     * // Create many ProductVariantColors
     * const productVariantColor = await prisma.productVariantColor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantColorCreateManyArgs>(args?: SelectSubset<T, ProductVariantColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariantColors and returns the data saved in the database.
     * @param {ProductVariantColorCreateManyAndReturnArgs} args - Arguments to create many ProductVariantColors.
     * @example
     * // Create many ProductVariantColors
     * const productVariantColor = await prisma.productVariantColor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariantColors and only return the `id`
     * const productVariantColorWithIdOnly = await prisma.productVariantColor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantColorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantColorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductVariantColor.
     * @param {ProductVariantColorDeleteArgs} args - Arguments to delete one ProductVariantColor.
     * @example
     * // Delete one ProductVariantColor
     * const ProductVariantColor = await prisma.productVariantColor.delete({
     *   where: {
     *     // ... filter to delete one ProductVariantColor
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantColorDeleteArgs>(args: SelectSubset<T, ProductVariantColorDeleteArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductVariantColor.
     * @param {ProductVariantColorUpdateArgs} args - Arguments to update one ProductVariantColor.
     * @example
     * // Update one ProductVariantColor
     * const productVariantColor = await prisma.productVariantColor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantColorUpdateArgs>(args: SelectSubset<T, ProductVariantColorUpdateArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductVariantColors.
     * @param {ProductVariantColorDeleteManyArgs} args - Arguments to filter ProductVariantColors to delete.
     * @example
     * // Delete a few ProductVariantColors
     * const { count } = await prisma.productVariantColor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantColorDeleteManyArgs>(args?: SelectSubset<T, ProductVariantColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariantColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariantColors
     * const productVariantColor = await prisma.productVariantColor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantColorUpdateManyArgs>(args: SelectSubset<T, ProductVariantColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariantColor.
     * @param {ProductVariantColorUpsertArgs} args - Arguments to update or create a ProductVariantColor.
     * @example
     * // Update or create a ProductVariantColor
     * const productVariantColor = await prisma.productVariantColor.upsert({
     *   create: {
     *     // ... data to create a ProductVariantColor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariantColor we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantColorUpsertArgs>(args: SelectSubset<T, ProductVariantColorUpsertArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductVariantColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorCountArgs} args - Arguments to filter ProductVariantColors to count.
     * @example
     * // Count the number of ProductVariantColors
     * const count = await prisma.productVariantColor.count({
     *   where: {
     *     // ... the filter for the ProductVariantColors we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantColorCountArgs>(
      args?: Subset<T, ProductVariantColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariantColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantColorAggregateArgs>(args: Subset<T, ProductVariantColorAggregateArgs>): Prisma.PrismaPromise<GetProductVariantColorAggregateType<T>>

    /**
     * Group by ProductVariantColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantColorGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariantColor model
   */
  readonly fields: ProductVariantColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariantColor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ProductVariantSize<T extends ProductVariantColor$ProductVariantSizeArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantColor$ProductVariantSizeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findMany"> | Null>
    Bag<T extends ProductVariantColor$BagArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantColor$BagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariantColor model
   */ 
  interface ProductVariantColorFieldRefs {
    readonly id: FieldRef<"ProductVariantColor", 'String'>
    readonly created_at: FieldRef<"ProductVariantColor", 'DateTime'>
    readonly updated_at: FieldRef<"ProductVariantColor", 'DateTime'>
    readonly color: FieldRef<"ProductVariantColor", 'String'>
    readonly images: FieldRef<"ProductVariantColor", 'String[]'>
    readonly product_id: FieldRef<"ProductVariantColor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariantColor findUnique
   */
  export type ProductVariantColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantColor to fetch.
     */
    where: ProductVariantColorWhereUniqueInput
  }

  /**
   * ProductVariantColor findUniqueOrThrow
   */
  export type ProductVariantColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantColor to fetch.
     */
    where: ProductVariantColorWhereUniqueInput
  }

  /**
   * ProductVariantColor findFirst
   */
  export type ProductVariantColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantColor to fetch.
     */
    where?: ProductVariantColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantColors to fetch.
     */
    orderBy?: ProductVariantColorOrderByWithRelationInput | ProductVariantColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariantColors.
     */
    cursor?: ProductVariantColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariantColors.
     */
    distinct?: ProductVariantColorScalarFieldEnum | ProductVariantColorScalarFieldEnum[]
  }

  /**
   * ProductVariantColor findFirstOrThrow
   */
  export type ProductVariantColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantColor to fetch.
     */
    where?: ProductVariantColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantColors to fetch.
     */
    orderBy?: ProductVariantColorOrderByWithRelationInput | ProductVariantColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariantColors.
     */
    cursor?: ProductVariantColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariantColors.
     */
    distinct?: ProductVariantColorScalarFieldEnum | ProductVariantColorScalarFieldEnum[]
  }

  /**
   * ProductVariantColor findMany
   */
  export type ProductVariantColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantColors to fetch.
     */
    where?: ProductVariantColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantColors to fetch.
     */
    orderBy?: ProductVariantColorOrderByWithRelationInput | ProductVariantColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariantColors.
     */
    cursor?: ProductVariantColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantColors.
     */
    skip?: number
    distinct?: ProductVariantColorScalarFieldEnum | ProductVariantColorScalarFieldEnum[]
  }

  /**
   * ProductVariantColor create
   */
  export type ProductVariantColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariantColor.
     */
    data: XOR<ProductVariantColorCreateInput, ProductVariantColorUncheckedCreateInput>
  }

  /**
   * ProductVariantColor createMany
   */
  export type ProductVariantColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariantColors.
     */
    data: ProductVariantColorCreateManyInput | ProductVariantColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariantColor createManyAndReturn
   */
  export type ProductVariantColorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductVariantColors.
     */
    data: ProductVariantColorCreateManyInput | ProductVariantColorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariantColor update
   */
  export type ProductVariantColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariantColor.
     */
    data: XOR<ProductVariantColorUpdateInput, ProductVariantColorUncheckedUpdateInput>
    /**
     * Choose, which ProductVariantColor to update.
     */
    where: ProductVariantColorWhereUniqueInput
  }

  /**
   * ProductVariantColor updateMany
   */
  export type ProductVariantColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariantColors.
     */
    data: XOR<ProductVariantColorUpdateManyMutationInput, ProductVariantColorUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariantColors to update
     */
    where?: ProductVariantColorWhereInput
  }

  /**
   * ProductVariantColor upsert
   */
  export type ProductVariantColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariantColor to update in case it exists.
     */
    where: ProductVariantColorWhereUniqueInput
    /**
     * In case the ProductVariantColor found by the `where` argument doesn't exist, create a new ProductVariantColor with this data.
     */
    create: XOR<ProductVariantColorCreateInput, ProductVariantColorUncheckedCreateInput>
    /**
     * In case the ProductVariantColor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantColorUpdateInput, ProductVariantColorUncheckedUpdateInput>
  }

  /**
   * ProductVariantColor delete
   */
  export type ProductVariantColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
    /**
     * Filter which ProductVariantColor to delete.
     */
    where: ProductVariantColorWhereUniqueInput
  }

  /**
   * ProductVariantColor deleteMany
   */
  export type ProductVariantColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariantColors to delete
     */
    where?: ProductVariantColorWhereInput
  }

  /**
   * ProductVariantColor.ProductVariantSize
   */
  export type ProductVariantColor$ProductVariantSizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    where?: ProductVariantSizeWhereInput
    orderBy?: ProductVariantSizeOrderByWithRelationInput | ProductVariantSizeOrderByWithRelationInput[]
    cursor?: ProductVariantSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantSizeScalarFieldEnum | ProductVariantSizeScalarFieldEnum[]
  }

  /**
   * ProductVariantColor.Bag
   */
  export type ProductVariantColor$BagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    where?: BagWhereInput
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    cursor?: BagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * ProductVariantColor without action
   */
  export type ProductVariantColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantColor
     */
    select?: ProductVariantColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantColorInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariantSize
   */

  export type AggregateProductVariantSize = {
    _count: ProductVariantSizeCountAggregateOutputType | null
    _avg: ProductVariantSizeAvgAggregateOutputType | null
    _sum: ProductVariantSizeSumAggregateOutputType | null
    _min: ProductVariantSizeMinAggregateOutputType | null
    _max: ProductVariantSizeMaxAggregateOutputType | null
  }

  export type ProductVariantSizeAvgAggregateOutputType = {
    stock: number | null
  }

  export type ProductVariantSizeSumAggregateOutputType = {
    stock: number | null
  }

  export type ProductVariantSizeMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    size: $Enums.PRODUCT_SIZES | null
    stock: number | null
    status: $Enums.PRODUCT_STATUS | null
    variant_color_id: string | null
  }

  export type ProductVariantSizeMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    size: $Enums.PRODUCT_SIZES | null
    stock: number | null
    status: $Enums.PRODUCT_STATUS | null
    variant_color_id: string | null
  }

  export type ProductVariantSizeCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    size: number
    stock: number
    status: number
    variant_color_id: number
    _all: number
  }


  export type ProductVariantSizeAvgAggregateInputType = {
    stock?: true
  }

  export type ProductVariantSizeSumAggregateInputType = {
    stock?: true
  }

  export type ProductVariantSizeMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    size?: true
    stock?: true
    status?: true
    variant_color_id?: true
  }

  export type ProductVariantSizeMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    size?: true
    stock?: true
    status?: true
    variant_color_id?: true
  }

  export type ProductVariantSizeCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    size?: true
    stock?: true
    status?: true
    variant_color_id?: true
    _all?: true
  }

  export type ProductVariantSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariantSize to aggregate.
     */
    where?: ProductVariantSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantSizes to fetch.
     */
    orderBy?: ProductVariantSizeOrderByWithRelationInput | ProductVariantSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariantSizes
    **/
    _count?: true | ProductVariantSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantSizeMaxAggregateInputType
  }

  export type GetProductVariantSizeAggregateType<T extends ProductVariantSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariantSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariantSize[P]>
      : GetScalarType<T[P], AggregateProductVariantSize[P]>
  }




  export type ProductVariantSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantSizeWhereInput
    orderBy?: ProductVariantSizeOrderByWithAggregationInput | ProductVariantSizeOrderByWithAggregationInput[]
    by: ProductVariantSizeScalarFieldEnum[] | ProductVariantSizeScalarFieldEnum
    having?: ProductVariantSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantSizeCountAggregateInputType | true
    _avg?: ProductVariantSizeAvgAggregateInputType
    _sum?: ProductVariantSizeSumAggregateInputType
    _min?: ProductVariantSizeMinAggregateInputType
    _max?: ProductVariantSizeMaxAggregateInputType
  }

  export type ProductVariantSizeGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    variant_color_id: string
    _count: ProductVariantSizeCountAggregateOutputType | null
    _avg: ProductVariantSizeAvgAggregateOutputType | null
    _sum: ProductVariantSizeSumAggregateOutputType | null
    _min: ProductVariantSizeMinAggregateOutputType | null
    _max: ProductVariantSizeMaxAggregateOutputType | null
  }

  type GetProductVariantSizeGroupByPayload<T extends ProductVariantSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantSizeGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    size?: boolean
    stock?: boolean
    status?: boolean
    variant_color_id?: boolean
    OrderItem?: boolean | ProductVariantSize$OrderItemArgs<ExtArgs>
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
    Wishlist?: boolean | ProductVariantSize$WishlistArgs<ExtArgs>
    _count?: boolean | ProductVariantSizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantSize"]>

  export type ProductVariantSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    size?: boolean
    stock?: boolean
    status?: boolean
    variant_color_id?: boolean
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariantSize"]>

  export type ProductVariantSizeSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    size?: boolean
    stock?: boolean
    status?: boolean
    variant_color_id?: boolean
  }

  export type ProductVariantSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | ProductVariantSize$OrderItemArgs<ExtArgs>
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
    Wishlist?: boolean | ProductVariantSize$WishlistArgs<ExtArgs>
    _count?: boolean | ProductVariantSizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
  }

  export type $ProductVariantSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariantSize"
    objects: {
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      ProductVariantColor: Prisma.$ProductVariantColorPayload<ExtArgs>
      Wishlist: Prisma.$WishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      size: $Enums.PRODUCT_SIZES
      stock: number
      status: $Enums.PRODUCT_STATUS
      variant_color_id: string
    }, ExtArgs["result"]["productVariantSize"]>
    composites: {}
  }

  type ProductVariantSizeGetPayload<S extends boolean | null | undefined | ProductVariantSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantSizePayload, S>

  type ProductVariantSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantSizeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantSizeCountAggregateInputType | true
    }

  export interface ProductVariantSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariantSize'], meta: { name: 'ProductVariantSize' } }
    /**
     * Find zero or one ProductVariantSize that matches the filter.
     * @param {ProductVariantSizeFindUniqueArgs} args - Arguments to find a ProductVariantSize
     * @example
     * // Get one ProductVariantSize
     * const productVariantSize = await prisma.productVariantSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantSizeFindUniqueArgs>(args: SelectSubset<T, ProductVariantSizeFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductVariantSize that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductVariantSizeFindUniqueOrThrowArgs} args - Arguments to find a ProductVariantSize
     * @example
     * // Get one ProductVariantSize
     * const productVariantSize = await prisma.productVariantSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductVariantSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeFindFirstArgs} args - Arguments to find a ProductVariantSize
     * @example
     * // Get one ProductVariantSize
     * const productVariantSize = await prisma.productVariantSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantSizeFindFirstArgs>(args?: SelectSubset<T, ProductVariantSizeFindFirstArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductVariantSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeFindFirstOrThrowArgs} args - Arguments to find a ProductVariantSize
     * @example
     * // Get one ProductVariantSize
     * const productVariantSize = await prisma.productVariantSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductVariantSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariantSizes
     * const productVariantSizes = await prisma.productVariantSize.findMany()
     * 
     * // Get first 10 ProductVariantSizes
     * const productVariantSizes = await prisma.productVariantSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantSizeWithIdOnly = await prisma.productVariantSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantSizeFindManyArgs>(args?: SelectSubset<T, ProductVariantSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductVariantSize.
     * @param {ProductVariantSizeCreateArgs} args - Arguments to create a ProductVariantSize.
     * @example
     * // Create one ProductVariantSize
     * const ProductVariantSize = await prisma.productVariantSize.create({
     *   data: {
     *     // ... data to create a ProductVariantSize
     *   }
     * })
     * 
     */
    create<T extends ProductVariantSizeCreateArgs>(args: SelectSubset<T, ProductVariantSizeCreateArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductVariantSizes.
     * @param {ProductVariantSizeCreateManyArgs} args - Arguments to create many ProductVariantSizes.
     * @example
     * // Create many ProductVariantSizes
     * const productVariantSize = await prisma.productVariantSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantSizeCreateManyArgs>(args?: SelectSubset<T, ProductVariantSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariantSizes and returns the data saved in the database.
     * @param {ProductVariantSizeCreateManyAndReturnArgs} args - Arguments to create many ProductVariantSizes.
     * @example
     * // Create many ProductVariantSizes
     * const productVariantSize = await prisma.productVariantSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariantSizes and only return the `id`
     * const productVariantSizeWithIdOnly = await prisma.productVariantSize.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductVariantSize.
     * @param {ProductVariantSizeDeleteArgs} args - Arguments to delete one ProductVariantSize.
     * @example
     * // Delete one ProductVariantSize
     * const ProductVariantSize = await prisma.productVariantSize.delete({
     *   where: {
     *     // ... filter to delete one ProductVariantSize
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantSizeDeleteArgs>(args: SelectSubset<T, ProductVariantSizeDeleteArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductVariantSize.
     * @param {ProductVariantSizeUpdateArgs} args - Arguments to update one ProductVariantSize.
     * @example
     * // Update one ProductVariantSize
     * const productVariantSize = await prisma.productVariantSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantSizeUpdateArgs>(args: SelectSubset<T, ProductVariantSizeUpdateArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductVariantSizes.
     * @param {ProductVariantSizeDeleteManyArgs} args - Arguments to filter ProductVariantSizes to delete.
     * @example
     * // Delete a few ProductVariantSizes
     * const { count } = await prisma.productVariantSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantSizeDeleteManyArgs>(args?: SelectSubset<T, ProductVariantSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariantSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariantSizes
     * const productVariantSize = await prisma.productVariantSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantSizeUpdateManyArgs>(args: SelectSubset<T, ProductVariantSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariantSize.
     * @param {ProductVariantSizeUpsertArgs} args - Arguments to update or create a ProductVariantSize.
     * @example
     * // Update or create a ProductVariantSize
     * const productVariantSize = await prisma.productVariantSize.upsert({
     *   create: {
     *     // ... data to create a ProductVariantSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariantSize we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantSizeUpsertArgs>(args: SelectSubset<T, ProductVariantSizeUpsertArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductVariantSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeCountArgs} args - Arguments to filter ProductVariantSizes to count.
     * @example
     * // Count the number of ProductVariantSizes
     * const count = await prisma.productVariantSize.count({
     *   where: {
     *     // ... the filter for the ProductVariantSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantSizeCountArgs>(
      args?: Subset<T, ProductVariantSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariantSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantSizeAggregateArgs>(args: Subset<T, ProductVariantSizeAggregateArgs>): Prisma.PrismaPromise<GetProductVariantSizeAggregateType<T>>

    /**
     * Group by ProductVariantSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantSizeGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariantSize model
   */
  readonly fields: ProductVariantSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariantSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderItem<T extends ProductVariantSize$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantSize$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    ProductVariantColor<T extends ProductVariantColorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantColorDefaultArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Wishlist<T extends ProductVariantSize$WishlistArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantSize$WishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariantSize model
   */ 
  interface ProductVariantSizeFieldRefs {
    readonly id: FieldRef<"ProductVariantSize", 'String'>
    readonly created_at: FieldRef<"ProductVariantSize", 'DateTime'>
    readonly updated_at: FieldRef<"ProductVariantSize", 'DateTime'>
    readonly size: FieldRef<"ProductVariantSize", 'PRODUCT_SIZES'>
    readonly stock: FieldRef<"ProductVariantSize", 'Int'>
    readonly status: FieldRef<"ProductVariantSize", 'PRODUCT_STATUS'>
    readonly variant_color_id: FieldRef<"ProductVariantSize", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariantSize findUnique
   */
  export type ProductVariantSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantSize to fetch.
     */
    where: ProductVariantSizeWhereUniqueInput
  }

  /**
   * ProductVariantSize findUniqueOrThrow
   */
  export type ProductVariantSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantSize to fetch.
     */
    where: ProductVariantSizeWhereUniqueInput
  }

  /**
   * ProductVariantSize findFirst
   */
  export type ProductVariantSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantSize to fetch.
     */
    where?: ProductVariantSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantSizes to fetch.
     */
    orderBy?: ProductVariantSizeOrderByWithRelationInput | ProductVariantSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariantSizes.
     */
    cursor?: ProductVariantSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariantSizes.
     */
    distinct?: ProductVariantSizeScalarFieldEnum | ProductVariantSizeScalarFieldEnum[]
  }

  /**
   * ProductVariantSize findFirstOrThrow
   */
  export type ProductVariantSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantSize to fetch.
     */
    where?: ProductVariantSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantSizes to fetch.
     */
    orderBy?: ProductVariantSizeOrderByWithRelationInput | ProductVariantSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariantSizes.
     */
    cursor?: ProductVariantSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariantSizes.
     */
    distinct?: ProductVariantSizeScalarFieldEnum | ProductVariantSizeScalarFieldEnum[]
  }

  /**
   * ProductVariantSize findMany
   */
  export type ProductVariantSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariantSizes to fetch.
     */
    where?: ProductVariantSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariantSizes to fetch.
     */
    orderBy?: ProductVariantSizeOrderByWithRelationInput | ProductVariantSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariantSizes.
     */
    cursor?: ProductVariantSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariantSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariantSizes.
     */
    skip?: number
    distinct?: ProductVariantSizeScalarFieldEnum | ProductVariantSizeScalarFieldEnum[]
  }

  /**
   * ProductVariantSize create
   */
  export type ProductVariantSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariantSize.
     */
    data: XOR<ProductVariantSizeCreateInput, ProductVariantSizeUncheckedCreateInput>
  }

  /**
   * ProductVariantSize createMany
   */
  export type ProductVariantSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariantSizes.
     */
    data: ProductVariantSizeCreateManyInput | ProductVariantSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariantSize createManyAndReturn
   */
  export type ProductVariantSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductVariantSizes.
     */
    data: ProductVariantSizeCreateManyInput | ProductVariantSizeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariantSize update
   */
  export type ProductVariantSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariantSize.
     */
    data: XOR<ProductVariantSizeUpdateInput, ProductVariantSizeUncheckedUpdateInput>
    /**
     * Choose, which ProductVariantSize to update.
     */
    where: ProductVariantSizeWhereUniqueInput
  }

  /**
   * ProductVariantSize updateMany
   */
  export type ProductVariantSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariantSizes.
     */
    data: XOR<ProductVariantSizeUpdateManyMutationInput, ProductVariantSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariantSizes to update
     */
    where?: ProductVariantSizeWhereInput
  }

  /**
   * ProductVariantSize upsert
   */
  export type ProductVariantSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariantSize to update in case it exists.
     */
    where: ProductVariantSizeWhereUniqueInput
    /**
     * In case the ProductVariantSize found by the `where` argument doesn't exist, create a new ProductVariantSize with this data.
     */
    create: XOR<ProductVariantSizeCreateInput, ProductVariantSizeUncheckedCreateInput>
    /**
     * In case the ProductVariantSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantSizeUpdateInput, ProductVariantSizeUncheckedUpdateInput>
  }

  /**
   * ProductVariantSize delete
   */
  export type ProductVariantSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
    /**
     * Filter which ProductVariantSize to delete.
     */
    where: ProductVariantSizeWhereUniqueInput
  }

  /**
   * ProductVariantSize deleteMany
   */
  export type ProductVariantSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariantSizes to delete
     */
    where?: ProductVariantSizeWhereInput
  }

  /**
   * ProductVariantSize.OrderItem
   */
  export type ProductVariantSize$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ProductVariantSize.Wishlist
   */
  export type ProductVariantSize$WishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * ProductVariantSize without action
   */
  export type ProductVariantSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantSize
     */
    select?: ProductVariantSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantSizeInclude<ExtArgs> | null
  }


  /**
   * Model Wishlist
   */

  export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  export type WishlistMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    product_variant_size_id: string | null
    product_id: string | null
  }

  export type WishlistMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    product_variant_size_id: string | null
    product_id: string | null
  }

  export type WishlistCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    product_variant_size_id: number
    product_id: number
    _all: number
  }


  export type WishlistMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    product_variant_size_id?: true
    product_id?: true
  }

  export type WishlistMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    product_variant_size_id?: true
    product_id?: true
  }

  export type WishlistCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    product_variant_size_id?: true
    product_id?: true
    _all?: true
  }

  export type WishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlist to aggregate.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishlists
    **/
    _count?: true | WishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType
  }

  export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlist[P]>
      : GetScalarType<T[P], AggregateWishlist[P]>
  }




  export type WishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithAggregationInput | WishlistOrderByWithAggregationInput[]
    by: WishlistScalarFieldEnum[] | WishlistScalarFieldEnum
    having?: WishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistCountAggregateInputType | true
    _min?: WishlistMinAggregateInputType
    _max?: WishlistMaxAggregateInputType
  }

  export type WishlistGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    user_id: string
    product_variant_size_id: string
    product_id: string
    _count: WishlistCountAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  type GetWishlistGroupByPayload<T extends WishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistGroupByOutputType[P]>
        }
      >
    >


  export type WishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    product_variant_size_id?: boolean
    product_id?: boolean
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    product_variant_size_id?: boolean
    product_id?: boolean
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    product_variant_size_id?: boolean
    product_id?: boolean
  }

  export type WishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WishlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wishlist"
    objects: {
      ProductVariantSize: Prisma.$ProductVariantSizePayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      user_id: string
      product_variant_size_id: string
      product_id: string
    }, ExtArgs["result"]["wishlist"]>
    composites: {}
  }

  type WishlistGetPayload<S extends boolean | null | undefined | WishlistDefaultArgs> = $Result.GetResult<Prisma.$WishlistPayload, S>

  type WishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WishlistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WishlistCountAggregateInputType | true
    }

  export interface WishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wishlist'], meta: { name: 'Wishlist' } }
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {WishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistFindUniqueArgs>(args: SelectSubset<T, WishlistFindUniqueArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistFindFirstArgs>(args?: SelectSubset<T, WishlistFindFirstArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistFindManyArgs>(args?: SelectSubset<T, WishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Wishlist.
     * @param {WishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     * 
     */
    create<T extends WishlistCreateArgs>(args: SelectSubset<T, WishlistCreateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Wishlists.
     * @param {WishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistCreateManyArgs>(args?: SelectSubset<T, WishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {WishlistCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishlists and only return the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Wishlist.
     * @param {WishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     * 
     */
    delete<T extends WishlistDeleteArgs>(args: SelectSubset<T, WishlistDeleteArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Wishlist.
     * @param {WishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistUpdateArgs>(args: SelectSubset<T, WishlistUpdateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Wishlists.
     * @param {WishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistDeleteManyArgs>(args?: SelectSubset<T, WishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistUpdateManyArgs>(args: SelectSubset<T, WishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wishlist.
     * @param {WishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends WishlistUpsertArgs>(args: SelectSubset<T, WishlistUpsertArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends WishlistCountArgs>(
      args?: Subset<T, WishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistAggregateArgs>(args: Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>

    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistGroupByArgs['orderBy'] }
        : { orderBy?: WishlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wishlist model
   */
  readonly fields: WishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductVariantSize<T extends ProductVariantSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantSizeDefaultArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wishlist model
   */ 
  interface WishlistFieldRefs {
    readonly id: FieldRef<"Wishlist", 'String'>
    readonly created_at: FieldRef<"Wishlist", 'DateTime'>
    readonly updated_at: FieldRef<"Wishlist", 'DateTime'>
    readonly user_id: FieldRef<"Wishlist", 'String'>
    readonly product_variant_size_id: FieldRef<"Wishlist", 'String'>
    readonly product_id: FieldRef<"Wishlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wishlist findUnique
   */
  export type WishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findUniqueOrThrow
   */
  export type WishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findFirst
   */
  export type WishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findFirstOrThrow
   */
  export type WishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findMany
   */
  export type WishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist create
   */
  export type WishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Wishlist.
     */
    data: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
  }

  /**
   * Wishlist createMany
   */
  export type WishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wishlist createManyAndReturn
   */
  export type WishlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlist update
   */
  export type WishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Wishlist.
     */
    data: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
    /**
     * Choose, which Wishlist to update.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist updateMany
   */
  export type WishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistWhereInput
  }

  /**
   * Wishlist upsert
   */
  export type WishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Wishlist to update in case it exists.
     */
    where: WishlistWhereUniqueInput
    /**
     * In case the Wishlist found by the `where` argument doesn't exist, create a new Wishlist with this data.
     */
    create: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
    /**
     * In case the Wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
  }

  /**
   * Wishlist delete
   */
  export type WishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter which Wishlist to delete.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist deleteMany
   */
  export type WishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlists to delete
     */
    where?: WishlistWhereInput
  }

  /**
   * Wishlist without action
   */
  export type WishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    house_number: string | null
    address: string | null
    barangay: string | null
    municipality: string | null
    province: string | null
    zip_code: string | null
    complete_address: string | null
    additional_address: string | null
    user_id: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    house_number: string | null
    address: string | null
    barangay: string | null
    municipality: string | null
    province: string | null
    zip_code: string | null
    complete_address: string | null
    additional_address: string | null
    user_id: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    house_number: number
    address: number
    barangay: number
    municipality: number
    province: number
    zip_code: number
    complete_address: number
    additional_address: number
    user_id: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    house_number?: true
    address?: true
    barangay?: true
    municipality?: true
    province?: true
    zip_code?: true
    complete_address?: true
    additional_address?: true
    user_id?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    house_number?: true
    address?: true
    barangay?: true
    municipality?: true
    province?: true
    zip_code?: true
    complete_address?: true
    additional_address?: true
    user_id?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    house_number?: true
    address?: true
    barangay?: true
    municipality?: true
    province?: true
    zip_code?: true
    complete_address?: true
    additional_address?: true
    user_id?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address: string | null
    user_id: string
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    house_number?: boolean
    address?: boolean
    barangay?: boolean
    municipality?: boolean
    province?: boolean
    zip_code?: boolean
    complete_address?: boolean
    additional_address?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ShippingAddress?: boolean | Address$ShippingAddressArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    house_number?: boolean
    address?: boolean
    barangay?: boolean
    municipality?: boolean
    province?: boolean
    zip_code?: boolean
    complete_address?: boolean
    additional_address?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    house_number?: boolean
    address?: boolean
    barangay?: boolean
    municipality?: boolean
    province?: boolean
    zip_code?: boolean
    complete_address?: boolean
    additional_address?: boolean
    user_id?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ShippingAddress?: boolean | Address$ShippingAddressArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ShippingAddress: Prisma.$ShippingAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      house_number: string
      address: string
      barangay: string
      municipality: string
      province: string
      zip_code: string
      complete_address: string
      additional_address: string | null
      user_id: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ShippingAddress<T extends Address$ShippingAddressArgs<ExtArgs> = {}>(args?: Subset<T, Address$ShippingAddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly created_at: FieldRef<"Address", 'DateTime'>
    readonly updated_at: FieldRef<"Address", 'DateTime'>
    readonly house_number: FieldRef<"Address", 'String'>
    readonly address: FieldRef<"Address", 'String'>
    readonly barangay: FieldRef<"Address", 'String'>
    readonly municipality: FieldRef<"Address", 'String'>
    readonly province: FieldRef<"Address", 'String'>
    readonly zip_code: FieldRef<"Address", 'String'>
    readonly complete_address: FieldRef<"Address", 'String'>
    readonly additional_address: FieldRef<"Address", 'String'>
    readonly user_id: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address.ShippingAddress
   */
  export type Address$ShippingAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    where?: ShippingAddressWhereInput
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    cursor?: ShippingAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Bag
   */

  export type AggregateBag = {
    _count: BagCountAggregateOutputType | null
    _avg: BagAvgAggregateOutputType | null
    _sum: BagSumAggregateOutputType | null
    _min: BagMinAggregateOutputType | null
    _max: BagMaxAggregateOutputType | null
  }

  export type BagAvgAggregateOutputType = {
    quantity: number | null
  }

  export type BagSumAggregateOutputType = {
    quantity: number | null
  }

  export type BagMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    product_id: string | null
    product_variant_size_id: string | null
    product_variant_color_id: string | null
    quantity: number | null
  }

  export type BagMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    product_id: string | null
    product_variant_size_id: string | null
    product_variant_color_id: string | null
    quantity: number | null
  }

  export type BagCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    product_id: number
    product_variant_size_id: number
    product_variant_color_id: number
    quantity: number
    _all: number
  }


  export type BagAvgAggregateInputType = {
    quantity?: true
  }

  export type BagSumAggregateInputType = {
    quantity?: true
  }

  export type BagMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    product_id?: true
    product_variant_size_id?: true
    product_variant_color_id?: true
    quantity?: true
  }

  export type BagMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    product_id?: true
    product_variant_size_id?: true
    product_variant_color_id?: true
    quantity?: true
  }

  export type BagCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    product_id?: true
    product_variant_size_id?: true
    product_variant_color_id?: true
    quantity?: true
    _all?: true
  }

  export type BagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bag to aggregate.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bags
    **/
    _count?: true | BagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BagMaxAggregateInputType
  }

  export type GetBagAggregateType<T extends BagAggregateArgs> = {
        [P in keyof T & keyof AggregateBag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBag[P]>
      : GetScalarType<T[P], AggregateBag[P]>
  }




  export type BagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BagWhereInput
    orderBy?: BagOrderByWithAggregationInput | BagOrderByWithAggregationInput[]
    by: BagScalarFieldEnum[] | BagScalarFieldEnum
    having?: BagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BagCountAggregateInputType | true
    _avg?: BagAvgAggregateInputType
    _sum?: BagSumAggregateInputType
    _min?: BagMinAggregateInputType
    _max?: BagMaxAggregateInputType
  }

  export type BagGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    user_id: string
    product_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
    _count: BagCountAggregateOutputType | null
    _avg: BagAvgAggregateOutputType | null
    _sum: BagSumAggregateOutputType | null
    _min: BagMinAggregateOutputType | null
    _max: BagMaxAggregateOutputType | null
  }

  type GetBagGroupByPayload<T extends BagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BagGroupByOutputType[P]>
            : GetScalarType<T[P], BagGroupByOutputType[P]>
        }
      >
    >


  export type BagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    product_id?: boolean
    product_variant_size_id?: boolean
    product_variant_color_id?: boolean
    quantity?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bag"]>

  export type BagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    product_id?: boolean
    product_variant_size_id?: boolean
    product_variant_color_id?: boolean
    quantity?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bag"]>

  export type BagSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    product_id?: boolean
    product_variant_size_id?: boolean
    product_variant_color_id?: boolean
    quantity?: boolean
  }

  export type BagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantColor?: boolean | ProductVariantColorDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bag"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      ProductVariantColor: Prisma.$ProductVariantColorPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      user_id: string
      product_id: string
      product_variant_size_id: string
      product_variant_color_id: string
      quantity: number
    }, ExtArgs["result"]["bag"]>
    composites: {}
  }

  type BagGetPayload<S extends boolean | null | undefined | BagDefaultArgs> = $Result.GetResult<Prisma.$BagPayload, S>

  type BagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BagCountAggregateInputType | true
    }

  export interface BagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bag'], meta: { name: 'Bag' } }
    /**
     * Find zero or one Bag that matches the filter.
     * @param {BagFindUniqueArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BagFindUniqueArgs>(args: SelectSubset<T, BagFindUniqueArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BagFindUniqueOrThrowArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BagFindUniqueOrThrowArgs>(args: SelectSubset<T, BagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagFindFirstArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BagFindFirstArgs>(args?: SelectSubset<T, BagFindFirstArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagFindFirstOrThrowArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BagFindFirstOrThrowArgs>(args?: SelectSubset<T, BagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bags
     * const bags = await prisma.bag.findMany()
     * 
     * // Get first 10 Bags
     * const bags = await prisma.bag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bagWithIdOnly = await prisma.bag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BagFindManyArgs>(args?: SelectSubset<T, BagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bag.
     * @param {BagCreateArgs} args - Arguments to create a Bag.
     * @example
     * // Create one Bag
     * const Bag = await prisma.bag.create({
     *   data: {
     *     // ... data to create a Bag
     *   }
     * })
     * 
     */
    create<T extends BagCreateArgs>(args: SelectSubset<T, BagCreateArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bags.
     * @param {BagCreateManyArgs} args - Arguments to create many Bags.
     * @example
     * // Create many Bags
     * const bag = await prisma.bag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BagCreateManyArgs>(args?: SelectSubset<T, BagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bags and returns the data saved in the database.
     * @param {BagCreateManyAndReturnArgs} args - Arguments to create many Bags.
     * @example
     * // Create many Bags
     * const bag = await prisma.bag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bags and only return the `id`
     * const bagWithIdOnly = await prisma.bag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BagCreateManyAndReturnArgs>(args?: SelectSubset<T, BagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bag.
     * @param {BagDeleteArgs} args - Arguments to delete one Bag.
     * @example
     * // Delete one Bag
     * const Bag = await prisma.bag.delete({
     *   where: {
     *     // ... filter to delete one Bag
     *   }
     * })
     * 
     */
    delete<T extends BagDeleteArgs>(args: SelectSubset<T, BagDeleteArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bag.
     * @param {BagUpdateArgs} args - Arguments to update one Bag.
     * @example
     * // Update one Bag
     * const bag = await prisma.bag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BagUpdateArgs>(args: SelectSubset<T, BagUpdateArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bags.
     * @param {BagDeleteManyArgs} args - Arguments to filter Bags to delete.
     * @example
     * // Delete a few Bags
     * const { count } = await prisma.bag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BagDeleteManyArgs>(args?: SelectSubset<T, BagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bags
     * const bag = await prisma.bag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BagUpdateManyArgs>(args: SelectSubset<T, BagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bag.
     * @param {BagUpsertArgs} args - Arguments to update or create a Bag.
     * @example
     * // Update or create a Bag
     * const bag = await prisma.bag.upsert({
     *   create: {
     *     // ... data to create a Bag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bag we want to update
     *   }
     * })
     */
    upsert<T extends BagUpsertArgs>(args: SelectSubset<T, BagUpsertArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagCountArgs} args - Arguments to filter Bags to count.
     * @example
     * // Count the number of Bags
     * const count = await prisma.bag.count({
     *   where: {
     *     // ... the filter for the Bags we want to count
     *   }
     * })
    **/
    count<T extends BagCountArgs>(
      args?: Subset<T, BagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BagAggregateArgs>(args: Subset<T, BagAggregateArgs>): Prisma.PrismaPromise<GetBagAggregateType<T>>

    /**
     * Group by Bag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BagGroupByArgs['orderBy'] }
        : { orderBy?: BagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bag model
   */
  readonly fields: BagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ProductVariantColor<T extends ProductVariantColorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantColorDefaultArgs<ExtArgs>>): Prisma__ProductVariantColorClient<$Result.GetResult<Prisma.$ProductVariantColorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bag model
   */ 
  interface BagFieldRefs {
    readonly id: FieldRef<"Bag", 'String'>
    readonly created_at: FieldRef<"Bag", 'DateTime'>
    readonly updated_at: FieldRef<"Bag", 'DateTime'>
    readonly user_id: FieldRef<"Bag", 'String'>
    readonly product_id: FieldRef<"Bag", 'String'>
    readonly product_variant_size_id: FieldRef<"Bag", 'String'>
    readonly product_variant_color_id: FieldRef<"Bag", 'String'>
    readonly quantity: FieldRef<"Bag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bag findUnique
   */
  export type BagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag findUniqueOrThrow
   */
  export type BagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag findFirst
   */
  export type BagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bags.
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bags.
     */
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Bag findFirstOrThrow
   */
  export type BagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bags.
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bags.
     */
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Bag findMany
   */
  export type BagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bags to fetch.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bags.
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Bag create
   */
  export type BagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * The data needed to create a Bag.
     */
    data: XOR<BagCreateInput, BagUncheckedCreateInput>
  }

  /**
   * Bag createMany
   */
  export type BagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bags.
     */
    data: BagCreateManyInput | BagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bag createManyAndReturn
   */
  export type BagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bags.
     */
    data: BagCreateManyInput | BagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bag update
   */
  export type BagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * The data needed to update a Bag.
     */
    data: XOR<BagUpdateInput, BagUncheckedUpdateInput>
    /**
     * Choose, which Bag to update.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag updateMany
   */
  export type BagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bags.
     */
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyInput>
    /**
     * Filter which Bags to update
     */
    where?: BagWhereInput
  }

  /**
   * Bag upsert
   */
  export type BagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * The filter to search for the Bag to update in case it exists.
     */
    where: BagWhereUniqueInput
    /**
     * In case the Bag found by the `where` argument doesn't exist, create a new Bag with this data.
     */
    create: XOR<BagCreateInput, BagUncheckedCreateInput>
    /**
     * In case the Bag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BagUpdateInput, BagUncheckedUpdateInput>
  }

  /**
   * Bag delete
   */
  export type BagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter which Bag to delete.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag deleteMany
   */
  export type BagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bags to delete
     */
    where?: BagWhereInput
  }

  /**
   * Bag without action
   */
  export type BagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total_amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    total_amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    order_status: $Enums.ORDER_STATUS | null
    total_amount: number | null
    payment_status: $Enums.PAYMENT_STATUS | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    order_status: $Enums.ORDER_STATUS | null
    total_amount: number | null
    payment_status: $Enums.PAYMENT_STATUS | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    order_status: number
    total_amount: number
    payment_status: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total_amount?: true
  }

  export type OrderSumAggregateInputType = {
    total_amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    order_status?: true
    total_amount?: true
    payment_status?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    order_status?: true
    total_amount?: true
    payment_status?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    order_status?: true
    total_amount?: true
    payment_status?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    user_id: string
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    payment_status?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    OrderItem?: boolean | Order$OrderItemArgs<ExtArgs>
    PaymentDetail?: boolean | Order$PaymentDetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    payment_status?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    payment_status?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    OrderItem?: boolean | Order$OrderItemArgs<ExtArgs>
    PaymentDetail?: boolean | Order$PaymentDetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      PaymentDetail: Prisma.$PaymentDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      user_id: string
      order_status: $Enums.ORDER_STATUS
      total_amount: number
      payment_status: $Enums.PAYMENT_STATUS
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    OrderItem<T extends Order$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    PaymentDetail<T extends Order$PaymentDetailArgs<ExtArgs> = {}>(args?: Subset<T, Order$PaymentDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
    readonly user_id: FieldRef<"Order", 'String'>
    readonly order_status: FieldRef<"Order", 'ORDER_STATUS'>
    readonly total_amount: FieldRef<"Order", 'Float'>
    readonly payment_status: FieldRef<"Order", 'PAYMENT_STATUS'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.OrderItem
   */
  export type Order$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.PaymentDetail
   */
  export type Order$PaymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    where?: PaymentDetailWhereInput
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    cursor?: PaymentDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    subtotal: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    subtotal: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    order_id: string | null
    product_id: string | null
    product_variant_size_id: string | null
    quantity: number | null
    price: number | null
    subtotal: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    order_id: string | null
    product_id: string | null
    product_variant_size_id: string | null
    quantity: number | null
    price: number | null
    subtotal: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    order_id: number
    product_id: number
    product_variant_size_id: number
    quantity: number
    price: number
    subtotal: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
    product_variant_size_id?: true
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
    product_variant_size_id?: true
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
    product_variant_size_id?: true
    quantity?: true
    price?: true
    subtotal?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    order_id: string
    product_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    product_variant_size_id?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    product_variant_size_id?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    product_variant_size_id?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ProductVariantSize?: boolean | ProductVariantSizeDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
      ProductVariantSize: Prisma.$ProductVariantSizePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      order_id: string
      product_id: string
      product_variant_size_id: string
      quantity: number
      price: number
      subtotal: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ProductVariantSize<T extends ProductVariantSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantSizeDefaultArgs<ExtArgs>>): Prisma__ProductVariantSizeClient<$Result.GetResult<Prisma.$ProductVariantSizePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly created_at: FieldRef<"OrderItem", 'DateTime'>
    readonly updated_at: FieldRef<"OrderItem", 'DateTime'>
    readonly order_id: FieldRef<"OrderItem", 'String'>
    readonly product_id: FieldRef<"OrderItem", 'String'>
    readonly product_variant_size_id: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Float'>
    readonly subtotal: FieldRef<"OrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model PaymentDetail
   */

  export type AggregatePaymentDetail = {
    _count: PaymentDetailCountAggregateOutputType | null
    _avg: PaymentDetailAvgAggregateOutputType | null
    _sum: PaymentDetailSumAggregateOutputType | null
    _min: PaymentDetailMinAggregateOutputType | null
    _max: PaymentDetailMaxAggregateOutputType | null
  }

  export type PaymentDetailAvgAggregateOutputType = {
    amount_paid: number | null
  }

  export type PaymentDetailSumAggregateOutputType = {
    amount_paid: number | null
  }

  export type PaymentDetailMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    order_id: string | null
    payment_method: $Enums.PAYMENT_METHOD | null
    transaction_id: string | null
    amount_paid: number | null
    payment_status: string | null
  }

  export type PaymentDetailMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    order_id: string | null
    payment_method: $Enums.PAYMENT_METHOD | null
    transaction_id: string | null
    amount_paid: number | null
    payment_status: string | null
  }

  export type PaymentDetailCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    order_id: number
    payment_method: number
    transaction_id: number
    amount_paid: number
    payment_status: number
    _all: number
  }


  export type PaymentDetailAvgAggregateInputType = {
    amount_paid?: true
  }

  export type PaymentDetailSumAggregateInputType = {
    amount_paid?: true
  }

  export type PaymentDetailMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    payment_method?: true
    transaction_id?: true
    amount_paid?: true
    payment_status?: true
  }

  export type PaymentDetailMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    payment_method?: true
    transaction_id?: true
    amount_paid?: true
    payment_status?: true
  }

  export type PaymentDetailCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    payment_method?: true
    transaction_id?: true
    amount_paid?: true
    payment_status?: true
    _all?: true
  }

  export type PaymentDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetail to aggregate.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentDetails
    **/
    _count?: true | PaymentDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentDetailMaxAggregateInputType
  }

  export type GetPaymentDetailAggregateType<T extends PaymentDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetail[P]>
      : GetScalarType<T[P], AggregatePaymentDetail[P]>
  }




  export type PaymentDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailWhereInput
    orderBy?: PaymentDetailOrderByWithAggregationInput | PaymentDetailOrderByWithAggregationInput[]
    by: PaymentDetailScalarFieldEnum[] | PaymentDetailScalarFieldEnum
    having?: PaymentDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentDetailCountAggregateInputType | true
    _avg?: PaymentDetailAvgAggregateInputType
    _sum?: PaymentDetailSumAggregateInputType
    _min?: PaymentDetailMinAggregateInputType
    _max?: PaymentDetailMaxAggregateInputType
  }

  export type PaymentDetailGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    order_id: string
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
    _count: PaymentDetailCountAggregateOutputType | null
    _avg: PaymentDetailAvgAggregateOutputType | null
    _sum: PaymentDetailSumAggregateOutputType | null
    _min: PaymentDetailMinAggregateOutputType | null
    _max: PaymentDetailMaxAggregateOutputType | null
  }

  type GetPaymentDetailGroupByPayload<T extends PaymentDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailGroupByOutputType[P]>
        }
      >
    >


  export type PaymentDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    amount_paid?: boolean
    payment_status?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetail"]>

  export type PaymentDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    amount_paid?: boolean
    payment_status?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetail"]>

  export type PaymentDetailSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    amount_paid?: boolean
    payment_status?: boolean
  }

  export type PaymentDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentDetail"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      order_id: string
      payment_method: $Enums.PAYMENT_METHOD
      transaction_id: string
      amount_paid: number
      payment_status: string
    }, ExtArgs["result"]["paymentDetail"]>
    composites: {}
  }

  type PaymentDetailGetPayload<S extends boolean | null | undefined | PaymentDetailDefaultArgs> = $Result.GetResult<Prisma.$PaymentDetailPayload, S>

  type PaymentDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentDetailCountAggregateInputType | true
    }

  export interface PaymentDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentDetail'], meta: { name: 'PaymentDetail' } }
    /**
     * Find zero or one PaymentDetail that matches the filter.
     * @param {PaymentDetailFindUniqueArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentDetailFindUniqueArgs>(args: SelectSubset<T, PaymentDetailFindUniqueArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentDetailFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindFirstArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentDetailFindFirstArgs>(args?: SelectSubset<T, PaymentDetailFindFirstArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindFirstOrThrowArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetail.findMany()
     * 
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentDetailWithIdOnly = await prisma.paymentDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentDetailFindManyArgs>(args?: SelectSubset<T, PaymentDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentDetail.
     * @param {PaymentDetailCreateArgs} args - Arguments to create a PaymentDetail.
     * @example
     * // Create one PaymentDetail
     * const PaymentDetail = await prisma.paymentDetail.create({
     *   data: {
     *     // ... data to create a PaymentDetail
     *   }
     * })
     * 
     */
    create<T extends PaymentDetailCreateArgs>(args: SelectSubset<T, PaymentDetailCreateArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentDetails.
     * @param {PaymentDetailCreateManyArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentDetailCreateManyArgs>(args?: SelectSubset<T, PaymentDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentDetails and returns the data saved in the database.
     * @param {PaymentDetailCreateManyAndReturnArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentDetails and only return the `id`
     * const paymentDetailWithIdOnly = await prisma.paymentDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentDetail.
     * @param {PaymentDetailDeleteArgs} args - Arguments to delete one PaymentDetail.
     * @example
     * // Delete one PaymentDetail
     * const PaymentDetail = await prisma.paymentDetail.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetail
     *   }
     * })
     * 
     */
    delete<T extends PaymentDetailDeleteArgs>(args: SelectSubset<T, PaymentDetailDeleteArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentDetail.
     * @param {PaymentDetailUpdateArgs} args - Arguments to update one PaymentDetail.
     * @example
     * // Update one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentDetailUpdateArgs>(args: SelectSubset<T, PaymentDetailUpdateArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDetailDeleteManyArgs>(args?: SelectSubset<T, PaymentDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentDetailUpdateManyArgs>(args: SelectSubset<T, PaymentDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentDetail.
     * @param {PaymentDetailUpsertArgs} args - Arguments to update or create a PaymentDetail.
     * @example
     * // Update or create a PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.upsert({
     *   create: {
     *     // ... data to create a PaymentDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetail we want to update
     *   }
     * })
     */
    upsert<T extends PaymentDetailUpsertArgs>(args: SelectSubset<T, PaymentDetailUpsertArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetail.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
    **/
    count<T extends PaymentDetailCountArgs>(
      args?: Subset<T, PaymentDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentDetailAggregateArgs>(args: Subset<T, PaymentDetailAggregateArgs>): Prisma.PrismaPromise<GetPaymentDetailAggregateType<T>>

    /**
     * Group by PaymentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailGroupByArgs['orderBy'] }
        : { orderBy?: PaymentDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentDetail model
   */
  readonly fields: PaymentDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentDetail model
   */ 
  interface PaymentDetailFieldRefs {
    readonly id: FieldRef<"PaymentDetail", 'String'>
    readonly created_at: FieldRef<"PaymentDetail", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentDetail", 'DateTime'>
    readonly order_id: FieldRef<"PaymentDetail", 'String'>
    readonly payment_method: FieldRef<"PaymentDetail", 'PAYMENT_METHOD'>
    readonly transaction_id: FieldRef<"PaymentDetail", 'String'>
    readonly amount_paid: FieldRef<"PaymentDetail", 'Float'>
    readonly payment_status: FieldRef<"PaymentDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentDetail findUnique
   */
  export type PaymentDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail findUniqueOrThrow
   */
  export type PaymentDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail findFirst
   */
  export type PaymentDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * PaymentDetail findFirstOrThrow
   */
  export type PaymentDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * PaymentDetail findMany
   */
  export type PaymentDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * PaymentDetail create
   */
  export type PaymentDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentDetail.
     */
    data: XOR<PaymentDetailCreateInput, PaymentDetailUncheckedCreateInput>
  }

  /**
   * PaymentDetail createMany
   */
  export type PaymentDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailCreateManyInput | PaymentDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentDetail createManyAndReturn
   */
  export type PaymentDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailCreateManyInput | PaymentDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentDetail update
   */
  export type PaymentDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentDetail.
     */
    data: XOR<PaymentDetailUpdateInput, PaymentDetailUncheckedUpdateInput>
    /**
     * Choose, which PaymentDetail to update.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail updateMany
   */
  export type PaymentDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailWhereInput
  }

  /**
   * PaymentDetail upsert
   */
  export type PaymentDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentDetail to update in case it exists.
     */
    where: PaymentDetailWhereUniqueInput
    /**
     * In case the PaymentDetail found by the `where` argument doesn't exist, create a new PaymentDetail with this data.
     */
    create: XOR<PaymentDetailCreateInput, PaymentDetailUncheckedCreateInput>
    /**
     * In case the PaymentDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailUpdateInput, PaymentDetailUncheckedUpdateInput>
  }

  /**
   * PaymentDetail delete
   */
  export type PaymentDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter which PaymentDetail to delete.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail deleteMany
   */
  export type PaymentDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailWhereInput
  }

  /**
   * PaymentDetail without action
   */
  export type PaymentDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethodInfo
   */

  export type AggregatePaymentMethodInfo = {
    _count: PaymentMethodInfoCountAggregateOutputType | null
    _min: PaymentMethodInfoMinAggregateOutputType | null
    _max: PaymentMethodInfoMaxAggregateOutputType | null
  }

  export type PaymentMethodInfoMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    method_name: $Enums.PAYMENT_METHOD | null
    description: string | null
    account_name: string | null
    account_number: string | null
    qr_code: string | null
    is_active: boolean | null
  }

  export type PaymentMethodInfoMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    method_name: $Enums.PAYMENT_METHOD | null
    description: string | null
    account_name: string | null
    account_number: string | null
    qr_code: string | null
    is_active: boolean | null
  }

  export type PaymentMethodInfoCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    method_name: number
    description: number
    account_name: number
    account_number: number
    qr_code: number
    is_active: number
    _all: number
  }


  export type PaymentMethodInfoMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    method_name?: true
    description?: true
    account_name?: true
    account_number?: true
    qr_code?: true
    is_active?: true
  }

  export type PaymentMethodInfoMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    method_name?: true
    description?: true
    account_name?: true
    account_number?: true
    qr_code?: true
    is_active?: true
  }

  export type PaymentMethodInfoCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    method_name?: true
    description?: true
    account_name?: true
    account_number?: true
    qr_code?: true
    is_active?: true
    _all?: true
  }

  export type PaymentMethodInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethodInfo to aggregate.
     */
    where?: PaymentMethodInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethodInfos to fetch.
     */
    orderBy?: PaymentMethodInfoOrderByWithRelationInput | PaymentMethodInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethodInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethodInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethodInfos
    **/
    _count?: true | PaymentMethodInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodInfoMaxAggregateInputType
  }

  export type GetPaymentMethodInfoAggregateType<T extends PaymentMethodInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethodInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethodInfo[P]>
      : GetScalarType<T[P], AggregatePaymentMethodInfo[P]>
  }




  export type PaymentMethodInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodInfoWhereInput
    orderBy?: PaymentMethodInfoOrderByWithAggregationInput | PaymentMethodInfoOrderByWithAggregationInput[]
    by: PaymentMethodInfoScalarFieldEnum[] | PaymentMethodInfoScalarFieldEnum
    having?: PaymentMethodInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodInfoCountAggregateInputType | true
    _min?: PaymentMethodInfoMinAggregateInputType
    _max?: PaymentMethodInfoMaxAggregateInputType
  }

  export type PaymentMethodInfoGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    method_name: $Enums.PAYMENT_METHOD
    description: string | null
    account_name: string | null
    account_number: string | null
    qr_code: string | null
    is_active: boolean
    _count: PaymentMethodInfoCountAggregateOutputType | null
    _min: PaymentMethodInfoMinAggregateOutputType | null
    _max: PaymentMethodInfoMaxAggregateOutputType | null
  }

  type GetPaymentMethodInfoGroupByPayload<T extends PaymentMethodInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodInfoGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    method_name?: boolean
    description?: boolean
    account_name?: boolean
    account_number?: boolean
    qr_code?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["paymentMethodInfo"]>

  export type PaymentMethodInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    method_name?: boolean
    description?: boolean
    account_name?: boolean
    account_number?: boolean
    qr_code?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["paymentMethodInfo"]>

  export type PaymentMethodInfoSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    method_name?: boolean
    description?: boolean
    account_name?: boolean
    account_number?: boolean
    qr_code?: boolean
    is_active?: boolean
  }


  export type $PaymentMethodInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethodInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      method_name: $Enums.PAYMENT_METHOD
      description: string | null
      account_name: string | null
      account_number: string | null
      qr_code: string | null
      is_active: boolean
    }, ExtArgs["result"]["paymentMethodInfo"]>
    composites: {}
  }

  type PaymentMethodInfoGetPayload<S extends boolean | null | undefined | PaymentMethodInfoDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodInfoPayload, S>

  type PaymentMethodInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentMethodInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentMethodInfoCountAggregateInputType | true
    }

  export interface PaymentMethodInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethodInfo'], meta: { name: 'PaymentMethodInfo' } }
    /**
     * Find zero or one PaymentMethodInfo that matches the filter.
     * @param {PaymentMethodInfoFindUniqueArgs} args - Arguments to find a PaymentMethodInfo
     * @example
     * // Get one PaymentMethodInfo
     * const paymentMethodInfo = await prisma.paymentMethodInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodInfoFindUniqueArgs>(args: SelectSubset<T, PaymentMethodInfoFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentMethodInfo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentMethodInfoFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethodInfo
     * @example
     * // Get one PaymentMethodInfo
     * const paymentMethodInfo = await prisma.paymentMethodInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentMethodInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoFindFirstArgs} args - Arguments to find a PaymentMethodInfo
     * @example
     * // Get one PaymentMethodInfo
     * const paymentMethodInfo = await prisma.paymentMethodInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodInfoFindFirstArgs>(args?: SelectSubset<T, PaymentMethodInfoFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentMethodInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoFindFirstOrThrowArgs} args - Arguments to find a PaymentMethodInfo
     * @example
     * // Get one PaymentMethodInfo
     * const paymentMethodInfo = await prisma.paymentMethodInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentMethodInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethodInfos
     * const paymentMethodInfos = await prisma.paymentMethodInfo.findMany()
     * 
     * // Get first 10 PaymentMethodInfos
     * const paymentMethodInfos = await prisma.paymentMethodInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodInfoWithIdOnly = await prisma.paymentMethodInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodInfoFindManyArgs>(args?: SelectSubset<T, PaymentMethodInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentMethodInfo.
     * @param {PaymentMethodInfoCreateArgs} args - Arguments to create a PaymentMethodInfo.
     * @example
     * // Create one PaymentMethodInfo
     * const PaymentMethodInfo = await prisma.paymentMethodInfo.create({
     *   data: {
     *     // ... data to create a PaymentMethodInfo
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodInfoCreateArgs>(args: SelectSubset<T, PaymentMethodInfoCreateArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentMethodInfos.
     * @param {PaymentMethodInfoCreateManyArgs} args - Arguments to create many PaymentMethodInfos.
     * @example
     * // Create many PaymentMethodInfos
     * const paymentMethodInfo = await prisma.paymentMethodInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodInfoCreateManyArgs>(args?: SelectSubset<T, PaymentMethodInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethodInfos and returns the data saved in the database.
     * @param {PaymentMethodInfoCreateManyAndReturnArgs} args - Arguments to create many PaymentMethodInfos.
     * @example
     * // Create many PaymentMethodInfos
     * const paymentMethodInfo = await prisma.paymentMethodInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethodInfos and only return the `id`
     * const paymentMethodInfoWithIdOnly = await prisma.paymentMethodInfo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentMethodInfo.
     * @param {PaymentMethodInfoDeleteArgs} args - Arguments to delete one PaymentMethodInfo.
     * @example
     * // Delete one PaymentMethodInfo
     * const PaymentMethodInfo = await prisma.paymentMethodInfo.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethodInfo
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodInfoDeleteArgs>(args: SelectSubset<T, PaymentMethodInfoDeleteArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentMethodInfo.
     * @param {PaymentMethodInfoUpdateArgs} args - Arguments to update one PaymentMethodInfo.
     * @example
     * // Update one PaymentMethodInfo
     * const paymentMethodInfo = await prisma.paymentMethodInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodInfoUpdateArgs>(args: SelectSubset<T, PaymentMethodInfoUpdateArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentMethodInfos.
     * @param {PaymentMethodInfoDeleteManyArgs} args - Arguments to filter PaymentMethodInfos to delete.
     * @example
     * // Delete a few PaymentMethodInfos
     * const { count } = await prisma.paymentMethodInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodInfoDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethodInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethodInfos
     * const paymentMethodInfo = await prisma.paymentMethodInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodInfoUpdateManyArgs>(args: SelectSubset<T, PaymentMethodInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethodInfo.
     * @param {PaymentMethodInfoUpsertArgs} args - Arguments to update or create a PaymentMethodInfo.
     * @example
     * // Update or create a PaymentMethodInfo
     * const paymentMethodInfo = await prisma.paymentMethodInfo.upsert({
     *   create: {
     *     // ... data to create a PaymentMethodInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethodInfo we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodInfoUpsertArgs>(args: SelectSubset<T, PaymentMethodInfoUpsertArgs<ExtArgs>>): Prisma__PaymentMethodInfoClient<$Result.GetResult<Prisma.$PaymentMethodInfoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentMethodInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoCountArgs} args - Arguments to filter PaymentMethodInfos to count.
     * @example
     * // Count the number of PaymentMethodInfos
     * const count = await prisma.paymentMethodInfo.count({
     *   where: {
     *     // ... the filter for the PaymentMethodInfos we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodInfoCountArgs>(
      args?: Subset<T, PaymentMethodInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethodInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodInfoAggregateArgs>(args: Subset<T, PaymentMethodInfoAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodInfoAggregateType<T>>

    /**
     * Group by PaymentMethodInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodInfoGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethodInfo model
   */
  readonly fields: PaymentMethodInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethodInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethodInfo model
   */ 
  interface PaymentMethodInfoFieldRefs {
    readonly id: FieldRef<"PaymentMethodInfo", 'String'>
    readonly created_at: FieldRef<"PaymentMethodInfo", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentMethodInfo", 'DateTime'>
    readonly method_name: FieldRef<"PaymentMethodInfo", 'PAYMENT_METHOD'>
    readonly description: FieldRef<"PaymentMethodInfo", 'String'>
    readonly account_name: FieldRef<"PaymentMethodInfo", 'String'>
    readonly account_number: FieldRef<"PaymentMethodInfo", 'String'>
    readonly qr_code: FieldRef<"PaymentMethodInfo", 'String'>
    readonly is_active: FieldRef<"PaymentMethodInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethodInfo findUnique
   */
  export type PaymentMethodInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethodInfo to fetch.
     */
    where: PaymentMethodInfoWhereUniqueInput
  }

  /**
   * PaymentMethodInfo findUniqueOrThrow
   */
  export type PaymentMethodInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethodInfo to fetch.
     */
    where: PaymentMethodInfoWhereUniqueInput
  }

  /**
   * PaymentMethodInfo findFirst
   */
  export type PaymentMethodInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethodInfo to fetch.
     */
    where?: PaymentMethodInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethodInfos to fetch.
     */
    orderBy?: PaymentMethodInfoOrderByWithRelationInput | PaymentMethodInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethodInfos.
     */
    cursor?: PaymentMethodInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethodInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethodInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethodInfos.
     */
    distinct?: PaymentMethodInfoScalarFieldEnum | PaymentMethodInfoScalarFieldEnum[]
  }

  /**
   * PaymentMethodInfo findFirstOrThrow
   */
  export type PaymentMethodInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethodInfo to fetch.
     */
    where?: PaymentMethodInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethodInfos to fetch.
     */
    orderBy?: PaymentMethodInfoOrderByWithRelationInput | PaymentMethodInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethodInfos.
     */
    cursor?: PaymentMethodInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethodInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethodInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethodInfos.
     */
    distinct?: PaymentMethodInfoScalarFieldEnum | PaymentMethodInfoScalarFieldEnum[]
  }

  /**
   * PaymentMethodInfo findMany
   */
  export type PaymentMethodInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethodInfos to fetch.
     */
    where?: PaymentMethodInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethodInfos to fetch.
     */
    orderBy?: PaymentMethodInfoOrderByWithRelationInput | PaymentMethodInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethodInfos.
     */
    cursor?: PaymentMethodInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethodInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethodInfos.
     */
    skip?: number
    distinct?: PaymentMethodInfoScalarFieldEnum | PaymentMethodInfoScalarFieldEnum[]
  }

  /**
   * PaymentMethodInfo create
   */
  export type PaymentMethodInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethodInfo.
     */
    data: XOR<PaymentMethodInfoCreateInput, PaymentMethodInfoUncheckedCreateInput>
  }

  /**
   * PaymentMethodInfo createMany
   */
  export type PaymentMethodInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethodInfos.
     */
    data: PaymentMethodInfoCreateManyInput | PaymentMethodInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethodInfo createManyAndReturn
   */
  export type PaymentMethodInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentMethodInfos.
     */
    data: PaymentMethodInfoCreateManyInput | PaymentMethodInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethodInfo update
   */
  export type PaymentMethodInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethodInfo.
     */
    data: XOR<PaymentMethodInfoUpdateInput, PaymentMethodInfoUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethodInfo to update.
     */
    where: PaymentMethodInfoWhereUniqueInput
  }

  /**
   * PaymentMethodInfo updateMany
   */
  export type PaymentMethodInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethodInfos.
     */
    data: XOR<PaymentMethodInfoUpdateManyMutationInput, PaymentMethodInfoUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethodInfos to update
     */
    where?: PaymentMethodInfoWhereInput
  }

  /**
   * PaymentMethodInfo upsert
   */
  export type PaymentMethodInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethodInfo to update in case it exists.
     */
    where: PaymentMethodInfoWhereUniqueInput
    /**
     * In case the PaymentMethodInfo found by the `where` argument doesn't exist, create a new PaymentMethodInfo with this data.
     */
    create: XOR<PaymentMethodInfoCreateInput, PaymentMethodInfoUncheckedCreateInput>
    /**
     * In case the PaymentMethodInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodInfoUpdateInput, PaymentMethodInfoUncheckedUpdateInput>
  }

  /**
   * PaymentMethodInfo delete
   */
  export type PaymentMethodInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
    /**
     * Filter which PaymentMethodInfo to delete.
     */
    where: PaymentMethodInfoWhereUniqueInput
  }

  /**
   * PaymentMethodInfo deleteMany
   */
  export type PaymentMethodInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethodInfos to delete
     */
    where?: PaymentMethodInfoWhereInput
  }

  /**
   * PaymentMethodInfo without action
   */
  export type PaymentMethodInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodInfo
     */
    select?: PaymentMethodInfoSelect<ExtArgs> | null
  }


  /**
   * Model ShippingAddress
   */

  export type AggregateShippingAddress = {
    _count: ShippingAddressCountAggregateOutputType | null
    _min: ShippingAddressMinAggregateOutputType | null
    _max: ShippingAddressMaxAggregateOutputType | null
  }

  export type ShippingAddressMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    address_id: string | null
    user_id: string | null
    full_name: string | null
    email_address: string | null
    contact_number: string | null
    is_default: boolean | null
  }

  export type ShippingAddressMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    address_id: string | null
    user_id: string | null
    full_name: string | null
    email_address: string | null
    contact_number: string | null
    is_default: boolean | null
  }

  export type ShippingAddressCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    address_id: number
    user_id: number
    full_name: number
    email_address: number
    contact_number: number
    is_default: number
    _all: number
  }


  export type ShippingAddressMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    address_id?: true
    user_id?: true
    full_name?: true
    email_address?: true
    contact_number?: true
    is_default?: true
  }

  export type ShippingAddressMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    address_id?: true
    user_id?: true
    full_name?: true
    email_address?: true
    contact_number?: true
    is_default?: true
  }

  export type ShippingAddressCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    address_id?: true
    user_id?: true
    full_name?: true
    email_address?: true
    contact_number?: true
    is_default?: true
    _all?: true
  }

  export type ShippingAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingAddress to aggregate.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingAddresses
    **/
    _count?: true | ShippingAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingAddressMaxAggregateInputType
  }

  export type GetShippingAddressAggregateType<T extends ShippingAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingAddress[P]>
      : GetScalarType<T[P], AggregateShippingAddress[P]>
  }




  export type ShippingAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingAddressWhereInput
    orderBy?: ShippingAddressOrderByWithAggregationInput | ShippingAddressOrderByWithAggregationInput[]
    by: ShippingAddressScalarFieldEnum[] | ShippingAddressScalarFieldEnum
    having?: ShippingAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingAddressCountAggregateInputType | true
    _min?: ShippingAddressMinAggregateInputType
    _max?: ShippingAddressMaxAggregateInputType
  }

  export type ShippingAddressGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date | null
    address_id: string
    user_id: string
    full_name: string | null
    email_address: string | null
    contact_number: string
    is_default: boolean
    _count: ShippingAddressCountAggregateOutputType | null
    _min: ShippingAddressMinAggregateOutputType | null
    _max: ShippingAddressMaxAggregateOutputType | null
  }

  type GetShippingAddressGroupByPayload<T extends ShippingAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingAddressGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingAddressGroupByOutputType[P]>
        }
      >
    >


  export type ShippingAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address_id?: boolean
    user_id?: boolean
    full_name?: boolean
    email_address?: boolean
    contact_number?: boolean
    is_default?: boolean
    Address?: boolean | AddressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingAddress"]>

  export type ShippingAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address_id?: boolean
    user_id?: boolean
    full_name?: boolean
    email_address?: boolean
    contact_number?: boolean
    is_default?: boolean
    Address?: boolean | AddressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingAddress"]>

  export type ShippingAddressSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address_id?: boolean
    user_id?: boolean
    full_name?: boolean
    email_address?: boolean
    contact_number?: boolean
    is_default?: boolean
  }

  export type ShippingAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | AddressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShippingAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | AddressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShippingAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingAddress"
    objects: {
      Address: Prisma.$AddressPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date | null
      address_id: string
      user_id: string
      full_name: string | null
      email_address: string | null
      contact_number: string
      is_default: boolean
    }, ExtArgs["result"]["shippingAddress"]>
    composites: {}
  }

  type ShippingAddressGetPayload<S extends boolean | null | undefined | ShippingAddressDefaultArgs> = $Result.GetResult<Prisma.$ShippingAddressPayload, S>

  type ShippingAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShippingAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShippingAddressCountAggregateInputType | true
    }

  export interface ShippingAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingAddress'], meta: { name: 'ShippingAddress' } }
    /**
     * Find zero or one ShippingAddress that matches the filter.
     * @param {ShippingAddressFindUniqueArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingAddressFindUniqueArgs>(args: SelectSubset<T, ShippingAddressFindUniqueArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShippingAddress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShippingAddressFindUniqueOrThrowArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShippingAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressFindFirstArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingAddressFindFirstArgs>(args?: SelectSubset<T, ShippingAddressFindFirstArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShippingAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressFindFirstOrThrowArgs} args - Arguments to find a ShippingAddress
     * @example
     * // Get one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShippingAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingAddresses
     * const shippingAddresses = await prisma.shippingAddress.findMany()
     * 
     * // Get first 10 ShippingAddresses
     * const shippingAddresses = await prisma.shippingAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingAddressWithIdOnly = await prisma.shippingAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingAddressFindManyArgs>(args?: SelectSubset<T, ShippingAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShippingAddress.
     * @param {ShippingAddressCreateArgs} args - Arguments to create a ShippingAddress.
     * @example
     * // Create one ShippingAddress
     * const ShippingAddress = await prisma.shippingAddress.create({
     *   data: {
     *     // ... data to create a ShippingAddress
     *   }
     * })
     * 
     */
    create<T extends ShippingAddressCreateArgs>(args: SelectSubset<T, ShippingAddressCreateArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShippingAddresses.
     * @param {ShippingAddressCreateManyArgs} args - Arguments to create many ShippingAddresses.
     * @example
     * // Create many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingAddressCreateManyArgs>(args?: SelectSubset<T, ShippingAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShippingAddresses and returns the data saved in the database.
     * @param {ShippingAddressCreateManyAndReturnArgs} args - Arguments to create many ShippingAddresses.
     * @example
     * // Create many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShippingAddresses and only return the `id`
     * const shippingAddressWithIdOnly = await prisma.shippingAddress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippingAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippingAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShippingAddress.
     * @param {ShippingAddressDeleteArgs} args - Arguments to delete one ShippingAddress.
     * @example
     * // Delete one ShippingAddress
     * const ShippingAddress = await prisma.shippingAddress.delete({
     *   where: {
     *     // ... filter to delete one ShippingAddress
     *   }
     * })
     * 
     */
    delete<T extends ShippingAddressDeleteArgs>(args: SelectSubset<T, ShippingAddressDeleteArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShippingAddress.
     * @param {ShippingAddressUpdateArgs} args - Arguments to update one ShippingAddress.
     * @example
     * // Update one ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingAddressUpdateArgs>(args: SelectSubset<T, ShippingAddressUpdateArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShippingAddresses.
     * @param {ShippingAddressDeleteManyArgs} args - Arguments to filter ShippingAddresses to delete.
     * @example
     * // Delete a few ShippingAddresses
     * const { count } = await prisma.shippingAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingAddressDeleteManyArgs>(args?: SelectSubset<T, ShippingAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingAddresses
     * const shippingAddress = await prisma.shippingAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingAddressUpdateManyArgs>(args: SelectSubset<T, ShippingAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShippingAddress.
     * @param {ShippingAddressUpsertArgs} args - Arguments to update or create a ShippingAddress.
     * @example
     * // Update or create a ShippingAddress
     * const shippingAddress = await prisma.shippingAddress.upsert({
     *   create: {
     *     // ... data to create a ShippingAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingAddress we want to update
     *   }
     * })
     */
    upsert<T extends ShippingAddressUpsertArgs>(args: SelectSubset<T, ShippingAddressUpsertArgs<ExtArgs>>): Prisma__ShippingAddressClient<$Result.GetResult<Prisma.$ShippingAddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShippingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressCountArgs} args - Arguments to filter ShippingAddresses to count.
     * @example
     * // Count the number of ShippingAddresses
     * const count = await prisma.shippingAddress.count({
     *   where: {
     *     // ... the filter for the ShippingAddresses we want to count
     *   }
     * })
    **/
    count<T extends ShippingAddressCountArgs>(
      args?: Subset<T, ShippingAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingAddressAggregateArgs>(args: Subset<T, ShippingAddressAggregateArgs>): Prisma.PrismaPromise<GetShippingAddressAggregateType<T>>

    /**
     * Group by ShippingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingAddressGroupByArgs['orderBy'] }
        : { orderBy?: ShippingAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingAddress model
   */
  readonly fields: ShippingAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShippingAddress model
   */ 
  interface ShippingAddressFieldRefs {
    readonly id: FieldRef<"ShippingAddress", 'String'>
    readonly created_at: FieldRef<"ShippingAddress", 'DateTime'>
    readonly updated_at: FieldRef<"ShippingAddress", 'DateTime'>
    readonly address_id: FieldRef<"ShippingAddress", 'String'>
    readonly user_id: FieldRef<"ShippingAddress", 'String'>
    readonly full_name: FieldRef<"ShippingAddress", 'String'>
    readonly email_address: FieldRef<"ShippingAddress", 'String'>
    readonly contact_number: FieldRef<"ShippingAddress", 'String'>
    readonly is_default: FieldRef<"ShippingAddress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShippingAddress findUnique
   */
  export type ShippingAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress findUniqueOrThrow
   */
  export type ShippingAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress findFirst
   */
  export type ShippingAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingAddresses.
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingAddresses.
     */
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * ShippingAddress findFirstOrThrow
   */
  export type ShippingAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddress to fetch.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingAddresses.
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingAddresses.
     */
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * ShippingAddress findMany
   */
  export type ShippingAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter, which ShippingAddresses to fetch.
     */
    where?: ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingAddresses to fetch.
     */
    orderBy?: ShippingAddressOrderByWithRelationInput | ShippingAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingAddresses.
     */
    cursor?: ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingAddresses.
     */
    skip?: number
    distinct?: ShippingAddressScalarFieldEnum | ShippingAddressScalarFieldEnum[]
  }

  /**
   * ShippingAddress create
   */
  export type ShippingAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a ShippingAddress.
     */
    data: XOR<ShippingAddressCreateInput, ShippingAddressUncheckedCreateInput>
  }

  /**
   * ShippingAddress createMany
   */
  export type ShippingAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingAddresses.
     */
    data: ShippingAddressCreateManyInput | ShippingAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingAddress createManyAndReturn
   */
  export type ShippingAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShippingAddresses.
     */
    data: ShippingAddressCreateManyInput | ShippingAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShippingAddress update
   */
  export type ShippingAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a ShippingAddress.
     */
    data: XOR<ShippingAddressUpdateInput, ShippingAddressUncheckedUpdateInput>
    /**
     * Choose, which ShippingAddress to update.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress updateMany
   */
  export type ShippingAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingAddresses.
     */
    data: XOR<ShippingAddressUpdateManyMutationInput, ShippingAddressUncheckedUpdateManyInput>
    /**
     * Filter which ShippingAddresses to update
     */
    where?: ShippingAddressWhereInput
  }

  /**
   * ShippingAddress upsert
   */
  export type ShippingAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the ShippingAddress to update in case it exists.
     */
    where: ShippingAddressWhereUniqueInput
    /**
     * In case the ShippingAddress found by the `where` argument doesn't exist, create a new ShippingAddress with this data.
     */
    create: XOR<ShippingAddressCreateInput, ShippingAddressUncheckedCreateInput>
    /**
     * In case the ShippingAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingAddressUpdateInput, ShippingAddressUncheckedUpdateInput>
  }

  /**
   * ShippingAddress delete
   */
  export type ShippingAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
    /**
     * Filter which ShippingAddress to delete.
     */
    where: ShippingAddressWhereUniqueInput
  }

  /**
   * ShippingAddress deleteMany
   */
  export type ShippingAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingAddresses to delete
     */
    where?: ShippingAddressWhereInput
  }

  /**
   * ShippingAddress without action
   */
  export type ShippingAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingAddressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    username: 'username',
    email: 'email',
    user_id: 'user_id',
    address: 'address'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    name: 'name',
    slug: 'slug',
    price: 'price',
    sku: 'sku',
    category_id: 'category_id',
    description: 'description',
    isFeatured: 'isFeatured'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    name: 'name',
    slug: 'slug',
    variant_color_required: 'variant_color_required',
    variant_size_required: 'variant_size_required'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductVariantColorScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    color: 'color',
    images: 'images',
    product_id: 'product_id'
  };

  export type ProductVariantColorScalarFieldEnum = (typeof ProductVariantColorScalarFieldEnum)[keyof typeof ProductVariantColorScalarFieldEnum]


  export const ProductVariantSizeScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    size: 'size',
    stock: 'stock',
    status: 'status',
    variant_color_id: 'variant_color_id'
  };

  export type ProductVariantSizeScalarFieldEnum = (typeof ProductVariantSizeScalarFieldEnum)[keyof typeof ProductVariantSizeScalarFieldEnum]


  export const WishlistScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    product_variant_size_id: 'product_variant_size_id',
    product_id: 'product_id'
  };

  export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    house_number: 'house_number',
    address: 'address',
    barangay: 'barangay',
    municipality: 'municipality',
    province: 'province',
    zip_code: 'zip_code',
    complete_address: 'complete_address',
    additional_address: 'additional_address',
    user_id: 'user_id'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BagScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    product_id: 'product_id',
    product_variant_size_id: 'product_variant_size_id',
    product_variant_color_id: 'product_variant_color_id',
    quantity: 'quantity'
  };

  export type BagScalarFieldEnum = (typeof BagScalarFieldEnum)[keyof typeof BagScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    order_status: 'order_status',
    total_amount: 'total_amount',
    payment_status: 'payment_status'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    order_id: 'order_id',
    product_id: 'product_id',
    product_variant_size_id: 'product_variant_size_id',
    quantity: 'quantity',
    price: 'price',
    subtotal: 'subtotal'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const PaymentDetailScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    order_id: 'order_id',
    payment_method: 'payment_method',
    transaction_id: 'transaction_id',
    amount_paid: 'amount_paid',
    payment_status: 'payment_status'
  };

  export type PaymentDetailScalarFieldEnum = (typeof PaymentDetailScalarFieldEnum)[keyof typeof PaymentDetailScalarFieldEnum]


  export const PaymentMethodInfoScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    method_name: 'method_name',
    description: 'description',
    account_name: 'account_name',
    account_number: 'account_number',
    qr_code: 'qr_code',
    is_active: 'is_active'
  };

  export type PaymentMethodInfoScalarFieldEnum = (typeof PaymentMethodInfoScalarFieldEnum)[keyof typeof PaymentMethodInfoScalarFieldEnum]


  export const ShippingAddressScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    address_id: 'address_id',
    user_id: 'user_id',
    full_name: 'full_name',
    email_address: 'email_address',
    contact_number: 'contact_number',
    is_default: 'is_default'
  };

  export type ShippingAddressScalarFieldEnum = (typeof ShippingAddressScalarFieldEnum)[keyof typeof ShippingAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PRODUCT_SIZES'
   */
  export type EnumPRODUCT_SIZESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRODUCT_SIZES'>
    


  /**
   * Reference to a field of type 'PRODUCT_SIZES[]'
   */
  export type ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRODUCT_SIZES[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PRODUCT_STATUS'
   */
  export type EnumPRODUCT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRODUCT_STATUS'>
    


  /**
   * Reference to a field of type 'PRODUCT_STATUS[]'
   */
  export type ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRODUCT_STATUS[]'>
    


  /**
   * Reference to a field of type 'ORDER_STATUS'
   */
  export type EnumORDER_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ORDER_STATUS'>
    


  /**
   * Reference to a field of type 'ORDER_STATUS[]'
   */
  export type ListEnumORDER_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ORDER_STATUS[]'>
    


  /**
   * Reference to a field of type 'PAYMENT_STATUS'
   */
  export type EnumPAYMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_STATUS'>
    


  /**
   * Reference to a field of type 'PAYMENT_STATUS[]'
   */
  export type ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_STATUS[]'>
    


  /**
   * Reference to a field of type 'PAYMENT_METHOD'
   */
  export type EnumPAYMENT_METHODFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_METHOD'>
    


  /**
   * Reference to a field of type 'PAYMENT_METHOD[]'
   */
  export type ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_METHOD[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    user_id?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    Address?: AddressListRelationFilter
    Order?: OrderListRelationFilter
    Bag?: BagListRelationFilter
    ShippingAddress?: ShippingAddressListRelationFilter
    Wishlist?: WishlistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    Address?: AddressOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
    Bag?: BagOrderByRelationAggregateInput
    ShippingAddress?: ShippingAddressOrderByRelationAggregateInput
    Wishlist?: WishlistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    user_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    address?: StringFilter<"User"> | string
    Address?: AddressListRelationFilter
    Order?: OrderListRelationFilter
    Bag?: BagListRelationFilter
    ShippingAddress?: ShippingAddressListRelationFilter
    Wishlist?: WishlistListRelationFilter
  }, "id" | "username" | "email" | "user_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    user_id?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    sku?: StringNullableFilter<"Product"> | string | null
    category_id?: UuidFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    isFeatured?: BoolFilter<"Product"> | boolean
    Bag?: BagListRelationFilter
    OrderItem?: OrderItemListRelationFilter
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    ProductVariantColor?: ProductVariantColorListRelationFilter
    Wishlist?: WishlistListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    sku?: SortOrderInput | SortOrder
    category_id?: SortOrder
    description?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    Bag?: BagOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
    Category?: CategoryOrderByWithRelationInput
    ProductVariantColor?: ProductVariantColorOrderByRelationAggregateInput
    Wishlist?: WishlistOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    category_id?: UuidFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    isFeatured?: BoolFilter<"Product"> | boolean
    Bag?: BagListRelationFilter
    OrderItem?: OrderItemListRelationFilter
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    ProductVariantColor?: ProductVariantColorListRelationFilter
    Wishlist?: WishlistListRelationFilter
  }, "id" | "slug" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    sku?: SortOrderInput | SortOrder
    category_id?: SortOrder
    description?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category_id?: UuidWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Product"> | boolean
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    variant_color_required?: BoolFilter<"Category"> | boolean
    variant_size_required?: BoolFilter<"Category"> | boolean
    Product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    variant_color_required?: SortOrder
    variant_size_required?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    variant_color_required?: BoolFilter<"Category"> | boolean
    variant_size_required?: BoolFilter<"Category"> | boolean
    Product?: ProductListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    variant_color_required?: SortOrder
    variant_size_required?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    variant_color_required?: BoolWithAggregatesFilter<"Category"> | boolean
    variant_size_required?: BoolWithAggregatesFilter<"Category"> | boolean
  }

  export type ProductVariantColorWhereInput = {
    AND?: ProductVariantColorWhereInput | ProductVariantColorWhereInput[]
    OR?: ProductVariantColorWhereInput[]
    NOT?: ProductVariantColorWhereInput | ProductVariantColorWhereInput[]
    id?: UuidFilter<"ProductVariantColor"> | string
    created_at?: DateTimeFilter<"ProductVariantColor"> | Date | string
    updated_at?: DateTimeNullableFilter<"ProductVariantColor"> | Date | string | null
    color?: StringFilter<"ProductVariantColor"> | string
    images?: StringNullableListFilter<"ProductVariantColor">
    product_id?: UuidFilter<"ProductVariantColor"> | string
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    ProductVariantSize?: ProductVariantSizeListRelationFilter
    Bag?: BagListRelationFilter
  }

  export type ProductVariantColorOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    color?: SortOrder
    images?: SortOrder
    product_id?: SortOrder
    Product?: ProductOrderByWithRelationInput
    ProductVariantSize?: ProductVariantSizeOrderByRelationAggregateInput
    Bag?: BagOrderByRelationAggregateInput
  }

  export type ProductVariantColorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantColorWhereInput | ProductVariantColorWhereInput[]
    OR?: ProductVariantColorWhereInput[]
    NOT?: ProductVariantColorWhereInput | ProductVariantColorWhereInput[]
    created_at?: DateTimeFilter<"ProductVariantColor"> | Date | string
    updated_at?: DateTimeNullableFilter<"ProductVariantColor"> | Date | string | null
    color?: StringFilter<"ProductVariantColor"> | string
    images?: StringNullableListFilter<"ProductVariantColor">
    product_id?: UuidFilter<"ProductVariantColor"> | string
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    ProductVariantSize?: ProductVariantSizeListRelationFilter
    Bag?: BagListRelationFilter
  }, "id">

  export type ProductVariantColorOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    color?: SortOrder
    images?: SortOrder
    product_id?: SortOrder
    _count?: ProductVariantColorCountOrderByAggregateInput
    _max?: ProductVariantColorMaxOrderByAggregateInput
    _min?: ProductVariantColorMinOrderByAggregateInput
  }

  export type ProductVariantColorScalarWhereWithAggregatesInput = {
    AND?: ProductVariantColorScalarWhereWithAggregatesInput | ProductVariantColorScalarWhereWithAggregatesInput[]
    OR?: ProductVariantColorScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantColorScalarWhereWithAggregatesInput | ProductVariantColorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductVariantColor"> | string
    created_at?: DateTimeWithAggregatesFilter<"ProductVariantColor"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"ProductVariantColor"> | Date | string | null
    color?: StringWithAggregatesFilter<"ProductVariantColor"> | string
    images?: StringNullableListFilter<"ProductVariantColor">
    product_id?: UuidWithAggregatesFilter<"ProductVariantColor"> | string
  }

  export type ProductVariantSizeWhereInput = {
    AND?: ProductVariantSizeWhereInput | ProductVariantSizeWhereInput[]
    OR?: ProductVariantSizeWhereInput[]
    NOT?: ProductVariantSizeWhereInput | ProductVariantSizeWhereInput[]
    id?: UuidFilter<"ProductVariantSize"> | string
    created_at?: DateTimeFilter<"ProductVariantSize"> | Date | string
    updated_at?: DateTimeNullableFilter<"ProductVariantSize"> | Date | string | null
    size?: EnumPRODUCT_SIZESFilter<"ProductVariantSize"> | $Enums.PRODUCT_SIZES
    stock?: IntFilter<"ProductVariantSize"> | number
    status?: EnumPRODUCT_STATUSFilter<"ProductVariantSize"> | $Enums.PRODUCT_STATUS
    variant_color_id?: UuidFilter<"ProductVariantSize"> | string
    OrderItem?: OrderItemListRelationFilter
    ProductVariantColor?: XOR<ProductVariantColorRelationFilter, ProductVariantColorWhereInput>
    Wishlist?: WishlistListRelationFilter
  }

  export type ProductVariantSizeOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    size?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    variant_color_id?: SortOrder
    OrderItem?: OrderItemOrderByRelationAggregateInput
    ProductVariantColor?: ProductVariantColorOrderByWithRelationInput
    Wishlist?: WishlistOrderByRelationAggregateInput
  }

  export type ProductVariantSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantSizeWhereInput | ProductVariantSizeWhereInput[]
    OR?: ProductVariantSizeWhereInput[]
    NOT?: ProductVariantSizeWhereInput | ProductVariantSizeWhereInput[]
    created_at?: DateTimeFilter<"ProductVariantSize"> | Date | string
    updated_at?: DateTimeNullableFilter<"ProductVariantSize"> | Date | string | null
    size?: EnumPRODUCT_SIZESFilter<"ProductVariantSize"> | $Enums.PRODUCT_SIZES
    stock?: IntFilter<"ProductVariantSize"> | number
    status?: EnumPRODUCT_STATUSFilter<"ProductVariantSize"> | $Enums.PRODUCT_STATUS
    variant_color_id?: UuidFilter<"ProductVariantSize"> | string
    OrderItem?: OrderItemListRelationFilter
    ProductVariantColor?: XOR<ProductVariantColorRelationFilter, ProductVariantColorWhereInput>
    Wishlist?: WishlistListRelationFilter
  }, "id">

  export type ProductVariantSizeOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    size?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    variant_color_id?: SortOrder
    _count?: ProductVariantSizeCountOrderByAggregateInput
    _avg?: ProductVariantSizeAvgOrderByAggregateInput
    _max?: ProductVariantSizeMaxOrderByAggregateInput
    _min?: ProductVariantSizeMinOrderByAggregateInput
    _sum?: ProductVariantSizeSumOrderByAggregateInput
  }

  export type ProductVariantSizeScalarWhereWithAggregatesInput = {
    AND?: ProductVariantSizeScalarWhereWithAggregatesInput | ProductVariantSizeScalarWhereWithAggregatesInput[]
    OR?: ProductVariantSizeScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantSizeScalarWhereWithAggregatesInput | ProductVariantSizeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductVariantSize"> | string
    created_at?: DateTimeWithAggregatesFilter<"ProductVariantSize"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"ProductVariantSize"> | Date | string | null
    size?: EnumPRODUCT_SIZESWithAggregatesFilter<"ProductVariantSize"> | $Enums.PRODUCT_SIZES
    stock?: IntWithAggregatesFilter<"ProductVariantSize"> | number
    status?: EnumPRODUCT_STATUSWithAggregatesFilter<"ProductVariantSize"> | $Enums.PRODUCT_STATUS
    variant_color_id?: UuidWithAggregatesFilter<"ProductVariantSize"> | string
  }

  export type WishlistWhereInput = {
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    id?: UuidFilter<"Wishlist"> | string
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeNullableFilter<"Wishlist"> | Date | string | null
    user_id?: UuidFilter<"Wishlist"> | string
    product_variant_size_id?: UuidFilter<"Wishlist"> | string
    product_id?: UuidFilter<"Wishlist"> | string
    ProductVariantSize?: XOR<ProductVariantSizeRelationFilter, ProductVariantSizeWhereInput>
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WishlistOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_id?: SortOrder
    ProductVariantSize?: ProductVariantSizeOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type WishlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeNullableFilter<"Wishlist"> | Date | string | null
    user_id?: UuidFilter<"Wishlist"> | string
    product_variant_size_id?: UuidFilter<"Wishlist"> | string
    product_id?: UuidFilter<"Wishlist"> | string
    ProductVariantSize?: XOR<ProductVariantSizeRelationFilter, ProductVariantSizeWhereInput>
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WishlistOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_id?: SortOrder
    _count?: WishlistCountOrderByAggregateInput
    _max?: WishlistMaxOrderByAggregateInput
    _min?: WishlistMinOrderByAggregateInput
  }

  export type WishlistScalarWhereWithAggregatesInput = {
    AND?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    OR?: WishlistScalarWhereWithAggregatesInput[]
    NOT?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Wishlist"> | string
    created_at?: DateTimeWithAggregatesFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Wishlist"> | Date | string | null
    user_id?: UuidWithAggregatesFilter<"Wishlist"> | string
    product_variant_size_id?: UuidWithAggregatesFilter<"Wishlist"> | string
    product_id?: UuidWithAggregatesFilter<"Wishlist"> | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: UuidFilter<"Address"> | string
    created_at?: DateTimeFilter<"Address"> | Date | string
    updated_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    house_number?: StringFilter<"Address"> | string
    address?: StringFilter<"Address"> | string
    barangay?: StringFilter<"Address"> | string
    municipality?: StringFilter<"Address"> | string
    province?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    complete_address?: StringFilter<"Address"> | string
    additional_address?: StringNullableFilter<"Address"> | string | null
    user_id?: UuidFilter<"Address"> | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    ShippingAddress?: ShippingAddressListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    house_number?: SortOrder
    address?: SortOrder
    barangay?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    zip_code?: SortOrder
    complete_address?: SortOrder
    additional_address?: SortOrderInput | SortOrder
    user_id?: SortOrder
    User?: UserOrderByWithRelationInput
    ShippingAddress?: ShippingAddressOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    created_at?: DateTimeFilter<"Address"> | Date | string
    updated_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    house_number?: StringFilter<"Address"> | string
    address?: StringFilter<"Address"> | string
    barangay?: StringFilter<"Address"> | string
    municipality?: StringFilter<"Address"> | string
    province?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    complete_address?: StringFilter<"Address"> | string
    additional_address?: StringNullableFilter<"Address"> | string | null
    user_id?: UuidFilter<"Address"> | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    ShippingAddress?: ShippingAddressListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    house_number?: SortOrder
    address?: SortOrder
    barangay?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    zip_code?: SortOrder
    complete_address?: SortOrder
    additional_address?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Address"> | string
    created_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
    house_number?: StringWithAggregatesFilter<"Address"> | string
    address?: StringWithAggregatesFilter<"Address"> | string
    barangay?: StringWithAggregatesFilter<"Address"> | string
    municipality?: StringWithAggregatesFilter<"Address"> | string
    province?: StringWithAggregatesFilter<"Address"> | string
    zip_code?: StringWithAggregatesFilter<"Address"> | string
    complete_address?: StringWithAggregatesFilter<"Address"> | string
    additional_address?: StringNullableWithAggregatesFilter<"Address"> | string | null
    user_id?: UuidWithAggregatesFilter<"Address"> | string
  }

  export type BagWhereInput = {
    AND?: BagWhereInput | BagWhereInput[]
    OR?: BagWhereInput[]
    NOT?: BagWhereInput | BagWhereInput[]
    id?: UuidFilter<"Bag"> | string
    created_at?: DateTimeFilter<"Bag"> | Date | string
    updated_at?: DateTimeNullableFilter<"Bag"> | Date | string | null
    user_id?: UuidFilter<"Bag"> | string
    product_id?: UuidFilter<"Bag"> | string
    product_variant_size_id?: UuidFilter<"Bag"> | string
    product_variant_color_id?: UuidFilter<"Bag"> | string
    quantity?: IntFilter<"Bag"> | number
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    ProductVariantColor?: XOR<ProductVariantColorRelationFilter, ProductVariantColorWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BagOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_variant_color_id?: SortOrder
    quantity?: SortOrder
    Product?: ProductOrderByWithRelationInput
    ProductVariantColor?: ProductVariantColorOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type BagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BagWhereInput | BagWhereInput[]
    OR?: BagWhereInput[]
    NOT?: BagWhereInput | BagWhereInput[]
    created_at?: DateTimeFilter<"Bag"> | Date | string
    updated_at?: DateTimeNullableFilter<"Bag"> | Date | string | null
    user_id?: UuidFilter<"Bag"> | string
    product_id?: UuidFilter<"Bag"> | string
    product_variant_size_id?: UuidFilter<"Bag"> | string
    product_variant_color_id?: UuidFilter<"Bag"> | string
    quantity?: IntFilter<"Bag"> | number
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    ProductVariantColor?: XOR<ProductVariantColorRelationFilter, ProductVariantColorWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BagOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_variant_color_id?: SortOrder
    quantity?: SortOrder
    _count?: BagCountOrderByAggregateInput
    _avg?: BagAvgOrderByAggregateInput
    _max?: BagMaxOrderByAggregateInput
    _min?: BagMinOrderByAggregateInput
    _sum?: BagSumOrderByAggregateInput
  }

  export type BagScalarWhereWithAggregatesInput = {
    AND?: BagScalarWhereWithAggregatesInput | BagScalarWhereWithAggregatesInput[]
    OR?: BagScalarWhereWithAggregatesInput[]
    NOT?: BagScalarWhereWithAggregatesInput | BagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Bag"> | string
    created_at?: DateTimeWithAggregatesFilter<"Bag"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Bag"> | Date | string | null
    user_id?: UuidWithAggregatesFilter<"Bag"> | string
    product_id?: UuidWithAggregatesFilter<"Bag"> | string
    product_variant_size_id?: UuidWithAggregatesFilter<"Bag"> | string
    product_variant_color_id?: UuidWithAggregatesFilter<"Bag"> | string
    quantity?: IntWithAggregatesFilter<"Bag"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: UuidFilter<"Order"> | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    user_id?: UuidFilter<"Order"> | string
    order_status?: EnumORDER_STATUSFilter<"Order"> | $Enums.ORDER_STATUS
    total_amount?: FloatFilter<"Order"> | number
    payment_status?: EnumPAYMENT_STATUSFilter<"Order"> | $Enums.PAYMENT_STATUS
    User?: XOR<UserRelationFilter, UserWhereInput>
    OrderItem?: OrderItemListRelationFilter
    PaymentDetail?: PaymentDetailListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    payment_status?: SortOrder
    User?: UserOrderByWithRelationInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
    PaymentDetail?: PaymentDetailOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    user_id?: UuidFilter<"Order"> | string
    order_status?: EnumORDER_STATUSFilter<"Order"> | $Enums.ORDER_STATUS
    total_amount?: FloatFilter<"Order"> | number
    payment_status?: EnumPAYMENT_STATUSFilter<"Order"> | $Enums.PAYMENT_STATUS
    User?: XOR<UserRelationFilter, UserWhereInput>
    OrderItem?: OrderItemListRelationFilter
    PaymentDetail?: PaymentDetailListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    payment_status?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Order"> | string
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    user_id?: UuidWithAggregatesFilter<"Order"> | string
    order_status?: EnumORDER_STATUSWithAggregatesFilter<"Order"> | $Enums.ORDER_STATUS
    total_amount?: FloatWithAggregatesFilter<"Order"> | number
    payment_status?: EnumPAYMENT_STATUSWithAggregatesFilter<"Order"> | $Enums.PAYMENT_STATUS
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: UuidFilter<"OrderItem"> | string
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    order_id?: UuidFilter<"OrderItem"> | string
    product_id?: UuidFilter<"OrderItem"> | string
    product_variant_size_id?: UuidFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    ProductVariantSize?: XOR<ProductVariantSizeRelationFilter, ProductVariantSizeWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    Order?: OrderOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
    ProductVariantSize?: ProductVariantSizeOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    order_id?: UuidFilter<"OrderItem"> | string
    product_id?: UuidFilter<"OrderItem"> | string
    product_variant_size_id?: UuidFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    ProductVariantSize?: XOR<ProductVariantSizeRelationFilter, ProductVariantSizeWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OrderItem"> | string
    created_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
    order_id?: UuidWithAggregatesFilter<"OrderItem"> | string
    product_id?: UuidWithAggregatesFilter<"OrderItem"> | string
    product_variant_size_id?: UuidWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
    subtotal?: FloatWithAggregatesFilter<"OrderItem"> | number
  }

  export type PaymentDetailWhereInput = {
    AND?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    OR?: PaymentDetailWhereInput[]
    NOT?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    id?: UuidFilter<"PaymentDetail"> | string
    created_at?: DateTimeFilter<"PaymentDetail"> | Date | string
    updated_at?: DateTimeNullableFilter<"PaymentDetail"> | Date | string | null
    order_id?: UuidFilter<"PaymentDetail"> | string
    payment_method?: EnumPAYMENT_METHODFilter<"PaymentDetail"> | $Enums.PAYMENT_METHOD
    transaction_id?: StringFilter<"PaymentDetail"> | string
    amount_paid?: FloatFilter<"PaymentDetail"> | number
    payment_status?: StringFilter<"PaymentDetail"> | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type PaymentDetailOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_id?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    amount_paid?: SortOrder
    payment_status?: SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type PaymentDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    OR?: PaymentDetailWhereInput[]
    NOT?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    created_at?: DateTimeFilter<"PaymentDetail"> | Date | string
    updated_at?: DateTimeNullableFilter<"PaymentDetail"> | Date | string | null
    order_id?: UuidFilter<"PaymentDetail"> | string
    payment_method?: EnumPAYMENT_METHODFilter<"PaymentDetail"> | $Enums.PAYMENT_METHOD
    transaction_id?: StringFilter<"PaymentDetail"> | string
    amount_paid?: FloatFilter<"PaymentDetail"> | number
    payment_status?: StringFilter<"PaymentDetail"> | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type PaymentDetailOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_id?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    amount_paid?: SortOrder
    payment_status?: SortOrder
    _count?: PaymentDetailCountOrderByAggregateInput
    _avg?: PaymentDetailAvgOrderByAggregateInput
    _max?: PaymentDetailMaxOrderByAggregateInput
    _min?: PaymentDetailMinOrderByAggregateInput
    _sum?: PaymentDetailSumOrderByAggregateInput
  }

  export type PaymentDetailScalarWhereWithAggregatesInput = {
    AND?: PaymentDetailScalarWhereWithAggregatesInput | PaymentDetailScalarWhereWithAggregatesInput[]
    OR?: PaymentDetailScalarWhereWithAggregatesInput[]
    NOT?: PaymentDetailScalarWhereWithAggregatesInput | PaymentDetailScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PaymentDetail"> | string
    created_at?: DateTimeWithAggregatesFilter<"PaymentDetail"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"PaymentDetail"> | Date | string | null
    order_id?: UuidWithAggregatesFilter<"PaymentDetail"> | string
    payment_method?: EnumPAYMENT_METHODWithAggregatesFilter<"PaymentDetail"> | $Enums.PAYMENT_METHOD
    transaction_id?: StringWithAggregatesFilter<"PaymentDetail"> | string
    amount_paid?: FloatWithAggregatesFilter<"PaymentDetail"> | number
    payment_status?: StringWithAggregatesFilter<"PaymentDetail"> | string
  }

  export type PaymentMethodInfoWhereInput = {
    AND?: PaymentMethodInfoWhereInput | PaymentMethodInfoWhereInput[]
    OR?: PaymentMethodInfoWhereInput[]
    NOT?: PaymentMethodInfoWhereInput | PaymentMethodInfoWhereInput[]
    id?: UuidFilter<"PaymentMethodInfo"> | string
    created_at?: DateTimeFilter<"PaymentMethodInfo"> | Date | string
    updated_at?: DateTimeNullableFilter<"PaymentMethodInfo"> | Date | string | null
    method_name?: EnumPAYMENT_METHODFilter<"PaymentMethodInfo"> | $Enums.PAYMENT_METHOD
    description?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    account_name?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    account_number?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    qr_code?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    is_active?: BoolFilter<"PaymentMethodInfo"> | boolean
  }

  export type PaymentMethodInfoOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    method_name?: SortOrder
    description?: SortOrderInput | SortOrder
    account_name?: SortOrderInput | SortOrder
    account_number?: SortOrderInput | SortOrder
    qr_code?: SortOrderInput | SortOrder
    is_active?: SortOrder
  }

  export type PaymentMethodInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodInfoWhereInput | PaymentMethodInfoWhereInput[]
    OR?: PaymentMethodInfoWhereInput[]
    NOT?: PaymentMethodInfoWhereInput | PaymentMethodInfoWhereInput[]
    created_at?: DateTimeFilter<"PaymentMethodInfo"> | Date | string
    updated_at?: DateTimeNullableFilter<"PaymentMethodInfo"> | Date | string | null
    method_name?: EnumPAYMENT_METHODFilter<"PaymentMethodInfo"> | $Enums.PAYMENT_METHOD
    description?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    account_name?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    account_number?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    qr_code?: StringNullableFilter<"PaymentMethodInfo"> | string | null
    is_active?: BoolFilter<"PaymentMethodInfo"> | boolean
  }, "id">

  export type PaymentMethodInfoOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    method_name?: SortOrder
    description?: SortOrderInput | SortOrder
    account_name?: SortOrderInput | SortOrder
    account_number?: SortOrderInput | SortOrder
    qr_code?: SortOrderInput | SortOrder
    is_active?: SortOrder
    _count?: PaymentMethodInfoCountOrderByAggregateInput
    _max?: PaymentMethodInfoMaxOrderByAggregateInput
    _min?: PaymentMethodInfoMinOrderByAggregateInput
  }

  export type PaymentMethodInfoScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodInfoScalarWhereWithAggregatesInput | PaymentMethodInfoScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodInfoScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodInfoScalarWhereWithAggregatesInput | PaymentMethodInfoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PaymentMethodInfo"> | string
    created_at?: DateTimeWithAggregatesFilter<"PaymentMethodInfo"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"PaymentMethodInfo"> | Date | string | null
    method_name?: EnumPAYMENT_METHODWithAggregatesFilter<"PaymentMethodInfo"> | $Enums.PAYMENT_METHOD
    description?: StringNullableWithAggregatesFilter<"PaymentMethodInfo"> | string | null
    account_name?: StringNullableWithAggregatesFilter<"PaymentMethodInfo"> | string | null
    account_number?: StringNullableWithAggregatesFilter<"PaymentMethodInfo"> | string | null
    qr_code?: StringNullableWithAggregatesFilter<"PaymentMethodInfo"> | string | null
    is_active?: BoolWithAggregatesFilter<"PaymentMethodInfo"> | boolean
  }

  export type ShippingAddressWhereInput = {
    AND?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    OR?: ShippingAddressWhereInput[]
    NOT?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    id?: UuidFilter<"ShippingAddress"> | string
    created_at?: DateTimeFilter<"ShippingAddress"> | Date | string
    updated_at?: DateTimeNullableFilter<"ShippingAddress"> | Date | string | null
    address_id?: UuidFilter<"ShippingAddress"> | string
    user_id?: UuidFilter<"ShippingAddress"> | string
    full_name?: StringNullableFilter<"ShippingAddress"> | string | null
    email_address?: StringNullableFilter<"ShippingAddress"> | string | null
    contact_number?: StringFilter<"ShippingAddress"> | string
    is_default?: BoolFilter<"ShippingAddress"> | boolean
    Address?: XOR<AddressRelationFilter, AddressWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ShippingAddressOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email_address?: SortOrderInput | SortOrder
    contact_number?: SortOrder
    is_default?: SortOrder
    Address?: AddressOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ShippingAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    OR?: ShippingAddressWhereInput[]
    NOT?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    created_at?: DateTimeFilter<"ShippingAddress"> | Date | string
    updated_at?: DateTimeNullableFilter<"ShippingAddress"> | Date | string | null
    address_id?: UuidFilter<"ShippingAddress"> | string
    user_id?: UuidFilter<"ShippingAddress"> | string
    full_name?: StringNullableFilter<"ShippingAddress"> | string | null
    email_address?: StringNullableFilter<"ShippingAddress"> | string | null
    contact_number?: StringFilter<"ShippingAddress"> | string
    is_default?: BoolFilter<"ShippingAddress"> | boolean
    Address?: XOR<AddressRelationFilter, AddressWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ShippingAddressOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email_address?: SortOrderInput | SortOrder
    contact_number?: SortOrder
    is_default?: SortOrder
    _count?: ShippingAddressCountOrderByAggregateInput
    _max?: ShippingAddressMaxOrderByAggregateInput
    _min?: ShippingAddressMinOrderByAggregateInput
  }

  export type ShippingAddressScalarWhereWithAggregatesInput = {
    AND?: ShippingAddressScalarWhereWithAggregatesInput | ShippingAddressScalarWhereWithAggregatesInput[]
    OR?: ShippingAddressScalarWhereWithAggregatesInput[]
    NOT?: ShippingAddressScalarWhereWithAggregatesInput | ShippingAddressScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShippingAddress"> | string
    created_at?: DateTimeWithAggregatesFilter<"ShippingAddress"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"ShippingAddress"> | Date | string | null
    address_id?: UuidWithAggregatesFilter<"ShippingAddress"> | string
    user_id?: UuidWithAggregatesFilter<"ShippingAddress"> | string
    full_name?: StringNullableWithAggregatesFilter<"ShippingAddress"> | string | null
    email_address?: StringNullableWithAggregatesFilter<"ShippingAddress"> | string | null
    contact_number?: StringWithAggregatesFilter<"ShippingAddress"> | string
    is_default?: BoolWithAggregatesFilter<"ShippingAddress"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
    Bag?: BagCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutUserInput
    Wishlist?: WishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Bag?: BagUncheckedCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutUserInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    Bag?: BagUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Bag?: BagUncheckedUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    Bag?: BagCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Category: CategoryCreateNestedOneWithoutProductInput
    ProductVariantColor?: ProductVariantColorCreateNestedManyWithoutProductInput
    Wishlist?: WishlistCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    category_id: string
    description?: string | null
    isFeatured?: boolean
    Bag?: BagUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ProductVariantColor?: ProductVariantColorUncheckedCreateNestedManyWithoutProductInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUncheckedUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    category_id: string
    description?: string | null
    isFeatured?: boolean
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    variant_color_required?: boolean
    variant_size_required?: boolean
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    variant_color_required?: boolean
    variant_size_required?: boolean
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    variant_color_required?: BoolFieldUpdateOperationsInput | boolean
    variant_size_required?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    variant_color_required?: BoolFieldUpdateOperationsInput | boolean
    variant_size_required?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    variant_color_required?: boolean
    variant_size_required?: boolean
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    variant_color_required?: BoolFieldUpdateOperationsInput | boolean
    variant_size_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    variant_color_required?: BoolFieldUpdateOperationsInput | boolean
    variant_size_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductVariantColorCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    Product: ProductCreateNestedOneWithoutProductVariantColorInput
    ProductVariantSize?: ProductVariantSizeCreateNestedManyWithoutProductVariantColorInput
    Bag?: BagCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    product_id: string
    ProductVariantSize?: ProductVariantSizeUncheckedCreateNestedManyWithoutProductVariantColorInput
    Bag?: BagUncheckedCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    Product?: ProductUpdateOneRequiredWithoutProductVariantColorNestedInput
    ProductVariantSize?: ProductVariantSizeUpdateManyWithoutProductVariantColorNestedInput
    Bag?: BagUpdateManyWithoutProductVariantColorNestedInput
  }

  export type ProductVariantColorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    product_id?: StringFieldUpdateOperationsInput | string
    ProductVariantSize?: ProductVariantSizeUncheckedUpdateManyWithoutProductVariantColorNestedInput
    Bag?: BagUncheckedUpdateManyWithoutProductVariantColorNestedInput
  }

  export type ProductVariantColorCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    product_id: string
  }

  export type ProductVariantColorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
  }

  export type ProductVariantColorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantSizeCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemCreateNestedManyWithoutProductVariantSizeInput
    ProductVariantColor: ProductVariantColorCreateNestedOneWithoutProductVariantSizeInput
    Wishlist?: WishlistCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    variant_color_id: string
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductVariantSizeInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemUpdateManyWithoutProductVariantSizeNestedInput
    ProductVariantColor?: ProductVariantColorUpdateOneRequiredWithoutProductVariantSizeNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type ProductVariantSizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    variant_color_id?: StringFieldUpdateOperationsInput | string
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductVariantSizeNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type ProductVariantSizeCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    variant_color_id: string
  }

  export type ProductVariantSizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
  }

  export type ProductVariantSizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    variant_color_id?: StringFieldUpdateOperationsInput | string
  }

  export type WishlistCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    ProductVariantSize: ProductVariantSizeCreateNestedOneWithoutWishlistInput
    Product: ProductCreateNestedOneWithoutWishlistInput
    User: UserCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_variant_size_id: string
    product_id: string
  }

  export type WishlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductVariantSize?: ProductVariantSizeUpdateOneRequiredWithoutWishlistNestedInput
    Product?: ProductUpdateOneRequiredWithoutWishlistNestedInput
    User?: UserUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type WishlistCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_variant_size_id: string
    product_id: string
  }

  export type WishlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WishlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    User: UserCreateNestedOneWithoutAddressInput
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    user_id: string
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAddressNestedInput
    ShippingAddress?: ShippingAddressUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    user_id: string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type BagCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_variant_size_id: string
    quantity: number
    Product: ProductCreateNestedOneWithoutBagInput
    ProductVariantColor: ProductVariantColorCreateNestedOneWithoutBagInput
    User: UserCreateNestedOneWithoutBagInput
  }

  export type BagUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
  }

  export type BagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutBagNestedInput
    ProductVariantColor?: ProductVariantColorUpdateOneRequiredWithoutBagNestedInput
    User?: UserUpdateOneRequiredWithoutBagNestedInput
  }

  export type BagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_variant_color_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BagCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
  }

  export type BagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_variant_color_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    User: UserCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    PaymentDetail?: PaymentDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    PaymentDetail?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    PaymentDetail?: PaymentDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    PaymentDetail?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
  }

  export type OrderItemCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    quantity: number
    price: number
    subtotal: number
    Order: OrderCreateNestedOneWithoutOrderItemInput
    Product: ProductCreateNestedOneWithoutOrderItemInput
    ProductVariantSize: ProductVariantSizeCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    product_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    Product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
    ProductVariantSize?: ProductVariantSizeUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    product_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentDetailCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
    Order: OrderCreateNestedOneWithoutPaymentDetailInput
  }

  export type PaymentDetailUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
  }

  export type PaymentDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
    Order?: OrderUpdateOneRequiredWithoutPaymentDetailNestedInput
  }

  export type PaymentDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
  }

  export type PaymentDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodInfoCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    method_name: $Enums.PAYMENT_METHOD
    description?: string | null
    account_name?: string | null
    account_number?: string | null
    qr_code?: string | null
    is_active?: boolean
  }

  export type PaymentMethodInfoUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    method_name: $Enums.PAYMENT_METHOD
    description?: string | null
    account_name?: string | null
    account_number?: string | null
    qr_code?: string | null
    is_active?: boolean
  }

  export type PaymentMethodInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_name?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    description?: NullableStringFieldUpdateOperationsInput | string | null
    account_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentMethodInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_name?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    description?: NullableStringFieldUpdateOperationsInput | string | null
    account_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentMethodInfoCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    method_name: $Enums.PAYMENT_METHOD
    description?: string | null
    account_name?: string | null
    account_number?: string | null
    qr_code?: string | null
    is_active?: boolean
  }

  export type PaymentMethodInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_name?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    description?: NullableStringFieldUpdateOperationsInput | string | null
    account_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentMethodInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_name?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    description?: NullableStringFieldUpdateOperationsInput | string | null
    account_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingAddressCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
    Address: AddressCreateNestedOneWithoutShippingAddressInput
    User: UserCreateNestedOneWithoutShippingAddressInput
  }

  export type ShippingAddressUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    address_id: string
    user_id: string
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
  }

  export type ShippingAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    Address?: AddressUpdateOneRequiredWithoutShippingAddressNestedInput
    User?: UserUpdateOneRequiredWithoutShippingAddressNestedInput
  }

  export type ShippingAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingAddressCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    address_id: string
    user_id: string
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
  }

  export type ShippingAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BagListRelationFilter = {
    every?: BagWhereInput
    some?: BagWhereInput
    none?: BagWhereInput
  }

  export type ShippingAddressListRelationFilter = {
    every?: ShippingAddressWhereInput
    some?: ShippingAddressWhereInput
    none?: ShippingAddressWhereInput
  }

  export type WishlistListRelationFilter = {
    every?: WishlistWhereInput
    some?: WishlistWhereInput
    none?: WishlistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShippingAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    email?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    email?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    email?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductVariantColorListRelationFilter = {
    every?: ProductVariantColorWhereInput
    some?: ProductVariantColorWhereInput
    none?: ProductVariantColorWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    isFeatured?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    isFeatured?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    isFeatured?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    variant_color_required?: SortOrder
    variant_size_required?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    variant_color_required?: SortOrder
    variant_size_required?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    variant_color_required?: SortOrder
    variant_size_required?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductVariantSizeListRelationFilter = {
    every?: ProductVariantSizeWhereInput
    some?: ProductVariantSizeWhereInput
    none?: ProductVariantSizeWhereInput
  }

  export type ProductVariantSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantColorCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    color?: SortOrder
    images?: SortOrder
    product_id?: SortOrder
  }

  export type ProductVariantColorMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    color?: SortOrder
    product_id?: SortOrder
  }

  export type ProductVariantColorMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    color?: SortOrder
    product_id?: SortOrder
  }

  export type EnumPRODUCT_SIZESFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_SIZES | EnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_SIZESFilter<$PrismaModel> | $Enums.PRODUCT_SIZES
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPRODUCT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_STATUS | EnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_STATUSFilter<$PrismaModel> | $Enums.PRODUCT_STATUS
  }

  export type ProductVariantColorRelationFilter = {
    is?: ProductVariantColorWhereInput
    isNot?: ProductVariantColorWhereInput
  }

  export type ProductVariantSizeCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    variant_color_id?: SortOrder
  }

  export type ProductVariantSizeAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type ProductVariantSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    variant_color_id?: SortOrder
  }

  export type ProductVariantSizeMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    variant_color_id?: SortOrder
  }

  export type ProductVariantSizeSumOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type EnumPRODUCT_SIZESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_SIZES | EnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_SIZESWithAggregatesFilter<$PrismaModel> | $Enums.PRODUCT_SIZES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRODUCT_SIZESFilter<$PrismaModel>
    _max?: NestedEnumPRODUCT_SIZESFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPRODUCT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_STATUS | EnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.PRODUCT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRODUCT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumPRODUCT_STATUSFilter<$PrismaModel>
  }

  export type ProductVariantSizeRelationFilter = {
    is?: ProductVariantSizeWhereInput
    isNot?: ProductVariantSizeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WishlistCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_id?: SortOrder
  }

  export type WishlistMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_id?: SortOrder
  }

  export type WishlistMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_id?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    house_number?: SortOrder
    address?: SortOrder
    barangay?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    zip_code?: SortOrder
    complete_address?: SortOrder
    additional_address?: SortOrder
    user_id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    house_number?: SortOrder
    address?: SortOrder
    barangay?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    zip_code?: SortOrder
    complete_address?: SortOrder
    additional_address?: SortOrder
    user_id?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    house_number?: SortOrder
    address?: SortOrder
    barangay?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    zip_code?: SortOrder
    complete_address?: SortOrder
    additional_address?: SortOrder
    user_id?: SortOrder
  }

  export type BagCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_variant_color_id?: SortOrder
    quantity?: SortOrder
  }

  export type BagAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BagMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_variant_color_id?: SortOrder
    quantity?: SortOrder
  }

  export type BagMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    product_variant_color_id?: SortOrder
    quantity?: SortOrder
  }

  export type BagSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumORDER_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSFilter<$PrismaModel> | $Enums.ORDER_STATUS
  }

  export type EnumPAYMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
  }

  export type PaymentDetailListRelationFilter = {
    every?: PaymentDetailWhereInput
    some?: PaymentDetailWhereInput
    none?: PaymentDetailWhereInput
  }

  export type PaymentDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    payment_status?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    payment_status?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    payment_status?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type EnumORDER_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.ORDER_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumORDER_STATUSFilter<$PrismaModel>
    _max?: NestedEnumORDER_STATUSFilter<$PrismaModel>
  }

  export type EnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_variant_size_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumPAYMENT_METHODFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_METHOD | EnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_METHODFilter<$PrismaModel> | $Enums.PAYMENT_METHOD
  }

  export type PaymentDetailCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    amount_paid?: SortOrder
    payment_status?: SortOrder
  }

  export type PaymentDetailAvgOrderByAggregateInput = {
    amount_paid?: SortOrder
  }

  export type PaymentDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    amount_paid?: SortOrder
    payment_status?: SortOrder
  }

  export type PaymentDetailMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    amount_paid?: SortOrder
    payment_status?: SortOrder
  }

  export type PaymentDetailSumOrderByAggregateInput = {
    amount_paid?: SortOrder
  }

  export type EnumPAYMENT_METHODWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_METHOD | EnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_METHODWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_METHOD
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_METHODFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_METHODFilter<$PrismaModel>
  }

  export type PaymentMethodInfoCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    method_name?: SortOrder
    description?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qr_code?: SortOrder
    is_active?: SortOrder
  }

  export type PaymentMethodInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    method_name?: SortOrder
    description?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qr_code?: SortOrder
    is_active?: SortOrder
  }

  export type PaymentMethodInfoMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    method_name?: SortOrder
    description?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qr_code?: SortOrder
    is_active?: SortOrder
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type ShippingAddressCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email_address?: SortOrder
    contact_number?: SortOrder
    is_default?: SortOrder
  }

  export type ShippingAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email_address?: SortOrder
    contact_number?: SortOrder
    is_default?: SortOrder
  }

  export type ShippingAddressMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email_address?: SortOrder
    contact_number?: SortOrder
    is_default?: SortOrder
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BagCreateNestedManyWithoutUserInput = {
    create?: XOR<BagCreateWithoutUserInput, BagUncheckedCreateWithoutUserInput> | BagCreateWithoutUserInput[] | BagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BagCreateOrConnectWithoutUserInput | BagCreateOrConnectWithoutUserInput[]
    createMany?: BagCreateManyUserInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type ShippingAddressCreateNestedManyWithoutUserInput = {
    create?: XOR<ShippingAddressCreateWithoutUserInput, ShippingAddressUncheckedCreateWithoutUserInput> | ShippingAddressCreateWithoutUserInput[] | ShippingAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutUserInput | ShippingAddressCreateOrConnectWithoutUserInput[]
    createMany?: ShippingAddressCreateManyUserInputEnvelope
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
  }

  export type WishlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BagCreateWithoutUserInput, BagUncheckedCreateWithoutUserInput> | BagCreateWithoutUserInput[] | BagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BagCreateOrConnectWithoutUserInput | BagCreateOrConnectWithoutUserInput[]
    createMany?: BagCreateManyUserInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type ShippingAddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShippingAddressCreateWithoutUserInput, ShippingAddressUncheckedCreateWithoutUserInput> | ShippingAddressCreateWithoutUserInput[] | ShippingAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutUserInput | ShippingAddressCreateOrConnectWithoutUserInput[]
    createMany?: ShippingAddressCreateManyUserInputEnvelope
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BagUpdateManyWithoutUserNestedInput = {
    create?: XOR<BagCreateWithoutUserInput, BagUncheckedCreateWithoutUserInput> | BagCreateWithoutUserInput[] | BagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BagCreateOrConnectWithoutUserInput | BagCreateOrConnectWithoutUserInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutUserInput | BagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BagCreateManyUserInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutUserInput | BagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BagUpdateManyWithWhereWithoutUserInput | BagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type ShippingAddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShippingAddressCreateWithoutUserInput, ShippingAddressUncheckedCreateWithoutUserInput> | ShippingAddressCreateWithoutUserInput[] | ShippingAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutUserInput | ShippingAddressCreateOrConnectWithoutUserInput[]
    upsert?: ShippingAddressUpsertWithWhereUniqueWithoutUserInput | ShippingAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShippingAddressCreateManyUserInputEnvelope
    set?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    disconnect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    delete?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    update?: ShippingAddressUpdateWithWhereUniqueWithoutUserInput | ShippingAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShippingAddressUpdateManyWithWhereWithoutUserInput | ShippingAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShippingAddressScalarWhereInput | ShippingAddressScalarWhereInput[]
  }

  export type WishlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutUserInput | WishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutUserInput | WishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutUserInput | WishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BagCreateWithoutUserInput, BagUncheckedCreateWithoutUserInput> | BagCreateWithoutUserInput[] | BagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BagCreateOrConnectWithoutUserInput | BagCreateOrConnectWithoutUserInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutUserInput | BagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BagCreateManyUserInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutUserInput | BagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BagUpdateManyWithWhereWithoutUserInput | BagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type ShippingAddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShippingAddressCreateWithoutUserInput, ShippingAddressUncheckedCreateWithoutUserInput> | ShippingAddressCreateWithoutUserInput[] | ShippingAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutUserInput | ShippingAddressCreateOrConnectWithoutUserInput[]
    upsert?: ShippingAddressUpsertWithWhereUniqueWithoutUserInput | ShippingAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShippingAddressCreateManyUserInputEnvelope
    set?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    disconnect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    delete?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    update?: ShippingAddressUpdateWithWhereUniqueWithoutUserInput | ShippingAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShippingAddressUpdateManyWithWhereWithoutUserInput | ShippingAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShippingAddressScalarWhereInput | ShippingAddressScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutUserInput | WishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutUserInput | WishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutUserInput | WishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type BagCreateNestedManyWithoutProductInput = {
    create?: XOR<BagCreateWithoutProductInput, BagUncheckedCreateWithoutProductInput> | BagCreateWithoutProductInput[] | BagUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductInput | BagCreateOrConnectWithoutProductInput[]
    createMany?: BagCreateManyProductInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductVariantColorCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantColorCreateWithoutProductInput, ProductVariantColorUncheckedCreateWithoutProductInput> | ProductVariantColorCreateWithoutProductInput[] | ProductVariantColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductInput | ProductVariantColorCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantColorCreateManyProductInputEnvelope
    connect?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
  }

  export type WishlistCreateNestedManyWithoutProductInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type BagUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BagCreateWithoutProductInput, BagUncheckedCreateWithoutProductInput> | BagCreateWithoutProductInput[] | BagUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductInput | BagCreateOrConnectWithoutProductInput[]
    createMany?: BagCreateManyProductInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductVariantColorUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantColorCreateWithoutProductInput, ProductVariantColorUncheckedCreateWithoutProductInput> | ProductVariantColorCreateWithoutProductInput[] | ProductVariantColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductInput | ProductVariantColorCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantColorCreateManyProductInputEnvelope
    connect?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BagUpdateManyWithoutProductNestedInput = {
    create?: XOR<BagCreateWithoutProductInput, BagUncheckedCreateWithoutProductInput> | BagCreateWithoutProductInput[] | BagUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductInput | BagCreateOrConnectWithoutProductInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutProductInput | BagUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BagCreateManyProductInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutProductInput | BagUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BagUpdateManyWithWhereWithoutProductInput | BagUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantColorUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantColorCreateWithoutProductInput, ProductVariantColorUncheckedCreateWithoutProductInput> | ProductVariantColorCreateWithoutProductInput[] | ProductVariantColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductInput | ProductVariantColorCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantColorUpsertWithWhereUniqueWithoutProductInput | ProductVariantColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantColorCreateManyProductInputEnvelope
    set?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    disconnect?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    delete?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    connect?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    update?: ProductVariantColorUpdateWithWhereUniqueWithoutProductInput | ProductVariantColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantColorUpdateManyWithWhereWithoutProductInput | ProductVariantColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantColorScalarWhereInput | ProductVariantColorScalarWhereInput[]
  }

  export type WishlistUpdateManyWithoutProductNestedInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutProductInput | WishlistUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutProductInput | WishlistUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutProductInput | WishlistUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type BagUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BagCreateWithoutProductInput, BagUncheckedCreateWithoutProductInput> | BagCreateWithoutProductInput[] | BagUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductInput | BagCreateOrConnectWithoutProductInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutProductInput | BagUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BagCreateManyProductInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutProductInput | BagUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BagUpdateManyWithWhereWithoutProductInput | BagUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductVariantColorUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantColorCreateWithoutProductInput, ProductVariantColorUncheckedCreateWithoutProductInput> | ProductVariantColorCreateWithoutProductInput[] | ProductVariantColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductInput | ProductVariantColorCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantColorUpsertWithWhereUniqueWithoutProductInput | ProductVariantColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantColorCreateManyProductInputEnvelope
    set?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    disconnect?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    delete?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    connect?: ProductVariantColorWhereUniqueInput | ProductVariantColorWhereUniqueInput[]
    update?: ProductVariantColorUpdateWithWhereUniqueWithoutProductInput | ProductVariantColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantColorUpdateManyWithWhereWithoutProductInput | ProductVariantColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantColorScalarWhereInput | ProductVariantColorScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutProductInput | WishlistUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutProductInput | WishlistUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutProductInput | WishlistUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductVariantColorCreateimagesInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutProductVariantColorInput = {
    create?: XOR<ProductCreateWithoutProductVariantColorInput, ProductUncheckedCreateWithoutProductVariantColorInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariantColorInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductVariantSizeCreateNestedManyWithoutProductVariantColorInput = {
    create?: XOR<ProductVariantSizeCreateWithoutProductVariantColorInput, ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput> | ProductVariantSizeCreateWithoutProductVariantColorInput[] | ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput | ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput[]
    createMany?: ProductVariantSizeCreateManyProductVariantColorInputEnvelope
    connect?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
  }

  export type BagCreateNestedManyWithoutProductVariantColorInput = {
    create?: XOR<BagCreateWithoutProductVariantColorInput, BagUncheckedCreateWithoutProductVariantColorInput> | BagCreateWithoutProductVariantColorInput[] | BagUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductVariantColorInput | BagCreateOrConnectWithoutProductVariantColorInput[]
    createMany?: BagCreateManyProductVariantColorInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type ProductVariantSizeUncheckedCreateNestedManyWithoutProductVariantColorInput = {
    create?: XOR<ProductVariantSizeCreateWithoutProductVariantColorInput, ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput> | ProductVariantSizeCreateWithoutProductVariantColorInput[] | ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput | ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput[]
    createMany?: ProductVariantSizeCreateManyProductVariantColorInputEnvelope
    connect?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
  }

  export type BagUncheckedCreateNestedManyWithoutProductVariantColorInput = {
    create?: XOR<BagCreateWithoutProductVariantColorInput, BagUncheckedCreateWithoutProductVariantColorInput> | BagCreateWithoutProductVariantColorInput[] | BagUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductVariantColorInput | BagCreateOrConnectWithoutProductVariantColorInput[]
    createMany?: BagCreateManyProductVariantColorInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type ProductVariantColorUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateOneRequiredWithoutProductVariantColorNestedInput = {
    create?: XOR<ProductCreateWithoutProductVariantColorInput, ProductUncheckedCreateWithoutProductVariantColorInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariantColorInput
    upsert?: ProductUpsertWithoutProductVariantColorInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductVariantColorInput, ProductUpdateWithoutProductVariantColorInput>, ProductUncheckedUpdateWithoutProductVariantColorInput>
  }

  export type ProductVariantSizeUpdateManyWithoutProductVariantColorNestedInput = {
    create?: XOR<ProductVariantSizeCreateWithoutProductVariantColorInput, ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput> | ProductVariantSizeCreateWithoutProductVariantColorInput[] | ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput | ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput[]
    upsert?: ProductVariantSizeUpsertWithWhereUniqueWithoutProductVariantColorInput | ProductVariantSizeUpsertWithWhereUniqueWithoutProductVariantColorInput[]
    createMany?: ProductVariantSizeCreateManyProductVariantColorInputEnvelope
    set?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    disconnect?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    delete?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    connect?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    update?: ProductVariantSizeUpdateWithWhereUniqueWithoutProductVariantColorInput | ProductVariantSizeUpdateWithWhereUniqueWithoutProductVariantColorInput[]
    updateMany?: ProductVariantSizeUpdateManyWithWhereWithoutProductVariantColorInput | ProductVariantSizeUpdateManyWithWhereWithoutProductVariantColorInput[]
    deleteMany?: ProductVariantSizeScalarWhereInput | ProductVariantSizeScalarWhereInput[]
  }

  export type BagUpdateManyWithoutProductVariantColorNestedInput = {
    create?: XOR<BagCreateWithoutProductVariantColorInput, BagUncheckedCreateWithoutProductVariantColorInput> | BagCreateWithoutProductVariantColorInput[] | BagUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductVariantColorInput | BagCreateOrConnectWithoutProductVariantColorInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutProductVariantColorInput | BagUpsertWithWhereUniqueWithoutProductVariantColorInput[]
    createMany?: BagCreateManyProductVariantColorInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutProductVariantColorInput | BagUpdateWithWhereUniqueWithoutProductVariantColorInput[]
    updateMany?: BagUpdateManyWithWhereWithoutProductVariantColorInput | BagUpdateManyWithWhereWithoutProductVariantColorInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type ProductVariantSizeUncheckedUpdateManyWithoutProductVariantColorNestedInput = {
    create?: XOR<ProductVariantSizeCreateWithoutProductVariantColorInput, ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput> | ProductVariantSizeCreateWithoutProductVariantColorInput[] | ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput | ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput[]
    upsert?: ProductVariantSizeUpsertWithWhereUniqueWithoutProductVariantColorInput | ProductVariantSizeUpsertWithWhereUniqueWithoutProductVariantColorInput[]
    createMany?: ProductVariantSizeCreateManyProductVariantColorInputEnvelope
    set?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    disconnect?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    delete?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    connect?: ProductVariantSizeWhereUniqueInput | ProductVariantSizeWhereUniqueInput[]
    update?: ProductVariantSizeUpdateWithWhereUniqueWithoutProductVariantColorInput | ProductVariantSizeUpdateWithWhereUniqueWithoutProductVariantColorInput[]
    updateMany?: ProductVariantSizeUpdateManyWithWhereWithoutProductVariantColorInput | ProductVariantSizeUpdateManyWithWhereWithoutProductVariantColorInput[]
    deleteMany?: ProductVariantSizeScalarWhereInput | ProductVariantSizeScalarWhereInput[]
  }

  export type BagUncheckedUpdateManyWithoutProductVariantColorNestedInput = {
    create?: XOR<BagCreateWithoutProductVariantColorInput, BagUncheckedCreateWithoutProductVariantColorInput> | BagCreateWithoutProductVariantColorInput[] | BagUncheckedCreateWithoutProductVariantColorInput[]
    connectOrCreate?: BagCreateOrConnectWithoutProductVariantColorInput | BagCreateOrConnectWithoutProductVariantColorInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutProductVariantColorInput | BagUpsertWithWhereUniqueWithoutProductVariantColorInput[]
    createMany?: BagCreateManyProductVariantColorInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutProductVariantColorInput | BagUpdateWithWhereUniqueWithoutProductVariantColorInput[]
    updateMany?: BagUpdateManyWithWhereWithoutProductVariantColorInput | BagUpdateManyWithWhereWithoutProductVariantColorInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductVariantSizeInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantSizeInput, OrderItemUncheckedCreateWithoutProductVariantSizeInput> | OrderItemCreateWithoutProductVariantSizeInput[] | OrderItemUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantSizeInput | OrderItemCreateOrConnectWithoutProductVariantSizeInput[]
    createMany?: OrderItemCreateManyProductVariantSizeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductVariantColorCreateNestedOneWithoutProductVariantSizeInput = {
    create?: XOR<ProductVariantColorCreateWithoutProductVariantSizeInput, ProductVariantColorUncheckedCreateWithoutProductVariantSizeInput>
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductVariantSizeInput
    connect?: ProductVariantColorWhereUniqueInput
  }

  export type WishlistCreateNestedManyWithoutProductVariantSizeInput = {
    create?: XOR<WishlistCreateWithoutProductVariantSizeInput, WishlistUncheckedCreateWithoutProductVariantSizeInput> | WishlistCreateWithoutProductVariantSizeInput[] | WishlistUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductVariantSizeInput | WishlistCreateOrConnectWithoutProductVariantSizeInput[]
    createMany?: WishlistCreateManyProductVariantSizeInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductVariantSizeInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantSizeInput, OrderItemUncheckedCreateWithoutProductVariantSizeInput> | OrderItemCreateWithoutProductVariantSizeInput[] | OrderItemUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantSizeInput | OrderItemCreateOrConnectWithoutProductVariantSizeInput[]
    createMany?: OrderItemCreateManyProductVariantSizeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutProductVariantSizeInput = {
    create?: XOR<WishlistCreateWithoutProductVariantSizeInput, WishlistUncheckedCreateWithoutProductVariantSizeInput> | WishlistCreateWithoutProductVariantSizeInput[] | WishlistUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductVariantSizeInput | WishlistCreateOrConnectWithoutProductVariantSizeInput[]
    createMany?: WishlistCreateManyProductVariantSizeInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type EnumPRODUCT_SIZESFieldUpdateOperationsInput = {
    set?: $Enums.PRODUCT_SIZES
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPRODUCT_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.PRODUCT_STATUS
  }

  export type OrderItemUpdateManyWithoutProductVariantSizeNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantSizeInput, OrderItemUncheckedCreateWithoutProductVariantSizeInput> | OrderItemCreateWithoutProductVariantSizeInput[] | OrderItemUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantSizeInput | OrderItemCreateOrConnectWithoutProductVariantSizeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductVariantSizeInput | OrderItemUpsertWithWhereUniqueWithoutProductVariantSizeInput[]
    createMany?: OrderItemCreateManyProductVariantSizeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductVariantSizeInput | OrderItemUpdateWithWhereUniqueWithoutProductVariantSizeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductVariantSizeInput | OrderItemUpdateManyWithWhereWithoutProductVariantSizeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductVariantColorUpdateOneRequiredWithoutProductVariantSizeNestedInput = {
    create?: XOR<ProductVariantColorCreateWithoutProductVariantSizeInput, ProductVariantColorUncheckedCreateWithoutProductVariantSizeInput>
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductVariantSizeInput
    upsert?: ProductVariantColorUpsertWithoutProductVariantSizeInput
    connect?: ProductVariantColorWhereUniqueInput
    update?: XOR<XOR<ProductVariantColorUpdateToOneWithWhereWithoutProductVariantSizeInput, ProductVariantColorUpdateWithoutProductVariantSizeInput>, ProductVariantColorUncheckedUpdateWithoutProductVariantSizeInput>
  }

  export type WishlistUpdateManyWithoutProductVariantSizeNestedInput = {
    create?: XOR<WishlistCreateWithoutProductVariantSizeInput, WishlistUncheckedCreateWithoutProductVariantSizeInput> | WishlistCreateWithoutProductVariantSizeInput[] | WishlistUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductVariantSizeInput | WishlistCreateOrConnectWithoutProductVariantSizeInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutProductVariantSizeInput | WishlistUpsertWithWhereUniqueWithoutProductVariantSizeInput[]
    createMany?: WishlistCreateManyProductVariantSizeInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutProductVariantSizeInput | WishlistUpdateWithWhereUniqueWithoutProductVariantSizeInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutProductVariantSizeInput | WishlistUpdateManyWithWhereWithoutProductVariantSizeInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductVariantSizeNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantSizeInput, OrderItemUncheckedCreateWithoutProductVariantSizeInput> | OrderItemCreateWithoutProductVariantSizeInput[] | OrderItemUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantSizeInput | OrderItemCreateOrConnectWithoutProductVariantSizeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductVariantSizeInput | OrderItemUpsertWithWhereUniqueWithoutProductVariantSizeInput[]
    createMany?: OrderItemCreateManyProductVariantSizeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductVariantSizeInput | OrderItemUpdateWithWhereUniqueWithoutProductVariantSizeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductVariantSizeInput | OrderItemUpdateManyWithWhereWithoutProductVariantSizeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutProductVariantSizeNestedInput = {
    create?: XOR<WishlistCreateWithoutProductVariantSizeInput, WishlistUncheckedCreateWithoutProductVariantSizeInput> | WishlistCreateWithoutProductVariantSizeInput[] | WishlistUncheckedCreateWithoutProductVariantSizeInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductVariantSizeInput | WishlistCreateOrConnectWithoutProductVariantSizeInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutProductVariantSizeInput | WishlistUpsertWithWhereUniqueWithoutProductVariantSizeInput[]
    createMany?: WishlistCreateManyProductVariantSizeInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutProductVariantSizeInput | WishlistUpdateWithWhereUniqueWithoutProductVariantSizeInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutProductVariantSizeInput | WishlistUpdateManyWithWhereWithoutProductVariantSizeInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type ProductVariantSizeCreateNestedOneWithoutWishlistInput = {
    create?: XOR<ProductVariantSizeCreateWithoutWishlistInput, ProductVariantSizeUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutWishlistInput
    connect?: ProductVariantSizeWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutWishlistInput = {
    create?: XOR<ProductCreateWithoutWishlistInput, ProductUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ProductCreateOrConnectWithoutWishlistInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWishlistInput = {
    create?: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistInput
    connect?: UserWhereUniqueInput
  }

  export type ProductVariantSizeUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<ProductVariantSizeCreateWithoutWishlistInput, ProductVariantSizeUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutWishlistInput
    upsert?: ProductVariantSizeUpsertWithoutWishlistInput
    connect?: ProductVariantSizeWhereUniqueInput
    update?: XOR<XOR<ProductVariantSizeUpdateToOneWithWhereWithoutWishlistInput, ProductVariantSizeUpdateWithoutWishlistInput>, ProductVariantSizeUncheckedUpdateWithoutWishlistInput>
  }

  export type ProductUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<ProductCreateWithoutWishlistInput, ProductUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ProductCreateOrConnectWithoutWishlistInput
    upsert?: ProductUpsertWithoutWishlistInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutWishlistInput, ProductUpdateWithoutWishlistInput>, ProductUncheckedUpdateWithoutWishlistInput>
  }

  export type UserUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistInput
    upsert?: UserUpsertWithoutWishlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishlistInput, UserUpdateWithoutWishlistInput>, UserUncheckedUpdateWithoutWishlistInput>
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type ShippingAddressCreateNestedManyWithoutAddressInput = {
    create?: XOR<ShippingAddressCreateWithoutAddressInput, ShippingAddressUncheckedCreateWithoutAddressInput> | ShippingAddressCreateWithoutAddressInput[] | ShippingAddressUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutAddressInput | ShippingAddressCreateOrConnectWithoutAddressInput[]
    createMany?: ShippingAddressCreateManyAddressInputEnvelope
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
  }

  export type ShippingAddressUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<ShippingAddressCreateWithoutAddressInput, ShippingAddressUncheckedCreateWithoutAddressInput> | ShippingAddressCreateWithoutAddressInput[] | ShippingAddressUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutAddressInput | ShippingAddressCreateOrConnectWithoutAddressInput[]
    createMany?: ShippingAddressCreateManyAddressInputEnvelope
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type ShippingAddressUpdateManyWithoutAddressNestedInput = {
    create?: XOR<ShippingAddressCreateWithoutAddressInput, ShippingAddressUncheckedCreateWithoutAddressInput> | ShippingAddressCreateWithoutAddressInput[] | ShippingAddressUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutAddressInput | ShippingAddressCreateOrConnectWithoutAddressInput[]
    upsert?: ShippingAddressUpsertWithWhereUniqueWithoutAddressInput | ShippingAddressUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: ShippingAddressCreateManyAddressInputEnvelope
    set?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    disconnect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    delete?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    update?: ShippingAddressUpdateWithWhereUniqueWithoutAddressInput | ShippingAddressUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: ShippingAddressUpdateManyWithWhereWithoutAddressInput | ShippingAddressUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: ShippingAddressScalarWhereInput | ShippingAddressScalarWhereInput[]
  }

  export type ShippingAddressUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<ShippingAddressCreateWithoutAddressInput, ShippingAddressUncheckedCreateWithoutAddressInput> | ShippingAddressCreateWithoutAddressInput[] | ShippingAddressUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShippingAddressCreateOrConnectWithoutAddressInput | ShippingAddressCreateOrConnectWithoutAddressInput[]
    upsert?: ShippingAddressUpsertWithWhereUniqueWithoutAddressInput | ShippingAddressUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: ShippingAddressCreateManyAddressInputEnvelope
    set?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    disconnect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    delete?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    connect?: ShippingAddressWhereUniqueInput | ShippingAddressWhereUniqueInput[]
    update?: ShippingAddressUpdateWithWhereUniqueWithoutAddressInput | ShippingAddressUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: ShippingAddressUpdateManyWithWhereWithoutAddressInput | ShippingAddressUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: ShippingAddressScalarWhereInput | ShippingAddressScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBagInput = {
    create?: XOR<ProductCreateWithoutBagInput, ProductUncheckedCreateWithoutBagInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBagInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductVariantColorCreateNestedOneWithoutBagInput = {
    create?: XOR<ProductVariantColorCreateWithoutBagInput, ProductVariantColorUncheckedCreateWithoutBagInput>
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutBagInput
    connect?: ProductVariantColorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBagInput = {
    create?: XOR<UserCreateWithoutBagInput, UserUncheckedCreateWithoutBagInput>
    connectOrCreate?: UserCreateOrConnectWithoutBagInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutBagNestedInput = {
    create?: XOR<ProductCreateWithoutBagInput, ProductUncheckedCreateWithoutBagInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBagInput
    upsert?: ProductUpsertWithoutBagInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBagInput, ProductUpdateWithoutBagInput>, ProductUncheckedUpdateWithoutBagInput>
  }

  export type ProductVariantColorUpdateOneRequiredWithoutBagNestedInput = {
    create?: XOR<ProductVariantColorCreateWithoutBagInput, ProductVariantColorUncheckedCreateWithoutBagInput>
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutBagInput
    upsert?: ProductVariantColorUpsertWithoutBagInput
    connect?: ProductVariantColorWhereUniqueInput
    update?: XOR<XOR<ProductVariantColorUpdateToOneWithWhereWithoutBagInput, ProductVariantColorUpdateWithoutBagInput>, ProductVariantColorUncheckedUpdateWithoutBagInput>
  }

  export type UserUpdateOneRequiredWithoutBagNestedInput = {
    create?: XOR<UserCreateWithoutBagInput, UserUncheckedCreateWithoutBagInput>
    connectOrCreate?: UserCreateOrConnectWithoutBagInput
    upsert?: UserUpsertWithoutBagInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBagInput, UserUpdateWithoutBagInput>, UserUncheckedUpdateWithoutBagInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
  }

  export type EnumORDER_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.ORDER_STATUS
  }

  export type EnumPAYMENT_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.PAYMENT_STATUS
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentDetailUpsertWithWhereUniqueWithoutOrderInput | PaymentDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    set?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    disconnect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    delete?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    update?: PaymentDetailUpdateWithWhereUniqueWithoutOrderInput | PaymentDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentDetailUpdateManyWithWhereWithoutOrderInput | PaymentDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentDetailUpsertWithWhereUniqueWithoutOrderInput | PaymentDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    set?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    disconnect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    delete?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    update?: PaymentDetailUpdateWithWhereUniqueWithoutOrderInput | PaymentDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentDetailUpdateManyWithWhereWithoutOrderInput | PaymentDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductVariantSizeCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductVariantSizeCreateWithoutOrderItemInput, ProductVariantSizeUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutOrderItemInput
    connect?: ProductVariantSizeWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    upsert?: OrderUpsertWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemInput, OrderUpdateWithoutOrderItemInput>, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    upsert?: ProductUpsertWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemInput, ProductUpdateWithoutOrderItemInput>, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductVariantSizeUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ProductVariantSizeCreateWithoutOrderItemInput, ProductVariantSizeUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutOrderItemInput
    upsert?: ProductVariantSizeUpsertWithoutOrderItemInput
    connect?: ProductVariantSizeWhereUniqueInput
    update?: XOR<XOR<ProductVariantSizeUpdateToOneWithWhereWithoutOrderItemInput, ProductVariantSizeUpdateWithoutOrderItemInput>, ProductVariantSizeUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderCreateNestedOneWithoutPaymentDetailInput = {
    create?: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentDetailInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPAYMENT_METHODFieldUpdateOperationsInput = {
    set?: $Enums.PAYMENT_METHOD
  }

  export type OrderUpdateOneRequiredWithoutPaymentDetailNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentDetailInput
    upsert?: OrderUpsertWithoutPaymentDetailInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentDetailInput, OrderUpdateWithoutPaymentDetailInput>, OrderUncheckedUpdateWithoutPaymentDetailInput>
  }

  export type AddressCreateNestedOneWithoutShippingAddressInput = {
    create?: XOR<AddressCreateWithoutShippingAddressInput, AddressUncheckedCreateWithoutShippingAddressInput>
    connectOrCreate?: AddressCreateOrConnectWithoutShippingAddressInput
    connect?: AddressWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShippingAddressInput = {
    create?: XOR<UserCreateWithoutShippingAddressInput, UserUncheckedCreateWithoutShippingAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutShippingAddressInput
    connect?: UserWhereUniqueInput
  }

  export type AddressUpdateOneRequiredWithoutShippingAddressNestedInput = {
    create?: XOR<AddressCreateWithoutShippingAddressInput, AddressUncheckedCreateWithoutShippingAddressInput>
    connectOrCreate?: AddressCreateOrConnectWithoutShippingAddressInput
    upsert?: AddressUpsertWithoutShippingAddressInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutShippingAddressInput, AddressUpdateWithoutShippingAddressInput>, AddressUncheckedUpdateWithoutShippingAddressInput>
  }

  export type UserUpdateOneRequiredWithoutShippingAddressNestedInput = {
    create?: XOR<UserCreateWithoutShippingAddressInput, UserUncheckedCreateWithoutShippingAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutShippingAddressInput
    upsert?: UserUpsertWithoutShippingAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShippingAddressInput, UserUpdateWithoutShippingAddressInput>, UserUncheckedUpdateWithoutShippingAddressInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPRODUCT_SIZESFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_SIZES | EnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_SIZESFilter<$PrismaModel> | $Enums.PRODUCT_SIZES
  }

  export type NestedEnumPRODUCT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_STATUS | EnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_STATUSFilter<$PrismaModel> | $Enums.PRODUCT_STATUS
  }

  export type NestedEnumPRODUCT_SIZESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_SIZES | EnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_SIZES[] | ListEnumPRODUCT_SIZESFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_SIZESWithAggregatesFilter<$PrismaModel> | $Enums.PRODUCT_SIZES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRODUCT_SIZESFilter<$PrismaModel>
    _max?: NestedEnumPRODUCT_SIZESFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPRODUCT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRODUCT_STATUS | EnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRODUCT_STATUS[] | ListEnumPRODUCT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPRODUCT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.PRODUCT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRODUCT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumPRODUCT_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumORDER_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSFilter<$PrismaModel> | $Enums.ORDER_STATUS
  }

  export type NestedEnumPAYMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
  }

  export type NestedEnumORDER_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.ORDER_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumORDER_STATUSFilter<$PrismaModel>
    _max?: NestedEnumORDER_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumPAYMENT_METHODFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_METHOD | EnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_METHODFilter<$PrismaModel> | $Enums.PAYMENT_METHOD
  }

  export type NestedEnumPAYMENT_METHODWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_METHOD | EnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_METHOD[] | ListEnumPAYMENT_METHODFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_METHODWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_METHOD
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_METHODFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_METHODFilter<$PrismaModel>
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    PaymentDetail?: PaymentDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    PaymentDetail?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BagCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_variant_size_id: string
    quantity: number
    Product: ProductCreateNestedOneWithoutBagInput
    ProductVariantColor: ProductVariantColorCreateNestedOneWithoutBagInput
  }

  export type BagUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
  }

  export type BagCreateOrConnectWithoutUserInput = {
    where: BagWhereUniqueInput
    create: XOR<BagCreateWithoutUserInput, BagUncheckedCreateWithoutUserInput>
  }

  export type BagCreateManyUserInputEnvelope = {
    data: BagCreateManyUserInput | BagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShippingAddressCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
    Address: AddressCreateNestedOneWithoutShippingAddressInput
  }

  export type ShippingAddressUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    address_id: string
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
  }

  export type ShippingAddressCreateOrConnectWithoutUserInput = {
    where: ShippingAddressWhereUniqueInput
    create: XOR<ShippingAddressCreateWithoutUserInput, ShippingAddressUncheckedCreateWithoutUserInput>
  }

  export type ShippingAddressCreateManyUserInputEnvelope = {
    data: ShippingAddressCreateManyUserInput | ShippingAddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishlistCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    ProductVariantSize: ProductVariantSizeCreateNestedOneWithoutWishlistInput
    Product: ProductCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_variant_size_id: string
    product_id: string
  }

  export type WishlistCreateOrConnectWithoutUserInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput>
  }

  export type WishlistCreateManyUserInputEnvelope = {
    data: WishlistCreateManyUserInput | WishlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: UuidFilter<"Address"> | string
    created_at?: DateTimeFilter<"Address"> | Date | string
    updated_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    house_number?: StringFilter<"Address"> | string
    address?: StringFilter<"Address"> | string
    barangay?: StringFilter<"Address"> | string
    municipality?: StringFilter<"Address"> | string
    province?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    complete_address?: StringFilter<"Address"> | string
    additional_address?: StringNullableFilter<"Address"> | string | null
    user_id?: UuidFilter<"Address"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: UuidFilter<"Order"> | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    user_id?: UuidFilter<"Order"> | string
    order_status?: EnumORDER_STATUSFilter<"Order"> | $Enums.ORDER_STATUS
    total_amount?: FloatFilter<"Order"> | number
    payment_status?: EnumPAYMENT_STATUSFilter<"Order"> | $Enums.PAYMENT_STATUS
  }

  export type BagUpsertWithWhereUniqueWithoutUserInput = {
    where: BagWhereUniqueInput
    update: XOR<BagUpdateWithoutUserInput, BagUncheckedUpdateWithoutUserInput>
    create: XOR<BagCreateWithoutUserInput, BagUncheckedCreateWithoutUserInput>
  }

  export type BagUpdateWithWhereUniqueWithoutUserInput = {
    where: BagWhereUniqueInput
    data: XOR<BagUpdateWithoutUserInput, BagUncheckedUpdateWithoutUserInput>
  }

  export type BagUpdateManyWithWhereWithoutUserInput = {
    where: BagScalarWhereInput
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyWithoutUserInput>
  }

  export type BagScalarWhereInput = {
    AND?: BagScalarWhereInput | BagScalarWhereInput[]
    OR?: BagScalarWhereInput[]
    NOT?: BagScalarWhereInput | BagScalarWhereInput[]
    id?: UuidFilter<"Bag"> | string
    created_at?: DateTimeFilter<"Bag"> | Date | string
    updated_at?: DateTimeNullableFilter<"Bag"> | Date | string | null
    user_id?: UuidFilter<"Bag"> | string
    product_id?: UuidFilter<"Bag"> | string
    product_variant_size_id?: UuidFilter<"Bag"> | string
    product_variant_color_id?: UuidFilter<"Bag"> | string
    quantity?: IntFilter<"Bag"> | number
  }

  export type ShippingAddressUpsertWithWhereUniqueWithoutUserInput = {
    where: ShippingAddressWhereUniqueInput
    update: XOR<ShippingAddressUpdateWithoutUserInput, ShippingAddressUncheckedUpdateWithoutUserInput>
    create: XOR<ShippingAddressCreateWithoutUserInput, ShippingAddressUncheckedCreateWithoutUserInput>
  }

  export type ShippingAddressUpdateWithWhereUniqueWithoutUserInput = {
    where: ShippingAddressWhereUniqueInput
    data: XOR<ShippingAddressUpdateWithoutUserInput, ShippingAddressUncheckedUpdateWithoutUserInput>
  }

  export type ShippingAddressUpdateManyWithWhereWithoutUserInput = {
    where: ShippingAddressScalarWhereInput
    data: XOR<ShippingAddressUpdateManyMutationInput, ShippingAddressUncheckedUpdateManyWithoutUserInput>
  }

  export type ShippingAddressScalarWhereInput = {
    AND?: ShippingAddressScalarWhereInput | ShippingAddressScalarWhereInput[]
    OR?: ShippingAddressScalarWhereInput[]
    NOT?: ShippingAddressScalarWhereInput | ShippingAddressScalarWhereInput[]
    id?: UuidFilter<"ShippingAddress"> | string
    created_at?: DateTimeFilter<"ShippingAddress"> | Date | string
    updated_at?: DateTimeNullableFilter<"ShippingAddress"> | Date | string | null
    address_id?: UuidFilter<"ShippingAddress"> | string
    user_id?: UuidFilter<"ShippingAddress"> | string
    full_name?: StringNullableFilter<"ShippingAddress"> | string | null
    email_address?: StringNullableFilter<"ShippingAddress"> | string | null
    contact_number?: StringFilter<"ShippingAddress"> | string
    is_default?: BoolFilter<"ShippingAddress"> | boolean
  }

  export type WishlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutUserInput, WishlistUncheckedUpdateWithoutUserInput>
    create: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutUserInput, WishlistUncheckedUpdateWithoutUserInput>
  }

  export type WishlistUpdateManyWithWhereWithoutUserInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WishlistScalarWhereInput = {
    AND?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
    OR?: WishlistScalarWhereInput[]
    NOT?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
    id?: UuidFilter<"Wishlist"> | string
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeNullableFilter<"Wishlist"> | Date | string | null
    user_id?: UuidFilter<"Wishlist"> | string
    product_variant_size_id?: UuidFilter<"Wishlist"> | string
    product_id?: UuidFilter<"Wishlist"> | string
  }

  export type BagCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_variant_size_id: string
    quantity: number
    ProductVariantColor: ProductVariantColorCreateNestedOneWithoutBagInput
    User: UserCreateNestedOneWithoutBagInput
  }

  export type BagUncheckedCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
  }

  export type BagCreateOrConnectWithoutProductInput = {
    where: BagWhereUniqueInput
    create: XOR<BagCreateWithoutProductInput, BagUncheckedCreateWithoutProductInput>
  }

  export type BagCreateManyProductInputEnvelope = {
    data: BagCreateManyProductInput | BagCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    quantity: number
    price: number
    subtotal: number
    Order: OrderCreateNestedOneWithoutOrderItemInput
    ProductVariantSize: ProductVariantSizeCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    variant_color_required?: boolean
    variant_size_required?: boolean
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    variant_color_required?: boolean
    variant_size_required?: boolean
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantColorCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    ProductVariantSize?: ProductVariantSizeCreateNestedManyWithoutProductVariantColorInput
    Bag?: BagCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorUncheckedCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    ProductVariantSize?: ProductVariantSizeUncheckedCreateNestedManyWithoutProductVariantColorInput
    Bag?: BagUncheckedCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorCreateOrConnectWithoutProductInput = {
    where: ProductVariantColorWhereUniqueInput
    create: XOR<ProductVariantColorCreateWithoutProductInput, ProductVariantColorUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantColorCreateManyProductInputEnvelope = {
    data: ProductVariantColorCreateManyProductInput | ProductVariantColorCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type WishlistCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    ProductVariantSize: ProductVariantSizeCreateNestedOneWithoutWishlistInput
    User: UserCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_variant_size_id: string
  }

  export type WishlistCreateOrConnectWithoutProductInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput>
  }

  export type WishlistCreateManyProductInputEnvelope = {
    data: WishlistCreateManyProductInput | WishlistCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BagUpsertWithWhereUniqueWithoutProductInput = {
    where: BagWhereUniqueInput
    update: XOR<BagUpdateWithoutProductInput, BagUncheckedUpdateWithoutProductInput>
    create: XOR<BagCreateWithoutProductInput, BagUncheckedCreateWithoutProductInput>
  }

  export type BagUpdateWithWhereUniqueWithoutProductInput = {
    where: BagWhereUniqueInput
    data: XOR<BagUpdateWithoutProductInput, BagUncheckedUpdateWithoutProductInput>
  }

  export type BagUpdateManyWithWhereWithoutProductInput = {
    where: BagScalarWhereInput
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: UuidFilter<"OrderItem"> | string
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    order_id?: UuidFilter<"OrderItem"> | string
    product_id?: UuidFilter<"OrderItem"> | string
    product_variant_size_id?: UuidFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    variant_color_required?: BoolFieldUpdateOperationsInput | boolean
    variant_size_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    variant_color_required?: BoolFieldUpdateOperationsInput | boolean
    variant_size_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductVariantColorUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantColorWhereUniqueInput
    update: XOR<ProductVariantColorUpdateWithoutProductInput, ProductVariantColorUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantColorCreateWithoutProductInput, ProductVariantColorUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantColorUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantColorWhereUniqueInput
    data: XOR<ProductVariantColorUpdateWithoutProductInput, ProductVariantColorUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantColorUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantColorScalarWhereInput
    data: XOR<ProductVariantColorUpdateManyMutationInput, ProductVariantColorUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantColorScalarWhereInput = {
    AND?: ProductVariantColorScalarWhereInput | ProductVariantColorScalarWhereInput[]
    OR?: ProductVariantColorScalarWhereInput[]
    NOT?: ProductVariantColorScalarWhereInput | ProductVariantColorScalarWhereInput[]
    id?: UuidFilter<"ProductVariantColor"> | string
    created_at?: DateTimeFilter<"ProductVariantColor"> | Date | string
    updated_at?: DateTimeNullableFilter<"ProductVariantColor"> | Date | string | null
    color?: StringFilter<"ProductVariantColor"> | string
    images?: StringNullableListFilter<"ProductVariantColor">
    product_id?: UuidFilter<"ProductVariantColor"> | string
  }

  export type WishlistUpsertWithWhereUniqueWithoutProductInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutProductInput, WishlistUncheckedUpdateWithoutProductInput>
    create: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutProductInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutProductInput, WishlistUncheckedUpdateWithoutProductInput>
  }

  export type WishlistUpdateManyWithWhereWithoutProductInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    Bag?: BagCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    ProductVariantColor?: ProductVariantColorCreateNestedManyWithoutProductInput
    Wishlist?: WishlistCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    Bag?: BagUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ProductVariantColor?: ProductVariantColorUncheckedCreateNestedManyWithoutProductInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: UuidFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    sku?: StringNullableFilter<"Product"> | string | null
    category_id?: UuidFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    isFeatured?: BoolFilter<"Product"> | boolean
  }

  export type ProductCreateWithoutProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    Bag?: BagCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Category: CategoryCreateNestedOneWithoutProductInput
    Wishlist?: WishlistCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    category_id: string
    description?: string | null
    isFeatured?: boolean
    Bag?: BagUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductVariantColorInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductVariantColorInput, ProductUncheckedCreateWithoutProductVariantColorInput>
  }

  export type ProductVariantSizeCreateWithoutProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemCreateNestedManyWithoutProductVariantSizeInput
    Wishlist?: WishlistCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductVariantSizeInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeCreateOrConnectWithoutProductVariantColorInput = {
    where: ProductVariantSizeWhereUniqueInput
    create: XOR<ProductVariantSizeCreateWithoutProductVariantColorInput, ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput>
  }

  export type ProductVariantSizeCreateManyProductVariantColorInputEnvelope = {
    data: ProductVariantSizeCreateManyProductVariantColorInput | ProductVariantSizeCreateManyProductVariantColorInput[]
    skipDuplicates?: boolean
  }

  export type BagCreateWithoutProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_variant_size_id: string
    quantity: number
    Product: ProductCreateNestedOneWithoutBagInput
    User: UserCreateNestedOneWithoutBagInput
  }

  export type BagUncheckedCreateWithoutProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_id: string
    product_variant_size_id: string
    quantity: number
  }

  export type BagCreateOrConnectWithoutProductVariantColorInput = {
    where: BagWhereUniqueInput
    create: XOR<BagCreateWithoutProductVariantColorInput, BagUncheckedCreateWithoutProductVariantColorInput>
  }

  export type BagCreateManyProductVariantColorInputEnvelope = {
    data: BagCreateManyProductVariantColorInput | BagCreateManyProductVariantColorInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProductVariantColorInput = {
    update: XOR<ProductUpdateWithoutProductVariantColorInput, ProductUncheckedUpdateWithoutProductVariantColorInput>
    create: XOR<ProductCreateWithoutProductVariantColorInput, ProductUncheckedCreateWithoutProductVariantColorInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductVariantColorInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductVariantColorInput, ProductUncheckedUpdateWithoutProductVariantColorInput>
  }

  export type ProductUpdateWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantSizeUpsertWithWhereUniqueWithoutProductVariantColorInput = {
    where: ProductVariantSizeWhereUniqueInput
    update: XOR<ProductVariantSizeUpdateWithoutProductVariantColorInput, ProductVariantSizeUncheckedUpdateWithoutProductVariantColorInput>
    create: XOR<ProductVariantSizeCreateWithoutProductVariantColorInput, ProductVariantSizeUncheckedCreateWithoutProductVariantColorInput>
  }

  export type ProductVariantSizeUpdateWithWhereUniqueWithoutProductVariantColorInput = {
    where: ProductVariantSizeWhereUniqueInput
    data: XOR<ProductVariantSizeUpdateWithoutProductVariantColorInput, ProductVariantSizeUncheckedUpdateWithoutProductVariantColorInput>
  }

  export type ProductVariantSizeUpdateManyWithWhereWithoutProductVariantColorInput = {
    where: ProductVariantSizeScalarWhereInput
    data: XOR<ProductVariantSizeUpdateManyMutationInput, ProductVariantSizeUncheckedUpdateManyWithoutProductVariantColorInput>
  }

  export type ProductVariantSizeScalarWhereInput = {
    AND?: ProductVariantSizeScalarWhereInput | ProductVariantSizeScalarWhereInput[]
    OR?: ProductVariantSizeScalarWhereInput[]
    NOT?: ProductVariantSizeScalarWhereInput | ProductVariantSizeScalarWhereInput[]
    id?: UuidFilter<"ProductVariantSize"> | string
    created_at?: DateTimeFilter<"ProductVariantSize"> | Date | string
    updated_at?: DateTimeNullableFilter<"ProductVariantSize"> | Date | string | null
    size?: EnumPRODUCT_SIZESFilter<"ProductVariantSize"> | $Enums.PRODUCT_SIZES
    stock?: IntFilter<"ProductVariantSize"> | number
    status?: EnumPRODUCT_STATUSFilter<"ProductVariantSize"> | $Enums.PRODUCT_STATUS
    variant_color_id?: UuidFilter<"ProductVariantSize"> | string
  }

  export type BagUpsertWithWhereUniqueWithoutProductVariantColorInput = {
    where: BagWhereUniqueInput
    update: XOR<BagUpdateWithoutProductVariantColorInput, BagUncheckedUpdateWithoutProductVariantColorInput>
    create: XOR<BagCreateWithoutProductVariantColorInput, BagUncheckedCreateWithoutProductVariantColorInput>
  }

  export type BagUpdateWithWhereUniqueWithoutProductVariantColorInput = {
    where: BagWhereUniqueInput
    data: XOR<BagUpdateWithoutProductVariantColorInput, BagUncheckedUpdateWithoutProductVariantColorInput>
  }

  export type BagUpdateManyWithWhereWithoutProductVariantColorInput = {
    where: BagScalarWhereInput
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyWithoutProductVariantColorInput>
  }

  export type OrderItemCreateWithoutProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    quantity: number
    price: number
    subtotal: number
    Order: OrderCreateNestedOneWithoutOrderItemInput
    Product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    product_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type OrderItemCreateOrConnectWithoutProductVariantSizeInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductVariantSizeInput, OrderItemUncheckedCreateWithoutProductVariantSizeInput>
  }

  export type OrderItemCreateManyProductVariantSizeInputEnvelope = {
    data: OrderItemCreateManyProductVariantSizeInput | OrderItemCreateManyProductVariantSizeInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantColorCreateWithoutProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    Product: ProductCreateNestedOneWithoutProductVariantColorInput
    Bag?: BagCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorUncheckedCreateWithoutProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    product_id: string
    Bag?: BagUncheckedCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorCreateOrConnectWithoutProductVariantSizeInput = {
    where: ProductVariantColorWhereUniqueInput
    create: XOR<ProductVariantColorCreateWithoutProductVariantSizeInput, ProductVariantColorUncheckedCreateWithoutProductVariantSizeInput>
  }

  export type WishlistCreateWithoutProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    Product: ProductCreateNestedOneWithoutWishlistInput
    User: UserCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateWithoutProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_id: string
  }

  export type WishlistCreateOrConnectWithoutProductVariantSizeInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutProductVariantSizeInput, WishlistUncheckedCreateWithoutProductVariantSizeInput>
  }

  export type WishlistCreateManyProductVariantSizeInputEnvelope = {
    data: WishlistCreateManyProductVariantSizeInput | WishlistCreateManyProductVariantSizeInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductVariantSizeInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductVariantSizeInput, OrderItemUncheckedUpdateWithoutProductVariantSizeInput>
    create: XOR<OrderItemCreateWithoutProductVariantSizeInput, OrderItemUncheckedCreateWithoutProductVariantSizeInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductVariantSizeInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductVariantSizeInput, OrderItemUncheckedUpdateWithoutProductVariantSizeInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductVariantSizeInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductVariantSizeInput>
  }

  export type ProductVariantColorUpsertWithoutProductVariantSizeInput = {
    update: XOR<ProductVariantColorUpdateWithoutProductVariantSizeInput, ProductVariantColorUncheckedUpdateWithoutProductVariantSizeInput>
    create: XOR<ProductVariantColorCreateWithoutProductVariantSizeInput, ProductVariantColorUncheckedCreateWithoutProductVariantSizeInput>
    where?: ProductVariantColorWhereInput
  }

  export type ProductVariantColorUpdateToOneWithWhereWithoutProductVariantSizeInput = {
    where?: ProductVariantColorWhereInput
    data: XOR<ProductVariantColorUpdateWithoutProductVariantSizeInput, ProductVariantColorUncheckedUpdateWithoutProductVariantSizeInput>
  }

  export type ProductVariantColorUpdateWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    Product?: ProductUpdateOneRequiredWithoutProductVariantColorNestedInput
    Bag?: BagUpdateManyWithoutProductVariantColorNestedInput
  }

  export type ProductVariantColorUncheckedUpdateWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    product_id?: StringFieldUpdateOperationsInput | string
    Bag?: BagUncheckedUpdateManyWithoutProductVariantColorNestedInput
  }

  export type WishlistUpsertWithWhereUniqueWithoutProductVariantSizeInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutProductVariantSizeInput, WishlistUncheckedUpdateWithoutProductVariantSizeInput>
    create: XOR<WishlistCreateWithoutProductVariantSizeInput, WishlistUncheckedCreateWithoutProductVariantSizeInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutProductVariantSizeInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutProductVariantSizeInput, WishlistUncheckedUpdateWithoutProductVariantSizeInput>
  }

  export type WishlistUpdateManyWithWhereWithoutProductVariantSizeInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutProductVariantSizeInput>
  }

  export type ProductVariantSizeCreateWithoutWishlistInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemCreateNestedManyWithoutProductVariantSizeInput
    ProductVariantColor: ProductVariantColorCreateNestedOneWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeUncheckedCreateWithoutWishlistInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    variant_color_id: string
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeCreateOrConnectWithoutWishlistInput = {
    where: ProductVariantSizeWhereUniqueInput
    create: XOR<ProductVariantSizeCreateWithoutWishlistInput, ProductVariantSizeUncheckedCreateWithoutWishlistInput>
  }

  export type ProductCreateWithoutWishlistInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    Bag?: BagCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Category: CategoryCreateNestedOneWithoutProductInput
    ProductVariantColor?: ProductVariantColorCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutWishlistInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    category_id: string
    description?: string | null
    isFeatured?: boolean
    Bag?: BagUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ProductVariantColor?: ProductVariantColorUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutWishlistInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutWishlistInput, ProductUncheckedCreateWithoutWishlistInput>
  }

  export type UserCreateWithoutWishlistInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
    Bag?: BagCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWishlistInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Bag?: BagUncheckedCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
  }

  export type ProductVariantSizeUpsertWithoutWishlistInput = {
    update: XOR<ProductVariantSizeUpdateWithoutWishlistInput, ProductVariantSizeUncheckedUpdateWithoutWishlistInput>
    create: XOR<ProductVariantSizeCreateWithoutWishlistInput, ProductVariantSizeUncheckedCreateWithoutWishlistInput>
    where?: ProductVariantSizeWhereInput
  }

  export type ProductVariantSizeUpdateToOneWithWhereWithoutWishlistInput = {
    where?: ProductVariantSizeWhereInput
    data: XOR<ProductVariantSizeUpdateWithoutWishlistInput, ProductVariantSizeUncheckedUpdateWithoutWishlistInput>
  }

  export type ProductVariantSizeUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemUpdateManyWithoutProductVariantSizeNestedInput
    ProductVariantColor?: ProductVariantColorUpdateOneRequiredWithoutProductVariantSizeNestedInput
  }

  export type ProductVariantSizeUncheckedUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    variant_color_id?: StringFieldUpdateOperationsInput | string
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type ProductUpsertWithoutWishlistInput = {
    update: XOR<ProductUpdateWithoutWishlistInput, ProductUncheckedUpdateWithoutWishlistInput>
    create: XOR<ProductCreateWithoutWishlistInput, ProductUncheckedCreateWithoutWishlistInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutWishlistInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutWishlistInput, ProductUncheckedUpdateWithoutWishlistInput>
  }

  export type ProductUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutWishlistInput = {
    update: XOR<UserUpdateWithoutWishlistInput, UserUncheckedUpdateWithoutWishlistInput>
    create: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishlistInput, UserUncheckedUpdateWithoutWishlistInput>
  }

  export type UserUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    Bag?: BagUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Bag?: BagUncheckedUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Order?: OrderCreateNestedManyWithoutUserInput
    Bag?: BagCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutUserInput
    Wishlist?: WishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Bag?: BagUncheckedCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutUserInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type ShippingAddressCreateWithoutAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
    User: UserCreateNestedOneWithoutShippingAddressInput
  }

  export type ShippingAddressUncheckedCreateWithoutAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
  }

  export type ShippingAddressCreateOrConnectWithoutAddressInput = {
    where: ShippingAddressWhereUniqueInput
    create: XOR<ShippingAddressCreateWithoutAddressInput, ShippingAddressUncheckedCreateWithoutAddressInput>
  }

  export type ShippingAddressCreateManyAddressInputEnvelope = {
    data: ShippingAddressCreateManyAddressInput | ShippingAddressCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Order?: OrderUpdateManyWithoutUserNestedInput
    Bag?: BagUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Bag?: BagUncheckedUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShippingAddressUpsertWithWhereUniqueWithoutAddressInput = {
    where: ShippingAddressWhereUniqueInput
    update: XOR<ShippingAddressUpdateWithoutAddressInput, ShippingAddressUncheckedUpdateWithoutAddressInput>
    create: XOR<ShippingAddressCreateWithoutAddressInput, ShippingAddressUncheckedCreateWithoutAddressInput>
  }

  export type ShippingAddressUpdateWithWhereUniqueWithoutAddressInput = {
    where: ShippingAddressWhereUniqueInput
    data: XOR<ShippingAddressUpdateWithoutAddressInput, ShippingAddressUncheckedUpdateWithoutAddressInput>
  }

  export type ShippingAddressUpdateManyWithWhereWithoutAddressInput = {
    where: ShippingAddressScalarWhereInput
    data: XOR<ShippingAddressUpdateManyMutationInput, ShippingAddressUncheckedUpdateManyWithoutAddressInput>
  }

  export type ProductCreateWithoutBagInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Category: CategoryCreateNestedOneWithoutProductInput
    ProductVariantColor?: ProductVariantColorCreateNestedManyWithoutProductInput
    Wishlist?: WishlistCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBagInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    category_id: string
    description?: string | null
    isFeatured?: boolean
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ProductVariantColor?: ProductVariantColorUncheckedCreateNestedManyWithoutProductInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBagInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBagInput, ProductUncheckedCreateWithoutBagInput>
  }

  export type ProductVariantColorCreateWithoutBagInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    Product: ProductCreateNestedOneWithoutProductVariantColorInput
    ProductVariantSize?: ProductVariantSizeCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorUncheckedCreateWithoutBagInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
    product_id: string
    ProductVariantSize?: ProductVariantSizeUncheckedCreateNestedManyWithoutProductVariantColorInput
  }

  export type ProductVariantColorCreateOrConnectWithoutBagInput = {
    where: ProductVariantColorWhereUniqueInput
    create: XOR<ProductVariantColorCreateWithoutBagInput, ProductVariantColorUncheckedCreateWithoutBagInput>
  }

  export type UserCreateWithoutBagInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutUserInput
    Wishlist?: WishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBagInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutUserInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBagInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBagInput, UserUncheckedCreateWithoutBagInput>
  }

  export type ProductUpsertWithoutBagInput = {
    update: XOR<ProductUpdateWithoutBagInput, ProductUncheckedUpdateWithoutBagInput>
    create: XOR<ProductCreateWithoutBagInput, ProductUncheckedCreateWithoutBagInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBagInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBagInput, ProductUncheckedUpdateWithoutBagInput>
  }

  export type ProductUpdateWithoutBagInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBagInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUncheckedUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantColorUpsertWithoutBagInput = {
    update: XOR<ProductVariantColorUpdateWithoutBagInput, ProductVariantColorUncheckedUpdateWithoutBagInput>
    create: XOR<ProductVariantColorCreateWithoutBagInput, ProductVariantColorUncheckedCreateWithoutBagInput>
    where?: ProductVariantColorWhereInput
  }

  export type ProductVariantColorUpdateToOneWithWhereWithoutBagInput = {
    where?: ProductVariantColorWhereInput
    data: XOR<ProductVariantColorUpdateWithoutBagInput, ProductVariantColorUncheckedUpdateWithoutBagInput>
  }

  export type ProductVariantColorUpdateWithoutBagInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    Product?: ProductUpdateOneRequiredWithoutProductVariantColorNestedInput
    ProductVariantSize?: ProductVariantSizeUpdateManyWithoutProductVariantColorNestedInput
  }

  export type ProductVariantColorUncheckedUpdateWithoutBagInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    product_id?: StringFieldUpdateOperationsInput | string
    ProductVariantSize?: ProductVariantSizeUncheckedUpdateManyWithoutProductVariantColorNestedInput
  }

  export type UserUpsertWithoutBagInput = {
    update: XOR<UserUpdateWithoutBagInput, UserUncheckedUpdateWithoutBagInput>
    create: XOR<UserCreateWithoutBagInput, UserUncheckedCreateWithoutBagInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBagInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBagInput, UserUncheckedUpdateWithoutBagInput>
  }

  export type UserUpdateWithoutBagInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBagInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressCreateNestedManyWithoutUserInput
    Bag?: BagCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressCreateNestedManyWithoutUserInput
    Wishlist?: WishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    Bag?: BagUncheckedCreateNestedManyWithoutUserInput
    ShippingAddress?: ShippingAddressUncheckedCreateNestedManyWithoutUserInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    quantity: number
    price: number
    subtotal: number
    Product: ProductCreateNestedOneWithoutOrderItemInput
    ProductVariantSize: ProductVariantSizeCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentDetailCreateWithoutOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
  }

  export type PaymentDetailUncheckedCreateWithoutOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
  }

  export type PaymentDetailCreateOrConnectWithoutOrderInput = {
    where: PaymentDetailWhereUniqueInput
    create: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput>
  }

  export type PaymentDetailCreateManyOrderInputEnvelope = {
    data: PaymentDetailCreateManyOrderInput | PaymentDetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutUserNestedInput
    Bag?: BagUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    Bag?: BagUncheckedUpdateManyWithoutUserNestedInput
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentDetailWhereUniqueInput
    update: XOR<PaymentDetailUpdateWithoutOrderInput, PaymentDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput>
  }

  export type PaymentDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentDetailWhereUniqueInput
    data: XOR<PaymentDetailUpdateWithoutOrderInput, PaymentDetailUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentDetailUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentDetailScalarWhereInput
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentDetailScalarWhereInput = {
    AND?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
    OR?: PaymentDetailScalarWhereInput[]
    NOT?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
    id?: UuidFilter<"PaymentDetail"> | string
    created_at?: DateTimeFilter<"PaymentDetail"> | Date | string
    updated_at?: DateTimeNullableFilter<"PaymentDetail"> | Date | string | null
    order_id?: UuidFilter<"PaymentDetail"> | string
    payment_method?: EnumPAYMENT_METHODFilter<"PaymentDetail"> | $Enums.PAYMENT_METHOD
    transaction_id?: StringFilter<"PaymentDetail"> | string
    amount_paid?: FloatFilter<"PaymentDetail"> | number
    payment_status?: StringFilter<"PaymentDetail"> | string
  }

  export type OrderCreateWithoutOrderItemInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    User: UserCreateNestedOneWithoutOrderInput
    PaymentDetail?: PaymentDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    PaymentDetail?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
  }

  export type ProductCreateWithoutOrderItemInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
    Bag?: BagCreateNestedManyWithoutProductInput
    Category: CategoryCreateNestedOneWithoutProductInput
    ProductVariantColor?: ProductVariantColorCreateNestedManyWithoutProductInput
    Wishlist?: WishlistCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    category_id: string
    description?: string | null
    isFeatured?: boolean
    Bag?: BagUncheckedCreateNestedManyWithoutProductInput
    ProductVariantColor?: ProductVariantColorUncheckedCreateNestedManyWithoutProductInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type ProductVariantSizeCreateWithoutOrderItemInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    ProductVariantColor: ProductVariantColorCreateNestedOneWithoutProductVariantSizeInput
    Wishlist?: WishlistCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeUncheckedCreateWithoutOrderItemInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
    variant_color_id: string
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutProductVariantSizeInput
  }

  export type ProductVariantSizeCreateOrConnectWithoutOrderItemInput = {
    where: ProductVariantSizeWhereUniqueInput
    create: XOR<ProductVariantSizeCreateWithoutOrderItemInput, ProductVariantSizeUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemInput = {
    update: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    PaymentDetail?: PaymentDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    PaymentDetail?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderItemInput = {
    update: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUpdateManyWithoutProductNestedInput
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUncheckedUpdateManyWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUncheckedUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantSizeUpsertWithoutOrderItemInput = {
    update: XOR<ProductVariantSizeUpdateWithoutOrderItemInput, ProductVariantSizeUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductVariantSizeCreateWithoutOrderItemInput, ProductVariantSizeUncheckedCreateWithoutOrderItemInput>
    where?: ProductVariantSizeWhereInput
  }

  export type ProductVariantSizeUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductVariantSizeWhereInput
    data: XOR<ProductVariantSizeUpdateWithoutOrderItemInput, ProductVariantSizeUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductVariantSizeUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    ProductVariantColor?: ProductVariantColorUpdateOneRequiredWithoutProductVariantSizeNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type ProductVariantSizeUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    variant_color_id?: StringFieldUpdateOperationsInput | string
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type OrderCreateWithoutPaymentDetailInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    User: UserCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentDetailInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentDetailInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
  }

  export type OrderUpsertWithoutPaymentDetailInput = {
    update: XOR<OrderUpdateWithoutPaymentDetailInput, OrderUncheckedUpdateWithoutPaymentDetailInput>
    create: XOR<OrderCreateWithoutPaymentDetailInput, OrderUncheckedCreateWithoutPaymentDetailInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentDetailInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentDetailInput, OrderUncheckedUpdateWithoutPaymentDetailInput>
  }

  export type OrderUpdateWithoutPaymentDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type AddressCreateWithoutShippingAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    User: UserCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutShippingAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
    user_id: string
  }

  export type AddressCreateOrConnectWithoutShippingAddressInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutShippingAddressInput, AddressUncheckedCreateWithoutShippingAddressInput>
  }

  export type UserCreateWithoutShippingAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
    Bag?: BagCreateNestedManyWithoutUserInput
    Wishlist?: WishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShippingAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    username: string
    email: string
    user_id?: string
    address?: string
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Bag?: BagUncheckedCreateNestedManyWithoutUserInput
    Wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShippingAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShippingAddressInput, UserUncheckedCreateWithoutShippingAddressInput>
  }

  export type AddressUpsertWithoutShippingAddressInput = {
    update: XOR<AddressUpdateWithoutShippingAddressInput, AddressUncheckedUpdateWithoutShippingAddressInput>
    create: XOR<AddressCreateWithoutShippingAddressInput, AddressUncheckedCreateWithoutShippingAddressInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutShippingAddressInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutShippingAddressInput, AddressUncheckedUpdateWithoutShippingAddressInput>
  }

  export type AddressUpdateWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutShippingAddressInput = {
    update: XOR<UserUpdateWithoutShippingAddressInput, UserUncheckedUpdateWithoutShippingAddressInput>
    create: XOR<UserCreateWithoutShippingAddressInput, UserUncheckedCreateWithoutShippingAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShippingAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShippingAddressInput, UserUncheckedUpdateWithoutShippingAddressInput>
  }

  export type UserUpdateWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    Bag?: BagUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShippingAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Bag?: BagUncheckedUpdateManyWithoutUserNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    house_number: string
    address: string
    barangay: string
    municipality: string
    province: string
    zip_code: string
    complete_address: string
    additional_address?: string | null
  }

  export type OrderCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_status: $Enums.ORDER_STATUS
    total_amount: number
    payment_status: $Enums.PAYMENT_STATUS
  }

  export type BagCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
  }

  export type ShippingAddressCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    address_id: string
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
  }

  export type WishlistCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_variant_size_id: string
    product_id: string
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingAddress?: ShippingAddressUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingAddress?: ShippingAddressUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    barangay?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    complete_address?: StringFieldUpdateOperationsInput | string
    additional_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    PaymentDetail?: PaymentDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    PaymentDetail?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
  }

  export type BagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutBagNestedInput
    ProductVariantColor?: ProductVariantColorUpdateOneRequiredWithoutBagNestedInput
  }

  export type BagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_variant_color_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_variant_color_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ShippingAddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    Address?: AddressUpdateOneRequiredWithoutShippingAddressNestedInput
  }

  export type ShippingAddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingAddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WishlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductVariantSize?: ProductVariantSizeUpdateOneRequiredWithoutWishlistNestedInput
    Product?: ProductUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type WishlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type BagCreateManyProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_variant_size_id: string
    product_variant_color_id: string
    quantity: number
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type ProductVariantColorCreateManyProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    color: string
    images?: ProductVariantColorCreateimagesInput | string[]
  }

  export type WishlistCreateManyProductInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_variant_size_id: string
  }

  export type BagUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ProductVariantColor?: ProductVariantColorUpdateOneRequiredWithoutBagNestedInput
    User?: UserUpdateOneRequiredWithoutBagNestedInput
  }

  export type BagUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_variant_color_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BagUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    product_variant_color_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    ProductVariantSize?: ProductVariantSizeUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductVariantColorUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    ProductVariantSize?: ProductVariantSizeUpdateManyWithoutProductVariantColorNestedInput
    Bag?: BagUpdateManyWithoutProductVariantColorNestedInput
  }

  export type ProductVariantColorUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
    ProductVariantSize?: ProductVariantSizeUncheckedUpdateManyWithoutProductVariantColorNestedInput
    Bag?: BagUncheckedUpdateManyWithoutProductVariantColorNestedInput
  }

  export type ProductVariantColorUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductVariantColorUpdateimagesInput | string[]
  }

  export type WishlistUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductVariantSize?: ProductVariantSizeUpdateOneRequiredWithoutWishlistNestedInput
    User?: UserUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
  }

  export type WishlistUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    slug: string
    price: number
    sku?: string | null
    description?: string | null
    isFeatured?: boolean
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    Bag?: BagUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ProductVariantColor?: ProductVariantColorUncheckedUpdateManyWithoutProductNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductVariantSizeCreateManyProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    size: $Enums.PRODUCT_SIZES
    stock: number
    status: $Enums.PRODUCT_STATUS
  }

  export type BagCreateManyProductVariantColorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_id: string
    product_variant_size_id: string
    quantity: number
  }

  export type ProductVariantSizeUpdateWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemUpdateManyWithoutProductVariantSizeNestedInput
    Wishlist?: WishlistUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type ProductVariantSizeUncheckedUpdateWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductVariantSizeNestedInput
    Wishlist?: WishlistUncheckedUpdateManyWithoutProductVariantSizeNestedInput
  }

  export type ProductVariantSizeUncheckedUpdateManyWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: EnumPRODUCT_SIZESFieldUpdateOperationsInput | $Enums.PRODUCT_SIZES
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumPRODUCT_STATUSFieldUpdateOperationsInput | $Enums.PRODUCT_STATUS
  }

  export type BagUpdateWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutBagNestedInput
    User?: UserUpdateOneRequiredWithoutBagNestedInput
  }

  export type BagUncheckedUpdateWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BagUncheckedUpdateManyWithoutProductVariantColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    order_id: string
    product_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type WishlistCreateManyProductVariantSizeInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    product_id: string
  }

  export type OrderItemUpdateWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    Product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type WishlistUpdateWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutWishlistNestedInput
    User?: UserUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type WishlistUncheckedUpdateManyWithoutProductVariantSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingAddressCreateManyAddressInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: string
    full_name?: string | null
    email_address?: string | null
    contact_number: string
    is_default: boolean
  }

  export type ShippingAddressUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutShippingAddressNestedInput
  }

  export type ShippingAddressUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingAddressUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_id: string
    product_variant_size_id: string
    quantity: number
    price: number
    subtotal: number
  }

  export type PaymentDetailCreateManyOrderInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    payment_method: $Enums.PAYMENT_METHOD
    transaction_id: string
    amount_paid: number
    payment_status: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
    ProductVariantSize?: ProductVariantSizeUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    product_variant_size_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentDetailUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: EnumPAYMENT_METHODFieldUpdateOperationsInput | $Enums.PAYMENT_METHOD
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount_paid?: FloatFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantColorCountOutputTypeDefaultArgs instead
     */
    export type ProductVariantColorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantColorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantSizeCountOutputTypeDefaultArgs instead
     */
    export type ProductVariantSizeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantSizeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressCountOutputTypeDefaultArgs instead
     */
    export type AddressCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantColorDefaultArgs instead
     */
    export type ProductVariantColorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantColorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantSizeDefaultArgs instead
     */
    export type ProductVariantSizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantSizeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WishlistDefaultArgs instead
     */
    export type WishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WishlistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BagDefaultArgs instead
     */
    export type BagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDetailDefaultArgs instead
     */
    export type PaymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentMethodInfoDefaultArgs instead
     */
    export type PaymentMethodInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShippingAddressDefaultArgs instead
     */
    export type ShippingAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShippingAddressDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}