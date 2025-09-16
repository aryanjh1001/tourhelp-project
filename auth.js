"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, userType = 'TOURIST', phone } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({
                error: 'User already exists',
                message: 'A user with this email already exists'
            });
        }
        const saltRounds = 12;
        const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                userType,
                phone,
                digitalId: userType === 'TOURIST' ? `TH${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}` : undefined
            }
        });
        const { accessToken } = (0, auth_1.generateTokens)({
            id: user.id,
            email: user.email,
            userType: user.userType
        });
        const { password: _, ...userWithoutPassword } = user;
        res.status(201).json({
            message: 'User registered successfully',
            user: userWithoutPassword,
            token: accessToken
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            error: 'Registration failed',
            message: 'An error occurred during registration'
        });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(400).json({
                error: 'Invalid credentials',
                message: 'Email or password is incorrect'
            });
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                error: 'Invalid credentials',
                message: 'Email or password is incorrect'
            });
        }
        if (!user.isActive) {
            return res.status(403).json({
                error: 'Account deactivated',
                message: 'Your account has been deactivated'
            });
        }
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        });
        const { accessToken } = (0, auth_1.generateTokens)({
            id: user.id,
            email: user.email,
            userType: user.userType
        });
        const { password: _, ...userWithoutPassword } = user;
        res.json({
            message: 'Login successful',
            user: userWithoutPassword,
            token: accessToken
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            error: 'Login failed',
            message: 'An error occurred during login'
        });
    }
});
router.get('/profile', auth_1.authenticateToken, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                userType: true,
                phone: true,
                dateOfBirth: true,
                nationality: true,
                address: true,
                profileImage: true,
                digitalId: true,
                safetyScore: true,
                isActive: true,
                emailVerified: true,
                phoneVerified: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (!user) {
            return res.status(404).json({
                error: 'User not found',
                message: 'User profile not found'
            });
        }
        res.json({
            user
        });
    }
    catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({
            error: 'Profile fetch failed',
            message: 'An error occurred while fetching profile'
        });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map