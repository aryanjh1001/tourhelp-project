import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Clock, 
  X, 
  Shield,
  Heart,
  Navigation,
  Camera,
  Mic
} from 'lucide-react';
import { User } from '../App';

interface EmergencyPanelProps {
  user: User;
  onCancel: () => void;
}

export function EmergencyPanel({ user, onCancel }: EmergencyPanelProps) {
  const [countdown, setCountdown] = useState(10);
  const [emergencyStage, setEmergencyStage] = useState<'countdown' | 'active' | 'help-coming'>('countdown');
  const [helpETA, setHelpETA] = useState(12);

  useEffect(() => {
    if (emergencyStage === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (emergencyStage === 'countdown' && countdown === 0) {
      setEmergencyStage('active');
      // Simulate help dispatch
      setTimeout(() => {
        setEmergencyStage('help-coming');
      }, 3000);
    }
  }, [countdown, emergencyStage]);

  useEffect(() => {
    if (emergencyStage === 'help-coming' && helpETA > 0) {
      const timer = setTimeout(() => setHelpETA(helpETA - 1), 60000); // Update every minute
      return () => clearTimeout(timer);
    }
  }, [helpETA, emergencyStage]);

  const handleCancel = () => {
    if (emergencyStage === 'countdown') {
      onCancel();
    }
  };

  return (
    <div className="min-h-screen bg-red-600 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Emergency Header */}
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold mb-2">EMERGENCY ALERT</h1>
          <p className="text-xl opacity-90">TourHelp Emergency Response System</p>
        </div>

        {/* Emergency Status */}
        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-center">
              {emergencyStage === 'countdown' && 'Emergency Alert Starting...'}
              {emergencyStage === 'active' && 'EMERGENCY ACTIVE - HELP DISPATCHED'}
              {emergencyStage === 'help-coming' && 'HELP IS ON THE WAY'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {emergencyStage === 'countdown' && (
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">{countdown}</div>
                <p className="text-lg mb-4">Emergency alert will be sent in {countdown} seconds</p>
                <Progress value={((10 - countdown) / 10) * 100} className="w-full mb-4" />
                <Button 
                  onClick={handleCancel}
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel Emergency
                </Button>
              </div>
            )}

            {emergencyStage === 'active' && (
              <div className="text-center">
                <div className="animate-spin w-12 h-12 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
                <p className="text-xl mb-4">Dispatching emergency response...</p>
                <div className="space-y-2 text-sm">
                  <p>✓ Location shared with authorities</p>
                  <p>✓ Emergency contacts notified</p>
                  <p>✓ Nearest police station alerted</p>
                </div>
              </div>
            )}

            {emergencyStage === 'help-coming' && (
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{helpETA} minutes</div>
                <p className="text-lg mb-4">Estimated arrival time for help</p>
                <Badge variant="secondary" className="bg-green-600 text-white">
                  Response Team Dispatched
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Location Information */}
        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Your Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-medium">{user.location?.address}</p>
              <p className="text-sm opacity-80">
                Coordinates: {user.location?.lat}, {user.location?.lng}
              </p>
              <p className="text-sm opacity-80">
                <Clock className="w-4 h-4 inline mr-1" />
                Location updated: Just now
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {user.emergencyContacts?.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm opacity-80">{contact.relation}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      Notified
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle>Additional Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30">
                <Heart className="w-4 h-4 mr-2" />
                Medical Emergency
              </Button>
              
              <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30">
                <Navigation className="w-4 h-4 mr-2" />
                Share Live Location
              </Button>
              
              <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30">
                <Camera className="w-4 h-4 mr-2" />
                Start Recording
              </Button>
              
              <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30">
                <Mic className="w-4 h-4 mr-2" />
                Voice Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-4">
            <div className="text-center space-y-2">
              <p className="font-medium">Stay calm and follow these instructions:</p>
              <ul className="text-sm space-y-1 text-left max-w-md mx-auto">
                <li>• Stay where you are if safe to do so</li>
                <li>• Keep your phone charged and accessible</li>
                <li>• Do not accept help from unauthorized individuals</li>
                <li>• Wait for verified emergency responders</li>
                <li>• Your Digital ID: <span className="font-mono">{user.digitalId}</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Numbers */}
        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader>
            <CardTitle>Emergency Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-bold text-lg">100</p>
                <p className="text-sm">Police</p>
              </div>
              <div>
                <p className="font-bold text-lg">102</p>
                <p className="text-sm">Ambulance</p>
              </div>
              <div>
                <p className="font-bold text-lg">1363</p>
                <p className="text-sm">Tourist Helpline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {emergencyStage !== 'countdown' && (
          <div className="text-center">
            <Button 
              onClick={onCancel}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30"
            >
              Return to Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}