import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Phone, 
  Settings, 
  LogOut,
  Heart,
  Navigation,
  Clock,
  Users,
  QrCode,
  Camera
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User } from '../App';
import { HomePage } from './home-page';
import { DigitalIdCard } from './digital-id-card';
import { EmergencyPanel } from './emergency-panel';
import { SafetyAlerts } from './safety-alerts';
import { LocationTracking } from './location-tracking';
import { TripPlanner } from './trip-planner';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TouristDashboardProps {
  user: User;
  onLogout: () => void;
}

export function TouristDashboard({ user, onLogout }: TouristDashboardProps) {
  const [activeTab, setActiveTab] = useState('home');
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [lastActivity, setLastActivity] = useState(new Date());

  useEffect(() => {
    // Update last activity every 30 seconds
    const interval = setInterval(() => {
      setLastActivity(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleEmergencyPanic = () => {
    setIsEmergencyMode(true);
    toast.error('EMERGENCY ALERT SENT! Help is on the way.');
    
    // Simulate emergency response
    setTimeout(() => {
      toast.success('Emergency contacts and nearest police station have been notified.');
    }, 2000);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  if (isEmergencyMode) {
    return <EmergencyPanel user={user} onCancel={() => setIsEmergencyMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">TourHelp</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant={user.safetyScore! >= 80 ? "default" : user.safetyScore! >= 60 ? "secondary" : "destructive"}>
                Safety Score: {user.safetyScore}%
              </Badge>
              
              <Avatar>
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user.name.split(' ')[0]}!</h2>
          <p className="text-gray-600">Stay safe and enjoy your journey</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="digital-id">Digital ID</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="trip">Trip Plan</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomePage user={user} onNavigateToSection={setActiveTab} />
          </TabsContent>

          <TabsContent value="digital-id">
            <DigitalIdCard user={user} />
          </TabsContent>

          <TabsContent value="location">
            <LocationTracking user={user} />
          </TabsContent>

          <TabsContent value="trip">
            <TripPlanner user={user} />
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      value={user.name} 
                      readOnly 
                      className="w-full p-2 border rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      value={user.email} 
                      readOnly 
                      className="w-full p-2 border rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Digital ID</label>
                    <input 
                      type="text" 
                      value={user.digitalId} 
                      readOnly 
                      className="w-full p-2 border rounded-md bg-gray-50"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Location Tracking</span>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emergency Alerts</span>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Sharing</span>
                    <Button variant="outline" size="sm">Limited</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Notifications</span>
                    <Button variant="outline" size="sm">All</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}