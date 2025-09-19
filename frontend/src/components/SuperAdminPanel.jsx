import React from 'react';
import { ArrowLeft, Shield, Database, Server, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const SuperAdminPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Super Admin</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Segurança do Sistema
              </CardTitle>
              <CardDescription>
                Gerenciar permissões e segurança avançada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Configurar Segurança
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Base de Dados
              </CardTitle>
              <CardDescription>
                Backup, restore e manutenção da base de dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Gerenciar BD
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Monitoramento
              </CardTitle>
              <CardDescription>
                Status dos serviços e performance do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Ver Status
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Logs do Sistema
              </CardTitle>
              <CardDescription>
                Visualizar logs de erro e auditoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Ver Logs
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SuperAdminPanel;
