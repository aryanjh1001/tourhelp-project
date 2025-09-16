import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  MapPin, 
  Clock, 
  Plus, 
  Edit, 
  Trash2,
  AlertTriangle,
  CheckCircle,
  Navigation,
  Calendar,
  Users
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User } from '../App';

interface TripPlannerProps {
  user: User;
}

interface TripStop {
  id: string;
  name: string;
  address: string;
  time: string;
  duration: string;
  safetyLevel: 'high' | 'medium' | 'low';
  notes?: string;
  type: 'attraction' | 'accommodation' | 'transport' | 'dining';
}

const mockTripPlan: TripStop[] = [
  {
    id: '1',
    name: 'Kamakhya Temple',
    address: 'Nilachal Hills, Guwahati',
    time: '09:00 AM',
    duration: '2 hours',
    safetyLevel: 'high',
    notes: 'Peak hours, expect crowds',
    type: 'attraction'
  },
  {
    id: '2',
    name: 'Umananda Island',
    address: 'Brahmaputra River, Guwahati',
    time: '12:00 PM',
    duration: '3 hours',
    safetyLevel: 'medium',
    notes: 'Ferry crossing required, check weather',
    type: 'attraction'
  },
  {
    id: '3',
    name: 'Paradise Restaurant',
    address: 'GS Road, Guwahati',
    time: '06:30 PM',
    duration: '1.5 hours',
    safetyLevel: 'high',
    notes: 'Local Assamese cuisine',
    type: 'dining'
  }
];

export function TripPlanner({ user }: TripPlannerProps) {
  const [tripPlan, setTripPlan] = useState(mockTripPlan);
  const [isAddingStop, setIsAddingStop] = useState(false);
  const [editingStop, setEditingStop] = useState<string | null>(null);

  const getSafetyBadgeVariant = (level: string) => {
    switch (level) {
      case 'high': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'destructive';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'attraction': return '🏛️';
      case 'accommodation': return '🏨';
      case 'transport': return '🚗';
      case 'dining': return '🍽️';
      default: return '📍';
    }
  };

  const handleAddStop = () => {
    setIsAddingStop(true);
  };

  const handleSaveStop = () => {
    setIsAddingStop(false);
    toast.success('Stop added to your trip plan');
  };

  const handleEditStop = (stopId: string) => {
    setEditingStop(stopId);
  };

  const handleDeleteStop = (stopId: string) => {
    setTripPlan(tripPlan.filter(stop => stop.id !== stopId));
    toast.success('Stop removed from trip plan');
  };

  const handleSharePlan = () => {
    toast.success('Trip plan shared with emergency contacts');
  };

  const calculateTotalDuration = () => {
    // Simple calculation for demo
    return '8 hours 30 minutes';
  };

  const calculateSafetyScore = () => {
    const scores = tripPlan.map(stop => {
      switch (stop.safetyLevel) {
        case 'high': return 90;
        case 'medium': return 70;
        case 'low': return 40;
        default: return 70;
      }
    });
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  };

  return (
    <div className="space-y-6">
      {/* Trip Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Today's Itinerary
              </div>
              <Button onClick={handleAddStop} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Stop
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tripPlan.map((stop, index) => (
                <div key={stop.id} className="relative">
                  <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">{getTypeIcon(stop.type)}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{stop.name}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getSafetyBadgeVariant(stop.safetyLevel)}>
                            Safety: {stop.safetyLevel}
                          </Badge>
                          <Button variant="ghost" size="sm" onClick={() => handleEditStop(stop.id)}>
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteStop(stop.id)}>
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{stop.address}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {stop.time}
                        </div>
                        <div>Duration: {stop.duration}</div>
                      </div>
                      
                      {stop.notes && (
                        <p className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                          💡 {stop.notes}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {index < tripPlan.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-px h-6 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}

              {isAddingStop && (
                <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50">
                  <h4 className="font-medium mb-3">Add New Stop</h4>
                  <div className="space-y-3">
                    <Input placeholder="Place name" />
                    <Input placeholder="Address" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="Time (e.g., 2:00 PM)" />
                      <Input placeholder="Duration (e.g., 2 hours)" />
                    </div>
                    <Textarea placeholder="Notes (optional)" rows={2} />
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveStop}>Save Stop</Button>
                      <Button variant="outline" onClick={() => setIsAddingStop(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trip Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Total Stops</span>
                <span className="font-medium">{tripPlan.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Duration</span>
                <span className="font-medium">{calculateTotalDuration()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Safety Score</span>
                <Badge variant={calculateSafetyScore() >= 80 ? 'default' : 'secondary'}>
                  {calculateSafetyScore()}%
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <Button className="w-full" onClick={handleSharePlan}>
                <Users className="w-4 h-4 mr-2" />
                Share with Contacts
              </Button>
              <Button variant="outline" className="w-full">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Safety Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
            Safety Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-medium">Weather Check</h4>
              </div>
              <p className="text-sm text-gray-600">
                Clear skies expected. Perfect weather for outdoor activities.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <h4 className="font-medium">Traffic Alert</h4>
              </div>
              <p className="text-sm text-gray-600">
                Heavy traffic expected near Kamakhya Temple. Plan extra time.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-medium">Emergency Prepared</h4>
              </div>
              <p className="text-sm text-gray-600">
                All stops have nearby medical facilities and police stations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trip History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Recent Trips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">Kaziranga National Park</h4>
                <p className="text-sm text-gray-600">Yesterday • 3 stops • 6 hours</p>
              </div>
              <Badge variant="default">Completed</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">Shillong Sightseeing</h4>
                <p className="text-sm text-gray-600">2 days ago • 5 stops • 8 hours</p>
              </div>
              <Badge variant="default">Completed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Trip Planning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20">
              <div className="text-center">
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <div>Popular Routes</div>
                <div className="text-sm text-gray-500">Pre-planned itineraries</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-20">
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-2" />
                <div>Half Day Tours</div>
                <div className="text-sm text-gray-500">4-6 hour plans</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-20">
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-2" />
                <div>Group Tours</div>
                <div className="text-sm text-gray-500">Join others</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}