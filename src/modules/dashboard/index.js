import React from "react";
import Calculator from "./calculator";

const DashboardComponent = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full  bg-blue-100 ">
			<div className="w-full overflow-auto flex flex-col gap-21.25 p-5per">
				<div className="flex w-full h-25  justify-center items-center">
					<span className="flex font-IBMPlexMonoRegular font-semibold text-green-50 text-ft3">
						SPLT
						<br /> TTER
					</span>
				</div>
				<div className="flex w-full justify-center items-center">
					<Calculator />
				</div>
			</div>
		</div>
	);
};

export default DashboardComponent;
