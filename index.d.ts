
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
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
 * Model DigitalID
 * 
 */
export type DigitalID = $Result.DefaultSelection<Prisma.$DigitalIDPayload>
/**
 * Model LocationHistory
 * 
 */
export type LocationHistory = $Result.DefaultSelection<Prisma.$LocationHistoryPayload>
/**
 * Model RiskZone
 * 
 */
export type RiskZone = $Result.DefaultSelection<Prisma.$RiskZonePayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model EmergencyAlert
 * 
 */
export type EmergencyAlert = $Result.DefaultSelection<Prisma.$EmergencyAlertPayload>
/**
 * Model EmergencyContact
 * 
 */
export type EmergencyContact = $Result.DefaultSelection<Prisma.$EmergencyContactPayload>
/**
 * Model TripPlan
 * 
 */
export type TripPlan = $Result.DefaultSelection<Prisma.$TripPlanPayload>
/**
 * Model SafetyNotification
 * 
 */
export type SafetyNotification = $Result.DefaultSelection<Prisma.$SafetyNotificationPayload>
/**
 * Model UserNotification
 * 
 */
export type UserNotification = $Result.DefaultSelection<Prisma.$UserNotificationPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  TOURIST: 'TOURIST',
  POLICE: 'POLICE',
  ADMIN: 'ADMIN',
  TOURISM_DEPT: 'TOURISM_DEPT'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const RiskLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const IncidentType: {
  MISSING_PERSON: 'MISSING_PERSON',
  MEDICAL_EMERGENCY: 'MEDICAL_EMERGENCY',
  ACCIDENT: 'ACCIDENT',
  CRIME: 'CRIME',
  NATURAL_DISASTER: 'NATURAL_DISASTER',
  HARASSMENT: 'HARASSMENT',
  THEFT: 'THEFT',
  OTHER: 'OTHER'
};

export type IncidentType = (typeof IncidentType)[keyof typeof IncidentType]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const AlertStatus: {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED',
  CANCELLED: 'CANCELLED'
};

export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type IncidentType = $Enums.IncidentType

export const IncidentType: typeof $Enums.IncidentType

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type AlertStatus = $Enums.AlertStatus

export const AlertStatus: typeof $Enums.AlertStatus

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
   * `prisma.digitalID`: Exposes CRUD operations for the **DigitalID** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DigitalIDS
    * const digitalIDS = await prisma.digitalID.findMany()
    * ```
    */
  get digitalID(): Prisma.DigitalIDDelegate<ExtArgs>;

  /**
   * `prisma.locationHistory`: Exposes CRUD operations for the **LocationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationHistories
    * const locationHistories = await prisma.locationHistory.findMany()
    * ```
    */
  get locationHistory(): Prisma.LocationHistoryDelegate<ExtArgs>;

  /**
   * `prisma.riskZone`: Exposes CRUD operations for the **RiskZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskZones
    * const riskZones = await prisma.riskZone.findMany()
    * ```
    */
  get riskZone(): Prisma.RiskZoneDelegate<ExtArgs>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs>;

  /**
   * `prisma.emergencyAlert`: Exposes CRUD operations for the **EmergencyAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyAlerts
    * const emergencyAlerts = await prisma.emergencyAlert.findMany()
    * ```
    */
  get emergencyAlert(): Prisma.EmergencyAlertDelegate<ExtArgs>;

  /**
   * `prisma.emergencyContact`: Exposes CRUD operations for the **EmergencyContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyContacts
    * const emergencyContacts = await prisma.emergencyContact.findMany()
    * ```
    */
  get emergencyContact(): Prisma.EmergencyContactDelegate<ExtArgs>;

  /**
   * `prisma.tripPlan`: Exposes CRUD operations for the **TripPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlans
    * const tripPlans = await prisma.tripPlan.findMany()
    * ```
    */
  get tripPlan(): Prisma.TripPlanDelegate<ExtArgs>;

  /**
   * `prisma.safetyNotification`: Exposes CRUD operations for the **SafetyNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SafetyNotifications
    * const safetyNotifications = await prisma.safetyNotification.findMany()
    * ```
    */
  get safetyNotification(): Prisma.SafetyNotificationDelegate<ExtArgs>;

  /**
   * `prisma.userNotification`: Exposes CRUD operations for the **UserNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserNotifications
    * const userNotifications = await prisma.userNotification.findMany()
    * ```
    */
  get userNotification(): Prisma.UserNotificationDelegate<ExtArgs>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs>;

  /**
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs>;
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
    DigitalID: 'DigitalID',
    LocationHistory: 'LocationHistory',
    RiskZone: 'RiskZone',
    Incident: 'Incident',
    EmergencyAlert: 'EmergencyAlert',
    EmergencyContact: 'EmergencyContact',
    TripPlan: 'TripPlan',
    SafetyNotification: 'SafetyNotification',
    UserNotification: 'UserNotification',
    Document: 'Document',
    Analytics: 'Analytics'
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
      modelProps: "user" | "digitalID" | "locationHistory" | "riskZone" | "incident" | "emergencyAlert" | "emergencyContact" | "tripPlan" | "safetyNotification" | "userNotification" | "document" | "analytics"
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
      DigitalID: {
        payload: Prisma.$DigitalIDPayload<ExtArgs>
        fields: Prisma.DigitalIDFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DigitalIDFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DigitalIDFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>
          }
          findFirst: {
            args: Prisma.DigitalIDFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DigitalIDFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>
          }
          findMany: {
            args: Prisma.DigitalIDFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>[]
          }
          create: {
            args: Prisma.DigitalIDCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>
          }
          createMany: {
            args: Prisma.DigitalIDCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DigitalIDCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>[]
          }
          delete: {
            args: Prisma.DigitalIDDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>
          }
          update: {
            args: Prisma.DigitalIDUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>
          }
          deleteMany: {
            args: Prisma.DigitalIDDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DigitalIDUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DigitalIDUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalIDPayload>
          }
          aggregate: {
            args: Prisma.DigitalIDAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDigitalID>
          }
          groupBy: {
            args: Prisma.DigitalIDGroupByArgs<ExtArgs>
            result: $Utils.Optional<DigitalIDGroupByOutputType>[]
          }
          count: {
            args: Prisma.DigitalIDCountArgs<ExtArgs>
            result: $Utils.Optional<DigitalIDCountAggregateOutputType> | number
          }
        }
      }
      LocationHistory: {
        payload: Prisma.$LocationHistoryPayload<ExtArgs>
        fields: Prisma.LocationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>
          }
          findFirst: {
            args: Prisma.LocationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>
          }
          findMany: {
            args: Prisma.LocationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>[]
          }
          create: {
            args: Prisma.LocationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>
          }
          createMany: {
            args: Prisma.LocationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>[]
          }
          delete: {
            args: Prisma.LocationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>
          }
          update: {
            args: Prisma.LocationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LocationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationHistoryPayload>
          }
          aggregate: {
            args: Prisma.LocationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationHistory>
          }
          groupBy: {
            args: Prisma.LocationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LocationHistoryCountAggregateOutputType> | number
          }
        }
      }
      RiskZone: {
        payload: Prisma.$RiskZonePayload<ExtArgs>
        fields: Prisma.RiskZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>
          }
          findFirst: {
            args: Prisma.RiskZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>
          }
          findMany: {
            args: Prisma.RiskZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>[]
          }
          create: {
            args: Prisma.RiskZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>
          }
          createMany: {
            args: Prisma.RiskZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>[]
          }
          delete: {
            args: Prisma.RiskZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>
          }
          update: {
            args: Prisma.RiskZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>
          }
          deleteMany: {
            args: Prisma.RiskZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiskZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskZonePayload>
          }
          aggregate: {
            args: Prisma.RiskZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskZone>
          }
          groupBy: {
            args: Prisma.RiskZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskZoneCountArgs<ExtArgs>
            result: $Utils.Optional<RiskZoneCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      EmergencyAlert: {
        payload: Prisma.$EmergencyAlertPayload<ExtArgs>
        fields: Prisma.EmergencyAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          findFirst: {
            args: Prisma.EmergencyAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          findMany: {
            args: Prisma.EmergencyAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>[]
          }
          create: {
            args: Prisma.EmergencyAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          createMany: {
            args: Prisma.EmergencyAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>[]
          }
          delete: {
            args: Prisma.EmergencyAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          update: {
            args: Prisma.EmergencyAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmergencyAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          aggregate: {
            args: Prisma.EmergencyAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyAlert>
          }
          groupBy: {
            args: Prisma.EmergencyAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyAlertCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyAlertCountAggregateOutputType> | number
          }
        }
      }
      EmergencyContact: {
        payload: Prisma.$EmergencyContactPayload<ExtArgs>
        fields: Prisma.EmergencyContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findFirst: {
            args: Prisma.EmergencyContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findMany: {
            args: Prisma.EmergencyContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          create: {
            args: Prisma.EmergencyContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          createMany: {
            args: Prisma.EmergencyContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          delete: {
            args: Prisma.EmergencyContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          update: {
            args: Prisma.EmergencyContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmergencyContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          aggregate: {
            args: Prisma.EmergencyContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyContact>
          }
          groupBy: {
            args: Prisma.EmergencyContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactCountAggregateOutputType> | number
          }
        }
      }
      TripPlan: {
        payload: Prisma.$TripPlanPayload<ExtArgs>
        fields: Prisma.TripPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findFirst: {
            args: Prisma.TripPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findMany: {
            args: Prisma.TripPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          create: {
            args: Prisma.TripPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          createMany: {
            args: Prisma.TripPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          delete: {
            args: Prisma.TripPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          update: {
            args: Prisma.TripPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          aggregate: {
            args: Prisma.TripPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlan>
          }
          groupBy: {
            args: Prisma.TripPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanCountAggregateOutputType> | number
          }
        }
      }
      SafetyNotification: {
        payload: Prisma.$SafetyNotificationPayload<ExtArgs>
        fields: Prisma.SafetyNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SafetyNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SafetyNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>
          }
          findFirst: {
            args: Prisma.SafetyNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SafetyNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>
          }
          findMany: {
            args: Prisma.SafetyNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>[]
          }
          create: {
            args: Prisma.SafetyNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>
          }
          createMany: {
            args: Prisma.SafetyNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SafetyNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>[]
          }
          delete: {
            args: Prisma.SafetyNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>
          }
          update: {
            args: Prisma.SafetyNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>
          }
          deleteMany: {
            args: Prisma.SafetyNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SafetyNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SafetyNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyNotificationPayload>
          }
          aggregate: {
            args: Prisma.SafetyNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSafetyNotification>
          }
          groupBy: {
            args: Prisma.SafetyNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SafetyNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SafetyNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<SafetyNotificationCountAggregateOutputType> | number
          }
        }
      }
      UserNotification: {
        payload: Prisma.$UserNotificationPayload<ExtArgs>
        fields: Prisma.UserNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          findFirst: {
            args: Prisma.UserNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          findMany: {
            args: Prisma.UserNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>[]
          }
          create: {
            args: Prisma.UserNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          createMany: {
            args: Prisma.UserNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>[]
          }
          delete: {
            args: Prisma.UserNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          update: {
            args: Prisma.UserNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          deleteMany: {
            args: Prisma.UserNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          aggregate: {
            args: Prisma.UserNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserNotification>
          }
          groupBy: {
            args: Prisma.UserNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<UserNotificationCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
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
    digitalIDs: number
    locations: number
    incidents: number
    emergencyAlerts: number
    emergencyContacts: number
    tripPlans: number
    documents: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalIDs?: boolean | UserCountOutputTypeCountDigitalIDsArgs
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
    incidents?: boolean | UserCountOutputTypeCountIncidentsArgs
    emergencyAlerts?: boolean | UserCountOutputTypeCountEmergencyAlertsArgs
    emergencyContacts?: boolean | UserCountOutputTypeCountEmergencyContactsArgs
    tripPlans?: boolean | UserCountOutputTypeCountTripPlansArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountDigitalIDsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalIDWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergencyAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyAlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergencyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNotificationWhereInput
  }


  /**
   * Count Type SafetyNotificationCountOutputType
   */

  export type SafetyNotificationCountOutputType = {
    userNotifications: number
  }

  export type SafetyNotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userNotifications?: boolean | SafetyNotificationCountOutputTypeCountUserNotificationsArgs
  }

  // Custom InputTypes
  /**
   * SafetyNotificationCountOutputType without action
   */
  export type SafetyNotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotificationCountOutputType
     */
    select?: SafetyNotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SafetyNotificationCountOutputType without action
   */
  export type SafetyNotificationCountOutputTypeCountUserNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    safetyScore: number | null
  }

  export type UserSumAggregateOutputType = {
    safetyScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    userType: $Enums.UserType | null
    phone: string | null
    dateOfBirth: Date | null
    nationality: string | null
    address: string | null
    profileImage: string | null
    digitalId: string | null
    safetyScore: number | null
    isActive: boolean | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    userType: $Enums.UserType | null
    phone: string | null
    dateOfBirth: Date | null
    nationality: string | null
    address: string | null
    profileImage: string | null
    digitalId: string | null
    safetyScore: number | null
    isActive: boolean | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    userType: number
    phone: number
    dateOfBirth: number
    nationality: number
    address: number
    profileImage: number
    digitalId: number
    safetyScore: number
    isActive: number
    emailVerified: number
    phoneVerified: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    safetyScore?: true
  }

  export type UserSumAggregateInputType = {
    safetyScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    userType?: true
    phone?: true
    dateOfBirth?: true
    nationality?: true
    address?: true
    profileImage?: true
    digitalId?: true
    safetyScore?: true
    isActive?: true
    emailVerified?: true
    phoneVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    userType?: true
    phone?: true
    dateOfBirth?: true
    nationality?: true
    address?: true
    profileImage?: true
    digitalId?: true
    safetyScore?: true
    isActive?: true
    emailVerified?: true
    phoneVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    userType?: true
    phone?: true
    dateOfBirth?: true
    nationality?: true
    address?: true
    profileImage?: true
    digitalId?: true
    safetyScore?: true
    isActive?: true
    emailVerified?: true
    phoneVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    userType: $Enums.UserType
    phone: string | null
    dateOfBirth: Date | null
    nationality: string | null
    address: string | null
    profileImage: string | null
    digitalId: string | null
    safetyScore: number | null
    isActive: boolean
    emailVerified: boolean
    phoneVerified: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    userType?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    address?: boolean
    profileImage?: boolean
    digitalId?: boolean
    safetyScore?: boolean
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    digitalIDs?: boolean | User$digitalIDsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    emergencyAlerts?: boolean | User$emergencyAlertsArgs<ExtArgs>
    emergencyContacts?: boolean | User$emergencyContactsArgs<ExtArgs>
    tripPlans?: boolean | User$tripPlansArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    userType?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    address?: boolean
    profileImage?: boolean
    digitalId?: boolean
    safetyScore?: boolean
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    userType?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    address?: boolean
    profileImage?: boolean
    digitalId?: boolean
    safetyScore?: boolean
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalIDs?: boolean | User$digitalIDsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    emergencyAlerts?: boolean | User$emergencyAlertsArgs<ExtArgs>
    emergencyContacts?: boolean | User$emergencyContactsArgs<ExtArgs>
    tripPlans?: boolean | User$tripPlansArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      digitalIDs: Prisma.$DigitalIDPayload<ExtArgs>[]
      locations: Prisma.$LocationHistoryPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      emergencyAlerts: Prisma.$EmergencyAlertPayload<ExtArgs>[]
      emergencyContacts: Prisma.$EmergencyContactPayload<ExtArgs>[]
      tripPlans: Prisma.$TripPlanPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      notifications: Prisma.$UserNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      userType: $Enums.UserType
      phone: string | null
      dateOfBirth: Date | null
      nationality: string | null
      address: string | null
      profileImage: string | null
      digitalId: string | null
      safetyScore: number | null
      isActive: boolean
      emailVerified: boolean
      phoneVerified: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
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
    digitalIDs<T extends User$digitalIDsArgs<ExtArgs> = {}>(args?: Subset<T, User$digitalIDsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "findMany"> | Null>
    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    incidents<T extends User$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany"> | Null>
    emergencyAlerts<T extends User$emergencyAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$emergencyAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "findMany"> | Null>
    emergencyContacts<T extends User$emergencyContactsArgs<ExtArgs> = {}>(args?: Subset<T, User$emergencyContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany"> | Null>
    tripPlans<T extends User$tripPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$tripPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany"> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly phone: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly nationality: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly digitalId: FieldRef<"User", 'String'>
    readonly safetyScore: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.digitalIDs
   */
  export type User$digitalIDsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    where?: DigitalIDWhereInput
    orderBy?: DigitalIDOrderByWithRelationInput | DigitalIDOrderByWithRelationInput[]
    cursor?: DigitalIDWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DigitalIDScalarFieldEnum | DigitalIDScalarFieldEnum[]
  }

  /**
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    where?: LocationHistoryWhereInput
    orderBy?: LocationHistoryOrderByWithRelationInput | LocationHistoryOrderByWithRelationInput[]
    cursor?: LocationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationHistoryScalarFieldEnum | LocationHistoryScalarFieldEnum[]
  }

  /**
   * User.incidents
   */
  export type User$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.emergencyAlerts
   */
  export type User$emergencyAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    where?: EmergencyAlertWhereInput
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    cursor?: EmergencyAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }

  /**
   * User.emergencyContacts
   */
  export type User$emergencyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    cursor?: EmergencyContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * User.tripPlans
   */
  export type User$tripPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    cursor?: TripPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    where?: UserNotificationWhereInput
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    cursor?: UserNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
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
   * Model DigitalID
   */

  export type AggregateDigitalID = {
    _count: DigitalIDCountAggregateOutputType | null
    _min: DigitalIDMinAggregateOutputType | null
    _max: DigitalIDMaxAggregateOutputType | null
  }

  export type DigitalIDMinAggregateOutputType = {
    id: string | null
    userId: string | null
    digitalId: string | null
    qrCode: string | null
    blockchainHash: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DigitalIDMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    digitalId: string | null
    qrCode: string | null
    blockchainHash: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DigitalIDCountAggregateOutputType = {
    id: number
    userId: number
    digitalId: number
    qrCode: number
    blockchainHash: number
    issuedAt: number
    expiresAt: number
    isActive: number
    verificationData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DigitalIDMinAggregateInputType = {
    id?: true
    userId?: true
    digitalId?: true
    qrCode?: true
    blockchainHash?: true
    issuedAt?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DigitalIDMaxAggregateInputType = {
    id?: true
    userId?: true
    digitalId?: true
    qrCode?: true
    blockchainHash?: true
    issuedAt?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DigitalIDCountAggregateInputType = {
    id?: true
    userId?: true
    digitalId?: true
    qrCode?: true
    blockchainHash?: true
    issuedAt?: true
    expiresAt?: true
    isActive?: true
    verificationData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DigitalIDAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalID to aggregate.
     */
    where?: DigitalIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalIDS to fetch.
     */
    orderBy?: DigitalIDOrderByWithRelationInput | DigitalIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DigitalIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalIDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DigitalIDS
    **/
    _count?: true | DigitalIDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DigitalIDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DigitalIDMaxAggregateInputType
  }

  export type GetDigitalIDAggregateType<T extends DigitalIDAggregateArgs> = {
        [P in keyof T & keyof AggregateDigitalID]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDigitalID[P]>
      : GetScalarType<T[P], AggregateDigitalID[P]>
  }




  export type DigitalIDGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalIDWhereInput
    orderBy?: DigitalIDOrderByWithAggregationInput | DigitalIDOrderByWithAggregationInput[]
    by: DigitalIDScalarFieldEnum[] | DigitalIDScalarFieldEnum
    having?: DigitalIDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DigitalIDCountAggregateInputType | true
    _min?: DigitalIDMinAggregateInputType
    _max?: DigitalIDMaxAggregateInputType
  }

  export type DigitalIDGroupByOutputType = {
    id: string
    userId: string
    digitalId: string
    qrCode: string
    blockchainHash: string | null
    issuedAt: Date
    expiresAt: Date | null
    isActive: boolean
    verificationData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: DigitalIDCountAggregateOutputType | null
    _min: DigitalIDMinAggregateOutputType | null
    _max: DigitalIDMaxAggregateOutputType | null
  }

  type GetDigitalIDGroupByPayload<T extends DigitalIDGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DigitalIDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DigitalIDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DigitalIDGroupByOutputType[P]>
            : GetScalarType<T[P], DigitalIDGroupByOutputType[P]>
        }
      >
    >


  export type DigitalIDSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    digitalId?: boolean
    qrCode?: boolean
    blockchainHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    verificationData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalID"]>

  export type DigitalIDSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    digitalId?: boolean
    qrCode?: boolean
    blockchainHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    verificationData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalID"]>

  export type DigitalIDSelectScalar = {
    id?: boolean
    userId?: boolean
    digitalId?: boolean
    qrCode?: boolean
    blockchainHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    verificationData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DigitalIDInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DigitalIDIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DigitalIDPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DigitalID"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      digitalId: string
      qrCode: string
      blockchainHash: string | null
      issuedAt: Date
      expiresAt: Date | null
      isActive: boolean
      verificationData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["digitalID"]>
    composites: {}
  }

  type DigitalIDGetPayload<S extends boolean | null | undefined | DigitalIDDefaultArgs> = $Result.GetResult<Prisma.$DigitalIDPayload, S>

  type DigitalIDCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DigitalIDFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DigitalIDCountAggregateInputType | true
    }

  export interface DigitalIDDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalID'], meta: { name: 'DigitalID' } }
    /**
     * Find zero or one DigitalID that matches the filter.
     * @param {DigitalIDFindUniqueArgs} args - Arguments to find a DigitalID
     * @example
     * // Get one DigitalID
     * const digitalID = await prisma.digitalID.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DigitalIDFindUniqueArgs>(args: SelectSubset<T, DigitalIDFindUniqueArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DigitalID that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DigitalIDFindUniqueOrThrowArgs} args - Arguments to find a DigitalID
     * @example
     * // Get one DigitalID
     * const digitalID = await prisma.digitalID.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DigitalIDFindUniqueOrThrowArgs>(args: SelectSubset<T, DigitalIDFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DigitalID that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDFindFirstArgs} args - Arguments to find a DigitalID
     * @example
     * // Get one DigitalID
     * const digitalID = await prisma.digitalID.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DigitalIDFindFirstArgs>(args?: SelectSubset<T, DigitalIDFindFirstArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DigitalID that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDFindFirstOrThrowArgs} args - Arguments to find a DigitalID
     * @example
     * // Get one DigitalID
     * const digitalID = await prisma.digitalID.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DigitalIDFindFirstOrThrowArgs>(args?: SelectSubset<T, DigitalIDFindFirstOrThrowArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DigitalIDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DigitalIDS
     * const digitalIDS = await prisma.digitalID.findMany()
     * 
     * // Get first 10 DigitalIDS
     * const digitalIDS = await prisma.digitalID.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const digitalIDWithIdOnly = await prisma.digitalID.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DigitalIDFindManyArgs>(args?: SelectSubset<T, DigitalIDFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DigitalID.
     * @param {DigitalIDCreateArgs} args - Arguments to create a DigitalID.
     * @example
     * // Create one DigitalID
     * const DigitalID = await prisma.digitalID.create({
     *   data: {
     *     // ... data to create a DigitalID
     *   }
     * })
     * 
     */
    create<T extends DigitalIDCreateArgs>(args: SelectSubset<T, DigitalIDCreateArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DigitalIDS.
     * @param {DigitalIDCreateManyArgs} args - Arguments to create many DigitalIDS.
     * @example
     * // Create many DigitalIDS
     * const digitalID = await prisma.digitalID.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DigitalIDCreateManyArgs>(args?: SelectSubset<T, DigitalIDCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DigitalIDS and returns the data saved in the database.
     * @param {DigitalIDCreateManyAndReturnArgs} args - Arguments to create many DigitalIDS.
     * @example
     * // Create many DigitalIDS
     * const digitalID = await prisma.digitalID.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DigitalIDS and only return the `id`
     * const digitalIDWithIdOnly = await prisma.digitalID.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DigitalIDCreateManyAndReturnArgs>(args?: SelectSubset<T, DigitalIDCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DigitalID.
     * @param {DigitalIDDeleteArgs} args - Arguments to delete one DigitalID.
     * @example
     * // Delete one DigitalID
     * const DigitalID = await prisma.digitalID.delete({
     *   where: {
     *     // ... filter to delete one DigitalID
     *   }
     * })
     * 
     */
    delete<T extends DigitalIDDeleteArgs>(args: SelectSubset<T, DigitalIDDeleteArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DigitalID.
     * @param {DigitalIDUpdateArgs} args - Arguments to update one DigitalID.
     * @example
     * // Update one DigitalID
     * const digitalID = await prisma.digitalID.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DigitalIDUpdateArgs>(args: SelectSubset<T, DigitalIDUpdateArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DigitalIDS.
     * @param {DigitalIDDeleteManyArgs} args - Arguments to filter DigitalIDS to delete.
     * @example
     * // Delete a few DigitalIDS
     * const { count } = await prisma.digitalID.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DigitalIDDeleteManyArgs>(args?: SelectSubset<T, DigitalIDDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalIDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DigitalIDS
     * const digitalID = await prisma.digitalID.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DigitalIDUpdateManyArgs>(args: SelectSubset<T, DigitalIDUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DigitalID.
     * @param {DigitalIDUpsertArgs} args - Arguments to update or create a DigitalID.
     * @example
     * // Update or create a DigitalID
     * const digitalID = await prisma.digitalID.upsert({
     *   create: {
     *     // ... data to create a DigitalID
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DigitalID we want to update
     *   }
     * })
     */
    upsert<T extends DigitalIDUpsertArgs>(args: SelectSubset<T, DigitalIDUpsertArgs<ExtArgs>>): Prisma__DigitalIDClient<$Result.GetResult<Prisma.$DigitalIDPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DigitalIDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDCountArgs} args - Arguments to filter DigitalIDS to count.
     * @example
     * // Count the number of DigitalIDS
     * const count = await prisma.digitalID.count({
     *   where: {
     *     // ... the filter for the DigitalIDS we want to count
     *   }
     * })
    **/
    count<T extends DigitalIDCountArgs>(
      args?: Subset<T, DigitalIDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DigitalIDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DigitalID.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DigitalIDAggregateArgs>(args: Subset<T, DigitalIDAggregateArgs>): Prisma.PrismaPromise<GetDigitalIDAggregateType<T>>

    /**
     * Group by DigitalID.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalIDGroupByArgs} args - Group by arguments.
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
      T extends DigitalIDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DigitalIDGroupByArgs['orderBy'] }
        : { orderBy?: DigitalIDGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DigitalIDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalIDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DigitalID model
   */
  readonly fields: DigitalIDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DigitalID.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DigitalIDClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DigitalID model
   */ 
  interface DigitalIDFieldRefs {
    readonly id: FieldRef<"DigitalID", 'String'>
    readonly userId: FieldRef<"DigitalID", 'String'>
    readonly digitalId: FieldRef<"DigitalID", 'String'>
    readonly qrCode: FieldRef<"DigitalID", 'String'>
    readonly blockchainHash: FieldRef<"DigitalID", 'String'>
    readonly issuedAt: FieldRef<"DigitalID", 'DateTime'>
    readonly expiresAt: FieldRef<"DigitalID", 'DateTime'>
    readonly isActive: FieldRef<"DigitalID", 'Boolean'>
    readonly verificationData: FieldRef<"DigitalID", 'Json'>
    readonly createdAt: FieldRef<"DigitalID", 'DateTime'>
    readonly updatedAt: FieldRef<"DigitalID", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DigitalID findUnique
   */
  export type DigitalIDFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * Filter, which DigitalID to fetch.
     */
    where: DigitalIDWhereUniqueInput
  }

  /**
   * DigitalID findUniqueOrThrow
   */
  export type DigitalIDFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * Filter, which DigitalID to fetch.
     */
    where: DigitalIDWhereUniqueInput
  }

  /**
   * DigitalID findFirst
   */
  export type DigitalIDFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * Filter, which DigitalID to fetch.
     */
    where?: DigitalIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalIDS to fetch.
     */
    orderBy?: DigitalIDOrderByWithRelationInput | DigitalIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalIDS.
     */
    cursor?: DigitalIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalIDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalIDS.
     */
    distinct?: DigitalIDScalarFieldEnum | DigitalIDScalarFieldEnum[]
  }

  /**
   * DigitalID findFirstOrThrow
   */
  export type DigitalIDFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * Filter, which DigitalID to fetch.
     */
    where?: DigitalIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalIDS to fetch.
     */
    orderBy?: DigitalIDOrderByWithRelationInput | DigitalIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalIDS.
     */
    cursor?: DigitalIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalIDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalIDS.
     */
    distinct?: DigitalIDScalarFieldEnum | DigitalIDScalarFieldEnum[]
  }

  /**
   * DigitalID findMany
   */
  export type DigitalIDFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * Filter, which DigitalIDS to fetch.
     */
    where?: DigitalIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalIDS to fetch.
     */
    orderBy?: DigitalIDOrderByWithRelationInput | DigitalIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DigitalIDS.
     */
    cursor?: DigitalIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalIDS.
     */
    skip?: number
    distinct?: DigitalIDScalarFieldEnum | DigitalIDScalarFieldEnum[]
  }

  /**
   * DigitalID create
   */
  export type DigitalIDCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * The data needed to create a DigitalID.
     */
    data: XOR<DigitalIDCreateInput, DigitalIDUncheckedCreateInput>
  }

  /**
   * DigitalID createMany
   */
  export type DigitalIDCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DigitalIDS.
     */
    data: DigitalIDCreateManyInput | DigitalIDCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalID createManyAndReturn
   */
  export type DigitalIDCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DigitalIDS.
     */
    data: DigitalIDCreateManyInput | DigitalIDCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DigitalID update
   */
  export type DigitalIDUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * The data needed to update a DigitalID.
     */
    data: XOR<DigitalIDUpdateInput, DigitalIDUncheckedUpdateInput>
    /**
     * Choose, which DigitalID to update.
     */
    where: DigitalIDWhereUniqueInput
  }

  /**
   * DigitalID updateMany
   */
  export type DigitalIDUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DigitalIDS.
     */
    data: XOR<DigitalIDUpdateManyMutationInput, DigitalIDUncheckedUpdateManyInput>
    /**
     * Filter which DigitalIDS to update
     */
    where?: DigitalIDWhereInput
  }

  /**
   * DigitalID upsert
   */
  export type DigitalIDUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * The filter to search for the DigitalID to update in case it exists.
     */
    where: DigitalIDWhereUniqueInput
    /**
     * In case the DigitalID found by the `where` argument doesn't exist, create a new DigitalID with this data.
     */
    create: XOR<DigitalIDCreateInput, DigitalIDUncheckedCreateInput>
    /**
     * In case the DigitalID was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DigitalIDUpdateInput, DigitalIDUncheckedUpdateInput>
  }

  /**
   * DigitalID delete
   */
  export type DigitalIDDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
    /**
     * Filter which DigitalID to delete.
     */
    where: DigitalIDWhereUniqueInput
  }

  /**
   * DigitalID deleteMany
   */
  export type DigitalIDDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalIDS to delete
     */
    where?: DigitalIDWhereInput
  }

  /**
   * DigitalID without action
   */
  export type DigitalIDDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalID
     */
    select?: DigitalIDSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalIDInclude<ExtArgs> | null
  }


  /**
   * Model LocationHistory
   */

  export type AggregateLocationHistory = {
    _count: LocationHistoryCountAggregateOutputType | null
    _avg: LocationHistoryAvgAggregateOutputType | null
    _sum: LocationHistorySumAggregateOutputType | null
    _min: LocationHistoryMinAggregateOutputType | null
    _max: LocationHistoryMaxAggregateOutputType | null
  }

  export type LocationHistoryAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    batteryLevel: number | null
  }

  export type LocationHistorySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    batteryLevel: number | null
  }

  export type LocationHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    address: string | null
    batteryLevel: number | null
    isEmergency: boolean | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type LocationHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    address: string | null
    batteryLevel: number | null
    isEmergency: boolean | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type LocationHistoryCountAggregateOutputType = {
    id: number
    userId: number
    latitude: number
    longitude: number
    accuracy: number
    altitude: number
    heading: number
    speed: number
    address: number
    batteryLevel: number
    isEmergency: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type LocationHistoryAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    accuracy?: true
    altitude?: true
    heading?: true
    speed?: true
    batteryLevel?: true
  }

  export type LocationHistorySumAggregateInputType = {
    latitude?: true
    longitude?: true
    accuracy?: true
    altitude?: true
    heading?: true
    speed?: true
    batteryLevel?: true
  }

  export type LocationHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    accuracy?: true
    altitude?: true
    heading?: true
    speed?: true
    address?: true
    batteryLevel?: true
    isEmergency?: true
    timestamp?: true
    createdAt?: true
  }

  export type LocationHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    accuracy?: true
    altitude?: true
    heading?: true
    speed?: true
    address?: true
    batteryLevel?: true
    isEmergency?: true
    timestamp?: true
    createdAt?: true
  }

  export type LocationHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    accuracy?: true
    altitude?: true
    heading?: true
    speed?: true
    address?: true
    batteryLevel?: true
    isEmergency?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type LocationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationHistory to aggregate.
     */
    where?: LocationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationHistories to fetch.
     */
    orderBy?: LocationHistoryOrderByWithRelationInput | LocationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationHistories
    **/
    _count?: true | LocationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationHistoryMaxAggregateInputType
  }

  export type GetLocationHistoryAggregateType<T extends LocationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationHistory[P]>
      : GetScalarType<T[P], AggregateLocationHistory[P]>
  }




  export type LocationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationHistoryWhereInput
    orderBy?: LocationHistoryOrderByWithAggregationInput | LocationHistoryOrderByWithAggregationInput[]
    by: LocationHistoryScalarFieldEnum[] | LocationHistoryScalarFieldEnum
    having?: LocationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationHistoryCountAggregateInputType | true
    _avg?: LocationHistoryAvgAggregateInputType
    _sum?: LocationHistorySumAggregateInputType
    _min?: LocationHistoryMinAggregateInputType
    _max?: LocationHistoryMaxAggregateInputType
  }

  export type LocationHistoryGroupByOutputType = {
    id: string
    userId: string
    latitude: number
    longitude: number
    accuracy: number | null
    altitude: number | null
    heading: number | null
    speed: number | null
    address: string | null
    batteryLevel: number | null
    isEmergency: boolean
    timestamp: Date
    createdAt: Date
    _count: LocationHistoryCountAggregateOutputType | null
    _avg: LocationHistoryAvgAggregateOutputType | null
    _sum: LocationHistorySumAggregateOutputType | null
    _min: LocationHistoryMinAggregateOutputType | null
    _max: LocationHistoryMaxAggregateOutputType | null
  }

  type GetLocationHistoryGroupByPayload<T extends LocationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LocationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LocationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    address?: boolean
    batteryLevel?: boolean
    isEmergency?: boolean
    timestamp?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationHistory"]>

  export type LocationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    address?: boolean
    batteryLevel?: boolean
    isEmergency?: boolean
    timestamp?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationHistory"]>

  export type LocationHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    altitude?: boolean
    heading?: boolean
    speed?: boolean
    address?: boolean
    batteryLevel?: boolean
    isEmergency?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }

  export type LocationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LocationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      latitude: number
      longitude: number
      accuracy: number | null
      altitude: number | null
      heading: number | null
      speed: number | null
      address: string | null
      batteryLevel: number | null
      isEmergency: boolean
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["locationHistory"]>
    composites: {}
  }

  type LocationHistoryGetPayload<S extends boolean | null | undefined | LocationHistoryDefaultArgs> = $Result.GetResult<Prisma.$LocationHistoryPayload, S>

  type LocationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationHistoryCountAggregateInputType | true
    }

  export interface LocationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationHistory'], meta: { name: 'LocationHistory' } }
    /**
     * Find zero or one LocationHistory that matches the filter.
     * @param {LocationHistoryFindUniqueArgs} args - Arguments to find a LocationHistory
     * @example
     * // Get one LocationHistory
     * const locationHistory = await prisma.locationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationHistoryFindUniqueArgs>(args: SelectSubset<T, LocationHistoryFindUniqueArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LocationHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LocationHistoryFindUniqueOrThrowArgs} args - Arguments to find a LocationHistory
     * @example
     * // Get one LocationHistory
     * const locationHistory = await prisma.locationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LocationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryFindFirstArgs} args - Arguments to find a LocationHistory
     * @example
     * // Get one LocationHistory
     * const locationHistory = await prisma.locationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationHistoryFindFirstArgs>(args?: SelectSubset<T, LocationHistoryFindFirstArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LocationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryFindFirstOrThrowArgs} args - Arguments to find a LocationHistory
     * @example
     * // Get one LocationHistory
     * const locationHistory = await prisma.locationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LocationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationHistories
     * const locationHistories = await prisma.locationHistory.findMany()
     * 
     * // Get first 10 LocationHistories
     * const locationHistories = await prisma.locationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationHistoryWithIdOnly = await prisma.locationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationHistoryFindManyArgs>(args?: SelectSubset<T, LocationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LocationHistory.
     * @param {LocationHistoryCreateArgs} args - Arguments to create a LocationHistory.
     * @example
     * // Create one LocationHistory
     * const LocationHistory = await prisma.locationHistory.create({
     *   data: {
     *     // ... data to create a LocationHistory
     *   }
     * })
     * 
     */
    create<T extends LocationHistoryCreateArgs>(args: SelectSubset<T, LocationHistoryCreateArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LocationHistories.
     * @param {LocationHistoryCreateManyArgs} args - Arguments to create many LocationHistories.
     * @example
     * // Create many LocationHistories
     * const locationHistory = await prisma.locationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationHistoryCreateManyArgs>(args?: SelectSubset<T, LocationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationHistories and returns the data saved in the database.
     * @param {LocationHistoryCreateManyAndReturnArgs} args - Arguments to create many LocationHistories.
     * @example
     * // Create many LocationHistories
     * const locationHistory = await prisma.locationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationHistories and only return the `id`
     * const locationHistoryWithIdOnly = await prisma.locationHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LocationHistory.
     * @param {LocationHistoryDeleteArgs} args - Arguments to delete one LocationHistory.
     * @example
     * // Delete one LocationHistory
     * const LocationHistory = await prisma.locationHistory.delete({
     *   where: {
     *     // ... filter to delete one LocationHistory
     *   }
     * })
     * 
     */
    delete<T extends LocationHistoryDeleteArgs>(args: SelectSubset<T, LocationHistoryDeleteArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LocationHistory.
     * @param {LocationHistoryUpdateArgs} args - Arguments to update one LocationHistory.
     * @example
     * // Update one LocationHistory
     * const locationHistory = await prisma.locationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationHistoryUpdateArgs>(args: SelectSubset<T, LocationHistoryUpdateArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LocationHistories.
     * @param {LocationHistoryDeleteManyArgs} args - Arguments to filter LocationHistories to delete.
     * @example
     * // Delete a few LocationHistories
     * const { count } = await prisma.locationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationHistoryDeleteManyArgs>(args?: SelectSubset<T, LocationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationHistories
     * const locationHistory = await prisma.locationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationHistoryUpdateManyArgs>(args: SelectSubset<T, LocationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LocationHistory.
     * @param {LocationHistoryUpsertArgs} args - Arguments to update or create a LocationHistory.
     * @example
     * // Update or create a LocationHistory
     * const locationHistory = await prisma.locationHistory.upsert({
     *   create: {
     *     // ... data to create a LocationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationHistory we want to update
     *   }
     * })
     */
    upsert<T extends LocationHistoryUpsertArgs>(args: SelectSubset<T, LocationHistoryUpsertArgs<ExtArgs>>): Prisma__LocationHistoryClient<$Result.GetResult<Prisma.$LocationHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LocationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryCountArgs} args - Arguments to filter LocationHistories to count.
     * @example
     * // Count the number of LocationHistories
     * const count = await prisma.locationHistory.count({
     *   where: {
     *     // ... the filter for the LocationHistories we want to count
     *   }
     * })
    **/
    count<T extends LocationHistoryCountArgs>(
      args?: Subset<T, LocationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationHistoryAggregateArgs>(args: Subset<T, LocationHistoryAggregateArgs>): Prisma.PrismaPromise<GetLocationHistoryAggregateType<T>>

    /**
     * Group by LocationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationHistoryGroupByArgs} args - Group by arguments.
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
      T extends LocationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LocationHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationHistory model
   */
  readonly fields: LocationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LocationHistory model
   */ 
  interface LocationHistoryFieldRefs {
    readonly id: FieldRef<"LocationHistory", 'String'>
    readonly userId: FieldRef<"LocationHistory", 'String'>
    readonly latitude: FieldRef<"LocationHistory", 'Float'>
    readonly longitude: FieldRef<"LocationHistory", 'Float'>
    readonly accuracy: FieldRef<"LocationHistory", 'Float'>
    readonly altitude: FieldRef<"LocationHistory", 'Float'>
    readonly heading: FieldRef<"LocationHistory", 'Float'>
    readonly speed: FieldRef<"LocationHistory", 'Float'>
    readonly address: FieldRef<"LocationHistory", 'String'>
    readonly batteryLevel: FieldRef<"LocationHistory", 'Int'>
    readonly isEmergency: FieldRef<"LocationHistory", 'Boolean'>
    readonly timestamp: FieldRef<"LocationHistory", 'DateTime'>
    readonly createdAt: FieldRef<"LocationHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocationHistory findUnique
   */
  export type LocationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LocationHistory to fetch.
     */
    where: LocationHistoryWhereUniqueInput
  }

  /**
   * LocationHistory findUniqueOrThrow
   */
  export type LocationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LocationHistory to fetch.
     */
    where: LocationHistoryWhereUniqueInput
  }

  /**
   * LocationHistory findFirst
   */
  export type LocationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LocationHistory to fetch.
     */
    where?: LocationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationHistories to fetch.
     */
    orderBy?: LocationHistoryOrderByWithRelationInput | LocationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationHistories.
     */
    cursor?: LocationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationHistories.
     */
    distinct?: LocationHistoryScalarFieldEnum | LocationHistoryScalarFieldEnum[]
  }

  /**
   * LocationHistory findFirstOrThrow
   */
  export type LocationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LocationHistory to fetch.
     */
    where?: LocationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationHistories to fetch.
     */
    orderBy?: LocationHistoryOrderByWithRelationInput | LocationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationHistories.
     */
    cursor?: LocationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationHistories.
     */
    distinct?: LocationHistoryScalarFieldEnum | LocationHistoryScalarFieldEnum[]
  }

  /**
   * LocationHistory findMany
   */
  export type LocationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LocationHistories to fetch.
     */
    where?: LocationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationHistories to fetch.
     */
    orderBy?: LocationHistoryOrderByWithRelationInput | LocationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationHistories.
     */
    cursor?: LocationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationHistories.
     */
    skip?: number
    distinct?: LocationHistoryScalarFieldEnum | LocationHistoryScalarFieldEnum[]
  }

  /**
   * LocationHistory create
   */
  export type LocationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationHistory.
     */
    data: XOR<LocationHistoryCreateInput, LocationHistoryUncheckedCreateInput>
  }

  /**
   * LocationHistory createMany
   */
  export type LocationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationHistories.
     */
    data: LocationHistoryCreateManyInput | LocationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationHistory createManyAndReturn
   */
  export type LocationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LocationHistories.
     */
    data: LocationHistoryCreateManyInput | LocationHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationHistory update
   */
  export type LocationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationHistory.
     */
    data: XOR<LocationHistoryUpdateInput, LocationHistoryUncheckedUpdateInput>
    /**
     * Choose, which LocationHistory to update.
     */
    where: LocationHistoryWhereUniqueInput
  }

  /**
   * LocationHistory updateMany
   */
  export type LocationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationHistories.
     */
    data: XOR<LocationHistoryUpdateManyMutationInput, LocationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LocationHistories to update
     */
    where?: LocationHistoryWhereInput
  }

  /**
   * LocationHistory upsert
   */
  export type LocationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationHistory to update in case it exists.
     */
    where: LocationHistoryWhereUniqueInput
    /**
     * In case the LocationHistory found by the `where` argument doesn't exist, create a new LocationHistory with this data.
     */
    create: XOR<LocationHistoryCreateInput, LocationHistoryUncheckedCreateInput>
    /**
     * In case the LocationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationHistoryUpdateInput, LocationHistoryUncheckedUpdateInput>
  }

  /**
   * LocationHistory delete
   */
  export type LocationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
    /**
     * Filter which LocationHistory to delete.
     */
    where: LocationHistoryWhereUniqueInput
  }

  /**
   * LocationHistory deleteMany
   */
  export type LocationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationHistories to delete
     */
    where?: LocationHistoryWhereInput
  }

  /**
   * LocationHistory without action
   */
  export type LocationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationHistory
     */
    select?: LocationHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationHistoryInclude<ExtArgs> | null
  }


  /**
   * Model RiskZone
   */

  export type AggregateRiskZone = {
    _count: RiskZoneCountAggregateOutputType | null
    _avg: RiskZoneAvgAggregateOutputType | null
    _sum: RiskZoneSumAggregateOutputType | null
    _min: RiskZoneMinAggregateOutputType | null
    _max: RiskZoneMaxAggregateOutputType | null
  }

  export type RiskZoneAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radius: number | null
  }

  export type RiskZoneSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radius: number | null
  }

  export type RiskZoneMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    riskLevel: $Enums.RiskLevel | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskZoneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    riskLevel: $Enums.RiskLevel | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskZoneCountAggregateOutputType = {
    id: number
    name: number
    description: number
    latitude: number
    longitude: number
    radius: number
    riskLevel: number
    isActive: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiskZoneAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type RiskZoneSumAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type RiskZoneMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    radius?: true
    riskLevel?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskZoneMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    radius?: true
    riskLevel?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskZoneCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    radius?: true
    riskLevel?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskZone to aggregate.
     */
    where?: RiskZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskZones to fetch.
     */
    orderBy?: RiskZoneOrderByWithRelationInput | RiskZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskZones
    **/
    _count?: true | RiskZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskZoneMaxAggregateInputType
  }

  export type GetRiskZoneAggregateType<T extends RiskZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskZone[P]>
      : GetScalarType<T[P], AggregateRiskZone[P]>
  }




  export type RiskZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskZoneWhereInput
    orderBy?: RiskZoneOrderByWithAggregationInput | RiskZoneOrderByWithAggregationInput[]
    by: RiskZoneScalarFieldEnum[] | RiskZoneScalarFieldEnum
    having?: RiskZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskZoneCountAggregateInputType | true
    _avg?: RiskZoneAvgAggregateInputType
    _sum?: RiskZoneSumAggregateInputType
    _min?: RiskZoneMinAggregateInputType
    _max?: RiskZoneMaxAggregateInputType
  }

  export type RiskZoneGroupByOutputType = {
    id: string
    name: string
    description: string | null
    latitude: number
    longitude: number
    radius: number
    riskLevel: $Enums.RiskLevel
    isActive: boolean
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: RiskZoneCountAggregateOutputType | null
    _avg: RiskZoneAvgAggregateOutputType | null
    _sum: RiskZoneSumAggregateOutputType | null
    _min: RiskZoneMinAggregateOutputType | null
    _max: RiskZoneMaxAggregateOutputType | null
  }

  type GetRiskZoneGroupByPayload<T extends RiskZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskZoneGroupByOutputType[P]>
            : GetScalarType<T[P], RiskZoneGroupByOutputType[P]>
        }
      >
    >


  export type RiskZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    riskLevel?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskZone"]>

  export type RiskZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    riskLevel?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskZone"]>

  export type RiskZoneSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    riskLevel?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $RiskZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskZone"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      latitude: number
      longitude: number
      radius: number
      riskLevel: $Enums.RiskLevel
      isActive: boolean
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["riskZone"]>
    composites: {}
  }

  type RiskZoneGetPayload<S extends boolean | null | undefined | RiskZoneDefaultArgs> = $Result.GetResult<Prisma.$RiskZonePayload, S>

  type RiskZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RiskZoneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RiskZoneCountAggregateInputType | true
    }

  export interface RiskZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskZone'], meta: { name: 'RiskZone' } }
    /**
     * Find zero or one RiskZone that matches the filter.
     * @param {RiskZoneFindUniqueArgs} args - Arguments to find a RiskZone
     * @example
     * // Get one RiskZone
     * const riskZone = await prisma.riskZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskZoneFindUniqueArgs>(args: SelectSubset<T, RiskZoneFindUniqueArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RiskZone that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RiskZoneFindUniqueOrThrowArgs} args - Arguments to find a RiskZone
     * @example
     * // Get one RiskZone
     * const riskZone = await prisma.riskZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RiskZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneFindFirstArgs} args - Arguments to find a RiskZone
     * @example
     * // Get one RiskZone
     * const riskZone = await prisma.riskZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskZoneFindFirstArgs>(args?: SelectSubset<T, RiskZoneFindFirstArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RiskZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneFindFirstOrThrowArgs} args - Arguments to find a RiskZone
     * @example
     * // Get one RiskZone
     * const riskZone = await prisma.riskZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RiskZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskZones
     * const riskZones = await prisma.riskZone.findMany()
     * 
     * // Get first 10 RiskZones
     * const riskZones = await prisma.riskZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskZoneWithIdOnly = await prisma.riskZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskZoneFindManyArgs>(args?: SelectSubset<T, RiskZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RiskZone.
     * @param {RiskZoneCreateArgs} args - Arguments to create a RiskZone.
     * @example
     * // Create one RiskZone
     * const RiskZone = await prisma.riskZone.create({
     *   data: {
     *     // ... data to create a RiskZone
     *   }
     * })
     * 
     */
    create<T extends RiskZoneCreateArgs>(args: SelectSubset<T, RiskZoneCreateArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RiskZones.
     * @param {RiskZoneCreateManyArgs} args - Arguments to create many RiskZones.
     * @example
     * // Create many RiskZones
     * const riskZone = await prisma.riskZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskZoneCreateManyArgs>(args?: SelectSubset<T, RiskZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskZones and returns the data saved in the database.
     * @param {RiskZoneCreateManyAndReturnArgs} args - Arguments to create many RiskZones.
     * @example
     * // Create many RiskZones
     * const riskZone = await prisma.riskZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskZones and only return the `id`
     * const riskZoneWithIdOnly = await prisma.riskZone.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RiskZone.
     * @param {RiskZoneDeleteArgs} args - Arguments to delete one RiskZone.
     * @example
     * // Delete one RiskZone
     * const RiskZone = await prisma.riskZone.delete({
     *   where: {
     *     // ... filter to delete one RiskZone
     *   }
     * })
     * 
     */
    delete<T extends RiskZoneDeleteArgs>(args: SelectSubset<T, RiskZoneDeleteArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RiskZone.
     * @param {RiskZoneUpdateArgs} args - Arguments to update one RiskZone.
     * @example
     * // Update one RiskZone
     * const riskZone = await prisma.riskZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskZoneUpdateArgs>(args: SelectSubset<T, RiskZoneUpdateArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RiskZones.
     * @param {RiskZoneDeleteManyArgs} args - Arguments to filter RiskZones to delete.
     * @example
     * // Delete a few RiskZones
     * const { count } = await prisma.riskZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskZoneDeleteManyArgs>(args?: SelectSubset<T, RiskZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskZones
     * const riskZone = await prisma.riskZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskZoneUpdateManyArgs>(args: SelectSubset<T, RiskZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RiskZone.
     * @param {RiskZoneUpsertArgs} args - Arguments to update or create a RiskZone.
     * @example
     * // Update or create a RiskZone
     * const riskZone = await prisma.riskZone.upsert({
     *   create: {
     *     // ... data to create a RiskZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskZone we want to update
     *   }
     * })
     */
    upsert<T extends RiskZoneUpsertArgs>(args: SelectSubset<T, RiskZoneUpsertArgs<ExtArgs>>): Prisma__RiskZoneClient<$Result.GetResult<Prisma.$RiskZonePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RiskZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneCountArgs} args - Arguments to filter RiskZones to count.
     * @example
     * // Count the number of RiskZones
     * const count = await prisma.riskZone.count({
     *   where: {
     *     // ... the filter for the RiskZones we want to count
     *   }
     * })
    **/
    count<T extends RiskZoneCountArgs>(
      args?: Subset<T, RiskZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiskZoneAggregateArgs>(args: Subset<T, RiskZoneAggregateArgs>): Prisma.PrismaPromise<GetRiskZoneAggregateType<T>>

    /**
     * Group by RiskZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskZoneGroupByArgs} args - Group by arguments.
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
      T extends RiskZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskZoneGroupByArgs['orderBy'] }
        : { orderBy?: RiskZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiskZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskZone model
   */
  readonly fields: RiskZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RiskZone model
   */ 
  interface RiskZoneFieldRefs {
    readonly id: FieldRef<"RiskZone", 'String'>
    readonly name: FieldRef<"RiskZone", 'String'>
    readonly description: FieldRef<"RiskZone", 'String'>
    readonly latitude: FieldRef<"RiskZone", 'Float'>
    readonly longitude: FieldRef<"RiskZone", 'Float'>
    readonly radius: FieldRef<"RiskZone", 'Int'>
    readonly riskLevel: FieldRef<"RiskZone", 'RiskLevel'>
    readonly isActive: FieldRef<"RiskZone", 'Boolean'>
    readonly createdBy: FieldRef<"RiskZone", 'String'>
    readonly createdAt: FieldRef<"RiskZone", 'DateTime'>
    readonly updatedAt: FieldRef<"RiskZone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskZone findUnique
   */
  export type RiskZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * Filter, which RiskZone to fetch.
     */
    where: RiskZoneWhereUniqueInput
  }

  /**
   * RiskZone findUniqueOrThrow
   */
  export type RiskZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * Filter, which RiskZone to fetch.
     */
    where: RiskZoneWhereUniqueInput
  }

  /**
   * RiskZone findFirst
   */
  export type RiskZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * Filter, which RiskZone to fetch.
     */
    where?: RiskZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskZones to fetch.
     */
    orderBy?: RiskZoneOrderByWithRelationInput | RiskZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskZones.
     */
    cursor?: RiskZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskZones.
     */
    distinct?: RiskZoneScalarFieldEnum | RiskZoneScalarFieldEnum[]
  }

  /**
   * RiskZone findFirstOrThrow
   */
  export type RiskZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * Filter, which RiskZone to fetch.
     */
    where?: RiskZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskZones to fetch.
     */
    orderBy?: RiskZoneOrderByWithRelationInput | RiskZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskZones.
     */
    cursor?: RiskZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskZones.
     */
    distinct?: RiskZoneScalarFieldEnum | RiskZoneScalarFieldEnum[]
  }

  /**
   * RiskZone findMany
   */
  export type RiskZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * Filter, which RiskZones to fetch.
     */
    where?: RiskZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskZones to fetch.
     */
    orderBy?: RiskZoneOrderByWithRelationInput | RiskZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskZones.
     */
    cursor?: RiskZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskZones.
     */
    skip?: number
    distinct?: RiskZoneScalarFieldEnum | RiskZoneScalarFieldEnum[]
  }

  /**
   * RiskZone create
   */
  export type RiskZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * The data needed to create a RiskZone.
     */
    data: XOR<RiskZoneCreateInput, RiskZoneUncheckedCreateInput>
  }

  /**
   * RiskZone createMany
   */
  export type RiskZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskZones.
     */
    data: RiskZoneCreateManyInput | RiskZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskZone createManyAndReturn
   */
  export type RiskZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RiskZones.
     */
    data: RiskZoneCreateManyInput | RiskZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskZone update
   */
  export type RiskZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * The data needed to update a RiskZone.
     */
    data: XOR<RiskZoneUpdateInput, RiskZoneUncheckedUpdateInput>
    /**
     * Choose, which RiskZone to update.
     */
    where: RiskZoneWhereUniqueInput
  }

  /**
   * RiskZone updateMany
   */
  export type RiskZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskZones.
     */
    data: XOR<RiskZoneUpdateManyMutationInput, RiskZoneUncheckedUpdateManyInput>
    /**
     * Filter which RiskZones to update
     */
    where?: RiskZoneWhereInput
  }

  /**
   * RiskZone upsert
   */
  export type RiskZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * The filter to search for the RiskZone to update in case it exists.
     */
    where: RiskZoneWhereUniqueInput
    /**
     * In case the RiskZone found by the `where` argument doesn't exist, create a new RiskZone with this data.
     */
    create: XOR<RiskZoneCreateInput, RiskZoneUncheckedCreateInput>
    /**
     * In case the RiskZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskZoneUpdateInput, RiskZoneUncheckedUpdateInput>
  }

  /**
   * RiskZone delete
   */
  export type RiskZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
    /**
     * Filter which RiskZone to delete.
     */
    where: RiskZoneWhereUniqueInput
  }

  /**
   * RiskZone deleteMany
   */
  export type RiskZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskZones to delete
     */
    where?: RiskZoneWhereInput
  }

  /**
   * RiskZone without action
   */
  export type RiskZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskZone
     */
    select?: RiskZoneSelect<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type IncidentSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    incidentNumber: string | null
    userId: string | null
    incidentType: $Enums.IncidentType | null
    title: string | null
    description: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    priority: $Enums.Priority | null
    status: string | null
    assignedTo: string | null
    reportedBy: string | null
    reportedAt: Date | null
    resolvedAt: Date | null
    efirGenerated: boolean | null
    efirNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    incidentNumber: string | null
    userId: string | null
    incidentType: $Enums.IncidentType | null
    title: string | null
    description: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    priority: $Enums.Priority | null
    status: string | null
    assignedTo: string | null
    reportedBy: string | null
    reportedAt: Date | null
    resolvedAt: Date | null
    efirGenerated: boolean | null
    efirNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    incidentNumber: number
    userId: number
    incidentType: number
    title: number
    description: number
    location: number
    latitude: number
    longitude: number
    priority: number
    status: number
    assignedTo: number
    reportedBy: number
    reportedAt: number
    resolvedAt: number
    efirGenerated: number
    efirNumber: number
    attachments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type IncidentSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    incidentNumber?: true
    userId?: true
    incidentType?: true
    title?: true
    description?: true
    location?: true
    latitude?: true
    longitude?: true
    priority?: true
    status?: true
    assignedTo?: true
    reportedBy?: true
    reportedAt?: true
    resolvedAt?: true
    efirGenerated?: true
    efirNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    incidentNumber?: true
    userId?: true
    incidentType?: true
    title?: true
    description?: true
    location?: true
    latitude?: true
    longitude?: true
    priority?: true
    status?: true
    assignedTo?: true
    reportedBy?: true
    reportedAt?: true
    resolvedAt?: true
    efirGenerated?: true
    efirNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    incidentNumber?: true
    userId?: true
    incidentType?: true
    title?: true
    description?: true
    location?: true
    latitude?: true
    longitude?: true
    priority?: true
    status?: true
    assignedTo?: true
    reportedBy?: true
    reportedAt?: true
    resolvedAt?: true
    efirGenerated?: true
    efirNumber?: true
    attachments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    incidentNumber: string
    userId: string | null
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude: number | null
    longitude: number | null
    priority: $Enums.Priority
    status: string
    assignedTo: string | null
    reportedBy: string | null
    reportedAt: Date
    resolvedAt: Date | null
    efirGenerated: boolean
    efirNumber: string | null
    attachments: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentNumber?: boolean
    userId?: boolean
    incidentType?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    efirGenerated?: boolean
    efirNumber?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Incident$userArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentNumber?: boolean
    userId?: boolean
    incidentType?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    efirGenerated?: boolean
    efirNumber?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Incident$userArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    incidentNumber?: boolean
    userId?: boolean
    incidentType?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    efirGenerated?: boolean
    efirNumber?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Incident$userArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Incident$userArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentNumber: string
      userId: string | null
      incidentType: $Enums.IncidentType
      title: string
      description: string
      location: string
      latitude: number | null
      longitude: number | null
      priority: $Enums.Priority
      status: string
      assignedTo: string | null
      reportedBy: string | null
      reportedAt: Date
      resolvedAt: Date | null
      efirGenerated: boolean
      efirNumber: string | null
      attachments: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
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
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Incident$userArgs<ExtArgs> = {}>(args?: Subset<T, Incident$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Incident model
   */ 
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly incidentNumber: FieldRef<"Incident", 'String'>
    readonly userId: FieldRef<"Incident", 'String'>
    readonly incidentType: FieldRef<"Incident", 'IncidentType'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly location: FieldRef<"Incident", 'String'>
    readonly latitude: FieldRef<"Incident", 'Float'>
    readonly longitude: FieldRef<"Incident", 'Float'>
    readonly priority: FieldRef<"Incident", 'Priority'>
    readonly status: FieldRef<"Incident", 'String'>
    readonly assignedTo: FieldRef<"Incident", 'String'>
    readonly reportedBy: FieldRef<"Incident", 'String'>
    readonly reportedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly efirGenerated: FieldRef<"Incident", 'Boolean'>
    readonly efirNumber: FieldRef<"Incident", 'String'>
    readonly attachments: FieldRef<"Incident", 'Json'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
  }

  /**
   * Incident.user
   */
  export type Incident$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyAlert
   */

  export type AggregateEmergencyAlert = {
    _count: EmergencyAlertCountAggregateOutputType | null
    _avg: EmergencyAlertAvgAggregateOutputType | null
    _sum: EmergencyAlertSumAggregateOutputType | null
    _min: EmergencyAlertMinAggregateOutputType | null
    _max: EmergencyAlertMaxAggregateOutputType | null
  }

  export type EmergencyAlertAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EmergencyAlertSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EmergencyAlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    alertType: string | null
    message: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    status: $Enums.AlertStatus | null
    priority: $Enums.Priority | null
    respondedBy: string | null
    respondedAt: Date | null
    resolvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyAlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    alertType: string | null
    message: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    status: $Enums.AlertStatus | null
    priority: $Enums.Priority | null
    respondedBy: string | null
    respondedAt: Date | null
    resolvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyAlertCountAggregateOutputType = {
    id: number
    userId: number
    alertType: number
    message: number
    latitude: number
    longitude: number
    address: number
    status: number
    priority: number
    respondedBy: number
    respondedAt: number
    resolvedAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmergencyAlertAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EmergencyAlertSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EmergencyAlertMinAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    message?: true
    latitude?: true
    longitude?: true
    address?: true
    status?: true
    priority?: true
    respondedBy?: true
    respondedAt?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyAlertMaxAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    message?: true
    latitude?: true
    longitude?: true
    address?: true
    status?: true
    priority?: true
    respondedBy?: true
    respondedAt?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyAlertCountAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    message?: true
    latitude?: true
    longitude?: true
    address?: true
    status?: true
    priority?: true
    respondedBy?: true
    respondedAt?: true
    resolvedAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmergencyAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyAlert to aggregate.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyAlerts
    **/
    _count?: true | EmergencyAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyAlertMaxAggregateInputType
  }

  export type GetEmergencyAlertAggregateType<T extends EmergencyAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyAlert[P]>
      : GetScalarType<T[P], AggregateEmergencyAlert[P]>
  }




  export type EmergencyAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyAlertWhereInput
    orderBy?: EmergencyAlertOrderByWithAggregationInput | EmergencyAlertOrderByWithAggregationInput[]
    by: EmergencyAlertScalarFieldEnum[] | EmergencyAlertScalarFieldEnum
    having?: EmergencyAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyAlertCountAggregateInputType | true
    _avg?: EmergencyAlertAvgAggregateInputType
    _sum?: EmergencyAlertSumAggregateInputType
    _min?: EmergencyAlertMinAggregateInputType
    _max?: EmergencyAlertMaxAggregateInputType
  }

  export type EmergencyAlertGroupByOutputType = {
    id: string
    userId: string
    alertType: string
    message: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    status: $Enums.AlertStatus
    priority: $Enums.Priority
    respondedBy: string | null
    respondedAt: Date | null
    resolvedAt: Date | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: EmergencyAlertCountAggregateOutputType | null
    _avg: EmergencyAlertAvgAggregateOutputType | null
    _sum: EmergencyAlertSumAggregateOutputType | null
    _min: EmergencyAlertMinAggregateOutputType | null
    _max: EmergencyAlertMaxAggregateOutputType | null
  }

  type GetEmergencyAlertGroupByPayload<T extends EmergencyAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyAlertGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyAlertGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    alertType?: boolean
    message?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    status?: boolean
    priority?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyAlert"]>

  export type EmergencyAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    alertType?: boolean
    message?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    status?: boolean
    priority?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyAlert"]>

  export type EmergencyAlertSelectScalar = {
    id?: boolean
    userId?: boolean
    alertType?: boolean
    message?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    status?: boolean
    priority?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmergencyAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmergencyAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmergencyAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyAlert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      alertType: string
      message: string | null
      latitude: number | null
      longitude: number | null
      address: string | null
      status: $Enums.AlertStatus
      priority: $Enums.Priority
      respondedBy: string | null
      respondedAt: Date | null
      resolvedAt: Date | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emergencyAlert"]>
    composites: {}
  }

  type EmergencyAlertGetPayload<S extends boolean | null | undefined | EmergencyAlertDefaultArgs> = $Result.GetResult<Prisma.$EmergencyAlertPayload, S>

  type EmergencyAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmergencyAlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmergencyAlertCountAggregateInputType | true
    }

  export interface EmergencyAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyAlert'], meta: { name: 'EmergencyAlert' } }
    /**
     * Find zero or one EmergencyAlert that matches the filter.
     * @param {EmergencyAlertFindUniqueArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyAlertFindUniqueArgs>(args: SelectSubset<T, EmergencyAlertFindUniqueArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmergencyAlert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmergencyAlertFindUniqueOrThrowArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmergencyAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertFindFirstArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyAlertFindFirstArgs>(args?: SelectSubset<T, EmergencyAlertFindFirstArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmergencyAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertFindFirstOrThrowArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmergencyAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyAlerts
     * const emergencyAlerts = await prisma.emergencyAlert.findMany()
     * 
     * // Get first 10 EmergencyAlerts
     * const emergencyAlerts = await prisma.emergencyAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyAlertWithIdOnly = await prisma.emergencyAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyAlertFindManyArgs>(args?: SelectSubset<T, EmergencyAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmergencyAlert.
     * @param {EmergencyAlertCreateArgs} args - Arguments to create a EmergencyAlert.
     * @example
     * // Create one EmergencyAlert
     * const EmergencyAlert = await prisma.emergencyAlert.create({
     *   data: {
     *     // ... data to create a EmergencyAlert
     *   }
     * })
     * 
     */
    create<T extends EmergencyAlertCreateArgs>(args: SelectSubset<T, EmergencyAlertCreateArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmergencyAlerts.
     * @param {EmergencyAlertCreateManyArgs} args - Arguments to create many EmergencyAlerts.
     * @example
     * // Create many EmergencyAlerts
     * const emergencyAlert = await prisma.emergencyAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyAlertCreateManyArgs>(args?: SelectSubset<T, EmergencyAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyAlerts and returns the data saved in the database.
     * @param {EmergencyAlertCreateManyAndReturnArgs} args - Arguments to create many EmergencyAlerts.
     * @example
     * // Create many EmergencyAlerts
     * const emergencyAlert = await prisma.emergencyAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyAlerts and only return the `id`
     * const emergencyAlertWithIdOnly = await prisma.emergencyAlert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmergencyAlert.
     * @param {EmergencyAlertDeleteArgs} args - Arguments to delete one EmergencyAlert.
     * @example
     * // Delete one EmergencyAlert
     * const EmergencyAlert = await prisma.emergencyAlert.delete({
     *   where: {
     *     // ... filter to delete one EmergencyAlert
     *   }
     * })
     * 
     */
    delete<T extends EmergencyAlertDeleteArgs>(args: SelectSubset<T, EmergencyAlertDeleteArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmergencyAlert.
     * @param {EmergencyAlertUpdateArgs} args - Arguments to update one EmergencyAlert.
     * @example
     * // Update one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyAlertUpdateArgs>(args: SelectSubset<T, EmergencyAlertUpdateArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmergencyAlerts.
     * @param {EmergencyAlertDeleteManyArgs} args - Arguments to filter EmergencyAlerts to delete.
     * @example
     * // Delete a few EmergencyAlerts
     * const { count } = await prisma.emergencyAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyAlertDeleteManyArgs>(args?: SelectSubset<T, EmergencyAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyAlerts
     * const emergencyAlert = await prisma.emergencyAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyAlertUpdateManyArgs>(args: SelectSubset<T, EmergencyAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmergencyAlert.
     * @param {EmergencyAlertUpsertArgs} args - Arguments to update or create a EmergencyAlert.
     * @example
     * // Update or create a EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.upsert({
     *   create: {
     *     // ... data to create a EmergencyAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyAlert we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyAlertUpsertArgs>(args: SelectSubset<T, EmergencyAlertUpsertArgs<ExtArgs>>): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmergencyAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertCountArgs} args - Arguments to filter EmergencyAlerts to count.
     * @example
     * // Count the number of EmergencyAlerts
     * const count = await prisma.emergencyAlert.count({
     *   where: {
     *     // ... the filter for the EmergencyAlerts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyAlertCountArgs>(
      args?: Subset<T, EmergencyAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyAlertAggregateArgs>(args: Subset<T, EmergencyAlertAggregateArgs>): Prisma.PrismaPromise<GetEmergencyAlertAggregateType<T>>

    /**
     * Group by EmergencyAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertGroupByArgs} args - Group by arguments.
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
      T extends EmergencyAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyAlertGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyAlert model
   */
  readonly fields: EmergencyAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the EmergencyAlert model
   */ 
  interface EmergencyAlertFieldRefs {
    readonly id: FieldRef<"EmergencyAlert", 'String'>
    readonly userId: FieldRef<"EmergencyAlert", 'String'>
    readonly alertType: FieldRef<"EmergencyAlert", 'String'>
    readonly message: FieldRef<"EmergencyAlert", 'String'>
    readonly latitude: FieldRef<"EmergencyAlert", 'Float'>
    readonly longitude: FieldRef<"EmergencyAlert", 'Float'>
    readonly address: FieldRef<"EmergencyAlert", 'String'>
    readonly status: FieldRef<"EmergencyAlert", 'AlertStatus'>
    readonly priority: FieldRef<"EmergencyAlert", 'Priority'>
    readonly respondedBy: FieldRef<"EmergencyAlert", 'String'>
    readonly respondedAt: FieldRef<"EmergencyAlert", 'DateTime'>
    readonly resolvedAt: FieldRef<"EmergencyAlert", 'DateTime'>
    readonly metadata: FieldRef<"EmergencyAlert", 'Json'>
    readonly createdAt: FieldRef<"EmergencyAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"EmergencyAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyAlert findUnique
   */
  export type EmergencyAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where: EmergencyAlertWhereUniqueInput
  }

  /**
   * EmergencyAlert findUniqueOrThrow
   */
  export type EmergencyAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where: EmergencyAlertWhereUniqueInput
  }

  /**
   * EmergencyAlert findFirst
   */
  export type EmergencyAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyAlerts.
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyAlerts.
     */
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }

  /**
   * EmergencyAlert findFirstOrThrow
   */
  export type EmergencyAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyAlerts.
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyAlerts.
     */
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }

  /**
   * EmergencyAlert findMany
   */
  export type EmergencyAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlerts to fetch.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyAlerts.
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }

  /**
   * EmergencyAlert create
   */
  export type EmergencyAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyAlert.
     */
    data: XOR<EmergencyAlertCreateInput, EmergencyAlertUncheckedCreateInput>
  }

  /**
   * EmergencyAlert createMany
   */
  export type EmergencyAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyAlerts.
     */
    data: EmergencyAlertCreateManyInput | EmergencyAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyAlert createManyAndReturn
   */
  export type EmergencyAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmergencyAlerts.
     */
    data: EmergencyAlertCreateManyInput | EmergencyAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyAlert update
   */
  export type EmergencyAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyAlert.
     */
    data: XOR<EmergencyAlertUpdateInput, EmergencyAlertUncheckedUpdateInput>
    /**
     * Choose, which EmergencyAlert to update.
     */
    where: EmergencyAlertWhereUniqueInput
  }

  /**
   * EmergencyAlert updateMany
   */
  export type EmergencyAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyAlerts.
     */
    data: XOR<EmergencyAlertUpdateManyMutationInput, EmergencyAlertUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyAlerts to update
     */
    where?: EmergencyAlertWhereInput
  }

  /**
   * EmergencyAlert upsert
   */
  export type EmergencyAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyAlert to update in case it exists.
     */
    where: EmergencyAlertWhereUniqueInput
    /**
     * In case the EmergencyAlert found by the `where` argument doesn't exist, create a new EmergencyAlert with this data.
     */
    create: XOR<EmergencyAlertCreateInput, EmergencyAlertUncheckedCreateInput>
    /**
     * In case the EmergencyAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyAlertUpdateInput, EmergencyAlertUncheckedUpdateInput>
  }

  /**
   * EmergencyAlert delete
   */
  export type EmergencyAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter which EmergencyAlert to delete.
     */
    where: EmergencyAlertWhereUniqueInput
  }

  /**
   * EmergencyAlert deleteMany
   */
  export type EmergencyAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyAlerts to delete
     */
    where?: EmergencyAlertWhereInput
  }

  /**
   * EmergencyAlert without action
   */
  export type EmergencyAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyContact
   */

  export type AggregateEmergencyContact = {
    _count: EmergencyContactCountAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  export type EmergencyContactMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    phone: string | null
    email: string | null
    relation: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyContactMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    phone: string | null
    email: string | null
    relation: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyContactCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    phone: number
    email: number
    relation: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmergencyContactMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    email?: true
    relation?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyContactMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    email?: true
    relation?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyContactCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    email?: true
    relation?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmergencyContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContact to aggregate.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyContacts
    **/
    _count?: true | EmergencyContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type GetEmergencyContactAggregateType<T extends EmergencyContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyContact[P]>
      : GetScalarType<T[P], AggregateEmergencyContact[P]>
  }




  export type EmergencyContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithAggregationInput | EmergencyContactOrderByWithAggregationInput[]
    by: EmergencyContactScalarFieldEnum[] | EmergencyContactScalarFieldEnum
    having?: EmergencyContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyContactCountAggregateInputType | true
    _min?: EmergencyContactMinAggregateInputType
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type EmergencyContactGroupByOutputType = {
    id: string
    userId: string
    name: string
    phone: string
    email: string | null
    relation: string
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmergencyContactCountAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  type GetEmergencyContactGroupByPayload<T extends EmergencyContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    relation?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    relation?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    relation?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmergencyContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmergencyContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmergencyContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyContact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      phone: string
      email: string | null
      relation: string
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emergencyContact"]>
    composites: {}
  }

  type EmergencyContactGetPayload<S extends boolean | null | undefined | EmergencyContactDefaultArgs> = $Result.GetResult<Prisma.$EmergencyContactPayload, S>

  type EmergencyContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmergencyContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmergencyContactCountAggregateInputType | true
    }

  export interface EmergencyContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyContact'], meta: { name: 'EmergencyContact' } }
    /**
     * Find zero or one EmergencyContact that matches the filter.
     * @param {EmergencyContactFindUniqueArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyContactFindUniqueArgs>(args: SelectSubset<T, EmergencyContactFindUniqueArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmergencyContact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmergencyContactFindUniqueOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmergencyContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyContactFindFirstArgs>(args?: SelectSubset<T, EmergencyContactFindFirstArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmergencyContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmergencyContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany()
     * 
     * // Get first 10 EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyContactFindManyArgs>(args?: SelectSubset<T, EmergencyContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmergencyContact.
     * @param {EmergencyContactCreateArgs} args - Arguments to create a EmergencyContact.
     * @example
     * // Create one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.create({
     *   data: {
     *     // ... data to create a EmergencyContact
     *   }
     * })
     * 
     */
    create<T extends EmergencyContactCreateArgs>(args: SelectSubset<T, EmergencyContactCreateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmergencyContacts.
     * @param {EmergencyContactCreateManyArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyContactCreateManyArgs>(args?: SelectSubset<T, EmergencyContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyContacts and returns the data saved in the database.
     * @param {EmergencyContactCreateManyAndReturnArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyContactCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmergencyContact.
     * @param {EmergencyContactDeleteArgs} args - Arguments to delete one EmergencyContact.
     * @example
     * // Delete one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.delete({
     *   where: {
     *     // ... filter to delete one EmergencyContact
     *   }
     * })
     * 
     */
    delete<T extends EmergencyContactDeleteArgs>(args: SelectSubset<T, EmergencyContactDeleteArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmergencyContact.
     * @param {EmergencyContactUpdateArgs} args - Arguments to update one EmergencyContact.
     * @example
     * // Update one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyContactUpdateArgs>(args: SelectSubset<T, EmergencyContactUpdateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmergencyContacts.
     * @param {EmergencyContactDeleteManyArgs} args - Arguments to filter EmergencyContacts to delete.
     * @example
     * // Delete a few EmergencyContacts
     * const { count } = await prisma.emergencyContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyContactDeleteManyArgs>(args?: SelectSubset<T, EmergencyContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyContactUpdateManyArgs>(args: SelectSubset<T, EmergencyContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmergencyContact.
     * @param {EmergencyContactUpsertArgs} args - Arguments to update or create a EmergencyContact.
     * @example
     * // Update or create a EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.upsert({
     *   create: {
     *     // ... data to create a EmergencyContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyContact we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyContactUpsertArgs>(args: SelectSubset<T, EmergencyContactUpsertArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactCountArgs} args - Arguments to filter EmergencyContacts to count.
     * @example
     * // Count the number of EmergencyContacts
     * const count = await prisma.emergencyContact.count({
     *   where: {
     *     // ... the filter for the EmergencyContacts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyContactCountArgs>(
      args?: Subset<T, EmergencyContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyContactAggregateArgs>(args: Subset<T, EmergencyContactAggregateArgs>): Prisma.PrismaPromise<GetEmergencyContactAggregateType<T>>

    /**
     * Group by EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactGroupByArgs} args - Group by arguments.
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
      T extends EmergencyContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyContactGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyContact model
   */
  readonly fields: EmergencyContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the EmergencyContact model
   */ 
  interface EmergencyContactFieldRefs {
    readonly id: FieldRef<"EmergencyContact", 'String'>
    readonly userId: FieldRef<"EmergencyContact", 'String'>
    readonly name: FieldRef<"EmergencyContact", 'String'>
    readonly phone: FieldRef<"EmergencyContact", 'String'>
    readonly email: FieldRef<"EmergencyContact", 'String'>
    readonly relation: FieldRef<"EmergencyContact", 'String'>
    readonly isPrimary: FieldRef<"EmergencyContact", 'Boolean'>
    readonly createdAt: FieldRef<"EmergencyContact", 'DateTime'>
    readonly updatedAt: FieldRef<"EmergencyContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyContact findUnique
   */
  export type EmergencyContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findUniqueOrThrow
   */
  export type EmergencyContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findFirst
   */
  export type EmergencyContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findFirstOrThrow
   */
  export type EmergencyContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findMany
   */
  export type EmergencyContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContacts to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact create
   */
  export type EmergencyContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyContact.
     */
    data: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
  }

  /**
   * EmergencyContact createMany
   */
  export type EmergencyContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyContact createManyAndReturn
   */
  export type EmergencyContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyContact update
   */
  export type EmergencyContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyContact.
     */
    data: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
    /**
     * Choose, which EmergencyContact to update.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact updateMany
   */
  export type EmergencyContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
  }

  /**
   * EmergencyContact upsert
   */
  export type EmergencyContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyContact to update in case it exists.
     */
    where: EmergencyContactWhereUniqueInput
    /**
     * In case the EmergencyContact found by the `where` argument doesn't exist, create a new EmergencyContact with this data.
     */
    create: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
    /**
     * In case the EmergencyContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
  }

  /**
   * EmergencyContact delete
   */
  export type EmergencyContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter which EmergencyContact to delete.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact deleteMany
   */
  export type EmergencyContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContacts to delete
     */
    where?: EmergencyContactWhereInput
  }

  /**
   * EmergencyContact without action
   */
  export type EmergencyContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
  }


  /**
   * Model TripPlan
   */

  export type AggregateTripPlan = {
    _count: TripPlanCountAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  export type TripPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    startDate: number
    endDate: number
    destinations: number
    status: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripPlanMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    destinations?: true
    status?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlan to aggregate.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlans
    **/
    _count?: true | TripPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanMaxAggregateInputType
  }

  export type GetTripPlanAggregateType<T extends TripPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlan[P]>
      : GetScalarType<T[P], AggregateTripPlan[P]>
  }




  export type TripPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithAggregationInput | TripPlanOrderByWithAggregationInput[]
    by: TripPlanScalarFieldEnum[] | TripPlanScalarFieldEnum
    having?: TripPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanCountAggregateInputType | true
    _min?: TripPlanMinAggregateInputType
    _max?: TripPlanMaxAggregateInputType
  }

  export type TripPlanGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    startDate: Date
    endDate: Date
    destinations: JsonValue
    status: string
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: TripPlanCountAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  type GetTripPlanGroupByPayload<T extends TripPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    destinations?: boolean
    status?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    destinations?: boolean
    status?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    destinations?: boolean
    status?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      startDate: Date
      endDate: Date
      destinations: Prisma.JsonValue
      status: string
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripPlan"]>
    composites: {}
  }

  type TripPlanGetPayload<S extends boolean | null | undefined | TripPlanDefaultArgs> = $Result.GetResult<Prisma.$TripPlanPayload, S>

  type TripPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripPlanCountAggregateInputType | true
    }

  export interface TripPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlan'], meta: { name: 'TripPlan' } }
    /**
     * Find zero or one TripPlan that matches the filter.
     * @param {TripPlanFindUniqueArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanFindUniqueArgs>(args: SelectSubset<T, TripPlanFindUniqueArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TripPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TripPlanFindUniqueOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TripPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanFindFirstArgs>(args?: SelectSubset<T, TripPlanFindFirstArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TripPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TripPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlans
     * const tripPlans = await prisma.tripPlan.findMany()
     * 
     * // Get first 10 TripPlans
     * const tripPlans = await prisma.tripPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanFindManyArgs>(args?: SelectSubset<T, TripPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TripPlan.
     * @param {TripPlanCreateArgs} args - Arguments to create a TripPlan.
     * @example
     * // Create one TripPlan
     * const TripPlan = await prisma.tripPlan.create({
     *   data: {
     *     // ... data to create a TripPlan
     *   }
     * })
     * 
     */
    create<T extends TripPlanCreateArgs>(args: SelectSubset<T, TripPlanCreateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TripPlans.
     * @param {TripPlanCreateManyArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanCreateManyArgs>(args?: SelectSubset<T, TripPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlans and returns the data saved in the database.
     * @param {TripPlanCreateManyAndReturnArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TripPlan.
     * @param {TripPlanDeleteArgs} args - Arguments to delete one TripPlan.
     * @example
     * // Delete one TripPlan
     * const TripPlan = await prisma.tripPlan.delete({
     *   where: {
     *     // ... filter to delete one TripPlan
     *   }
     * })
     * 
     */
    delete<T extends TripPlanDeleteArgs>(args: SelectSubset<T, TripPlanDeleteArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TripPlan.
     * @param {TripPlanUpdateArgs} args - Arguments to update one TripPlan.
     * @example
     * // Update one TripPlan
     * const tripPlan = await prisma.tripPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanUpdateArgs>(args: SelectSubset<T, TripPlanUpdateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TripPlans.
     * @param {TripPlanDeleteManyArgs} args - Arguments to filter TripPlans to delete.
     * @example
     * // Delete a few TripPlans
     * const { count } = await prisma.tripPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanDeleteManyArgs>(args?: SelectSubset<T, TripPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanUpdateManyArgs>(args: SelectSubset<T, TripPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TripPlan.
     * @param {TripPlanUpsertArgs} args - Arguments to update or create a TripPlan.
     * @example
     * // Update or create a TripPlan
     * const tripPlan = await prisma.tripPlan.upsert({
     *   create: {
     *     // ... data to create a TripPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlan we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanUpsertArgs>(args: SelectSubset<T, TripPlanUpsertArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanCountArgs} args - Arguments to filter TripPlans to count.
     * @example
     * // Count the number of TripPlans
     * const count = await prisma.tripPlan.count({
     *   where: {
     *     // ... the filter for the TripPlans we want to count
     *   }
     * })
    **/
    count<T extends TripPlanCountArgs>(
      args?: Subset<T, TripPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPlanAggregateArgs>(args: Subset<T, TripPlanAggregateArgs>): Prisma.PrismaPromise<GetTripPlanAggregateType<T>>

    /**
     * Group by TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanGroupByArgs} args - Group by arguments.
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
      T extends TripPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlan model
   */
  readonly fields: TripPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TripPlan model
   */ 
  interface TripPlanFieldRefs {
    readonly id: FieldRef<"TripPlan", 'String'>
    readonly userId: FieldRef<"TripPlan", 'String'>
    readonly title: FieldRef<"TripPlan", 'String'>
    readonly description: FieldRef<"TripPlan", 'String'>
    readonly startDate: FieldRef<"TripPlan", 'DateTime'>
    readonly endDate: FieldRef<"TripPlan", 'DateTime'>
    readonly destinations: FieldRef<"TripPlan", 'Json'>
    readonly status: FieldRef<"TripPlan", 'String'>
    readonly isPublic: FieldRef<"TripPlan", 'Boolean'>
    readonly createdAt: FieldRef<"TripPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripPlan findUnique
   */
  export type TripPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findUniqueOrThrow
   */
  export type TripPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findFirst
   */
  export type TripPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findFirstOrThrow
   */
  export type TripPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findMany
   */
  export type TripPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlans to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan create
   */
  export type TripPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlan.
     */
    data: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
  }

  /**
   * TripPlan createMany
   */
  export type TripPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPlan createManyAndReturn
   */
  export type TripPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan update
   */
  export type TripPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlan.
     */
    data: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
    /**
     * Choose, which TripPlan to update.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan updateMany
   */
  export type TripPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
  }

  /**
   * TripPlan upsert
   */
  export type TripPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlan to update in case it exists.
     */
    where: TripPlanWhereUniqueInput
    /**
     * In case the TripPlan found by the `where` argument doesn't exist, create a new TripPlan with this data.
     */
    create: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
    /**
     * In case the TripPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
  }

  /**
   * TripPlan delete
   */
  export type TripPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter which TripPlan to delete.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan deleteMany
   */
  export type TripPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlans to delete
     */
    where?: TripPlanWhereInput
  }

  /**
   * TripPlan without action
   */
  export type TripPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
  }


  /**
   * Model SafetyNotification
   */

  export type AggregateSafetyNotification = {
    _count: SafetyNotificationCountAggregateOutputType | null
    _min: SafetyNotificationMinAggregateOutputType | null
    _max: SafetyNotificationMaxAggregateOutputType | null
  }

  export type SafetyNotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    notificationType: string | null
    priority: $Enums.Priority | null
    targetLocation: string | null
    isActive: boolean | null
    expiresAt: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SafetyNotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    notificationType: string | null
    priority: $Enums.Priority | null
    targetLocation: string | null
    isActive: boolean | null
    expiresAt: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SafetyNotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    notificationType: number
    priority: number
    targetUserTypes: number
    targetLocation: number
    isActive: number
    expiresAt: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SafetyNotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    notificationType?: true
    priority?: true
    targetLocation?: true
    isActive?: true
    expiresAt?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SafetyNotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    notificationType?: true
    priority?: true
    targetLocation?: true
    isActive?: true
    expiresAt?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SafetyNotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    notificationType?: true
    priority?: true
    targetUserTypes?: true
    targetLocation?: true
    isActive?: true
    expiresAt?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SafetyNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SafetyNotification to aggregate.
     */
    where?: SafetyNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyNotifications to fetch.
     */
    orderBy?: SafetyNotificationOrderByWithRelationInput | SafetyNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SafetyNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SafetyNotifications
    **/
    _count?: true | SafetyNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SafetyNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SafetyNotificationMaxAggregateInputType
  }

  export type GetSafetyNotificationAggregateType<T extends SafetyNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateSafetyNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSafetyNotification[P]>
      : GetScalarType<T[P], AggregateSafetyNotification[P]>
  }




  export type SafetyNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafetyNotificationWhereInput
    orderBy?: SafetyNotificationOrderByWithAggregationInput | SafetyNotificationOrderByWithAggregationInput[]
    by: SafetyNotificationScalarFieldEnum[] | SafetyNotificationScalarFieldEnum
    having?: SafetyNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SafetyNotificationCountAggregateInputType | true
    _min?: SafetyNotificationMinAggregateInputType
    _max?: SafetyNotificationMaxAggregateInputType
  }

  export type SafetyNotificationGroupByOutputType = {
    id: string
    title: string
    message: string
    notificationType: string
    priority: $Enums.Priority
    targetUserTypes: string[]
    targetLocation: string | null
    isActive: boolean
    expiresAt: Date | null
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: SafetyNotificationCountAggregateOutputType | null
    _min: SafetyNotificationMinAggregateOutputType | null
    _max: SafetyNotificationMaxAggregateOutputType | null
  }

  type GetSafetyNotificationGroupByPayload<T extends SafetyNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SafetyNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SafetyNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SafetyNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], SafetyNotificationGroupByOutputType[P]>
        }
      >
    >


  export type SafetyNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    notificationType?: boolean
    priority?: boolean
    targetUserTypes?: boolean
    targetLocation?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userNotifications?: boolean | SafetyNotification$userNotificationsArgs<ExtArgs>
    _count?: boolean | SafetyNotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["safetyNotification"]>

  export type SafetyNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    notificationType?: boolean
    priority?: boolean
    targetUserTypes?: boolean
    targetLocation?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["safetyNotification"]>

  export type SafetyNotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    notificationType?: boolean
    priority?: boolean
    targetUserTypes?: boolean
    targetLocation?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SafetyNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userNotifications?: boolean | SafetyNotification$userNotificationsArgs<ExtArgs>
    _count?: boolean | SafetyNotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SafetyNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SafetyNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SafetyNotification"
    objects: {
      userNotifications: Prisma.$UserNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      notificationType: string
      priority: $Enums.Priority
      targetUserTypes: string[]
      targetLocation: string | null
      isActive: boolean
      expiresAt: Date | null
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["safetyNotification"]>
    composites: {}
  }

  type SafetyNotificationGetPayload<S extends boolean | null | undefined | SafetyNotificationDefaultArgs> = $Result.GetResult<Prisma.$SafetyNotificationPayload, S>

  type SafetyNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SafetyNotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SafetyNotificationCountAggregateInputType | true
    }

  export interface SafetyNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SafetyNotification'], meta: { name: 'SafetyNotification' } }
    /**
     * Find zero or one SafetyNotification that matches the filter.
     * @param {SafetyNotificationFindUniqueArgs} args - Arguments to find a SafetyNotification
     * @example
     * // Get one SafetyNotification
     * const safetyNotification = await prisma.safetyNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SafetyNotificationFindUniqueArgs>(args: SelectSubset<T, SafetyNotificationFindUniqueArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SafetyNotification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SafetyNotificationFindUniqueOrThrowArgs} args - Arguments to find a SafetyNotification
     * @example
     * // Get one SafetyNotification
     * const safetyNotification = await prisma.safetyNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SafetyNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, SafetyNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SafetyNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationFindFirstArgs} args - Arguments to find a SafetyNotification
     * @example
     * // Get one SafetyNotification
     * const safetyNotification = await prisma.safetyNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SafetyNotificationFindFirstArgs>(args?: SelectSubset<T, SafetyNotificationFindFirstArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SafetyNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationFindFirstOrThrowArgs} args - Arguments to find a SafetyNotification
     * @example
     * // Get one SafetyNotification
     * const safetyNotification = await prisma.safetyNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SafetyNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, SafetyNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SafetyNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SafetyNotifications
     * const safetyNotifications = await prisma.safetyNotification.findMany()
     * 
     * // Get first 10 SafetyNotifications
     * const safetyNotifications = await prisma.safetyNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const safetyNotificationWithIdOnly = await prisma.safetyNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SafetyNotificationFindManyArgs>(args?: SelectSubset<T, SafetyNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SafetyNotification.
     * @param {SafetyNotificationCreateArgs} args - Arguments to create a SafetyNotification.
     * @example
     * // Create one SafetyNotification
     * const SafetyNotification = await prisma.safetyNotification.create({
     *   data: {
     *     // ... data to create a SafetyNotification
     *   }
     * })
     * 
     */
    create<T extends SafetyNotificationCreateArgs>(args: SelectSubset<T, SafetyNotificationCreateArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SafetyNotifications.
     * @param {SafetyNotificationCreateManyArgs} args - Arguments to create many SafetyNotifications.
     * @example
     * // Create many SafetyNotifications
     * const safetyNotification = await prisma.safetyNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SafetyNotificationCreateManyArgs>(args?: SelectSubset<T, SafetyNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SafetyNotifications and returns the data saved in the database.
     * @param {SafetyNotificationCreateManyAndReturnArgs} args - Arguments to create many SafetyNotifications.
     * @example
     * // Create many SafetyNotifications
     * const safetyNotification = await prisma.safetyNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SafetyNotifications and only return the `id`
     * const safetyNotificationWithIdOnly = await prisma.safetyNotification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SafetyNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, SafetyNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SafetyNotification.
     * @param {SafetyNotificationDeleteArgs} args - Arguments to delete one SafetyNotification.
     * @example
     * // Delete one SafetyNotification
     * const SafetyNotification = await prisma.safetyNotification.delete({
     *   where: {
     *     // ... filter to delete one SafetyNotification
     *   }
     * })
     * 
     */
    delete<T extends SafetyNotificationDeleteArgs>(args: SelectSubset<T, SafetyNotificationDeleteArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SafetyNotification.
     * @param {SafetyNotificationUpdateArgs} args - Arguments to update one SafetyNotification.
     * @example
     * // Update one SafetyNotification
     * const safetyNotification = await prisma.safetyNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SafetyNotificationUpdateArgs>(args: SelectSubset<T, SafetyNotificationUpdateArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SafetyNotifications.
     * @param {SafetyNotificationDeleteManyArgs} args - Arguments to filter SafetyNotifications to delete.
     * @example
     * // Delete a few SafetyNotifications
     * const { count } = await prisma.safetyNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SafetyNotificationDeleteManyArgs>(args?: SelectSubset<T, SafetyNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SafetyNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SafetyNotifications
     * const safetyNotification = await prisma.safetyNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SafetyNotificationUpdateManyArgs>(args: SelectSubset<T, SafetyNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SafetyNotification.
     * @param {SafetyNotificationUpsertArgs} args - Arguments to update or create a SafetyNotification.
     * @example
     * // Update or create a SafetyNotification
     * const safetyNotification = await prisma.safetyNotification.upsert({
     *   create: {
     *     // ... data to create a SafetyNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SafetyNotification we want to update
     *   }
     * })
     */
    upsert<T extends SafetyNotificationUpsertArgs>(args: SelectSubset<T, SafetyNotificationUpsertArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SafetyNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationCountArgs} args - Arguments to filter SafetyNotifications to count.
     * @example
     * // Count the number of SafetyNotifications
     * const count = await prisma.safetyNotification.count({
     *   where: {
     *     // ... the filter for the SafetyNotifications we want to count
     *   }
     * })
    **/
    count<T extends SafetyNotificationCountArgs>(
      args?: Subset<T, SafetyNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SafetyNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SafetyNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SafetyNotificationAggregateArgs>(args: Subset<T, SafetyNotificationAggregateArgs>): Prisma.PrismaPromise<GetSafetyNotificationAggregateType<T>>

    /**
     * Group by SafetyNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyNotificationGroupByArgs} args - Group by arguments.
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
      T extends SafetyNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SafetyNotificationGroupByArgs['orderBy'] }
        : { orderBy?: SafetyNotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SafetyNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSafetyNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SafetyNotification model
   */
  readonly fields: SafetyNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SafetyNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SafetyNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userNotifications<T extends SafetyNotification$userNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, SafetyNotification$userNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SafetyNotification model
   */ 
  interface SafetyNotificationFieldRefs {
    readonly id: FieldRef<"SafetyNotification", 'String'>
    readonly title: FieldRef<"SafetyNotification", 'String'>
    readonly message: FieldRef<"SafetyNotification", 'String'>
    readonly notificationType: FieldRef<"SafetyNotification", 'String'>
    readonly priority: FieldRef<"SafetyNotification", 'Priority'>
    readonly targetUserTypes: FieldRef<"SafetyNotification", 'String[]'>
    readonly targetLocation: FieldRef<"SafetyNotification", 'String'>
    readonly isActive: FieldRef<"SafetyNotification", 'Boolean'>
    readonly expiresAt: FieldRef<"SafetyNotification", 'DateTime'>
    readonly createdBy: FieldRef<"SafetyNotification", 'String'>
    readonly createdAt: FieldRef<"SafetyNotification", 'DateTime'>
    readonly updatedAt: FieldRef<"SafetyNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SafetyNotification findUnique
   */
  export type SafetyNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * Filter, which SafetyNotification to fetch.
     */
    where: SafetyNotificationWhereUniqueInput
  }

  /**
   * SafetyNotification findUniqueOrThrow
   */
  export type SafetyNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * Filter, which SafetyNotification to fetch.
     */
    where: SafetyNotificationWhereUniqueInput
  }

  /**
   * SafetyNotification findFirst
   */
  export type SafetyNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * Filter, which SafetyNotification to fetch.
     */
    where?: SafetyNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyNotifications to fetch.
     */
    orderBy?: SafetyNotificationOrderByWithRelationInput | SafetyNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SafetyNotifications.
     */
    cursor?: SafetyNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SafetyNotifications.
     */
    distinct?: SafetyNotificationScalarFieldEnum | SafetyNotificationScalarFieldEnum[]
  }

  /**
   * SafetyNotification findFirstOrThrow
   */
  export type SafetyNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * Filter, which SafetyNotification to fetch.
     */
    where?: SafetyNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyNotifications to fetch.
     */
    orderBy?: SafetyNotificationOrderByWithRelationInput | SafetyNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SafetyNotifications.
     */
    cursor?: SafetyNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SafetyNotifications.
     */
    distinct?: SafetyNotificationScalarFieldEnum | SafetyNotificationScalarFieldEnum[]
  }

  /**
   * SafetyNotification findMany
   */
  export type SafetyNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * Filter, which SafetyNotifications to fetch.
     */
    where?: SafetyNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyNotifications to fetch.
     */
    orderBy?: SafetyNotificationOrderByWithRelationInput | SafetyNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SafetyNotifications.
     */
    cursor?: SafetyNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyNotifications.
     */
    skip?: number
    distinct?: SafetyNotificationScalarFieldEnum | SafetyNotificationScalarFieldEnum[]
  }

  /**
   * SafetyNotification create
   */
  export type SafetyNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a SafetyNotification.
     */
    data: XOR<SafetyNotificationCreateInput, SafetyNotificationUncheckedCreateInput>
  }

  /**
   * SafetyNotification createMany
   */
  export type SafetyNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SafetyNotifications.
     */
    data: SafetyNotificationCreateManyInput | SafetyNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SafetyNotification createManyAndReturn
   */
  export type SafetyNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SafetyNotifications.
     */
    data: SafetyNotificationCreateManyInput | SafetyNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SafetyNotification update
   */
  export type SafetyNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a SafetyNotification.
     */
    data: XOR<SafetyNotificationUpdateInput, SafetyNotificationUncheckedUpdateInput>
    /**
     * Choose, which SafetyNotification to update.
     */
    where: SafetyNotificationWhereUniqueInput
  }

  /**
   * SafetyNotification updateMany
   */
  export type SafetyNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SafetyNotifications.
     */
    data: XOR<SafetyNotificationUpdateManyMutationInput, SafetyNotificationUncheckedUpdateManyInput>
    /**
     * Filter which SafetyNotifications to update
     */
    where?: SafetyNotificationWhereInput
  }

  /**
   * SafetyNotification upsert
   */
  export type SafetyNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the SafetyNotification to update in case it exists.
     */
    where: SafetyNotificationWhereUniqueInput
    /**
     * In case the SafetyNotification found by the `where` argument doesn't exist, create a new SafetyNotification with this data.
     */
    create: XOR<SafetyNotificationCreateInput, SafetyNotificationUncheckedCreateInput>
    /**
     * In case the SafetyNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SafetyNotificationUpdateInput, SafetyNotificationUncheckedUpdateInput>
  }

  /**
   * SafetyNotification delete
   */
  export type SafetyNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
    /**
     * Filter which SafetyNotification to delete.
     */
    where: SafetyNotificationWhereUniqueInput
  }

  /**
   * SafetyNotification deleteMany
   */
  export type SafetyNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SafetyNotifications to delete
     */
    where?: SafetyNotificationWhereInput
  }

  /**
   * SafetyNotification.userNotifications
   */
  export type SafetyNotification$userNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    where?: UserNotificationWhereInput
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    cursor?: UserNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * SafetyNotification without action
   */
  export type SafetyNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyNotification
     */
    select?: SafetyNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyNotificationInclude<ExtArgs> | null
  }


  /**
   * Model UserNotification
   */

  export type AggregateUserNotification = {
    _count: UserNotificationCountAggregateOutputType | null
    _min: UserNotificationMinAggregateOutputType | null
    _max: UserNotificationMaxAggregateOutputType | null
  }

  export type UserNotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationId: string | null
    isRead: boolean | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type UserNotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationId: string | null
    isRead: boolean | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type UserNotificationCountAggregateOutputType = {
    id: number
    userId: number
    notificationId: number
    isRead: number
    readAt: number
    createdAt: number
    _all: number
  }


  export type UserNotificationMinAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    isRead?: true
    readAt?: true
    createdAt?: true
  }

  export type UserNotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    isRead?: true
    readAt?: true
    createdAt?: true
  }

  export type UserNotificationCountAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    isRead?: true
    readAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNotification to aggregate.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserNotifications
    **/
    _count?: true | UserNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserNotificationMaxAggregateInputType
  }

  export type GetUserNotificationAggregateType<T extends UserNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNotification[P]>
      : GetScalarType<T[P], AggregateUserNotification[P]>
  }




  export type UserNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNotificationWhereInput
    orderBy?: UserNotificationOrderByWithAggregationInput | UserNotificationOrderByWithAggregationInput[]
    by: UserNotificationScalarFieldEnum[] | UserNotificationScalarFieldEnum
    having?: UserNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserNotificationCountAggregateInputType | true
    _min?: UserNotificationMinAggregateInputType
    _max?: UserNotificationMaxAggregateInputType
  }

  export type UserNotificationGroupByOutputType = {
    id: string
    userId: string
    notificationId: string
    isRead: boolean
    readAt: Date | null
    createdAt: Date
    _count: UserNotificationCountAggregateOutputType | null
    _min: UserNotificationMinAggregateOutputType | null
    _max: UserNotificationMaxAggregateOutputType | null
  }

  type GetUserNotificationGroupByPayload<T extends UserNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], UserNotificationGroupByOutputType[P]>
        }
      >
    >


  export type UserNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | SafetyNotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNotification"]>

  export type UserNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | SafetyNotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNotification"]>

  export type UserNotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
  }

  export type UserNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | SafetyNotificationDefaultArgs<ExtArgs>
  }
  export type UserNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notification?: boolean | SafetyNotificationDefaultArgs<ExtArgs>
  }

  export type $UserNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserNotification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      notification: Prisma.$SafetyNotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      notificationId: string
      isRead: boolean
      readAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userNotification"]>
    composites: {}
  }

  type UserNotificationGetPayload<S extends boolean | null | undefined | UserNotificationDefaultArgs> = $Result.GetResult<Prisma.$UserNotificationPayload, S>

  type UserNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserNotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserNotificationCountAggregateInputType | true
    }

  export interface UserNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserNotification'], meta: { name: 'UserNotification' } }
    /**
     * Find zero or one UserNotification that matches the filter.
     * @param {UserNotificationFindUniqueArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNotificationFindUniqueArgs>(args: SelectSubset<T, UserNotificationFindUniqueArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserNotification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserNotificationFindUniqueOrThrowArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationFindFirstArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNotificationFindFirstArgs>(args?: SelectSubset<T, UserNotificationFindFirstArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationFindFirstOrThrowArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNotifications
     * const userNotifications = await prisma.userNotification.findMany()
     * 
     * // Get first 10 UserNotifications
     * const userNotifications = await prisma.userNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userNotificationWithIdOnly = await prisma.userNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserNotificationFindManyArgs>(args?: SelectSubset<T, UserNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserNotification.
     * @param {UserNotificationCreateArgs} args - Arguments to create a UserNotification.
     * @example
     * // Create one UserNotification
     * const UserNotification = await prisma.userNotification.create({
     *   data: {
     *     // ... data to create a UserNotification
     *   }
     * })
     * 
     */
    create<T extends UserNotificationCreateArgs>(args: SelectSubset<T, UserNotificationCreateArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserNotifications.
     * @param {UserNotificationCreateManyArgs} args - Arguments to create many UserNotifications.
     * @example
     * // Create many UserNotifications
     * const userNotification = await prisma.userNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserNotificationCreateManyArgs>(args?: SelectSubset<T, UserNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserNotifications and returns the data saved in the database.
     * @param {UserNotificationCreateManyAndReturnArgs} args - Arguments to create many UserNotifications.
     * @example
     * // Create many UserNotifications
     * const userNotification = await prisma.userNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserNotifications and only return the `id`
     * const userNotificationWithIdOnly = await prisma.userNotification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserNotification.
     * @param {UserNotificationDeleteArgs} args - Arguments to delete one UserNotification.
     * @example
     * // Delete one UserNotification
     * const UserNotification = await prisma.userNotification.delete({
     *   where: {
     *     // ... filter to delete one UserNotification
     *   }
     * })
     * 
     */
    delete<T extends UserNotificationDeleteArgs>(args: SelectSubset<T, UserNotificationDeleteArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserNotification.
     * @param {UserNotificationUpdateArgs} args - Arguments to update one UserNotification.
     * @example
     * // Update one UserNotification
     * const userNotification = await prisma.userNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserNotificationUpdateArgs>(args: SelectSubset<T, UserNotificationUpdateArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserNotifications.
     * @param {UserNotificationDeleteManyArgs} args - Arguments to filter UserNotifications to delete.
     * @example
     * // Delete a few UserNotifications
     * const { count } = await prisma.userNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserNotificationDeleteManyArgs>(args?: SelectSubset<T, UserNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNotifications
     * const userNotification = await prisma.userNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserNotificationUpdateManyArgs>(args: SelectSubset<T, UserNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserNotification.
     * @param {UserNotificationUpsertArgs} args - Arguments to update or create a UserNotification.
     * @example
     * // Update or create a UserNotification
     * const userNotification = await prisma.userNotification.upsert({
     *   create: {
     *     // ... data to create a UserNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNotification we want to update
     *   }
     * })
     */
    upsert<T extends UserNotificationUpsertArgs>(args: SelectSubset<T, UserNotificationUpsertArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationCountArgs} args - Arguments to filter UserNotifications to count.
     * @example
     * // Count the number of UserNotifications
     * const count = await prisma.userNotification.count({
     *   where: {
     *     // ... the filter for the UserNotifications we want to count
     *   }
     * })
    **/
    count<T extends UserNotificationCountArgs>(
      args?: Subset<T, UserNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserNotificationAggregateArgs>(args: Subset<T, UserNotificationAggregateArgs>): Prisma.PrismaPromise<GetUserNotificationAggregateType<T>>

    /**
     * Group by UserNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationGroupByArgs} args - Group by arguments.
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
      T extends UserNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNotificationGroupByArgs['orderBy'] }
        : { orderBy?: UserNotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserNotification model
   */
  readonly fields: UserNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    notification<T extends SafetyNotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SafetyNotificationDefaultArgs<ExtArgs>>): Prisma__SafetyNotificationClient<$Result.GetResult<Prisma.$SafetyNotificationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserNotification model
   */ 
  interface UserNotificationFieldRefs {
    readonly id: FieldRef<"UserNotification", 'String'>
    readonly userId: FieldRef<"UserNotification", 'String'>
    readonly notificationId: FieldRef<"UserNotification", 'String'>
    readonly isRead: FieldRef<"UserNotification", 'Boolean'>
    readonly readAt: FieldRef<"UserNotification", 'DateTime'>
    readonly createdAt: FieldRef<"UserNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserNotification findUnique
   */
  export type UserNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification findUniqueOrThrow
   */
  export type UserNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification findFirst
   */
  export type UserNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotifications.
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotifications.
     */
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * UserNotification findFirstOrThrow
   */
  export type UserNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotifications.
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotifications.
     */
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * UserNotification findMany
   */
  export type UserNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotifications to fetch.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserNotifications.
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * UserNotification create
   */
  export type UserNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserNotification.
     */
    data: XOR<UserNotificationCreateInput, UserNotificationUncheckedCreateInput>
  }

  /**
   * UserNotification createMany
   */
  export type UserNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserNotifications.
     */
    data: UserNotificationCreateManyInput | UserNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserNotification createManyAndReturn
   */
  export type UserNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserNotifications.
     */
    data: UserNotificationCreateManyInput | UserNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserNotification update
   */
  export type UserNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserNotification.
     */
    data: XOR<UserNotificationUpdateInput, UserNotificationUncheckedUpdateInput>
    /**
     * Choose, which UserNotification to update.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification updateMany
   */
  export type UserNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserNotifications.
     */
    data: XOR<UserNotificationUpdateManyMutationInput, UserNotificationUncheckedUpdateManyInput>
    /**
     * Filter which UserNotifications to update
     */
    where?: UserNotificationWhereInput
  }

  /**
   * UserNotification upsert
   */
  export type UserNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserNotification to update in case it exists.
     */
    where: UserNotificationWhereUniqueInput
    /**
     * In case the UserNotification found by the `where` argument doesn't exist, create a new UserNotification with this data.
     */
    create: XOR<UserNotificationCreateInput, UserNotificationUncheckedCreateInput>
    /**
     * In case the UserNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserNotificationUpdateInput, UserNotificationUncheckedUpdateInput>
  }

  /**
   * UserNotification delete
   */
  export type UserNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter which UserNotification to delete.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification deleteMany
   */
  export type UserNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNotifications to delete
     */
    where?: UserNotificationWhereInput
  }

  /**
   * UserNotification without action
   */
  export type UserNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    originalName: string | null
    fileSize: number | null
    mimeType: string | null
    filePath: string | null
    documentType: string | null
    description: string | null
    isVerified: boolean | null
    verifiedBy: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    originalName: string | null
    fileSize: number | null
    mimeType: string | null
    filePath: string | null
    documentType: string | null
    description: string | null
    isVerified: boolean | null
    verifiedBy: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    userId: number
    fileName: number
    originalName: number
    fileSize: number
    mimeType: number
    filePath: number
    documentType: number
    description: number
    isVerified: number
    verifiedBy: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    originalName?: true
    fileSize?: true
    mimeType?: true
    filePath?: true
    documentType?: true
    description?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    originalName?: true
    fileSize?: true
    mimeType?: true
    filePath?: true
    documentType?: true
    description?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    originalName?: true
    fileSize?: true
    mimeType?: true
    filePath?: true
    documentType?: true
    description?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    userId: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType: string | null
    description: string | null
    isVerified: boolean
    verifiedBy: string | null
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    filePath?: boolean
    documentType?: boolean
    description?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    filePath?: boolean
    documentType?: boolean
    description?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    filePath?: boolean
    documentType?: boolean
    description?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fileName: string
      originalName: string
      fileSize: number
      mimeType: string
      filePath: string
      documentType: string | null
      description: string | null
      isVerified: boolean
      verifiedBy: string | null
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly userId: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly originalName: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly filePath: FieldRef<"Document", 'String'>
    readonly documentType: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly isVerified: FieldRef<"Document", 'Boolean'>
    readonly verifiedBy: FieldRef<"Document", 'String'>
    readonly verifiedAt: FieldRef<"Document", 'DateTime'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    value: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    value: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: string | null
    date: Date | null
    metric: string | null
    value: number | null
    createdAt: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    metric: string | null
    value: number | null
    createdAt: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    date: number
    metric: number
    value: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    value?: true
  }

  export type AnalyticsSumAggregateInputType = {
    value?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    date?: true
    metric?: true
    value?: true
    createdAt?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    date?: true
    metric?: true
    value?: true
    createdAt?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    date?: true
    metric?: true
    value?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: string
    date: Date
    metric: string
    value: number
    metadata: JsonValue | null
    createdAt: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    metric?: boolean
    value?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    metric?: boolean
    value?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    id?: boolean
    date?: boolean
    metric?: boolean
    value?: boolean
    metadata?: boolean
    createdAt?: boolean
  }


  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      metric: string
      value: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Analytics model
   */ 
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'String'>
    readonly date: FieldRef<"Analytics", 'DateTime'>
    readonly metric: FieldRef<"Analytics", 'String'>
    readonly value: FieldRef<"Analytics", 'Float'>
    readonly metadata: FieldRef<"Analytics", 'Json'>
    readonly createdAt: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    userType: 'userType',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    nationality: 'nationality',
    address: 'address',
    profileImage: 'profileImage',
    digitalId: 'digitalId',
    safetyScore: 'safetyScore',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DigitalIDScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    digitalId: 'digitalId',
    qrCode: 'qrCode',
    blockchainHash: 'blockchainHash',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    verificationData: 'verificationData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DigitalIDScalarFieldEnum = (typeof DigitalIDScalarFieldEnum)[keyof typeof DigitalIDScalarFieldEnum]


  export const LocationHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    accuracy: 'accuracy',
    altitude: 'altitude',
    heading: 'heading',
    speed: 'speed',
    address: 'address',
    batteryLevel: 'batteryLevel',
    isEmergency: 'isEmergency',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type LocationHistoryScalarFieldEnum = (typeof LocationHistoryScalarFieldEnum)[keyof typeof LocationHistoryScalarFieldEnum]


  export const RiskZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    riskLevel: 'riskLevel',
    isActive: 'isActive',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiskZoneScalarFieldEnum = (typeof RiskZoneScalarFieldEnum)[keyof typeof RiskZoneScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    incidentNumber: 'incidentNumber',
    userId: 'userId',
    incidentType: 'incidentType',
    title: 'title',
    description: 'description',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    priority: 'priority',
    status: 'status',
    assignedTo: 'assignedTo',
    reportedBy: 'reportedBy',
    reportedAt: 'reportedAt',
    resolvedAt: 'resolvedAt',
    efirGenerated: 'efirGenerated',
    efirNumber: 'efirNumber',
    attachments: 'attachments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const EmergencyAlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    alertType: 'alertType',
    message: 'message',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    status: 'status',
    priority: 'priority',
    respondedBy: 'respondedBy',
    respondedAt: 'respondedAt',
    resolvedAt: 'resolvedAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmergencyAlertScalarFieldEnum = (typeof EmergencyAlertScalarFieldEnum)[keyof typeof EmergencyAlertScalarFieldEnum]


  export const EmergencyContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    phone: 'phone',
    email: 'email',
    relation: 'relation',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmergencyContactScalarFieldEnum = (typeof EmergencyContactScalarFieldEnum)[keyof typeof EmergencyContactScalarFieldEnum]


  export const TripPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    destinations: 'destinations',
    status: 'status',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripPlanScalarFieldEnum = (typeof TripPlanScalarFieldEnum)[keyof typeof TripPlanScalarFieldEnum]


  export const SafetyNotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    notificationType: 'notificationType',
    priority: 'priority',
    targetUserTypes: 'targetUserTypes',
    targetLocation: 'targetLocation',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SafetyNotificationScalarFieldEnum = (typeof SafetyNotificationScalarFieldEnum)[keyof typeof SafetyNotificationScalarFieldEnum]


  export const UserNotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notificationId: 'notificationId',
    isRead: 'isRead',
    readAt: 'readAt',
    createdAt: 'createdAt'
  };

  export type UserNotificationScalarFieldEnum = (typeof UserNotificationScalarFieldEnum)[keyof typeof UserNotificationScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fileName: 'fileName',
    originalName: 'originalName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    filePath: 'filePath',
    documentType: 'documentType',
    description: 'description',
    isVerified: 'isVerified',
    verifiedBy: 'verifiedBy',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    metric: 'metric',
    value: 'value',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'IncidentType'
   */
  export type EnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType'>
    


  /**
   * Reference to a field of type 'IncidentType[]'
   */
  export type ListEnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'AlertStatus'
   */
  export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>
    


  /**
   * Reference to a field of type 'AlertStatus[]'
   */
  export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    phone?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    digitalId?: StringNullableFilter<"User"> | string | null
    safetyScore?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    digitalIDs?: DigitalIDListRelationFilter
    locations?: LocationHistoryListRelationFilter
    incidents?: IncidentListRelationFilter
    emergencyAlerts?: EmergencyAlertListRelationFilter
    emergencyContacts?: EmergencyContactListRelationFilter
    tripPlans?: TripPlanListRelationFilter
    documents?: DocumentListRelationFilter
    notifications?: UserNotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    digitalId?: SortOrderInput | SortOrder
    safetyScore?: SortOrderInput | SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    digitalIDs?: DigitalIDOrderByRelationAggregateInput
    locations?: LocationHistoryOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    emergencyAlerts?: EmergencyAlertOrderByRelationAggregateInput
    emergencyContacts?: EmergencyContactOrderByRelationAggregateInput
    tripPlans?: TripPlanOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    notifications?: UserNotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    digitalId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    phone?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    safetyScore?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    digitalIDs?: DigitalIDListRelationFilter
    locations?: LocationHistoryListRelationFilter
    incidents?: IncidentListRelationFilter
    emergencyAlerts?: EmergencyAlertListRelationFilter
    emergencyContacts?: EmergencyContactListRelationFilter
    tripPlans?: TripPlanListRelationFilter
    documents?: DocumentListRelationFilter
    notifications?: UserNotificationListRelationFilter
  }, "id" | "email" | "digitalId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    digitalId?: SortOrderInput | SortOrder
    safetyScore?: SortOrderInput | SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    nationality?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    digitalId?: StringNullableWithAggregatesFilter<"User"> | string | null
    safetyScore?: IntNullableWithAggregatesFilter<"User"> | number | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DigitalIDWhereInput = {
    AND?: DigitalIDWhereInput | DigitalIDWhereInput[]
    OR?: DigitalIDWhereInput[]
    NOT?: DigitalIDWhereInput | DigitalIDWhereInput[]
    id?: StringFilter<"DigitalID"> | string
    userId?: StringFilter<"DigitalID"> | string
    digitalId?: StringFilter<"DigitalID"> | string
    qrCode?: StringFilter<"DigitalID"> | string
    blockchainHash?: StringNullableFilter<"DigitalID"> | string | null
    issuedAt?: DateTimeFilter<"DigitalID"> | Date | string
    expiresAt?: DateTimeNullableFilter<"DigitalID"> | Date | string | null
    isActive?: BoolFilter<"DigitalID"> | boolean
    verificationData?: JsonNullableFilter<"DigitalID">
    createdAt?: DateTimeFilter<"DigitalID"> | Date | string
    updatedAt?: DateTimeFilter<"DigitalID"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DigitalIDOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    digitalId?: SortOrder
    qrCode?: SortOrder
    blockchainHash?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    verificationData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DigitalIDWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    digitalId?: string
    AND?: DigitalIDWhereInput | DigitalIDWhereInput[]
    OR?: DigitalIDWhereInput[]
    NOT?: DigitalIDWhereInput | DigitalIDWhereInput[]
    userId?: StringFilter<"DigitalID"> | string
    qrCode?: StringFilter<"DigitalID"> | string
    blockchainHash?: StringNullableFilter<"DigitalID"> | string | null
    issuedAt?: DateTimeFilter<"DigitalID"> | Date | string
    expiresAt?: DateTimeNullableFilter<"DigitalID"> | Date | string | null
    isActive?: BoolFilter<"DigitalID"> | boolean
    verificationData?: JsonNullableFilter<"DigitalID">
    createdAt?: DateTimeFilter<"DigitalID"> | Date | string
    updatedAt?: DateTimeFilter<"DigitalID"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "digitalId">

  export type DigitalIDOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    digitalId?: SortOrder
    qrCode?: SortOrder
    blockchainHash?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    verificationData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DigitalIDCountOrderByAggregateInput
    _max?: DigitalIDMaxOrderByAggregateInput
    _min?: DigitalIDMinOrderByAggregateInput
  }

  export type DigitalIDScalarWhereWithAggregatesInput = {
    AND?: DigitalIDScalarWhereWithAggregatesInput | DigitalIDScalarWhereWithAggregatesInput[]
    OR?: DigitalIDScalarWhereWithAggregatesInput[]
    NOT?: DigitalIDScalarWhereWithAggregatesInput | DigitalIDScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DigitalID"> | string
    userId?: StringWithAggregatesFilter<"DigitalID"> | string
    digitalId?: StringWithAggregatesFilter<"DigitalID"> | string
    qrCode?: StringWithAggregatesFilter<"DigitalID"> | string
    blockchainHash?: StringNullableWithAggregatesFilter<"DigitalID"> | string | null
    issuedAt?: DateTimeWithAggregatesFilter<"DigitalID"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"DigitalID"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"DigitalID"> | boolean
    verificationData?: JsonNullableWithAggregatesFilter<"DigitalID">
    createdAt?: DateTimeWithAggregatesFilter<"DigitalID"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DigitalID"> | Date | string
  }

  export type LocationHistoryWhereInput = {
    AND?: LocationHistoryWhereInput | LocationHistoryWhereInput[]
    OR?: LocationHistoryWhereInput[]
    NOT?: LocationHistoryWhereInput | LocationHistoryWhereInput[]
    id?: StringFilter<"LocationHistory"> | string
    userId?: StringFilter<"LocationHistory"> | string
    latitude?: FloatFilter<"LocationHistory"> | number
    longitude?: FloatFilter<"LocationHistory"> | number
    accuracy?: FloatNullableFilter<"LocationHistory"> | number | null
    altitude?: FloatNullableFilter<"LocationHistory"> | number | null
    heading?: FloatNullableFilter<"LocationHistory"> | number | null
    speed?: FloatNullableFilter<"LocationHistory"> | number | null
    address?: StringNullableFilter<"LocationHistory"> | string | null
    batteryLevel?: IntNullableFilter<"LocationHistory"> | number | null
    isEmergency?: BoolFilter<"LocationHistory"> | boolean
    timestamp?: DateTimeFilter<"LocationHistory"> | Date | string
    createdAt?: DateTimeFilter<"LocationHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LocationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    heading?: SortOrderInput | SortOrder
    speed?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    batteryLevel?: SortOrderInput | SortOrder
    isEmergency?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LocationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationHistoryWhereInput | LocationHistoryWhereInput[]
    OR?: LocationHistoryWhereInput[]
    NOT?: LocationHistoryWhereInput | LocationHistoryWhereInput[]
    userId?: StringFilter<"LocationHistory"> | string
    latitude?: FloatFilter<"LocationHistory"> | number
    longitude?: FloatFilter<"LocationHistory"> | number
    accuracy?: FloatNullableFilter<"LocationHistory"> | number | null
    altitude?: FloatNullableFilter<"LocationHistory"> | number | null
    heading?: FloatNullableFilter<"LocationHistory"> | number | null
    speed?: FloatNullableFilter<"LocationHistory"> | number | null
    address?: StringNullableFilter<"LocationHistory"> | string | null
    batteryLevel?: IntNullableFilter<"LocationHistory"> | number | null
    isEmergency?: BoolFilter<"LocationHistory"> | boolean
    timestamp?: DateTimeFilter<"LocationHistory"> | Date | string
    createdAt?: DateTimeFilter<"LocationHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type LocationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    heading?: SortOrderInput | SortOrder
    speed?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    batteryLevel?: SortOrderInput | SortOrder
    isEmergency?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: LocationHistoryCountOrderByAggregateInput
    _avg?: LocationHistoryAvgOrderByAggregateInput
    _max?: LocationHistoryMaxOrderByAggregateInput
    _min?: LocationHistoryMinOrderByAggregateInput
    _sum?: LocationHistorySumOrderByAggregateInput
  }

  export type LocationHistoryScalarWhereWithAggregatesInput = {
    AND?: LocationHistoryScalarWhereWithAggregatesInput | LocationHistoryScalarWhereWithAggregatesInput[]
    OR?: LocationHistoryScalarWhereWithAggregatesInput[]
    NOT?: LocationHistoryScalarWhereWithAggregatesInput | LocationHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocationHistory"> | string
    userId?: StringWithAggregatesFilter<"LocationHistory"> | string
    latitude?: FloatWithAggregatesFilter<"LocationHistory"> | number
    longitude?: FloatWithAggregatesFilter<"LocationHistory"> | number
    accuracy?: FloatNullableWithAggregatesFilter<"LocationHistory"> | number | null
    altitude?: FloatNullableWithAggregatesFilter<"LocationHistory"> | number | null
    heading?: FloatNullableWithAggregatesFilter<"LocationHistory"> | number | null
    speed?: FloatNullableWithAggregatesFilter<"LocationHistory"> | number | null
    address?: StringNullableWithAggregatesFilter<"LocationHistory"> | string | null
    batteryLevel?: IntNullableWithAggregatesFilter<"LocationHistory"> | number | null
    isEmergency?: BoolWithAggregatesFilter<"LocationHistory"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"LocationHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LocationHistory"> | Date | string
  }

  export type RiskZoneWhereInput = {
    AND?: RiskZoneWhereInput | RiskZoneWhereInput[]
    OR?: RiskZoneWhereInput[]
    NOT?: RiskZoneWhereInput | RiskZoneWhereInput[]
    id?: StringFilter<"RiskZone"> | string
    name?: StringFilter<"RiskZone"> | string
    description?: StringNullableFilter<"RiskZone"> | string | null
    latitude?: FloatFilter<"RiskZone"> | number
    longitude?: FloatFilter<"RiskZone"> | number
    radius?: IntFilter<"RiskZone"> | number
    riskLevel?: EnumRiskLevelFilter<"RiskZone"> | $Enums.RiskLevel
    isActive?: BoolFilter<"RiskZone"> | boolean
    createdBy?: StringNullableFilter<"RiskZone"> | string | null
    createdAt?: DateTimeFilter<"RiskZone"> | Date | string
    updatedAt?: DateTimeFilter<"RiskZone"> | Date | string
  }

  export type RiskZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    riskLevel?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskZoneWhereInput | RiskZoneWhereInput[]
    OR?: RiskZoneWhereInput[]
    NOT?: RiskZoneWhereInput | RiskZoneWhereInput[]
    name?: StringFilter<"RiskZone"> | string
    description?: StringNullableFilter<"RiskZone"> | string | null
    latitude?: FloatFilter<"RiskZone"> | number
    longitude?: FloatFilter<"RiskZone"> | number
    radius?: IntFilter<"RiskZone"> | number
    riskLevel?: EnumRiskLevelFilter<"RiskZone"> | $Enums.RiskLevel
    isActive?: BoolFilter<"RiskZone"> | boolean
    createdBy?: StringNullableFilter<"RiskZone"> | string | null
    createdAt?: DateTimeFilter<"RiskZone"> | Date | string
    updatedAt?: DateTimeFilter<"RiskZone"> | Date | string
  }, "id">

  export type RiskZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    riskLevel?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskZoneCountOrderByAggregateInput
    _avg?: RiskZoneAvgOrderByAggregateInput
    _max?: RiskZoneMaxOrderByAggregateInput
    _min?: RiskZoneMinOrderByAggregateInput
    _sum?: RiskZoneSumOrderByAggregateInput
  }

  export type RiskZoneScalarWhereWithAggregatesInput = {
    AND?: RiskZoneScalarWhereWithAggregatesInput | RiskZoneScalarWhereWithAggregatesInput[]
    OR?: RiskZoneScalarWhereWithAggregatesInput[]
    NOT?: RiskZoneScalarWhereWithAggregatesInput | RiskZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskZone"> | string
    name?: StringWithAggregatesFilter<"RiskZone"> | string
    description?: StringNullableWithAggregatesFilter<"RiskZone"> | string | null
    latitude?: FloatWithAggregatesFilter<"RiskZone"> | number
    longitude?: FloatWithAggregatesFilter<"RiskZone"> | number
    radius?: IntWithAggregatesFilter<"RiskZone"> | number
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"RiskZone"> | $Enums.RiskLevel
    isActive?: BoolWithAggregatesFilter<"RiskZone"> | boolean
    createdBy?: StringNullableWithAggregatesFilter<"RiskZone"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RiskZone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RiskZone"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    incidentNumber?: StringFilter<"Incident"> | string
    userId?: StringNullableFilter<"Incident"> | string | null
    incidentType?: EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    latitude?: FloatNullableFilter<"Incident"> | number | null
    longitude?: FloatNullableFilter<"Incident"> | number | null
    priority?: EnumPriorityFilter<"Incident"> | $Enums.Priority
    status?: StringFilter<"Incident"> | string
    assignedTo?: StringNullableFilter<"Incident"> | string | null
    reportedBy?: StringNullableFilter<"Incident"> | string | null
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    efirGenerated?: BoolFilter<"Incident"> | boolean
    efirNumber?: StringNullableFilter<"Incident"> | string | null
    attachments?: JsonNullableFilter<"Incident">
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    incidentNumber?: SortOrder
    userId?: SortOrderInput | SortOrder
    incidentType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    reportedBy?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    efirGenerated?: SortOrder
    efirNumber?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    incidentNumber?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    userId?: StringNullableFilter<"Incident"> | string | null
    incidentType?: EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    latitude?: FloatNullableFilter<"Incident"> | number | null
    longitude?: FloatNullableFilter<"Incident"> | number | null
    priority?: EnumPriorityFilter<"Incident"> | $Enums.Priority
    status?: StringFilter<"Incident"> | string
    assignedTo?: StringNullableFilter<"Incident"> | string | null
    reportedBy?: StringNullableFilter<"Incident"> | string | null
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    efirGenerated?: BoolFilter<"Incident"> | boolean
    efirNumber?: StringNullableFilter<"Incident"> | string | null
    attachments?: JsonNullableFilter<"Incident">
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "incidentNumber">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    incidentNumber?: SortOrder
    userId?: SortOrderInput | SortOrder
    incidentType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    reportedBy?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    efirGenerated?: SortOrder
    efirNumber?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    incidentNumber?: StringWithAggregatesFilter<"Incident"> | string
    userId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    incidentType?: EnumIncidentTypeWithAggregatesFilter<"Incident"> | $Enums.IncidentType
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    location?: StringWithAggregatesFilter<"Incident"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Incident"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Incident"> | number | null
    priority?: EnumPriorityWithAggregatesFilter<"Incident"> | $Enums.Priority
    status?: StringWithAggregatesFilter<"Incident"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    reportedBy?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    reportedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    efirGenerated?: BoolWithAggregatesFilter<"Incident"> | boolean
    efirNumber?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    attachments?: JsonNullableWithAggregatesFilter<"Incident">
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type EmergencyAlertWhereInput = {
    AND?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    OR?: EmergencyAlertWhereInput[]
    NOT?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    id?: StringFilter<"EmergencyAlert"> | string
    userId?: StringFilter<"EmergencyAlert"> | string
    alertType?: StringFilter<"EmergencyAlert"> | string
    message?: StringNullableFilter<"EmergencyAlert"> | string | null
    latitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    address?: StringNullableFilter<"EmergencyAlert"> | string | null
    status?: EnumAlertStatusFilter<"EmergencyAlert"> | $Enums.AlertStatus
    priority?: EnumPriorityFilter<"EmergencyAlert"> | $Enums.Priority
    respondedBy?: StringNullableFilter<"EmergencyAlert"> | string | null
    respondedAt?: DateTimeNullableFilter<"EmergencyAlert"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"EmergencyAlert"> | Date | string | null
    metadata?: JsonNullableFilter<"EmergencyAlert">
    createdAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EmergencyAlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    message?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    respondedBy?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmergencyAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    OR?: EmergencyAlertWhereInput[]
    NOT?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    userId?: StringFilter<"EmergencyAlert"> | string
    alertType?: StringFilter<"EmergencyAlert"> | string
    message?: StringNullableFilter<"EmergencyAlert"> | string | null
    latitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    address?: StringNullableFilter<"EmergencyAlert"> | string | null
    status?: EnumAlertStatusFilter<"EmergencyAlert"> | $Enums.AlertStatus
    priority?: EnumPriorityFilter<"EmergencyAlert"> | $Enums.Priority
    respondedBy?: StringNullableFilter<"EmergencyAlert"> | string | null
    respondedAt?: DateTimeNullableFilter<"EmergencyAlert"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"EmergencyAlert"> | Date | string | null
    metadata?: JsonNullableFilter<"EmergencyAlert">
    createdAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EmergencyAlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    message?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    respondedBy?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmergencyAlertCountOrderByAggregateInput
    _avg?: EmergencyAlertAvgOrderByAggregateInput
    _max?: EmergencyAlertMaxOrderByAggregateInput
    _min?: EmergencyAlertMinOrderByAggregateInput
    _sum?: EmergencyAlertSumOrderByAggregateInput
  }

  export type EmergencyAlertScalarWhereWithAggregatesInput = {
    AND?: EmergencyAlertScalarWhereWithAggregatesInput | EmergencyAlertScalarWhereWithAggregatesInput[]
    OR?: EmergencyAlertScalarWhereWithAggregatesInput[]
    NOT?: EmergencyAlertScalarWhereWithAggregatesInput | EmergencyAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyAlert"> | string
    userId?: StringWithAggregatesFilter<"EmergencyAlert"> | string
    alertType?: StringWithAggregatesFilter<"EmergencyAlert"> | string
    message?: StringNullableWithAggregatesFilter<"EmergencyAlert"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"EmergencyAlert"> | number | null
    address?: StringNullableWithAggregatesFilter<"EmergencyAlert"> | string | null
    status?: EnumAlertStatusWithAggregatesFilter<"EmergencyAlert"> | $Enums.AlertStatus
    priority?: EnumPriorityWithAggregatesFilter<"EmergencyAlert"> | $Enums.Priority
    respondedBy?: StringNullableWithAggregatesFilter<"EmergencyAlert"> | string | null
    respondedAt?: DateTimeNullableWithAggregatesFilter<"EmergencyAlert"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"EmergencyAlert"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"EmergencyAlert">
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmergencyAlert"> | Date | string
  }

  export type EmergencyContactWhereInput = {
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    id?: StringFilter<"EmergencyContact"> | string
    userId?: StringFilter<"EmergencyContact"> | string
    name?: StringFilter<"EmergencyContact"> | string
    phone?: StringFilter<"EmergencyContact"> | string
    email?: StringNullableFilter<"EmergencyContact"> | string | null
    relation?: StringFilter<"EmergencyContact"> | string
    isPrimary?: BoolFilter<"EmergencyContact"> | boolean
    createdAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EmergencyContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    relation?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmergencyContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    userId?: StringFilter<"EmergencyContact"> | string
    name?: StringFilter<"EmergencyContact"> | string
    phone?: StringFilter<"EmergencyContact"> | string
    email?: StringNullableFilter<"EmergencyContact"> | string | null
    relation?: StringFilter<"EmergencyContact"> | string
    isPrimary?: BoolFilter<"EmergencyContact"> | boolean
    createdAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EmergencyContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    relation?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmergencyContactCountOrderByAggregateInput
    _max?: EmergencyContactMaxOrderByAggregateInput
    _min?: EmergencyContactMinOrderByAggregateInput
  }

  export type EmergencyContactScalarWhereWithAggregatesInput = {
    AND?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    OR?: EmergencyContactScalarWhereWithAggregatesInput[]
    NOT?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyContact"> | string
    userId?: StringWithAggregatesFilter<"EmergencyContact"> | string
    name?: StringWithAggregatesFilter<"EmergencyContact"> | string
    phone?: StringWithAggregatesFilter<"EmergencyContact"> | string
    email?: StringNullableWithAggregatesFilter<"EmergencyContact"> | string | null
    relation?: StringWithAggregatesFilter<"EmergencyContact"> | string
    isPrimary?: BoolWithAggregatesFilter<"EmergencyContact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmergencyContact"> | Date | string
  }

  export type TripPlanWhereInput = {
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    userId?: StringFilter<"TripPlan"> | string
    title?: StringFilter<"TripPlan"> | string
    description?: StringNullableFilter<"TripPlan"> | string | null
    startDate?: DateTimeFilter<"TripPlan"> | Date | string
    endDate?: DateTimeFilter<"TripPlan"> | Date | string
    destinations?: JsonFilter<"TripPlan">
    status?: StringFilter<"TripPlan"> | string
    isPublic?: BoolFilter<"TripPlan"> | boolean
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TripPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    destinations?: SortOrder
    status?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TripPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    userId?: StringFilter<"TripPlan"> | string
    title?: StringFilter<"TripPlan"> | string
    description?: StringNullableFilter<"TripPlan"> | string | null
    startDate?: DateTimeFilter<"TripPlan"> | Date | string
    endDate?: DateTimeFilter<"TripPlan"> | Date | string
    destinations?: JsonFilter<"TripPlan">
    status?: StringFilter<"TripPlan"> | string
    isPublic?: BoolFilter<"TripPlan"> | boolean
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TripPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    destinations?: SortOrder
    status?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripPlanCountOrderByAggregateInput
    _max?: TripPlanMaxOrderByAggregateInput
    _min?: TripPlanMinOrderByAggregateInput
  }

  export type TripPlanScalarWhereWithAggregatesInput = {
    AND?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    OR?: TripPlanScalarWhereWithAggregatesInput[]
    NOT?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPlan"> | string
    userId?: StringWithAggregatesFilter<"TripPlan"> | string
    title?: StringWithAggregatesFilter<"TripPlan"> | string
    description?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    destinations?: JsonWithAggregatesFilter<"TripPlan">
    status?: StringWithAggregatesFilter<"TripPlan"> | string
    isPublic?: BoolWithAggregatesFilter<"TripPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
  }

  export type SafetyNotificationWhereInput = {
    AND?: SafetyNotificationWhereInput | SafetyNotificationWhereInput[]
    OR?: SafetyNotificationWhereInput[]
    NOT?: SafetyNotificationWhereInput | SafetyNotificationWhereInput[]
    id?: StringFilter<"SafetyNotification"> | string
    title?: StringFilter<"SafetyNotification"> | string
    message?: StringFilter<"SafetyNotification"> | string
    notificationType?: StringFilter<"SafetyNotification"> | string
    priority?: EnumPriorityFilter<"SafetyNotification"> | $Enums.Priority
    targetUserTypes?: StringNullableListFilter<"SafetyNotification">
    targetLocation?: StringNullableFilter<"SafetyNotification"> | string | null
    isActive?: BoolFilter<"SafetyNotification"> | boolean
    expiresAt?: DateTimeNullableFilter<"SafetyNotification"> | Date | string | null
    createdBy?: StringNullableFilter<"SafetyNotification"> | string | null
    createdAt?: DateTimeFilter<"SafetyNotification"> | Date | string
    updatedAt?: DateTimeFilter<"SafetyNotification"> | Date | string
    userNotifications?: UserNotificationListRelationFilter
  }

  export type SafetyNotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    notificationType?: SortOrder
    priority?: SortOrder
    targetUserTypes?: SortOrder
    targetLocation?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userNotifications?: UserNotificationOrderByRelationAggregateInput
  }

  export type SafetyNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SafetyNotificationWhereInput | SafetyNotificationWhereInput[]
    OR?: SafetyNotificationWhereInput[]
    NOT?: SafetyNotificationWhereInput | SafetyNotificationWhereInput[]
    title?: StringFilter<"SafetyNotification"> | string
    message?: StringFilter<"SafetyNotification"> | string
    notificationType?: StringFilter<"SafetyNotification"> | string
    priority?: EnumPriorityFilter<"SafetyNotification"> | $Enums.Priority
    targetUserTypes?: StringNullableListFilter<"SafetyNotification">
    targetLocation?: StringNullableFilter<"SafetyNotification"> | string | null
    isActive?: BoolFilter<"SafetyNotification"> | boolean
    expiresAt?: DateTimeNullableFilter<"SafetyNotification"> | Date | string | null
    createdBy?: StringNullableFilter<"SafetyNotification"> | string | null
    createdAt?: DateTimeFilter<"SafetyNotification"> | Date | string
    updatedAt?: DateTimeFilter<"SafetyNotification"> | Date | string
    userNotifications?: UserNotificationListRelationFilter
  }, "id">

  export type SafetyNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    notificationType?: SortOrder
    priority?: SortOrder
    targetUserTypes?: SortOrder
    targetLocation?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SafetyNotificationCountOrderByAggregateInput
    _max?: SafetyNotificationMaxOrderByAggregateInput
    _min?: SafetyNotificationMinOrderByAggregateInput
  }

  export type SafetyNotificationScalarWhereWithAggregatesInput = {
    AND?: SafetyNotificationScalarWhereWithAggregatesInput | SafetyNotificationScalarWhereWithAggregatesInput[]
    OR?: SafetyNotificationScalarWhereWithAggregatesInput[]
    NOT?: SafetyNotificationScalarWhereWithAggregatesInput | SafetyNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SafetyNotification"> | string
    title?: StringWithAggregatesFilter<"SafetyNotification"> | string
    message?: StringWithAggregatesFilter<"SafetyNotification"> | string
    notificationType?: StringWithAggregatesFilter<"SafetyNotification"> | string
    priority?: EnumPriorityWithAggregatesFilter<"SafetyNotification"> | $Enums.Priority
    targetUserTypes?: StringNullableListFilter<"SafetyNotification">
    targetLocation?: StringNullableWithAggregatesFilter<"SafetyNotification"> | string | null
    isActive?: BoolWithAggregatesFilter<"SafetyNotification"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"SafetyNotification"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"SafetyNotification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SafetyNotification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SafetyNotification"> | Date | string
  }

  export type UserNotificationWhereInput = {
    AND?: UserNotificationWhereInput | UserNotificationWhereInput[]
    OR?: UserNotificationWhereInput[]
    NOT?: UserNotificationWhereInput | UserNotificationWhereInput[]
    id?: StringFilter<"UserNotification"> | string
    userId?: StringFilter<"UserNotification"> | string
    notificationId?: StringFilter<"UserNotification"> | string
    isRead?: BoolFilter<"UserNotification"> | boolean
    readAt?: DateTimeNullableFilter<"UserNotification"> | Date | string | null
    createdAt?: DateTimeFilter<"UserNotification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    notification?: XOR<SafetyNotificationRelationFilter, SafetyNotificationWhereInput>
  }

  export type UserNotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    notification?: SafetyNotificationOrderByWithRelationInput
  }

  export type UserNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_notificationId?: UserNotificationUserIdNotificationIdCompoundUniqueInput
    AND?: UserNotificationWhereInput | UserNotificationWhereInput[]
    OR?: UserNotificationWhereInput[]
    NOT?: UserNotificationWhereInput | UserNotificationWhereInput[]
    userId?: StringFilter<"UserNotification"> | string
    notificationId?: StringFilter<"UserNotification"> | string
    isRead?: BoolFilter<"UserNotification"> | boolean
    readAt?: DateTimeNullableFilter<"UserNotification"> | Date | string | null
    createdAt?: DateTimeFilter<"UserNotification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    notification?: XOR<SafetyNotificationRelationFilter, SafetyNotificationWhereInput>
  }, "id" | "userId_notificationId">

  export type UserNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserNotificationCountOrderByAggregateInput
    _max?: UserNotificationMaxOrderByAggregateInput
    _min?: UserNotificationMinOrderByAggregateInput
  }

  export type UserNotificationScalarWhereWithAggregatesInput = {
    AND?: UserNotificationScalarWhereWithAggregatesInput | UserNotificationScalarWhereWithAggregatesInput[]
    OR?: UserNotificationScalarWhereWithAggregatesInput[]
    NOT?: UserNotificationScalarWhereWithAggregatesInput | UserNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserNotification"> | string
    userId?: StringWithAggregatesFilter<"UserNotification"> | string
    notificationId?: StringWithAggregatesFilter<"UserNotification"> | string
    isRead?: BoolWithAggregatesFilter<"UserNotification"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"UserNotification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserNotification"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    mimeType?: StringFilter<"Document"> | string
    filePath?: StringFilter<"Document"> | string
    documentType?: StringNullableFilter<"Document"> | string | null
    description?: StringNullableFilter<"Document"> | string | null
    isVerified?: BoolFilter<"Document"> | boolean
    verifiedBy?: StringNullableFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    filePath?: SortOrder
    documentType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    userId?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    mimeType?: StringFilter<"Document"> | string
    filePath?: StringFilter<"Document"> | string
    documentType?: StringNullableFilter<"Document"> | string | null
    description?: StringNullableFilter<"Document"> | string | null
    isVerified?: BoolFilter<"Document"> | boolean
    verifiedBy?: StringNullableFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    filePath?: SortOrder
    documentType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    userId?: StringWithAggregatesFilter<"Document"> | string
    fileName?: StringWithAggregatesFilter<"Document"> | string
    originalName?: StringWithAggregatesFilter<"Document"> | string
    fileSize?: IntWithAggregatesFilter<"Document"> | number
    mimeType?: StringWithAggregatesFilter<"Document"> | string
    filePath?: StringWithAggregatesFilter<"Document"> | string
    documentType?: StringNullableWithAggregatesFilter<"Document"> | string | null
    description?: StringNullableWithAggregatesFilter<"Document"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Document"> | boolean
    verifiedBy?: StringNullableWithAggregatesFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: StringFilter<"Analytics"> | string
    date?: DateTimeFilter<"Analytics"> | Date | string
    metric?: StringFilter<"Analytics"> | string
    value?: FloatFilter<"Analytics"> | number
    metadata?: JsonNullableFilter<"Analytics">
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    date?: DateTimeFilter<"Analytics"> | Date | string
    metric?: StringFilter<"Analytics"> | string
    value?: FloatFilter<"Analytics"> | number
    metadata?: JsonNullableFilter<"Analytics">
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analytics"> | string
    date?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    metric?: StringWithAggregatesFilter<"Analytics"> | string
    value?: FloatWithAggregatesFilter<"Analytics"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Analytics">
    createdAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalIDCreateInput = {
    id?: string
    digitalId: string
    qrCode: string
    blockchainHash?: string | null
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDigitalIDsInput
  }

  export type DigitalIDUncheckedCreateInput = {
    id?: string
    userId: string
    digitalId: string
    qrCode: string
    blockchainHash?: string | null
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalIDUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDigitalIDsNestedInput
  }

  export type DigitalIDUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalIDCreateManyInput = {
    id?: string
    userId: string
    digitalId: string
    qrCode: string
    blockchainHash?: string | null
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalIDUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalIDUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationHistoryCreateInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    address?: string | null
    batteryLevel?: number | null
    isEmergency?: boolean
    timestamp?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLocationsInput
  }

  export type LocationHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    accuracy?: number | null
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    address?: string | null
    batteryLevel?: number | null
    isEmergency?: boolean
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LocationHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationHistoryCreateManyInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    accuracy?: number | null
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    address?: string | null
    batteryLevel?: number | null
    isEmergency?: boolean
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LocationHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskZoneCreateInput = {
    id?: string
    name: string
    description?: string | null
    latitude: number
    longitude: number
    radius: number
    riskLevel?: $Enums.RiskLevel
    isActive?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskZoneUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    latitude: number
    longitude: number
    radius: number
    riskLevel?: $Enums.RiskLevel
    isActive?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskZoneCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    latitude: number
    longitude: number
    radius: number
    riskLevel?: $Enums.RiskLevel
    isActive?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    incidentNumber: string
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    priority?: $Enums.Priority
    status?: string
    assignedTo?: string | null
    reportedBy?: string | null
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    efirGenerated?: boolean
    efirNumber?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    incidentNumber: string
    userId?: string | null
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    priority?: $Enums.Priority
    status?: string
    assignedTo?: string | null
    reportedBy?: string | null
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    efirGenerated?: boolean
    efirNumber?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyInput = {
    id?: string
    incidentNumber: string
    userId?: string | null
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    priority?: $Enums.Priority
    status?: string
    assignedTo?: string | null
    reportedBy?: string | null
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    efirGenerated?: boolean
    efirNumber?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertCreateInput = {
    id?: string
    alertType?: string
    message?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    status?: $Enums.AlertStatus
    priority?: $Enums.Priority
    respondedBy?: string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmergencyAlertsInput
  }

  export type EmergencyAlertUncheckedCreateInput = {
    id?: string
    userId: string
    alertType?: string
    message?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    status?: $Enums.AlertStatus
    priority?: $Enums.Priority
    respondedBy?: string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmergencyAlertsNestedInput
  }

  export type EmergencyAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertCreateManyInput = {
    id?: string
    userId: string
    alertType?: string
    message?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    status?: $Enums.AlertStatus
    priority?: $Enums.Priority
    respondedBy?: string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    relation: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmergencyContactsInput
  }

  export type EmergencyContactUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    phone: string
    email?: string | null
    relation: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmergencyContactsNestedInput
  }

  export type EmergencyContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactCreateManyInput = {
    id?: string
    userId: string
    name: string
    phone: string
    email?: string | null
    relation: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    destinations: JsonNullValueInput | InputJsonValue
    status?: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripPlansInput
  }

  export type TripPlanUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    destinations: JsonNullValueInput | InputJsonValue
    status?: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripPlansNestedInput
  }

  export type TripPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    destinations: JsonNullValueInput | InputJsonValue
    status?: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyNotificationCreateInput = {
    id?: string
    title: string
    message: string
    notificationType: string
    priority?: $Enums.Priority
    targetUserTypes?: SafetyNotificationCreatetargetUserTypesInput | string[]
    targetLocation?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userNotifications?: UserNotificationCreateNestedManyWithoutNotificationInput
  }

  export type SafetyNotificationUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    notificationType: string
    priority?: $Enums.Priority
    targetUserTypes?: SafetyNotificationCreatetargetUserTypesInput | string[]
    targetLocation?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type SafetyNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notificationType?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    targetUserTypes?: SafetyNotificationUpdatetargetUserTypesInput | string[]
    targetLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userNotifications?: UserNotificationUpdateManyWithoutNotificationNestedInput
  }

  export type SafetyNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notificationType?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    targetUserTypes?: SafetyNotificationUpdatetargetUserTypesInput | string[]
    targetLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type SafetyNotificationCreateManyInput = {
    id?: string
    title: string
    message: string
    notificationType: string
    priority?: $Enums.Priority
    targetUserTypes?: SafetyNotificationCreatetargetUserTypesInput | string[]
    targetLocation?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafetyNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notificationType?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    targetUserTypes?: SafetyNotificationUpdatetargetUserTypesInput | string[]
    targetLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notificationType?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    targetUserTypes?: SafetyNotificationUpdatetargetUserTypesInput | string[]
    targetLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationCreateInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    notification: SafetyNotificationCreateNestedOneWithoutUserNotificationsInput
  }

  export type UserNotificationUncheckedCreateInput = {
    id?: string
    userId: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    notification?: SafetyNotificationUpdateOneRequiredWithoutUserNotificationsNestedInput
  }

  export type UserNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationCreateManyInput = {
    id?: string
    userId: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType?: string | null
    description?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    userId: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType?: string | null
    description?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    userId: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType?: string | null
    description?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateInput = {
    id?: string
    date?: Date | string
    metric: string
    value: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: string
    date?: Date | string
    metric: string
    value: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id?: string
    date?: Date | string
    metric: string
    value: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DigitalIDListRelationFilter = {
    every?: DigitalIDWhereInput
    some?: DigitalIDWhereInput
    none?: DigitalIDWhereInput
  }

  export type LocationHistoryListRelationFilter = {
    every?: LocationHistoryWhereInput
    some?: LocationHistoryWhereInput
    none?: LocationHistoryWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type EmergencyAlertListRelationFilter = {
    every?: EmergencyAlertWhereInput
    some?: EmergencyAlertWhereInput
    none?: EmergencyAlertWhereInput
  }

  export type EmergencyContactListRelationFilter = {
    every?: EmergencyContactWhereInput
    some?: EmergencyContactWhereInput
    none?: EmergencyContactWhereInput
  }

  export type TripPlanListRelationFilter = {
    every?: TripPlanWhereInput
    some?: TripPlanWhereInput
    none?: TripPlanWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type UserNotificationListRelationFilter = {
    every?: UserNotificationWhereInput
    some?: UserNotificationWhereInput
    none?: UserNotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DigitalIDOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
    digitalId?: SortOrder
    safetyScore?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    safetyScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
    digitalId?: SortOrder
    safetyScore?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userType?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
    digitalId?: SortOrder
    safetyScore?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    safetyScore?: SortOrder
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DigitalIDCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    digitalId?: SortOrder
    qrCode?: SortOrder
    blockchainHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    verificationData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DigitalIDMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    digitalId?: SortOrder
    qrCode?: SortOrder
    blockchainHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DigitalIDMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    digitalId?: SortOrder
    qrCode?: SortOrder
    blockchainHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LocationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    address?: SortOrder
    batteryLevel?: SortOrder
    isEmergency?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationHistoryAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    batteryLevel?: SortOrder
  }

  export type LocationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    address?: SortOrder
    batteryLevel?: SortOrder
    isEmergency?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    address?: SortOrder
    batteryLevel?: SortOrder
    isEmergency?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationHistorySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    heading?: SortOrder
    speed?: SortOrder
    batteryLevel?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type RiskZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    riskLevel?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskZoneAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type RiskZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    riskLevel?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    riskLevel?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskZoneSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
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

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type EnumIncidentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeFilter<$PrismaModel> | $Enums.IncidentType
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    incidentNumber?: SortOrder
    userId?: SortOrder
    incidentType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrder
    efirGenerated?: SortOrder
    efirNumber?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentNumber?: SortOrder
    userId?: SortOrder
    incidentType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrder
    efirGenerated?: SortOrder
    efirNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    incidentNumber?: SortOrder
    userId?: SortOrder
    incidentType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrder
    efirGenerated?: SortOrder
    efirNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumIncidentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentTypeFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type EmergencyAlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    respondedBy?: SortOrder
    respondedAt?: SortOrder
    resolvedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyAlertAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EmergencyAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    respondedBy?: SortOrder
    respondedAt?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyAlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    respondedBy?: SortOrder
    respondedAt?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyAlertSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type EmergencyContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    relation?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    relation?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    relation?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TripPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    destinations?: SortOrder
    status?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SafetyNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    notificationType?: SortOrder
    priority?: SortOrder
    targetUserTypes?: SortOrder
    targetLocation?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SafetyNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    notificationType?: SortOrder
    priority?: SortOrder
    targetLocation?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SafetyNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    notificationType?: SortOrder
    priority?: SortOrder
    targetLocation?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SafetyNotificationRelationFilter = {
    is?: SafetyNotificationWhereInput
    isNot?: SafetyNotificationWhereInput
  }

  export type UserNotificationUserIdNotificationIdCompoundUniqueInput = {
    userId: string
    notificationId: string
  }

  export type UserNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    filePath?: SortOrder
    documentType?: SortOrder
    description?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    filePath?: SortOrder
    documentType?: SortOrder
    description?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    filePath?: SortOrder
    documentType?: SortOrder
    description?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DigitalIDCreateNestedManyWithoutUserInput = {
    create?: XOR<DigitalIDCreateWithoutUserInput, DigitalIDUncheckedCreateWithoutUserInput> | DigitalIDCreateWithoutUserInput[] | DigitalIDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DigitalIDCreateOrConnectWithoutUserInput | DigitalIDCreateOrConnectWithoutUserInput[]
    createMany?: DigitalIDCreateManyUserInputEnvelope
    connect?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
  }

  export type LocationHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<LocationHistoryCreateWithoutUserInput, LocationHistoryUncheckedCreateWithoutUserInput> | LocationHistoryCreateWithoutUserInput[] | LocationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationHistoryCreateOrConnectWithoutUserInput | LocationHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LocationHistoryCreateManyUserInputEnvelope
    connect?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutUserInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type EmergencyAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
  }

  export type EmergencyContactCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type TripPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type UserNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
  }

  export type DigitalIDUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DigitalIDCreateWithoutUserInput, DigitalIDUncheckedCreateWithoutUserInput> | DigitalIDCreateWithoutUserInput[] | DigitalIDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DigitalIDCreateOrConnectWithoutUserInput | DigitalIDCreateOrConnectWithoutUserInput[]
    createMany?: DigitalIDCreateManyUserInputEnvelope
    connect?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
  }

  export type LocationHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LocationHistoryCreateWithoutUserInput, LocationHistoryUncheckedCreateWithoutUserInput> | LocationHistoryCreateWithoutUserInput[] | LocationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationHistoryCreateOrConnectWithoutUserInput | LocationHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LocationHistoryCreateManyUserInputEnvelope
    connect?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type EmergencyAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
  }

  export type EmergencyContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type TripPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type UserNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DigitalIDUpdateManyWithoutUserNestedInput = {
    create?: XOR<DigitalIDCreateWithoutUserInput, DigitalIDUncheckedCreateWithoutUserInput> | DigitalIDCreateWithoutUserInput[] | DigitalIDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DigitalIDCreateOrConnectWithoutUserInput | DigitalIDCreateOrConnectWithoutUserInput[]
    upsert?: DigitalIDUpsertWithWhereUniqueWithoutUserInput | DigitalIDUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DigitalIDCreateManyUserInputEnvelope
    set?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    disconnect?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    delete?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    connect?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    update?: DigitalIDUpdateWithWhereUniqueWithoutUserInput | DigitalIDUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DigitalIDUpdateManyWithWhereWithoutUserInput | DigitalIDUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DigitalIDScalarWhereInput | DigitalIDScalarWhereInput[]
  }

  export type LocationHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LocationHistoryCreateWithoutUserInput, LocationHistoryUncheckedCreateWithoutUserInput> | LocationHistoryCreateWithoutUserInput[] | LocationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationHistoryCreateOrConnectWithoutUserInput | LocationHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LocationHistoryUpsertWithWhereUniqueWithoutUserInput | LocationHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LocationHistoryCreateManyUserInputEnvelope
    set?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    disconnect?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    delete?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    connect?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    update?: LocationHistoryUpdateWithWhereUniqueWithoutUserInput | LocationHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LocationHistoryUpdateManyWithWhereWithoutUserInput | LocationHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LocationHistoryScalarWhereInput | LocationHistoryScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutUserInput | IncidentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutUserInput | IncidentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutUserInput | IncidentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type EmergencyAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyAlertUpsertWithWhereUniqueWithoutUserInput | EmergencyAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    set?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    disconnect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    delete?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    update?: EmergencyAlertUpdateWithWhereUniqueWithoutUserInput | EmergencyAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyAlertUpdateManyWithWhereWithoutUserInput | EmergencyAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
  }

  export type EmergencyContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutUserInput | EmergencyContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutUserInput | EmergencyContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutUserInput | EmergencyContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type TripPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutUserInput | TripPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutUserInput | TripPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutUserInput | TripPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type UserNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    upsert?: UserNotificationUpsertWithWhereUniqueWithoutUserInput | UserNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    set?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    disconnect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    delete?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    update?: UserNotificationUpdateWithWhereUniqueWithoutUserInput | UserNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNotificationUpdateManyWithWhereWithoutUserInput | UserNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
  }

  export type DigitalIDUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DigitalIDCreateWithoutUserInput, DigitalIDUncheckedCreateWithoutUserInput> | DigitalIDCreateWithoutUserInput[] | DigitalIDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DigitalIDCreateOrConnectWithoutUserInput | DigitalIDCreateOrConnectWithoutUserInput[]
    upsert?: DigitalIDUpsertWithWhereUniqueWithoutUserInput | DigitalIDUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DigitalIDCreateManyUserInputEnvelope
    set?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    disconnect?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    delete?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    connect?: DigitalIDWhereUniqueInput | DigitalIDWhereUniqueInput[]
    update?: DigitalIDUpdateWithWhereUniqueWithoutUserInput | DigitalIDUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DigitalIDUpdateManyWithWhereWithoutUserInput | DigitalIDUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DigitalIDScalarWhereInput | DigitalIDScalarWhereInput[]
  }

  export type LocationHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LocationHistoryCreateWithoutUserInput, LocationHistoryUncheckedCreateWithoutUserInput> | LocationHistoryCreateWithoutUserInput[] | LocationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationHistoryCreateOrConnectWithoutUserInput | LocationHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LocationHistoryUpsertWithWhereUniqueWithoutUserInput | LocationHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LocationHistoryCreateManyUserInputEnvelope
    set?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    disconnect?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    delete?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    connect?: LocationHistoryWhereUniqueInput | LocationHistoryWhereUniqueInput[]
    update?: LocationHistoryUpdateWithWhereUniqueWithoutUserInput | LocationHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LocationHistoryUpdateManyWithWhereWithoutUserInput | LocationHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LocationHistoryScalarWhereInput | LocationHistoryScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutUserInput | IncidentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutUserInput | IncidentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutUserInput | IncidentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyAlertUpsertWithWhereUniqueWithoutUserInput | EmergencyAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    set?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    disconnect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    delete?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    update?: EmergencyAlertUpdateWithWhereUniqueWithoutUserInput | EmergencyAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyAlertUpdateManyWithWhereWithoutUserInput | EmergencyAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
  }

  export type EmergencyContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutUserInput | EmergencyContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutUserInput | EmergencyContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutUserInput | EmergencyContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type TripPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutUserInput | TripPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutUserInput | TripPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutUserInput | TripPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type UserNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    upsert?: UserNotificationUpsertWithWhereUniqueWithoutUserInput | UserNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    set?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    disconnect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    delete?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    update?: UserNotificationUpdateWithWhereUniqueWithoutUserInput | UserNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNotificationUpdateManyWithWhereWithoutUserInput | UserNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDigitalIDsInput = {
    create?: XOR<UserCreateWithoutDigitalIDsInput, UserUncheckedCreateWithoutDigitalIDsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDigitalIDsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDigitalIDsNestedInput = {
    create?: XOR<UserCreateWithoutDigitalIDsInput, UserUncheckedCreateWithoutDigitalIDsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDigitalIDsInput
    upsert?: UserUpsertWithoutDigitalIDsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDigitalIDsInput, UserUpdateWithoutDigitalIDsInput>, UserUncheckedUpdateWithoutDigitalIDsInput>
  }

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type UserCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumIncidentTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncidentType
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type UserUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    upsert?: UserUpsertWithoutIncidentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsInput, UserUpdateWithoutIncidentsInput>, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserCreateNestedOneWithoutEmergencyAlertsInput = {
    create?: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AlertStatus
  }

  export type UserUpdateOneRequiredWithoutEmergencyAlertsNestedInput = {
    create?: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyAlertsInput
    upsert?: UserUpsertWithoutEmergencyAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergencyAlertsInput, UserUpdateWithoutEmergencyAlertsInput>, UserUncheckedUpdateWithoutEmergencyAlertsInput>
  }

  export type UserCreateNestedOneWithoutEmergencyContactsInput = {
    create?: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyContactsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmergencyContactsNestedInput = {
    create?: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyContactsInput
    upsert?: UserUpsertWithoutEmergencyContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergencyContactsInput, UserUpdateWithoutEmergencyContactsInput>, UserUncheckedUpdateWithoutEmergencyContactsInput>
  }

  export type UserCreateNestedOneWithoutTripPlansInput = {
    create?: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripPlansInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTripPlansNestedInput = {
    create?: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripPlansInput
    upsert?: UserUpsertWithoutTripPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripPlansInput, UserUpdateWithoutTripPlansInput>, UserUncheckedUpdateWithoutTripPlansInput>
  }

  export type SafetyNotificationCreatetargetUserTypesInput = {
    set: string[]
  }

  export type UserNotificationCreateNestedManyWithoutNotificationInput = {
    create?: XOR<UserNotificationCreateWithoutNotificationInput, UserNotificationUncheckedCreateWithoutNotificationInput> | UserNotificationCreateWithoutNotificationInput[] | UserNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutNotificationInput | UserNotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: UserNotificationCreateManyNotificationInputEnvelope
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
  }

  export type UserNotificationUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<UserNotificationCreateWithoutNotificationInput, UserNotificationUncheckedCreateWithoutNotificationInput> | UserNotificationCreateWithoutNotificationInput[] | UserNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutNotificationInput | UserNotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: UserNotificationCreateManyNotificationInputEnvelope
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
  }

  export type SafetyNotificationUpdatetargetUserTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserNotificationUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<UserNotificationCreateWithoutNotificationInput, UserNotificationUncheckedCreateWithoutNotificationInput> | UserNotificationCreateWithoutNotificationInput[] | UserNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutNotificationInput | UserNotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: UserNotificationUpsertWithWhereUniqueWithoutNotificationInput | UserNotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: UserNotificationCreateManyNotificationInputEnvelope
    set?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    disconnect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    delete?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    update?: UserNotificationUpdateWithWhereUniqueWithoutNotificationInput | UserNotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: UserNotificationUpdateManyWithWhereWithoutNotificationInput | UserNotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
  }

  export type UserNotificationUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<UserNotificationCreateWithoutNotificationInput, UserNotificationUncheckedCreateWithoutNotificationInput> | UserNotificationCreateWithoutNotificationInput[] | UserNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutNotificationInput | UserNotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: UserNotificationUpsertWithWhereUniqueWithoutNotificationInput | UserNotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: UserNotificationCreateManyNotificationInputEnvelope
    set?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    disconnect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    delete?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    update?: UserNotificationUpdateWithWhereUniqueWithoutNotificationInput | UserNotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: UserNotificationUpdateManyWithWhereWithoutNotificationInput | UserNotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type SafetyNotificationCreateNestedOneWithoutUserNotificationsInput = {
    create?: XOR<SafetyNotificationCreateWithoutUserNotificationsInput, SafetyNotificationUncheckedCreateWithoutUserNotificationsInput>
    connectOrCreate?: SafetyNotificationCreateOrConnectWithoutUserNotificationsInput
    connect?: SafetyNotificationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type SafetyNotificationUpdateOneRequiredWithoutUserNotificationsNestedInput = {
    create?: XOR<SafetyNotificationCreateWithoutUserNotificationsInput, SafetyNotificationUncheckedCreateWithoutUserNotificationsInput>
    connectOrCreate?: SafetyNotificationCreateOrConnectWithoutUserNotificationsInput
    upsert?: SafetyNotificationUpsertWithoutUserNotificationsInput
    connect?: SafetyNotificationWhereUniqueInput
    update?: XOR<XOR<SafetyNotificationUpdateToOneWithWhereWithoutUserNotificationsInput, SafetyNotificationUpdateWithoutUserNotificationsInput>, SafetyNotificationUncheckedUpdateWithoutUserNotificationsInput>
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
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

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedEnumIncidentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeFilter<$PrismaModel> | $Enums.IncidentType
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DigitalIDCreateWithoutUserInput = {
    id?: string
    digitalId: string
    qrCode: string
    blockchainHash?: string | null
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalIDUncheckedCreateWithoutUserInput = {
    id?: string
    digitalId: string
    qrCode: string
    blockchainHash?: string | null
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalIDCreateOrConnectWithoutUserInput = {
    where: DigitalIDWhereUniqueInput
    create: XOR<DigitalIDCreateWithoutUserInput, DigitalIDUncheckedCreateWithoutUserInput>
  }

  export type DigitalIDCreateManyUserInputEnvelope = {
    data: DigitalIDCreateManyUserInput | DigitalIDCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LocationHistoryCreateWithoutUserInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    address?: string | null
    batteryLevel?: number | null
    isEmergency?: boolean
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LocationHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    address?: string | null
    batteryLevel?: number | null
    isEmergency?: boolean
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LocationHistoryCreateOrConnectWithoutUserInput = {
    where: LocationHistoryWhereUniqueInput
    create: XOR<LocationHistoryCreateWithoutUserInput, LocationHistoryUncheckedCreateWithoutUserInput>
  }

  export type LocationHistoryCreateManyUserInputEnvelope = {
    data: LocationHistoryCreateManyUserInput | LocationHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutUserInput = {
    id?: string
    incidentNumber: string
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    priority?: $Enums.Priority
    status?: string
    assignedTo?: string | null
    reportedBy?: string | null
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    efirGenerated?: boolean
    efirNumber?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUncheckedCreateWithoutUserInput = {
    id?: string
    incidentNumber: string
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    priority?: $Enums.Priority
    status?: string
    assignedTo?: string | null
    reportedBy?: string | null
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    efirGenerated?: boolean
    efirNumber?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutUserInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput>
  }

  export type IncidentCreateManyUserInputEnvelope = {
    data: IncidentCreateManyUserInput | IncidentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyAlertCreateWithoutUserInput = {
    id?: string
    alertType?: string
    message?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    status?: $Enums.AlertStatus
    priority?: $Enums.Priority
    respondedBy?: string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertUncheckedCreateWithoutUserInput = {
    id?: string
    alertType?: string
    message?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    status?: $Enums.AlertStatus
    priority?: $Enums.Priority
    respondedBy?: string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertCreateOrConnectWithoutUserInput = {
    where: EmergencyAlertWhereUniqueInput
    create: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput>
  }

  export type EmergencyAlertCreateManyUserInputEnvelope = {
    data: EmergencyAlertCreateManyUserInput | EmergencyAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyContactCreateWithoutUserInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    relation: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    relation: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactCreateOrConnectWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    create: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactCreateManyUserInputEnvelope = {
    data: EmergencyContactCreateManyUserInput | EmergencyContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripPlanCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    destinations: JsonNullValueInput | InputJsonValue
    status?: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    destinations: JsonNullValueInput | InputJsonValue
    status?: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanCreateOrConnectWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput>
  }

  export type TripPlanCreateManyUserInputEnvelope = {
    data: TripPlanCreateManyUserInput | TripPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutUserInput = {
    id?: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType?: string | null
    description?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType?: string | null
    description?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserNotificationCreateWithoutUserInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    notification: SafetyNotificationCreateNestedOneWithoutUserNotificationsInput
  }

  export type UserNotificationUncheckedCreateWithoutUserInput = {
    id?: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserNotificationCreateOrConnectWithoutUserInput = {
    where: UserNotificationWhereUniqueInput
    create: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput>
  }

  export type UserNotificationCreateManyUserInputEnvelope = {
    data: UserNotificationCreateManyUserInput | UserNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DigitalIDUpsertWithWhereUniqueWithoutUserInput = {
    where: DigitalIDWhereUniqueInput
    update: XOR<DigitalIDUpdateWithoutUserInput, DigitalIDUncheckedUpdateWithoutUserInput>
    create: XOR<DigitalIDCreateWithoutUserInput, DigitalIDUncheckedCreateWithoutUserInput>
  }

  export type DigitalIDUpdateWithWhereUniqueWithoutUserInput = {
    where: DigitalIDWhereUniqueInput
    data: XOR<DigitalIDUpdateWithoutUserInput, DigitalIDUncheckedUpdateWithoutUserInput>
  }

  export type DigitalIDUpdateManyWithWhereWithoutUserInput = {
    where: DigitalIDScalarWhereInput
    data: XOR<DigitalIDUpdateManyMutationInput, DigitalIDUncheckedUpdateManyWithoutUserInput>
  }

  export type DigitalIDScalarWhereInput = {
    AND?: DigitalIDScalarWhereInput | DigitalIDScalarWhereInput[]
    OR?: DigitalIDScalarWhereInput[]
    NOT?: DigitalIDScalarWhereInput | DigitalIDScalarWhereInput[]
    id?: StringFilter<"DigitalID"> | string
    userId?: StringFilter<"DigitalID"> | string
    digitalId?: StringFilter<"DigitalID"> | string
    qrCode?: StringFilter<"DigitalID"> | string
    blockchainHash?: StringNullableFilter<"DigitalID"> | string | null
    issuedAt?: DateTimeFilter<"DigitalID"> | Date | string
    expiresAt?: DateTimeNullableFilter<"DigitalID"> | Date | string | null
    isActive?: BoolFilter<"DigitalID"> | boolean
    verificationData?: JsonNullableFilter<"DigitalID">
    createdAt?: DateTimeFilter<"DigitalID"> | Date | string
    updatedAt?: DateTimeFilter<"DigitalID"> | Date | string
  }

  export type LocationHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: LocationHistoryWhereUniqueInput
    update: XOR<LocationHistoryUpdateWithoutUserInput, LocationHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<LocationHistoryCreateWithoutUserInput, LocationHistoryUncheckedCreateWithoutUserInput>
  }

  export type LocationHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: LocationHistoryWhereUniqueInput
    data: XOR<LocationHistoryUpdateWithoutUserInput, LocationHistoryUncheckedUpdateWithoutUserInput>
  }

  export type LocationHistoryUpdateManyWithWhereWithoutUserInput = {
    where: LocationHistoryScalarWhereInput
    data: XOR<LocationHistoryUpdateManyMutationInput, LocationHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type LocationHistoryScalarWhereInput = {
    AND?: LocationHistoryScalarWhereInput | LocationHistoryScalarWhereInput[]
    OR?: LocationHistoryScalarWhereInput[]
    NOT?: LocationHistoryScalarWhereInput | LocationHistoryScalarWhereInput[]
    id?: StringFilter<"LocationHistory"> | string
    userId?: StringFilter<"LocationHistory"> | string
    latitude?: FloatFilter<"LocationHistory"> | number
    longitude?: FloatFilter<"LocationHistory"> | number
    accuracy?: FloatNullableFilter<"LocationHistory"> | number | null
    altitude?: FloatNullableFilter<"LocationHistory"> | number | null
    heading?: FloatNullableFilter<"LocationHistory"> | number | null
    speed?: FloatNullableFilter<"LocationHistory"> | number | null
    address?: StringNullableFilter<"LocationHistory"> | string | null
    batteryLevel?: IntNullableFilter<"LocationHistory"> | number | null
    isEmergency?: BoolFilter<"LocationHistory"> | boolean
    timestamp?: DateTimeFilter<"LocationHistory"> | Date | string
    createdAt?: DateTimeFilter<"LocationHistory"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutUserInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutUserInput, IncidentUncheckedUpdateWithoutUserInput>
    create: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutUserInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutUserInput, IncidentUncheckedUpdateWithoutUserInput>
  }

  export type IncidentUpdateManyWithWhereWithoutUserInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutUserInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    incidentNumber?: StringFilter<"Incident"> | string
    userId?: StringNullableFilter<"Incident"> | string | null
    incidentType?: EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    latitude?: FloatNullableFilter<"Incident"> | number | null
    longitude?: FloatNullableFilter<"Incident"> | number | null
    priority?: EnumPriorityFilter<"Incident"> | $Enums.Priority
    status?: StringFilter<"Incident"> | string
    assignedTo?: StringNullableFilter<"Incident"> | string | null
    reportedBy?: StringNullableFilter<"Incident"> | string | null
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    efirGenerated?: BoolFilter<"Incident"> | boolean
    efirNumber?: StringNullableFilter<"Incident"> | string | null
    attachments?: JsonNullableFilter<"Incident">
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type EmergencyAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyAlertWhereUniqueInput
    update: XOR<EmergencyAlertUpdateWithoutUserInput, EmergencyAlertUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput>
  }

  export type EmergencyAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyAlertWhereUniqueInput
    data: XOR<EmergencyAlertUpdateWithoutUserInput, EmergencyAlertUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyAlertUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyAlertScalarWhereInput
    data: XOR<EmergencyAlertUpdateManyMutationInput, EmergencyAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyAlertScalarWhereInput = {
    AND?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
    OR?: EmergencyAlertScalarWhereInput[]
    NOT?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
    id?: StringFilter<"EmergencyAlert"> | string
    userId?: StringFilter<"EmergencyAlert"> | string
    alertType?: StringFilter<"EmergencyAlert"> | string
    message?: StringNullableFilter<"EmergencyAlert"> | string | null
    latitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    address?: StringNullableFilter<"EmergencyAlert"> | string | null
    status?: EnumAlertStatusFilter<"EmergencyAlert"> | $Enums.AlertStatus
    priority?: EnumPriorityFilter<"EmergencyAlert"> | $Enums.Priority
    respondedBy?: StringNullableFilter<"EmergencyAlert"> | string | null
    respondedAt?: DateTimeNullableFilter<"EmergencyAlert"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"EmergencyAlert"> | Date | string | null
    metadata?: JsonNullableFilter<"EmergencyAlert">
    createdAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
  }

  export type EmergencyContactUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    update: XOR<EmergencyContactUpdateWithoutUserInput, EmergencyContactUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    data: XOR<EmergencyContactUpdateWithoutUserInput, EmergencyContactUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyContactUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyContactScalarWhereInput
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyContactScalarWhereInput = {
    AND?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    OR?: EmergencyContactScalarWhereInput[]
    NOT?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    id?: StringFilter<"EmergencyContact"> | string
    userId?: StringFilter<"EmergencyContact"> | string
    name?: StringFilter<"EmergencyContact"> | string
    phone?: StringFilter<"EmergencyContact"> | string
    email?: StringNullableFilter<"EmergencyContact"> | string | null
    relation?: StringFilter<"EmergencyContact"> | string
    isPrimary?: BoolFilter<"EmergencyContact"> | boolean
    createdAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyContact"> | Date | string
  }

  export type TripPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    update: XOR<TripPlanUpdateWithoutUserInput, TripPlanUncheckedUpdateWithoutUserInput>
    create: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput>
  }

  export type TripPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    data: XOR<TripPlanUpdateWithoutUserInput, TripPlanUncheckedUpdateWithoutUserInput>
  }

  export type TripPlanUpdateManyWithWhereWithoutUserInput = {
    where: TripPlanScalarWhereInput
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type TripPlanScalarWhereInput = {
    AND?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    OR?: TripPlanScalarWhereInput[]
    NOT?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    userId?: StringFilter<"TripPlan"> | string
    title?: StringFilter<"TripPlan"> | string
    description?: StringNullableFilter<"TripPlan"> | string | null
    startDate?: DateTimeFilter<"TripPlan"> | Date | string
    endDate?: DateTimeFilter<"TripPlan"> | Date | string
    destinations?: JsonFilter<"TripPlan">
    status?: StringFilter<"TripPlan"> | string
    isPublic?: BoolFilter<"TripPlan"> | boolean
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    mimeType?: StringFilter<"Document"> | string
    filePath?: StringFilter<"Document"> | string
    documentType?: StringNullableFilter<"Document"> | string | null
    description?: StringNullableFilter<"Document"> | string | null
    isVerified?: BoolFilter<"Document"> | boolean
    verifiedBy?: StringNullableFilter<"Document"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type UserNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserNotificationWhereUniqueInput
    update: XOR<UserNotificationUpdateWithoutUserInput, UserNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput>
  }

  export type UserNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserNotificationWhereUniqueInput
    data: XOR<UserNotificationUpdateWithoutUserInput, UserNotificationUncheckedUpdateWithoutUserInput>
  }

  export type UserNotificationUpdateManyWithWhereWithoutUserInput = {
    where: UserNotificationScalarWhereInput
    data: XOR<UserNotificationUpdateManyMutationInput, UserNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserNotificationScalarWhereInput = {
    AND?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
    OR?: UserNotificationScalarWhereInput[]
    NOT?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
    id?: StringFilter<"UserNotification"> | string
    userId?: StringFilter<"UserNotification"> | string
    notificationId?: StringFilter<"UserNotification"> | string
    isRead?: BoolFilter<"UserNotification"> | boolean
    readAt?: DateTimeNullableFilter<"UserNotification"> | Date | string | null
    createdAt?: DateTimeFilter<"UserNotification"> | Date | string
  }

  export type UserCreateWithoutDigitalIDsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDigitalIDsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDigitalIDsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDigitalIDsInput, UserUncheckedCreateWithoutDigitalIDsInput>
  }

  export type UserUpsertWithoutDigitalIDsInput = {
    update: XOR<UserUpdateWithoutDigitalIDsInput, UserUncheckedUpdateWithoutDigitalIDsInput>
    create: XOR<UserCreateWithoutDigitalIDsInput, UserUncheckedCreateWithoutDigitalIDsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDigitalIDsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDigitalIDsInput, UserUncheckedUpdateWithoutDigitalIDsInput>
  }

  export type UserUpdateWithoutDigitalIDsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDigitalIDsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLocationsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIncidentsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncidentsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
  }

  export type UserUpsertWithoutIncidentsInput = {
    update: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmergencyAlertsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmergencyAlertsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmergencyAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
  }

  export type UserUpsertWithoutEmergencyAlertsInput = {
    update: XOR<UserUpdateWithoutEmergencyAlertsInput, UserUncheckedUpdateWithoutEmergencyAlertsInput>
    create: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergencyAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergencyAlertsInput, UserUncheckedUpdateWithoutEmergencyAlertsInput>
  }

  export type UserUpdateWithoutEmergencyAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergencyAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmergencyContactsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmergencyContactsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmergencyContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
  }

  export type UserUpsertWithoutEmergencyContactsInput = {
    update: XOR<UserUpdateWithoutEmergencyContactsInput, UserUncheckedUpdateWithoutEmergencyContactsInput>
    create: XOR<UserCreateWithoutEmergencyContactsInput, UserUncheckedCreateWithoutEmergencyContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergencyContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergencyContactsInput, UserUncheckedUpdateWithoutEmergencyContactsInput>
  }

  export type UserUpdateWithoutEmergencyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergencyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTripPlansInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripPlansInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
  }

  export type UserUpsertWithoutTripPlansInput = {
    update: XOR<UserUpdateWithoutTripPlansInput, UserUncheckedUpdateWithoutTripPlansInput>
    create: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripPlansInput, UserUncheckedUpdateWithoutTripPlansInput>
  }

  export type UserUpdateWithoutTripPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserNotificationCreateWithoutNotificationInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type UserNotificationUncheckedCreateWithoutNotificationInput = {
    id?: string
    userId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserNotificationCreateOrConnectWithoutNotificationInput = {
    where: UserNotificationWhereUniqueInput
    create: XOR<UserNotificationCreateWithoutNotificationInput, UserNotificationUncheckedCreateWithoutNotificationInput>
  }

  export type UserNotificationCreateManyNotificationInputEnvelope = {
    data: UserNotificationCreateManyNotificationInput | UserNotificationCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type UserNotificationUpsertWithWhereUniqueWithoutNotificationInput = {
    where: UserNotificationWhereUniqueInput
    update: XOR<UserNotificationUpdateWithoutNotificationInput, UserNotificationUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserNotificationCreateWithoutNotificationInput, UserNotificationUncheckedCreateWithoutNotificationInput>
  }

  export type UserNotificationUpdateWithWhereUniqueWithoutNotificationInput = {
    where: UserNotificationWhereUniqueInput
    data: XOR<UserNotificationUpdateWithoutNotificationInput, UserNotificationUncheckedUpdateWithoutNotificationInput>
  }

  export type UserNotificationUpdateManyWithWhereWithoutNotificationInput = {
    where: UserNotificationScalarWhereInput
    data: XOR<UserNotificationUpdateManyMutationInput, UserNotificationUncheckedUpdateManyWithoutNotificationInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type SafetyNotificationCreateWithoutUserNotificationsInput = {
    id?: string
    title: string
    message: string
    notificationType: string
    priority?: $Enums.Priority
    targetUserTypes?: SafetyNotificationCreatetargetUserTypesInput | string[]
    targetLocation?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafetyNotificationUncheckedCreateWithoutUserNotificationsInput = {
    id?: string
    title: string
    message: string
    notificationType: string
    priority?: $Enums.Priority
    targetUserTypes?: SafetyNotificationCreatetargetUserTypesInput | string[]
    targetLocation?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafetyNotificationCreateOrConnectWithoutUserNotificationsInput = {
    where: SafetyNotificationWhereUniqueInput
    create: XOR<SafetyNotificationCreateWithoutUserNotificationsInput, SafetyNotificationUncheckedCreateWithoutUserNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SafetyNotificationUpsertWithoutUserNotificationsInput = {
    update: XOR<SafetyNotificationUpdateWithoutUserNotificationsInput, SafetyNotificationUncheckedUpdateWithoutUserNotificationsInput>
    create: XOR<SafetyNotificationCreateWithoutUserNotificationsInput, SafetyNotificationUncheckedCreateWithoutUserNotificationsInput>
    where?: SafetyNotificationWhereInput
  }

  export type SafetyNotificationUpdateToOneWithWhereWithoutUserNotificationsInput = {
    where?: SafetyNotificationWhereInput
    data: XOR<SafetyNotificationUpdateWithoutUserNotificationsInput, SafetyNotificationUncheckedUpdateWithoutUserNotificationsInput>
  }

  export type SafetyNotificationUpdateWithoutUserNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notificationType?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    targetUserTypes?: SafetyNotificationUpdatetargetUserTypesInput | string[]
    targetLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyNotificationUncheckedUpdateWithoutUserNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notificationType?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    targetUserTypes?: SafetyNotificationUpdatetargetUserTypesInput | string[]
    targetLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDCreateNestedManyWithoutUserInput
    locations?: LocationHistoryCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    notifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email: string
    password: string
    name: string
    userType?: $Enums.UserType
    phone?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    address?: string | null
    profileImage?: string | null
    digitalId?: string | null
    safetyScore?: number | null
    isActive?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    digitalIDs?: DigitalIDUncheckedCreateNestedManyWithoutUserInput
    locations?: LocationHistoryUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    notifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    digitalId?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    digitalIDs?: DigitalIDUncheckedUpdateManyWithoutUserNestedInput
    locations?: LocationHistoryUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    notifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DigitalIDCreateManyUserInput = {
    id?: string
    digitalId: string
    qrCode: string
    blockchainHash?: string | null
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationHistoryCreateManyUserInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    altitude?: number | null
    heading?: number | null
    speed?: number | null
    address?: string | null
    batteryLevel?: number | null
    isEmergency?: boolean
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type IncidentCreateManyUserInput = {
    id?: string
    incidentNumber: string
    incidentType: $Enums.IncidentType
    title: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    priority?: $Enums.Priority
    status?: string
    assignedTo?: string | null
    reportedBy?: string | null
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    efirGenerated?: boolean
    efirNumber?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertCreateManyUserInput = {
    id?: string
    alertType?: string
    message?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    status?: $Enums.AlertStatus
    priority?: $Enums.Priority
    respondedBy?: string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactCreateManyUserInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    relation: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    destinations: JsonNullValueInput | InputJsonValue
    status?: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyUserInput = {
    id?: string
    fileName: string
    originalName: string
    fileSize: number
    mimeType: string
    filePath: string
    documentType?: string | null
    description?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNotificationCreateManyUserInput = {
    id?: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DigitalIDUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalIDUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalIDUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    digitalId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    blockchainHash?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    heading?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    batteryLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isEmergency?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentNumber?: StringFieldUpdateOperationsInput | string
    incidentType?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    reportedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    efirGenerated?: BoolFieldUpdateOperationsInput | boolean
    efirNumber?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relation?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    documentType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: SafetyNotificationUpdateOneRequiredWithoutUserNotificationsNestedInput
  }

  export type UserNotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationCreateManyNotificationInput = {
    id?: string
    userId: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserNotificationUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type UserNotificationUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SafetyNotificationCountOutputTypeDefaultArgs instead
     */
    export type SafetyNotificationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SafetyNotificationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DigitalIDDefaultArgs instead
     */
    export type DigitalIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DigitalIDDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationHistoryDefaultArgs instead
     */
    export type LocationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RiskZoneDefaultArgs instead
     */
    export type RiskZoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiskZoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IncidentDefaultArgs instead
     */
    export type IncidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncidentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmergencyAlertDefaultArgs instead
     */
    export type EmergencyAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmergencyAlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmergencyContactDefaultArgs instead
     */
    export type EmergencyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmergencyContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripPlanDefaultArgs instead
     */
    export type TripPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SafetyNotificationDefaultArgs instead
     */
    export type SafetyNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SafetyNotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserNotificationDefaultArgs instead
     */
    export type UserNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserNotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentDefaultArgs instead
     */
    export type DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalyticsDefaultArgs instead
     */
    export type AnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalyticsDefaultArgs<ExtArgs>

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