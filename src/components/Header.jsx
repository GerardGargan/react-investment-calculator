import investmentCalcImage from '../assets/investment-calculator-logo.png';

export default function Header({ title }) {
    return (
        <header id="header">
            <img src={investmentCalcImage} alt="Investment Calulator Image" />
            <h1>{title}</h1>
        </header>
    );
}