import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  QrCode, 
  Download, 
  Share, 
  MapPin, 
  Phone, 
  Calendar,
  Shield,
  Verified
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User } from '../App';

interface DigitalIdCardProps {
  user: User;
}

export function DigitalIdCard({ user }: DigitalIdCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const handleDownload = () => {
    toast.success('Digital ID downloaded to your device');
  };

  const handleShare = () => {
    toast.success('Digital ID sharing link copied to clipboard');
  };

  const issueDate = new Date();
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30); // 30 days validity

  return (
    <div className="space-y-6">
      {/* Digital ID Card */}
      <Card className="max-w-md mx-auto bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span className="font-bold">TourHelp</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Verified className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-16 h-16 border-2 border-white/30">
              <AvatarFallback className="bg-white/20 text-white text-lg">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-blue-100 text-sm">{user.email}</p>
              <div className="flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="text-blue-100 text-xs">{user.location?.address}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-blue-100">Digital ID</span>
              <span className="font-mono font-bold">{user.digitalId}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-blue-100">Safety Score</span>
              <span className="font-bold">{user.safetyScore}%</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-blue-100">Status</span>
              <span className="font-bold text-green-300">Active</span>
            </div>
          </div>

          <div className="flex justify-between text-xs text-blue-100">
            <div>
              <div>Issued: {issueDate.toLocaleDateString()}</div>
              <div>Expires: {expiryDate.toLocaleDateString()}</div>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <QrCode className="w-12 h-12" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Actions */}
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={handleDownload} className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button onClick={handleShare} variant="outline" className="w-full">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* ID Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Full Name</span>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <span className="text-gray-500">Email</span>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <span className="text-gray-500">Digital ID</span>
                <p className="font-medium font-mono">{user.digitalId}</p>
              </div>
              <div>
                <span className="text-gray-500">ID Type</span>
                <p className="font-medium">Tourist</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            {user.emergencyContacts?.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg mb-3">
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.relation}</p>
                </div>
                <div className="text-right">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4 mr-1" />
                    {contact.phone}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visit Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Check-in Date</span>
                <p className="font-medium">{issueDate.toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-gray-500">Validity</span>
                <p className="font-medium">{expiryDate.toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-gray-500">Entry Point</span>
                <p className="font-medium">Guwahati Airport</p>
              </div>
              <div>
                <span className="text-gray-500">Purpose</span>
                <p className="font-medium">Tourism</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safety & Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Identity Verification</span>
                <Badge variant="default">
                  <Verified className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Background Check</span>
                <Badge variant="default">
                  <Shield className="w-3 h-3 mr-1" />
                  Cleared
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Emergency Setup</span>
                <Badge variant="default">
                  <Phone className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Location Services</span>
                <Badge variant="default">
                  <MapPin className="w-3 h-3 mr-1" />
                  Enabled
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QR Code Details */}
      <Card>
        <CardHeader>
          <CardTitle>QR Code Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-6">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <QrCode className="w-24 h-24 text-gray-400" />
            </div>
            <div className="flex-1 space-y-2 text-sm">
              <p><strong>Purpose:</strong> Quick identity verification and emergency access</p>
              <p><strong>Contains:</strong> Digital ID, emergency contacts, medical information</p>
              <p><strong>Valid for:</strong> Law enforcement, medical personnel, authorized tourism officials</p>
              <p><strong>Security:</strong> Encrypted and blockchain-verified</p>
              <p className="text-blue-600 font-medium">Show this QR code to authorities when requested</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}