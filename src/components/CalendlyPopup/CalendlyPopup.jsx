import { PopupWidget } from 'react-calendly';

const CalendlyPopup = () => (
  <PopupWidget
    url="https://calendly.com/habibapanna49"
    rootElement={document.getElementById('root')}
    text="Make a Schedule"
    color="#00BFFF"
    textColor="#ffffff"
  />
);

export default CalendlyPopup;
