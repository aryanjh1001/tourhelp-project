"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/dashboard', auth_1.authenticateToken, auth_1.adminOrPolice, (req, res) => {
    res.json({ message: 'Admin dashboard' });
});
exports.default = router;
//# sourceMappingURL=admin.js.map