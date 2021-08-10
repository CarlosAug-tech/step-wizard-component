import styled from 'styled-components';

interface IStepWizardProps {
  isActiveStep?: boolean;
  isActiveStepLine?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const WizardContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const WizardItem = styled.div<IStepWizardProps>`
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    background: linear-gradient(to right, red 50%, #333 50%);
    background-size: 200% 100%;
    background-position: ${(props) =>
      props.isActiveStep ? 'left bottom' : 'right bottom'};
    transition: ${(props) =>
      props.isActiveStep
        ? 'background-position 0.6s ease'
        : 'background-position 0.4s ease'};
  }

  svg {
    color: #fff;
  }
`;

export const WizardLine = styled.div<IStepWizardProps>`
  width: 100%;
  height: 10px;
  position: relative;
  background: #333;

  span {
    width: ${(props) => (props.isActiveStepLine ? '100%' : '0')};
    height: 10px;
    top: 0;
    left: 0;
    position: absolute;
    background: red;
    transition: ${(props) =>
      props.isActiveStepLine
        ? 'width 0.4s ease-in-out'
        : 'width 0.6s ease-in-out'};
  }
`;
