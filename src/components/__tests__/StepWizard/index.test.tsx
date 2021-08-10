import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { FaHome, FaLock } from 'react-icons/fa';
import Home from '../../../pages/Home';
import StepWizard, { IStepObjectProps } from '../../StepWizard';

import 'jest-styled-components';
import SignIn from '../../../pages/SignUp';

afterEach(() => {
  cleanup();
});

test('should when initialize component first time', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepWizardElement = screen.getByTestId('step-1');
  expect(stepWizardElement).toBeInTheDocument();
  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  expect(stepWizardElement.firstChild).toHaveStyle(
    'background-position: left bottom',
  );
  expect(stepWizardElement.firstChild).toHaveStyle(
    'transition: background-position 0.6s ease',
  );
});

test('should when property isActiveStep equal true', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: true,
      isActiveStepLine: true,
      isActiveStepComponent: false,
    },
    {
      Icon: FaLock,
      Component: SignIn,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepWizardElement = screen.getByTestId('step-2');
  expect(stepWizardElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  fireEvent.click(buttonElement[1]);
  setTimeout(() => {
    expect(stepWizardElement.firstChild).toHaveStyle(
      'background-position: left bottom',
    );
    expect(stepWizardElement.firstChild).toHaveStyle(
      'transition: background-position 0.6s ease',
    );
  }, 2000);
});

test('should when property isActiveStepLine equal true', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: true,
      isActiveStepLine: true,
      isActiveStepComponent: false,
    },
    {
      Icon: FaLock,
      Component: SignIn,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepWizardElement = screen.getByTestId('line-2');
  expect(stepWizardElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  fireEvent.click(buttonElement[1]);
  setTimeout(() => {
    expect(stepWizardElement.firstChild).toHaveStyle('width: 100%');
    expect(stepWizardElement.firstChild).toHaveStyle(
      'transition: width 0.4s ease-in-out',
    );
  }, 2000);
});

test('should when property isActiveStepComponent equal true', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: true,
      isActiveStepLine: true,
      isActiveStepComponent: false,
    },
    {
      Icon: FaLock,
      Component: SignIn,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepComponentWizardElement = screen.getByTestId('component-2');
  expect(stepComponentWizardElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  fireEvent.click(buttonElement[1]);
  setTimeout(() => {
    expect(stepComponentWizardElement.firstChild).toBeInTheDocument();
  }, 2000);
});

test('should when property isActiveStep equal false', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: true,
      isActiveStepLine: true,
      isActiveStepComponent: false,
    },
    {
      Icon: FaLock,
      Component: SignIn,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepWizardElement = screen.getByTestId('step-2');
  expect(stepWizardElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  fireEvent.click(buttonElement[1]);
  setTimeout(() => {
    expect(stepWizardElement.firstChild).toHaveStyle(
      'background-position: left bottom',
    );
    expect(stepWizardElement.firstChild).toHaveStyle(
      'transition: background-position 0.6s ease',
    );
  }, 2000);
  fireEvent.click(buttonElement[0]);
  setTimeout(() => {
    expect(stepWizardElement.firstChild).not.toHaveStyle(
      'background-position: left bottom',
    );
    expect(stepWizardElement.firstChild).not.toHaveStyle(
      'transition: background-position 0.6s ease',
    );
  }, 2000);
});

test('should when property isActiveStepLine equal false', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: true,
      isActiveStepLine: true,
      isActiveStepComponent: false,
    },
    {
      Icon: FaLock,
      Component: SignIn,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepLineWizardElement = screen.getByTestId('line-2');
  expect(stepLineWizardElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  fireEvent.click(buttonElement[1]);
  setTimeout(() => {
    expect(stepLineWizardElement.firstChild).toHaveStyle('width: 100%');
    expect(stepLineWizardElement.firstChild).toHaveStyle(
      'transition: width 0.4s ease-in-out',
    );
  }, 2000);
  fireEvent.click(buttonElement[0]);
  setTimeout(() => {
    expect(stepLineWizardElement.firstChild).not.toHaveStyle('width: 100%');
    expect(stepLineWizardElement.firstChild).not.toHaveStyle(
      'transition: width 0.4s ease-in-out',
    );
  }, 2000);
});

test('should when property isActiveStepComponent equal false', () => {
  const steps: IStepObjectProps[] = [
    {
      Icon: FaHome,
      Component: Home,
      isActiveStep: true,
      isActiveStepLine: true,
      isActiveStepComponent: false,
    },
    {
      Icon: FaLock,
      Component: SignIn,
      isActiveStep: false,
      isActiveStepLine: false,
      isActiveStepComponent: false,
    },
  ];
  render(<StepWizard steps={steps} />);
  const stepComponentWizardElement = screen.getByTestId('component-2');
  expect(stepComponentWizardElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  fireEvent.click(buttonElement[1]);
  setTimeout(() => {
    expect(stepComponentWizardElement.firstChild).toBeInTheDocument();
  }, 2000);
  fireEvent.click(buttonElement[0]);
  setTimeout(() => {
    expect(stepComponentWizardElement.firstChild).not.toBeInTheDocument();
  }, 2000);
});
