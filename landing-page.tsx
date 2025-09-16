import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shield, 
  MapPin, 
  Users, 
  AlertTriangle,
  Activity,
  Lock,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  
  const languages = ['English', 'हिंदी', 'অসমীয়া', 'বাংলা', 'मणिपुरी'];

  const features = [
    'Real-time Geo-tracking',
    'Blockchain Security', 
    'AI Anomaly Detection',
    'Emergency Response'
  ];

  return (
    <div 
      className="min-h-screen relative flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1571599711343-1023784dd0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGNsb3VkcyUyMG5hdHVyZXxlbnwxfHx8fDE3NTc5NjU4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10">
        <div className="relative">
          <Button 
            variant="outline" 
            className="bg-white/90 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white"
          >
            {selectedLanguage}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Logo and Title */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white">TourHelp</h1>
          </div>
          
          {/* Hindi Tagline */}
          <div className="mb-6">
            <p className="text-2xl lg:text-3xl text-yellow-300 font-medium mb-2" style={{ fontFamily: 'serif' }}>
              अतिथि देवो भव:!!!
            </p>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            AI-Powered Tourist Safety Monitoring & Incident Response System for Northeast India
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <Badge 
              key={index}
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-4 py-2 text-sm"
            >
              {index === 0 && <MapPin className="w-4 h-4 mr-2" />}
              {index === 1 && <Lock className="w-4 h-4 mr-2" />}
              {index === 2 && <Activity className="w-4 h-4 mr-2" />}
              {index === 3 && <AlertTriangle className="w-4 h-4 mr-2" />}
              {feature}
            </Badge>
          ))}
        </div>

        {/* Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          
          {/* Tourist Portal */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-white hover:bg-slate-800/90 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tourist Portal</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Register, get digital ID, and stay safe during your visit
              </p>
              <Button 
                onClick={onGetStarted}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Enter as Tourist
              </Button>
            </CardContent>
          </Card>

          {/* Police Dashboard */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-white hover:bg-slate-800/90 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Police Dashboard</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Monitor tourists, respond to alerts, and manage incidents
              </p>
              <Button 
                onClick={onGetStarted}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Police Login
              </Button>
            </CardContent>
          </Card>

          {/* Tourism Department */}
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 text-white hover:bg-slate-800/90 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tourism Department</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Analytics, reports, and tourism safety management
              </p>
              <Button 
                onClick={onGetStarted}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Department Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}