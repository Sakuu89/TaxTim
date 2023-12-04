import React, { useState } from 'react';
import styles from "./AidkidPage.module.css";
const AidkidPage = () => {
  const [taxYear, setTaxYear] = useState(2024);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [medicalAidExpenses, setMedicalAidExpenses] = useState(0);
  const [numberOfDependents, setNumberOfDependents] = useState(0);
  const [qualifyingMedicalExpenses, setQualifyingMedicalExpenses] = useState(0);
  const [medicalCredits, setMedicalCredits] = useState([]);
  const [medicalSchemeCredits, setMedicalSchemeCredits] = useState(0);
  const [totalMedicalCredits, setTotalMedicalCredits] = useState(0);
  const [totalTaxCredit, setTotalTaxCredit] = useState(0);

  const calculateMedicalCredits = () => {
    // Medical credits
    const creditsPerMonth = 364;
    const medicalCreditsArr = Array.from({ length: 12 }, () => creditsPerMonth);
    setMedicalCredits(medicalCreditsArr);

    // Medical scheme credits
    const schemeCreditsPerMonth = 364;
    const schemeCredits = schemeCreditsPerMonth * 12;
    setMedicalSchemeCredits(schemeCredits);

    // Qualifying medical expenses
    const expenses = qualifyingMedicalExpenses;
    const expensesLimit = 0.075 * taxableIncome;
    const qualifyingExpenses = Math.min(expenses, expensesLimit);

    setQualifyingMedicalExpenses(qualifyingExpenses);

    // Total medical credits
    const totalCredits = medicalCreditsArr.reduce((a, b) => a + b, 0) + schemeCredits + qualifyingExpenses;
    setTotalMedicalCredits(totalCredits);

    // Total tax credit
    const taxCreditLimit = 0.25 * taxableIncome;
    const totalTaxCreditVal = Math.min(totalCredits, taxCreditLimit);
    setTotalTaxCredit(totalTaxCreditVal);
  };

  return (
    <div>
      <div className={styles.aidkid}>
        <h1>Medical Aid Tax Credits Calculator</h1>
        <h2>Work out qualifying expenditure and the total taxable credit amount for medical expenses</h2>
      </div>
      <div className={styles.duo} style={{display:"flex",width:"100%", gap:"150px" }}>
        <div className={styles.left_right} style={{width:"80%"}}>
          <div className={styles.left_heading}>
            <p>MEDICAL AID TAX CREDITS</p>
          </div>
          <div className={styles.left_mid}>
            <div>
                <label htmlFor="tax-year">Which tax year would you like to calculate?</label>
                <select className={styles.input_gap} id={styles.tax_year} value={taxYear} onChange={(e) => setTaxYear(Number(e.target.value))}>
                <option value={2024}>2024 (Mar 2023 - Feb 2024)</option>
                {/* Add more options for other tax years */}
                </select>
            </div>
            <div>
                <label htmlFor="taxable-income">What is your Taxable Income? R</label>
                <input
                  className={styles.input_gap}
                  type="number"
                  id={styles.taxable_income}
                  value={taxableIncome}
                  onChange={(e) => setTaxableIncome(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="medical-aid-expenses">How much did you spend on Medical Aid? R</label>
                <input
                  className={styles.input_gap}
                  type="number"
                  id={styles.medical_aid_expenses}
                  value={medicalAidExpenses}
                  onChange={(e) => setMedicalAidExpenses(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="dependents">How many dependents are on your Medical Aid certificate? (including you)</label>
                <input
                  className={styles.input_gap}
                  type="number"
                  id={styles.dependents}
                  value={numberOfDependents}
                  onChange={(e) => setNumberOfDependents(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="qualifying-medical-expenses">
                  How much did you spend on qualifying Medical Expenses that was

                </label>
                <input
                  className={styles.input_gap}
                  type="number"
                  id={styles.qualifying_medical_expenses}
                  value={qualifyingMedicalExpenses}
                  onChange={(e) => setQualifyingMedicalExpenses(Number(e.target.value))}
                />
            </div>
            
          </div>
          <div style={{ position: 'relative' }}>
              <button style={{ position: 'absolute',right: '0', marginTop:"28px"}} onClick={calculateMedicalCredits}>Calculate</button>
            </div>
        </div>
      </div>

      
      <div className={styles.results}>
      <div>
        <p> <strong>Total medical credit:</strong>  </p>
        <p style={{fontSize:"30px",fontWeight:"600"}}>R{totalTaxCredit.toFixed(2)}*</p>
        <p>* limited to tax already paid to SARS</p>
      </div>

      <div>
        <p><strong>This is how you work it out:</strong></p>
        
        <h3>Medical credits</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {medicalCredits.map((credit, index) => (
              <tr key={index}>
                <td>{new Date(taxYear, index).toLocaleString('default', { month: 'short' })}</td>
                <td>R{credit.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Medical scheme credits (section 6A): R{medicalSchemeCredits.toFixed(2)}</h3>
      </div>

      <div>
        <h3>Qualifying medical expenditure (section 6B): R{qualifyingMedicalExpenses.toFixed(2)}</h3>
      </div>
      </div>
    </div>
  );
};

export default AidkidPage;