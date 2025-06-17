import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calendar, Heart, Instagram, MapPin, Phone, Sparkles, Star, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'



import girafaAnimacao from './assets/girafa_animacao.png'
import atividade1Img from './assets/images/atividade1.jpeg'
import atividade2Img from './assets/images/atividade2.jpeg'
import atividade3Img from './assets/images/atividade3.jpeg'
import equipeImg from './assets/images/equipe.jpeg'
import logoImg from './assets/images/logo.jpeg'


const FloatingLeaves = () => {
  return (
    <div className="floating-particles">
      <div className="absolute top-20 left-10 text-4xl animate-leaf-1">🌿</div>
      <div className="absolute top-40 right-20 text-3xl animate-leaf-2">🍃</div>
      <div className="absolute top-60 left-1/4 text-2xl animate-leaf-3">🌿</div>
      <div className="absolute top-80 right-1/3 text-3xl animate-leaf-1">🍃</div>
      <div className="absolute top-32 left-3/4 text-2xl animate-leaf-2">🌿</div>
    </div>
  )
}


const FloatingParticles = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 6
      }
      return particle
    }

    const initialParticles = Array.from({ length: 15 }, createParticle)
    setParticles(initialParticles)

    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev]
        if (newParticles.length < 20) {
          newParticles.push(createParticle())
        }
        return newParticles
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 animate-pulse-glow">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logoImg} alt="Tio Girafa" className="w-12 h-12 rounded-full object-cover hover-lift" />
              <span className="text-xl font-bold giraffe-brown text-glow">Tio Girafa</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-orange-600 hover:text-orange-800 transition-colors hover-lift">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-orange-600 hover:text-orange-800 transition-colors hover-lift">Sobre</button>
              <button onClick={() => scrollToSection('equipe')} className="text-orange-600 hover:text-orange-800 transition-colors hover-lift">Equipe</button>
              <button onClick={() => scrollToSection('servicos')} className="text-orange-600 hover:text-orange-800 transition-colors hover-lift">Serviços</button>
              <button onClick={() => scrollToSection('galeria')} className="text-orange-600 hover:text-orange-800 transition-colors hover-lift">Galeria</button>
              <button onClick={() => scrollToSection('contato')} className="text-orange-600 hover:text-orange-800 transition-colors hover-lift">Contato</button>
            </div>
            <Button
  className="bg-orange-500 hover:bg-orange-600 text-white hover-lift animate-pulse-glow"
  onClick={() => window.open('https://wa.me/5516994557007', '_blank')}
>
  <Phone className="w-4 h-4 mr-2" />
  Contratar
</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden wave-effect">
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
        <FloatingParticles />
        <FloatingLeaves />
        <div className="absolute top-20 right-10 animate-float">
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.inicio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-green-500 text-white px-4 py-2 text-lg shimmer-effect zoom-hover">
              <Sparkles className="w-4 h-4 mr-2" />
              Diversão Garantida!
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 giraffe-brown text-glow animate-fade-in-up">
              Tio Girafa
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 text-orange-600 font-semibold animate-fade-in-up">
              Recreação Infantil
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto animate-fade-in-up">
              Transformamos festas em momentos mágicos! Brincadeiras, diversão e alegria para crianças de todas as idades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg hover-lift zoom-hover animate-pulse-glow"
                onClick={() => scrollToSection('contato')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Festa
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg hover-lift zoom-hover"
                onClick={() => scrollToSection('servicos')}
              >
                <Star className="w-5 h-5 mr-2" />
                Ver Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50 wave-effect">
        <FloatingLeaves />
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.sobre ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 giraffe-brown text-glow">Sobre Nós</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A empresa Tio Girafa nasceu em junho de 2023, em Sertãozinho – SP, idealizada por Giovanni Borborema, profissional de Educação Física com especialização em recreação para festas e eventos.
Nosso propósito é levar alegria, estimular a socialização e criar experiências únicas por meio de atividades lúdicas e personalizadas, sempre com muita criatividade, integração e diversão.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-lift zoom-hover bg-white/80 backdrop-blur-sm animate-fade-in-up">
                <CardHeader className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-red-500 animate-bounce-gentle" />
                  <CardTitle className="text-xl giraffe-brown">Paixão pelo que fazemos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Cada festa é única e especial. Colocamos amor e dedicação em cada brincadeira.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/80 backdrop-blur-sm animate-fade-in-up">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-blue-500 animate-bounce-gentle" />
                  <CardTitle className="text-xl giraffe-brown">Equipe Qualificada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Profissionais experientes e carinhosos, preparados para cuidar e divertir as crianças.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/80 backdrop-blur-sm animate-fade-in-up">
                <CardHeader className="text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500 animate-bounce-gentle" />
                  <CardTitle className="text-xl giraffe-brown">Experiência Única</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Criamos momentos inesquecíveis com atividades criativas e envolventes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section id="equipe" className="py-20 wave-effect">
        <FloatingParticles />
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.equipe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 giraffe-brown text-glow">Nossa Equipe</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Conheça os profissionais que fazem a magia acontecer em cada festa!
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="max-w-4xl hover-lift zoom-hover bg-gradient-to-br from-orange-50 to-yellow-50 shimmer-effect">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img 
                        src={equipeImg} 
                        alt="Equipe Tio Girafa" 
                        className="w-full rounded-lg shadow-lg object-cover hover-lift"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 giraffe-brown text-glow">Equipe Tio Girafa</h3>
                      <p className="text-lg text-gray-700 mb-6">
                        Nossa equipe é formada por profissionais apaixonados por recreação infantil, 
                        com experiência em criar momentos únicos e especiais para as crianças.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center animate-fade-in-up">
                          <Badge className="bg-orange-500 text-white mr-3 animate-pulse-glow">✓</Badge>
                          <span>Profissionais qualificados e experientes</span>
                        </div>
                        <div className="flex items-center animate-fade-in-up">
                          <Badge className="bg-green-500 text-white mr-3 animate-pulse-glow">✓</Badge>
                          <span>Carinho e atenção com cada criança</span>
                        </div>
                        <div className="flex items-center animate-fade-in-up">
                          <Badge className="bg-yellow-500 text-white mr-3 animate-pulse-glow">✓</Badge>
                          <span>Criatividade e energia contagiante</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 wave-effect">
        <FloatingLeaves />
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.servicos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 giraffe-brown text-glow">Nossos Serviços</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Oferecemos uma variedade de atividades divertidas e educativas para todas as idades.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl giraffe-brown flex items-center">
                    🎪 Brincadeiras em Grupo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Atividades que promovem interação, cooperação e muita diversão entre as crianças.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl giraffe-brown flex items-center">
                    🎈 Balões de Modelagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Criação de figuras incríveis com balões, despertando a imaginação das crianças.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl giraffe-brown flex items-center">
                    🏃‍♂️ Gincanas e Competições
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Jogos e desafios que estimulam o trabalho em equipe e a atividade física.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl giraffe-brown flex items-center">
                    🎨 Atividades Criativas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Oficinas de arte, pintura e criação para desenvolver a criatividade.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl giraffe-brown flex items-center">
                    🎵 Música e Dança
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Momentos musicais com danças e cantigas que animam toda a festa.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl giraffe-brown flex items-center">
                    🎭 Teatro e Contação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Histórias encantadoras e apresentações teatrais que capturam a atenção.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 wave-effect">
        <FloatingParticles />
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.galeria ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 giraffe-brown text-glow">Galeria de Momentos</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Veja alguns dos momentos especiais que criamos em nossas festas!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="hover-lift zoom-hover animate-fade-in-up">
                <img 
                  src={atividade1Img} 
                  alt="Piquenique" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg shimmer-effect"
                />
                <h3 className="text-xl font-semibold mt-4 giraffe-brown text-center text-glow">Piquenique</h3>
                <p className="text-gray-600 text-center mt-2">Sorrisos e partilha!</p>
              </div>
              <div className="hover-lift zoom-hover animate-fade-in-up">
                <img 
                  src={atividade2Img} 
                  alt="Brincadeiras em círculo" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg shimmer-effect"
                />
                <h3 className="text-xl font-semibold mt-4 giraffe-brown text-center text-glow">Pintura Facial</h3>
                <p className="text-gray-600 text-center mt-2">Cores, traços e muita diversão!</p>
              </div>
              <div className="hover-lift zoom-hover animate-fade-in-up">
                <img 
                  src={atividade3Img} 
                  alt="Balões de modelagem" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg shimmer-effect"
                />
                <h3 className="text-xl font-semibold mt-4 giraffe-brown text-center text-glow">Sorrisos Soltos</h3>
                <p className="text-gray-600 text-center mt-2">Brincar é crescer!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 wave-effect">
        <FloatingLeaves />
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.contato ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 giraffe-brown text-glow">Entre em Contato</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Pronto para tornar a festa do seu filho inesquecível? Entre em contato conosco!
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="hover-lift zoom-hover bg-white/90 backdrop-blur-sm shimmer-effect">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 giraffe-brown text-glow">Fale Conosco</h3>
                      <div className="space-y-4">
                        <div className="flex items-center animate-fade-in-up">
                          <Instagram className="w-6 h-6 mr-4 text-pink-500 animate-bounce-gentle" />
                          <div>
                            <p className="font-semibold">Instagram</p>
                            <a 
                              href="https://www.instagram.com/tiogirafarecreacao?igsh=MXh4YTh3enJ1OWN0aA==" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-orange-600 hover:text-orange-800 hover-lift"
                            >
                              @tiogirafarecreacao
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center animate-fade-in-up">
                          <Phone className="w-6 h-6 mr-4 text-green-500 animate-bounce-gentle" />
                          <div>
                            <p className="font-semibold">WhatsApp</p>
                            <a
                              href="https://wa.me/5516994557007"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-600 hover:underline flex items-center gap-2"
                            >
                              (16) 99455-7007
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center animate-fade-in-up">
                          <MapPin className="w-6 h-6 mr-4 text-red-500 animate-bounce-gentle" />
                          <div>
                            <p className="font-semibold">Atendimento</p>
                            <p className="text-gray-600">Região metropolitana</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <img 
                        src={girafaAnimacao} 
                        alt="Girafa Tio Girafa" 
                        className="w-48 h-48 mx-auto mb-6 animate-bounce-gentle animate-gentle-spin"
                      />
                      <Button 
                        size="lg" 
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg hover-lift zoom-hover animate-pulse-glow"
                        onClick={() => window.open('https://www.instagram.com/tiogirafarecreacao?igsh=MXh4YTh3enJ1OWN0aA==', '_blank')}
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        Seguir no Instagram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-8 animated-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={logoImg} alt="Tio Girafa" className="w-12 h-12 rounded-full object-cover mr-3 hover-lift" />
            <span className="text-2xl font-bold text-glow">Tio Girafa Recreação</span>
          </div>
          <p className="text-orange-100 mb-4">
            Giovanni Borborema Recreação - Transformando festas em momentos mágicos
          </p>
          <p className="text-orange-200 text-sm">
            © 2025 Tio Girafa Recreação. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

