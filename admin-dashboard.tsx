import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Input } from './ui/input';
import { 
  Shield, 
  Users, 
  AlertTriangle, 
  MapPin, 
  LogOut,
  Search,
  Filter,
  Download,
  Bell,
  TrendingUp,
  Clock,
  Phone,
  Eye
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { User } from '../App';
import { HomePage } from './home-page';
import { TouristMonitoring } from './tourist-monitoring';
import { RiskZoneManagement } from './risk-zone-management';
import { IncidentReports } from './incident-reports';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

// Mock data for tourists
const mockTourists = [
  {
    id: 'T001',
    name: 'Priya Sharma',
    digitalId: 'TH-2025-001234',
    location: 'Guwahati, Assam',
    safetyScore: 85,
    status: 'active',
    lastSeen: '2 minutes ago',
    riskLevel: 'low'
  },
  {
    id: 'T002',
    name: 'Arjun Patel',
    digitalId: 'TH-2025-005678',
    location: 'Kaziranga National Park',
    safetyScore: 92,
    status: 'active',
    lastSeen: '5 minutes ago',
    riskLevel: 'low'
  },
  {
    id: 'T003',
    name: 'Sarah Johnson',
    digitalId: 'TH-2025-009876',
    location: 'Tawang, Arunachal Pradesh',
    safetyScore: 45,
    status: 'alert',
    lastSeen: '30 minutes ago',
    riskLevel: 'high'
  },
  {
    id: 'T004',
    name: 'Ravi Kumar',
    digitalId: 'TH-2025-004321',
    location: 'Shillong, Meghalaya',
    safetyScore: 78,
    status: 'active',
    lastSeen: '1 minute ago',
    riskLevel: 'medium'
  }
];

const mockIncidents = [
  {
    id: 'INC001',
    type: 'Missing Person',
    touristName: 'John Smith',
    location: 'Mawlynnong Village',
    severity: 'High',
    status: 'Investigating',
    reportedAt: '2 hours ago'
  },
  {
    id: 'INC002',
    type: 'Medical Emergency',
    touristName: 'Lisa Chen',
    location: 'Cherrapunji',
    severity: 'Medium',
    status: 'Resolved',
    reportedAt: '5 hours ago'
  }
];

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'default';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'alert': return 'destructive';
      case 'active': return 'default';
      default: return 'secondary';
    }
  };

  const filteredTourists = mockTourists.filter(tourist =>
    tourist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.digitalId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">TourHelp Admin</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              
              <Avatar>
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              
              <div className="text-right text-sm">
                <div className="font-medium">{user.name}</div>
                <div className="text-gray-500 capitalize">{user.type}</div>
              </div>
              
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
          <h2 className="text-2xl font-bold text-gray-900">Command Center</h2>
          <p className="text-gray-600">Monitor tourist safety and manage incidents</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="tourists">Tourists</TabsTrigger>
            <TabsTrigger value="incidents">Incidents</TabsTrigger>
            <TabsTrigger value="zones">Risk Zones</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomePage user={user} onNavigateToSection={setActiveTab} />
          </TabsContent>

          <TabsContent value="tourists">
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search tourists..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              {/* Tourist List */}
              <Card>
                <CardHeader>
                  <CardTitle>Tourist Monitoring ({filteredTourists.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredTourists.map((tourist) => (
                      <div key={tourist.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{getInitials(tourist.name)}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium">{tourist.name}</h4>
                              <Badge variant={getStatusBadgeVariant(tourist.status)}>
                                {tourist.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">ID: {tourist.digitalId}</p>
                            <p className="text-sm text-gray-600">
                              <MapPin className="w-3 h-3 inline mr-1" />
                              {tourist.location}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">Safety Score:</span>
                            <Badge variant={tourist.safetyScore >= 80 ? "default" : tourist.safetyScore >= 60 ? "secondary" : "destructive"}>
                              {tourist.safetyScore}%
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">Risk:</span>
                            <Badge variant={getRiskBadgeVariant(tourist.riskLevel)}>
                              {tourist.riskLevel}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500">Last seen: {tourist.lastSeen}</p>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="incidents">
            <IncidentReports />
          </TabsContent>

          <TabsContent value="zones">
            <RiskZoneManagement />
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4>Generate Reports</h4>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Daily Safety Report
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Incident Summary
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Tourist Analytics
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4>Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Tourists Today</span>
                        <span className="font-medium">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Incidents Resolved</span>
                        <span className="font-medium">23</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Response Time</span>
                        <span className="font-medium">4.2 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>High-Risk Areas</span>
                        <span className="font-medium">5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}