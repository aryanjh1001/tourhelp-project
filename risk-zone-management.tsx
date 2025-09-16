import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  AlertTriangle, 
  Shield,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

const mockRiskZones = [
  {
    id: '1',
    name: 'Myanmar Border Area',
    type: 'restricted',
    severity: 'high',
    description: 'Restricted border zone requiring special permits',
    coordinates: '25.1234, 94.5678',
    radius: '5 km',
    activeTourists: 0
  },
  {
    id: '2',
    name: 'Landslide Prone Area - NH40',
    type: 'caution',
    severity: 'medium',
    description: 'Temporary caution due to recent rainfall',
    coordinates: '26.1234, 91.5678',
    radius: '2 km',
    activeTourists: 3
  },
  {
    id: '3',
    name: 'Kaziranga Buffer Zone',
    type: 'protected',
    severity: 'low',
    description: 'Wildlife protection area - guided tours only',
    coordinates: '26.5775, 93.1717',
    radius: '10 km',
    activeTourists: 15
  }
];

export function RiskZoneManagement() {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'default';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'restricted': return <AlertTriangle className="w-4 h-4" />;
      case 'caution': return <Shield className="w-4 h-4" />;
      case 'protected': return <CheckCircle className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Risk Zone Management</h3>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Risk Zone
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockRiskZones.map((zone) => (
          <Card key={zone.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(zone.type)}
                  <CardTitle className="text-lg">{zone.name}</CardTitle>
                </div>
                <Badge variant={getSeverityVariant(zone.severity)}>
                  {zone.severity.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{zone.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Coordinates</span>
                  <p className="font-mono">{zone.coordinates}</p>
                </div>
                <div>
                  <span className="text-gray-500">Radius</span>
                  <p>{zone.radius}</p>
                </div>
                <div>
                  <span className="text-gray-500">Type</span>
                  <p className="capitalize">{zone.type}</p>
                </div>
                <div>
                  <span className="text-gray-500">Active Tourists</span>
                  <p className="font-medium">{zone.activeTourists}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  View Map
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}