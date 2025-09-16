import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Progress } from './ui/progress';
import { 
  MapPin, 
  Navigation, 
  Shield, 
  Clock, 
  Zap,
  Eye,
  AlertTriangle,
  CheckCircle,
  Share,
  Settings
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User } from '../App';

interface LocationTrackingProps {
  user: User;
}

const mockLocationHistory = [
  {
    id: '1',
    location: 'Guwahati Airport',
    timestamp: '09:30 AM',
    status: 'safe',
    duration: '45 mins'
  },
  {
    id: '2',
    location: 'Hotel Taj Guwahati',
    timestamp: '11:15 AM',
    status: 'safe',
    duration: '2 hours'
  },
  {
    id: '3',
    location: 'Kamakhya Temple',
    timestamp: '02:30 PM',
    status: 'safe',
    duration: '1.5 hours'
  },
  {
    id: '4',
    location: 'Brahmaputra Riverfront',
    timestamp: '05:00 PM',
    status: 'current',
    duration: 'ongoing'
  }
];

const mockGeoFences = [
  {
    id: '1',
    name: 'Kaziranga National Park',
    type: 'safe_zone',
    status: 'active',
    description: 'Protected wildlife area with guided tours only'
  },
  {
    id: '2',
    name: 'Border Area - Myanmar',
    type: 'restricted',
    status: 'active',
    description: 'Restricted border zone - special permits required'
  },
  {
    id: '3',
    name: 'High Altitude Region',
    type: 'caution',
    status: 'active',
    description: 'Weather-dependent access, check conditions'
  }
];

export function LocationTracking({ user }: LocationTrackingProps) {
  const [trackingEnabled, setTrackingEnabled] = useState(true);
  const [preciseLocation, setPreciseLocation] = useState(true);
  const [shareLocation, setShareLocation] = useState(false);

  const handleToggleTracking = () => {
    setTrackingEnabled(!trackingEnabled);
    toast.success(trackingEnabled ? 'Location tracking disabled' : 'Location tracking enabled');
  };

  const handleShareLocation = () => {
    toast.success('Location sharing link generated and copied!');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-green-600';
      case 'current': return 'text-blue-600';
      case 'caution': return 'text-yellow-600';
      case 'danger': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return <CheckCircle className="w-4 h-4" />;
      case 'current': return <MapPin className="w-4 h-4" />;
      case 'caution': return <AlertTriangle className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getZoneTypeVariant = (type: string) => {
    switch (type) {
      case 'safe_zone': return 'default';
      case 'restricted': return 'destructive';
      case 'caution': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Location Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Current Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Brahmaputra Riverfront</h4>
                  <Badge variant="default">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Safe Zone
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{user.location?.address}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Coordinates</span>
                    <p className="font-mono">{user.location?.lat}, {user.location?.lng}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Updated</span>
                    <p>Just now</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Accuracy</span>
                    <p>±3 meters</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Battery Impact</span>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-green-600" />
                      <span>Low</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleShareLocation} className="flex-1">
                  <Share className="w-4 h-4 mr-2" />
                  Share Location
                </Button>
                <Button variant="outline">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tracking Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Location Tracking</span>
                <p className="text-sm text-gray-500">Enable continuous monitoring</p>
              </div>
              <Switch 
                checked={trackingEnabled} 
                onCheckedChange={handleToggleTracking}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Precise Location</span>
                <p className="text-sm text-gray-500">High accuracy GPS</p>
              </div>
              <Switch 
                checked={preciseLocation} 
                onCheckedChange={setPreciseLocation}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Family Sharing</span>
                <p className="text-sm text-gray-500">Share with emergency contacts</p>
              </div>
              <Switch 
                checked={shareLocation} 
                onCheckedChange={setShareLocation}
              />
            </div>

            <div className="pt-4 border-t">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Data Usage Today</span>
                  <span>2.3 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Battery Usage</span>
                  <span>4%</span>
                </div>
                <Progress value={15} className="w-full" />
                <p className="text-xs text-gray-500">Optimized for battery life</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Location History - Today
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockLocationHistory.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className={`${getStatusColor(item.status)}`}>
                  {getStatusIcon(item.status)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{item.location}</h4>
                    <span className="text-sm text-gray-500">{item.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600">Duration: {item.duration}</p>
                </div>

                {index < mockLocationHistory.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-8 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Geo-Fencing Zones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Geo-Fencing Zones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockGeoFences.map((zone) => (
              <div key={zone.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium">{zone.name}</h4>
                    <Badge variant={getZoneTypeVariant(zone.type)}>
                      {zone.type.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{zone.description}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge variant={zone.status === 'active' ? 'default' : 'secondary'}>
                    {zone.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Geo-Fencing Protection</h4>
                <p className="text-sm text-blue-700 mt-1">
                  You'll receive automatic alerts when entering or leaving designated zones. 
                  This helps ensure your safety and compliance with local regulations.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Information */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Data Protection</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Location data is encrypted end-to-end</li>
                <li>• Stored locally and on secure blockchain</li>
                <li>• Shared only with authorized emergency services</li>
                <li>• Automatically deleted after trip completion</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Your Control</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Turn off tracking anytime</li>
                <li>• Control who can see your location</li>
                <li>• Export your data before deletion</li>
                <li>• Manage sharing preferences</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Privacy Settings
            </Button>
            <Button variant="outline">
              Export Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}