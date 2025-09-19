import React from 'react';
import { X, Book, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const HelpMenu = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Central de Ajuda</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <CardDescription>
            Encontre ajuda e suporte para usar o BAMBA Insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Help */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Ajuda Rápida</h3>
            <div className="space-y-2">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Atalhos do Teclado</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + H</kbd> - Abrir ajuda
                </p>
                <p className="text-sm text-gray-600">
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Esc</kbd> - Fechar modais
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Funcionalidades</h3>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium flex items-center">
                  <Book className="w-4 h-4 mr-2" />
                  Dashboard
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Visualize estatísticas gerais e produtos prioritários do sistema
                </p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Análise de Produtos
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Algoritmo inteligente que prioriza produtos para importação
                </p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Relatórios Automáticos
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Receba relatórios por email e WhatsApp automaticamente
                </p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Suporte</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.open('mailto:suporte@bamba.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email para Suporte
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Suporte
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </div>
          </div>

          {/* System Info */}
          <div className="pt-4 border-t">
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Versão:</strong> 1.0.0</p>
              <p><strong>Última Atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
              <p><strong>Desenvolvido por:</strong> BAMBA Natural</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpMenu;
