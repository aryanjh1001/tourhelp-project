import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  User,
  Phone,
  Search,
  Filter,
  Download,
  Plus,
  Eye
} from 'lucide-react';

const mockIncidents = [
  {
    id: 'INC001',
    type: 'Missing Person',
    tourist: {
      name: 'John Smith',
      digitalId: 'TH-2025-006789',
      phone: '+91-9876543210'
    },
    location: 'Mawlynnong Village, Meghalaya',
    coordinates: '25.2637, 91.8597',
    severity: 'High',
    status: 'Active',
    reportedAt: '2024-09-15 14:30',
    reportedBy: 'Family Member',
    description: 'Tourist failed to return from planned village tour. Last seen at 12:00 PM.',
    assignedOfficer: 'Inspector Singh',
    actions: [
      { time: '14:35', action: 'Search team dispatched' },
      { time: '14:45', action: 'Local guides contacted' },
      { time: '15:00', action: 'Area cordoned for search' }
    ]
  },
  {
    id: 'INC002',
    type: 'Medical Emergency',
    tourist: {
      name: 'Lisa Chen',
      digitalId: 'TH-2025-007890',
      phone: '+91-9876543211'
    },
    location: 'Cherrapunji Viewpoint',
    coordinates: '25.2697, 91.7317',
    severity: 'Medium',
    status: 'Resolved',
    reportedAt: '2024-09-15 11:15',
    reportedBy: 'Tourist (Self)',
    description: 'Tourist experiencing altitude sickness and breathing difficulties.',
    assignedOfficer: 'Dr. Priya Sharma',
    actions: [
      { time: '11:20', action: 'Ambulance dispatched' },
      { time: '11:35', action: 'Patient reached medical facility' },
      { time: '12:00', action: 'Treatment provided, stable condition' },
      { time: '14:00', action: 'Patient discharged' }
    ]
  },
  {
    id: 'INC003',
    type: 'Theft',
    tourist: {
      name: 'Ravi Kumar',
      digitalId: 'TH-2025-008901',
      phone: '+91-9876543212'
    },
    location: 'Guwahati Railway Station',
    coordinates: '26.1809, 91.7470',
    severity: 'Low',
    status: 'Under Investigation',
    reportedAt: '2024-09-15 09:45',
    reportedBy: 'Tourist (Self)',
    description: 'Bag containing passport and valuables stolen from platform.',
    assignedOfficer: 'Constable Raj',
    actions: [
      { time: '09:50', action: 'FIR registered' },
      { time: '10:00', action: 'CCTV footage requested' },
      { time: '10:30', action: 'Station security briefed' }
    ]
  }
];

export function IncidentReports() {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
      default: return 'outline';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Active': return 'destructive';
      case 'Under Investigation': return 'secondary';
      case 'Resolved': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Incident Management</h3>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Incident
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search incidents..." className="pl-10" />
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

      {/* Incident List */}
      <div className="space-y-4">
        {mockIncidents.map((incident) => (
          <Card key={incident.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <div>
                    <CardTitle className="text-lg">{incident.type}</CardTitle>
                    <p className="text-sm text-gray-600">Incident ID: {incident.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getSeverityVariant(incident.severity)}>
                    {incident.severity}
                  </Badge>
                  <Badge variant={getStatusVariant(incident.status)}>
                    {incident.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Tourist Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Tourist Information
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Name:</strong> {incident.tourist.name}</p>
                    <p><strong>Digital ID:</strong> {incident.tourist.digitalId}</p>
                    <p><strong>Phone:</strong> {incident.tourist.phone}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location Details
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Location:</strong> {incident.location}</p>
                    <p><strong>Coordinates:</strong> {incident.coordinates}</p>
                    <p><strong>Assigned:</strong> {incident.assignedOfficer}</p>
                  </div>
                </div>
              </div>

              {/* Incident Description */}
              <div>
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                  {incident.description}
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="font-medium mb-3">Action Timeline</h4>
                <div className="space-y-2">
                  {incident.actions.map((action, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {action.time}
                      </div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{action.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Incident Metadata */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm text-gray-600">
                <div>
                  <strong>Reported:</strong> {incident.reportedAt}
                </div>
                <div>
                  <strong>Reported by:</strong> {incident.reportedBy}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-4 border-t">
                <Button size="sm">
                  <Eye className="w-3 h-3 mr-1" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="w-3 h-3 mr-1" />
                  Contact Tourist
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  View Location
                </Button>
                {incident.status === 'Active' && (
                  <Button variant="outline" size="sm">
                    Update Status
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Incident Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-sm text-gray-600">Active Incidents</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">Under Investigation</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-sm text-gray-600">Resolved Today</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold">4.2m</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}