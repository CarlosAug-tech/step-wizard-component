import React, { useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, WizardContent, WizardItem, WizardLine } from './styles';

export interface IStepObjectProps {
  Icon: React.ComponentType<IconBaseProps>;
  Component: React.ComponentType;
  isActiveStep?: boolean;
  isActiveStepLine?: boolean;
  isActiveStepComponent?: boolean;
}

interface IStepWizardProps {
  steps: IStepObjectProps[];
}

const StepWizard: React.FC<IStepWizardProps> = ({ steps }) => {
  const [dataStep, setDataStep] = useState<IStepObjectProps[]>([]);

  const loadSteps = async () => {
    const data = steps.map((step, index) =>
      index === 0
        ? {
            ...step,
            isActiveStep: true,
            isActiveStepComponent: true,
          }
        : { ...step, isActiveStep: false, isActiveStepLine: false },
    );
    setDataStep(data);
  };

  useEffect(() => {
    loadSteps();
  }, []);

  const changePropertyStep = (indexWizard: number, typeAction: string) => {
    let newArr = dataStep[indexWizard];
    if (typeAction === 'step') {
      newArr.isActiveStep = true;
    } else if (typeAction === 'line') {
      newArr.isActiveStepLine = true;
    }

    setDataStep((state) =>
      state.map((step, index) => (index === indexWizard ? newArr : step)),
    );
  };

  const removePropertyStep = (indexWizard: number, typeAction: string) => {
    let newArr = dataStep[indexWizard];
    if (typeAction === 'step') {
      newArr.isActiveStep = false;
    } else if (typeAction === 'line') {
      newArr.isActiveStepLine = false;
    }

    setDataStep((state) =>
      state.map((step, index) => (index === indexWizard ? newArr : step)),
    );
  };

  const handleChangeStep = async (indexWizard: number) => {
    dataStep.map((step, index) =>
      index <= indexWizard
        ? setTimeout(() => {
            changePropertyStep(index, 'step');
          }, 400 * index)
        : setTimeout(() => removePropertyStep(index, 'step'), 200 / index),
    );

    dataStep.map((step, index) =>
      index <= indexWizard
        ? setTimeout(() => {
            changePropertyStep(index, 'line');
          }, 200 * index)
        : setTimeout(() => removePropertyStep(index, 'line'), 400 / index),
    );

    setTimeout(() => {
      setDataStep((state) =>
        state.map((step, index) =>
          index === indexWizard
            ? { ...step, isActiveStepComponent: true }
            : { ...step, isActiveStepComponent: false },
        ),
      );
    }, 400 * steps.length - 1);
  };

  return (
    <Container>
      <WizardContent>
        {dataStep.map((step, index) => (
          <React.Fragment key={`step-${index + 1}`}>
            {index !== 0 && index + 1 <= steps.length && (
              <WizardLine
                data-testid={`line-${index + 1}`}
                isActiveStepLine={step.isActiveStepLine}
              >
                <span />
              </WizardLine>
            )}
            <WizardItem
              data-testid={`step-${index + 1}`}
              isActiveStep={step.isActiveStep}
            >
              <button type="button" onClick={() => handleChangeStep(index)}>
                <step.Icon size={20} />
              </button>
            </WizardItem>
          </React.Fragment>
        ))}
      </WizardContent>
      {dataStep.map((step, index) => (
        <div
          key={`stepComponent-${index + 1}`}
          data-testid={`component-${index + 1}`}
          style={{ width: '100%' }}
        >
          {step.isActiveStepComponent && <step.Component />}
        </div>
      ))}
    </Container>
  );
};
export default StepWizard;
