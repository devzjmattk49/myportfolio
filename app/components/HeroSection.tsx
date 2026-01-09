'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden py-20 sm:py-32">
			{/* Gradient background elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center space-y-6">
					<div className="mb-8">
						<div className="inline-block">
							<Image 
								src="/codechefp3.png" 
								alt="Dion's Profile Picture" 
								width={140} 
								height={140} 
								className="rounded-full mx-auto border-4 border-blue-500 shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform duration-300"
							/>
						</div>
					</div>
					
					<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
							Dion J MAtthew K
						</h1>
						
						<p className="text-xl sm:text-2xl font-semibold text-blue-300">
							Independent Designer & Developer
						</p>
						
						<p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
							<i>I craft exceptional and accessible digital experiences for the web. 
							Focusing on elegant solutions to complex challenges with beautiful design and functionality.</i>
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
						<a href="#projects" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105">
							View My Work
						</a>
						<a href="#contact" className="px-8 py-3 border-2 border-cyan-400 text-cyan-300 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
							Get In Touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
