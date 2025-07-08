
import React from 'react';
import { CheckCircle, X, Star, Clock, Users, TrendingUp, Zap, Target, Brain, BookOpen, DollarSign } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import CTAButton from '../components/CTAButton';
import GuaranteeSeal from '../components/GuaranteeSeal';

const Index = () => {
  // Countdown para 24 horas a partir de agora
  const countdownTarget = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const handleCTAClick = () => {
    // Scroll suave para a seção de oferta ou redirecionar para checkout
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-b from-brand-gray to-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline Principal */}
          <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 leading-tight">
            Como Convencer um Cliente em 
            <span className="text-brand-orange"> 60 Segundos</span>
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-8 leading-relaxed">
            O método que transformou vendedores comuns em máquinas de conversão, 
            <span className="text-brand-orange font-bold">por Herickson Maia</span>
          </h2>

          {/* CTA Principal */}
          <div className="mb-12">
            <CTAButton onClick={handleCTAClick} size="large" className="w-full md:w-auto" />
          </div>

          {/* Prova Social Rápida */}
          <div className="flex justify-center items-center gap-6 text-sm text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-orange" />
              <span className="font-semibold">+15.847 vendedores</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold">4.9/5 estrelas</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="font-semibold">94% de aprovação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Identificação do Problema */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-8">
            Você está <span className="text-red-600">perdendo vendas</span> e nem sabe por quê?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Você fala por horas mas o cliente não compra</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Ouve "vou pensar" mais vezes do que gostaria</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Sente que precisa "implorar" para fechar negócios</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Concorrentes fecham mais vendas com preços maiores</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Não sabe como criar urgência real no cliente</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Tem medo de "pressionar" e perde a venda</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 font-semibold mb-6">
              Se você se identificou com pelo menos 2 desses pontos, 
              <span className="text-brand-orange font-bold"> este e-book vai mudar sua vida</span>
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação do Autor */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Quem é o <span className="text-brand-orange">Especialista</span> por trás do método?
            </h2>
            
            <div className="bg-brand-gray p-8 rounded-xl">
              <div className="mb-6">
                <div className="w-24 h-24 bg-brand-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">HM</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Herickson Maia</h3>
                <p className="text-gray-600 font-semibold">Estrategista em Tráfego Pago</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-center mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand-orange mb-2">+5 anos</div>
                  <p className="text-sm text-gray-600 font-semibold">de experiência no mercado digital</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-brand-orange mb-2">R$ 10M+</div>
                  <p className="text-sm text-gray-600 font-semibold">Faturados</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center mb-6">
                <div className="text-2xl font-bold text-brand-orange mb-2">R$ 2M+</div>
                <p className="text-sm text-gray-600 font-semibold">gerenciados em anúncios</p>
              </div>
              
              <p className="text-gray-700 text-center font-medium">
                "Com mais de 5 anos de experiência em marketing digital, especializo-me em estratégias de tráfego pago, 
                ajudando negócios a transformarem investimento em anúncios em resultados reais. Percebi que muitos empreendedores 
                conseguem atrair leads qualificados, mas perdem vendas por não saberem como se conectar e se posicionar adequadamente 
                nos primeiros segundos da conversa. Por isso, criei o e-book 'Como Convencer um Cliente em 60 Segundos' - 
                um guia prático que combina minha experiência em marketing digital com técnicas comprovadas de comunicação e persuasão, 
                <span className="text-brand-orange font-bold">focando especificamente no momento mais crítico de qualquer venda: os primeiros 60 segundos de contato.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 px-4 bg-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            O que você vai aprender no e-book
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    O Poder dos Primeiros 60 Segundos
                  </h3>
                  <p className="text-gray-600">
                    Descubra a importância crucial dos primeiros 60 segundos na interação presencial e como estabelecer uma base de confiança e credibilidade rapidamente. Aprenda a otimizar cada momento, desde a chegada do cliente até a construção de rapport, utilizando técnicas de linguagem corporal, contato visual e sorriso genuíno para causar uma primeira impressão impactante.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    O Funil de Vendas
                  </h3>
                  <p className="text-gray-600">
                    Entenda como aplicar os princípios do funil de vendas especificamente para interações presenciais, guiando o cliente de forma eficaz desde o primeiro contato até a decisão de compra. Esteja preparado para transformar cada etapa em uma oportunidade de avanço no processo de vendas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    Valor em Vendas Presenciais
                  </h3>
                  <p className="text-gray-600">
                    Aprenda a comunicar o valor do seu produto ou serviço de forma clara e concisa, garantindo que o cliente perceba os benefícios e a relevância da sua oferta em um curto espaço de tempo. Domine a arte de apresentar preços de forma que o cliente veja valor, não custo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    Estratégias de Comunicação Rápida
                  </h3>
                  <p className="text-gray-600">
                    Desenvolva habilidades de comunicação que permitam transmitir sua mensagem de forma impactante e persuasiva em poucos segundos. Descubra técnicas para engajar o cliente, identificar suas necessidades e apresentar soluções de maneira eficiente, mesmo com clientes resistentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
            Veja o que nossos <span className="text-brand-orange">leitores</span> estão dizendo
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl text-gray-700 text-center mb-6 italic">
              "Eu estava há meses sem fechar uma venda decente. Depois de aplicar apenas 3 técnicas 
              do e-book, consegui fechar R$ 15.000 em contratos em uma única semana. 
              O método do Rafael realmente funciona!"
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold text-brand-dark">Mariana S.</p>
              <p className="text-gray-600">Consultora de Marketing Digital</p>
              <p className="text-sm text-gray-500 mt-1">⭐⭐⭐⭐⭐ Verificado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section id="oferta" className="py-16 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            OFERTA <span className="text-brand-orange">ESPECIAL</span> POR TEMPO LIMITADO
          </h2>
          
          <div className="bg-white p-8 rounded-xl mb-8">
            <div className="mb-6">
              <p className="text-gray-600 text-lg mb-4">De:</p>
              <div className="text-4xl text-gray-500 line-through mb-2">R$ 97,00</div>
              <p className="text-gray-600 text-lg mb-4">Por apenas:</p>
              <div className="text-6xl font-bold text-brand-orange mb-4">R$ 27</div>
              <p className="text-gray-600 font-semibold">DESCONTO DE 72%</p>
            </div>
            
            <div className="mb-8">
              <p className="text-brand-dark font-bold text-xl mb-4">
                ⏰ ESTA OFERTA EXPIRA EM:
              </p>
              <CountdownTimer targetDate={countdownTarget} />
            </div>
            
            <CTAButton onClick={handleCTAClick} size="large" className="w-full mb-6" />
            
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Download Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Garantia 7 Dias</span>
              </div>
            </div>
          </div>
          
          <GuaranteeSeal />
        </div>
      </section>

      {/* Última Chance */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ÚLTIMA CHANCE - NÃO PERCA ESTA OPORTUNIDADE!
          </h2>
          
          <p className="text-xl mb-8 leading-relaxed">
            Milhares de vendedores já transformaram suas carreiras com este método. 
            <br className="hidden md:block" />
            <span className="font-bold">
              Não seja mais um que vai deixar essa oportunidade passar.
            </span>
          </p>
          
          <div className="bg-white/10 p-6 rounded-xl mb-8">
            <p className="text-lg mb-4">
              ❌ <strong>Se você não agir agora:</strong>
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li>• Continuará perdendo vendas todos os dias</li>
              <li>• Verá concorrentes fechando seus clientes</li>
              <li>• Ficará mais um ano no mesmo lugar</li>
              <li>• Perderá a chance de triplicar sua renda</li>
            </ul>
          </div>
          
          <CTAButton onClick={handleCTAClick} size="large" className="w-full md:w-auto bg-white text-brand-orange hover:bg-gray-100" />
          
          <p className="mt-6 text-sm opacity-90">
            * Oferta válida apenas por 24 horas. Após esse período, o e-book volta ao preço normal de R$ 97.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm opacity-75 mb-4">
            © 2024 Venda em 60 Segundos. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-60">
            Este site não é afiliado ao Facebook ou qualquer entidade do Facebook. 
            Depois que você deixa o Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </footer>

      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-orange p-4 z-50 md:hidden">
        <CTAButton onClick={handleCTAClick} className="w-full text-sm py-3" />
      </div>
    </div>
  );
};

export default Index;
