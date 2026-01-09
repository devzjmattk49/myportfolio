import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
		{
			title: 'Project Alpha - UI Design System',
			description: 'Complete UI/UX design system featuring reusable components, typography scales, and color palettes. Built with Figma wireframes and responsive design principles for modern web applications.'
		},
		{
			title: 'Project Beta - E-Commerce Frontend',
			description: 'Fully responsive e-commerce website frontend with product carousel, image galleries, and smooth animations. Features shopping cart interface, product filters, and checkout flow design.'
		},
		{
			title: 'Project Gamma - Mobile App Prototype',
			description: 'Mobile-first app interface design featuring intuitive navigation, gesture controls, and interactive wireframes. Includes onboarding flows, user dashboards, and micro-interactions.'
		},
		{
			title: 'Project Delta - Digital Brochure/Portfolio',
			description: 'Interactive digital brochure and portfolio website with smooth scrolling, image carousels, and modern animations. Showcases services, testimonials, and call-to-action sections.'
		}
	];

	return (
		<section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
					Featured Projects
				</h2>
				<div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mt-4"></div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<div 
							key={index} 
							className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border border-slate-700 hover:border-emerald-500 bg-gradient-to-br from-slate-800 to-slate-900"
						>
							{/* Image container */}
							<div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
								<Image 
									src={'/code.jpg'} 
									alt={project.title} 
									fill 
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>

							{/* Content */}
							<div className="p-5 sm:p-6 relative z-10">
								<h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
									{project.title}
								</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
									{project.description}
								</p>
								<div className="flex gap-4">
									<a 
										href="#" 
										className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 text-sm sm:text-base"
									>
										View Project →
									</a>
									<a 
										href="#" 
										className="inline-flex items-center gap-2 px-4 py-2 border border-teal-400 text-teal-300 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-300 text-sm sm:text-base"
									>
										Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
