import React, { useState } from 'react';
import { BsCurrencyPound } from 'react-icons/bs';
// import FormInput from './FormInput';

const Form = () => {
	const [homeValue, setHomeValue] = useState('');
	const [downPayment, setDownPayment] = useState('');
	const [loanAmount, setLoanAmount] = useState('');
	const [interestRate, setInterestRate] = useState('');
	const [loanDuration, setLoanDuration] = useState('');
	const [monthlyPayment, setMonthlyPayment] = useState(0);

	function calculateLoanAmount() {
		setLoanAmount(homeValue - downPayment);
		return loanAmount;
	}

	function calculateMonthlyPayment() {
		// Percentage conversion
		function percentageToDecimal(percent) {
			return percent / 12 / 100;
		}

		// years to month conversion
		function yearsToMonths(year) {
			return year * 12;
		}

		setMonthlyPayment(
			(percentageToDecimal(interestRate) * loanAmount) /
				(1 -
					Math.pow(
						1 + percentageToDecimal(interestRate),
						-yearsToMonths(loanDuration)
					))
		);

		return monthlyPayment;
	}
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className='grid grid-cols-4 grid-rows-6 gap-1 sm:grid-cols-2'>
				<div className='flex items-center justify-end col-span-2 my-1'>
					<h3 className='my-1 mr-5 text-xl text-right text-gray-900'>
						Approx Property Value :
					</h3>
				</div>
				<div className='flex items-center justify-start col-span-2'>
					<span className='mr-1'>
						<BsCurrencyPound />
					</span>
					<input
						type='text'
						className='px-1 py-1 pl-2 mr-2 text-xl border rounded-md'
						placeholder='0'
						value={homeValue}
						onInput={(e) => setHomeValue(e.target.value)}
						onKeyUp={calculateLoanAmount}
					/>
				</div>
				<div className='flex items-center justify-end col-span-2 my-1'>
					<h3 className='mr-5 text-xl text-right text-gray-900'>
						Your Deposit :
					</h3>
				</div>
				<div className='flex items-center justify-start col-span-2'>
					<span className='mr-1'>
						<BsCurrencyPound />
					</span>
					<input
						type='text'
						className='px-1 py-1 pl-2 mr-2 text-xl border rounded-md w-50'
						placeholder='0'
						value={downPayment}
						onInput={(e) => setDownPayment(e.target.value)}
						onKeyUp={calculateLoanAmount}
					/>
				</div>
				<div className='flex items-center justify-end col-span-2 my-1'>
					<h3 className='mr-5 text-2xl text-right text-gray-900'>
						Mortgage Amount :
					</h3>
				</div>
				<div className='flex items-center justify-start col-span-2'>
					<span className='mr-1'>
						<BsCurrencyPound className='text-2xl' />
					</span>
					<div className='px-1 py-1 pl-2 text-2xl'>{loanAmount}</div>
				</div>
				<div className='flex items-center justify-end col-span-1 my-1'>
					<h3 className='my-2 text-xl text-right text-gray-900'>
						Interest Rate :
					</h3>
				</div>
				<div className='flex items-center justify-start col-span-1 ml-3'>
					<input
						type='text'
						className='w-16 px-1 py-1 pl-2 border rounded-md text-l'
						placeholder='%'
						value={interestRate}
						onInput={(e) => setInterestRate(e.target.value)}
					/>
				</div>
				<div className='flex items-center justify-end col-span-1 my-1'>
					<h3 className='my-2 text-xl text-right text-gray-900'>Term :</h3>
				</div>
				<div className='flex items-center justify-start col-span-1 ml-3'>
					<input
						type='text'
						className='w-16 px-1 py-1 pl-2 border rounded-md text-l'
						placeholder='YY'
						value={loanDuration}
						onInput={(e) => setLoanDuration(e.target.value)}
					/>
				</div>
				<div className='flex justify-center col-span-4 my-1 '>
					<button
						type='submit'
						onClick={calculateMonthlyPayment}
						className='px-4 py-2 mx-6 my-6 font-bold text-white bg-blue-500 rounded w-60 hover:bg-blue-700 active:bg-blue-900'
					>
						Calculate
					</button>
				</div>
				<div className='flex items-center justify-center col-span-4'>
					<h4 className='flex items-center text-2xl text-gray-900'>
						Monthly Payment:
						<span className='ml-2'>
							<BsCurrencyPound className='text-2xl' />
						</span>
						<span className='ml-2'>
							{parseFloat(monthlyPayment.toFixed(2))}
						</span>
					</h4>
				</div>
			</div>
		</form>
	);
};
export default Form;
