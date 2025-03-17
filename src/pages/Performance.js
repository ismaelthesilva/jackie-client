// NutritionForm.js
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Performance.css';

const Performance = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formCompleted, setFormCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [clientEmail, setClientEmail] = useState('');
  const formRef = useRef();

  const questions = [
    {
      id: 'welcome',
      type: 'welcome',
      title: 'Nutrition Questionnaire',
      description: 'Please answer the following questions to help us create your personalized nutrition plan.',
      buttonText: 'Start'
    },
    { id: 'name', type: 'text', title: 'What is your name?', required: true },
    { id: 'age', type: 'number', title: 'What is your age?', required: true },
    { id: 'height', type: 'number', title: 'What is your height in cm?', required: true },
    { id: 'weight', type: 'number', title: 'What is your current weight in kg?', required: true },
    {
      id: 'goal',
      type: 'multiple_choice',
      title: 'What is your main goal?',
      options: ['Weight loss', 'Muscle gain', 'Maintenance', 'Other'],
      required: true
    },
    {
      id: 'health_conditions',
      type: 'yes_no',
      title: 'Do you have any relevant health conditions? (e.g., diabetes, hypertension, food intolerances)',
      required: true
    },
    {
      id: 'health_conditions_details',
      type: 'textarea',
      title: 'Please describe your health conditions:',
      condition: { id: 'health_conditions', value: 'Yes' },
      required: true
    },
    {
      id: 'medications',
      type: 'yes_no',
      title: 'Do you take any medications or supplements regularly?',
      required: true
    },
    {
      id: 'medications_details',
      type: 'textarea',
      title: 'Describe any medications or supplements that you are taking regularly:',
      condition: { id: 'medications', value: 'Yes' },
      required: true
    },
    {
      id: 'foods_like',
      type: 'textarea',
      title: 'Which foods do you like and want to keep in your diet?',
      required: true
    },
    {
      id: 'foods_dislike',
      type: 'textarea',
      title: 'Which foods do you dislike or prefer to avoid?',
      required: true
    },
    {
      id: 'food_restrictions',
      type: 'yes_no',
      title: 'Do you have any food restrictions or allergies?',
      required: true
    },
    {
      id: 'food_restrictions_details',
      type: 'textarea',
      title: 'Describe your food restrictions or allergies:',
      condition: { id: 'food_restrictions', value: 'Yes' },
      required: true
    },
    {
      id: 'eating_routine',
      type: 'textarea',
      title: 'What is your current eating routine? (e.g., how many meals per day, approximate meal times)',
      required: true
    },
    {
      id: 'meal_selection',
      type: 'multiple_select',
      title: 'Select the meals you typically have:',
      options: ['Breakfast', 'Morning Tea', 'Lunch', 'Afternoon Tea', 'Dinner', 'Snacks'],
      required: true
    },
    {
      id: 'morning_preference',
      type: 'multiple_choice',
      title: 'Do you prefer sweet or savory meals in the morning?',
      options: ['Sweet', 'Savory', 'No preference'],
      required: true
    },
    {
      id: 'skip_meals',
      type: 'yes_no',
      title: 'Do you usually skip any meals?',
      required: true
    },
    {
      id: 'skip_meals_which',
      type: 'multiple_select',
      title: 'Which meals do you usually skip?',
      options: ['Breakfast', 'Morning Tea', 'Lunch', 'Afternoon Tea', 'Dinner', 'Snacks'],
      condition: { id: 'skip_meals', value: 'Yes' },
      required: true
    },
    {
      id: 'skip_meals_why',
      type: 'textarea',
      title: 'Why do you skip these meals?',
      condition: { id: 'skip_meals', value: 'Yes' },
      required: true
    },
    {
      id: 'protein_frequency',
      type: 'multiple_choice',
      title: 'How often do you consume protein per week? (e.g., beef, chicken, fish, eggs, tofu, legumes, whey protein)',
      options: ['1-2x per week', '3-4x per week', '5-6x per week', '7x per week', 'More than 7x per week'],
      required: true
    },
    {
      id: 'protein_sources',
      type: 'textarea',
      title: 'Which protein sources do you consume and which ones do you prefer?',
      required: true
    },
    {
      id: 'carbs_frequency',
      type: 'multiple_choice',
      title: 'How often do you consume carbohydrates per week? (e.g., rice, potatoes, bread, pasta, oats, quinoa)',
      options: ['1-2x per week', '3-4x per week', '5-6x per week', '7x per week', 'More than 7x per week'],
      required: true
    },
    {
      id: 'carbs_preference',
      type: 'multiple_choice',
      title: 'Do you prefer whole or refined carbohydrates?',
      options: ['Whole', 'Refined', 'No preference'],
      required: true
    },
    {
      id: 'carbs_dinner',
      type: 'yes_no',
      title: 'Do you usually eat carbohydrates at dinner?',
      required: true
    },
    {
      id: 'fat_sources',
      type: 'textarea',
      title: 'Which fat sources are part of your diet? (e.g., olive oil, avocado, nuts, butter, coconut oil)',
      required: true
    },
    {
      id: 'processed_foods',
      type: 'yes_no',
      title: 'Do you frequently consume fried or processed foods?',
      required: true
    },
    {
      id: 'fruit_servings',
      type: 'multiple_choice',
      title: 'How many servings of fruit do you consume per week?',
      options: ['None', '1-2x per week', '3-4x per week', '5-6x per week', '7x per week', 'More than 7x per week'],
      required: true
    },
    {
      id: 'favorite_fruits',
      type: 'textarea',
      title: 'Which fruits do you like the most?',
      required: true
    },
    {
      id: 'vegetable_servings',
      type: 'multiple_choice',
      title: 'How many servings of vegetables and salads do you consume per week?',
      options: ['None', '1-2x per week', '3-4x per week', '5-6x per week', '7x per week', 'More than 7x per week'],
      required: true
    },
    {
      id: 'favorite_vegetables',
      type: 'textarea',
      title: 'Which vegetables do you like the most?',
      required: true
    },
    {
      id: 'vegetable_preference',
      type: 'multiple_choice',
      title: 'Do you prefer raw or cooked vegetables?',
      options: ['Raw', 'Cooked', 'Both equally'],
      required: true
    },
    {
      id: 'water_intake',
      type: 'multiple_choice',
      title: 'How many liters of water do you drink per day?',
      options: ['Less than 1 liter', '1 liter', '2 litres', '3 litres', '4 litres', 'More than 4 litres'],
      required: true
    },
    {
      id: 'liquids_during_meals',
      type: 'yes_no',
      title: 'Do you drink liquids during meals?',
      required: true
    },
    {
      id: 'liquids_during_meals_details',
      type: 'textarea',
      title: 'What do you drink and how much?',
      condition: { id: 'liquids_during_meals', value: 'Yes' },
      required: true
    },
    {
      id: 'beverages',
      type: 'yes_no',
      title: 'Do you drink coffee, tea, soda, or juice?',
      required: true
    },
    {
      id: 'beverages_frequency',
      type: 'multiple_choice',
      title: 'How often?',
      options: ['Rarely', '1x per week', '2-3x per week', '1x per day', '2x per day', '3x per day', 'More than 3x per week'],
      condition: { id: 'beverages', value: 'Yes' },
      required: true
    },
    {
      id: 'sweeteners',
      type: 'yes_no',
      title: 'Do you add sugar or sweeteners to your drinks?',
      condition: { id: 'beverages', value: 'Yes' },
      required: true
    },
    {
      id: 'alcohol',
      type: 'yes_no',
      title: 'Do you consume alcoholic beverages?',
      required: true
    },
    {
      id: 'alcohol_frequency',
      type: 'multiple_choice',
      title: 'How often?',
      options: ['Rarely', '1-2x per month', '1x per week', '2-3x per week', '1x/year'],
      condition: { id: 'alcohol', value: 'Yes' },
      required: true
    },
    {
      id: 'alcohol_preference',
      type: 'multiple_choice',
      title: 'Which beverages do you prefer?',
      options: ['Wine', 'Beer', 'Spirits', 'Cocktails'],
      condition: { id: 'alcohol', value: 'Yes' },
      required: true
    },
    {
      id: 'alcohol_with_food',
      type: 'yes_no',
      title: 'Do you usually consume alcohol with specific foods?',
      condition: { id: 'alcohol', value: 'Yes' },
      required: true
    },
    {
      id: 'cheat_meals',
      type: 'yes_no',
      title: 'Do you have free meals or "cheat meals"?',
      required: true
    },
    {
      id: 'cheat_meals_frequency',
      type: 'multiple_choice',
      title: 'How often?',
      options: ['1x per week', '2-3x per week', '1x per month', '1x per day'],
      condition: { id: 'cheat_meals', value: 'Yes' },
      required: true
    },
    {
      id: 'cheat_meals_details',
      type: 'textarea',
      title: 'What do you usually eat in these meals?',
      condition: { id: 'cheat_meals', value: 'Yes' },
      required: true
    },
    {
      id: 'meal_preparation',
      type: 'multiple_choice',
      title: 'Do you usually eat out or prepare your meals at home?',
      options: ['Eat out', 'Prepare at home', 'Both equally'],
      required: true
    },
    {
      id: 'meal_times',
      type: 'multiple_choice',
      title: 'Do you have set meal times, or do they vary?',
      options: ['Set meal', 'Vary'],
      required: true
    },
    {
      id: 'snacking',
      type: 'yes_no',
      title: 'Do you snack between meals?',
      required: true
    },
    {
      id: 'snacking_details',
      type: 'textarea',
      title: 'What do you eat?',
      condition: { id: 'snacking', value: 'Yes' },
      required: true
    },
    {
      id: 'exercise',
      type: 'textarea',
      title: 'What is your exercise routine? (If you work out, what type and how many times per week?)',
      required: true
    },
    {
      id: 'sleep_routine',
      type: 'textarea',
      title: 'What is your sleep routine?',
      required: true
    },
    {
      id: 'sleep_hours',
      type: 'multiple_choice',
      title: 'How many hours do you sleep per night?',
      options: ['Less than 5h', '5h', '6h', '7h', '8h', 'More than 8h'],
      required: true
    },
    {
      id: 'food_availability',
      type: 'yes_no',
      title: 'Do you have difficulty finding any specific foods?',
      required: true
    },
    {
      id: 'food_availability_details',
      type: 'textarea',
      title: 'Which ones?',
      condition: { id: 'food_availability', value: 'Yes' },
      required: true
    },
    {
      id: 'local_foods',
      type: 'yes_no',
      title: 'Do you prefer more accessible and locally available options? (e.g., lamb, fish, kumara, dairy, local fruits)',
      required: true
    },
    {
      id: 'work_schedule',
      type: 'multiple_choice',
      title: 'Do you work fixed hours or shift work?',
      options: ['Fixed hours', 'Shift work'],
      required: true
    },
    {
      id: 'work_affects_meals',
      type: 'yes_no',
      title: 'Does this affect your meal schedule?',
      required: true
    },
    {
      id: 'eat_out',
      type: 'yes_no',
      title: 'Do you frequently eat at Coffee\'s Places or restaurants?',
      required: true
    },
    {
      id: 'eat_out_details',
      type: 'textarea',
      title: 'What types of meals do you usually choose?',
      condition: { id: 'eat_out', value: 'Yes' },
      required: true
    },
    {
      id: 'outdoor_activities',
      type: 'yes_no',
      title: 'Do you often engage in outdoor activities? (e.g., hiking, sports, cycling, beach)',
      required: true
    },
    {
      id: 'winter_foods',
      type: 'yes_no',
      title: 'In winter, do you prefer warmer, comforting meals?',
      required: true
    },
    {
      id: 'winter_foods_description',
      type: 'textarea',
      title: 'Which ones?',
      condition: { id: 'winter_foods', value: 'Yes' },
      required: true
    },
    {
      id: 'summer_foods',
      type: 'yes_no',
      title: 'In summer, do you tend to eat lighter or colder meals?',
      required: true
    },
    {
      id: 'supplements',
      type: 'textarea',
      title: 'Do you take any dietary supplements? If so, which ones?',
      required: false
    },
    {
      id: 'specific_needs',
      type: 'textarea',
      title: 'Do you have any specific nutritional needs that should be included in your diet?',
      required: false
    },
    {
      id: 'final_considerations',
      type: 'textarea',
      title: '✨ Final Considerations',
      description: 'Any additional information you would like to share',
      required: false
    },
    {
      id: 'email',
      type: 'email',
      title: 'Please provide your email to receive your personalized nutrition plan',
      required: true
    },
    {
      id: 'thankYou',
      type: 'thank_you',
      title: 'Thank you for completing the nutrition questionnaire!',
      description: 'We will analyze your responses and send your personalized nutrition plan to your email soon.'
    }
  ];

  const shouldDisplayQuestion = (question) => {
    if (!question.condition) return true;
    const { id, value } = question.condition;
    return answers[id] === value;
  };

  const getNextQuestion = (currentIndex) => {
    for (let i = currentIndex + 1; i < questions.length; i++) {
      if (shouldDisplayQuestion(questions[i])) {
        return i;
      }
    }
    return questions.length - 1;
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (questionId === 'email') {
      setClientEmail(answer);
    }
    const nextIndex = getNextQuestion(currentQuestion);
    setCurrentQuestion(nextIndex);
    if (nextIndex === questions.length - 1) {
      setFormCompleted(true);
    }
  };

  useEffect(() => {
    if (formCompleted) {
      generatePDFAndSendEmail();
    }
  }, [formCompleted]);

//EmailJS
const generatePDFAndSendEmail = async () => {
  setIsLoading(true);
  console.log('Starting generatePDFAndSendEmail...');
  try {
    console.log('Building email body...');
    let emailBody = '<h1>Nutrition Assessment</h1>';
    emailBody += '<h2>Client Details</h2>';
    emailBody += `<p><strong>Name:</strong> ${answers.name || 'N/A'}</p>`;
    emailBody += `<p><strong>Age:</strong> ${answers.age || 'N/A'} years</p>`;
    emailBody += `<p><strong>Height:</strong> ${answers.height || 'N/A'} cm</p>`;
    emailBody += `<p><strong>Weight:</strong> ${answers.weight || 'N/A'} kg</p>`;
    emailBody += `<p><strong>Main Goal:</strong> ${answers.goal || 'N/A'}</p>`;
    emailBody += '<h2>Questionnaire Responses</h2>';
    questions.forEach((question) => {
      if (question.type === 'welcome' || question.type === 'thank_you' || 
          ['name', 'age', 'height', 'weight', 'goal', 'email'].includes(question.id)) {
        return;
      }
      if (!shouldDisplayQuestion(question)) {
        return;
      }
      if (!answers[question.id] && answers[question.id] !== 0) {
        return;
      }
      let answerText = answers[question.id];
      if (Array.isArray(answerText)) {
        answerText = answerText.join(', ');
      }
      emailBody += `<p><strong>${question.title}</strong><br>${answerText}</p>`;
    });

    const templateParams = {
      to_email: 'jacksouto7@gmail.com',
      client_name: answers.name || 'Client',
      client_email: clientEmail || 'N/A',
      email_body: emailBody
    };
    console.log('Email params prepared:', templateParams);

    console.log('Sending email via EmailJS...');
    const response = await emailjs.send(
      'service_28v1fvr',   // Your Service ID
      'template_wj6zu2c',  // Your Template ID
      templateParams,
      'ezbPPmM_lDMistyGT' // Your Public Key
    );
    console.log('EmailJS response:', response);

    setEmailSent(true);
    console.log('Email sent successfully, state updated');
  } catch (error) {
    console.error('Error in generatePDFAndSendEmail:', error);
    alert('Failed to send email. Please check the console for details and try again.');
  } finally {
    setIsLoading(false);
    console.log('Process completed, loading state reset');
  }
};

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion];

    const handleKeyPress = (e, value) => {
      if (e.key === 'Enter' && (value || !currentQ.required)) {
        handleAnswer(currentQ.id, value);
      }
    };

    if (currentQ.type === 'welcome') {
      return (
        <div className="question-card welcome">
          <h1>{currentQ.title}</h1>
          <p>{currentQ.description}</p>
          <button 
            className="typeform-btn"
            onClick={() => setCurrentQuestion(getNextQuestion(currentQuestion))}
          >
            {currentQ.buttonText}
          </button>
        </div>
      );
    }

    if (currentQ.type === 'thank_you') {
      return (
        <div className="question-card thank-you">
          <h1>{currentQ.title}</h1>
          <p>{currentQ.description}</p>
          {isLoading && <p className="processing">Processing your responses...</p>}
          {emailSent && <p className="success">Successfully submitted! Check your email soon.</p>}
        </div>
      );
    }

    return (
      <div className="question-card" ref={formRef}>
        <h2>{currentQ.title}</h2>
        {currentQ.description && <p className="description">{currentQ.description}</p>}

        {['text', 'number', 'email'].includes(currentQ.type) && (
          <div className="input-group">
            <input
              type={currentQ.type}
              placeholder="Type your answer..."
              value={answers[currentQ.id] || ''}
              onChange={(e) => setAnswers(prev => ({ ...prev, [currentQ.id]: e.target.value }))}
              onKeyPress={(e) => handleKeyPress(e, answers[currentQ.id])}
              required={currentQ.required}
              autoFocus
            />
            <button 
              className="typeform-btn"
              onClick={() => handleAnswer(currentQ.id, answers[currentQ.id] || '')}
              disabled={currentQ.required && !answers[currentQ.id]}
            >
              Next
            </button>
          </div>
        )}

        {currentQ.type === 'textarea' && (
          <div className="input-group">
            <textarea
              placeholder="Type your answer..."
              value={answers[currentQ.id] || ''}
              onChange={(e) => setAnswers(prev => ({ ...prev, [currentQ.id]: e.target.value }))}
              onKeyPress={(e) => handleKeyPress(e, answers[currentQ.id])}
              required={currentQ.required}
              autoFocus
            />
            <button 
              className="typeform-btn"
              onClick={() => handleAnswer(currentQ.id, answers[currentQ.id] || '')}
              disabled={currentQ.required && !answers[currentQ.id]}
            >
              Next
            </button>
          </div>
        )}

        {currentQ.type === 'yes_no' && (
          <div className="options-group">
            <button
              className={`typeform-option ${answers[currentQ.id] === 'Yes' ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQ.id, 'Yes')}
            >
              Yes
            </button>
            <button
              className={`typeform-option ${answers[currentQ.id] === 'No' ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQ.id, 'No')}
            >
              No
            </button>
          </div>
        )}

        {currentQ.type === 'multiple_choice' && (
          <div className="options-group">
            {currentQ.options.map((option) => (
              <button
                key={option}
                className={`typeform-option ${answers[currentQ.id] === option ? 'selected' : ''}`}
                onClick={() => handleAnswer(currentQ.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentQ.type === 'multiple_select' && (
          <div className="options-group">
            {currentQ.options.map((option) => (
              <button
                key={option}
                className={`typeform-option ${
                  answers[currentQ.id]?.includes(option) ? 'selected' : ''
                }`}
                onClick={() => {
                  const currentSelection = answers[currentQ.id] || [];
                  const newSelection = currentSelection.includes(option)
                    ? currentSelection.filter(item => item !== option)
                    : [...currentSelection, option];
                  setAnswers(prev => ({ ...prev, [currentQ.id]: newSelection }));
                }}
              >
                {option}
              </button>
            ))}
            <button
              className="typeform-btn"
              onClick={() => handleAnswer(currentQ.id, answers[currentQ.id] || [])}
              disabled={currentQ.required && (!answers[currentQ.id] || answers[currentQ.id].length === 0)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="nutrition-form-container">
      {renderQuestion()}
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestion / (questions.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Performance;