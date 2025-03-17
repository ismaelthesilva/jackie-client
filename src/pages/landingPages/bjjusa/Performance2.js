import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.css'; 

const Performance2 = () => {
  // State variables
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [giType, setGiType] = useState('GI');
  const [trainingType, setTrainingType] = useState('Training');
  const [gender, setGender] = useState('Male');
  const [belt, setBelt] = useState('White');
  const [beltStripes, setBeltStripes] = useState(0);
  const [age, setAge] = useState('Adult');
  const [gymName, setGymName] = useState('');
  const [masterName, setMasterName] = useState('');
  const [competitionName, setCompetitionName] = useState('');
  const [matchResult, setMatchResult] = useState('Win');
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);
  const [competitionOutcome, setCompetitionOutcome] = useState('');
  const [score, setScore] = useState('');
  const [weightDivision, setWeightDivision] = useState(''); // Added for weight selection
  const [showAdvancedBelts, setShowAdvancedBelts] = useState(false);

  // Age categories, belts, weights, submissions, and other constants remain unchanged
  const ages = ['Kids', 'Juvenile', 'Adult', 'Master 1', 'Master 2', 'Master 3', 'Master 4', 'Master 5', 'Master 6', 'Master 7'];

  const getBeltsForAgeAndType = (selectedAge, advanced) => {
    if (selectedAge === 'Kids') return ['White', 'Grey', 'Yellow', 'Orange', 'Green'];
    if (selectedAge === 'Juvenile') return ['White', 'Blue', 'Purple', 'Brown', 'Black'];
    return advanced
      ? ['White', 'Blue', 'Purple', 'Brown', 'Black 0°', 'Black 1°', 'Black 2°', 'Black 3°', 'Black 4°', 'Black 5°', 'Black 6°', 'Red/Black 7°', 'Red/White 8°', 'Red 9°']
      : ['White', 'Blue', 'Purple', 'Brown', 'Black'];
  };

  const getBeltDegree = () => {
    if ((showAdvancedBelts && belt.startsWith('Black')) || belt.startsWith('Red')) {
      const degreeMatch = belt.match(/\d+°/);
      return degreeMatch ? parseInt(degreeMatch[0]) : 1;
    }
    return beltStripes;
  };

  const weights = {
    GI: {
      Male: [
        { name: 'Rooster', kg: 57.5, lbs: 127 },
        { name: 'Light Feather', kg: 64, lbs: 141 },
        { name: 'Feather', kg: 70, lbs: 154 },
        { name: 'Light', kg: 76, lbs: 168 },
        { name: 'Middle', kg: 82.3, lbs: 181 },
        { name: 'Medium Heavy', kg: 88.3, lbs: 195 },
        { name: 'Heavy', kg: 94.3, lbs: 208 },
        { name: 'Super Heavy', kg: 100.5, lbs: 222 },
        { name: 'Ultra Heavy', kg: 'Over 100.5', lbs: 'Over 222' }
      ],
      Female: [
        { name: 'Rooster', kg: 48.5, lbs: 107 },
        { name: 'Light Feather', kg: 53.5, lbs: 118 },
        { name: 'Feather', kg: 58.5, lbs: 129 },
        { name: 'Light', kg: 64, lbs: 141 },
        { name: 'Middle', kg: 69, lbs: 152 },
        { name: 'Medium Heavy', kg: 74, lbs: 163 },
        { name: 'Heavy', kg: 79.3, lbs: 175 },
        { name: 'Super Heavy', kg: 84.3, lbs: 186 },
        { name: 'Ultra Heavy', kg: 'Over 84.3', lbs: 'Over 186' }
      ]
    },
    NO_GI: {
      Male: [
        { name: 'Rooster', kg: 55.5, lbs: 122 },
        { name: 'Light Feather', kg: 61.5, lbs: 136 },
        { name: 'Feather', kg: 67.5, lbs: 149 },
        { name: 'Light', kg: 73.5, lbs: 162 },
        { name: 'Middle', kg: 79.5, lbs: 175 },
        { name: 'Medium Heavy', kg: 85.5, lbs: 189 },
        { name: 'Heavy', kg: 91.5, lbs: 202 },
        { name: 'Super Heavy', kg: 97.5, lbs: 215 },
        { name: 'Ultra Heavy', kg: 'Over 97.5', lbs: 'Over 215' }
      ],
      Female: [
        { name: 'Rooster', kg: 46.5, lbs: 103 },
        { name: 'Light Feather', kg: 51.5, lbs: 114 },
        { name: 'Feather', kg: 56.5, lbs: 125 },
        { name: 'Light', kg: 61.5, lbs: 136 },
        { name: 'Middle', kg: 66.5, lbs: 147 },
        { name: 'Medium Heavy', kg: 71.5, lbs: 158 },
        { name: 'Heavy', kg: 76.5, lbs: 169 },
        { name: 'Super Heavy', kg: 81.5, lbs: 180 },
        { name: 'Ultra Heavy', kg: 'Over 81.5', lbs: 'Over 180' }
      ]
    }
  };

  const submissions = {
    Choke: [
      'RNC (Rear Naked Choke)',  // C
      'Lapel Choke',             // C
      'Omoplata',               // C
      'Collar Choke',           // C
      'Guillotine',             // C
      'Ezekiel Choke',          // C
      'North-South Choke',      // C
      'Rear Triangle',          // C
      'Side Triangle',          // C
      'Darce Choke',            // C
      'Baseball Bat Choke',     // C
      'Crucifix Choke',         // C
      'Loop Choke',             // C
      'Brabo Choke',            // C
      'Neck Pressure Submission', // C
      'Shoulder Choke',         // C
      'Smother',                // C
      'Flying Triangle',        // C
      'Gogoplata',              // C
      'Dead Orchard',           // C
      'Japanese Necktie'        // C
    ],
    Arm: [
      'Americana',              // A
      'Armbar',                 // A
      'Kimura',                 // A
      'Arm Triangle',           // A
      'Inverted Armbar',        // A
      'Tap out',                // A
      'Estima Lock'             // A
    ],
    Leg: [
      'Heel Hook',              // L
      'Outside Heel Hook',      // L
      'Ankle Lock',             // L
      'Inside Heel Hook',       // L
      'Bow and Arrow',          // L
      'Kneebar',                // L
      'Straight Ankle Lock',    // L
      'Toe Hold',               // L
      'Wrist Lock',             // L
      'Limb Lock',              // L
      'Anaconda Cloverleaf',    // L
      'Shoulder Lock',          // L
      'Calf Slicer',            // L
      'Calf Cracker',           // L
      'Subey Stretch'           // L
    ]
  };

  const getResultBackground = (result) => {
    switch (result) {
      case 'Win': return '#28a745';
      case 'Draw': return '#ffc107';
      case 'Learn': return '#dc3545';
      default: return 'transparent';
    }
  };

  // Updated useEffect
  useEffect(() => {
    if (trainingType !== 'Training' || (matchResult !== 'Win' && matchResult !== 'Learn')) {
      setSelectedSubmissions([]);
    }
    if (trainingType !== 'Competition' || (matchResult !== 'Win' && matchResult !== 'Learn')) {
      setCompetitionOutcome('');
      setScore('');
    }
  }, [trainingType, matchResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      giType,
      trainingType,
      gender,
      belt,
      beltStripes,
      age,
      gymName,
      masterName,
      competitionName,
      matchResult,
      selectedSubmissions: trainingType === 'Training' ? selectedSubmissions : [],
      competitionOutcome: trainingType === 'Competition' ? competitionOutcome : '',
      score: trainingType === 'Competition' && competitionOutcome === 'Points' ? score : '',
      weightDivision
    };
    console.log(formData);
  };

  return (
    <div className="techniques-section text-white d-flex align-items-center min-vh-100">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">Performance Tracker</h1>
            <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">Track your progress and dominate the mat!</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form className="p-4 bg-dark bg-opacity-75 rounded shadow-lg" onSubmit={handleSubmit}>
              <Row className="g-3">
                {/* Gender */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Gender</Form.Label>
                  <ButtonGroup className="w-100">
                    <ToggleButton
                      id="male-toggle"
                      type="radio"
                      variant={gender === 'Male' ? 'primary' : 'outline-light'}
                      name="gender"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={(e) => setGender(e.target.value)}
                      className="flex-grow-1 rounded-0"
                    >
                      Male
                    </ToggleButton>
                    <ToggleButton
                      id="female-toggle"
                      type="radio"
                      variant={gender === 'Female' ? 'primary' : 'outline-light'}
                      name="gender"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={(e) => setGender(e.target.value)}
                      className="flex-grow-1 rounded-0"
                    >
                      Female
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>

                {/* Age */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Age Category</Form.Label>
                  <Form.Select value={age} onChange={(e) => setAge(e.target.value)}>
                    {ages.map((ageOption) => <option key={ageOption}>{ageOption}</option>)}
                  </Form.Select>
                </Form.Group>

                {/* Belt */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Belt</Form.Label>
                  <Form.Select
                    value={belt}
                    onChange={(e) => {
                      const newBelt = e.target.value;
                      setBelt(newBelt);
                      if (newBelt === 'Black' && age !== 'Kids' && age !== 'Juvenile') setShowAdvancedBelts(true);
                      else if (!getBeltsForAgeAndType(age, true).includes(newBelt)) setShowAdvancedBelts(false);
                    }}
                  >
                    {getBeltsForAgeAndType(age, showAdvancedBelts).map((beltOption) => (
                      <option key={beltOption}>{beltOption}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Stripes/Degrees */}
                {((showAdvancedBelts && belt.startsWith('Black')) || belt.startsWith('Red')) ? (
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Degree (Automatic)</Form.Label>
                    <Form.Control type="text" value={`${getBeltDegree()}°`} readOnly />
                  </Form.Group>
                ) : (
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Stripes (0-4)</Form.Label>
                    <Form.Select value={beltStripes} onChange={(e) => setBeltStripes(parseInt(e.target.value))}>
                      {Array.from({ length: 5 }, (_, i) => i).map((stripe) => (
                        <option key={stripe} value={stripe}>{stripe} Stripe(s)</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                )}

                {/* GI/NO-GI */}
                <Form.Group as={Col} md={12} className="mb-3">
                  <Form.Label>GI / NO-GI</Form.Label>
                  <ButtonGroup className="w-100">
                    <ToggleButton
                      id="gi-toggle"
                      type="radio"
                      variant={giType === 'GI' ? 'primary' : 'outline-light'}
                      name="gi-type"
                      value="GI"
                      checked={giType === 'GI'}
                      onChange={(e) => setGiType(e.target.value)}
                      className="flex-grow-1 rounded-0"
                    >
                      GI
                    </ToggleButton>
                    <ToggleButton
                      id="no-gi-toggle"
                      type="radio"
                      variant={giType === 'NO_GI' ? 'primary' : 'outline-light'}
                      name="gi-type"
                      value="NO_GI"
                      checked={giType === 'NO_GI'}
                      onChange={(e) => setGiType(e.target.value)}
                      className="flex-grow-1 rounded-0"
                    >
                      NO-GI
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>

                {/* Weight Division */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Weight Division</Form.Label>
                  <Form.Select
                    value={weightDivision}
                    onChange={(e) => setWeightDivision(e.target.value)}
                  >
                    <option value="">Select Weight</option>
                    {weights[giType][gender].map((weight) => (
                      <option key={weight.name} value={weight.name}>
                        {`${weight.name} - ${weight.kg} kg / ${weight.lbs} lbs`}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Training or Competition */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Training or Competition</Form.Label>
                  <ButtonGroup className="w-100">
                    <ToggleButton
                      id="training-toggle"
                      type="radio"
                      variant={trainingType === 'Training' ? 'primary' : 'outline-light'}
                      name="training-type"
                      value="Training"
                      checked={trainingType === 'Training'}
                      onChange={(e) => setTrainingType(e.target.value)}
                      className="flex-grow-1 rounded-0"
                    >
                      Training
                    </ToggleButton>
                    <ToggleButton
                      id="competition-toggle"
                      type="radio"
                      variant={trainingType === 'Competition' ? 'primary' : 'outline-light'}
                      name="training-type"
                      value="Competition"
                      checked={trainingType === 'Competition'}
                      onChange={(e) => setTrainingType(e.target.value)}
                      className="flex-grow-1 rounded-0"
                    >
                      Competition
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>

                {/* Gym Name */}
                <Form.Group as={Col} md={12}>
                  <Form.Label>Gym Name</Form.Label>
                  <Form.Control type="text" value={gymName} onChange={(e) => setGymName(e.target.value)} />
                </Form.Group>

                {/* Master's Name */}
                <Form.Group as={Col} md={12}>
                  <Form.Label>Master's Name</Form.Label>
                  <Form.Control type="text" value={masterName} onChange={(e) => setMasterName(e.target.value)} />
                </Form.Group>

                {/* Competition Name */}
                {trainingType === 'Competition' && (
                  <Form.Group as={Col} md={12}>
                    <Form.Label>Competition Name</Form.Label>
                    <Form.Control type="text" value={competitionName} onChange={(e) => setCompetitionName(e.target.value)} />
                  </Form.Group>
                )}

                {/* Match Result */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Match Result</Form.Label>
                  <Form.Select
                    value={matchResult}
                    onChange={(e) => setMatchResult(e.target.value)}
                    style={{ backgroundColor: getResultBackground(matchResult) }}
                  >
                    <option value="Win">Win</option>
                    <option value="Draw">Draw</option>
                    <option value="Learn">Learn</option>
                  </Form.Select>
                </Form.Group>

                {/* Submission/Outcome Selection */}
                {(trainingType === 'Training' || trainingType === 'Competition') && (matchResult === 'Win' || matchResult === 'Learn') && (
                  <Form.Group as={Col} md={12}>
                    <Form.Label>
                      {trainingType === 'Training'
                        ? matchResult === 'Win' ? 'Submissions Used' : 'Submissions Suffered'
                        : matchResult === 'Win' ? 'Submissions Used' : 'Submissions Suffered'}
                    </Form.Label>
                    {trainingType === 'Training' ? (
                      <Form.Select
                        as="select"
                        multiple
                        value={selectedSubmissions}
                        onChange={(e) => setSelectedSubmissions(Array.from(e.target.selectedOptions, (option) => option.value))}
                        className="mb-2"
                        size={5} // Shows multiple options without scrolling initially
                      >
                        {Object.entries(submissions).map(([type, subs]) => (
                          <optgroup key={type} label={`${type} (${type === 'Choke' ? 'C' : type === 'Arm' ? 'A' : 'L'})`}>
                            {subs.map((sub) => (
                              <option key={sub} value={sub}>{sub}</option>
                            ))}
                          </optgroup>
                        ))}
                      </Form.Select>
                    ) : (
                      <Form.Select
                        as="select"
                        multiple
                        value={selectedSubmissions}
                        onChange={(e) => setSelectedSubmissions(Array.from(e.target.selectedOptions, (option) => option.value))}
                        className="mb-2"
                        size={5} // Shows multiple options without scrolling initially
                      >
                        <option value="">Select Submissions</option>
                        {Object.entries(submissions).map(([type, subs]) => (
                          <optgroup key={type} label={`${type} (${type === 'Choke' ? 'C' : type === 'Arm' ? 'A' : 'L'})`}>
                            {subs.map((sub) => (
                              <option key={sub} value={sub}>{sub}</option>
                            ))}
                          </optgroup>
                        ))}
                      </Form.Select>
                    )}
                    <Form.Text className="text-muted">
                      {trainingType === 'Training'
                        ? 'Hold Ctrl (Windows) or Cmd (Mac) to select multiple submissions.'
                        : 'Hold Ctrl (Windows) or Cmd (Mac) to select multiple submissions for the competition outcome.'}
                    </Form.Text>
                    {trainingType === 'Competition' && (
                      <Form.Select
                        value={competitionOutcome}
                        onChange={(e) => setCompetitionOutcome(e.target.value)}
                        className="mt-2 mb-2"
                      >
                        <option value="">Select Outcome Type</option>
                        <option value="Submission">Submission</option>
                        <option value="Walkover">Walkover</option>
                        <option value="Ref Decision">Ref Decision</option>
                        <option value="Points">Points</option>
                        <option value="Golden">Golden</option>
                      </Form.Select>
                    )}
                    {(trainingType === 'Competition' && (competitionOutcome === 'Points' || competitionOutcome === 'Golden')) && (
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder={competitionOutcome === 'Points' ? "Enter score (e.g., 10-2 or Advantage)" : "Enter Golden Score result (e.g., Takedown or Submission)"}
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        className="mt-2"
                      />
                    )}
                  </Form.Group>
                )}

                {/* Date */}
                <Form.Group as={Col} md={12}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                {/* Submit */}
                <Form.Group as={Col} md={12} className="text-center mt-4">
                  <Button variant="primary" type="submit" size="lg">
                    Register Result
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Performance2;