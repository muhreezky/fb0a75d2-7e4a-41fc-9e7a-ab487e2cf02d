import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
}

export default function Input({ label, ...props }: InputProps) {
	return (
		<div className="flex flex-col gap-2">
			<div className="font-bold">
				{label}
			</div>
			<input {...props} />
		</div>
	)
}