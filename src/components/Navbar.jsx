import { useRef } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
	const childRef = useRef();
	return(
		<div>
			<div className="flex items-center justify-between h-3/4 px-5 py-6 bg-[#037aff]">
				<button onClick={() => childRef.current.show()}>
					HAM
				</button>
				<div className="text-white font-bold text-5xl">
					EXAMKIT
				</div>
				<div>
					ACC
				</div>
			</div>
			<Sidebar ref={childRef} />
		</div>
	)
}

export default Navbar;