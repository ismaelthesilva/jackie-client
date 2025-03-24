import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // New Zealand Personal Training Content
    hero: {
      title: "Transform Your Body with Dr. Jackie",
      subtitle: "Expert Personal Training to Achieve Your Fitness Goals",
      cta: "Start Your Journey"
    },
    services: {
      title: "What Dr. Jackie Offers",
      personalTraining: {
        title: "Personal Training Plans",
        description: "Customized training plans designed to help you reach your fitness goals."
      },
      sportsPerformance: {
        title: "Sports Performance",
        description: "Tailored training to enhance your sports performance and endurance."
      },
      strengthConditioning: {
        title: "Strength & Conditioning",
        description: "Focused workouts to improve strength, conditioning, and overall fitness."
      }
    },
    cta: {
      title: "Ready to Get Fit with a Pro?",
      button: "Join Now"
    }
  },
  pt: {
    // Brazilian Doctor Content
    hero: {
      title: "Transforme Sua Saúde com Dra. Jackie",
      subtitle: "Especialista em Análise Clínica e Mentoria em Saúde",
      cta: "Inicie Sua Jornada"
    },
    services: {
      title: "Serviços da Dra. Jackie",
      bloodAnalysis: {
        title: "Análise de Exames",
        description: "Análise detalhada de exames laboratoriais para identificação de problemas de saúde."
      },
      healthConsultation: {
        title: "Consulta de Saúde",
        description: "Avaliação completa e identificação de problemas de saúde."
      },
      dietMentorship: {
        title: "Mentoria em Dieta",
        description: "Orientação personalizada para melhorar sua saúde através da alimentação."
      }
    },
    cta: {
      title: "Pronto para Transformar Sua Saúde?",
      button: "Agende Agora"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 