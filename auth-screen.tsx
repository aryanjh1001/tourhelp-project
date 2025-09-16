import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Shield, Users, UserCheck, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User, UserType } from '../App';

interface AuthScreenProps {
  onLogin: (user: User) => void;
  onBack?: () => void;
}

export function AuthScreen({ onLogin, onBack }: AuthScreenProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string, userType: UserType) => {
    setIsLoading(true);
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on type
    const mockUsers = {
      tourist: {
        id: 'tourist_1',
        name: 'Priya Sharma',
        email,
        type: 'tourist' as UserType,
        digitalId: 'TH-2025-001234',
        safetyScore: 85,
        location: {
          lat: 26.1445,
          lng: 91.7362,
          address: 'Guwahati, Assam, India'
        },
        emergencyContacts: [
          { name: 'Raj Sharma', phone: '+91-9876543210', relation: 'Husband' },
          { name: 'Dr. Neha Patel', phone: '+91-9876543211', relation: 'Family Doctor' }
        ]
      },
      admin: {
        id: 'admin_1',
        name: 'Rajesh Kumar',
        email,
        type: 'admin' as UserType
      },
      police: {
        id: 'police_1',
        name: 'Inspector Singh',
        email,
        type: 'police' as UserType
      }
    };

    const userData = mockUsers[userType];
    onLogin(userData);
    toast.success(`Welcome to TourHelp, ${userData.name}!`);
    setIsLoading(false);
  };

  const handleRegister = async (formData: any) => {
    setIsLoading(true);
    
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      id: `tourist_${Date.now()}`,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      type: 'tourist',
      digitalId: `TH-2025-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      safetyScore: 75,
      location: {
        lat: 26.1445,
        lng: 91.7362,
        address: 'Entry Point, Airport'
      },
      emergencyContacts: [
        { name: formData.emergencyName, phone: formData.emergencyPhone, relation: formData.emergencyRelation }
      ]
    };

    onLogin(newUser);
    toast.success('Registration successful! Your Digital Tourist ID has been generated.');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {onBack && (
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 p-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        )}
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">TourHelp</h1>
          </div>
          <p className="text-gray-600">Smart Tourist Safety Monitoring System</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <LoginForm onLogin={handleLogin} isLoading={isLoading} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create Digital Tourist ID</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RegistrationForm onRegister={handleRegister} isLoading={isLoading} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Need help? Contact tourism support at +91-1800-XXX-XXXX
          </p>
        </div>
      </div>
    </div>
  );
}

function LoginForm({ onLogin, isLoading }: { onLogin: (email: string, password: string, type: UserType) => void; isLoading: boolean }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('tourist');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    onLogin(email, password, userType);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="userType">Login as</Label>
        <Select value={userType} onValueChange={(value: UserType) => setUserType(value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tourist">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Tourist
              </div>
            </SelectItem>
            <SelectItem value="admin">
              <div className="flex items-center">
                <UserCheck className="w-4 h-4 mr-2" />
                Tourism Admin
              </div>
            </SelectItem>
            <SelectItem value="police">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Police Officer
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-2">Demo accounts:</p>
        <div className="text-xs text-gray-500 space-y-1">
          <p>Tourist: any email + password</p>
          <p>Admin/Police: any email + password</p>
        </div>
      </div>
    </form>
  );
}

function RegistrationForm({ onRegister, isLoading }: { onRegister: (data: any) => void; isLoading: boolean }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    nationality: '',
    passportNumber: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'phone', 'emergencyName', 'emergencyPhone'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    onRegister(formData);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => updateField('password', e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="+91-XXXXXXXXXX"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          id="nationality"
          value={formData.nationality}
          onChange={(e) => updateField('nationality', e.target.value)}
          placeholder="e.g., Indian"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="passportNumber">ID Number (Aadhaar/Passport)</Label>
        <Input
          id="passportNumber"
          value={formData.passportNumber}
          onChange={(e) => updateField('passportNumber', e.target.value)}
          placeholder="XXXX-XXXX-XXXX"
        />
      </div>

      <div className="border-t pt-4">
        <h4 className="mb-3">Emergency Contact *</h4>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="emergencyName">Contact Name *</Label>
            <Input
              id="emergencyName"
              value={formData.emergencyName}
              onChange={(e) => updateField('emergencyName', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyPhone">Contact Phone *</Label>
            <Input
              id="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={(e) => updateField('emergencyPhone', e.target.value)}
              placeholder="+91-XXXXXXXXXX"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyRelation">Relationship</Label>
            <Select value={formData.emergencyRelation} onValueChange={(value) => updateField('emergencyRelation', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spouse">Spouse</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="sibling">Sibling</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Creating Digital ID...' : 'Register & Generate Digital ID'}
      </Button>
    </form>
  );
}