
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];

function StepperExample() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    return (
        <div>
            <Stepper sx={{ backgroundColor: 'lightgray', padding: 2 }} activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <br></br>
            <br></br>
            <Stepper orientation="vertical" activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            
            <br></br>
            <br></br>

            <Stepper variant="dots" activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>


            {activeStep === steps.length ? (
                <Typography>All steps completed</Typography>
            ) : (
                <div>
                    <Typography>{`This is ${steps[activeStep]}`}</Typography>
                    <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                    <Button onClick={handleNext}>Next</Button>
                </div>
            )}
        </div>
    );
}

export default StepperExample;
