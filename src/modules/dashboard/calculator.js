import React, { useEffect, useState } from "react";
import personIcon from "../../assets/images/person-icon.svg";

const Calculator = () => {
	const initialState = {
		bill: 0,
		people: "",
		tip: 0,
		customTip: 0,
		tipPerPerson: 0,
		totalPerPerson: 0,
	};

	const [state, setState] = useState(initialState);
	const [isFocused, setIsFocused] = useState(false);
	const [isValidPeopleInput, setIsValidPeopleInput] = useState(true);

	const calculateAmount = () => {
		const { bill, people } = state;
		const tip = state?.tip || state?.customTip;
		const parsedBill = parseFloat(bill);
		const parsedTip = parseFloat(tip);

		if (!isNaN(parsedBill) && !isNaN(parsedTip) && people > 0) {
			const tipAmount = parsedBill * (parsedTip / 100);
			const totalAmount = parsedBill + tipAmount;
			const tipPerPerson = tipAmount / people;
			const totalPerPerson = totalAmount / people;
			setState((prev) => ({ ...prev, tipPerPerson, totalPerPerson }));
		} else {
			setState((prev) => ({ ...prev, tipPerPerson: 0, totalPerPerson: 0 }));
		}
	};

	const handlePeopleChange = (e) => {
		const inputValue = parseFloat(e.target.value);
		const isValidInput = /^[1-9]\d*$/.test(inputValue);

		setState((prev) => ({
			...prev,
			people: isNaN(inputValue) ? 0 : inputValue,
		}));
		if (!isValidInput) {
			setIsValidPeopleInput(false);
		} else {
			setIsValidPeopleInput(true);
		}
	};

	const resetState = () => {
		setState({ ...initialState, people: "" });
	};

	useEffect(() => {
		if (state?.bill && (state?.tip || state?.customTip) && state?.people) {
			calculateAmount();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.bill, state.tip, state.people, state?.customTip]);

	return (
		<div className="flex w-full xs:flex-col lg:flex-row bg-white px-10 py-10 lg:py-21 lg:px-15.75 rounded-15 justify-between gap-15.75">
			<div className="flex flex-col w-full lg:w-1/2 gap-10 justify-between py-2 pl-2 lg:pr-10">
				<div className="flex flex-col w-full gap-4">
					<span className="font-IBMPlexMonoMedium text-ft2 text-grey-100">
						Bill
					</span>
					<div className="flex h-13.75 bg-grey-10 rounded-10 p-4.25 focus-within:outline focus-within:outline-green-30">
						<span className="text-ft4 text-green-10 font-IBMPlexMonoRegular font-semibold ">
							$
						</span>
						<input
							type="text"
							value={state.bill === 0 ? "" : state.bill}
							onChange={(e) => {
								const billValue = e.target.value;
								const isValidDecimal = /^\d*\.?\d*$/.test(billValue);
								if (isValidDecimal || billValue === "") {
									setState((prev) => ({
										...prev,
										bill: billValue,
									}));
								}
							}}
							placeholder="0"
							className="w-full h-full bg-grey-10 text-end text-ft4 text-green-100 font-IBMPlexMonoRegular font-semibold outline-none placeholder:text-ft4 placeholder:font-IBMPlexMonoMedium placeholder:font-semibold"
						/>
					</div>
				</div>
				<span className="font-IBMPlexMonoRegular font-semibold text-ft2 text-grey-100">
					Select Tip %
				</span>
				<div className="gap-5 grid grid-cols-3 ">
					{[5, 10, 15, 25, 50].map((percentage) => (
						<span
							key={percentage}
							onClick={() => {
								setIsFocused(false);
								setState((prev) => ({
									...prev,
									tip: percentage,
									customTip: 0,
								}));
							}}
							className={`flex justify-center items-center w-full h-13 text-ft5 font-IBMPlexMonoRegular font-semibold rounded-10 cursor-pointer ${
								state.tip === percentage
									? "bg-green-20 text-green-100"
									: "bg-green-100 text-white"
							}`}
						>
							{percentage}%
						</span>
					))}
					<div className="flex w-full h-13 justify-center items-center bg-grey-10 rounded-10 p-4 focus-within:outline focus-within:outline-green-30 gap-1">
						<input
							type="text"
							placeholder="Custom"
							value={state.customTip === 0 ? "" : state.customTip}
							onChange={(e) => {
								const customTipValue = parseFloat(e.target.value);
								setState((prev) => ({
									...prev,
									customTip: isNaN(customTipValue) ? 0 : customTipValue,
									tip: 0,
								}));
							}}
							className="w-full h-full bg-grey-10 text-end text-ft5 text-green-100 font-IBMPlexMonoRegular font-semibold outline-none placeholder:text-ft5 placeholder:font-IBMPlexMonoMedium placeholder:font-semibold placeholder:text-green-100 placeholder:text-center"
						/>
						{isFocused && (
							<span className="text-ft5 text-green-100 font-IBMPlexMonoRegular font-semibold ">
								%
							</span>
						)}
					</div>
				</div>
				<div className="flex flex-col  gap-4">
					<div className="flex w-full justify-between items-center">
						<span className="font-IBMPlexMonoRegular font-semibold text-ft2 text-grey-100">
							Number of People
						</span>
						{!isValidPeopleInput && state.people !== "" && (
							<span className="text-red-50 text-ft2 font-IBMPlexMonoRegular font-semibold">
								Can't be zero
							</span>
						)}
					</div>
					<div
						className={`flex h-13.75 bg-grey-10 rounded-10 p-4.25 ${
							!isValidPeopleInput && state.people !== ""
								? "focus-within:outline focus-within:outline-red-50"
								: "focus-within:outline focus-within:outline-green-30"
						}`}
					>
						<div className="flex w-6 h-6 justify-center items-center">
							<img src={personIcon} alt="person-icon" className="w-4 h-5.25" />
						</div>
						<input
							type="text"
							value={state?.people}
							onChange={handlePeopleChange}
							placeholder="0"
							className="w-full h-full bg-grey-10 text-end text-ft4 text-green-100 font-IBMPlexMonoRegular font-semibold outline-none placeholder:text-ft4 placeholder:font-IBMPlexMonoMedium placeholder:font-semibold"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full lg:w-1/2  bg-green-100 rounded-15 p-6 xl:p-14.25 justify-between gap-16">
				<div className="flex flex-col w-full gap-17.5">
					<div className="flex gap-4">
						<div className="flex flex-col w-full">
							<span className="w-full text-ft2 text-white font-IBMPlexMonoMedium">
								Tip amount
							</span>
							<span className="w-full text-ft1 text-green-40 font-IBMPlexMonoMedium">
								/Person
							</span>
						</div>
						<span className="text-ft6 text-green-60 font-IBMPlexMonoRegular font-bold">
							$
							<span className="text-ft7">
								{isNaN(state?.tipPerPerson)
									? "0.00"
									: state?.tipPerPerson.toFixed(2)}
							</span>
						</span>
					</div>
					<div className="flex gap-4">
						<div className="flex flex-col w-full">
							<span className="w-full text-ft2 text-white font-IBMPlexMonoMedium">
								Total
							</span>
							<span className="w-full text-ft1 text-green-40 font-IBMPlexMonoMedium">
								/Person
							</span>
						</div>
						<span className="text-ft6 text-green-60 font-IBMPlexMonoRegular font-bold">
							$
							<span className="text-ft7">
								{isNaN(state?.totalPerPerson)
									? "0.00"
									: state?.totalPerPerson.toFixed(2)}
							</span>
						</span>
					</div>
				</div>
				<button
					onClick={resetState}
					className="w-full h-13.75 bg-green-70 rounded-10 text-ft5 font-IBMPlexMonoBold font-bold text-green-80"
				>
					RESET
				</button>
			</div>
		</div>
	);
};

export default Calculator;
