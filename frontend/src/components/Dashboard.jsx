import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  AlertCircle, 
  Settings, 
  LogOut, 
  User,
  HelpCircle,
  Leaf
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import axios from 'axios';

const Dashboard = ({ onShowHelp }) => {
  const { user, logout, isAdmin, isSuperAdmin } = useAuth();
  const [stats, setStats] = useState({
    totalProducts: 0,
    priorityProducts: 0,
    recentReports: 0,
    systemHealth: 'healthy'
  });
  const [priorityProducts, setPriorityProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch priority products
      const productsResponse = await axios.get('/agent/products/priority');
      if (productsResponse.data.success) {
        setPriorityProducts(productsResponse.data.data);
        setStats(prev => ({
          ...prev,
          priorityProducts: productsResponse.data.data.length
        }));
      }

      // Fetch dashboard stats
      try {
        const statsResponse = await axios.get('/admin/dashboard/stats');
        if (statsResponse.data.success) {
          setStats(prev => ({
            ...prev,
            ...statsResponse.data.data
          }));
        }
      } catch (error) {
        // Stats endpoint might not be available for regular users
        console.log('Stats not available for this user');
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BAMBA Insights</h1>
                <p className="text-sm text-gray-600">Sistema de Inteligência de Mercado</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onShowHelp}
                className="text-gray-600 hover:text-gray-900"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Ajuda
              </Button>
              
              {isAdmin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.href = '/admin'}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              )}
              
              {isSuperAdmin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.href = '/super-admin'}
                >
                  <User className="w-4 h-4 mr-2" />
                  Super Admin
                </Button>
              )}
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Olá, {user?.full_name || user?.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produtos Totais</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                Produtos cadastrados no sistema
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produtos Prioritários</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.priorityProducts}</div>
              <p className="text-xs text-muted-foreground">
                Com alta prioridade de importação
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Relatórios Recentes</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.recentReports}</div>
              <p className="text-xs text-muted-foreground">
                Gerados nos últimos 7 dias
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status do Sistema</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={stats.systemHealth === 'healthy' ? 'default' : 'destructive'}
                  className={stats.systemHealth === 'healthy' ? 'bg-green-100 text-green-800' : ''}
                >
                  {stats.systemHealth === 'healthy' ? 'Saudável' : 'Atenção'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Todos os serviços operacionais
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Priority Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos Prioritários</CardTitle>
            <CardDescription>
              Produtos com maior prioridade para importação baseado no algoritmo de análise
            </CardDescription>
          </CardHeader>
          <CardContent>
            {priorityProducts.length > 0 ? (
              <div className="space-y-4">
                {priorityProducts.map((product, index) => (
                  <div key={product.id || index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">Score: {product.score}</p>
                    </div>
                    <Badge variant="secondary">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Nenhum produto prioritário encontrado</p>
                <p className="text-sm text-gray-500 mt-1">
                  Os produtos aparecerão aqui após a análise do algoritmo
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
