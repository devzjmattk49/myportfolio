export default function SkillsSection() {
	const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js','Typescript','Python/Java','C/C++','SQL','Git','Ps/Ai/Figma/Canva','3ds Max/Blender'];

	return (
		<section id="skills" className="relative py-20 sm:py-32 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
						Skills & Technologies
					</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4"></div>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
					{skills.map((skill, index) => (
						<div
							key={skill}
							className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-cyan-400 cursor-pointer"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-xl transition-all duration-300"></div>
							<p className="relative text-center text-sm sm:text-base font-semibold text-cyan-100 group-hover:text-cyan-300 transition-colors">
								{skill}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

