export default function Quote({ children }: { children: React.ReactNode; }) {
	return (
		<div className="p-16 text-right">
			<h2 className="text-5xl font-semibold text-slate-700">
				{children}
			</h2>
		</div>
	);
}
