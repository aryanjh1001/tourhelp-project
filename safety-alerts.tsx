import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Info, 
  CheckCircle,
  X
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Alert {
  id: string;
  type: 'weather' | 'security' | 'travel' | 'health';
  severity: 'low' | 'medium' | 'high';
  title: string;
  message: string;
  location: string;
  timestamp: string;
  isRead: boolean;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'weather',
    severity: 'high',
    title: 'Heavy Rainfall Warning',
    message: 'Heavy rainfall expected in Cherrapunji area. Avoid outdoor activities and stay in safe locations.',
    location: 'Cherrapunji, Meghalaya',
    timestamp: '10 minutes ago',
    isRead: false
  },
  {
    id: '2',
    type: 'security',
    severity: 'medium',
    title: 'Road Closure Alert',
    message: 'Highway NH-40 partially blocked due to landslide. Use alternative routes.',
    location: 'Guwahati-Shillong Highway',
    timestamp: '1 hour ago',
    isRead: false
  },
  {
    id: '3',
    type: 'travel',
    severity: 'low',
    title: 'Festival Information',
    message: 'Bihu festival celebrations ongoing. Expect crowded areas and traffic delays.',
    location: 'Guwahati City Center',
    timestamp: '2 hours ago',
    isRead: true
  }
];

export function SafetyAlerts() {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'weather': return '🌦️';
      case 'security': return '🚨';
      case 'travel': return '🚗';
      case 'health': return '🏥';
      default: return '📢';
    }
  };

  const handleDismissAlert = (alertId: string) => {
    toast.success('Alert dismissed');
  };

  const handleViewDetails = (alert: Alert) => {
    toast.info(`Viewing details for: ${alert.title}`);
  };

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
          Safety Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-4 border rounded-lg ${
                alert.isRead ? 'bg-gray-50 border-gray-200' : 'bg-white border-yellow-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="text-2xl">{getTypeIcon(alert.type)}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium">{alert.title}</h4>
                      <Badge variant={getSeverityVariant(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                      {!alert.isRead && (
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          New
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {alert.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {alert.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleViewDetails(alert)}
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDismissAlert(alert.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {mockAlerts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <p>No active safety alerts</p>
              <p className="text-sm">You're all set! Enjoy your trip safely.</p>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Alert settings: All notifications enabled
            </span>
            <Button variant="ghost" size="sm">
              Manage Preferences
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}