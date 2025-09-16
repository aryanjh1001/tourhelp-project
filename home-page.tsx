import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Phone, 
  Users,
  Bell,
  Navigation,
  Clock,
  Heart,
  Activity,
  Zap,
  CheckCircle,
  TrendingUp,
  Eye,
  QrCode
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  user: User;
  onNavigateToSection: (section: string) => void;
}

export function HomePage({ user, onNavigateToSection }: HomePageProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [emergencyAlerts, setEmergencyAlerts] = useState(2);
  const [nearbyTourists, setNearbyTourists] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'emergency':
        toast.error('Emergency alert activated! Help is on the way.');
        break;
      case 'share-location':
        toast.success('Location shared with emergency contacts');
        break;
      case 'find-help':
        toast.info('Showing nearby help centers and guides');
        break;
      case 'safety-check':
        toast.success('Safety check-in recorded');
        break;
      default:
        toast.info(`${action} feature activated`);
    }
  };

  // Tourist-specific dashboard
  if (user.type === 'tourist') {
    return (
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="relative">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {getGreeting()}, {user.name.split(' ')[0]}!
                  </h2>
                  <p className="text-blue-100 mb-4">
                    अतिथि देवो भव: - You are safe with TourHelp
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentTime.toLocaleTimeString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {user.location?.address}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{user.safetyScore}%</div>
                  <div className="text-blue-100 text-sm">Safety Score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            className="h-24 bg-red-600 hover:bg-red-700 text-white"
            onClick={() => handleQuickAction('emergency')}
          >
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
              <div>Emergency</div>
              <div className="text-xs opacity-90">Press for help</div>
            </div>
          </Button>

          <Button 
            variant="outline" 
            className="h-24"
            onClick={() => handleQuickAction('share-location')}
          >
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <div>Share Location</div>
              <div className="text-xs text-gray-500">Send to contacts</div>
            </div>
          </Button>

          <Button 
            variant="outline" 
            className="h-24"
            onClick={() => handleQuickAction('find-help')}
          >
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div>Find Help</div>
              <div className="text-xs text-gray-500">Nearby assistance</div>
            </div>
          </Button>

          <Button 
            variant="outline" 
            className="h-24"
            onClick={() => handleQuickAction('safety-check')}
          >
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <div>Safety Check</div>
              <div className="text-xs text-gray-500">I'm safe</div>
            </div>
          </Button>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Badge variant="default" className="bg-green-600 text-white">
                  <Activity className="w-3 h-3 mr-1" />
                  All Safe
                </Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Location Status</span>
                  <span className="text-green-600 font-medium">Safe Zone</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Check-in</span>
                  <span className="text-gray-600">2 minutes ago</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Signal</span>
                  <span className="text-green-600 font-medium">Strong</span>
                </div>
                <div className="flex justify-between">
                  <span>Battery Level</span>
                  <span className="text-green-600 font-medium">85%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Navigation className="w-5 h-5 mr-2 text-blue-600" />
                Today's Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Distance Traveled</span>
                  <span className="font-medium">15.2 km</span>
                </div>
                <div className="flex justify-between">
                  <span>Places Visited</span>
                  <span className="font-medium">3 locations</span>
                </div>
                <div className="flex justify-between">
                  <span>Safety Checks</span>
                  <span className="font-medium">5 completed</span>
                </div>
                <div className="flex justify-between">
                  <span>Photos Taken</span>
                  <span className="font-medium">24 photos</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => onNavigateToSection('trip')}
              >
                View Full Journey
              </Button>
            </CardContent>
          </Card>

          {/* Nearby Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-600" />
                Nearby Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Other Tourists</span>
                  <span className="font-medium">{nearbyTourists} nearby</span>
                </div>
                <div className="flex justify-between">
                  <span>Police Station</span>
                  <span className="text-green-600 font-medium">800m away</span>
                </div>
                <div className="flex justify-between">
                  <span>Hospital</span>
                  <span className="text-blue-600 font-medium">1.2km away</span>
                </div>
                <div className="flex justify-between">
                  <span>Tourist Guide</span>
                  <span className="text-orange-600 font-medium">Available</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => onNavigateToSection('location')}
              >
                View Map
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigateToSection('digital-id')}>
            <CardContent className="p-6 text-center">
              <QrCode className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Digital ID</h3>
              <p className="text-sm text-gray-600">Access your secure digital identity</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigateToSection('location')}>
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location Tracking</h3>
              <p className="text-sm text-gray-600">Real-time location and safety zones</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigateToSection('trip')}>
            <CardContent className="p-6 text-center">
              <Navigation className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trip Planner</h3>
              <p className="text-sm text-gray-600">Plan your safe journey</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Admin/Police dashboard
  return (
    <div className="space-y-6">
      {/* Command Center Header */}
      <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Command Center Dashboard
              </h2>
              <p className="text-slate-300 mb-4">
                Real-time monitoring and incident management
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  247 Active Tourists
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.8%</div>
              <div className="text-slate-300 text-sm">Safety Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Tourists</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600">+12% from yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Alerts</p>
                <p className="text-2xl font-bold">{emergencyAlerts}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <Clock className="w-4 h-4 text-gray-600 mr-1" />
              <span className="text-gray-600">Last: 2 hours ago</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Response Time</p>
                <p className="text-2xl font-bold">4.2m</p>
              </div>
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600">-30s improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Risk Zones</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <Eye className="w-4 h-4 text-blue-600 mr-1" />
              <span className="text-blue-600">Actively monitored</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigateToSection('tourists')}>
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Tourist Monitoring</h3>
            <p className="text-sm text-gray-600">Real-time tourist tracking and safety</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigateToSection('incidents')}>
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Incident Management</h3>
            <p className="text-sm text-gray-600">Handle emergencies and reports</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigateToSection('zones')}>
          <CardContent className="p-6 text-center">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Risk Zone Management</h3>
            <p className="text-sm text-gray-600">Monitor and manage danger areas</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}