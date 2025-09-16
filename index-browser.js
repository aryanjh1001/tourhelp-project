
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('@prisma/client/runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.DigitalIDScalarFieldEnum = {
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

exports.Prisma.LocationHistoryScalarFieldEnum = {
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

exports.Prisma.RiskZoneScalarFieldEnum = {
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

exports.Prisma.IncidentScalarFieldEnum = {
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

exports.Prisma.EmergencyAlertScalarFieldEnum = {
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

exports.Prisma.EmergencyContactScalarFieldEnum = {
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

exports.Prisma.TripPlanScalarFieldEnum = {
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

exports.Prisma.SafetyNotificationScalarFieldEnum = {
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

exports.Prisma.UserNotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  notificationId: 'notificationId',
  isRead: 'isRead',
  readAt: 'readAt',
  createdAt: 'createdAt'
};

exports.Prisma.DocumentScalarFieldEnum = {
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

exports.Prisma.AnalyticsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  metric: 'metric',
  value: 'value',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserType = exports.$Enums.UserType = {
  TOURIST: 'TOURIST',
  POLICE: 'POLICE',
  ADMIN: 'ADMIN',
  TOURISM_DEPT: 'TOURISM_DEPT'
};

exports.RiskLevel = exports.$Enums.RiskLevel = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.IncidentType = exports.$Enums.IncidentType = {
  MISSING_PERSON: 'MISSING_PERSON',
  MEDICAL_EMERGENCY: 'MEDICAL_EMERGENCY',
  ACCIDENT: 'ACCIDENT',
  CRIME: 'CRIME',
  NATURAL_DISASTER: 'NATURAL_DISASTER',
  HARASSMENT: 'HARASSMENT',
  THEFT: 'THEFT',
  OTHER: 'OTHER'
};

exports.Priority = exports.$Enums.Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.AlertStatus = exports.$Enums.AlertStatus = {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
